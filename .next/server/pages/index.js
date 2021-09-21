(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Sponsor.module.scss
var Sponsor_module = __webpack_require__(5274);
var Sponsor_module_default = /*#__PURE__*/__webpack_require__.n(Sponsor_module);
;// CONCATENATED MODULE: ./components/Sponsor.js




const IMAGE_SIZE = '150 vw';
function Sponsor({
  src,
  title,
  description
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Sponsor_module_default()).sponsorContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: src,
      alt: title,
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      loader: () => src
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: description
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/Carousel.module.scss
var Carousel_module = __webpack_require__(7072);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
;// CONCATENATED MODULE: ./components/Carousel.js



function Carousel({
  imageUrls
}) {
  const {
    0: index,
    1: setIndex
  } = (0,external_react_.useState)(0);
  const {
    0: style,
    1: setStyle
  } = (0,external_react_.useState)('carouselContainer');
  (0,external_react_.useEffect)(() => {
    const timeout = setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setIndex(index == imageUrls.length - 1 ? 0 : index + 1);
        }, 400);
        setStyle('carouselContainer');
      }, 10000);
      setStyle('carouselContainerSelected');
    }, 400);
    return () => clearTimeout(timeout);
  }, [index, imageUrls.length]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Carousel_module_default())[style],
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: imageUrls[index]
    })
  });
}
// EXTERNAL MODULE: ./components/Layout.js + 10 modules
var Layout = __webpack_require__(2139);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(2870);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./styles/Product.module.scss
var Product_module = __webpack_require__(9338);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
;// CONCATENATED MODULE: ./components/Product.js





function Product({
  data,
  src,
  title,
  id
}) {
  const isNew = data.nouveau;
  const stock = data.stock;
  const productTypes = data.type_de_produit;

  const setTag = () => {
    if (!productTypes.length) {
      return "Indisponible";
    }

    if (productTypes.find(({
      promotion
    }) => promotion && promotion.actif == true)) {
      return "Promotion";
    }

    if (isNew) {
      return "Nouveau";
    }

    if (stock < 2) {
      return "Peu de stock";
    }

    return "";
  };

  const setPrice = () => {
    if (!productTypes.length) {
      return {
        value: 0
      };
    }

    let minPrice = Number.MAX_VALUE;
    let selectedProduct = null;
    productTypes.forEach(element => {
      if (minPrice > element.prix) {
        minPrice = element.prix;
        selectedProduct = element;
      }
    });

    if (selectedProduct.promotion && selectedProduct.promotion.actif) {
      return {
        value: selectedProduct.prix,
        promotion: selectedProduct.promotion.prix
      };
    }

    return {
      value: selectedProduct.prix
    };
  };

  const tag = setTag();
  const priceObject = setPrice(); //TODO change url

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/boutique/${id}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Product_module_default()).productContainer,
      children: [tag !== "" && /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: tag
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: src,
        loader: () => src,
        width: "170%",
        height: "250%",
        objectFit: "cover",
        alt: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Product_module_default()).titleText,
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: (Product_module_default()).priceDetailsText,
        children: productTypes.length > 1 ? "à partir de" : "au prix de"
      }), priceObject.promotion ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Product_module_default()).promotionContainer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Product_module_default()).priceTextPromotion,
          children: [priceObject.promotion, " \u20AC"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (Product_module_default()).priceTextOutdated,
          children: [priceObject.value, " \u20AC"]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: (Product_module_default()).priceText,
        children: [priceObject.value, " \u20AC"]
      })]
    })
  });
}
// EXTERNAL MODULE: ./utils/dataFetcher.js
var dataFetcher = __webpack_require__(9331);
;// CONCATENATED MODULE: ./pages/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Home({
  caroussel_texts,
  carrousel,
  brochure,
  photos,
  produits,
  sponsors,
  codePromo
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Home_module_default()).main,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Home_module_default()).carouselContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(Carousel, {
          imageUrls: carrousel.map(({
            url
          }) => `${dataFetcher/* BASE_URL */._}${url}`)
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).textContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Home_module_default()).carouselTextContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: caroussel_texts.map(({
              categorie,
              id
            }) => /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: categorie
            }, id))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `${dataFetcher/* BASE_URL */._}${(brochure === null || brochure === void 0 ? void 0 : brochure.url) || ""}`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Home_module_default()).brochureContainer,
            children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "T\xE9l\xE9charger la brochure ici"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).productsContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Boutique Archiv's"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Les nouveaut\xE9s"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Home_module_default()).productsWrapper,
          children: produits.map(({
            id,
            nouveau,
            stock,
            apercu,
            type_de_produit,
            nom
          }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
            id: id,
            data: {
              nouveau,
              stock,
              type_de_produit
            },
            title: nom,
            src: `${dataFetcher/* BASE_URL */._}${apercu.formats.medium.url}`
          }, id))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Home_module_default()).imagesContainer,
        children: photos.map(({
          url,
          id,
          name
        }) => /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `${dataFetcher/* BASE_URL */._}${url}`,
          alt: name
        }, id))
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).sponsorContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Ils m'ont fait confiance"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Home_module_default()).sponsorWrapper,
          children: sponsors.map(({
            id,
            titre,
            description,
            logo
          }) => /*#__PURE__*/jsx_runtime_.jsx(Sponsor, {
            title: titre,
            description: description,
            src: `${dataFetcher/* BASE_URL */._}${logo.url}`
          }, id))
        })]
      })]
    })
  });
}
async function getStaticProps(context) {
  const initialState = {
    caroussel_texts: [],
    carrousel: [],
    brochure: {
      url: ""
    },
    photos: [],
    produits: [],
    sponsors: []
  };
  const data = await (0,dataFetcher/* fetchDataFromAPI */.B)("/home-page", initialState);
  return {
    props: _objectSpread({}, data) // will be passed to the page component as props

  };
}

