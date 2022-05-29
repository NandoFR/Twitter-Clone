import * as S from './styles';
import SearchIcon from '@mui/icons-material/Search';
const Search = ({
    value,
    submit,
    change,
    placeholder = 'Search for Users',
}) => {
    return (
        <S.Box onSubmit={submit}>
            <S.Input
                placeholder={placeholder}
                value={value}
                onChange={(e) => change(e.target.value)}
            />
            <S.Icon>
                <SearchIcon />
            </S.Icon>
        </S.Box>
    );
};
export default Search;
