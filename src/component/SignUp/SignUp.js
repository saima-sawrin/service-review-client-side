import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/login.png';

import { AuthContext } from '../../context/AuthProvider';
const SignUp = () => {
    const {createUser , profileUpdate , verifyEmail , signIN} = useContext(AuthContext);
    const[error , setError] = useState('');

     const handleSubmit = event => {
         event.preventDefault();
         const form = event.target;
         const name = form.name.value;
         const photoURL = form.photoURL.value;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, photoURL, email, password);
        
         createUser(email, password)
         .then( result => {
             const user = result.user;
             alert('Please Verify your email ');
             console.log(user);
             form.reset();
             handleUpdateProfile(name , photoURL)
             handleEmailVerification();
             alert('Successfully Registered')
            
             
         })
         .catch( e => {
             alert(e)
             setError(e.message)
 
         });
         
         
     }
  
     const handleUpdateProfile = (name, photoURL)=>{
         const profile = {
             displayName: name,
             photoURL : photoURL
         }
         profileUpdate(profile)
         .then(()=>{})
         .catch(error => console.error(error))
 
     }
     const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

 
   
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-primary font-bold' to="/login">Login</Link> </p>
            </div>
        </div>
    </div>
);
};



export default SignUp;