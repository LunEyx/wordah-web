import { useContext } from 'react'
import {
  Modal,
  ModalBody,
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Achievements</ModalHeader>
          <ModalBody>
            <WordRecordCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WordRecordModal
