import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
  isOpen: boolean
}

const initialState: SettingsState = {
  isOpen: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleModal } = settingsSlice.actions

export default settingsSlice.reducer
