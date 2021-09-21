(function() {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 5061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VideoPage; },
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
// EXTERNAL MODULE: ./styles/VideoPage.module.scss
var VideoPage_module = __webpack_require__(9799);
var VideoPage_module_default = /*#__PURE__*/__webpack_require__.n(VideoPage_module);
;// CONCATENATED MODULE: ./assets/logos/play.png
/* harmony default export */ var play = ({"src":"/_next/static/image/assets/logos/play.a57de3de859d7de3f21ee55b5abc1b03.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAM0lEQVR42mOAgX/MQALOEf3HCiRZ4DL/ov9d/2eDpPRf0r+qf63/5vxjwxDA1IJpKIa1AG9zIvktY6y1AAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./utils/dataFetcher.js
var dataFetcher = __webpack_require__(9331);
;// CONCATENATED MODULE: ./pages/videaste/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function VideoPage({
  titre_partie_principale,
  titre_partie_secondaire,
  video_partie_principale,
  videos_partie_secondaire
}) {
  const VideoPart = ({
    src,
    link,
    text = ''
  }) => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (VideoPage_module_default()).videoPart,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: link,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          rel: "noreferrer",
          target: "_blank",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (VideoPage_module_default()).linkPreview,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (VideoPage_module_default()).floatingDiv,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `${dataFetcher/* BASE_URL */._}/uploads/play_b0f166a220.png`,
                alt: "play"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: src
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: text
      })]
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (VideoPage_module_default()).main,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (VideoPage_module_default()).mainPartContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: titre_partie_principale
        }), /*#__PURE__*/jsx_runtime_.jsx(VideoPart, {
          src: `${dataFetcher/* BASE_URL */._}${video_partie_principale.miniature.url}`,
          link: video_partie_principale.video_link,
          text: video_partie_principale.description
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (VideoPage_module_default()).secondPartContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: titre_partie_secondaire
        }), videos_partie_secondaire.map(({
          miniature,
          description,
          id,
          video_link
        }) => /*#__PURE__*/jsx_runtime_.jsx(VideoPart, {
          src: `${dataFetcher/* BASE_URL */._}${miniature.url}`,
          text: description,
          link: video_link
        }, id))]
      })]
    })
  });
}
async function getStaticProps(context) {
  const initialState = {
    id: 0,
    titre_partie_principale: '',
    titre_partie_secondaire: '',
    video_partie_principale: {
      id: 0,
      video_link: '',
      description: '',
      miniature: {
        name: '',
        url: ''
      }
    },
    videos_partie_secondaire: []
  };
  const videoPage = await (0,dataFetcher/* fetchDataFromAPI */.B)('/page-videos', initialState);
  return {
    props: _objectSpread({}, videoPage)
  };
}

/***/ }),

/***/ 9799:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "VideoPage_main__1cRZ8",
	"formRow": "VideoPage_formRow__2Q23V",
	"secondButton": "VideoPage_secondButton__196xx",
	"categoryContainer": "VideoPage_categoryContainer__2i7FB",
	"linkPreview": "VideoPage_linkPreview__2UQ2V",
	"floatingDiv": "VideoPage_floatingDiv__2rdZh",
	"videoPart": "VideoPage_videoPart__3GqmF",
	"mainPartContainer": "VideoPage_mainPartContainer__3HMT0",
	"secondPartContainer": "VideoPage_secondPartContainer__I2Odd"
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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,968], function() { return __webpack_exec__(5061); });
module.exports = __webpack_exports__;

})();