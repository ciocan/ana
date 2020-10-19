import { HStack, Box, Text } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Logo = styled(Box)`
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    transform: rotateY(0deg) rotate(-90deg);
    position: absolute;
  }

  @media only screen and (min-width: 1200px) {
    transform: rotateY(0deg) rotate(-90deg);
    position: absolute;
    left: 40px;
    top: 20px;

    & :before {
      border-top: 1px solid #102443;
      filter: opacity(0.5);
      position: absolute;
      content: '';
      left: -540px;
      top: -15px;
      height: 1px;
      width: 800px;
    }

    & :after {
      border-bottom: 1px solid #102443;
      filter: opacity(0.5);
      position: absolute;
      content: '';
      left: -470px;
      top: 50px;
      height: 1px;
      width: 620px;
    }
  }
`

export function Header() {
  return (
    <HStack
      justifyContent="flex-end"
      py={['4', '12']}
      px={['8', '24']}
      position="relative"
      fontSize={['xs', 'md']}
    >
      <Box marginRight="auto" pos="relative">
        <NextLink href="/">
          <Box as="a" py={[2, 0]}>
            <Logo mr="auto" as="span">
              <Text as="b">ana</Text>
              <Text as="span">state</Text>
            </Logo>
          </Box>
        </NextLink>
      </Box>
      <HStack spacing={[4, 8]} textTransform="uppercase">
        <Link title="Work" to="/#work" />
        <Link title="About" to="/about" />
        <Link title="Contact" to="/contact" />
      </HStack>
    </HStack>
  )
}

const Link = ({ title, to }) => {
  const router = useRouter()
  const selected =
    router.asPath === to || (router.asPath === '/' && to === '/#work') ? 'selected' : ''

  return (
    <NextLink href={to}>
      <Text
        as="a"
        _hover={{ textDecoration: 'underline', cursor: 'pointer', color: 'red' }}
        variant={selected}
        py={[2, 0]}
      >
        {title}
      </Text>
    </NextLink>
  )
}
