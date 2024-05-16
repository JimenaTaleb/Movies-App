import Header from "./components/Header";
import MainSection from "./views/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainSection/>
      <Footer />
    </>
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
