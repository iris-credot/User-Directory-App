import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useUserForm } from "../hooks/userForm";

const AddUser = () => {
  const { dispatch } = useContext(UserContext);
  const { form, errors, handleChange, validate } = useUserForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: form.name,
      email: form.email,
      age: Number(form.age),
    };

    dispatch({ type: "ADD_USER", payload: newUser });
    alert("User added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      {errors.name && <p>{errors.name}</p>}

      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      {errors.age && <p>{errors.age}</p>}

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
