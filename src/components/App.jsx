
import { ContactForm } from './contactForm/contactForm';
import { Filter } from './filter/filter';
import { ContactList } from './contactList/contactList';
import { Container, MainTitle, Title } from './app.styled/app.styled';

export const App = () => {

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter  />
        <ContactList/>
      </Container>
    );
  }


