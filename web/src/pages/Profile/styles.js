import styled from 'styled-components';

export const User = styled.div`
    position: relative;
    padding: 10px 20px;
`;
export const Banner = styled.img`
    display: block;
    width: 100%;
    max-height: 200px;
    object-fit: cover;
`;
export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
export const PhotoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const Photo = styled.img`
    width: 133px;
    border-radius: 50%;
    border: 6px solid var(--bg);
    margin-bottom: 10px;
`;
export const Button = styled.button`
    background-color: transparent;
    font-size: var(--text-small);
    color: var(--text);
    border: 1px solid var(--text-secondary);
    margin-top: 10px;
    :hover {
        background-color: transparent;
    }
`;
export const UserInfoWrapper = styled.div`
    position: relative;
    top: -60px;
    margin: 0 auto;
`;
export const UserInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
`;
export const UserNameWrapper = styled.div`
    width: 100%;
    text-align: start;
`;
export const UserName = styled.h4``;
export const UserID = styled.span`
    color: var(--text-secondary);
`;
export const UserDesc = styled.span``;
export const UserDateWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    svg {
        color: var(--text-secondary);
        width: 16px;
    }
`;
export const UserDate = styled.span`
    color: var(--text-secondary);
`;
export const UserFollowersWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`;
export const UserFollowers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
export const UserFollowersNumber = styled.span`
    color: var(--text);
    font-weight: bold;
`;
export const UserFollowersText = styled.span`
    color: var(--text-secondary);
    font-weight: 400;
`;
export const TabsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export const TabsButton = styled.button`
    background-color: transparent;
    border-radius: 0px;
    width: 50%;
    padding: 20px;
    font-size: var(--text-large);
    transition: 0ms;
    color: var(--text);
    border-bottom: ${({ isActive }) =>
        isActive ? '3px solid var(--primary)' : 'none'};
    :hover {
        background-color: var(--bg-secondary);
    }
`;
export const Tab = styled.div`
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding-top: 40px;
`;
