import { useAuth } from '../../contexts/AuthContext';
import { NavbarContainer, NavLinks, StyledLink, StyledButton } from './styles';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <NavbarContainer>
      <h1>{isAuthenticated ? user?.email : 'Plataforma de Ideias'}</h1>
      <NavLinks>
        {isAuthenticated ? (
          <StyledButton onClick={logout}>Sair</StyledButton>
        ) : (
          <>
            <StyledLink to="/">Início</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/cadastro">Cadastre-se</StyledLink>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  );
}
