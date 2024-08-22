(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* * {
  border: 1px solid red;
} */

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif, Serif;
  /* color: rgb(71, 68, 68); */
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgb(76, 129, 220), rgb(151, 174, 214));
  min-height: 100vh; /* ensure it takes full screen height */
  padding-bottom: 30px; /* adds some padding at bottom */
}

#header {
  height: 15vh;
  font-size: 48px;
  /* font-family: Garamond, Serif; */
  color: rgb(46, 46, 46);
  align-content: center;
}

#maincontainer {
  height: auto; /* allow it to grow */
  min-height: 80vh; /* maintain your general layout */
}

#top {
  display: flex;
  height: 60%;
  width: 90vw;
}

#display {
  width: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

#upperdisplay {
  height: 70%;
  display: flex;
  justify-content: space-around;
}

#icon {
  width: 150px; /* Set a specific width */
  height: 150px; /* Set a specific height */
  display: flex;
  justify-content: center;
  align-items: center;
}

#icon img {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
}

#temp {
  align-content: center;
  font-size: 32px;
}

#forecast {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto; /* let it be as tall as it needs */
  gap: 10px; /* add space between forecast days */
  padding: 10px 0; /* add some vertical padding */
}

#input {
  width: 25%;
  align-content: center;
}

#gif {
  height: 42%;
}

#lowerdisplay {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  height: 30%;
}

#high,
#low,
#precip {
  align-content: center;
  text-align: center;
}

#description {
  grid-column: 1 / 4;
  text-align: center;
}

.forecast-day {
  width: 120px; /* Set a specific width */
  height: 200px; /* Set a specific height. Adjust as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* This gives even spacing */
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2); /* Slightly transparent */
  border-radius: 8px; /* Optional: gives a nice rounded look */
  margin: 0 5px; /* Space between forecast days */
}

.forecast-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

#forecast {
  display: flex;
  justify-content: space-between;
  height: 220px; /* This should be slightly larger than .forecast-day */
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  padding: 10px 0; /* Gives some vertical padding */
}

#location-display {
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
}

#background-icon {
  position: fixed;
  top: -100px;
  right: -100px;
  width: 800px;
  height: 800px;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.1;
  z-index: -1;
  pointer-events: none;
}

