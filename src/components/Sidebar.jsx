import React from 'react'
import { Box, VStack, Icon, Text, Flex } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaLightbulb, FaMusic, FaBook, FaUsers, FaSearch, FaCog } from 'react-icons/fa'

const MenuItem = ({ icon, children, to }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link to={to} style={{ width: '100%' }}>
      <Flex
        align="center"
        p={3}
        cursor="pointer"
        bg={isActive ? 'brand.secondary' : 'transparent'}
        _hover={{ bg: 'brand.secondary' }}
        borderRadius="md"
        w="full"
      >
        <Icon as={icon} mr={3} />
        <Text>{children}</Text>
      </Flex>
    </Link>
  )
}

function Sidebar() {
  return (
    <Box w="250px" bg="gray.900" p={5}>
      <Text fontSize="xl" mb={10} color="brand.primary">Pastor's Copilot</Text>
      <VStack spacing={2} align="stretch">
        <MenuItem icon={FaHome} to="/">Dashboard</MenuItem>
        <MenuItem icon={FaLightbulb} to="/sermon-ideas">Sermon Ideas</MenuItem>
        <MenuItem icon={FaMusic} to="/hymn-finder">Hymn Finder</MenuItem>
        <MenuItem icon={FaBook} to="/notes">Notes</MenuItem>
        <MenuItem icon={FaUsers} to="/community">Community</MenuItem>
        <MenuItem icon={FaSearch} to="/research">Research</MenuItem>
        <MenuItem icon={FaCog} to="/settings">Settings</MenuItem>
      </VStack>
    </Box>
  )
}

export default Sidebar
