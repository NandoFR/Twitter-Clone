import styled from 'styled-components';

export const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    resize: none;
    width: 100%;
    border-bottom: 2px solid var(--bg-secondary);
    outline: none;
    margin-bottom: 10px;
    font-size: var(--text-large);
    transition: none;
    height: ${({ height }) => height};
    :focus {
        border-bottom: 2px solid var(--primary);
    }
    overflow: hidden;
`;
