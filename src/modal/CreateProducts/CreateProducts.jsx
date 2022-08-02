import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import productApi from '../../api/productApi';
import { getAllProducts } from '../../store/product/actions';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Form } from './CreateProducts.style';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';

const CreateProducts = ({ product, modal }) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.createProduct(values).then((res) => {
      dispatch(getAllProducts());
      swal('', 'Mahsulot yaratildi!', 'success');
      modal.close();
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FlexBox row gap="4px">
        <AiOutlinePlusCircle /> <Heading>Mahsulotni yaratish</Heading>
      </FlexBox>
      <Input
        type="text"
        placeholder="Nomi"
        name="name"
        autoComplete="off"
        required
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Narxi"
        name="price"
        autoComplete="off"
        required
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Surat uchun link"
        name="picture"
        autoComplete="off"
        required
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Tasvir"
        name="description"
        autoComplete="off"
        required
        onChange={handleChange}
      />
      <Button type="submit">Yaratish</Button>
    </Form>
  );
};

export default CreateProducts;
