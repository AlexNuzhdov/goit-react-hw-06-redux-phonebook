import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';

export function App () {


  
    return (
    
        <>
        <Container>
            <h1>Phonebook</h1>
            <ContactForm/>
        </Container>
        <Container>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </Container>
        
      </>

  )


};












