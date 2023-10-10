import {Container, Container1} from './class-component';
import './App.css';
// import {Calc, Calc1} from './counter';
function App() {
  return (
    <div>
    <Container className="flex flex-col items-center justify-center w-full bg-blue-300 border-b-2 border-white-500" color="black" background="blue" />
    <Container1 className="flex flex-col items-center justify-center  w-full  bg-blue-300 border-b-2 border-green-500 "  color="black" />
    {/* <Calc  text="here is the counter"/> */}
    </div>
    
  );
}

export default App;
