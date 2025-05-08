import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineMail} from 'react-icons/ai';

const Reset = () => {
  return (
    <div className='pt-[20vh]'>
    
  <div className='max-w-[800px] m-auto px-4 pb-16'>
    <div className=' dark:bg-[#e8edea] px-10 py-8 rounded-lg text-black'>
      <h1 className='text-2xl font-bold text-green-800 text-center'> Re-set Account </h1>
      <form >

        <div className='grid md:grid-cols-1 md:gap-8'>

        <div className='md:my-4'>
            <label>Email Address</label>
            <div className='my-2 w-full relative'>
              <input
                className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                type="email" 
                placeholder='Enter Email Address'
               
              />
              <AiOutlineMail className='absolute right-2 top-4 text-gray-400' /> 
            </div>
            
          </div> 


        </div>


        <p className='text-center text-sm py-1'>By signing in you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
               
        <button type='submit' className='w-full my-4 md:my-2 p-3 bg-[#166534] text-white rounded-lg font-semibold'> Re-set Account </button>
      </form>

      
      <hr className="my-6 border-gray-300 w-full" />

      <p className='my-4'>already have an account? <Link className='text-[#986c55] underline text-[15px]' to={'/login'}>Login</Link></p>
    </div>
  </div>
</div>
  )
}

export default Reset
