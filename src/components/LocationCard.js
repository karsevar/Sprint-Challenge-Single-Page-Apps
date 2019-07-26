import React from 'react';
import styled from 'styled-components';

const LocationContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LocationCard ({location}) {
  // image={image}
  return (
    <LocationContainer>
      <h3>{location.name}</h3>
      <h4>Type: {location.type}</h4>
      <p>{location.residents.length} Residents</p>
      {/* {console.log(location)}  */}
    </LocationContainer>
  )
}
