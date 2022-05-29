import Modal from '../Modal';
import * as S from './styles';
const DeleteModal = ({ isActive, toggleModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <Modal
            isActive={isActive}
            toggleModal={toggleModal}
            headerName="Delete Tweet"
        >
            <S.Container onSubmit={handleSubmit}>
                <S.Title>Do you want delete this tweet?</S.Title>
                <S.ConfirmDelete>Delete</S.ConfirmDelete>
            </S.Container>
        </Modal>
    );
};
export default DeleteModal;
