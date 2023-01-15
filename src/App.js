import './App.css';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path = '/' element ={<Home />}></Route>
        <Route path ='/about' element = {<About />}></Route>
        <Route path ='/project' element = {<Projects />}></Route>
        <Route path ='/contact' element = {<Contact />}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;
