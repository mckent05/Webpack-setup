/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "noAuto": () => (/* binding */ noAuto),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "toHtml": () => (/* binding */ toHtml),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "library": () => (/* binding */ library),
/* harmony export */   "dom": () => (/* binding */ dom),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition)
/* harmony export */ });
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof __webpack_require__.g !== 'undefined' && typeof __webpack_require__.g.process !== 'undefined' && typeof __webpack_require__.g.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    __webpack_require__.g.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  __webpack_require__.g.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.4\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};




/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisV.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisV.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'ellipsis-v';
var width = 192;
var height = 512;
var ligatures = [];
var unicode = 'f142';
var svgPathData = 'M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faEllipsisV = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSignInAlt.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSignInAlt.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'sign-in-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f6';
var svgPathData = 'M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSignInAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'sync-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f1';
var svgPathData = 'M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faSyncAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTrash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTrash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'trash';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f1f8';
var svgPathData = 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTrash = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff2 */ "./src/my-font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff */ "./src/my-font.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  margin: 5% auto;\r\n  flex-direction: column;\r\n  outline: 1px solid whitesmoke;\r\n  box-shadow: 2px 4px 6px rgb(114, 110, 110);\r\n  width: 70%;\r\n}\r\n\r\n.title-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid grey;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.header-title {\r\n  display: flex;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  order: 1;\r\n  position: relative;\r\n  width: 70%;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.sync {\r\n  order: 2;\r\n}\r\n\r\n.inputdiv {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  order: 2;\r\n  column-gap: 10px;\r\n  align-items: center;\r\n  padding: 12px 10px;\r\n}\r\n\r\n.add-todo {\r\n  order: 1;\r\n  margin: 10px;\r\n  border: none;\r\n  outline: none;\r\n  width: 80%;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  padding: 8px 0;\r\n}\r\n\r\n.enter {\r\n  order: 2;\r\n  display: flex;\r\n  transform: scale(1.5);\r\n  color: #0f0;\r\n}\r\n\r\n.list-cont {\r\n  padding: 0;\r\n  list-style: none;\r\n  order: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.clr-todo {\r\n  order: 4;\r\n  border: none;\r\n  outline: none;\r\n  text-transform: capitalize;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px 8px;\r\n  font-size: 20px;\r\n  color: grey;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.clr-todo:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.to-do {\r\n  display: flex;\r\n  column-gap: 15px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-top: 1px solid grey;\r\n  border-bottom: 1px solid grey;\r\n  width: 100%;\r\n}\r\n\r\n.check {\r\n  width: 10%;\r\n  order: 1;\r\n}\r\n\r\n.task {\r\n  width: 80%;\r\n  display: flex;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: inherit;\r\n  order: 2;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.btn-cont {\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  order: 3;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n  color: rgba(245, 94, 94, 0.945);\r\n}\r\n\r\n.menu {\r\n  cursor: move;\r\n}\r\n\r\n.to-do:nth-child(even) {\r\n  background-color: rgb(233, 220, 220);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,oHAAiF;EACjF,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,0CAA0C;EAC1C,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,6BAA6B;EAC7B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,QAAQ;EACR,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,QAAQ;EACR,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"./my-font.woff2\") format(\"woff2\"), url(\"./my-font.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  margin: 5% auto;\r\n  flex-direction: column;\r\n  outline: 1px solid whitesmoke;\r\n  box-shadow: 2px 4px 6px rgb(114, 110, 110);\r\n  width: 70%;\r\n}\r\n\r\n.title-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid grey;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.header-title {\r\n  display: flex;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  order: 1;\r\n  position: relative;\r\n  width: 70%;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.sync {\r\n  order: 2;\r\n}\r\n\r\n.inputdiv {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  order: 2;\r\n  column-gap: 10px;\r\n  align-items: center;\r\n  padding: 12px 10px;\r\n}\r\n\r\n.add-todo {\r\n  order: 1;\r\n  margin: 10px;\r\n  border: none;\r\n  outline: none;\r\n  width: 80%;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  padding: 8px 0;\r\n}\r\n\r\n.enter {\r\n  order: 2;\r\n  display: flex;\r\n  transform: scale(1.5);\r\n  color: #0f0;\r\n}\r\n\r\n.list-cont {\r\n  padding: 0;\r\n  list-style: none;\r\n  order: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.clr-todo {\r\n  order: 4;\r\n  border: none;\r\n  outline: none;\r\n  text-transform: capitalize;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px 8px;\r\n  font-size: 20px;\r\n  color: grey;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.clr-todo:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.to-do {\r\n  display: flex;\r\n  column-gap: 15px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-top: 1px solid grey;\r\n  border-bottom: 1px solid grey;\r\n  width: 100%;\r\n}\r\n\r\n.check {\r\n  width: 10%;\r\n  order: 1;\r\n}\r\n\r\n.task {\r\n  width: 80%;\r\n  display: flex;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: inherit;\r\n  order: 2;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.btn-cont {\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  order: 3;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n  color: rgba(245, 94, 94, 0.945);\r\n}\r\n\r\n.menu {\r\n  cursor: move;\r\n}\r\n\r\n.to-do:nth-child(even) {\r\n  background-color: rgb(233, 220, 220);\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/my-font.woff":
/*!**************************!*\
  !*** ./src/my-font.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/my-font.woff2":
/*!***************************!*\
  !*** ./src/my-font.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff2";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"index": 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisV__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEllipsisV */ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisV.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTrash */ "./node_modules/@fortawesome/free-solid-svg-icons/faTrash.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSyncAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSyncAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSyncAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSignInAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faSignInAlt.js");







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons_faEllipsisV__WEBPACK_IMPORTED_MODULE_2__.faEllipsisV);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons_faTrash__WEBPACK_IMPORTED_MODULE_3__.faTrash);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons_faSyncAlt__WEBPACK_IMPORTED_MODULE_4__.faSyncAlt);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_solid_svg_icons_faSignInAlt__WEBPACK_IMPORTED_MODULE_5__.faSignInAlt);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.dom.watch();

const toDoList = [
  {
    description: 'i want to be great',
    index: 4,
    completed: false,
  },
  {
    description: 'i want to laugh',
    index: 3,
    completed: false,
  },
  {
    description: 'i want to have fun',
    index: 2,
    completed: false,
  },
  {
    description: 'i want to run',
    index: 1,
    completed: false,
  },
  {
    description: 'i want to box',
    index: 0,
    completed: false,
  },
];

// Lodash, currently included via a script, is required for this line to work
const element = document.createElement('div');
element.classList.add('container');
document.body.appendChild(element);

const container = document.createElement('ul');
container.classList.add('list-cont');
element.appendChild(container);

const clear = document.createElement('button');
clear.classList.add('clr-todo');
clear.innerHTML = 'clear all completed';
element.appendChild(clear);

const inputDiv = document.createElement('div');
inputDiv.classList.add('inputdiv');
element.appendChild(inputDiv);

const titleDiv = document.createElement('div');
titleDiv.classList.add('title-cont');
element.appendChild(titleDiv);

const title = document.createElement('h1');
title.classList.add('header-title');
title.textContent = 'todays to do';
titleDiv.appendChild(title);

const sync = document.createElement('i');
sync.classList.add('fa', 'fa-sync-alt', 'sync');
titleDiv.appendChild(sync);

const enterInput = document.createElement('input');
enterInput.classList.add('add-todo');
enterInput.placeholder = 'Add to your list ...';
inputDiv.appendChild(enterInput);

const enterIcon = document.createElement('i');
enterIcon.classList.add('fa', 'fa-sign-in-alt', 'enter');
inputDiv.appendChild(enterIcon);

const createToDo = (index) => {
  const list = document.createElement('li');
  list.setAttribute('draggable', 'true');
  list.classList.add('to-do');
  container.appendChild(list);

  const checkBox = document.createElement('input');
  checkBox.classList.add('check');
  checkBox.checked = toDoList[index].completed;
  checkBox.type = 'checkbox';
  list.appendChild(checkBox);

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('btn-cont');
  list.appendChild(btnDiv);

  const input = document.createElement('input');
  input.classList.add('task');
  input.readOnly = true;
  input.value = toDoList[index].description;
  list.appendChild(input);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash', 'trash');
  btnDiv.appendChild(icon);

  const icon2 = document.createElement('i');
  icon2.classList.add('fas', 'fa-ellipsis-v', 'menu');
  btnDiv.appendChild(icon2);
};

