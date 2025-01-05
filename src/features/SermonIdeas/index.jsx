import React, { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  useToast,
  Card,
  CardBody,
  IconButton,
  Divider
} from '@chakra-ui/react'
import { FaDownload, FaTrash } from 'react-icons/fa'
import { jsPDF } from 'jspdf'

function SermonIdeas() {
  const [verse, setVerse] = useState('')
  const [theme, setTheme] = useState('')
  const [context, setContext] = useState('')
  const [generatedIdeas, setGeneratedIdeas] = useState([])
  const toast = useToast()

  const handleGenerateIdeas = () => {
    if (!verse) {
      toast({
        title: 'Please enter a Bible verse',
        status: 'warning',
        duration: 2000,
      })
      return
    }

    // Simulated AI response - in real app this would call an API
    const newIdea = {
      id: Date.now(),
      verse,
      theme,
      context,
      outline: [
        'I. Main Point: God\'s Love',
        'II. Supporting Point: Demonstration through Christ',
        'III. Application: Living in Love'
      ],
      illustrations: [
        'Personal story about sacrifice',
        'Modern example of unconditional love'
      ]
    }

    setGeneratedIdeas([newIdea, ...generatedIdeas])
    toast({
      title: 'Sermon idea generated!',
      status: 'success',
      duration: 2000,
    })
  }

  const handleDelete = (id) => {
    setGeneratedIdeas(generatedIdeas.filter(idea => idea.id !== id))
    toast({
      title: 'Sermon idea deleted',
      status: 'info',
      duration: 2000,
    })
  }

  const downloadPDF = (idea) => {
    const doc = new jsPDF()
    
    // Add content to PDF
    doc.setFontSize(16)
    doc.text('Sermon Idea', 20, 20)
    
    doc.setFontSize(12)
    doc.text(`Bible Verse: ${idea.verse}`, 20, 40)
    doc.text(`Theme: ${idea.theme || 'N/A'}`, 20, 50)
    doc.text(`Context: ${idea.context || 'N/A'}`, 20, 60)
    
    doc.text('Outline:', 20, 80)
    idea.outline.forEach((point, index) => {
      doc.text(point, 30, 90 + (index * 10))
    })
    
    doc.text('Illustrations:', 20, 130)
    idea.illustrations.forEach((ill, index) => {
      doc.text(`• ${ill}`, 30, 140 + (index * 10))
    })
    
    doc.save(`sermon-idea-${idea.id}.pdf`)
    
    toast({
      title: 'PDF downloaded!',
      status: 'success',
      duration: 2000,
    })
  }

  return (
    <Box>
      <Heading mb={6} color="brand.primary">Sermon Ideas Generator</Heading>
      <Text mb={4} color="gray.400">Enter a Bible verse to generate sermon ideas</Text>
      
      <Card mb={6}>
        <CardBody>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Enter Bible verse (e.g., John 3:16)"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
              bg="gray.900"
              border="none"
            />
            
            <Input
              placeholder="Enter sermon theme (optional)"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              bg="gray.900"
              border="none"
            />
            
            <Input
              placeholder="Enter general thoughts or context (optional)"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              bg="gray.900"
              border="none"
            />
            
            <Button
              leftIcon="🔍"
              onClick={handleGenerateIdeas}
              colorScheme="blue"
              isFullWidth
            >
              Generate Ideas
            </Button>
          </VStack>
        </CardBody>
      </Card>

      {generatedIdeas.map(idea => (
        <Card key={idea.id} mb={4}>
          <CardBody>
            <HStack justify="space-between" mb={4}>
              <Text fontWeight="bold">Based on {idea.verse}</Text>
              <HStack>
                <IconButton
                  icon={<FaDownload />}
                  onClick={() => downloadPDF(idea)}
                  aria-label="Download PDF"
                  variant="ghost"
                />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => handleDelete(idea.id)}
                  aria-label="Delete idea"
                  variant="ghost"
                  colorScheme="red"
                />
              </HStack>
            </HStack>
            
            <Divider mb={4} />
            
            <VStack align="stretch" spacing={4}>
              {idea.theme && (
                <Box>
                  <Text fontWeight="bold">Theme:</Text>
                  <Text>{idea.theme}</Text>
                </Box>
              )}
              
              <Box>
                <Text fontWeight="bold">Outline:</Text>
                {idea.outline.map((point, index) => (
                  <Text key={index} ml={4}>{point}</Text>
                ))}
              </Box>
              
              <Box>
                <Text fontWeight="bold">Illustrations:</Text>
                {idea.illustrations.map((ill, index) => (
                  <Text key={index} ml={4}>• {ill}</Text>
                ))}
              </Box>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </Box>
  )
}

export default SermonIdeas
