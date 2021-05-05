import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hume from '../pages/home'
import { Categ } from '../UI/home/categories'
import { Footer } from '../UI/home/footer'
export default function Home() {
  return (
    <main className="root">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Task Hunter | Home </title>
      </Head>
      <Hume />
      <Categ />
      <Footer />
      <noscript>
        You SHould Run JavaScipt !!!!!!
      </noscript>
    </main>
  )
}
