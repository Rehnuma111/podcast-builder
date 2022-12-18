import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Loader = () => {
  return (
    <div style={{marginTop: "13rem"}} className="container d-flex justify-content-center ">
      <Box>
        <CircularProgress size="5rem" color='inherit'/>
      </Box>
    </div>
  )
}

export default Loader
