import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RecoveryContainer,
  RecoveryBox,
  Form,
  Input,
  Button,
  Message,
} from './styles';
import logo from '../../assets/logosn.png';
import api from '../../services/api';

export default function Recovery() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [dica, setDica] = useState('');
  const [recuperacao, setRecuperacao] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  const buscarDica = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.get(`/users/recuperar/${email}`);
      setDica(response.data.dica_recuperacao);
      setStep(2);
    } catch {
      alert('E-mail não encontrado.');
    }
  };

  const validarChave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`/users/recuperar/validar/${email}`, {
        recuperacao,
      });
      setStep(3);
    } catch {
      alert('Palavra-chave incorreta.');
    }
  };

  const redefinirSenha = async (e: React.FormEvent) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    try {
      await api.patch(`/users/recuperar/${email}`, {
        recuperacao,
        novaSenha,
      });
      alert('Senha alterada com sucesso!');
      navigate('/');
    } catch {
      alert('Erro ao redefinir a senha.');
    }
  };

  return (
    <RecoveryContainer>
      <RecoveryBox>
        <img src={logo} alt="Logo" />
        <h2>Recuperar Senha</h2>

        {step === 1 && (
          <Form onSubmit={buscarDica}>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>Buscar dica</Button>
          </Form>
        )}

        {step === 2 && (
          <Form onSubmit={validarChave}>
            <Message>Dica: {dica}</Message>
            <Input
              type="text"
              placeholder="Palavra-chave de recuperação"
              value={recuperacao}
              onChange={(e) => setRecuperacao(e.target.value)}
            />
            <Button>Validar</Button>
          </Form>
        )}

        {step === 3 && (
          <Form onSubmit={redefinirSenha}>
            <Input
              type="password"
              placeholder="Nova senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirmar nova senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <Button>Redefinir senha</Button>
          </Form>
        )}
      </RecoveryBox>
    </RecoveryContainer>
  );
}
