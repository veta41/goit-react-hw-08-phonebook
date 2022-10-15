import { GlobalStyle } from './GlobalStyle';
// import { Box } from 'components/Box';

import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import { lazy,Suspense,useEffect} from 'react';

import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout/Layout';
import {Loader} from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import {Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Link, Text, Title } from './PrivateRoute/PrivateRoute.styled';


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));



export  function App() {

  const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>
    <Title>Welcome to the contact book</Title>
          <Text>
            To access your contacts <br />
            please <Link to="/login">log in</Link>
          </Text>
          </>
  ) : (
   <>
   <GlobalStyle/>
   
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="contacts"
            element={
              <PrivateRoute restricted redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
   
    </>
  );
}
