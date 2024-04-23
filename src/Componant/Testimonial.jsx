import React from 'react'
import Person1 from "../Componant/images/Testimonial/Person1.png"
import Person2 from "../Componant/images/Testimonial/Person2.png"
import Person3 from "../Componant/images/Testimonial/Person3.png"
import Person4 from "../Componant/images/Testimonial/Person4.png"
import Person5 from "../Componant/images/Testimonial/Person5.png"
import Person6 from "../Componant/images/Testimonial/Person6.png"
import Person7 from "../Componant/images/Testimonial/Person7.png"
import Person8 from "../Componant/images/Testimonial/Person8.png"
import Person9 from "../Componant/images/Testimonial/Person9.png"



const Testimonial = () => {
    return (
        <div class="row-auto  bg-white mt-24  ">
            <div className='text-center text-xs'>
                <span className='border-2 rounded-md p-1'>Testimonial</span>
            </div>
            <div className='text-center text-3xl font-bold mt-3 '>
                <h2>What our users say</h2>
            </div>
            <div className=" flex justify-evenly mt-20 md:mx-24 flex-wrap ">
                <div className="flex max-md:flex-wrap justify-evenly  ">
                    <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  m-2   max-md:m-5 rounded-xl">
                        <div className=" m-5">
                            {" "}
                            <p className="text-lg ">
                                As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.
                            </p>
                        </div>
                        <div className=" m-5 justify-normal flex items-center ">
                            {" "}
                            <div className="h-12   w-12 ">
                                <img className=" h-12   w-12 " src={Person1} alt="person" />
                            </div>
                            <div className="ml-5  text-3xl text-violet-800">
                                <p>
                                    Alex Rivera</p>
                                <span className=" text-lg font-normal text-gray-500 ">
                                    @jamietechguru00
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly m-2  max-md:m-5 ">
                        <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  rounded-xl">
                            <div className=" m-5">
                                {" "}
                                <p className="text-lg ">
                                    I was amazed at how quickly we were able to integrate this app into our workflow.
                                </p>
                            </div>
                            <div className=" m-5 justify-normal flex items-center">
                                {" "}
                                <div className="h-12   w-12 ">
                                    <img className=" h-12   w-12 " src={Person2} alt="person" />
                                </div>
                                <div className="ml-5  text-3xl text-violet-800">
                                    <p> Casey Jordan</p>
                                    <span className=" text-lg font-normal text-gray-500 ">
                                        @caseyj
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-evenly  m-2  max-md:m-5 ">
                        <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none   rounded-xl ">
                            <div className="m-5">
                                {" "}
                                <p className="text-lg ">
                                    Adopting this app for our team has streamlined our project management and improved communication across the board.
                                </p>
                            </div>
                            <div className=" m-5 justify-normal flex items-center">
                                {" "}
                                <div className="h-12   w-12 ">
                                    <img className=" h-12   w-12 " src={Person3} alt="person" />
                                </div>
                                <div className="ml-5  text-3xl text-violet-800">
                                    <p> Jordan Patels</p>
                                    <span className=" text-lg font-normal text-gray-500 ">
                                        @jpatelsdesign
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-md:flex-wrap justify-evenly md:mx-24  ">
                <div className="flex justify-evenly m-2  max-md:m-5">
                    <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none   rounded-xl ">
                        <div className=" m-5">
                            {" "}
                            <p className="text-lg ">
                                Our team’s productivity has skyrocketed since we started using this tool.
                            </p>
                        </div>
                        <div className=" m-5 justify-normal flex items-center">
                            {" "}
                            <div className="h-12   w-12 ">
                                <img className=" h-12   w-12 " src={Person4} alt="person" />
                            </div>
                            <div className="ml-5  text-3xl text-violet-800">
                                <p> Josh Smith</p>
                                <span className=" text-lg font-normal text-gray-500 ">
                                    @jjsmith
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly m-2  max-md:m-5">
                <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  m-2   max-md:m-5 rounded-xl ">
                    <div className=" m-5">
                        {" "}
                        <p className="text-lg ">
                            Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.
                        </p>
                    </div>
                    <div className=" m-5 justify-normal flex items-center">
                        {" "}
                        <div className="h-12   w-12 ">
                            <img className=" h-12   w-12 " src={Person5} alt="person" />
                        </div>
                        <div className="ml-5  text-3xl text-violet-800">
                            <p> Taylor Kim</p>
                            <span className=" text-lg font-normal text-gray-500 ">
                                @taylorkimm
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex justify-evenly m-2  max-md:m-5">
                    <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  rounded-xl ">
                        <div className=" m-5">
                            {" "}
                            <p className="text-lg ">
                                With this app, we can easily assign tasks, track progress, and manage documents all in one place.
                            </p>
                        </div>
                        <div className=" m-5 justify-normal flex items-center">
                            {" "}
                            <div className="h-12   w-12 ">
                                <img className=" h-12   w-12 " src={Person6} alt="person" />
                            </div>
                            <div className="ml-5  text-3xl text-violet-800">
                                <p> Sam Dawson</p>
                                <span className=" text-lg font-normal text-gray-500 ">
                                    @dawsontechtips
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-md:flex-wrap justify-evenly md:mx-24  ">
            <div className="flex justify-evenly m-2  max-md:m-5  ">
                <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  rounded-xl ">
                    <div className=" m-5">
                        {" "}
                        <p className="text-lg ">
                            This app has completely transformed how I manage my projects and deadlines.
                        </p>
                    </div>
                    <div className=" m-5 justify-normal flex items-center">
                        {" "}
                        <div className="h-12   w-12 ">
                            <img className=" h-12   w-12 " src={Person7} alt="person" />
                        </div>
                        <div className="ml-5  text-3xl text-violet-800">
                            <p> Morgan Lee</p>
                            <span className=" text-lg font-normal text-gray-500 ">
                                @morganleewhiz
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly m-2  max-md:m-5  ">
                <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  rounded-xl">
                    <div className=" m-5">
                        {" "}
                        <p className="text-lg ">
                            The customizability and integration capabilities of this app are top-notch.
                        </p>
                    </div>
                    <div className=" m-5 justify-normal flex items-center">
                        {" "}
                        <div className="h-12   w-12 ">
                            <img className=" h-12   w-12 " src={Person8} alt="person" />
                        </div>
                        <div className="ml-5  text-3xl text-violet-800">
                            <p> Riley Smith</p>
                            <span className=" text-lg font-normal text-gray-500 ">
                                @rileysmith1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly m-2  max-md:m-5  ">
                <div className="bg-white-100 hover:bg-gray shadow-md shadow-violet-100 hover:shadow-none  rounded-xl">
                    <div className=" m-5">
                        {" "}
                        <p className="text-lg ">
                            Its user-friendly interface and robust features support our diverse needs.
                        </p>
                    </div>
                    <div className=" m-5 justify-normal flex items-center ">
                        {" "}
                        <div className="h-12   w-12 ">
                            <img className=" h-12   w-12 " src={Person9} alt="person" />
                        </div>
                        <div className="ml-5  text-3xl text-violet-800">
                            <p> Casey Harper</p>
                            <span className=" text-lg font-normal text-gray-500 ">
                                @casey09
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    )
}

export default Testimonial