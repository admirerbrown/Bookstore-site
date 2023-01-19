import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Book';
import Categories from './components/Categories';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>

  );
}

export default App;
