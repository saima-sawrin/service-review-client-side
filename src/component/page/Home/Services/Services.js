import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import  Service from'./Service/Service';
import './Service/service.css';

const Services = () => {
    // const services = useLoaderData();
    // console.log(services)
    const[services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },
        [])
    return (
        <div className='text-align-center'>
              <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none md:mb-6 text-center group ">
     Our Services
     </h2>
     <div className='serviceCard '>
        {
            services.map(service => <Service key={service._id} service={service}></Service>)
         }
     </div>
        </div>
    );
};

export default Services;