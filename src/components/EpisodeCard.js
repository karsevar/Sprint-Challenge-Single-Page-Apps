import React from 'react';
import styled from 'styled-components';

const EpisodeContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function EpisodeCard({episode}) {
    return (
        <EpisodeContainer>
            {/* {console.log(episode)} */}
            <h3>{episode.name}</h3>
            <h4>Episode: {episode.episode}</h4>
            <h4>Air Date: {episode.air_date}</h4>
        </EpisodeContainer>
    )
}