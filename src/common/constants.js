import lightThemeColors from '../common/styles/theme-files/_light-theme.scss';
import dimensions from '../common/styles/dimensions/_dimensions.scss';
import { localhost } from './environments/localhost';

let envVars = {};

let API_BASE_URL = envVars['API_BASE_URL'],
  PUBLIC_URL = envVars['PUBLIC_URL'],
  FAVICON = envVars['FAVICON'];

envVars = localhost;

API_BASE_URL = 'http://localhost:5500';
PUBLIC_URL = 'http://localhost:7777/';

const FORMS = {
  wordInputForm: 'wordInputForm',
  searchWordForm: 'searchWordForm',
  synonymInputForm: 'synonymInputForm',
  editInputForm: 'editInputForm',
};

const THEMES = {
  light: {
    name: 'light',
    colors: {
      ...lightThemeColors,
    },
  },
};

let DIMENSIONS = {};

Object.keys(dimensions).forEach(key => {
  DIMENSIONS[key] = parseFloat(dimensions[key].split('px')[0]);
});

export { FORMS, THEMES, DIMENSIONS, API_BASE_URL, PUBLIC_URL, FAVICON };
