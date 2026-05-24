import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => {
  return (
     <Box overflowX="hidden">       
      <Navbar />
      <Box padding={{ base: 2, md: 5 }}> 
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout