import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import BackgroundSettings from './BackgroundSettings'
import PortraitBorderSettings from './PortraitBorderSettings'
import PortraitSettings from './PortraitSettings'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { toggleModal } from '../../../features/modal/settingsSlice'
import WordahClothSettings from './WordahClothSettings'
import WordahAccessarySettings from './WordahAccessarySettings'

const SettingsModal = () => {
  const isOpen = useAppSelector((state) => state.settingsModal.isOpen)
  const dispatch = useAppDispatch()

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => dispatch(toggleModal())}
      closeOnOverlayClick={false}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BackgroundSettings />
          <PortraitBorderSettings />
          <PortraitSettings />
          <WordahClothSettings />
          <WordahAccessarySettings />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal
