import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from '../../../store/product/actions';
import Button from '../../Button/Button';
import FlexBox from '../../Flexbox/FlexBox';
import Heading from '../../Heading/Heading';
import Text from '../../Text/Text';
import {
  Card,
  CardContainer,
  CardDetails,
  CardMedia,
  Wrapper,
} from './Products.style';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const fetchAllProducts = async () => {
    await dispatch(getAllProducts());
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Wrapper id="products">
      <Heading size="lg">
        Milliy <span>Taomlar</span>
      </Heading>
      <CardContainer>
        {products?.map((product) => (
          <Card key={product.id}>
            <CardMedia>
              <img src={product.picture} alt="Loading..." />
            </CardMedia>
            <CardDetails>
              <Heading align="start">{product.name}</Heading>
              <Text align="start">{product.description}</Text>
              <FlexBox row justifyContent="space-between">
                <Heading>{product.price} so'm</Heading>
                {product.amount === 0 ? (
                  <Button
                    wd="120px"
                    onClick={() =>
                      dispatch(incrementProductByOne(product.id, product.price))
                    }
                  >
                    Qo'shish
                  </Button>
                ) : (
                  <FlexBox row gap="4px">
                    <Button
                      wd="35px"
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
                      wd="35px"
                      onClick={() =>
                        dispatch(
                          incrementProductByOne(product.id, product.price)
                        )
                      }
                    >
                      +
                    </Button>
                  </FlexBox>
                )}
              </FlexBox>
            </CardDetails>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Products;
