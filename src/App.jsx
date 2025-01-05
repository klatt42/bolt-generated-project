import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import SermonIdeas from './features/SermonIdeas'
import HymnFinder from './features/HymnFinder'
import Research from './features/Research'
import Notes from './features/Notes'
import Community from './features/Community'

function App() {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Box flex="1" overflow="auto">
        <Header />
        <Box p={8}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sermon-ideas" element={<SermonIdeas />} />
            <Route path="/hymn-finder" element={<HymnFinder />} />
            <Route path="/research" element={<Research />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  )
}

export default App
