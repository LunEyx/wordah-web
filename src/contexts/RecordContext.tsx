import { createContext, useContext, useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'

type RecordContextType = {
  isLoading: boolean
  wordCount: number
  words: string[]
  checkRecord: (word: string) => boolean
  addRecord: (word: string) => void
  removeRecord: (word: string) => void
}

const initialState: RecordContextType = {
  isLoading: true,
  wordCount: 0,
  words: [],
  checkRecord: () => false,
  addRecord: () => {},
  removeRecord: () => {},
}

const RecordContext = createContext<RecordContextType>(initialState)
export const useRecordContext = () => useContext(RecordContext)

interface RecordProviderProps {
  children: React.ReactNode
}

const RecordProvider = (props: RecordProviderProps) => {
  const { children } = props

  const [isLoading, setIsLoading] = useState(true)
  const [wordList, setWordList] = useState<{ [key: string]: number }>({})
  const [record, setRecord] = useState<string[]>([])
  const [recordMap, setRecordMap] = useState<{ [key: string]: boolean }>({})
  const toast = useToast()

  useEffect(() => {
    const fetchWordList = async () => {
      const data = await fetch(
        'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json',
      )
      const result = await data.json()
      setIsLoading(false)
      setWordList(result)
    }

    fetchWordList()
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('record')
    if (data) {
      const words = JSON.parse(data)
      setRecord(words)
      const map = {} as { [key: string]: boolean }
      for (const word of words) {
        map[word] = true
      }
      setRecordMap(map)
    }
  }, [])

  useEffect(() => {
    if (record.length === 0) return

    localStorage.setItem('record', JSON.stringify(record))
  }, [record])

  const checkRecord = (word: string) => {
    if ((wordList as { [key: string]: number })[word] === undefined) {
      toast({
        title: 'Invalid word',
        description: `${word} is not a valid word`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return false
    }
    if (recordMap[word]) {
      toast({
        title: 'Duplicate word',
        description: `${word} has already been added`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return false
    }
    return true
  }

  const addRecord = (word: string) => {
    if (recordMap[word]) return

    setRecord((prev) => [...prev, word])
    setRecordMap((prev) => ({ ...prev, [word]: true }))
  }

  const removeRecord = (word: string) => {
    setRecord((prev) => prev.filter((w) => w !== word))
    setRecordMap((prev) => ({ ...prev, [word]: false }))
  }

  const value = {
    isLoading,
    wordCount: record.length,
    words: record,
    addRecord,
    removeRecord,
    checkRecord,
  }

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  )
}

export default RecordProvider
