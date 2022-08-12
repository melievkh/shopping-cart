import React from 'react';
import swal from 'sweetalert';
import { Dropdown, DropdownContent, Wrapper } from './Navbar.style';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import Flexbox from '../../Flexbox/Flexbox';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import Basket from '../../Basket/Basket';
import Search from '../../Search/Search';

const Navbar = () => {
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
    swal('Saytdan chiqish muvafaqqiyatli bajarildi!');
  };

  return (
    <Wrapper>
      <Heading>Logo</Heading>
      <Search />
      {isLoggedIn ? (
        <Flexbox row gap="20px">
          <Basket />
          <Dropdown>
            <span>
              <TbUserCircle />
            </span>
            <DropdownContent>
              <li style={{ justifyContent: 'center' }}>{username}</li>
              <Link to="/myorders" style={{ textDecoration: 'none' }}>
                <li>Buyurtmalarim</li>
              </Link>
              <li onClick={() => logout()}>
                <FiLogOut />
                Chiqish
              </li>
            </DropdownContent>
          </Dropdown>
        </Flexbox>
      ) : (
        <Flexbox row gap="20px">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button>
              <FiLogIn /> Kirish
            </Button>
          </Link>
        </Flexbox>
      )}
    </Wrapper>
  );
};

export default Navbar;
