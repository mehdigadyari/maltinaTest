import React from 'react'
import { ThemeProvider } from '@material-ui/core'
// import Theme from '../../theme'

export default function index({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
