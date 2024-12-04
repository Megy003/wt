import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/form.js'
import Header from './components/header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
