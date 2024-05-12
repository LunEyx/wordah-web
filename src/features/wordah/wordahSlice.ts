import { createSlice } from '@reduxjs/toolkit'
import { WordahActionState } from '../../types/wordah'

interface WordahState {
  state: WordahActionState
}

const initialState: WordahState = {
  state: WordahActionState.IDLE,
}

const WordahSlice = createSlice({
  name: 'wordah',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload
    },
  },
})

export const { setState } = WordahSlice.actions

export default WordahSlice.reducer
