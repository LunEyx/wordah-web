import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import AchievementCard from '../achievement/AchievementCard'
import { useContext } from 'react'
import { AchievementContext } from '../../contexts/AchievementContext'

const AchievementModal = () => {
  const { isOpen, onClose, achievements } = useContext(AchievementContext)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Achievements</ModalHeader>
        <ModalBody>
          <Flex
            flexDir="column"
            rowGap={4}
            maxH="500px"
            overflowY="auto"
            align="center"
          >
            {achievements.map((achievement) => (
              <Box key={achievement.id} w="95%">
                <AchievementCard {...achievement} />
              </Box>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AchievementModal
