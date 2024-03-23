import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AchievementContext } from '../../contexts/AchievementContext'

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onOpen: onAchievementModalOpen } = useContext(AchievementContext)

  const handleAchievementsClick = () => {
    onAchievementModalOpen()
    onClose()
  }

  const handleSettingsClick = () => {
    console.log('Settings clicked')
    onClose()
  }

  return (
    <>
      <IconButton aria-label="menu" icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Vocabulary Test</DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" gap={4}>
              <Button variant="outline" onClick={handleAchievementsClick}>
                Achievements
              </Button>
              <Button variant="outline" onClick={handleSettingsClick}>
                Settings
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu
