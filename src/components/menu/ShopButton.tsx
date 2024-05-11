import { IconButton, Image } from '@chakra-ui/react'
import ShopIcon from '../../assets/icons/shop.png'

const ShopButton = () => {
  return (
    <IconButton aria-label="shop" icon={<Image src={ShopIcon} w="48px" />} />
  )
}

export default ShopButton
