import React from 'react'
import './style.css'
import { useState } from 'react'

const AssigementProvideType = () => {
    const [hoverI, setHoverI] = useState(true);
    const [hoverII, setHoverII] = useState(true);
    const [hoverIII, setHoverIII] = useState(true);
    const [hoverIV, setHoverIV] = useState(true);
    const [hoverV, setHoverV] = useState(true);
    const [hoverVI, setHoverVI] = useState(true);

    const handleHoverEnterI = () => {
        setHoverI(true);
    };

    const handleHoverLeaveI = () => {
        setHoverI(false);
    };
    const handleHoverEnterII = () => {
        setHoverII(true);
    };

    const handleHoverLeaveII = () => {
        setHoverII(false);
    };
    const handleHoverEnterIII = () => {
        setHoverIII(true);
    };

    const handleHoverLeaveIII = () => {
        setHoverIII(false);
    };
    const handleHoverEnterIV = () => {
        setHoverIV(true);
    };

    const handleHoverLeaveIV = () => {
        setHoverIV(false);
    };
    const handleHoverEnterV = () => {
        setHoverV(true);
    };

    const handleHoverLeaveV = () => {
        setHoverV(false);
    };
    const handleHoverEnterVI = () => {
        setHoverVI(true);
    };

    const handleHoverLeaveVI = () => {
        setHoverVI(false);
    };
    return (
        <>
            <section className="popular space" style={{ margin: '60px' }} >
                <div className="box hexagon" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:'25px' }}>
                    <div className="text-center section-heading" >
                        <h1>🧑🏻‍🏫Types of Assignment We provide!</h1>
                    </div>
                    <div className="row justify-content-between" style={{ margin: '60px' }} >
                        {hoverI ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveI}>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon7.svg" alt="" width={"60px"} height={'60px'} />
                                    <h3>Study Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                    <span className="innerShape"></span>
                                    <h4>Study Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">When you avail the assistance of the essay helpers at MyAssignment.live, you get to accomplish each of your academic objectives. You also get to learn different kinds of lessons associated with your curriculum, clear your doubts on a specific concept and improve your knowledge through short yet remarkable sessions. Subscribe to our services to know more!</p>
                                    <p></p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#f467f4", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterI}>
                                <div className="hex" style={{ opacity: '0' }}>
                                    <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon7.svg" alt="" />
                                    <h3>Study Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h4>Study Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">When you avail the assistance of the essay helpers at MyAssignment.live, you get to accomplish each of your academic objectives. You also get to learn different kinds of lessons associated with your curriculum, clear your doubts on a specific concept and improve your knowledge through short yet remarkable sessions. Subscribe to our services to know more!</p>
                                    <p></p>
                                </div>
                            </div>
                        )}
                        {/* ----------- */}
                        {hoverII ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveII}>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img src="https://myassignment.live/front/img/essay-writing.svg" alt="" width={"60px"} height={'60px'} />
                                    <h3>Essay Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                    <span className="innerShape"></span>
                                    <h4>Essay Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">Struggling to turn in an excellent essay? Approach us saying, 'I need help with my essay,' and our online essay writers&nbsp;will craft a paper that will reflect extensive research skills, creativity, and strong argumentative skills. Besides abiding by the requirements, it will also be engaging and gripping, leaving your professors spellbound.</p>
                                    <p></p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#b867f4", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterII}>
                                <div className="hex" style={{ opacity: '0' }}>
                                    <img src="https://myassignment.live/front/img/essay-writing.svg" alt="" />
                                    <h3>Essay Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h4>Essay Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">Struggling to turn in an excellent essay? Approach us saying, 'I need help with my essay,' and our online essay writers&nbsp;will craft a paper that will reflect extensive research skills, creativity, and strong argumentative skills. Besides abiding by the requirements, it will also be engaging and gripping, leaving your professors spellbound.</p>
                                    <p></p>
                                </div>
                            </div>
                        )}


                        {/* ---------------- */}

                        {hoverIII ? (
                            <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveIII}>
                                <div className="hex" style={{ opacity: '1' }}>
                                    <img src="https://cdn1.myassignment.live/mal-img/management.svg" alt="" width={"60px"} height={'60px'} />
                                    <h3>Research Paper Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                    <span className="innerShape"></span>
                                    <h4>Research Paper Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">Get in touch with us by saying, 'Help me write a research paper’ to solve all your concerns in an instant. Our stalwarts who cater to your requests incorporate all the crucial details in the paper. They also make sure to present all segments – Intro, Abstract, Methods, Results, and Discussion – in such a way that will let you climb up the ladder of success with ease.</p>
                                    <p></p>
                                </div>
                            </div>
                        ) : (
                            <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "lightblue", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterIII}>
                                <div className="hex" style={{ opacity: '0' }}>
                                    <img src="https://cdn1.myassignment.live/mal-img/management.svg" alt="" />
                                    <h3>Research Paper Help</h3>
                                </div>
                                <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                    <span className="innerShape"></span>
                                    <h4>Research Paper Help</h4>
                                    <p></p>
                                    <p className="MsoNormal">Get in touch with us by saying, 'Help me write a research paper’ to solve all your concerns in an instant. Our stalwarts who cater to your requests incorporate all the crucial details in the paper. They also make sure to present all segments – Intro, Abstract, Methods, Results, and Discussion – in such a way that will let you climb up the ladder of success with ease.</p>
                                    <p></p>
                                </div>
                            </div>
                        )}



                        {/* ----------- */}
                        <div className='row' style={{ marginTop: '50px', marginBottom: '50px' }}>

                            {/* -------------/ */}

                            {hoverIV ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveIV}>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon8.svg" alt="" width={"60px"} height={'60px'} />
                                        <h3>Homework Help</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                        <span className="innerShape"></span>
                                        <h4>Homework Help</h4>
                                        <p></p>
                                        <p className="MsoNormal">Be it complex math homework or a Chemistry lab report, MyAssignment.live has the perfect solution for all your homework issues for all educational levels. We will explain all the steps in detail to arrive at the correct solution within the deadline. Simply type in ‘Do my homework for me’ and take well-knit solutions on time.</p>
                                        <p></p>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "lightgreen", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterIV}>
                                    <div className="hex" style={{ opacity: '0' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon8.svg" alt="" />
                                        <h3>Homework Help</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h4>Homework Help</h4>
                                        <p></p>
                                        <p className="MsoNormal">Be it complex math homework or a Chemistry lab report, MyAssignment.live has the perfect solution for all your homework issues for all educational levels. We will explain all the steps in detail to arrive at the correct solution within the deadline. Simply type in ‘Do my homework for me’ and take well-knit solutions on time.</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}


                            {/* ----------- */}

                            {hoverV ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveV}>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" alt="" width={"60px"} height={'60px'} />
                                        <h3>Case Study</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                        <span className="innerShape"></span>
                                        <h4>Case Study</h4>
                                        <p></p>
                                        <p className="MsoNormal">Combat the complexities of writing a case study with us by your side. Our online essay writers&nbsp;will determine key issues, recommend changes needed and propose unique changes that will help you secure a straight A+. You can also take a look at our huge repository of samples that will help you deliver flawless case studies on your own.</p>
                                        <p></p>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "orange", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterV}>
                                    <div className="hex" style={{ opacity: '0' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon3.svg" alt="" />
                                        <h3>Case Study</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h4>Case Study</h4>
                                        <p></p>
                                        <p className="MsoNormal">Combat the complexities of writing a case study with us by your side. Our online essay writers&nbsp;will determine key issues, recommend changes needed and propose unique changes that will help you secure a straight A+. You can also take a look at our huge repository of samples that will help you deliver flawless case studies on your own.</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}


                            {/* ---------- */}
                            {hoverVI ? (
                                <div className="col-sm one-third" id='stdHelp' onMouseEnter={handleHoverLeaveVI}>
                                    <div className="hex" style={{ opacity: '1' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon9.svg" alt="" width={"60px"} height={'60px'} />
                                        <h3>More Writing Help</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '0' }}>
                                        <span className="innerShape"></span>
                                        <h4>More Writing Help</h4>
                                        <p></p>
                                        <p className="MsoNormal">Alongside writing aid, we offer unmatched assistance for different papers along with complimentary proofreading and editing services, free plagiarism reports, unlimited reworks and revisions. You can also save ample time by accessing our free tools like plagiarism checker, spell checkers, paraphrasing tools, citation generators, etc., for FREE.</p>
                                        <p></p>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-sm one-third" id='stdHelp' style={{ transition: "all 1.5s ease-in-out", transform: "translateX(.5%)", backgroundColor: "#ff2323c7", borderRadius: '15px', color: 'darkgre' }} onMouseLeave={handleHoverEnterVI}>
                                    <div className="hex" style={{ opacity: '0' }}>
                                        <img src="https://cdn1.myassignment.live/lazyload-assets/2022/new-cms-images/box_icon9.svg" alt="" />
                                        <h3>More Writing Help</h3>
                                    </div>
                                    <div className="overlay hexagon yellow" style={{ opacity: '1' }}>
                                        <span className="innerShape"></span>
                                        <h4>More Writing Help</h4>
                                        <p></p>
                                        <p className="MsoNormal">Alongside writing aid, we offer unmatched assistance for different papers along with complimentary proofreading and editing services, free plagiarism reports, unlimited reworks and revisions. You can also save ample time by accessing our free tools like plagiarism checker, spell checkers, paraphrasing tools, citation generators, etc., for FREE.</p>
                                        <p></p>
                                    </div>
                                </div>
                            )}

                            {/* ------------ */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AssigementProvideType
