import React from 'react';
import octocat from './images/octocat_logo.png'

const Personal = () => {
    return (
        <div className="project">
            <h1 className="heading">Personal Site<img className="octocat" alt="github logo" src={ octocat }/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    )
}

export default Personal