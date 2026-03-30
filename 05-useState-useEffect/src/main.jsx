import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './App.jsx'
import Watch from './Watch.jsx'
import Posts from './Posts.jsx'

import LinkedIn from './LinkedIn.jsx'
import Notification from './Notification.jsx'
import LinkedInApp from './LinkedInApp.jsx'

import TodoApp from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
    <TodoApp />
)
