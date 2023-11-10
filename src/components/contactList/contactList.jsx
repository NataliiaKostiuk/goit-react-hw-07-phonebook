
import { List,ListItem, Btn ,Div} from './contactList.styled';
import { nanoid } from 'nanoid';
 import { useDispatch, useSelector } from 'react-redux';
import { deleteContact,fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterNormilized = filter.toLowerCase().trim();
  const visibleContacts = [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );
  
  	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

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
