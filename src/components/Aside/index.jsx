import * as S from './styles';
import User from '../User';
import { Link } from 'react-router-dom';
const Aside = () => {
    return (
        <S.Box>
            <S.Title>What to Follow</S.Title>
            <S.UserContainer>
                <User />
                <User />
                <User />
            </S.UserContainer>
            <S.ShowMore>
                <Link to="/explore">Show more</Link>
            </S.ShowMore>
        </S.Box>
    );
};
export default Aside;
