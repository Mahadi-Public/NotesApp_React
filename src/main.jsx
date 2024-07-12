import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './features/store.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ToastProvider } from './useToast.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
      <ToastProvider/>
    </Provider>
  </HelmetProvider>
)
