import { useNavigate } from 'react-router-dom';
import { HomeContainer, Button, ContentBox } from './styles';
import logo from '../../assets/logosn.png';
import { useAuth } from '../../contexts/AuthContext';

export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/cadastro-ideia');
    } else {
      navigate('/login');
    }
  };

  return (
    <HomeContainer>
      <ContentBox>
        <h1>Bem-vindo ao Idealize!</h1>
        <img src={logo} alt="" />
        <p>
          No Idealize, acreditamos que grandes mudanças nascem de pequenas
          ideias. Este é o espaço para compartilhar iniciativas que possam
          transformar a sociedade. Com o apoio do Rotaract e de uma comunidade
          engajada, sua ideia pode ganhar vida!
        </p>
        <Button onClick={handleClick}>
          Deixe sua Ideia
        </Button>
      </ContentBox>
    </HomeContainer>
  );
}
