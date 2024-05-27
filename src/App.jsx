//Importo componentes de React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importo componentes
import Header from "./components/Header";
import MainSection from "./views/MainSection";
import RecentReleases from "./views/RecentReleases";
import Popular from "./views/Popular";
import MyList from "./views/MyList";
import Search from "./views/Search";
import MovieDetails from "./views/MovieDetails";
import MovieTrailer from "./views/MovieTrailer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

//Importo proveedor context
import MyListContextProvider from "./context/MyListContext";

function App() {
  return (
    <MyListContextProvider>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyListContextProvider>
  );
}

export default App;