import './App.css';
import Cards from "./components/Cards";
import Chart from './components/Chart';
import Country from './components/Country';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className='d-flex flex-row justify-content-evenly align-items-center bg-light'>
        <Header></Header>
        <Cards></Cards>
      </div>
      <Country></Country>
      <div className='d-flex justify-content-center align-items-center mt-4 mb-5 bg-light'>
        <Chart></Chart>
      </div>
    </div>
  );
}

export default App;
