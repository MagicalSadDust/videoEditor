import { forwardRef, memo, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { VolumeUp, VolumeOff, AllInclusive, PlayArrow, Pause, MovieFilterOutlined } from '@mui/icons-material';
import Range from 'Components/specific/range';
import Overlay from 'Components/specific/overlay';
import DialogComponent from 'Components/specific/dialog';
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
  const [openDialog, setOpenDialog] = useState(false);
  const cutIconRef = useRef(null);

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

  const handleChangeVideo = () => onButtonClick(ROUTES.home);

  const handleContinue = () => {
    const selectedDuration = (end - start) * duration;
    if (selectedDuration > 15) {
      setOpenDialog(true);
    } else {
      // There should be logic here to continue if duration <= 15 seconds, but there were no instructions =)
      console.log('Continuing with selected range');
    }
  };

  return (
    <ControlPanelContainer>
      <IconPanel>
        <IconWrapper>
          <IconComponent {...iconProps.mute} />
          <IconComponent {...iconProps.loop} />
        </IconWrapper>
        <IconComponent {...iconProps.playPause} />
        <IconComponent {...iconProps.cut} ref={cutIconRef}/>
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
        <Button isPrimary onClick={handleContinue}>Continue</Button>
      </ButtonsPanel>
      <DialogComponent openDialog={openDialog} onOpenDialog={setOpenDialog}/>
      {openDialog && <Overlay targetRef={cutIconRef} />}
    </ControlPanelContainer>
  );
};

const IconComponent = forwardRef(({ Icon, style, onClick }, ref) => (
  <Icon ref={ref} onClick={onClick} sx={style} />
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