(function() {
var exports = {};
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 5022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AproposPage; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
/* harmony import */ var _styles_AproposPage_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1552);
/* harmony import */ var _styles_AproposPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AproposPage_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_mocks_placeholder_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3670);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _utils_dataFetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9331);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function AproposPage({
  photo,
  description
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
      className: (_styles_AproposPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_AproposPage_module_scss__WEBPACK_IMPORTED_MODULE_4___default().TitleContainer),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: `${_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_5__/* .BASE_URL */ ._}${photo.url}`,
          alt: photo.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          children: "\xE0 propos"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: description
      })]
    })
  });
}
async function getStaticProps(context) {
  const initialState = {
    photo: {
      url: '',
      name: ''
    },
    description: ''
  };
  const aboutMe = await (0,_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_5__/* .fetchDataFromAPI */ .B)('/a-propos', initialState);
  return {
    props: _objectSpread({}, aboutMe)
  };
}

/***/ }),

/***/ 3670:
/***/ (function() {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/mocks/placeholder.d830153852527d9f976066a69e6f7d5e.jpg","height":1440,"width":2560,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAADz/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAAFf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAB//xAAaEAACAgMAAAAAAAAAAAAAAAACBAABAyFh/9oACAEBAAE/ABdXIiC0cfNz/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAkv/aAAgBAgEBPwCBqRbvp3//xAAcEQABAwUAAAAAAAAAAAAAAAABAAIDERITk9H/2gAIAQMBAT8AyGpFketvF//Z"});

/***/ }),

/***/ 1552:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "AproposPage_main__1euQH",
	"TitleContainer": "AproposPage_TitleContainer__2UV41"
};


/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,968], function() { return __webpack_exec__(5022); });
module.exports = __webpack_exports__;

})();