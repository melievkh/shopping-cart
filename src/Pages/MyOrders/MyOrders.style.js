import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  table {
    width: 80%;
    height: auto;
    border-collapse: collapse;
    border-radius: 8px;
    background-color: ${COLORS.blue};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    th {
      padding: 0 10px;
      height: 30px;
      font-weight: 700;
      font-size: 16px;
      border: 1px solid grey;
      color: #f3f3f3;
      background-color: ${({ theme }) => theme.special};
    }

    td {
      height: fit-content;
      padding: 2px 10px;
      border: 1px solid grey;
      font-size: 14px;
      font-weight: 600;
    }

    tr {
      background-color: ${({ theme }) => theme.bgColor};
      color: ${({ theme }) => theme.heading};
    }
  }
`;
