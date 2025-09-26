import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import LibrosFicción from "./LibrosFicción"
import LibrosNF from './LibrosNF'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)