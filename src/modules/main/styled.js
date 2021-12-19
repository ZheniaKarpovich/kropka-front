import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 45px;

  @media screen and (max-width: 1054px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;