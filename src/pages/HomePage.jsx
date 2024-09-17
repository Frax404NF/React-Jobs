import Hero from '../components/Hero'
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs'

import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default HomePage