import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Sign.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Login() {

  const [loading, setLoading] = useState("Log In");
  const [bool, getBool] = useState(false);
  const [validate, set] = useState({
    email: "",
    password: ""
  })

  const [err, seterr] = useState("");
  const [disable, get] = useState(false);

  function validation(e){
    const val = e.target.value;
    const nameAtri = e.target.name;

    set((currEle) => {
      return {
      ...currEle,
      [nameAtri]: val
      }
  })
  }

  function checkReq(e){
    e.preventDefault();
    if(validate.email === "" || validate.password === "" || validate.email.indexOf("@") < 0 || validate.email.indexOf("@") === 1 || validate.email.indexOf(".") < 0 || validate.email.indexOf(".") < 5){
      seterr("**Please fill all fields correctly !");
      getBool(true);
      return false;
    }
    else {
      seterr("");
      setLoading("Wait while checking details...");  
      getBool(false);
      get(true);      
      setTimeout(() => {
        setLoading("Successfully logged in !!");        
      }, 2000);  
    }
  }
  return (
    <>

   <Navbar /><div className={`flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${styles.wrapper}`} style={{height: "30rem"}}>
        <div className="w-full max-w-md space-y-8">
          <div>            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in to your account
            </h2>           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="of"
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={validation}
                />
              </div>
               <br />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="of"
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={validation}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
               <Link href={'/components/Forget'}><button className="font-medium py-1 ml-2 px-2 rounded bg-white text-black hover:bg-indigo-500 hover:text-white">
                Forgot Password ?
              </button> </Link> 
              </div>
            </div>

            {bool && <div className="flex justify-center items-center">
            <p className="text-sm bg-white text-black w-52 h-8 rounded flex justify-center items-center">{err}</p>
            </div>}  

            <div>            
              <button             
                className={`relative flex w-full justify-center rounded-md border-none bg-zinc-700 py-2 px-4 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2`} onClick={checkReq} disabled={disable}>              
                {loading}
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-800">
              Create New Account
             <Link href='/components/Sign'><button className="font-medium py-1 ml-2 px-2 rounded bg-white text-black hover:bg-indigo-500 hover:text-white">
                Sign Up
              </button> </Link>
            </p>
          </form>
        </div>
      </div><Footer />   
    </>
  )
}

export default Login
