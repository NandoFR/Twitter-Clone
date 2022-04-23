import styled, { css } from 'styled-components';
import { Mobile } from '../../styles/Responsive';
export const DisplaySlider = css`
    span.displaySlider > * {
        color: var(--primary);
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;
export const Desc = styled.p`
    text-align: center;
    color: var(--text-secondary);
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;
export const Label = styled.label`
    color: var(--text-secondary);
    font-weight: 400;
`;
export const Box = styled.div`
    padding: 10px 30px;
    background-color: var(--bg-secondary);
    border-radius: 16px;
`;
export const FontSize = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;
export const FontSizeSmall = styled.span`
    font-size: var(--text-small);
    ${Mobile({ display: 'none' })}
`;
export const FontSizeLarge = styled.span`
    font-size: var(--text-large);
    ${Mobile({ display: 'none' })}
`;
export const Colors = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
`;
export const Color = styled.button`
    padding: 20px;
    border-radius: 50%;
    background-color: ${({ ballColor }) => ballColor};
    :hover {
        background-color: ${({ ballColor }) => ballColor};
    }
`;

export const Background = styled.div`
    padding: 8px 30px;
    border-radius: 4px;
    background-color: ${({ background }) => background};
    :focus {
        border: 2px solid var(--primary);
    }
`;
export const Button = styled.button``;
