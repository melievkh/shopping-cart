import React, { useState } from 'react';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Form, Wrapper } from './Login.style';
import login from '../../store/user/actions';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [details, setDetails] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(details));
    swal('', 'Saytga muvafaqqiyatli kirildi!', 'success');
    navigate('/');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading>
          <FaUserAlt /> Saytga kirish
        </Heading>
        <Input
          type="tel"
          placeholder="Telefon raqam"
          name="phoneNumber"
          value={details.phoneNumber}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          placeholder="Parol"
          name="password"
          value={details.password}
          onChange={handleChange}
          required
        />
        <Button>
          Kirish <AiOutlineArrowRight />
        </Button>
        <Text size="sm">
          Ro'yhatdan o'tmaganmisiz?
          <Link to="/register"> Ro'yhatdan o'tish</Link>
        </Text>
      </Form>
    </Wrapper>
  );
};

export default Login;
