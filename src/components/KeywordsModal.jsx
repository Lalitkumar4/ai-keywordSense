import PropTypes from "prop-types"
import { WarningIcon } from "@chakra-ui/icons"
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  Icon,
} from "@chakra-ui/react"

const KeywordsModal = ({ keywords, loading, isOpen, closeModal, error }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>keywords</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {loading ? (
              <CircularProgress isIndeterminate color="gray.500" />
            ) : error ? (
              <>
                <Icon as={WarningIcon} />
                <Text marginLeft={2}>{error}</Text>
              </>
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

KeywordsModal.propTypes = {
  keywords: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default KeywordsModal
