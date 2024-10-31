import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





export default function Footer (){

    return (

        <div className="footer-main">
            <div className='social'>
            <FaFacebook className='social-icon'/>
            <FaInstagramSquare className='social-icon'/>
            <FaTwitter className='social-icon'/>
            <FaYoutube className='social-icon'/>


            </div>
            <p>All rights reserved by sunnyblaster (testWebsite)</p>
        </div>
    )
}