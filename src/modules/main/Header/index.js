import * as S from './styled';
import logo from '../../../assets/logo.png';

const Main = () => {
    return (
        <S.Wrapper>
            <S.Logo src={logo} alt={"logo"}/>
        </S.Wrapper>
    );
}

export default Main;
