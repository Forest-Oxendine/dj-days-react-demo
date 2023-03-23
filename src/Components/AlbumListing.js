import React from 'react';
import styled from 'styled-components';

const AlbumListing = (props) => {
    return (
        <>
        <StyledDiv>
        <Name>{props.AlbumName}</Name>
        <Artist>{props.AlbumArtist}</Artist>
        <Genre>{props.AlbumGenre}</Genre>
        </StyledDiv>
        </>
    );
}

export default AlbumListing;

const Name = styled.p`
background-color: yellow;
`
const Artist = styled.p`
background-color: pink;
`
const Genre = styled.p`
background-color: green;
`
const StyledDiv = styled.div`
border-style: dotted;
margin: 15px;
background-color: aquamarine;

`