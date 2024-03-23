import { Heading, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <>
      <Heading textAlign="center" color="gray.200" marginBottom="1rem">
        AI KeywordSense Tool
      </Heading>
      <Text fontSize={20} textAlign="center">
        Drop your text here, and we'll pinpoint the essential keywords for you.
      </Text>
    </>
  )
}

export default Header
