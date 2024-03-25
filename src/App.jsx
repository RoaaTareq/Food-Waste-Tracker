import './App.css';
import './assets/styles/global/global.css'
import Header from './Components/layout/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/home';
import Footer from './Components/layout/footer';
import LoginPage from './Components/Home/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Other routes */}
          {/* Ensure that you have defined other routes as well */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
