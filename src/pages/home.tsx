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
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name} - {user.email}</h3>
          <Link to={`/users/${user.id}`}>View Profile</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
