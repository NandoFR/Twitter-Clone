import * as S from './styles';
const Header = ({ title }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
        </S.Container>
    );
};
export default Header;
