import React from 'react'

function WishBtn(props) {
  return (
   <>
         <button class={`rounded-full w-10 h-10 ${props.color} p-0 border-0 inline-flex items-center justify-center ${props.bg} ml-4 transition-all`} onClick={props.colorChange} onDoubleClick={props.addNote}>
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
   </>
)
}

export default WishBtn
