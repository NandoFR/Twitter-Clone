import styled from 'styled-components';
import { Mobile } from '../../../styles/Responsive';
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px 0;
    gap: 10px;
    ${Mobile({
        gridTemplateColumns: '1fr',
    })}
`;
export const ImageContainer = styled.div`
    position: relative;
`;
export const ImageDelete = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;
export const Image = styled.img`
    display: block;
    max-width: 200px;
    border-radius: 30px;
    border: 3px solid var(--bg-secondary);
`;
