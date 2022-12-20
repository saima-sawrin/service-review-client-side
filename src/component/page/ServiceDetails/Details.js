import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../context/AuthProvider';


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
        const feedback = form.feedback.value;

        const review = {
            service: _id,
            name: name,
            email,
            feedback,

        }

        // fetch('https://service-review-server-saima-sawrin.vercel.app/reviews', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledge) {
        //             alert('review successfully')
        //             form.reset()
        //         }
        //     })
        
        fetch(`https://service-review-server-saima-sawrin.vercel.app/reviews?email=${user?.email}`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(review),
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('successfully added')
                event.target.reset();
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
      
      
<div className='justify-end'>

	 {/* Customer Review */}
<div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Leroy Jenkins</h4>
				<span className="text-xs dark:text-gray-400">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		{/* <p>{review.message}</p> */}
	</div>
</div>
</div>
<h1 className='text-xl'>Add Review</h1>
            <form onSubmit={handleReviewBtn}>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="name" className="input input-bordered w-full " required />
                    <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " required />

                </div>
                <textarea name='feedback' className="textarea textarea-bordered h-24 w-full" placeholder="your review"></textarea>
                <input className='btn ' type="submit" value="Give Your Feedback" />
            </form>

            </div>
        </div>
    );
};

export default Details;