import { useState, useContext } from 'react';
import Modal from '../Modal';
import Tweet from '../Tweet';
import ThemeContext from '../../context/ThemeContext';
import { Slider, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { allColors, allBackgrounds } from '../../styles/Theme';
import * as S from './styles';
import './styles.css';
import ThemeStorage from '../../storage/ThemeStorage';
const Display = ({ toggleModal, setToggleModal }) => {
    const [background, setBackground, color, setColor, font, setFont] =
        useContext(ThemeContext);

    const handleFontSize = (e) => {
        let value = e.target.value;
        if (value === 0) setFont('extraSmall');
        if (value === 25) setFont('small');
        if (value === 50) setFont('regular');
        if (value === 75) setFont('large');
        if (value === 100) setFont('extraLarge');
    };
    const getDefaultFontSizeValue = () => {
        if (font === 'extraSmall') return 0;
        if (font === 'small') return 25;
        if (font === 'regular') return 50;
        if (font === 'large') return 75;
        if (font === 'extraLarge') return 100;
    };

    return (
        <Modal
            headerName="Customize your view"
            isActive={toggleModal}
            toggleModal={setToggleModal}
        >
            <S.Body>
                <S.Desc>
                    Manage your font size, color, and background. These settings
                    affect all the Twitter accounts on this browser.
                </S.Desc>
                <Tweet />
                <S.Group>
                    <S.Label>Font Size</S.Label>
                    <S.Box>
                        <S.FontSize>
                            <S.FontSizeSmall>Aa</S.FontSizeSmall>
                            <Slider
                                aria-label="Font Size"
                                defaultValue={getDefaultFontSizeValue()}
                                step={25}
                                marks
                                min={0}
                                max={100}
                                onChange={handleFontSize}
                                className="displaySlider"
                            />
                            <S.FontSizeLarge>Aa</S.FontSizeLarge>
                        </S.FontSize>
                    </S.Box>
                </S.Group>
                <S.Group>
                    <S.Label>Color</S.Label>
                    <S.Box>
                        <S.Colors>
                            <S.Color
                                onClick={() => setColor('blue')}
                                ballColor={allColors.blue.primary}
                            />
                            <S.Color
                                onClick={() => setColor('yellow')}
                                ballColor={allColors.yellow.primary}
                            />
                            <S.Color
                                onClick={() => setColor('red')}
                                ballColor={allColors.red.primary}
                            />
                            <S.Color
                                onClick={() => setColor('purple')}
                                ballColor={allColors.purple.primary}
                            />
                            <S.Color
                                onClick={() => setColor('orange')}
                                ballColor={allColors.orange.primary}
                            />
                            <S.Color
                                onClick={() => setColor('green')}
                                ballColor={allColors.green.primary}
                            />
                        </S.Colors>
                    </S.Box>
                </S.Group>
                <S.Group>
                    <S.Label>Background</S.Label>
                    <S.Box>
                        <RadioGroup
                            defaultValue={background}
                            className="backgrounds"
                            onChange={(e) => setBackground(e.target.value)}
                        >
                            <S.Background background={allBackgrounds.light.bg}>
                                <FormControlLabel
                                    value="light"
                                    control={
                                        <Radio
                                            sx={{
                                                color: allBackgrounds.light
                                                    .text,
                                            }}
                                        />
                                    }
                                    label="Light"
                                    sx={{ color: allBackgrounds.light.text }}
                                />
                            </S.Background>

                            <S.Background background={allBackgrounds.dim.bg}>
                                <FormControlLabel
                                    value="dim"
                                    control={
                                        <Radio
                                            sx={{
                                                color: allBackgrounds.dim.text,
                                            }}
                                        />
                                    }
                                    label="Dim"
                                    sx={{ color: allBackgrounds.dim.text }}
                                />
                            </S.Background>
                            <S.Background background={allBackgrounds.dark.bg}>
                                <FormControlLabel
                                    value="dark"
                                    control={
                                        <Radio
                                            sx={{
                                                color: allBackgrounds.dark.text,
                                            }}
                                        />
                                    }
                                    label="Dark"
                                    sx={{ color: allBackgrounds.dark.text }}
                                />
                            </S.Background>
                        </RadioGroup>
                    </S.Box>
                </S.Group>
                <S.Button
                    onClick={() => {
                        ThemeStorage.setBackground(background);
                        ThemeStorage.setColor(color);
                        ThemeStorage.setFontSize(font);
                        setToggleModal(false);
                    }}
                >
                    Save
                </S.Button>
            </S.Body>
        </Modal>
    );
};
export default Display;
