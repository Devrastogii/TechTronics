import Head from "next/head"
import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import style from '../styles/Product.module.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [spin, setBool] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 2000);
  },[])

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    </Head>
      {/* <Navbar /> */}
      {spin ? <Component {...pageProps} /> : <div class={style.container}>
    <div class={style.loadingspinner}>
    <div id={style.square1}></div>
    <div id={style.square2}></div>
    <div id={style.square3}></div>
    <div id={style.square4}></div>
    <div id={style.square5}></div>
  </div>
</div>}      
      {/* <Footer /> */}
    </>
  ) 
}

export default MyApp
