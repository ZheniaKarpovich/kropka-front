import Form from './Form';
import Header from './Header';
import Contacts from './Contacts';
import * as S from './styled';

const Main = () => {
    return (
        <S.Wrapper>
            <Header/>
            <S.ContentWrapper>
                <Form />
                <Contacts/>
            </S.ContentWrapper>
        </S.Wrapper>
    );
}

export default Main;
