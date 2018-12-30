import { createGlobalStyle } from "styled-components";

const Sizes = createGlobalStyle`
  :root {
    --spacing-small: 10px;
    --spacing-medium: 20px;
    --spacing-big: 40px;
    --radius: 4px;
  }
`;

export default Sizes;
