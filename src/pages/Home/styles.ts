import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #005f8f;
  }
`;
