import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { Container, UserInfoTitle, Button } from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <UserInfoTitle>
          Hello {userName} | Your mail: {userEmail} |
        </UserInfoTitle>
        <Button
          type="button"
          onClick={() => {
            dispatch(logOut());
            navigate('/');
          }}
        >
          Go out
        </Button>
      </Container>
    </>
  );
}
