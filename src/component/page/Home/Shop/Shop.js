import React from 'react';
import img1 from '../../../../assets/1.jpg';
import img2 from '../../../../assets/2.jpg';
import img3 from '../../../../assets/3.jpg';
import img4 from '../../../../assets/4.png';

const Shop = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none md:mb-6 text-center group">
                Visit Our Shop
            </h2>
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={img1}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">Lakme EyeLiner</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Price: $ 250
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={img2}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                  Super Nibana Lipstick
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                  Price: $450
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={img3}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">Himalaya Facewash</p>
                  <p className="text-sm tracking-wide text-gray-300">
                   Price: $560
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={img4}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                   Aloe Vera Gel
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                   Price: $350
                  </p>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      );
    };


export default Shop;



    