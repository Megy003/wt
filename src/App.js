import RegistrationForm from './components/form.js';
import Header from './components/header.js';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <Header />
        <RegistrationForm />
        <Footer />
      </header>
      <div className="text-center mt-2">
        {/* Link na stránku users */}
        <Link to="/users" className="text-muted">
          Zobraziť všetkých registrovaných užívateľov
        </Link>
      </div>
    </div>
  );
}

export default App;
