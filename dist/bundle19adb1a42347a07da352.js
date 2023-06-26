/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/avro/arvo-bold-webfont.woff2 */ "./src/asset/font/avro/arvo-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/avro/arvo-bold-webfont.woff */ "./src/asset/font/avro/arvo-bold-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/lora/lora-variablefont_wght-webfont.woff2 */ "./src/asset/font/lora/lora-variablefont_wght-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/lora/lora-variablefont_wght-webfont.woff */ "./src/asset/font/lora/lora-variablefont_wght-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css reset  */

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* font  */

@font-face {
  font-family: "arvobold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "loraregular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___})
      format("woff2"),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff");
  font-weight: normal;
  font-style: normal;
}

/* general  */

:root {
  --gold-color: #d4af37;
  --text-color: #00000070;
  --red-color: #a4243b;
}

:root {
  --shadow-color: 227deg 19% 34%;
  --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  overflow-y: scroll;
}

html {
  scroll-behavior: smooth;
}
.heroImg {
  width: 50%;
  margin-top: 40px;
}
.content {
  width: 50%;
}

.contactInfo,
.reservationInfo,
.aboutUs {
  display: flex;
  align-items: flex-start;
}

.contactContainer,
.reservationContainer,
.aboutContainer {
  display: grid;
  grid-template-columns: minmax(300px, 400px) minmax(300px, 1fr);
  grid-auto-rows: auto;
}

