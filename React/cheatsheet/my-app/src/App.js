import './App.css';
import {useState, createContext} from 'react';
import UseContextComponent from './components/UseContextComponent'
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from './components/Counter';
import UseEffectComponent from './components/UseEffectComponent'

export const GlobalContext = createContext({});


function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* {show && <UseEffectComponent />}
      <button onClick={()=> setShow(!show)}>Show</button>
      <Counter />
      {/* {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/> */}
      {/* <FirstComponent title="Otro título" date="22 de Agosto de 2025"/>
      <SecondComponent />
      // <ThirdComponent /> */} 
      <GlobalContext.Provider value="Soy un string guardado en un contexto" >
      <UseContextComponent />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

