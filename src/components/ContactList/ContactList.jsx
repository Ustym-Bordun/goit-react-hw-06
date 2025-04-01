import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(contactData => {
        return (
          <li key={contactData.id}>
            <Contact contact={contactData} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
