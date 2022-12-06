import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Loader = () => {
  return (
    <div className="container d-flex justify-content-center my-5">
      <Box>
        <CircularProgress size="10rem" color='inherit'/>
      </Box>
    </div>
  )
}

export default Loader
