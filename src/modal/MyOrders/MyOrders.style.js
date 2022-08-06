import styled from 'styled-components';
import colors from '../../styles/color/colors';

const Wrapper = styled.div`
  width: 480px;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  padding: 20px 20px;
  table {
    width: 100%;
    height: auto;
    border-collapse: collapse;
    border-radius: 8px;
    background-color: ${colors.blue};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    th {
      padding: 0 10px;
      height: 30px;
      font-weight: 700;
      font-size: 16px;
      border: 1px solid grey;
      color: #f3f3f3;
      background-color: ${colors.blue};
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
  }
`;

export default Wrapper;
