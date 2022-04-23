import { Photo, Name, IDAndDate, Content } from '../Tweet/styles';
import * as S from './styles';
const User = ({ desc }) => {
    return (
        <S.Container>
            <S.LeftContent>
                <Photo src="/images/twitter_image.webp" />
            </S.LeftContent>
            <S.RightContent>
                <S.UserWrapper>
                    <S.UserInfo>
                        <Name>Twitter</Name>
                        <IDAndDate>@Twitter</IDAndDate>
                        <S.Desc>{desc}</S.Desc>
                    </S.UserInfo>
                    <S.Button>Follow</S.Button>
                </S.UserWrapper>
                <Content></Content>
            </S.RightContent>
        </S.Container>
    );
};
export default User;
