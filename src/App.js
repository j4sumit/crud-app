import './App.css';
import Create from "./components/Create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Router>
   <Routes>
        <Route exact path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
