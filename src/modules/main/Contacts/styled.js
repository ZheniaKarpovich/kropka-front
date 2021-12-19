import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  font-size: 60px;
  line-height: 66px;
  color: #2B2B2B;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 400px) {
    font-size: 40px;
    line-height: 46px;
  }
`;

export const SubTitle = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  color: #525252;
  font-weight: 400;
  align-self: start;
  margin-top: 30px;

  @media screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  font-size: 32px;
  line-height: 38.5px;
  color: #2B2B2B;
  font-weight: 400;
  align-self: start;

  @media screen and (max-width: 400px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const Wrapper = styled.div`
  min-width: 200px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  align-self: start;

  div:last-child {
    margin-right: 0px;
  }
`;

export const Link = styled.a`
  width: 52px;
  height: 52px;
  margin-right: 30px;
  background-image: url(${props => props.imgUrl});
  border-radius: 10px;
  background-color: ${props => props.color};
  background-position: center;
  background-repeat: no-repeat;
`;