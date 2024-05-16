import Header from "./components/Header";
import MainSection from "./views/MainSection";
import Footer from "./components/Footer";
import Upcoming from "./views/Upcoming"
import Popular from "./views/Popular"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/upcoming" element={ <Upcoming/> } />
        <Route path="/popular" element={ <Popular/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
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
