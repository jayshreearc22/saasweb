import React from 'react'
import helix from "../Componant/images/helix.png"
import cube from "../Componant/images/cube.png"

const Managment = () => {
    return (
        <div className='mt-24  '>
            <div className='text-center text-xs'>
                <span className='border-2 rounded-md p-1'>Everything you need</span>
            </div>
            <div className='text-center text-3xl font-bold mt-3 '>
                <h2>Streamlined for easy management</h2>
            </div>

            <div className='text-center text-sm'>
                <span>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</span>
            </div>
            <div className='flex max-sm:flex-col m-4 ' >
                <div>
                    <img src={helix} />
                    <h5 className='font-bold'>Integration ecosystem</h5>
                    <span className='text-lg w-6'>Enhance your productivity by connecting with your favorite tools, keeping all your
                        essentials in one place.</span><br />

                </div>

                <div>
                    <img src={cube} />
                    <h5 className='font-bold'>Goal setting and tracking</h5>
                    <span className='text-lg w-6'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</span><br />

                </div>
            </div>
        </div>
    )
}

export default Managment