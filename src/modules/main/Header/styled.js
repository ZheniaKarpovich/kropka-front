import styled from 'styled-components';

export const Logo = styled.img`
  width: 104px;
  height: 36px;
  margin-left: 100px;

  @media screen and (max-width: 1054px) {
    margin-left: 75px;
  }

  @media screen and (max-width: 400px) {
    margin-left: 25px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 60px;
`;