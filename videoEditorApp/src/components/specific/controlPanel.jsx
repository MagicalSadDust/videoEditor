import { forwardRef, memo, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import Range from 'Components/specific/range';
import Overlay from 'Components/specific/overlay';
import DialogComponent from 'Components/specific/dialog';
import { ICON_STYLES, ROUTES } from 'Constants';
import content from 'Content';
import { ControlPanelContainer, IconPanel, IconsWrapper, IconCutWrapper, LimitIcon, ButtonsPanel, Button } from './styled';

const IconComponent = forwardRef(({ Icon, style, withInfo, onClick }, ref) => (
  withInfo ? (
    <IconCutWrapper ref={ref} onClick={onClick}>
      <Icon sx={style} />
      <LimitIcon />
    </IconCutWrapper>
  ) : (
    <Icon ref={ref} onClick={onClick} sx={style} />
  )
));

IconComponent.displayName = 'IconComponent';

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
      Icon: muted ? VolumeOffIcon : VolumeUpIcon,
      style: muted ? ICON_STYLES.light : ICON_STYLES.dark,
      onClick: onMute,
    },
    loop: {
      Icon: AllInclusiveIcon,
      style: loop ? ICON_STYLES.dark : ICON_STYLES.light,
      onClick: onLoop,
    },
    playPause: {
      Icon: playing ? PauseIcon : PlayArrowIcon,
      style: ICON_STYLES.pause,
      onClick: onPlayPause,
    },
    cut: {
      Icon: MovieFilterOutlinedIcon,
      style: ICON_STYLES.light,
      withInfo: true,
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
        <IconsWrapper>
          <IconComponent {...iconProps.mute} />
          <IconComponent {...iconProps.loop} />
        </IconsWrapper>
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
        <Button onClick={handleChangeVideo}>{content.controlPanel.changeButtonText}</Button>
        <Button isPrimary onClick={handleContinue}>{content.controlPanel.continueButtonText}</Button>
      </ButtonsPanel>
      <DialogComponent open={openDialog} onOpen={setOpenDialog}/>
      {openDialog && <Overlay targetRef={cutIconRef} />}
    </ControlPanelContainer>
  );
};

IconComponent.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  style: PropTypes.object.isRequired,
  withInfo: PropTypes.bool,
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