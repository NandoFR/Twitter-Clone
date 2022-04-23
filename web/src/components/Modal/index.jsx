import * as S from './styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Modal = ({
    isActive = false,
    toggleModal,
    headerName,
    children,
    buttonText,
    buttonCallback = () => {},
}) => {
    return (
        <S.Container isActive={isActive}>
            <S.Blackscreen onClick={() => toggleModal(false)} />
            <S.Modal>
                <S.Header>
                    <S.Wrapper>
                        <S.Close
                            className="close"
                            onClick={() => toggleModal(false)}
                        >
                            <ArrowBackIcon />
                        </S.Close>
                        <S.Title>{headerName}</S.Title>
                    </S.Wrapper>
                    {buttonText ? (
                        <S.Button onClick={buttonCallback}>
                            {buttonText}
                        </S.Button>
                    ) : (
                        ''
                    )}
                </S.Header>
                <S.Body>{children}</S.Body>
            </S.Modal>
        </S.Container>
    );
};
export default Modal;
