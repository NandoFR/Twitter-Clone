import Header from '../../components/Header';
import * as S from './styles';
import {
    Photo,
    Name,
    IDAndDate,
    ImageGrid,
    Image,
} from '../../components/Tweet/styles';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useState } from 'react';
import Comment from '../../components/Comment';
import TweetCard from '../../components/Tweet';
import { Content } from '../Profile/styles';
import DeleteModal from '../../components/DeleteModal';
import Alert, { handleAlert } from '../../components/Alert';
const Tweet = () => {
    const [LikeIcon, setLikeIcon] = useState(false);
    const [CommentIcon, setCommentIcon] = useState(false);
    const [commentModal, setCommentModal] = useState(false);
    const [commentCount, setCommentCount] = useState(11);
    const [likeCount, setLikeCount] = useState(24);
    const [deleteModal, setDeleteModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleLike = () => {
        setLikeIcon(!LikeIcon);
        setLikeCount(LikeIcon === false ? likeCount + 1 : likeCount - 1);
        if (LikeIcon === false) {
            handleAlert('You Liked this Tweet', setAlertMessage);
        }
    };
    const handleComment = () => {
        setCommentModal(true);
        setCommentIcon(!CommentIcon);
        setCommentCount(
            CommentIcon === false ? commentCount + 1 : commentCount - 1
        );
    };
    return (
        <>
            <Alert message={alertMessage} />
            <DeleteModal isActive={deleteModal} toggleModal={setDeleteModal} />
            <Comment isActive={commentModal} toggleModal={setCommentModal} />
            <Header title="Tweet" />
            <S.Container>
                <S.Header>
                    <S.UserInfo>
                        <Photo src="/images/twitter_image.webp" />
                        <S.UserNameWrapper>
                            <Name>Twitter</Name>
                            <IDAndDate>@Twitter</IDAndDate>
                        </S.UserNameWrapper>
                    </S.UserInfo>
                    <S.Delete onClick={() => setDeleteModal(true)}>X</S.Delete>
                </S.Header>
                <S.Content>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Est in recusandae, nihil a minima modi animi obcaecati
                    distinctio consectetur inventore!
                </S.Content>
                <ImageGrid>
                    <Image src="/images/placeholder.png" />
                    <Image src="/images/placeholder.png" />
                </ImageGrid>

                <S.Footer>
                    <S.Status>
                        <S.Number>{likeCount}</S.Number>
                        <S.Text>Likes</S.Text>
                    </S.Status>
                    <S.Status>
                        <S.Number>{commentCount}</S.Number>
                        <S.Text>Comments</S.Text>
                    </S.Status>
                </S.Footer>
                <S.Footer>
                    <S.Actions>
                        <S.Icon
                            color="#f91880"
                            onClick={handleLike}
                            isActive={LikeIcon}
                        >
                            <FavoriteIcon />
                        </S.Icon>
                        <S.Icon
                            color="#f91880"
                            onClick={handleLike}
                            isActive={!LikeIcon}
                        >
                            <FavoriteBorderIcon />
                        </S.Icon>
                        <S.Icon
                            onClick={handleComment}
                            color="#1da1f3"
                            isActive={CommentIcon}
                        >
                            <ModeCommentIcon />
                        </S.Icon>
                        <S.Icon
                            onClick={handleComment}
                            color="#1da1f3"
                            isActive={!CommentIcon}
                        >
                            <ModeCommentOutlinedIcon />
                        </S.Icon>
                    </S.Actions>
                </S.Footer>
                <Content>
                    <TweetCard />
                    <TweetCard />
                    <TweetCard />
                    <TweetCard />
                </Content>
            </S.Container>
        </>
    );
};
export default Tweet;
