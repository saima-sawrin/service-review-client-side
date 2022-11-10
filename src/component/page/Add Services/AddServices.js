import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddServices = () => {
    const {user} = useContext(AuthContext);

    const services = useLoaderData();
    const {_id,img,title,description , rating,price , service_id}= services;
  

    const  handleAddService = (event)=>{
        event.preventDefault();
    const form = event.target;
    const title = `${form.title.value} `;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    // const email = user?.email || 'unregistered';


    const service = {
        service_id: service_id,
        title: title,
        img:img,
        description:description,
        price: price,
        rating: rating
   
    }
        fetch('https://service-review-server-saima-sawrin.vercel.app/allServices',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(service),
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('successfully added')
                event.target.reset();
            }
        })
    }
   
    return (
        <div className='mx-6'>
     <h2 className="text-4xl">Add Service</h2>
        <div>
            <form onSubmit={handleAddService}>
                
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='img' placeholder='img' className="input input-ghost w-full  input-bordered" />
                    <input type="text" name='title'placeholder='title' className="input input-ghost w-full  input-bordered" />
                    <input type="text" name='description' placeholder='description'  className="input input-ghost w-full  input-bordered" required />
                    <input  type="rating" name ='rating'placeholder='rating'className="input input-ghost w-full  input-bordered" />
                    <input  type="price" name='price'placeholder='price'className="input input-ghost w-full  input-bordered"  />
                </div>
        

                <input className='btn' type="submit" value="Add Service" />
            </form>
        </div>


    </div>
    );
};

export default AddServices;
