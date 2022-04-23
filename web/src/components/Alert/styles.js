import styled from 'styled-components';

export const Box = styled.div`
    display: block;
    opacity: ${({ isActive }) => (isActive ? '100' : '0')};
    position: fixed;
    bottom: 10px;
    right: 30px;
    border-radius: 16px;
    text-align: center;
    padding: 30px;
    background-color: var(--primary);
`;
export const Title = styled.h3``;
