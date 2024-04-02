import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" >
                    <div className="carousel-item active" style={{backgroundColor:'lightpink', height:'650px', backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'}}>
                        <img src="https://smartstudyassist.com/wp-content/uploads/elementor/thumbs/student_with_book-qkt7la5fishv9xs49w5n9rzo5i949q5t9mjs0qwikg.png" alt="..."  style={{height:'650px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hello EveryOne</h5>
                            <p>New Carousel here!</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{backgroundColor:'lightpink' , height:'650px', backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'}}>
                        <img src="https://smartstudyassist.com/wp-content/uploads/elementor/thumbs/student_with_book-qkt7la5fishv9xs49w5n9rzo5i949q5t9mjs0qwikg.png" alt="..." style={{height:'650px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hello EveryOne</h5>
                            <p>New Carousel here!</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{backgroundColor:'lightpink' , height:'650px', backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'}}>
                        <img src="https://smartstudyassist.com/wp-content/uploads/elementor/thumbs/student_with_book-qkt7la5fishv9xs49w5n9rzo5i949q5t9mjs0qwikg.png" alt="..." style={{height:'650px'}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hello EveryOne</h5>
                            <p>New Carousel here!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel
