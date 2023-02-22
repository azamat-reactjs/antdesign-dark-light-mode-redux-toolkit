import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (['light', 'dark'].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'dark'
}

const initialState = getTheme()

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => action.payload
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
