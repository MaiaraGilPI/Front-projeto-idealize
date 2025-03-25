import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContentBox = styled.div`
  background-color: white;
  padding: 6rem;
  border-radius: 16px;
  max-width: 1100px;
  width: 100%;
  max-height: 640px;
  height: 100%;
  margin-top: -6rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;

  img {
    width: 300px;
    margin: 16px 0;
    /* box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 50%; */
  }

  h1 {
    margin-top: -2rem;
    font-size: 2.8rem;
    color: #000055;
    font-style: bold;
  }

  p {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: #000055;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005f8f;
  }
`;
