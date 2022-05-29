import styled from 'styled-components';
import { Tablet } from '../../styles/Responsive';

export const Box = styled.div`
    margin-top: 20px;
    border-radius: 16px;
    padding: 16px;
    background-color: var(--bg-secondary);
    width: 320px;
    height: min-content;
    ${Tablet({ display: 'none' })}
    position: sticky;
    top: 0px;
`;
export const UserContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin: 30px 0;
`;
export const Title = styled.h4``;
export const ShowMore = styled.span`
    border-radius: 4px;
    padding: 10px 5px;
    a {
        color: var(--primary);
    }
    :hover {
        background-color: var(--bg);
    }
`;
