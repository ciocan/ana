import { Meta } from '@components'
import { Box, Heading, Text } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <Meta />
      <Box
        w={['100%', '80%', '600px']}
        mx="auto"
        px={['10', '0']}
        mt={['100px', '175px']}
        mb={['150px', '400px']}
      >
        <Heading color="red" my="8">
          To design is to
          <Text display="inline" color="primaryBlack">
            {' '}
            serve
          </Text>{' '}
          people.
        </Heading>
        <Text fontSize="xl" my="6">
          <Text as="span" fontWeight="bold" display="inline" color="red">
            Ana
          </Text>{' '}
          is a Londond based technical product designer, raving about the connection between human
          psychology, business and design.
        </Text>
      </Box>
    </>
  )
}
