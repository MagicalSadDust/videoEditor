import styled from 'styled-components';
import { MainComponent } from '../styled';

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

export const Icon = styled.img.attrs({src: 'Public/question.png'})`
    width: 20px;
  `;