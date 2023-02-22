import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'
import { Layout as AntLayout } from 'antd'

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout

export const Layout = () => {
  return (
    <>
      <AntLayout>
        <AntHeader>
          <Header />
        </AntHeader>
        <AntContent>
          <Main />
        </AntContent>
        <AntFooter>
          <Footer />
        </AntFooter>
      </AntLayout>
    </>
  )
}
