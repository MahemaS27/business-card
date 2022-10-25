import React from 'react'

export default function Header() {
    return(
        <div className="header">
            <img className="header-img" src="../images/header-icon.jpeg"/>
            <div className="header-info">
                <h1 className='header-name'>Mahema Singh</h1>
                <p className='job-title'>Full-Stack Engineer</p>
                <p className='website'>mahemas27.github.io</p>
            </div>
            <div className='header-button-group'>
                <button className='email-button'><i className="fa fa-envelope fa-fw"></i> <a href="mailto:mahemafire99@gmail.com"></a>Email</button>
                <button className='linkedin-button'><i className="fa fa-linkedin fa-fw"></i> LinkedIn</button>
            </div>
        </div>
    );
}