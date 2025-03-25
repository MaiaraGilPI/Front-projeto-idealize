import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #0077b6; */
  background: linear-gradient(135deg, #003f88, #0077b6);
  border-bottom: #003f88 2px solid;
  color: white;
  padding: 16px;
`;

export const NavLinks = styled.div`
  /* color: black; */
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