const displayToDo = () => {
  for (let i = 0; i < toDoList.length; i++) {
    const index = toDoList.map((item) => {
      if (item.index === i) {
        const myIndex = toDoList.indexOf(item);
        console.log(index)
      }
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  displayToDo();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscUJBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxQkFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUVsbGlwc2lzVi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU2lnbkluQWx0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBGb250IEF3ZXNvbWUgRnJlZSA1LjE1LjQgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb21cbiAqIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlL2ZyZWUgKEljb25zOiBDQyBCWSA0LjAsIEZvbnRzOiBTSUwgT0ZMIDEuMSwgQ29kZTogTUlUIExpY2Vuc2UpXG4gKi9cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIF9XSU5ET1cgPSB7fTtcbnZhciBfRE9DVU1FTlQgPSB7fTtcbnZhciBfTVVUQVRJT05fT0JTRVJWRVIgPSBudWxsO1xudmFyIF9QRVJGT1JNQU5DRSA9IHtcbiAgbWFyazogbm9vcCxcbiAgbWVhc3VyZTogbm9vcFxufTtcblxudHJ5IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSBfV0lORE9XID0gd2luZG93O1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykgX0RPQ1VNRU5UID0gZG9jdW1lbnQ7XG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIF9NVVRBVElPTl9PQlNFUlZFUiA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIGlmICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnKSBfUEVSRk9STUFOQ0UgPSBwZXJmb3JtYW5jZTtcbn0gY2F0Y2ggKGUpIHt9XG5cbnZhciBfcmVmID0gX1dJTkRPVy5uYXZpZ2F0b3IgfHwge30sXG4gICAgX3JlZiR1c2VyQWdlbnQgPSBfcmVmLnVzZXJBZ2VudCxcbiAgICB1c2VyQWdlbnQgPSBfcmVmJHVzZXJBZ2VudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHVzZXJBZ2VudDtcblxudmFyIFdJTkRPVyA9IF9XSU5ET1c7XG52YXIgRE9DVU1FTlQgPSBfRE9DVU1FTlQ7XG52YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG52YXIgUEVSRk9STUFOQ0UgPSBfUEVSRk9STUFOQ0U7XG52YXIgSVNfQlJPV1NFUiA9ICEhV0lORE9XLmRvY3VtZW50O1xudmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBJU19JRSA9IH51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpIHx8IH51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudC8nKTtcblxudmFyIE5BTUVTUEFDRV9JREVOVElGSUVSID0gJ19fX0ZPTlRfQVdFU09NRV9fXyc7XG52YXIgVU5JVFNfSU5fR1JJRCA9IDE2O1xudmFyIERFRkFVTFRfRkFNSUxZX1BSRUZJWCA9ICdmYSc7XG52YXIgREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUyA9ICdzdmctaW5saW5lLS1mYSc7XG52YXIgREFUQV9GQV9JMlNWRyA9ICdkYXRhLWZhLWkyc3ZnJztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORyA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50LXBlbmRpbmcnO1xudmFyIERBVEFfUFJFRklYID0gJ2RhdGEtcHJlZml4JztcbnZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbnZhciBIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MgPSAnZm9udGF3ZXNvbWUtaTJzdmcnO1xudmFyIE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DID0gJ2FzeW5jJztcbnZhciBUQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUyA9IFsnSFRNTCcsICdIRUFEJywgJ1NUWUxFJywgJ1NDUklQVCddO1xudmFyIFBST0RVQ1RJT04gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBQUkVGSVhfVE9fU1RZTEUgPSB7XG4gICdmYXMnOiAnc29saWQnLFxuICAnZmFyJzogJ3JlZ3VsYXInLFxuICAnZmFsJzogJ2xpZ2h0JyxcbiAgJ2ZhZCc6ICdkdW90b25lJyxcbiAgJ2ZhYic6ICdicmFuZHMnLFxuICAnZmFrJzogJ2tpdCcsXG4gICdmYSc6ICdzb2xpZCdcbn07XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICdkdW90b25lJzogJ2ZhZCcsXG4gICdicmFuZHMnOiAnZmFiJyxcbiAgJ2tpdCc6ICdmYWsnXG59O1xudmFyIExBWUVSU19URVhUX0NMQVNTTkFNRSA9ICdmYS1sYXllcnMtdGV4dCc7XG52YXIgRk9OVF9GQU1JTFlfUEFUVEVSTiA9IC9Gb250IEF3ZXNvbWUgKFs1IF0qKShTb2xpZHxSZWd1bGFyfExpZ2h0fER1b3RvbmV8QnJhbmRzfEZyZWV8UHJvfEtpdCkuKi9pOyAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIGhhbmRsZSBmb250LXdlaWdodCBmb3Iga2l0IFNWRyBwc2V1ZG8tZWxlbWVudHM/XG5cbnZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSB7XG4gICc5MDAnOiAnZmFzJyxcbiAgJzQwMCc6ICdmYXInLFxuICAnbm9ybWFsJzogJ2ZhcicsXG4gICczMDAnOiAnZmFsJ1xufTtcbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG52YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xudmFyIERVT1RPTkVfQ0xBU1NFUyA9IHtcbiAgR1JPVVA6ICdncm91cCcsXG4gIFNXQVBfT1BBQ0lUWTogJ3N3YXAtb3BhY2l0eScsXG4gIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5J1xufTtcbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ2ZsaXAtYm90aCcsICdzdGFjaycsICdzdGFjay0xeCcsICdzdGFjay0yeCcsICdpbnZlcnNlJywgJ2xheWVycycsICdsYXllcnMtdGV4dCcsICdsYXllcnMtY291bnRlcicsIERVT1RPTkVfQ0xBU1NFUy5HUk9VUCwgRFVPVE9ORV9DTEFTU0VTLlNXQVBfT1BBQ0lUWSwgRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlksIERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlldLmNvbmNhdChvbmVUb1Rlbi5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcInctXCIuY29uY2F0KG4pO1xufSkpO1xuXG52YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuZnVuY3Rpb24gZ2V0QXR0ckNvbmZpZyhhdHRyKSB7XG4gIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICAvLyBGb3IgZXhhbXBsZSA8c2NyaXB0IGRhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cyBzcmM9XCIuLi5cIj48L3NjcmlwdD5cbiAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICBpZiAodmFsID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh2YWwgPT09ICd0cnVlJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiB2YWw7XG59XG5cbmlmIChET0NVTUVOVCAmJiB0eXBlb2YgRE9DVU1FTlQucXVlcnlTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAga2V5ID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAga2VlcE9yaWdpbmFsU291cmNlOiB0cnVlLFxuICBtZWFzdXJlUGVyZm9ybWFuY2U6IGZhbHNlLFxuICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG59O1xuXG52YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0LCBpbml0aWFsKTtcblxuaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcblxudmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9jb25maWcpO1xuXG5XSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xudmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG52YXIgZnVuY3Rpb25zID0gW107XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZG9tcmVhZHkgKGZuKSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xufVxuXG52YXIgUEVORElORyA9ICdwZW5kaW5nJztcbnZhciBTRVRUTEVEID0gJ3NldHRsZWQnO1xudmFyIEZVTEZJTExFRCA9ICdmdWxmaWxsZWQnO1xudmFyIFJFSkVDVEVEID0gJ3JlamVjdGVkJztcblxudmFyIE5PT1AgPSBmdW5jdGlvbiBOT09QKCkge307XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jU2V0VGltZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAndW5kZWZpbmVkJyA/IHNldFRpbWVvdXQgOiBzZXRJbW1lZGlhdGU7XG52YXIgYXN5bmNRdWV1ZSA9IFtdO1xudmFyIGFzeW5jVGltZXI7XG5cbmZ1bmN0aW9uIGFzeW5jRmx1c2goKSB7XG4gIC8vIHJ1biBwcm9taXNlIGNhbGxiYWNrc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzeW5jUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBhc3luY1F1ZXVlW2ldWzBdKGFzeW5jUXVldWVbaV1bMV0pO1xuICB9IC8vIHJlc2V0IGFzeW5jIGFzeW5jUXVldWVcblxuXG4gIGFzeW5jUXVldWUgPSBbXTtcbiAgYXN5bmNUaW1lciA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc3luY0NhbGwoY2FsbGJhY2ssIGFyZykge1xuICBhc3luY1F1ZXVlLnB1c2goW2NhbGxiYWNrLCBhcmddKTtcblxuICBpZiAoIWFzeW5jVGltZXIpIHtcbiAgICBhc3luY1RpbWVyID0gdHJ1ZTtcbiAgICBhc3luY1NldFRpbWVyKGFzeW5jRmx1c2gsIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCBwcm9taXNlKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlcihyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3RQcm9taXNlKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHN1YnNjcmliZXIpIHtcbiAgdmFyIG93bmVyID0gc3Vic2NyaWJlci5vd25lcjtcbiAgdmFyIHNldHRsZWQgPSBvd25lci5fc3RhdGU7XG4gIHZhciB2YWx1ZSA9IG93bmVyLl9kYXRhO1xuICB2YXIgY2FsbGJhY2sgPSBzdWJzY3JpYmVyW3NldHRsZWRdO1xuICB2YXIgcHJvbWlzZSA9IHN1YnNjcmliZXIudGhlbjtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0dGxlZCA9IEZVTEZJTExFRDtcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSB7XG4gIHZhciByZXNvbHZlZDtcblxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykpIHtcbiAgICAgIC8vIHRoZW4gc2hvdWxkIGJlIHJldHJpZXZlZCBvbmx5IG9uY2VcbiAgICAgIHZhciB0aGVuID0gdmFsdWUudGhlbjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUgfHwgIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSB2YWx1ZTtcbiAgICBhc3luY0NhbGwocHVibGlzaEZ1bGZpbGxtZW50LCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gcmVhc29uO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fdGhlbiA9IHByb21pc2UuX3RoZW4uZm9yRWFjaChpbnZva2VDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hGdWxmaWxsbWVudChwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcblxuICBpZiAoIXByb21pc2UuX2hhbmRsZWQgJiYgaXNOb2RlKSB7XG4gICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgcHJvbWlzZS5fZGF0YSwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5UmVqZWN0aW9uSGFuZGxlZChwcm9taXNlKSB7XG4gIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbn1cbi8qKlxuICogQGNsYXNzXG4gKi9cblxuXG5mdW5jdGlvbiBQKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyICcgKyByZXNvbHZlciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1Byb21pc2VcXCc6IFBsZWFzZSB1c2UgdGhlIFxcJ25ld1xcJyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdGhpcy5fdGhlbiA9IFtdO1xuICBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgdGhpcyk7XG59XG5cblAucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUCxcbiAgX3N0YXRlOiBQRU5ESU5HLFxuICBfdGhlbjogbnVsbCxcbiAgX2RhdGE6IHVuZGVmaW5lZCxcbiAgX2hhbmRsZWQ6IGZhbHNlLFxuICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSB7XG4gICAgICBvd25lcjogdGhpcyxcbiAgICAgIHRoZW46IG5ldyB0aGlzLmNvbnN0cnVjdG9yKE5PT1ApLFxuICAgICAgZnVsZmlsbGVkOiBvbkZ1bGZpbGxtZW50LFxuICAgICAgcmVqZWN0ZWQ6IG9uUmVqZWN0aW9uXG4gICAgfTtcblxuICAgIGlmICgob25SZWplY3Rpb24gfHwgb25GdWxmaWxsbWVudCkgJiYgIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEICYmIGlzTm9kZSkge1xuICAgICAgICBhc3luY0NhbGwobm90aWZ5UmVqZWN0aW9uSGFuZGxlZCwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBGVUxGSUxMRUQgfHwgdGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAvLyBhbHJlYWR5IHJlc29sdmVkLCBjYWxsIGNhbGxiYWNrIGFzeW5jXG4gICAgICBhc3luY0NhbGwoaW52b2tlQ2FsbGJhY2ssIHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdWJzY3JpYmVcbiAgICAgIHRoaXMuX3RoZW4ucHVzaChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlci50aGVuO1xuICB9LFxuICBjYXRjaDogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cblAuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlbWFpbmluZyA9IDA7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcihpbmRleCkge1xuICAgICAgcmVtYWluaW5nKys7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCEgLS1yZW1haW5pbmcpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ldID0gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUC5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblAucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbnZhciBwaWNrZWQgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UgOiBQO1xuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG52YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gIHNpemU6IDE2LFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGU6IDAsXG4gIGZsaXBYOiBmYWxzZSxcbiAgZmxpcFk6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1Jlc2VydmVkKG5hbWUpIHtcbiAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcbiAgcmV0dXJuIGNzcztcbn1cbnZhciBpZFBvb2wgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICB2YXIgc2l6ZSA9IDEyO1xuICB2YXIgaWQgPSAnJztcblxuICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgIGlkICs9IGlkUG9vbFtNYXRoLnJhbmRvbSgpICogNjIgfCAwXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gZmFtaWx5UHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChzdHIpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cbmZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gIH0sICcnKS50cmltKCk7XG59XG5mdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KHN0eWxlTmFtZSwgXCI6IFwiKS5jb25jYXQoc3R5bGVzW3N0eWxlTmFtZV0sIFwiO1wiKTtcbiAgfSwgJycpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgdmFyIHZhbCA9ICcnO1xuXG4gIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICB9XG5cbiAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICByZXR1cm4gdmFsO1xufVxuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gZmlsbEJsYWNrKGFic3RyYWN0KSB7XG4gIHZhciBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICBpZiAoYWJzdHJhY3QuYXR0cmlidXRlcyAmJiAoYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgIGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCA9ICdibGFjayc7XG4gIH1cblxuICByZXR1cm4gYWJzdHJhY3Q7XG59XG5cbmZ1bmN0aW9uIGRlR3JvdXAoYWJzdHJhY3QpIHtcbiAgaWYgKGFic3RyYWN0LnRhZyA9PT0gJ2cnKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0LmNoaWxkcmVuO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbYWJzdHJhY3RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uTWFza2luZyAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgZXhwbGljaXRNYXNrSWQgPSBfcmVmLm1hc2tJZCxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuICB2YXIgbWFpbldpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgIG1haW5QYXRoID0gbWFpbi5pY29uO1xuICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgIG1hc2tQYXRoID0gbWFzay5pY29uO1xuICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIGNvbnRhaW5lcldpZHRoOiBtYXNrV2lkdGgsXG4gICAgaWNvbldpZHRoOiBtYWluV2lkdGhcbiAgfSk7XG4gIHZhciBtYXNrUmVjdCA9IHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICB9KVxuICB9O1xuICB2YXIgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluID0gbWFpblBhdGguY2hpbGRyZW4gPyB7XG4gICAgY2hpbGRyZW46IG1haW5QYXRoLmNoaWxkcmVuLm1hcChmaWxsQmxhY2spXG4gIH0gOiB7fTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICBjaGlsZHJlbjogW2ZpbGxCbGFjayhfb2JqZWN0U3ByZWFkKHtcbiAgICAgIHRhZzogbWFpblBhdGgudGFnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpblBhdGguYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICB9LCBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4pKV1cbiAgfTtcbiAgdmFyIG1hc2tPdXRlckdyb3VwID0ge1xuICAgIHRhZzogJ2cnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICBjaGlsZHJlbjogW21hc2tJbm5lckdyb3VwXVxuICB9O1xuICB2YXIgbWFza0lkID0gXCJtYXNrLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBjbGlwSWQgPSBcImNsaXAtXCIuY29uY2F0KGV4cGxpY2l0TWFza0lkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIG1hc2tUYWcgPSB7XG4gICAgdGFnOiAnbWFzaycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBpZDogbWFza0lkLFxuICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgbWFza0NvbnRlbnRVbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgIH0pLFxuICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICB9O1xuICB2YXIgZGVmcyA9IHtcbiAgICB0YWc6ICdkZWZzJyxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ2NsaXBQYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgaWQ6IGNsaXBJZFxuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBkZUdyb3VwKG1hc2tQYXRoKVxuICAgIH0sIG1hc2tUYWddXG4gIH07XG4gIGNoaWxkcmVuLnB1c2goZGVmcywge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgIG1hc2s6IFwidXJsKCNcIi5jb25jYXQobWFza0lkLCBcIilcIilcbiAgICB9LCBBTExfU1BBQ0UpXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uU3RhbmRhcmQgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGg6IG1haW4ud2lkdGgsXG4gICAgICBpY29uV2lkdGg6IG1haW4ud2lkdGhcbiAgICB9KTtcbiAgICBjaGlsZHJlbi5wdXNoKHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ2cnLFxuICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogbWFpbi5pY29uLnRhZyxcbiAgICAgICAgICBjaGlsZHJlbjogbWFpbi5pY29uLmNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW4uaWNvbi5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZHJlbi5wdXNoKG1haW4uaWNvbik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzSWNvbiAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIG1hc2sgPSBfcmVmLm1hc2ssXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkgJiYgbWFpbi5mb3VuZCAmJiAhbWFzay5mb3VuZCkge1xuICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgIHZhciBvZmZzZXQgPSB7XG4gICAgICB4OiB3aWR0aCAvIGhlaWdodCAvIDIsXG4gICAgICB5OiAwLjVcbiAgICB9O1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBqb2luU3R5bGVzKF9vYmplY3RTcHJlYWQoe30sIHN0eWxlcywge1xuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBhc1N5bWJvbCAoX3JlZikge1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gIHZhciBpZCA9IHN5bWJvbCA9PT0gdHJ1ZSA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6IHN5bWJvbDtcbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6IG5vbmU7J1xuICAgIH0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdzeW1ib2wnLFxuICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgYXR0cmlidXRlcywge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV1cbiAgfV07XG59XG5cbmZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIF9wYXJhbXMkaWNvbnMgPSBwYXJhbXMuaWNvbnMsXG4gICAgICBtYWluID0gX3BhcmFtcyRpY29ucy5tYWluLFxuICAgICAgbWFzayA9IF9wYXJhbXMkaWNvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IHBhcmFtcy5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IHBhcmFtcy5pY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICBzeW1ib2wgPSBwYXJhbXMuc3ltYm9sLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZSA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcblxuICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHZhciBpc1VwbG9hZGVkSWNvbiA9IHByZWZpeCA9PT0gJ2Zhayc7XG4gIHZhciB3aWR0aENsYXNzID0gaXNVcGxvYWRlZEljb24gPyAnJyA6IFwiZmEtdy1cIi5jb25jYXQoTWF0aC5jZWlsKHdpZHRoIC8gaGVpZ2h0ICogMTYpKTtcbiAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWcucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6ICcnLCB3aWR0aENsYXNzXS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gZXh0cmEuY2xhc3Nlcy5pbmRleE9mKGMpID09PSAtMTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMgIT09ICcnIHx8ICEhYztcbiAgfSkuY29uY2F0KGV4dHJhLmNsYXNzZXMpLmpvaW4oJyAnKTtcbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHtcbiAgICAgICdkYXRhLXByZWZpeCc6IHByZWZpeCxcbiAgICAgICdkYXRhLWljb24nOiBpY29uTmFtZSxcbiAgICAgICdjbGFzcyc6IGF0dHJDbGFzcyxcbiAgICAgICdyb2xlJzogZXh0cmEuYXR0cmlidXRlcy5yb2xlIHx8ICdpbWcnLFxuICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICB9KVxuICB9O1xuICB2YXIgdXBsb2FkZWRJY29uV2lkdGhTdHlsZSA9IGlzVXBsb2FkZWRJY29uICYmICF+ZXh0cmEuY2xhc3Nlcy5pbmRleE9mKCdmYS1mdycpID8ge1xuICAgIHdpZHRoOiBcIlwiLmNvbmNhdCh3aWR0aCAvIGhlaWdodCAqIDE2ICogMC4wNjI1LCBcImVtXCIpXG4gIH0gOiB7fTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgY29udGVudC5hdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICBpZiAodGl0bGUpIGNvbnRlbnQuY2hpbGRyZW4ucHVzaCh7XG4gICAgdGFnOiAndGl0bGUnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGlkOiBjb250ZW50LmF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddIHx8IFwidGl0bGUtXCIuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3RpdGxlXVxuICB9KTtcblxuICB2YXIgYXJncyA9IF9vYmplY3RTcHJlYWQoe30sIGNvbnRlbnQsIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgbWFpbjogbWFpbixcbiAgICBtYXNrOiBtYXNrLFxuICAgIG1hc2tJZDogbWFza0lkLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHN0eWxlczogX29iamVjdFNwcmVhZCh7fSwgdXBsb2FkZWRJY29uV2lkdGhTdHlsZSwgZXh0cmEuc3R5bGVzKVxuICB9KTtcblxuICB2YXIgX3JlZjIgPSBtYXNrLmZvdW5kICYmIG1haW4uZm91bmQgPyBtYWtlSWNvbk1hc2tpbmcoYXJncykgOiBtYWtlSWNvblN0YW5kYXJkKGFyZ3MpLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG4gIGFyZ3MuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgYXJncy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblxuICBpZiAoc3ltYm9sKSB7XG4gICAgcmV0dXJuIGFzU3ltYm9sKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhc0ljb24oYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNUZXh0QWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB3aWR0aCA9IHBhcmFtcy53aWR0aCxcbiAgICAgIGhlaWdodCA9IHBhcmFtcy5oZWlnaHQsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYSxcbiAgICAgIF9wYXJhbXMkd2F0Y2hhYmxlMiA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZTIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGUyO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5zdHlsZXMpO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBzdGFydENlbnRlcmVkOiB0cnVlLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9KTtcbiAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICB9XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICBleHRyYSA9IHBhcmFtcy5leHRyYTtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoZXh0cmEuc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgcCA9IGNvbmZpZy5tZWFzdXJlUGVyZm9ybWFuY2UgJiYgUEVSRk9STUFOQ0UgJiYgUEVSRk9STUFOQ0UubWFyayAmJiBQRVJGT1JNQU5DRS5tZWFzdXJlID8gUEVSRk9STUFOQ0UgOiB7XG4gIG1hcms6IG5vb3AkMSxcbiAgbWVhc3VyZTogbm9vcCQxXG59O1xudmFyIHByZWFtYmxlID0gXCJGQSBcXFwiNS4xNS40XFxcIlwiO1xuXG52YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIikpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbmQobmFtZSk7XG4gIH07XG59O1xuXG52YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xuICBwLm1lYXN1cmUoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG59O1xuXG52YXIgcGVyZiA9IHtcbiAgYmVnaW46IGJlZ2luLFxuICBlbmQ6IGVuZFxufTtcblxuLyoqXG4gKiBJbnRlcm5hbCBoZWxwZXIgdG8gYmluZCBhIGZ1bmN0aW9uIGtub3duIHRvIGhhdmUgNCBhcmd1bWVudHNcbiAqIHRvIGEgZ2l2ZW4gY29udGV4dC5cbiAqL1xuXG52YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQ29udGV4dCwgYSwgYiwgYywgZCk7XG4gIH07XG59O1xuXG4vKipcbiAqICMgUmVkdWNlXG4gKlxuICogQSBmYXN0IG9iamVjdCBgLnJlZHVjZSgpYCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc3ViamVjdCAgICAgIFRoZSBvYmplY3QgdG8gcmVkdWNlIG92ZXIuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgICAgICAgIFRoZSByZWR1Y2VyIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgdGhpc0NvbnRleHQgIFRoZSBjb250ZXh0IGZvciB0aGUgcmVkdWNlci5cbiAqIEByZXR1cm4ge21peGVkfSAgICAgICAgICAgICAgICAgVGhlIGZpbmFsIHJlc3VsdC5cbiAqL1xuXG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbiBmYXN0UmVkdWNlT2JqZWN0KHN1YmplY3QsIGZuLCBpbml0aWFsVmFsdWUsIHRoaXNDb250ZXh0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdCksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSxcbiAgICAgIGtleSxcbiAgICAgIHJlc3VsdDtcblxuICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpID0gMTtcbiAgICByZXN1bHQgPSBzdWJqZWN0W2tleXNbMF1dO1xuICB9IGVsc2Uge1xuICAgIGkgPSAwO1xuICAgIHJlc3VsdCA9IGluaXRpYWxWYWx1ZTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIHJlc3VsdCA9IGl0ZXJhdG9yKHJlc3VsdCwgc3ViamVjdFtrZXldLCBrZXksIHN1YmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdW5pY29kZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBoZXggPSB1bmljb2RlLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgIHJlc3VsdCArPSAoJzAwMCcgKyBoZXgpLnNsaWNlKC00KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUljb25zKHByZWZpeCwgaWNvbnMpIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBfcGFyYW1zJHNraXBIb29rcyA9IHBhcmFtcy5za2lwSG9va3MsXG4gICAgICBza2lwSG9va3MgPSBfcGFyYW1zJHNraXBIb29rcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHNraXBIb29rcztcbiAgdmFyIG5vcm1hbGl6ZWQgPSBPYmplY3Qua2V5cyhpY29ucykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb25OYW1lKSB7XG4gICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgdmFyIGV4cGFuZGVkID0gISFpY29uLmljb247XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGFjY1tpY29uLmljb25OYW1lXSA9IGljb24uaWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2sgPT09ICdmdW5jdGlvbicgJiYgIXNraXBIb29rcykge1xuICAgIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrKHByZWZpeCwgbm9ybWFsaXplZCk7XG4gIH0gZWxzZSB7XG4gICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZCh7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9LCBub3JtYWxpemVkKTtcbiAgfVxuICAvKipcbiAgICogRm9udCBBd2Vzb21lIDQgdXNlZCB0aGUgcHJlZml4IG9mIGBmYWAgZm9yIGFsbCBpY29ucy4gV2l0aCB0aGUgaW50cm9kdWN0aW9uXG4gICAqIG9mIG5ldyBzdHlsZXMgd2UgbmVlZGVkIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlbiB0aGVtLiBQcmVmaXggYGZhYCBpcyBub3cgYW4gYWxpYXNcbiAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc3kgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICogdGhpcyBhcyB3ZWxsLlxuICAgKi9cblxuXG4gIGlmIChwcmVmaXggPT09ICdmYXMnKSB7XG4gICAgZGVmaW5lSWNvbnMoJ2ZhJywgaWNvbnMpO1xuICB9XG59XG5cbnZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzLFxuICAgIHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zO1xudmFyIF9ieVVuaWNvZGUgPSB7fTtcbnZhciBfYnlMaWdhdHVyZSA9IHt9O1xudmFyIF9ieU9sZE5hbWUgPSB7fTtcbnZhciBidWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gcmVkdWNlKHN0eWxlcywgZnVuY3Rpb24gKG8sIHN0eWxlLCBwcmVmaXgpIHtcbiAgICAgIG9bcHJlZml4XSA9IHJlZHVjZShzdHlsZSwgcmVkdWNlciwge30pO1xuICAgICAgcmV0dXJuIG87XG4gICAgfSwge30pO1xuICB9O1xuXG4gIF9ieVVuaWNvZGUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICBpZiAoaWNvblszXSkge1xuICAgICAgYWNjW2ljb25bM11dID0gaWNvbk5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIF9ieUxpZ2F0dXJlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgdmFyIGxpZ2F0dXJlcyA9IGljb25bMl07XG4gICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgIGxpZ2F0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaWdhdHVyZSkge1xuICAgICAgYWNjW2xpZ2F0dXJlXSA9IGljb25OYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICB2YXIgaGFzUmVndWxhciA9ICdmYXInIGluIHN0eWxlcztcbiAgX2J5T2xkTmFtZSA9IHJlZHVjZShzaGltcywgZnVuY3Rpb24gKGFjYywgc2hpbSkge1xuICAgIHZhciBvbGROYW1lID0gc2hpbVswXTtcbiAgICB2YXIgcHJlZml4ID0gc2hpbVsxXTtcbiAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgIHByZWZpeCA9ICdmYXMnO1xuICAgIH1cblxuICAgIGFjY1tvbGROYW1lXSA9IHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lXG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59O1xuYnVpbGQoKTtcbmZ1bmN0aW9uIGJ5VW5pY29kZShwcmVmaXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIChfYnlVbmljb2RlW3ByZWZpeF0gfHwge30pW3VuaWNvZGVdO1xufVxuZnVuY3Rpb24gYnlMaWdhdHVyZShwcmVmaXgsIGxpZ2F0dXJlKSB7XG4gIHJldHVybiAoX2J5TGlnYXR1cmVbcHJlZml4XSB8fCB7fSlbbGlnYXR1cmVdO1xufVxuZnVuY3Rpb24gYnlPbGROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIF9ieU9sZE5hbWVbbmFtZV0gfHwge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbFxuICB9O1xufVxuXG52YXIgc3R5bGVzJDEgPSBuYW1lc3BhY2Uuc3R5bGVzO1xudmFyIGVtcHR5Q2Fub25pY2FsSWNvbiA9IGZ1bmN0aW9uIGVtcHR5Q2Fub25pY2FsSWNvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGwsXG4gICAgcmVzdDogW11cbiAgfTtcbn07XG5mdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICB2YXIgaWNvbk5hbWUgPSBnZXRJY29uTmFtZShjb25maWcuZmFtaWx5UHJlZml4LCBjbHMpO1xuXG4gICAgaWYgKHN0eWxlcyQxW2Nsc10pIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChjb25maWcuYXV0b0ZldGNoU3ZnICYmIE9iamVjdC5rZXlzKFBSRUZJWF9UT19TVFlMRSkuaW5kZXhPZihjbHMpID4gLTEpIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgIGFjYy5wcmVmaXggPSBzaGltLnByZWZpeCB8fCBhY2MucHJlZml4O1xuICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcbn1cbmZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgdmFyIHRhZyA9IGFic3RyYWN0Tm9kZXMudGFnLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPSBhYnN0cmFjdE5vZGVzLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHZvaWQgMCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG4gIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaHRtbEVzY2FwZShhYnN0cmFjdE5vZGVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gIH1cbn1cblxudmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgdmFyIGkyc3ZnID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA6IG51bGw7XG4gIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRNdXRhdG9yKCkge1xuICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgdmFyIG5ld091dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5vdXRlckhUTUwpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MICsgKGNvbmZpZy5rZWVwT3JpZ2luYWxTb3VyY2UgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnID8gXCI8IS0tIFwiLmNvbmNhdChub2RlLm91dGVySFRNTCwgXCIgRm9udCBBd2Vzb21lIGZvbnRhd2Vzb21lLmNvbSAtLT5cIikgOiAnJyk7XG4gICAgfSBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHZhciBuZXdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTtcbiAgICAgIG5ld05vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MO1xuICAgIH1cbiAgfSxcbiAgbmVzdDogZnVuY3Rpb24gbmVzdChtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07IC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhIHJlcGxhY2VkIG5vZGUgd2UgZG8gbm90IHdhbnQgdG8gY29udGludWUgbmVzdGluZyB3aXRoaW4gaXQuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCB0byB0aGUgc3RhbmRhcmQgcmVwbGFjZW1lbnRcblxuICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKSkge1xuICAgICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2UobXV0YXRpb24pO1xuICAgIH1cblxuICAgIHZhciBmb3JTdmcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLS4qXCIpKTtcbiAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5zdHlsZTtcbiAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5pZDtcbiAgICB2YXIgc3BsaXRDbGFzc2VzID0gYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcy5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbHMpIHtcbiAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgIGFjYy50b1N2Zy5wdXNoKGNscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICB0b05vZGU6IFtdLFxuICAgICAgdG9Tdmc6IFtdXG4gICAgfSk7XG4gICAgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcyA9IHNwbGl0Q2xhc3Nlcy50b1N2Zy5qb2luKCcgJyk7XG4gICAgdmFyIG5ld0lubmVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzcGxpdENsYXNzZXMudG9Ob2RlLmpvaW4oJyAnKSk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRywgJycpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3SW5uZXJIVE1MO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwZXJmb3JtT3BlcmF0aW9uU3luYyhvcCkge1xuICBvcCgpO1xufVxuXG5mdW5jdGlvbiBwZXJmb3JtKG11dGF0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGNhbGxiYWNrRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG5vb3AkMjtcblxuICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJhbWUgPSBwZXJmb3JtT3BlcmF0aW9uU3luYztcblxuICAgIGlmIChjb25maWcubXV0YXRlQXBwcm9hY2ggPT09IE1VVEFUSU9OX0FQUFJPQUNIX0FTWU5DKSB7XG4gICAgICBmcmFtZSA9IFdJTkRPVy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcGVyZm9ybU9wZXJhdGlvblN5bmM7XG4gICAgfVxuXG4gICAgZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG11dGF0b3IgPSBnZXRNdXRhdG9yKCk7XG4gICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgbXV0YXRpb25zLm1hcChtdXRhdG9yKTtcbiAgICAgIG1hcmsoKTtcbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9KTtcbiAgfVxufVxudmFyIGRpc2FibGVkID0gZmFsc2U7XG5mdW5jdGlvbiBkaXNhYmxlT2JzZXJ2YXRpb24oKSB7XG4gIGRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IGZhbHNlO1xufVxudmFyIG1vID0gbnVsbDtcbmZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICBpZiAoIU1VVEFUSU9OX09CU0VSVkVSKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjb25maWcub2JzZXJ2ZU11dGF0aW9ucykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0cmVlQ2FsbGJhY2sgPSBvcHRpb25zLnRyZWVDYWxsYmFjayxcbiAgICAgIG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayA9IG9wdGlvbnMucHNldWRvRWxlbWVudHNDYWxsYmFjayxcbiAgICAgIF9vcHRpb25zJG9ic2VydmVNdXRhdCA9IG9wdGlvbnMub2JzZXJ2ZU11dGF0aW9uc1Jvb3QsXG4gICAgICBvYnNlcnZlTXV0YXRpb25zUm9vdCA9IF9vcHRpb25zJG9ic2VydmVNdXRhdCA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfb3B0aW9ucyRvYnNlcnZlTXV0YXQ7XG4gIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgdG9BcnJheShvYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZCkge1xuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID4gMCAmJiAhaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLmFkZGVkTm9kZXNbMF0pKSB7XG4gICAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmVlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSAmJiBjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgaXNXYXRjaGVkKG11dGF0aW9uUmVjb3JkLnRhcmdldCkgJiYgfkFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04uaW5kZXhPZihtdXRhdGlvblJlY29yZC5hdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgIHZhciBfZ2V0Q2Fub25pY2FsSWNvbiA9IGdldENhbm9uaWNhbEljb24oY2xhc3NBcnJheShtdXRhdGlvblJlY29yZC50YXJnZXQpKSxcbiAgICAgICAgICAgICAgcHJlZml4ID0gX2dldENhbm9uaWNhbEljb24ucHJlZml4LFxuICAgICAgICAgICAgICBpY29uTmFtZSA9IF9nZXRDYW5vbmljYWxJY29uLmljb25OYW1lO1xuXG4gICAgICAgICAgaWYgKHByZWZpeCkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnLCBwcmVmaXgpO1xuICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pY29uJywgaWNvbk5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBtby5vYnNlcnZlKG9ic2VydmVNdXRhdGlvbnNSb290LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKCFtbykgcmV0dXJuO1xuICBtby5kaXNjb25uZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlUGFyc2VyIChub2RlKSB7XG4gIHZhciBzdHlsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB2YXIgdmFsID0gW107XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgdmFsID0gc3R5bGUuc3BsaXQoJzsnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGUpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBzdHlsZS5zcGxpdCgnOicpO1xuICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICB2YXIgdmFsdWUgPSBzdHlsZXMuc2xpY2UoMSk7XG5cbiAgICAgIGlmIChwcm9wICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWNjW3Byb3BdID0gdmFsdWUuam9pbignOicpLnRyaW0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjbGFzc1BhcnNlciAobm9kZSkge1xuICB2YXIgZXhpc3RpbmdQcmVmaXggPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmVmaXgnKTtcbiAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gIHZhciBpbm5lclRleHQgPSBub2RlLmlubmVyVGV4dCAhPT0gdW5kZWZpbmVkID8gbm9kZS5pbm5lclRleHQudHJpbSgpIDogJyc7XG4gIHZhciB2YWwgPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobm9kZSkpO1xuXG4gIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgdmFsLnByZWZpeCA9IGV4aXN0aW5nUHJlZml4O1xuICAgIHZhbC5pY29uTmFtZSA9IGV4aXN0aW5nSWNvbk5hbWU7XG4gIH1cblxuICBpZiAodmFsLnByZWZpeCAmJiBpbm5lclRleHQubGVuZ3RoID4gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5TGlnYXR1cmUodmFsLnByZWZpeCwgbm9kZS5pbm5lclRleHQpO1xuICB9IGVsc2UgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHZhbC5pY29uTmFtZSA9IGJ5VW5pY29kZSh2YWwucHJlZml4LCB0b0hleChub2RlLmlubmVyVGV4dCkpO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgc2l6ZTogMTYsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGZsaXBYOiBmYWxzZSxcbiAgICBmbGlwWTogZmFsc2UsXG4gICAgcm90YXRlOiAwXG4gIH07XG5cbiAgaWYgKCF0cmFuc2Zvcm1TdHJpbmcpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgIHZhciBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAnaCcpIHtcbiAgICAgICAgYWNjLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ICYmIHJlc3QgPT09ICd2Jykge1xuICAgICAgICBhY2MuZmxpcFkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcblxuICAgICAgaWYgKGlzTmFOKHJlc3QpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZmlyc3QpIHtcbiAgICAgICAgY2FzZSAnZ3Jvdyc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2hyaW5rJzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplIC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgYWNjLnJvdGF0ZSA9IGFjYy5yb3RhdGUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRyYW5zZm9ybSk7XG4gIH1cbn07XG5mdW5jdGlvbiB0cmFuc2Zvcm1QYXJzZXIgKG5vZGUpIHtcbiAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRyYW5zZm9ybScpKTtcbn1cblxuZnVuY3Rpb24gc3ltYm9sUGFyc2VyIChub2RlKSB7XG4gIHZhciBzeW1ib2wgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1zeW1ib2wnKTtcbiAgcmV0dXJuIHN5bWJvbCA9PT0gbnVsbCA/IGZhbHNlIDogc3ltYm9sID09PSAnJyA/IHRydWUgOiBzeW1ib2w7XG59XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZXNQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgIGlmIChhY2MubmFtZSAhPT0gJ2NsYXNzJyAmJiBhY2MubmFtZSAhPT0gJ3N0eWxlJykge1xuICAgICAgYWNjW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gIHZhciB0aXRsZUlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtdGl0bGUtaWQnKTtcblxuICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQodGl0bGVJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG59XG5cbmZ1bmN0aW9uIG1hc2tQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIG1hc2sgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIGVtcHR5Q2Fub25pY2FsSWNvbigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRDYW5vbmljYWxJY29uKG1hc2suc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnRyaW0oKTtcbiAgICB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmxhbmtNZXRhKCkge1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRpdGxlSWQ6IG51bGwsXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHRyYW5zZm9ybTogbWVhbmluZ2xlc3NUcmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBmYWxzZSxcbiAgICBtYXNrOiBudWxsLFxuICAgIG1hc2tJZDogbnVsbCxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogW10sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICB2YXIgZXh0cmFTdHlsZXMgPSBzdHlsZVBhcnNlcihub2RlKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcnNlcihub2RlKTtcbiAgdmFyIHN5bWJvbCA9IHN5bWJvbFBhcnNlcihub2RlKTtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNQYXJzZXIobm9kZSk7XG4gIHZhciBtYXNrID0gbWFza1BhcnNlcihub2RlKTtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgdGl0bGU6IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgIHRpdGxlSWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRpdGxlLWlkJyksXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrSWQ6IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2staWQnKSxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogZXh0cmFDbGFzc2VzLFxuICAgICAgc3R5bGVzOiBleHRyYVN0eWxlcyxcbiAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gTWlzc2luZ0ljb24oZXJyb3IpIHtcbiAgdGhpcy5uYW1lID0gJ01pc3NpbmdJY29uJztcbiAgdGhpcy5tZXNzYWdlID0gZXJyb3IgfHwgJ0ljb24gdW5hdmFpbGFibGUnO1xuICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG59XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nSWNvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nSWNvbjtcblxudmFyIEZJTEwgPSB7XG4gIGZpbGw6ICdjdXJyZW50Q29sb3InXG59O1xudmFyIEFOSU1BVElPTl9CQVNFID0ge1xuICBhdHRyaWJ1dGVUeXBlOiAnWE1MJyxcbiAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJyxcbiAgZHVyOiAnMnMnXG59O1xudmFyIFJJTkcgPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgZDogJ00xNTYuNSw0NDcuN2wtMTIuNiwyOS41Yy0xOC43LTkuNS0zNS45LTIxLjItNTEuNS0zNC45bDIyLjctMjIuN0MxMjcuNiw0MzAuNSwxNDEuNSw0NDAsMTU2LjUsNDQ3Ljd6IE00MC42LDI3Mkg4LjUgYzEuNCwyMS4yLDUuNCw0MS43LDExLjcsNjEuMUw1MCwzMjEuMkM0NS4xLDMwNS41LDQxLjgsMjg5LDQwLjYsMjcyeiBNNDAuNiwyNDBjMS40LTE4LjgsNS4yLTM3LDExLjEtNTQuMWwtMjkuNS0xMi42IEMxNC43LDE5NC4zLDEwLDIxNi43LDguNSwyNDBINDAuNnogTTY0LjMsMTU2LjVjNy44LTE0LjksMTcuMi0yOC44LDI4LjEtNDEuNUw2OS43LDkyLjNjLTEzLjcsMTUuNi0yNS41LDMyLjgtMzQuOSw1MS41IEw2NC4zLDE1Ni41eiBNMzk3LDQxOS42Yy0xMy45LDEyLTI5LjQsMjIuMy00Ni4xLDMwLjRsMTEuOSwyOS44YzIwLjctOS45LDM5LjgtMjIuNiw1Ni45LTM3LjZMMzk3LDQxOS42eiBNMTE1LDkyLjQgYzEzLjktMTIsMjkuNC0yMi4zLDQ2LjEtMzAuNGwtMTEuOS0yOS44Yy0yMC43LDkuOS0zOS44LDIyLjYtNTYuOCwzNy42TDExNSw5Mi40eiBNNDQ3LjcsMzU1LjVjLTcuOCwxNC45LTE3LjIsMjguOC0yOC4xLDQxLjUgbDIyLjcsMjIuN2MxMy43LTE1LjYsMjUuNS0zMi45LDM0LjktNTEuNUw0NDcuNywzNTUuNXogTTQ3MS40LDI3MmMtMS40LDE4LjgtNS4yLDM3LTExLjEsNTQuMWwyOS41LDEyLjYgYzcuNS0yMS4xLDEyLjItNDMuNSwxMy42LTY2LjhINDcxLjR6IE0zMjEuMiw0NjJjLTE1LjcsNS0zMi4yLDguMi00OS4yLDkuNHYzMi4xYzIxLjItMS40LDQxLjctNS40LDYxLjEtMTEuN0wzMjEuMiw0NjJ6IE0yNDAsNDcxLjRjLTE4LjgtMS40LTM3LTUuMi01NC4xLTExLjFsLTEyLjYsMjkuNWMyMS4xLDcuNSw0My41LDEyLjIsNjYuOCwxMy42VjQ3MS40eiBNNDYyLDE5MC44YzUsMTUuNyw4LjIsMzIuMiw5LjQsNDkuMmgzMi4xIGMtMS40LTIxLjItNS40LTQxLjctMTEuNy02MS4xTDQ2MiwxOTAuOHogTTkyLjQsMzk3Yy0xMi0xMy45LTIyLjMtMjkuNC0zMC40LTQ2LjFsLTI5LjgsMTEuOWM5LjksMjAuNywyMi42LDM5LjgsMzcuNiw1Ni45IEw5Mi40LDM5N3ogTTI3Miw0MC42YzE4LjgsMS40LDM2LjksNS4yLDU0LjEsMTEuMWwxMi42LTI5LjVDMzE3LjcsMTQuNywyOTUuMywxMCwyNzIsOC41VjQwLjZ6IE0xOTAuOCw1MCBjMTUuNy01LDMyLjItOC4yLDQ5LjItOS40VjguNWMtMjEuMiwxLjQtNDEuNyw1LjQtNjEuMSwxMS43TDE5MC44LDUweiBNNDQyLjMsOTIuM0w0MTkuNiwxMTVjMTIsMTMuOSwyMi4zLDI5LjQsMzAuNSw0Ni4xIGwyOS44LTExLjlDNDcwLDEyOC41LDQ1Ny4zLDEwOS40LDQ0Mi4zLDkyLjN6IE0zOTcsOTIuNGwyMi43LTIyLjdjLTE1LjYtMTMuNy0zMi44LTI1LjUtNTEuNS0zNC45bC0xMi42LDI5LjUgQzM3MC40LDcyLjEsMzg0LjQsODEuNSwzOTcsOTIuNHonXG4gIH0pXG59O1xuXG52YXIgT1BBQ0lUWV9BTklNQVRFID0gX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgYXR0cmlidXRlTmFtZTogJ29wYWNpdHknXG59KTtcblxudmFyIERPVCA9IHtcbiAgdGFnOiAnY2lyY2xlJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGN4OiAnMjU2JyxcbiAgICBjeTogJzM2NCcsXG4gICAgcjogJzI4J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQU5JTUFUSU9OX0JBU0UsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIHZhbHVlczogJzI4OzE0OzI4OzI4OzE0OzI4OydcbiAgICB9KVxuICB9LCB7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MTsxOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgUVVFU1RJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzEnLFxuICAgIGQ6ICdNMjYzLjcsMzEyaC0xNmMtNi42LDAtMTItNS40LTEyLTEyYzAtNzEsNzcuNC02My45LDc3LjQtMTA3LjhjMC0yMC0xNy44LTQwLjItNTcuNC00MC4yYy0yOS4xLDAtNDQuMyw5LjYtNTkuMiwyOC43IGMtMy45LDUtMTEuMSw2LTE2LjIsMi40bC0xMy4xLTkuMmMtNS42LTMuOS02LjktMTEuOC0yLjYtMTcuMmMyMS4yLTI3LjIsNDYuNC00NC43LDkxLjItNDQuN2M1Mi4zLDAsOTcuNCwyOS44LDk3LjQsODAuMiBjMCw2Ny42LTc3LjQsNjMuNS03Ny40LDEwNy44QzI3NS43LDMwNi42LDI3MC4zLDMxMiwyNjMuNywzMTJ6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcxOzA7MDswOzA7MTsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgRVhDTEFNQVRJT04gPSB7XG4gIHRhZzogJ3BhdGgnLFxuICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBGSUxMLCB7XG4gICAgb3BhY2l0eTogJzAnLFxuICAgIGQ6ICdNMjMyLjUsMTM0LjVsNywxNjhjMC4zLDYuNCw1LjYsMTEuNSwxMiwxMS41aDljNi40LDAsMTEuNy01LjEsMTItMTEuNWw3LTE2OGMwLjMtNi44LTUuMi0xMi41LTEyLTEyLjVoLTIzIEMyMzcuNywxMjIsMjMyLjIsMTI3LjcsMjMyLjUsMTM0LjV6J1xuICB9KSxcbiAgY2hpbGRyZW46IFt7XG4gICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgT1BBQ0lUWV9BTklNQVRFLCB7XG4gICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgfSlcbiAgfV1cbn07XG52YXIgbWlzc2luZyA9IHtcbiAgdGFnOiAnZycsXG4gIGNoaWxkcmVuOiBbUklORywgRE9ULCBRVUVTVElPTiwgRVhDTEFNQVRJT05dXG59O1xuXG52YXIgc3R5bGVzJDIgPSBuYW1lc3BhY2Uuc3R5bGVzO1xuZnVuY3Rpb24gYXNGb3VuZEljb24oaWNvbikge1xuICB2YXIgd2lkdGggPSBpY29uWzBdO1xuICB2YXIgaGVpZ2h0ID0gaWNvblsxXTtcblxuICB2YXIgX2ljb24kc2xpY2UgPSBpY29uLnNsaWNlKDQpLFxuICAgICAgX2ljb24kc2xpY2UyID0gX3NsaWNlZFRvQXJyYXkoX2ljb24kc2xpY2UsIDEpLFxuICAgICAgdmVjdG9yRGF0YSA9IF9pY29uJHNsaWNlMlswXTtcblxuICB2YXIgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmVjdG9yRGF0YSkpIHtcbiAgICBlbGVtZW50ID0ge1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5HUk9VUClcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZKSxcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzBdXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuUFJJTUFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVsxXVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgZDogdmVjdG9yRGF0YVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvdW5kOiB0cnVlLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBpY29uOiBlbGVtZW50XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KSB7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgdmFsID0ge1xuICAgICAgZm91bmQ6IGZhbHNlLFxuICAgICAgd2lkdGg6IDUxMixcbiAgICAgIGhlaWdodDogNTEyLFxuICAgICAgaWNvbjogbWlzc2luZ1xuICAgIH07XG5cbiAgICBpZiAoaWNvbk5hbWUgJiYgcHJlZml4ICYmIHN0eWxlcyQyW3ByZWZpeF0gJiYgc3R5bGVzJDJbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgIHZhciBpY29uID0gc3R5bGVzJDJbcHJlZml4XVtpY29uTmFtZV07XG4gICAgICByZXR1cm4gcmVzb2x2ZShhc0ZvdW5kSWNvbihpY29uKSk7XG4gICAgfVxuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiAhY29uZmlnLnNob3dNaXNzaW5nSWNvbnMpIHtcbiAgICAgIHJlamVjdChuZXcgTWlzc2luZ0ljb24oXCJJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCBcIi5jb25jYXQocHJlZml4LCBcIiB3aXRoIGljb24gbmFtZSBcIikuY29uY2F0KGljb25OYW1lKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbCk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIHN0eWxlcyQzID0gbmFtZXNwYWNlLnN0eWxlcztcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHRpdGxlSWQgPSBub2RlTWV0YS50aXRsZUlkLFxuICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gbm9kZU1ldGEuc3ltYm9sLFxuICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICBtYXNrSWQgPSBub2RlTWV0YS5tYXNrSWQsXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcGlja2VkLmFsbChbZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCksIGZpbmRJY29uKG1hc2suaWNvbk5hbWUsIG1hc2sucHJlZml4KV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgIG1haW4gPSBfcmVmMlswXSxcbiAgICAgICAgICBtYXNrID0gX3JlZjJbMV07XG5cbiAgICAgIHJlc29sdmUoW25vZGUsIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICBtYXNrOiBtYXNrXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgbWFza0lkOiBtYXNrSWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGl0bGVJZDogdGl0bGVJZCxcbiAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICB2YXIgd2lkdGggPSBudWxsO1xuICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICBpZiAoSVNfSUUpIHtcbiAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gIH1cblxuICBpZiAoY29uZmlnLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gIH1cblxuICByZXR1cm4gcGlja2VkLnJlc29sdmUoW25vZGUsIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHdhdGNoYWJsZTogdHJ1ZVxuICB9KV0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcblxuICB2YXIgaGNsQWRkID0gZnVuY3Rpb24gaGNsQWRkKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhlcyA9IGNvbmZpZy5hdXRvRmV0Y2hTdmcgPyBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpIDogT2JqZWN0LmtleXMoc3R5bGVzJDMpO1xuICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBcIi5cIi5jb25jYXQocCwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIik7XG4gIH0pKS5qb2luKCcsICcpO1xuXG4gIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gW107XG5cbiAgdHJ5IHtcbiAgICBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuICB9IGNhdGNoIChlKSB7Ly8gbm9vcFxuICB9XG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgIGhjbFJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ29uVHJlZScpO1xuICB2YXIgbXV0YXRpb25zID0gY2FuZGlkYXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgYWNjLnB1c2gobXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdJY29uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwobXV0YXRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZE11dGF0aW9ucykge1xuICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoY2xBZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1hcmsoKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgZ2VuZXJhdGVNdXRhdGlvbihub2RlKS50aGVuKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgcGVyZm9ybShbbXV0YXRpb25dLCBjYWxsYmFjayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsIHBvc2l0aW9uKSB7XG4gIHZhciBwZW5kaW5nQXR0cmlidXRlID0gXCJcIi5jb25jYXQoREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HKS5jb25jYXQocG9zaXRpb24ucmVwbGFjZSgnOicsICctJykpO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIG5vZGUgaXMgYWxyZWFkeSBiZWluZyBwcm9jZXNzZWRcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShub2RlLmNoaWxkcmVuKTtcbiAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgfSlbMF07XG4gICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgIHZhciBmb250V2VpZ2h0ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuXG4gICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ICYmICFmb250RmFtaWx5KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCBpdCBidXQgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc3R5bGUgZG9lcyBub3QgcmVzdWx0IGluIGEgZm9udC1mYW1pbHksXG4gICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAvLyByZW1vdmVkLiBTbyB3ZSBub3cgc2hvdWxkIGRlbGV0ZSB0aGUgaWNvbi5cbiAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9IGVsc2UgaWYgKGZvbnRGYW1pbHkgJiYgY29udGVudCAhPT0gJ25vbmUnICYmIGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICB2YXIgX2NvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuXG4gICAgICB2YXIgcHJlZml4ID0gflsnU29saWQnLCAnUmVndWxhcicsICdMaWdodCcsICdEdW90b25lJywgJ0JyYW5kcycsICdLaXQnXS5pbmRleE9mKGZvbnRGYW1pbHlbMl0pID8gU1RZTEVfVE9fUFJFRklYW2ZvbnRGYW1pbHlbMl0udG9Mb3dlckNhc2UoKV0gOiBGT05UX1dFSUdIVF9UT19QUkVGSVhbZm9udFdlaWdodF07XG4gICAgICB2YXIgaGV4VmFsdWUgPSB0b0hleChfY29udGVudC5sZW5ndGggPT09IDMgPyBfY29udGVudC5zdWJzdHIoMSwgMSkgOiBfY29udGVudCk7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTsgLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDpiZWZvcmUvOmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAvLyBhbHJlYWR5IGRvbmUgc28gd2l0aCB0aGUgc2FtZSBwcmVmaXggYW5kIGljb25OYW1lXG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUsIGljb25JZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICAvLyBEZWxldGUgdGhlIG9sZCBvbmUsIHNpbmNlIHdlJ3JlIHJlcGxhY2luZyBpdCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldGEgPSBibGFua01ldGEoKTtcbiAgICAgICAgdmFyIGV4dHJhID0gbWV0YS5leHRyYTtcbiAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KS50aGVuKGZ1bmN0aW9uIChtYWluKSB7XG4gICAgICAgICAgdmFyIGFic3RyYWN0ID0gbWFrZUlubGluZVN2Z0Fic3RyYWN0KF9vYmplY3RTcHJlYWQoe30sIG1ldGEsIHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgIG1hc2s6IGVtcHR5Q2Fub25pY2FsSWNvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZTogaWNvbklkZW50aWZpZXIsXG4gICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJzpiZWZvcmUnKSB7XG4gICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2Uobm9kZSkge1xuICByZXR1cm4gcGlja2VkLmFsbChbcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmFmdGVyJyldKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzIChyb290KSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZpbHRlcihwcm9jZXNzYWJsZSkubWFwKHJlcGxhY2UpO1xuICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgIHBpY2tlZC5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwic3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjIyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xIHtcXG4gIHdpZHRoOiAwLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMiB7XFxuICB3aWR0aDogMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XFxuICB3aWR0aDogMC4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTQge1xcbiAgd2lkdGg6IDAuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNSB7XFxuICB3aWR0aDogMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xcbiAgd2lkdGg6IDAuMzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTcge1xcbiAgd2lkdGg6IDAuNDM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy04IHtcXG4gIHdpZHRoOiAwLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XFxuICB3aWR0aDogMC41NjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEwIHtcXG4gIHdpZHRoOiAwLjYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMSB7XFxuICB3aWR0aDogMC42ODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcXG4gIHdpZHRoOiAwLjc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEzIHtcXG4gIHdpZHRoOiAwLjgxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTQge1xcbiAgd2lkdGg6IDAuODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcXG4gIHdpZHRoOiAwLjkzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTYge1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTcge1xcbiAgd2lkdGg6IDEuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOCB7XFxuICB3aWR0aDogMS4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTkge1xcbiAgd2lkdGg6IDEuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yMCB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1ib3JkZXIge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxpIHtcXG4gIHdpZHRoOiAyZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1mdyB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciwgLmZhLWxheWVycy10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyNTNhO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXgtd2lkdGg6IDVlbTtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDY2N2VtO1xcbn1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxufVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07XFxufVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbn1cXG5cXG4uZmEtZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLmZhLXVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmEtbGkge1xcbiAgbGVmdDogLTJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbSAwLjI1ZW0gMC4xNWVtO1xcbn1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5mYS5mYS1wdWxsLWxlZnQsXFxuLmZhcy5mYS1wdWxsLWxlZnQsXFxuLmZhci5mYS1wdWxsLWxlZnQsXFxuLmZhbC5mYS1wdWxsLWxlZnQsXFxuLmZhYi5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQsXFxuLmZhcy5mYS1wdWxsLXJpZ2h0LFxcbi5mYXIuZmEtcHVsbC1yaWdodCxcXG4uZmFsLmZhLXB1bGwtcmlnaHQsXFxuLmZhYi5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG59XFxuXFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcblxcbi5mYS1mbGlwLWJvdGgsIC5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxufVxcblxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCxcXG46cm9vdCAuZmEtZmxpcC1ib3RoIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0yeCB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwgLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIGNsaXA6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wcmltYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXByaW1hcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtc2Vjb25kYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXByaW1hcnkge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXNlY29uZGFyeSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmZhZC5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzICgpIHtcbiAgdmFyIGRmcCA9IERFRkFVTFRfRkFNSUxZX1BSRUZJWDtcbiAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gIHZhciBmcCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIGN1c3RvbVByb3BQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwtLVwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoY3VzdG9tUHJvcFBhdHQsIFwiLS1cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIExpYnJhcnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcbiAgICAgIE9iamVjdC5rZXlzKGFkZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVsbERlZmluaXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAwOiBkZWZpbml0aW9uXG4gICAgICB9IDogZGVmaW5pdGlvbjtcbiAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfbm9ybWFsaXplZCRrZXkgPSBub3JtYWxpemVkW2tleV0sXG4gICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICBpY29uID0gX25vcm1hbGl6ZWQka2V5Lmljb247XG4gICAgICAgIGlmICghYWRkaXRpb25zW3ByZWZpeF0pIGFkZGl0aW9uc1twcmVmaXhdID0ge307XG4gICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhZGRpdGlvbnM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpYnJhcnk7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlPYmplY3QodmFsLCBhYnN0cmFjdENyZWF0b3IpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgIGdldDogYWJzdHJhY3RDcmVhdG9yXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWwuYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdmFsLmh0bWw7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihpY29uTG9va3VwKSB7XG4gIHZhciBfaWNvbkxvb2t1cCRwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9pY29uTG9va3VwJHByZWZpeCA9PT0gdm9pZCAwID8gJ2ZhJyA6IF9pY29uTG9va3VwJHByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkxvb2t1cC5pY29uTmFtZTtcbiAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgIHZhciBtYXNrID0gcGFyYW1zLm1hc2s7XG5cbiAgICBpZiAobWFzaykge1xuICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChpY29uRGVmaW5pdGlvbiwgX29iamVjdFNwcmVhZCh7fSwgcGFyYW1zLCB7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSkpO1xuICB9O1xufVxuXG52YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgZGlzY29ubmVjdCgpO1xufTtcbnZhciBfY3NzSW5zZXJ0ZWQgPSBmYWxzZTtcbnZhciBkb20gPSB7XG4gIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmIChJU19ET00pIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG5cbiAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblRyZWUobm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGlja2VkLnJlamVjdCgnT3BlcmF0aW9uIHJlcXVpcmVzIGEgRE9NIG9mIHNvbWUga2luZC4nKTtcbiAgICB9XG4gIH0sXG4gIGNzczogY3NzLFxuICBpbnNlcnRDc3M6IGZ1bmN0aW9uIGluc2VydENzcyQkMSgpIHtcbiAgICBpZiAoIV9jc3NJbnNlcnRlZCkge1xuICAgICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYXV0b1JlcGxhY2VTdmdSb290ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBwYXJhbXMub2JzZXJ2ZU11dGF0aW9uc1Jvb3Q7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgYXV0b1JlcGxhY2Uoe1xuICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlKHtcbiAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrOiBzZWFyY2hQc2V1ZG9FbGVtZW50cyxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBwYXJzZSA9IHtcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gIH1cbn07XG52YXIgaWNvbiA9IHJlc29sdmVJY29ucyhmdW5jdGlvbiAoaWNvbkRlZmluaXRpb24pIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgX3BhcmFtcyRtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgbWFza0lkID0gX3BhcmFtcyRtYXNrSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2tJZCxcbiAgICAgIF9wYXJhbXMkdGl0bGUgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlLFxuICAgICAgX3BhcmFtcyR0aXRsZUlkID0gcGFyYW1zLnRpdGxlSWQsXG4gICAgICB0aXRsZUlkID0gX3BhcmFtcyR0aXRsZUlkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZUlkLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcyxcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlcyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMsXG4gICAgICBfcGFyYW1zJHN0eWxlcyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlcztcbiAgaWYgKCFpY29uRGVmaW5pdGlvbikgcmV0dXJuO1xuICB2YXIgcHJlZml4ID0gaWNvbkRlZmluaXRpb24ucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBpY29uRGVmaW5pdGlvbi5pY29uTmFtZSxcbiAgICAgIGljb24gPSBpY29uRGVmaW5pdGlvbi5pY29uO1xuICByZXR1cm4gYXBpT2JqZWN0KF9vYmplY3RTcHJlYWQoe1xuICAgIHR5cGU6ICdpY29uJ1xuICB9LCBpY29uRGVmaW5pdGlvbiksIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcblxuICAgIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICBhdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgIG1hc2s6IG1hc2sgPyBhc0ZvdW5kSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbWFza0lkOiBtYXNrSWQsXG4gICAgICB0aXRsZUlkOiB0aXRsZUlkLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbnZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0yID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtMiA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybTIsXG4gICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTIgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMixcbiAgICAgIF9wYXJhbXMkY2xhc3NlczIgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMyID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMyLFxuICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczI7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBjb3VudGVyID0gZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0aXRsZTMgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUzID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTMsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzMyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMzO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnY291bnRlcicsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtY291bnRlclwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGxheWVyID0gZnVuY3Rpb24gbGF5ZXIoYXNzZW1ibGVyKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRjbGFzc2VzNCA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczQgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzNDtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2xheWVyJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKS5qb2luKCcgJylcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xudmFyIGFwaSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGNvbmZpZzogY29uZmlnLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgY291bnRlcjogY291bnRlcixcbiAgbGF5ZXI6IGxheWVyLFxuICB0b0h0bWw6IHRvSHRtbFxufTtcblxudmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpY29uLCBub0F1dG8sIGNvbmZpZywgdG9IdG1sLCBsYXllciwgdGV4dCwgY291bnRlciwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG4iLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ2VsbGlwc2lzLXYnO1xudmFyIHdpZHRoID0gMTkyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxNDInO1xudmFyIHN2Z1BhdGhEYXRhID0gJ005NiAxODRjMzkuOCAwIDcyIDMyLjIgNzIgNzJzLTMyLjIgNzItNzIgNzItNzItMzIuMi03Mi03MiAzMi4yLTcyIDcyLTcyek0yNCA4MGMwIDM5LjggMzIuMiA3MiA3MiA3MnM3Mi0zMi4yIDcyLTcyUzEzNS44IDggOTYgOCAyNCA0MC4yIDI0IDgwem0wIDM1MmMwIDM5LjggMzIuMiA3MiA3MiA3MnM3Mi0zMi4yIDcyLTcyLTMyLjItNzItNzItNzItNzIgMzIuMi03MiA3MnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFFbGxpcHNpc1YgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc2lnbi1pbi1hbHQnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YyZjYnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000MTYgNDQ4aC04NGMtNi42IDAtMTItNS40LTEyLTEydi00MGMwLTYuNiA1LjQtMTIgMTItMTJoODRjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTYwYzAtMTcuNy0xNC4zLTMyLTMyLTMyaC04NGMtNi42IDAtMTItNS40LTEyLTEyVjc2YzAtNi42IDUuNC0xMiAxMi0xMmg4NGM1MyAwIDk2IDQzIDk2IDk2djE5MmMwIDUzLTQzIDk2LTk2IDk2em0tNDctMjAxTDIwMSA3OWMtMTUtMTUtNDEtNC41LTQxIDE3djk2SDI0Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNHY5NmMwIDEzLjMgMTAuNyAyNCAyNCAyNGgxMzZ2OTZjMCAyMS41IDI2IDMyIDQxIDE3bDE2OC0xNjhjOS4zLTkuNCA5LjMtMjQuNiAwLTM0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVNpZ25JbkFsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdzeW5jLWFsdCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjJmMSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTM3MC43MiAxMzMuMjhDMzM5LjQ1OCAxMDQuMDA4IDI5OC44ODggODcuOTYyIDI1NS44NDggODhjLTc3LjQ1OC4wNjgtMTQ0LjMyOCA1My4xNzgtMTYyLjc5MSAxMjYuODUtMS4zNDQgNS4zNjMtNi4xMjIgOS4xNS0xMS42NTEgOS4xNUgyNC4xMDNjLTcuNDk4IDAtMTMuMTk0LTYuODA3LTExLjgwNy0xNC4xNzZDMzMuOTMzIDk0LjkyNCAxMzQuODEzIDggMjU2IDhjNjYuNDQ4IDAgMTI2Ljc5MSAyNi4xMzYgMTcxLjMxNSA2OC42ODVMNDYzLjAzIDQwLjk3QzQ3OC4xNDkgMjUuODUxIDUwNCAzNi41NTkgNTA0IDU3Ljk0MVYxOTJjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDM0NS45NDFjLTIxLjM4MiAwLTMyLjA5LTI1Ljg1MS0xNi45NzEtNDAuOTcxbDQxLjc1LTQxLjc0OXpNMzIgMjk2aDEzNC4wNTljMjEuMzgyIDAgMzIuMDkgMjUuODUxIDE2Ljk3MSA0MC45NzFsLTQxLjc1IDQxLjc1YzMxLjI2MiAyOS4yNzMgNzEuODM1IDQ1LjMxOSAxMTQuODc2IDQ1LjI4IDc3LjQxOC0uMDcgMTQ0LjMxNS01My4xNDQgMTYyLjc4Ny0xMjYuODQ5IDEuMzQ0LTUuMzYzIDYuMTIyLTkuMTUgMTEuNjUxLTkuMTVoNTcuMzA0YzcuNDk4IDAgMTMuMTk0IDYuODA3IDExLjgwNyAxNC4xNzZDNDc4LjA2NyA0MTcuMDc2IDM3Ny4xODcgNTA0IDI1NiA1MDRjLTY2LjQ0OCAwLTEyNi43OTEtMjYuMTM2LTE3MS4zMTUtNjguNjg1TDQ4Ljk3IDQ3MS4wM0MzMy44NTEgNDg2LjE0OSA4IDQ3NS40NDEgOCA0NTQuMDU5VjMyMGMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjR6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhU3luY0FsdCA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICd0cmFzaCc7XG52YXIgd2lkdGggPSA0NDg7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjFmOCc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQzMiAzMkgzMTJsLTkuNC0xOC43QTI0IDI0IDAgMCAwIDI4MS4xIDBIMTY2LjhhMjMuNzIgMjMuNzIgMCAwIDAtMjEuNCAxMy4zTDEzNiAzMkgxNkExNiAxNiAwIDAgMCAwIDQ4djMyYTE2IDE2IDAgMCAwIDE2IDE2aDQxNmExNiAxNiAwIDAgMCAxNi0xNlY0OGExNiAxNiAwIDAgMC0xNi0xNnpNNTMuMiA0NjdhNDggNDggMCAwIDAgNDcuOSA0NWgyNDUuOGE0OCA0OCAwIDAgMCA0Ny45LTQ1TDQxNiAxMjhIMzJ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhVHJhc2ggPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL215LWZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL215LWZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogNSUgYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IHJnYigxMTQsIDExMCwgMTEwKTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1jb250IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN5bmMge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTJweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8ge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHBhZGRpbmc6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXIge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgY29sb3I6ICMwZjA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvcmRlcjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG8ge1xcclxcbiAgb3JkZXI6IDQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG86aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50by1kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250IHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG9yZGVyOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0NSwgOTQsIDk0LCAwLjk0NSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMjAsIDIyMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsb0hBQWlGO0VBQ2pGLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDBDQUEwQztFQUMxQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vbXktZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuL215LWZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICBib3gtc2hhZG93OiAycHggNHB4IDZweCByZ2IoMTE0LCAxMTAsIDExMCk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBvcmRlcjogMTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zeW5jIHtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBwYWRkaW5nOiA4cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyIHtcXHJcXG4gIG9yZGVyOiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG4gIGNvbG9yOiAjMGYwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3JkZXI6IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsci10b2RvIHtcXHJcXG4gIG9yZGVyOiA0O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweCA4cHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBjb2xvcjogZ3JleTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNsci10b2RvOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDE1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udCB7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBvcmRlcjogMztcXHJcXG59XFxyXFxuXFxyXFxuLnRyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiYSgyNDUsIDk0LCA5NCwgMC45NDUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi50by1kbzpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjIwLCAyMjApO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbGlicmFyeSwgZG9tIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgZmFFbGxpcHNpc1YgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFbGxpcHNpc1YnO1xyXG5pbXBvcnQgeyBmYVRyYXNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2gnO1xyXG5pbXBvcnQgeyBmYVN5bmNBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTeW5jQWx0JztcclxuaW1wb3J0IHsgZmFTaWduSW5BbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFTaWduSW5BbHQnO1xyXG5cclxubGlicmFyeS5hZGQoZmFFbGxpcHNpc1YpO1xyXG5saWJyYXJ5LmFkZChmYVRyYXNoKTtcclxubGlicmFyeS5hZGQoZmFTeW5jQWx0KTtcclxubGlicmFyeS5hZGQoZmFTaWduSW5BbHQpO1xyXG5kb20ud2F0Y2goKTtcclxuXHJcbmNvbnN0IHRvRG9MaXN0ID0gW1xyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnaSB3YW50IHRvIGJlIGdyZWF0JyxcclxuICAgIGluZGV4OiA0LFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnaSB3YW50IHRvIGxhdWdoJyxcclxuICAgIGluZGV4OiAzLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnaSB3YW50IHRvIGhhdmUgZnVuJyxcclxuICAgIGluZGV4OiAyLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnaSB3YW50IHRvIHJ1bicsXHJcbiAgICBpbmRleDogMSxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ2kgd2FudCB0byBib3gnLFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyBMb2Rhc2gsIGN1cnJlbnRseSBpbmNsdWRlZCB2aWEgYSBzY3JpcHQsIGlzIHJlcXVpcmVkIGZvciB0aGlzIGxpbmUgdG8gd29ya1xyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1jb250Jyk7XHJcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNsZWFyLmNsYXNzTGlzdC5hZGQoJ2Nsci10b2RvJyk7XHJcbmNsZWFyLmlubmVySFRNTCA9ICdjbGVhciBhbGwgY29tcGxldGVkJztcclxuZWxlbWVudC5hcHBlbmRDaGlsZChjbGVhcik7XHJcblxyXG5jb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5pbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dGRpdicpO1xyXG5lbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RGl2KTtcclxuXHJcbmNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnQnKTtcclxuZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci10aXRsZScpO1xyXG50aXRsZS50ZXh0Q29udGVudCA9ICd0b2RheXMgdG8gZG8nO1xyXG50aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG5jb25zdCBzeW5jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5zeW5jLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLXN5bmMtYWx0JywgJ3N5bmMnKTtcclxudGl0bGVEaXYuYXBwZW5kQ2hpbGQoc3luYyk7XHJcblxyXG5jb25zdCBlbnRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuZW50ZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xyXG5lbnRlcklucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCB0byB5b3VyIGxpc3QgLi4uJztcclxuaW5wdXREaXYuYXBwZW5kQ2hpbGQoZW50ZXJJbnB1dCk7XHJcblxyXG5jb25zdCBlbnRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbmVudGVySWNvbi5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1zaWduLWluLWFsdCcsICdlbnRlcicpO1xyXG5pbnB1dERpdi5hcHBlbmRDaGlsZChlbnRlckljb24pO1xyXG5cclxuY29uc3QgY3JlYXRlVG9EbyA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpc3Quc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gIGxpc3QuY2xhc3NMaXN0LmFkZCgndG8tZG8nKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xyXG4gIGNoZWNrQm94LmNoZWNrZWQgPSB0b0RvTGlzdFtpbmRleF0uY29tcGxldGVkO1xyXG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG5cclxuICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnQnKTtcclxuICBsaXN0LmFwcGVuZENoaWxkKGJ0bkRpdik7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gIGlucHV0LnZhbHVlID0gdG9Eb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXRyYXNoJywgJ3RyYXNoJyk7XHJcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uMi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZWxsaXBzaXMtdicsICdtZW51Jyk7XHJcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGljb24yKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUb0RvID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdG9Eb0xpc3QubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgY29uc3QgbXlJbmRleCA9IHRvRG9MaXN0LmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGRpc3BsYXlUb0RvKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=