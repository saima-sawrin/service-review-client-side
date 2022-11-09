import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../../Hooks/useTitle';

const AllCard = ({allService}) => {
    const{_id,rating,price, service_id, title ,img , description} = allService;
    useTitle('Services')
    return (
        <div >
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
                  description.length > 100? <>{description.slice(0,100)+ '.......'}<Link to={`/service/${_id}`}><b className='text-blue'>Read more</b></Link></> :
                   description}</p>
            <div className="card-actions justify-evenly ">
             <div className='flex pt-4 my-2'>
             <p>{rating} </p>
             <FaStar className='me-3 w-5 h-5 fill-current text-amber-500'></FaStar>
             <p className='mx-3'>Price: ${price}</p>
             </div>
              <Link to={`/service/${_id}`}><button className="btn border-2 ">Details</button></Link>
            </div>
          </div>
        </div>
        
        </div>
    );
};

export default AllCard;