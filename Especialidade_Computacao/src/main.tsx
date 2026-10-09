import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './index.css'
import './styles/reader.css'
import './styles/cover-art.css'
import './styles/concept-art.css'
import './styles/hardware-art.css'
import './styles/safety-art.css'
import './styles/document-art.css'
import './styles/quiz.css'
import './styles/responsive.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
