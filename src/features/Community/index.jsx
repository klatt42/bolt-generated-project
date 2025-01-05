import React from 'react'
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  VStack,
  Button,
  useToast,
  Grid,
  Avatar,
  Flex
} from '@chakra-ui/react'

function Community() {
  const toast = useToast()

  return (
    <Box>
      <Card bg="gray.900" p={6}>
        <Heading size="lg" color="brand.primary" mb={4}>Community</Heading>
        <Text color="gray.400" mb={6}>Connect with other pastors and ministry leaders</Text>
        
        <CardBody p={0}>
          <VStack spacing={6} align="stretch">
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
              {[1, 2, 3].map((i) => (
                <Card key={i} bg="gray.800" p={4}>
                  <Flex align="center" gap={4}>
                    <Avatar name={`Pastor ${i}`} />
                    <Box>
                      <Text fontWeight="bold">Pastor {i}</Text>
                      <Text fontSize="sm" color="gray.400">Online</Text>
                    </Box>
                  </Flex>
                </Card>
              ))}
            </Grid>

            <Button
              colorScheme="blue"
              onClick={() => toast({
                title: 'Coming Soon',
                description: 'Community feature is under development',
                status: 'info',
                duration: 2000,
              })}
            >
              Join Community
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Community
