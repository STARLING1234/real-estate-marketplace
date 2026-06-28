export const validateRegister = (name, email, password) => {
  const errors = {};

  // Full Name Validation
  if (!name.trim()) {
    errors.name = "Please enter your full name.";
  }

  // Email Validation
  if (!email.trim()) {
    errors.email = "Please enter your email address.";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  // Password Validation
  if (!password.trim()) {
    errors.password = "Please enter your password.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};

export const validateLogin = (email, password) => {
  const errors = {};

  // Email Validation
  if (!email.trim()) {
    errors.email = "Please enter your email address.";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  // Password Validation
  if (!password.trim()) {
    errors.password = "Please enter your password.";
  }

  return errors;
};