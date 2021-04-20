
import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';


function App() {
  return (
    <div className="App">
      <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="Otro título" date="22 de Agosto de 2025"/>
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;

