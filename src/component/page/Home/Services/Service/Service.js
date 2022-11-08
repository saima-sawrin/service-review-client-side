import React from 'react';
import './service.css';

const Service = ({service}) => {
  const{_id, service_id, title ,img , description} = service;

    return (
<div >


<div className="card w-96 bg-base-100 shadow-xl m-auto mt-5  text-black">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button>Details</button>
    </div>
  </div>
</div>

</div>
    );
};

export default Service;