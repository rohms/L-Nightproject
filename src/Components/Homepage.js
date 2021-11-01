import React from 'react'
import lnightb from "../Images/lnightber1.png"
import "../Components/Styles/Homepage.css"

const Homepage = () => {
    return (
        <div>
            <img className="heropicture" src={lnightb} alt="L-Night Berlin Group"></img>
            <h1>Welcome to meet new people in the L-Night</h1>
            <span>-----</span>
            <h2>The group for queer and lesbian women in Berlin</h2>
        </div>
    )
}

export default Homepage;
