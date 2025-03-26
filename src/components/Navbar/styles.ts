import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #003f88, #0077b6);
  border-bottom: #003f88 2px solid;
  color: white;
  padding: 16px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(Link)`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
