import styled from 'styled-components';

import { Button as MuiButton, CircularProgress, TextField } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 680px;
  min-height: 584px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2C2C2C;
  border-radius: 10px;
  padding: 80px 100px;
  box-sizing: border-box;

  @media screen and (max-width: 400px) {
    padding: 40px 50px;
  }
`;

export const Header = styled.div`
  width: 100%;
  color: #DEDED6;
  font-size: 32px;
  font-weight: 700;
`;

export const Button = styled(MuiButton)`
    && {
      height: 64px;
      width: 100%;
      min-width: 100px;
      max-width: 480px;
      background-color: #DEDED6;
      font-size: 20px;
      font-weight: 400;
      color: #2B2B2B;
      margin-top: 40px;
      border-radius: 10px;

      &:disabled {
        color: rgba(222, 222, 214, 0.5);
      }
      
      &:hover {
        background-color: #DEDED6;
      };
        
      &:active {
        background-color: #DEDED6;
      };
    }
`;

export const Input = styled(TextField)`
  && {
    margin-top: 30px;

    & .MuiInputLabel-root {
      color: rgba(222, 222, 214, 0.5);
      font-size: 18px;
      font-weight: 400;
    }

    & .MuiInput-input {
      color: rgba(222, 222, 214, 0.5);
      font-size: 18px;
      font-weight: 400;
    }

    & label.Mui-focused {
      color: rgba(222, 222, 214, 1);
    }

    & .MuiInput-underline:after {
      border-bottom-color: rgba(222, 222, 214, 1);
    }

    & .MuiInput-underline:before {
      border-bottom-color: rgba(222, 222, 214, 1);
    }

    &:hover {
      & .MuiInput-underline:before {
        border-bottom-color: rgba(222, 222, 214, 1);
      }
    }

    & .MuiFormLabel-root.Mui-error {
      color: rgb(211, 47, 47) !important
    }
    
    & .MuiInput-underline.Mui-error:after {
      border-bottom-color: rgb(211, 47, 47) !important
    }
    
    & .MuiFormHelperText-root.Mui-error {
      color: rgb(211, 47, 47) !important
    }
  }
`;

export const Loader = styled(CircularProgress)`
  && {
    color: white;
    width: 50px;
    height: 50px;
  }
`;