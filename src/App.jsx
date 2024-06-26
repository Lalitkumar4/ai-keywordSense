import { useState } from "react"
import { Container, Box } from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextInput from "./components/TextInput"
import KeywordsModal from "./components/KeywordsModal"

const App = () => {
  const [keywords, setKeywords] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "davinci-002",
        prompt:
          "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    }

    try {
      const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)

      const json = await response.json()

      if (!response.ok) {
        throw new Error("Something went wrong. Plase try again letter.")
      }

      const data = json.choices[0].text.trim()

      // console.log(data)
      setKeywords(data)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Box bg="gray.800" color="white" height="100vh" padding={10}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal
        keywords={keywords}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
        error={error}
      />
    </Box>
  )
}

export default App
