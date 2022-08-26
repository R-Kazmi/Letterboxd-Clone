
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
        <Route path="/letterboxd" element={<Films />} />
        <Route path="/letterboxd/searchFilms" element={<SearchFilm />} />
        <Route path="/letterboxd/movie-detail/:movieId" element={<MovieDetail />} />
        <Route path="/letterboxd/tv-detail/:tvId" element={<TvDetail />} />
        <Route path="/letterboxd/watchlist/:userId" element={<Watchlist />} />
        <Route path="/letterboxd/diary/:userId" element={<Diary />} />
        <Route path="/letterboxd/journal" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
