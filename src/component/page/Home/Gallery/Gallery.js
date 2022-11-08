import React from 'react';

const Gallery= () => {
    return (
        <div>
        <div className="text-center">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              View gallery
        
            </a>
          </div>
            <section className="py-6 dark:bg-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Gallery;