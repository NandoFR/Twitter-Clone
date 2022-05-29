import styled from 'styled-components';

export const Box = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 1px solid var(--text-secondary);
`;
export const Input = styled.input`
    width: 90%;
    height: 100%;
    outline: none;
    color: var(--text);
    background-color: transparent;
    font-size: var(--text-large);
    border: none !important;
    :focus {
        border: 1px solid var(--primary);
    }
`;
export const Icon = styled.button`
    width: 10%;
    border-radius: 0;
    height: 100%;
    padding: 0;
    background-color: var(--bg-secondary);
`;
