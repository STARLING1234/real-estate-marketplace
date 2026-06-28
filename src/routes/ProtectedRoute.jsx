import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/register" element={<Register />} />

  <Route path="/property/:id" element={<PropertyDetails />} />
</Routes>

