import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../../Pages/Dashboard/Sidebar/Sidebar';

const Wrapper = styled.div`
  width: 1250px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`;

const AdminRoutes = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default AdminRoutes;
