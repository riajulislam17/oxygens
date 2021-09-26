import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container bg-dark text-white rounded p-3 ">
            <h1 className="d-flex justify-content-center"><span className="color py-2 px-5 rounded shadow-lg">Oxygen</span></h1>
            <h3 className="d-flex justify-content-center">A plant is a living thing that grows in the earth and has a stem, leaves, and roots.</h3>
            <h4 className="d-flex justify-content-center">Budget At least 200 BDT</h4>
        </div>
    );
};

export default Header;