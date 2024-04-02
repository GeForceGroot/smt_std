import React from 'react'
import './bubble.css'
const AcademicImpact = () => {
    return (
        <>
            <section className='hell' style={{ justifyContent: "center", textAlign: 'center', marginTop: '50px', }}>
                <div className='ok' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ padding: '7px', color: 'rgb(170 51 170 / 82%)' }}>Academic Impact</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/3281/3281323.png" width={'50px'} height={'50px'} style={{ marginRight: '20px' }} alt="" />
                </div>
                <div className='conatiner' style={{ display: 'flex', justifyContent: "center", marginTop: "125px" }}>
                    <div className="ball" style={{ marginLeft: '400px' }}>
                        <p style={{ marginTop: '50px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>1571</p>
                        <p style={{ marginBottom: '20px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>Projects Completed</p>
                        <div className="shadow" style={{ marginTop: '50px', marginLeft: '25px' }}></div>
                    </div>
                    <div className="ball" style={{ marginLeft: '300px', marginRight: '300px' }}>
                        <p style={{ marginTop: '50px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>1042</p>
                        <p style={{ marginBottom: '20px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>Happy Students</p>
                        <div className="shadow" style={{ marginTop: '50px', marginLeft: '25px' }}></div>
                    </div>
                    <div className="ball" style={{ marginRight: '400px' }}>
                        <p style={{ marginTop: '50px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>15</p>
                        <p style={{ marginBottom: '20px', fontSize: "25px", fontWeight: 'bold', color: "rgb(115 10 115 / 89%)" }}>Years Experience</p>
                        <div className="shadow" style={{ marginTop: '50px', marginLeft: '25px' }}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AcademicImpact
