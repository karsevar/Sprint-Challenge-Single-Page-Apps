import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EpisodeList() {

    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(result => {
                //console.log('results', result);
                setEpisodeList(result.data.results)
            })
            .catch(error => {
                console.log('error', error);
            })
    }, [])


    return (
        <div>
            {console.log(episodeList)}
            <h1>Enter Episodes here!</h1>
        </div>
    )
}
