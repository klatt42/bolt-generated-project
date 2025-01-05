import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'

function Header() {
  return (
    <Flex bg="gray.800" p={4} justify="space-between" align="center">
      <Text>Welcome, test1</Text>
      <Button variant="outline">Logout</Button>
    </Flex>
  )
}

export default Header
