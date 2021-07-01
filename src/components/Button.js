import React from 'react'
import styled, {css} from 'styled-components'

import { Wrapper, FadeIn } from './styled';

const OuterWrapper = styled.div`
    width: 100%;
    background-color: blue;
    margin-top: 2rem;
`

const StyledButton = styled.button`
    background-color: white;
    color: ${(props) => props.theme.colors.dark};
    font-size: 1.2rem;
    margin: ${({margin}) => margin || '2rem'};
    padding: .5rem 1rem;
    border: 1px solid red;
    border-radius: 3px;
    animation: 2s ${FadeIn} ease-in;

    ${({primary}) => 
        primary && 
        css`
            background-color: red;
            color: green;
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
        `
    }

    &:hover{
        color: red;
        background-color: violet;
    }

    @media ${({theme}) => theme.mediaQueries['below-768']} {
        font-size: .8rem;
        color: blue;
    }
`;

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem;
`

const Button = ({margin, primary, children}) => {
    return (
        <OuterWrapper>
            <StyledButton primary={primary} margin={margin}>
                {children}
            </StyledButton>
        </OuterWrapper>
    )
}

export default Button
