import React, { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Grid,
  GridItem,
  Text,
  Select,
  Card,
  CardBody,
  CardHeader,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { FaSync } from 'react-icons/fa'

function HymnFinder() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedTheme, setSelectedTheme] = useState('All Themes')
  const [researchType, setResearchType] = useState('General Research')
  const [researchQuestion, setResearchQuestion] = useState('')
  const toast = useToast()

  const types = [
    'All Types',
    'Traditional Hymns',
    'Contemporary',
    'Gospel',
    'Psalms'
  ]

  const themes = [
    'All Themes',
    'Praise & Worship',
    'Prayer',
    'Grace & Salvation',
    'Holy Spirit',
    'Communion',
    'Advent',
    'Lent',
    'Easter'
  ]

  const researchTypes = [
    'General Research',
    'Thematic Analysis',
    'Historical Research',
    'Liturgical Study'
  ]

  const handleReset = (section) => {
    switch(section) {
      case 'search':
        setSearchQuery('')
        setSelectedType('All Types')
        setSelectedTheme('All Themes')
        break
      case 'research':
        setResearchQuestion('')
        setResearchType('General Research')
        break
      default:
        break
    }
  }

  return (
    <Box>
      <Heading mb={6} color="brand.primary">Hymn Finder</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <Card bg="gray.900" mb={6}>
            <CardHeader display="flex" justifyContent="space-between" alignItems="center">
              <Heading size="md">Hymn Search Results</Heading>
              <IconButton
                icon={<FaSync />}
                onClick={() => handleReset('search')}
                aria-label="Reset"
                variant="ghost"
              />
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                <Text color="gray.400">Results from database and web search</Text>
                <Input
                  placeholder="Search hymns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="gray.800"
                />
                <Grid templateColumns="1fr 1fr" gap={4} width="100%">
                  <Select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    bg="gray.800"
                    sx={{
                      '& option': {
                        background: '#1A202C !important',
                        color: 'white !important',
                        padding: '8px',
                      }
                    }}
                  >
                    {types.map((type) => (
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
                  <Select
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                    bg="gray.800"
                    sx={{
                      '& option': {
                        background: '#1A202C !important',
                        color: 'white !important',
                        padding: '8px',
                      }
                    }}
                  >
                    {themes.map((theme) => (
                      <option 
                        key={theme} 
                        value={theme}
                        style={{
                          backgroundColor: '#1A202C',
                          color: 'white',
                          padding: '8px'
                        }}
                      >
                        {theme}
                      </option>
                    ))}
                  </Select>
                </Grid>
                <Button
                  colorScheme="blue"
                  width="100%"
                >
                  Search
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="gray.900">
            <CardHeader display="flex" justifyContent="space-between" alignItems="center">
              <Heading size="md">Sermon-Based Hymn Search</Heading>
              <IconButton
                icon={<FaSync />}
                onClick={() => handleReset('sermon')}
                aria-label="Reset"
                variant="ghost"
              />
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                <Text color="gray.400">Upload your sermon to find relevant hymns</Text>
                <Box
                  border="2px dashed"
                  borderColor="gray.600"
                  borderRadius="md"
                  p={8}
                  textAlign="center"
                  width="100%"
                  cursor="pointer"
                  onClick={() => document.getElementById('sermon-upload').click()}
                >
                  <Text>No file chosen</Text>
                  <input
                    id="sermon-upload"
                    type="file"
                    hidden
                    onChange={() => {}}
                  />
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Card bg="gray.900">
            <CardHeader display="flex" justifyContent="space-between" alignItems="center">
              <Heading size="md">AI-Powered Hymn Research</Heading>
              <IconButton
                icon={<FaSync />}
                onClick={() => handleReset('research')}
                aria-label="Reset"
                variant="ghost"
              />
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                <Text color="gray.400">Get detailed analysis and insights about hymns</Text>
                <Select
                  value={researchType}
                  onChange={(e) => setResearchType(e.target.value)}
                  bg="gray.800"
                  sx={{
                    '& option': {
                      background: '#1A202C !important',
                      color: 'white !important',
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
                <Input
                  placeholder="Enter your research question..."
                  value={researchQuestion}
                  onChange={(e) => setResearchQuestion(e.target.value)}
                  bg="gray.800"
                />
                <Button
                  colorScheme="blue"
                  width="100%"
                >
                  Perform AI Research
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default HymnFinder
