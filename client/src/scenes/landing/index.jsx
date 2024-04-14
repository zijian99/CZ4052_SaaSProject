import { Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();

    return (
        // <div>Landing</div>
        <Box>
            <div className='vertical-center'>
                <div className='vertical-center'>Landing</div>
            <Button
                onClick={()=>navigate("/dashboard")}
            >Log in</Button>
            </div>
        </Box>
        
    )
}

export default Landing