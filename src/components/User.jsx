import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthentication";

function User() {
  const {user,logout} = useAuth();
  const navigate = useNavigate()

  function handleClick() {
    logout();
    navigate("/")
  }

  return (
    <div className="flex gap-6 bg-black rounded-2xl text-2xl h-20 p-4 w-80 absolute top-6 right-10">
      <span className="mt-2">Welcome, {user.name}</span>
      <button onClick={handleClick} className="bg-gray-600 p-2 rounded-full">Logout</button>
    </div>
  );
}

export default User;
