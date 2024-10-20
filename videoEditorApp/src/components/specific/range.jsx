import { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Box from '@mui/material/Box';
import { formatTime } from '../../features/expression';
import { RangeContainer, RangeSlider } from './styled';

const Range = (props) => {
  const {
    start,
    end,
    duration,
    onSeekChange,
    onRangeChange
  } = props;

  const [value, setValue] = useState([0, 100]);
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