@media only screen and (max-width: 768px) {
  .heroWrapper {
    flex-direction: column;
  }

  .content {
    width: 100%;
  }

  .heroImg {
    width: 100%;
    margin-top: 0px;
  }

  .contactContainer,
  .reservationContainer,
  .aboutContainer {
    grid-template-columns: minmax(300px, 1fr);
    justify-items: center;
  }

  .contactInfo,
  .reservationInfo,
  .aboutUs {
    align-items: center;
    grid-row: 2;
    grid-column: 1;
  }

  .contactImg,
  .reservationImg,
  .aboutImg {
    align-items: center;
    grid-row: 1;
    grid-column: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA,UAAU;;AAEV;EACE,uBAAuB;EACvB;0DACgE;EAChE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B;;0DAE6E;EAC7E,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,aAAa;;AAEb;EACE,qBAAqB;EACrB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B;;wDAEsD;EACtD;;;0DAGwD;EACxD;;;;;;;2DAOyD;AAC3D;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;;EAGE,aAAa;EACb,8DAA8D;EAC9D,oBAAoB;AACtB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;;;IAGE,yCAAyC;IACzC,qBAAqB;EACvB;;EAEA;;;IAGE,mBAAmB;IACnB,WAAW;IACX,cAAc;EAChB;;EAEA;;;IAGE,mBAAmB;IACnB,WAAW;IACX,cAAc;EAChB;AACF","sourcesContent":["/* css reset  */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* font  */\n\n@font-face {\n  font-family: \"arvobold\";\n  src: url(\"./asset/font/avro/arvo-bold-webfont.woff2\") format(\"woff2\"),\n    url(\"./asset/font/avro/arvo-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"loraregular\";\n  src: url(\"./asset/font/lora/lora-variablefont_wght-webfont.woff2\")\n      format(\"woff2\"),\n    url(\"./asset/font/lora/lora-variablefont_wght-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* general  */\n\n:root {\n  --gold-color: #d4af37;\n  --text-color: #00000070;\n  --red-color: #a4243b;\n}\n\n:root {\n  --shadow-color: 227deg 19% 34%;\n  --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),\n    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),\n    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);\n  --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),\n    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),\n    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),\n    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);\n  --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),\n    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),\n    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),\n    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),\n    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),\n    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),\n    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),\n    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n.heroImg {\n  width: 50%;\n  margin-top: 40px;\n}\n.content {\n  width: 50%;\n}\n\n.contactInfo,\n.reservationInfo,\n.aboutUs {\n  display: flex;\n  align-items: flex-start;\n}\n\n.contactContainer,\n.reservationContainer,\n.aboutContainer {\n  display: grid;\n  grid-template-columns: minmax(300px, 400px) minmax(300px, 1fr);\n  grid-auto-rows: auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .heroWrapper {\n    flex-direction: column;\n  }\n\n  .content {\n    width: 100%;\n  }\n\n  .heroImg {\n    width: 100%;\n    margin-top: 0px;\n  }\n\n  .contactContainer,\n  .reservationContainer,\n  .aboutContainer {\n    grid-template-columns: minmax(300px, 1fr);\n    justify-items: center;\n  }\n\n  .contactInfo,\n  .reservationInfo,\n  .aboutUs {\n    align-items: center;\n    grid-row: 2;\n    grid-column: 1;\n  }\n\n  .contactImg,\n  .reservationImg,\n  .aboutImg {\n    align-items: center;\n    grid-row: 1;\n    grid-column: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _asset_img_cook_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/img/cook.jpg */ "./src/asset/img/cook.jpg");
/* harmony import */ var _asset_img_ready_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/img/ready.jpg */ "./src/asset/img/ready.jpg");
/* harmony import */ var _asset_img_serve_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/img/serve.jpg */ "./src/asset/img/serve.jpg");




function loadAbout() {
  let newElm = (type) => document.createElement(type);
  let aboutContainer = newElm("div");

  aboutContainer.style.width = "100%";
  aboutContainer.style.maxWidth = "1200px";
  aboutContainer.style.fontFamily = "loraregular";
  aboutContainer.classList.add("aboutContainer");
  aboutContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  aboutContainer.style.marginBottom = "30px";
  // aboutContainer.style.display = "grid";
  aboutContainer.style.gap = "clamp(40px, 5vw, 100px)";
  // aboutContainer.style.gridTemplateColumns =
  //   "minmax(300px, 1fr) minmax(300px, 1fr)";
  // aboutContainer.style.alignItems = "center";

  let aboutUs = newElm("div");
  aboutContainer.appendChild(aboutUs);
  // aboutUs.style.display = "flex";
  aboutUs.style.flexDirection = "column";
  aboutUs.style.gap = "15px";
  // aboutUs.style.alignItems = "flex-end";
  aboutUs.classList.add("aboutUs");

  let heading = newElm("h2");
  aboutUs.appendChild(heading);
  heading.textContent = "About Us";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "clamp(2rem, 2vw, 4rem)";

  let aboutText = newElm("div");
  aboutUs.appendChild(aboutText);

  aboutText.style.width = "clamp(300px, 100%, 400px)";
  aboutText.style.display = "flex";
  aboutText.style.flexDirection = "column";
  aboutText.style.gap = "15px";
  aboutText.style.color = "var(--text-color)";

  let createPara = [
    {
      text: "We are dedicated to serving the finest steaks and seafood in an upscale setting. At The Prime Cut, we use only the highest quality ingredients and time-honored cooking techniques to create a memorable dining experience.",
    },
    {
      text: "Our beef is hand-selected and dry-aged for unmatched flavor and tenderness. We offer premium cuts like filet mignon, New York strip, ribeye and porterhouse, as well as fresh seafood.",
    },
    {
      text: "With a focus on personalized service, an extensive wine list, and decadent side dishes, The Prime Cut aims to make every visit an occasion.",
    },
    {
      text: "Since 1985, we have strived to provide an unparalleled fine dining experience in a warm, sophisticated atmosphere. Our goal is simple: to be the landmark steakhouse in San Francisco. We invite you to join us for lunch, dinner or Sunday brunch.",
    },
  ];

  createPara.forEach((para) => {
    let paragraph = newElm("p");
    aboutText.appendChild(paragraph);
    paragraph.textContent = para.text;
  });

  let aboutImg = newElm("div");
  aboutContainer.appendChild(aboutImg);
  aboutImg.style.display = "flex";
  aboutImg.style.flexDirection = "column";
  aboutImg.style.gap = "15px";
  aboutImg.classList.add("aboutImg");

  let cook = newElm("img");
  aboutImg.appendChild(cook);
  cook.src = _asset_img_cook_jpg__WEBPACK_IMPORTED_MODULE_0__;
  cook.style.width = "clamp(300px, 30vw, 380px)";
  cook.style.borderRadius = "20px";
  cook.style.boxShadow = "var(--shadow-elevation-medium)";

  let ready = newElm("img");
  aboutImg.appendChild(ready);
  ready.src = _asset_img_ready_jpg__WEBPACK_IMPORTED_MODULE_1__;
  ready.style.width = "clamp(300px, 30vw, 380px)";
  ready.style.borderRadius = "20px";
  ready.style.boxShadow = "var(--shadow-elevation-medium)";

  let serve = newElm("img");
  aboutImg.appendChild(serve);
  serve.src = _asset_img_serve_jpg__WEBPACK_IMPORTED_MODULE_2__;
  serve.style.width = "clamp(300px, 30vw, 380px)";
  serve.style.borderRadius = "20px";
  serve.style.boxShadow = "var(--shadow-elevation-medium)";

  return aboutContainer;
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _asset_img_waiter_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/img/waiter.jpg */ "./src/asset/img/waiter.jpg");


function loadContact() {
  let newElm = (type) => document.createElement(type);
  let contactContainer = newElm("div");

  contactContainer.style.width = "100%";
  contactContainer.style.maxWidth = "1200px";
  contactContainer.style.fontFamily = "loraregular";
  contactContainer.classList.add("contactContainer");
  contactContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  contactContainer.style.marginBottom = "30px";
  contactContainer.style.gap = "clamp(40px, 5vw, 100px)";

  let contactInfo = newElm("div");
  contactContainer.appendChild(contactInfo);
  contactInfo.style.flexDirection = "column";
  contactInfo.style.gap = "25px";
  contactInfo.classList.add("contactInfo");

  let heading = newElm("h3");
  contactInfo.appendChild(heading);
  heading.textContent =
    "We value your feedback and questions. Please use the form below to contact us. We will get back to you as soon as possible.";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "1rem";
  heading.style.alignItems = "center";
  heading.style.maxWidth = "400px";

  createForm(contactInfo, newElm);

  let contactImg = newElm("div");
  contactContainer.appendChild(contactImg);
  contactImg.style.display = "flex";
  contactImg.style.flexDirection = "column";
  contactImg.style.gap = "15px";
  contactImg.classList.add("contactImg");

  let waiter = newElm("img");
  contactImg.appendChild(waiter);
  waiter.src = _asset_img_waiter_jpg__WEBPACK_IMPORTED_MODULE_0__;
  waiter.style.width = "clamp(370px, 40vw, 400px)";
  waiter.style.borderRadius = "20px";
  waiter.style.boxShadow = "var(--shadow-elevation-medium)";

  return contactContainer;
}

function createForm(contactInfo, newElm) {
  function commonStyle(input) {
    contactForm.appendChild(input);
    input.style.border = "none";
    input.style.height = "2.5rem";
    input.style.backgroundColor = "#f1f6f9";
    input.style.borderRadius = "10px";
    input.style.outline = "none";
    input.style.padding = "0 10px";
    input.style.marginBottom = "15px";
    input.addEventListener("focus", () => {
      input.style.border = "2px solid var(--red-color)";
    });
    input.addEventListener("blur", () => {
      input.style.border = "2px solid transparent";
    });
  }

  let contactForm = newElm("form");
  contactInfo.appendChild(contactForm);
  contactForm.style.width = "clamp(300px, 100%, 400px)";
  contactForm.style.display = "flex";
  contactForm.style.flexDirection = "column";
  contactForm.style.gap = "15px";
  contactForm.style.color = "var(--text-color)";

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let nameLabel = newElm("label");
  nameLabel.textContent = "Name*";
  contactForm.appendChild(nameLabel);
  nameLabel.style.lineHeight = 0;
  let name = newElm("input");
  name.type = "text";
  name.name = "name";
  name.placeholder = "Your name";
  commonStyle(name);

  let emailLabel = newElm("label");
  emailLabel.textContent = "Email*";
  contactForm.appendChild(emailLabel);
  emailLabel.style.lineHeight = 0;
  let email = newElm("input");
  email.type = "email";
  email.name = "email";
  email.placeholder = "Your email";
  commonStyle(email);

  let phoneLabel = newElm("label");
  phoneLabel.textContent = "Phone";
  contactForm.appendChild(phoneLabel);
  phoneLabel.style.lineHeight = 0;
  let phone = newElm("input");
  phone.type = "tel";
  phone.name = "phone";
  phone.placeholder = "Your phone number";
  commonStyle(phone);

  let messageLabel = newElm("label");
  messageLabel.textContent = "Message*";
  contactForm.appendChild(messageLabel);
  messageLabel.style.lineHeight = 0;
  let message = newElm("textarea");
  message.name = "message";
  message.placeholder = "Your message";
  message.rows = "4";
  message.cols = "50";
  message.style.resize = "none";
  commonStyle(message);
  message.style.height = "";

  let submit = newElm("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  contactForm.appendChild(submit);
  submit.style.width = "120px";
  submit.style.border = "none";
  submit.style.borderRadius = "10px";
  submit.style.backgroundColor = "var(--red-color)";
  submit.style.color = "#fff";
  submit.style.padding = "4px 0";
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _asset_img_bakedMushroomCaps_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/img/bakedMushroomCaps.jpeg */ "./src/asset/img/bakedMushroomCaps.jpeg");
/* harmony import */ var _asset_img_crispyCalamari_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/img/crispyCalamari.jpeg */ "./src/asset/img/crispyCalamari.jpeg");
/* harmony import */ var _asset_img_grilledShrimpSkewers_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/img/grilledShrimpSkewers.jpeg */ "./src/asset/img/grilledShrimpSkewers.jpeg");
/* harmony import */ var _asset_img_classicCaesarSalad_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/img/classicCaesarSalad.jpeg */ "./src/asset/img/classicCaesarSalad.jpeg");
/* harmony import */ var _asset_img_mixedGreensSalad_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/img/mixedGreensSalad.jpeg */ "./src/asset/img/mixedGreensSalad.jpeg");
/* harmony import */ var _asset_img_wedgeSalad_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/img/wedgeSalad.jpeg */ "./src/asset/img/wedgeSalad.jpeg");
/* harmony import */ var _asset_img_filetMignon_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/img/filetMignon.jpeg */ "./src/asset/img/filetMignon.jpeg");
/* harmony import */ var _asset_img_newYorkStrip_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset/img/newYorkStrip.jpeg */ "./src/asset/img/newYorkStrip.jpeg");
/* harmony import */ var _asset_img_ribeye_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/img/ribeye.jpeg */ "./src/asset/img/ribeye.jpeg");
/* harmony import */ var _asset_img_porterhouse_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset/img/porterhouse.jpeg */ "./src/asset/img/porterhouse.jpeg");
/* harmony import */ var _asset_img_surf_Turf_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset/img/surf_Turf.jpeg */ "./src/asset/img/surf_Turf.jpeg");
/* harmony import */ var _asset_img_grilledSalmon_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset/img/grilledSalmon.jpeg */ "./src/asset/img/grilledSalmon.jpeg");
/* harmony import */ var _asset_img_searedScallops_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset/img/searedScallops.jpeg */ "./src/asset/img/searedScallops.jpeg");
/* harmony import */ var _asset_img_blackenedMahiMahi_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./asset/img/blackenedMahiMahi.jpeg */ "./src/asset/img/blackenedMahiMahi.jpeg");
/* harmony import */ var _asset_img_newYorkCheescake_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./asset/img/newYorkCheescake.jpeg */ "./src/asset/img/newYorkCheescake.jpeg");
/* harmony import */ var _asset_img_chocolateLavaCake_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset/img/chocolateLavaCake.jpeg */ "./src/asset/img/chocolateLavaCake.jpeg");
/* harmony import */ var _asset_img_cremeBrulee_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./asset/img/cremeBrulee.jpeg */ "./src/asset/img/cremeBrulee.jpeg");


















