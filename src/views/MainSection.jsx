import CarouselNowPlaying from "./CarouselNowPlaying"
import CarouselPopular from "./CarouselPopular"
import CarouselTopRated from "./CarouselTopRated"

export default function MainSection() {
  return (
    <main>
        <CarouselNowPlaying/>
        <CarouselPopular/>
        <CarouselTopRated/>
    </main>
  )
}
