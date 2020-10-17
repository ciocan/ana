import { Meta } from '@components'
import { Box, Heading, Text, Link } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <Meta />
      <Box
        w={['100%', '80%', '600px']}
        mx="auto"
        px={['10', '0']}
        mt={['100px', '175px']}
        mb={["150px", "400px"]}
      >
        <Heading
          mb={[8, 0]}
          ml={[-2, -5]}
          lineHeight={['96px', '288px']}
          fontSize={['128px', '288px']}
          color="primaryBlack"
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
        <Text fontSize="xl" my="6" color="primaryBlack">
          Whether you’re building a new product or improving the user experience of an existing one,
          let’s talk. Reach out by hitting the button below.
        </Text>
        <Link
          borderColor="primaryBlack"
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="65px"
          display="inline-block"
          mt="8"
          px="10"
          py="3"
          rel="nofollow"
          target="_blank"
          href="mailto:hello@anastate.com"
          textDecoration="none"
          _hover={{
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Contact me
        </Link>
      </Box>
    </>
  )
}
