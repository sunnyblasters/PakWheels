import Image from 'next/image'
import './card.css'

interface CarDetail {

    name:any,
    carName:string,
    carPrice:string,
    carLaunched:string
}


export default function Card(props:CarDetail){

    return (

        <div className='card-main'>
            <Image src={props.name} alt=''></Image>
            <h2>{props.carName}</h2>
            <p>{props.carPrice}</p>
            <p>{props.carLaunched}</p>
        </div>
    )
}