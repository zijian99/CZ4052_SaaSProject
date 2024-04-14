import { Box, Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import LandingNavbar from "components/LandingNavbar";
import IconImage from "assets/gold.png";
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import { useGetUserQuery } from "state/api";

const Landing = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const userId = useSelector((state) => state.global.userId);
    if (theme.palette.mode === "dark"){
        dispatch(setMode("light"))
    }

    return (
        // <div>Landing</div>
        
        <Box>
        <LandingNavbar/>
            <div className='title-landing'>
                E-Commerce Dashboard
                <div className='subtitle-landing'>
                    A trustworthy Software-as-a-Service for E-commerce Entrepreneur
                    <div className='copyright-landing'>
                    A Software-as-a-Service Project Done by Zi Jian
                    </div>
                    <div className='copyright-landing'>
                        @Year2024 NTU CZ4052 Cloud Computing Project
                    </div>
                </div>
                
            </div>
            
        </Box>
        
    )
}

export default Landing;