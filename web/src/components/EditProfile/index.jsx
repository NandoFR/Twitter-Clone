import Modal from '../Modal';
import * as S from './styles';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ImageUpload from '../ImageUpload';
import { useState } from 'react';
import { TextField } from '@mui/material';

const EditProfile = ({ toggleModal, setToggleModal }) => {
    const [banner, setBanner] = useState();
    const [picture, setPicture] = useState();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        console.log('Banner:', banner, 'Picture:', picture);
    };
    return (
        <Modal
            headerName="Edit Profile"
            isActive={toggleModal}
            toggleModal={setToggleModal}
            buttonText="Save"
            buttonCallback={handleSubmit}
        >
            <S.Form>
                <S.PhotoWrapper width="100%" height="200px">
                    {banner ? (
                        <S.Banner src={banner} />
                    ) : (
                        <S.Banner src="/images/placeholder.png" />
                    )}
                    <S.BannerButtonWrapper>
                        <S.ButtonOption htmlFor="banner_upload">
                            <ImageUpload
                                setImage={setBanner}
                                reference="banner_upload"
                            />
                            <PhotoCameraOutlinedIcon />
                        </S.ButtonOption>
                        {banner ? (
                            <S.ButtonOption
                                onClick={() => {
                                    setBanner(null);
                                }}
                            >
                                <CloseIcon />
                            </S.ButtonOption>
                        ) : (
                            ''
                        )}
                    </S.BannerButtonWrapper>
                </S.PhotoWrapper>
                <S.PhotoWrapper width="150px" height="150px">
                    <S.PictureButtonWrapper>
                        <S.ButtonOption htmlFor="picture_upload">
                            <ImageUpload
                                setImage={setPicture}
                                reference="picture_upload"
                            />
                            <PhotoCameraOutlinedIcon />
                        </S.ButtonOption>
                    </S.PictureButtonWrapper>
                    {picture ? (
                        <S.Picture src={picture} />
                    ) : (
                        <S.Picture src="/images/placeholder.png" />
                    )}
                </S.PhotoWrapper>
                <S.InputWrapper>
                    <TextField
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => {
                            setBio(e.target.value);
                        }}
                        value={bio}
                        label="Bio"
                        variant="outlined"
                    />
                </S.InputWrapper>
            </S.Form>
        </Modal>
    );
};
export default EditProfile;
