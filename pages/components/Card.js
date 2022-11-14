import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Card.module.css';
import style from '../../styles/Product.module.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Card() {

    const [spin, setBool] = useState(false);

    useEffect(()=>{
    setInterval(() => {
      setBool(true);
    }, 2000);
  },[])

    const [color, setColor] = useState("bg-green-600");
    const [hover, sethover] = useState("bg-green-700");
    const [confirm, getConfirm] = useState("");
    const [loading, setLoading] = useState("Pay Now");
    const [error, setError] = useState("");
    const [info, getInfo] = useState({
        cnum: "",
        pwd: "",
        date1: "",
        date2: ""
    })
    const [disable, get] = useState(false);

    function validate(e){
       const val = e.target.value;
       const name = e.target.name;

       getInfo((currItem) => {
        return {
            ...currItem,
            [name]: val
       }})
    }

    function change(e){
        e.preventDefault();
        if(info.cnum === "" || info.pwd === "" || info.date1 === "" || info.date2 === "" || info.cnum.length < 16 || info.pwd.length > 4){
            setError("** Please fill all fields correctly in proper form, do check for length");
        }
        else {       
            get(true);
            setLoading("Wait while we confirm your payment...")
            setError("");  
            setTimeout(() => {
                setColor("bg-emerald-600");
                sethover("bg-emerald-600");
                getConfirm("We have received your order and it will be delivered to you in 2 days");
                setLoading("Paid Successfully");
            }, 2000); 
        }            
    }

    return (
      <>

        {spin ? <><Navbar /><br /><div className={`w-full ${styles.body} flex justify-center items-center`}>
            <div className="card w-3/5 bg-gradient-to-r from-amber-100 to-amber-200 drop-shadow-lg mt-10 mb-10">           
                <div className="img flex justify-center mt-12">
                    <img src="/mastercard.png" alt="" className='w-24'/>
                </div>
                <div className='grid grid-cols-2 mt-10 pl-16'>
                    <div><p className='mt-8 font-semibold'>Card Number</p>
                <p className='text-gray-600 text-sm'>Enter the 16 digit number on the card</p><p className='text-gray-600 text-sm'>(Only numbers are allowed)</p></div>
                <div style={{marginLeft: '-2rem'}}><input type="number" autoComplete='of' name="cnum" class="mt-5 bg-[url('/mastercard.png')] bg-no-repeat bg-left bg-[length:50px_30px] bg-zinc-100 rounded border border-gray-300 pl-16 w-80 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validate} value={info.cnum} disabled={disable} placeholder='XXXX-XXXX-XXXX-XXXX'></input></div>
                </div>
                <div className='grid grid-cols-2 pl-16'>
                    <div><p className='mt-8 font-semibold'>CVV Number</p>
                <p className='text-gray-600 text-sm'>Enter the 3 or 4 digit number on the card</p><p className='text-gray-600 text-sm'>(Only numbers are allowed)</p></div>
                    <div style={{marginLeft: '-2rem'}}><input type="password" value={info.pwd} disabled={disable} onChange={validate} name="pwd" class="bg-zinc-100 rounded border border-gray-300 w-44 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 pl-16 mt-8 leading-8 transition-colors duration-200 ease-in-out" placeholder='XXX'></input></div>
                </div>
                <div className='grid grid-cols-2 pl-16'>
                    <div><p className='mt-8 font-semibold'>Expiry Date</p>
                <p className='text-gray-600 text-sm'>Enter the expiry date of the card  </p></div>
                    <div style={{marginLeft: '-2rem'}}><input type="month" value={info.date1} onChange={validate} disabled={disable}  autoComplete='of' name="date1" class="bg-zinc-100 rounded border border-gray-300 w-40 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 mt-8 leading-8 transition-colors duration-200 ease-in-out"></input><span className='text-2xl'> / </span> <input type="month" disabled={disable}  value={info.date2} onChange={validate} autoComplete='of' name="date2" class="bg-zinc-100 rounded border border-gray-300 w-40 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div></div>
                <div className='text-center'><button class={`text-white mt-10 mb-1 ${color} border-0 w-72 py-2 px-6 focus:outline-none hover:${hover} rounded text-l`} onClick={change} disabled={disable}>{loading}</button></div> 
                {disable && <Link href={'/'}><div className='text-center'><button class={`text-white mt-2 ${color} border-0 w-72 py-2 px-6 focus:outline-none hover:${hover} rounded text-l`}>Go To Home</button></div></Link>}
                <div className='text-center mt-5'><p className='text-zinc-700'>{confirm}</p><p className='text-gray-800 mb-10'>{error}</p></div>                                               
            </div>
        </div><br /><Footer /></> : <div class={style.container}>
  <div class={style.loadingspinner}>
    <div id={style.square1}></div>
    <div id={style.square2}></div>
    <div id={style.square3}></div>
    <div id={style.square4}></div>
    <div id={style.square5}></div>
  </div>
</div>}        
    </>
  )
}

export default Card
