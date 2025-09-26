// import React from 'react'
import { useUser, UserButton, SignInButton } from "@clerk/clerk-react"
import { Button } from "./button"

function Header() {

    const { user, isSignedIn } = useUser()
  return (
    <div className="flex items-center justify-between p-5 shadow-sm">
        <p>LOGO</p>
        {/* <img src="/logo.svg" alt="" width={100} height={80}/> */}

        <ul className="gap-16 hidden md:flex">
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
        </ul>

        { isSignedIn ? (
            <div className="flex items-center gap-4">
                <UserButton/>
                <Button>Submit Listing</Button>
            </div>
        ) : 
            <SignInButton mode="modal">
                <Button>Sign In</Button>
            </SignInButton>
    
        }
    </div>
  )
}

export default Header