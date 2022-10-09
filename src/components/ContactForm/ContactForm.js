import { useState } from 'react';

import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handlerChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();

    const newContact = { name, phone };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} already in contact`)
      : dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Label htmlFor="contact_name">Name</Label>
      <Input
        onChange={handlerChange}
        id="contact_name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="contact_number">Number</Label>
      <Input
        onChange={handlerChange}
        value={phone}
        id="contact_number"
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit"> Add contact</Button>
    </Form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactForm;
