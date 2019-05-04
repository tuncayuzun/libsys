import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, NavbarBrand} from "reactstrap";

const Header=props=> {

    const {name} = props;
        return (
            <div>
                <Navbar color="light" expand="sm">
                    <NavbarBrand>
                        {name}
                    </NavbarBrand>
                </Navbar>
            </div>
        );
}

Header.defaultProps={
    name:"Libsys"
}

Header.propTypes = {
    name: PropTypes.string.isRequired
};

export default Header;