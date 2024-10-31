import './secSection.css'
import { GiCheckMark } from "react-icons/gi";




export default function SecSection (){

    return (

        <div className='section-two'>
            <div className="heading">Sell Your Car on PakWheels and Get the Best Price </div>
            <div className='main-div'>
                <div className="left-div">
                    <h1>Post your Ad on PakWheels</h1>
                    <div className='tick-icon'><GiCheckMark /><p>Post your Ad for Free in 3 Easy Steps</p></div>
                    <div className='tick-icon'><GiCheckMark /><p>Get Genuine offers from Verified Buyers</p></div>
                    <div className='tick-icon'><GiCheckMark /><p>Sell your car Fast at the Best Price</p></div>
                    <button>Post Your Ad</button>
                </div>
                
                <div className="right-div">

                <h1>Post your Ad on PakWheels</h1>
                    <div className='tick-icon'><GiCheckMark /><p>Post your Ad for Free in 3 Easy Steps</p></div>
                    <div className='tick-icon'><GiCheckMark /><p>Get Genuine offers from Verified Buyers</p></div>
                    <div className='tick-icon'><GiCheckMark /><p>Sell your car Fast at the Best Price</p></div>
                    <button>Post Your Ad</button>
                    
                </div>
            </div>
        </div>
    )
}