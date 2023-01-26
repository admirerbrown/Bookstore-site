import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookHolder from './components/BookHolder';
import { getBooks } from './redux/apiCalls/booksApi';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
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
