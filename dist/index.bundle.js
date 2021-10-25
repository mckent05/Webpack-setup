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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  margin: 5% auto;\r\n  flex-direction: column;\r\n  outline: 1px solid whitesmoke;\r\n  box-shadow: 2px 4px 6px rgb(114, 110, 110);\r\n  width: 70%;\r\n}\r\n\r\n.title-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid grey;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.header-title {\r\n  display: flex;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  order: 1;\r\n  position: relative;\r\n  width: 70%;\r\n  justify-content: flex-start;\r\n  order: 1;\r\n}\r\n\r\n.sync {\r\n  order: 2;\r\n}\r\n\r\n.inputdiv {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  order: 2;\r\n  column-gap: 10px;\r\n  align-items: center;\r\n  padding: 12px 10px;\r\n}\r\n\r\n.add-todo {\r\n  order: 1;\r\n  margin: 10px;\r\n  border: none;\r\n  outline: none;\r\n  width: 80%;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  padding: 8px 0;\r\n}\r\n\r\n.enter {\r\n  order: 2;\r\n  display: flex;\r\n  transform: scale(1.5);\r\n  color: #0f0;\r\n}\r\n\r\n.list-cont {\r\n  padding: 0;\r\n  list-style: none;\r\n  order: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.clr-todo {\r\n  order: 4;\r\n  border: none;\r\n  outline: none;\r\n  text-transform: capitalize;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px 8px;\r\n  font-size: 20px;\r\n  color: grey;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.clr-todo:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.to-do {\r\n  display: flex;\r\n  column-gap: 15px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-top: 1px solid grey;\r\n  border-bottom: 1px solid grey;\r\n  width: 100%;\r\n}\r\n\r\n.check {\r\n  width: 10%;\r\n  order: 1;\r\n}\r\n\r\n.task {\r\n  width: 80%;\r\n  display: flex;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: inherit;\r\n  order: 2;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.btn-cont {\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  order: 3;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n  color: rgba(245, 94, 94, 0.945);\r\n}\r\n\r\n.menu {\r\n  cursor: move;\r\n}\r\n\r\n.to-do:nth-child(even) {\r\n  background-color: rgb(233, 220, 220);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;0DACsC;EACtC,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,0CAA0C;EAC1C,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,6BAA6B;EAC7B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,QAAQ;EACR,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,QAAQ;EACR,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,QAAQ;EACR,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["@font-face {\r\n  font-family: \"MyFont\";\r\n  src: url(\"./my-font.woff2\") format(\"woff2\"),\r\n    url(\"./my-font.woff\") format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  margin: 5% auto;\r\n  flex-direction: column;\r\n  outline: 1px solid whitesmoke;\r\n  box-shadow: 2px 4px 6px rgb(114, 110, 110);\r\n  width: 70%;\r\n}\r\n\r\n.title-cont {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  border-bottom: 1px solid grey;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.header-title {\r\n  display: flex;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  order: 1;\r\n  position: relative;\r\n  width: 70%;\r\n  justify-content: flex-start;\r\n  order: 1;\r\n}\r\n\r\n.sync {\r\n  order: 2;\r\n}\r\n\r\n.inputdiv {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  order: 2;\r\n  column-gap: 10px;\r\n  align-items: center;\r\n  padding: 12px 10px;\r\n}\r\n\r\n.add-todo {\r\n  order: 1;\r\n  margin: 10px;\r\n  border: none;\r\n  outline: none;\r\n  width: 80%;\r\n  font-size: 20px;\r\n  font-style: italic;\r\n  padding: 8px 0;\r\n}\r\n\r\n.enter {\r\n  order: 2;\r\n  display: flex;\r\n  transform: scale(1.5);\r\n  color: #0f0;\r\n}\r\n\r\n.list-cont {\r\n  padding: 0;\r\n  list-style: none;\r\n  order: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.clr-todo {\r\n  order: 4;\r\n  border: none;\r\n  outline: none;\r\n  text-transform: capitalize;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 20px 8px;\r\n  font-size: 20px;\r\n  color: grey;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.clr-todo:hover {\r\n  text-decoration: underline;\r\n  color: black;\r\n}\r\n\r\n.to-do {\r\n  display: flex;\r\n  column-gap: 15px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border-top: 1px solid grey;\r\n  border-bottom: 1px solid grey;\r\n  width: 100%;\r\n}\r\n\r\n.check {\r\n  width: 10%;\r\n  order: 1;\r\n}\r\n\r\n.task {\r\n  width: 80%;\r\n  display: flex;\r\n  text-transform: capitalize;\r\n  font-size: 20px;\r\n  outline: none;\r\n  border: none;\r\n  background-color: inherit;\r\n  order: 2;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.btn-cont {\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  order: 3;\r\n}\r\n\r\n.trash {\r\n  display: none;\r\n  color: rgba(245, 94, 94, 0.945);\r\n}\r\n\r\n.menu {\r\n  cursor: move;\r\n}\r\n\r\n.to-do:nth-child(even) {\r\n  background-color: rgb(233, 220, 220);\r\n}\r\n"],"sourceRoot":""}]);
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
// import _ from 'lodash';







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

let createToDo = (index) => {
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
    toDoList.map((item) => {
      if (item.index === i) {
        const myIndex = toDoList.indexOf(item);
        createToDo(myIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUkscUJBQU07QUFDVjtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxQkFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDQUFzQztBQUN0QztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDakMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzNCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzNCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxpQkFBaUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzNCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLFdBQVc7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpREFBaUQsc0JBQXNCLEdBQUcscUJBQXFCLDBCQUEwQix1QkFBdUIsZ0JBQWdCLHNCQUFzQiw2QkFBNkIsR0FBRyx5QkFBeUIsNkJBQTZCLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLDBCQUEwQixtQkFBbUIsR0FBRywwQkFBMEIsb0JBQW9CLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLDBCQUEwQixvQkFBb0IsR0FBRywwQkFBMEIsbUJBQW1CLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLDBCQUEwQixpQkFBaUIsR0FBRywwQkFBMEIsb0JBQW9CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsMkJBQTJCLGVBQWUsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRywyQkFBMkIsa0JBQWtCLEdBQUcsZ0NBQWdDLHdCQUF3QixnQkFBZ0IsR0FBRyxpQ0FBaUMsdUJBQXVCLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxtQ0FBbUMsY0FBYyxZQUFZLGlCQUFpQix1QkFBdUIsYUFBYSxXQUFXLEdBQUcsZ0JBQWdCLDBCQUEwQixnQkFBZ0IsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsZUFBZSxHQUFHLGlDQUFpQyw0Q0FBNEMsNENBQTRDLEdBQUcseUNBQXlDLDBCQUEwQix1QkFBdUIsdUJBQXVCLEdBQUcscUJBQXFCLGNBQWMsYUFBYSw2Q0FBNkMsNkNBQTZDLDRDQUE0Qyw0Q0FBNEMsR0FBRyx3QkFBd0IsOEJBQThCLHVCQUF1QixtQ0FBbUMsbUNBQW1DLGdCQUFnQixrQkFBa0IsbUJBQW1CLG1CQUFtQixxQkFBcUIscUJBQXFCLG9CQUFvQixhQUFhLDRCQUE0QixXQUFXLG1DQUFtQyxtQ0FBbUMsd0NBQXdDLHdDQUF3QyxHQUFHLDZCQUE2QixjQUFjLGFBQWEsY0FBYyxtQ0FBbUMsbUNBQW1DLDJDQUEyQywyQ0FBMkMsR0FBRyw0QkFBNEIsY0FBYyxZQUFZLGdCQUFnQixjQUFjLG1DQUFtQyxtQ0FBbUMsMENBQTBDLDBDQUEwQyxHQUFHLDBCQUEwQixhQUFhLFdBQVcsbUNBQW1DLG1DQUFtQyx3Q0FBd0Msd0NBQXdDLEdBQUcseUJBQXlCLFlBQVksZ0JBQWdCLFdBQVcsbUNBQW1DLG1DQUFtQyx1Q0FBdUMsdUNBQXVDLEdBQUcsWUFBWSw4QkFBOEIsd0JBQXdCLDhCQUE4QixHQUFHLFlBQVksc0JBQXNCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLFlBQVksdUJBQXVCLGtCQUFrQixHQUFHLFlBQVksMEJBQTBCLHVCQUF1QixvQkFBb0IsR0FBRyxlQUFlLHVCQUF1QixHQUFHLFlBQVksZUFBZSx1QkFBdUIsdUJBQXVCLGVBQWUseUJBQXlCLEdBQUcsZ0JBQWdCLDhCQUE4Qix5QkFBeUIsaUNBQWlDLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxzR0FBc0csd0JBQXdCLEdBQUcseUdBQXlHLHVCQUF1QixHQUFHLGNBQWMsa0RBQWtELGtEQUFrRCxHQUFHLGVBQWUsb0RBQW9ELG9EQUFvRCxHQUFHLGdDQUFnQyxRQUFRLHNDQUFzQyxzQ0FBc0MsS0FBSyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxHQUFHLHdCQUF3QixRQUFRLHNDQUFzQyxzQ0FBc0MsS0FBSyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxHQUFHLGlCQUFpQiw2RUFBNkUscUNBQXFDLHFDQUFxQyxHQUFHLG9CQUFvQiw2RUFBNkUsc0NBQXNDLHNDQUFzQyxHQUFHLG9CQUFvQiw2RUFBNkUsc0NBQXNDLHNDQUFzQyxHQUFHLHlCQUF5Qix1RkFBdUYsb0NBQW9DLG9DQUFvQyxHQUFHLHVCQUF1Qix1RkFBdUYsb0NBQW9DLG9DQUFvQyxHQUFHLHlEQUF5RCx1RkFBdUYscUNBQXFDLHFDQUFxQyxHQUFHLG1KQUFtSix5QkFBeUIseUJBQXlCLEdBQUcsZUFBZSwwQkFBMEIsZ0JBQWdCLHVCQUF1QixpQkFBaUIsR0FBRyxpQ0FBaUMsY0FBYyxZQUFZLGlCQUFpQix1QkFBdUIsYUFBYSxXQUFXLEdBQUcsaUNBQWlDLGdCQUFnQixrQkFBa0IsR0FBRywrQkFBK0IsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxjQUFjLGNBQWMsMkJBQTJCLGdCQUFnQixpQkFBaUIscUJBQXFCLGVBQWUsdUJBQXVCLGVBQWUsR0FBRyx5REFBeUQsZUFBZSxpQkFBaUIsY0FBYyxzQkFBc0IscUJBQXFCLGdCQUFnQixHQUFHLGlDQUFpQyxnREFBZ0QsZUFBZSwwQ0FBMEMsR0FBRyxtQ0FBbUMsa0RBQWtELGlCQUFpQiw4Q0FBOEMsR0FBRyxpREFBaUQsaUJBQWlCLDhDQUE4QyxHQUFHLG1EQUFtRCxlQUFlLDBDQUEwQyxHQUFHLDJFQUEyRSxnQkFBZ0IsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUc7O0FBRXRsUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlGQUFpRixhQUFhO0FBQzlGO0FBQ0E7O0FBRUEsa0VBQWtFO0FBQ2xFO0FBQ0EsaURBQWlELDhCQUE4QjtBQUMvRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwyRUFBMkU7QUFDOUg7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQTZDO0FBQ3JFOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL2luZGV4LmVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFFbGxpcHNpc1YuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNpZ25JbkFsdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhU3luY0FsdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVHJhc2guanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRm9udCBBd2Vzb21lIEZyZWUgNS4xNS40IGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICovXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfV0lORE9XID0ge307XG52YXIgX0RPQ1VNRU5UID0ge307XG52YXIgX01VVEFUSU9OX09CU0VSVkVSID0gbnVsbDtcbnZhciBfUEVSRk9STUFOQ0UgPSB7XG4gIG1hcms6IG5vb3AsXG4gIG1lYXN1cmU6IG5vb3Bcbn07XG5cbnRyeSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgX1dJTkRPVyA9IHdpbmRvdztcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSBfTVVUQVRJT05fT0JTRVJWRVIgPSBNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJykgX1BFUkZPUk1BTkNFID0gcGVyZm9ybWFuY2U7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgX3JlZiA9IF9XSU5ET1cubmF2aWdhdG9yIHx8IHt9LFxuICAgIF9yZWYkdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQsXG4gICAgdXNlckFnZW50ID0gX3JlZiR1c2VyQWdlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR1c2VyQWdlbnQ7XG5cbnZhciBXSU5ET1cgPSBfV0lORE9XO1xudmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xudmFyIE1VVEFUSU9OX09CU0VSVkVSID0gX01VVEFUSU9OX09CU0VSVkVSO1xudmFyIFBFUkZPUk1BTkNFID0gX1BFUkZPUk1BTkNFO1xudmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbnZhciBJU19ET00gPSAhIURPQ1VNRU5ULmRvY3VtZW50RWxlbWVudCAmJiAhIURPQ1VNRU5ULmhlYWQgJiYgdHlwZW9mIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG52YXIgSVNfSUUgPSB+dXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSB8fCB+dXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbnZhciBOQU1FU1BBQ0VfSURFTlRJRklFUiA9ICdfX19GT05UX0FXRVNPTUVfX18nO1xudmFyIFVOSVRTX0lOX0dSSUQgPSAxNjtcbnZhciBERUZBVUxUX0ZBTUlMWV9QUkVGSVggPSAnZmEnO1xudmFyIERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MgPSAnc3ZnLWlubGluZS0tZmEnO1xudmFyIERBVEFfRkFfSTJTVkcgPSAnZGF0YS1mYS1pMnN2Zyc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVCA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50JztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudC1wZW5kaW5nJztcbnZhciBEQVRBX1BSRUZJWCA9ICdkYXRhLXByZWZpeCc7XG52YXIgREFUQV9JQ09OID0gJ2RhdGEtaWNvbic7XG52YXIgSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTID0gJ2ZvbnRhd2Vzb21lLWkyc3ZnJztcbnZhciBNVVRBVElPTl9BUFBST0FDSF9BU1lOQyA9ICdhc3luYyc7XG52YXIgVEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMgPSBbJ0hUTUwnLCAnSEVBRCcsICdTVFlMRScsICdTQ1JJUFQnXTtcbnZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KCk7XG52YXIgUFJFRklYX1RPX1NUWUxFID0ge1xuICAnZmFzJzogJ3NvbGlkJyxcbiAgJ2Zhcic6ICdyZWd1bGFyJyxcbiAgJ2ZhbCc6ICdsaWdodCcsXG4gICdmYWQnOiAnZHVvdG9uZScsXG4gICdmYWInOiAnYnJhbmRzJyxcbiAgJ2Zhayc6ICdraXQnLFxuICAnZmEnOiAnc29saWQnXG59O1xudmFyIFNUWUxFX1RPX1BSRUZJWCA9IHtcbiAgJ3NvbGlkJzogJ2ZhcycsXG4gICdyZWd1bGFyJzogJ2ZhcicsXG4gICdsaWdodCc6ICdmYWwnLFxuICAnZHVvdG9uZSc6ICdmYWQnLFxuICAnYnJhbmRzJzogJ2ZhYicsXG4gICdraXQnOiAnZmFrJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIChbNSBdKikoU29saWR8UmVndWxhcnxMaWdodHxEdW90b25lfEJyYW5kc3xGcmVlfFByb3xLaXQpLiovaTsgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBoYW5kbGUgZm9udC13ZWlnaHQgZm9yIGtpdCBTVkcgcHNldWRvLWVsZW1lbnRzP1xuXG52YXIgRk9OVF9XRUlHSFRfVE9fUFJFRklYID0ge1xuICAnOTAwJzogJ2ZhcycsXG4gICc0MDAnOiAnZmFyJyxcbiAgJ25vcm1hbCc6ICdmYXInLFxuICAnMzAwJzogJ2ZhbCdcbn07XG52YXIgb25lVG9UZW4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xudmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xudmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcbnZhciBEVU9UT05FX0NMQVNTRVMgPSB7XG4gIEdST1VQOiAnZ3JvdXAnLFxuICBTV0FQX09QQUNJVFk6ICdzd2FwLW9wYWNpdHknLFxuICBQUklNQVJZOiAncHJpbWFyeScsXG4gIFNFQ09OREFSWTogJ3NlY29uZGFyeSdcbn07XG52YXIgUkVTRVJWRURfQ0xBU1NFUyA9IFsneHMnLCAnc20nLCAnbGcnLCAnZncnLCAndWwnLCAnbGknLCAnYm9yZGVyJywgJ3B1bGwtbGVmdCcsICdwdWxsLXJpZ2h0JywgJ3NwaW4nLCAncHVsc2UnLCAncm90YXRlLTkwJywgJ3JvdGF0ZS0xODAnLCAncm90YXRlLTI3MCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCcsICdmbGlwLWJvdGgnLCAnc3RhY2snLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnaW52ZXJzZScsICdsYXllcnMnLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzLWNvdW50ZXInLCBEVU9UT05FX0NMQVNTRVMuR1JPVVAsIERVT1RPTkVfQ0xBU1NFUy5TV0FQX09QQUNJVFksIERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZLCBEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZXS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChuLCBcInhcIik7XG59KSkuY29uY2F0KG9uZVRvVHdlbnR5Lm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJ3LVwiLmNvbmNhdChuKTtcbn0pKTtcblxudmFyIGluaXRpYWwgPSBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgfHwge307XG5cbmZ1bmN0aW9uIGdldEF0dHJDb25maWcoYXR0cikge1xuICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFsnICsgYXR0ciArICddJyk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAvLyBHZXR0aW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIG9jY3VyIGlmIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IG9uIHRoZSBIVE1MIHRhZyBidXQgd2l0aG91dCBhIHZhbHVlXG4gIC8vIFdlJ2xsIGFzc3VtZSB0aGF0IHRoaXMgaXMgYW4gaW5kaWNhdGlvbiB0aGF0IGl0IHNob3VsZCBiZSB0b2dnbGVkIHRvIHRydWVcbiAgLy8gRm9yIGV4YW1wbGUgPHNjcmlwdCBkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMgc3JjPVwiLi4uXCI+PC9zY3JpcHQ+XG4gIGlmICh2YWwgPT09ICcnKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdmFsO1xufVxuXG5pZiAoRE9DVU1FTlQgJiYgdHlwZW9mIERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgdmFyIGF0dHJzID0gW1snZGF0YS1mYW1pbHktcHJlZml4JywgJ2ZhbWlseVByZWZpeCddLCBbJ2RhdGEtcmVwbGFjZW1lbnQtY2xhc3MnLCAncmVwbGFjZW1lbnRDbGFzcyddLCBbJ2RhdGEtYXV0by1yZXBsYWNlLXN2ZycsICdhdXRvUmVwbGFjZVN2ZyddLCBbJ2RhdGEtYXV0by1hZGQtY3NzJywgJ2F1dG9BZGRDc3MnXSwgWydkYXRhLWF1dG8tYTExeScsICdhdXRvQTExeSddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cycsICdzZWFyY2hQc2V1ZG9FbGVtZW50cyddLCBbJ2RhdGEtb2JzZXJ2ZS1tdXRhdGlvbnMnLCAnb2JzZXJ2ZU11dGF0aW9ucyddLCBbJ2RhdGEtbXV0YXRlLWFwcHJvYWNoJywgJ211dGF0ZUFwcHJvYWNoJ10sIFsnZGF0YS1rZWVwLW9yaWdpbmFsLXNvdXJjZScsICdrZWVwT3JpZ2luYWxTb3VyY2UnXSwgWydkYXRhLW1lYXN1cmUtcGVyZm9ybWFuY2UnLCAnbWVhc3VyZVBlcmZvcm1hbmNlJ10sIFsnZGF0YS1zaG93LW1pc3NpbmctaWNvbnMnLCAnc2hvd01pc3NpbmdJY29ucyddXTtcbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICBhdHRyID0gX3JlZjJbMF0sXG4gICAgICAgIGtleSA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGluaXRpYWxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGZhbWlseVByZWZpeDogREVGQVVMVF9GQU1JTFlfUFJFRklYLFxuICByZXBsYWNlbWVudENsYXNzOiBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTLFxuICBhdXRvUmVwbGFjZVN2ZzogdHJ1ZSxcbiAgYXV0b0FkZENzczogdHJ1ZSxcbiAgYXV0b0ExMXk6IHRydWUsXG4gIHNlYXJjaFBzZXVkb0VsZW1lbnRzOiBmYWxzZSxcbiAgb2JzZXJ2ZU11dGF0aW9uczogdHJ1ZSxcbiAgbXV0YXRlQXBwcm9hY2g6ICdhc3luYycsXG4gIGtlZXBPcmlnaW5hbFNvdXJjZTogdHJ1ZSxcbiAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgc2hvd01pc3NpbmdJY29uczogdHJ1ZVxufTtcblxudmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfZGVmYXVsdCwgaW5pdGlhbCk7XG5cbmlmICghX2NvbmZpZy5hdXRvUmVwbGFjZVN2ZykgX2NvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG5cbnZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnKTtcblxuV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnID0gY29uZmlnO1xuXG52YXIgdyA9IFdJTkRPVyB8fCB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0pIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbnZhciBuYW1lc3BhY2UgPSB3W05BTUVTUEFDRV9JREVOVElGSUVSXTtcblxudmFyIGZ1bmN0aW9ucyA9IFtdO1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgRE9DVU1FTlQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgbG9hZGVkID0gMTtcbiAgZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfSk7XG59O1xuXG52YXIgbG9hZGVkID0gZmFsc2U7XG5cbmlmIChJU19ET00pIHtcbiAgbG9hZGVkID0gKERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChET0NVTUVOVC5yZWFkeVN0YXRlKTtcbiAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZ1bmN0aW9ucy5wdXNoKGZuKTtcbn1cblxudmFyIFBFTkRJTkcgPSAncGVuZGluZyc7XG52YXIgU0VUVExFRCA9ICdzZXR0bGVkJztcbnZhciBGVUxGSUxMRUQgPSAnZnVsZmlsbGVkJztcbnZhciBSRUpFQ1RFRCA9ICdyZWplY3RlZCc7XG5cbnZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHt9O1xuXG52YXIgaXNOb2RlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY1NldFRpbWVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyBzZXRUaW1lb3V0IDogc2V0SW1tZWRpYXRlO1xudmFyIGFzeW5jUXVldWUgPSBbXTtcbnZhciBhc3luY1RpbWVyO1xuXG5mdW5jdGlvbiBhc3luY0ZsdXNoKCkge1xuICAvLyBydW4gcHJvbWlzZSBjYWxsYmFja3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3luY1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgYXN5bmNRdWV1ZVtpXVswXShhc3luY1F1ZXVlW2ldWzFdKTtcbiAgfSAvLyByZXNldCBhc3luYyBhc3luY1F1ZXVlXG5cblxuICBhc3luY1F1ZXVlID0gW107XG4gIGFzeW5jVGltZXIgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXN5bmNDYWxsKGNhbGxiYWNrLCBhcmcpIHtcbiAgYXN5bmNRdWV1ZS5wdXNoKFtjYWxsYmFjaywgYXJnXSk7XG5cbiAgaWYgKCFhc3luY1RpbWVyKSB7XG4gICAgYXN5bmNUaW1lciA9IHRydWU7XG4gICAgYXN5bmNTZXRUaW1lcihhc3luY0ZsdXNoLCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgcHJvbWlzZSkge1xuICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVqZWN0UHJvbWlzZShlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzdWJzY3JpYmVyKSB7XG4gIHZhciBvd25lciA9IHN1YnNjcmliZXIub3duZXI7XG4gIHZhciBzZXR0bGVkID0gb3duZXIuX3N0YXRlO1xuICB2YXIgdmFsdWUgPSBvd25lci5fZGF0YTtcbiAgdmFyIGNhbGxiYWNrID0gc3Vic2NyaWJlcltzZXR0bGVkXTtcbiAgdmFyIHByb21pc2UgPSBzdWJzY3JpYmVyLnRoZW47XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldHRsZWQgPSBGVUxGSUxMRUQ7XG5cbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkge1xuICB2YXIgcmVzb2x2ZWQ7XG5cbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAvLyB0aGVuIHNob3VsZCBiZSByZXRyaWV2ZWQgb25seSBvbmNlXG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlIHx8ICFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gdmFsdWU7XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hGdWxmaWxsbWVudCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHJlYXNvbjtcbiAgICBhc3luY0NhbGwocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHByb21pc2UuX3RoZW4gPSBwcm9taXNlLl90aGVuLmZvckVhY2goaW52b2tlQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoRnVsZmlsbG1lbnQocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG5cbiAgaWYgKCFwcm9taXNlLl9oYW5kbGVkICYmIGlzTm9kZSkge1xuICAgIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHByb21pc2UuX2RhdGEsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeVJlamVjdGlvbkhhbmRsZWQocHJvbWlzZSkge1xuICBnbG9iYWwucHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG59XG4vKipcbiAqIEBjbGFzc1xuICovXG5cblxuZnVuY3Rpb24gUChyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciAnICsgcmVzb2x2ZXIgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodGhpcyBpbnN0YW5jZW9mIFAgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdQcm9taXNlXFwnOiBQbGVhc2UgdXNlIHRoZSBcXCduZXdcXCcgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHRoaXMuX3RoZW4gPSBbXTtcbiAgaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHRoaXMpO1xufVxuXG5QLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFAsXG4gIF9zdGF0ZTogUEVORElORyxcbiAgX3RoZW46IG51bGwsXG4gIF9kYXRhOiB1bmRlZmluZWQsXG4gIF9oYW5kbGVkOiBmYWxzZSxcbiAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgIHZhciBzdWJzY3JpYmVyID0ge1xuICAgICAgb3duZXI6IHRoaXMsXG4gICAgICB0aGVuOiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihOT09QKSxcbiAgICAgIGZ1bGZpbGxlZDogb25GdWxmaWxsbWVudCxcbiAgICAgIHJlamVjdGVkOiBvblJlamVjdGlvblxuICAgIH07XG5cbiAgICBpZiAoKG9uUmVqZWN0aW9uIHx8IG9uRnVsZmlsbG1lbnQpICYmICF0aGlzLl9oYW5kbGVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCAmJiBpc05vZGUpIHtcbiAgICAgICAgYXN5bmNDYWxsKG5vdGlmeVJlamVjdGlvbkhhbmRsZWQsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gRlVMRklMTEVEIHx8IHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgLy8gYWxyZWFkeSByZXNvbHZlZCwgY2FsbCBjYWxsYmFjayBhc3luY1xuICAgICAgYXN5bmNDYWxsKGludm9rZUNhbGxiYWNrLCBzdWJzY3JpYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vic2NyaWJlXG4gICAgICB0aGlzLl90aGVuLnB1c2goc3Vic2NyaWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnNjcmliZXIudGhlbjtcbiAgfSxcbiAgY2F0Y2g6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9XG59O1xuXG5QLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZW1haW5pbmcgPSAwO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoaW5kZXgpIHtcbiAgICAgIHJlbWFpbmluZysrO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghIC0tcmVtYWluaW5nKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmVyKGkpLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tpXSA9IHByb21pc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZW1haW5pbmcpIHtcbiAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfVxuICB9KTtcbn07XG5cblAucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLnJhY2UoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuUC5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5QLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG52YXIgcGlja2VkID0gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlIDogUDtcblxudmFyIGQgPSBVTklUU19JTl9HUklEO1xudmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICBzaXplOiAxNixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRlOiAwLFxuICBmbGlwWDogZmFsc2UsXG4gIGZsaXBZOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgdmFyIGhlYWRDaGlsZHJlbiA9IERPQ1VNRU5ULmhlYWQuY2hpbGROb2RlcztcbiAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gaGVhZENoaWxkcmVuW2ldO1xuICAgIHZhciB0YWdOYW1lID0gKGNoaWxkLnRhZ05hbWUgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG4gIHJldHVybiBjc3M7XG59XG52YXIgaWRQb29sID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbmZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgdmFyIHNpemUgPSAxMjtcbiAgdmFyIGlkID0gJyc7XG5cbiAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZmFtaWx5UHJlZml4LCBjbHMpIHtcbiAgdmFyIHBhcnRzID0gY2xzLnNwbGl0KCctJyk7XG4gIHZhciBwcmVmaXggPSBwYXJ0c1swXTtcbiAgdmFyIGljb25OYW1lID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gIGlmIChwcmVmaXggPT09IGZhbWlseVByZWZpeCAmJiBpY29uTmFtZSAhPT0gJycgJiYgIWlzUmVzZXJ2ZWQoaWNvbk5hbWUpKSB7XG4gICAgcmV0dXJuIGljb25OYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBodG1sRXNjYXBlKHN0cikge1xuICByZXR1cm4gXCJcIi5jb25jYXQoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5mdW5jdGlvbiBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChhdHRyaWJ1dGVOYW1lLCBcIj1cXFwiXCIpLmNvbmNhdChodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLCBcIlxcXCIgXCIpO1xuICB9LCAnJykudHJpbSgpO1xufVxuZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOiBcIikuY29uY2F0KHN0eWxlc1tzdHlsZU5hbWVdLCBcIjtcIik7XG4gIH0sICcnKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZm9ybS5zaXplICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5zaXplIHx8IHRyYW5zZm9ybS54ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS54IHx8IHRyYW5zZm9ybS55ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS55IHx8IHRyYW5zZm9ybS5yb3RhdGUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnJvdGF0ZSB8fCB0cmFuc2Zvcm0uZmxpcFggfHwgdHJhbnNmb3JtLmZsaXBZO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yU3ZnKF9yZWYpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG4gIHZhciBvdXRlciA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgfTtcbiAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhciBpbm5lclJvdGF0ZSA9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcIiAwIDApXCIpO1xuICB2YXIgaW5uZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICB9O1xuICB2YXIgcGF0aCA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gIH07XG4gIHJldHVybiB7XG4gICAgb3V0ZXI6IG91dGVyLFxuICAgIGlubmVyOiBpbm5lcixcbiAgICBwYXRoOiBwYXRoXG4gIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JDc3MoX3JlZjIpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYyLnRyYW5zZm9ybSxcbiAgICAgIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICB3aWR0aCA9IF9yZWYyJHdpZHRoID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkd2lkdGgsXG4gICAgICBfcmVmMiRoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICBoZWlnaHQgPSBfcmVmMiRoZWlnaHQgPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiRoZWlnaHQsXG4gICAgICBfcmVmMiRzdGFydENlbnRlcmVkID0gX3JlZjIuc3RhcnRDZW50ZXJlZCxcbiAgICAgIHN0YXJ0Q2VudGVyZWQgPSBfcmVmMiRzdGFydENlbnRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN0YXJ0Q2VudGVyZWQ7XG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoc3RhcnRDZW50ZXJlZCAmJiBJU19JRSkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkIC0gd2lkdGggLyAyLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCAtIGhlaWdodCAvIDIsIFwiZW0pIFwiKTtcbiAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKGNhbGMoLTUwJSArIFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0pLCBjYWxjKC01MCUgKyBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkpIFwiKTtcbiAgfSBlbHNlIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pIFwiKTtcbiAgfVxuXG4gIHZhbCArPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhbCArPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCJkZWcpIFwiKTtcbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIEFMTF9TUEFDRSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIGZpbGxCbGFjayhhYnN0cmFjdCkge1xuICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgaWYgKGFic3RyYWN0LmF0dHJpYnV0ZXMgJiYgKGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCB8fCBmb3JjZSkpIHtcbiAgICBhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgPSAnYmxhY2snO1xuICB9XG5cbiAgcmV0dXJuIGFic3RyYWN0O1xufVxuXG5mdW5jdGlvbiBkZUdyb3VwKGFic3RyYWN0KSB7XG4gIGlmIChhYnN0cmFjdC50YWcgPT09ICdnJykge1xuICAgIHJldHVybiBhYnN0cmFjdC5jaGlsZHJlbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2Fic3RyYWN0XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSWNvbk1hc2tpbmcgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIGV4cGxpY2l0TWFza0lkID0gX3JlZi5tYXNrSWQsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICBtYWluUGF0aCA9IG1haW4uaWNvbjtcbiAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgIGljb25XaWR0aDogbWFpbldpZHRoXG4gIH0pO1xuICB2YXIgbWFza1JlY3QgPSB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBmaWxsOiAnd2hpdGUnXG4gICAgfSlcbiAgfTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbiA9IG1haW5QYXRoLmNoaWxkcmVuID8ge1xuICAgIGNoaWxkcmVuOiBtYWluUGF0aC5jaGlsZHJlbi5tYXAoZmlsbEJsYWNrKVxuICB9IDoge307XG4gIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgY2hpbGRyZW46IFtmaWxsQmxhY2soX29iamVjdFNwcmVhZCh7XG4gICAgICB0YWc6IG1haW5QYXRoLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW5QYXRoLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgfSwgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluKSldXG4gIH07XG4gIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgfTtcbiAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgY2xpcElkID0gXCJjbGlwLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBtYXNrVGFnID0ge1xuICAgIHRhZzogJ21hc2snLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgfTtcbiAgdmFyIGRlZnMgPSB7XG4gICAgdGFnOiAnZGVmcycsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBjbGlwSWRcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogZGVHcm91cChtYXNrUGF0aClcbiAgICB9LCBtYXNrVGFnXVxuICB9O1xuICBjaGlsZHJlbi5wdXNoKGRlZnMsIHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgJ2NsaXAtcGF0aCc6IFwidXJsKCNcIi5jb25jYXQoY2xpcElkLCBcIilcIiksXG4gICAgICBtYXNrOiBcInVybCgjXCIuY29uY2F0KG1hc2tJZCwgXCIpXCIpXG4gICAgfSwgQUxMX1NQQUNFKVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlSWNvblN0YW5kYXJkIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiBtYWluLndpZHRoLFxuICAgICAgaWNvbldpZHRoOiBtYWluLndpZHRoXG4gICAgfSk7XG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluLmljb24uYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGRyZW4ucHVzaChtYWluLmljb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBhc0ljb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgeTogMC41XG4gICAgfTtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZXMsIHtcbiAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogXCJcIi5jb25jYXQob2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2LCBcImVtIFwiKS5jb25jYXQob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2LCBcImVtXCIpXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9XTtcbn1cblxuZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuICB2YXIgaWQgPSBzeW1ib2wgPT09IHRydWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiBzeW1ib2w7XG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgIHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgaXNVcGxvYWRlZEljb24gPSBwcmVmaXggPT09ICdmYWsnO1xuICB2YXIgd2lkdGhDbGFzcyA9IGlzVXBsb2FkZWRJY29uID8gJycgOiBcImZhLXctXCIuY29uY2F0KE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KSk7XG4gIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIGljb25OYW1lID8gXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiAnJywgd2lkdGhDbGFzc10uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGV4dHJhLmNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTE7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjICE9PSAnJyB8fCAhIWM7XG4gIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAncm9sZSc6IGV4dHJhLmF0dHJpYnV0ZXMucm9sZSB8fCAnaW1nJyxcbiAgICAgICd4bWxucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAndmlld0JveCc6IFwiMCAwIFwiLmNvbmNhdCh3aWR0aCwgXCIgXCIpLmNvbmNhdChoZWlnaHQpXG4gICAgfSlcbiAgfTtcbiAgdmFyIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUgPSBpc1VwbG9hZGVkSWNvbiAmJiAhfmV4dHJhLmNsYXNzZXMuaW5kZXhPZignZmEtZncnKSA/IHtcbiAgICB3aWR0aDogXCJcIi5jb25jYXQod2lkdGggLyBoZWlnaHQgKiAxNiAqIDAuMDYyNSwgXCJlbVwiKVxuICB9IDoge307XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgaWYgKHRpdGxlKSBjb250ZW50LmNoaWxkcmVuLnB1c2goe1xuICAgIHRhZzogJ3RpdGxlJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCBcInRpdGxlLVwiLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgfSk7XG5cbiAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkKHt9LCBjb250ZW50LCB7XG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIG1haW46IG1haW4sXG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBzdHlsZXM6IF9vYmplY3RTcHJlYWQoe30sIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUsIGV4dHJhLnN0eWxlcylcbiAgfSk7XG5cbiAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gbWFrZUljb25NYXNraW5nKGFyZ3MpIDogbWFrZUljb25TdGFuZGFyZChhcmdzKSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNJY29uKGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuc3R5bGVzKTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gdHJhbnNmb3JtRm9yQ3NzKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgc3RhcnRDZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfSk7XG4gICAgc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVzWyd0cmFuc2Zvcm0nXTtcbiAgfVxuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuZnVuY3Rpb24gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmE7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIG5vb3AkMSA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIHAgPSBjb25maWcubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDoge1xuICBtYXJrOiBub29wJDEsXG4gIG1lYXN1cmU6IG5vb3AkMVxufTtcbnZhciBwcmVhbWJsZSA9IFwiRkEgXFxcIjUuMTUuNFxcXCJcIjtcblxudmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW5kKG5hbWUpO1xuICB9O1xufTtcblxudmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xufTtcblxudmFyIHBlcmYgPSB7XG4gIGJlZ2luOiBiZWdpbixcbiAgZW5kOiBlbmRcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cblxudmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cblxuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksXG4gICAgICBrZXksXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiB0b0hleCh1bmljb2RlKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGV4ID0gdW5pY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSwgbm9ybWFsaXplZCk7XG4gIH1cbiAgLyoqXG4gICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAqIGZvciBgZmFzYCBzbyB3ZSdsbCBlYXN5IHRoZSB1cGdyYWRlIHByb2Nlc3MgZm9yIG91ciB1c2VycyBieSBhdXRvbWF0aWNhbGx5IGRlZmluaW5nXG4gICAqIHRoaXMgYXMgd2VsbC5cbiAgICovXG5cblxuICBpZiAocHJlZml4ID09PSAnZmFzJykge1xuICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgfVxufVxuXG52YXIgc3R5bGVzID0gbmFtZXNwYWNlLnN0eWxlcyxcbiAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG52YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICBvW3ByZWZpeF0gPSByZWR1Y2Uoc3R5bGUsIHJlZHVjZXIsIHt9KTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgaWYgKGljb25bM10pIHtcbiAgICAgIGFjY1tpY29uWzNdXSA9IGljb25OYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICBfYnlMaWdhdHVyZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIHZhciBsaWdhdHVyZXMgPSBpY29uWzJdO1xuICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICBsaWdhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAobGlnYXR1cmUpIHtcbiAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXM7XG4gIF9ieU9sZE5hbWUgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICB2YXIgb2xkTmFtZSA9IHNoaW1bMF07XG4gICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgdmFyIGljb25OYW1lID0gc2hpbVsyXTtcblxuICAgIGlmIChwcmVmaXggPT09ICdmYXInICYmICFoYXNSZWd1bGFyKSB7XG4gICAgICBwcmVmaXggPSAnZmFzJztcbiAgICB9XG5cbiAgICBhY2Nbb2xkTmFtZV0gPSB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbmJ1aWxkKCk7XG5mdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gIHJldHVybiAoX2J5VW5pY29kZVtwcmVmaXhdIHx8IHt9KVt1bmljb2RlXTtcbn1cbmZ1bmN0aW9uIGJ5TGlnYXR1cmUocHJlZml4LCBsaWdhdHVyZSkge1xuICByZXR1cm4gKF9ieUxpZ2F0dXJlW3ByZWZpeF0gfHwge30pW2xpZ2F0dXJlXTtcbn1cbmZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGxcbiAgfTtcbn1cblxudmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcbnZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHJlc3Q6IFtdXG4gIH07XG59O1xuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSWNvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnLmZhbWlseVByZWZpeCwgY2xzKTtcblxuICAgIGlmIChzdHlsZXMkMVtjbHNdKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmF1dG9GZXRjaFN2ZyAmJiBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgIHZhciBzaGltID0gYWNjLnByZWZpeCA9PT0gJ2ZhJyA/IGJ5T2xkTmFtZShpY29uTmFtZSkgOiB7fTtcbiAgICAgIGFjYy5pY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzLmluZGV4T2YoJ2ZhLXctJykgIT09IDApIHtcbiAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBlbXB0eUNhbm9uaWNhbEljb24oKSk7XG59XG5mdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSHRtbChhYnN0cmFjdE5vZGVzKSB7XG4gIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPT09IHZvaWQgMCA/IHt9IDogX2Fic3RyYWN0Tm9kZXMkYXR0cmliLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcsIFwiIFwiKS5jb25jYXQoam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIFwiPlwiKS5jb25jYXQoY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJyksIFwiPC9cIikuY29uY2F0KHRhZywgXCI+XCIpO1xuICB9XG59XG5cbnZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlO1xuICB9XG5cbiAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICByZXR1cm4gbXV0YXRvciB8fCBtdXRhdG9ycy5yZXBsYWNlO1xufVxuXG52YXIgbXV0YXRvcnMgPSB7XG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuICAgIHZhciBuZXdPdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWcua2VlcE9yaWdpbmFsU291cmNlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJyA/IFwiPCEtLSBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIEZvbnQgQXdlc29tZSBmb250YXdlc29tZS5jb20gLS0+XCIpIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgIHRvU3ZnOiBbXVxuICAgIH0pO1xuICAgIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MgPSBzcGxpdENsYXNzZXMudG9Tdmcuam9pbignICcpO1xuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGVyZm9ybU9wZXJhdGlvblN5bmMob3ApIHtcbiAgb3AoKTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybShtdXRhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG5cbiAgICBpZiAoY29uZmlnLm11dGF0ZUFwcHJvYWNoID09PSBNVVRBVElPTl9BUFBST0FDSF9BU1lOQykge1xuICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgIH1cblxuICAgIGZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdtdXRhdGUnKTtcbiAgICAgIG11dGF0aW9ucy5tYXAobXV0YXRvcik7XG4gICAgICBtYXJrKCk7XG4gICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBkaXNhYmxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbnZhciBtbyA9IG51bGw7XG5mdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgaWYgKCFNVVRBVElPTl9PQlNFUlZFUikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLm9ic2VydmVNdXRhdGlvbnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJlZUNhbGxiYWNrID0gb3B0aW9ucy50cmVlQ2FsbGJhY2ssXG4gICAgICBub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPSBvcHRpb25zLm9ic2VydmVNdXRhdGlvbnNSb290LFxuICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICBtbyA9IG5ldyBNVVRBVElPTl9PQlNFUlZFUihmdW5jdGlvbiAob2JqZWN0cykge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzWzBdKSkge1xuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIGlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC50YXJnZXQpICYmIH5BVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OLmluZGV4T2YobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfZ2V0Q2Fub25pY2FsSWNvbi5pY29uTmFtZTtcblxuICAgICAgICAgIGlmIChwcmVmaXgpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4JywgcHJlZml4KTtcbiAgICAgICAgICBpZiAoaWNvbk5hbWUpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIGljb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmICghbW8pIHJldHVybjtcbiAgbW8uZGlzY29ubmVjdCgpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVBhcnNlciAobm9kZSkge1xuICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgdmFyIHZhbCA9IFtdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gc3R5bGVzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICBpZiAocHJvcCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjY1twcm9wXSA9IHZhbHVlLmpvaW4oJzonKS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY2xhc3NQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gIHZhciBleGlzdGluZ0ljb25OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgIHZhbC5wcmVmaXggPSBleGlzdGluZ1ByZWZpeDtcbiAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICB9XG5cbiAgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KTtcbiAgfSBlbHNlIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieVVuaWNvZGUodmFsLnByZWZpeCwgdG9IZXgobm9kZS5pbm5lclRleHQpKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlLFxuICAgIHJvdGF0ZTogMFxuICB9O1xuXG4gIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9XG59O1xuZnVuY3Rpb24gdHJhbnNmb3JtUGFyc2VyIChub2RlKSB7XG4gIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10cmFuc2Zvcm0nKSk7XG59XG5cbmZ1bmN0aW9uIHN5bWJvbFBhcnNlciAobm9kZSkge1xuICB2YXIgc3ltYm9sID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gIHJldHVybiBzeW1ib2wgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbCA9PT0gJycgPyB0cnVlIDogc3ltYm9sO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICB2YXIgdGl0bGVJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRpdGxlLWlkJyk7XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXh0cmFBdHRyaWJ1dGVzO1xufVxuXG5mdW5jdGlvbiBtYXNrUGFyc2VyIChub2RlKSB7XG4gIHZhciBtYXNrID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzaycpO1xuXG4gIGlmICghbWFzaykge1xuICAgIHJldHVybiBlbXB0eUNhbm9uaWNhbEljb24oKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Q2Fub25pY2FsSWNvbihtYXNrLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJsYW5rTWV0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0aXRsZUlkOiBudWxsLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgIHN5bWJvbDogZmFsc2UsXG4gICAgbWFzazogbnVsbCxcbiAgICBtYXNrSWQ6IG51bGwsXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IFtdLFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VNZXRhKG5vZGUpIHtcbiAgdmFyIF9jbGFzc1BhcnNlciA9IGNsYXNzUGFyc2VyKG5vZGUpLFxuICAgICAgaWNvbk5hbWUgPSBfY2xhc3NQYXJzZXIuaWNvbk5hbWUsXG4gICAgICBwcmVmaXggPSBfY2xhc3NQYXJzZXIucHJlZml4LFxuICAgICAgZXh0cmFDbGFzc2VzID0gX2NsYXNzUGFyc2VyLnJlc3Q7XG5cbiAgdmFyIGV4dHJhU3R5bGVzID0gc3R5bGVQYXJzZXIobm9kZSk7XG4gIHZhciB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1QYXJzZXIobm9kZSk7XG4gIHZhciBzeW1ib2wgPSBzeW1ib2xQYXJzZXIobm9kZSk7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzUGFyc2VyKG5vZGUpO1xuICB2YXIgbWFzayA9IG1hc2tQYXJzZXIobm9kZSk7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIHRpdGxlOiBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSxcbiAgICB0aXRsZUlkOiBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbWFza0lkOiBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrLWlkJyksXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IGV4dHJhQ2xhc3NlcyxcbiAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICBhdHRyaWJ1dGVzOiBleHRyYUF0dHJpYnV0ZXNcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1pc3NpbmdJY29uKGVycm9yKSB7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nSWNvbic7XG4gIHRoaXMubWVzc2FnZSA9IGVycm9yIHx8ICdJY29uIHVuYXZhaWxhYmxlJztcbiAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xufVxuTWlzc2luZ0ljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbnZhciBGSUxMID0ge1xuICBmaWxsOiAnY3VycmVudENvbG9yJ1xufTtcbnZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gIGR1cjogJzJzJ1xufTtcbnZhciBSSU5HID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICB9KVxufTtcblxudmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xufSk7XG5cbnZhciBET1QgPSB7XG4gIHRhZzogJ2NpcmNsZScsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBjeDogJzI1NicsXG4gICAgY3k6ICczNjQnLFxuICAgIHI6ICcyOCdcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgfSlcbiAgfSwge1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIFFVRVNUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzA7MDswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIEVYQ0xBTUFUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcwJyxcbiAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMDswOzE7MTswOzA7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIG1pc3NpbmcgPSB7XG4gIHRhZzogJ2cnLFxuICBjaGlsZHJlbjogW1JJTkcsIERPVCwgUVVFU1RJT04sIEVYQ0xBTUFUSU9OXVxufTtcblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbmZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG5cbiAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgIHZlY3RvckRhdGEgPSBfaWNvbiRzbGljZTJbMF07XG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdwYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogZWxlbWVudFxuICB9O1xufVxuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHZhbCA9IHtcbiAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIGljb246IG1pc3NpbmdcbiAgICB9O1xuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMltwcmVmaXhdICYmIHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICB2YXIgaWNvbiA9IHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgICAgcmV0dXJuIHJlc29sdmUoYXNGb3VuZEljb24oaWNvbikpO1xuICAgIH1cblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zKSB7XG4gICAgICByZWplY3QobmV3IE1pc3NpbmdJY29uKFwiSWNvbiBpcyBtaXNzaW5nIGZvciBwcmVmaXggXCIuY29uY2F0KHByZWZpeCwgXCIgd2l0aCBpY29uIG5hbWUgXCIpLmNvbmNhdChpY29uTmFtZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBzdHlsZXMkMyA9IG5hbWVzcGFjZS5zdHlsZXM7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSkge1xuICB2YXIgaWNvbk5hbWUgPSBub2RlTWV0YS5pY29uTmFtZSxcbiAgICAgIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0aXRsZUlkID0gbm9kZU1ldGEudGl0bGVJZCxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgbWFza0lkID0gbm9kZU1ldGEubWFza0lkLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICB9KV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgdmFyIHdpZHRoID0gbnVsbDtcbiAgdmFyIGhlaWdodCA9IG51bGw7XG5cbiAgaWYgKElTX0lFKSB7XG4gICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICB9XG5cbiAgcmV0dXJuIHBpY2tlZC5yZXNvbHZlKFtub2RlLCBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGV4dHJhOiBleHRyYSxcbiAgICB3YXRjaGFibGU6IHRydWVcbiAgfSldKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gIHZhciBub2RlTWV0YSA9IHBhcnNlTWV0YShub2RlKTtcblxuICBpZiAofm5vZGVNZXRhLmV4dHJhLmNsYXNzZXMuaW5kZXhPZihMQVlFUlNfVEVYVF9DTEFTU05BTUUpKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25UcmVlKHJvb3QpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICB2YXIgaHRtbENsYXNzTGlzdCA9IERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XG5cbiAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QucmVtb3ZlKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8gT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFKSA6IE9iamVjdC5rZXlzKHN0eWxlcyQzKTtcbiAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbXCIuXCIuY29uY2F0KExBWUVSU19URVhUX0NMQVNTTkFNRSwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIildLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KHAsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpO1xuICB9KSkuam9pbignLCAnKTtcblxuICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgfSBjYXRjaCAoZSkgey8vIG5vb3BcbiAgfVxuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nSWNvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwaWNrZWQuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgIHBlcmZvcm0ocmVzb2x2ZWRNdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGNsQWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBtYXJrKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgPT09IHBvc2l0aW9uO1xuICAgIH0pWzBdO1xuICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKS5tYXRjaChGT05UX0ZBTUlMWV9QQVRURVJOKTtcbiAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCAmJiAhZm9udEZhbWlseSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgLy8gcmVtb3ZlZC4gU28gd2Ugbm93IHNob3VsZCBkZWxldGUgdGhlIGljb24uXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChmb250RmFtaWx5ICYmIGNvbnRlbnQgIT09ICdub25lJyAmJiBjb250ZW50ICE9PSAnJykge1xuICAgICAgdmFyIF9jb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgdmFyIHByZWZpeCA9IH5bJ1NvbGlkJywgJ1JlZ3VsYXInLCAnTGlnaHQnLCAnRHVvdG9uZScsICdCcmFuZHMnLCAnS2l0J10uaW5kZXhPZihmb250RmFtaWx5WzJdKSA/IFNUWUxFX1RPX1BSRUZJWFtmb250RmFtaWx5WzJdLnRvTG93ZXJDYXNlKCldIDogRk9OVF9XRUlHSFRfVE9fUFJFRklYW2ZvbnRXZWlnaHRdO1xuICAgICAgdmFyIGhleFZhbHVlID0gdG9IZXgoX2NvbnRlbnQubGVuZ3RoID09PSAzID8gX2NvbnRlbnQuc3Vic3RyKDEsIDEpIDogX2NvbnRlbnQpO1xuICAgICAgdmFyIGljb25OYW1lID0gYnlVbmljb2RlKHByZWZpeCwgaGV4VmFsdWUpO1xuICAgICAgdmFyIGljb25JZGVudGlmaWVyID0gaWNvbk5hbWU7IC8vIE9ubHkgY29udmVydCB0aGUgcHNldWRvIGVsZW1lbnQgaW4gdGhpcyA6YmVmb3JlLzphZnRlciBwb3NpdGlvbiBpbnRvIGFuIGljb24gaWYgd2UgaGF2ZW4ndFxuICAgICAgLy8gYWxyZWFkeSBkb25lIHNvIHdpdGggdGhlIHNhbWUgcHJlZml4IGFuZCBpY29uTmFtZVxuXG4gICAgICBpZiAoaWNvbk5hbWUgJiYgKCFhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgpICE9PSBwcmVmaXggfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfSUNPTikgIT09IGljb25JZGVudGlmaWVyKSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlLCBpY29uSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgb25lLCBzaW5jZSB3ZSdyZSByZXBsYWNpbmcgaXQgd2l0aCBhIG5ldyBvbmVcbiAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gYmxhbmtNZXRhKCk7XG4gICAgICAgIHZhciBleHRyYSA9IG1ldGEuZXh0cmE7XG4gICAgICAgIGV4dHJhLmF0dHJpYnV0ZXNbREFUQV9GQV9QU0VVRE9fRUxFTUVOVF0gPSBwb3NpdGlvbjtcbiAgICAgICAgZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkudGhlbihmdW5jdGlvbiAobWFpbikge1xuICAgICAgICAgIHZhciBhYnN0cmFjdCA9IG1ha2VJbmxpbmVTdmdBYnN0cmFjdChfb2JqZWN0U3ByZWFkKHt9LCBtZXRhLCB7XG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgICAgICBtYXNrOiBlbXB0eUNhbm9uaWNhbEljb24oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWU6IGljb25JZGVudGlmaWVyLFxuICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICc6YmVmb3JlJykge1xuICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKG5vZGUpIHtcbiAgcmV0dXJuIHBpY2tlZC5hbGwoW3JlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmJlZm9yZScpLCByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzphZnRlcicpXSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCAmJiAhflRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTLmluZGV4T2Yobm9kZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpICYmICFub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSAmJiAoIW5vZGUucGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGUudGFnTmFtZSAhPT0gJ3N2ZycpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hQc2V1ZG9FbGVtZW50cyAocm9vdCkge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIG9wZXJhdGlvbnMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpKS5maWx0ZXIocHJvY2Vzc2FibGUpLm1hcChyZXBsYWNlKTtcbiAgICB2YXIgZW5kID0gcGVyZi5iZWdpbignc2VhcmNoUHNldWRvRWxlbWVudHMnKTtcbiAgICBkaXNhYmxlT2JzZXJ2YXRpb24oKTtcbiAgICBwaWNrZWQuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIGJhc2VTdHlsZXMgPSBcInN2Zzpub3QoOnJvb3QpLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAxZW07XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4yMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMSB7XFxuICB3aWR0aDogMC4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIge1xcbiAgd2lkdGg6IDAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTMge1xcbiAgd2lkdGg6IDAuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy00IHtcXG4gIHdpZHRoOiAwLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTUge1xcbiAgd2lkdGg6IDAuMzEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy02IHtcXG4gIHdpZHRoOiAwLjM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy03IHtcXG4gIHdpZHRoOiAwLjQzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOCB7XFxuICB3aWR0aDogMC41ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTkge1xcbiAgd2lkdGg6IDAuNTYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMCB7XFxuICB3aWR0aDogMC42MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTEge1xcbiAgd2lkdGg6IDAuNjg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMiB7XFxuICB3aWR0aDogMC43NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMyB7XFxuICB3aWR0aDogMC44MTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE0IHtcXG4gIHdpZHRoOiAwLjg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNSB7XFxuICB3aWR0aDogMC45Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE2IHtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE3IHtcXG4gIHdpZHRoOiAxLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTgge1xcbiAgd2lkdGg6IDEuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE5IHtcXG4gIHdpZHRoOiAxLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMjAge1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtYm9yZGVyIHtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1saSB7XFxuICB3aWR0aDogMmVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtZncge1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmEge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmEge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtdGV4dCB7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjUzYTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWF4LXdpZHRoOiA1ZW07XFxuICBtaW4td2lkdGg6IDEuNWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLXJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtbGVmdCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzZW07XFxuICBsaW5lLWhlaWdodDogMC43NWVtO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjA2NjdlbTtcXG59XFxuXFxuLmZhLXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG4uZmEtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG5cXG4uZmEtMXgge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZmEtNHgge1xcbiAgZm9udC1zaXplOiA0ZW07XFxufVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuLmZhLTZ4IHtcXG4gIGZvbnQtc2l6ZTogNmVtO1xcbn1cXG5cXG4uZmEtN3gge1xcbiAgZm9udC1zaXplOiA3ZW07XFxufVxcblxcbi5mYS04eCB7XFxuICBmb250LXNpemU6IDhlbTtcXG59XFxuXFxuLmZhLTl4IHtcXG4gIGZvbnQtc2l6ZTogOWVtO1xcbn1cXG5cXG4uZmEtMTB4IHtcXG4gIGZvbnQtc2l6ZTogMTBlbTtcXG59XFxuXFxuLmZhLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMi41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZhLWxpIHtcXG4gIGxlZnQ6IC0yZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5mYS1ib3JkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xcbiAgcGFkZGluZzogMC4yZW0gMC4yNWVtIDAuMTVlbTtcXG59XFxuXFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uZmEuZmEtcHVsbC1sZWZ0LFxcbi5mYXMuZmEtcHVsbC1sZWZ0LFxcbi5mYXIuZmEtcHVsbC1sZWZ0LFxcbi5mYWwuZmEtcHVsbC1sZWZ0LFxcbi5mYWIuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxufVxcbi5mYS5mYS1wdWxsLXJpZ2h0LFxcbi5mYXMuZmEtcHVsbC1yaWdodCxcXG4uZmFyLmZhLXB1bGwtcmlnaHQsXFxuLmZhbC5mYS1wdWxsLXJpZ2h0LFxcbi5mYWIuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxufVxcblxcbi5mYS1zcGluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuLmZhLXB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmZhLXJvdGF0ZS05MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG5cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbn1cXG5cXG4uZmEtZmxpcC1ib3RoLCAuZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbn1cXG5cXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwsXFxuOnJvb3QgLmZhLWZsaXAtYm90aCB7XFxuICAtd2Via2l0LWZpbHRlcjogbm9uZTtcXG4gICAgICAgICAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG4uZmEtc3RhY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMi41ZW07XFxufVxcblxcbi5mYS1zdGFjay0xeCxcXG4uZmEtc3RhY2stMngge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMngge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMi41ZW07XFxufVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3Itb25seSB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBjbGlwOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtcHJpbWFyeSB7XFxuICBmaWxsOiB2YXIoLS1mYS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXNlY29uZGFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1wcmltYXJ5IHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1zZWNvbmRhcnkge1xcbiAgb3BhY2l0eTogMTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSBtYXNrIC5mYS1wcmltYXJ5LFxcbi5zdmctaW5saW5lLS1mYSBtYXNrIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblxcbi5mYWQuZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XCI7XG5cbmZ1bmN0aW9uIGNzcyAoKSB7XG4gIHZhciBkZnAgPSBERUZBVUxUX0ZBTUlMWV9QUkVGSVg7XG4gIHZhciBkcmMgPSBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTO1xuICB2YXIgZnAgPSBjb25maWcuZmFtaWx5UHJlZml4O1xuICB2YXIgcmMgPSBjb25maWcucmVwbGFjZW1lbnRDbGFzcztcbiAgdmFyIHMgPSBiYXNlU3R5bGVzO1xuXG4gIGlmIChmcCAhPT0gZGZwIHx8IHJjICE9PSBkcmMpIHtcbiAgICB2YXIgZFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZGZwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgIHZhciBjdXN0b21Qcm9wUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLS1cIi5jb25jYXQoZGZwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgIHZhciByUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkcmMpLCAnZycpO1xuICAgIHMgPSBzLnJlcGxhY2UoZFBhdHQsIFwiLlwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKGN1c3RvbVByb3BQYXR0LCBcIi0tXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoclBhdHQsIFwiLlwiLmNvbmNhdChyYykpO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59XG5cbnZhciBMaWJyYXJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlicmFyeSwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZGVmaW5pdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRpdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UodGhpcy5fcHVsbERlZmluaXRpb25zLCB7fSk7XG4gICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpcy5kZWZpbml0aW9uc1trZXldID0gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgYnVpbGQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3B1bGxEZWZpbml0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBkZWZpbml0aW9uLnByZWZpeCAmJiBkZWZpbml0aW9uLmljb25OYW1lICYmIGRlZmluaXRpb24uaWNvbiA/IHtcbiAgICAgICAgMDogZGVmaW5pdGlvblxuICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX25vcm1hbGl6ZWQka2V5ID0gbm9ybWFsaXplZFtrZXldLFxuICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lID0gX25vcm1hbGl6ZWQka2V5Lmljb25OYW1lLFxuICAgICAgICAgICAgaWNvbiA9IF9ub3JtYWxpemVkJGtleS5pY29uO1xuICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVtpY29uTmFtZV0gPSBpY29uO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaWJyYXJ5O1xufSgpO1xuXG5mdW5jdGlvbiBlbnN1cmVDc3MoKSB7XG4gIGlmIChjb25maWcuYXV0b0FkZENzcyAmJiAhX2Nzc0luc2VydGVkKSB7XG4gICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBpT2JqZWN0KHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdhYnN0cmFjdCcsIHtcbiAgICBnZXQ6IGFic3RyYWN0Q3JlYXRvclxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2h0bWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ25vZGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBmaW5kSWNvbkRlZmluaXRpb24oaWNvbkxvb2t1cCkge1xuICB2YXIgX2ljb25Mb29rdXAkcHJlZml4ID0gaWNvbkxvb2t1cC5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfaWNvbkxvb2t1cCRwcmVmaXggPT09IHZvaWQgMCA/ICdmYScgOiBfaWNvbkxvb2t1cCRwcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25Mb29rdXAuaWNvbk5hbWU7XG4gIGlmICghaWNvbk5hbWUpIHJldHVybjtcbiAgcmV0dXJuIGljb25Gcm9tTWFwcGluZyhsaWJyYXJ5LmRlZmluaXRpb25zLCBwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uRnJvbU1hcHBpbmcobmFtZXNwYWNlLnN0eWxlcywgcHJlZml4LCBpY29uTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJY29ucyhuZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF5YmVJY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBpY29uRGVmaW5pdGlvbiA9IChtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KS5pY29uID8gbWF5YmVJY29uRGVmaW5pdGlvbiA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KTtcbiAgICB2YXIgbWFzayA9IHBhcmFtcy5tYXNrO1xuXG4gICAgaWYgKG1hc2spIHtcbiAgICAgIG1hc2sgPSAobWFzayB8fCB7fSkuaWNvbiA/IG1hc2sgOiBmaW5kSWNvbkRlZmluaXRpb24obWFzayB8fCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9vYmplY3RTcHJlYWQoe30sIHBhcmFtcywge1xuICAgICAgbWFzazogbWFza1xuICAgIH0pKTtcbiAgfTtcbn1cblxudmFyIGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpO1xudmFyIG5vQXV0byA9IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gZmFsc2U7XG4gIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG4gIGRpc2Nvbm5lY3QoKTtcbn07XG52YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG52YXIgZG9tID0ge1xuICBpMnN2ZzogZnVuY3Rpb24gaTJzdmcoKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoSVNfRE9NKSB7XG4gICAgICBlbnN1cmVDc3MoKTtcbiAgICAgIHZhciBfcGFyYW1zJG5vZGUgPSBwYXJhbXMubm9kZSxcbiAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZSxcbiAgICAgICAgICBfcGFyYW1zJGNhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICAgIGNhbGxiYWNrID0gX3BhcmFtcyRjYWxsYmFjayA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcGFyYW1zJGNhbGxiYWNrO1xuXG4gICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBpY2tlZC5yZWplY3QoJ09wZXJhdGlvbiByZXF1aXJlcyBhIERPTSBvZiBzb21lIGtpbmQuJyk7XG4gICAgfVxuICB9LFxuICBjc3M6IGNzcyxcbiAgaW5zZXJ0Q3NzOiBmdW5jdGlvbiBpbnNlcnRDc3MkJDEoKSB7XG4gICAgaWYgKCFfY3NzSW5zZXJ0ZWQpIHtcbiAgICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuICB9LFxuICB3YXRjaDogZnVuY3Rpb24gd2F0Y2goKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gcGFyYW1zLm9ic2VydmVNdXRhdGlvbnNSb290O1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSB0cnVlO1xuICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgYXV0b1JlcGxhY2VTdmdSb290OiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZSh7XG4gICAgICAgIHRyZWVDYWxsYmFjazogb25UcmVlLFxuICAgICAgICBub2RlQ2FsbGJhY2s6IG9uTm9kZSxcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjazogc2VhcmNoUHNldWRvRWxlbWVudHMsXG4gICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290OiBvYnNlcnZlTXV0YXRpb25zUm9vdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcGFyc2UgPSB7XG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpO1xuICB9XG59O1xudmFyIGljb24gPSByZXNvbHZlSWNvbnMoZnVuY3Rpb24gKGljb25EZWZpbml0aW9uKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0sXG4gICAgICBfcGFyYW1zJHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICBzeW1ib2wgPSBfcGFyYW1zJHN5bWJvbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHN5bWJvbCxcbiAgICAgIF9wYXJhbXMkbWFzayA9IHBhcmFtcy5tYXNrLFxuICAgICAgbWFzayA9IF9wYXJhbXMkbWFzayA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkbWFzayxcbiAgICAgIF9wYXJhbXMkbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgIG1hc2tJZCA9IF9wYXJhbXMkbWFza0lkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrSWQsXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgdGl0bGVJZCA9IF9wYXJhbXMkdGl0bGVJZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGVJZCxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgcmV0dXJuIGFwaU9iamVjdChfb2JqZWN0U3ByZWFkKHtcbiAgICB0eXBlOiAnaWNvbidcbiAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgIGljb25zOiB7XG4gICAgICAgIG1haW46IGFzRm91bmRJY29uKGljb24pLFxuICAgICAgICBtYXNrOiBtYXNrID8gYXNGb3VuZEljb24obWFzay5pY29uKSA6IHtcbiAgICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgIGljb246IHt9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZCh7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0sIHRyYW5zZm9ybSksXG4gICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgdGl0bGVJZDogdGl0bGVJZCxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG52YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQoY29udGVudCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtMiA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybTIgPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0yLFxuICAgICAgX3BhcmFtcyR0aXRsZTIgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUyID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTIsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMyID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMiA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMyLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMiA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczIgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMixcbiAgICAgIF9wYXJhbXMkc3R5bGVzMiA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczIgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMyO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZCh7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0sIHRyYW5zZm9ybSksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy10ZXh0XCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgY291bnRlciA9IGZ1bmN0aW9uIGNvdW50ZXIoY29udGVudCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdGl0bGUzID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMyA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUzLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMyxcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczMsXG4gICAgICBfcGFyYW1zJHN0eWxlczMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMztcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2NvdW50ZXInLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQudG9TdHJpbmcoKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLWNvdW50ZXJcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBsYXllciA9IGZ1bmN0aW9uIGxheWVyKGFzc2VtYmxlcikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkY2xhc3NlczQgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXM0ID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczQ7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdsYXllcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGEuYWJzdHJhY3QpO1xuICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3tcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVyc1wiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSkuam9pbignICcpXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV07XG4gIH0pO1xufTtcbnZhciBhcGkgPSB7XG4gIG5vQXV0bzogbm9BdXRvLFxuICBjb25maWc6IGNvbmZpZyxcbiAgZG9tOiBkb20sXG4gIGxpYnJhcnk6IGxpYnJhcnksXG4gIHBhcnNlOiBwYXJzZSxcbiAgZmluZEljb25EZWZpbml0aW9uOiBmaW5kSWNvbkRlZmluaXRpb24sXG4gIGljb246IGljb24sXG4gIHRleHQ6IHRleHQsXG4gIGNvdW50ZXI6IGNvdW50ZXIsXG4gIGxheWVyOiBsYXllcixcbiAgdG9IdG1sOiB0b0h0bWxcbn07XG5cbnZhciBhdXRvUmVwbGFjZSA9IGZ1bmN0aW9uIGF1dG9SZXBsYWNlKCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRhdXRvUmVwbGFjZVN2O1xuICBpZiAoKE9iamVjdC5rZXlzKG5hbWVzcGFjZS5zdHlsZXMpLmxlbmd0aCA+IDAgfHwgY29uZmlnLmF1dG9GZXRjaFN2ZykgJiYgSVNfRE9NICYmIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZykgYXBpLmRvbS5pMnN2Zyh7XG4gICAgbm9kZTogYXV0b1JlcGxhY2VTdmdSb290XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgaWNvbiwgbm9BdXRvLCBjb25maWcsIHRvSHRtbCwgbGF5ZXIsIHRleHQsIGNvdW50ZXIsIGxpYnJhcnksIGRvbSwgcGFyc2UsIGZpbmRJY29uRGVmaW5pdGlvbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdlbGxpcHNpcy12JztcbnZhciB3aWR0aCA9IDE5MjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMTQyJztcbnZhciBzdmdQYXRoRGF0YSA9ICdNOTYgMTg0YzM5LjggMCA3MiAzMi4yIDcyIDcycy0zMi4yIDcyLTcyIDcyLTcyLTMyLjItNzItNzIgMzIuMi03MiA3Mi03MnpNMjQgODBjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03MlMxMzUuOCA4IDk2IDggMjQgNDAuMiAyNCA4MHptMCAzNTJjMCAzOS44IDMyLjIgNzIgNzIgNzJzNzItMzIuMiA3Mi03Mi0zMi4yLTcyLTcyLTcyLTcyIDMyLjItNzIgNzJ6JztcblxuZXhwb3J0cy5kZWZpbml0aW9uID0ge1xuICBwcmVmaXg6IHByZWZpeCxcbiAgaWNvbk5hbWU6IGljb25OYW1lLFxuICBpY29uOiBbXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxpZ2F0dXJlcyxcbiAgICB1bmljb2RlLFxuICAgIHN2Z1BhdGhEYXRhXG4gIF19O1xuXG5leHBvcnRzLmZhRWxsaXBzaXNWID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIndXNlIHN0cmljdCc7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHByZWZpeCA9ICdmYXMnO1xudmFyIGljb25OYW1lID0gJ3NpZ24taW4tYWx0JztcbnZhciB3aWR0aCA9IDUxMjtcbnZhciBoZWlnaHQgPSA1MTI7XG52YXIgbGlnYXR1cmVzID0gW107XG52YXIgdW5pY29kZSA9ICdmMmY2JztcbnZhciBzdmdQYXRoRGF0YSA9ICdNNDE2IDQ0OGgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMnYtNDBjMC02LjYgNS40LTEyIDEyLTEyaDg0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE2MGMwLTE3LjctMTQuMy0zMi0zMi0zMmgtODRjLTYuNiAwLTEyLTUuNC0xMi0xMlY3NmMwLTYuNiA1LjQtMTIgMTItMTJoODRjNTMgMCA5NiA0MyA5NiA5NnYxOTJjMCA1My00MyA5Ni05NiA5NnptLTQ3LTIwMUwyMDEgNzljLTE1LTE1LTQxLTQuNS00MSAxN3Y5NkgyNGMtMTMuMyAwLTI0IDEwLjctMjQgMjR2OTZjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMTM2djk2YzAgMjEuNSAyNiAzMiA0MSAxN2wxNjgtMTY4YzkuMy05LjQgOS4zLTI0LjYgMC0zNHonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFTaWduSW5BbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAnc3luYy1hbHQnO1xudmFyIHdpZHRoID0gNTEyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YyZjEnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00zNzAuNzIgMTMzLjI4QzMzOS40NTggMTA0LjAwOCAyOTguODg4IDg3Ljk2MiAyNTUuODQ4IDg4Yy03Ny40NTguMDY4LTE0NC4zMjggNTMuMTc4LTE2Mi43OTEgMTI2Ljg1LTEuMzQ0IDUuMzYzLTYuMTIyIDkuMTUtMTEuNjUxIDkuMTVIMjQuMTAzYy03LjQ5OCAwLTEzLjE5NC02LjgwNy0xMS44MDctMTQuMTc2QzMzLjkzMyA5NC45MjQgMTM0LjgxMyA4IDI1NiA4YzY2LjQ0OCAwIDEyNi43OTEgMjYuMTM2IDE3MS4zMTUgNjguNjg1TDQ2My4wMyA0MC45N0M0NzguMTQ5IDI1Ljg1MSA1MDQgMzYuNTU5IDUwNCA1Ny45NDFWMTkyYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNEgzNDUuOTQxYy0yMS4zODIgMC0zMi4wOS0yNS44NTEtMTYuOTcxLTQwLjk3MWw0MS43NS00MS43NDl6TTMyIDI5NmgxMzQuMDU5YzIxLjM4MiAwIDMyLjA5IDI1Ljg1MSAxNi45NzEgNDAuOTcxbC00MS43NSA0MS43NWMzMS4yNjIgMjkuMjczIDcxLjgzNSA0NS4zMTkgMTE0Ljg3NiA0NS4yOCA3Ny40MTgtLjA3IDE0NC4zMTUtNTMuMTQ0IDE2Mi43ODctMTI2Ljg0OSAxLjM0NC01LjM2MyA2LjEyMi05LjE1IDExLjY1MS05LjE1aDU3LjMwNGM3LjQ5OCAwIDEzLjE5NCA2LjgwNyAxMS44MDcgMTQuMTc2QzQ3OC4wNjcgNDE3LjA3NiAzNzcuMTg3IDUwNCAyNTYgNTA0Yy02Ni40NDggMC0xMjYuNzkxLTI2LjEzNi0xNzEuMzE1LTY4LjY4NUw0OC45NyA0NzEuMDNDMzMuODUxIDQ4Ni4xNDkgOCA0NzUuNDQxIDggNDU0LjA1OVYzMjBjMC0xMy4yNTUgMTAuNzQ1LTI0IDI0LTI0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVN5bmNBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndHJhc2gnO1xudmFyIHdpZHRoID0gNDQ4O1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YxZjgnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ000MzIgMzJIMzEybC05LjQtMTguN0EyNCAyNCAwIDAgMCAyODEuMSAwSDE2Ni44YTIzLjcyIDIzLjcyIDAgMCAwLTIxLjQgMTMuM0wxMzYgMzJIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6TTUzLjIgNDY3YTQ4IDQ4IDAgMCAwIDQ3LjkgNDVoMjQ1LjhhNDggNDggMCAwIDAgNDcuOS00NUw0MTYgMTI4SDMyeic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYVRyYXNoID0gZXhwb3J0cy5kZWZpbml0aW9uO1xuZXhwb3J0cy5wcmVmaXggPSBwcmVmaXg7XG5leHBvcnRzLmljb25OYW1lID0gaWNvbk5hbWU7XG5leHBvcnRzLndpZHRoID0gd2lkdGg7XG5leHBvcnRzLmhlaWdodCA9IGhlaWdodDtcbmV4cG9ydHMubGlnYXR1cmVzID0gbGlnYXR1cmVzO1xuZXhwb3J0cy51bmljb2RlID0gdW5pY29kZTtcbmV4cG9ydHMuc3ZnUGF0aERhdGEgPSBzdmdQYXRoRGF0YTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9teS1mb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9teS1mb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICBib3gtc2hhZG93OiAycHggNHB4IDZweCByZ2IoMTE0LCAxMTAsIDExMCk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBvcmRlcjogMTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN5bmMge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTJweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8ge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHBhZGRpbmc6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXIge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgY29sb3I6ICMwZjA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvcmRlcjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG8ge1xcclxcbiAgb3JkZXI6IDQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG86aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50by1kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250IHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG9yZGVyOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0NSwgOTQsIDk0LCAwLjk0NSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMjAsIDIyMCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7MERBQ3NDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vbXktZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG4gICAgdXJsKFxcXCIuL215LWZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDUlIGF1dG87XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxuICBib3gtc2hhZG93OiAycHggNHB4IDZweCByZ2IoMTE0LCAxMTAsIDExMCk7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBvcmRlcjogMTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN5bmMge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTJweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8ge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHBhZGRpbmc6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXIge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgY29sb3I6ICMwZjA7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnQge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvcmRlcjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG8ge1xcclxcbiAgb3JkZXI6IDQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xyLXRvZG86aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50by1kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250IHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIG9yZGVyOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0NSwgOTQsIDk0LCAwLjk0NSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMjAsIDIyMCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBmYUVsbGlwc2lzViB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYUVsbGlwc2lzVic7XHJcbmltcG9ydCB7IGZhVHJhc2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUcmFzaCc7XHJcbmltcG9ydCB7IGZhU3luY0FsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVN5bmNBbHQnO1xyXG5pbXBvcnQgeyBmYVNpZ25JbkFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy9mYVNpZ25JbkFsdCc7XHJcblxyXG5saWJyYXJ5LmFkZChmYUVsbGlwc2lzVik7XHJcbmxpYnJhcnkuYWRkKGZhVHJhc2gpO1xyXG5saWJyYXJ5LmFkZChmYVN5bmNBbHQpO1xyXG5saWJyYXJ5LmFkZChmYVNpZ25JbkFsdCk7XHJcbmRvbS53YXRjaCgpO1xyXG5cclxuY29uc3QgdG9Eb0xpc3QgPSBbXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdpIHdhbnQgdG8gYmUgZ3JlYXQnLFxyXG4gICAgaW5kZXg6IDQsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdpIHdhbnQgdG8gbGF1Z2gnLFxyXG4gICAgaW5kZXg6IDMsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdpIHdhbnQgdG8gaGF2ZSBmdW4nLFxyXG4gICAgaW5kZXg6IDIsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGVzY3JpcHRpb246ICdpIHdhbnQgdG8gcnVuJyxcclxuICAgIGluZGV4OiAxLFxyXG4gICAgY29tcGxldGVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGRlc2NyaXB0aW9uOiAnaSB3YW50IHRvIGJveCcsXHJcbiAgICBpbmRleDogMCxcclxuICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXHJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LWNvbnQnKTtcclxuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY2xlYXIuY2xhc3NMaXN0LmFkZCgnY2xyLXRvZG8nKTtcclxuY2xlYXIuaW5uZXJIVE1MID0gJ2NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG5lbGVtZW50LmFwcGVuZENoaWxkKGNsZWFyKTtcclxuXHJcbmNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0ZGl2Jyk7XHJcbmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXREaXYpO1xyXG5cclxuY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxudGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udCcpO1xyXG5lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxudGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRpdGxlJyk7XHJcbnRpdGxlLnRleHRDb250ZW50ID0gJ3RvZGF5cyB0byBkbyc7XHJcbnRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbmNvbnN0IHN5bmMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbnN5bmMuY2xhc3NMaXN0LmFkZCgnZmEnLCAnZmEtc3luYy1hbHQnLCAnc3luYycpO1xyXG50aXRsZURpdi5hcHBlbmRDaGlsZChzeW5jKTtcclxuXHJcbmNvbnN0IGVudGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5lbnRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJyk7XHJcbmVudGVySW5wdXQucGxhY2Vob2xkZXIgPSAnQWRkIHRvIHlvdXIgbGlzdCAuLi4nO1xyXG5pbnB1dERpdi5hcHBlbmRDaGlsZChlbnRlcklucHV0KTtcclxuXHJcbmNvbnN0IGVudGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuZW50ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLXNpZ24taW4tYWx0JywgJ2VudGVyJyk7XHJcbmlucHV0RGl2LmFwcGVuZENoaWxkKGVudGVySWNvbik7XHJcblxyXG5sZXQgY3JlYXRlVG9EbyA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpc3Quc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xyXG4gIGxpc3QuY2xhc3NMaXN0LmFkZCgndG8tZG8nKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xyXG4gIGNoZWNrQm94LmNoZWNrZWQgPSB0b0RvTGlzdFtpbmRleF0uY29tcGxldGVkO1xyXG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG5cclxuICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidG5EaXYuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnQnKTtcclxuICBsaXN0LmFwcGVuZENoaWxkKGJ0bkRpdik7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgaW5wdXQucmVhZE9ubHkgPSB0cnVlO1xyXG4gIGlucHV0LnZhbHVlID0gdG9Eb0xpc3RbaW5kZXhdLmRlc2NyaXB0aW9uO1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXRyYXNoJywgJ3RyYXNoJyk7XHJcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICBjb25zdCBpY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uMi5jbGFzc0xpc3QuYWRkKCdmYXMnLCAnZmEtZWxsaXBzaXMtdicsICdtZW51Jyk7XHJcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGljb24yKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUb0RvID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHRvRG9MaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pbmRleCA9PT0gaSkge1xyXG4gICAgICAgIGNvbnN0IG15SW5kZXggPSB0b0RvTGlzdC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGNyZWF0ZVRvRG8obXlJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGRpc3BsYXlUb0RvKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=