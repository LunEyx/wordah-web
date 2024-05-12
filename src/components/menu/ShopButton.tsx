import { Image } from '@chakra-ui/react'
import ShopIcon from '../../assets/icons/shop.png'
import MenuButton from './MenuButton'

const ShopButton = () => {
  return (
    <MenuButton
      minW={{ base: '64px', lg: '70px' }}
      minH="64px"
      aria-label="shop"
      icon={<Image src={ShopIcon} w="56px" />}
    />
  )
}

export default ShopButton
