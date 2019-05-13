import { createGlobalStyle } from '../utils/styled-components';

export const GlobalStyles = createGlobalStyle`
  /* some css styles and fonts borrowered from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts and Bootstrap 4 https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
  }
`;
