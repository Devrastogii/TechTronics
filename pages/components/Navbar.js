import Link from "next/link";
import React from "react";
import styles from '../../styles/Home.module.css';

function Navbar() {
  return (
    <>
      <header class={`text-gray-400 ${styles.nav} body-font sticky top-0 z-50`}>
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-20 text-white sticky top-0 z-50">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">          
            <Link href={'/'}><span class="ml-3 text-xl text-white">Dev-Commerce</span></Link>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
           {/* <Link href={'/'} legacyBehavior><a class="mr-5 opacity-50 hover:text-white hover:opacity-100 cursor-pointer">Home</a></Link> */}
           <Link href={'/'} legacyBehavior><a class={`${styles.link} mr-5 ${styles.hover} cursor-pointer`}>Home</a></Link>
           <Link href={'/components/Product'} legacyBehavior><a class={`${styles.link} mr-5 ${styles.hover} cursor-pointer`}>Products</a></Link>
           <Link href={'/components/Contact'} legacyBehavior><a class={`${styles.link} mr-5 ${styles.hover} cursor-pointer`}>Contact</a></Link>
          </nav>

          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class={`${styles.link} mr-5 ${styles.hover} cursor-pointer`}>Cart</a>
           <Link href={'/components/Sign'} legacyBehavior><a class={`${styles.link} mr-5 ${styles.hover} cursor-pointer`}>Sign In</a></Link> 

          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
