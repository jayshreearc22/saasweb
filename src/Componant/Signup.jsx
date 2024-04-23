import React from 'react'
import arrow from "../Componant/images//arrow.png"
import sign1 from "../Componant/images/sign1.png"
import sign2 from "../Componant/images/sign2.png"

const Signup = () => {
  return (
    <div class="row-auto bg-gradient-to-r from-violet-50 to-blue-50 mt-24" >
      <div className='absulate'>
        <img className=' mb-[-200px] ml-36 max-lg:hidden' src={sign1} />
      </div>
      <div className='text-center text-3xl font-bold  '>

        <h2>Sign up for free today</h2>
      </div>
      <div className='text-center text-sm'>
        <span>Celebrate the joy of accomplishment with an app designed <br /> to track your progress and motivate your efforts.</span>
      </div>
      <div className="  font-bold font-sans text-center text-white-800">
        <button className=" px-6 py-2 mt-10 mb-11  font-medium text-center bg-black rounded-xl border-2  border-solid text-white max-md:px-5 max-md:mt-10">
          Get for free
        </button>
        <button >Learn more <img className="inline-block" src={arrow} /></button>
      </div>
      <div className='absolute right-0 max-lg:hidden   '>
        <img className='mt-[-350px] ' src={sign2} />
      </div>

    </div>
  )
}

export default Signup