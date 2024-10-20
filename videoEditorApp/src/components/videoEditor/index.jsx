import { memo, useCallback,useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import ControlPanel from 'Components/specific/controlPanel';
import { YOUTUBE_LINK_KEY } from 'Constants';
import { EditorContainer, VideoContainer } from './styled';

const VideoEditor = ({ onButtonClick }) => {
  const playerRef = useRef(null);
  const [videoState, setVideoState] = useState({
    link: '',
    loop: false,
    muted: false,
    playing: false,
    progress: {},
    duration: 0,
    start: 0,
    end: 1,
  });

  useEffect(() => {
    const savedLink = localStorage.getItem(YOUTUBE_LINK_KEY);
    if (savedLink) {
      setVideoState(prevState => ({ ...prevState, link: savedLink }));
    }
  }, []);

  const handleStateChange = useCallback((key, value) => {
    setVideoState(prevState => ({ ...prevState, [key]: value }));
  }, []);

  const handleToggle = useCallback((key) => {
    setVideoState(prevState => ({ ...prevState, [key]: !prevState[key] }));
  }, []);

  const handleProgress = useCallback((state) => {
    if (!state.seeking) {
      setVideoState(prevState => {
        if (state.played >= prevState.end) {
          playerRef.current?.seekTo(prevState.start, 'fraction');
          return { ...prevState, progress: state, playing: false };
        }
        return { ...prevState, progress: state };
      });
    }
  }, []);

  const handleSeekChange = useCallback((time) => {
    playerRef.current?.seekTo(time, 'fraction');
  }, []);

  const handleCut = useCallback((start, end) => {
    setVideoState(prevState => ({ ...prevState, start, end }));
    playerRef.current?.seekTo(start, 'fraction');
  }, []);

  const playerConfig = useMemo(() => ({
    youtube: {
      playerVars: { 
        showinfo: 0,
        start: Math.floor(videoState.start * videoState.duration),
        end: Math.floor(videoState.end * videoState.duration)
      }
    }
  }), [videoState.start, videoState.end, videoState.duration]);

  return (
    <EditorContainer>
      <VideoContainer>
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          width="100%"
          height="80%"
          url={videoState.link}
          playing={videoState.playing}
          loop={videoState.loop}
          muted={videoState.muted}
          controls={false}
          config={playerConfig}
          onProgress={handleProgress}
          onDuration={(duration) => handleStateChange('duration', duration)}
        />
      </VideoContainer>
      <ControlPanel
        {...videoState}
        onMute={() => handleToggle('muted')}
        onLoop={() => handleToggle('loop')}
        onPlayPause={() => handleToggle('playing')}
        onSeekChange={handleSeekChange}
        onCut={handleCut}
        onButtonClick={onButtonClick}
      />
    </EditorContainer>
  );
};

VideoEditor.propTypes = {
  onButtonClick: PropTypes.func.isRequired
};

export default memo(VideoEditor);
