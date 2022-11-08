import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://perfectioncosmetic.co.uk/wp-content/uploads/2019/07/slider-item-2-1-1-2.jpg")` }}>
  {/* <div className="hero-overlay bg-opacity-20"></div> */}
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-lime-900 ">
      <h1 className="mb-5 text-5xl font-bold">Relax Your Body and mind with your health and beauty theme</h1>
      <p className="mb-5 text-stone-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-violet-500 border-0">View Our Service</button>
    </div>
  </div>
</div>
    );
};

export default Hero;