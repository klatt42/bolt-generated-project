import React from 'react'
import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaLightbulb, FaMusic, FaBook, FaUsers, FaSearch } from 'react-icons/fa'
import FeatureCard from './FeatureCard'

function Dashboard() {
  const navigate = useNavigate()

  const features = [
    {
      icon: FaLightbulb,
      title: "Sermon Ideas",
      description: "Generate and develop sermon ideas with AI assistance",
      details: "Get inspired with AI-powered sermon topic suggestions, outlines, and illustrations.",
      path: "/sermon-ideas"
    },
    {
      icon: FaMusic,
      title: "Hymn Finder",
      description: "Find the perfect hymns for your services",
      details: "Search through a vast collection of hymns by theme, scripture reference, or occasion.",
      path: "/hymn-finder"
    },
    {
      icon: FaBook,
      title: "Notes",
      description: "Create and manage your sermon notes and thoughts",
      details: "Organize your ideas, sermon outlines, and biblical insights in one place.",
      path: "/notes"
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Connect with other pastors and ministry leaders",
      details: "Share resources, discuss theology, and support one another in ministry.",
      path: "/community"
    },
    {
      icon: FaSearch,
      title: "Research",
      description: "Access biblical research tools and resources",
      details: "Study scripture, access commentaries, and explore theological resources.",
      path: "/research"
    }
  ]

  return (
    <Box>
      <Heading mb={8} color="brand.primary">Welcome to PastorAid</Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            onClick={() => navigate(feature.path)}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Dashboard
