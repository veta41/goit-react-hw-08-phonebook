import { AuthNavStyled, Container } from './AuthorizationMenu.styled';

export default function AuthorizationMenu() {
  return (
    <Container>
      <AuthNavStyled to="/register">Register</AuthNavStyled>
      <AuthNavStyled to="/login">LogIn</AuthNavStyled>
    </Container>
  );
}
