
import Nav from './components/layout/nav';
import HomePage from './Page/HomePage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-yellow-50 to-rose-50 flex flex-col">
      
      <main className="grow">
        <HomePage />
      </main>
      
    </div>
  );
}

export default App;