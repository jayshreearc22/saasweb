import React from 'react'
import prog1 from "../Componant/images/Progress/prog1.png"
import prog2 from "../Componant/images/Progress/prog2.png"
import prog3 from "../Componant/images/Progress/prog3.png"
import prog4 from "../Componant/images/Progress/prog4.png"
import prog5 from "../Componant/images/Progress/prog5.png"
import arrow from "../Componant/images/Progress/arrow.png"
import ring from "../Componant/images/Progress/ring.png"
import diamond from "../Componant/images/Progress/diamond.png"

const Progress = () => {
    return (
        <div className=' bg-gradient-to-tr from-blue-100 mt-14'>
            <div className='text-center text-xs '>
                <span className='border-2 rounded-md p-1'>Boost your productivity</span>
            </div>
            <div className='text-center text-3xl font-bold mt-3 '>
                <h2>A more effective way to track progress</h2>
            </div>

            <div className='text-center text-sm'>
                <span>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</span>
            </div>
            <div >
                <div  className=" absolute w-[231.18px]  right-0 max-sm:hidden    z-10 ">
                    <img src={diamond} />
                </div>
                <div>
                    <img className='' src={prog1} />
                </div>
                <div className=" absolute w-[231.18px] mt-[-250px] max-sm:hidden      z-10">
                    <img src={ring} />
                </div>
            </div>
            <div className='flex md-flex-wrap justify-between max-sm:flex-col m-2 mt-4' >
                <div className='mt-2'>
                    <img src={prog2} />
                    <h5 className='font-bold'>Integration ecosystem</h5>
                    <span className='text-lg w-6'>Track your progress and motivate your efforts everyday.</span><br />
                    <button>Learn more <img className="inline-block" src={arrow} /></button>
                </div>

                <div className='mt-5'>
                    <img src={prog3} />
                    <h5 className='font-bold'>Goal setting and tracking</h5>
                    <span>Set and track goals with manageable task breakdowns.</span><br />
                    <button >Learn more <img className="inline-block" src={arrow} /></button>
                </div>

                <div className='mt-5'>
                    <img src={prog4} />
                    <h5 className='font-bold'>Secure data encryption</h5>
                    <span>Ensure your data’s safety with top-tier encryption.</span><br />
                    <button>Learn more <img className="inline-block" src={arrow} /></button>
                </div>

                <div className='mt-5'>
                    <img src={prog5} />
                    <h5 className='font-bold'>Customizable notifications</h5>
                    <span>Get alerts on tasks and deadlines that matter most.</span><br />
                    <button >Learn more <img className="inline-block" src={arrow} /></button>
                </div>
            </div>

        </div>
    )
}

export default Progress