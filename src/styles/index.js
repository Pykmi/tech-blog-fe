import { createGlobalStyle } from 'styled-components';
import { fonts } from 'styles/constants.js';

const GlobalStyle = createGlobalStyle`
  /* dosis-200 - latin */
  @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 200;
    src: local('Dosis ExtraLight'), local('Dosis-ExtraLight'),
        url('/fonts/dosis-v8-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/dosis-v8-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* dosis-300 - latin */
  @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 300;
    src: local('Dosis Light'), local('Dosis-Light'),
        url('/fonts/dosis-v8-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/dosis-v8-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* dosis-regular - latin */
  @font-face {
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    src: local('Dosis Regular'), local('Dosis-Regular'),
        url('/fonts/dosis-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/dosis-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* pt-sans-regular - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/pt-sans-v10-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('PT Sans'), local('PTSans-Regular'),
        url('/fonts/pt-sans-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/pt-sans-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/pt-sans-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/pt-sans-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/pt-sans-v10-latin-regular.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-italic - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/pt-sans-v10-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Italic'), local('PTSans-Italic'),
        url('/fonts/pt-sans-v10-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/pt-sans-v10-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/pt-sans-v10-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('/fonts/pt-sans-v10-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/pt-sans-v10-latin-italic.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-700 - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/pt-sans-v10-latin-700.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Bold'), local('PTSans-Bold'),
        url('/fonts/pt-sans-v10-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/pt-sans-v10-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/pt-sans-v10-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/pt-sans-v10-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/pt-sans-v10-latin-700.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-700italic - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/pt-sans-v10-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
        url('/fonts/pt-sans-v10-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/pt-sans-v10-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/pt-sans-v10-latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('/fonts/pt-sans-v10-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/pt-sans-v10-latin-700italic.svg#PTSans') format('svg'); /* Legacy iOS */
  }

  /* global stylesheets */
  html {
    box-sizing: border-box;
    font-size: 16px !important;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fonts.primary}, Arial, Georgia, Serif;
  }

  textarea, input, button {
    font-family: ${fonts.primary}, Arial, Georgia, Serif;
  }

  textarea:focus, input:focus, button {
    outline: none;
  }

  a {
    color: #259dff;
    text-decoration: none;
  }
`;

export default GlobalStyle;
