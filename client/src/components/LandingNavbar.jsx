import React from 'react'
import { useNavigate } from 'react-router-dom';
import FlexBetween from 'components/FlexBetween';

import { 
  AppBar, 
  Toolbar, 
  useTheme,
  Button,
} from '@mui/material';


const LandingNavbar = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = (event) => navigate("/dashboard");

    return (
    <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}
    >
        <Toolbar sx={{justifyContent: "space-between"}}>
            {/* LEFT SIDE */}
          <FlexBetween>
            <FlexBetween
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
            </FlexBetween>
          </FlexBetween>

          {/* RIGHT SIDE */}
          <FlexBetween gap="1.5rem">
          <Button
              sx={{color:theme.palette.secondary[500], fontSize: "15px", fontWeight:"bold"}}
              onClick={()=>navigate("/")}
            >
              Home
            </Button>
            <Button
              sx={{color:theme.palette.secondary[500], fontSize: "15px", fontWeight:"bold"}}
              onClick={()=>navigate("/pricing")}
            >
              Pricing
            </Button>

            <FlexBetween>
              <Button 
                onClick={handleClick}
                sx = {{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  textTransform: "none", 
                  gap: "1rem", 
                  backgroundColor: theme.palette.secondary[400],
                  color: "#ffffff",
                  fontSize:"15px",
                  fontWeight: "bold",
                  borderRadius:"5mm"
                }}
              >
                Sign In To Your Dashboard
              </Button>
              
            </FlexBetween>

          </FlexBetween>
 
        </Toolbar>
    </AppBar>
    );
}

export default LandingNavbar;