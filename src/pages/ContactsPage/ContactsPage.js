import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter/Filter';

import { Container, TitleH, TitleH2 } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <>
      <Container>
        <TitleH>Contacts book</TitleH>
        <ContactForm />

        <TitleH2>Contacts</TitleH2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
