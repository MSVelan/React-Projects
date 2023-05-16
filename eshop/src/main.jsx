import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reducer, {initialState} from './reducer.jsx'
import { StateProvider } from './StateProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
