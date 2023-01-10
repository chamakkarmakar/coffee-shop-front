import { Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/HomePage/Header/Banner';
import NavBar from './Components/HomePage/Header/NavBar';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
