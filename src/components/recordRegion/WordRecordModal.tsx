import { useContext } from 'react'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { ModalContext } from '../../contexts/ModalContext'
import WordRecordCard from './WordRecordCard'

const WordRecordModal = () => {
  const {
    wordRecord: { isOpen, onClose },
  } = useContext(ModalContext)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Honey Pot</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WordRecordCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WordRecordModal
