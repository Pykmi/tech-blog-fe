import { createGlobalStyle } from 'styled-components';
import { fonts } from 'styles/constants.js';

const GlobalStyle = createGlobalStyle`
  /* questrial-regular - latin */
  @font-face {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/questrial-v7-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Questrial'), local('Questrial-Regular'),
        url('fonts/questrial-v7-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/questrial-v7-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/questrial-v7-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('fonts/questrial-v7-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/questrial-v7-latin-regular.svg#Questrial') format('svg'); /* Legacy iOS */
  }

  /* pt-sans-regular - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/pt-sans-v10-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('PT Sans'), local('PTSans-Regular'),
        url('../fonts/pt-sans-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/pt-sans-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/pt-sans-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/pt-sans-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/pt-sans-v10-latin-regular.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-italic - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: url('../fonts/pt-sans-v10-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Italic'), local('PTSans-Italic'),
        url('../fonts/pt-sans-v10-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/pt-sans-v10-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/pt-sans-v10-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('../fonts/pt-sans-v10-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/pt-sans-v10-latin-italic.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-700 - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/pt-sans-v10-latin-700.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Bold'), local('PTSans-Bold'),
        url('../fonts/pt-sans-v10-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/pt-sans-v10-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/pt-sans-v10-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../fonts/pt-sans-v10-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/pt-sans-v10-latin-700.svg#PTSans') format('svg'); /* Legacy iOS */
  }
  /* pt-sans-700italic - latin */
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    src: url('../fonts/pt-sans-v10-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
        url('../fonts/pt-sans-v10-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/pt-sans-v10-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/pt-sans-v10-latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('../fonts/pt-sans-v10-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/pt-sans-v10-latin-700italic.svg#PTSans') format('svg'); /* Legacy iOS */
  }

  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/montserrat-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('fonts/montserrat-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    src: url('fonts/montserrat-v12-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
        url('fonts/montserrat-v12-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url('fonts/montserrat-v12-latin-500.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
        url('fonts/montserrat-v12-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-500.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-500italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 500;
    src: url('fonts/montserrat-v12-latin-500italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
        url('fonts/montserrat-v12-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-500italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-500italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-600 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('fonts/montserrat-v12-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('fonts/montserrat-v12-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-600.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-600italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    src: url('fonts/montserrat-v12-latin-600italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
        url('fonts/montserrat-v12-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-600italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-600italic.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-700 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/montserrat-v12-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('fonts/montserrat-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-700.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
  }
  /* montserrat-700italic - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 700;
    src: url('fonts/montserrat-v12-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
        url('fonts/montserrat-v12-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/montserrat-v12-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/montserrat-v12-latin-700italic.woff') format('woff'), /* Modern Browsers */
        url('fonts/montserrat-v12-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/montserrat-v12-latin-700italic.svg#Montserrat') format('svg'); /* Legacy iOS */
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
    text-decoration: none;
  }
`;

export default GlobalStyle;
