import Card from "../card/Card";
import bmw1 from '../../images/bmw1.jpg'
import honda1 from '../../images/honda1.jpg'
import toyota1 from '../../images/toyota1.jpg'
import bmw11 from '../../images/bmw11.jpg'
import './featured.css'
import Link from "next/link";




export default function Featured (){

    return (
        
        <div className="feature-main">
            <h1>Featured New Cars</h1>
            <div className="card-div">
            <Link href={'../../bmw/bmwCar1'}><Card name={bmw1} carName="BMW X1" carPrice="PKR 3.0 crore" carLaunched="Launching October 2024*"/></Link>
            <Link href={'../../honda/hondaCar1'}><Card name={honda1} carName="Honda City" carPrice="PKR 46.5 - 58.5 lacs" carLaunched="Launching October 2024*"/></Link>
            <Link href={'../../toyota/toyotaCar1'}><Card name={toyota1} carName="2024 Toyota Corolla" carPrice="PKR 59.7 - 75.5 lacs" carLaunched="Launching October 2024*"/></Link>
            <Link href={'../../bmw/bmwCar11'}><Card name={bmw11} carName="2024 BMW X7" carPrice="PKR 2.9 crore" carLaunched="Launching October 2024*"/></Link>
            </div>
        </div>
    )
    
}


