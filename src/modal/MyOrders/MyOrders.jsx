import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Heading/Heading';
import { getMyOrders } from '../../store/order/actions';
import Wrapper from './MyOrders.style';

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  return (
    <Wrapper>
      <Heading>Mening Buyurtmalarim</Heading>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Soni</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((prod, index) => (
            <tr key={prod.id}>
              <td>{index + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default MyOrders;
