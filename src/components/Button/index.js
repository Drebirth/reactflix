import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    text-decoration:none;
    padding: 16px 24px;
    transition: opacity 0.3s;

    &:hover,
    &focus{
        opacity:0.5;
    }

    @media(max-width: 800px){
        position: fixed;
        right: 0;
        left: 0;
        bottom:0;
        text-align:center;
        background-color: red;
        color: var(--black);
        outline: 0;
        border: 0;
        border-radius: 0;

    
    }
`

export default Button;