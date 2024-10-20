import styled from 'styled-components';
import { MainComponent } from '../../pages/styled';

export const Component = styled(MainComponent)`
    margin-top: 40%;
    justify-content: flex-start;

    @media (max-width: 1280px) {
        margin-top: 25%;
    }

    @media (max-width: 450px) {
        margin-top: 40%;
    }
`;

export const Title = styled.h3`
    font-size: 1.2rem;
`;

export const Sub = styled.sup`
    cursor: pointer;
    font-size: 0.75em;
    vertical-align: super;
    :hover {
        opacity: .8;
    }
`;

export const HelperTooltip = styled.p`
    display: flex;
    position: absolute;
    width: auto;
    height: auto;
    top: 43px;
    font-size: 0.6rem;
    background: linear-gradient(34deg, #8a2ce2 0%, #6760f0 74%, #69d3fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;