function loadMenu() {
  let newElm = (type) => document.createElement(type);
  let menuContainer = newElm("div");

  menuContainer.style.width = "100%";
  menuContainer.style.maxWidth = "1200px";
  menuContainer.style.fontFamily = "loraregular";
  menuContainer.classList.add("menuContainer");
  menuContainer.style.marginTop = "clamp(20px, 2vw, 50px)";
  menuContainer.style.marginBottom = "30px";

  menuContainer.style.display = "flex";
  menuContainer.style.gap = "clamp(15px, 2vw, 50px)";
  menuContainer.style.flexDirection = "column";

  menuContainer.style.position = "relative";

  let menuNav = newElm("div");
  menuContainer.appendChild(menuNav);
  menuNav.style.position = "fixed";
  // menuNav.style.top = "50px";
  menuNav.style.transform = "translateY(50px)";
  menuNav.style.display = "flex";

  menuNav.style.flexDirection = "column";
  menuNav.style.gap = "clamp(10px, 2vw, 30px)";
  menuNav.style.color = "var(--text-color)";

  let menuNavLinks = [
    { text: "Appetizers", link: "#appetizers" },
    { text: "Salad", link: "#salad" },
    { text: "Mains", link: "#mains" },
    { text: "Desserts", link: "#desserts" },
  ];

  menuNavLinks.forEach((menuLink) => {
    let menu = newElm("a");
    menuNav.appendChild(menu);
    menu.textContent = menuLink.text;
    menu.href = menuLink.link;
    menu.style.textDecoration = "none";
    menu.style.color = "var(--text-color)";
    menu.style.width = "min-content";
    menu.style.padding = "4px 10px";
    menu.style.borderRadius = "5px";

    menu.addEventListener("mouseover", () => {
      menu.style.color = "var(--red-color)";
      menu.style.cursor = "pointer";
      menu.style.boxShadow = "var(--shadow-elevation-low)";
    });

    menu.addEventListener("mouseout", () => {
      menu.style.color = "var(--text-color)";
      menu.style.boxShadow = "none";
    });
  });

  let menuItems = newElm("div");
  menuContainer.appendChild(menuItems);
  menuItems.style.display = "grid";
  menuItems.style.gap = "50px";
  menuItems.style.paddingLeft = "120px";
  appetizersItem(menuItems, newElm);
  saladItems(menuItems, newElm);
  mainsItems(menuItems, newElm);
  dessertsItems(menuItems, newElm);

  return menuContainer;
}

