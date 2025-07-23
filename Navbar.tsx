import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { auth } from '../firebase';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold text-green-600">NickAI</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/chat">Chatbot</Link>
        {user ? (
          <button onClick={() => auth.signOut()}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}