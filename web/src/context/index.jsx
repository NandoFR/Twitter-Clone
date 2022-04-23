import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
const Provider = ({ children }) => {
    return (
        <UserProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </UserProvider>
    );
};

export default Provider;
