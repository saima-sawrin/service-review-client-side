import React, { useEffect, useState } from 'react';

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
    
        <div  className='serviceCard '>
        {
            allServices.map(allService => <AllCard key={allService._id} allService={allService}></AllCard>)
         }
      </div>


    
    );
};

export default AllServices;