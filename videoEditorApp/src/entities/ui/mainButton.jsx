import PropTypes from 'prop-types';
import { GradientButton, Arrow } from './styled';

const MainButton = (props) => {
  const { title, withArrow, isButtonEnabled, onButtonClick } = props;

  return (
  <GradientButton isButtonEnabled={isButtonEnabled} onClick={onButtonClick}>
    {title}
    {withArrow && <Arrow>→</Arrow>}
  </GradientButton>
  );
};

MainButton.propTypes = {
  title: PropTypes.string,
  withArrow: PropTypes.bool,
  isButtonEnabled: PropTypes.bool,
  onButtonClick: PropTypes.func
};

export default MainButton;