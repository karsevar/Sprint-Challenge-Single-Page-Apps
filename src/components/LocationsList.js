import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import LocationCard from './LocationCard';

const LocationDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin: 5px auto;
`;


export default function LocationsList() {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location`)
            .then(results => {
                // EveryThing looks good. The output for this the location api 
                // is another array with objects. Just like characters.
                // console.log('results', results) 
                setLocations(results.data.results);
            })
            .catch(error => {
                console.log('error', error);
            })
    }, [])

    return  (
        <LocationDiv>
            {locations.map((location, index) => <LocationCard location={location} key={index}/>)}
        </LocationDiv>
    )

}
