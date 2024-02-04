import { Button } from '@mui/material'
import React from 'react'

function CustomButton({style,children ,onClick ,onChange}) {
  return (
     <Button style={style} onClick={onClick} onChange={onChange}>{children}</Button>
  )
}

export default CustomButton
