import {AlbumList} from '../components/AlbumList'
import Head from 'next/head'

export default function Albums() {
  return (
  
    <div>
      <Head>
          <title>Top Albums</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AlbumList/>
    </div>
  )
}
