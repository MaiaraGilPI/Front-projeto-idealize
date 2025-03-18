// import { Link } from 'react-router-dom';
import { NavbarContainer, NavLinks, StyledLink } from './styles';

export default function Navbar() {
  return (
    <NavbarContainer>
      <h1>Plataforma de Ideias</h1>
      <NavLinks>
        <StyledLink to="/">Início</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/cadastro">Cadastre-se</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
}
