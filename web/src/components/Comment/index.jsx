import Modal from '../Modal';
import { Photo } from '../Tweet/styles';
import TextArea from '../PostTweet/TextArea';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import {
    Container,
    LeftContent,
    RightContent,
    BottomContent,
    Options,
    Button,
} from '../PostTweet/styles';
import { useTheme } from 'styled-components';
const Comment = ({ isActive, toggleModal }) => {
    const [textAreaProgress, setTextAreaProgress] = useState(0);
    const theme = useTheme();
    const [textAreaValue, setTextAreaValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('TextArea: ', textAreaValue);
    };
    return (
        <Modal
            isActive={isActive}
            toggleModal={toggleModal}
            headerName="Comment"
        >
            <Container onSubmit={handleSubmit}>
                <LeftContent>
                    <Photo src="/images/twitter_image.webp" />
                </LeftContent>
                <RightContent>
                    <TextArea
                        value={textAreaValue}
                        change={(e) => setTextAreaValue(e.target.value)}
                        setProgress={setTextAreaProgress}
                    />

                    <BottomContent>
                        <Options>
                            <CircularProgress
                                variant="determinate"
                                value={textAreaProgress}
                                sx={{
                                    color: theme.color.primary,
                                    width: '20px !important',
                                }}
                            />
                        </Options>
                        <Button>Comment</Button>
                    </BottomContent>
                </RightContent>
            </Container>
        </Modal>
    );
};
export default Comment;
