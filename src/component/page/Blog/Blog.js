import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
	useTitle('blog');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Blog</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Answer to The Question</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between sql and nosql?</summary>
				<div className="px-4 pb-4">
					<p>The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT and How does it work?</summary>
				<div className="px-4 pb-4">
					<p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">what is the difference between javascript and node js?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                    JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.
      
                    JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.      </p>
      					<p>javaScript is mainly used to create front end web applications or develop       client-side whereas Node.js is used on the back end development that is server-side development 
						JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++  while using the v8 engine, it runs JavaScript outside the browser.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">how does NodeJs handle multiple request at the same time</summary>
				<div className="px-4 pb-4 space-y-2">
					
      					<p>With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;