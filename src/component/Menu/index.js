import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
export default function Menu() {
    return (
        <ul className="menu">
            <li>Students</li>
                <div className="content">
                    <Link to="/Students">student list</Link><br />
                    <Link to="/student">student</Link><br/>
                    <Link to="/addInfo">add</Link><br/>
                    <Link to="/deleteInfo">delete</Link>
                </div>
            <li>Courses</li>
                <div className="content">
                    <Link to="/courses">courses list</Link>
                </div>
            <li>Projects</li>
                <div className="content">
                    <Link to="/project">projects list</Link>
                </div>
        </ul>
    )
}
