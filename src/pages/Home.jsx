import { Box, Grid } from '@mui/material'
import React from 'react'
import Images from '../components/Images'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const style={
        gridContainer:{
           padding:'200px',
        },
        img:{
            src:"https://1001freedownloads.s3.amazonaws.com/vector/thumb/72308/dice-white.png",
            height:'100%',
            width:"100%",
           '@media (max-width: 900px)': {
                height:'40%',
                width:"200px",
            }
        },
        boxH1:{
            'fontSize': '80px',
            fontWeight: 'bold',
            display:' flex',
            justifyContent: 'right'
        },
        box:{
               
    'textAlign': 'right',
        
    },
    CustomButton:{
        background: 'black',
        color: 'whitesmoke',
    
        fontSize: 'larger',
    }    
}
  return (
      <Grid container  item sx={style.gridContainer} >

      <Grid item xs={6}>
      <Images src={style.img.src}  style={style.img} />
      </Grid>
      
      <Grid item xs={6}>
         
      <Box sx={style.box}>
      <h1 style={style.boxH1}>DICE GAME</h1>
           <CustomButton style={style.CustomButton} onClick={()=>navigate('/startgame')} >Play Now</CustomButton>
      </Box>
         
      
      </Grid>
      </Grid>
  )
}

export default Home
