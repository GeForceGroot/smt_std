/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'

const WhatApp = () => {
    return (
        <>
            <div className='whats-app'>
                <a href="https://api.whatsapp.com/send?phone=+919680927797&text=Hello" target='_blank'>
                <img src="https://i.pinimg.com/474x/05/3f/9f/053f9fc39a64597fc33a14d6e8f435e0.jpg" style={{borderRadius:"40px", border:"3px solid green"}} width={'75px'} height={'75px'} alt="what's-app" />
                </a>
            </div>
        </>
    )
}

export default WhatApp
