import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setisSignInForm] =useState(true)
    const toggleSignInForm =()=>{
        setisSignInForm(!isSignInForm)
    }
    return (
    <div  >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg'
        alt='background'
        className='w-full h-auto'
        />
        </div>
        <div
        className='
        my-36 mx-auto right-8 left-0
        absolute w-3/12 p-12 text-center bg-black 
        bg-opacity-80
        '
        >
        <form
       className='text-white'
        >
            <h1
            className='font-bold text-3xl py-4'
            
            >
                {isSignInForm?"Sign In":"Sign Up"}
            </h1>
            {
                (!isSignInForm)&&(<input type="text" name="name" id="" placeholder='Full Name'
                className='p-4 m-2 w-full  bg-gray-700'
                />)
            }
            <input type="email" name="email" id="" placeholder='Email Address'
            className='p-4 m-2 w-full bg-gray-700'
            />
            <input type="password" name="password" id="" placeholder='Password'
            className='p-4 m-2 w-full  bg-gray-700'
            />
            <button 
            className='bg-red-700 w-full p-4 m-2 rounded-lg'>
               {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p
             className='p-2 text-sm cursor-pointer'
             onClick={toggleSignInForm}

            >{ isSignInForm?"New to Netflix ? Sign Up Now !":"Already Signed Up ? Sign In now !"
            }</p>
        </form>
        </div>
    </div>
  )
}

export default Login
