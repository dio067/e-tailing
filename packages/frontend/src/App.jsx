import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="min-h-screen bg-paper dark:bg-ink text-ink dark:text-paper transition-colors duration-200">
      {' '}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  );
}
export default App;
