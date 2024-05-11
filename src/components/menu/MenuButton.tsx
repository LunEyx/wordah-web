import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { ForwardedRef } from 'react'

interface MenuButtonProps extends IconButtonProps {
  ref?: ForwardedRef<HTMLButtonElement>
}

const MenuButton = (props: MenuButtonProps) => {
  return (
    <IconButton
      bgColor="#fce9c9"
      _hover={{ bgColor: '#ffd485', borderColor: '#ffb74d' }}
      {...props}
    />
  )
}

export default MenuButton
