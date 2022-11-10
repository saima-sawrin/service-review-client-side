import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../context/AuthProvider';
import PrivateRoute from '../../../Router/PrivateRouter';
import ClientReview from '../Review/ClientReview';

// import { AuthContext } from '../../../context/AuthProvider';


const Details = () => {
    const {_id,rating,price, service_id, title ,img , description}= useLoaderData();
    const{user} = useContext(AuthContext)
	console.log(user)
	useTitle('Details')

	const handleReviewBtn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            service: _id,
            customer: name,
            email,
            message,

        }

        fetch('https://service-review-server-saima-sawrin.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    alert('review successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err));


    }

	
    return (
        <div className='flex w-3/5 justify-between m-auto'>

            {/* Service details section */}
            <div>
            
            <div className="card w-96 bg-base-100 shadow-xl m-auto mt-5  text-black">
        <PhotoProvider>
              <PhotoView src={img}>
              <figure><img src={img} alt="Shoes" /></figure>
              </PhotoView>
            </PhotoProvider>
          {/* <figure><img src={img} alt="Shoes" /></figure> */}
          <div className="card-body">
            <h2 className="card-title">
             {title}
            </h2>
            <p>{
                  
                   description}</p>
            <div className="card-actions justify-evenly ">
             <div className='flex pt-4 my-2'>
             <p>{rating} </p>
             <FaStar className='me-3 w-5 h-5 fill-current text-amber-500'></FaStar>
             <p className='mx-3'><b>Price: ${price}</b></p>
			 <br />
			 
             </div>
              
            </div>
          </div>
        </div>
           
           </div>



            {/*  Review Section */}
            <div className='reviewPart  w-2/5 '>
      
      
 {/* Customer Review */}
<div className='justify-end'>

</div>
<h1 className='text-xl'>Add Review</h1>
            <form onSubmit={handleReviewBtn}>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="name" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " required />

                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="your review"></textarea>
                <input className='btn ' type="submit" value="Give Your Feedback" />
            </form>

            </div>
        </div>
    );
};

export default Details;