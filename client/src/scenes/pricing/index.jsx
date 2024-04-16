import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, Box, Button, CardActionArea, CardActions, useTheme } from '@mui/material';
import LandingNavbar from 'components/LandingNavbar';
import PricingCard from 'components/PricingCard';

const Pricing = () => {
  const theme = useTheme();
  return (
    <Box  justifyContent="center" alignItems="right">
    <LandingNavbar/>
    <Typography textAlign="center" sx={{fontSize:"40px", fontWeight:"bold", color:theme.palette.secondary[400]}}>
      Choose your Plan!
    </Typography>
    <Stack
      direction="row" 
      spacing={6}
      margin={10}
      justifyContent="center"
    >
      <PricingCard
        plan = "Basic"
        originalPrice="$999"
        discountPrice="$10 SGD"
        func1="Unleash the power of dashboard."
        func2="Core functionality."
        func3="Access to basic functions."
        sx={{}}
      />
      <PricingCard
        plan = "Premium"
        originalPrice="$9999"
        discountPrice="$100 SGD"
        func1="Unleash MORE power of dashboard."
        func2="Expanded functionality."
        func3="Increased usage limits."
      />
      <PricingCard
        plan = "VVVIP"
        originalPrice="$99999"
        discountPrice="$1000 SGD"
        func1="Tailored solutions for large organizations."
        func2="Service-level agreements (SLAs)."
        func3="On-site training and implementation support."
      />
    </Stack>
    </Box>
  )
}

export default Pricing;