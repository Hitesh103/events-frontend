import { BrowserRouter as Router ,Routes
, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CreateEvent from './Pages/create-event/CreateEvent.jsx';
import Navbar from './Components/Navbar/Navbar';
import AuthState from './contaxt/authState';

function App() {
  return (
    <AuthState> 
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={[<Home/>]}></Route>
        <Route  path='/eventcreate' element={[<CreateEvent/>]}/>
      </Routes>
    </Router>
    </AuthState>
  );
}

export default App;
