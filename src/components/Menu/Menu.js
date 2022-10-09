import AuthorizationMenu from 'components/AuthorizationMenu/AuthorizationMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container, Nav, MenuLink } from './Menu.styled';

export default function Menu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Nav>
        <MenuLink to="/">Нome</MenuLink>
        {isLoggedIn && <MenuLink to="contacts">Register</MenuLink>}
      </Nav>

      {isLoggedIn ? <UserMenu /> : <AuthorizationMenu />}
    </Container>
  );
}
