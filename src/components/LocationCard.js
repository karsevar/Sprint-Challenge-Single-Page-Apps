import React from 'react'

export default function LocationCard ({location}) {
  // image={image}
  return (
    <div>
      <h3>{location.name}</h3>
      <h4>{location.planet}</h4>
      <p>{location.residents.length} Residents</p>
    </div>
  )
}
