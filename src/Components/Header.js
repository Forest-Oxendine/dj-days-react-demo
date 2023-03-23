import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    return (
        <>
        <HeaderText>{props.HeaderContent}</HeaderText>
        </>
    );
}

export default Header;

const HeaderText = styled.h1`
    text-align: center;
`