function createMenuItem(container, name, price, description, newElm, imgUrl) {
  const menuItem = newElm("div");
  container.appendChild(menuItem);
  // menuItem.style.backgroundColor = "#F1F6F9";
  menuItem.style.padding = "10px";
  menuItem.style.borderRadius = "15px";
  menuItem.style.display = "flex";
  menuItem.style.flexDirection = "column";
  menuItem.style.gap = "10px";
  menuItem.style.boxShadow = "var(--shadow-elevation-low)";
  menuItem.style.borderTop = "3px solid var(--gold-color)";

  const imgDiv = newElm("div");
  menuItem.appendChild(imgDiv);

  const itemImg = newElm("img");
  imgDiv.appendChild(itemImg);
  itemImg.src = imgUrl;
  itemImg.style.objectFit = "cover";
  itemImg.style.borderRadius = "15px";
  itemImg.style.boxShadow = "var(--shadow-elevation-low)";

  const itemInfo = newElm("div");
  menuItem.appendChild(itemInfo);

  itemInfo.style.display = "grid";
  itemInfo.style.gridTemplateAreas = `
  "name price"
  "description description"
  ". btn"
`;
  itemInfo.style.gridTemplateRows = "30px 1fr 30px";
  itemInfo.style.gridTemplateColumns = "4fr 1fr";
  itemInfo.style.flex = "1";

  const itemName = newElm("h3");
  itemInfo.appendChild(itemName);
  itemName.textContent = name;
  itemName.style.gridArea = "name";
  itemName.style.color = "var(--gold-color)";
  itemName.style.fontSize = "1rem";

  const itemPrice = newElm("h3");
  itemInfo.appendChild(itemPrice);
  itemPrice.textContent = `$${price}`;
  itemPrice.style.gridArea = "price";
  itemPrice.style.justifySelf = "end";
  itemPrice.style.color = "var(--gold-color)";

  itemPrice.style.fontSize = "1rem";

  const itemDescription = newElm("p");
  itemInfo.appendChild(itemDescription);
  itemDescription.textContent = description;
  itemDescription.style.gridArea = "description";
  itemDescription.style.color = "#00000080";
  itemDescription.style.fontSize = ".8rem";

  const addBtn = newElm("button");
  itemInfo.appendChild(addBtn);
  addBtn.textContent = "Add";
  addBtn.style.alignSelf = "end";
  addBtn.style.gridArea = "btn";
  addBtn.style.borderRadius = "5px";

  addBtn.style.border = "none";
  addBtn.style.backgroundColor = "var(--red-color)";
  addBtn.style.color = "#fff";
  addBtn.style.borderRadius = "25px";
  addBtn.style.cursor = "pointer";
}

function itemContainerStyle(itemContainer) {
  itemContainer.style.display = "grid";
  itemContainer.style.gridTemplateColumns = "repeat(auto-fit, 240px";
  itemContainer.style.gap = "clamp(10px, 2vw, 30px)";
}

function menuHeader(id, name) {}

