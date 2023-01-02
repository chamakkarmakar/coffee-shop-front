import { Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/HomePage/Header/Banner';
import NavBar from './Components/HomePage/Header/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Routes>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
