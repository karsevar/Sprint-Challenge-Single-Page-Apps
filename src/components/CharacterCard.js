import React from 'react'
import styled from 'styled-components';

const CharactersDiv = styled.div`
  font-family: "sans-serif";
  margin: 0 5px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CharacterImg = styled.img`
  width: 300px;
  border-radius: 10px;
`;


export default function CharacterCard ({character}) {
  return (
    <CharactersDiv>
      <CharacterImg src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <h4>{character.species} {character.status}</h4>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      {console.log(character)}

    </CharactersDiv> 
  )
}
