'use client'


import './form.css'


export default function Form (){

    // const formSubmit = document.querySelector('form')?.addEventListener('submit', ((e)=>{

    //     e.preventDefault()
    // }))

   
    return (
        <div className="form">

                <form action="" className='main-form'>

                        <input type="text" placeholder='Enter Your Name' required/>
                        <input type="text" placeholder='Enter Your Email' required/>
                        <input type="text" placeholder='Enter Your Card Number' required/>
                        <input type="text" placeholder='Enter Your Address' required/>
                        {/* <Link href={'/thanks'}><input type="submit" className='submit'/></Link> */}
                        <input type="submit" className='submit' onClick={

                            function(){

                                alert('Thanking You')
                            }
                        }/>
                        
                </form>

                
           
        </div>
    )
}