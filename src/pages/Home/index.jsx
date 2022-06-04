import PostTweet from '../../components/PostTweet';
import Header from '../../components/Header';
import Tweet from '../../components/Tweet';
import { Content } from '../Profile/styles';
import data from '../../data';
const Home = () => {
    return (
        <>
            <Header title="Home" />
            <PostTweet imageUploadID="image_upload" />
            <Content>
                {data.users.map((user) => (
                    <Tweet {...user} />
                ))}
            </Content>
        </>
    );
};
export default Home;
