import React from 'react'
import Link from 'next/link'

function CartProduct(props) {
  return (
    <>
        <div class=" z-50 sticky top-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

<div class="fixed inset-0 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      <div class="pointer-events-auto w-screen max-w-md">
        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
              <div class="ml-3 flex h-7 items-center">
                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={props.close}>
                  <span class="sr-only">Close panel</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  <li class="flex py-6">
                    <div class="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={props.img} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{props.title}</a>
                          </h3>
                          <p class="ml-4">???{parseInt(`${props.price}`).toLocaleString()}</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">{props.brand}</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                      <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={props.add}>Add</button>
                        <p class="text-gray-500">Qty: {props.count}</p>

                        <div class="flex">
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={props.minus}>Remove</button>
                        </div>
                      </div>
                        <p className='text-red-500 text-l mt-3'>{props.error}</p>
                    </div>
                  </li>        
                </ul>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>???{(parseInt(`${props.price}`)*props.count).toLocaleString()}</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div class="mt-6 flex items-center justify-center w-full">

          {props.gcart ? <button class="rounded-md w-96 border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={props.cart}>Buy Now</button> : <button class="rounded-md w-96 border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={props.cart}>Buy Now</button>}           
            </div>
            <div class="mt-6 flex flex-col justify-center text-center text-sm text-gray-500">            
              <p>
                or
                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500 ml-2">
                 <Link href={'/components/Product'}>Continue Shopping</Link>
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default CartProduct
