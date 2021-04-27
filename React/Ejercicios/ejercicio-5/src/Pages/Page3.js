import {useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Schedule from '../Components/Schedule'
import Form from '../Components/Form';

function Page3() {

  const initialContactsState = [
    {Name: "Freddy", Surname: "Kruger", Adress: "Elm Street", City: "Springwood", PostCode: 28015, PhoneNumber: 652345689},
    {Name:"Naruto", Surname:"Uzumaki", Adress:"Way of the ninja", City:"Konoha", PostCode:26520, PhoneNumber:623541474},
    {Name:"Captain", Surname:"Hook", Adress:"Never Land", City:"Never", PostCode:29452, PhoneNumber:623549636}
  ];

  const [contacts, setContacts] = useState(initialContactsState);
  
  return (
    <div className="container">
      <h2 className="my-3">Contact List</h2>
      <Schedule contacts={contacts} setContacts={setContacts}/>
      <h2 className="mb-3">New Contact</h2>
      <Form setContacts={setContacts}/>
    </div>
  );
}

export default Page3;