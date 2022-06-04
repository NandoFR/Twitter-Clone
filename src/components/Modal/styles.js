import styled from 'styled-components';
import { Tablet } from '../../styles/Responsive';

export const Container = styled.div`
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    position: absolute;
    height: 100vh;
    width: 100vw;
`;
export const Blackscreen = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0;
    z-index: 10;
    ${Tablet({ display: 'none' })}
`;
export const Modal = styled.div`
    width: 600px;
    height: min-content;
    position: fixed;
    inset: 0;
    z-index: 11;
    top: 50%;
    left: 50%;
    background-color: var(--bg);
    transform: translate(-50%, -50%);
    border-radius: 16px;
    overflow-y: auto;
    ${Tablet({
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        borderRadius: '0',
        top: 0,
        left: 0,
        transform: 'translate(0,0)',
    })}
`;
export const Header = styled.header`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Close = styled.button``;
export const Title = styled.h3``;
export const Button = styled.button`
    display: ${(props) => (props.isActive ? 'none' : 'block')};
`;

export const Body = styled.div`
    padding: 30px;
`;
