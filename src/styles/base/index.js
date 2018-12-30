import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    body{
        font-family: 'Roboto',sans-serif;
        font-size: 16px;
    }
    button{
        border: none;
        background-color: var(--transparent);
    }
`;

export default Base;
