import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container, InputContainer, TextArea, ClearButton } from './styled';
import { YOUTUBE_LINK_KEY, YOUTUBE_REGEX } from 'Constants';
import content from 'Content';

const InputWithClose = ({ onIsButtonEnabled }) => {
  const [link, setLink] = useState('');
  const [isError, setIsError] = useState(false);

  const isValidYoutubeLink = useCallback((url) => {
    return YOUTUBE_REGEX.test(url);
  }, []);

  const updateLinkState = useCallback((newLink) => {
    setLink(newLink);
    const trimmedLink = newLink.trim();
    const isValid = trimmedLink !== '' && isValidYoutubeLink(trimmedLink);
    
    setIsError(!isValid && trimmedLink !== '');
    onIsButtonEnabled(isValid);

    if (isValid) {
      localStorage.setItem(YOUTUBE_LINK_KEY, newLink);
    }
  }, [isValidYoutubeLink, onIsButtonEnabled]);

  useEffect(() => {
    const savedLink = localStorage.getItem(YOUTUBE_LINK_KEY);
    if (savedLink) {
      updateLinkState(savedLink);
    }
  }, [updateLinkState]);

  const handleInputChange = useCallback((e) => {
    updateLinkState(e.target.value);
  }, [updateLinkState]);

  const clearInput = useCallback(() => {
    updateLinkState('');
    localStorage.removeItem(YOUTUBE_LINK_KEY);
  }, [updateLinkState]);

  const inputProps = useMemo(() => ({
    type: "text",
    placeholder: content.inputWithClose.placeholder,
    value: link,
    onChange: handleInputChange
  }), [link, handleInputChange]);

  return (
    <Container>
      <InputContainer isError={isError}>
        <TextArea {...inputProps} />
        <ClearButton onClick={clearInput}>&times;</ClearButton>
      </InputContainer>
    </Container>
  );
};

InputWithClose.propTypes = {
  onIsButtonEnabled: PropTypes.func.isRequired
};

export default React.memo(InputWithClose);
