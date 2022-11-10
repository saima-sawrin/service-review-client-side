import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyReview = ({ review, handleDelete }) => {
    const {user} = useContext(AuthContext);


    const {_id,image,feedback , rate,name,client_id}= review;
    console.log(review)

    const  handleAddReview = (event)=>{
        event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
	const rate = event.rate.value;
    const email = user?.email || 'unregistered';


    const review = {
        image:image,
        feedback:feedback,
        rate:rate
   
    }
        fetch('https://service-review-server-saima-sawrin.vercel.app/reviews',{
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
    }
    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{rate}</div>
                </div>
            </div>
        </td>
        <td>
            {feedback}
            <br />

        </td>

        <th>
            <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
    </tr>
);
};
  
export default MyReview;