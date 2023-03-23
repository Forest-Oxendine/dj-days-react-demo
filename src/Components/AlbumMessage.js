import React from 'react';
import styled from 'styled-components';

const AlbumMessage = (props) => {
    return (
        <>
        <Message>{props.MessageContent}</Message>
        </>
    );
}

export default AlbumMessage;

const Message = styled.h3`
    text-align: center;
    background-color:blue;
`