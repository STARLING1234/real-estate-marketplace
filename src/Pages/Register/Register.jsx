import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { validateRegister } from "../../utils/validation";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(name, email, password);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          name,
          email,
        })
      );

      alert("Registration Successful!");

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({
          email: "This email is already registered.",
        });
      } else if (error.code === "auth/invalid-email") {
        setErrors({
          email: "Please enter a valid email address.",
        });
      } else if (error.code === "auth/weak-password") {
        setErrors({
          password: "Password must be at least 6 characters long.",
        });
      } else {
        setErrors({
          email: "Registration failed. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join HomeNest</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors({ ...errors, name: "" });
            }}
          />
          {errors.name && (
            <p className="error">{errors.name}</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
