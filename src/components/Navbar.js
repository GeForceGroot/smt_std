/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white", border: "2px solid lightgray", position: "sticky", top: '0', zIndex: '1', opacity: '.8', backgroundImage: 'linear-gradient(to bottom right, #91defe, #99c0f9, #bdb6ec, #d7b3e3, #efb3d5,#f9bccc)' }}>
                <a className="navbar-brand" href="#">
                    <img  style={{borderRadius:'25px'}} src="https://media.istockphoto.com/id/1197901679/vector/open-book-color-vector-template-icon.jpg?s=612x612&w=0&k=20&c=XdFcmrOHtGYGH7ab4YplsEpPzaLS4WUeeO6Nr6aaols=" width="60" height="60" alt="" />
                </a>
                <a className="navbar-brand" href="#" style={{ fontSize: "25px" }}>Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <div className='container'></div>
                    <div className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav ml-auto" style={{ fontSize: "25px" }}>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Services<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About_Us<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Contact_Us<span className="sr-only"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
