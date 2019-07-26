import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(result => {
          // It seems that the data is already in an array. So I can just copy the data into 
          // the characters useState() variable.
          // console.log('results from call', result.data.results)
          setCharacters([...result.data.results]);
        })
        .catch(error => {
          console.log('error', error);
        })

  }, [])

  return (
    <section className='character-list grid-view'>
      {/* {console.log(characters)} */}
      {/* Everything looks perfect result.data.results populated the characters variable */}
      {characters.map((character, index) => <CharacterCard character={character} key={index} />)} 
    </section>
  );

}
