import { HStack, Box, Text, Link as ChakraLink } from '@chakra-ui/core'
import NextLink from 'next/link'
import styled from 'styled-components'

const Logo = styled(Box)`
  @media only screen and (min-width: 1200px) {
    transform: rotateY(0deg) rotate(-90deg);
    padding-top: 20px;
    padding-bottom: 44px;
    padding-right: 60px;
    margin-right: 0;
    position: absolute;
    margin-right: auto;
    left: 50px;
    top: -14px;

    & :before {
      border-top: 1px solid #aeaba5;
      content: '';
      position: absolute;
      left: -500px;
      top: 0;
      height: 1px;
      width: 600px;
    }

    & :after {
      border-bottom: 1px solid #aeaba5;
      content: '';
      position: absolute;
      left: -420px;
      top: 80px;
      height: 1px;
      width: 520px;
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
      <Logo mr="auto">
        <Text as="b">ana</Text>
        <Text as="span">state</Text>
      </Logo>
      <HStack spacing="8" textTransform="uppercase">
        <Text>Work</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
    </HStack>
  )
}
