import Image from "next/image"
import Link from "next/link"
// import logo from '../../images/pakwheelLogo.png'
import logo from '../../images/pklogo.svg'
import './navbar.css'

export default function NavBar(){

    return (

        <div className="nav-container">

            <div className="logo">
                <Link href={'/'}><Image src={logo} alt="" className="logoImg"></Image></Link>
            </div>

            <nav>
                <ul>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/new-cars'}><li>New Cars</li></Link>
                    <Link href={'/bikes'}><li>Bikes</li></Link>
                    <Link href={'/auto-store'}><li>Auto Store</li></Link>
                    <Link href={'/videos'}><li>Videos</li></Link>
                    <Link href={'/forms'}><li>Forms</li></Link>
                    <Link href={'/blog'}><li>Blog</li></Link>
                    <Link href={'/more'}><li>More</li></Link>

                </ul>

                <div className="nav-btn">
                    <h1>Post an Ad</h1>
                    <div className="btn-content"></div>
                </div>
            </nav>
        </div>
    )
}