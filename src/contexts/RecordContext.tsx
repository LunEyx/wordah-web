import { createContext, useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { CHECK_RECORD_RESULTS } from '../constants/record'

type RecordContextType = {
  isLoading: boolean
  wordCount: number
  words: string[]
  longestWord: string
  recentWords: string[]
  checkRecord: (word: string) => CHECK_RECORD_RESULTS
  addRecord: (word: string) => void
  removeRecord: (word: string) => void
}

const initialState: RecordContextType = {
  isLoading: true,
  wordCount: 0,
  words: [],
  longestWord: '',
  recentWords: [],
  checkRecord: () => CHECK_RECORD_RESULTS.NEW,
  addRecord: () => {},
  removeRecord: () => {},
}

export const RecordContext = createContext<RecordContextType>(initialState)

interface RecordProviderProps {
  children: React.ReactNode
}

const RecordProvider = (props: RecordProviderProps) => {
  const { children } = props

  const [isLoading, setIsLoading] = useState(true)
  const [wordList, setWordList] = useState<{ [key: string]: number }>({})
  const [record, setRecord] = useState<string[]>([])
  const [recordMap, setRecordMap] = useState<{ [key: string]: boolean }>({})
  const [longestWord, setLongestWord] = useState('')
  const [recentWords, setRecentWords] = useState<string[]>([])
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
      let maxLength = 0
      let lw = ''
      for (const word of words) {
        map[word] = true
        if (word.length > maxLength) {
          maxLength = word.length
          lw = word
        }
      }
      setRecordMap(map)
      setLongestWord(lw)
    }
  }, [])

  useEffect(() => {
    if (record.length === 0) return

    localStorage.setItem('record', JSON.stringify(record))
  }, [record])

  const checkRecord = (word: string): CHECK_RECORD_RESULTS => {
    if ((wordList as { [key: string]: number })[word] === undefined) {
      toast({
        title: 'Invalid word',
        description: `${word} is not a valid word`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return CHECK_RECORD_RESULTS.UNKNOWN
    }
    if (recordMap[word]) {
      toast({
        title: 'Duplicate word',
        description: `${word} has already been added`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return CHECK_RECORD_RESULTS.KNOWN
    }
    return CHECK_RECORD_RESULTS.NEW
  }

  const addRecord = (word: string) => {
    if (recordMap[word]) return

    setRecord((prev) => [...prev, word])
    setRecordMap((prev) => ({ ...prev, [word]: true }))
    if (word.length > longestWord.length) {
      setLongestWord(word)
    }
    setRecentWords((prev) => [...prev.slice(-4), word])
  }

  const removeRecord = (word: string) => {
    setRecentWords((prev) => prev.filter((w) => w !== word))
    setRecord((prev) => prev.filter((w) => w !== word))
    setRecordMap((prev) => ({ ...prev, [word]: false }))
    if (word === longestWord) {
      let lw = ''
      for (const w of record) {
        if (w !== word && w.length > lw.length) {
          lw = w
        }
      }
      setLongestWord(lw)
    }
  }

  const value = {
    isLoading,
    wordCount: record.length,
    words: record,
    longestWord,
    recentWords,
    addRecord,
    removeRecord,
    checkRecord,
  }

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  )
}

export default RecordProvider
