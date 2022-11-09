import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/salon.png';
import { AuthContext } from '../../../context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
	const {user , LogOut} = useContext(AuthContext);
	console.log(user)

	const handleLogOut =()=>{
		LogOut()
		.then(()=>{})
		.catch(error => console.error(error))
	  }
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" to="" aria-label="Back to homepage" className="flex items-center p-2">
			<img className='w-10 h-10' src={logo}  alt="" />
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to="" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to="" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</Link>
			</li>
			
			<li className="flex">
				<Link to='/blog' rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
			</li>
		</ul>
        <>
            {
              user?.uid ?
              <>
                  <button variant="light" onClick={handleLogOut}>Log out</button>
              </>
              :
              <div div className="items-center flex-shrink-0 hidden lg:flex">
                 <Link to='/login'><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
                  <Link className='text-decoration-none  mx-3' to='/signup'><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
              </div>
          }
		  <div div className="items-center flex-shrink-0 hidden lg:flex">
		  {user?.photoURL?
		                
						<img src={user.photoURL} alt="" title= {user.displayName} className="w-10 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
						//   <img
						// 	  className='w-30 h-30 rounded-full'
						// 	  title= {user.displayName}
						// 	  src={user.photoURL}>
						//   </img>
				   
						  : <FaUser></FaUser>
					  }</div>
          </>

		
		{/* <div className="items-center flex-shrink-0 hidden lg:flex">
			<Link to='/login'><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
		</div> */}
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;