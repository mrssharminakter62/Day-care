import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Animation from '../Animation/Animation';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Animation></Animation>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;