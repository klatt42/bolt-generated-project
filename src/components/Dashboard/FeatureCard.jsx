import React from 'react'
import { Box, Icon, Heading, Text, VStack } from '@chakra-ui/react'

function FeatureCard({ icon, title, description, details, onClick }) {
  return (
    <Box
      p={6}
      bg="gray.800"
      borderRadius="lg"
      cursor="pointer"
      onClick={onClick}
      _hover={{ 
        transform: 'translateY(-4px)',
        transition: '0.2s',
        bg: 'gray.700'
      }}
      transition="all 0.2s"
    >
      <VStack spacing={4} align="start">
        <Icon as={icon} boxSize={6} color="brand.primary" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.400">{description}</Text>
        <Text fontSize="sm" color="gray.500">{details}</Text>
      </VStack>
    </Box>
  )
}

export default FeatureCard
