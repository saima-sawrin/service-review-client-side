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
        fetch('http://localhost:5000/allServices',{
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
    // const handleInputBlur = event =>{
    //     const form = event.target;
    //     const service = form.service;
    //     const value = form.value;
    //     const newService =  {...service}
    //     newService[service] = value;
    //     setService(newService)
    // }
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
        
{/* <form onSubmit={handleAddService}>
  <div class="relative z-0 mb-6 w-full group">
      <input onBlur={handleInputBlur} type="text" name='img' placeholder='img' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
      
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input onBlur={handleInputBlur} type="text" name='title'placeholder='title' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required/>
      
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input onBlur={handleInputBlur} type="text" name='description' placeholder='description'  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
      
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input onBlur={handleInputBlur} type="rating" name='rating'placeholder='rating' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required/>
       
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input onBlur={handleInputBlur} type="price" name='price'placeholder='price'  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
        
    </div>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}

    </div>
    );
};

export default AddServices;

{/* <a href="https://ibb.co/x54bgvY"><img src="https://i.ibb.co/j4pYwKz/haircut.jpg" alt="haircut" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>pie de foto instagram tumblr</a><br /> */}