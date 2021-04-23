import './App.css';
import {useState} from 'react';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from './components/Counter';
import UseEffectComponent from './components/UseEffectComponent'


function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <UseEffectComponent />}
      <button onClick={()=> setShow(!show)}>Show</button>
      {/* <Counter /> */}
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent title="Otro título" date="22 de Agosto de 2025"/>
      <SecondComponent />
      <ThirdComponent /> */}
    </div>
  );
}

export default App;

