import React, { useState } from 'react'
import './review.css'


function Review () {
    const [reviews,setReviews] = useState (
        [
         {
           id: 1,
           name: 'Bertie Yates',
           age: 29,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
         },
         {
           id: 2,
           name: 'Hester Hogan',
           age: 32,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
         },
         {
           id: 3,
           name: 'Larry Little',
           age: 36,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
         },
         {
           id: 4,
           name: 'Sean Walsh',
           age: 34,
           image:
             'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
         },
         
       ]
    )
       
      
  
    return (
        <div className='main'>
            <div className='main1'>
        <div className='container'>
            <div className='card row  '>
            <h2> {reviews.length} Birthdays today</h2>
            <div className='card-bodyy row'>
            {reviews.map(review=><div className=' row '><div className='d-flex justify-content:center align-items-center' ><img className="image  " src={review.image} ></img> 
            <div className='col-12 ms-4 '>
                  <h5 className="mb-1">{review.name}</h5>
                  <p className="mb-0">{review.age} years</p>
                </div> </div>
            
            
            </div> )}
            </div>
            <button className='btn'>Clear</button>
            </div>
        </div>

        
        </div>
        </div>
    )
  }


export default Review