export const REGEX = {
  email: /\S+@\S+\.\S+/,
};

export const validateField = (str = "", key) => {
  let error = "";
  let valid = true;

  if (!str.trim()) {
    error = "Required field";
    valid = false;
  } else if (key === "email" && !REGEX.email.test(str)) {
    error = "Invalid email";
    valid = false;
  }
  return { valid, error };
};
