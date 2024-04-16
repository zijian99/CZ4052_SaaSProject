import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { original } from '@reduxjs/toolkit';

const PricingCard = ({
  plan,
  originalPrice,
  discountPrice,
  func1,
  func2,
  func3,
}) => {
  return (
    <Box >
    <Card sx={{ maxWidth: 280, height: 400, }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h2" fontWeight="bold" component="div">
            {plan}
          </Typography>
          <Typography variant="bod y1" color="text.secondary" display="block">
          <br/>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{textDecoration:"line-through", fontSize:"20px"}}>
            {originalPrice}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{fontSize:"25px", color:"#000000", fontWeight:"bold"}}>
            {discountPrice}<br/><br/>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{color:"rgb(83, 83, 83)" ,fontSize:"14px"}}>
            {func1}  
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{color:"rgb(83, 83, 83)" ,fontSize:"14px"}}>
           {func2}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{color:"rgb(83, 83, 83)" ,fontSize:"14px"}}>
            {func3}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color='secondary' sx={{fontWeight:"bold", color:"#ffffff"}} >
          Subscribe to this plan
        </Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default PricingCard;