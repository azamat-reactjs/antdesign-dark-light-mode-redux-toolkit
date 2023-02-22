import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeTheme } from '../../store/slices/themeSlice'
import { Moon } from '../Icons/Moon'
import { Sun } from '../Icons/Sun'
import { Button } from 'antd'

export const Header = () => {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const toggleColorMode = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(changeTheme(next))
  }

  return (
    <div>
      <Button onClick={toggleColorMode}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}
