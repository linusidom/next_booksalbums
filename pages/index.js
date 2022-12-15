import Head from 'next/head'
import { Hero } from '../components/Hero'
import { BooksSection } from '../components/BooksSection'
import { AlbumsSection } from '../components/AlbumsSection'
import { BookSources } from '../components/BookSources'
import { AlbumSources } from '../components/AlbumSources'
import { Footer } from '../components/Footer'


export default function Home() {



  return (
    <div>
      <Head>
        <title>Top Books and Albums</title>
      </Head>

      <Hero/>
      <BooksSection/>
      <BookSources/>
      <AlbumsSection/>
      <AlbumSources/>
      <Footer/>
    </div>
  )
}
