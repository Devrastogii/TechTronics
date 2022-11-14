import Link from 'next/link'
import React from 'react'

function FrontShow() {
  return (
    <>
        <h1 className='text-4xl text-center m-12 mt-20'>Products</h1>
        <section class="text-gray-600 body-font">
        <h1 className='text-3xl m-12'>Mobile Phones</h1>
  <div class="container px-5 m-2 mx-auto">
    <div class="flex flex-wrap -m-4">
     <div class="lg:w-1/4 md:w-1/2 p-4 w-full"> 
     <Link href={'/components/product/mobile-1'}><a class="block relative h-64 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71fVoqRC0wL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 12 (128GB) - Black</h2>
          <p class="mt-1">₹13,499.00</p>
        </div> </Link>
      </div> 
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-2'}><a class="block relative h-48.5 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/711wsjBtWeL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 12 (128GB) - White</h2>
          <p class="mt-1">₹29,999.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-3'}><a class="block relative h-68 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71E5zB1qbIL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 12 (128GB) - (Product) RED</h2>
          <p class="mt-1">₹12,499.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-4'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 13 (128GB) - Starlight</h2>
          <p class="mt-1">₹66,900.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-5'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 14 Plus 128GB Blue</h2>
          <p class="mt-1">₹89,900.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-6'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71cQWYVtcBL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 12 (64GB) - Green</h2>
          <p class="mt-1">₹1,09,900.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-7'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 12 (64GB) - Blue</h2>
          <p class="mt-1">₹49,900.00</p>
        </div> </Link>
      </div> 
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/mobile-8'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/619f09kK7tL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Mobile Phones</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Apple iPhone 14 128GB Purple</h2>
          <p class="mt-1">₹31,999.00</p>
        </div> </Link>
      </div>
    </div>
  </div>
</section>

{/* Ear Accesories */}

        <section class="text-gray-600 body-font">
        <h1 className='text-3xl m-12'>Ear Accesories</h1>
  <div class="container px-5 m-2 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-1'}><a class="block relative h-65 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/5112PrfGFOL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">boAt Newly Launched Airdopes 190 True Wireless Earbuds with Beast™ Mode(50ms) for Gaming</h2>
          <p class="mt-1">₹1,299.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-2'}><a class="block relative h-48.5 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/51AMqyp+sfL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">OnePlus Buds Z2 Truly Wireless Earbuds with Active Noise Cancellation</h2>
          <p class="mt-1">₹4,499.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-3'}><a class="block relative h-68 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/41i+KMBAFjL.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones</h2>
          <p class="mt-1">₹2,299.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-4'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/51PQG1YYb1L._SY879_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Noise Buds VS201 V2 Truly Wireless Earbuds with Dual Equalizer</h2>
          <p class="mt-1">₹1,299.00</p>
        </div>  </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-5'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">boAt Rockerz 450 Bluetooth On Ear Headphones with Mic</h2>
          <p class="mt-1">₹1,250.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-6'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/615FSvixa3L._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sennheiser Sport True Wireless Earbuds - Bluetooth in-Ear Headphones </h2>
          <p class="mt-1">₹9,499.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-7'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61N1qHNeeSL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">boAt Rockerz 255F Sports Wireless Headset with Super Extra Bass</h2>
          <p class="mt-1">₹1,299.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/ear-8'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/41i3U6EdkbL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Ear Accesories</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">JBL Wave 200 TWS, Bluetooth Truly Wireless in Ear Earbuds</h2>
          <p class="mt-1">₹2,999.00</p>
        </div> </Link>
      </div> 
    </div>
  </div>
</section>

{/* Flagship Tv's */}

        <section class="text-gray-600 body-font">
        <h1 className="text-3xl m-12">Flagship Tv&apos;s</h1>
  <div class="container px-5 m-2 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-1'}><a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71fZOKh0i1L._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Mi 189.34cm (75 inches) Q1 Series 4K Ultra HD Smart QLED TV L75M6-ESG (Metallic Grey)</h2>
          <p class="mt-1">₹1,39,999.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-2'}><a class="block relative h-48.5 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71NBeJt2TxL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Sansui 178 cm (70 inches) 4K Ultra HD Smart Android LED TV JSW70ASUHDFF (Ebony Black)</h2>
          <p class="mt-1">₹1,21,990..00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-3'}><a class="block relative h-68 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71GYLokH21L._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">OnePlus 138.8 cm (55 inches) With Sliding Soundbar Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)</h2>
          <p class="mt-1">₹84,990.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-4'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61XylsxQUcL._SX569_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Samsung 163 cm (65 inches) 4K Ultra HD Smart LED TV UA65AU7700KLXL (Titan Gray))</h2>
          <p class="mt-1">₹60,999.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-5'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/71NGTvGMypL._SX979_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Acer 127 cm (50 inches) I Series 4K Ultra HD Android Smart LED TV (Black)</h2>
          <p class="mt-1">₹27,999.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-6'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/81tD7OZ0RXL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Hisense 108 cm (43 inches) Bezelless Series 4K Ultra HD Smart LED Google TV 43A6H (Black) </h2>
          <p class="mt-1">₹26,990.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-7'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/61sPE6CnkVL._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black)</h2>
          <p class="mt-1">₹45,440.00</p>
        </div> </Link>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={'/components/product/tv-8'}><a class="block relative h-50 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://m.media-amazon.com/images/I/91Hhr9W3+7L._SX679_.jpg" />
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Televisions</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Acer 164 cm (65 inches) S Series 4K Ultra HD Android Smart LED TV (Black)</h2>
          <p class="mt-1">₹48,490.00</p>
        </div> </Link>
      </div>
    </div>
  </div>
</section> <br /> <br />
    </>
  )
}

export default FrontShow
