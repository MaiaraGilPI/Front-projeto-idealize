import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Recovery from './pages/Recovery';
// import CadastroIdeia from './pages/CadastroIdeia';
import Navbar from './components/Navbar';
import CadastroIdeia from './pages/ideia';
import Ideias from './pages/ideias';
import Dashboard from './pages/dashboard';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/recuperar" element={<Recovery />} />
        <Route path="/cadastro-ideia" element={<CadastroIdeia />} />
        <Route path="/ideias" element={<Ideias />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
