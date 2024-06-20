import React, { useState } from 'react'


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
        <div>
            {reviews.map(review=><div><img src={review.image} width='100px'></img><div>{review.name}</div>
            
            <p>{review.age} years</p>
            </div> )}
        
        </div>
    )
  }


export default Review