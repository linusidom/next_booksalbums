import { BookList } from "../components/BookList";
import Head from "next/head";

export default function Books() {
  return (
    <div>
      <Head>
        <title>Top Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BookList />
    </div>
  );
}
