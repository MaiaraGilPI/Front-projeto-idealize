/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/api'; 
import {
  RegisterContainer,
  RegisterBox,
  Form,
  Input,
  Button,
  LinksContainer,
  StyledLink,
} from './styles';
import logo from '../../assets/logosn.png';

export default function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recuperacao, setRecuperacao] = useState('');
  const [dicaRecuperacao, setDicaRecuperacao] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('As senhas não coincidem.');
    }

    try {
      await axios.post('/users/register', {
        fullName: fullname,
        email,
        telefone,
        password,
        recuperacao,
        dica_recuperacao: dicaRecuperacao,
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <img src={logo} alt="Logo" />
        <h2>Cadastre-se</h2>
        <Form onSubmit={handleRegister}>
          <Input type="text" placeholder="Nome completo" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="text" placeholder="Telefone (opcional)" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Input type="text" placeholder="Palavra-chave de recuperação" value={recuperacao} onChange={(e) => setRecuperacao(e.target.value)} />
          <Input type="text" placeholder="Dica da palavra-chave" value={dicaRecuperacao} onChange={(e) => setDicaRecuperacao(e.target.value)} />
          <Button>Cadastrar</Button>
        </Form>
        <LinksContainer>
          <StyledLink onClick={() => navigate('/login')}>Já tem conta?</StyledLink>
        </LinksContainer>
      </RegisterBox>
    </RegisterContainer>
  );
}
