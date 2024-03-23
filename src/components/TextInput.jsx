import { useState } from "react"
import PropTypes from "prop-types"
import { Textarea, Button, useToast, Icon } from "@chakra-ui/react"
import { RepeatIcon } from "@chakra-ui/icons"

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("")

  const toast = useToast()

  const submitText = () => {
    if (text.trim() === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter some text",
        status: "error",
        duration: 5000,
        isClosable: false,
      })
    } else {
      extractKeywords(text)
    }
  }

  return (
    <>
      <Textarea
        bg="gray.700"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text here..."
      />

      <Button
        bg="gray.600"
        color="white"
        marginTop={8}
        minW="25%"
        _hover={{ bg: "gray.700" }}
        onClick={submitText}
      >
        <Icon marginRight="5px" as={RepeatIcon} />
        Generate Keyword
      </Button>
    </>
  )
}

TextInput.propTypes = {
  extractKeywords: PropTypes.func,
}

export default TextInput
