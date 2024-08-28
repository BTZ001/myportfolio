import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>San Development Co ., Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/04/2019 - 01/09/2019</h3>
                                <ul>
                                    <p>Position</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Junior Android Developer</span>
                                    </li>

                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>MIT Co ., Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;02/03/2020 - 01/09/2020</h3>
                                <ul>
                                    <p>Position</p>
                                    <li data-aos='fade-right' data-aos-delay='500'>
                                        <span>Junior Mobile Developer (Flutter)</span>
                                    </li>

                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>Irrahub Co ., Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/12/2020 - 1/10/2022</h3>
                                <ul>
                                    <p>Position</p>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Mid Mobile Developer (Flutter)</span>
                                    </li>

                                </ul>
                            </div>
                            <div className="experience__box">
                                <h2>SecureLink Co ., Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/10/2022 - 01/10/2023</h3>
                                <ul>
                                    <p>Position</p>
                                    <li>
                                        <span>Senior Mobile Developer (Flutter)</span>
                                    </li>

                                </ul>
                            </div>

                            <div className="experience__box">
                                <h2>ABC Content Solutions Co ., Ltd</h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;01/11/2023 - PRESENT</h3>
                                <ul>
                                    <p>Position</p>
                                    {/* <ol className="list-decimal"> */}
                                    <li >
                                        <span>Senior Mobile Developer (Flutter)</span>
                                    </li>
                                    {/* </ol> */}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience