
import './hero.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";




export default function Hero(){

    return (

        <div className="hero-container">
            <div className="main">
            <h1>Find Used Cars in Pakistan</h1>
            <p>With thousands of cars, we have just the right one for you</p>
            <div className='search-bar'>

                <input type="text" placeholder='search your car'/>
                <div className='icon'><IoSearchSharp /></div>
            
            </div>

            {/* <button className='hero-btn'>Advanced Filter <IoIosArrowForward /></button> */}
            <div className="hero-btn">
                <span>Advanced Filter</span><IoIosArrowForward />
            </div>
            </div>
        </div>
    )
}