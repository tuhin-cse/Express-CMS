import React, {useEffect} from 'react'
import ReactDOM from "react-dom/client";
import './styles/app.scss'
import {BrowserRouter} from "react-router-dom";
import Router from "./router";


const App = () => {
    useEffect(() => {

    }, [])

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </React.StrictMode>

    )
}
ReactDOM.createRoot(document.querySelector('#_app')).render(<App/>)