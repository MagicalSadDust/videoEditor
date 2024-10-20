import styled, { css} from 'styled-components';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';

export const GradientButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52%;
  height: 109px;
  padding: 10px 24px;
  font-size: 40px;
  font-weight: 400;
  color: white;
  border: none;
  border-radius: 55px;

  ${(props) => props.isButtonEnabled ? css`
    background: linear-gradient(90deg, #8e2de2, #6625e9, #69ddff);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05); 
    }

    &:focus {
      outline: none;
    }
    ` : css`
    
    `}

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const Arrow = styled.span`
  margin-left: 8px;
  display: inline-block;
  transform: translateX(0);
  transition: transform 0.2s ease-in-out;

  ${GradientButton}:hover & {
    transform: translateX(4px);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  background-color: ${(props) => props.isError ? '#ffe5e5' : '#f6f6f6' };
  border: ${(props) => props.isError && '2px solid #efb7b7'};
  padding: 24px 16px 24px 36px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 39px 0px 90px 0px;
  width: 80%;
  height: 130px;

  textarea {
    padding: 15px 70px 0px 0px;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  background: none;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 0.7rem;
  color: #4d4d4d;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  &::placeholder {
    font-size: 0.7rem;
  }
`;

export const ClearButton = styled.button`
  background: none;
  position: absolute;
  border: none;
  font-family: emoji;
  cursor: pointer;
  font-size: 64px;
  color: #888;
  padding: 0 23px;
  right: 13px;
  top: 16px;

  &:hover {
    color: #555;
  }
`;

export const ControlPanelContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 300px;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const IconPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;

  svg {
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 64px;
  justify-content: space-between;
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 60px 0px 20px 0px;

  @media (max-width: 450px) {
    margin: 60px 0px 40px 0px;
  }
`;

export const RangeSlider = styled(Slider)(() => ({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#6b6be9',
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#9b9b9b',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#6d6eff',
    border: 'none',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
    '&[data-index="0"]': {
      zIndex: 100
    },
    '&[data-index="1"]': {
      zIndex: 1
    }
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 42,
    height: 20,
    top: 'auto',
    bottom: '-55px',
    color: '#7874dc',
    borderRadius: '8px',
    backgroundColor: '#e7ecf5',
    '&:before': { display: 'none' }
  },
  '& .MuiSlider-markLabel': {
    fontSize: '0.5rem',
    top: '23px'
  },
  '& .MuiSlider-mark': {
    display: 'none'
  },
  '& .MuiSlider-markLabel[data-index="0"]': {
    marginLeft: '20px',
  },
  '& .MuiSlider-markLabel[data-index="1"]': {
    paddingRight: '20px'
  },
}));

export const ButtonsPanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  width: 290px;
  height: 85px;
  border-radius: 45px;
  border: 3px solid #6c6efe;
  color: ${(props) => props.isPrimary ? '#ffffff' : '#6c6efe'};
  background: ${(props) => props.isPrimary ? '#6c6efe' : 'transparent'};
  font-size: 1rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
  
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 450px) {
    width: 170px;
    height: 60px;
    font-size: 0.6rem;
  }

  @media (max-width: 393px) {
    width: 160px;
    height: 60px;
    font-size: 0.6rem;
  }

  @media (max-width: 360px) {
    width: 145px;
    height: 60px;
    font-size: 0.6rem;
  }
`;

export const RoundedDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '40px',
    padding: '10px'
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  '@media (max-width: 393px)': {
    '& .MuiDialogTitle-root': {
      fontSize: '0.5rem',
    },
    '& .MuiDialogContentText-root': {
      fontSize: '0.5rem',
    }
  }
}));

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(228, 231, 25, 0.5);
  box-shadow: 10px 10px 30px 30px rgba(228, 231, 25, 0.5);
  z-index: 1000;
`;