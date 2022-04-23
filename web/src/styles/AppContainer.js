import styled from 'styled-components';
import { Tablet } from './Responsive';
const AppContainer = styled.main`
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 30px;
    gap: 30px;
    ${Tablet({
        padding: 0,
        gap: 0,
    })}
`;

export default AppContainer;
