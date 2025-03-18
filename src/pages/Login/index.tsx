/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/api';
import { LoginContainer, Form, Input, Button, LinksContainer, StyledLink } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.access_token);
      navigate('/cadastro-ideia');
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button>Entrar</Button>
      </Form>
      <LinksContainer>
        <StyledLink onClick={() => navigate('/cadastro')}>Cadastre-se</StyledLink>
        <StyledLink onClick={() => alert('Funcionalidade em desenvolvimento')}>Esqueceu sua senha?</StyledLink>
      </LinksContainer>
    </LoginContainer>
  );
}
