import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/HomePage/Header/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
     <Routes>
      {/* <Route path='/' element={}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
