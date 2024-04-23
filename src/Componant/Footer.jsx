import React from 'react'
import Logo from "../Componant/images/Footer/Logo.png"
import Social1 from "../Componant/images/Footer/Social1.png"
import Social2 from "../Componant/images/Footer/Social2.png"
import Social3 from "../Componant/images/Footer/Social3.png"
import Social4 from "../Componant/images/Footer/Social4.png"
import Social5 from "../Componant/images/Footer/Social5.png"
import Social6 from "../Componant/images/Footer/Social6.png"

const Footer = () => {
    return (
        <div className=' bg-black text-white max-sm:flex-col flex justify-between'>
            <div>
                <div className='mt-2 m-2 ' >
                    <img src={Logo} alt="person" />
                </div>
                <div className='mt-3 m-2 '>
                    <span >Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</span>
                </div>
                <div className='flex mt-14 '>
                    <img className='m-2' src={Social1} />
                    <img className='m-2' src={Social2} />
                    <img className='m-2' src={Social3} />
                    <img className='m-2' src={Social4} />
                    <img className='m-2' src={Social5} />
                    <img className='m-2' src={Social6} />
                </div>
            </div>

            <div className='flex justify-evenly max-sm:flex-col mt-4  '>
                <div className='mx-5 mb-5' >
                    <div><a className='font-bold' href="#">product </a></div>

                    <div> <a href="#">Features </a></div>
                    <div> <a href="#">Integrations</a></div>
                    <div><a href="#">Update</a></div>
                    <div><a href="#">FAQ </a></div>
                    <div><a href="#">Pricing </a></div>
                </div>
                <div className='mx-5 mb-5'>
                    <div><a className='font-bold' href="#">Company </a></div>

                    <div> <a href="#">about </a></div>
                    <div> <a href="#">Blog</a></div>
                    <div><a href="#">Careers</a></div>
                    <div><a href="#">Manifesto </a></div>
                    <div><a href="#"> Press</a></div>
                    <div><a href="#"> Contact</a></div>
                </div>
                <div className='mx-5 mb-5'>
                    <div><a className='font-bold' href="#">Resources </a></div>

                    <div> <a href="#"> Example</a></div>
                    <div> <a href="#">Community</a></div>
                    <div><a href="#">Guide</a></div>
                    <div><a href="#">Docs </a></div>

                </div>
                <div className='mx-5 mb-5'>
                    <div><a className='font-bold' href="#">Legal </a></div>

                    <div> <a href="#">Privacy </a></div>
                    <div> <a href="#">Terms</a></div>
                    <div><a href="#">Security</a></div>

                </div>
            </div>
        </div>

    )
}

export default Footer