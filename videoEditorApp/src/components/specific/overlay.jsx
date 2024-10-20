import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { OverlayContainer } from './styled';

const Overlay = ({ targetRef }) => {
  const [clipPath, setClipPath] = useState('');

  useEffect(() => {
    if (targetRef.current) {
      const { top, left, width, height } = targetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const radius = Math.max(width, height) / 2 + 20;

      setClipPath(`circle(${radius}px at ${centerX}px ${centerY}px)`);
    }
  }, [targetRef]);

  return (
    <OverlayContainer style={{
      clipPath: clipPath,
      WebkitClipPath: clipPath,
    }} />
  );
};

Overlay.propTypes = {
  targetRef: PropTypes.object.isRequired,
};

export default Overlay;