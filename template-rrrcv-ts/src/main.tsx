import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot, } from 'recoil'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
