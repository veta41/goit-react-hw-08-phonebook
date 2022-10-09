import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container, Title, Text, Link } from './HomePage.styled';

export default function HomePage() {
  const isLoggedId = useSelector(selectIsLoggedIn);
  return (
    <>
      <Container>
        <Title>Вітаємо у книзі контактів</Title>
        {isLoggedId && <Text>Усі функції до ваших послуг</Text>}
        {!isLoggedId && (
          <>
            <Text>
              Якщо Ви у нас вперше{' '}
              <Link to="/register">пройдіть реєстрацію</Link>{' '}
            </Text>
            <Text>
              Якщо Ви постійний користувач{' '}
              <Link to="/login">авторизуйтеся</Link>{' '}
            </Text>
          </>
        )}
      </Container>
    </>
  );
}
