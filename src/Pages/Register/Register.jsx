import React, { useState } from "react";
import swal from "sweetalert";
import { Form, Wrapper } from "./Register.style";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import Text from "../../components/Text/Text";

const Register = () => {
  const navigate = useNavigate();

  const initialState = {
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .register(details)
      .then((res) => {
        swal("", res.data.message, "success");
        navigate("/login");
      })
      .catch((err) => swal("error", err.response.data.message, "error"));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading>
          <FiUserPlus /> Ro'yhatdan o'tish
        </Heading>
        <Input
          type="text"
          placeholder="Foydalanuvchi ismi"
          name="username"
          value={details.username}
          onChange={handleChange}
        />
        <Input
          type="tel"
          placeholder="Telefon raqam"
          name="phoneNumber"
          value={details.phoneNumber}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Parol"
          name="password"
          value={details.password}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Parolni qaytaring"
          name="confirmPassword"
          value={details.confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Akkount yaratish</Button>
        <Text size="sm">
          Akkountgiz allaqachon mavjudmi? <Link to="/login">Kirish</Link>
        </Text>
      </Form>
    </Wrapper>
  );
};

export default Register;
