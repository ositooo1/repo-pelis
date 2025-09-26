// src/components/DetallePelicula.jsx
// Este componente muestra los detalles de una película específica en la ruta "/peliculas/:id"

import { useParams, Link } from 'react-router-dom';
import { obtenerPeliculaPorId } from '../data/peliculas';

function DetallePelicula() {
  // useParams() nos da acceso a los parámetros de la URL
  // En este caso, nos da el "id" de la ruta "/peliculas/:id"
  const { id } = useParams();
  
  // Buscamos la película usando el ID de la URL
  const pelicula = obtenerPeliculaPorId(id);

  // Si no encontramos la película, mostramos un mensaje de error
  if (!pelicula) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>❌ Película no encontrada</h1>
        <p>No pudimos encontrar la película con ID: {id}</p>
        <Link 
          to="/peliculas/all"
          style={{
            color: '#007bff',
            textDecoration: 'none'
          }}
        >
          ← Volver a la lista de películas
        </Link>
      </div>
    );
  }

  // Si encontramos la película, mostramos todos sus detalles
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '2rem',
        backgroundColor: '#f8f9fa'
      }}>
        <h1 style={{ 
          margin: '0 0 1rem 0',
          color: '#333',
          borderBottom: '2px solid #007bff',
          paddingBottom: '0.5rem'
        }}>
          🎬 {pelicula.titulo}
        </h1>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Director:</strong> {pelicula.director}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Año:</strong> {pelicula.año}
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <strong>Descripción:</strong>
          <p style={{ 
            marginTop: '0.5rem',
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            {pelicula.descripcion}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link 
            to="/peliculas/all"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '6px'
            }}
          >
            ← Volver a la lista
          </Link>
          
          <Link 
            to="/"
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '6px'
            }}
          >
            🏠 Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetallePelicula;