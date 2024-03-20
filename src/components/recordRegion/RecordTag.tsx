import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

interface RecordTagProps {
  word: string
  closable?: boolean
  onClose?: () => void
}

const RecordTag = (props: RecordTagProps) => {
  const { word, closable, onClose } = props

  return (
    <Tag>
      <TagLabel>{word}</TagLabel>
      {closable && <TagCloseButton onClick={onClose} />}
    </Tag>
  )
}

export default RecordTag
