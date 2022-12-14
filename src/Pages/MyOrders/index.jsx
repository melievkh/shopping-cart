import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../../components/Heading";
import Navbar from "../../components/Layout/Navbar";
import { getMyOrders } from "../../store/order/actions";
import { getHour } from "../../utils/dateUtils";
import { Wrapper, Container } from "./style";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.myOrders);

  useEffect(() => {
    function dispatchOrders() {
      dispatch(getMyOrders());
    }
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
                <td>{prod.totalPrice} so'm</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Wrapper>
  );
};

export default MyOrders;