function appetizersItem(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "appetizers";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Appetizers";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let appetizersContainer = newElm("div");
  wrapper.appendChild(appetizersContainer);
  itemContainerStyle(appetizersContainer);

  let items = [
    {
      url: _asset_img_bakedMushroomCaps_jpeg__WEBPACK_IMPORTED_MODULE_0__,
      name: "Baked Mushroom Caps",
      price: 12,
      description:
        "Button mushrooms stuffed with a blend of cream cheese, garlic, and herbs, topped with melted parmesan.",
    },
    {
      url: _asset_img_crispyCalamari_jpeg__WEBPACK_IMPORTED_MODULE_1__,
      name: "Crispy Calamari",
      price: 14,
      description:
        "Tender calamari rings, lightly breaded and fried, served with zesty marinara sauce.",
    },
    {
      url: _asset_img_grilledShrimpSkewers_jpeg__WEBPACK_IMPORTED_MODULE_2__,
      name: "Grilled Shrimp Skewers",
      price: 16,
      description:
        "Succulent shrimp grilled to perfection, served with a zesty dipping sauce",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      appetizersContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function saladItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "salad";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Salad";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let saladContainer = newElm("div");
  wrapper.appendChild(saladContainer);
  itemContainerStyle(saladContainer);

  let items = [
    {
      url: _asset_img_classicCaesarSalad_jpeg__WEBPACK_IMPORTED_MODULE_3__,
      name: "Classic Caesar Salad ",
      price: 10,
      description:
        " Crisp romaine lettuce, house-made croutons, and shaved parmesan, tossed withCaesar dressing.",
    },
    {
      url: _asset_img_mixedGreensSalad_jpeg__WEBPACK_IMPORTED_MODULE_4__,
      name: "Mixed Greens Salad",
      price: 9,
      description:
        "Fresh mixed greens, cherry tomatoes, cucumber, red onions, and crumbled goat cheese.",
    },
    {
      url: _asset_img_wedgeSalad_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      name: "Wedge Salad",
      price: 11,
      description:
        "A crisp iceberg lettuce wedge, topped with blue cheese crumbles, diced tomatoes, red onions, and bacon bits, drizzled with creamy ranch dressing.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      saladContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function mainsItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "mains";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Mains";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let mainsContainer = newElm("div");
  wrapper.appendChild(mainsContainer);
  itemContainerStyle(mainsContainer);

  let items = [
    {
      url: _asset_img_filetMignon_jpeg__WEBPACK_IMPORTED_MODULE_6__,
      name: "Filet Mignon",
      price: 38,
      description:
        "Most tender cut, a perfectly seasoned 8 oz center-cut filet, grilled to desired temperature.",
    },
    {
      url: _asset_img_newYorkStrip_jpeg__WEBPACK_IMPORTED_MODULE_7__,
      name: "New York Strip",
      price: 36,
      description:
        "A 12 oz flavorful and juicy strip steak, seared to seal in its rich beefiness.",
    },
    {
      url: _asset_img_ribeye_jpeg__WEBPACK_IMPORTED_MODULE_8__,
      name: "Ribeye Steak",
      price: 40,
      description:
        "A well-marbled 14 oz boneless ribeye, bursting with flavor and grilled to perfection.",
    },

    {
      url: _asset_img_porterhouse_jpeg__WEBPACK_IMPORTED_MODULE_9__,
      name: "Porterhouse",
      price: 50,
      description:
        "A 20 oz king of steaks, featuring both the filet and the New York strip.",
    },
    {
      url: _asset_img_surf_Turf_jpeg__WEBPACK_IMPORTED_MODULE_10__,
      name: "Surf & Turf",
      price: 55,
      description:
        "Tender 8 oz filet mignon paired with a broiled lobster tail, served with drawn butter.",
    },
    {
      url: _asset_img_grilledSalmon_jpeg__WEBPACK_IMPORTED_MODULE_11__,
      name: "Grilled Salmon ",
      price: 32,
      description:
        "Fresh Atlantic salmon, seasoned and grilled, served with a lemon-dill beurre blanc sauce.",
    },

    {
      url: _asset_img_searedScallops_jpeg__WEBPACK_IMPORTED_MODULE_12__,
      name: "Seared Scallops",
      price: 38,
      description:
        "served with a creamy cauliflower purée and crispy bacon bits.",
    },
    {
      url: _asset_img_blackenedMahiMahi_jpeg__WEBPACK_IMPORTED_MODULE_13__,
      name: "Blackened Mahi-Mahi",
      price: 30,
      description:
        "8 oz. fillet, seasoned with Cajun spices and seared to perfection, served with a mango salsa.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      mainsContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function dessertsItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "desserts";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Desserts";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let dessertsContainer = newElm("div");
  wrapper.appendChild(dessertsContainer);
  itemContainerStyle(dessertsContainer);

  let items = [
    {
      url: _asset_img_newYorkCheescake_jpeg__WEBPACK_IMPORTED_MODULE_14__,
      name: "New York Cheesecake",
      price: 9,
      description:
        "A velvety smooth cheesecake with a graham cracker crust, served with fresh berries and whipped cream.",
    },
    {
      url: _asset_img_chocolateLavaCake_jpeg__WEBPACK_IMPORTED_MODULE_15__,
      name: "Chocolate Lava Cake",
      price: 10,
      description:
        "A decadent warm chocolate cake with a molten center, served with vanilla ice cream and raspberry coulis.",
    },
    {
      url: _asset_img_cremeBrulee_jpeg__WEBPACK_IMPORTED_MODULE_16__,
      name: "Crème Brûlée",
      price: 9,
      description:
        "A classic French custard dessert, topped with a torched caramelized sugar crust.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      dessertsContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}


/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadReservation: () => (/* binding */ loadReservation)
/* harmony export */ });
/* harmony import */ var _asset_img_reservation_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/img/reservation.jpg */ "./src/asset/img/reservation.jpg");
/* harmony import */ var _asset_img_group_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/img/group.jpg */ "./src/asset/img/group.jpg");



function loadReservation() {
  let newElm = (type) => document.createElement(type);
  let reservationContainer = newElm("div");

  reservationContainer.style.width = "100%";
  reservationContainer.style.maxWidth = "1200px";
  reservationContainer.style.fontFamily = "loraregular";
  reservationContainer.classList.add("reservationContainer");
  reservationContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  reservationContainer.style.marginBottom = "30px";
  // reservationContainer.style.display = "grid";
  reservationContainer.style.gap = "clamp(40px, 5vw, 100px)";
  // reservationContainer.style.gridTemplateColumns =
  // "minmax(300px, 400px) minmax(300px, 1fr)";
  // reservationContainer.style.alignItems = "center";

  let reservationInfo = newElm("div");
  reservationContainer.appendChild(reservationInfo);
  // reservationInfo.style.display = "flex";
  reservationInfo.style.flexDirection = "column";
  reservationInfo.style.gap = "15px";
  reservationInfo.classList.add("reservationInfo");

  let heading = newElm("h2");
  reservationInfo.appendChild(heading);
  heading.textContent = "Reserve Your Table";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "clamp(1.5rem, 2vw, 2.5rem)";

  let reservationText = newElm("div");
  reservationInfo.appendChild(reservationText);

  reservationText.style.width = "clamp(300px, 100%, 400px)";
  reservationText.style.display = "flex";
  reservationText.style.flexDirection = "column";
  reservationText.style.gap = "15px";
  reservationText.style.color = "var(--text-color)";

  let createPara = [
    {
      text: "At The Prime Cut, we recommend booking at least 1-2 weeks in advance for the best availability. While we do accept walk-ins based on availability, reserving ensures you get the perfect table for your special evening.",
    },
    {
      text: "To reserve your table, please call us at 123-123-1234 or email reservations@theprimecut.com. Provide the date and time you would like to dine, the number of guests in your party, and we will reserve your table. For parties of 6 or more, we recommend reserving at least 1 month in advance.",
    },
  ];

  createPara.forEach((para) => {
    let paragraph = newElm("p");
    reservationText.appendChild(paragraph);
    paragraph.textContent = para.text;
  });

  let addressInfo = [
    {
      text: "The Prime Cut Steakhouse",
    },
    {
      text: "123 Steakhouse Lane",
    },
    {
      text: "San Francisco, CA 94122",
    },
  ];

  let address = newElm("div");
  reservationText.appendChild(address);

  addressInfo.forEach((info) => {
    let para = newElm("p");
    reservationText.appendChild(para);
    para.textContent = info.text;
    para.style.lineHeight = "0.5";
  });

  let reservationImg = newElm("div");
  reservationContainer.appendChild(reservationImg);
  reservationImg.style.display = "flex";
  reservationImg.style.flexDirection = "column";
  reservationImg.style.gap = "15px";
  reservationImg.classList.add("reservationImg");

  let reservation = newElm("img");
  reservationImg.appendChild(reservation);
  reservation.src = _asset_img_reservation_jpg__WEBPACK_IMPORTED_MODULE_0__;
  reservation.style.width = "clamp(400px, 40vw, 500px)";
  reservation.style.borderRadius = "20px";
  reservation.style.boxShadow = "var(--shadow-elevation-low)";

  let group = newElm("img");
  reservationImg.appendChild(group);
  group.src = _asset_img_group_jpg__WEBPACK_IMPORTED_MODULE_1__;
  group.style.width = "clamp(400px, 40vw, 500px)";
  group.style.borderRadius = "20px";
  group.style.boxShadow = "var(--shadow-elevation-low)";

  return reservationContainer;
}


/***/ }),

/***/ "./src/asset/font/avro/arvo-bold-webfont.woff":
/*!****************************************************!*\
  !*** ./src/asset/font/avro/arvo-bold-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arvo-bold-webfont.woff";

/***/ }),

/***/ "./src/asset/font/avro/arvo-bold-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/asset/font/avro/arvo-bold-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arvo-bold-webfont.woff2";

/***/ }),

