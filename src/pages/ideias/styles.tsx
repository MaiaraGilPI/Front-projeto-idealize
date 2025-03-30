import styled from 'styled-components';

export const IdeiasContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
  }
`;

export const IdeiaCard = styled.div`
  background: #f7f7f7;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IdeiaTitulo = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #005f8f;
  }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: #003f88;
  }
`;

export const DialogContent = styled.p`
  margin-bottom: 2rem;
  white-space: pre-wrap;
  text-align: left;
`;
