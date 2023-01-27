import Home from './components/Home';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Navbar from './components/Navbar'
import Notes from './components/Notes';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <div className="App">
      <NoteState>
      <Navbar/>
      <Routes>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/notes" element= {<Notes/>}/>
      </Routes>
      </NoteState>
    </div>
  );
}

export default App;


