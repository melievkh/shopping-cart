import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-height: 96vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bgColor};
  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export const Table = styled.table`
  width: 90%;
  height: auto;
  border-collapse: collapse;
  border-radius: 8px;
  background-color: ${COLORS.blue};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  th {
    padding: 0 10px;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid grey;
    color: #f3f3f3;
    background-color: ${COLORS.blue};
  }
  td {
    padding: 2px 10px;
    border: 1px solid grey;
    font-size: 14px;
    font-weight: 600;
  }
  tr {
    background-color: white;
    &:nth-child(even) {
      background-color: #f3f3f3;
    }
  }
`;
