import { createContext } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { useState } from 'react';
import Background from '../styles/Theme/Background';
import Colors from '../styles/Theme/Colors';
import FontSize from '../styles/Theme/FontSize';
import ThemeStorage from '../storage/ThemeStorage';
import MaterialUI from '../styles/Theme/MaterialUI';
import { createTheme } from '@mui/material';

const ThemeContext = createContext();
export const ThemeProvider = (props) => {
    const [background, setBackground] = useState(
        ThemeStorage.getBackground() || 'light'
    );
    const [color, setColor] = useState(ThemeStorage.getColor() || 'blue');
    const [font, setFont] = useState(ThemeStorage.getFontSize() || 'regular');

    const themeMaterialUI = createTheme({
        palette: {
            mode: background === 'light' ? 'light' : 'dark',
            primary: { main: Colors[color]['primary'] },
        },
    });
    return (
        <ThemeContext.Provider
            value={[background, setBackground, color, setColor, font, setFont]}
        >
            <Provider
                theme={{
                    background: Background[background],
                    color: Colors[color],
                    font: FontSize[font],
                }}
            >
                <MaterialUI theme={themeMaterialUI}>
                    {props.children}
                </MaterialUI>
            </Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
