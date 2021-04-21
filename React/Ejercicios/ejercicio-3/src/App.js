import './App.css';
import Schedule from './Components/Schedule'

function App() {
  const contacts = [
    {Name: "Freddy", Surname: "Kruger", Adress: "Elm Street", City: "Springwood", PostCode: 28015, PhoneNumber: 652345689},
    {Name:"Naruto", Surname:"Uzumaki", Adress:"Way of the ninja", City:"Konoha", PostCode:26520, PhoneNumber:623541474},
    {Name:"Captain", Surname:"Hook", Adress:"Never Land", City:"Never", PostCode:29452, PhoneNumber:623549636}
  ];
  console.log(contacts);
  return (
    <div className="App">
      <Schedule contact={contacts}/>
    </div>
  );
}

export default App;
