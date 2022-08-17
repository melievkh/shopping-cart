import React from 'react';
import swal from 'sweetalert';
import {
  Dropdown,
  DropdownContent,
  SwitchButton,
  Wrapper,
} from './Navbar.style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserCircle } from 'react-icons/tb';
import { BsMoon } from 'react-icons/bs';
import Flexbox from '../../Flexbox/Flexbox';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import Basket from '../../Basket/Basket';
import Search from '../../Search/Search';
import Text from '../../Text/Text';
import { toggleTheme } from '../../../store/theme/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  const currentTheme = useSelector((state) => state.theme.theme);

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
        <Flexbox row width="160px" gap="20px">
          <Basket />
          <Dropdown>
            <span>
              <TbUserCircle />
            </span>
            <DropdownContent>
              <Flexbox row justifyContent="center">
                <Heading>{username}</Heading>
                <SwitchButton
                  onClick={() => {
                    dispatch(toggleTheme(currentTheme));
                  }}
                >
                  <BsMoon />
                </SwitchButton>
              </Flexbox>
              <li>
                <Text>Asosiy</Text>
              </li>
              <Link to="/myorders">
                <li>
                  <Text>Buyurtmalarim</Text>
                </li>
              </Link>
              <li onClick={() => logout()}>
                <Text>
                  <FiLogOut />
                  Chiqish
                </Text>
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
