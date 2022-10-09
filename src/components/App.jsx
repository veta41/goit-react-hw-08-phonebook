// import { GlobalStyle } from './GlobalStyle';
// import { Box } from 'components/Box';
// import ContactForm from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";
// import ContactList from "./Contacts/ContactList";
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import { lazy} from 'react';

// import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout/Layout';
// import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>import('pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));



export  function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
