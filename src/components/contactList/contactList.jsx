
import { List,ListItem, Btn ,Div} from './contactList.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactList)
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filterValue);
  const filterNormilized = filter.toLowerCase().trim();
  const visibleContacts = [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );
    
    return (
      <List>
          {visibleContacts.map(contact => {
              return (
                  <ListItem key={nanoid()}
                      name={contact.name}
                      contact={contact.number}>
                      <Div>{contact.name}</Div>
                      <Div>{contact.number}</Div>
                      <Btn onClick={()=>dispatch(deleteContact(contact.id))}>Del</Btn>
                  </ListItem>
              )
          })}
       </List>
  );
}
