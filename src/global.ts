import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-base: 16px;
--font-size-xs: 12px;

/* Colors */
--color-white: #fff;
--color-deepskyblue: #00c2ff;
--color-gray: #181818;

}
`;