/***/ "./src/asset/font/lora/lora-variablefont_wght-webfont.woff":
/*!*****************************************************************!*\
  !*** ./src/asset/font/lora/lora-variablefont_wght-webfont.woff ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lora-variablefont_wght-webfont.woff";

/***/ }),

/***/ "./src/asset/font/lora/lora-variablefont_wght-webfont.woff2":
/*!******************************************************************!*\
  !*** ./src/asset/font/lora/lora-variablefont_wght-webfont.woff2 ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lora-variablefont_wght-webfont.woff2";

/***/ }),

/***/ "./src/asset/icons/facebook.svg":
/*!**************************************!*\
  !*** ./src/asset/icons/facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facebook.svg";

/***/ }),

/***/ "./src/asset/icons/instagram.svg":
/*!***************************************!*\
  !*** ./src/asset/icons/instagram.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "instagram.svg";

/***/ }),

/***/ "./src/asset/icons/tiktok.svg":
/*!************************************!*\
  !*** ./src/asset/icons/tiktok.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tiktok.svg";

/***/ }),

/***/ "./src/asset/icons/twitter.svg":
/*!*************************************!*\
  !*** ./src/asset/icons/twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter.svg";

/***/ }),

/***/ "./src/asset/img/bakedMushroomCaps.jpeg":
/*!**********************************************!*\
  !*** ./src/asset/img/bakedMushroomCaps.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bakedMushroomCaps.jpeg";

/***/ }),

/***/ "./src/asset/img/blackenedMahiMahi.jpeg":
/*!**********************************************!*\
  !*** ./src/asset/img/blackenedMahiMahi.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "blackenedMahiMahi.jpeg";

/***/ }),

/***/ "./src/asset/img/chocolateLavaCake.jpeg":
/*!**********************************************!*\
  !*** ./src/asset/img/chocolateLavaCake.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chocolateLavaCake.jpeg";

/***/ }),

/***/ "./src/asset/img/classicCaesarSalad.jpeg":
/*!***********************************************!*\
  !*** ./src/asset/img/classicCaesarSalad.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "classicCaesarSalad.jpeg";

/***/ }),

/***/ "./src/asset/img/cook.jpg":
/*!********************************!*\
  !*** ./src/asset/img/cook.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cook.jpg";

/***/ }),

/***/ "./src/asset/img/cremeBrulee.jpeg":
/*!****************************************!*\
  !*** ./src/asset/img/cremeBrulee.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cremeBrulee.jpeg";

/***/ }),

/***/ "./src/asset/img/crispyCalamari.jpeg":
/*!*******************************************!*\
  !*** ./src/asset/img/crispyCalamari.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "crispyCalamari.jpeg";

/***/ }),

/***/ "./src/asset/img/filetMignon.jpeg":
/*!****************************************!*\
  !*** ./src/asset/img/filetMignon.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "filetMignon.jpeg";

/***/ }),

/***/ "./src/asset/img/grilledSalmon.jpeg":
/*!******************************************!*\
  !*** ./src/asset/img/grilledSalmon.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grilledSalmon.jpeg";

/***/ }),

/***/ "./src/asset/img/grilledShrimpSkewers.jpeg":
/*!*************************************************!*\
  !*** ./src/asset/img/grilledShrimpSkewers.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "grilledShrimpSkewers.jpeg";

/***/ }),

/***/ "./src/asset/img/group.jpg":
/*!*********************************!*\
  !*** ./src/asset/img/group.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "group.jpg";

/***/ }),

/***/ "./src/asset/img/mixedGreensSalad.jpeg":
/*!*********************************************!*\
  !*** ./src/asset/img/mixedGreensSalad.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mixedGreensSalad.jpeg";

/***/ }),

/***/ "./src/asset/img/newYorkCheescake.jpeg":
/*!*********************************************!*\
  !*** ./src/asset/img/newYorkCheescake.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "newYorkCheescake.jpeg";

/***/ }),

/***/ "./src/asset/img/newYorkStrip.jpeg":
/*!*****************************************!*\
  !*** ./src/asset/img/newYorkStrip.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "newYorkStrip.jpeg";

/***/ }),

/***/ "./src/asset/img/porterhouse.jpeg":
/*!****************************************!*\
  !*** ./src/asset/img/porterhouse.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "porterhouse.jpeg";

/***/ }),

/***/ "./src/asset/img/ready.jpg":
/*!*********************************!*\
  !*** ./src/asset/img/ready.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ready.jpg";

/***/ }),

/***/ "./src/asset/img/reservation.jpg":
/*!***************************************!*\
  !*** ./src/asset/img/reservation.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "reservation.jpg";

/***/ }),

/***/ "./src/asset/img/ribeye.jpeg":
/*!***********************************!*\
  !*** ./src/asset/img/ribeye.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ribeye.jpeg";

/***/ }),

/***/ "./src/asset/img/searedScallops.jpeg":
/*!*******************************************!*\
  !*** ./src/asset/img/searedScallops.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "searedScallops.jpeg";

/***/ }),

/***/ "./src/asset/img/serve.jpg":
/*!*********************************!*\
  !*** ./src/asset/img/serve.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "serve.jpg";

/***/ }),

