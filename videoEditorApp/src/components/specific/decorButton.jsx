import PropTypes from 'prop-types';
import { GradientButton, Arrow } from './styled';
import content from 'Content';

const DecorButton = (props) => {
  const { withArrow, isButtonEnabled, onButtonClick } = props;

  return (
  <GradientButton isButtonEnabled={isButtonEnabled} onClick={onButtonClick}>
    {content.videoLink.buttonText}
    {withArrow && <Arrow>→</Arrow>}
  </GradientButton>
  );
};

DecorButton.propTypes = {
  withArrow: PropTypes.bool,
  isButtonEnabled: PropTypes.bool,
  onButtonClick: PropTypes.func
};

export default DecorButton;