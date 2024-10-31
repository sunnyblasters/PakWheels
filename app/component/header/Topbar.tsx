import './topbar.css'
import { ImMobile } from "react-icons/im";


export default function TopBar (){

    return (

        <div className="topBar">

            <div className="left-bar">
            <ImMobile />
            <span>Download App via SMS</span>

            </div>
            <div className="right-bar">
            <span>اردو</span>
            <span>Sign Up</span>
            <span>Sign In</span>
            </div>
            
        </div>
    )
}