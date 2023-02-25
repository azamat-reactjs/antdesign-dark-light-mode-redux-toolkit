import { useAppSelector } from '../../hooks/storeHooks'
import { Menu } from 'antd'

const items = [
  {
    key: 'home',
    label: 'Home'
  },
  {
    key: 'about',
    label: 'About'
  }
]

export const Navbar = () => {
  const theme = useAppSelector((state) => state.theme)

  return (
    <Menu
      style={{
        borderBottom: '0',
        background: theme === 'dark' ? '#141414' : '#fff',
        transition: 'background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
      }}
      theme={theme === 'dark' ? 'dark' : 'light'}
      mode="horizontal"
      defaultSelectedKeys={[items[0].key]}
      items={items}
    />
  )
}
