import hondaCar1 from '../../images/honda1.jpg'
import Image from 'next/image'
import './car.css'
import Link from 'next/link'


export default function HondaCar1 (){

    return (

        <div className="car-page my-6">
            <h1>Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
            <Image src={hondaCar1} alt='' className='img1'></Image>
            <div className='flex gap-5 mb-5'>
                <button>Book a Test Drive</button>
                <button>Request a Bank Finance</button>
                <button>Visit Place</button>
                <button>Car Inspaction</button>
            </div>
            <div>
                <span className='text-2xl block text-center mb-4'>Vehicle Deccription</span>
                <div className='flex flex-wrap gap-7'>
                    <div><span className='font-bold'>Number of Doors </span><span>4 Doors</span></div>
                    <div><span className='font-bold'>Engine </span><span>1199 cc to 1497 cc</span></div>
                    <div><span className='font-bold'>condition </span><span>9/10</span></div>
                    <div><span className='font-bold'>driven </span><span>12,000 km to 16,000 km</span></div>
                    <div><span className='font-bold'>Transmission </span><span>Automatic & Manual</span></div>
                </div>
                <div className='flex gap-8 justify-center items-center mt-7'>
                    <h1 className='border-2 p-1'>PKR 60 lacs</h1>
                    <Link href='../../form'><button>Payment</button></Link>
                </div>
            </div>
        </div>
    )
}