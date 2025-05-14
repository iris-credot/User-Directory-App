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
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Add New User</h2>

      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUser;