@keyframes slideAndFlip {
  0% {
    transform: translateX(-100%) rotateY(-90deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotateY(0);
    opacity: 1;
  }
}

.forecast-day {
  /* ... existing styles ... */
  animation: slideAndFlip 0.5s ease-out forwards;
  opacity: 0;
  transform-origin: left center;
  perspective: 1000px;
}

@media screen and (max-width: 768px) {
  #header {
    font-size: 32px;
    height: auto;
    padding: 10px 0;
  }

  #top {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  #display {
    width: 90%;
    height: auto;
    margin-bottom: 20px;
  }

  #input {
    width: 90%;
    margin-bottom: 20px;
  }

  #forecast {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    overflow-x: visible;
  }

  .forecast-day {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 480px) {
  #header {
    font-size: 24px;
  }

  #upperdisplay {
    flex-direction: column;
    align-items: center;
  }

  #icon {
    width: 100px;
    height: 100px;
  }

  .forecast-day {
    width: calc(50% - 10px);
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,uDAAuD;EACvD,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,wEAAwE;EACxE,iBAAiB,EAAE,uCAAuC;EAC1D,oBAAoB,EAAE,gCAAgC;AACxD;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kCAAkC;EAClC,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,YAAY,EAAE,qBAAqB;EACnC,gBAAgB,EAAE,iCAAiC;AACrD;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;AACb;;AAEA;EACE,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,YAAY,EAAE,yBAAyB;EACvC,aAAa,EAAE,0BAA0B;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY,EAAE,kCAAkC;EAChD,SAAS,EAAE,oCAAoC;EAC/C,eAAe,EAAE,8BAA8B;AACjD;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC,WAAW;AACb;;AAEA;;;EAGE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY,EAAE,yBAAyB;EACvC,aAAa,EAAE,4CAA4C;EAC3D,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B,EAAE,4BAA4B;EAC5D,aAAa;EACb,0CAA0C,EAAE,yBAAyB;EACrE,kBAAkB,EAAE,wCAAwC;EAC5D,aAAa,EAAE,gCAAgC;AACjD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa,EAAE,sDAAsD;EACrE,gBAAgB,EAAE,yCAAyC;EAC3D,eAAe,EAAE,gCAAgC;AACnD;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;IAC5C,UAAU;EACZ;EACA;IACE,mCAAmC;IACnC,UAAU;EACZ;AACF;;AAEA;EACE,4BAA4B;EAC5B,8CAA8C;EAC9C,UAAU;EACV,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE;IACE,eAAe;IACf,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,uBAAuB;EACzB;AACF","sourcesContent":["/* * {\n  border: 1px solid red;\n} */\n\n* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif, Serif;\n  /* color: rgb(71, 68, 68); */\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: linear-gradient(rgb(76, 129, 220), rgb(151, 174, 214));\n  min-height: 100vh; /* ensure it takes full screen height */\n  padding-bottom: 30px; /* adds some padding at bottom */\n}\n\n#header {\n  height: 15vh;\n  font-size: 48px;\n  /* font-family: Garamond, Serif; */\n  color: rgb(46, 46, 46);\n  align-content: center;\n}\n\n#maincontainer {\n  height: auto; /* allow it to grow */\n  min-height: 80vh; /* maintain your general layout */\n}\n\n#top {\n  display: flex;\n  height: 60%;\n  width: 90vw;\n}\n\n#display {\n  width: 30%;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n#upperdisplay {\n  height: 70%;\n  display: flex;\n  justify-content: space-around;\n}\n\n#icon {\n  width: 150px; /* Set a specific width */\n  height: 150px; /* Set a specific height */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#icon img {\n  object-fit: contain;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n#temp {\n  align-content: center;\n  font-size: 32px;\n}\n\n#forecast {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: auto; /* let it be as tall as it needs */\n  gap: 10px; /* add space between forecast days */\n  padding: 10px 0; /* add some vertical padding */\n}\n\n#input {\n  width: 25%;\n  align-content: center;\n}\n\n#gif {\n  height: 42%;\n}\n\n#lowerdisplay {\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  height: 30%;\n}\n\n#high,\n#low,\n#precip {\n  align-content: center;\n  text-align: center;\n}\n\n#description {\n  grid-column: 1 / 4;\n  text-align: center;\n}\n\n.forecast-day {\n  width: 120px; /* Set a specific width */\n  height: 200px; /* Set a specific height. Adjust as needed */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; /* This gives even spacing */\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.2); /* Slightly transparent */\n  border-radius: 8px; /* Optional: gives a nice rounded look */\n  margin: 0 5px; /* Space between forecast days */\n}\n\n.forecast-icon {\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n}\n\n#forecast {\n  display: flex;\n  justify-content: space-between;\n  height: 220px; /* This should be slightly larger than .forecast-day */\n  overflow-x: auto; /* Allow horizontal scrolling if needed */\n  padding: 10px 0; /* Gives some vertical padding */\n}\n\n#location-display {\n  text-align: center;\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n#background-icon {\n  position: fixed;\n  top: -100px;\n  right: -100px;\n  width: 800px;\n  height: 800px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  opacity: 0.1;\n  z-index: -1;\n  pointer-events: none;\n}\n\n@keyframes slideAndFlip {\n  0% {\n    transform: translateX(-100%) rotateY(-90deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) rotateY(0);\n    opacity: 1;\n  }\n}\n\n.forecast-day {\n  /* ... existing styles ... */\n  animation: slideAndFlip 0.5s ease-out forwards;\n  opacity: 0;\n  transform-origin: left center;\n  perspective: 1000px;\n}\n\n@media screen and (max-width: 768px) {\n  #header {\n    font-size: 32px;\n    height: auto;\n    padding: 10px 0;\n  }\n\n  #top {\n    flex-direction: column;\n    align-items: center;\n    height: auto;\n  }\n\n  #display {\n    width: 90%;\n    height: auto;\n    margin-bottom: 20px;\n  }\n\n  #input {\n    width: 90%;\n    margin-bottom: 20px;\n  }\n\n  #forecast {\n    flex-wrap: wrap;\n    justify-content: center;\n    height: auto;\n    overflow-x: visible;\n  }\n\n  .forecast-day {\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  #header {\n    font-size: 24px;\n  }\n\n  #upperdisplay {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  #icon {\n    width: 100px;\n    height: 100px;\n  }\n\n  .forecast-day {\n    width: calc(50% - 10px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/Icons sync recursive ^\\.\\/.*\\.svg$":
/*!***************************************!*\
  !*** ./src/Icons/ sync ^\.\/.*\.svg$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": "./src/Icons/clear-day.svg",
	"./clear-night.svg": "./src/Icons/clear-night.svg",
	"./cloudy.svg": "./src/Icons/cloudy.svg",
	"./fog.svg": "./src/Icons/fog.svg",
	"./hail.svg": "./src/Icons/hail.svg",
	"./partly-cloudy-day.svg": "./src/Icons/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/Icons/partly-cloudy-night.svg",
	"./rain-snow-showers-day.svg": "./src/Icons/rain-snow-showers-day.svg",
	"./rain-snow-showers-night.svg": "./src/Icons/rain-snow-showers-night.svg",
	"./rain-snow.svg": "./src/Icons/rain-snow.svg",
	"./rain.svg": "./src/Icons/rain.svg",
	"./showers-day.svg": "./src/Icons/showers-day.svg",
	"./showers-night.svg": "./src/Icons/showers-night.svg",
	"./sleet.svg": "./src/Icons/sleet.svg",
	"./snow-showers-day.svg": "./src/Icons/snow-showers-day.svg",
	"./snow-showers-night.svg": "./src/Icons/snow-showers-night.svg",
	"./snow.svg": "./src/Icons/snow.svg",
	"./thunder-rain.svg": "./src/Icons/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/Icons/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/Icons/thunder-showers-night.svg",
	"./thunder.svg": "./src/Icons/thunder.svg",
	"./wind.svg": "./src/Icons/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/Icons sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GIPHY_API_KEY: () => (/* binding */ GIPHY_API_KEY),
/* harmony export */   WEATHER_API_KEY: () => (/* binding */ WEATHER_API_KEY)
/* harmony export */ });
const WEATHER_API_KEY = "Z735BH2UYZA2N7XG4SMAE8YVC";
const GIPHY_API_KEY = "lNaXJhi0GzyT4WNWONy6bmA37ieQIGs7";




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
// index.js





 // Change this to a function that creates UI

document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    locationInput: document.querySelector("#location"),
    gifContainer: document.querySelector("#gif"),
    tempContainer: document.querySelector("#temp"),
    iconContainer: document.querySelector("#icon img"),
    highContainer: document.querySelector("#high"),
    lowContainer: document.querySelector("#low"),
    precipProbContainer: document.querySelector("#precip"),
    descriptionContainer: document.querySelector("#description"),
    forecastContainer: document.querySelector("#forecast"),
    locationDisplayContainer: document.querySelector("#location-display"),
  };

  const ui = (0,_ui_js__WEBPACK_IMPORTED_MODULE_3__.createUI)(elements); // Create UI with elements

  async function handleWeatherSearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const location = elements.locationInput.value;

      ui.displayLoading();
      try {
        const weatherData = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(location, _config_js__WEBPACK_IMPORTED_MODULE_1__.WEATHER_API_KEY);
        ui.displayTemperature(weatherData.currentWeather.Temp);
        ui.displayIcon(weatherData.currentWeather.Icon);
        ui.displayLocation(weatherData.currentWeather.Location);
        ui.displayDescription(weatherData.currentWeather.Conditions);
        ui.displayHighTemperature(weatherData.currentWeather.High);
        ui.displayLowTemperature(weatherData.currentWeather.Low);
        ui.displayPrecipProbability(weatherData.currentWeather.PrecipProb);
        ui.displayForecast(weatherData.forecast);
      } catch (error) {
        ui.displayError("Unable to fetch weather data" + error);
      }
    }
  }

  // Initialize app
  elements.locationInput.addEventListener("keydown", handleWeatherSearch);

  async function weatherOnLoad() {
    ui.displayLoading();
    try {
      const weatherData = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)("New York", _config_js__WEBPACK_IMPORTED_MODULE_1__.WEATHER_API_KEY);
      ui.displayTemperature(weatherData.currentWeather.Temp);
      ui.displayIcon(weatherData.currentWeather.Icon);
      ui.displayLocation(weatherData.currentWeather.Location);
      ui.displayDescription(weatherData.currentWeather.Conditions);
      ui.displayHighTemperature(weatherData.currentWeather.High);
      ui.displayLowTemperature(weatherData.currentWeather.Low);
      ui.displayPrecipProbability(weatherData.currentWeather.PrecipProb);
      ui.displayForecast(weatherData.forecast);
    } catch (error) {
      ui.displayError("Unable to fetch weather data" + error);
    }
  }

  weatherOnLoad();
});


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUI: () => (/* binding */ createUI)
/* harmony export */ });
// `ui.js`: For DOM manipulation

function createUI(elements) {
  return {
    displayTemperature(temp) {
      elements.tempContainer.textContent = `${temp}°F`;
    },
    displayIcon(icon) {
      console.log(icon);
      const iconPath = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")(`./${icon}.svg`);
      elements.iconContainer.src = iconPath;
      this.updateBackgroundIcon(icon);
    },
    displayDescription(description) {
      elements.descriptionContainer.textContent = description;
    },
    displayHighTemperature(high) {
      elements.highContainer.textContent = `High: ${high}°F`;
    },
    displayLowTemperature(low) {
      elements.lowContainer.textContent = `Low: ${low}°F`;
    },
    displayPrecipProbability(precipProb) {
      elements.precipProbContainer.textContent = `Precip: ${precipProb}%`;
    },
    displayForecast(forecastData) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      elements.forecastContainer.innerHTML = ""; // Clear existing forecast

      for (let i = 1; i < 8; i++) {
        const dayData = forecastData[i];
        const date = new Date(dayData.datetime);
        const dayOfWeek = daysOfWeek[date.getDay()];

        const dayElement = document.createElement("div");
        dayElement.classList.add("forecast-day"); // Consider adding some CSS for this class

        dayElement.innerHTML = `
            <h3>${dayOfWeek}</h3>
            <img src="./Icons/${dayData.icon}.svg" alt="${
          dayData.icon
        }" class="forecast-icon">
            <div class="temp">${Math.round(dayData.temp)}°F</div>
            <div class="range">↑${Math.round(
              dayData.tempmax
            )}°F | ↓${Math.round(dayData.tempmin)}°F</div>
            <div class="precip">💧${Math.round(dayData.precipprob)}%</div>
          `;

        elements.forecastContainer.appendChild(dayElement);

        // Trigger reflow to ensure animation plays for each element
        void dayElement.offsetWidth;

        // Set animation delay based on index
        dayElement.style.animationDelay = `${i * 0.1}s`;
      }
    },
    displayLoading() {
      console.log("loading");
    },
    displayError(message) {
      console.log(message);
    },
    displayLocation(location) {
      elements.locationDisplayContainer.textContent = location;
    },
    updateBackgroundIcon(icon) {
      const iconPath = __webpack_require__("./src/Icons sync recursive ^\\.\\/.*\\.svg$")(`./${icon}.svg`);
      document.getElementById(
        "background-icon"
      ).style.backgroundImage = `url(${iconPath})`;
    },
  };
}


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
// weather.js

