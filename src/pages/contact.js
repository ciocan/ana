import { Meta } from '@components'
import { Box, Heading, Text, Link } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <Meta title="Contact Ana State" />
      <Box
        w={['100%', '80%', '600px']}
        mx="auto"
        px={['10', '0']}
        mt={['100px', '175px']}
        mb={['150px', '400px']}
      >
        <Heading
          mb={[8, 0]}
          ml={[-2, -5]}
          lineHeight={['96px', '288px']}
          fontSize={['128px', '288px']}
        >
          HE
        </Heading>
        <Heading
          mb={[8, 0]}
          ml={[-2, -5]}
          lineHeight={['96px', '288px']}
          fontSize={['128px', '288px']}
          color="red"
        >
          LLO
          <Box
            as="span"
            w="28px"
            h="28px"
            display="inline-block"
            borderColor="red"
            borderWidth="6px"
            borderStyle="solid"
          />
        </Heading>
        <Heading color="red" my="8">
          Let’s talk all things product design.
        </Heading>
        <Text fontSize="xl" my="6">
          Whether you’re building a new product or improving the user experience of an existing one,
          let’s talk. Reach out by hitting the button below.
        </Text>
        <Link
          variant="button"
          mt="8"
          rel="nofollow"
          target="_blank"
          href="mailto:hello@anastate.com"
        >
          Contact me
        </Link>
      </Box>
    </>
  )
}