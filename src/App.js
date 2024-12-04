import RegistrationForm from './components/form.js'
import Header from './components/header.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <header>
        <Header />
        <RegistrationForm />
      </header>
    </div>
    
  );
}

export default App;
