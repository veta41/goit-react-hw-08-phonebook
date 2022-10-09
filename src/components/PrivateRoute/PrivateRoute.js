import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  Container,
  Link,
  Text,
  Title,
} from '../../pages/HomePage/HomePage.styled';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Вітаємо у книзі контактів</Title>
          <Text>
            Щоб отримати доступ до ваших контактів <br />
            будь ласка <Link to="/login">авторизуйтеся</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
