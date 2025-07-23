import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-50 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;