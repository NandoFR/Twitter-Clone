import * as S from './styles';
import Modal from '../Modal';
import { TabsWrapper, TabsButton, Tab } from '../../pages/Profile/styles';
import { useState } from 'react';
import User from '../User';
const FollowModal = ({ isActive, toggleModal }) => {
    const [tabFollowers, setTabFollowers] = useState(true);
    const [tabFollowing, setTabFollowing] = useState(false);
    const handleTabFollowers = () => {
        setTabFollowers(true);
        setTabFollowing(false);
    };
    const handleTabFollowing = () => {
        setTabFollowers(false);
        setTabFollowing(true);
    };
    return (
        <Modal isActive={isActive} toggleModal={toggleModal}>
            <TabsWrapper>
                <TabsButton
                    isActive={tabFollowers}
                    onClick={handleTabFollowers}
                >
                    Followers
                </TabsButton>
                <TabsButton
                    isActive={tabFollowing}
                    onClick={handleTabFollowing}
                >
                    Following
                </TabsButton>
            </TabsWrapper>
            <Tab isActive={tabFollowers}>
                <S.Content>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </S.Content>
            </Tab>
            <Tab isActive={tabFollowing}>
                <S.Content>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </S.Content>
            </Tab>
        </Modal>
    );
};
export default FollowModal;
