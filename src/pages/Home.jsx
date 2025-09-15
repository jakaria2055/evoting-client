import React from 'react'
import Hero from '../components/Hero'
import VoteResult from '../components/VoteResult'
import Parties from '../components/Parties'
import OurServices from '../components/OurServices'

function Home() {
  return (
    <>
     <Hero />
     <VoteResult />
     <Parties />
     <OurServices />
    </>
  )
}

export default Home