import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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
