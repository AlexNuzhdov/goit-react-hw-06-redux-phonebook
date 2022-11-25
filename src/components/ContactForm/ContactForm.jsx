import PropTypes from 'prop-types';
import { Form, Label } from './ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/сontactSlice';

import { nanoid } from 'nanoid';

export function ContactForm() {
   
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
   const dispatch = useDispatch();

    const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
    
  const handleSubmit = e => {
    e.preventDefault();
    const contact = { id: nanoid(), name, number };
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
    

        return (
        <Form onSubmit = {handleSubmit}>
            <Label>
                Name
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
                required/>
            </Label>
            <Label>
                Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required/>
            </Label>
                
            <button type='submit'>Add contact</button>
         </Form>
        );

    
}
  ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
  };
export default  ContactForm;