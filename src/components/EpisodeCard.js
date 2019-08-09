import React from 'react';
import styled from 'styled-components';

const EpisodeContainer = styled.div`
  box-shadow: 1px 1px 9px 2px #888888;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterH3 = styled.h3`
  font-size: 2.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;

const CharacterH4 = styled.h3`
  font-size: 1.2rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CharacterParagraph = styled.p`
  font-size: 1rem;

  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export default function EpisodeCard({episode}) {
    return (
        <EpisodeContainer>
            {/* {console.log(episode)} */}
            <CharacterH3>{episode.name}</CharacterH3>
            <CharacterH4>Episode: {episode.episode}</CharacterH4>
            <CharacterH4>Air Date: {episode.air_date}</CharacterH4>
        </EpisodeContainer>
    )
}