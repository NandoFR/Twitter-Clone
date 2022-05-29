import * as S from './styles';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Display from '../Display';
import PostTweetModal from '../PostTweet/PostTweetModal';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import TagIcon from '@mui/icons-material/Tag';
import { useState } from 'react';
const Menu = () => {
    const theme = useTheme();
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleTweetModal, setToggleTweetModal] = useState(false);
    return (
        <S.Container>
            <Display
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
            />
            <PostTweetModal
                toggleModal={toggleTweetModal}
                setToggleModal={setToggleTweetModal}
            />
            <S.Header>
                <S.Icon style={{ paddingLeft: '20px' }}>
                    <Link to="/">
                        <svg
                            fill={theme.color.primary}
                            viewBox="0 0 30 30"
                            width="34px"
                            height="34px"
                        >
                            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                        </svg>
                    </Link>
                </S.Icon>
            </S.Header>
            <S.List>
                <Link to="/">
                    <S.Item>
                        <S.Icon>
                            <HomeOutlinedIcon />
                        </S.Icon>
                        <S.Text>Home</S.Text>
                    </S.Item>
                </Link>
                <Link to="/explore">
                    <S.Item>
                        <S.Icon>
                            <TagIcon />
                        </S.Icon>
                        <S.Text>Explore</S.Text>
                    </S.Item>
                </Link>

                <Link to="/profile">
                    <S.Item>
                        <S.Icon>
                            <AccountCircleOutlinedIcon />
                        </S.Icon>
                        <S.Text>Profile</S.Text>
                    </S.Item>
                </Link>

                <S.Item onClick={() => setToggleModal(true)}>
                    <S.Icon>
                        <FormatColorFillOutlinedIcon />
                    </S.Icon>
                    <S.Text>Display</S.Text>
                </S.Item>
                <S.Button onClick={() => setToggleTweetModal(true)}>
                    <span>Tweet</span>
                    <BorderColorOutlinedIcon />
                </S.Button>
            </S.List>
        </S.Container>
    );
};
export default Menu;
