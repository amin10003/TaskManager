import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;