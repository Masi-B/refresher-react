//import logo from './logo.svg';
import './App.css';
import ClassClick from './components/ClassClick';
import Condition from './components/Condition';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UsingLists from './components/UsingLists';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      
      <Counter />
      <EventBind />
      <ParentComponent />
      <Condition/>
      <Greet name="David" typename="middle" />
      <Welcome name="Banda" typename="surname" />
      <UsingLists/>
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