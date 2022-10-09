import ParticlesLines from 'components/ParticlesLines/ParticlesLines';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Container, Link, Text, Title } from './PrivateRoute.styled';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <Container>
          <ParticlesLines />
          <Title>Welcome to the contact book</Title>
          <Text>
            To access your contacts <br />
            please <Link to="/login">log in</Link>
          </Text>
        </Container>
      )}

      {isLoggedIn && children}
    </>
  );
}
