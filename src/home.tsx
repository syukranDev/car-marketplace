// import React from 'react'

import { SignInButton } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"
import Header from "./components/ui/Header"
import Hero from "./components/ui/Hero"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      

      {/* Hero */}
      <Hero />

    </div>
  )
}

export default Home