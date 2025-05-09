import { useState } from "react";


export const useUserForm = () => {
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({ name: "", email: "", age: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", age: "" };

    if (!form.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    if (Number(form.age) < 18) {
      newErrors.age = "Age must be 18+";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return { form, errors, handleChange, validate };
};
