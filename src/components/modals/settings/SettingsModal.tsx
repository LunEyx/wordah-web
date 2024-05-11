import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import BackgroundSettings from './BackgroundSettings'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { toggleModal } from '../../../features/modal/settingsSlice'

const SettingsModal = () => {
  const isOpen = useAppSelector((state) => state.settingsModal.isOpen)
  const dispatch = useAppDispatch()

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => dispatch(toggleModal())}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BackgroundSettings />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal
