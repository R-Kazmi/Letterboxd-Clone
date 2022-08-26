
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
        <Route path="/letterboxd-clone" element={<Films />} />
        <Route path="/letterboxd-clone/searchFilms" element={<SearchFilm />} />
        <Route
          path="/letterboxd-clone/movie-detail/:movieId"
          element={<MovieDetail />}
        />
        <Route path="/letterboxd-clone/tv-detail/:tvId" element={<TvDetail />} />
        <Route path="/letterboxd-clone/watchlist/:userId" element={<Watchlist />} />
        <Route path="/letterboxd-clone/diary/:userId" element={<Diary />} />
        <Route path="/letterboxd-clone/journal" element={<Journal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
