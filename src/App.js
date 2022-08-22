
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Films from './pages/Films';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import Diary from './pages/Diary';
import Watchlist from './pages/Watchlist';
import Journal from './pages/Journal';
import SearchFilm from './pages/SearchFilm';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Films />} />
        <Route path="/searchFilms" element={<SearchFilm />} />
        <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="/tv-detail/:tvId" element={<TvDetail />} />
        <Route path="/watchlist/:userId" element={<Watchlist />} />
        <Route path="/diary/:userId" element={<Diary />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
