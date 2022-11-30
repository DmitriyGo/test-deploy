import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Asd from "./components/asd";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<App />}/>
              <Route path='/asd' element={<Asd/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
