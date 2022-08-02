import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHour } from '../../../utils/dateUtils';
import { getAllOrders } from '../../../store/order/actions';
import Heading from '../../../components/Heading/Heading';
import { Table, Wrapper } from './Order.style';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  if (!orders) return <Heading>Loading..</Heading>;

  const getOrderAsString = (products) => {
    return products.map(
      (product) => `${product.amount}ta ${product.product.name}, `
    );
  };

  return (
    <Wrapper>
      <Heading size="md" margin="30px">
        Buyurtmalar ro'yxati
      </Heading>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Ismi</th>
            <th>Telefon</th>
            <th>Narxi</th>
            <th>Vaqti</th>
            <th>Ma'lumotlar</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map(
              ({ user, products, createdAt, totalPrice, _id }, index) => (
                <tr key={_id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{totalPrice}</td>
                  <td>{getHour(createdAt)}</td>
                  <td>{getOrderAsString(products)}</td>
                </tr>
              )
            )}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default Orders;
