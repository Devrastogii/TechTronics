import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Homee from './components/Homee'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TechTronics - Shop The Electronics</title>
        <meta name="description" content="TechTronics - Shop The Electronics" />
        <link rel="icon" href="/favicon.ico" />         
      </Head>
        <Homee />
    </div>
  )
}
