import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isFirstVisit: boolean
  isLoadedSavedData: boolean
  target: number
  backgroundIndex: number
  portraitBorderIndex: number
  wordahClothIndex: number
  wordahAccessaryIndex: number
}

const initialState: UserState = {
  isFirstVisit: true,
  isLoadedSavedData: false,
  target: 5000,
  backgroundIndex: 0,
  portraitBorderIndex: 0,
  wordahClothIndex: 0,
  wordahAccessaryIndex: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstVisit: (state, action: PayloadAction<boolean>) => {
      state.isFirstVisit = action.payload
    },
    setTarget: (state, action: PayloadAction<number>) => {
      state.target = action.payload
    },
    setBackground: (state, action: PayloadAction<number>) => {
      state.backgroundIndex = action.payload
    },
    setPortraitBorder: (state, action: PayloadAction<number>) => {
      state.portraitBorderIndex = action.payload
    },
    setPortrait: (state, action: PayloadAction<number>) => {
      state.wordahClothIndex = action.payload
    },
    setWordahCloth: (state, action: PayloadAction<number>) => {
      state.wordahClothIndex = action.payload
    },
    setWordahAccessary: (state, action: PayloadAction<number>) => {
      state.wordahAccessaryIndex = action.payload
    },
  },
})

export const {
  setFirstVisit,
  setTarget,
  setBackground,
  setPortraitBorder,
  setPortrait,
  setWordahCloth,
  setWordahAccessary,
} = userSlice.actions

export default userSlice.reducer
