import PostTweet from '../../components/PostTweet';
import Header from '../../components/Header';
import Tweet from '../../components/Tweet';
import { Content } from '../Profile/styles';
const Home = () => {
    return (
        <>
            <Header title="Home" />
            <PostTweet imageUploadID="image_upload" />
            <Content>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </Content>
        </>
    );
};
export default Home;
