import * as S from './styles';
import User from '../User';
import { Link } from 'react-router-dom';
import data from '../../data';
const Aside = () => {
    return (
        <S.Box>
            <S.Title>What to Follow</S.Title>
            <S.UserContainer>
                <User {...data.users[8]} />
                <User {...data.users[5]} />
                <User {...data.users[6]} />
            </S.UserContainer>
            <S.ShowMore>
                <Link to="/explore">Show more</Link>
            </S.ShowMore>
        </S.Box>
    );
};
export default Aside;
