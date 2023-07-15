/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: black;\\n  color: white;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\n.navbar {\\n  position: absolute;\\n  top: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 3% 5%;\\n  z-index: 10;\\n}\\n\\n.navbar__brand {\\n  width: 100px;\\n  height: 100%;\\n}\\n\\n.brand__logo {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.language__drop__down {\\n  background: transparent;\\n  border: none;\\n  color: white;\\n}\\n\\n.language__drop__down:focus {\\n  outline: none;\\n}\\n\\n.language__drop__down option {\\n  background-color: black;\\n}\\n\\n.dropdown__container {\\n  border: 1px solid white;\\n  padding: 0.4rem;\\n  border-radius: 4px;\\n  background: rgba(0, 0, 0, 0.4);\\n}\\n\\n.signin__button {\\n  background-color: #dc030f;\\n  border: 1px solid #dc030f;\\n  color: white;\\n  padding: 0.25rem 0.5rem;\\n  border-radius: 4px;\\n}\\n\\n.navbar__nav__items {\\n  display: flex;\\n  gap: 10px;\\n}\\n\\n.hero__bg__image__container {\\n  width: 100%;\\n  height: 80vh;\\n}\\n\\n.hero__bg__image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.hero__bg__overlay {\\n  position: absolute;\\n  inset: 0;\\n  width: 100%;\\n  height: 80vh;\\n  background: rgba(0, 0, 0, 0.4);\\n  background-image: linear-gradient(\\n    to top,\\n    rgba(0, 0, 0, 0.8) 0,\\n    rgba(0, 0, 0, 0) 60%,\\n    rgba(0, 0, 0, 0.8) 100%\\n  );\\n}\\n\\n.hero__card {\\n  position: absolute;\\n  top: 20%;\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.hero__title {\\n  font-weight: 600;\\n  font-size: 2rem;\\n}\\n\\n.hero__subtitle,\\n.hero__description {\\n  font-weight: 400;\\n  font-size: 1rem;\\n}\\n\\n.hero__description {\\n  margin: 0 50px;\\n}\\n\\n.email__input {\\n  border: none;\\n  background: transparent;\\n  width: 100%;\\n  height: 100%;\\n  padding-left: 7px;\\n}\\n.email__label {\\n  color: black;\\n  position: absolute;\\n  top: 28%;\\n  left: 2%;\\n  color: rgb(153, 149, 149);\\n  transition: 0.5s;\\n}\\n\\n.email__form__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 15px;\\n}\\n\\n.form__container {\\n  background-color: white;\\n  width: 90%;\\n  height: 50px;\\n  position: relative;\\n}\\n\\n.email__input:focus + .email__label {\\n  top: 0.2rem;\\n  font-size: 10px;\\n}\\n\\n.email__input:not(:placeholder-shown).email__input:not(:focus) + .email__label {\\n  top: 0.2rem;\\n  font-size: 10px;\\n}\\n\\n.email__input:focus-visible {\\n  outline: none;\\n}\\n\\n.primary__button {\\n  background-color: #dc030f;\\n  border: 1px solid #dc030f;\\n  color: white;\\n  padding: 0.8rem 1.2rem;\\n  border-radius: 2px;\\n  font-size: 15px;\\n  letter-spacing: 1px;\\n}\\n\\n.feature {\\n  border-top: 8px solid #222;\\n  padding: 2rem 1rem;\\n}\\n\\n.feature__details {\\n  text-align: center;\\n}\\n\\n.feature__title {\\n  font-size: 25px;\\n  font-weight: 600;\\n  margin: 10px 0;\\n}\\n\\n.feature__sub__title {\\n  font-size: 15px;\\n  font-weight: 400;\\n}\\n\\n.feature__image__container {\\n  width: 100%;\\n  position: relative;\\n}\\n.feature__image {\\n  width: 100%;\\n}\\n\\n.feature__backgroud__video__container {\\n  position: absolute;\\n  width: 100%;\\n  top: 20%;\\n  left: 13%;\\n  height: 100%;\\n  max-width: 73%;\\n  max-height: 54%;\\n  z-index: -2;\\n}\\n\\n.feature__backgroud__video {\\n  width: 100%;\\n}\\n\\n.feature__2__poster__container {\\n  position: absolute;\\n  bottom: 8%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 100%;\\n  max-width: 16em;\\n  display: flex;\\n  align-items: center;\\n  background-color: black;\\n  border: 2px solid rgba(255, 255, 255, 0.25);\\n  border-radius: 10px;\\n  height: 60px;\\n  padding: 0.25rem 0.6rem;\\n  gap: 15px;\\n}\\n\\n.poster__container {\\n  width: 20%;\\n}\\n\\n.poster {\\n  width: 100%;\\n  height: 100%;\\n}\\n.poster__details {\\n  width: 60%;\\n}\\n.poster__details > h4 {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.poster__details > h6 {\\n  font-size: 12px;\\n  font-weight: 400;\\n  color: rgb(63, 63, 246);\\n}\\n\\n.download__gif__container {\\n  width: 20%;\\n  height: 100%;\\n}\\n.gif {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.feature__3__backgroud__video__container {\\n  max-width: 63%;\\n  max-height: 47%;\\n  z-index: -2;\\n  top: 9%;\\n  left: 19%;\\n}\\n\\n.FAQ__accordian {\\n  width: 100%;\\n}\\n.FAQ__title {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 15px 20px;\\n  font-size: 18px;\\n  background-color: #303030;\\n  border: 1px solid #303030;\\n  color: white;\\n}\\n\\n.FAQ__visible {\\n  background-color: #303030;\\n  border-top: 1px solid black;\\n  max-height: 0;\\n  overflow: hidden;\\n  transition: max-height 0.5s ease-in-out;\\n}\\n\\n.FAQ__visible > p {\\n  margin: 1rem;\\n}\\n.FAQ__list__container {\\n  border-top: 8px solid #222;\\n  padding: 2rem 0;\\n}\\n.FAQ__heading {\\n  font-size: 20px;\\n  text-align: center;\\n  font-weight: 600;\\n  margin: 1rem 3rem;\\n}\\n\\n.FAQ__list {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.FAQ__get__started__email {\\n  text-align: center;\\n}\\n\\n.FAQ__get__started__email > h3 {\\n  font-size: 18px;\\n  font-weight: 400;\\n  margin: 2rem 0;\\n}\\n\\nfooter {\\n  border-top: 8px solid #333;\\n  padding: 2rem 1rem;\\n  color: #757575;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n.footer__row__2 {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  gap: 20px;\\n}\\n\\n.footer__row__1 > h4 {\\n  font-size: 15px;\\n  font-weight: 500;\\n}\\n\\n.footer__row__3 > .dropdown__container {\\n  width: fit-content;\\n  border: 1px solid #757575;\\n  color: #757575;\\n}\\n\\n.footer__row__3 > .dropdown__container > .language__drop__down {\\n  color: #757575;\\n}\\n\\n@media (min-width: 768px) {\\n  .hero__bg__image__container {\\n    height: 100vh;\\n  }\\n\\n  .hero__bg__overlay {\\n    height: 100vh;\\n  }\\n  .hero__card {\\n    top: 40%;\\n    left: 30%;\\n    transform: translate(-20%, -20%);\\n  }\\n  .hero__title {\\n    font-size: 3rem;\\n  }\\n  .hero__subtitle,\\n  .hero__description {\\n    font-size: 1.3rem;\\n  }\\n\\n  .feature {\\n    padding: 4rem;\\n  }\\n\\n  .feature__title {\\n    font-size: 35px;\\n  }\\n\\n  .feature__sub__title {\\n    font-size: 20px;\\n  }\\n  .feature__2__poster__container {\\n    max-width: 26em;\\n    height: 85px;\\n  }\\n  .poster__container {\\n    width: 15%;\\n  }\\n  .download__gif__container {\\n    width: 3rem;\\n    height: 3rem;\\n  }\\n\\n  .poster__details > h4 {\\n    font-size: 18px;\\n  }\\n  .poster__details > h6 {\\n    font-size: 14px;\\n  }\\n  .FAQ__title {\\n    font-size: 20px;\\n  }\\n  .FAQ__heading {\\n    font-size: 38px;\\n    font-weight: 500;\\n    letter-spacing: 1px;\\n  }\\n  .FAQ__list {\\n    padding: 1rem 5rem;\\n  }\\n  .FAQ__get__started__email {\\n    width: 75%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    transform: translateX(15%);\\n  }\\n}\\n\\n@media (min-width: 1024px) {\\n  .navbar {\\n    padding: 2% 5%;\\n  }\\n\\n  .navbar__brand {\\n    width: 150px;\\n  }\\n\\n  .signin__button {\\n    padding: 10px 20px;\\n    font-size: 18px;\\n  }\\n  .dropdown__container {\\n    padding: 10px 5px;\\n  }\\n\\n  .navbar__nav__items {\\n    gap: 30px;\\n  }\\n\\n  .hero__card {\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n  }\\n\\n  .form__container {\\n    width: 50%;\\n  }\\n  .email__form__container {\\n    flex-direction: row;\\n    align-items: center;\\n    gap: 1px;\\n  }\\n  .primary__button {\\n    height: 50px;\\n  }\\n\\n  .feature {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    gap: 20px;\\n  }\\n\\n  .feature__details {\\n    text-align: left;\\n    padding: 0 6rem;\\n  }\\n\\n  .feature__title {\\n    font-size: 50px;\\n  }\\n\\n  .feature__sub__title {\\n    font-size: 25px;\\n  }\\n\\n  .feature__image__container {\\n    max-width: 500px;\\n  }\\n\\n  .feature:nth-child(even) {\\n    flex-direction: row-reverse;\\n  }\\n\\n  .feature__2__poster__container {\\n    max-width: 20em;\\n    height: 100px;\\n    padding: 1rem;\\n  }\\n  .poster__container {\\n    width: 20%;\\n  }\\n  .FAQ__list {\\n    padding: 1rem 25rem;\\n  }\\n  .FAQ__get__started__email {\\n    transform: translateX(16%);\\n  }\\n  footer {\\n    padding: 2rem 20rem;\\n    justify-content: flex-start;\\n    text-align: left;\\n    align-items: flex-start;\\n  }\\n\\n  .footer__row__2 {\\n    justify-content: space-between;\\n    align-items: flex-start;\\n    flex-wrap: nowrap;\\n  }\\n\\n  .footer__row__1,\\n  .footer__row__3,\\n  .footer__row__4 {\\n    align-self: flex-start;\\n  }\\n}\\n\\n@media (min-width: 1254px) {\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst accordian = document.getElementsByClassName('FAQ__title');\n\nfor (let i = 0; i < accordian.length; i += 1) {\n  accordian[i].addEventListener('click', function toggleAccordian() {\n    if (this.childNodes[1].classList.contains('fa-plus')) {\n      this.childNodes[1].classList.remove('fa-plus');\n      this.childNodes[1].classList.add('fa-times');\n    } else {\n      this.childNodes[1].classList.remove('fa-times');\n      this.childNodes[1].classList.add('fa-plus');\n    }\n\n    const content = this.nextElementSibling;\n    if (content.style.maxHeight) {\n      content.style.maxHeight = null;\n    } else {\n      content.style.maxHeight = `${content.scrollHeight}px`;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://webpack/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;