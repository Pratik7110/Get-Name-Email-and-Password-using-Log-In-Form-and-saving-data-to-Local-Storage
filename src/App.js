import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import ChangePassword from './Components/ChangePassword';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home';
import LogInPage from './Components/LogInPage';
import RegistrationForm from './Components/RegistrationForm';
import './CSS/App.css'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='nav'>
        <Link to='/'>Register</Link>
        <Link to='/LogInPage'>Log In</Link>
        </div>
          <Routes>
              <Route path='/' element={<RegistrationForm/>}/>
              <Route path='/LogInPage' element={<LogInPage/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/ChangePassword' element={<ChangePassword/>}/>
              <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
