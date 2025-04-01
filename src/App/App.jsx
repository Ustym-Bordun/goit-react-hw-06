import { useSelector } from 'react-redux';

import css from './App.module.css';

import Container from '../components/Container/Container';
import Section from '../components/Section/Section';

import Heading from '../components/Heading/Heading';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import Notification from '../components/Notification/Notification';

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <Heading title="Phonebook" bottom />

          <ContactForm />

          <SearchBox />

          {contacts.length > 0 ? (
            visibleContacts.length > 0 ? (
              <ContactList />
            ) : (
              <Notification
                text={`No contacts by this filter:`}
                addedText={filter}
              />
            )
          ) : (
            <>
              <Notification text="You don't have any contacts saved" />
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default App;
