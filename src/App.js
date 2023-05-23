import './App.css';
import Create from "./components/Create";
import { Routes, Route } from 'react-router-dom';
import Read from './components/Read';

function App() {
  return (
    <div className="container">
   <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
