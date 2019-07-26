import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

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
        <div>
            {locations.map((location, index) => <LocationCard location={location} key={index}/>)}
        </div>
    )

}
