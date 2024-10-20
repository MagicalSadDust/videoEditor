import { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Box from '@mui/material/Box';
import { formatTime, playedToSliderValue } from '../expressions/converters';
import { RangeContainer, RangeSlider } from './styled';

const Range = (props) => {
  const {
    start,
    end,
    progress,
    duration,
    onSeekChange,
    onRangeChange
  } = props;
  const [value, setValue] = useState([0, 100]);

  useEffect(() => {
    if (progress && typeof progress.played === 'number') {
      const playedValue = playedToSliderValue(progress.played);
      setValue(prevValue => [
        playedValue,
        Math.max(playedValue, prevValue[1], end * 100)
      ]);
    }
  }, [progress, end]);

  useEffect(() => {
    setValue([start * 100, end * 100]);
  }, [start, end]);

  const handleChange = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    const minDistance = 1;
    let updatedValue;
    if (activeThumb === 0) {
      updatedValue = [Math.min(newValue[0], value[1] - minDistance), value[1]];
    } else {
      updatedValue = [value[0], Math.max(newValue[1], value[0] + minDistance)];
    }
    setValue(updatedValue);
    onRangeChange(updatedValue[0] / 100, updatedValue[1] / 100);
    if (activeThumb === 0) {
      onSeekChange(updatedValue[0] / 100);
    }
  };

  const marks = [
    { value: 0, label: '00:00' },
    { value: 100, label: formatTime(duration) },
  ]; 

  const formatLabel = (value) => {
    const seconds = (value / 100) * duration;
    return formatTime(seconds);
  };

  return (
    <RangeContainer>
      <Box sx={{ width: '100%' }}>
        <RangeSlider
          value={value}
          marks={marks}
          step={0.1}
          valueLabelDisplay="on"
          disableSwap
          valueLabelFormat={formatLabel}
          onChange={handleChange}
          getAriaLabel={() => 'Video range'}
        />
      </Box> 
    </RangeContainer>
  );
}

Range.propTypes = {
  start: PropType.number,
  end: PropType.number,
  progress: PropType.object,
  duration: PropType.number,
  onRangeChange: PropType.func,
  onSeekChange: PropType.func
};

export default Range;
