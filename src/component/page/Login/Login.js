import React, { useContext, useState } from 'react';
import img from '../../../assets/img/login.png';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { FaGoogle , FaGithub } from "react-icons/fa";

const Login = () => {
    const {LogIn , signIN} = useContext(AuthContext)
 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider()
 const[error , setError] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || '/';


 const handleSubmit = event =>{
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     LogIn(email, password)
     .then(result => {
         const user = result.user;
         console.log(user);
         form.reset();
 
         setError('');
         navigate(from, {replace: true});
     })
     .catch(error => {
        console.error(error)
        setError(error.message)
        
    })
    
 }
 const handleSignIn = () =>{
    signIN(googleProvider)
    .then(result=> {
      const user = result.user;
     
      console.log(user);
      navigate(from, {replace:true});
    })
    .catch(error => console.error(error))
  }
  const handleGithub=()=>{
      signIN(githubProvider)
   .then(result=>{
       console.log(result.user)
       navigate(from, {replace: true});
     }).catch(error=>{
       console.log(error)
     })

   }
    return (
            <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
             
            <div className="text-center lg:text-left">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='text-center'>New to Beauty Salon? <Link className='font-bold' to="/signup">Sign Up</Link> </p>
                     <div className=' mb-2'>
                    
                  <button onClick={handleSignIn}  className="btn border-0 bg-gradient-to-r from-purple-500 to-pink-500 mb-2 " variant='outline-primary'> <FaGoogle className='text-yellow-400'></FaGoogle>  Log in with Google</button>
                     <br />
                     <button onClick={handleGithub}  className="mb-2 btn border-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" variant='outline-primary'><FaGithub className='text-yellow-400'></FaGithub>  Log in with Github</button>
                     </div>
                    </form>
                    
                </div>

            </div>
        </div>
    );
    };
export default Login;