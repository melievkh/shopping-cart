import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from './Routes';
import {
  EditProductsPage,
  HomePage,
  LoginPage,
  MyOrdersPage,
  OrdersPage,
  RegisterPage,
} from '../pages';
import AdminLayout from '../components/AdminComponents/AdminLayout';

function Router() {
  const userRole = useSelector((state) => state.user.role);

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MY_ORDERS} element={<MyOrdersPage />} />

      {userRole === 'admin' && (
        <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
          <Route index element={<OrdersPage />} />
          <Route path={ROUTES.EDIT_PRODUCTS} element={<EditProductsPage />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
