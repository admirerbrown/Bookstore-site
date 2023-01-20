import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookHolder from './components/BookHolder';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<BookHolder />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>

    </div>

  );
}

export default App;
