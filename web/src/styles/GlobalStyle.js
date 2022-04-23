import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --bg: ${({ theme }) => theme.background.bg};
        --bg-secondary: ${({ theme }) => theme.background.bgSecondary};
        --text: ${({ theme }) => theme.background.text};
        --text-secondary: ${({ theme }) => theme.background.textSecondary};
        --primary: ${({ theme }) => theme.color.primary};
        --primary-dark: ${({ theme }) => theme.color.primaryDark};
        --text-small: ${({ theme }) => theme.font.small};
        --text-regular: ${({ theme }) => theme.font.regular};
        --text-large: ${({ theme }) => theme.font.large};
        --text-title: ${({ theme }) => theme.font.title};
    }
    * {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        margin: 0;
        transition: 200ms;
        list-style: none;
        text-decoration: none;
    }
    ul{
        padding: 0;
    }
    body{
        background-color: var(--bg);
    }
    button {
        border-radius: 30px;
        padding: 10px 20px;
        border: none;
        font-weight: bold;
        background-color: var(--primary);
        color: white;
        font-size: var(--text-regular);
        cursor: pointer;
        :hover{
            background-color: var(--primary-dark);
        }

    }

    button.close{
        background-color: transparent;
        :hover{
            background-color: transparent;
        }
    }
    p,span,label{
        font-weight: 300;
        font-size: var(--text-regular)  ;
    }
    h1,h2,h3,h4,h5,h6,label,span,p,button > svg{
        color: var(--text);
    }
    h1,h2{
        font-size: var(--text-title);
    }
    h3,h4,h5,h6{
        font-size: var(--text-large);
    }
    textarea{
        color: var(--text) !important
    }
`;

export default GlobalStyle;
