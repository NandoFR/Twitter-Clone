import * as S from './styles';

export const handleAlert = (message, set) => {
    set(message);

    setTimeout(() => {
        set('');
    }, 3000);
};
const Alert = ({ message }) => {
    return (
        <S.Box isActive={message}>
            <S.Title>{message}</S.Title>
        </S.Box>
    );
};
export default Alert;
