import { useNavigate } from 'react-router-dom';
import { HomeContainer, Button } from './styles';
import { LightbulbFilament } from '@phosphor-icons/react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <h1>Bem-vindo à Plataforma de Ideias!</h1>
      <p>Compartilhe suas ideias e contribua com a comunidade.</p>
      <Button onClick={() => navigate('/cadastro-ideia')}>
        <LightbulbFilament size={20} weight="bold" /> Deixe sua Ideia
      </Button>
    </HomeContainer>
  );
}
