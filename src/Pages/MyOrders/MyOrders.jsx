import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import Footer from '../../components/Layout/Footer/Footer';
import Navbar from '../../components/Layout/Navbar/Navbar';
import { getMyOrders } from '../../store/order/actions';
import { getHour } from '../../utils/dateUtils';
import { Wrapper, Container } from './MyOrders.style';

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.myOrders);

  const dispatchOrders = () => {
    dispatch(getMyOrders());
  };

  useEffect(() => {
    dispatchOrders();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Heading>Mening Buyurtmalarim</Heading>
        <table>
          <thead>
            <tr>
              <th>Sana</th>
              <th>Nomi</th>
              <th>Ma'lumotlar</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((prod, index) => (
              <tr key={prod._id}>
                <td>{getHour(prod.createdAt)}</td>
                <td>{prod.totalPrice}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MyOrders;
