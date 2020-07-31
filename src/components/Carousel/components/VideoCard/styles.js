import styled from 'styled-components';

export const VideoCardContainer = styled.a`
    background-image: ${({url}) => `url(${url})`};
    background-size: cover;
    background-position: center;
    height: 197px;
    width: 298px;
    border: 2px solid;
    border-radius: 10px;
    display: block;
    transition: opacity 0.3s;

    &:hover,
    &focus{
        opacity: 0.5;
    }

 
`;
