import React from "react"
import profile from "../assets/profile.jpg"

export default function Profile() {
    return (
        <div width="317px" className="profile">
            <img src={profile} id="picture" alt="Profile Picture" width="317px" height="317px" />
            <h2>Rafael Quintanilha</h2>
            <h4>Frontend Developer</h4>
            <a href="http://troopl.com/rafaelquintanilha18" target="_blank"><p>rafael.website</p></a>
        </div>
    )
}
