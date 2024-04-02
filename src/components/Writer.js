import React from 'react'
import './writerStyle.css'

const Writer = () => {
    return (
        <>
            <div className="row" style={{transition:'all 3s ease-in',
                margin: '60px', backgroundColor: 'darkkhaki', border: '1px solid gray', borderRadius: '10px 20px 30px 40px/30px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)'
            }}>
                <div className="col-md-6 how-img" style={{ marginTop: '25px', marginBottom: '25px', borderRadius:'50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVZPfv7ndDfkEuL2mqgLn0X4XRqz0BkZONw&usqp=CAU" className="rounded-circle img-fluid" alt="" />
                </div>
                <div className="col-md-6" style={{ marginTop: "80px", fontSize:"25px", color:"Highlight" }}>
                    <h4>Shruti Jain</h4>
                    <h4 className="subheading">ASSIGNMENT EXPERT</h4>
                    <p className="text-muted">At Smart Study Assist, we’re committed to your academic success. With certified writers, 24/7 support, and guarantees on quality and punctuality, we’re here to help you excel in every assignment.</p>
                </div>
            </div>
            <hr style={{ marginLeft: "150px", marginRight: "150px", border: "2px solid lightblue" }} />
        </>
    )
}

export default Writer
