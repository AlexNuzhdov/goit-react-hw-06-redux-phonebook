import { Li, Ul } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/сontactSlice'
// import {contactsSlice} from 'redux/сontactSlice'

export const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

 const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
);


  return (
  
    <Ul>
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : {contact.number}
          {
            <button
              
              type="button"
              name="delte"
              onClick= {() => dispatch(deleteContacts(contact.id))}
            >
              delete
            </button>
          }
        </Li>
      ))}
    </Ul>
  )
  
    
  
  
  
};