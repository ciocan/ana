import { Box, Text, Stack, HStack, Link } from '@chakra-ui/core'

export function Footer() {
  return (
    <Stack
      p="4"
      px={['12', '12', '40']}
      fontSize="xs"
      justifyContent="space-between"
      alignItems={['center', 'flex-start']}
      direction={['column-reverse', 'row']}
    >
      <Text>&copy; Designed by Ana State 2020 </Text>
      <HStack
        color="red"
        fontSize={['sm', 'xs']}
        divider={<Box bg="#C6C6CC" w="6px" h="6px" rounded="6px" />}
      >
        <Link rel="noreferrer" target="_blank" href="https://linkedin.com/in/anastate">
          Linkedin
        </Link>
        <Link rel="noreferrer" target="_blank" href="mailto:hello@anastate.com">
          Email
        </Link>
        <Link target="_blank" href="/Ana_State_Resume_UX_UI_Designer_2019.pdf">
          Resume
        </Link>
      </HStack>
    </Stack>
  )
}
