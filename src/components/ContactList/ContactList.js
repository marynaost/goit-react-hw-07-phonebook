import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import s from './ContactList.module.scss';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(actions.deleteContacts(id));
  return contacts.length === 0 ? (
    <div className={s.noContacts}>You haven't contacts!</div>
  ) : (
    <ul className={s.item}>
      {contacts.map(contact => (
        <li className={s.list} key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            className={s.button}
            type="button"
            onClick={() => deleteContacts(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
