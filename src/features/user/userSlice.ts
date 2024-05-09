import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isFirstVisit: boolean
  isLoadedSavedData: boolean
  target: number
}

const initialState: UserState = {
  isFirstVisit: true,
  isLoadedSavedData: false,
  target: 5000,
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
  },
})

export const { setFirstVisit, setTarget } = userSlice.actions

export default userSlice.reducer
