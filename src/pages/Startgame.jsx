import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'



function Startgame() {
  const [num,setNum]=useState(0)
  const style={
      mainBax:{
        display: 'flex',
        margin: '0',
    padding: '1',
    padding: '0',
    justifyContent: 'space-between',
},
  totalNum:{
  width: '140px',
    height: '140px',
    background: 'lavender',
     display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
},
inputGrid:{
  margin: '0',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},
input:{
  height: '100px',
    width: '100px',
    display: 'flex',
 
    marginRight: '5px',
    textAlign: 'center',
}
      
  }

  return (
   <Grid >
   <Box   sx={style.mainBax}>
   <Grid>
   <Box  sx={style.totalNum} ><h1>{num}</h1></Box>
   
   </Grid>
   <Grid sx={style.inputGrid}>
     <input style={style.input
    }  value={1} onClick={(e)=>setNum(e.target.value)}  />
     <input style={style.input
    } value={2} onClick={(e)=>setNum(e.target.value)}  />
     <input style={style.input
    } value={3} onClick={(e)=>setNum(e.target.value)}  />
     <input style={style.input
    } value={4} onClick={(e)=>setNum(e.target.value)}  />
     <input style={style.input
    } value={5} onClick={(e)=>setNum(e.target.value)}  />
     <input style={style.input
    } value={6} onClick={(e)=>setNum(e.target.value)}  />
   </Grid>
 
   
   </Box>
   
   </Grid>
  
  )
}

export default Startgame
