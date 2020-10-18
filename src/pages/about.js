import { Meta } from '@components'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/core'

export default function Home() {
  return (
    <>
      <Meta title="About Ana State" />
      <Box w={['100%', '80%', '600px']} mx="auto" px={['10', '0']} mt={['100px', '175px']}>
        <Heading mb={[8, 0]} ml={[-2, -5]}>
          <Box as="span" fontSize={['128px', '288px']} color="primaryBlack">
            BI
          </Box>
          <Box as="span" fontSize={['128px', '288px']} color="red">
            O
          </Box>
          <Box
            as="span"
            w="28px"
            h="28px"
            display="inline-block"
            borderColor="red"
            borderWidth="6px"
            borderStyle="solid"
            borderRadius="28px"
          />
        </Heading>
        <Heading color="red">A designer with a knack for psychology.</Heading>
        <Text fontSize="xl" my="6">
          Hey, I’m{' '}
          <Text as="span" fontWeight="bold" display="inline" color="red">
            Ana
          </Text>
          , a technical product designer who cares deeply about accesibility, inclusiveness & human
          psychology and believes in design that serves both people and businesses.
        </Text>
        <Text fontSize="xl">
          Performant design that’s shippable, comes from collaboration between disciplines.
        </Text>
      </Box>
      <Box backgroundColor="primaryBlack" mt="100px" mb={['32', '64']}>
        <Box w={['100%', '80%', '600px']} mx="auto" px={['10', '0']} py={['16', '136px']}>
          <Heading color="white">How I can help you</Heading>
          <SimpleGrid columns={['1', '2']} spacing={[16, 20]} mt={['16', '32']}>
            <HelpBox title="Discovery">
              Research, analytics and usability testing are tools I use to understand user behaviour
              and design interfaces & experiences that convert well.
            </HelpBox>
            <HelpBox title="Design">
              I am a huge proponent of wireframing & prototyping at all project stages to validate
              designs and iterate fast for different touchpoints.
            </HelpBox>
            <HelpBox title="Webflow Development">
              Using Webflow, I’m able to build well-thought-out interfaces, bringing together visual
              design, development and clean production-ready code.
            </HelpBox>
            <HelpBox title="Design systems">
              Design systems and brand guidelines are the two tools I use to create consistent
              designs and collaborate with multidisciplinary teams.{' '}
            </HelpBox>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  )
}

const HelpBox = ({ title, children }) => (
  <Box>
    <Text color="red" fontWeight="bold" fontSize="xl" mb="4">
      {title}
    </Text>
    <Text fontSize="md" color="white">
      {children}
    </Text>
  </Box>
)
