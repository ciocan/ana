import { Grid, Text, Heading, VStack, Link } from '@chakra-ui/core'
import NextLink from 'next/link'

export const Content = ({ title, children, ...rest }) => (
  <Grid py="8" columns={[1, 2]} gap={[2, 16]} templateColumns="1fr 2fr" {...rest}>
    <Heading variant="content" pr={[0, 8]}>
      {title}
    </Heading>
    <VStack alignItems="flex-start">{children}</VStack>
  </Grid>
)

export const NextProject = ({ title, url }) => (
  <VStack pt="16" mb="64" alignSelf="center">
    <Text mb="4">Curious to see more projects?</Text>
    <Heading mb="12" variant="content">
      {title}
    </Heading>
    <NextLink href={url}>
      <Link variant="button">
        <Text mr="2">See Next Project</Text>
      </Link>
    </NextLink>
  </VStack>
)
