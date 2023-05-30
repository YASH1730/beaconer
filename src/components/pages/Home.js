import { Box } from '@mui/material';
import React from 'react';
import SideNav from '../layout/SideNav';
import '../../assets/css/home.css'
import FileUpload from '../modules/FileUpload';

const FileQuery = () => {
    return (
        <>
        <Box className="home-wrapper flex">
            <Box className = 'side-nav-wrapper'>
                <SideNav/>
            </Box>
            <Box className = 'module-wrapper'>
                <FileUpload/>
            </Box>
        </Box>
            
        </>
    );
}

export default FileQuery;
