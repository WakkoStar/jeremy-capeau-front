(function() {
var exports = {};
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 9873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhotoPage; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _styles_PhotoPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3194);
/* harmony import */ var _styles_PhotoPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_PhotoPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_mocks_placeholder_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3670);
/* harmony import */ var _utils_dataFetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9331);








function PhotoPage({
  photos
}) {
  const PhotoPart = ({
    src,
    link,
    text = ''
  }) => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_PhotoPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().PhotoPartContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: link,
        passHref: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: src,
          alt: text
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: text
      })]
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
      className: (_styles_PhotoPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().main),
      children: photos && photos.map(({
        slug,
        id,
        categorie,
        miniature
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PhotoPart, {
        src: `${_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_6__/* .BASE_URL */ ._}${miniature.url}`,
        link: '/photographe/' + id,
        text: categorie
      }, id))
    })
  });
}
async function getStaticProps(context) {
  const photos = await (0,_utils_dataFetcher__WEBPACK_IMPORTED_MODULE_6__/* .fetchDataFromAPI */ .B)('/photos', []);
  return {
    props: {
      photos
    }
  };
}

/***/ }),

/***/ 3670:
/***/ (function() {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/mocks/placeholder.d830153852527d9f976066a69e6f7d5e.jpg","height":1440,"width":2560,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAADz/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAAFf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAB//xAAaEAACAgMAAAAAAAAAAAAAAAACBAABAyFh/9oACAEBAAE/ABdXIiC0cfNz/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAkv/aAAgBAgEBPwCBqRbvp3//xAAcEQABAwUAAAAAAAAAAAAAAAABAAIDERITk9H/2gAIAQMBAT8AyGpFketvF//Z"});

/***/ }),

/***/ 3194:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "PhotoPage_main__mN6-z",
	"PhotoPartContainer": "PhotoPage_PhotoPartContainer__LTbKl"
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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,968], function() { return __webpack_exec__(9873); });
module.exports = __webpack_exports__;

})();