/***/ "./src/asset/img/surf_Turf.jpeg":
/*!**************************************!*\
  !*** ./src/asset/img/surf_Turf.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "surf_Turf.jpeg";

/***/ }),

/***/ "./src/asset/img/vibe.jpg":
/*!********************************!*\
  !*** ./src/asset/img/vibe.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "vibe.jpg";

/***/ }),

/***/ "./src/asset/img/waiter.jpg":
/*!**********************************!*\
  !*** ./src/asset/img/waiter.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "waiter.jpg";

/***/ }),

/***/ "./src/asset/img/wedgeSalad.jpeg":
/*!***************************************!*\
  !*** ./src/asset/img/wedgeSalad.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "wedgeSalad.jpeg";

/***/ }),

/***/ "./src/asset/logo/logo.png":
/*!*********************************!*\
  !*** ./src/asset/logo/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _asset_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/logo/logo.png */ "./src/asset/logo/logo.png");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation */ "./src/reservation.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _asset_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/icons/facebook.svg */ "./src/asset/icons/facebook.svg");
/* harmony import */ var _asset_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset/icons/instagram.svg */ "./src/asset/icons/instagram.svg");
/* harmony import */ var _asset_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/icons/twitter.svg */ "./src/asset/icons/twitter.svg");
/* harmony import */ var _asset_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset/icons/tiktok.svg */ "./src/asset/icons/tiktok.svg");
/* harmony import */ var _asset_img_vibe_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset/img/vibe.jpg */ "./src/asset/img/vibe.jpg");












(function mainPage() {
  let newElm = (type) => document.createElement(type);

  let container = document.getElementById("container");

  container.style.height = "100vh";
  container.style.fontFamily = "loraregular";
  // container.style.display = "grid";
  // container.style.gridTemplateRows =
  //   "clamp(60px, 7vw, 100px) 1fr clamp(60px, 7vw, 100px) ";
  container.style.display = "flex";
  container.style.flexDirection = "column";

  createHeader(container, newElm);
  createContent(container, newElm);
  createFooter(container, newElm);
})();

function createHeader(container, newElm) {
  let headingWrapper = newElm("div");
  container.appendChild(headingWrapper);
  headingWrapper.style.backgroundColor = "#000";
  headingWrapper.style.width = "100%";
  headingWrapper.style.display = "flex";
  headingWrapper.style.justifyContent = "center";
  headingWrapper.style.padding = "0 clamp(20px, 5vw, 140px)";
  headingWrapper.style.height = "clamp(60px, 7vw, 100px)";
  headingWrapper.style.position = "fixed";
  headingWrapper.style.top = 0;
  headingWrapper.style.left = 0;
  headingWrapper.style.zIndex = 10;

  let heading = newElm("header");
  headingWrapper.appendChild(heading);
  heading.style.display = "flex";
  heading.style.padding = "clamp(5px, 2vw, 10px)";
  heading.style.alignItems = "center";
  heading.style.justifyContent = "space-between";
  heading.style.width = "100%";
  heading.style.height = "100%";
  heading.style.maxWidth = "1200px";

  let logo = newElm("img");
  logo.src = _asset_logo_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  heading.appendChild(logo);
  logo.style.height = "100%";
  logo.style.cursor = "pointer";

  logo.addEventListener("click", () => {
    const content = document.querySelector("#container > .wrapper");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(createContent(container, newElm));
  });

  let navBar = newElm("nav");
  heading.appendChild(navBar);

  let ul = newElm("ul");
  navBar.appendChild(ul);
  ul.style.display = "flex";
  ul.style.listStyleType = "none";
  ul.style.gap = "clamp(20px, 3vw, 50px) ";

  let buttons = [
    { text: "About", action: _about__WEBPACK_IMPORTED_MODULE_2__.loadAbout },
    { text: "Menu", action: _menu__WEBPACK_IMPORTED_MODULE_3__.loadMenu },
    { text: "Reservation", action: _reservation__WEBPACK_IMPORTED_MODULE_4__.loadReservation },
    { text: "Contact", action: _contact__WEBPACK_IMPORTED_MODULE_5__.loadContact },
  ];

  buttons.forEach((buttonInfo) => {
    let li = newElm("li");

    let button = newElm("button");
    button.style.border = "none";
    button.style.borderBlockStart = "2px solid transparent";
    button.style.borderInlineStart = "2px solid transparent";
    button.style.backgroundColor = "transparent";
    button.style.color = "#fff";
    button.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
    button.style.borderRadius = "5px";
    button.textContent = buttonInfo.text;
    li.appendChild(button);

    button.addEventListener("mouseover", () => {
      button.style.borderInlineStart = "2px solid var(--gold-color)";
      button.style.cursor = "pointer";
      // button.style.boxShadow = "var(--shadow-elevation-low)";
    });

    button.addEventListener("mouseout", () => {
      button.style.borderInlineStart = "2px solid transparent";
      // button.style.boxShadow = "none";
    });

    button.addEventListener("click", () => {
      const content = document.querySelector("#container > .wrapper");
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      content.appendChild(buttonInfo.action());
    });

    ul.appendChild(li);
  });
}

