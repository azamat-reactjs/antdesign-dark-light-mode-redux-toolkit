import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Sun } from './components/Icons/Sun'
import { Moon } from './components/Icons/Moon'
import { Button, Card, ConfigProvider, theme } from 'antd'

const { defaultAlgorithm, darkAlgorithm } = theme

const ColorModeContext = createContext({ toggleColorMode: () => {} })

function MyApp({ mode }: { mode: string }) {
  const colorMode = useContext(ColorModeContext)
  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '0',
        border: 'none'
      }}
    >
      <div className="App">
        <Button onClick={colorMode.toggleColorMode}>
          {mode === 'light' ? <Sun /> : <Moon />}
        </Button>
      </div>
    </Card>
  )
}

function App() {
  const storage = typeof window !== 'undefined' ? localStorage.theme : 'light'
  const [storageTheme, setStorageTheme] = useState(storage)
  const [mode, setMode] = useState<'light' | 'dark'>(storage)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const THEME = useMemo(
    () => ({
      algorithm: mode === 'light' ? darkAlgorithm : defaultAlgorithm
    }),
    [mode]
  )

  useEffect(() => {
    localStorage.setItem('theme', mode)
    setStorageTheme(mode)
  }, [THEME, storageTheme, mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ConfigProvider theme={THEME}>
        <MyApp mode={mode} />
      </ConfigProvider>
    </ColorModeContext.Provider>
  )
}

export default App
