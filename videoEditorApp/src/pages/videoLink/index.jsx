import { useState } from 'react';
import PropTypes from 'prop-types';
import InputWithClose from 'UI/inputWithClose';
import Button from 'UI/button';
import { ROUTES } from 'Constants';
import { Component, Title, Sub, Icon } from './styled';

const VideoLink = (props) => {
  const { onButtonClick } = props;

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleButtonClick = () => {
    onButtonClick(ROUTES.EDITOR);
  };

  return (
    <Component>
      <Title>Add video link <Sub><Icon /></Sub></Title>
      <InputWithClose onIsButtonEnabled={setIsButtonEnabled} />
      <Button title={'Proceed'} withArrow isButtonEnabled={isButtonEnabled} onButtonClick={handleButtonClick} />
    </Component>
  );
};

VideoLink.propTypes = {
  onButtonClick: PropTypes.func
};

export default VideoLink;