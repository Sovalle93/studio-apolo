import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import DemoVideoPlayer from './components/DemoVideoPlayer';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Hero />
        <ImageCarousel />
        <DemoVideoPlayer />
      </main>
    </>
  );
}
