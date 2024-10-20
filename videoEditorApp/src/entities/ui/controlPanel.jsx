import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { VolumeUp, VolumeOff, AllInclusive, PlayArrow, Pause, MovieFilterOutlined } from '@mui/icons-material';
import Range from 'UI/range';
import { ICON_STYLES, ROUTES } from 'Constants';
import { ControlPanelContainer, IconPanel, IconWrapper, ButtonsPanel, Button } from './styled';

const ControlPanel = ({
  muted,
  loop,
  playing,
  progress,
  duration,
  start,
  end,
  onCut,
  onMute,
  onLoop,
  onPlayPause,
  onSeekChange,
  onButtonClick,
}) => {
  const iconProps = useMemo(() => ({
    mute: {
      Icon: muted ? VolumeOff : VolumeUp,
      style: muted ? ICON_STYLES.light : ICON_STYLES.dark,
      onClick: onMute,
    },
    loop: {
      Icon: AllInclusive,
      style: loop ? ICON_STYLES.dark : ICON_STYLES.light,
      onClick: onLoop,
    },
    playPause: {
      Icon: playing ? Pause : PlayArrow,
      style: ICON_STYLES.pause,
      onClick: onPlayPause,
    },
    cut: {
      Icon: MovieFilterOutlined,
      style: ICON_STYLES.light,
      onClick: () => onCut(start, Math.min(start + 15 / duration, 1)),
    },
  }), [muted, onMute, loop, onLoop, playing, onPlayPause, onCut, start, duration]);

  const handleChangeVideo = () => onButtonClick(ROUTES.HOME);

  return (
    <ControlPanelContainer>
      <IconPanel>
        <IconWrapper>
          <IconComponent {...iconProps.mute} />
          <IconComponent {...iconProps.loop} />
        </IconWrapper>
        <IconComponent {...iconProps.playPause} />
        <IconComponent {...iconProps.cut} />
      </IconPanel>
      <Range
        progress={progress}
        duration={duration}
        onSeekChange={onSeekChange}
        start={start}
        end={end}
        onRangeChange={onCut}
      />
      <ButtonsPanel>
        <Button onClick={handleChangeVideo}>Change video</Button>
        <Button isPrimary>Continue</Button>
      </ButtonsPanel>
    </ControlPanelContainer>
  );
};

const IconComponent = memo(({ Icon, style, onClick }) => (
  <Icon onClick={onClick} sx={style} />
));

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

ControlPanel.propTypes = {
  progress: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  loop: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  onMute: PropTypes.func.isRequired,
  onLoop: PropTypes.func.isRequired,
  onCut: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onSeekChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default memo(ControlPanel);