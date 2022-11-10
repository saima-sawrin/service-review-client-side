import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AllCard from './AllCard';


const AllServices = () => {
    
  const[allServices, setAllServices] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/allServices')
    .then(res => res.json())
    .then(data => setAllServices(data))
},
    [])
    return (
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <h2>Total Services: {allServices.length}</h2>
        <div  className='serviceCard grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-1'>
        {
            allServices.map(allService => <AllCard key={allService._id} allService={allService}></AllCard>)
         }
      </div>
      <button  className='btn btn-secondary mt-3'><Link to='/addServices'>Add Service</Link></button>
      </div>


    
    );
};

export default AllServices;