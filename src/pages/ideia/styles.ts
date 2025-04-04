import styled from 'styled-components';

export const CadastroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const CadastroBox = styled.div`
  background-color: white;
  padding: 4rem;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #000055;
  }

  img {
    width: 200px;
    margin-bottom: 2rem;
    margin-top: -2rem;
    margin-left: 1.4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  min-height: 120px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;

  label {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 14px;
  }
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
