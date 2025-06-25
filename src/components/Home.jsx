import React from 'react'
import Header from './Header'
import Hero from './Hero'
import PopularDestinations from './PopularDestinations'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Footer from './Footer'
import FlightSearch from './FlightSearch'
import DestinationList from '../pages/DestinationList'
import PopularPlace from '../pages/PopularPlace'

export default function Home() {
  return (
    <div>
  <Header />
        <Hero />
        <FlightSearch />
          <WhyChooseUs />
<PopularPlace />
<PopularDestinations />
          <div className='dslist py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Most Popular Destinations</h2>
            <p class="text-gray-600 mb-12">Book now your most popular destinations</p>
          <DestinationList />
           </div>
           </div>
           <Testimonials />
  <Newsletter />
  <Footer />

    </div>
  )
}
