import * as S from './styled';

const Form = () => {
    return (
        <S.Wrapper>
            <S.Title>Contact Us</S.Title>
            <S.SubTitle>E-mail</S.SubTitle>
            <S.Content>kropka.service@gmail.com</S.Content>
            <S.SubTitle>Phone</S.SubTitle>
            <S.Content>+48 516123134</S.Content>
            <S.LinksWrapper>
                <S.Link href={"/hui"} color="#3B5998" imgUrl="/Facebook.png"/>
                <S.Link href={"/hui"} color="#0077B5" imgUrl="/linkedIn.png"/>
                <S.Link href={"/hui"} color="#37AEE2" imgUrl="/telegram.png"/>
            </S.LinksWrapper>
        </S.Wrapper>
    );
}

export default Form;
