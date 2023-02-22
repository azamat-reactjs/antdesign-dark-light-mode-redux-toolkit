import { useEffect } from 'react'
import { useAppSelector } from './hooks/storeHooks'
import { Layout } from './components/Layout'
import { Card, ConfigProvider, theme } from 'antd'

const { defaultAlgorithm, darkAlgorithm } = theme

export const App = () => {
  const theme = useAppSelector((state) => state.theme)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <Card
        bodyStyle={{padding: '0', borderRadius: '0'}}
        style={{
          fontSize: '16px',
          width: '100%',
          height: '100%',
          borderRadius: '0',
          border: 'none'
        }}
      >
        <Layout />
      </Card>
    </ConfigProvider>
  )
}
