import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default function Menu() {
    return (
        <ul className="menu">
            <li>Students</li>
                <div className="content">
                    <Link to="/students">student list</Link>
                </div>
            <li>Courses</li>
                <div className="content">
                    <Link to="/courses">courses list</Link>
                </div>
            <li>Projects</li>
                <div className="content">
                    <Link to="/projects">projects list</Link>
                </div>
        </ul>
    )
}
