import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.div`
  flex: 1;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #003f88;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

export const TableRow = styled.tr``;
export const TableCell = styled.td``;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 18px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background-color: #005f8f;
  }
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DashboardBox = styled.div`
  width: 100%;
  height: auto;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  color: black;
  .actions {
    text-align: center !important;
  }
`;