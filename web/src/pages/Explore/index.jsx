import Header from '../../components/Header';
import { Content } from '../Profile/styles';
import User from '../../components/User';
import Search from '../../components/Search';
import { useState } from 'react';
const Explore = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <>
            <Header title="Explore" />
            <Search
                submit={handleSubmit}
                value={searchValue}
                change={setSearchValue}
            />
            <Content>
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
            </Content>
        </>
    );
};
export default Explore;
