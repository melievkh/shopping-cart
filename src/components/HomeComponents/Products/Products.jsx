import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementProductByOne,
  incrementProductByOne,
} from '../../../store/product/actions';
import Button from '../../Button/Button';
import Flexbox from '../../Flexbox/Flexbox';
import Heading from '../../Heading/Heading';
import Text from '../../Text/Text';
import {
  Card,
  CardContainer,
  CardDetails,
  CardMedia,
  Wrapper,
} from './Products.style';

const Products = ({ title, products }, {inputText}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Heading size="lg">
        {title || (
          <>
            Milliy <span>Taomlar</span>
          </>
        )}
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
              <Flexbox row justifyContent="space-between">
                <Heading>{product.price} so'm</Heading>
                {product.amount === 0 ? (
                  <Button
                    width="120px"
                    onClick={() =>
                      dispatch(incrementProductByOne(product.id, product.price))
                    }
                  >
                    Qo'shish
                  </Button>
                ) : (
                  <Flexbox row gap="4px">
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
                  </Flexbox>
                )}
              </Flexbox>
            </CardDetails>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Products;
