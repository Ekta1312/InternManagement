import React,{useState} from 'react';
import RegistrationForm from './components/RegistrationPage/Registration';
import LoginForm from './components/LoginPage/Login';
import PageNav from './components/MainNavbar/nav1';
import PageFoot from './components/MainFooter/Footer';
import Form from './components/MainForm/Form';

const App = () => {
  
  const [currentPage, setCurrentPage] = useState('LoginForm');
  const goToLogin = () => {
    setCurrentPage('LoginForm');
  };
  const goToRegistration = () => {
    setCurrentPage('RegistrationForm');
  };
  const goToForm = () => {
    setCurrentPage('Form');
  };
  return (
    <div>
      <PageNav/>
      {currentPage === 'LoginForm' && <LoginForm goToRegistration={goToRegistration} goToForm={goToForm} />}
      {currentPage === 'RegistrationForm' && <RegistrationForm goToLogin={goToLogin} />}
      {currentPage === 'Form' && <Form />}
      <PageFoot/>
    </div>
  );
};

export default App;