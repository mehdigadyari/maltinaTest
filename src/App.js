import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import ThemeProvider from './components/ThemeProvider'
import Routes from './routes'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
