//Importo componentes
import CarouselNowPlaying from "./CarouselNowPlaying";
import CarouselPopular from "./CarouselPopular";
import CarouselTopRated from "./CarouselTopRated";
import CarouselMyList from "./CarouselMyList";

export default function MainSection() {
  return (
    <main>
      <CarouselNowPlaying />
      <CarouselPopular />
      <CarouselTopRated />
      <CarouselMyList />
    </main>
  );
}
