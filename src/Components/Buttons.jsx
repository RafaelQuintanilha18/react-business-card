import React from "react"

export default function Buttons() {
    return (
      <div width="317px">
        <a href="mailto:rafael.quintanilha18@gmail.com" target="_blank">
        <button className="btn-email"><i class="fa-solid fa-envelope"></i>Email</button>
        </a>
        <a href="https://www.linkedin.com/in/rafael-quintanilha/" target="_blank">
          <button className="btn-linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </a>
      </div>
    )
}
