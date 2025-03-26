/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/api';
import { LoginContainer, Form, Input, Button, LinksContainer, StyledLink, LoginBox } from './styles';
import logo from '../../assets/logosn.png';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      login(response.data.access_token); // ✅ atualiza o contexto
      navigate('/'); // ✅ redireciona para home
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <img src={logo} alt="" />
        <h2>Entrar</h2>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Entrar</Button>
        </Form>
        <LinksContainer>
          <StyledLink onClick={() => navigate('/cadastro')}>Cadastre-se</StyledLink>
          <StyledLink onClick={() => navigate('/recuperar')}>Esqueceu sua senha?</StyledLink>
        </LinksContainer>
      </LoginBox>
    </LoginContainer>
  );
}
