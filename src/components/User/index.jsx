import { Photo, Name, IDAndDate, Content } from '../Tweet/styles';
import * as S from './styles';
const User = ({ desc, name, photo }) => {
    return (
        <S.Container>
            <S.LeftContent>
                <Photo src={photo} />
            </S.LeftContent>
            <S.RightContent>
                <S.UserWrapper>
                    <S.UserInfo>
                        <Name>{name}</Name>
                        <IDAndDate>@{name}</IDAndDate>
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
