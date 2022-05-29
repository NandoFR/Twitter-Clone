import PostTweet from '.';
import Modal from '../Modal';

const PostTweetModal = ({ toggleModal, setToggleModal }) => {
    return (
        <Modal
            isActive={toggleModal}
            headerName="New Tweet"
            toggleModal={setToggleModal}
        >
            <PostTweet imageUploadID="image_upload_modal" />
        </Modal>
    );
};
export default PostTweetModal;
