import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
    <div>

      
     <ul>
      <li><Link to='/'>HOme</Link></li>
      <li><Link to='/about'>About us</Link></li>
      <li><Link to='/contact'>Contct us</Link></li>
     </ul>


     <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
     </Routes>

      

     
    </div>
    </Router>
  );
}

export default App;
