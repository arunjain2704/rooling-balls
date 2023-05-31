
import './App.css';
import { Navbar } from './components/Navbar';
import { Home }  from './components/Home';
import { About } from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";

function App() {
   var back={
    backgroundColor:"grey"

   }   
  return (
  <div style={{backgroundColor: "rgb(28, 171, 171)"}}>
   <NoteState back="back">
 <Router>
  <Navbar/>
    
  
   <Routes>
          <Route  exact path="/about" element={ <About/>}> </Route>
      
          <Route  exact path="/home" element={ <Home/>}> </Route>
      
          <Route  exact path="/login" element={ <Login/>}> </Route>
      
             <Route  exact path="/signup" element={ <Signup/>}> </Route>
  
   

        </Routes>
   </Router>
   </NoteState>
    </div>
   
  );
}

export default App;
