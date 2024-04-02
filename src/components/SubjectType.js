import React from 'react'
import './subjectStyle.css'

const SubjectType = () => {
    return (
        <>
            <div className="popular_sub_main_bg">
                <div className="row popular_sub_main" style={{ justifyContent: 'center ', marginTop: '50px' }}>
                    <h2 className="heading">Assignment Help for Students on All Subjects</h2>
                </div>
            </div>
            <div className="hell" style={{ marginLeft: '100px', marginTop: '75px',  }}>
                <div className='row'>
                    <div className="col sub_but" >
                        <div className='container' style={{ borderRadius:'5px'}}>
                            <div className="left c0" style={{ marginTop: "5px" }}>
                                <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/Accounting.svg" />
                            </div>
                            <div className="right" style={{ marginTop: "2px"}}>
                                <h3 className="heading">Accounting </h3>
                            </div>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown" id='subDp1'>
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Financial Accounting</li>
                                <li>Management Accounting</li>
                                <li>Accounting Entries</li>
                                <li>MYOB</li>
                                <li>XERO</li>
                                <li>Sage Posting</li>
                                <li>QuickBooks</li>
                                <li>SAP</li>
                                <li>Auditing</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c1">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/management.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Management </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Marketing</li>
                                <li>Operational management</li>
                                <li>Supply Chain Management</li>
                                <li>Human Resource Management (HRM)</li>
                                <li>Strategic Management</li>
                                <li>Project Management</li>
                                <li>MS Project</li>
                                <li>Management Information System</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c2">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/finance.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Finance </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Trading And Investment</li>
                                <li>Business Policy</li>
                                <li>Mathematical Methods</li>
                                <li>Principles Of Finance</li>
                                <li>Macro-Finance</li>
                                <li>Financial Systems And Crises</li>
                                <li>Corporate Finance</li>
                                <li>Financial Economics</li>
                                <li>Securities Markets</li>
                                <li>Investment Analysis</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c3">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/programming.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Programming </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Python</li>
                                <li>NodeJS</li>
                                <li>Kotlin</li>
                                <li>Swift</li>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>C++</li>
                                <li>MATLAB</li>
                                <li>Ruby</li>
                                <li>Pearl</li>
                                <li>Scala</li>
                                <li>Dart</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>
                </div>
                <div className='row'>
                    <div className="col sub_but">
                        <div className="left c4">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/law.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Law </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Business Law</li>
                                <li>Constitutional Law</li>
                                <li>Criminal Law</li>
                                <li>Environmental Law</li>
                                <li>Health And Safety Law</li>
                                <li>Consumer Law</li>
                                <li>Taxation Law</li>
                                <li>Civil Law</li>
                                <li>Migration Law</li>
                                <li>Intellectual Law</li>
                                <li>Human Rights Law</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c5">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/math.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Maths </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Biostatistics</li>
                                <li>Data Analysis</li>
                                <li>Minitab</li>
                                <li>Monte Carlo Simulation</li>
                                <li>Regression Analysis</li>
                                <li>SPSS</li>
                                <li>SEM</li>
                                <li>Discrete Mathematics</li>
                                <li>Data Warehouse</li>
                                <li>Statistical Interface</li>
                                <li>Quantitative Research</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c6">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/science.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Science </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Biological Sciences</li>
                                <li>Physical Sciences</li>
                                <li>Earth And Space Sciences</li>
                                <li>Astronomy</li>
                                <li>Crystallography</li>
                                <li>Chemistry</li>
                                <li>Nanotechnology</li>
                                <li>Polymer Science</li>
                                <li>Atmospheric Sciences</li>
                                <li>Meteorology</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c7">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/nursing.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Nursing </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Animal Science</li>
                                <li>Botany</li>
                                <li>Dental Science</li>
                                <li>Clinical Biochemistry</li>
                                <li>Podiatric</li>
                                <li>Cosmology</li>
                                <li>Medical Radiology</li>
                                <li>Sustainable Communities</li>
                                <li>Gynaecology</li>
                                <li>Bacteriology</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>
                </div>
                <div className='row'>
                    <div className="col sub_but">
                        <div className="left c8">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/healthcare.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Healthcare </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Administer And Monitor</li>
                                <li>Aged Care</li>
                                <li>Ambulatory</li>
                                <li>Care Plan</li>
                                <li>COPD</li>
                                <li>Genomics</li>
                                <li>Health Promotion</li>
                                <li>Human Nutrition</li>
                                <li>Infertility Nursing</li>
                                <li>Mental Health</li>
                                <li>Midwifery</li>
                                <li>Perioperative</li>
                                <li>Pathophysiology</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c9">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/marketing.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Marketing </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Operational Management</li>
                                <li>Supply Chain Management</li>
                                <li>Human Resource Management (HRM)</li>
                                <li>Strategic Management</li>
                                <li>Project Management</li>
                                <li>MS Project</li>
                                <li>Management Information System</li>
                            </ul>
                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>

                    <div className="col sub_but">
                        <div className="left c10">
                            <img width="30" height="30" alt="wave" src="https://cdn1.myassignment.live/mal-img/other.svg" />
                        </div>
                        <div className="right">
                            <h3 className="heading">Other Subjects </h3>
                        </div>
                        {/* <!--dropdown div START here--> */}
                        <div className="sub-dropdown">
                            <div className="fix-span">&nbsp;</div>
                            <ul>
                                <li>Actuarial Studies</li>
                                <li>Agricultural Science</li>
                                <li>Clinical Audiology</li>
                                <li>Corporate Governance</li>
                                <li>Cultural Heritage</li>
                                <li>Entrepreneurship</li>
                                <li>Hydrology</li>
                                <li>Journalism</li>
                                <li>Mahara</li>
                                <li>Real Estate</li>
                                <li>Music</li>
                            </ul>

                        </div>
                        {/* <!--dropdown div END here--> */}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <a className="button" href="https://myassignment.live/Home">Order Now</a>
            </div>
        </>
    )
}

export default SubjectType
