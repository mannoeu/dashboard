export const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
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
