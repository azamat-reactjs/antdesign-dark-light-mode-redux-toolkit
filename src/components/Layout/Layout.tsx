import { useAppSelector } from '../../hooks/storeHooks'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { Layout as AntLayout } from 'antd'

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout

export const Layout = () => {
  const theme = useAppSelector((state) => state.theme)

  return (
    <>
      <AntLayout
        style={{
          background: theme === 'dark' ? '#141414' : '#fff',
          transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }}
      >
        <AntHeader
          style={{
            background: theme === 'dark' ? '#141414' : '#fff',
            transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
        >
          <Header />
        </AntHeader>
        <AntContent
          style={{
            background: theme === 'dark' ? '#141414' : '#fff',
            transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
        >
          <Main />
        </AntContent>
        <AntFooter
          style={{
            background: theme === 'dark' ? '#141414' : '#fff',
            transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
        >
          <Footer />
        </AntFooter>
      </AntLayout>
    </>
  )
}
