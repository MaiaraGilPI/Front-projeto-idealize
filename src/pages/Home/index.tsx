import { useNavigate } from 'react-router-dom';
import { HomeContainer, Button, ContentBox } from './styles';
import logo from '../../assets/logosn.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <ContentBox>
        <h1>Bem-vindo ao Idealize!</h1>
        <img src={logo} alt="" />
        <p>No Idealize, acreditamos que grandes mudanças nascem de pequenas ideias. Este é o espaço para compartilhar iniciativas que possam transformar a sociedade. Com o apoio do Rotaract e de uma comunidade engajada, sua ideia pode ganhar vida!</p>
        <Button onClick={() => navigate('/cadastro-ideia')}>
          Deixe sua Ideia
        </Button>
      </ContentBox>
    </HomeContainer>
  );
}
