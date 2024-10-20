import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container, InputContainer, TextArea, ClearButton } from './styled';
import { YOUTUBE_LINK_KEY, YOUTUBE_REGEX } from 'Constants';

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
    placeholder: "https://youtu.be/...",
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

/* import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, InputContainer, TextArea, ClearButton } from './styled';

const InputWithClose = ({ onIsButtonEnabled }) => {
  const [link, setLink] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const savedLink = localStorage.getItem('youtubeLink');
    console.log('savedLink1');
    if (savedLink) {
      setLink(savedLink);
      onIsButtonEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (link && isValidYoutubeLink(link)) {
      localStorage.setItem('youtubeLink', link);
      setIsError(false);
    }
  }, [link]);

  const isValidYoutubeLink = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const handleInputChange = (e) => {
    const newLink = e.target.value;
    setLink(newLink);
    if (newLink.trim() === '') {
      setIsError(false);
      onIsButtonEnabled(false);
    } else if (!isValidYoutubeLink(newLink)) {
      setIsError(true);
      onIsButtonEnabled(false);
    } else {
      setIsError(false);
      onIsButtonEnabled(true);
    }
  };

  const clearInput = () => {
    setLink('');
    setIsError(false);
    onIsButtonEnabled(false);
    localStorage.removeItem('youtubeLink');
  };


  return (
    <Container>
      <InputContainer isError={isError}>
        <TextArea
          type="text"
          placeholder="https://youtu.be/..."
          value={link}        
          onChange={handleInputChange}
        />
        <ClearButton onClick={clearInput}>&times;</ClearButton>
      </InputContainer>
    </Container>

  );
};

InputWithClose.propTypes = {
  onIsButtonEnabled: PropTypes.func
};

export default InputWithClose; */