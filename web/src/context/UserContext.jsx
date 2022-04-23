import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = (props) => {
    return (
        <UserContext.Provider value={'User'}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;
