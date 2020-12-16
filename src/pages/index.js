import { Box, Grid, Heading, HStack, Link, Stack, Text, VStack } from '@chakra-ui/core'
import { Meta } from '@components'
import Image from 'next/image'
import NextLink from 'next/link'
import styled from 'styled-components'
import ArrowIcon from '../svg/arrow.svg'

export default function Home() {
  return (
    <>
      <Meta title="Technical Product Designer | Ana State" />
      <Grid
        w={['100%', '80%', '600px']}
        h={['calc(100vh - 50px)', 'calc(100vh - 120px)']}
        px={['16', '0']}
        mx="auto"
        pt={['80px', '160px']}
        pb={['150px', '60px']}
        alignItems="flex-start"
        justifyContent="center"
        pos="relative"
        templateRows="1fr 9fr"
      >
        <Heading fontSize={['36px', '42px']} color="red" mb="8" mt="0">
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
        <HStack>
          <MouseScroll />
          <Text fontSize={['md', 'xl']}>Scroll to explore projects</Text>
        </HStack>
      </Grid>

      <Box w={['100%', '1000px']} mb={['150px', '400px']} px={['16', '10']} mx="auto">
        <Box id="work" pt="40px" />
        <Heading fontSize="6xl" mb={['80px', '120px']}>
          Work.
        </Heading>
        <Project
          type="Fintech startup"
          name="Web app integration"
          description="Drive user aquisition through web integration of a Fintech mobile app and a Payroll
              provider app."
          imageUrl="/images/phone1"
          url="/work/web-integration"
        />
        <Project
          type="Fintech startup"
          name="Design system"
          description="Building design principles and a visual system for an evolving product ecosystem."
          imageUrl="/images/desktop1"
          url="/work/design-system"
          variant="right"
        />
        <Project
          type="eSecurity"
          name="Mobile app redesign"
          description="A project focused on redesigning the onboarding experience of a security banking  app."
          imageUrl="/images/phone2"
          url="/work/mobile-app-redesign"
        />
        <Project
          type="Research"
          name="Sales meets research"
          description="Redesign internal tools for a better cross-selling process."
          imageUrl="/images/desktop2"
          url="/work/sales-meet-research"
          variant="right"
        />
      </Box>
    </>
  )
}

const Project = ({ imageUrl, type, name, description, url, variant = 'left' }) => {
  return variant === 'left' ? (
    <Grid templateColumns={['1fr', '1fr 1fr']} mb={['120px', '180px']}>
      <VStack
        alignItems="flex-start"
        justifyContent="center"
        mr={[0, '60px']}
        mt={['20px', 0]}
        pr={[0, '80px']}
        order={[2, 1]}
      >
        <Text color="grey">{type}</Text>
        <Heading mb="3" fontSize="4xl">
          {name}
        </Heading>
        <Text mb={[10, '60px']}>{description}</Text>
        <ProjectLink href={url}>See project</ProjectLink>
      </VStack>
      <Box mr={['-55px', '-80px']} ml={['-65px', 0]} w={['400px', 'auto']} order={[1, 2]}>
        <Image src={`${imageUrl}.webp`} alt={name} width={600} height={368} />
      </Box>
    </Grid>
  ) : (
    <Grid templateColumns={['1fr', '1fr 1fr']} mb={['120px', '180px']}>
      <Box ml={['-55px', '-80px']} w={['400px', 'auto']}>
        <Image src={`${imageUrl}.webp`} alt={name} width={600} height={368} />
      </Box>
      <VStack
        alignItems="flex-start"
        justifyContent="center"
        mr={['55px', 0]}
        mt={['35px', 0]}
        pl={[0, '80px']}
      >
        <Text color="grey">{type}</Text>
        <Heading mb="3" fontSize="4xl">
          {name}
        </Heading>
        <Text mb={[10, '60px']}>{description}</Text>
        <ProjectLink href={url}>See project</ProjectLink>
      </VStack>
    </Grid>
  )
}

const ProjectLink = ({ href, children }) => (
  <NextLink href={href}>
    <HStack as={Link} variant="button">
      <Text mr="2">{children}</Text>
      <ArrowIcon width="20px" />
    </HStack>
  </NextLink>
)

const MouseScroll = styled.div`
  width: 25px;
  height: 42px;
  margin-right: 8px;
  box-shadow: inset 0 0 0 1px #000;
  border-radius: 25px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #000;
    margin-left: 9px;
    top: 8px;
    border-radius: 3px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(22px);
    }
  }
`
