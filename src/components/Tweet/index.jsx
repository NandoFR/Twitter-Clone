import * as S from './styles';
const Tweet = ({ name, photo }) => {
    return (
        <S.Container>
            <S.LeftContent>
                <S.Photo
                    src={photo || 'images/twitter_image.webp'}
                    alt="Twitter"
                />
            </S.LeftContent>
            <S.RightContent>
                <S.TitleWrapper>
                    <S.Name>{name || 'Twitter'}</S.Name>
                    <S.IDAndDate>@{name || 'Twitter'} - 20m</S.IDAndDate>
                </S.TitleWrapper>
                <S.Content>
                    At the heart of Twitter are short messages called Tweets --
                    just like this one -- which can includes photos, videos,
                    links, texts, hashtags, and mentions like Twitter. (or not)
                </S.Content>
            </S.RightContent>
        </S.Container>
    );
};
export default Tweet;
