import { css } from 'styled-components';

export const Mobile = (styles) => {
    return css`
        @media (max-width: 400px) {
            ${styles}
        }
    `;
};
export const Tablet = (styles) => {
    return css`
        @media (max-width: 800px) {
            ${styles}
        }
    `;
};
export const Desktop = (styles) => {
    return css`
        @media (max-width: 1200px) {
            ${styles}
        }
    `;
};
