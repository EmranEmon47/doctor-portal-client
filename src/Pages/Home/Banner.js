import React from 'react'
import banner from '../../assets/images/banner-remove.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen " >
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="min-w-xxl " />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500 ...">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner