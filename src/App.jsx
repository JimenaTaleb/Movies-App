import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './views/MainSection';
import Footer from './components/Footer';
import RecentReleases from './views/RecentReleases';
import Popular from './views/Popular';
import MyList from './views/MyList';
import Search from './views/Search';
import MovieDetails from './views/MovieDetails';
import MovieTrailer from './views/MovieTrailer';
import { MyListProvider } from './context/MyListContext';

function App() {
  return (
    <MyListProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/recent-releases" element={<RecentReleases />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/trailer/:id" element={<MovieTrailer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyListProvider>
  );
}

export default App;

/* 
Estructura App
Header
MainSection (para que la estructura html quede header-main-footer) => CarouselNowPlaying (1) CarouselPopular CarouselTopRated (1 reutilizable) CarouselMyList? views
Upcoming views
Popular views
Search views
MyList views
MovieDetail views
MovieTrailer views
NotFound components
Footer components

MovieCard components

*/
