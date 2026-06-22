import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/layout/nav';
import HomePage from './Page/HomePage';
import Menu from './Page/menu'; 
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
        <Nav /> {/* Nav stays outside Routes so it's always visible */}
        
        <main className="grow">
          {/* 2. Define your routes here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
        
        <Footer /> {/* Footer stays outside Routes so it's always visible */}
      </div>
    </Router>
  );
}

export default App;