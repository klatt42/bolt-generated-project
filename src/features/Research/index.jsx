import React, { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  HStack,
  Text,
  Select,
  Card,
  CardBody,
  IconButton,
  useToast,
  Flex,
} from '@chakra-ui/react'
import { FaBook } from 'react-icons/fa'

function Research() {
  const [query, setQuery] = useState('')
  const [researchType, setResearchType] = useState('General Research')
  const toast = useToast()

  const researchTypes = [
    'General Research',
    'Biblical Study',
    'Historical Research',
    'Pastoral Application',
    'Doctrinal Study'
  ]

  const handleGenerateResearch = () => {
    if (!query.trim()) {
      toast({
        title: 'Please enter a research query',
        status: 'warning',
        duration: 2000,
      })
      return
    }
    
    toast({
      title: 'Generating research...',
      status: 'info',
      duration: 2000,
    })
  }

  const handleNewSearch = () => {
    setQuery('')
    setResearchType('General Research')
  }

  return (
    <Box>
      <Card bg="gray.900" p={6}>
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Box>
            <Heading size="lg" color="brand.primary" mb={2}>Theological Research</Heading>
            <Text color="gray.400">Enter your theological research query and select the type of research you'd like to perform.</Text>
          </Box>
          <Button
            leftIcon={<FaBook />}
            variant="outline"
            onClick={() => {}}
          >
            View Saved
          </Button>
        </Flex>

        <CardBody p={0}>
          <Flex gap={6} direction="column">
            <Box>
              <Text mb={2}>Research Query</Text>
              <Input
                placeholder="Enter your theological research query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                bg="gray.800"
                size="lg"
                _hover={{ bg: 'gray.700' }}
              />
            </Box>

            <Flex gap={6} justify="space-between">
              <Box flex={1}>
                <Text mb={2}>Research Type</Text>
                <Select
                  value={researchType}
                  onChange={(e) => setResearchType(e.target.value)}
                  bg="gray.800"
                  size="lg"
                  _hover={{ bg: 'gray.700' }}
                  sx={{
                    '& option': {
                      bg: 'gray.800',
                      color: 'white',
                      padding: '8px',
                    }
                  }}
                >
                  {researchTypes.map((type) => (
                    <option 
                      key={type} 
                      value={type}
                      style={{
                        backgroundColor: '#1A202C',
                        color: 'white',
                        padding: '8px'
                      }}
                    >
                      {type}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>

            <HStack spacing={4}>
              <Button
                colorScheme="blue"
                size="lg"
                onClick={handleGenerateResearch}
                flex={1}
              >
                Generate Research
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleNewSearch}
              >
                New Search
              </Button>
            </HStack>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

export default Research
