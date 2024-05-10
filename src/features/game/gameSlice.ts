import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GameState {
  isInitialized: boolean
}

const initialState: GameState = {
  isInitialized: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
  },
})

export const { setInitialized } = gameSlice.actions

export default gameSlice.reducer
