import styled from 'styled-components';
import { Mobile } from '../../styles/Responsive';

export const Container = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
`;
export const LeftContent = styled.div`
    width: 15%;
    display: flex;
    align-items: flex-start;
    ${Mobile({
        display: 'none',
    })}
`;
export const RightContent = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const BottomContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;
export const Icon = styled.label`
    color: var(--primary);
    padding: 3px;
    border-radius: 50%;
    cursor: pointer;
    :hover {
        background-color: var(--bg-secondary);
    }
`;
export const Button = styled.button``;
