import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/form.js'
import Header from './components/header.js';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer.js';

function App() {
  return (
    <div>
      <header>
        <Header />
        <RegistrationForm />
        <Footer/>
      </header>
    </div>
    
  );
}

export default App;
