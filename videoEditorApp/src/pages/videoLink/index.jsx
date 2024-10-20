import { useState } from 'react';
import PropTypes from 'prop-types';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputWithClose from 'UI/inputWithClose';
import Button from 'UI/button';
import { ROUTES, ICON_STYLES } from 'Constants';
import { Component, Title, Sub } from './styled';

const VideoLink = (props) => {
  const { onButtonClick } = props;

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleButtonClick = () => {
    if(!isButtonEnabled) return;
    onButtonClick(ROUTES.EDITOR);
  };

  return (
    <Component>
      <Title>Add video link <Sub><HelpOutlineIcon style={ICON_STYLES.help}/></Sub></Title>
      <InputWithClose onIsButtonEnabled={setIsButtonEnabled} />
      <Button title={'Proceed'} withArrow isButtonEnabled={isButtonEnabled} onButtonClick={handleButtonClick} />
    </Component>
  );
};

VideoLink.propTypes = {
  onButtonClick: PropTypes.func
};

export default VideoLink;