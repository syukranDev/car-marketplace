// import React from 'react'

import { SignInButton } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"
import Header from "./components/ui/Header"
import Hero from "./components/ui/Hero"
import Category from "./components/ui/Category"
import MostSearchedCar from "./components/ui/MostSearchedCar"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      {/* Hero */}
      <Hero />

      {/* Category */}
      <Category />

      {/* Most Searched Car */}
      <MostSearchedCar />

    </div>
  )
}

export default Home