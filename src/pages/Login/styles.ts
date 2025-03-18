import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005f8f;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 20px;
`;

export const StyledLink = styled.button`
  background: none;
  border: none;
  color: #0077b6;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
