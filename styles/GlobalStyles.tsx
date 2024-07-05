import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  *,
  *::after,
  *::before {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
    cursor: default;
    color: white;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    min-height: 100vh;
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --black: #000000;
    --gray1: #121212;
    --gray2: #333333;
    --gray3: #555555;
    --gray4: #777777;
    --gray5: #999999;
    --gray6: #BBBBBB;
    --gray7: #DDDDDD;
    --gray8: #EEEEEE;
    --white: #FFFFFF;

    --grey-grey990: #fcfcfd; 
    --grey-grey970: #f6f6f9;
    --grey-grey950: #f1f2f4;
    --grey-grey940: #eeeff1;
    --grey-grey920: #e8e9ed;
    --grey-grey900: #e2e4e9; // text
    --grey-grey850: #d5d7dc;
    --grey-grey800: #c7cad1;
    --grey-grey700: #acb0b9;
    --grey-grey600: #9196a1; // svg, text, tagColor
    --grey-grey500: #757b8a;
    --grey-grey400: #5e636e;
    --grey-grey350: #525661;
    --grey-grey300: #464a53;
    --grey-grey250: #3b3d45;
    --grey-grey200: #2f3137;
    --grey-grey180: #2a2c32;
    --grey-grey150: #232529; // sidebar, tagbackground
    --grey-grey100: #17191c; // background
    --grey-grey50: #0c0d0e;
    --grey-spaceGray400: #51527b;
    --yellow-galaxyYellow: #f7d000;

    --gray-button: #626262;
  }
`;

export default GlobalStyles;
