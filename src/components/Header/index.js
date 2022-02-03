import React from 'react';
import {Link} from "react-router-dom";

import {Nav} from "./styles";

const Header = () => {
    return (
        <div>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/statistics">Statistics</Link>
            </Nav>
        </div>
    );
};

export default Header;