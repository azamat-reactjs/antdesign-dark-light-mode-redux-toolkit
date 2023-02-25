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
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        components: {
          Card: {
            fontFamily: '"Lora", serif',
            fontSize: 16
          }
        }
      }}
    >
      <Card
        bodyStyle={{ padding: '0', borderRadius: '0' }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '0',
          border: 'none',
          transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }}
      >
        <Layout />
      </Card>
    </ConfigProvider>
  )
}
