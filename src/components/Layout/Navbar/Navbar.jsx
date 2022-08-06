import React from 'react';
import swal from 'sweetalert';
import {
  Dropdown,
  DropdownContent,
  RegisterButton,
  Wrapper,
} from './Navbar.style';
import Basket from '../Basket/Basket';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import FlexBox from '../../Flexbox/FlexBox';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import Search from '../Search/Search';
import colors from '../../../styles/color/colors';
import Modal from '../../Modal/Modal';
import MyOrders from '../../../modal/MyOrders/MyOrders';
import useToggle from '../../../hooks/useToggle';

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const modal = useToggle();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
    swal('Saytdan chiqish muvafaqqiyatli bajarildi!');
  };

  return (
    <Wrapper>
      <Basket />
      <Search />
      {isLoggedIn ? (
        <FlexBox row gap="10px">
          <Dropdown>
            <TbUserCircle style={{ color: colors.blue }} />
            <DropdownContent>
              <li onClick={() => modal.open()}>buyurtmalar</li>
              <li onClick={() => logout()}>
                <FiLogOut />
                chiqish
              </li>
            </DropdownContent>
          </Dropdown>
          <Heading>{username}</Heading>
        </FlexBox>
      ) : (
        <FlexBox row gap="20px">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button>
              <FiLogIn /> Kirish
            </Button>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <RegisterButton>
              <FiUserPlus /> Ro'yhatdan o'tish
            </RegisterButton>
          </Link>
        </FlexBox>
      )}
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <MyOrders modal={modal} />
      </Modal>
    </Wrapper>
  );
};

export default Navbar;
