//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="David" typename="middle" />
      <Welcome name="Banda" typename="surname" />
      {/*
      <Greet name="Masimba" typename="firstName">
        <button>children props</button>
      </Greet>
      <Greet name="David" typename="middle" />
      <Greet name="Banda" typename="surname" />
      <Welcome name="David" typename="middle" />
      <Welcome name="Banda" typename="surname" />
      <Message/> */}
    </div>
  );
}

export default App;

//functional components