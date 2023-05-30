import React from 'react';
import '../../assets/css/navbar.css'
import { Box } from '@mui/material';

// logo
import logo from '../../assets/image/logo.png'

const NavBar = () => {
    return (
        <>
        <Box className = "nav-wrapper">
            <Box className="nav-container flex">
                <Box className='logo'>
                    <img src={logo} alt='logo'/>
                </Box>
            </Box>
        </Box>
        </>
    );
}

export default NavBar;
