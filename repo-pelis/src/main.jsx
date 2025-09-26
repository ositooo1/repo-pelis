// src/main.jsx
// Este es el punto de entrada de tu aplicación React

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Importamos nuestros componentes (ahora sí existen!)
import Inicio from "./components/Inicio"
import ListaPeliculas from "./components/ListaPeliculas"
import DetallePelicula from "./components/DetallePelicula"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter envuelve toda la aplicación para habilitar el routing */}
    <BrowserRouter>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Inicio />} />
        
        {/* Ruta para la lista de todas las películas */}
        <Route path="/peliculas/all" element={<ListaPeliculas />} />
        
        {/* Ruta dinámica para el detalle de cada película */}
        {/* :id es un parámetro que captura cualquier valor después de /peliculas/ */}
        <Route path="/peliculas/:id" element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)