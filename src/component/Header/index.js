import React from 'react'
import './index.css'
export default function Header() {
    return (
        <div className='header-content'>
            <div className='left'>
                <h1>Teammates</h1>
            </div>
            <div className='right'>
                <span>User</span>
                <button>Sign out</button>
            </div>
        </div>
    )
}
