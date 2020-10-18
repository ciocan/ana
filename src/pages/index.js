import { Meta } from '@components'
import { Box, Heading, HStack, Text, Image, VStack, Stack, Link } from '@chakra-ui/core'
import MouseIcon from '../svg/mouse.svg'
import ArrowIcon from '../svg/arrow.svg'

export default function Home() {
  return (
    <>
      <Meta />
      <Box w={['100%', '80%', '600px']} mx="auto" px={['16', '0']} mt={['40px', '175px']}>
        <Heading color="red" my="8" mb={[12, 0]}>
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
        <HStack spacing="4" mt={['50px', '150px']}>
          <MouseIcon width="20px" />
          <Text fontSize={['md', 'xl']}>Scroll to explore projects</Text>
        </HStack>
      </Box>
      <Box
        w={['100%', '1000px']}
        mt={['120px', '200px']}
        mb={['150px', '400px']}
        px={['16', '10']}
        mx="auto"
      >
        <Box id="work" pt="40px" />
        <Heading fontSize="6xl" mb={['80px', '120px']}>
          Work.
        </Heading>
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
          imageUrl="/images/phone2.png"
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
      <VStack
        alignItems="flex-start"
        justifyContent="center"
        w={['100%', '60%']}
        mr={[0, '60px']}
        mt={['20px', 0]}
      >
        <Text color="grey">{type}</Text>
        <Heading mb="5" fontSize="4xl">
          {name}
        </Heading>
        <Text mb={[10, '60px']}>{description}</Text>
        <ProjectLink href={url}>See Project</ProjectLink>
      </VStack>
      <Box position="relative" right={[0, '-22px']}>
        <Image
          src={imageUrl}
          fit="fit"
          alt={name}
          ml={[-2, 0]}
          transform={['scale(1.3)', 'scale(1.2)']}
        />
      </Box>
    </Stack>
  ) : (
    <Stack direction={['column', 'row']} justifyContent="space-between" mb={['120px', '180px']}>
      <Box pr={[0, 20]} mb={[10, 0]} ml={[0, '-70px']}>
        <Image src={imageUrl} fit="fit" alt={name} transform={['scale(1.3)', 'scale(1)']} />
      </Box>
      <VStack alignItems="flex-start" justifyContent="center" w={['100%', '40%']}>
        <Text color="grey">{type}</Text>
        <Heading mb="5" fontSize="4xl">
          {name}
        </Heading>
        <Text mb={[10, '60px']}>{description}</Text>
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
