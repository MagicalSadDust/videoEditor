import styled from 'styled-components';

export const EditorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(100% - 285px);
  aspect-ratio: 9 / 16;
  overflow: hidden;

  @media (max-width: 360px) {
    .react-player {
      height: 95% !important;
    }
  }
`;



