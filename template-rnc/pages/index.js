import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, this is a basic page of my template!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Some text
          </Heading>
          <p>Just a generic example</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
