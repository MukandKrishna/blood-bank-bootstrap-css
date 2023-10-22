import React from "react";

const Header = () => {
    return(
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-brand h1">Blood Bank App</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <p className="nav-link"> Welcome</p>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger"> Logout</button>
                    </li>
                </ul>
                </div>
        </nav>
        </>
    );
};
export default Header;