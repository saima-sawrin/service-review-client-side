import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import MyReview from "./MyReview";
import ClientReview from "./ClientReview";

const Review = () => {
	const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
	const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you want to cancel this review')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = reviews.filter(re => re._id !== id)
                        setReviews(remaining)
                    }
                })
        }
    }


	return (
		<div>
            <h1 className='text-xl'>my reviews:{reviews.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Client Name</th>
                            <th>FeedBack</th>
                            <th>Edit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}

                            ></MyReview>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Review;