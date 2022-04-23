import { ThemeProvider } from '@mui/material/styles';

const MaterialUI = ({ children, theme }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default MaterialUI;
