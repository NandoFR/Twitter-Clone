import * as S from './styles';
import { Photo } from '../Tweet/styles';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import TextArea from './TextArea';
import ImageUpload from '../ImageUpload';
import ImageGrid from './ImageGrid';
const PostTweet = ({ imageUploadID = 'image_upload' }) => {
    const [textAreaProgress, setTextAreaProgress] = useState(0);
    const [image, setImage] = useState();
    const [images, setImages] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');
    useEffect(() => {
        if (image) {
            setImages([...images, image]);
        }
    }, [image]);

    const theme = useTheme();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <S.Container onSubmit={handleSubmit}>
            <S.LeftContent>
                <Photo src="/images/twitter_image.webp" />
            </S.LeftContent>
            <S.RightContent>
                <TextArea
                    value={textAreaValue}
                    change={(e) => {
                        setTextAreaValue(e.target.value);
                    }}
                    setProgress={setTextAreaProgress}
                />
                {images[0] ? (
                    <ImageGrid setImages={setImages} images={images} />
                ) : (
                    ''
                )}
                <S.BottomContent>
                    <S.Options>
                        <S.Icon htmlFor={imageUploadID}>
                            <InsertPhotoOutlinedIcon />
                        </S.Icon>
                        <ImageUpload
                            setImage={setImage}
                            reference={imageUploadID}
                        />
                        <CircularProgress
                            variant="determinate"
                            value={textAreaProgress}
                            sx={{
                                color: theme.color.primary,
                                width: '20px !important',
                            }}
                        />
                    </S.Options>
                    <S.Button>Tweet</S.Button>
                </S.BottomContent>
            </S.RightContent>
        </S.Container>
    );
};
export default PostTweet;
