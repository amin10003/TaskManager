import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    login(email);

    navigate("/checkout");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="border px-6 py-3 rounded-xl w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;