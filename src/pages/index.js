import { Meta } from '@components'
import { Box, Heading, HStack, Text, Image, VStack, Stack, Link } from '@chakra-ui/core'
import MouseIcon from '../svg/mouse.svg'
import ArrowIcon from '../svg/arrow.svg'

export default function Home() {
  return (
    <>
      <Meta />
      <Box w={['100%', '80%', '600px']} mx="auto" px={['10', '0']} mt={['100px', '175px']}>
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
        <HStack spacing="4" mt="150px">
          <MouseIcon width="20px" />
          <Text fontSize="xl">Scroll to explore projects</Text>
        </HStack>
      </Box>
      <Box
        w={['100%', '1000px']}
        mt={['100px', '200px']}
        mb={['150px', '400px']}
        px={['10', '10']}
        mx="auto"
      >
        <Heading fontSize="6xl">Work.</Heading>
        <Project
          type="Fintech startup"
          name="Web app integration"
          description="Drive user aquisition through web integration of a Fintech mobile app and a Payroll
              provider app."
          imageUrl="/images/phone1.png"
          url="/work/web-integration"
        />
        <Project
          type="Fintech startup"
          name="Design system"
          description="Building design principles and a visual system for an evolving product ecosystem."
          imageUrl="/images/desktop1.png"
          url="/work/design-system"
          variant="right"
        />
        <Project
          type="eSecurity"
          name="Mobile app redesign"
          description="A project focused on redesigning the onboarding experience of a security banking  app."
          imageUrl="/images/phone1.png"
          url="/work/mobile-app-redesign"
        />
        <Project
          type="Research"
          name="Sales meets research"
          description="Redesign internal tools for a better cross-selling process."
          imageUrl="/images/desktop2.png"
          url="/work/sales-meet-research"
          variant="right"
        />
      </Box>
    </>
  )
}

const Project = ({ imageUrl, type, name, description, url, variant = 'left' }) => {
  return variant === 'left' ? (
    <Stack
      direction={['column-reverse', 'row']}
      justifyContent="space-between"
      mb={['120px', '180px']}
    >
      <VStack alignItems="flex-start" justifyContent="space-around" w={['100%', '30%']}>
        <Text color="grey">{type}</Text>
        <Heading mb="4" fontSize="4xl">
          {name}
        </Heading>
        <Text mb="8">{description}</Text>
        <ProjectLink href={url}>See Project</ProjectLink>
      </VStack>
      <Box>
        <Image src={imageUrl} fit="fit" alt={name} />
      </Box>
    </Stack>
  ) : (
    <Stack justifyContent="space-between" mb={['120px', '180px']}>
      <Box pr={[0, 20]}>
        <Image src={imageUrl} fit="fit" alt={name} />
      </Box>
      <VStack alignItems="flex-start" justifyContent="space-around" w={['100%', '30%']}>
        <Text color="grey">{type}</Text>
        <Heading mb="4" fontSize="4xl">
          {name}
        </Heading>
        <Text mb="8">{description}</Text>
        <ProjectLink href={url}>See Project</ProjectLink>
      </VStack>
    </Stack>
  )
}

const ProjectLink = ({ href, children }) => (
  <HStack as={Link} href={href} variant="button">
    <Text mr="2">{children}</Text>
    <ArrowIcon width="20px" />
  </HStack>
)
