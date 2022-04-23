import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;
export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const UserInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
`;
export const UserNameWrapper = styled.div``;
export const Content = styled.p`
    font-size: var(--text-title);
`;
export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 20px 0;
    border-top: 2px solid var(--bg-secondary);
    border-bottom: 2px solid var(--bg-secondary);
`;
export const Status = styled.div`
    display: flex;
    gap: 5px;
`;
export const Actions = styled.div`
    display: flex;
    gap: 15px;
`;
export const Number = styled.span`
    color: var(--text);
    font-weight: bold;
`;
export const Text = styled.span`
    color: var(--text-secondary);
    font-weight: 400;
`;
export const Icon = styled.span`
    color: ${({ color }) => color};
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    cursor: pointer;
`;
export const Delete = styled.button`
    padding: 4px 18px;
    background-color: transparent;
    color: var(--text);
    :hover {
        background-color: var(--bg-secondary);
    }
`;
