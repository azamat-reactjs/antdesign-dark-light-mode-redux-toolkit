import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeTheme } from '../../store/slices/themeSlice'
import { MoonIcon } from '../Icons/Moon'
import { SunIcon } from '../Icons/Sun'
import { Navbar } from '../Navbar'
import { Button, Col, Row } from 'antd'

export const Header = () => {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const toggleColorMode = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(changeTheme(next))
  }

  return (
    <Row gutter={[16, 16]} align="middle">
      <Col span={2} xs={4}>
        Logo
      </Col>
      <Col span={20} xs={15}>
        <Navbar />
      </Col>
      <Col span={2} xs={5}>
        <Button onClick={toggleColorMode}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Col>
    </Row>
  )
}
