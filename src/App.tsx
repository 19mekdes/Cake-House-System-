import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/nav';
import HomePage from './Page/HomePage';
import Menu from './Page/menu'; 
import About from './Page/About'; 
import Contact from './Page/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
        <Nav /> 
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;