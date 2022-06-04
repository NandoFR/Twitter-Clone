import Header from '../../components/Header';
import { Content } from '../Profile/styles';
import User from '../../components/User';
import Search from '../../components/Search';
import { useState } from 'react';
import data from '../../data';

const Explore = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
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
                {data.users.map((user) => {
                    return <User key={user.id} {...user} />;
                })}
            </Content>
        </>
    );
};
export default Explore;
