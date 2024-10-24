import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ducation</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>University of Computer Studies (Meiktila)</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;13/08/2018 - 31/07/2022</h2>
                        <p>Graduated Computer Science (B.C.Sc) from University of Computer Studies (Meiktila)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation