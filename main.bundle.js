"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../resturant.jpg */ "./resturant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&family=Yantramanav:wght@700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  display: grid;\n  color: white;\n  grid-template-rows: 0.6fr 1fr 0.4fr;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n}\n\nheader {\n  background-color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: space-around;\n  min-height: 70px;\n  max-height: 140px;\n  align-items: center;\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: rgb(29, 29, 29);\n  color: rgb(255, 255, 255);\n  max-height: 100px;\n  align-items: center;\n}\n\n.header-button {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.164);\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: column;\n  font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 2em;\n  height: 80%;\n  justify-content: center;\n  line-height: 1;\n  width: 30%;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 32px;\n  text-align: center;\n  text-decoration: none;\n  transform: translate3d(0, 0, 0);\n  transition: all 150ms;\n  vertical-align: baseline;\n  white-space: nowrap;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n.header-button:hover {\n  box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;\n  opacity: 0.85;\n}\n\n.header-button.active {\n  box-shadow: rgba(255, 255, 255, 0.5) 0 0 0 3px;\n}\n\n.tab {\n  height: 800px;\n  background-image: linear-gradient(90deg, rgba(68, 86, 109, 0.768627451) 0%, rgba(190, 180, 176, 0.8078431373) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.tab {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  width: 100vw;\n}\n\n#home {\n  display: grid;\n  grid-template-rows: 0.25fr 0.16fr 0.3fr 0.25;\n  width: 100vw;\n  color: white;\n  justify-items: center;\n}\n#home h1 {\n  padding-left: 60px;\n  padding-right: 60px;\n  font-size: 6em;\n  align-self: flex-end;\n  text-align: center;\n  background: rgb(34, 37, 46);\n  font-family: \"Yantramanav\", sans-serif;\n}\n#home h2 {\n  padding-left: 60px;\n  padding-right: 60px;\n  font-size: 3em;\n  margin-top: 10px;\n  align-self: flex-start;\n  text-align: center;\n  background: rgb(34, 37, 46);\n}\n#home .testimonial {\n  background-color: rgba(0, 0, 0, 0.678);\n  justify-self: center;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n#home blockquote {\n  padding: 1%;\n  font-size: 1.8em;\n  max-width: 600px;\n  justify-self: center;\n  align-self: center;\n  padding: 25px;\n  font-style: italic;\n}\n#home figcaption {\n  align-self: center;\n  text-align: left;\n  max-width: 500px;\n  font-size: 1.2em;\n}\n\n#menu {\n  display: grid;\n  grid-template-rows: 1fr 1fr 6fr;\n}\n#menu h1 {\n  font-size: 3em;\n  justify-self: center;\n}\n#menu h2 {\n  justify-self: center;\n}\n#menu .menu-container {\n  background-color: rgba(0, 0, 0, 0.842);\n  display: grid;\n  align-items: center;\n  grid-template-columns: 1fr 1fr;\n  margin-left: 20%;\n  margin-right: 20%;\n  margin-bottom: 5%;\n  padding: 20px;\n  gap: 10px;\n}\n#menu .menu-container .menu-item {\n  border-radius: 5px;\n  justify-self: center;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 3fr 1fr 8fr;\n  grid-template-rows: 1fr 3fr 1fr;\n  max-width: 1000%;\n  background-color: rgb(182, 159, 159);\n}\n#menu .menu-container .menu-item .vertical-line {\n  grid-area: 1/2/4/3;\n  border-left: 3px solid rgba(0, 0, 0, 0.404);\n  align-self: center;\n  height: 90%;\n  justify-self: center;\n}\n#menu .menu-container .menu-item img {\n  justify-self: center;\n  align-self: center;\n  max-width: 100%;\n  grid-area: 1/1/4/2;\n}\n#menu .menu-container .menu-item .item-name,\n#menu .menu-container .menu-item .item-price {\n  font-size: 1.3em;\n}\n#menu .menu-container .menu-item .item-price {\n  text-align: right;\n}\n#menu .menu-container .menu-item .item-price::before {\n  content: \" $\";\n}\n\n#contact {\n  display: grid;\n  grid-template-rows: 1fr 1fr 6fr;\n}\n#contact h1 {\n  font-size: 3em;\n  justify-self: center;\n}\n#contact h2 {\n  justify-self: center;\n}\n#contact ul {\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  margin-bottom: 10%;\n  padding: 50px;\n  list-style: none;\n  font-size: 2em;\n  justify-self: center;\n  background-color: rgba(68, 86, 109, 0.768627451);\n}\n#contact ul a {\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,aAAA;EACA,aAAA;EACA,YAAA;EACA,mCAAA;EACA,qCAAA;EACA,SAAA;AAFF;;AAKA;EACE,qCAAA;EACA,aAAA;EACA,6BAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,iCAAA;EACA,yBAAA;EACA,iBAAA;EAEA,mBAAA;AAHF;;AAMA;EACE,mBAAA;EACA,4CAAA;EAEA,kBAAA;EACA,eAAA;EACA,yEAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,oBAAA;EACA,sBAAA;EACA,8NAAA;EAGA,cAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,qBAAA;EACA,+BAAA;EACA,qBAAA;EACA,wBAAA;EACA,mBAAA;EACA,iBAAA;EACA,yBAAA;EACA,0BAAA;AANF;AAOE;EACE,wCAAA;EACA,aAAA;AALJ;;AASA;EACE,8CAAA;AANF;;AASA;EACE,aAAA;EACA,4JAAA;EAGA,sBAAA;EACA,4BAAA;EACA,2BAAA;AARF;;AAWA;EACE,SAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;AARF;;AAWA;EACE,aAAA;EACA,4CAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;AARF;AAUE;EACE,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;EACA,kBAAA;EAEA,2BAAA;EACA,sCAAA;AATJ;AAWE;EACE,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;AATJ;AAYE;EACE,sCAAA;EACA,oBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAVJ;AAYE;EACE,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;AAVJ;AAYE;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;AAVJ;;AAcA;EAQE,aAAA;EACA,+BAAA;AAlBF;AAUE;EACE,cAAA;EACA,oBAAA;AARJ;AAUE;EACE,oBAAA;AARJ;AAaE;EACE,sCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EAEA,SAAA;AAZJ;AAcI;EACE,kBAAA;EACA,oBAAA;EACA,aAAA;EACA,aAAA;EACA,kCAAA;EACA,+BAAA;EACA,gBAAA;EAEA,oCAAA;AAbN;AAeM;EACE,kBAAA;EACA,2CAAA;EACA,kBAAA;EACA,WAAA;EACA,oBAAA;AAbR;AAgBM;EACE,oBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AAdR;AAiBM;;EAEE,gBAAA;AAfR;AAiBM;EACE,iBAAA;AAfR;AAiBM;EACE,aAAA;AAfR;;AAqBA;EACE,aAAA;EACA,+BAAA;AAlBF;AAoBE;EACE,cAAA;EACA,oBAAA;AAlBJ;AAoBE;EACE,oBAAA;AAlBJ;AAoBE;EACE,aAAA;EACA,6BAAA;EACA,sBAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,cAAA;EACA,oBAAA;EACA,gDAAA;AAlBJ;AAoBI;EACE,YAAA;AAlBN","sourcesContent":["$bg-img: url(\"../resturant.jpg\");\n\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&family=Yantramanav:wght@700&display=swap\");\n\nbody {\n  height: 100vh;\n  display: grid;\n  color: white;\n  grid-template-rows: 0.6fr 1fr 0.4fr;\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n}\n\nheader {\n  background-color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: space-around;\n  min-height: 70px;\n  max-height: 140px;\n  align-items: center;\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: rgb(29, 29, 29);\n  color: rgb(255, 255, 255);\n  max-height: 100px;\n\n  align-items: center;\n}\n\n.header-button {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.164);\n\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  flex-direction: column;\n  font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 2em;\n  height: 80%;\n  justify-content: center;\n  line-height: 1;\n  width: 30%;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 32px;\n  text-align: center;\n  text-decoration: none;\n  transform: translate3d(0, 0, 0);\n  transition: all 150ms;\n  vertical-align: baseline;\n  white-space: nowrap;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;\n    opacity: 0.85;\n  }\n}\n\n.header-button.active {\n  box-shadow: rgba(255, 255, 255, 0.5) 0 0 0 3px;\n}\n\n.tab {\n  height: 800px;\n  background-image: linear-gradient(90deg, #44566dc4 0%, #beb4b0ce 100%),\n    $bg-img;\n\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.tab {\n  margin: 0;\n  border: 0;\n  padding: 0;\n  width: 100vw;\n}\n\n#home {\n  display: grid;\n  grid-template-rows: 0.25fr 0.16fr 0.3fr 0.25;\n  width: 100vw;\n  color: white;\n  justify-items: center;\n\n  h1 {\n    padding-left: 60px;\n    padding-right: 60px;\n    font-size: 6em;\n    align-self: flex-end;\n    text-align: center;\n\n    background: rgb(34, 37, 46);\n    font-family: \"Yantramanav\", sans-serif;\n  }\n  h2 {\n    padding-left: 60px;\n    padding-right: 60px;\n    font-size: 3em;\n    margin-top: 10px;\n    align-self: flex-start;\n    text-align: center;\n    background: rgb(34, 37, 46);\n  }\n\n  .testimonial {\n    background-color: rgba(0, 0, 0, 0.678);\n    justify-self: center;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n  }\n  blockquote {\n    padding: 1%;\n    font-size: 1.8em;\n    max-width: 600px;\n    justify-self: center;\n    align-self: center;\n    padding: 25px;\n    font-style: italic;\n  }\n  figcaption {\n    align-self: center;\n    text-align: left;\n    max-width: 500px;\n    font-size: 1.2em;\n  }\n}\n\n#menu {\n  h1 {\n    font-size: 3em;\n    justify-self: center;\n  }\n  h2 {\n    justify-self: center;\n  }\n  display: grid;\n  grid-template-rows: 1fr 1fr 6fr;\n\n  .menu-container {\n    background-color: rgba(0, 0, 0, 0.842);\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n    margin-left: 20%;\n    margin-right: 20%;\n    margin-bottom: 5%;\n    padding: 20px;\n\n    gap: 10px;\n\n    .menu-item {\n      border-radius: 5px;\n      justify-self: center;\n      padding: 10px;\n      display: grid;\n      grid-template-columns: 3fr 1fr 8fr;\n      grid-template-rows: 1fr 3fr 1fr;\n      max-width: 1000%;\n\n      background-color: rgb(182, 159, 159);\n\n      .vertical-line {\n        grid-area: 1/ 2 / 4 / 3;\n        border-left: 3px solid rgba(0, 0, 0, 0.404);\n        align-self: center;\n        height: 90%;\n        justify-self: center;\n      }\n\n      img {\n        justify-self: center;\n        align-self: center;\n        max-width: 100%;\n        grid-area: 1 / 1 / 4 / 2;\n      }\n\n      .item-name,\n      .item-price {\n        font-size: 1.3em;\n      }\n      .item-price {\n        text-align: right;\n      }\n      .item-price::before {\n        content: \" $\";\n      }\n    }\n  }\n}\n\n#contact {\n  display: grid;\n  grid-template-rows: 1fr 1fr 6fr;\n\n  h1 {\n    font-size: 3em;\n    justify-self: center;\n  }\n  h2 {\n    justify-self: center;\n  }\n  ul {\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    margin-bottom: 10%;\n    padding: 50px;\n    list-style: none;\n    font-size: 2em;\n    justify-self: center;\n    background-color: #44566dc4;\n\n    a {\n      color: white;\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const contact = document.createElement("div");
  contact.classList.add("tab");
  contact.id = "contact";
  contact.innerHTML = `
      <h1>Contact Info</h1>
      <h2>Reach out to us, preferably about business</h2>
      <ul>
        <li>
          Email:
          <a href="mailto: abc@example.com">businessfoods@business.com</a>
        </li>

        <li>Phone Number: <a href="tel:123-456-7890">123-456-7890</a></li>
      </ul>
    </div>
  `;
  return contact;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  const home = document.createElement("div");
  home.classList.add("tab");
  home.id = "home";
  home.innerHTML = `

        <h1>BUSINESS FOODS</h1>
        <h2>make deals : eat meals</h2>
        <div class="testimonial">
          <blockquote>
            "I'm at Business Foods. I don't know when I'll be home, okay, I've
            gotta meet a guy about a thing. Just record the recital, okay? I
            will watch it later. "
          </blockquote>
          <figcaption>
            — Business Foods testimonial from Business Foods client Scott Howard
          </figcaption>
        </div>
        <div class="spacer"></div>

  
  `;
  return home;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");





const content = document.createElement("div");
content.id = "content";
let currentTab;

const footer = document.createElement("footer");
footer.innerHTML = `<div>© BUSINESS FOODS ${new Date().getFullYear()} </div><div>All icons created by Freepik</div>`;

function selectTab(tab) {
  if (tab.name !== currentTab) {
    header.childNodes.forEach((node) => {
      if (node.textContent.toLowerCase() === tab.name) {
        node.classList.add("active");
        console.log("FOUND!");
      } else {
        node.classList.remove("active");
        console.log(node);
      }
    });
    content.innerHTML = "";
    content.appendChild(tab());
    currentTab = tab.name;
    console.log(currentTab);
  }
}

function createTabButtons(tabs) {
  const tabButtons = [];
  tabs.forEach((tab) => {
    const currentButton = document.createElement("button");
    currentButton.classList.add("header-button");
    currentButton.textContent =
      tab.name.charAt(0).toUpperCase() + tab.name.slice(1);
    currentButton.addEventListener("click", selectTab.bind(this, tab));
    tabButtons.push(currentButton);
  });
  currentTab = tabButtons[0];
  return tabButtons;
}

const header = document.createElement("header");
createTabButtons([_home_js__WEBPACK_IMPORTED_MODULE_1__["default"], _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"], _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]]).forEach((tab) => {
  header.appendChild(tab);
});

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _fish_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.png */ "./src/fish.png");
/* harmony import */ var _water_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water.png */ "./src/water.png");
/* harmony import */ var _cube_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cube.png */ "./src/cube.png");
/* harmony import */ var _smoothie_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smoothie.png */ "./src/smoothie.png");
/* harmony import */ var _dogfood_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dogfood.png */ "./src/dogfood.png");
/* harmony import */ var _apple_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apple.png */ "./src/apple.png");







function menu() {
  const menu = document.createElement("div");
  menu.classList.add("tab");
  menu.id = "menu";
  menu.innerHTML = `
  <h1>MENU</h1>
  <h2>Select from one of our many business-optimized meals</h2>
  <div class="menu-container">
    <div class="menu-item">
      <img
        src="${_fish_png__WEBPACK_IMPORTED_MODULE_0__}"
        alt="fish"
      />
      <div class="vertical-line"></div>
      <div class="item-name">Synergy Salmon</div>
      <div class="item-description">A fish guaranteed to have been caught by two fishermen that were friends.</div>
      <div class="item-price">10.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${_water_png__WEBPACK_IMPORTED_MODULE_1__}"
        alt="water bottle"
      />
      <div class="vertical-line"></div>
      <div class="item-name">Water (Bottled Edition)</div>
      <div class="item-description">Offered on entry. It's almost complimentary.</div>
      <div class="item-price">0.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${_cube_png__WEBPACK_IMPORTED_MODULE_2__}"
        alt="cube"
      />
      <div class="vertical-line"></div>
      <div class="item-name">Basic Food Unit A</div>
      <div class="item-description">We looked up all the advised nutrients for a single day, bought their equivalent supplements, and compressed them into a cube. The theoretical healthiest meal. </div>
      <div class="item-price">21.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${_smoothie_png__WEBPACK_IMPORTED_MODULE_3__}"
        alt="smoothie"
      />
      <div class="vertical-line"></div>
      <div class="item-name">Agile Shake</div>
      <div class="item-description">A smoothie composed of mystery materials. After finishing, you design the details of the shake for the next customer.</div>
      <div class="item-price">23.99</div>
    </div>
    <div class="menu-item">
    <img
      src="${_apple_png__WEBPACK_IMPORTED_MODULE_5__}"
      alt="apple"
    />
    <div class="vertical-line"></div>
    <div class="item-name">An Apple</div>
    <div class="item-description">Both red and delicious. A favorite of the most famous business person of all, Issac Newton.</div>
    <div class="item-price">19.99</div>
  </div>
    <div class="menu-item">
      <img
        src="${_dogfood_png__WEBPACK_IMPORTED_MODULE_4__}"
        alt="dog food"
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog Food</div>
      <div class="item-description">Has your dog jumped into the back of your car and refuses to leave? Make them an offer they can't refuse, some dog food.</div>
      <div class="item-price">16.99</div>
    </div>
   
  </div>
  
`;
  return menu;
}


/***/ }),

/***/ "./resturant.jpg":
/*!***********************!*\
  !*** ./resturant.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c8aac0f5cb8ad819b7c.jpg";

/***/ }),

/***/ "./src/apple.png":
/*!***********************!*\
  !*** ./src/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fed788aaf9ba9e26c57f.png";

/***/ }),

/***/ "./src/cube.png":
/*!**********************!*\
  !*** ./src/cube.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "781a80125b14b7022b35.png";

/***/ }),

/***/ "./src/dogfood.png":
/*!*************************!*\
  !*** ./src/dogfood.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61576867d39d332f3fe8.png";

/***/ }),

/***/ "./src/fish.png":
/*!**********************!*\
  !*** ./src/fish.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33246805a112257fd418.png";

/***/ }),

/***/ "./src/smoothie.png":
/*!**************************!*\
  !*** ./src/smoothie.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc1e22489de8bd82d216.png";

/***/ }),

/***/ "./src/water.png":
/*!***********************!*\
  !*** ./src/water.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db65761fd307655bb96d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map