const getWeather = async function (location, WEATHER_API_KEY) {
  //   let location = locInput.value;
  const requestString = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WEATHER_API_KEY}`;

  try {
    const response = await fetch(requestString, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Could not fetch source");
    }
    const result = await response.json();
    console.log(result);

    const currentWeatherData = {
      Conditions: result.currentConditions.conditions,
      Temp: result.currentConditions.temp,
      Feelslike: result.currentConditions.feelslike,
      Humidity: result.currentConditions.humidity,
      Icon: result.currentConditions.icon,
      Precip: result.currentConditions.precip,
      PrecipProb: result.currentConditions.precipprob,
      PrecipType: result.currentConditions.preciptype,
      High: result.days[0].tempmax,
      Low: result.days[0].tempmin,
      Location: result.resolvedAddress,
    };

    const forecastData = result.days;
    console.log(forecastData);

    return {
      currentWeather: currentWeatherData,
      forecast: forecastData,
    };
  } catch (error) {
    console.error("Error:", error);
  }
};




/***/ }),

/***/ "./src/Icons/clear-day.svg":
/*!*********************************!*\
  !*** ./src/Icons/clear-day.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55f155dffdd173d4bbe5.svg";

/***/ }),

/***/ "./src/Icons/clear-night.svg":
/*!***********************************!*\
  !*** ./src/Icons/clear-night.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17ac83aa4b47967708fa.svg";

/***/ }),

/***/ "./src/Icons/cloudy.svg":
/*!******************************!*\
  !*** ./src/Icons/cloudy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "57f38995f0f82dd5dc08.svg";

/***/ }),

/***/ "./src/Icons/fog.svg":
/*!***************************!*\
  !*** ./src/Icons/fog.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5465c93e38463cdf13b3.svg";

/***/ }),

/***/ "./src/Icons/hail.svg":
/*!****************************!*\
  !*** ./src/Icons/hail.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "136b4e1335cc8985fdff.svg";

/***/ }),

/***/ "./src/Icons/partly-cloudy-day.svg":
/*!*****************************************!*\
  !*** ./src/Icons/partly-cloudy-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb0c783594fd8102cf86.svg";

/***/ }),

/***/ "./src/Icons/partly-cloudy-night.svg":
/*!*******************************************!*\
  !*** ./src/Icons/partly-cloudy-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1726c4a3f3910b9e9ba.svg";

/***/ }),

/***/ "./src/Icons/rain-snow-showers-day.svg":
/*!*********************************************!*\
  !*** ./src/Icons/rain-snow-showers-day.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbae52cb3b31c779f059.svg";

/***/ }),

/***/ "./src/Icons/rain-snow-showers-night.svg":
/*!***********************************************!*\
  !*** ./src/Icons/rain-snow-showers-night.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0de1d5a55af232398589.svg";

/***/ }),

/***/ "./src/Icons/rain-snow.svg":
/*!*********************************!*\
  !*** ./src/Icons/rain-snow.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0007ef369b7c54d6283d.svg";

/***/ }),

/***/ "./src/Icons/rain.svg":
/*!****************************!*\
  !*** ./src/Icons/rain.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e58cc7dcb66f8b2afb5.svg";

/***/ }),

/***/ "./src/Icons/showers-day.svg":
/*!***********************************!*\
  !*** ./src/Icons/showers-day.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "509a1ba1edc4b13535ad.svg";

/***/ }),

/***/ "./src/Icons/showers-night.svg":
/*!*************************************!*\
  !*** ./src/Icons/showers-night.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "873426b7a281b44ccbe1.svg";

/***/ }),

/***/ "./src/Icons/sleet.svg":
/*!*****************************!*\
  !*** ./src/Icons/sleet.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d8e4c6395f0482e8470.svg";

/***/ }),

/***/ "./src/Icons/snow-showers-day.svg":
/*!****************************************!*\
  !*** ./src/Icons/snow-showers-day.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4b481263984dc78c37aa.svg";

/***/ }),

/***/ "./src/Icons/snow-showers-night.svg":
/*!******************************************!*\
  !*** ./src/Icons/snow-showers-night.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91f635208aa0c51ba9cd.svg";

/***/ }),

/***/ "./src/Icons/snow.svg":
/*!****************************!*\
  !*** ./src/Icons/snow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5cd9d2df6b8a615bb430.svg";

/***/ }),

/***/ "./src/Icons/thunder-rain.svg":
/*!************************************!*\
  !*** ./src/Icons/thunder-rain.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f1832e90c98c53adf9e7.svg";

/***/ }),

/***/ "./src/Icons/thunder-showers-day.svg":
/*!*******************************************!*\
  !*** ./src/Icons/thunder-showers-day.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8d97ccd035616f277d50.svg";

/***/ }),

/***/ "./src/Icons/thunder-showers-night.svg":
/*!*********************************************!*\
  !*** ./src/Icons/thunder-showers-night.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "935adff480ff6e1dbcca.svg";

/***/ }),

/***/ "./src/Icons/thunder.svg":
/*!*******************************!*\
  !*** ./src/Icons/thunder.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "57b2c0db379d7543e45d.svg";

/***/ }),

/***/ "./src/Icons/wind.svg":
/*!****************************!*\
  !*** ./src/Icons/wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a95427cbc9a431f7838.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBLCtHQUErRyxTQUFTLE9BQU8sZ0JBQWdCOztBQUUvSTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL0ljb25zLyBzeW5jIF5cXC5cXC8uKlxcLnN2ZyQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogKiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0gKi9cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiwgU2VyaWY7XG4gIC8qIGNvbG9yOiByZ2IoNzEsIDY4LCA2OCk7ICovXG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDc2LCAxMjksIDIyMCksIHJnYigxNTEsIDE3NCwgMjE0KSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBlbnN1cmUgaXQgdGFrZXMgZnVsbCBzY3JlZW4gaGVpZ2h0ICovXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyAvKiBhZGRzIHNvbWUgcGFkZGluZyBhdCBib3R0b20gKi9cbn1cblxuI2hlYWRlciB7XG4gIGhlaWdodDogMTV2aDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICAvKiBmb250LWZhbWlseTogR2FyYW1vbmQsIFNlcmlmOyAqL1xuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNtYWluY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvOyAvKiBhbGxvdyBpdCB0byBncm93ICovXG4gIG1pbi1oZWlnaHQ6IDgwdmg7IC8qIG1haW50YWluIHlvdXIgZ2VuZXJhbCBsYXlvdXQgKi9cbn1cblxuI3RvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjAlO1xuICB3aWR0aDogOTB2dztcbn1cblxuI2Rpc3BsYXkge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiN1cHBlcmRpc3BsYXkge1xuICBoZWlnaHQ6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbiNpY29uIHtcbiAgd2lkdGg6IDE1MHB4OyAvKiBTZXQgYSBzcGVjaWZpYyB3aWR0aCAqL1xuICBoZWlnaHQ6IDE1MHB4OyAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNpY29uIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuI3RlbXAge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuI2ZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IGF1dG87IC8qIGxldCBpdCBiZSBhcyB0YWxsIGFzIGl0IG5lZWRzICovXG4gIGdhcDogMTBweDsgLyogYWRkIHNwYWNlIGJldHdlZW4gZm9yZWNhc3QgZGF5cyAqL1xuICBwYWRkaW5nOiAxMHB4IDA7IC8qIGFkZCBzb21lIHZlcnRpY2FsIHBhZGRpbmcgKi9cbn1cblxuI2lucHV0IHtcbiAgd2lkdGg6IDI1JTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4jZ2lmIHtcbiAgaGVpZ2h0OiA0MiU7XG59XG5cbiNsb3dlcmRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuI2hpZ2gsXG4jbG93LFxuI3ByZWNpcCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZGVzY3JpcHRpb24ge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0LWRheSB7XG4gIHdpZHRoOiAxMjBweDsgLyogU2V0IGEgc3BlY2lmaWMgd2lkdGggKi9cbiAgaGVpZ2h0OiAyMDBweDsgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0LiBBZGp1c3QgYXMgbmVlZGVkICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogVGhpcyBnaXZlcyBldmVuIHNwYWNpbmcgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAvKiBTbGlnaHRseSB0cmFuc3BhcmVudCAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIE9wdGlvbmFsOiBnaXZlcyBhIG5pY2Ugcm91bmRlZCBsb29rICovXG4gIG1hcmdpbjogMCA1cHg7IC8qIFNwYWNlIGJldHdlZW4gZm9yZWNhc3QgZGF5cyAqL1xufVxuXG4uZm9yZWNhc3QtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbiNmb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAyMjBweDsgLyogVGhpcyBzaG91bGQgYmUgc2xpZ2h0bHkgbGFyZ2VyIHRoYW4gLmZvcmVjYXN0LWRheSAqL1xuICBvdmVyZmxvdy14OiBhdXRvOyAvKiBBbGxvdyBob3Jpem9udGFsIHNjcm9sbGluZyBpZiBuZWVkZWQgKi9cbiAgcGFkZGluZzogMTBweCAwOyAvKiBHaXZlcyBzb21lIHZlcnRpY2FsIHBhZGRpbmcgKi9cbn1cblxuI2xvY2F0aW9uLWRpc3BsYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbiNiYWNrZ3JvdW5kLWljb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTEwMHB4O1xuICByaWdodDogLTEwMHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogODAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgb3BhY2l0eTogMC4xO1xuICB6LWluZGV4OiAtMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVBbmRGbGlwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSgtOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZm9yZWNhc3QtZGF5IHtcbiAgLyogLi4uIGV4aXN0aW5nIHN0eWxlcyAuLi4gKi9cbiAgYW5pbWF0aW9uOiBzbGlkZUFuZEZsaXAgMC41cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgI3RvcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gICNkaXNwbGF5IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgI2lucHV0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAjZm9yZWNhc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgfVxuXG4gIC5mb3JlY2FzdC1kYXkge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2hlYWRlciB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgI3VwcGVyZGlzcGxheSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2ljb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLmZvcmVjYXN0LWRheSB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLHVEQUF1RDtFQUN2RCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3RUFBd0U7RUFDeEUsaUJBQWlCLEVBQUUsdUNBQXVDO0VBQzFELG9CQUFvQixFQUFFLGdDQUFnQztBQUN4RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZLEVBQUUscUJBQXFCO0VBQ25DLGdCQUFnQixFQUFFLGlDQUFpQztBQUNyRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVksRUFBRSx5QkFBeUI7RUFDdkMsYUFBYSxFQUFFLDBCQUEwQjtFQUN6QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFFLGtDQUFrQztFQUNoRCxTQUFTLEVBQUUsb0NBQW9DO0VBQy9DLGVBQWUsRUFBRSw4QkFBOEI7QUFDakQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQ0FBcUM7RUFDckMsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVksRUFBRSx5QkFBeUI7RUFDdkMsYUFBYSxFQUFFLDRDQUE0QztFQUMzRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBRSw0QkFBNEI7RUFDNUQsYUFBYTtFQUNiLDBDQUEwQyxFQUFFLHlCQUF5QjtFQUNyRSxrQkFBa0IsRUFBRSx3Q0FBd0M7RUFDNUQsYUFBYSxFQUFFLGdDQUFnQztBQUNqRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhLEVBQUUsc0RBQXNEO0VBQ3JFLGdCQUFnQixFQUFFLHlDQUF5QztFQUMzRCxlQUFlLEVBQUUsZ0NBQWdDO0FBQ25EOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsOENBQThDO0VBQzlDLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAqIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59ICovXFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWYsIFNlcmlmO1xcbiAgLyogY29sb3I6IHJnYig3MSwgNjgsIDY4KTsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDc2LCAxMjksIDIyMCksIHJnYigxNTEsIDE3NCwgMjE0KSk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogZW5zdXJlIGl0IHRha2VzIGZ1bGwgc2NyZWVuIGhlaWdodCAqL1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7IC8qIGFkZHMgc29tZSBwYWRkaW5nIGF0IGJvdHRvbSAqL1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIC8qIGZvbnQtZmFtaWx5OiBHYXJhbW9uZCwgU2VyaWY7ICovXFxuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWFpbmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGF1dG87IC8qIGFsbG93IGl0IHRvIGdyb3cgKi9cXG4gIG1pbi1oZWlnaHQ6IDgwdmg7IC8qIG1haW50YWluIHlvdXIgZ2VuZXJhbCBsYXlvdXQgKi9cXG59XFxuXFxuI3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogOTB2dztcXG59XFxuXFxuI2Rpc3BsYXkge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiN1cHBlcmRpc3BsYXkge1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNpY29uIHtcXG4gIHdpZHRoOiAxNTBweDsgLyogU2V0IGEgc3BlY2lmaWMgd2lkdGggKi9cXG4gIGhlaWdodDogMTUwcHg7IC8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2ljb24gaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGVtcCB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbiNmb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogYXV0bzsgLyogbGV0IGl0IGJlIGFzIHRhbGwgYXMgaXQgbmVlZHMgKi9cXG4gIGdhcDogMTBweDsgLyogYWRkIHNwYWNlIGJldHdlZW4gZm9yZWNhc3QgZGF5cyAqL1xcbiAgcGFkZGluZzogMTBweCAwOyAvKiBhZGQgc29tZSB2ZXJ0aWNhbCBwYWRkaW5nICovXFxufVxcblxcbiNpbnB1dCB7XFxuICB3aWR0aDogMjUlO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZ2lmIHtcXG4gIGhlaWdodDogNDIlO1xcbn1cXG5cXG4jbG93ZXJkaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG4jaGlnaCxcXG4jbG93LFxcbiNwcmVjaXAge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gIHdpZHRoOiAxMjBweDsgLyogU2V0IGEgc3BlY2lmaWMgd2lkdGggKi9cXG4gIGhlaWdodDogMjAwcHg7IC8qIFNldCBhIHNwZWNpZmljIGhlaWdodC4gQWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvKiBUaGlzIGdpdmVzIGV2ZW4gc3BhY2luZyAqL1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTsgLyogU2xpZ2h0bHkgdHJhbnNwYXJlbnQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogT3B0aW9uYWw6IGdpdmVzIGEgbmljZSByb3VuZGVkIGxvb2sgKi9cXG4gIG1hcmdpbjogMCA1cHg7IC8qIFNwYWNlIGJldHdlZW4gZm9yZWNhc3QgZGF5cyAqL1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbiNmb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAyMjBweDsgLyogVGhpcyBzaG91bGQgYmUgc2xpZ2h0bHkgbGFyZ2VyIHRoYW4gLmZvcmVjYXN0LWRheSAqL1xcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogQWxsb3cgaG9yaXpvbnRhbCBzY3JvbGxpbmcgaWYgbmVlZGVkICovXFxuICBwYWRkaW5nOiAxMHB4IDA7IC8qIEdpdmVzIHNvbWUgdmVydGljYWwgcGFkZGluZyAqL1xcbn1cXG5cXG4jbG9jYXRpb24tZGlzcGxheSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuI2JhY2tncm91bmQtaWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDBweDtcXG4gIHJpZ2h0OiAtMTAwcHg7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIG9wYWNpdHk6IDAuMTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVBbmRGbGlwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGVZKC05MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mb3JlY2FzdC1kYXkge1xcbiAgLyogLi4uIGV4aXN0aW5nIHN0eWxlcyAuLi4gKi9cXG4gIGFuaW1hdGlvbjogc2xpZGVBbmRGbGlwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI2hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICB9XFxuXFxuICAjdG9wIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgI2Rpc3BsYXkge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAjaW5wdXQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgI2ZvcmVjYXN0IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgLmZvcmVjYXN0LWRheSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcblxcbiAgI3VwcGVyZGlzcGxheSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjaWNvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5mb3JlY2FzdC1kYXkge1xcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2xlYXItZGF5LnN2Z1wiOiBcIi4vc3JjL0ljb25zL2NsZWFyLWRheS5zdmdcIixcblx0XCIuL2NsZWFyLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL0ljb25zL2NsZWFyLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vY2xvdWR5LnN2Z1wiOiBcIi4vc3JjL0ljb25zL2Nsb3VkeS5zdmdcIixcblx0XCIuL2ZvZy5zdmdcIjogXCIuL3NyYy9JY29ucy9mb2cuc3ZnXCIsXG5cdFwiLi9oYWlsLnN2Z1wiOiBcIi4vc3JjL0ljb25zL2hhaWwuc3ZnXCIsXG5cdFwiLi9wYXJ0bHktY2xvdWR5LWRheS5zdmdcIjogXCIuL3NyYy9JY29ucy9wYXJ0bHktY2xvdWR5LWRheS5zdmdcIixcblx0XCIuL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnXCI6IFwiLi9zcmMvSWNvbnMvcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIixcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9JY29ucy9yYWluLXNub3ctc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5zdmdcIjogXCIuL3NyYy9JY29ucy9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3JhaW4tc25vdy5zdmdcIjogXCIuL3NyYy9JY29ucy9yYWluLXNub3cuc3ZnXCIsXG5cdFwiLi9yYWluLnN2Z1wiOiBcIi4vc3JjL0ljb25zL3JhaW4uc3ZnXCIsXG5cdFwiLi9zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9JY29ucy9zaG93ZXJzLWRheS5zdmdcIixcblx0XCIuL3Nob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvSWNvbnMvc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3NsZWV0LnN2Z1wiOiBcIi4vc3JjL0ljb25zL3NsZWV0LnN2Z1wiLFxuXHRcIi4vc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9JY29ucy9zbm93LXNob3dlcnMtZGF5LnN2Z1wiLFxuXHRcIi4vc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL0ljb25zL3Nub3ctc2hvd2Vycy1uaWdodC5zdmdcIixcblx0XCIuL3Nub3cuc3ZnXCI6IFwiLi9zcmMvSWNvbnMvc25vdy5zdmdcIixcblx0XCIuL3RodW5kZXItcmFpbi5zdmdcIjogXCIuL3NyYy9JY29ucy90aHVuZGVyLXJhaW4uc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtZGF5LnN2Z1wiOiBcIi4vc3JjL0ljb25zL3RodW5kZXItc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvSWNvbnMvdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vdGh1bmRlci5zdmdcIjogXCIuL3NyYy9JY29ucy90aHVuZGVyLnN2Z1wiLFxuXHRcIi4vd2luZC5zdmdcIjogXCIuL3NyYy9JY29ucy93aW5kLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9JY29ucyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5zdmckXCI7IiwiY29uc3QgV0VBVEhFUl9BUElfS0VZID0gXCJaNzM1QkgyVVlaQTJON1hHNFNNQUU4WVZDXCI7XG5jb25zdCBHSVBIWV9BUElfS0VZID0gXCJsTmFYSmhpMEd6eVQ0V05XT055NmJtQTM3aWVRSUdzN1wiO1xuXG5leHBvcnQgeyBXRUFUSEVSX0FQSV9LRVksIEdJUEhZX0FQSV9LRVkgfTtcbiIsIi8vIGluZGV4LmpzXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBXRUFUSEVSX0FQSV9LRVksIEdJUEhZX0FQSV9LRVkgfSBmcm9tIFwiLi9jb25maWcuanNcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi93ZWF0aGVyLmpzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVVJIH0gZnJvbSBcIi4vdWkuanNcIjsgLy8gQ2hhbmdlIHRoaXMgdG8gYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgVUlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IHtcbiAgICBsb2NhdGlvbklucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpLFxuICAgIGdpZkNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnaWZcIiksXG4gICAgdGVtcENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpLFxuICAgIGljb25Db250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbiBpbWdcIiksXG4gICAgaGlnaENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdoXCIpLFxuICAgIGxvd0NvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb3dcIiksXG4gICAgcHJlY2lwUHJvYkNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVjaXBcIiksXG4gICAgZGVzY3JpcHRpb25Db250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIiksXG4gICAgZm9yZWNhc3RDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RcIiksXG4gICAgbG9jYXRpb25EaXNwbGF5Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLWRpc3BsYXlcIiksXG4gIH07XG5cbiAgY29uc3QgdWkgPSBjcmVhdGVVSShlbGVtZW50cyk7IC8vIENyZWF0ZSBVSSB3aXRoIGVsZW1lbnRzXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlV2VhdGhlclNlYXJjaChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gZWxlbWVudHMubG9jYXRpb25JbnB1dC52YWx1ZTtcblxuICAgICAgdWkuZGlzcGxheUxvYWRpbmcoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbiwgV0VBVEhFUl9BUElfS0VZKTtcbiAgICAgICAgdWkuZGlzcGxheVRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLlRlbXApO1xuICAgICAgICB1aS5kaXNwbGF5SWNvbih3ZWF0aGVyRGF0YS5jdXJyZW50V2VhdGhlci5JY29uKTtcbiAgICAgICAgdWkuZGlzcGxheUxvY2F0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLkxvY2F0aW9uKTtcbiAgICAgICAgdWkuZGlzcGxheURlc2NyaXB0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLkNvbmRpdGlvbnMpO1xuICAgICAgICB1aS5kaXNwbGF5SGlnaFRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLkhpZ2gpO1xuICAgICAgICB1aS5kaXNwbGF5TG93VGVtcGVyYXR1cmUod2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIuTG93KTtcbiAgICAgICAgdWkuZGlzcGxheVByZWNpcFByb2JhYmlsaXR5KHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLlByZWNpcFByb2IpO1xuICAgICAgICB1aS5kaXNwbGF5Rm9yZWNhc3Qod2VhdGhlckRhdGEuZm9yZWNhc3QpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdWkuZGlzcGxheUVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHdlYXRoZXIgZGF0YVwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgYXBwXG4gIGVsZW1lbnRzLmxvY2F0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlV2VhdGhlclNlYXJjaCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gd2VhdGhlck9uTG9hZCgpIHtcbiAgICB1aS5kaXNwbGF5TG9hZGluZygpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoXCJOZXcgWW9ya1wiLCBXRUFUSEVSX0FQSV9LRVkpO1xuICAgICAgdWkuZGlzcGxheVRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLlRlbXApO1xuICAgICAgdWkuZGlzcGxheUljb24od2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIuSWNvbik7XG4gICAgICB1aS5kaXNwbGF5TG9jYXRpb24od2VhdGhlckRhdGEuY3VycmVudFdlYXRoZXIuTG9jYXRpb24pO1xuICAgICAgdWkuZGlzcGxheURlc2NyaXB0aW9uKHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLkNvbmRpdGlvbnMpO1xuICAgICAgdWkuZGlzcGxheUhpZ2hUZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YS5jdXJyZW50V2VhdGhlci5IaWdoKTtcbiAgICAgIHVpLmRpc3BsYXlMb3dUZW1wZXJhdHVyZSh3ZWF0aGVyRGF0YS5jdXJyZW50V2VhdGhlci5Mb3cpO1xuICAgICAgdWkuZGlzcGxheVByZWNpcFByb2JhYmlsaXR5KHdlYXRoZXJEYXRhLmN1cnJlbnRXZWF0aGVyLlByZWNpcFByb2IpO1xuICAgICAgdWkuZGlzcGxheUZvcmVjYXN0KHdlYXRoZXJEYXRhLmZvcmVjYXN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdWkuZGlzcGxheUVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHdlYXRoZXIgZGF0YVwiICsgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHdlYXRoZXJPbkxvYWQoKTtcbn0pO1xuIiwiLy8gYHVpLmpzYDogRm9yIERPTSBtYW5pcHVsYXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVJKGVsZW1lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgZGlzcGxheVRlbXBlcmF0dXJlKHRlbXApIHtcbiAgICAgIGVsZW1lbnRzLnRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHt0ZW1wfcKwRmA7XG4gICAgfSxcbiAgICBkaXNwbGF5SWNvbihpY29uKSB7XG4gICAgICBjb25zb2xlLmxvZyhpY29uKTtcbiAgICAgIGNvbnN0IGljb25QYXRoID0gcmVxdWlyZShgLi9JY29ucy8ke2ljb259LnN2Z2ApO1xuICAgICAgZWxlbWVudHMuaWNvbkNvbnRhaW5lci5zcmMgPSBpY29uUGF0aDtcbiAgICAgIHRoaXMudXBkYXRlQmFja2dyb3VuZEljb24oaWNvbik7XG4gICAgfSxcbiAgICBkaXNwbGF5RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgIGVsZW1lbnRzLmRlc2NyaXB0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBkaXNwbGF5SGlnaFRlbXBlcmF0dXJlKGhpZ2gpIHtcbiAgICAgIGVsZW1lbnRzLmhpZ2hDb250YWluZXIudGV4dENvbnRlbnQgPSBgSGlnaDogJHtoaWdofcKwRmA7XG4gICAgfSxcbiAgICBkaXNwbGF5TG93VGVtcGVyYXR1cmUobG93KSB7XG4gICAgICBlbGVtZW50cy5sb3dDb250YWluZXIudGV4dENvbnRlbnQgPSBgTG93OiAke2xvd33CsEZgO1xuICAgIH0sXG4gICAgZGlzcGxheVByZWNpcFByb2JhYmlsaXR5KHByZWNpcFByb2IpIHtcbiAgICAgIGVsZW1lbnRzLnByZWNpcFByb2JDb250YWluZXIudGV4dENvbnRlbnQgPSBgUHJlY2lwOiAke3ByZWNpcFByb2J9JWA7XG4gICAgfSxcbiAgICBkaXNwbGF5Rm9yZWNhc3QoZm9yZWNhc3REYXRhKSB7XG4gICAgICBjb25zdCBkYXlzT2ZXZWVrID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuICAgICAgZWxlbWVudHMuZm9yZWNhc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgZm9yZWNhc3RcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGF5RGF0YSA9IGZvcmVjYXN0RGF0YVtpXTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRheURhdGEuZGF0ZXRpbWUpO1xuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBkYXlzT2ZXZWVrW2RhdGUuZ2V0RGF5KCldO1xuXG4gICAgICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYXlcIik7IC8vIENvbnNpZGVyIGFkZGluZyBzb21lIENTUyBmb3IgdGhpcyBjbGFzc1xuXG4gICAgICAgIGRheUVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzPiR7ZGF5T2ZXZWVrfTwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vSWNvbnMvJHtkYXlEYXRhLmljb259LnN2Z1wiIGFsdD1cIiR7XG4gICAgICAgICAgZGF5RGF0YS5pY29uXG4gICAgICAgIH1cIiBjbGFzcz1cImZvcmVjYXN0LWljb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+JHtNYXRoLnJvdW5kKGRheURhdGEudGVtcCl9wrBGPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFuZ2VcIj7ihpEke01hdGgucm91bmQoXG4gICAgICAgICAgICAgIGRheURhdGEudGVtcG1heFxuICAgICAgICAgICAgKX3CsEYgfCDihpMke01hdGgucm91bmQoZGF5RGF0YS50ZW1wbWluKX3CsEY8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVjaXBcIj7wn5KnJHtNYXRoLnJvdW5kKGRheURhdGEucHJlY2lwcHJvYil9JTwvZGl2PlxuICAgICAgICAgIGA7XG5cbiAgICAgICAgZWxlbWVudHMuZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciByZWZsb3cgdG8gZW5zdXJlIGFuaW1hdGlvbiBwbGF5cyBmb3IgZWFjaCBlbGVtZW50XG4gICAgICAgIHZvaWQgZGF5RWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgICAvLyBTZXQgYW5pbWF0aW9uIGRlbGF5IGJhc2VkIG9uIGluZGV4XG4gICAgICAgIGRheUVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpICogMC4xfXNgO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcGxheUxvYWRpbmcoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmdcIik7XG4gICAgfSxcbiAgICBkaXNwbGF5RXJyb3IobWVzc2FnZSkge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSxcbiAgICBkaXNwbGF5TG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgIGVsZW1lbnRzLmxvY2F0aW9uRGlzcGxheUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xuICAgIH0sXG4gICAgdXBkYXRlQmFja2dyb3VuZEljb24oaWNvbikge1xuICAgICAgY29uc3QgaWNvblBhdGggPSByZXF1aXJlKGAuL0ljb25zLyR7aWNvbn0uc3ZnYCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWljb25cIlxuICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aWNvblBhdGh9KWA7XG4gICAgfSxcbiAgfTtcbn1cbiIsIi8vIHdlYXRoZXIuanNcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uIChsb2NhdGlvbiwgV0VBVEhFUl9BUElfS0VZKSB7XG4gIC8vICAgbGV0IGxvY2F0aW9uID0gbG9jSW5wdXQudmFsdWU7XG4gIGNvbnN0IHJlcXVlc3RTdHJpbmcgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/a2V5PSR7V0VBVEhFUl9BUElfS0VZfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RTdHJpbmcsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZldGNoIHNvdXJjZVwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB7XG4gICAgICBDb25kaXRpb25zOiByZXN1bHQuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcbiAgICAgIFRlbXA6IHJlc3VsdC5jdXJyZW50Q29uZGl0aW9ucy50ZW1wLFxuICAgICAgRmVlbHNsaWtlOiByZXN1bHQuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlLFxuICAgICAgSHVtaWRpdHk6IHJlc3VsdC5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eSxcbiAgICAgIEljb246IHJlc3VsdC5jdXJyZW50Q29uZGl0aW9ucy5pY29uLFxuICAgICAgUHJlY2lwOiByZXN1bHQuY3VycmVudENvbmRpdGlvbnMucHJlY2lwLFxuICAgICAgUHJlY2lwUHJvYjogcmVzdWx0LmN1cnJlbnRDb25kaXRpb25zLnByZWNpcHByb2IsXG4gICAgICBQcmVjaXBUeXBlOiByZXN1bHQuY3VycmVudENvbmRpdGlvbnMucHJlY2lwdHlwZSxcbiAgICAgIEhpZ2g6IHJlc3VsdC5kYXlzWzBdLnRlbXBtYXgsXG4gICAgICBMb3c6IHJlc3VsdC5kYXlzWzBdLnRlbXBtaW4sXG4gICAgICBMb2NhdGlvbjogcmVzdWx0LnJlc29sdmVkQWRkcmVzcyxcbiAgICB9O1xuXG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gcmVzdWx0LmRheXM7XG4gICAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50V2VhdGhlcjogY3VycmVudFdlYXRoZXJEYXRhLFxuICAgICAgZm9yZWNhc3Q6IGZvcmVjYXN0RGF0YSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=