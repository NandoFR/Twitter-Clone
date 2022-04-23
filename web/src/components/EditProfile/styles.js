import styled from 'styled-components';

export const Form = styled.form``;
export const PhotoWrapper = styled.div`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const BannerButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 10px;
    z-index: 20;
`;
export const PictureButtonWrapper = styled.div`
    position: absolute;
    right: 25%;
    top: -3%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 10px;
    z-index: 20;
`;
export const ButtonOption = styled.label`
    border-radius: 50%;
    padding: 12px 14px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    :hover {
        background-color: var(--primary);
    }
`;
export const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 6px solid var(--bg);
    position: relative;
    top: -60px;
    margin-left: 10px;
`;
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
