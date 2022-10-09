import { GlobalStyle } from './GlobalStyle';
// import { Box } from 'components/Box';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { lazy,Suspense,useEffect} from 'react';

import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout/Layout';
import {Loader} from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import {Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));



export  function App() {


    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
   <>
   <GlobalStyle/>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
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
