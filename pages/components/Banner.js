import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Banner.module.css';

function Banner() {
  return (
    <>
        <div style={{height: '45rem'}} className={styles.intro}>
           <Link href={'/components/Product'}> 
           <div class="relative overflow-hidden">
  <div class="mx-10 pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-12">
      <div class="sm:max-w-lg">
        <h1 class="font text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl">Winter Sale is finally here</h1>
        <p class="mt-4 text-xl text-slate-400">This season, our store is filled with the latest products from the best brands and also with discount coupons</p>
      </div>
      <div>
        <div class="mt-10">
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                {/* First */}
                  <div class="h-full w-96 rounded-lg sm:opacity-0 lg:opacity-100" style={{width: '30rem'}}>
                    <img src="https://m.media-amazon.com/images/I/81yaMImYTPL._SX979_.jpg" alt="" class="h-full w-96 object-cover object-center" style={{width: '40rem'}}/>
                </div>
                </div>
              </div>
            </div>
          </div>

          <Link href={'/components/Product'} legacyBehavior><button className={styles.slide}>Shop Collection</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
   </Link>
        </div>
    </>
  )
}

export default Banner
