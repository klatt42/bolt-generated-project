import React from 'react'
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  VStack,
  Input,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react'

function Notes() {
  const toast = useToast()

  return (
    <Box>
      <Card bg="gray.900" p={6}>
        <Heading size="lg" color="brand.primary" mb={4}>Notes</Heading>
        <Text color="gray.400" mb={6}>Create and manage your sermon notes and thoughts</Text>
        
        <CardBody p={0}>
          <VStack spacing={6} align="stretch">
            <Box>
              <Text mb={2}>Title</Text>
              <Input
                placeholder="Enter note title..."
                bg="gray.800"
                _hover={{ bg: 'gray.700' }}
              />
            </Box>

            <Box>
              <Text mb={2}>Content</Text>
              <Textarea
                placeholder="Enter your notes here..."
                bg="gray.800"
                _hover={{ bg: 'gray.700' }}
                minH="200px"
              />
            </Box>

            <Button
              colorScheme="blue"
              onClick={() => toast({
                title: 'Coming Soon',
                description: 'Notes feature is under development',
                status: 'info',
                duration: 2000,
              })}
            >
              Save Note
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Notes
