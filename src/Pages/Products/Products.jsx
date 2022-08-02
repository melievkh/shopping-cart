import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardDetails, CardMedia, Wrapper } from './Products.style';
import {
  decrementProductByOne,
  getAllProducts,
  incrementProductByOne,
} from '../../store/product/actions';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/Button/Button';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Wrapper>
      {products?.map((product) => (
        <Card key={product.id}>
          <CardMedia src={product.picture} alt="Loading..." />
          <CardDetails>
            <Heading size="md" align="start">
              {product.name}
            </Heading>
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
                      dispatch(decrementProductByOne(product.id, product.price))
                    }
                  >
                    -
                  </Button>
                  <Text>{product.amount}</Text>
                  <Button
                    wd="35px"
                    onClick={() =>
                      dispatch(incrementProductByOne(product.id, product.price))
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
    </Wrapper>
  );
};

export default Products;
