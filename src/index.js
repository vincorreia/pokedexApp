import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonProvider from './context/PokemonContext';
import "./components/styles/index.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <PokemonProvider>
                <App />
        </PokemonProvider>
    </BrowserRouter>
);