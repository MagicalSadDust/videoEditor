export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
    
  const parts = [];
  if (hours > 0) {
    parts.push(hours.toString().padStart(2, '0'));
  }
  parts.push(minutes.toString().padStart(2, '0'));
  parts.push(remainingSeconds.toString().padStart(2, '0'));
    
  return parts.join(':');
};

export const playedToSliderValue = (played) => {
  return typeof played === 'number' ? played * 100 : 0;
};

export const sliderValueToPlayed = (value) => {
  return value / 100;
};