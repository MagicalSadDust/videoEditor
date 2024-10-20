import { useState } from 'react';
import PropTypes from 'prop-types';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputWithClose from 'Components/specific/inputWithClose';
import DecorButton from 'Components/specific/decorButton';
import { ROUTES, ICON_STYLES } from 'Constants';
import content from 'Content';
import { Component, Title, Sub } from './styled';

const VideoLink = (props) => {
  const { onButtonClick } = props;

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleButtonClick = () => {
    if(!isButtonEnabled) return;
    onButtonClick(ROUTES.editor);
  };

  return (
    <Component>
      <Title>{content.videoLink.title}<Sub><HelpOutlineIcon style={ICON_STYLES.help}/></Sub></Title>
      <InputWithClose onIsButtonEnabled={setIsButtonEnabled} />
      <DecorButton withArrow isButtonEnabled={isButtonEnabled} onButtonClick={handleButtonClick} />
    </Component>
  );
};

VideoLink.propTypes = {
  onButtonClick: PropTypes.func
};

export default VideoLink;