function createContent(container, newElm) {
  let wrapper = newElm("div");
  container.appendChild(wrapper);
  wrapper.style.width = "100%";

  wrapper.style.width = "100%";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";
  wrapper.style.padding = "clamp(60px, 7vw, 100px) clamp(40px, 5vw, 140px)";
  wrapper.classList.add("wrapper");

  let heroWrapper = newElm("div");
  wrapper.appendChild(heroWrapper);
  heroWrapper.style.width = "100%";
  heroWrapper.style.maxWidth = "1200px";
  heroWrapper.style.display = "flex";
  heroWrapper.style.gap = "clamp(50px, 5vw, 100px)";
  heroWrapper.classList.add("heroWrapper");
  heroWrapper.style.marginTop = "clamp(30px, 5vw, 100px)";

  let content = newElm("div");
  heroWrapper.appendChild(content);
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.classList.add("content");
  content.style.gap = "clamp(20px, 3vw, 40px)";

  let heading = newElm("div");
  content.appendChild(heading);
  heading.style.display = "flex";
  heading.style.flexDirection = "column";
  heading.style.gap = "0.5rem";

  let line1 = newElm("span");
  heading.appendChild(line1);
  line1.textContent = "Savor the Flavor";
  line1.style.color = "var(--gold-color)";
  line1.style.fontFamily = "arvobold";
  line1.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line1.style.lineHeight = "1";

  let line2 = newElm("span");
  heading.appendChild(line2);
  line2.textContent = "at ";
  line2.style.color = "var(--gold-color)";
  line2.style.fontFamily = "arvobold";
  line2.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line2.style.lineHeight = "1";

  let thePrimeCut = newElm("span");
  line2.appendChild(thePrimeCut);
  thePrimeCut.textContent = "The Prime Cut";
  thePrimeCut.style.color = "var(--red-color)";

  let line3 = newElm("span");
  heading.appendChild(line3);
  line3.textContent = "Steakhouse";
  line3.style.color = "var(--gold-color)";
  line3.style.fontFamily = "arvobold";
  line3.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line3.style.lineHeight = "1";

  let para = newElm("p");
  content.appendChild(para);
  para.textContent =
    "Welcome to The Prime Cut Steakhouse, where the finest cuts of meat are grilled to perfection and served in an elegant, warm atmosphere. Our passion for quality and flavor is evident in every succulent bite. Join us for an unforgettable culinary experience.";
  para.style.color = "var(--text-color)";
  para.style.fontSize = "clamp(1rem, 1.5vw, 1.2rem)";

  let c2aBtn = newElm("div");
  content.appendChild(c2aBtn);
  c2aBtn.style.display = "flex";
  c2aBtn.style.gap = "clamp(16px, 2vw, 2rem)";

  function btnStyle(btn) {
    btn.style.border = "none";
    btn.style.width = "clamp(110px, 13vw, 150px)";
    btn.style.padding = "clamp(3px, .3em, 6px) clamp(5px, .4em, 10px)";
    btn.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
    btn.style.borderRadius = "50px";
    btn.style.cursor = "pointer";
  }

  let orderNow = newElm("button");
  c2aBtn.appendChild(orderNow);
  orderNow.textContent = "Order Now";
  orderNow.style.backgroundColor = "var(--red-color)";
  orderNow.style.color = "#fff";
  btnStyle(orderNow);

  orderNow.addEventListener("click", () => {
    const content = document.querySelector("#container > .wrapper");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.loadMenu)());
  });

  let bookTable = newElm("button");
  c2aBtn.appendChild(bookTable);
  bookTable.textContent = "Book Table";
  bookTable.style.backgroundColor = "var(--gold-color)";
  bookTable.style.color = "#fff";
  btnStyle(bookTable);

  bookTable.addEventListener("click", () => {
    const content = document.querySelector("#container > .wrapper");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild((0,_reservation__WEBPACK_IMPORTED_MODULE_4__.loadReservation)());
  });

  let heroImg = newElm("div");
  heroWrapper.appendChild(heroImg);

  heroImg.classList.add("heroImg");

  let img1 = newElm("img");
  heroImg.appendChild(img1);
  img1.src = _asset_img_vibe_jpg__WEBPACK_IMPORTED_MODULE_10__;
  img1.style.borderRadius = "25px";
  img1.style.boxShadow = "var(--shadow-elevation-medium)";

  return heroWrapper;
}

function createFooter(container, newElm) {
  let footerWrapper = newElm("div");

  container.appendChild(footerWrapper);
  footerWrapper.style.backgroundColor = "#000";
  footerWrapper.style.width = "100%";
  footerWrapper.style.display = "flex";
  footerWrapper.style.justifyContent = "center";
  footerWrapper.style.padding = "0 clamp(20px, 5vw, 140px)";
  footerWrapper.style.height = "clamp(60px, 7vw, 100px)";
  footerWrapper.style.position = "fixed";
  footerWrapper.style.bottom = 0;
  footerWrapper.style.left = 0;
  footerWrapper.style.zIndex = 10;

  let footer = newElm("footer");
  footerWrapper.appendChild(footer);
  footer.style.display = "flex";
  footer.style.justifyContent = "space-between";
  footer.style.alignItems = "center";

  footer.style.width = "100%";
  footer.style.height = "100%";
  footer.style.maxWidth = "1200px";

  let contact = newElm("div");
  footer.appendChild(contact);
  contact.style.color = "#F0EAE1";
  contact.style.display = "flex";
  contact.style.flexDirection = "column";
  contact.style.alignItems = "center";

  let number = newElm("a");
  contact.appendChild(number);
  number.href = "tel:+1 (360) 642 6941";
  number.textContent = "+1 (360) 642 6941";
  number.style.textDecoration = "none";
  number.style.color = "var(--gold-color)";
  number.style.fontSize = "clamp(14px, 2vw, 1.5rem)";

  let openTime1 = newElm("p");
  contact.appendChild(openTime1);
  openTime1.textContent = "Monday - Thursday: 5:00 PM - 10:00 PM";
  openTime1.style.fontSize = "clamp(10px, 0.8vw, 14px)";

  let openTime2 = newElm("p");
  contact.appendChild(openTime2);
  openTime2.textContent = "Friday - Sunday: 12:00 PM - 11:00 PM";
  openTime2.style.fontSize = "clamp(10px, 0.8vw, 14px)";

  let links = newElm("div");
  footer.appendChild(links);
  links.style.display = "flex";
  links.style.gap = "clamp(10px, 2vw, 20px)";

  let linksSrc = [
    { logo: _asset_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_6__, link: "#" },
    { logo: _asset_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_7__, link: "#" },
    { logo: _asset_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_8__, link: "#" },
    { logo: _asset_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_9__, link: "#" },
  ];

  linksSrc.forEach((socialLink) => {
    let anchor = newElm("a");
    links.appendChild(anchor);
    anchor.href = socialLink.link;

    let logoImg = newElm("img");
    anchor.appendChild(logoImg);
    logoImg.src = socialLink.logo;
  });
}

})();

/******/ })()
;
//# sourceMappingURL=bundle19adb1a42347a07da352.js.map