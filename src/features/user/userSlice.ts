import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isFirstVisit: boolean
  target: number
}

const initialState: UserState = {
  isFirstVisit: true,
  target: 0,
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
