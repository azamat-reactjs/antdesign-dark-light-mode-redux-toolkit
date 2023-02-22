import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'antd/dist/reset.css'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './store'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
