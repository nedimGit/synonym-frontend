# SYNONYMS
Synonyms web app

## Project architecture: 
 
* Framework: React

* Language: Javascript 

* Web standard: HTML 5 

* Styling framework: SASS 

* Packet manager: Yarn 

* Arrays manipulation library: Loadash 

* Browsers:
 * Chrome 
 * Firefox 
 * Edge 
 * IE 10, 11   
 * Safari 
 * Android 4.1 - 6.0 
 * IOS 7 – 10 

 
## Project implementation: 

### Application parts below are flagged like this: 

* &#x1F4D2; Folders 
* &#x1F4D1; Files 


### Project arhitecture: 
* &#x1F4D2; app
    * &#x1F4D2; synonym
        * &#x1F4D2; components
            * &#x1F4D1; synonym.js
        * &#x1F4D2; actions
            * &#x1F4D1; synonym-actions.js
        * &#x1F4D2; reducers
            * &#x1F4D1; synonym-reducers.js
        * &#x1F4D2; constants
            * &#x1F4D1; synonym-constants.js
            * &#x1F4D1; action-types.js
        * &#x1F4D2; helpers
            * &#x1F4D1; synonym-helpers.js
        * &#x1F4D2; styles
            * &#x1F4D2; images
            * &#x1F4D1; syonym.scss
    * &#x1F4D2; shared **-> shared components**
* &#x1F4D2; common
    * &#x1F4D2; render-if
        * &#x1F4D1; render-if
    * &#x1F4D1; constants.js
    * &#x1F4D1; routes-helper.js
    * &#x1F4D1; routes-constants.js
    * &#x1F4D1; helpers.js
* &#x1F4D2; core
    * &#x1F4D1; root-reducer.js
    * &#x1F4D1; routes.js
    * &#x1F4D1; store.js
* &#x1F4D1; package.json
* &#x1F4D1; README.md


## Setting up project:

- Install dependencies:
`yarn`

- Start project:
`yarn start`

- Create a deployable build
`yarn build`


## Prettier, ESLint and Stylelint

Install Visual Studio Code extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Stylelint plus](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus)


### Stylelint scripts

Manually testing all .scss files run the script:

`yarn run test:lint:scss`

Manually fixing all .scss files run the script:

`yarn run fix:lint:scss`


## External libs

| Package name | Version | License | Author |
| --- | --- | --- | --- |
| [axios](https://github.com/axios/axios) | ^0.19.0 | [MIT](https://opensource.org/licenses/MIT) |
| [lodash](https://lodash.com/) | ^4.17.14 | [MIT](https://opensource.org/licenses/MIT) |
| [node-sass](https://github.com/sass/node-sass) | ^4.12.0 | [MIT](https://opensource.org/licenses/MIT) |
| [rc-progress](https://github.com/react-component/progress) | ^2.5.1 | [MIT](https://opensource.org/licenses/MIT) |
| [react](https://reactjs.org/) | ^16.8.6 | [MIT](https://opensource.org/licenses/MIT) | Facebook, Inc. |
| [react-autosuggest](https://github.com/moroshko/react-autosuggest#readme) | ^9.4.3 | [MIT](https://opensource.org/licenses/MIT) |
| [react-beforeunload](https://github.com/jacobbuck/react-beforeunload#readme) | ^2.1.0 | [MIT](https://opensource.org/licenses/MIT) |
| [react-color]( https://github.com/casesandberg/react-color) | ^2.17.3 | [MIT](https://opensource.org/licenses/MIT) |
| [react-datepicker](https://github.com/Hacker0x01/react-datepicker) | ^2.8.0 | [MIT](https://opensource.org/licenses/MIT) |
| [react-dom](https://reactjs.org/) | ^16.8.6 | [MIT](https://opensource.org/licenses/MIT) | Facebook, Inc. |
| [react-dropzone](https://github.com/react-dropzone/react-dropzone) | ^10.1.7 | [MIT](https://opensource.org/licenses/MIT) |
| [react-geocode](https://github.com/shukerullah/react-geocode#readme) | ^0.1.2 | [MIT](https://opensource.org/licenses/MIT) |
| [react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete#readme) | ^1.1.0 | [MIT](https://opensource.org/licenses/MIT) |
| [react-google-charts](https://github.com/rakannimer/react-google-charts) | ^3.0.14 | [MIT](https://opensource.org/licenses/MIT) |
| [react-image-gallery](https://github.com/xiaolin/react-image-gallery) | ^0.9.1 | [MIT](https://opensource.org/licenses/MIT) |
| [react-input-range](https://github.com/davidchin/react-input-range#readme) | ^1.3.0 | [MIT](https://opensource.org/licenses/MIT) |
| [react-lottie](https://github.com/chenqingspring/react-lottie#readme) | ^1.2.3 | [MIT](https://opensource.org/licenses/MIT) |
| [react-redux](https://github.com/reduxjs/react-redux) | 5.1.1 | [MIT](https://opensource.org/licenses/MIT) |
| [react-resize-detector](https://github.com/maslianok/react-resize-detector) | ^4.2.0 | [MIT](https://opensource.org/licenses/MIT) |
| [react-router](https://github.com/ReactTraining/react-router#readme) | 3.0.5 | [MIT](https://opensource.org/licenses/MIT) |
| [react-sketch](https://github.com/tbolis/react-sketch#readme) | ^0.5.1 | [MIT](https://opensource.org/licenses/MIT) |
| [react-spinners](https://github.com/davidhu2000/react-spinners) | ^0.5.8 | [MIT](https://opensource.org/licenses/MIT) |
| [react-switch](https://github.com/markusenglund/react-switch#readme) | ^5.0.1 | [MIT](https://opensource.org/licenses/MIT) |
| [react-widgets](https://github.com/jquense/react-widgets) | ^5.0.0-7 | [MIT](https://opensource.org/licenses/MIT) |
| [redux](https://github.com/reduxjs/redux) | ^4.0.1 | [MIT](https://opensource.org/licenses/MIT) |
| [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) | ^2.13.8 | [MIT](https://opensource.org/licenses/MIT) |
| [redux-form](https://github.com/redux-form/redux-form) | ^7.4.2 | [MIT](https://opensource.org/licenses/MIT) |
| [redux-persist](https://github.com/rt2zz/redux-persist#readme) | ^5.10.0 | [MIT](https://opensource.org/licenses/MIT) |
| [redux-persist-transform-encrypt](https://github.com/maxdeviant/redux-persist-transform-encrypt#readme) | ^2.0.1 | [MIT](https://opensource.org/licenses/MIT) |
| [redux-thunk](https://github.com/reduxjs/redux-thunk) | ^2.3.0 | [MIT](https://opensource.org/licenses/MIT) |
