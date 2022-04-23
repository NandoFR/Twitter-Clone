import * as S from './styles';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EditProfile from '../../components/EditProfile';
import { useState } from 'react';
import Header from '../../components/Header';
import Tweet from '../../components/Tweet';
import { Link } from 'react-router-dom';
import FollowModal from '../../components/FollowModal';
const Profile = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [tabTweets, setTabTweets] = useState(true);
    const [tabLikes, setTabLikes] = useState(false);
    const [followModal, setFollowModal] = useState(false);
    const handleTabTweet = () => {
        setTabTweets(true);
        setTabLikes(false);
    };
    const handleTabLikes = () => {
        setTabTweets(false);
        setTabLikes(true);
    };

    return (
        <>
            <FollowModal isActive={followModal} toggleModal={setFollowModal} />
            <Header title="Profile" />
            <EditProfile
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
            />
            <S.Banner src="/images/twitter_image.webp" />
            <S.User>
                <S.Header>
                    <S.UserInfoWrapper>
                        <S.PhotoWrapper>
                            <S.Photo src="/images/twitter_image.webp" />
                            <S.Button onClick={() => setToggleModal(true)}>
                                Edit Profile
                            </S.Button>
                        </S.PhotoWrapper>
                        <S.UserInfo>
                            <S.UserNameWrapper>
                                <S.UserName>Twitter</S.UserName>
                                <S.UserID>@Twitter</S.UserID>
                            </S.UserNameWrapper>
                            <S.UserDesc>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore, accusantium!
                            </S.UserDesc>
                            <S.UserDateWrapper>
                                <CalendarMonthOutlinedIcon />
                                <S.UserDate>Joined April 2022</S.UserDate>
                            </S.UserDateWrapper>
                            <S.UserFollowersWrapper
                                onClick={() => setFollowModal(true)}
                            >
                                <S.UserFollowers>
                                    <S.UserFollowersNumber>
                                        1
                                    </S.UserFollowersNumber>
                                    <S.UserFollowersText>
                                        Following
                                    </S.UserFollowersText>
                                </S.UserFollowers>
                                <S.UserFollowers>
                                    <S.UserFollowersNumber>
                                        4
                                    </S.UserFollowersNumber>
                                    <S.UserFollowersText>
                                        Followers
                                    </S.UserFollowersText>
                                </S.UserFollowers>
                            </S.UserFollowersWrapper>
                        </S.UserInfo>
                    </S.UserInfoWrapper>
                </S.Header>
            </S.User>
            <S.TabsWrapper>
                <S.TabsButton onClick={handleTabTweet} isActive={tabTweets}>
                    Tweets
                </S.TabsButton>
                <S.TabsButton onClick={handleTabLikes} isActive={tabLikes}>
                    Likes
                </S.TabsButton>
            </S.TabsWrapper>
            <S.Tab isActive={tabTweets}>
                <S.Content>
                    <Link to="/tweet">
                        <Tweet />
                    </Link>
                </S.Content>
            </S.Tab>
            <S.Tab isActive={tabLikes}>
                <S.Content>
                    <Link to="/tweet">
                        <Tweet />
                    </Link>
                    <Link to="/tweet">
                        <Tweet />
                    </Link>
                </S.Content>
            </S.Tab>
        </>
    );
};
export default Profile;
