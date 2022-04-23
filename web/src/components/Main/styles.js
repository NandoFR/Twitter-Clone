import styled from 'styled-components';
import { Tablet } from '../../styles/Responsive';

export const Container = styled.main`
    padding: 0 10px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--bg-secondary);
    border-right: 2px solid var(--bg-secondary);
    ${Tablet({
        width: '100%',
    })}
`;
