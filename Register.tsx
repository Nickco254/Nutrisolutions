import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="p-6">
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="block border p-2 mb-2" />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="block border p-2 mb-2" />
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-1 rounded">Register</button>
    </div>
  );
}