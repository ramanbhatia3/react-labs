import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Key from './Key.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Key />
  </StrictMode>,
)
