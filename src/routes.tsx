import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';
// import CadastroIdeia from './pages/CadastroIdeia';
import Navbar from './components/Navbar';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-ideia" element={<CadastroIdeia />} /> */}
      </Routes>
    </Router>
  );
}
