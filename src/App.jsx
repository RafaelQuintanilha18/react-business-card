import './App.css'
import React from "react"
import Profile from "./Components/Profile"
import Buttons from "./Components/Buttons"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

export default function App() {
  return (
      <div className='main-container'>
          <div className='dark-version'>
            <Profile />
            <Buttons />
            <Content />
            <Footer />
          </div>
          <div className='light-version'>
            <Profile />
            <Buttons />
            <Content />
            <Footer />
          </div>
      </div>
  )
}
