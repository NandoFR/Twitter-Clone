import * as S from './styles';
import CloseIcon from '@mui/icons-material/Close';
const ImageGrid = ({ images, setImages }) => {
    const removeImage = (value) => {
        setImages(
            images.filter((item) => {
                return item !== value;
            })
        );
    };

    return (
        <S.Grid>
            {images.map((value, index) => {
                return (
                    <S.ImageContainer key={index}>
                        <S.ImageDelete
                            onClick={() => {
                                removeImage(value);
                            }}
                            className="close"
                        >
                            <CloseIcon />
                        </S.ImageDelete>
                        <S.Image src={value} />
                    </S.ImageContainer>
                );
            })}
        </S.Grid>
    );
};
export default ImageGrid;
