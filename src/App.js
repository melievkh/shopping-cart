import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTES } from './routes/routes';
import { Login, Register, EditProducts, Orders, Products, Title } from './Pages';
import AdminRoutes from './components/PrivateRoute/AdminRoutes';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <Products />
      <Footer />
    </>
  );
}

function App() {
  const userRole = useSelector((state) => state.user.role);

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      {userRole === 'admin' && (
        <Route path={ROUTES.ADMIN} element={<AdminRoutes />}>
          <Route index element={<Orders />} />
          <Route path={ROUTES.EDIT_PRODUCTS} element={<EditProducts />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
