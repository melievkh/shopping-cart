import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import orderApi from "../../api/orderApi";
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from "../../store/product/actions";
import Button from "../Button/Button";
import Flexbox from "../Flexbox/Flexbox";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import {
  AmountDisplayer,
  BasketWrapper,
  ButtonsContainer,
  CardMedia,
  Cards,
  Dropdown,
  DropdownContent,
  Image,
  OrderButton,
  ProductsList,
  Wrapper,
} from "./Basket.style";

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.product.products);
  const sum = useSelector((state) => state.product.sum);
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const theme = useSelector((state) => state.theme);
  const [orders, setOrders] = useState({});

  const selectedOrders = products.filter((product) => product.added === true);
  const selectedOrdersId = selectedOrders.map((order) => {
    return { amount: order.amount, product: order.id };
  });

  const amount = products
    .map((p) => p.amount)
    .reduce((prev, cur) => prev + cur, 0);

  useEffect(() => {
    setOrders({
      totalPrice: sum,
      user: user._id,
      products: selectedOrdersId,
    });
  }, [sum]);

  const createOrder = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      swal(
        "oops!",
        "Buyurtma berish uchun avval saytga kirishingiz kerak!",
        "error"
      );
      navigate("/login");
    } else {
      orderApi
        .createOrder(orders)
        .then((res) => res.data)
        .catch((err) => err.response.data);
      dispatch(getAllProducts());
      swal("", "Buyurtma muvafaqqiyatli yaratildi!", "success");
    }
  };

  return (
    <Wrapper>
      <Dropdown>
        <BasketWrapper>
          <FiShoppingCart />
          <Heading size="sm">savat</Heading>
          {amount === 0 ? "" : <AmountDisplayer>{amount}</AmountDisplayer>}
        </BasketWrapper>
        <DropdownContent>
          {sum === 0 ? "" : <Text align="end">Jami: {sum} so'm</Text>}
          <ProductsList>
            {products.map(
              (product) =>
                product.added && (
                  <Cards key={product.id}>
                    <CardMedia src={product.picture} />
                    <Flexbox alignItems="flex-start">
                      <Heading size="sm">{product.name}</Heading>
                      <ButtonsContainer row justifyContent="space-evenly">
                        <Button
                          width="35px"
                          onClick={() =>
                            dispatch(
                              decrementProductByOne(product.id, product.price)
                            )
                          }
                        >
                          -
                        </Button>
                        <Text>{product.amount}</Text>
                        <Button
                          width="35px"
                          onClick={() =>
                            dispatch(
                              incrementProductByOne(product.id, product.price)
                            )
                          }
                        >
                          +
                        </Button>
                        <Text>{product.price * product.amount} so'm</Text>
                      </ButtonsContainer>
                    </Flexbox>
                  </Cards>
                )
            )}
          </ProductsList>
          <OrderButton>
            {sum === 0 ? (
              <Flexbox>
                {theme === "light" ? (
                  <Image src="https://st3.depositphotos.com/1784264/12588/i/950/depositphotos_125880634-stock-photo-man-with-a-magnifying-glass.jpg" />
                ) : (
                  ""
                )}
                <Heading>Savatcha hozircha bo'sh!</Heading>
              </Flexbox>
            ) : (
              <Button justifyContent="space-evenly" onClick={createOrder}>
                Buyurtma
              </Button>
            )}
          </OrderButton>
        </DropdownContent>
      </Dropdown>
    </Wrapper>
  );
};

export default Basket;
