import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "../types/user";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">User not found</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h1>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">City:</span> {user.address?.city}
      </p>
    </div>
  );
};

export default UserProfile;
