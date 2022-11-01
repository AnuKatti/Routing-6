import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"teal"}}>
            <div className="container-fluid">
                <a class="navbar-brand" href="#">Developer Funnel</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item"><Link to = '/'>Home</Link></li>
                        <li class="nav-item"><Link to = '/Post'>Post</Link></li>
                        <li class="nav-item"><Link to = '/Profile'>Profile</Link></li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
} 

export default Header;