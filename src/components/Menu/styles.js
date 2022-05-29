import styled from 'styled-components';
import { Desktop, Tablet } from '../../styles/Responsive';

export const Container = styled.aside``;
export const Header = styled.header``;
export const Icon = styled.button`
    background-color: transparent;
    :hover {
        background-color: transparent;
    }
    svg {
        width: 34px;
        height: 34px;

        ${Tablet({
            width: '30px',
            height: '30px',
        })}
    }
    position: relative;
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
    position: sticky;
    top: 20px;

    ${Tablet({
        gap: '30px',
    })}
`;
export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    padding-left: 0;
    border-radius: 30px;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.background.bgSecondary};
    }
    ${Tablet({
        padding: '0',
    })}
`;
export const Badge = styled.span`
    border-radius: 50%;
    background-color: var(--primary);
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: var(--text-small);
    color: var(--bg);
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    text-align: center;
`;
export const Text = styled.span`
    font-size: var(--text-large);
    font-weight: 400;
    ${Desktop({
        display: 'none',
    })}
`;
export const Button = styled.button`
    width: 100%;
    margin: 0 auto;
    ${Tablet({
        width: 'auto',
        padding: '15px',
        marginLeft: '10px',
    })}
    span {
        font-size: var(--text-large);
        font-weight: bold;
        ${Tablet({
            display: 'none',
        })}
        color: white
    }
    svg {
        display: none;
        ${Tablet({
            display: 'block',
        })}
        color: white
    }
`;
