import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // same as context api..yaha bhi </App> ko provider se wrap kr rhe hai..and similarly value pass hogi

  <Provider store={store}>
    <App />
  </Provider>,
)
