import Head from 'next/head'
import Hero from './components/Hero'
import ImageCarousel from './components/ImageCarousel'
import DemoVideoPlayer from './components/DemoVideoPlayer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Apolo | Soluciones Creativas</title>
        <meta name="description" content="Studio Apolo - Innovative solutions for your business" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />

        {/* Image Carousel Section */}
        <ImageCarousel />

        {/* Demo Video Player Section */}
        <DemoVideoPlayer />

      </main>
    </>
  )
}