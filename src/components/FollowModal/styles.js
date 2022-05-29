import styled from 'styled-components';
import { Tablet } from '../../styles/Responsive';
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid var(--primary);
    justify-content: center;
    align-items: center;
    gap: 30px;
    overflow-y: auto;
    max-height: 600px;
`;
