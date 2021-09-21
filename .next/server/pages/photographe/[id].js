(function() {
var exports = {};
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 6324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PhotoElement; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Layout.js + 10 modules
var Layout = __webpack_require__(2139);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/PhotoElement.module.scss
var PhotoElement_module = __webpack_require__(8677);
var PhotoElement_module_default = /*#__PURE__*/__webpack_require__.n(PhotoElement_module);
// EXTERNAL MODULE: ./assets/mocks/placeholder.jpg
var placeholder = __webpack_require__(3670);
// EXTERNAL MODULE: ./utils/dataFetcher.js
var dataFetcher = __webpack_require__(9331);
;// CONCATENATED MODULE: external "react-scroll-horizontal"
var external_react_scroll_horizontal_namespaceObject = require("react-scroll-horizontal");;
var external_react_scroll_horizontal_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_horizontal_namespaceObject);
;// CONCATENATED MODULE: ./pages/photographe/[id].js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function PhotoElement({
  images
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (PhotoElement_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (PhotoElement_module_default()).PhotoElementContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_horizontal_default()), {
          reverseScroll: true,
          className: (PhotoElement_module_default()).scrollHorizontal,
          children: images.map(({
            url,
            id,
            name
          }) => /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `${dataFetcher/* BASE_URL */._}${url}`,
            alt: name
          }, id))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (PhotoElement_module_default()).PhotoElementContainerMobile,
        children: images.map(({
          url,
          id,
          name
        }) => /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${dataFetcher/* BASE_URL */._}${url}`,
          alt: name
        }, id))
      })]
    })
  });
}
async function getStaticPaths() {
  const photos = await (0,dataFetcher/* fetchDataFromAPI */.B)('/photos', []);
  return {
    paths: photos.map(({
      id
    }) => ({
      params: {
        id: id.toString()
      }
    })),
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  const initialState = {
    images: []
  };
  const gallery = await (0,dataFetcher/* fetchDataFromAPI */.B)(`/photos/${params.id}`, initialState);
  return {
    props: _objectSpread({}, gallery),
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}

/***/ }),

/***/ 3670:
/***/ (function() {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/mocks/placeholder.d830153852527d9f976066a69e6f7d5e.jpg","height":1440,"width":2560,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAADz/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAAFf/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAB//xAAaEAACAgMAAAAAAAAAAAAAAAACBAABAyFh/9oACAEBAAE/ABdXIiC0cfNz/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAkv/aAAgBAgEBPwCBqRbvp3//xAAcEQABAwUAAAAAAAAAAAAAAAABAAIDERITk9H/2gAIAQMBAT8AyGpFketvF//Z"});

/***/ }),

/***/ 8677:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "PhotoElement_main__2ir1v",
	"PhotoElementContainerMobile": "PhotoElement_PhotoElementContainerMobile__3Pg6D",
	"PhotoElementContainer": "PhotoElement_PhotoElementContainer__3xX9G"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,968], function() { return __webpack_exec__(6324); });
module.exports = __webpack_exports__;

})();