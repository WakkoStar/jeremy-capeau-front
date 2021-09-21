exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 2139:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./assets/logos/account.png
/* harmony default export */ var account = ({"src":"/_next/static/image/assets/logos/account.c52256e3e95698cca5e2b33efb4a3b49.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASklEQVR42m3NIQ6AMBREwQkkWM4E50Bje4c66hDQBCwH5Se1XTHJU6u/UZZDLdgVxd5qwOx2ha1MNo83nIDqs1jDCiSn4ghT5/AHxHQMQz3c0WsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/logos/panier.png
/* harmony default export */ var panier = ({"src":"/_next/static/image/assets/logos/panier.0771131279921c67b174f742f8ba771e.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42lXMMQqCYABA4c+GDhDU1A1agyDoBAkNQUtjxwgET6CDICLu4uItRPFS/ouD79sfH1ebYqNCFZRye0j8sfPTAge9t5fOGbgZJDJfEXDRSIN63d9NYPYATmJR8HRkAZwbEI+PZ4CgAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/logos/croix.png
/* harmony default export */ var croix = ({"src":"/_next/static/image/assets/logos/croix.6841a50dcbccdf46a04f80c039793ffc.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAANklEQVR42mNgYGQAASYgBAEwT5RBEsyRBLKgjP0MMkC4HywBUgrk7AZCGRAPQwBDC6ah6NYCABqKB/kXtX60AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/logos/logo.png
/* harmony default export */ var logo = ({"src":"/_next/static/image/assets/logos/logo.4a17dbe7ff675799af13ddc2563bde90.png","height":100,"width":978,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGPU1JI3ZmBgEAZiRiB+BMT/gVgciP8B8Q8AOIMEqfR7WcUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/logos/menu.png
/* harmony default export */ var menu = ({"src":"/_next/static/image/assets/logos/menu.d00ba6275b417bfc997910d78dee418f.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPElEQVR42mWNsQkAIBADDwvBMQTdyE74Qb62+LFNn1yVQBJcjclmic2UY5AUTxQpR+cQXBEcugVWsVE7/Tl5DDkbN2EsAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(9471);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.js











function Navbar() {
  const {
    0: isMenuOpened,
    1: setIsMenuOpened
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Navbar_module_default()).container,
    onMouseLeave: () => setIsMenuOpened(false),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Navbar_module_default()).navContainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Navbar_module_default()).companyNameContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            alt: "logo-jeremycapeau",
            src: logo
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        alt: "navigation",
        src: !isMenuOpened ? menu : croix,
        onClick: () => setIsMenuOpened(!isMenuOpened)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: isMenuOpened ? (Navbar_module_default()).linksSelected : (Navbar_module_default()).links,
      onClick: () => setIsMenuOpened(false),
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/videaste",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "vid\xE9aste"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/photographe",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "photographe"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/contact",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "contact"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/apropos",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\xE0 propos"
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./styles/Layout.module.scss
var Layout_module = __webpack_require__(9048);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./assets/logos/instagram.png
/* harmony default export */ var instagram = ({"src":"/_next/static/image/assets/logos/instagram.65c51f1da0a8ee8d372c893d998fc398.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAWElEQVR42j3NsQmEQBRF0dOFwe9k2cjkd/BTw4GxAMFYbGNtYHt0EuVkDx4XQtOtFhOES0mzzd9EUzjt0mahS4ePr91sfYfhlPpzOQZKI/yUHMol3uzQBDdf9hQ4igMNQwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/logos/facebook.png
/* harmony default export */ var facebook = ({"src":"/_next/static/image/assets/logos/facebook.5ca33290e5c7c9523962ac9568249281.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVklEQVR42mNg+MPwHwr/AfEfBiDxl2EKQxjDMzDrP0jgGpCMZfgAFvgHEsgHCrQzfIdqAoq6AkkzhjcILceA5Guwgf8hWnYBBW5BTICo2AMk70BV/AEAJj4510r41gUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/logos/mail.png
/* harmony default export */ var logos_mail = ({"src":"/_next/static/image/assets/logos/mail.f6041d8457b2195bbc71c24b3d4ca7b3.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUklEQVR42mXNsQ1AAABE0TeDQmEBLKRRikKiEBNoVGoRNrSF692rfnX+azx2V+yelNFrVcbqTZkMOkd0hpRZjzboUxabQhWFLaV2O11xutW/0w8btxKzbXs/RAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/logos/tel.png
/* harmony default export */ var logos_tel = ({"src":"/_next/static/image/assets/logos/tel.10667b945cfb00353294a805b284ff7a.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAR0lEQVR42kXIIQ6AIAAAwFOLczNQpPEe/6X/oDESnenjTMyLB4fAL3hUM8Ou6CImgOzGypA0G6IJFpyaS1eFUUlWvA5GsQt8jHIKgsGAhkEAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./utils/dataFetcher.js
var dataFetcher = __webpack_require__(9331);
;// CONCATENATED MODULE: ./components/Layout.js













function Layout({
  children
}) {
  const {
    0: footerLinks,
    1: setFooterLinks
  } = (0,external_react_.useState)([]);
  const {
    0: instagramLink,
    1: setInstagramLink
  } = (0,external_react_.useState)("");
  const {
    0: facebookLink,
    1: setFacebookLink
  } = (0,external_react_.useState)("");
  const {
    0: mail,
    1: setMail
  } = (0,external_react_.useState)("");
  const {
    0: newsletterMail,
    1: setNewsletterMail
  } = (0,external_react_.useState)("");
  const {
    0: tel,
    1: setTel
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    const fetchData = async () => {
      const data = await (0,dataFetcher/* fetchDataFromAPI */.B)("/a-propos", {});
      setFooterLinks(data.footer_liens);
      setInstagramLink(data.instagram_link);
      setFacebookLink(data.facebook_link);
      setMail(data.mail_personnel);
      setTel(data.tel_personel);
    };

    fetchData();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "J\xE9r\xE9my Capeau - photographe/vid\xE9aste"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Site, boutique, portfolio, book de J\xE9r\xE9my Capeau. Photographe, vid\xE9aste et monteur dans le Vaucluse, aux Taillades, \xE0 Cavaillon, \xE0 Avignon"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), children, /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: (Layout_module_default()).footer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).coordContainer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: logos_mail
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: mail
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: logos_tel
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: tel
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).brandContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: instagramLink || "",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: instagram
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: facebookLink || "",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: facebook
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_module_default()).endContainer,
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "@2021 J\xE9r\xE9my Capeau"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 9331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ BASE_URL; },
/* harmony export */   "B": function() { return /* binding */ fetchDataFromAPI; }
/* harmony export */ });
const BASE_URL = "https://jeremy-capeau-back-j354g.ondigitalocean.app";
const fetchDataFromAPI = async (apiEndpoint, defaultObject, config = {}) => {
  const res = await fetch(`${BASE_URL}${apiEndpoint}`, config);
  let data;

  try {
    data = await res.json();
  } catch (error) {
    console.log("Unable to fetch data for ", apiEndpoint);
  }

  if (!data) {
    return defaultObject;
  } else {
    return data;
  }
};

/***/ }),

/***/ 9048:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__3Msas",
	"main": "Layout_main__18HQ4",
	"footer": "Layout_footer__2HGdY",
	"brandContainer": "Layout_brandContainer__12iM7",
	"linksContainer": "Layout_linksContainer__2eI6T",
	"newsletterContainer": "Layout_newsletterContainer__2EDxy",
	"coordContainer": "Layout_coordContainer__qBUiw",
	"spacer": "Layout_spacer__1ik0s",
	"endContainer": "Layout_endContainer__1s4up"
};


/***/ }),

/***/ 9471:
/***/ (function(module) {

// Exports
module.exports = {
	"main": "Navbar_main__3GZq4",
	"formRow": "Navbar_formRow__ZVX88",
	"secondButton": "Navbar_secondButton__AESRL",
	"categoryContainer": "Navbar_categoryContainer__BHioJ",
	"container": "Navbar_container__1nJDD",
	"badgeCount": "Navbar_badgeCount__2u5xG",
	"navContainer": "Navbar_navContainer__1CM7I",
	"companyNameContainer": "Navbar_companyNameContainer__2ks1W",
	"links": "Navbar_links__FUcUY",
	"linksSelected": "Navbar_linksSelected__1DR4O"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;