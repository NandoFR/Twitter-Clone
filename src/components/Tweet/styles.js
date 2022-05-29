import styled from 'styled-components';
import { Tablet } from '../../styles/Responsive';
export const Container = styled.div`
    border: 3px solid var(--bg-secondary);
    padding: 10px;
    display: flex;
`;
export const LeftContent = styled.div`
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
export const Photo = styled.img`
    border-radius: 50%;
    width: 44px;
`;
export const RightContent = styled.div``;
export const TitleWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;
export const Name = styled.h4`
    font-size: var(--text-regular);
`;
export const IDAndDate = styled.span`
    color: var(--text-secondary);
`;
export const Content = styled.p`
    padding: 10px 0;
`;
export const ImageGrid = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    ${Tablet({
        gridTemplateColumns: '1fr',
    })}
`;
export const Image = styled.img`
    width: 100%;
    border-radius: 16px;
    border: 1px solid var(--text-secondary);
`;
