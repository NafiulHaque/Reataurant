import React from 'react';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

const Navigation = () => {
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                <NavbarBrand herf="/">Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default Navigation;
