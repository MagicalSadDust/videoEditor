import styled from 'styled-components';
import { MainComponent } from '../../pages/styled';

export const Component = styled(MainComponent)`
    display: flex;
    position: relative;
    justify-content: center;
    height: auto;
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
    text-align: center;
    top: 45px;
    font-size: 0.5rem;
    background: linear-gradient(34deg, #8a2ce2 0%, #6760f0 74%, #69d3fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;