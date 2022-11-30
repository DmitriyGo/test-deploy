import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import Asd from "./components/asd";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter basename='/test-deploy'>
            <Routes>
                <Route index element={<App/>}/>
                <Route path='/asd' element={<Asd/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
