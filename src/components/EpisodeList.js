import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import EpisodeCard from './EpisodeCard';

const EpisodeDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin: 5px auto;
`;

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
        <EpisodeDiv>
            {episodeList.map((episode, index) => <EpisodeCard episode={episode} key={index}/>)}
        </EpisodeDiv>
    )
}