/***/ }),

/***/ 7072:
/***/ (function(module) {

// Exports
module.exports = {
	"carouselContainer": "Carousel_carouselContainer__15Dsc",
	"carouselContainerSelected": "Carousel_carouselContainerSelected__14xCk"
};


/***/ }),

/***/ 2870:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__3sao-",
	"main": "Home_main__1Z1aG",
	"textContainer": "Home_textContainer__1zCkb",
	"carouselContainer": "Home_carouselContainer__FC1Zm",
	"carouselTextContainer": "Home_carouselTextContainer__1Y7i2",
	"brochureContainer": "Home_brochureContainer__W59Zb",
	"productsContainer": "Home_productsContainer__1bHQE",
	"productsWrapper": "Home_productsWrapper__2XrNh",
	"imagesContainer": "Home_imagesContainer__3Vnlb",
	"sponsorContainer": "Home_sponsorContainer__234gY",
	"sponsorWrapper": "Home_sponsorWrapper__Q-l9F"
};


/***/ }),

/***/ 9338:
/***/ (function(module) {

// Exports
module.exports = {
	"productContainer": "Product_productContainer__3GRb9",
	"titleText": "Product_titleText__3fkNx",
	"priceDetailsText": "Product_priceDetailsText__31lF4",
	"priceText": "Product_priceText__oep1O",
	"priceTextOutdated": "Product_priceTextOutdated__32mAy",
	"priceTextPromotion": "Product_priceTextPromotion__kHKy8",
	"promotionContainer": "Product_promotionContainer__1d11B"
};


/***/ }),

/***/ 5274:
/***/ (function(module) {

// Exports
module.exports = {
	"sponsorContainer": "Sponsor_sponsorContainer__3hHIT"
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
var __webpack_exports__ = __webpack_require__.X(0, [597,61,968], function() { return __webpack_exec__(3236); });
module.exports = __webpack_exports__;

})();