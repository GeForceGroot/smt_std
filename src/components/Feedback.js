/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'

const Feedback = () => {
    return (
        <>
            <div className='text-center'>
                <h1 style={{ fontSize: '50px', color: '#c75ec7' }}>We Are here to help you!</h1>
                <p style={{ fontSize: '25px', }}>Assignment Help for Students on All Subjects.</p>
                <a href="/all-subject" target='_blank'>
                    <button id='btnR' className='btn btn-lg'>Know More...</button>
                </a>
            </div>
        </>
    )
}

export default Feedback


