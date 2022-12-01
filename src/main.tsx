import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import Asd from "./components/asd";
import Layout from "./components/Layout";
import Qwe from "./components/qwe";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<App/>}/>
                    <Route path='/asd' element={<Asd/>}/>
                    <Route path='/qwe' element={<Qwe/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
