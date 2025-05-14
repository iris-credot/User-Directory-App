import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import type { User } from "../types/user";
import { UserContext } from "../context/userContext";

const Home = () => {
  const [apiUsers, setApiUsers] = useState<User[]>([]);
  const { state } = useContext(UserContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setApiUsers);
  }, []);

  const users = [...apiUsers, ...state.users];

  return (
    <div className="w-full min-h-screen bg-slate-200 flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">User List</h1>
        <p className="mb-6 text-center">
          <Link
            to="/add-user"
            className="text-blue-600 hover:underline font-medium"
          >
            + Add User
          </Link>
        </p>
        <div className="space-y-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white flex flex-col justify-center items-center "
            >
              <h3 className="text-xl font-semibold text-gray-700 flex space-x-5 justify-center items-center">
              
                <span> {user.name}</span>
                 <span className="text-sm text-gray-500 ">({user.email})</span>
              </h3>
              <Link
                to={`/users/${user.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
