import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/game/gameSlice'
import userReducer from '../features/user/userSlice'
import wordahReducer from '../features/wordah/wordahSlice'
import settingsModalReducer from '../features/modal/settingsSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    wordah: wordahReducer,
    settingsModal: settingsModalReducer,
  },
  devTools: import.meta.env.DEV,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
