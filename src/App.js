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
import Form from './components/Form';
import Welcome from './components/Welcome';
import Stylesheet from './components/Stylesheet';
import inLine from './components/inLine';
import styles from './components/appStyle.module.css'
import './components/appStyles.css'

function App() {
  return (
    <div className="App">
      {/*
      <FunctionClick />
      <ClassClick />
      <Counter />
      <EventBind />
      <ParentComponent />
      <Condition/>
      <Greet name="David" typename="middle" /> 
      <UsingLists />
      */}
      <Form/>

      
      {/* <Stylesheet primary={true} secondary={true}/>
      <Welcome secondary={false} name="Banda" typename="surname" / > 
      <inLine />
      <h1 className = 'error'>No</h1>
      <h1 className={styles.success}>Yes</h1>
      
      
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