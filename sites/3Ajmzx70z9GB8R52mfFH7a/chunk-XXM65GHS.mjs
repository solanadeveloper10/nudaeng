import {
  A as _t,
  b as xt,
  c as At,
  da as wt,
  e as Ft,
  u as gt,
  v as kt,
  x as q,
} from "./chunk-5TMVSQSY.mjs";
import { m as ct, p as Z, v as nt, z as Et } from "./chunk-KVWHONJO.mjs";
import { b as H, c as W, d as Y } from "./chunk-Y5FTINFI.mjs";
var Lt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Nt = {
    ...Lt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  It = {
    onClick: { type: q.EventHandler },
    onMouseEnter: { type: q.EventHandler },
    onMouseLeave: { type: q.EventHandler },
  },
  Ht = {
    type: q.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  jt = {
    font: {
      type: q.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: q.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: e }) => !e,
    },
    fontWeight: {
      type: q.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: e }) => !e,
    },
  };
function Tt(e) {
  let r = nt(null);
  return r.current === null && (r.current = e()), r.current;
}
var Ut = {
  borderRadius: {
    title: "Radius",
    type: q.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var $t = {
  padding: {
    type: q.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var Vt = (e) => e instanceof xt;
function Gt(e, r) {
  let i = nt(r),
    s = nt(),
    a = nt(!1),
    n = gt.current() === gt.canvas,
    l = r?.onChangeDeps ? r.onChangeDeps : [],
    v = ct(r?.onChange, [...l]),
    y = ct((P) => {
      var S;
      return !((S = i.current) === null || S === void 0) && S.transform
        ? i.current.transform(P)
        : P;
    }, []),
    g = Tt(() => (Vt(e) ? e : At(y(e))));
  return (
    Z(() => {
      if (!Vt(e) && a.current) {
        var P, S;
        let d = y(e);
        if (
          ((P = s.current) === null || P === void 0 || P.stop(),
          v && v(d, g),
          !((S = i.current) === null || S === void 0) && S.animate && !n)
        ) {
          var u;
          s.current = kt(
            g,
            d,
            (u = i.current) === null || u === void 0 ? void 0 : u.transition
          );
        } else g.set(d);
      }
      a.current = !0;
    }, [e, ...l]),
    g
  );
}
var t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Y,
  Rt = {};
typeof H < "u" &&
  (function (e, r) {
    Rt ? (Rt = r(e)) : ((e.lottie = r(e)), (e.bodymovin = e.lottie));
  })(W || {}, function (window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      initialDefaultFrame = -999999,
      subframeEnabled = !0,
      expressionsPlugin,
      isSafari = /^((?!chrome|android).)*safari/i.test(H.userAgent),
      cachedColors = {},
      bmRnd,
      bmPow = Math.pow,
      bmSqrt = Math.sqrt,
      bmFloor = Math.floor,
      bmMax = Math.max,
      bmMin = Math.min,
      BMMath = {};
    (function () {
      var e = [
          "abs",
          "acos",
          "acosh",
          "asin",
          "asinh",
          "atan",
          "atanh",
          "atan2",
          "ceil",
          "cbrt",
          "expm1",
          "clz32",
          "cos",
          "cosh",
          "exp",
          "floor",
          "fround",
          "hypot",
          "imul",
          "log",
          "log1p",
          "log2",
          "log10",
          "max",
          "min",
          "pow",
          "random",
          "round",
          "sign",
          "sin",
          "sinh",
          "sqrt",
          "tan",
          "tanh",
          "trunc",
          "E",
          "LN10",
          "LN2",
          "LOG10E",
          "LOG2E",
          "PI",
          "SQRT1_2",
          "SQRT2",
        ],
        r,
        i = e.length;
      for (r = 0; r < i; r += 1) BMMath[e[r]] = Math[e[r]];
    })();
    function ProjectInterface() {
      return {};
    }
    (BMMath.random = Math.random),
      (BMMath.abs = function (e) {
        var r = typeof e;
        if (r === "object" && e.length) {
          var i = createSizedArray(e.length),
            s,
            a = e.length;
          for (s = 0; s < a; s += 1) i[s] = Math.abs(e[s]);
          return i;
        }
        return Math.abs(e);
      });
    var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = 0.5519;
    function roundValues(e) {
      e
        ? (bmRnd = Math.round)
        : (bmRnd = function (r) {
            return r;
          });
    }
    roundValues(!1);
    function styleDiv(e) {
      (e.style.position = "absolute"),
        (e.style.top = 0),
        (e.style.left = 0),
        (e.style.display = "block"),
        (e.style.transformOrigin = "0 0"),
        (e.style.webkitTransformOrigin = "0 0"),
        (e.style.backfaceVisibility = "visible"),
        (e.style.webkitBackfaceVisibility = "visible"),
        (e.style.transformStyle = "preserve-3d"),
        (e.style.webkitTransformStyle = "preserve-3d"),
        (e.style.mozTransformStyle = "preserve-3d");
    }
    function BMEnterFrameEvent(e, r, i, s) {
      ((this || t).type = e),
        ((this || t).currentTime = r),
        ((this || t).totalTime = i),
        ((this || t).direction = s < 0 ? -1 : 1);
    }
    function BMCompleteEvent(e, r) {
      ((this || t).type = e), ((this || t).direction = r < 0 ? -1 : 1);
    }
    function BMCompleteLoopEvent(e, r, i, s) {
      ((this || t).type = e),
        ((this || t).currentLoop = i),
        ((this || t).totalLoops = r),
        ((this || t).direction = s < 0 ? -1 : 1);
    }
    function BMSegmentStartEvent(e, r, i) {
      ((this || t).type = e),
        ((this || t).firstFrame = r),
        ((this || t).totalFrames = i);
    }
    function BMDestroyEvent(e, r) {
      ((this || t).type = e), ((this || t).target = r);
    }
    function BMRenderFrameErrorEvent(e, r) {
      ((this || t).type = "renderFrameError"),
        ((this || t).nativeError = e),
        ((this || t).currentTime = r);
    }
    function BMConfigErrorEvent(e) {
      ((this || t).type = "configError"), ((this || t).nativeError = e);
    }
    function BMAnimationConfigErrorEvent(e, r) {
      ((this || t).type = e), ((this || t).nativeError = r);
    }
    var createElementID = (function () {
      var e = 0;
      return function () {
        return (e += 1), "__lottie_element_" + e;
      };
    })();
    function HSVtoRGB(e, r, i) {
      var s, a, n, l, v, y, g, P;
      switch (
        ((l = Math.floor(e * 6)),
        (v = e * 6 - l),
        (y = i * (1 - r)),
        (g = i * (1 - v * r)),
        (P = i * (1 - (1 - v) * r)),
        l % 6)
      ) {
        case 0:
          (s = i), (a = P), (n = y);
          break;
        case 1:
          (s = g), (a = i), (n = y);
          break;
        case 2:
          (s = y), (a = i), (n = P);
          break;
        case 3:
          (s = y), (a = g), (n = i);
          break;
        case 4:
          (s = P), (a = y), (n = i);
          break;
        case 5:
          (s = i), (a = y), (n = g);
          break;
        default:
          break;
      }
      return [s, a, n];
    }
    function RGBtoHSV(e, r, i) {
      var s = Math.max(e, r, i),
        a = Math.min(e, r, i),
        n = s - a,
        l,
        v = s === 0 ? 0 : n / s,
        y = s / 255;
      switch (s) {
        case a:
          l = 0;
          break;
        case e:
          (l = r - i + n * (r < i ? 6 : 0)), (l /= 6 * n);
          break;
        case r:
          (l = i - e + n * 2), (l /= 6 * n);
          break;
        case i:
          (l = e - r + n * 4), (l /= 6 * n);
          break;
        default:
          break;
      }
      return [l, v, y];
    }
    function addSaturationToRGB(e, r) {
      var i = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return (
        (i[1] += r),
        i[1] > 1 ? (i[1] = 1) : i[1] <= 0 && (i[1] = 0),
        HSVtoRGB(i[0], i[1], i[2])
      );
    }
    function addBrightnessToRGB(e, r) {
      var i = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return (
        (i[2] += r),
        i[2] > 1 ? (i[2] = 1) : i[2] < 0 && (i[2] = 0),
        HSVtoRGB(i[0], i[1], i[2])
      );
    }
    function addHueToRGB(e, r) {
      var i = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return (
        (i[0] += r / 360),
        i[0] > 1 ? (i[0] -= 1) : i[0] < 0 && (i[0] += 1),
        HSVtoRGB(i[0], i[1], i[2])
      );
    }
    var rgbToHex = (function () {
      var e = [],
        r,
        i;
      for (r = 0; r < 256; r += 1)
        (i = r.toString(16)), (e[r] = i.length === 1 ? "0" + i : i);
      return function (s, a, n) {
        return (
          s < 0 && (s = 0),
          a < 0 && (a = 0),
          n < 0 && (n = 0),
          "#" + e[s] + e[a] + e[n]
        );
      };
    })();
    function BaseEvent() {}
    BaseEvent.prototype = {
      triggerEvent: function (e, r) {
        if ((this || t)._cbs[e])
          for (var i = (this || t)._cbs[e].length, s = 0; s < i; s += 1)
            (this || t)._cbs[e][s](r);
      },
      addEventListener: function (e, r) {
        return (
          (this || t)._cbs[e] || ((this || t)._cbs[e] = []),
          (this || t)._cbs[e].push(r),
          function () {
            this.removeEventListener(e, r);
          }.bind(this || t)
        );
      },
      removeEventListener: function (e, r) {
        if (!r) (this || t)._cbs[e] = null;
        else if ((this || t)._cbs[e]) {
          for (var i = 0, s = (this || t)._cbs[e].length; i < s; )
            (this || t)._cbs[e][i] === r &&
              ((this || t)._cbs[e].splice(i, 1), (i -= 1), (s -= 1)),
              (i += 1);
          (this || t)._cbs[e].length || ((this || t)._cbs[e] = null);
        }
      },
    };
    var createTypedArray = (function () {
      function e(i, s) {
        var a = 0,
          n = [],
          l;
        switch (i) {
          case "int16":
          case "uint8c":
            l = 1;
            break;
          default:
            l = 1.1;
            break;
        }
        for (a = 0; a < s; a += 1) n.push(l);
        return n;
      }
      function r(i, s) {
        return i === "float32"
          ? new Float32Array(s)
          : i === "int16"
          ? new Int16Array(s)
          : i === "uint8c"
          ? new Uint8ClampedArray(s)
          : e(i, s);
      }
      return typeof Uint8ClampedArray == "function" &&
        typeof Float32Array == "function"
        ? r
        : e;
    })();
    function createSizedArray(e) {
      return Array.apply(null, { length: e });
    }
    function createNS(e) {
      return document.createElementNS(svgNS, e);
    }
    function createTag(e) {
      return document.createElement(e);
    }
    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function (e) {
        (this || t).dynamicProperties.indexOf(e) === -1 &&
          ((this || t).dynamicProperties.push(e),
          (this || t).container.addDynamicProperty(this || t),
          ((this || t)._isAnimated = !0));
      },
      iterateDynamicProperties: function () {
        (this || t)._mdf = !1;
        var e,
          r = (this || t).dynamicProperties.length;
        for (e = 0; e < r; e += 1)
          (this || t).dynamicProperties[e].getValue(),
            (this || t).dynamicProperties[e]._mdf && ((this || t)._mdf = !0);
      },
      initDynamicPropertyContainer: function (e) {
        ((this || t).container = e),
          ((this || t).dynamicProperties = []),
          ((this || t)._mdf = !1),
          ((this || t)._isAnimated = !1);
      },
    };
    var getBlendMode = (function () {
      var e = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity",
      };
      return function (r) {
        return e[r] || "";
      };
    })();
    /*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */ var Matrix = (function () {
      var e = Math.cos,
        r = Math.sin,
        i = Math.tan,
        s = Math.round;
      function a() {
        return (
          ((this || t).props[0] = 1),
          ((this || t).props[1] = 0),
          ((this || t).props[2] = 0),
          ((this || t).props[3] = 0),
          ((this || t).props[4] = 0),
          ((this || t).props[5] = 1),
          ((this || t).props[6] = 0),
          ((this || t).props[7] = 0),
          ((this || t).props[8] = 0),
          ((this || t).props[9] = 0),
          ((this || t).props[10] = 1),
          ((this || t).props[11] = 0),
          ((this || t).props[12] = 0),
          ((this || t).props[13] = 0),
          ((this || t).props[14] = 0),
          ((this || t).props[15] = 1),
          this || t
        );
      }
      function n(T) {
        if (T === 0) return this || t;
        var E = e(T),
          F = r(T);
        return this._t(E, -F, 0, 0, F, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function l(T) {
        if (T === 0) return this || t;
        var E = e(T),
          F = r(T);
        return this._t(1, 0, 0, 0, 0, E, -F, 0, 0, F, E, 0, 0, 0, 0, 1);
      }
      function v(T) {
        if (T === 0) return this || t;
        var E = e(T),
          F = r(T);
        return this._t(E, 0, F, 0, 0, 1, 0, 0, -F, 0, E, 0, 0, 0, 0, 1);
      }
      function y(T) {
        if (T === 0) return this || t;
        var E = e(T),
          F = r(T);
        return this._t(E, -F, 0, 0, F, E, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function g(T, E) {
        return this._t(1, E, T, 1, 0, 0);
      }
      function P(T, E) {
        return this.shear(i(T), i(E));
      }
      function S(T, E) {
        var F = e(E),
          D = r(E);
        return this._t(F, D, 0, 0, -D, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(1, 0, 0, 0, i(T), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          ._t(F, -D, 0, 0, D, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function u(T, E, F) {
        return (
          !F && F !== 0 && (F = 1),
          T === 1 && E === 1 && F === 1
            ? this || t
            : this._t(T, 0, 0, 0, 0, E, 0, 0, 0, 0, F, 0, 0, 0, 0, 1)
        );
      }
      function d(T, E, F, D, I, N, z, j, $, K, Q, et, it, J, X, rt) {
        return (
          ((this || t).props[0] = T),
          ((this || t).props[1] = E),
          ((this || t).props[2] = F),
          ((this || t).props[3] = D),
          ((this || t).props[4] = I),
          ((this || t).props[5] = N),
          ((this || t).props[6] = z),
          ((this || t).props[7] = j),
          ((this || t).props[8] = $),
          ((this || t).props[9] = K),
          ((this || t).props[10] = Q),
          ((this || t).props[11] = et),
          ((this || t).props[12] = it),
          ((this || t).props[13] = J),
          ((this || t).props[14] = X),
          ((this || t).props[15] = rt),
          this || t
        );
      }
      function C(T, E, F) {
        return (
          (F = F || 0),
          T !== 0 || E !== 0 || F !== 0
            ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, T, E, F, 1)
            : this || t
        );
      }
      function f(T, E, F, D, I, N, z, j, $, K, Q, et, it, J, X, rt) {
        var G = (this || t).props;
        if (
          T === 1 &&
          E === 0 &&
          F === 0 &&
          D === 0 &&
          I === 0 &&
          N === 1 &&
          z === 0 &&
          j === 0 &&
          $ === 0 &&
          K === 0 &&
          Q === 1 &&
          et === 0
        )
          return (
            (G[12] = G[12] * T + G[15] * it),
            (G[13] = G[13] * N + G[15] * J),
            (G[14] = G[14] * Q + G[15] * X),
            (G[15] *= rt),
            ((this || t)._identityCalculated = !1),
            this || t
          );
        var U = G[0],
          ht = G[1],
          mt = G[2],
          lt = G[3],
          ot = G[4],
          ft = G[5],
          pt = G[6],
          tt = G[7],
          dt = G[8],
          vt = G[9],
          st = G[10],
          yt = G[11],
          at = G[12],
          bt = G[13],
          Pt = G[14],
          Ct = G[15];
        return (
          (G[0] = U * T + ht * I + mt * $ + lt * it),
          (G[1] = U * E + ht * N + mt * K + lt * J),
          (G[2] = U * F + ht * z + mt * Q + lt * X),
          (G[3] = U * D + ht * j + mt * et + lt * rt),
          (G[4] = ot * T + ft * I + pt * $ + tt * it),
          (G[5] = ot * E + ft * N + pt * K + tt * J),
          (G[6] = ot * F + ft * z + pt * Q + tt * X),
          (G[7] = ot * D + ft * j + pt * et + tt * rt),
          (G[8] = dt * T + vt * I + st * $ + yt * it),
          (G[9] = dt * E + vt * N + st * K + yt * J),
          (G[10] = dt * F + vt * z + st * Q + yt * X),
          (G[11] = dt * D + vt * j + st * et + yt * rt),
          (G[12] = at * T + bt * I + Pt * $ + Ct * it),
          (G[13] = at * E + bt * N + Pt * K + Ct * J),
          (G[14] = at * F + bt * z + Pt * Q + Ct * X),
          (G[15] = at * D + bt * j + Pt * et + Ct * rt),
          ((this || t)._identityCalculated = !1),
          this || t
        );
      }
      function p() {
        return (
          (this || t)._identityCalculated ||
            (((this || t)._identity = !(
              (this || t).props[0] !== 1 ||
              (this || t).props[1] !== 0 ||
              (this || t).props[2] !== 0 ||
              (this || t).props[3] !== 0 ||
              (this || t).props[4] !== 0 ||
              (this || t).props[5] !== 1 ||
              (this || t).props[6] !== 0 ||
              (this || t).props[7] !== 0 ||
              (this || t).props[8] !== 0 ||
              (this || t).props[9] !== 0 ||
              (this || t).props[10] !== 1 ||
              (this || t).props[11] !== 0 ||
              (this || t).props[12] !== 0 ||
              (this || t).props[13] !== 0 ||
              (this || t).props[14] !== 0 ||
              (this || t).props[15] !== 1
            )),
            ((this || t)._identityCalculated = !0)),
          (this || t)._identity
        );
      }
      function c(T) {
        for (var E = 0; E < 16; ) {
          if (T.props[E] !== (this || t).props[E]) return !1;
          E += 1;
        }
        return !0;
      }
      function o(T) {
        var E;
        for (E = 0; E < 16; E += 1) T.props[E] = (this || t).props[E];
        return T;
      }
      function h(T) {
        var E;
        for (E = 0; E < 16; E += 1) (this || t).props[E] = T[E];
      }
      function m(T, E, F) {
        return {
          x:
            T * (this || t).props[0] +
            E * (this || t).props[4] +
            F * (this || t).props[8] +
            (this || t).props[12],
          y:
            T * (this || t).props[1] +
            E * (this || t).props[5] +
            F * (this || t).props[9] +
            (this || t).props[13],
          z:
            T * (this || t).props[2] +
            E * (this || t).props[6] +
            F * (this || t).props[10] +
            (this || t).props[14],
        };
      }
      function b(T, E, F) {
        return (
          T * (this || t).props[0] +
          E * (this || t).props[4] +
          F * (this || t).props[8] +
          (this || t).props[12]
        );
      }
      function A(T, E, F) {
        return (
          T * (this || t).props[1] +
          E * (this || t).props[5] +
          F * (this || t).props[9] +
          (this || t).props[13]
        );
      }
      function x(T, E, F) {
        return (
          T * (this || t).props[2] +
          E * (this || t).props[6] +
          F * (this || t).props[10] +
          (this || t).props[14]
        );
      }
      function _() {
        var T =
            (this || t).props[0] * (this || t).props[5] -
            (this || t).props[1] * (this || t).props[4],
          E = (this || t).props[5] / T,
          F = -(this || t).props[1] / T,
          D = -(this || t).props[4] / T,
          I = (this || t).props[0] / T,
          N =
            ((this || t).props[4] * (this || t).props[13] -
              (this || t).props[5] * (this || t).props[12]) /
            T,
          z =
            -(
              (this || t).props[0] * (this || t).props[13] -
              (this || t).props[1] * (this || t).props[12]
            ) / T,
          j = new Matrix();
        return (
          (j.props[0] = E),
          (j.props[1] = F),
          (j.props[4] = D),
          (j.props[5] = I),
          (j.props[12] = N),
          (j.props[13] = z),
          j
        );
      }
      function k(T) {
        var E = this.getInverseMatrix();
        return E.applyToPointArray(T[0], T[1], T[2] || 0);
      }
      function w(T) {
        var E,
          F = T.length,
          D = [];
        for (E = 0; E < F; E += 1) D[E] = k(T[E]);
        return D;
      }
      function R(T, E, F) {
        var D = createTypedArray("float32", 6);
        if (this.isIdentity())
          (D[0] = T[0]),
            (D[1] = T[1]),
            (D[2] = E[0]),
            (D[3] = E[1]),
            (D[4] = F[0]),
            (D[5] = F[1]);
        else {
          var I = (this || t).props[0],
            N = (this || t).props[1],
            z = (this || t).props[4],
            j = (this || t).props[5],
            $ = (this || t).props[12],
            K = (this || t).props[13];
          (D[0] = T[0] * I + T[1] * z + $),
            (D[1] = T[0] * N + T[1] * j + K),
            (D[2] = E[0] * I + E[1] * z + $),
            (D[3] = E[0] * N + E[1] * j + K),
            (D[4] = F[0] * I + F[1] * z + $),
            (D[5] = F[0] * N + F[1] * j + K);
        }
        return D;
      }
      function V(T, E, F) {
        var D;
        return (
          this.isIdentity()
            ? (D = [T, E, F])
            : (D = [
                T * (this || t).props[0] +
                  E * (this || t).props[4] +
                  F * (this || t).props[8] +
                  (this || t).props[12],
                T * (this || t).props[1] +
                  E * (this || t).props[5] +
                  F * (this || t).props[9] +
                  (this || t).props[13],
                T * (this || t).props[2] +
                  E * (this || t).props[6] +
                  F * (this || t).props[10] +
                  (this || t).props[14],
              ]),
          D
        );
      }
      function B(T, E) {
        if (this.isIdentity()) return T + "," + E;
        var F = (this || t).props;
        return (
          Math.round((T * F[0] + E * F[4] + F[12]) * 100) / 100 +
          "," +
          Math.round((T * F[1] + E * F[5] + F[13]) * 100) / 100
        );
      }
      function L() {
        for (
          var T = 0, E = (this || t).props, F = "matrix3d(", D = 1e4;
          T < 16;

        )
          (F += s(E[T] * D) / D), (F += T === 15 ? ")" : ","), (T += 1);
        return F;
      }
      function O(T) {
        var E = 1e4;
        return (T < 1e-6 && T > 0) || (T > -1e-6 && T < 0) ? s(T * E) / E : T;
      }
      function M() {
        var T = (this || t).props,
          E = O(T[0]),
          F = O(T[1]),
          D = O(T[4]),
          I = O(T[5]),
          N = O(T[12]),
          z = O(T[13]);
        return (
          "matrix(" + E + "," + F + "," + D + "," + I + "," + N + "," + z + ")"
        );
      }
      return function () {
        ((this || t).reset = a),
          ((this || t).rotate = n),
          ((this || t).rotateX = l),
          ((this || t).rotateY = v),
          ((this || t).rotateZ = y),
          ((this || t).skew = P),
          ((this || t).skewFromAxis = S),
          ((this || t).shear = g),
          ((this || t).scale = u),
          ((this || t).setTransform = d),
          ((this || t).translate = C),
          ((this || t).transform = f),
          ((this || t).applyToPoint = m),
          ((this || t).applyToX = b),
          ((this || t).applyToY = A),
          ((this || t).applyToZ = x),
          ((this || t).applyToPointArray = V),
          ((this || t).applyToTriplePoints = R),
          ((this || t).applyToPointStringified = B),
          ((this || t).toCSS = L),
          ((this || t).to2dCSS = M),
          ((this || t).clone = o),
          ((this || t).cloneFromProps = h),
          ((this || t).equals = c),
          ((this || t).inversePoints = w),
          ((this || t).inversePoint = k),
          ((this || t).getInverseMatrix = _),
          ((this || t)._t = (this || t).transform),
          ((this || t).isIdentity = p),
          ((this || t)._identity = !0),
          ((this || t)._identityCalculated = !1),
          ((this || t).props = createTypedArray("float32", 16)),
          this.reset();
      };
    })();
    (function (e, r) {
      var i = this || t,
        s = 256,
        a = 6,
        n = 52,
        l = "random",
        v = r.pow(s, a),
        y = r.pow(2, n),
        g = y * 2,
        P = s - 1,
        S;
      function u(h, m, b) {
        var A = [];
        m = m === !0 ? { entropy: !0 } : m || {};
        var x = p(f(m.entropy ? [h, o(e)] : h === null ? c() : h, 3), A),
          _ = new d(A),
          k = function () {
            for (var w = _.g(a), R = v, V = 0; w < y; )
              (w = (w + V) * s), (R *= s), (V = _.g(1));
            for (; w >= g; ) (w /= 2), (R /= 2), (V >>>= 1);
            return (w + V) / R;
          };
        return (
          (k.int32 = function () {
            return _.g(4) | 0;
          }),
          (k.quick = function () {
            return _.g(4) / 4294967296;
          }),
          (k.double = k),
          p(o(_.S), e),
          (
            m.pass ||
            b ||
            function (w, R, V, B) {
              return (
                B &&
                  (B.S && C(B, _),
                  (w.state = function () {
                    return C(_, {});
                  })),
                V ? ((r[l] = w), R) : w
              );
            }
          )(k, x, "global" in m ? m.global : (this || t) == r, m.state)
        );
      }
      r["seed" + l] = u;
      function d(h) {
        var m,
          b = h.length,
          A = this || t,
          x = 0,
          _ = (A.i = A.j = 0),
          k = (A.S = []);
        for (b || (h = [b++]); x < s; ) k[x] = x++;
        for (x = 0; x < s; x++)
          (k[x] = k[(_ = P & (_ + h[x % b] + (m = k[x])))]), (k[_] = m);
        A.g = function (w) {
          for (var R, V = 0, B = A.i, L = A.j, O = A.S; w--; )
            (R = O[(B = P & (B + 1))]),
              (V = V * s + O[P & ((O[B] = O[(L = P & (L + R))]) + (O[L] = R))]);
          return (A.i = B), (A.j = L), V;
        };
      }
      function C(h, m) {
        return (m.i = h.i), (m.j = h.j), (m.S = h.S.slice()), m;
      }
      function f(h, m) {
        var b = [],
          A = typeof h,
          x;
        if (m && A == "object")
          for (x in h)
            try {
              b.push(f(h[x], m - 1));
            } catch {}
        return b.length ? b : A == "string" ? h : h + "\0";
      }
      function p(h, m) {
        for (var b = h + "", A, x = 0; x < b.length; )
          m[P & x] = P & ((A ^= m[P & x] * 19) + b.charCodeAt(x++));
        return o(m);
      }
      function c() {
        try {
          if (S) return o(S.randomBytes(s));
          var h = new Uint8Array(s);
          return (i.crypto || i.msCrypto).getRandomValues(h), o(h);
        } catch {
          var m = i.navigator,
            b = m && m.plugins;
          return [+new Date(), i, b, i.screen, o(e)];
        }
      }
      function o(h) {
        return String.fromCharCode.apply(0, h);
      }
      p(r.random(), e);
    })([], BMMath);
    var BezierFactory = (function () {
      var e = {};
      e.getBezierEasing = i;
      var r = {};
      function i(o, h, m, b, A) {
        var x =
          A || ("bez_" + o + "_" + h + "_" + m + "_" + b).replace(/\./g, "p");
        if (r[x]) return r[x];
        var _ = new c([o, h, m, b]);
        return (r[x] = _), _;
      }
      var s = 4,
        a = 0.001,
        n = 1e-7,
        l = 10,
        v = 11,
        y = 1 / (v - 1),
        g = typeof Float32Array == "function";
      function P(o, h) {
        return 1 - 3 * h + 3 * o;
      }
      function S(o, h) {
        return 3 * h - 6 * o;
      }
      function u(o) {
        return 3 * o;
      }
      function d(o, h, m) {
        return ((P(h, m) * o + S(h, m)) * o + u(h)) * o;
      }
      function C(o, h, m) {
        return 3 * P(h, m) * o * o + 2 * S(h, m) * o + u(h);
      }
      function f(o, h, m, b, A) {
        var x,
          _,
          k = 0;
        do
          (_ = h + (m - h) / 2),
            (x = d(_, b, A) - o),
            x > 0 ? (m = _) : (h = _);
        while (Math.abs(x) > n && ++k < l);
        return _;
      }
      function p(o, h, m, b) {
        for (var A = 0; A < s; ++A) {
          var x = C(h, m, b);
          if (x === 0) return h;
          var _ = d(h, m, b) - o;
          h -= _ / x;
        }
        return h;
      }
      function c(o) {
        ((this || t)._p = o),
          ((this || t)._mSampleValues = g ? new Float32Array(v) : new Array(v)),
          ((this || t)._precomputed = !1),
          ((this || t).get = (this || t).get.bind(this || t));
      }
      return (
        (c.prototype = {
          get: function (o) {
            var h = (this || t)._p[0],
              m = (this || t)._p[1],
              b = (this || t)._p[2],
              A = (this || t)._p[3];
            return (
              (this || t)._precomputed || this._precompute(),
              h === m && b === A
                ? o
                : o === 0
                ? 0
                : o === 1
                ? 1
                : d(this._getTForX(o), m, A)
            );
          },
          _precompute: function () {
            var o = (this || t)._p[0],
              h = (this || t)._p[1],
              m = (this || t)._p[2],
              b = (this || t)._p[3];
            ((this || t)._precomputed = !0),
              (o !== h || m !== b) && this._calcSampleValues();
          },
          _calcSampleValues: function () {
            for (
              var o = (this || t)._p[0], h = (this || t)._p[2], m = 0;
              m < v;
              ++m
            )
              (this || t)._mSampleValues[m] = d(m * y, o, h);
          },
          _getTForX: function (o) {
            for (
              var h = (this || t)._p[0],
                m = (this || t)._p[2],
                b = (this || t)._mSampleValues,
                A = 0,
                x = 1,
                _ = v - 1;
              x !== _ && b[x] <= o;
              ++x
            )
              A += y;
            --x;
            var k = (o - b[x]) / (b[x + 1] - b[x]),
              w = A + k * y,
              R = C(w, h, m);
            return R >= a ? p(o, w, h, m) : R === 0 ? w : f(o, A, A + y, h, m);
          },
        }),
        e
      );
    })();
    (function () {
      for (
        var e = 0, r = ["ms", "moz", "webkit", "o"], i = 0;
        i < r.length && !window.requestAnimationFrame;
        ++i
      )
        (window.requestAnimationFrame = window[r[i] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame =
            window[r[i] + "CancelAnimationFrame"] ||
            window[r[i] + "CancelRequestAnimationFrame"]);
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (s) {
          var a = new Date().getTime(),
            n = Math.max(0, 16 - (a - e)),
            l = setTimeout(function () {
              s(a + n);
            }, n);
          return (e = a + n), l;
        }),
        window.cancelAnimationFrame ||
          (window.cancelAnimationFrame = function (s) {
            clearTimeout(s);
          });
    })();
    function extendPrototype(e, r) {
      var i,
        s = e.length,
        a;
      for (i = 0; i < s; i += 1) {
        a = e[i].prototype;
        for (var n in a)
          Object.prototype.hasOwnProperty.call(a, n) && (r.prototype[n] = a[n]);
      }
    }
    function getDescriptor(e, r) {
      return Object.getOwnPropertyDescriptor(e, r);
    }
    function createProxyFunction(e) {
      function r() {}
      return (r.prototype = e), r;
    }
    function bezFunction() {
      var e = Math;
      function r(u, d, C, f, p, c) {
        var o = u * f + d * p + C * c - p * f - c * u - C * d;
        return o > -0.001 && o < 0.001;
      }
      function i(u, d, C, f, p, c, o, h, m) {
        if (C === 0 && c === 0 && m === 0) return r(u, d, f, p, o, h);
        var b = e.sqrt(e.pow(f - u, 2) + e.pow(p - d, 2) + e.pow(c - C, 2)),
          A = e.sqrt(e.pow(o - u, 2) + e.pow(h - d, 2) + e.pow(m - C, 2)),
          x = e.sqrt(e.pow(o - f, 2) + e.pow(h - p, 2) + e.pow(m - c, 2)),
          _;
        return (
          b > A
            ? b > x
              ? (_ = b - A - x)
              : (_ = x - A - b)
            : x > A
            ? (_ = x - A - b)
            : (_ = A - b - x),
          _ > -1e-4 && _ < 1e-4
        );
      }
      var s = (function () {
        return function (u, d, C, f) {
          var p = defaultCurveSegments,
            c,
            o,
            h,
            m,
            b,
            A = 0,
            x,
            _ = [],
            k = [],
            w = bezierLengthPool.newElement();
          for (h = C.length, c = 0; c < p; c += 1) {
            for (b = c / (p - 1), x = 0, o = 0; o < h; o += 1)
              (m =
                bmPow(1 - b, 3) * u[o] +
                3 * bmPow(1 - b, 2) * b * C[o] +
                3 * (1 - b) * bmPow(b, 2) * f[o] +
                bmPow(b, 3) * d[o]),
                (_[o] = m),
                k[o] !== null && (x += bmPow(_[o] - k[o], 2)),
                (k[o] = _[o]);
            x && ((x = bmSqrt(x)), (A += x)),
              (w.percents[c] = b),
              (w.lengths[c] = A);
          }
          return (w.addedLength = A), w;
        };
      })();
      function a(u) {
        var d = segmentsLengthPool.newElement(),
          C = u.c,
          f = u.v,
          p = u.o,
          c = u.i,
          o,
          h = u._length,
          m = d.lengths,
          b = 0;
        for (o = 0; o < h - 1; o += 1)
          (m[o] = s(f[o], f[o + 1], p[o], c[o + 1])), (b += m[o].addedLength);
        return (
          C &&
            h &&
            ((m[o] = s(f[o], f[0], p[o], c[0])), (b += m[o].addedLength)),
          (d.totalLength = b),
          d
        );
      }
      function n(u) {
        ((this || t).segmentLength = 0), ((this || t).points = new Array(u));
      }
      function l(u, d) {
        ((this || t).partialLength = u), ((this || t).point = d);
      }
      var v = (function () {
        var u = {};
        return function (d, C, f, p) {
          var c = (
            d[0] +
            "_" +
            d[1] +
            "_" +
            C[0] +
            "_" +
            C[1] +
            "_" +
            f[0] +
            "_" +
            f[1] +
            "_" +
            p[0] +
            "_" +
            p[1]
          ).replace(/\./g, "p");
          if (!u[c]) {
            var o = defaultCurveSegments,
              h,
              m,
              b,
              A,
              x,
              _ = 0,
              k,
              w,
              R = null;
            d.length === 2 &&
              (d[0] !== C[0] || d[1] !== C[1]) &&
              r(d[0], d[1], C[0], C[1], d[0] + f[0], d[1] + f[1]) &&
              r(d[0], d[1], C[0], C[1], C[0] + p[0], C[1] + p[1]) &&
              (o = 2);
            var V = new n(o);
            for (b = f.length, h = 0; h < o; h += 1) {
              for (
                w = createSizedArray(b), x = h / (o - 1), k = 0, m = 0;
                m < b;
                m += 1
              )
                (A =
                  bmPow(1 - x, 3) * d[m] +
                  3 * bmPow(1 - x, 2) * x * (d[m] + f[m]) +
                  3 * (1 - x) * bmPow(x, 2) * (C[m] + p[m]) +
                  bmPow(x, 3) * C[m]),
                  (w[m] = A),
                  R !== null && (k += bmPow(w[m] - R[m], 2));
              (k = bmSqrt(k)), (_ += k), (V.points[h] = new l(k, w)), (R = w);
            }
            (V.segmentLength = _), (u[c] = V);
          }
          return u[c];
        };
      })();
      function y(u, d) {
        var C = d.percents,
          f = d.lengths,
          p = C.length,
          c = bmFloor((p - 1) * u),
          o = u * d.addedLength,
          h = 0;
        if (c === p - 1 || c === 0 || o === f[c]) return C[c];
        for (var m = f[c] > o ? -1 : 1, b = !0; b; )
          if (
            (f[c] <= o && f[c + 1] > o
              ? ((h = (o - f[c]) / (f[c + 1] - f[c])), (b = !1))
              : (c += m),
            c < 0 || c >= p - 1)
          ) {
            if (c === p - 1) return C[c];
            b = !1;
          }
        return C[c] + (C[c + 1] - C[c]) * h;
      }
      function g(u, d, C, f, p, c) {
        var o = y(p, c),
          h = 1 - o,
          m =
            e.round(
              (h * h * h * u[0] +
                (o * h * h + h * o * h + h * h * o) * C[0] +
                (o * o * h + h * o * o + o * h * o) * f[0] +
                o * o * o * d[0]) *
                1e3
            ) / 1e3,
          b =
            e.round(
              (h * h * h * u[1] +
                (o * h * h + h * o * h + h * h * o) * C[1] +
                (o * o * h + h * o * o + o * h * o) * f[1] +
                o * o * o * d[1]) *
                1e3
            ) / 1e3;
        return [m, b];
      }
      var P = createTypedArray("float32", 8);
      function S(u, d, C, f, p, c, o) {
        p < 0 ? (p = 0) : p > 1 && (p = 1);
        var h = y(p, o);
        c = c > 1 ? 1 : c;
        var m = y(c, o),
          b,
          A = u.length,
          x = 1 - h,
          _ = 1 - m,
          k = x * x * x,
          w = h * x * x * 3,
          R = h * h * x * 3,
          V = h * h * h,
          B = x * x * _,
          L = h * x * _ + x * h * _ + x * x * m,
          O = h * h * _ + x * h * m + h * x * m,
          M = h * h * m,
          T = x * _ * _,
          E = h * _ * _ + x * m * _ + x * _ * m,
          F = h * m * _ + x * m * m + h * _ * m,
          D = h * m * m,
          I = _ * _ * _,
          N = m * _ * _ + _ * m * _ + _ * _ * m,
          z = m * m * _ + _ * m * m + m * _ * m,
          j = m * m * m;
        for (b = 0; b < A; b += 1)
          (P[b * 4] =
            e.round((k * u[b] + w * C[b] + R * f[b] + V * d[b]) * 1e3) / 1e3),
            (P[b * 4 + 1] =
              e.round((B * u[b] + L * C[b] + O * f[b] + M * d[b]) * 1e3) / 1e3),
            (P[b * 4 + 2] =
              e.round((T * u[b] + E * C[b] + F * f[b] + D * d[b]) * 1e3) / 1e3),
            (P[b * 4 + 3] =
              e.round((I * u[b] + N * C[b] + z * f[b] + j * d[b]) * 1e3) / 1e3);
        return P;
      }
      return {
        getSegmentsLength: a,
        getNewSegment: S,
        getPointInSegment: g,
        buildBezierData: v,
        pointOnLine2D: r,
        pointOnLine3D: i,
      };
    }
    var bez = bezFunction();
    function dataFunctionManager() {
      function e(u, d, C) {
        var f,
          p,
          c = u.length,
          o,
          h,
          m,
          b;
        for (p = 0; p < c; p += 1)
          if (((f = u[p]), "ks" in f && !f.completed)) {
            if (((f.completed = !0), f.tt && (u[p - 1].td = f.tt), f.hasMask)) {
              var A = f.masksProperties;
              for (h = A.length, o = 0; o < h; o += 1)
                if (A[o].pt.k.i) s(A[o].pt.k);
                else
                  for (b = A[o].pt.k.length, m = 0; m < b; m += 1)
                    A[o].pt.k[m].s && s(A[o].pt.k[m].s[0]),
                      A[o].pt.k[m].e && s(A[o].pt.k[m].e[0]);
            }
            f.ty === 0
              ? ((f.layers = r(f.refId, d)), e(f.layers, d, C))
              : f.ty === 4
              ? i(f.shapes)
              : f.ty === 5 && P(f, C);
          }
      }
      function r(u, d) {
        for (var C = 0, f = d.length; C < f; ) {
          if (d[C].id === u)
            return d[C].layers.__used
              ? JSON.parse(JSON.stringify(d[C].layers))
              : ((d[C].layers.__used = !0), d[C].layers);
          C += 1;
        }
        return null;
      }
      function i(u) {
        var d,
          C = u.length,
          f,
          p;
        for (d = C - 1; d >= 0; d -= 1)
          if (u[d].ty === "sh")
            if (u[d].ks.k.i) s(u[d].ks.k);
            else
              for (p = u[d].ks.k.length, f = 0; f < p; f += 1)
                u[d].ks.k[f].s && s(u[d].ks.k[f].s[0]),
                  u[d].ks.k[f].e && s(u[d].ks.k[f].e[0]);
          else u[d].ty === "gr" && i(u[d].it);
      }
      function s(u) {
        var d,
          C = u.i.length;
        for (d = 0; d < C; d += 1)
          (u.i[d][0] += u.v[d][0]),
            (u.i[d][1] += u.v[d][1]),
            (u.o[d][0] += u.v[d][0]),
            (u.o[d][1] += u.v[d][1]);
      }
      function a(u, d) {
        var C = d ? d.split(".") : [100, 100, 100];
        return u[0] > C[0]
          ? !0
          : C[0] > u[0]
          ? !1
          : u[1] > C[1]
          ? !0
          : C[1] > u[1]
          ? !1
          : u[2] > C[2]
          ? !0
          : C[2] > u[2]
          ? !1
          : null;
      }
      var n = (function () {
          var u = [4, 4, 14];
          function d(f) {
            var p = f.t.d;
            f.t.d = { k: [{ s: p, t: 0 }] };
          }
          function C(f) {
            var p,
              c = f.length;
            for (p = 0; p < c; p += 1) f[p].ty === 5 && d(f[p]);
          }
          return function (f) {
            if (a(u, f.v) && (C(f.layers), f.assets)) {
              var p,
                c = f.assets.length;
              for (p = 0; p < c; p += 1)
                f.assets[p].layers && C(f.assets[p].layers);
            }
          };
        })(),
        l = (function () {
          var u = [4, 7, 99];
          return function (d) {
            if (d.chars && !a(u, d.v)) {
              var C,
                f = d.chars.length,
                p,
                c,
                o,
                h;
              for (C = 0; C < f; C += 1)
                if (d.chars[C].data && d.chars[C].data.shapes)
                  for (
                    h = d.chars[C].data.shapes[0].it, c = h.length, p = 0;
                    p < c;
                    p += 1
                  )
                    (o = h[p].ks.k),
                      o.__converted || (s(h[p].ks.k), (o.__converted = !0));
            }
          };
        })(),
        v = (function () {
          var u = [4, 1, 9];
          function d(f) {
            var p,
              c = f.length,
              o,
              h;
            for (p = 0; p < c; p += 1)
              if (f[p].ty === "gr") d(f[p].it);
              else if (f[p].ty === "fl" || f[p].ty === "st")
                if (f[p].c.k && f[p].c.k[0].i)
                  for (h = f[p].c.k.length, o = 0; o < h; o += 1)
                    f[p].c.k[o].s &&
                      ((f[p].c.k[o].s[0] /= 255),
                      (f[p].c.k[o].s[1] /= 255),
                      (f[p].c.k[o].s[2] /= 255),
                      (f[p].c.k[o].s[3] /= 255)),
                      f[p].c.k[o].e &&
                        ((f[p].c.k[o].e[0] /= 255),
                        (f[p].c.k[o].e[1] /= 255),
                        (f[p].c.k[o].e[2] /= 255),
                        (f[p].c.k[o].e[3] /= 255));
                else
                  (f[p].c.k[0] /= 255),
                    (f[p].c.k[1] /= 255),
                    (f[p].c.k[2] /= 255),
                    (f[p].c.k[3] /= 255);
          }
          function C(f) {
            var p,
              c = f.length;
            for (p = 0; p < c; p += 1) f[p].ty === 4 && d(f[p].shapes);
          }
          return function (f) {
            if (a(u, f.v) && (C(f.layers), f.assets)) {
              var p,
                c = f.assets.length;
              for (p = 0; p < c; p += 1)
                f.assets[p].layers && C(f.assets[p].layers);
            }
          };
        })(),
        y = (function () {
          var u = [4, 4, 18];
          function d(f) {
            var p,
              c = f.length,
              o,
              h;
            for (p = c - 1; p >= 0; p -= 1)
              if (f[p].ty === "sh")
                if (f[p].ks.k.i) f[p].ks.k.c = f[p].closed;
                else
                  for (h = f[p].ks.k.length, o = 0; o < h; o += 1)
                    f[p].ks.k[o].s && (f[p].ks.k[o].s[0].c = f[p].closed),
                      f[p].ks.k[o].e && (f[p].ks.k[o].e[0].c = f[p].closed);
              else f[p].ty === "gr" && d(f[p].it);
          }
          function C(f) {
            var p,
              c,
              o = f.length,
              h,
              m,
              b,
              A;
            for (c = 0; c < o; c += 1) {
              if (((p = f[c]), p.hasMask)) {
                var x = p.masksProperties;
                for (m = x.length, h = 0; h < m; h += 1)
                  if (x[h].pt.k.i) x[h].pt.k.c = x[h].cl;
                  else
                    for (A = x[h].pt.k.length, b = 0; b < A; b += 1)
                      x[h].pt.k[b].s && (x[h].pt.k[b].s[0].c = x[h].cl),
                        x[h].pt.k[b].e && (x[h].pt.k[b].e[0].c = x[h].cl);
              }
              p.ty === 4 && d(p.shapes);
            }
          }
          return function (f) {
            if (a(u, f.v) && (C(f.layers), f.assets)) {
              var p,
                c = f.assets.length;
              for (p = 0; p < c; p += 1)
                f.assets[p].layers && C(f.assets[p].layers);
            }
          };
        })();
      function g(u, d) {
        u.__complete ||
          (v(u),
          n(u),
          l(u),
          y(u),
          e(u.layers, u.assets, d),
          (u.__complete = !0));
      }
      function P(u) {
        u.t.a.length === 0 && !("m" in u.t.p) && (u.singleShape = !0);
      }
      var S = {};
      return (
        (S.completeData = g),
        (S.checkColors = v),
        (S.checkChars = l),
        (S.checkShapes = y),
        (S.completeLayers = e),
        S
      );
    }
    var dataManager = dataFunctionManager();
    function getFontProperties(e) {
      for (
        var r = e.fStyle ? e.fStyle.split(" ") : [],
          i = "normal",
          s = "normal",
          a = r.length,
          n,
          l = 0;
        l < a;
        l += 1
      )
        switch (((n = r[l].toLowerCase()), n)) {
          case "italic":
            s = "italic";
            break;
          case "bold":
            i = "700";
            break;
          case "black":
            i = "900";
            break;
          case "medium":
            i = "500";
            break;
          case "regular":
          case "normal":
            i = "400";
            break;
          case "light":
          case "thin":
            i = "200";
            break;
          default:
            break;
        }
      return { style: s, weight: e.fWeight || i };
    }
    var FontManager = (function () {
        var e = 5e3,
          r = { w: 0, size: 0, shapes: [] },
          i = [];
        i = i.concat([
          2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
          2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
          2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
        ]);
        function s(p) {
          var c = p.split(","),
            o,
            h = c.length,
            m = [];
          for (o = 0; o < h; o += 1)
            c[o] !== "sans-serif" && c[o] !== "monospace" && m.push(c[o]);
          return m.join(",");
        }
        function a(p, c) {
          var o = createTag("span");
          o.setAttribute("aria-hidden", !0), (o.style.fontFamily = c);
          var h = createTag("span");
          (h.innerText = "giItT1WQy@!-/#"),
            (o.style.position = "absolute"),
            (o.style.left = "-10000px"),
            (o.style.top = "-10000px"),
            (o.style.fontSize = "300px"),
            (o.style.fontVariant = "normal"),
            (o.style.fontStyle = "normal"),
            (o.style.fontWeight = "normal"),
            (o.style.letterSpacing = "0"),
            o.appendChild(h),
            document.body.appendChild(o);
          var m = h.offsetWidth;
          return (
            (h.style.fontFamily = s(p) + ", " + c), { node: h, w: m, parent: o }
          );
        }
        function n() {
          var p,
            c = (this || t).fonts.length,
            o,
            h,
            m = c;
          for (p = 0; p < c; p += 1)
            (this || t).fonts[p].loaded
              ? (m -= 1)
              : (this || t).fonts[p].fOrigin === "n" ||
                (this || t).fonts[p].origin === 0
              ? ((this || t).fonts[p].loaded = !0)
              : ((o = (this || t).fonts[p].monoCase.node),
                (h = (this || t).fonts[p].monoCase.w),
                o.offsetWidth !== h
                  ? ((m -= 1), ((this || t).fonts[p].loaded = !0))
                  : ((o = (this || t).fonts[p].sansCase.node),
                    (h = (this || t).fonts[p].sansCase.w),
                    o.offsetWidth !== h &&
                      ((m -= 1), ((this || t).fonts[p].loaded = !0))),
                (this || t).fonts[p].loaded &&
                  ((this || t).fonts[p].sansCase.parent.parentNode.removeChild(
                    (this || t).fonts[p].sansCase.parent
                  ),
                  (this || t).fonts[p].monoCase.parent.parentNode.removeChild(
                    (this || t).fonts[p].monoCase.parent
                  )));
          m !== 0 && Date.now() - (this || t).initTime < e
            ? setTimeout((this || t).checkLoadedFontsBinded, 20)
            : setTimeout((this || t).setIsLoadedBinded, 10);
        }
        function l(p, c) {
          var o = createNS("text");
          o.style.fontSize = "100px";
          var h = getFontProperties(c);
          o.setAttribute("font-family", c.fFamily),
            o.setAttribute("font-style", h.style),
            o.setAttribute("font-weight", h.weight),
            (o.textContent = "1"),
            c.fClass
              ? ((o.style.fontFamily = "inherit"),
                o.setAttribute("class", c.fClass))
              : (o.style.fontFamily = c.fFamily),
            p.appendChild(o);
          var m = createTag("canvas").getContext("2d");
          return (
            (m.font = c.fWeight + " " + c.fStyle + " 100px " + c.fFamily), o
          );
        }
        function v(p, c) {
          if (!p) {
            (this || t).isLoaded = !0;
            return;
          }
          if ((this || t).chars) {
            ((this || t).isLoaded = !0), ((this || t).fonts = p.list);
            return;
          }
          var o = p.list,
            h,
            m = o.length,
            b = m;
          for (h = 0; h < m; h += 1) {
            var A = !0,
              x,
              _;
            if (
              ((o[h].loaded = !1),
              (o[h].monoCase = a(o[h].fFamily, "monospace")),
              (o[h].sansCase = a(o[h].fFamily, "sans-serif")),
              !o[h].fPath)
            )
              (o[h].loaded = !0), (b -= 1);
            else if (o[h].fOrigin === "p" || o[h].origin === 3) {
              if (
                ((x = document.querySelectorAll(
                  'style[f-forigin="p"][f-family="' +
                    o[h].fFamily +
                    '"], style[f-origin="3"][f-family="' +
                    o[h].fFamily +
                    '"]'
                )),
                x.length > 0 && (A = !1),
                A)
              ) {
                var k = createTag("style");
                k.setAttribute("f-forigin", o[h].fOrigin),
                  k.setAttribute("f-origin", o[h].origin),
                  k.setAttribute("f-family", o[h].fFamily),
                  (k.type = "text/css"),
                  (k.innerText =
                    "@font-face {font-family: " +
                    o[h].fFamily +
                    "; font-style: normal; src: url('" +
                    o[h].fPath +
                    "');}"),
                  c.appendChild(k);
              }
            } else if (o[h].fOrigin === "g" || o[h].origin === 1) {
              for (
                x = document.querySelectorAll(
                  'link[f-forigin="g"], link[f-origin="1"]'
                ),
                  _ = 0;
                _ < x.length;
                _ += 1
              )
                x[_].href.indexOf(o[h].fPath) !== -1 && (A = !1);
              if (A) {
                var w = createTag("link");
                w.setAttribute("f-forigin", o[h].fOrigin),
                  w.setAttribute("f-origin", o[h].origin),
                  (w.type = "text/css"),
                  (w.rel = "stylesheet"),
                  (w.href = o[h].fPath),
                  document.body.appendChild(w);
              }
            } else if (o[h].fOrigin === "t" || o[h].origin === 2) {
              for (
                x = document.querySelectorAll(
                  'script[f-forigin="t"], script[f-origin="2"]'
                ),
                  _ = 0;
                _ < x.length;
                _ += 1
              )
                o[h].fPath === x[_].src && (A = !1);
              if (A) {
                var R = createTag("link");
                R.setAttribute("f-forigin", o[h].fOrigin),
                  R.setAttribute("f-origin", o[h].origin),
                  R.setAttribute("rel", "stylesheet"),
                  R.setAttribute("href", o[h].fPath),
                  c.appendChild(R);
              }
            }
            (o[h].helper = l(c, o[h])),
              (o[h].cache = {}),
              (this || t).fonts.push(o[h]);
          }
          b === 0
            ? ((this || t).isLoaded = !0)
            : setTimeout((this || t).checkLoadedFonts.bind(this || t), 100);
        }
        function y(p) {
          if (p) {
            (this || t).chars || ((this || t).chars = []);
            var c,
              o = p.length,
              h,
              m = (this || t).chars.length,
              b;
            for (c = 0; c < o; c += 1) {
              for (h = 0, b = !1; h < m; )
                (this || t).chars[h].style === p[c].style &&
                  (this || t).chars[h].fFamily === p[c].fFamily &&
                  (this || t).chars[h].ch === p[c].ch &&
                  (b = !0),
                  (h += 1);
              b || ((this || t).chars.push(p[c]), (m += 1));
            }
          }
        }
        function g(p, c, o) {
          for (var h = 0, m = (this || t).chars.length; h < m; ) {
            if (
              (this || t).chars[h].ch === p &&
              (this || t).chars[h].style === c &&
              (this || t).chars[h].fFamily === o
            )
              return (this || t).chars[h];
            h += 1;
          }
          return (
            ((typeof p == "string" && p.charCodeAt(0) !== 13) || !p) &&
              console &&
              console.warn &&
              !(this || t)._warned &&
              (((this || t)._warned = !0),
              console.warn(
                "Missing character from exported characters list: ",
                p,
                c,
                o
              )),
            r
          );
        }
        function P(p, c, o) {
          var h = this.getFontByName(c),
            m = p.charCodeAt(0);
          if (!h.cache[m + 1]) {
            var b = h.helper;
            if (p === " ") {
              b.textContent = "|" + p + "|";
              var A = b.getComputedTextLength();
              b.textContent = "||";
              var x = b.getComputedTextLength();
              h.cache[m + 1] = (A - x) / 100;
            } else
              (b.textContent = p),
                (h.cache[m + 1] = b.getComputedTextLength() / 100);
          }
          return h.cache[m + 1] * o;
        }
        function S(p) {
          for (var c = 0, o = (this || t).fonts.length; c < o; ) {
            if ((this || t).fonts[c].fName === p) return (this || t).fonts[c];
            c += 1;
          }
          return (this || t).fonts[0];
        }
        function u() {
          return i;
        }
        function d() {
          (this || t).isLoaded = !0;
        }
        var C = function () {
          ((this || t).fonts = []),
            ((this || t).chars = null),
            ((this || t).typekitLoaded = 0),
            ((this || t).isLoaded = !1),
            ((this || t)._warned = !1),
            ((this || t).initTime = Date.now()),
            ((this || t).setIsLoadedBinded = (this || t).setIsLoaded.bind(
              this || t
            )),
            ((this || t).checkLoadedFontsBinded = (
              this || t
            ).checkLoadedFonts.bind(this || t));
        };
        C.getCombinedCharacterCodes = u;
        var f = {
          addChars: y,
          addFonts: v,
          getCharData: g,
          getFontByName: S,
          measureText: P,
          checkLoadedFonts: n,
          setIsLoaded: d,
        };
        return (C.prototype = f), C;
      })(),
      PropertyFactory = (function () {
        var e = initialDefaultFrame,
          r = Math.abs;
        function i(p, c) {
          var o = (this || t).offsetTime,
            h;
          (this || t).propType === "multidimensional" &&
            (h = createTypedArray("float32", (this || t).pv.length));
          for (
            var m = c.lastIndex,
              b = m,
              A = (this || t).keyframes.length - 1,
              x = !0,
              _,
              k;
            x;

          ) {
            if (
              ((_ = (this || t).keyframes[b]),
              (k = (this || t).keyframes[b + 1]),
              b === A - 1 && p >= k.t - o)
            ) {
              _.h && (_ = k), (m = 0);
              break;
            }
            if (k.t - o > p) {
              m = b;
              break;
            }
            b < A - 1 ? (b += 1) : ((m = 0), (x = !1));
          }
          var w,
            R,
            V,
            B,
            L,
            O,
            M = k.t - o,
            T = _.t - o,
            E;
          if (_.to) {
            _.bezierData ||
              (_.bezierData = bez.buildBezierData(_.s, k.s || _.e, _.to, _.ti));
            var F = _.bezierData;
            if (p >= M || p < T) {
              var D = p >= M ? F.points.length - 1 : 0;
              for (R = F.points[D].point.length, w = 0; w < R; w += 1)
                h[w] = F.points[D].point[w];
            } else {
              _.__fnct
                ? (O = _.__fnct)
                : ((O = BezierFactory.getBezierEasing(
                    _.o.x,
                    _.o.y,
                    _.i.x,
                    _.i.y,
                    _.n
                  ).get),
                  (_.__fnct = O)),
                (V = O((p - T) / (M - T)));
              var I = F.segmentLength * V,
                N,
                z =
                  c.lastFrame < p && c._lastKeyframeIndex === b
                    ? c._lastAddedLength
                    : 0;
              for (
                L =
                  c.lastFrame < p && c._lastKeyframeIndex === b
                    ? c._lastPoint
                    : 0,
                  x = !0,
                  B = F.points.length;
                x;

              ) {
                if (
                  ((z += F.points[L].partialLength),
                  I === 0 || V === 0 || L === F.points.length - 1)
                ) {
                  for (R = F.points[L].point.length, w = 0; w < R; w += 1)
                    h[w] = F.points[L].point[w];
                  break;
                } else if (I >= z && I < z + F.points[L + 1].partialLength) {
                  for (
                    N = (I - z) / F.points[L + 1].partialLength,
                      R = F.points[L].point.length,
                      w = 0;
                    w < R;
                    w += 1
                  )
                    h[w] =
                      F.points[L].point[w] +
                      (F.points[L + 1].point[w] - F.points[L].point[w]) * N;
                  break;
                }
                L < B - 1 ? (L += 1) : (x = !1);
              }
              (c._lastPoint = L),
                (c._lastAddedLength = z - F.points[L].partialLength),
                (c._lastKeyframeIndex = b);
            }
          } else {
            var j, $, K, Q, et;
            if (
              ((A = _.s.length), (E = k.s || _.e), (this || t).sh && _.h !== 1)
            )
              if (p >= M) (h[0] = E[0]), (h[1] = E[1]), (h[2] = E[2]);
              else if (p <= T)
                (h[0] = _.s[0]), (h[1] = _.s[1]), (h[2] = _.s[2]);
              else {
                var it = n(_.s),
                  J = n(E),
                  X = (p - T) / (M - T);
                a(h, s(it, J, X));
              }
            else
              for (b = 0; b < A; b += 1)
                _.h !== 1 &&
                  (p >= M
                    ? (V = 1)
                    : p < T
                    ? (V = 0)
                    : (_.o.x.constructor === Array
                        ? (_.__fnct || (_.__fnct = []),
                          _.__fnct[b]
                            ? (O = _.__fnct[b])
                            : ((j =
                                typeof _.o.x[b] > "u" ? _.o.x[0] : _.o.x[b]),
                              ($ = typeof _.o.y[b] > "u" ? _.o.y[0] : _.o.y[b]),
                              (K = typeof _.i.x[b] > "u" ? _.i.x[0] : _.i.x[b]),
                              (Q = typeof _.i.y[b] > "u" ? _.i.y[0] : _.i.y[b]),
                              (O = BezierFactory.getBezierEasing(
                                j,
                                $,
                                K,
                                Q
                              ).get),
                              (_.__fnct[b] = O)))
                        : _.__fnct
                        ? (O = _.__fnct)
                        : ((j = _.o.x),
                          ($ = _.o.y),
                          (K = _.i.x),
                          (Q = _.i.y),
                          (O = BezierFactory.getBezierEasing(j, $, K, Q).get),
                          (_.__fnct = O)),
                      (V = O((p - T) / (M - T))))),
                  (E = k.s || _.e),
                  (et = _.h === 1 ? _.s[b] : _.s[b] + (E[b] - _.s[b]) * V),
                  (this || t).propType === "multidimensional"
                    ? (h[b] = et)
                    : (h = et);
          }
          return (c.lastIndex = m), h;
        }
        function s(p, c, o) {
          var h = [],
            m = p[0],
            b = p[1],
            A = p[2],
            x = p[3],
            _ = c[0],
            k = c[1],
            w = c[2],
            R = c[3],
            V,
            B,
            L,
            O,
            M;
          return (
            (B = m * _ + b * k + A * w + x * R),
            B < 0 && ((B = -B), (_ = -_), (k = -k), (w = -w), (R = -R)),
            1 - B > 1e-6
              ? ((V = Math.acos(B)),
                (L = Math.sin(V)),
                (O = Math.sin((1 - o) * V) / L),
                (M = Math.sin(o * V) / L))
              : ((O = 1 - o), (M = o)),
            (h[0] = O * m + M * _),
            (h[1] = O * b + M * k),
            (h[2] = O * A + M * w),
            (h[3] = O * x + M * R),
            h
          );
        }
        function a(p, c) {
          var o = c[0],
            h = c[1],
            m = c[2],
            b = c[3],
            A = Math.atan2(2 * h * b - 2 * o * m, 1 - 2 * h * h - 2 * m * m),
            x = Math.asin(2 * o * h + 2 * m * b),
            _ = Math.atan2(2 * o * b - 2 * h * m, 1 - 2 * o * o - 2 * m * m);
          (p[0] = A / degToRads),
            (p[1] = x / degToRads),
            (p[2] = _ / degToRads);
        }
        function n(p) {
          var c = p[0] * degToRads,
            o = p[1] * degToRads,
            h = p[2] * degToRads,
            m = Math.cos(c / 2),
            b = Math.cos(o / 2),
            A = Math.cos(h / 2),
            x = Math.sin(c / 2),
            _ = Math.sin(o / 2),
            k = Math.sin(h / 2),
            w = m * b * A - x * _ * k,
            R = x * _ * A + m * b * k,
            V = x * b * A + m * _ * k,
            B = m * _ * A - x * b * k;
          return [R, V, B, w];
        }
        function l() {
          var p = (this || t).comp.renderedFrame - (this || t).offsetTime,
            c = (this || t).keyframes[0].t - (this || t).offsetTime,
            o =
              (this || t).keyframes[(this || t).keyframes.length - 1].t -
              (this || t).offsetTime;
          if (
            !(
              p === (this || t)._caching.lastFrame ||
              ((this || t)._caching.lastFrame !== e &&
                (((this || t)._caching.lastFrame >= o && p >= o) ||
                  ((this || t)._caching.lastFrame < c && p < c)))
            )
          ) {
            (this || t)._caching.lastFrame >= p &&
              (((this || t)._caching._lastKeyframeIndex = -1),
              ((this || t)._caching.lastIndex = 0));
            var h = this.interpolateValue(p, (this || t)._caching);
            (this || t).pv = h;
          }
          return ((this || t)._caching.lastFrame = p), (this || t).pv;
        }
        function v(p) {
          var c;
          if ((this || t).propType === "unidimensional")
            (c = p * (this || t).mult),
              r((this || t).v - c) > 1e-5 &&
                (((this || t).v = c), ((this || t)._mdf = !0));
          else
            for (var o = 0, h = (this || t).v.length; o < h; )
              (c = p[o] * (this || t).mult),
                r((this || t).v[o] - c) > 1e-5 &&
                  (((this || t).v[o] = c), ((this || t)._mdf = !0)),
                (o += 1);
        }
        function y() {
          if (
            !(
              (this || t).elem.globalData.frameId === (this || t).frameId ||
              !(this || t).effectsSequence.length
            )
          ) {
            if ((this || t).lock) {
              this.setVValue((this || t).pv);
              return;
            }
            ((this || t).lock = !0),
              ((this || t)._mdf = (this || t)._isFirstFrame);
            var p,
              c = (this || t).effectsSequence.length,
              o = (this || t).kf ? (this || t).pv : (this || t).data.k;
            for (p = 0; p < c; p += 1) o = (this || t).effectsSequence[p](o);
            this.setVValue(o),
              ((this || t)._isFirstFrame = !1),
              ((this || t).lock = !1),
              ((this || t).frameId = (this || t).elem.globalData.frameId);
          }
        }
        function g(p) {
          (this || t).effectsSequence.push(p),
            (this || t).container.addDynamicProperty(this || t);
        }
        function P(p, c, o, h) {
          ((this || t).propType = "unidimensional"),
            ((this || t).mult = o || 1),
            ((this || t).data = c),
            ((this || t).v = o ? c.k * o : c.k),
            ((this || t).pv = c.k),
            ((this || t)._mdf = !1),
            ((this || t).elem = p),
            ((this || t).container = h),
            ((this || t).comp = p.comp),
            ((this || t).k = !1),
            ((this || t).kf = !1),
            ((this || t).vel = 0),
            ((this || t).effectsSequence = []),
            ((this || t)._isFirstFrame = !0),
            ((this || t).getValue = y),
            ((this || t).setVValue = v),
            ((this || t).addEffect = g);
        }
        function S(p, c, o, h) {
          ((this || t).propType = "multidimensional"),
            ((this || t).mult = o || 1),
            ((this || t).data = c),
            ((this || t)._mdf = !1),
            ((this || t).elem = p),
            ((this || t).container = h),
            ((this || t).comp = p.comp),
            ((this || t).k = !1),
            ((this || t).kf = !1),
            ((this || t).frameId = -1);
          var m,
            b = c.k.length;
          for (
            (this || t).v = createTypedArray("float32", b),
              (this || t).pv = createTypedArray("float32", b),
              (this || t).vel = createTypedArray("float32", b),
              m = 0;
            m < b;
            m += 1
          )
            ((this || t).v[m] = c.k[m] * (this || t).mult),
              ((this || t).pv[m] = c.k[m]);
          ((this || t)._isFirstFrame = !0),
            ((this || t).effectsSequence = []),
            ((this || t).getValue = y),
            ((this || t).setVValue = v),
            ((this || t).addEffect = g);
        }
        function u(p, c, o, h) {
          ((this || t).propType = "unidimensional"),
            ((this || t).keyframes = c.k),
            ((this || t).offsetTime = p.data.st),
            ((this || t).frameId = -1),
            ((this || t)._caching = {
              lastFrame: e,
              lastIndex: 0,
              value: 0,
              _lastKeyframeIndex: -1,
            }),
            ((this || t).k = !0),
            ((this || t).kf = !0),
            ((this || t).data = c),
            ((this || t).mult = o || 1),
            ((this || t).elem = p),
            ((this || t).container = h),
            ((this || t).comp = p.comp),
            ((this || t).v = e),
            ((this || t).pv = e),
            ((this || t)._isFirstFrame = !0),
            ((this || t).getValue = y),
            ((this || t).setVValue = v),
            ((this || t).interpolateValue = i),
            ((this || t).effectsSequence = [l.bind(this || t)]),
            ((this || t).addEffect = g);
        }
        function d(p, c, o, h) {
          (this || t).propType = "multidimensional";
          var m,
            b = c.k.length,
            A,
            x,
            _,
            k;
          for (m = 0; m < b - 1; m += 1)
            c.k[m].to &&
              c.k[m].s &&
              c.k[m + 1] &&
              c.k[m + 1].s &&
              ((A = c.k[m].s),
              (x = c.k[m + 1].s),
              (_ = c.k[m].to),
              (k = c.k[m].ti),
              ((A.length === 2 &&
                !(A[0] === x[0] && A[1] === x[1]) &&
                bez.pointOnLine2D(
                  A[0],
                  A[1],
                  x[0],
                  x[1],
                  A[0] + _[0],
                  A[1] + _[1]
                ) &&
                bez.pointOnLine2D(
                  A[0],
                  A[1],
                  x[0],
                  x[1],
                  x[0] + k[0],
                  x[1] + k[1]
                )) ||
                (A.length === 3 &&
                  !(A[0] === x[0] && A[1] === x[1] && A[2] === x[2]) &&
                  bez.pointOnLine3D(
                    A[0],
                    A[1],
                    A[2],
                    x[0],
                    x[1],
                    x[2],
                    A[0] + _[0],
                    A[1] + _[1],
                    A[2] + _[2]
                  ) &&
                  bez.pointOnLine3D(
                    A[0],
                    A[1],
                    A[2],
                    x[0],
                    x[1],
                    x[2],
                    x[0] + k[0],
                    x[1] + k[1],
                    x[2] + k[2]
                  ))) &&
                ((c.k[m].to = null), (c.k[m].ti = null)),
              A[0] === x[0] &&
                A[1] === x[1] &&
                _[0] === 0 &&
                _[1] === 0 &&
                k[0] === 0 &&
                k[1] === 0 &&
                (A.length === 2 ||
                  (A[2] === x[2] && _[2] === 0 && k[2] === 0)) &&
                ((c.k[m].to = null), (c.k[m].ti = null)));
          ((this || t).effectsSequence = [l.bind(this || t)]),
            ((this || t).data = c),
            ((this || t).keyframes = c.k),
            ((this || t).offsetTime = p.data.st),
            ((this || t).k = !0),
            ((this || t).kf = !0),
            ((this || t)._isFirstFrame = !0),
            ((this || t).mult = o || 1),
            ((this || t).elem = p),
            ((this || t).container = h),
            ((this || t).comp = p.comp),
            ((this || t).getValue = y),
            ((this || t).setVValue = v),
            ((this || t).interpolateValue = i),
            ((this || t).frameId = -1);
          var w = c.k[0].s.length;
          for (
            (this || t).v = createTypedArray("float32", w),
              (this || t).pv = createTypedArray("float32", w),
              m = 0;
            m < w;
            m += 1
          )
            ((this || t).v[m] = e), ((this || t).pv[m] = e);
          ((this || t)._caching = {
            lastFrame: e,
            lastIndex: 0,
            value: createTypedArray("float32", w),
          }),
            ((this || t).addEffect = g);
        }
        function C(p, c, o, h, m) {
          var b;
          if (!c.k.length) b = new P(p, c, h, m);
          else if (typeof c.k[0] == "number") b = new S(p, c, h, m);
          else
            switch (o) {
              case 0:
                b = new u(p, c, h, m);
                break;
              case 1:
                b = new d(p, c, h, m);
                break;
              default:
                break;
            }
          return b.effectsSequence.length && m.addDynamicProperty(b), b;
        }
        var f = { getProp: C };
        return f;
      })(),
      TransformPropertyFactory = (function () {
        var e = [0, 0];
        function r(y) {
          var g = (this || t)._mdf;
          this.iterateDynamicProperties(),
            ((this || t)._mdf = (this || t)._mdf || g),
            (this || t).a &&
              y.translate(
                -(this || t).a.v[0],
                -(this || t).a.v[1],
                (this || t).a.v[2]
              ),
            (this || t).s &&
              y.scale(
                (this || t).s.v[0],
                (this || t).s.v[1],
                (this || t).s.v[2]
              ),
            (this || t).sk &&
              y.skewFromAxis(-(this || t).sk.v, (this || t).sa.v),
            (this || t).r
              ? y.rotate(-(this || t).r.v)
              : y
                  .rotateZ(-(this || t).rz.v)
                  .rotateY((this || t).ry.v)
                  .rotateX((this || t).rx.v)
                  .rotateZ(-(this || t).or.v[2])
                  .rotateY((this || t).or.v[1])
                  .rotateX((this || t).or.v[0]),
            (this || t).data.p.s
              ? (this || t).data.p.z
                ? y.translate(
                    (this || t).px.v,
                    (this || t).py.v,
                    -(this || t).pz.v
                  )
                : y.translate((this || t).px.v, (this || t).py.v, 0)
              : y.translate(
                  (this || t).p.v[0],
                  (this || t).p.v[1],
                  -(this || t).p.v[2]
                );
        }
        function i(y) {
          if ((this || t).elem.globalData.frameId !== (this || t).frameId) {
            if (
              ((this || t)._isDirty &&
                (this.precalculateMatrix(), ((this || t)._isDirty = !1)),
              this.iterateDynamicProperties(),
              (this || t)._mdf || y)
            ) {
              var g;
              if (
                ((this || t).v.cloneFromProps((this || t).pre.props),
                (this || t).appliedTransformations < 1 &&
                  (this || t).v.translate(
                    -(this || t).a.v[0],
                    -(this || t).a.v[1],
                    (this || t).a.v[2]
                  ),
                (this || t).appliedTransformations < 2 &&
                  (this || t).v.scale(
                    (this || t).s.v[0],
                    (this || t).s.v[1],
                    (this || t).s.v[2]
                  ),
                (this || t).sk &&
                  (this || t).appliedTransformations < 3 &&
                  (this || t).v.skewFromAxis(
                    -(this || t).sk.v,
                    (this || t).sa.v
                  ),
                (this || t).r && (this || t).appliedTransformations < 4
                  ? (this || t).v.rotate(-(this || t).r.v)
                  : !(this || t).r &&
                    (this || t).appliedTransformations < 4 &&
                    (this || t).v
                      .rotateZ(-(this || t).rz.v)
                      .rotateY((this || t).ry.v)
                      .rotateX((this || t).rx.v)
                      .rotateZ(-(this || t).or.v[2])
                      .rotateY((this || t).or.v[1])
                      .rotateX((this || t).or.v[0]),
                (this || t).autoOriented)
              ) {
                var P, S;
                if (
                  ((g = (this || t).elem.globalData.frameRate),
                  (this || t).p &&
                    (this || t).p.keyframes &&
                    (this || t).p.getValueAtTime)
                )
                  (this || t).p._caching.lastFrame + (this || t).p.offsetTime <=
                  (this || t).p.keyframes[0].t
                    ? ((P = (this || t).p.getValueAtTime(
                        ((this || t).p.keyframes[0].t + 0.01) / g,
                        0
                      )),
                      (S = (this || t).p.getValueAtTime(
                        (this || t).p.keyframes[0].t / g,
                        0
                      )))
                    : (this || t).p._caching.lastFrame +
                        (this || t).p.offsetTime >=
                      (this || t).p.keyframes[
                        (this || t).p.keyframes.length - 1
                      ].t
                    ? ((P = (this || t).p.getValueAtTime(
                        (this || t).p.keyframes[
                          (this || t).p.keyframes.length - 1
                        ].t / g,
                        0
                      )),
                      (S = (this || t).p.getValueAtTime(
                        ((this || t).p.keyframes[
                          (this || t).p.keyframes.length - 1
                        ].t -
                          0.05) /
                          g,
                        0
                      )))
                    : ((P = (this || t).p.pv),
                      (S = (this || t).p.getValueAtTime(
                        ((this || t).p._caching.lastFrame +
                          (this || t).p.offsetTime -
                          0.01) /
                          g,
                        (this || t).p.offsetTime
                      )));
                else if (
                  (this || t).px &&
                  (this || t).px.keyframes &&
                  (this || t).py.keyframes &&
                  (this || t).px.getValueAtTime &&
                  (this || t).py.getValueAtTime
                ) {
                  (P = []), (S = []);
                  var u = (this || t).px,
                    d = (this || t).py;
                  u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t
                    ? ((P[0] = u.getValueAtTime(
                        (u.keyframes[0].t + 0.01) / g,
                        0
                      )),
                      (P[1] = d.getValueAtTime(
                        (d.keyframes[0].t + 0.01) / g,
                        0
                      )),
                      (S[0] = u.getValueAtTime(u.keyframes[0].t / g, 0)),
                      (S[1] = d.getValueAtTime(d.keyframes[0].t / g, 0)))
                    : u._caching.lastFrame + u.offsetTime >=
                      u.keyframes[u.keyframes.length - 1].t
                    ? ((P[0] = u.getValueAtTime(
                        u.keyframes[u.keyframes.length - 1].t / g,
                        0
                      )),
                      (P[1] = d.getValueAtTime(
                        d.keyframes[d.keyframes.length - 1].t / g,
                        0
                      )),
                      (S[0] = u.getValueAtTime(
                        (u.keyframes[u.keyframes.length - 1].t - 0.01) / g,
                        0
                      )),
                      (S[1] = d.getValueAtTime(
                        (d.keyframes[d.keyframes.length - 1].t - 0.01) / g,
                        0
                      )))
                    : ((P = [u.pv, d.pv]),
                      (S[0] = u.getValueAtTime(
                        (u._caching.lastFrame + u.offsetTime - 0.01) / g,
                        u.offsetTime
                      )),
                      (S[1] = d.getValueAtTime(
                        (d._caching.lastFrame + d.offsetTime - 0.01) / g,
                        d.offsetTime
                      )));
                } else (S = e), (P = S);
                (this || t).v.rotate(-Math.atan2(P[1] - S[1], P[0] - S[0]));
              }
              (this || t).data.p && (this || t).data.p.s
                ? (this || t).data.p.z
                  ? (this || t).v.translate(
                      (this || t).px.v,
                      (this || t).py.v,
                      -(this || t).pz.v
                    )
                  : (this || t).v.translate(
                      (this || t).px.v,
                      (this || t).py.v,
                      0
                    )
                : (this || t).v.translate(
                    (this || t).p.v[0],
                    (this || t).p.v[1],
                    -(this || t).p.v[2]
                  );
            }
            (this || t).frameId = (this || t).elem.globalData.frameId;
          }
        }
        function s() {
          if (!(this || t).a.k)
            (this || t).pre.translate(
              -(this || t).a.v[0],
              -(this || t).a.v[1],
              (this || t).a.v[2]
            ),
              ((this || t).appliedTransformations = 1);
          else return;
          if (!(this || t).s.effectsSequence.length)
            (this || t).pre.scale(
              (this || t).s.v[0],
              (this || t).s.v[1],
              (this || t).s.v[2]
            ),
              ((this || t).appliedTransformations = 2);
          else return;
          if ((this || t).sk)
            if (
              !(this || t).sk.effectsSequence.length &&
              !(this || t).sa.effectsSequence.length
            )
              (this || t).pre.skewFromAxis(-(this || t).sk.v, (this || t).sa.v),
                ((this || t).appliedTransformations = 3);
            else return;
          (this || t).r
            ? (this || t).r.effectsSequence.length ||
              ((this || t).pre.rotate(-(this || t).r.v),
              ((this || t).appliedTransformations = 4))
            : !(this || t).rz.effectsSequence.length &&
              !(this || t).ry.effectsSequence.length &&
              !(this || t).rx.effectsSequence.length &&
              !(this || t).or.effectsSequence.length &&
              ((this || t).pre
                .rotateZ(-(this || t).rz.v)
                .rotateY((this || t).ry.v)
                .rotateX((this || t).rx.v)
                .rotateZ(-(this || t).or.v[2])
                .rotateY((this || t).or.v[1])
                .rotateX((this || t).or.v[0]),
              ((this || t).appliedTransformations = 4));
        }
        function a() {}
        function n(y) {
          this._addDynamicProperty(y),
            (this || t).elem.addDynamicProperty(y),
            ((this || t)._isDirty = !0);
        }
        function l(y, g, P) {
          if (
            (((this || t).elem = y),
            ((this || t).frameId = -1),
            ((this || t).propType = "transform"),
            ((this || t).data = g),
            ((this || t).v = new Matrix()),
            ((this || t).pre = new Matrix()),
            ((this || t).appliedTransformations = 0),
            this.initDynamicPropertyContainer(P || y),
            g.p && g.p.s
              ? (((this || t).px = PropertyFactory.getProp(
                  y,
                  g.p.x,
                  0,
                  0,
                  this || t
                )),
                ((this || t).py = PropertyFactory.getProp(
                  y,
                  g.p.y,
                  0,
                  0,
                  this || t
                )),
                g.p.z &&
                  ((this || t).pz = PropertyFactory.getProp(
                    y,
                    g.p.z,
                    0,
                    0,
                    this || t
                  )))
              : ((this || t).p = PropertyFactory.getProp(
                  y,
                  g.p || { k: [0, 0, 0] },
                  1,
                  0,
                  this || t
                )),
            g.rx)
          ) {
            if (
              (((this || t).rx = PropertyFactory.getProp(
                y,
                g.rx,
                0,
                degToRads,
                this || t
              )),
              ((this || t).ry = PropertyFactory.getProp(
                y,
                g.ry,
                0,
                degToRads,
                this || t
              )),
              ((this || t).rz = PropertyFactory.getProp(
                y,
                g.rz,
                0,
                degToRads,
                this || t
              )),
              g.or.k[0].ti)
            ) {
              var S,
                u = g.or.k.length;
              for (S = 0; S < u; S += 1)
                (g.or.k[S].to = null), (g.or.k[S].ti = null);
            }
            ((this || t).or = PropertyFactory.getProp(
              y,
              g.or,
              1,
              degToRads,
              this || t
            )),
              ((this || t).or.sh = !0);
          } else
            (this || t).r = PropertyFactory.getProp(
              y,
              g.r || { k: 0 },
              0,
              degToRads,
              this || t
            );
          g.sk &&
            (((this || t).sk = PropertyFactory.getProp(
              y,
              g.sk,
              0,
              degToRads,
              this || t
            )),
            ((this || t).sa = PropertyFactory.getProp(
              y,
              g.sa,
              0,
              degToRads,
              this || t
            ))),
            ((this || t).a = PropertyFactory.getProp(
              y,
              g.a || { k: [0, 0, 0] },
              1,
              0,
              this || t
            )),
            ((this || t).s = PropertyFactory.getProp(
              y,
              g.s || { k: [100, 100, 100] },
              1,
              0.01,
              this || t
            )),
            g.o
              ? ((this || t).o = PropertyFactory.getProp(y, g.o, 0, 0.01, y))
              : ((this || t).o = { _mdf: !1, v: 1 }),
            ((this || t)._isDirty = !0),
            (this || t).dynamicProperties.length || this.getValue(!0);
        }
        (l.prototype = {
          applyToMatrix: r,
          getValue: i,
          precalculateMatrix: s,
          autoOrient: a,
        }),
          extendPrototype([DynamicPropertyContainer], l),
          (l.prototype.addDynamicProperty = n),
          (l.prototype._addDynamicProperty =
            DynamicPropertyContainer.prototype.addDynamicProperty);
        function v(y, g, P) {
          return new l(y, g, P);
        }
        return { getTransformProperty: v };
      })();
    function ShapePath() {
      ((this || t).c = !1),
        ((this || t)._length = 0),
        ((this || t)._maxLength = 8),
        ((this || t).v = createSizedArray((this || t)._maxLength)),
        ((this || t).o = createSizedArray((this || t)._maxLength)),
        ((this || t).i = createSizedArray((this || t)._maxLength));
    }
    (ShapePath.prototype.setPathData = function (e, r) {
      ((this || t).c = e), this.setLength(r);
      for (var i = 0; i < r; )
        ((this || t).v[i] = pointPool.newElement()),
          ((this || t).o[i] = pointPool.newElement()),
          ((this || t).i[i] = pointPool.newElement()),
          (i += 1);
    }),
      (ShapePath.prototype.setLength = function (e) {
        for (; (this || t)._maxLength < e; ) this.doubleArrayLength();
        (this || t)._length = e;
      }),
      (ShapePath.prototype.doubleArrayLength = function () {
        ((this || t).v = (this || t).v.concat(
          createSizedArray((this || t)._maxLength)
        )),
          ((this || t).i = (this || t).i.concat(
            createSizedArray((this || t)._maxLength)
          )),
          ((this || t).o = (this || t).o.concat(
            createSizedArray((this || t)._maxLength)
          )),
          ((this || t)._maxLength *= 2);
      }),
      (ShapePath.prototype.setXYAt = function (e, r, i, s, a) {
        var n;
        switch (
          (((this || t)._length = Math.max((this || t)._length, s + 1)),
          (this || t)._length >= (this || t)._maxLength &&
            this.doubleArrayLength(),
          i)
        ) {
          case "v":
            n = (this || t).v;
            break;
          case "i":
            n = (this || t).i;
            break;
          case "o":
            n = (this || t).o;
            break;
          default:
            n = [];
            break;
        }
        (!n[s] || (n[s] && !a)) && (n[s] = pointPool.newElement()),
          (n[s][0] = e),
          (n[s][1] = r);
      }),
      (ShapePath.prototype.setTripleAt = function (e, r, i, s, a, n, l, v) {
        this.setXYAt(e, r, "v", l, v),
          this.setXYAt(i, s, "o", l, v),
          this.setXYAt(a, n, "i", l, v);
      }),
      (ShapePath.prototype.reverse = function () {
        var e = new ShapePath();
        e.setPathData((this || t).c, (this || t)._length);
        var r = (this || t).v,
          i = (this || t).o,
          s = (this || t).i,
          a = 0;
        (this || t).c &&
          (e.setTripleAt(
            r[0][0],
            r[0][1],
            s[0][0],
            s[0][1],
            i[0][0],
            i[0][1],
            0,
            !1
          ),
          (a = 1));
        var n = (this || t)._length - 1,
          l = (this || t)._length,
          v;
        for (v = a; v < l; v += 1)
          e.setTripleAt(
            r[n][0],
            r[n][1],
            s[n][0],
            s[n][1],
            i[n][0],
            i[n][1],
            v,
            !1
          ),
            (n -= 1);
        return e;
      });
    var ShapePropertyFactory = (function () {
        var e = -999999;
        function r(c, o, h) {
          var m = h.lastIndex,
            b,
            A,
            x,
            _,
            k,
            w,
            R,
            V,
            B,
            L = (this || t).keyframes;
          if (c < L[0].t - (this || t).offsetTime)
            (b = L[0].s[0]), (x = !0), (m = 0);
          else if (c >= L[L.length - 1].t - (this || t).offsetTime)
            (b = L[L.length - 1].s
              ? L[L.length - 1].s[0]
              : L[L.length - 2].e[0]),
              (x = !0);
          else {
            for (
              var O = m, M = L.length - 1, T = !0, E, F;
              T &&
              ((E = L[O]), (F = L[O + 1]), !(F.t - (this || t).offsetTime > c));

            )
              O < M - 1 ? (O += 1) : (T = !1);
            if (((x = E.h === 1), (m = O), !x)) {
              if (c >= F.t - (this || t).offsetTime) V = 1;
              else if (c < E.t - (this || t).offsetTime) V = 0;
              else {
                var D;
                E.__fnct
                  ? (D = E.__fnct)
                  : ((D = BezierFactory.getBezierEasing(
                      E.o.x,
                      E.o.y,
                      E.i.x,
                      E.i.y
                    ).get),
                    (E.__fnct = D)),
                  (V = D(
                    (c - (E.t - (this || t).offsetTime)) /
                      (F.t -
                        (this || t).offsetTime -
                        (E.t - (this || t).offsetTime))
                  ));
              }
              A = F.s ? F.s[0] : E.e[0];
            }
            b = E.s[0];
          }
          for (
            w = o._length, R = b.i[0].length, h.lastIndex = m, _ = 0;
            _ < w;
            _ += 1
          )
            for (k = 0; k < R; k += 1)
              (B = x ? b.i[_][k] : b.i[_][k] + (A.i[_][k] - b.i[_][k]) * V),
                (o.i[_][k] = B),
                (B = x ? b.o[_][k] : b.o[_][k] + (A.o[_][k] - b.o[_][k]) * V),
                (o.o[_][k] = B),
                (B = x ? b.v[_][k] : b.v[_][k] + (A.v[_][k] - b.v[_][k]) * V),
                (o.v[_][k] = B);
        }
        function i() {
          var c = (this || t).comp.renderedFrame - (this || t).offsetTime,
            o = (this || t).keyframes[0].t - (this || t).offsetTime,
            h =
              (this || t).keyframes[(this || t).keyframes.length - 1].t -
              (this || t).offsetTime,
            m = (this || t)._caching.lastFrame;
          return (
            (m !== e && ((m < o && c < o) || (m > h && c > h))) ||
              (((this || t)._caching.lastIndex =
                m < c ? (this || t)._caching.lastIndex : 0),
              this.interpolateShape(c, (this || t).pv, (this || t)._caching)),
            ((this || t)._caching.lastFrame = c),
            (this || t).pv
          );
        }
        function s() {
          (this || t).paths = (this || t).localShapeCollection;
        }
        function a(c, o) {
          if (c._length !== o._length || c.c !== o.c) return !1;
          var h,
            m = c._length;
          for (h = 0; h < m; h += 1)
            if (
              c.v[h][0] !== o.v[h][0] ||
              c.v[h][1] !== o.v[h][1] ||
              c.o[h][0] !== o.o[h][0] ||
              c.o[h][1] !== o.o[h][1] ||
              c.i[h][0] !== o.i[h][0] ||
              c.i[h][1] !== o.i[h][1]
            )
              return !1;
          return !0;
        }
        function n(c) {
          a((this || t).v, c) ||
            (((this || t).v = shapePool.clone(c)),
            (this || t).localShapeCollection.releaseShapes(),
            (this || t).localShapeCollection.addShape((this || t).v),
            ((this || t)._mdf = !0),
            ((this || t).paths = (this || t).localShapeCollection));
        }
        function l() {
          if ((this || t).elem.globalData.frameId !== (this || t).frameId) {
            if (!(this || t).effectsSequence.length) {
              (this || t)._mdf = !1;
              return;
            }
            if ((this || t).lock) {
              this.setVValue((this || t).pv);
              return;
            }
            ((this || t).lock = !0), ((this || t)._mdf = !1);
            var c;
            (this || t).kf
              ? (c = (this || t).pv)
              : (this || t).data.ks
              ? (c = (this || t).data.ks.k)
              : (c = (this || t).data.pt.k);
            var o,
              h = (this || t).effectsSequence.length;
            for (o = 0; o < h; o += 1) c = (this || t).effectsSequence[o](c);
            this.setVValue(c),
              ((this || t).lock = !1),
              ((this || t).frameId = (this || t).elem.globalData.frameId);
          }
        }
        function v(c, o, h) {
          ((this || t).propType = "shape"),
            ((this || t).comp = c.comp),
            ((this || t).container = c),
            ((this || t).elem = c),
            ((this || t).data = o),
            ((this || t).k = !1),
            ((this || t).kf = !1),
            ((this || t)._mdf = !1);
          var m = h === 3 ? o.pt.k : o.ks.k;
          ((this || t).v = shapePool.clone(m)),
            ((this || t).pv = shapePool.clone((this || t).v)),
            ((this || t).localShapeCollection =
              shapeCollectionPool.newShapeCollection()),
            ((this || t).paths = (this || t).localShapeCollection),
            (this || t).paths.addShape((this || t).v),
            ((this || t).reset = s),
            ((this || t).effectsSequence = []);
        }
        function y(c) {
          (this || t).effectsSequence.push(c),
            (this || t).container.addDynamicProperty(this || t);
        }
        (v.prototype.interpolateShape = r),
          (v.prototype.getValue = l),
          (v.prototype.setVValue = n),
          (v.prototype.addEffect = y);
        function g(c, o, h) {
          ((this || t).propType = "shape"),
            ((this || t).comp = c.comp),
            ((this || t).elem = c),
            ((this || t).container = c),
            ((this || t).offsetTime = c.data.st),
            ((this || t).keyframes = h === 3 ? o.pt.k : o.ks.k),
            ((this || t).k = !0),
            ((this || t).kf = !0);
          var m = (this || t).keyframes[0].s[0].i.length;
          ((this || t).v = shapePool.newElement()),
            (this || t).v.setPathData((this || t).keyframes[0].s[0].c, m),
            ((this || t).pv = shapePool.clone((this || t).v)),
            ((this || t).localShapeCollection =
              shapeCollectionPool.newShapeCollection()),
            ((this || t).paths = (this || t).localShapeCollection),
            (this || t).paths.addShape((this || t).v),
            ((this || t).lastFrame = e),
            ((this || t).reset = s),
            ((this || t)._caching = { lastFrame: e, lastIndex: 0 }),
            ((this || t).effectsSequence = [i.bind(this || t)]);
        }
        (g.prototype.getValue = l),
          (g.prototype.interpolateShape = r),
          (g.prototype.setVValue = n),
          (g.prototype.addEffect = y);
        var P = (function () {
            var c = roundCorner;
            function o(h, m) {
              ((this || t).v = shapePool.newElement()),
                (this || t).v.setPathData(!0, 4),
                ((this || t).localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                ((this || t).paths = (this || t).localShapeCollection),
                (this || t).localShapeCollection.addShape((this || t).v),
                ((this || t).d = m.d),
                ((this || t).elem = h),
                ((this || t).comp = h.comp),
                ((this || t).frameId = -1),
                this.initDynamicPropertyContainer(h),
                ((this || t).p = PropertyFactory.getProp(
                  h,
                  m.p,
                  1,
                  0,
                  this || t
                )),
                ((this || t).s = PropertyFactory.getProp(
                  h,
                  m.s,
                  1,
                  0,
                  this || t
                )),
                (this || t).dynamicProperties.length
                  ? ((this || t).k = !0)
                  : (((this || t).k = !1), this.convertEllToPath());
            }
            return (
              (o.prototype = {
                reset: s,
                getValue: function () {
                  (this || t).elem.globalData.frameId !== (this || t).frameId &&
                    (((this || t).frameId = (
                      this || t
                    ).elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    (this || t)._mdf && this.convertEllToPath());
                },
                convertEllToPath: function () {
                  var h = (this || t).p.v[0],
                    m = (this || t).p.v[1],
                    b = (this || t).s.v[0] / 2,
                    A = (this || t).s.v[1] / 2,
                    x = (this || t).d !== 3,
                    _ = (this || t).v;
                  (_.v[0][0] = h),
                    (_.v[0][1] = m - A),
                    (_.v[1][0] = x ? h + b : h - b),
                    (_.v[1][1] = m),
                    (_.v[2][0] = h),
                    (_.v[2][1] = m + A),
                    (_.v[3][0] = x ? h - b : h + b),
                    (_.v[3][1] = m),
                    (_.i[0][0] = x ? h - b * c : h + b * c),
                    (_.i[0][1] = m - A),
                    (_.i[1][0] = x ? h + b : h - b),
                    (_.i[1][1] = m - A * c),
                    (_.i[2][0] = x ? h + b * c : h - b * c),
                    (_.i[2][1] = m + A),
                    (_.i[3][0] = x ? h - b : h + b),
                    (_.i[3][1] = m + A * c),
                    (_.o[0][0] = x ? h + b * c : h - b * c),
                    (_.o[0][1] = m - A),
                    (_.o[1][0] = x ? h + b : h - b),
                    (_.o[1][1] = m + A * c),
                    (_.o[2][0] = x ? h - b * c : h + b * c),
                    (_.o[2][1] = m + A),
                    (_.o[3][0] = x ? h - b : h + b),
                    (_.o[3][1] = m - A * c);
                },
              }),
              extendPrototype([DynamicPropertyContainer], o),
              o
            );
          })(),
          S = (function () {
            function c(o, h) {
              ((this || t).v = shapePool.newElement()),
                (this || t).v.setPathData(!0, 0),
                ((this || t).elem = o),
                ((this || t).comp = o.comp),
                ((this || t).data = h),
                ((this || t).frameId = -1),
                ((this || t).d = h.d),
                this.initDynamicPropertyContainer(o),
                h.sy === 1
                  ? (((this || t).ir = PropertyFactory.getProp(
                      o,
                      h.ir,
                      0,
                      0,
                      this || t
                    )),
                    ((this || t).is = PropertyFactory.getProp(
                      o,
                      h.is,
                      0,
                      0.01,
                      this || t
                    )),
                    ((this || t).convertToPath = (this || t).convertStarToPath))
                  : ((this || t).convertToPath = (
                      this || t
                    ).convertPolygonToPath),
                ((this || t).pt = PropertyFactory.getProp(
                  o,
                  h.pt,
                  0,
                  0,
                  this || t
                )),
                ((this || t).p = PropertyFactory.getProp(
                  o,
                  h.p,
                  1,
                  0,
                  this || t
                )),
                ((this || t).r = PropertyFactory.getProp(
                  o,
                  h.r,
                  0,
                  degToRads,
                  this || t
                )),
                ((this || t).or = PropertyFactory.getProp(
                  o,
                  h.or,
                  0,
                  0,
                  this || t
                )),
                ((this || t).os = PropertyFactory.getProp(
                  o,
                  h.os,
                  0,
                  0.01,
                  this || t
                )),
                ((this || t).localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this || t).localShapeCollection.addShape((this || t).v),
                ((this || t).paths = (this || t).localShapeCollection),
                (this || t).dynamicProperties.length
                  ? ((this || t).k = !0)
                  : (((this || t).k = !1), this.convertToPath());
            }
            return (
              (c.prototype = {
                reset: s,
                getValue: function () {
                  (this || t).elem.globalData.frameId !== (this || t).frameId &&
                    (((this || t).frameId = (
                      this || t
                    ).elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    (this || t)._mdf && this.convertToPath());
                },
                convertStarToPath: function () {
                  var o = Math.floor((this || t).pt.v) * 2,
                    h = (Math.PI * 2) / o,
                    m = !0,
                    b = (this || t).or.v,
                    A = (this || t).ir.v,
                    x = (this || t).os.v,
                    _ = (this || t).is.v,
                    k = (2 * Math.PI * b) / (o * 2),
                    w = (2 * Math.PI * A) / (o * 2),
                    R,
                    V,
                    B,
                    L,
                    O = -Math.PI / 2;
                  O += (this || t).r.v;
                  var M = (this || t).data.d === 3 ? -1 : 1;
                  for ((this || t).v._length = 0, R = 0; R < o; R += 1) {
                    (V = m ? b : A), (B = m ? x : _), (L = m ? k : w);
                    var T = V * Math.cos(O),
                      E = V * Math.sin(O),
                      F = T === 0 && E === 0 ? 0 : E / Math.sqrt(T * T + E * E),
                      D =
                        T === 0 && E === 0 ? 0 : -T / Math.sqrt(T * T + E * E);
                    (T += +(this || t).p.v[0]),
                      (E += +(this || t).p.v[1]),
                      (this || t).v.setTripleAt(
                        T,
                        E,
                        T - F * L * B * M,
                        E - D * L * B * M,
                        T + F * L * B * M,
                        E + D * L * B * M,
                        R,
                        !0
                      ),
                      (m = !m),
                      (O += h * M);
                  }
                },
                convertPolygonToPath: function () {
                  var o = Math.floor((this || t).pt.v),
                    h = (Math.PI * 2) / o,
                    m = (this || t).or.v,
                    b = (this || t).os.v,
                    A = (2 * Math.PI * m) / (o * 4),
                    x,
                    _ = -Math.PI * 0.5,
                    k = (this || t).data.d === 3 ? -1 : 1;
                  for (
                    _ += (this || t).r.v, (this || t).v._length = 0, x = 0;
                    x < o;
                    x += 1
                  ) {
                    var w = m * Math.cos(_),
                      R = m * Math.sin(_),
                      V = w === 0 && R === 0 ? 0 : R / Math.sqrt(w * w + R * R),
                      B =
                        w === 0 && R === 0 ? 0 : -w / Math.sqrt(w * w + R * R);
                    (w += +(this || t).p.v[0]),
                      (R += +(this || t).p.v[1]),
                      (this || t).v.setTripleAt(
                        w,
                        R,
                        w - V * A * b * k,
                        R - B * A * b * k,
                        w + V * A * b * k,
                        R + B * A * b * k,
                        x,
                        !0
                      ),
                      (_ += h * k);
                  }
                  ((this || t).paths.length = 0),
                    ((this || t).paths[0] = (this || t).v);
                },
              }),
              extendPrototype([DynamicPropertyContainer], c),
              c
            );
          })(),
          u = (function () {
            function c(o, h) {
              ((this || t).v = shapePool.newElement()),
                ((this || t).v.c = !0),
                ((this || t).localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this || t).localShapeCollection.addShape((this || t).v),
                ((this || t).paths = (this || t).localShapeCollection),
                ((this || t).elem = o),
                ((this || t).comp = o.comp),
                ((this || t).frameId = -1),
                ((this || t).d = h.d),
                this.initDynamicPropertyContainer(o),
                ((this || t).p = PropertyFactory.getProp(
                  o,
                  h.p,
                  1,
                  0,
                  this || t
                )),
                ((this || t).s = PropertyFactory.getProp(
                  o,
                  h.s,
                  1,
                  0,
                  this || t
                )),
                ((this || t).r = PropertyFactory.getProp(
                  o,
                  h.r,
                  0,
                  0,
                  this || t
                )),
                (this || t).dynamicProperties.length
                  ? ((this || t).k = !0)
                  : (((this || t).k = !1), this.convertRectToPath());
            }
            return (
              (c.prototype = {
                convertRectToPath: function () {
                  var o = (this || t).p.v[0],
                    h = (this || t).p.v[1],
                    m = (this || t).s.v[0] / 2,
                    b = (this || t).s.v[1] / 2,
                    A = bmMin(m, b, (this || t).r.v),
                    x = A * (1 - roundCorner);
                  ((this || t).v._length = 0),
                    (this || t).d === 2 || (this || t).d === 1
                      ? ((this || t).v.setTripleAt(
                          o + m,
                          h - b + A,
                          o + m,
                          h - b + A,
                          o + m,
                          h - b + x,
                          0,
                          !0
                        ),
                        (this || t).v.setTripleAt(
                          o + m,
                          h + b - A,
                          o + m,
                          h + b - x,
                          o + m,
                          h + b - A,
                          1,
                          !0
                        ),
                        A !== 0
                          ? ((this || t).v.setTripleAt(
                              o + m - A,
                              h + b,
                              o + m - A,
                              h + b,
                              o + m - x,
                              h + b,
                              2,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m + A,
                              h + b,
                              o - m + x,
                              h + b,
                              o - m + A,
                              h + b,
                              3,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h + b - A,
                              o - m,
                              h + b - A,
                              o - m,
                              h + b - x,
                              4,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h - b + A,
                              o - m,
                              h - b + x,
                              o - m,
                              h - b + A,
                              5,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m + A,
                              h - b,
                              o - m + A,
                              h - b,
                              o - m + x,
                              h - b,
                              6,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o + m - A,
                              h - b,
                              o + m - x,
                              h - b,
                              o + m - A,
                              h - b,
                              7,
                              !0
                            ))
                          : ((this || t).v.setTripleAt(
                              o - m,
                              h + b,
                              o - m + x,
                              h + b,
                              o - m,
                              h + b,
                              2
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h - b,
                              o - m,
                              h - b + x,
                              o - m,
                              h - b,
                              3
                            )))
                      : ((this || t).v.setTripleAt(
                          o + m,
                          h - b + A,
                          o + m,
                          h - b + x,
                          o + m,
                          h - b + A,
                          0,
                          !0
                        ),
                        A !== 0
                          ? ((this || t).v.setTripleAt(
                              o + m - A,
                              h - b,
                              o + m - A,
                              h - b,
                              o + m - x,
                              h - b,
                              1,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m + A,
                              h - b,
                              o - m + x,
                              h - b,
                              o - m + A,
                              h - b,
                              2,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h - b + A,
                              o - m,
                              h - b + A,
                              o - m,
                              h - b + x,
                              3,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h + b - A,
                              o - m,
                              h + b - x,
                              o - m,
                              h + b - A,
                              4,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m + A,
                              h + b,
                              o - m + A,
                              h + b,
                              o - m + x,
                              h + b,
                              5,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o + m - A,
                              h + b,
                              o + m - x,
                              h + b,
                              o + m - A,
                              h + b,
                              6,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o + m,
                              h + b - A,
                              o + m,
                              h + b - A,
                              o + m,
                              h + b - x,
                              7,
                              !0
                            ))
                          : ((this || t).v.setTripleAt(
                              o - m,
                              h - b,
                              o - m + x,
                              h - b,
                              o - m,
                              h - b,
                              1,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o - m,
                              h + b,
                              o - m,
                              h + b - x,
                              o - m,
                              h + b,
                              2,
                              !0
                            ),
                            (this || t).v.setTripleAt(
                              o + m,
                              h + b,
                              o + m - x,
                              h + b,
                              o + m,
                              h + b,
                              3,
                              !0
                            )));
                },
                getValue: function () {
                  (this || t).elem.globalData.frameId !== (this || t).frameId &&
                    (((this || t).frameId = (
                      this || t
                    ).elem.globalData.frameId),
                    this.iterateDynamicProperties(),
                    (this || t)._mdf && this.convertRectToPath());
                },
                reset: s,
              }),
              extendPrototype([DynamicPropertyContainer], c),
              c
            );
          })();
        function d(c, o, h) {
          var m;
          if (h === 3 || h === 4) {
            var b = h === 3 ? o.pt : o.ks,
              A = b.k;
            A.length ? (m = new g(c, o, h)) : (m = new v(c, o, h));
          } else
            h === 5
              ? (m = new u(c, o))
              : h === 6
              ? (m = new P(c, o))
              : h === 7 && (m = new S(c, o));
          return m.k && c.addDynamicProperty(m), m;
        }
        function C() {
          return v;
        }
        function f() {
          return g;
        }
        var p = {};
        return (
          (p.getShapeProp = d),
          (p.getConstructorFunction = C),
          (p.getKeyframedConstructorFunction = f),
          p
        );
      })(),
      ShapeModifiers = (function () {
        var e = {},
          r = {};
        (e.registerModifier = i), (e.getModifier = s);
        function i(a, n) {
          r[a] || (r[a] = n);
        }
        function s(a, n, l) {
          return new r[a](n, l);
        }
        return e;
      })();
    function ShapeModifier() {}
    (ShapeModifier.prototype.initModifierProperties = function () {}),
      (ShapeModifier.prototype.addShapeToModifier = function () {}),
      (ShapeModifier.prototype.addShape = function (e) {
        if (!(this || t).closed) {
          e.sh.container.addDynamicProperty(e.sh);
          var r = {
            shape: e.sh,
            data: e,
            localShapeCollection: shapeCollectionPool.newShapeCollection(),
          };
          (this || t).shapes.push(r),
            this.addShapeToModifier(r),
            (this || t)._isAnimated && e.setAsAnimated();
        }
      }),
      (ShapeModifier.prototype.init = function (e, r) {
        ((this || t).shapes = []),
          ((this || t).elem = e),
          this.initDynamicPropertyContainer(e),
          this.initModifierProperties(e, r),
          ((this || t).frameId = initialDefaultFrame),
          ((this || t).closed = !1),
          ((this || t).k = !1),
          (this || t).dynamicProperties.length
            ? ((this || t).k = !0)
            : this.getValue(!0);
      }),
      (ShapeModifier.prototype.processKeys = function () {
        (this || t).elem.globalData.frameId !== (this || t).frameId &&
          (((this || t).frameId = (this || t).elem.globalData.frameId),
          this.iterateDynamicProperties());
      }),
      extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {}
    extendPrototype([ShapeModifier], TrimModifier),
      (TrimModifier.prototype.initModifierProperties = function (e, r) {
        ((this || t).s = PropertyFactory.getProp(e, r.s, 0, 0.01, this || t)),
          ((this || t).e = PropertyFactory.getProp(e, r.e, 0, 0.01, this || t)),
          ((this || t).o = PropertyFactory.getProp(e, r.o, 0, 0, this || t)),
          ((this || t).sValue = 0),
          ((this || t).eValue = 0),
          ((this || t).getValue = (this || t).processKeys),
          ((this || t).m = r.m),
          ((this || t)._isAnimated =
            !!(this || t).s.effectsSequence.length ||
            !!(this || t).e.effectsSequence.length ||
            !!(this || t).o.effectsSequence.length);
      }),
      (TrimModifier.prototype.addShapeToModifier = function (e) {
        e.pathsData = [];
      }),
      (TrimModifier.prototype.calculateShapeEdges = function (e, r, i, s, a) {
        var n = [];
        r <= 1
          ? n.push({ s: e, e: r })
          : e >= 1
          ? n.push({ s: e - 1, e: r - 1 })
          : (n.push({ s: e, e: 1 }), n.push({ s: 0, e: r - 1 }));
        var l = [],
          v,
          y = n.length,
          g;
        for (v = 0; v < y; v += 1)
          if (((g = n[v]), !(g.e * a < s || g.s * a > s + i))) {
            var P, S;
            g.s * a <= s ? (P = 0) : (P = (g.s * a - s) / i),
              g.e * a >= s + i ? (S = 1) : (S = (g.e * a - s) / i),
              l.push([P, S]);
          }
        return l.length || l.push([0, 0]), l;
      }),
      (TrimModifier.prototype.releasePathsData = function (e) {
        var r,
          i = e.length;
        for (r = 0; r < i; r += 1) segmentsLengthPool.release(e[r]);
        return (e.length = 0), e;
      }),
      (TrimModifier.prototype.processShapes = function (e) {
        var r, i;
        if ((this || t)._mdf || e) {
          var s = ((this || t).o.v % 360) / 360;
          if (
            (s < 0 && (s += 1),
            (this || t).s.v > 1
              ? (r = 1 + s)
              : (this || t).s.v < 0
              ? (r = 0 + s)
              : (r = (this || t).s.v + s),
            (this || t).e.v > 1
              ? (i = 1 + s)
              : (this || t).e.v < 0
              ? (i = 0 + s)
              : (i = (this || t).e.v + s),
            r > i)
          ) {
            var a = r;
            (r = i), (i = a);
          }
          (r = Math.round(r * 1e4) * 1e-4),
            (i = Math.round(i * 1e4) * 1e-4),
            ((this || t).sValue = r),
            ((this || t).eValue = i);
        } else (r = (this || t).sValue), (i = (this || t).eValue);
        var n,
          l,
          v = (this || t).shapes.length,
          y,
          g,
          P,
          S,
          u,
          d = 0;
        if (i === r)
          for (l = 0; l < v; l += 1)
            (this || t).shapes[l].localShapeCollection.releaseShapes(),
              ((this || t).shapes[l].shape._mdf = !0),
              ((this || t).shapes[l].shape.paths = (this || t).shapes[
                l
              ].localShapeCollection),
              (this || t)._mdf && ((this || t).shapes[l].pathsData.length = 0);
        else if ((i === 1 && r === 0) || (i === 0 && r === 1)) {
          if ((this || t)._mdf)
            for (l = 0; l < v; l += 1)
              ((this || t).shapes[l].pathsData.length = 0),
                ((this || t).shapes[l].shape._mdf = !0);
        } else {
          var C = [],
            f,
            p;
          for (l = 0; l < v; l += 1)
            if (
              ((f = (this || t).shapes[l]),
              !f.shape._mdf && !(this || t)._mdf && !e && (this || t).m !== 2)
            )
              f.shape.paths = f.localShapeCollection;
            else {
              if (
                ((n = f.shape.paths),
                (g = n._length),
                (u = 0),
                !f.shape._mdf && f.pathsData.length)
              )
                u = f.totalShapeLength;
              else {
                for (
                  P = this.releasePathsData(f.pathsData), y = 0;
                  y < g;
                  y += 1
                )
                  (S = bez.getSegmentsLength(n.shapes[y])),
                    P.push(S),
                    (u += S.totalLength);
                (f.totalShapeLength = u), (f.pathsData = P);
              }
              (d += u), (f.shape._mdf = !0);
            }
          var c = r,
            o = i,
            h = 0,
            m;
          for (l = v - 1; l >= 0; l -= 1)
            if (((f = (this || t).shapes[l]), f.shape._mdf)) {
              for (
                p = f.localShapeCollection,
                  p.releaseShapes(),
                  (this || t).m === 2 && v > 1
                    ? ((m = this.calculateShapeEdges(
                        r,
                        i,
                        f.totalShapeLength,
                        h,
                        d
                      )),
                      (h += f.totalShapeLength))
                    : (m = [[c, o]]),
                  g = m.length,
                  y = 0;
                y < g;
                y += 1
              ) {
                (c = m[y][0]),
                  (o = m[y][1]),
                  (C.length = 0),
                  o <= 1
                    ? C.push({
                        s: f.totalShapeLength * c,
                        e: f.totalShapeLength * o,
                      })
                    : c >= 1
                    ? C.push({
                        s: f.totalShapeLength * (c - 1),
                        e: f.totalShapeLength * (o - 1),
                      })
                    : (C.push({
                        s: f.totalShapeLength * c,
                        e: f.totalShapeLength,
                      }),
                      C.push({ s: 0, e: f.totalShapeLength * (o - 1) }));
                var b = this.addShapes(f, C[0]);
                if (C[0].s !== C[0].e) {
                  if (C.length > 1) {
                    var A = f.shape.paths.shapes[f.shape.paths._length - 1];
                    if (A.c) {
                      var x = b.pop();
                      this.addPaths(b, p), (b = this.addShapes(f, C[1], x));
                    } else this.addPaths(b, p), (b = this.addShapes(f, C[1]));
                  }
                  this.addPaths(b, p);
                }
              }
              f.shape.paths = p;
            }
        }
      }),
      (TrimModifier.prototype.addPaths = function (e, r) {
        var i,
          s = e.length;
        for (i = 0; i < s; i += 1) r.addShape(e[i]);
      }),
      (TrimModifier.prototype.addSegment = function (e, r, i, s, a, n, l) {
        a.setXYAt(r[0], r[1], "o", n),
          a.setXYAt(i[0], i[1], "i", n + 1),
          l && a.setXYAt(e[0], e[1], "v", n),
          a.setXYAt(s[0], s[1], "v", n + 1);
      }),
      (TrimModifier.prototype.addSegmentFromArray = function (e, r, i, s) {
        r.setXYAt(e[1], e[5], "o", i),
          r.setXYAt(e[2], e[6], "i", i + 1),
          s && r.setXYAt(e[0], e[4], "v", i),
          r.setXYAt(e[3], e[7], "v", i + 1);
      }),
      (TrimModifier.prototype.addShapes = function (e, r, i) {
        var s = e.pathsData,
          a = e.shape.paths.shapes,
          n,
          l = e.shape.paths._length,
          v,
          y,
          g = 0,
          P,
          S,
          u,
          d,
          C = [],
          f,
          p = !0;
        for (
          i
            ? ((S = i._length), (f = i._length))
            : ((i = shapePool.newElement()), (S = 0), (f = 0)),
            C.push(i),
            n = 0;
          n < l;
          n += 1
        ) {
          for (
            u = s[n].lengths,
              i.c = a[n].c,
              y = a[n].c ? u.length : u.length + 1,
              v = 1;
            v < y;
            v += 1
          )
            if (((P = u[v - 1]), g + P.addedLength < r.s))
              (g += P.addedLength), (i.c = !1);
            else if (g > r.e) {
              i.c = !1;
              break;
            } else
              r.s <= g && r.e >= g + P.addedLength
                ? (this.addSegment(
                    a[n].v[v - 1],
                    a[n].o[v - 1],
                    a[n].i[v],
                    a[n].v[v],
                    i,
                    S,
                    p
                  ),
                  (p = !1))
                : ((d = bez.getNewSegment(
                    a[n].v[v - 1],
                    a[n].v[v],
                    a[n].o[v - 1],
                    a[n].i[v],
                    (r.s - g) / P.addedLength,
                    (r.e - g) / P.addedLength,
                    u[v - 1]
                  )),
                  this.addSegmentFromArray(d, i, S, p),
                  (p = !1),
                  (i.c = !1)),
                (g += P.addedLength),
                (S += 1);
          if (a[n].c && u.length) {
            if (((P = u[v - 1]), g <= r.e)) {
              var c = u[v - 1].addedLength;
              r.s <= g && r.e >= g + c
                ? (this.addSegment(
                    a[n].v[v - 1],
                    a[n].o[v - 1],
                    a[n].i[0],
                    a[n].v[0],
                    i,
                    S,
                    p
                  ),
                  (p = !1))
                : ((d = bez.getNewSegment(
                    a[n].v[v - 1],
                    a[n].v[0],
                    a[n].o[v - 1],
                    a[n].i[0],
                    (r.s - g) / c,
                    (r.e - g) / c,
                    u[v - 1]
                  )),
                  this.addSegmentFromArray(d, i, S, p),
                  (p = !1),
                  (i.c = !1));
            } else i.c = !1;
            (g += P.addedLength), (S += 1);
          }
          if (
            (i._length &&
              (i.setXYAt(i.v[f][0], i.v[f][1], "i", f),
              i.setXYAt(
                i.v[i._length - 1][0],
                i.v[i._length - 1][1],
                "o",
                i._length - 1
              )),
            g > r.e)
          )
            break;
          n < l - 1 &&
            ((i = shapePool.newElement()), (p = !0), C.push(i), (S = 0));
        }
        return C;
      }),
      ShapeModifiers.registerModifier("tm", TrimModifier);
    function RoundCornersModifier() {}
    extendPrototype([ShapeModifier], RoundCornersModifier),
      (RoundCornersModifier.prototype.initModifierProperties = function (e, r) {
        ((this || t).getValue = (this || t).processKeys),
          ((this || t).rd = PropertyFactory.getProp(
            e,
            r.r,
            0,
            null,
            this || t
          )),
          ((this || t)._isAnimated = !!(this || t).rd.effectsSequence.length);
      }),
      (RoundCornersModifier.prototype.processPath = function (e, r) {
        var i = shapePool.newElement();
        i.c = e.c;
        var s,
          a = e._length,
          n,
          l,
          v,
          y,
          g,
          P,
          S = 0,
          u,
          d,
          C,
          f,
          p,
          c;
        for (s = 0; s < a; s += 1)
          (n = e.v[s]),
            (v = e.o[s]),
            (l = e.i[s]),
            n[0] === v[0] && n[1] === v[1] && n[0] === l[0] && n[1] === l[1]
              ? (s === 0 || s === a - 1) && !e.c
                ? (i.setTripleAt(n[0], n[1], v[0], v[1], l[0], l[1], S),
                  (S += 1))
                : (s === 0 ? (y = e.v[a - 1]) : (y = e.v[s - 1]),
                  (g = Math.sqrt(
                    Math.pow(n[0] - y[0], 2) + Math.pow(n[1] - y[1], 2)
                  )),
                  (P = g ? Math.min(g / 2, r) / g : 0),
                  (p = n[0] + (y[0] - n[0]) * P),
                  (u = p),
                  (c = n[1] - (n[1] - y[1]) * P),
                  (d = c),
                  (C = u - (u - n[0]) * roundCorner),
                  (f = d - (d - n[1]) * roundCorner),
                  i.setTripleAt(u, d, C, f, p, c, S),
                  (S += 1),
                  s === a - 1 ? (y = e.v[0]) : (y = e.v[s + 1]),
                  (g = Math.sqrt(
                    Math.pow(n[0] - y[0], 2) + Math.pow(n[1] - y[1], 2)
                  )),
                  (P = g ? Math.min(g / 2, r) / g : 0),
                  (C = n[0] + (y[0] - n[0]) * P),
                  (u = C),
                  (f = n[1] + (y[1] - n[1]) * P),
                  (d = f),
                  (p = u - (u - n[0]) * roundCorner),
                  (c = d - (d - n[1]) * roundCorner),
                  i.setTripleAt(u, d, C, f, p, c, S),
                  (S += 1))
              : (i.setTripleAt(
                  e.v[s][0],
                  e.v[s][1],
                  e.o[s][0],
                  e.o[s][1],
                  e.i[s][0],
                  e.i[s][1],
                  S
                ),
                (S += 1));
        return i;
      }),
      (RoundCornersModifier.prototype.processShapes = function (e) {
        var r,
          i,
          s = (this || t).shapes.length,
          a,
          n,
          l = (this || t).rd.v;
        if (l !== 0) {
          var v, y;
          for (i = 0; i < s; i += 1) {
            if (
              ((v = (this || t).shapes[i]),
              (y = v.localShapeCollection),
              !(!v.shape._mdf && !(this || t)._mdf && !e))
            )
              for (
                y.releaseShapes(),
                  v.shape._mdf = !0,
                  r = v.shape.paths.shapes,
                  n = v.shape.paths._length,
                  a = 0;
                a < n;
                a += 1
              )
                y.addShape(this.processPath(r[a], l));
            v.shape.paths = v.localShapeCollection;
          }
        }
        (this || t).dynamicProperties.length || ((this || t)._mdf = !1);
      }),
      ShapeModifiers.registerModifier("rd", RoundCornersModifier);
    function PuckerAndBloatModifier() {}
    extendPrototype([ShapeModifier], PuckerAndBloatModifier),
      (PuckerAndBloatModifier.prototype.initModifierProperties = function (
        e,
        r
      ) {
        ((this || t).getValue = (this || t).processKeys),
          ((this || t).amount = PropertyFactory.getProp(
            e,
            r.a,
            0,
            null,
            this || t
          )),
          ((this || t)._isAnimated = !!(this || t).amount.effectsSequence
            .length);
      }),
      (PuckerAndBloatModifier.prototype.processPath = function (e, r) {
        var i = r / 100,
          s = [0, 0],
          a = e._length,
          n = 0;
        for (n = 0; n < a; n += 1) (s[0] += e.v[n][0]), (s[1] += e.v[n][1]);
        (s[0] /= a), (s[1] /= a);
        var l = shapePool.newElement();
        l.c = e.c;
        var v, y, g, P, S, u;
        for (n = 0; n < a; n += 1)
          (v = e.v[n][0] + (s[0] - e.v[n][0]) * i),
            (y = e.v[n][1] + (s[1] - e.v[n][1]) * i),
            (g = e.o[n][0] + (s[0] - e.o[n][0]) * -i),
            (P = e.o[n][1] + (s[1] - e.o[n][1]) * -i),
            (S = e.i[n][0] + (s[0] - e.i[n][0]) * -i),
            (u = e.i[n][1] + (s[1] - e.i[n][1]) * -i),
            l.setTripleAt(v, y, g, P, S, u, n);
        return l;
      }),
      (PuckerAndBloatModifier.prototype.processShapes = function (e) {
        var r,
          i,
          s = (this || t).shapes.length,
          a,
          n,
          l = (this || t).amount.v;
        if (l !== 0) {
          var v, y;
          for (i = 0; i < s; i += 1) {
            if (
              ((v = (this || t).shapes[i]),
              (y = v.localShapeCollection),
              !(!v.shape._mdf && !(this || t)._mdf && !e))
            )
              for (
                y.releaseShapes(),
                  v.shape._mdf = !0,
                  r = v.shape.paths.shapes,
                  n = v.shape.paths._length,
                  a = 0;
                a < n;
                a += 1
              )
                y.addShape(this.processPath(r[a], l));
            v.shape.paths = v.localShapeCollection;
          }
        }
        (this || t).dynamicProperties.length || ((this || t)._mdf = !1);
      }),
      ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
    function RepeaterModifier() {}
    extendPrototype([ShapeModifier], RepeaterModifier),
      (RepeaterModifier.prototype.initModifierProperties = function (e, r) {
        ((this || t).getValue = (this || t).processKeys),
          ((this || t).c = PropertyFactory.getProp(e, r.c, 0, null, this || t)),
          ((this || t).o = PropertyFactory.getProp(e, r.o, 0, null, this || t)),
          ((this || t).tr = TransformPropertyFactory.getTransformProperty(
            e,
            r.tr,
            this || t
          )),
          ((this || t).so = PropertyFactory.getProp(
            e,
            r.tr.so,
            0,
            0.01,
            this || t
          )),
          ((this || t).eo = PropertyFactory.getProp(
            e,
            r.tr.eo,
            0,
            0.01,
            this || t
          )),
          ((this || t).data = r),
          (this || t).dynamicProperties.length || this.getValue(!0),
          ((this || t)._isAnimated = !!(this || t).dynamicProperties.length),
          ((this || t).pMatrix = new Matrix()),
          ((this || t).rMatrix = new Matrix()),
          ((this || t).sMatrix = new Matrix()),
          ((this || t).tMatrix = new Matrix()),
          ((this || t).matrix = new Matrix());
      }),
      (RepeaterModifier.prototype.applyTransforms = function (
        e,
        r,
        i,
        s,
        a,
        n
      ) {
        var l = n ? -1 : 1,
          v = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
          y = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
        e.translate(s.p.v[0] * l * a, s.p.v[1] * l * a, s.p.v[2]),
          r.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
          r.rotate(-s.r.v * l * a),
          r.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
          i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
          i.scale(n ? 1 / v : v, n ? 1 / y : y),
          i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
      }),
      (RepeaterModifier.prototype.init = function (e, r, i, s) {
        for (
          (this || t).elem = e,
            (this || t).arr = r,
            (this || t).pos = i,
            (this || t).elemsData = s,
            (this || t)._currentCopies = 0,
            (this || t)._elements = [],
            (this || t)._groups = [],
            (this || t).frameId = -1,
            this.initDynamicPropertyContainer(e),
            this.initModifierProperties(e, r[i]);
          i > 0;

        )
          (i -= 1), (this || t)._elements.unshift(r[i]);
        (this || t).dynamicProperties.length
          ? ((this || t).k = !0)
          : this.getValue(!0);
      }),
      (RepeaterModifier.prototype.resetElements = function (e) {
        var r,
          i = e.length;
        for (r = 0; r < i; r += 1)
          (e[r]._processed = !1),
            e[r].ty === "gr" && this.resetElements(e[r].it);
      }),
      (RepeaterModifier.prototype.cloneElements = function (e) {
        var r = JSON.parse(JSON.stringify(e));
        return this.resetElements(r), r;
      }),
      (RepeaterModifier.prototype.changeGroupRender = function (e, r) {
        var i,
          s = e.length;
        for (i = 0; i < s; i += 1)
          (e[i]._render = r),
            e[i].ty === "gr" && this.changeGroupRender(e[i].it, r);
      }),
      (RepeaterModifier.prototype.processShapes = function (e) {
        var r,
          i,
          s,
          a,
          n,
          l = !1;
        if ((this || t)._mdf || e) {
          var v = Math.ceil((this || t).c.v);
          if ((this || t)._groups.length < v) {
            for (; (this || t)._groups.length < v; ) {
              var y = {
                it: this.cloneElements((this || t)._elements),
                ty: "gr",
              };
              y.it.push({
                a: { a: 0, ix: 1, k: [0, 0] },
                nm: "Transform",
                o: { a: 0, ix: 7, k: 100 },
                p: { a: 0, ix: 2, k: [0, 0] },
                r: {
                  a: 1,
                  ix: 6,
                  k: [
                    { s: 0, e: 0, t: 0 },
                    { s: 0, e: 0, t: 1 },
                  ],
                },
                s: { a: 0, ix: 3, k: [100, 100] },
                sa: { a: 0, ix: 5, k: 0 },
                sk: { a: 0, ix: 4, k: 0 },
                ty: "tr",
              }),
                (this || t).arr.splice(0, 0, y),
                (this || t)._groups.splice(0, 0, y),
                ((this || t)._currentCopies += 1);
            }
            (this || t).elem.reloadShapes(), (l = !0);
          }
          n = 0;
          var g;
          for (s = 0; s <= (this || t)._groups.length - 1; s += 1) {
            if (
              ((g = n < v),
              ((this || t)._groups[s]._render = g),
              this.changeGroupRender((this || t)._groups[s].it, g),
              !g)
            ) {
              var P = (this || t).elemsData[s].it,
                S = P[P.length - 1];
              S.transform.op.v !== 0
                ? ((S.transform.op._mdf = !0), (S.transform.op.v = 0))
                : (S.transform.op._mdf = !1);
            }
            n += 1;
          }
          (this || t)._currentCopies = v;
          var u = (this || t).o.v,
            d = u % 1,
            C = u > 0 ? Math.floor(u) : Math.ceil(u),
            f = (this || t).pMatrix.props,
            p = (this || t).rMatrix.props,
            c = (this || t).sMatrix.props;
          (this || t).pMatrix.reset(),
            (this || t).rMatrix.reset(),
            (this || t).sMatrix.reset(),
            (this || t).tMatrix.reset(),
            (this || t).matrix.reset();
          var o = 0;
          if (u > 0) {
            for (; o < C; )
              this.applyTransforms(
                (this || t).pMatrix,
                (this || t).rMatrix,
                (this || t).sMatrix,
                (this || t).tr,
                1,
                !1
              ),
                (o += 1);
            d &&
              (this.applyTransforms(
                (this || t).pMatrix,
                (this || t).rMatrix,
                (this || t).sMatrix,
                (this || t).tr,
                d,
                !1
              ),
              (o += d));
          } else if (u < 0) {
            for (; o > C; )
              this.applyTransforms(
                (this || t).pMatrix,
                (this || t).rMatrix,
                (this || t).sMatrix,
                (this || t).tr,
                1,
                !0
              ),
                (o -= 1);
            d &&
              (this.applyTransforms(
                (this || t).pMatrix,
                (this || t).rMatrix,
                (this || t).sMatrix,
                (this || t).tr,
                -d,
                !0
              ),
              (o -= d));
          }
          (s = (this || t).data.m === 1 ? 0 : (this || t)._currentCopies - 1),
            (a = (this || t).data.m === 1 ? 1 : -1),
            (n = (this || t)._currentCopies);
          for (var h, m; n; ) {
            if (
              ((r = (this || t).elemsData[s].it),
              (i = r[r.length - 1].transform.mProps.v.props),
              (m = i.length),
              (r[r.length - 1].transform.mProps._mdf = !0),
              (r[r.length - 1].transform.op._mdf = !0),
              (r[r.length - 1].transform.op.v =
                (this || t)._currentCopies === 1
                  ? (this || t).so.v
                  : (this || t).so.v +
                    ((this || t).eo.v - (this || t).so.v) *
                      (s / ((this || t)._currentCopies - 1))),
              o !== 0)
            ) {
              for (
                ((s !== 0 && a === 1) ||
                  (s !== (this || t)._currentCopies - 1 && a === -1)) &&
                  this.applyTransforms(
                    (this || t).pMatrix,
                    (this || t).rMatrix,
                    (this || t).sMatrix,
                    (this || t).tr,
                    1,
                    !1
                  ),
                  (this || t).matrix.transform(
                    p[0],
                    p[1],
                    p[2],
                    p[3],
                    p[4],
                    p[5],
                    p[6],
                    p[7],
                    p[8],
                    p[9],
                    p[10],
                    p[11],
                    p[12],
                    p[13],
                    p[14],
                    p[15]
                  ),
                  (this || t).matrix.transform(
                    c[0],
                    c[1],
                    c[2],
                    c[3],
                    c[4],
                    c[5],
                    c[6],
                    c[7],
                    c[8],
                    c[9],
                    c[10],
                    c[11],
                    c[12],
                    c[13],
                    c[14],
                    c[15]
                  ),
                  (this || t).matrix.transform(
                    f[0],
                    f[1],
                    f[2],
                    f[3],
                    f[4],
                    f[5],
                    f[6],
                    f[7],
                    f[8],
                    f[9],
                    f[10],
                    f[11],
                    f[12],
                    f[13],
                    f[14],
                    f[15]
                  ),
                  h = 0;
                h < m;
                h += 1
              )
                i[h] = (this || t).matrix.props[h];
              (this || t).matrix.reset();
            } else
              for ((this || t).matrix.reset(), h = 0; h < m; h += 1)
                i[h] = (this || t).matrix.props[h];
            (o += 1), (n -= 1), (s += a);
          }
        } else
          for (n = (this || t)._currentCopies, s = 0, a = 1; n; )
            (r = (this || t).elemsData[s].it),
              (i = r[r.length - 1].transform.mProps.v.props),
              (r[r.length - 1].transform.mProps._mdf = !1),
              (r[r.length - 1].transform.op._mdf = !1),
              (n -= 1),
              (s += a);
        return l;
      }),
      (RepeaterModifier.prototype.addShape = function () {}),
      ShapeModifiers.registerModifier("rp", RepeaterModifier);
    function ShapeCollection() {
      ((this || t)._length = 0),
        ((this || t)._maxLength = 4),
        ((this || t).shapes = createSizedArray((this || t)._maxLength));
    }
    (ShapeCollection.prototype.addShape = function (e) {
      (this || t)._length === (this || t)._maxLength &&
        (((this || t).shapes = (this || t).shapes.concat(
          createSizedArray((this || t)._maxLength)
        )),
        ((this || t)._maxLength *= 2)),
        ((this || t).shapes[(this || t)._length] = e),
        ((this || t)._length += 1);
    }),
      (ShapeCollection.prototype.releaseShapes = function () {
        var e;
        for (e = 0; e < (this || t)._length; e += 1)
          shapePool.release((this || t).shapes[e]);
        (this || t)._length = 0;
      });
    function DashProperty(e, r, i, s) {
      ((this || t).elem = e),
        ((this || t).frameId = -1),
        ((this || t).dataProps = createSizedArray(r.length)),
        ((this || t).renderer = i),
        ((this || t).k = !1),
        ((this || t).dashStr = ""),
        ((this || t).dashArray = createTypedArray(
          "float32",
          r.length ? r.length - 1 : 0
        )),
        ((this || t).dashoffset = createTypedArray("float32", 1)),
        this.initDynamicPropertyContainer(s);
      var a,
        n = r.length || 0,
        l;
      for (a = 0; a < n; a += 1)
        (l = PropertyFactory.getProp(e, r[a].v, 0, 0, this || t)),
          ((this || t).k = l.k || (this || t).k),
          ((this || t).dataProps[a] = { n: r[a].n, p: l });
      (this || t).k || this.getValue(!0),
        ((this || t)._isAnimated = (this || t).k);
    }
    (DashProperty.prototype.getValue = function (e) {
      if (
        !((this || t).elem.globalData.frameId === (this || t).frameId && !e) &&
        (((this || t).frameId = (this || t).elem.globalData.frameId),
        this.iterateDynamicProperties(),
        ((this || t)._mdf = (this || t)._mdf || e),
        (this || t)._mdf)
      ) {
        var r = 0,
          i = (this || t).dataProps.length;
        for (
          (this || t).renderer === "svg" && ((this || t).dashStr = ""), r = 0;
          r < i;
          r += 1
        )
          (this || t).dataProps[r].n !== "o"
            ? (this || t).renderer === "svg"
              ? ((this || t).dashStr += " " + (this || t).dataProps[r].p.v)
              : ((this || t).dashArray[r] = (this || t).dataProps[r].p.v)
            : ((this || t).dashoffset[0] = (this || t).dataProps[r].p.v);
      }
    }),
      extendPrototype([DynamicPropertyContainer], DashProperty);
    function GradientProperty(e, r, i) {
      ((this || t).data = r),
        ((this || t).c = createTypedArray("uint8c", r.p * 4));
      var s = r.k.k[0].s ? r.k.k[0].s.length - r.p * 4 : r.k.k.length - r.p * 4;
      ((this || t).o = createTypedArray("float32", s)),
        ((this || t)._cmdf = !1),
        ((this || t)._omdf = !1),
        ((this || t)._collapsable = this.checkCollapsable()),
        ((this || t)._hasOpacity = s),
        this.initDynamicPropertyContainer(i),
        ((this || t).prop = PropertyFactory.getProp(
          e,
          r.k,
          1,
          null,
          this || t
        )),
        ((this || t).k = (this || t).prop.k),
        this.getValue(!0);
    }
    (GradientProperty.prototype.comparePoints = function (e, r) {
      for (var i = 0, s = (this || t).o.length / 2, a; i < s; ) {
        if (((a = Math.abs(e[i * 4] - e[r * 4 + i * 2])), a > 0.01)) return !1;
        i += 1;
      }
      return !0;
    }),
      (GradientProperty.prototype.checkCollapsable = function () {
        if ((this || t).o.length / 2 !== (this || t).c.length / 4) return !1;
        if ((this || t).data.k.k[0].s)
          for (var e = 0, r = (this || t).data.k.k.length; e < r; ) {
            if (
              !this.comparePoints((this || t).data.k.k[e].s, (this || t).data.p)
            )
              return !1;
            e += 1;
          }
        else if (!this.comparePoints((this || t).data.k.k, (this || t).data.p))
          return !1;
        return !0;
      }),
      (GradientProperty.prototype.getValue = function (e) {
        if (
          ((this || t).prop.getValue(),
          ((this || t)._mdf = !1),
          ((this || t)._cmdf = !1),
          ((this || t)._omdf = !1),
          (this || t).prop._mdf || e)
        ) {
          var r,
            i = (this || t).data.p * 4,
            s,
            a;
          for (r = 0; r < i; r += 1)
            (s = r % 4 === 0 ? 100 : 255),
              (a = Math.round((this || t).prop.v[r] * s)),
              (this || t).c[r] !== a &&
                (((this || t).c[r] = a), ((this || t)._cmdf = !e));
          if ((this || t).o.length)
            for (
              i = (this || t).prop.v.length, r = (this || t).data.p * 4;
              r < i;
              r += 1
            )
              (s = r % 2 === 0 ? 100 : 1),
                (a =
                  r % 2 === 0
                    ? Math.round((this || t).prop.v[r] * 100)
                    : (this || t).prop.v[r]),
                (this || t).o[r - (this || t).data.p * 4] !== a &&
                  (((this || t).o[r - (this || t).data.p * 4] = a),
                  ((this || t)._omdf = !e));
          (this || t)._mdf = !e;
        }
      }),
      extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function (e, r, i, s) {
        if (r === 0) return "";
        var a = e.o,
          n = e.i,
          l = e.v,
          v,
          y = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
        for (v = 1; v < r; v += 1)
          y +=
            " C" +
            s.applyToPointStringified(a[v - 1][0], a[v - 1][1]) +
            " " +
            s.applyToPointStringified(n[v][0], n[v][1]) +
            " " +
            s.applyToPointStringified(l[v][0], l[v][1]);
        return (
          i &&
            r &&
            ((y +=
              " C" +
              s.applyToPointStringified(a[v - 1][0], a[v - 1][1]) +
              " " +
              s.applyToPointStringified(n[0][0], n[0][1]) +
              " " +
              s.applyToPointStringified(l[0][0], l[0][1])),
            (y += "z")),
          y
        );
      },
      audioControllerFactory = (function () {
        function e(r) {
          ((this || t).audios = []),
            ((this || t).audioFactory = r),
            ((this || t)._volume = 1),
            ((this || t)._isMuted = !1);
        }
        return (
          (e.prototype = {
            addAudio: function (r) {
              (this || t).audios.push(r);
            },
            pause: function () {
              var r,
                i = (this || t).audios.length;
              for (r = 0; r < i; r += 1) (this || t).audios[r].pause();
            },
            resume: function () {
              var r,
                i = (this || t).audios.length;
              for (r = 0; r < i; r += 1) (this || t).audios[r].resume();
            },
            setRate: function (r) {
              var i,
                s = (this || t).audios.length;
              for (i = 0; i < s; i += 1) (this || t).audios[i].setRate(r);
            },
            createAudio: function (r) {
              return (this || t).audioFactory
                ? this.audioFactory(r)
                : Howl
                ? new Howl({ src: [r] })
                : {
                    isPlaying: !1,
                    play: function () {
                      (this || t).isPlaying = !0;
                    },
                    seek: function () {
                      (this || t).isPlaying = !1;
                    },
                    playing: function () {},
                    rate: function () {},
                    setVolume: function () {},
                  };
            },
            setAudioFactory: function (r) {
              (this || t).audioFactory = r;
            },
            setVolume: function (r) {
              ((this || t)._volume = r), this._updateVolume();
            },
            mute: function () {
              ((this || t)._isMuted = !0), this._updateVolume();
            },
            unmute: function () {
              ((this || t)._isMuted = !1), this._updateVolume();
            },
            getVolume: function () {
              return (this || t)._volume;
            },
            _updateVolume: function () {
              var r,
                i = (this || t).audios.length;
              for (r = 0; r < i; r += 1)
                (this || t).audios[r].volume(
                  (this || t)._volume * ((this || t)._isMuted ? 0 : 1)
                );
            },
          }),
          function () {
            return new e();
          }
        );
      })(),
      ImagePreloader = (function () {
        var e = (function () {
          var c = createTag("canvas");
          (c.width = 1), (c.height = 1);
          var o = c.getContext("2d");
          return (o.fillStyle = "rgba(0,0,0,0)"), o.fillRect(0, 0, 1, 1), c;
        })();
        function r() {
          ((this || t).loadedAssets += 1),
            (this || t).loadedAssets === (this || t).totalImages &&
              (this || t).loadedFootagesCount === (this || t).totalFootages &&
              (this || t).imagesLoadedCb &&
              this.imagesLoadedCb(null);
        }
        function i() {
          ((this || t).loadedFootagesCount += 1),
            (this || t).loadedAssets === (this || t).totalImages &&
              (this || t).loadedFootagesCount === (this || t).totalFootages &&
              (this || t).imagesLoadedCb &&
              this.imagesLoadedCb(null);
        }
        function s(c, o, h) {
          var m = "";
          if (c.e) m = c.p;
          else if (o) {
            var b = c.p;
            b.indexOf("images/") !== -1 && (b = b.split("/")[1]), (m = o + b);
          } else (m = h), (m += c.u ? c.u : ""), (m += c.p);
          return m;
        }
        function a(c) {
          var o = 0,
            h = setInterval(
              function () {
                var m = c.getBBox();
                (m.width || o > 500) && (this._imageLoaded(), clearInterval(h)),
                  (o += 1);
              }.bind(this || t),
              50
            );
        }
        function n(c) {
          var o = s(c, (this || t).assetsPath, (this || t).path),
            h = createNS("image");
          isSafari
            ? this.testImageLoaded(h)
            : h.addEventListener("load", (this || t)._imageLoaded, !1),
            h.addEventListener(
              "error",
              function () {
                (m.img = e), this._imageLoaded();
              }.bind(this || t),
              !1
            ),
            h.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
            (this || t)._elementHelper.append
              ? (this || t)._elementHelper.append(h)
              : (this || t)._elementHelper.appendChild(h);
          var m = { img: h, assetData: c };
          return m;
        }
        function l(c) {
          var o = s(c, (this || t).assetsPath, (this || t).path),
            h = createTag("img");
          (h.crossOrigin = "anonymous"),
            h.addEventListener("load", (this || t)._imageLoaded, !1),
            h.addEventListener(
              "error",
              function () {
                (m.img = e), this._imageLoaded();
              }.bind(this || t),
              !1
            ),
            (h.src = o);
          var m = { img: h, assetData: c };
          return m;
        }
        function v(c) {
          var o = { assetData: c },
            h = s(c, (this || t).assetsPath, (this || t).path);
          return (
            assetLoader.load(
              h,
              function (m) {
                (o.img = m), this._footageLoaded();
              }.bind(this || t),
              function () {
                (o.img = {}), this._footageLoaded();
              }.bind(this || t)
            ),
            o
          );
        }
        function y(c, o) {
          (this || t).imagesLoadedCb = o;
          var h,
            m = c.length;
          for (h = 0; h < m; h += 1)
            c[h].layers ||
              (c[h].t
                ? c[h].t === 3 &&
                  (((this || t).totalFootages += 1),
                  (this || t).images.push(this.createFootageData(c[h])))
                : (((this || t).totalImages += 1),
                  (this || t).images.push(this._createImageData(c[h]))));
        }
        function g(c) {
          (this || t).path = c || "";
        }
        function P(c) {
          (this || t).assetsPath = c || "";
        }
        function S(c) {
          for (var o = 0, h = (this || t).images.length; o < h; ) {
            if ((this || t).images[o].assetData === c)
              return (this || t).images[o].img;
            o += 1;
          }
          return null;
        }
        function u() {
          ((this || t).imagesLoadedCb = null), ((this || t).images.length = 0);
        }
        function d() {
          return (this || t).totalImages === (this || t).loadedAssets;
        }
        function C() {
          return (this || t).totalFootages === (this || t).loadedFootagesCount;
        }
        function f(c, o) {
          c === "svg"
            ? (((this || t)._elementHelper = o),
              ((this || t)._createImageData = (this || t).createImageData.bind(
                this || t
              )))
            : ((this || t)._createImageData = (this || t).createImgData.bind(
                this || t
              ));
        }
        function p() {
          ((this || t)._imageLoaded = r.bind(this || t)),
            ((this || t)._footageLoaded = i.bind(this || t)),
            ((this || t).testImageLoaded = a.bind(this || t)),
            ((this || t).createFootageData = v.bind(this || t)),
            ((this || t).assetsPath = ""),
            ((this || t).path = ""),
            ((this || t).totalImages = 0),
            ((this || t).totalFootages = 0),
            ((this || t).loadedAssets = 0),
            ((this || t).loadedFootagesCount = 0),
            ((this || t).imagesLoadedCb = null),
            ((this || t).images = []);
        }
        return (
          (p.prototype = {
            loadAssets: y,
            setAssetsPath: P,
            setPath: g,
            loadedImages: d,
            loadedFootages: C,
            destroy: u,
            getAsset: S,
            createImgData: l,
            createImageData: n,
            imageLoaded: r,
            footageLoaded: i,
            setCacheType: f,
          }),
          p
        );
      })(),
      featureSupport = (function () {
        var e = { maskType: !0 };
        return (
          (/MSIE 10/i.test(H.userAgent) ||
            /MSIE 9/i.test(H.userAgent) ||
            /rv:11.0/i.test(H.userAgent) ||
            /Edge\/\d./i.test(H.userAgent)) &&
            (e.maskType = !1),
          e
        );
      })(),
      filtersFactory = (function () {
        var e = {};
        (e.createFilter = r), (e.createAlphaToLuminanceFilter = i);
        function r(s, a) {
          var n = createNS("filter");
          return (
            n.setAttribute("id", s),
            a !== !0 &&
              (n.setAttribute("filterUnits", "objectBoundingBox"),
              n.setAttribute("x", "0%"),
              n.setAttribute("y", "0%"),
              n.setAttribute("width", "100%"),
              n.setAttribute("height", "100%")),
            n
          );
        }
        function i() {
          var s = createNS("feColorMatrix");
          return (
            s.setAttribute("type", "matrix"),
            s.setAttribute("color-interpolation-filters", "sRGB"),
            s.setAttribute(
              "values",
              "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
            ),
            s
          );
        }
        return e;
      })(),
      assetLoader = (function () {
        function e(i) {
          return i.response && typeof i.response == "object"
            ? i.response
            : i.response && typeof i.response == "string"
            ? JSON.parse(i.response)
            : i.responseText
            ? JSON.parse(i.responseText)
            : null;
        }
        function r(i, s, a) {
          var n,
            l = new XMLHttpRequest();
          try {
            l.responseType = "json";
          } catch {}
          (l.onreadystatechange = function () {
            if (l.readyState === 4)
              if (l.status === 200) (n = e(l)), s(n);
              else
                try {
                  (n = e(l)), s(n);
                } catch (v) {
                  a && a(v);
                }
          }),
            l.open("GET", i, !0),
            l.send();
        }
        return { load: r };
      })();
    function TextAnimatorProperty(e, r, i) {
      ((this || t)._isFirstFrame = !0),
        ((this || t)._hasMaskedPath = !1),
        ((this || t)._frameId = -1),
        ((this || t)._textData = e),
        ((this || t)._renderType = r),
        ((this || t)._elem = i),
        ((this || t)._animatorsData = createSizedArray(
          (this || t)._textData.a.length
        )),
        ((this || t)._pathData = {}),
        ((this || t)._moreOptions = { alignment: {} }),
        ((this || t).renderedLetters = []),
        ((this || t).lettersChangedFlag = !1),
        this.initDynamicPropertyContainer(i);
    }
    (TextAnimatorProperty.prototype.searchProperties = function () {
      var e,
        r = (this || t)._textData.a.length,
        i,
        s = PropertyFactory.getProp;
      for (e = 0; e < r; e += 1)
        (i = (this || t)._textData.a[e]),
          ((this || t)._animatorsData[e] = new TextAnimatorDataProperty(
            (this || t)._elem,
            i,
            this || t
          ));
      (this || t)._textData.p && "m" in (this || t)._textData.p
        ? (((this || t)._pathData = {
            f: s((this || t)._elem, (this || t)._textData.p.f, 0, 0, this || t),
            l: s((this || t)._elem, (this || t)._textData.p.l, 0, 0, this || t),
            r: (this || t)._textData.p.r,
            m: (this || t)._elem.maskManager.getMaskProperty(
              (this || t)._textData.p.m
            ),
          }),
          ((this || t)._hasMaskedPath = !0))
        : ((this || t)._hasMaskedPath = !1),
        ((this || t)._moreOptions.alignment = s(
          (this || t)._elem,
          (this || t)._textData.m.a,
          1,
          0,
          this || t
        ));
    }),
      (TextAnimatorProperty.prototype.getMeasures = function (e, r) {
        if (
          (((this || t).lettersChangedFlag = r),
          !(
            !(this || t)._mdf &&
            !(this || t)._isFirstFrame &&
            !r &&
            (!(this || t)._hasMaskedPath || !(this || t)._pathData.m._mdf)
          ))
        ) {
          (this || t)._isFirstFrame = !1;
          var i = (this || t)._moreOptions.alignment.v,
            s = (this || t)._animatorsData,
            a = (this || t)._textData,
            n = (this || t).mHelper,
            l = (this || t)._renderType,
            v = (this || t).renderedLetters.length,
            y,
            g,
            P,
            S,
            u = e.l,
            d,
            C,
            f,
            p,
            c,
            o,
            h,
            m,
            b,
            A,
            x,
            _,
            k,
            w,
            R;
          if ((this || t)._hasMaskedPath) {
            if (
              ((R = (this || t)._pathData.m),
              !(this || t)._pathData.n || (this || t)._pathData._mdf)
            ) {
              var V = R.v;
              (this || t)._pathData.r && (V = V.reverse()),
                (d = { tLength: 0, segments: [] }),
                (S = V._length - 1);
              var B;
              for (_ = 0, P = 0; P < S; P += 1)
                (B = bez.buildBezierData(
                  V.v[P],
                  V.v[P + 1],
                  [V.o[P][0] - V.v[P][0], V.o[P][1] - V.v[P][1]],
                  [V.i[P + 1][0] - V.v[P + 1][0], V.i[P + 1][1] - V.v[P + 1][1]]
                )),
                  (d.tLength += B.segmentLength),
                  d.segments.push(B),
                  (_ += B.segmentLength);
              (P = S),
                R.v.c &&
                  ((B = bez.buildBezierData(
                    V.v[P],
                    V.v[0],
                    [V.o[P][0] - V.v[P][0], V.o[P][1] - V.v[P][1]],
                    [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]
                  )),
                  (d.tLength += B.segmentLength),
                  d.segments.push(B),
                  (_ += B.segmentLength)),
                ((this || t)._pathData.pi = d);
            }
            if (
              ((d = (this || t)._pathData.pi),
              (C = (this || t)._pathData.f.v),
              (h = 0),
              (o = 1),
              (p = 0),
              (c = !0),
              (A = d.segments),
              C < 0 && R.v.c)
            )
              for (
                d.tLength < Math.abs(C) && (C = -Math.abs(C) % d.tLength),
                  h = A.length - 1,
                  b = A[h].points,
                  o = b.length - 1;
                C < 0;

              )
                (C += b[o].partialLength),
                  (o -= 1),
                  o < 0 && ((h -= 1), (b = A[h].points), (o = b.length - 1));
            (b = A[h].points),
              (m = b[o - 1]),
              (f = b[o]),
              (x = f.partialLength);
          }
          (S = u.length), (y = 0), (g = 0);
          var L = e.finalSize * 1.2 * 0.714,
            O = !0,
            M,
            T,
            E,
            F,
            D;
          F = s.length;
          var I,
            N = -1,
            z,
            j,
            $,
            K = C,
            Q = h,
            et = o,
            it = -1,
            J,
            X,
            rt,
            G,
            U,
            ht,
            mt,
            lt,
            ot = "",
            ft = (this || t).defaultPropsArray,
            pt;
          if (e.j === 2 || e.j === 1) {
            var tt = 0,
              dt = 0,
              vt = e.j === 2 ? -0.5 : -1,
              st = 0,
              yt = !0;
            for (P = 0; P < S; P += 1)
              if (u[P].n) {
                for (tt && (tt += dt); st < P; )
                  (u[st].animatorJustifyOffset = tt), (st += 1);
                (tt = 0), (yt = !0);
              } else {
                for (E = 0; E < F; E += 1)
                  (M = s[E].a),
                    M.t.propType &&
                      (yt && e.j === 2 && (dt += M.t.v * vt),
                      (T = s[E].s),
                      (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                      I.length
                        ? (tt += M.t.v * I[0] * vt)
                        : (tt += M.t.v * I * vt));
                yt = !1;
              }
            for (tt && (tt += dt); st < P; )
              (u[st].animatorJustifyOffset = tt), (st += 1);
          }
          for (P = 0; P < S; P += 1) {
            if ((n.reset(), (J = 1), u[P].n))
              (y = 0),
                (g += e.yOffset),
                (g += O ? 1 : 0),
                (C = K),
                (O = !1),
                (this || t)._hasMaskedPath &&
                  ((h = Q),
                  (o = et),
                  (b = A[h].points),
                  (m = b[o - 1]),
                  (f = b[o]),
                  (x = f.partialLength),
                  (p = 0)),
                (ot = ""),
                (lt = ""),
                (ht = ""),
                (pt = ""),
                (ft = (this || t).defaultPropsArray);
            else {
              if ((this || t)._hasMaskedPath) {
                if (it !== u[P].line) {
                  switch (e.j) {
                    case 1:
                      C += _ - e.lineWidths[u[P].line];
                      break;
                    case 2:
                      C += (_ - e.lineWidths[u[P].line]) / 2;
                      break;
                    default:
                      break;
                  }
                  it = u[P].line;
                }
                N !== u[P].ind &&
                  (u[N] && (C += u[N].extra),
                  (C += u[P].an / 2),
                  (N = u[P].ind)),
                  (C += i[0] * u[P].an * 0.005);
                var at = 0;
                for (E = 0; E < F; E += 1)
                  (M = s[E].a),
                    M.p.propType &&
                      ((T = s[E].s),
                      (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                      I.length
                        ? (at += M.p.v[0] * I[0])
                        : (at += M.p.v[0] * I)),
                    M.a.propType &&
                      ((T = s[E].s),
                      (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                      I.length
                        ? (at += M.a.v[0] * I[0])
                        : (at += M.a.v[0] * I));
                for (c = !0; c; )
                  p + x >= C + at || !b
                    ? ((k = (C + at - p) / f.partialLength),
                      (j = m.point[0] + (f.point[0] - m.point[0]) * k),
                      ($ = m.point[1] + (f.point[1] - m.point[1]) * k),
                      n.translate(-i[0] * u[P].an * 0.005, -(i[1] * L) * 0.01),
                      (c = !1))
                    : b &&
                      ((p += f.partialLength),
                      (o += 1),
                      o >= b.length &&
                        ((o = 0),
                        (h += 1),
                        A[h]
                          ? (b = A[h].points)
                          : R.v.c
                          ? ((o = 0), (h = 0), (b = A[h].points))
                          : ((p -= f.partialLength), (b = null))),
                      b && ((m = f), (f = b[o]), (x = f.partialLength)));
                (z = u[P].an / 2 - u[P].add), n.translate(-z, 0, 0);
              } else
                (z = u[P].an / 2 - u[P].add),
                  n.translate(-z, 0, 0),
                  n.translate(-i[0] * u[P].an * 0.005, -i[1] * L * 0.01, 0);
              for (E = 0; E < F; E += 1)
                (M = s[E].a),
                  M.t.propType &&
                    ((T = s[E].s),
                    (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                    (y !== 0 || e.j !== 0) &&
                      ((this || t)._hasMaskedPath
                        ? I.length
                          ? (C += M.t.v * I[0])
                          : (C += M.t.v * I)
                        : I.length
                        ? (y += M.t.v * I[0])
                        : (y += M.t.v * I)));
              for (
                e.strokeWidthAnim && (rt = e.sw || 0),
                  e.strokeColorAnim &&
                    (e.sc
                      ? (X = [e.sc[0], e.sc[1], e.sc[2]])
                      : (X = [0, 0, 0])),
                  e.fillColorAnim && e.fc && (G = [e.fc[0], e.fc[1], e.fc[2]]),
                  E = 0;
                E < F;
                E += 1
              )
                (M = s[E].a),
                  M.a.propType &&
                    ((T = s[E].s),
                    (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                    I.length
                      ? n.translate(
                          -M.a.v[0] * I[0],
                          -M.a.v[1] * I[1],
                          M.a.v[2] * I[2]
                        )
                      : n.translate(
                          -M.a.v[0] * I,
                          -M.a.v[1] * I,
                          M.a.v[2] * I
                        ));
              for (E = 0; E < F; E += 1)
                (M = s[E].a),
                  M.s.propType &&
                    ((T = s[E].s),
                    (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                    I.length
                      ? n.scale(
                          1 + (M.s.v[0] - 1) * I[0],
                          1 + (M.s.v[1] - 1) * I[1],
                          1
                        )
                      : n.scale(
                          1 + (M.s.v[0] - 1) * I,
                          1 + (M.s.v[1] - 1) * I,
                          1
                        ));
              for (E = 0; E < F; E += 1) {
                if (
                  ((M = s[E].a),
                  (T = s[E].s),
                  (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                  M.sk.propType &&
                    (I.length
                      ? n.skewFromAxis(-M.sk.v * I[0], M.sa.v * I[1])
                      : n.skewFromAxis(-M.sk.v * I, M.sa.v * I)),
                  M.r.propType &&
                    (I.length
                      ? n.rotateZ(-M.r.v * I[2])
                      : n.rotateZ(-M.r.v * I)),
                  M.ry.propType &&
                    (I.length
                      ? n.rotateY(M.ry.v * I[1])
                      : n.rotateY(M.ry.v * I)),
                  M.rx.propType &&
                    (I.length
                      ? n.rotateX(M.rx.v * I[0])
                      : n.rotateX(M.rx.v * I)),
                  M.o.propType &&
                    (I.length
                      ? (J += (M.o.v * I[0] - J) * I[0])
                      : (J += (M.o.v * I - J) * I)),
                  e.strokeWidthAnim &&
                    M.sw.propType &&
                    (I.length ? (rt += M.sw.v * I[0]) : (rt += M.sw.v * I)),
                  e.strokeColorAnim && M.sc.propType)
                )
                  for (U = 0; U < 3; U += 1)
                    I.length
                      ? (X[U] += (M.sc.v[U] - X[U]) * I[0])
                      : (X[U] += (M.sc.v[U] - X[U]) * I);
                if (e.fillColorAnim && e.fc) {
                  if (M.fc.propType)
                    for (U = 0; U < 3; U += 1)
                      I.length
                        ? (G[U] += (M.fc.v[U] - G[U]) * I[0])
                        : (G[U] += (M.fc.v[U] - G[U]) * I);
                  M.fh.propType &&
                    (I.length
                      ? (G = addHueToRGB(G, M.fh.v * I[0]))
                      : (G = addHueToRGB(G, M.fh.v * I))),
                    M.fs.propType &&
                      (I.length
                        ? (G = addSaturationToRGB(G, M.fs.v * I[0]))
                        : (G = addSaturationToRGB(G, M.fs.v * I))),
                    M.fb.propType &&
                      (I.length
                        ? (G = addBrightnessToRGB(G, M.fb.v * I[0]))
                        : (G = addBrightnessToRGB(G, M.fb.v * I)));
                }
              }
              for (E = 0; E < F; E += 1)
                (M = s[E].a),
                  M.p.propType &&
                    ((T = s[E].s),
                    (I = T.getMult(u[P].anIndexes[E], a.a[E].s.totalChars)),
                    (this || t)._hasMaskedPath
                      ? I.length
                        ? n.translate(0, M.p.v[1] * I[0], -M.p.v[2] * I[1])
                        : n.translate(0, M.p.v[1] * I, -M.p.v[2] * I)
                      : I.length
                      ? n.translate(
                          M.p.v[0] * I[0],
                          M.p.v[1] * I[1],
                          -M.p.v[2] * I[2]
                        )
                      : n.translate(M.p.v[0] * I, M.p.v[1] * I, -M.p.v[2] * I));
              if (
                (e.strokeWidthAnim && (ht = rt < 0 ? 0 : rt),
                e.strokeColorAnim &&
                  (mt =
                    "rgb(" +
                    Math.round(X[0] * 255) +
                    "," +
                    Math.round(X[1] * 255) +
                    "," +
                    Math.round(X[2] * 255) +
                    ")"),
                e.fillColorAnim &&
                  e.fc &&
                  (lt =
                    "rgb(" +
                    Math.round(G[0] * 255) +
                    "," +
                    Math.round(G[1] * 255) +
                    "," +
                    Math.round(G[2] * 255) +
                    ")"),
                (this || t)._hasMaskedPath)
              ) {
                if (
                  (n.translate(0, -e.ls),
                  n.translate(0, i[1] * L * 0.01 + g, 0),
                  a.p.p)
                ) {
                  w = (f.point[1] - m.point[1]) / (f.point[0] - m.point[0]);
                  var bt = (Math.atan(w) * 180) / Math.PI;
                  f.point[0] < m.point[0] && (bt += 180),
                    n.rotate((-bt * Math.PI) / 180);
                }
                n.translate(j, $, 0),
                  (C -= i[0] * u[P].an * 0.005),
                  u[P + 1] &&
                    N !== u[P + 1].ind &&
                    ((C += u[P].an / 2), (C += e.tr * 0.001 * e.finalSize));
              } else {
                switch (
                  (n.translate(y, g, 0),
                  e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0),
                  e.j)
                ) {
                  case 1:
                    n.translate(
                      u[P].animatorJustifyOffset +
                        e.justifyOffset +
                        (e.boxWidth - e.lineWidths[u[P].line]),
                      0,
                      0
                    );
                    break;
                  case 2:
                    n.translate(
                      u[P].animatorJustifyOffset +
                        e.justifyOffset +
                        (e.boxWidth - e.lineWidths[u[P].line]) / 2,
                      0,
                      0
                    );
                    break;
                  default:
                    break;
                }
                n.translate(0, -e.ls),
                  n.translate(z, 0, 0),
                  n.translate(i[0] * u[P].an * 0.005, i[1] * L * 0.01, 0),
                  (y += u[P].l + e.tr * 0.001 * e.finalSize);
              }
              l === "html"
                ? (ot = n.toCSS())
                : l === "svg"
                ? (ot = n.to2dCSS())
                : (ft = [
                    n.props[0],
                    n.props[1],
                    n.props[2],
                    n.props[3],
                    n.props[4],
                    n.props[5],
                    n.props[6],
                    n.props[7],
                    n.props[8],
                    n.props[9],
                    n.props[10],
                    n.props[11],
                    n.props[12],
                    n.props[13],
                    n.props[14],
                    n.props[15],
                  ]),
                (pt = J);
            }
            v <= P
              ? ((D = new LetterProps(pt, ht, mt, lt, ot, ft)),
                (this || t).renderedLetters.push(D),
                (v += 1),
                ((this || t).lettersChangedFlag = !0))
              : ((D = (this || t).renderedLetters[P]),
                ((this || t).lettersChangedFlag =
                  D.update(pt, ht, mt, lt, ot, ft) ||
                  (this || t).lettersChangedFlag));
          }
        }
      }),
      (TextAnimatorProperty.prototype.getValue = function () {
        (this || t)._elem.globalData.frameId !== (this || t)._frameId &&
          (((this || t)._frameId = (this || t)._elem.globalData.frameId),
          this.iterateDynamicProperties());
      }),
      (TextAnimatorProperty.prototype.mHelper = new Matrix()),
      (TextAnimatorProperty.prototype.defaultPropsArray = []),
      extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function TextAnimatorDataProperty(e, r, i) {
      var s = { propType: !1 },
        a = PropertyFactory.getProp,
        n = r.a;
      ((this || t).a = {
        r: n.r ? a(e, n.r, 0, degToRads, i) : s,
        rx: n.rx ? a(e, n.rx, 0, degToRads, i) : s,
        ry: n.ry ? a(e, n.ry, 0, degToRads, i) : s,
        sk: n.sk ? a(e, n.sk, 0, degToRads, i) : s,
        sa: n.sa ? a(e, n.sa, 0, degToRads, i) : s,
        s: n.s ? a(e, n.s, 1, 0.01, i) : s,
        a: n.a ? a(e, n.a, 1, 0, i) : s,
        o: n.o ? a(e, n.o, 0, 0.01, i) : s,
        p: n.p ? a(e, n.p, 1, 0, i) : s,
        sw: n.sw ? a(e, n.sw, 0, 0, i) : s,
        sc: n.sc ? a(e, n.sc, 1, 0, i) : s,
        fc: n.fc ? a(e, n.fc, 1, 0, i) : s,
        fh: n.fh ? a(e, n.fh, 0, 0, i) : s,
        fs: n.fs ? a(e, n.fs, 0, 0.01, i) : s,
        fb: n.fb ? a(e, n.fb, 0, 0.01, i) : s,
        t: n.t ? a(e, n.t, 0, 0, i) : s,
      }),
        ((this || t).s = TextSelectorProp.getTextSelectorProp(e, r.s, i)),
        ((this || t).s.t = r.s.t);
    }
    function LetterProps(e, r, i, s, a, n) {
      ((this || t).o = e),
        ((this || t).sw = r),
        ((this || t).sc = i),
        ((this || t).fc = s),
        ((this || t).m = a),
        ((this || t).p = n),
        ((this || t)._mdf = { o: !0, sw: !!r, sc: !!i, fc: !!s, m: !0, p: !0 });
    }
    LetterProps.prototype.update = function (e, r, i, s, a, n) {
      ((this || t)._mdf.o = !1),
        ((this || t)._mdf.sw = !1),
        ((this || t)._mdf.sc = !1),
        ((this || t)._mdf.fc = !1),
        ((this || t)._mdf.m = !1),
        ((this || t)._mdf.p = !1);
      var l = !1;
      return (
        (this || t).o !== e &&
          (((this || t).o = e), ((this || t)._mdf.o = !0), (l = !0)),
        (this || t).sw !== r &&
          (((this || t).sw = r), ((this || t)._mdf.sw = !0), (l = !0)),
        (this || t).sc !== i &&
          (((this || t).sc = i), ((this || t)._mdf.sc = !0), (l = !0)),
        (this || t).fc !== s &&
          (((this || t).fc = s), ((this || t)._mdf.fc = !0), (l = !0)),
        (this || t).m !== a &&
          (((this || t).m = a), ((this || t)._mdf.m = !0), (l = !0)),
        n.length &&
          ((this || t).p[0] !== n[0] ||
            (this || t).p[1] !== n[1] ||
            (this || t).p[4] !== n[4] ||
            (this || t).p[5] !== n[5] ||
            (this || t).p[12] !== n[12] ||
            (this || t).p[13] !== n[13]) &&
          (((this || t).p = n), ((this || t)._mdf.p = !0), (l = !0)),
        l
      );
    };
    function TextProperty(e, r) {
      ((this || t)._frameId = initialDefaultFrame),
        ((this || t).pv = ""),
        ((this || t).v = ""),
        ((this || t).kf = !1),
        ((this || t)._isFirstFrame = !0),
        ((this || t)._mdf = !1),
        ((this || t).data = r),
        ((this || t).elem = e),
        ((this || t).comp = (this || t).elem.comp),
        ((this || t).keysIndex = 0),
        ((this || t).canResize = !1),
        ((this || t).minimumFontSize = 1),
        ((this || t).effectsSequence = []),
        ((this || t).currentData = {
          ascent: 0,
          boxWidth: (this || t).defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1,
        }),
        this.copyData((this || t).currentData, (this || t).data.d.k[0].s),
        this.searchProperty() || this.completeTextData((this || t).currentData);
    }
    (TextProperty.prototype.defaultBoxWidth = [0, 0]),
      (TextProperty.prototype.copyData = function (e, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        return e;
      }),
      (TextProperty.prototype.setCurrentData = function (e) {
        e.__complete || this.completeTextData(e),
          ((this || t).currentData = e),
          ((this || t).currentData.boxWidth =
            (this || t).currentData.boxWidth || (this || t).defaultBoxWidth),
          ((this || t)._mdf = !0);
      }),
      (TextProperty.prototype.searchProperty = function () {
        return this.searchKeyframes();
      }),
      (TextProperty.prototype.searchKeyframes = function () {
        return (
          ((this || t).kf = (this || t).data.d.k.length > 1),
          (this || t).kf &&
            this.addEffect((this || t).getKeyframeValue.bind(this || t)),
          (this || t).kf
        );
      }),
      (TextProperty.prototype.addEffect = function (e) {
        (this || t).effectsSequence.push(e),
          (this || t).elem.addDynamicProperty(this || t);
      }),
      (TextProperty.prototype.getValue = function (e) {
        if (
          !(
            ((this || t).elem.globalData.frameId === (this || t).frameId ||
              !(this || t).effectsSequence.length) &&
            !e
          )
        ) {
          (this || t).currentData.t = (this || t).data.d.k[
            (this || t).keysIndex
          ].s.t;
          var r = (this || t).currentData,
            i = (this || t).keysIndex;
          if ((this || t).lock) {
            this.setCurrentData((this || t).currentData);
            return;
          }
          ((this || t).lock = !0), ((this || t)._mdf = !1);
          var s,
            a = (this || t).effectsSequence.length,
            n = e || (this || t).data.d.k[(this || t).keysIndex].s;
          for (s = 0; s < a; s += 1)
            i !== (this || t).keysIndex
              ? (n = (this || t).effectsSequence[s](n, n.t))
              : (n = (this || t).effectsSequence[s](
                  (this || t).currentData,
                  n.t
                ));
          r !== n && this.setCurrentData(n),
            ((this || t).v = (this || t).currentData),
            ((this || t).pv = (this || t).v),
            ((this || t).lock = !1),
            ((this || t).frameId = (this || t).elem.globalData.frameId);
        }
      }),
      (TextProperty.prototype.getKeyframeValue = function () {
        for (
          var e = (this || t).data.d.k,
            r = (this || t).elem.comp.renderedFrame,
            i = 0,
            s = e.length;
          i <= s - 1 && !(i === s - 1 || e[i + 1].t > r);

        )
          i += 1;
        return (
          (this || t).keysIndex !== i && ((this || t).keysIndex = i),
          (this || t).data.d.k[(this || t).keysIndex].s
        );
      }),
      (TextProperty.prototype.buildFinalText = function (e) {
        for (
          var r = FontManager.getCombinedCharacterCodes(),
            i = [],
            s = 0,
            a = e.length,
            n;
          s < a;

        )
          (n = e.charCodeAt(s)),
            r.indexOf(n) !== -1
              ? (i[i.length - 1] += e.charAt(s))
              : n >= 55296 && n <= 56319
              ? ((n = e.charCodeAt(s + 1)),
                n >= 56320 && n <= 57343
                  ? (i.push(e.substr(s, 2)), (s += 1))
                  : i.push(e.charAt(s)))
              : i.push(e.charAt(s)),
            (s += 1);
        return i;
      }),
      (TextProperty.prototype.completeTextData = function (e) {
        e.__complete = !0;
        var r = (this || t).elem.globalData.fontManager,
          i = (this || t).data,
          s = [],
          a,
          n,
          l,
          v = 0,
          y,
          g = i.m.g,
          P = 0,
          S = 0,
          u = 0,
          d = [],
          C = 0,
          f = 0,
          p,
          c,
          o = r.getFontByName(e.f),
          h,
          m = 0,
          b = getFontProperties(o);
        (e.fWeight = b.weight),
          (e.fStyle = b.style),
          (e.finalSize = e.s),
          (e.finalText = this.buildFinalText(e.t)),
          (n = e.finalText.length),
          (e.finalLineHeight = e.lh);
        var A = (e.tr / 1e3) * e.finalSize,
          x;
        if (e.sz)
          for (var _ = !0, k = e.sz[0], w = e.sz[1], R, V; _; ) {
            (V = this.buildFinalText(e.t)),
              (R = 0),
              (C = 0),
              (n = V.length),
              (A = (e.tr / 1e3) * e.finalSize);
            var B = -1;
            for (a = 0; a < n; a += 1)
              (x = V[a].charCodeAt(0)),
                (l = !1),
                V[a] === " "
                  ? (B = a)
                  : (x === 13 || x === 3) &&
                    ((C = 0),
                    (l = !0),
                    (R += e.finalLineHeight || e.finalSize * 1.2)),
                r.chars
                  ? ((h = r.getCharData(V[a], o.fStyle, o.fFamily)),
                    (m = l ? 0 : (h.w * e.finalSize) / 100))
                  : (m = r.measureText(V[a], e.f, e.finalSize)),
                C + m > k && V[a] !== " "
                  ? (B === -1 ? (n += 1) : (a = B),
                    (R += e.finalLineHeight || e.finalSize * 1.2),
                    V.splice(a, B === a ? 1 : 0, "\r"),
                    (B = -1),
                    (C = 0))
                  : ((C += m), (C += A));
            (R += (o.ascent * e.finalSize) / 100),
              (this || t).canResize &&
              e.finalSize > (this || t).minimumFontSize &&
              w < R
                ? ((e.finalSize -= 1),
                  (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                : ((e.finalText = V), (n = e.finalText.length), (_ = !1));
          }
        (C = -A), (m = 0);
        var L = 0,
          O;
        for (a = 0; a < n; a += 1)
          if (
            ((l = !1),
            (O = e.finalText[a]),
            (x = O.charCodeAt(0)),
            x === 13 || x === 3
              ? ((L = 0),
                d.push(C),
                (f = C > f ? C : f),
                (C = -2 * A),
                (y = ""),
                (l = !0),
                (u += 1))
              : (y = O),
            r.chars
              ? ((h = r.getCharData(O, o.fStyle, r.getFontByName(e.f).fFamily)),
                (m = l ? 0 : (h.w * e.finalSize) / 100))
              : (m = r.measureText(y, e.f, e.finalSize)),
            O === " " ? (L += m + A) : ((C += m + A + L), (L = 0)),
            s.push({
              l: m,
              an: m,
              add: P,
              n: l,
              anIndexes: [],
              val: y,
              line: u,
              animatorJustifyOffset: 0,
            }),
            g == 2)
          ) {
            if (((P += m), y === "" || y === " " || a === n - 1)) {
              for ((y === "" || y === " ") && (P -= m); S <= a; )
                (s[S].an = P), (s[S].ind = v), (s[S].extra = m), (S += 1);
              (v += 1), (P = 0);
            }
          } else if (g == 3) {
            if (((P += m), y === "" || a === n - 1)) {
              for (y === "" && (P -= m); S <= a; )
                (s[S].an = P), (s[S].ind = v), (s[S].extra = m), (S += 1);
              (P = 0), (v += 1);
            }
          } else (s[v].ind = v), (s[v].extra = 0), (v += 1);
        if (((e.l = s), (f = C > f ? C : f), d.push(C), e.sz))
          (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
        else
          switch (((e.boxWidth = f), e.j)) {
            case 1:
              e.justifyOffset = -e.boxWidth;
              break;
            case 2:
              e.justifyOffset = -e.boxWidth / 2;
              break;
            default:
              e.justifyOffset = 0;
          }
        e.lineWidths = d;
        var M = i.a,
          T,
          E;
        c = M.length;
        var F,
          D,
          I = [];
        for (p = 0; p < c; p += 1) {
          for (
            T = M[p],
              T.a.sc && (e.strokeColorAnim = !0),
              T.a.sw && (e.strokeWidthAnim = !0),
              (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (e.fillColorAnim = !0),
              D = 0,
              F = T.s.b,
              a = 0;
            a < n;
            a += 1
          )
            (E = s[a]),
              (E.anIndexes[p] = D),
              ((F == 1 && E.val !== "") ||
                (F == 2 && E.val !== "" && E.val !== " ") ||
                (F == 3 && (E.n || E.val == " " || a == n - 1)) ||
                (F == 4 && (E.n || a == n - 1))) &&
                (T.s.rn === 1 && I.push(D), (D += 1));
          i.a[p].s.totalChars = D;
          var N = -1,
            z;
          if (T.s.rn === 1)
            for (a = 0; a < n; a += 1)
              (E = s[a]),
                N != E.anIndexes[p] &&
                  ((N = E.anIndexes[p]),
                  (z = I.splice(Math.floor(Math.random() * I.length), 1)[0])),
                (E.anIndexes[p] = z);
        }
        (e.yOffset = e.finalLineHeight || e.finalSize * 1.2),
          (e.ls = e.ls || 0),
          (e.ascent = (o.ascent * e.finalSize) / 100);
      }),
      (TextProperty.prototype.updateDocumentData = function (e, r) {
        r = r === void 0 ? (this || t).keysIndex : r;
        var i = this.copyData({}, (this || t).data.d.k[r].s);
        (i = this.copyData(i, e)),
          ((this || t).data.d.k[r].s = i),
          this.recalculate(r),
          (this || t).elem.addDynamicProperty(this || t);
      }),
      (TextProperty.prototype.recalculate = function (e) {
        var r = (this || t).data.d.k[e].s;
        (r.__complete = !1),
          ((this || t).keysIndex = 0),
          ((this || t)._isFirstFrame = !0),
          this.getValue(r);
      }),
      (TextProperty.prototype.canResizeFont = function (e) {
        ((this || t).canResize = e),
          this.recalculate((this || t).keysIndex),
          (this || t).elem.addDynamicProperty(this || t);
      }),
      (TextProperty.prototype.setMinimumFontSize = function (e) {
        ((this || t).minimumFontSize = Math.floor(e) || 1),
          this.recalculate((this || t).keysIndex),
          (this || t).elem.addDynamicProperty(this || t);
      });
    var TextSelectorProp = (function () {
        var e = Math.max,
          r = Math.min,
          i = Math.floor;
        function s(n, l) {
          ((this || t)._currentTextLength = -1),
            ((this || t).k = !1),
            ((this || t).data = l),
            ((this || t).elem = n),
            ((this || t).comp = n.comp),
            ((this || t).finalS = 0),
            ((this || t).finalE = 0),
            this.initDynamicPropertyContainer(n),
            ((this || t).s = PropertyFactory.getProp(
              n,
              l.s || { k: 0 },
              0,
              0,
              this || t
            )),
            "e" in l
              ? ((this || t).e = PropertyFactory.getProp(
                  n,
                  l.e,
                  0,
                  0,
                  this || t
                ))
              : ((this || t).e = { v: 100 }),
            ((this || t).o = PropertyFactory.getProp(
              n,
              l.o || { k: 0 },
              0,
              0,
              this || t
            )),
            ((this || t).xe = PropertyFactory.getProp(
              n,
              l.xe || { k: 0 },
              0,
              0,
              this || t
            )),
            ((this || t).ne = PropertyFactory.getProp(
              n,
              l.ne || { k: 0 },
              0,
              0,
              this || t
            )),
            ((this || t).a = PropertyFactory.getProp(
              n,
              l.a,
              0,
              0.01,
              this || t
            )),
            (this || t).dynamicProperties.length || this.getValue();
        }
        (s.prototype = {
          getMult: function (n) {
            (this || t)._currentTextLength !==
              (this || t).elem.textProperty.currentData.l.length &&
              this.getValue();
            var l = 0,
              v = 0,
              y = 1,
              g = 1;
            (this || t).ne.v > 0
              ? (l = (this || t).ne.v / 100)
              : (v = -(this || t).ne.v / 100),
              (this || t).xe.v > 0
                ? (y = 1 - (this || t).xe.v / 100)
                : (g = 1 + (this || t).xe.v / 100);
            var P = BezierFactory.getBezierEasing(l, v, y, g).get,
              S = 0,
              u = (this || t).finalS,
              d = (this || t).finalE,
              C = (this || t).data.sh;
            if (C === 2)
              d === u
                ? (S = n >= d ? 1 : 0)
                : (S = e(0, r(0.5 / (d - u) + (n - u) / (d - u), 1))),
                (S = P(S));
            else if (C === 3)
              d === u
                ? (S = n >= d ? 0 : 1)
                : (S = 1 - e(0, r(0.5 / (d - u) + (n - u) / (d - u), 1))),
                (S = P(S));
            else if (C === 4)
              d === u
                ? (S = 0)
                : ((S = e(0, r(0.5 / (d - u) + (n - u) / (d - u), 1))),
                  S < 0.5 ? (S *= 2) : (S = 1 - 2 * (S - 0.5))),
                (S = P(S));
            else if (C === 5) {
              if (d === u) S = 0;
              else {
                var f = d - u;
                n = r(e(0, n + 0.5 - u), d - u);
                var p = -f / 2 + n,
                  c = f / 2;
                S = Math.sqrt(1 - (p * p) / (c * c));
              }
              S = P(S);
            } else
              C === 6
                ? (d === u
                    ? (S = 0)
                    : ((n = r(e(0, n + 0.5 - u), d - u)),
                      (S =
                        (1 + Math.cos(Math.PI + (Math.PI * 2 * n) / (d - u))) /
                        2)),
                  (S = P(S)))
                : (n >= i(u) &&
                    (n - u < 0
                      ? (S = e(0, r(r(d, 1) - (u - n), 1)))
                      : (S = e(0, r(d - n, 1)))),
                  (S = P(S)));
            return S * (this || t).a.v;
          },
          getValue: function (n) {
            this.iterateDynamicProperties(),
              ((this || t)._mdf = n || (this || t)._mdf),
              ((this || t)._currentTextLength =
                (this || t).elem.textProperty.currentData.l.length || 0),
              n &&
                (this || t).data.r === 2 &&
                ((this || t).e.v = (this || t)._currentTextLength);
            var l =
                (this || t).data.r === 2
                  ? 1
                  : 100 / (this || t).data.totalChars,
              v = (this || t).o.v / l,
              y = (this || t).s.v / l + v,
              g = (this || t).e.v / l + v;
            if (y > g) {
              var P = y;
              (y = g), (g = P);
            }
            ((this || t).finalS = y), ((this || t).finalE = g);
          },
        }),
          extendPrototype([DynamicPropertyContainer], s);
        function a(n, l, v) {
          return new s(n, l, v);
        }
        return { getTextSelectorProp: a };
      })(),
      poolFactory = (function () {
        return function (e, r, i) {
          var s = 0,
            a = e,
            n = createSizedArray(a),
            l = { newElement: v, release: y };
          function v() {
            var g;
            return s ? ((s -= 1), (g = n[s])) : (g = r()), g;
          }
          function y(g) {
            s === a && ((n = pooling.double(n)), (a *= 2)),
              i && i(g),
              (n[s] = g),
              (s += 1);
          }
          return l;
        };
      })(),
      pooling = (function () {
        function e(r) {
          return r.concat(createSizedArray(r.length));
        }
        return { double: e };
      })(),
      pointPool = (function () {
        function e() {
          return createTypedArray("float32", 2);
        }
        return poolFactory(8, e);
      })(),
      shapePool = (function () {
        function e() {
          return new ShapePath();
        }
        function r(a) {
          var n = a._length,
            l;
          for (l = 0; l < n; l += 1)
            pointPool.release(a.v[l]),
              pointPool.release(a.i[l]),
              pointPool.release(a.o[l]),
              (a.v[l] = null),
              (a.i[l] = null),
              (a.o[l] = null);
          (a._length = 0), (a.c = !1);
        }
        function i(a) {
          var n = s.newElement(),
            l,
            v = a._length === void 0 ? a.v.length : a._length;
          for (n.setLength(v), n.c = a.c, l = 0; l < v; l += 1)
            n.setTripleAt(
              a.v[l][0],
              a.v[l][1],
              a.o[l][0],
              a.o[l][1],
              a.i[l][0],
              a.i[l][1],
              l
            );
          return n;
        }
        var s = poolFactory(4, e, r);
        return (s.clone = i), s;
      })(),
      shapeCollectionPool = (function () {
        var e = { newShapeCollection: a, release: n },
          r = 0,
          i = 4,
          s = createSizedArray(i);
        function a() {
          var l;
          return r ? ((r -= 1), (l = s[r])) : (l = new ShapeCollection()), l;
        }
        function n(l) {
          var v,
            y = l._length;
          for (v = 0; v < y; v += 1) shapePool.release(l.shapes[v]);
          (l._length = 0),
            r === i && ((s = pooling.double(s)), (i *= 2)),
            (s[r] = l),
            (r += 1);
        }
        return e;
      })(),
      segmentsLengthPool = (function () {
        function e() {
          return { lengths: [], totalLength: 0 };
        }
        function r(i) {
          var s,
            a = i.lengths.length;
          for (s = 0; s < a; s += 1) bezierLengthPool.release(i.lengths[s]);
          i.lengths.length = 0;
        }
        return poolFactory(8, e, r);
      })(),
      bezierLengthPool = (function () {
        function e() {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", defaultCurveSegments),
            lengths: createTypedArray("float32", defaultCurveSegments),
          };
        }
        return poolFactory(8, e);
      })(),
      markerParser = (function () {
        function e(r) {
          for (
            var i = r.split(`\r
`),
              s = {},
              a,
              n = 0,
              l = 0;
            l < i.length;
            l += 1
          )
            (a = i[l].split(":")),
              a.length === 2 && ((s[a[0]] = a[1].trim()), (n += 1));
          if (n === 0) throw new Error();
          return s;
        }
        return function (r) {
          for (var i = [], s = 0; s < r.length; s += 1) {
            var a = r[s],
              n = { time: a.tm, duration: a.dr };
            try {
              n.payload = JSON.parse(r[s].cm);
            } catch {
              try {
                n.payload = e(r[s].cm);
              } catch {
                n.payload = { name: r[s] };
              }
            }
            i.push(n);
          }
          return i;
        };
      })();
    function BaseRenderer() {}
    (BaseRenderer.prototype.checkLayers = function (e) {
      var r,
        i = (this || t).layers.length,
        s;
      for ((this || t).completeLayers = !0, r = i - 1; r >= 0; r -= 1)
        (this || t).elements[r] ||
          ((s = (this || t).layers[r]),
          s.ip - s.st <= e - (this || t).layers[r].st &&
            s.op - s.st > e - (this || t).layers[r].st &&
            this.buildItem(r)),
          ((this || t).completeLayers = (this || t).elements[r]
            ? (this || t).completeLayers
            : !1);
      this.checkPendingElements();
    }),
      (BaseRenderer.prototype.createItem = function (e) {
        switch (e.ty) {
          case 2:
            return this.createImage(e);
          case 0:
            return this.createComp(e);
          case 1:
            return this.createSolid(e);
          case 3:
            return this.createNull(e);
          case 4:
            return this.createShape(e);
          case 5:
            return this.createText(e);
          case 6:
            return this.createAudio(e);
          case 13:
            return this.createCamera(e);
          case 15:
            return this.createFootage(e);
          default:
            return this.createNull(e);
        }
      }),
      (BaseRenderer.prototype.createCamera = function () {
        throw new Error("You're using a 3d camera. Try the html renderer.");
      }),
      (BaseRenderer.prototype.createAudio = function (e) {
        return new AudioElement(e, (this || t).globalData, this || t);
      }),
      (BaseRenderer.prototype.createFootage = function (e) {
        return new FootageElement(e, (this || t).globalData, this || t);
      }),
      (BaseRenderer.prototype.buildAllItems = function () {
        var e,
          r = (this || t).layers.length;
        for (e = 0; e < r; e += 1) this.buildItem(e);
        this.checkPendingElements();
      }),
      (BaseRenderer.prototype.includeLayers = function (e) {
        (this || t).completeLayers = !1;
        var r,
          i = e.length,
          s,
          a = (this || t).layers.length;
        for (r = 0; r < i; r += 1)
          for (s = 0; s < a; ) {
            if ((this || t).layers[s].id === e[r].id) {
              (this || t).layers[s] = e[r];
              break;
            }
            s += 1;
          }
      }),
      (BaseRenderer.prototype.setProjectInterface = function (e) {
        (this || t).globalData.projectInterface = e;
      }),
      (BaseRenderer.prototype.initItems = function () {
        (this || t).globalData.progressiveLoad || this.buildAllItems();
      }),
      (BaseRenderer.prototype.buildElementParenting = function (e, r, i) {
        for (
          var s = (this || t).elements,
            a = (this || t).layers,
            n = 0,
            l = a.length;
          n < l;

        )
          a[n].ind == r &&
            (!s[n] || s[n] === !0
              ? (this.buildItem(n), this.addPendingElement(e))
              : (i.push(s[n]),
                s[n].setAsParent(),
                a[n].parent !== void 0
                  ? this.buildElementParenting(e, a[n].parent, i)
                  : e.setHierarchy(i))),
            (n += 1);
      }),
      (BaseRenderer.prototype.addPendingElement = function (e) {
        (this || t).pendingElements.push(e);
      }),
      (BaseRenderer.prototype.searchExtraCompositions = function (e) {
        var r,
          i = e.length;
        for (r = 0; r < i; r += 1)
          if (e[r].xt) {
            var s = this.createComp(e[r]);
            s.initExpressions(),
              (this || t).globalData.projectInterface.registerComposition(s);
          }
      }),
      (BaseRenderer.prototype.setupGlobalData = function (e, r) {
        ((this || t).globalData.fontManager = new FontManager()),
          (this || t).globalData.fontManager.addChars(e.chars),
          (this || t).globalData.fontManager.addFonts(e.fonts, r),
          ((this || t).globalData.getAssetData = (
            this || t
          ).animationItem.getAssetData.bind((this || t).animationItem)),
          ((this || t).globalData.getAssetsPath = (
            this || t
          ).animationItem.getAssetsPath.bind((this || t).animationItem)),
          ((this || t).globalData.imageLoader = (
            this || t
          ).animationItem.imagePreloader),
          ((this || t).globalData.audioController = (
            this || t
          ).animationItem.audioController),
          ((this || t).globalData.frameId = 0),
          ((this || t).globalData.frameRate = e.fr),
          ((this || t).globalData.nm = e.nm),
          ((this || t).globalData.compSize = { w: e.w, h: e.h });
      });
    function SVGRenderer(e, r) {
      ((this || t).animationItem = e),
        ((this || t).layers = null),
        ((this || t).renderedFrame = -1),
        ((this || t).svgElement = createNS("svg"));
      var i = "";
      if (r && r.title) {
        var s = createNS("title"),
          a = createElementID();
        s.setAttribute("id", a),
          (s.textContent = r.title),
          (this || t).svgElement.appendChild(s),
          (i += a);
      }
      if (r && r.description) {
        var n = createNS("desc"),
          l = createElementID();
        n.setAttribute("id", l),
          (n.textContent = r.description),
          (this || t).svgElement.appendChild(n),
          (i += " " + l);
      }
      i && (this || t).svgElement.setAttribute("aria-labelledby", i);
      var v = createNS("defs");
      (this || t).svgElement.appendChild(v);
      var y = createNS("g");
      (this || t).svgElement.appendChild(y),
        ((this || t).layerElement = y),
        ((this || t).renderConfig = {
          preserveAspectRatio: (r && r.preserveAspectRatio) || "xMidYMid meet",
          imagePreserveAspectRatio:
            (r && r.imagePreserveAspectRatio) || "xMidYMid slice",
          progressiveLoad: (r && r.progressiveLoad) || !1,
          hideOnTransparent: !(r && r.hideOnTransparent === !1),
          viewBoxOnly: (r && r.viewBoxOnly) || !1,
          viewBoxSize: (r && r.viewBoxSize) || !1,
          className: (r && r.className) || "",
          id: (r && r.id) || "",
          focusable: r && r.focusable,
          filterSize: {
            width: (r && r.filterSize && r.filterSize.width) || "100%",
            height: (r && r.filterSize && r.filterSize.height) || "100%",
            x: (r && r.filterSize && r.filterSize.x) || "0%",
            y: (r && r.filterSize && r.filterSize.y) || "0%",
          },
        }),
        ((this || t).globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: v,
          renderConfig: (this || t).renderConfig,
        }),
        ((this || t).elements = []),
        ((this || t).pendingElements = []),
        ((this || t).destroyed = !1),
        ((this || t).rendererType = "svg");
    }
    extendPrototype([BaseRenderer], SVGRenderer),
      (SVGRenderer.prototype.createNull = function (e) {
        return new NullElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.createShape = function (e) {
        return new SVGShapeElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.createText = function (e) {
        return new SVGTextLottieElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.createImage = function (e) {
        return new IImageElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.createComp = function (e) {
        return new SVGCompElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.createSolid = function (e) {
        return new ISolidElement(e, (this || t).globalData, this || t);
      }),
      (SVGRenderer.prototype.configAnimation = function (e) {
        (this || t).svgElement.setAttribute(
          "xmlns",
          "http://www.w3.org/2000/svg"
        ),
          (this || t).renderConfig.viewBoxSize
            ? (this || t).svgElement.setAttribute(
                "viewBox",
                (this || t).renderConfig.viewBoxSize
              )
            : (this || t).svgElement.setAttribute(
                "viewBox",
                "0 0 " + e.w + " " + e.h
              ),
          (this || t).renderConfig.viewBoxOnly ||
            ((this || t).svgElement.setAttribute("width", e.w),
            (this || t).svgElement.setAttribute("height", e.h),
            ((this || t).svgElement.style.width = "100%"),
            ((this || t).svgElement.style.height = "100%"),
            ((this || t).svgElement.style.transform = "translate3d(0,0,0)")),
          (this || t).renderConfig.className &&
            (this || t).svgElement.setAttribute(
              "class",
              (this || t).renderConfig.className
            ),
          (this || t).renderConfig.id &&
            (this || t).svgElement.setAttribute(
              "id",
              (this || t).renderConfig.id
            ),
          (this || t).renderConfig.focusable !== void 0 &&
            (this || t).svgElement.setAttribute(
              "focusable",
              (this || t).renderConfig.focusable
            ),
          (this || t).svgElement.setAttribute(
            "preserveAspectRatio",
            (this || t).renderConfig.preserveAspectRatio
          ),
          (this || t).animationItem.wrapper.appendChild((this || t).svgElement);
        var r = (this || t).globalData.defs;
        this.setupGlobalData(e, r),
          ((this || t).globalData.progressiveLoad = (
            this || t
          ).renderConfig.progressiveLoad),
          ((this || t).data = e);
        var i = createNS("clipPath"),
          s = createNS("rect");
        s.setAttribute("width", e.w),
          s.setAttribute("height", e.h),
          s.setAttribute("x", 0),
          s.setAttribute("y", 0);
        var a = createElementID();
        i.setAttribute("id", a),
          i.appendChild(s),
          (this || t).layerElement.setAttribute(
            "clip-path",
            "url(" + locationHref + "#" + a + ")"
          ),
          r.appendChild(i),
          ((this || t).layers = e.layers),
          ((this || t).elements = createSizedArray(e.layers.length));
      }),
      (SVGRenderer.prototype.destroy = function () {
        (this || t).animationItem.wrapper &&
          ((this || t).animationItem.wrapper.innerText = ""),
          ((this || t).layerElement = null),
          ((this || t).globalData.defs = null);
        var e,
          r = (this || t).layers ? (this || t).layers.length : 0;
        for (e = 0; e < r; e += 1)
          (this || t).elements[e] && (this || t).elements[e].destroy();
        ((this || t).elements.length = 0),
          ((this || t).destroyed = !0),
          ((this || t).animationItem = null);
      }),
      (SVGRenderer.prototype.updateContainerSize = function () {}),
      (SVGRenderer.prototype.buildItem = function (e) {
        var r = (this || t).elements;
        if (!(r[e] || (this || t).layers[e].ty === 99)) {
          r[e] = !0;
          var i = this.createItem((this || t).layers[e]);
          (r[e] = i),
            expressionsPlugin &&
              ((this || t).layers[e].ty === 0 &&
                (this || t).globalData.projectInterface.registerComposition(i),
              i.initExpressions()),
            this.appendElementInPos(i, e),
            (this || t).layers[e].tt &&
              (!(this || t).elements[e - 1] ||
              (this || t).elements[e - 1] === !0
                ? (this.buildItem(e - 1), this.addPendingElement(i))
                : i.setMatte(r[e - 1].layerId));
        }
      }),
      (SVGRenderer.prototype.checkPendingElements = function () {
        for (; (this || t).pendingElements.length; ) {
          var e = (this || t).pendingElements.pop();
          if ((e.checkParenting(), e.data.tt))
            for (var r = 0, i = (this || t).elements.length; r < i; ) {
              if ((this || t).elements[r] === e) {
                e.setMatte((this || t).elements[r - 1].layerId);
                break;
              }
              r += 1;
            }
        }
      }),
      (SVGRenderer.prototype.renderFrame = function (e) {
        if (!((this || t).renderedFrame === e || (this || t).destroyed)) {
          e === null
            ? (e = (this || t).renderedFrame)
            : ((this || t).renderedFrame = e),
            ((this || t).globalData.frameNum = e),
            ((this || t).globalData.frameId += 1),
            ((this || t).globalData.projectInterface.currentFrame = e),
            ((this || t).globalData._mdf = !1);
          var r,
            i = (this || t).layers.length;
          for (
            (this || t).completeLayers || this.checkLayers(e), r = i - 1;
            r >= 0;
            r -= 1
          )
            ((this || t).completeLayers || (this || t).elements[r]) &&
              (this || t).elements[r].prepareFrame(
                e - (this || t).layers[r].st
              );
          if ((this || t).globalData._mdf)
            for (r = 0; r < i; r += 1)
              ((this || t).completeLayers || (this || t).elements[r]) &&
                (this || t).elements[r].renderFrame();
        }
      }),
      (SVGRenderer.prototype.appendElementInPos = function (e, r) {
        var i = e.getBaseElement();
        if (i) {
          for (var s = 0, a; s < r; )
            (this || t).elements[s] &&
              (this || t).elements[s] !== !0 &&
              (this || t).elements[s].getBaseElement() &&
              (a = (this || t).elements[s].getBaseElement()),
              (s += 1);
          a
            ? (this || t).layerElement.insertBefore(i, a)
            : (this || t).layerElement.appendChild(i);
        }
      }),
      (SVGRenderer.prototype.hide = function () {
        (this || t).layerElement.style.display = "none";
      }),
      (SVGRenderer.prototype.show = function () {
        (this || t).layerElement.style.display = "block";
      });
    function CanvasRenderer(e, r) {
      ((this || t).animationItem = e),
        ((this || t).renderConfig = {
          clearCanvas: r && r.clearCanvas !== void 0 ? r.clearCanvas : !0,
          context: (r && r.context) || null,
          progressiveLoad: (r && r.progressiveLoad) || !1,
          preserveAspectRatio: (r && r.preserveAspectRatio) || "xMidYMid meet",
          imagePreserveAspectRatio:
            (r && r.imagePreserveAspectRatio) || "xMidYMid slice",
          className: (r && r.className) || "",
          id: (r && r.id) || "",
        }),
        ((this || t).renderConfig.dpr = (r && r.dpr) || 1),
        (this || t).animationItem.wrapper &&
          ((this || t).renderConfig.dpr =
            (r && r.dpr) || window.devicePixelRatio || 1),
        ((this || t).renderedFrame = -1),
        ((this || t).globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: (this || t).renderConfig,
          currentGlobalAlpha: -1,
        }),
        ((this || t).contextData = new CVContextData()),
        ((this || t).elements = []),
        ((this || t).pendingElements = []),
        ((this || t).transformMat = new Matrix()),
        ((this || t).completeLayers = !1),
        ((this || t).rendererType = "canvas");
    }
    extendPrototype([BaseRenderer], CanvasRenderer),
      (CanvasRenderer.prototype.createShape = function (e) {
        return new CVShapeElement(e, (this || t).globalData, this || t);
      }),
      (CanvasRenderer.prototype.createText = function (e) {
        return new CVTextElement(e, (this || t).globalData, this || t);
      }),
      (CanvasRenderer.prototype.createImage = function (e) {
        return new CVImageElement(e, (this || t).globalData, this || t);
      }),
      (CanvasRenderer.prototype.createComp = function (e) {
        return new CVCompElement(e, (this || t).globalData, this || t);
      }),
      (CanvasRenderer.prototype.createSolid = function (e) {
        return new CVSolidElement(e, (this || t).globalData, this || t);
      }),
      (CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
      (CanvasRenderer.prototype.ctxTransform = function (e) {
        if (
          !(
            e[0] === 1 &&
            e[1] === 0 &&
            e[4] === 0 &&
            e[5] === 1 &&
            e[12] === 0 &&
            e[13] === 0
          )
        ) {
          if (!(this || t).renderConfig.clearCanvas) {
            (this || t).canvasContext.transform(
              e[0],
              e[1],
              e[4],
              e[5],
              e[12],
              e[13]
            );
            return;
          }
          (this || t).transformMat.cloneFromProps(e);
          var r = (this || t).contextData.cTr.props;
          (this || t).transformMat.transform(
            r[0],
            r[1],
            r[2],
            r[3],
            r[4],
            r[5],
            r[6],
            r[7],
            r[8],
            r[9],
            r[10],
            r[11],
            r[12],
            r[13],
            r[14],
            r[15]
          ),
            (this || t).contextData.cTr.cloneFromProps(
              (this || t).transformMat.props
            );
          var i = (this || t).contextData.cTr.props;
          (this || t).canvasContext.setTransform(
            i[0],
            i[1],
            i[4],
            i[5],
            i[12],
            i[13]
          );
        }
      }),
      (CanvasRenderer.prototype.ctxOpacity = function (e) {
        if (!(this || t).renderConfig.clearCanvas) {
          ((this || t).canvasContext.globalAlpha *= e < 0 ? 0 : e),
            ((this || t).globalData.currentGlobalAlpha = (
              this || t
            ).contextData.cO);
          return;
        }
        ((this || t).contextData.cO *= e < 0 ? 0 : e),
          (this || t).globalData.currentGlobalAlpha !==
            (this || t).contextData.cO &&
            (((this || t).canvasContext.globalAlpha = (
              this || t
            ).contextData.cO),
            ((this || t).globalData.currentGlobalAlpha = (
              this || t
            ).contextData.cO));
      }),
      (CanvasRenderer.prototype.reset = function () {
        if (!(this || t).renderConfig.clearCanvas) {
          (this || t).canvasContext.restore();
          return;
        }
        (this || t).contextData.reset();
      }),
      (CanvasRenderer.prototype.save = function (e) {
        if (!(this || t).renderConfig.clearCanvas) {
          (this || t).canvasContext.save();
          return;
        }
        e && (this || t).canvasContext.save();
        var r = (this || t).contextData.cTr.props;
        (this || t).contextData._length <= (this || t).contextData.cArrPos &&
          (this || t).contextData.duplicate();
        var i,
          s = (this || t).contextData.saved[(this || t).contextData.cArrPos];
        for (i = 0; i < 16; i += 1) s[i] = r[i];
        ((this || t).contextData.savedOp[(this || t).contextData.cArrPos] = (
          this || t
        ).contextData.cO),
          ((this || t).contextData.cArrPos += 1);
      }),
      (CanvasRenderer.prototype.restore = function (e) {
        if (!(this || t).renderConfig.clearCanvas) {
          (this || t).canvasContext.restore();
          return;
        }
        e &&
          ((this || t).canvasContext.restore(),
          ((this || t).globalData.blendMode = "source-over")),
          ((this || t).contextData.cArrPos -= 1);
        var r = (this || t).contextData.saved[(this || t).contextData.cArrPos],
          i,
          s = (this || t).contextData.cTr.props;
        for (i = 0; i < 16; i += 1) s[i] = r[i];
        (this || t).canvasContext.setTransform(
          r[0],
          r[1],
          r[4],
          r[5],
          r[12],
          r[13]
        ),
          (r = (this || t).contextData.savedOp[
            (this || t).contextData.cArrPos
          ]),
          ((this || t).contextData.cO = r),
          (this || t).globalData.currentGlobalAlpha !== r &&
            (((this || t).canvasContext.globalAlpha = r),
            ((this || t).globalData.currentGlobalAlpha = r));
      }),
      (CanvasRenderer.prototype.configAnimation = function (e) {
        if ((this || t).animationItem.wrapper) {
          (this || t).animationItem.container = createTag("canvas");
          var r = (this || t).animationItem.container.style;
          (r.width = "100%"), (r.height = "100%");
          var i = "0px 0px 0px";
          (r.transformOrigin = i),
            (r.mozTransformOrigin = i),
            (r.webkitTransformOrigin = i),
            (r["-webkit-transform"] = i),
            (this || t).animationItem.wrapper.appendChild(
              (this || t).animationItem.container
            ),
            ((this || t).canvasContext = (
              this || t
            ).animationItem.container.getContext("2d")),
            (this || t).renderConfig.className &&
              (this || t).animationItem.container.setAttribute(
                "class",
                (this || t).renderConfig.className
              ),
            (this || t).renderConfig.id &&
              (this || t).animationItem.container.setAttribute(
                "id",
                (this || t).renderConfig.id
              );
        } else (this || t).canvasContext = (this || t).renderConfig.context;
        ((this || t).data = e),
          ((this || t).layers = e.layers),
          ((this || t).transformCanvas = {
            w: e.w,
            h: e.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0,
          }),
          this.setupGlobalData(e, document.body),
          ((this || t).globalData.canvasContext = (this || t).canvasContext),
          ((this || t).globalData.renderer = this || t),
          ((this || t).globalData.isDashed = !1),
          ((this || t).globalData.progressiveLoad = (
            this || t
          ).renderConfig.progressiveLoad),
          ((this || t).globalData.transformCanvas = (
            this || t
          ).transformCanvas),
          ((this || t).elements = createSizedArray(e.layers.length)),
          this.updateContainerSize();
      }),
      (CanvasRenderer.prototype.updateContainerSize = function () {
        this.reset();
        var e, r;
        (this || t).animationItem.wrapper && (this || t).animationItem.container
          ? ((e = (this || t).animationItem.wrapper.offsetWidth),
            (r = (this || t).animationItem.wrapper.offsetHeight),
            (this || t).animationItem.container.setAttribute(
              "width",
              e * (this || t).renderConfig.dpr
            ),
            (this || t).animationItem.container.setAttribute(
              "height",
              r * (this || t).renderConfig.dpr
            ))
          : ((e =
              (this || t).canvasContext.canvas.width *
              (this || t).renderConfig.dpr),
            (r =
              (this || t).canvasContext.canvas.height *
              (this || t).renderConfig.dpr));
        var i, s;
        if (
          (this || t).renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
          (this || t).renderConfig.preserveAspectRatio.indexOf("slice") !== -1
        ) {
          var a = (this || t).renderConfig.preserveAspectRatio.split(" "),
            n = a[1] || "meet",
            l = a[0] || "xMidYMid",
            v = l.substr(0, 4),
            y = l.substr(4);
          (i = e / r),
            (s = (this || t).transformCanvas.w / (this || t).transformCanvas.h),
            (s > i && n === "meet") || (s < i && n === "slice")
              ? (((this || t).transformCanvas.sx =
                  e /
                  ((this || t).transformCanvas.w /
                    (this || t).renderConfig.dpr)),
                ((this || t).transformCanvas.sy =
                  e /
                  ((this || t).transformCanvas.w /
                    (this || t).renderConfig.dpr)))
              : (((this || t).transformCanvas.sx =
                  r /
                  ((this || t).transformCanvas.h /
                    (this || t).renderConfig.dpr)),
                ((this || t).transformCanvas.sy =
                  r /
                  ((this || t).transformCanvas.h /
                    (this || t).renderConfig.dpr))),
            v === "xMid" &&
            ((s < i && n === "meet") || (s > i && n === "slice"))
              ? ((this || t).transformCanvas.tx =
                  ((e -
                    (this || t).transformCanvas.w *
                      (r / (this || t).transformCanvas.h)) /
                    2) *
                  (this || t).renderConfig.dpr)
              : v === "xMax" &&
                ((s < i && n === "meet") || (s > i && n === "slice"))
              ? ((this || t).transformCanvas.tx =
                  (e -
                    (this || t).transformCanvas.w *
                      (r / (this || t).transformCanvas.h)) *
                  (this || t).renderConfig.dpr)
              : ((this || t).transformCanvas.tx = 0),
            y === "YMid" &&
            ((s > i && n === "meet") || (s < i && n === "slice"))
              ? ((this || t).transformCanvas.ty =
                  ((r -
                    (this || t).transformCanvas.h *
                      (e / (this || t).transformCanvas.w)) /
                    2) *
                  (this || t).renderConfig.dpr)
              : y === "YMax" &&
                ((s > i && n === "meet") || (s < i && n === "slice"))
              ? ((this || t).transformCanvas.ty =
                  (r -
                    (this || t).transformCanvas.h *
                      (e / (this || t).transformCanvas.w)) *
                  (this || t).renderConfig.dpr)
              : ((this || t).transformCanvas.ty = 0);
        } else
          (this || t).renderConfig.preserveAspectRatio === "none"
            ? (((this || t).transformCanvas.sx =
                e /
                ((this || t).transformCanvas.w / (this || t).renderConfig.dpr)),
              ((this || t).transformCanvas.sy =
                r /
                ((this || t).transformCanvas.h / (this || t).renderConfig.dpr)),
              ((this || t).transformCanvas.tx = 0),
              ((this || t).transformCanvas.ty = 0))
            : (((this || t).transformCanvas.sx = (this || t).renderConfig.dpr),
              ((this || t).transformCanvas.sy = (this || t).renderConfig.dpr),
              ((this || t).transformCanvas.tx = 0),
              ((this || t).transformCanvas.ty = 0));
        ((this || t).transformCanvas.props = [
          (this || t).transformCanvas.sx,
          0,
          0,
          0,
          0,
          (this || t).transformCanvas.sy,
          0,
          0,
          0,
          0,
          1,
          0,
          (this || t).transformCanvas.tx,
          (this || t).transformCanvas.ty,
          0,
          1,
        ]),
          this.ctxTransform((this || t).transformCanvas.props),
          (this || t).canvasContext.beginPath(),
          (this || t).canvasContext.rect(
            0,
            0,
            (this || t).transformCanvas.w,
            (this || t).transformCanvas.h
          ),
          (this || t).canvasContext.closePath(),
          (this || t).canvasContext.clip(),
          this.renderFrame((this || t).renderedFrame, !0);
      }),
      (CanvasRenderer.prototype.destroy = function () {
        (this || t).renderConfig.clearCanvas &&
          (this || t).animationItem.wrapper &&
          ((this || t).animationItem.wrapper.innerText = "");
        var e,
          r = (this || t).layers ? (this || t).layers.length : 0;
        for (e = r - 1; e >= 0; e -= 1)
          (this || t).elements[e] && (this || t).elements[e].destroy();
        ((this || t).elements.length = 0),
          ((this || t).globalData.canvasContext = null),
          ((this || t).animationItem.container = null),
          ((this || t).destroyed = !0);
      }),
      (CanvasRenderer.prototype.renderFrame = function (e, r) {
        if (
          !(
            ((this || t).renderedFrame === e &&
              (this || t).renderConfig.clearCanvas === !0 &&
              !r) ||
            (this || t).destroyed ||
            e === -1
          )
        ) {
          ((this || t).renderedFrame = e),
            ((this || t).globalData.frameNum =
              e - (this || t).animationItem._isFirstFrame),
            ((this || t).globalData.frameId += 1),
            ((this || t).globalData._mdf =
              !(this || t).renderConfig.clearCanvas || r),
            ((this || t).globalData.projectInterface.currentFrame = e);
          var i,
            s = (this || t).layers.length;
          for (
            (this || t).completeLayers || this.checkLayers(e), i = 0;
            i < s;
            i += 1
          )
            ((this || t).completeLayers || (this || t).elements[i]) &&
              (this || t).elements[i].prepareFrame(
                e - (this || t).layers[i].st
              );
          if ((this || t).globalData._mdf) {
            for (
              (this || t).renderConfig.clearCanvas === !0
                ? (this || t).canvasContext.clearRect(
                    0,
                    0,
                    (this || t).transformCanvas.w,
                    (this || t).transformCanvas.h
                  )
                : this.save(),
                i = s - 1;
              i >= 0;
              i -= 1
            )
              ((this || t).completeLayers || (this || t).elements[i]) &&
                (this || t).elements[i].renderFrame();
            (this || t).renderConfig.clearCanvas !== !0 && this.restore();
          }
        }
      }),
      (CanvasRenderer.prototype.buildItem = function (e) {
        var r = (this || t).elements;
        if (!(r[e] || (this || t).layers[e].ty === 99)) {
          var i = this.createItem(
            (this || t).layers[e],
            this || t,
            (this || t).globalData
          );
          (r[e] = i), i.initExpressions();
        }
      }),
      (CanvasRenderer.prototype.checkPendingElements = function () {
        for (; (this || t).pendingElements.length; ) {
          var e = (this || t).pendingElements.pop();
          e.checkParenting();
        }
      }),
      (CanvasRenderer.prototype.hide = function () {
        (this || t).animationItem.container.style.display = "none";
      }),
      (CanvasRenderer.prototype.show = function () {
        (this || t).animationItem.container.style.display = "block";
      });
    function HybridRenderer(e, r) {
      ((this || t).animationItem = e),
        ((this || t).layers = null),
        ((this || t).renderedFrame = -1),
        ((this || t).renderConfig = {
          className: (r && r.className) || "",
          imagePreserveAspectRatio:
            (r && r.imagePreserveAspectRatio) || "xMidYMid slice",
          hideOnTransparent: !(r && r.hideOnTransparent === !1),
          filterSize: {
            width: (r && r.filterSize && r.filterSize.width) || "400%",
            height: (r && r.filterSize && r.filterSize.height) || "400%",
            x: (r && r.filterSize && r.filterSize.x) || "-100%",
            y: (r && r.filterSize && r.filterSize.y) || "-100%",
          },
        }),
        ((this || t).globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: (this || t).renderConfig,
        }),
        ((this || t).pendingElements = []),
        ((this || t).elements = []),
        ((this || t).threeDElements = []),
        ((this || t).destroyed = !1),
        ((this || t).camera = null),
        ((this || t).supports3d = !0),
        ((this || t).rendererType = "html");
    }
    extendPrototype([BaseRenderer], HybridRenderer),
      (HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem),
      (HybridRenderer.prototype.checkPendingElements = function () {
        for (; (this || t).pendingElements.length; ) {
          var e = (this || t).pendingElements.pop();
          e.checkParenting();
        }
      }),
      (HybridRenderer.prototype.appendElementInPos = function (e, r) {
        var i = e.getBaseElement();
        if (i) {
          var s = (this || t).layers[r];
          if (!s.ddd || !(this || t).supports3d)
            if ((this || t).threeDElements) this.addTo3dContainer(i, r);
            else {
              for (var a = 0, n, l, v; a < r; )
                (this || t).elements[a] &&
                  (this || t).elements[a] !== !0 &&
                  (this || t).elements[a].getBaseElement &&
                  ((l = (this || t).elements[a]),
                  (v = (this || t).layers[a].ddd
                    ? this.getThreeDContainerByPos(a)
                    : l.getBaseElement()),
                  (n = v || n)),
                  (a += 1);
              n
                ? (!s.ddd || !(this || t).supports3d) &&
                  (this || t).layerElement.insertBefore(i, n)
                : (!s.ddd || !(this || t).supports3d) &&
                  (this || t).layerElement.appendChild(i);
            }
          else this.addTo3dContainer(i, r);
        }
      }),
      (HybridRenderer.prototype.createShape = function (e) {
        return (this || t).supports3d
          ? new HShapeElement(e, (this || t).globalData, this || t)
          : new SVGShapeElement(e, (this || t).globalData, this || t);
      }),
      (HybridRenderer.prototype.createText = function (e) {
        return (this || t).supports3d
          ? new HTextElement(e, (this || t).globalData, this || t)
          : new SVGTextLottieElement(e, (this || t).globalData, this || t);
      }),
      (HybridRenderer.prototype.createCamera = function (e) {
        return (
          ((this || t).camera = new HCameraElement(
            e,
            (this || t).globalData,
            this || t
          )),
          (this || t).camera
        );
      }),
      (HybridRenderer.prototype.createImage = function (e) {
        return (this || t).supports3d
          ? new HImageElement(e, (this || t).globalData, this || t)
          : new IImageElement(e, (this || t).globalData, this || t);
      }),
      (HybridRenderer.prototype.createComp = function (e) {
        return (this || t).supports3d
          ? new HCompElement(e, (this || t).globalData, this || t)
          : new SVGCompElement(e, (this || t).globalData, this || t);
      }),
      (HybridRenderer.prototype.createSolid = function (e) {
        return (this || t).supports3d
          ? new HSolidElement(e, (this || t).globalData, this || t)
          : new ISolidElement(e, (this || t).globalData, this || t);
      }),
      (HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
      (HybridRenderer.prototype.getThreeDContainerByPos = function (e) {
        for (var r = 0, i = (this || t).threeDElements.length; r < i; ) {
          if (
            (this || t).threeDElements[r].startPos <= e &&
            (this || t).threeDElements[r].endPos >= e
          )
            return (this || t).threeDElements[r].perspectiveElem;
          r += 1;
        }
        return null;
      }),
      (HybridRenderer.prototype.createThreeDContainer = function (e, r) {
        var i = createTag("div"),
          s,
          a;
        styleDiv(i);
        var n = createTag("div");
        if ((styleDiv(n), r === "3d")) {
          (s = i.style),
            (s.width = (this || t).globalData.compSize.w + "px"),
            (s.height = (this || t).globalData.compSize.h + "px");
          var l = "50% 50%";
          (s.webkitTransformOrigin = l),
            (s.mozTransformOrigin = l),
            (s.transformOrigin = l),
            (a = n.style);
          var v = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          (a.transform = v), (a.webkitTransform = v);
        }
        i.appendChild(n);
        var y = {
          container: n,
          perspectiveElem: i,
          startPos: e,
          endPos: e,
          type: r,
        };
        return (this || t).threeDElements.push(y), y;
      }),
      (HybridRenderer.prototype.build3dContainers = function () {
        var e,
          r = (this || t).layers.length,
          i,
          s = "";
        for (e = 0; e < r; e += 1)
          (this || t).layers[e].ddd && (this || t).layers[e].ty !== 3
            ? (s !== "3d" &&
                ((s = "3d"), (i = this.createThreeDContainer(e, "3d"))),
              (i.endPos = Math.max(i.endPos, e)))
            : (s !== "2d" &&
                ((s = "2d"), (i = this.createThreeDContainer(e, "2d"))),
              (i.endPos = Math.max(i.endPos, e)));
        for (r = (this || t).threeDElements.length, e = r - 1; e >= 0; e -= 1)
          (this || t).resizerElem.appendChild(
            (this || t).threeDElements[e].perspectiveElem
          );
      }),
      (HybridRenderer.prototype.addTo3dContainer = function (e, r) {
        for (var i = 0, s = (this || t).threeDElements.length; i < s; ) {
          if (r <= (this || t).threeDElements[i].endPos) {
            for (var a = (this || t).threeDElements[i].startPos, n; a < r; )
              (this || t).elements[a] &&
                (this || t).elements[a].getBaseElement &&
                (n = (this || t).elements[a].getBaseElement()),
                (a += 1);
            n
              ? (this || t).threeDElements[i].container.insertBefore(e, n)
              : (this || t).threeDElements[i].container.appendChild(e);
            break;
          }
          i += 1;
        }
      }),
      (HybridRenderer.prototype.configAnimation = function (e) {
        var r = createTag("div"),
          i = (this || t).animationItem.wrapper,
          s = r.style;
        (s.width = e.w + "px"),
          (s.height = e.h + "px"),
          ((this || t).resizerElem = r),
          styleDiv(r),
          (s.transformStyle = "flat"),
          (s.mozTransformStyle = "flat"),
          (s.webkitTransformStyle = "flat"),
          (this || t).renderConfig.className &&
            r.setAttribute("class", (this || t).renderConfig.className),
          i.appendChild(r),
          (s.overflow = "hidden");
        var a = createNS("svg");
        a.setAttribute("width", "1"),
          a.setAttribute("height", "1"),
          styleDiv(a),
          (this || t).resizerElem.appendChild(a);
        var n = createNS("defs");
        a.appendChild(n),
          ((this || t).data = e),
          this.setupGlobalData(e, a),
          ((this || t).globalData.defs = n),
          ((this || t).layers = e.layers),
          ((this || t).layerElement = (this || t).resizerElem),
          this.build3dContainers(),
          this.updateContainerSize();
      }),
      (HybridRenderer.prototype.destroy = function () {
        (this || t).animationItem.wrapper &&
          ((this || t).animationItem.wrapper.innerText = ""),
          ((this || t).animationItem.container = null),
          ((this || t).globalData.defs = null);
        var e,
          r = (this || t).layers ? (this || t).layers.length : 0;
        for (e = 0; e < r; e += 1) (this || t).elements[e].destroy();
        ((this || t).elements.length = 0),
          ((this || t).destroyed = !0),
          ((this || t).animationItem = null);
      }),
      (HybridRenderer.prototype.updateContainerSize = function () {
        var e = (this || t).animationItem.wrapper.offsetWidth,
          r = (this || t).animationItem.wrapper.offsetHeight,
          i = e / r,
          s =
            (this || t).globalData.compSize.w /
            (this || t).globalData.compSize.h,
          a,
          n,
          l,
          v;
        s > i
          ? ((a = e / (this || t).globalData.compSize.w),
            (n = e / (this || t).globalData.compSize.w),
            (l = 0),
            (v =
              (r -
                (this || t).globalData.compSize.h *
                  (e / (this || t).globalData.compSize.w)) /
              2))
          : ((a = r / (this || t).globalData.compSize.h),
            (n = r / (this || t).globalData.compSize.h),
            (l =
              (e -
                (this || t).globalData.compSize.w *
                  (r / (this || t).globalData.compSize.h)) /
              2),
            (v = 0));
        var y = (this || t).resizerElem.style;
        (y.webkitTransform =
          "matrix3d(" +
          a +
          ",0,0,0,0," +
          n +
          ",0,0,0,0,1,0," +
          l +
          "," +
          v +
          ",0,1)"),
          (y.transform = y.webkitTransform);
      }),
      (HybridRenderer.prototype.renderFrame =
        SVGRenderer.prototype.renderFrame),
      (HybridRenderer.prototype.hide = function () {
        (this || t).resizerElem.style.display = "none";
      }),
      (HybridRenderer.prototype.show = function () {
        (this || t).resizerElem.style.display = "block";
      }),
      (HybridRenderer.prototype.initItems = function () {
        if ((this.buildAllItems(), (this || t).camera))
          (this || t).camera.setup();
        else {
          var e = (this || t).globalData.compSize.w,
            r = (this || t).globalData.compSize.h,
            i,
            s = (this || t).threeDElements.length;
          for (i = 0; i < s; i += 1) {
            var a = (this || t).threeDElements[i].perspectiveElem.style;
            (a.webkitPerspective =
              Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"),
              (a.perspective = a.webkitPerspective);
          }
        }
      }),
      (HybridRenderer.prototype.searchExtraCompositions = function (e) {
        var r,
          i = e.length,
          s = createTag("div");
        for (r = 0; r < i; r += 1)
          if (e[r].xt) {
            var a = this.createComp(e[r], s, (this || t).globalData.comp, null);
            a.initExpressions(),
              (this || t).globalData.projectInterface.registerComposition(a);
          }
      });
    function MaskElement(e, r, i) {
      ((this || t).data = e),
        ((this || t).element = r),
        ((this || t).globalData = i),
        ((this || t).storedData = []),
        ((this || t).masksProperties = (this || t).data.masksProperties || []),
        ((this || t).maskElement = null);
      var s = (this || t).globalData.defs,
        a,
        n = (this || t).masksProperties
          ? (this || t).masksProperties.length
          : 0;
      ((this || t).viewData = createSizedArray(n)),
        ((this || t).solidPath = "");
      var l,
        v = (this || t).masksProperties,
        y = 0,
        g = [],
        P,
        S,
        u = createElementID(),
        d,
        C,
        f,
        p,
        c = "clipPath",
        o = "clip-path";
      for (a = 0; a < n; a += 1)
        if (
          (((v[a].mode !== "a" && v[a].mode !== "n") ||
            v[a].inv ||
            v[a].o.k !== 100 ||
            v[a].o.x) &&
            ((c = "mask"), (o = "mask")),
          (v[a].mode === "s" || v[a].mode === "i") && y === 0
            ? ((d = createNS("rect")),
              d.setAttribute("fill", "#ffffff"),
              d.setAttribute("width", (this || t).element.comp.data.w || 0),
              d.setAttribute("height", (this || t).element.comp.data.h || 0),
              g.push(d))
            : (d = null),
          (l = createNS("path")),
          v[a].mode === "n")
        )
          ((this || t).viewData[a] = {
            op: PropertyFactory.getProp(
              (this || t).element,
              v[a].o,
              0,
              0.01,
              (this || t).element
            ),
            prop: ShapePropertyFactory.getShapeProp(
              (this || t).element,
              v[a],
              3
            ),
            elem: l,
            lastPath: "",
          }),
            s.appendChild(l);
        else {
          (y += 1),
            l.setAttribute("fill", v[a].mode === "s" ? "#000000" : "#ffffff"),
            l.setAttribute("clip-rule", "nonzero");
          var h;
          if (
            (v[a].x.k !== 0
              ? ((c = "mask"),
                (o = "mask"),
                (p = PropertyFactory.getProp(
                  (this || t).element,
                  v[a].x,
                  0,
                  null,
                  (this || t).element
                )),
                (h = createElementID()),
                (C = createNS("filter")),
                C.setAttribute("id", h),
                (f = createNS("feMorphology")),
                f.setAttribute("operator", "erode"),
                f.setAttribute("in", "SourceGraphic"),
                f.setAttribute("radius", "0"),
                C.appendChild(f),
                s.appendChild(C),
                l.setAttribute(
                  "stroke",
                  v[a].mode === "s" ? "#000000" : "#ffffff"
                ))
              : ((f = null), (p = null)),
            ((this || t).storedData[a] = {
              elem: l,
              x: p,
              expan: f,
              lastPath: "",
              lastOperator: "",
              filterId: h,
              lastRadius: 0,
            }),
            v[a].mode === "i")
          ) {
            S = g.length;
            var m = createNS("g");
            for (P = 0; P < S; P += 1) m.appendChild(g[P]);
            var b = createNS("mask");
            b.setAttribute("mask-type", "alpha"),
              b.setAttribute("id", u + "_" + y),
              b.appendChild(l),
              s.appendChild(b),
              m.setAttribute(
                "mask",
                "url(" + locationHref + "#" + u + "_" + y + ")"
              ),
              (g.length = 0),
              g.push(m);
          } else g.push(l);
          v[a].inv &&
            !(this || t).solidPath &&
            ((this || t).solidPath = this.createLayerSolidPath()),
            ((this || t).viewData[a] = {
              elem: l,
              lastPath: "",
              op: PropertyFactory.getProp(
                (this || t).element,
                v[a].o,
                0,
                0.01,
                (this || t).element
              ),
              prop: ShapePropertyFactory.getShapeProp(
                (this || t).element,
                v[a],
                3
              ),
              invRect: d,
            }),
            (this || t).viewData[a].prop.k ||
              this.drawPath(
                v[a],
                (this || t).viewData[a].prop.v,
                (this || t).viewData[a]
              );
        }
      for (
        (this || t).maskElement = createNS(c), n = g.length, a = 0;
        a < n;
        a += 1
      )
        (this || t).maskElement.appendChild(g[a]);
      y > 0 &&
        ((this || t).maskElement.setAttribute("id", u),
        (this || t).element.maskedElement.setAttribute(
          o,
          "url(" + locationHref + "#" + u + ")"
        ),
        s.appendChild((this || t).maskElement)),
        (this || t).viewData.length &&
          (this || t).element.addRenderableComponent(this || t);
    }
    (MaskElement.prototype.getMaskProperty = function (e) {
      return (this || t).viewData[e].prop;
    }),
      (MaskElement.prototype.renderFrame = function (e) {
        var r = (this || t).element.finalTransform.mat,
          i,
          s = (this || t).masksProperties.length;
        for (i = 0; i < s; i += 1)
          if (
            (((this || t).viewData[i].prop._mdf || e) &&
              this.drawPath(
                (this || t).masksProperties[i],
                (this || t).viewData[i].prop.v,
                (this || t).viewData[i]
              ),
            ((this || t).viewData[i].op._mdf || e) &&
              (this || t).viewData[i].elem.setAttribute(
                "fill-opacity",
                (this || t).viewData[i].op.v
              ),
            (this || t).masksProperties[i].mode !== "n" &&
              ((this || t).viewData[i].invRect &&
                ((this || t).element.finalTransform.mProp._mdf || e) &&
                (this || t).viewData[i].invRect.setAttribute(
                  "transform",
                  r.getInverseMatrix().to2dCSS()
                ),
              (this || t).storedData[i].x &&
                ((this || t).storedData[i].x._mdf || e)))
          ) {
            var a = (this || t).storedData[i].expan;
            (this || t).storedData[i].x.v < 0
              ? ((this || t).storedData[i].lastOperator !== "erode" &&
                  (((this || t).storedData[i].lastOperator = "erode"),
                  (this || t).storedData[i].elem.setAttribute(
                    "filter",
                    "url(" +
                      locationHref +
                      "#" +
                      (this || t).storedData[i].filterId +
                      ")"
                  )),
                a.setAttribute("radius", -(this || t).storedData[i].x.v))
              : ((this || t).storedData[i].lastOperator !== "dilate" &&
                  (((this || t).storedData[i].lastOperator = "dilate"),
                  (this || t).storedData[i].elem.setAttribute("filter", null)),
                (this || t).storedData[i].elem.setAttribute(
                  "stroke-width",
                  (this || t).storedData[i].x.v * 2
                ));
          }
      }),
      (MaskElement.prototype.getMaskelement = function () {
        return (this || t).maskElement;
      }),
      (MaskElement.prototype.createLayerSolidPath = function () {
        var e = "M0,0 ";
        return (
          (e += " h" + (this || t).globalData.compSize.w),
          (e += " v" + (this || t).globalData.compSize.h),
          (e += " h-" + (this || t).globalData.compSize.w),
          (e += " v-" + (this || t).globalData.compSize.h + " "),
          e
        );
      }),
      (MaskElement.prototype.drawPath = function (e, r, i) {
        var s = " M" + r.v[0][0] + "," + r.v[0][1],
          a,
          n;
        for (n = r._length, a = 1; a < n; a += 1)
          s +=
            " C" +
            r.o[a - 1][0] +
            "," +
            r.o[a - 1][1] +
            " " +
            r.i[a][0] +
            "," +
            r.i[a][1] +
            " " +
            r.v[a][0] +
            "," +
            r.v[a][1];
        if (
          (r.c &&
            n > 1 &&
            (s +=
              " C" +
              r.o[a - 1][0] +
              "," +
              r.o[a - 1][1] +
              " " +
              r.i[0][0] +
              "," +
              r.i[0][1] +
              " " +
              r.v[0][0] +
              "," +
              r.v[0][1]),
          i.lastPath !== s)
        ) {
          var l = "";
          i.elem &&
            (r.c && (l = e.inv ? (this || t).solidPath + s : s),
            i.elem.setAttribute("d", l)),
            (i.lastPath = s);
        }
      }),
      (MaskElement.prototype.destroy = function () {
        ((this || t).element = null),
          ((this || t).globalData = null),
          ((this || t).maskElement = null),
          ((this || t).data = null),
          ((this || t).masksProperties = null);
      });
    function HierarchyElement() {}
    HierarchyElement.prototype = {
      initHierarchy: function () {
        ((this || t).hierarchy = []),
          ((this || t)._isParent = !1),
          this.checkParenting();
      },
      setHierarchy: function (e) {
        (this || t).hierarchy = e;
      },
      setAsParent: function () {
        (this || t)._isParent = !0;
      },
      checkParenting: function () {
        (this || t).data.parent !== void 0 &&
          (this || t).comp.buildElementParenting(
            this || t,
            (this || t).data.parent,
            []
          );
      },
    };
    function FrameElement() {}
    FrameElement.prototype = {
      initFrame: function () {
        ((this || t)._isFirstFrame = !1),
          ((this || t).dynamicProperties = []),
          ((this || t)._mdf = !1);
      },
      prepareProperties: function (e, r) {
        var i,
          s = (this || t).dynamicProperties.length;
        for (i = 0; i < s; i += 1)
          (r ||
            ((this || t)._isParent &&
              (this || t).dynamicProperties[i].propType === "transform")) &&
            ((this || t).dynamicProperties[i].getValue(),
            (this || t).dynamicProperties[i]._mdf &&
              (((this || t).globalData._mdf = !0), ((this || t)._mdf = !0)));
      },
      addDynamicProperty: function (e) {
        (this || t).dynamicProperties.indexOf(e) === -1 &&
          (this || t).dynamicProperties.push(e);
      },
    };
    function TransformElement() {}
    TransformElement.prototype = {
      initTransform: function () {
        ((this || t).finalTransform = {
          mProp: (this || t).data.ks
            ? TransformPropertyFactory.getTransformProperty(
                this || t,
                (this || t).data.ks,
                this || t
              )
            : { o: 0 },
          _matMdf: !1,
          _opMdf: !1,
          mat: new Matrix(),
        }),
          (this || t).data.ao &&
            ((this || t).finalTransform.mProp.autoOriented = !0),
          (this || t).data.ty;
      },
      renderTransform: function () {
        if (
          (((this || t).finalTransform._opMdf =
            (this || t).finalTransform.mProp.o._mdf ||
            (this || t)._isFirstFrame),
          ((this || t).finalTransform._matMdf =
            (this || t).finalTransform.mProp._mdf || (this || t)._isFirstFrame),
          (this || t).hierarchy)
        ) {
          var e,
            r = (this || t).finalTransform.mat,
            i = 0,
            s = (this || t).hierarchy.length;
          if (!(this || t).finalTransform._matMdf)
            for (; i < s; ) {
              if ((this || t).hierarchy[i].finalTransform.mProp._mdf) {
                (this || t).finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
          if ((this || t).finalTransform._matMdf)
            for (
              e = (this || t).finalTransform.mProp.v.props,
                r.cloneFromProps(e),
                i = 0;
              i < s;
              i += 1
            )
              (e = (this || t).hierarchy[i].finalTransform.mProp.v.props),
                r.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                );
        }
      },
      globalToLocal: function (e) {
        var r = [];
        r.push((this || t).finalTransform);
        for (var i = !0, s = (this || t).comp; i; )
          s.finalTransform
            ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), (s = s.comp))
            : (i = !1);
        var a,
          n = r.length,
          l;
        for (a = 0; a < n; a += 1)
          (l = r[a].mat.applyToPointArray(0, 0, 0)),
            (e = [e[0] - l[0], e[1] - l[1], 0]);
        return e;
      },
      mHelper: new Matrix(),
    };
    function RenderableElement() {}
    RenderableElement.prototype = {
      initRenderable: function () {
        ((this || t).isInRange = !1),
          ((this || t).hidden = !1),
          ((this || t).isTransparent = !1),
          ((this || t).renderableComponents = []);
      },
      addRenderableComponent: function (e) {
        (this || t).renderableComponents.indexOf(e) === -1 &&
          (this || t).renderableComponents.push(e);
      },
      removeRenderableComponent: function (e) {
        (this || t).renderableComponents.indexOf(e) !== -1 &&
          (this || t).renderableComponents.splice(
            (this || t).renderableComponents.indexOf(e),
            1
          );
      },
      prepareRenderableFrame: function (e) {
        this.checkLayerLimits(e);
      },
      checkTransparency: function () {
        (this || t).finalTransform.mProp.o.v <= 0
          ? !(this || t).isTransparent &&
            (this || t).globalData.renderConfig.hideOnTransparent &&
            (((this || t).isTransparent = !0), this.hide())
          : (this || t).isTransparent &&
            (((this || t).isTransparent = !1), this.show());
      },
      checkLayerLimits: function (e) {
        (this || t).data.ip - (this || t).data.st <= e &&
        (this || t).data.op - (this || t).data.st > e
          ? (this || t).isInRange !== !0 &&
            (((this || t).globalData._mdf = !0),
            ((this || t)._mdf = !0),
            ((this || t).isInRange = !0),
            this.show())
          : (this || t).isInRange !== !1 &&
            (((this || t).globalData._mdf = !0),
            ((this || t).isInRange = !1),
            this.hide());
      },
      renderRenderable: function () {
        var e,
          r = (this || t).renderableComponents.length;
        for (e = 0; e < r; e += 1)
          (this || t).renderableComponents[e].renderFrame(
            (this || t)._isFirstFrame
          );
      },
      sourceRectAtTime: function () {
        return { top: 0, left: 0, width: 100, height: 100 };
      },
      getLayerSize: function () {
        return (this || t).data.ty === 5
          ? {
              w: (this || t).data.textData.width,
              h: (this || t).data.textData.height,
            }
          : { w: (this || t).data.width, h: (this || t).data.height };
      },
    };
    function RenderableDOMElement() {}
    (function () {
      var e = {
        initElement: function (r, i, s) {
          this.initFrame(),
            this.initBaseData(r, i, s),
            this.initTransform(r, i, s),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide();
        },
        hide: function () {
          if (
            !(this || t).hidden &&
            (!(this || t).isInRange || (this || t).isTransparent)
          ) {
            var r = (this || t).baseElement || (this || t).layerElement;
            (r.style.display = "none"), ((this || t).hidden = !0);
          }
        },
        show: function () {
          if ((this || t).isInRange && !(this || t).isTransparent) {
            if (!(this || t).data.hd) {
              var r = (this || t).baseElement || (this || t).layerElement;
              r.style.display = "block";
            }
            ((this || t).hidden = !1), ((this || t)._isFirstFrame = !0);
          }
        },
        renderFrame: function () {
          (this || t).data.hd ||
            (this || t).hidden ||
            (this.renderTransform(),
            this.renderRenderable(),
            this.renderElement(),
            this.renderInnerContent(),
            (this || t)._isFirstFrame && ((this || t)._isFirstFrame = !1));
        },
        renderInnerContent: function () {},
        prepareFrame: function (r) {
          ((this || t)._mdf = !1),
            this.prepareRenderableFrame(r),
            this.prepareProperties(r, (this || t).isInRange),
            this.checkTransparency();
        },
        destroy: function () {
          ((this || t).innerElem = null), this.destroyBaseElement();
        },
      };
      extendPrototype(
        [RenderableElement, createProxyFunction(e)],
        RenderableDOMElement
      );
    })();
    function ProcessedElement(e, r) {
      ((this || t).elem = e), ((this || t).pos = r);
    }
    function SVGStyleData(e, r) {
      ((this || t).data = e),
        ((this || t).type = e.ty),
        ((this || t).d = ""),
        ((this || t).lvl = r),
        ((this || t)._mdf = !1),
        ((this || t).closed = e.hd === !0),
        ((this || t).pElem = createNS("path")),
        ((this || t).msElem = null);
    }
    SVGStyleData.prototype.reset = function () {
      ((this || t).d = ""), ((this || t)._mdf = !1);
    };
    function SVGShapeData(e, r, i) {
      ((this || t).caches = []),
        ((this || t).styles = []),
        ((this || t).transformers = e),
        ((this || t).lStr = ""),
        ((this || t).sh = i),
        ((this || t).lvl = r),
        ((this || t)._isAnimated = !!i.k);
      for (var s = 0, a = e.length; s < a; ) {
        if (e[s].mProps.dynamicProperties.length) {
          (this || t)._isAnimated = !0;
          break;
        }
        s += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function () {
      (this || t)._isAnimated = !0;
    };
    function SVGTransformData(e, r, i) {
      ((this || t).transform = { mProps: e, op: r, container: i }),
        ((this || t).elements = []),
        ((this || t)._isAnimated =
          (this || t).transform.mProps.dynamicProperties.length ||
          (this || t).transform.op.effectsSequence.length);
    }
    function SVGStrokeStyleData(e, r, i) {
      this.initDynamicPropertyContainer(e),
        ((this || t).getValue = (this || t).iterateDynamicProperties),
        ((this || t).o = PropertyFactory.getProp(e, r.o, 0, 0.01, this || t)),
        ((this || t).w = PropertyFactory.getProp(e, r.w, 0, null, this || t)),
        ((this || t).d = new DashProperty(e, r.d || {}, "svg", this || t)),
        ((this || t).c = PropertyFactory.getProp(e, r.c, 1, 255, this || t)),
        ((this || t).style = i),
        ((this || t)._isAnimated = !!(this || t)._isAnimated);
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(e, r, i) {
      this.initDynamicPropertyContainer(e),
        ((this || t).getValue = (this || t).iterateDynamicProperties),
        ((this || t).o = PropertyFactory.getProp(e, r.o, 0, 0.01, this || t)),
        ((this || t).c = PropertyFactory.getProp(e, r.c, 1, 255, this || t)),
        ((this || t).style = i);
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGGradientFillStyleData(e, r, i) {
      this.initDynamicPropertyContainer(e),
        ((this || t).getValue = (this || t).iterateDynamicProperties),
        this.initGradientData(e, r, i);
    }
    (SVGGradientFillStyleData.prototype.initGradientData = function (e, r, i) {
      ((this || t).o = PropertyFactory.getProp(e, r.o, 0, 0.01, this || t)),
        ((this || t).s = PropertyFactory.getProp(e, r.s, 1, null, this || t)),
        ((this || t).e = PropertyFactory.getProp(e, r.e, 1, null, this || t)),
        ((this || t).h = PropertyFactory.getProp(
          e,
          r.h || { k: 0 },
          0,
          0.01,
          this || t
        )),
        ((this || t).a = PropertyFactory.getProp(
          e,
          r.a || { k: 0 },
          0,
          degToRads,
          this || t
        )),
        ((this || t).g = new GradientProperty(e, r.g, this || t)),
        ((this || t).style = i),
        ((this || t).stops = []),
        this.setGradientData(i.pElem, r),
        this.setGradientOpacity(r, i),
        ((this || t)._isAnimated = !!(this || t)._isAnimated);
    }),
      (SVGGradientFillStyleData.prototype.setGradientData = function (e, r) {
        var i = createElementID(),
          s = createNS(r.t === 1 ? "linearGradient" : "radialGradient");
        s.setAttribute("id", i),
          s.setAttribute("spreadMethod", "pad"),
          s.setAttribute("gradientUnits", "userSpaceOnUse");
        var a = [],
          n,
          l,
          v;
        for (v = r.g.p * 4, l = 0; l < v; l += 4)
          (n = createNS("stop")), s.appendChild(n), a.push(n);
        e.setAttribute(
          r.ty === "gf" ? "fill" : "stroke",
          "url(" + locationHref + "#" + i + ")"
        ),
          ((this || t).gf = s),
          ((this || t).cst = a);
      }),
      (SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, r) {
        if ((this || t).g._hasOpacity && !(this || t).g._collapsable) {
          var i,
            s,
            a,
            n = createNS("mask"),
            l = createNS("path");
          n.appendChild(l);
          var v = createElementID(),
            y = createElementID();
          n.setAttribute("id", y);
          var g = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          g.setAttribute("id", v),
            g.setAttribute("spreadMethod", "pad"),
            g.setAttribute("gradientUnits", "userSpaceOnUse"),
            (a = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
          var P = (this || t).stops;
          for (s = e.g.p * 4; s < a; s += 2)
            (i = createNS("stop")),
              i.setAttribute("stop-color", "rgb(255,255,255)"),
              g.appendChild(i),
              P.push(i);
          l.setAttribute(
            e.ty === "gf" ? "fill" : "stroke",
            "url(" + locationHref + "#" + v + ")"
          ),
            ((this || t).of = g),
            ((this || t).ms = n),
            ((this || t).ost = P),
            ((this || t).maskId = y),
            (r.msElem = l);
        }
      }),
      extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(e, r, i) {
      this.initDynamicPropertyContainer(e),
        ((this || t).getValue = (this || t).iterateDynamicProperties),
        ((this || t).w = PropertyFactory.getProp(e, r.w, 0, null, this || t)),
        ((this || t).d = new DashProperty(e, r.d || {}, "svg", this || t)),
        this.initGradientData(e, r, i),
        ((this || t)._isAnimated = !!(this || t)._isAnimated);
    }
    extendPrototype(
      [SVGGradientFillStyleData, DynamicPropertyContainer],
      SVGGradientStrokeStyleData
    );
    function ShapeGroupData() {
      ((this || t).it = []),
        ((this || t).prevViewData = []),
        ((this || t).gr = createNS("g"));
    }
    var SVGElementsRenderer = (function () {
      var e = new Matrix(),
        r = new Matrix(),
        i = { createRenderFunction: s };
      function s(P) {
        switch (P.ty) {
          case "fl":
            return l;
          case "gf":
            return y;
          case "gs":
            return v;
          case "st":
            return g;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return n;
          case "tr":
            return a;
          default:
            return null;
        }
      }
      function a(P, S, u) {
        (u || S.transform.op._mdf) &&
          S.transform.container.setAttribute("opacity", S.transform.op.v),
          (u || S.transform.mProps._mdf) &&
            S.transform.container.setAttribute(
              "transform",
              S.transform.mProps.v.to2dCSS()
            );
      }
      function n(P, S, u) {
        var d,
          C,
          f,
          p,
          c,
          o,
          h = S.styles.length,
          m = S.lvl,
          b,
          A,
          x,
          _,
          k;
        for (o = 0; o < h; o += 1) {
          if (((p = S.sh._mdf || u), S.styles[o].lvl < m)) {
            for (
              A = r.reset(),
                _ = m - S.styles[o].lvl,
                k = S.transformers.length - 1;
              !p && _ > 0;

            )
              (p = S.transformers[k].mProps._mdf || p), (_ -= 1), (k -= 1);
            if (p)
              for (
                _ = m - S.styles[o].lvl, k = S.transformers.length - 1;
                _ > 0;

              )
                (x = S.transformers[k].mProps.v.props),
                  A.transform(
                    x[0],
                    x[1],
                    x[2],
                    x[3],
                    x[4],
                    x[5],
                    x[6],
                    x[7],
                    x[8],
                    x[9],
                    x[10],
                    x[11],
                    x[12],
                    x[13],
                    x[14],
                    x[15]
                  ),
                  (_ -= 1),
                  (k -= 1);
          } else A = e;
          if (((b = S.sh.paths), (C = b._length), p)) {
            for (f = "", d = 0; d < C; d += 1)
              (c = b.shapes[d]),
                c && c._length && (f += buildShapeString(c, c._length, c.c, A));
            S.caches[o] = f;
          } else f = S.caches[o];
          (S.styles[o].d += P.hd === !0 ? "" : f),
            (S.styles[o]._mdf = p || S.styles[o]._mdf);
        }
      }
      function l(P, S, u) {
        var d = S.style;
        (S.c._mdf || u) &&
          d.pElem.setAttribute(
            "fill",
            "rgb(" +
              bmFloor(S.c.v[0]) +
              "," +
              bmFloor(S.c.v[1]) +
              "," +
              bmFloor(S.c.v[2]) +
              ")"
          ),
          (S.o._mdf || u) && d.pElem.setAttribute("fill-opacity", S.o.v);
      }
      function v(P, S, u) {
        y(P, S, u), g(P, S, u);
      }
      function y(P, S, u) {
        var d = S.gf,
          C = S.g._hasOpacity,
          f = S.s.v,
          p = S.e.v;
        if (S.o._mdf || u) {
          var c = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          S.style.pElem.setAttribute(c, S.o.v);
        }
        if (S.s._mdf || u) {
          var o = P.t === 1 ? "x1" : "cx",
            h = o === "x1" ? "y1" : "cy";
          d.setAttribute(o, f[0]),
            d.setAttribute(h, f[1]),
            C &&
              !S.g._collapsable &&
              (S.of.setAttribute(o, f[0]), S.of.setAttribute(h, f[1]));
        }
        var m, b, A, x;
        if (S.g._cmdf || u) {
          m = S.cst;
          var _ = S.g.c;
          for (A = m.length, b = 0; b < A; b += 1)
            (x = m[b]),
              x.setAttribute("offset", _[b * 4] + "%"),
              x.setAttribute(
                "stop-color",
                "rgb(" +
                  _[b * 4 + 1] +
                  "," +
                  _[b * 4 + 2] +
                  "," +
                  _[b * 4 + 3] +
                  ")"
              );
        }
        if (C && (S.g._omdf || u)) {
          var k = S.g.o;
          for (
            S.g._collapsable ? (m = S.cst) : (m = S.ost), A = m.length, b = 0;
            b < A;
            b += 1
          )
            (x = m[b]),
              S.g._collapsable || x.setAttribute("offset", k[b * 2] + "%"),
              x.setAttribute("stop-opacity", k[b * 2 + 1]);
        }
        if (P.t === 1)
          (S.e._mdf || u) &&
            (d.setAttribute("x2", p[0]),
            d.setAttribute("y2", p[1]),
            C &&
              !S.g._collapsable &&
              (S.of.setAttribute("x2", p[0]), S.of.setAttribute("y2", p[1])));
        else {
          var w;
          if (
            ((S.s._mdf || S.e._mdf || u) &&
              ((w = Math.sqrt(
                Math.pow(f[0] - p[0], 2) + Math.pow(f[1] - p[1], 2)
              )),
              d.setAttribute("r", w),
              C && !S.g._collapsable && S.of.setAttribute("r", w)),
            S.e._mdf || S.h._mdf || S.a._mdf || u)
          ) {
            w ||
              (w = Math.sqrt(
                Math.pow(f[0] - p[0], 2) + Math.pow(f[1] - p[1], 2)
              ));
            var R = Math.atan2(p[1] - f[1], p[0] - f[0]),
              V = S.h.v;
            V >= 1 ? (V = 0.99) : V <= -1 && (V = -0.99);
            var B = w * V,
              L = Math.cos(R + S.a.v) * B + f[0],
              O = Math.sin(R + S.a.v) * B + f[1];
            d.setAttribute("fx", L),
              d.setAttribute("fy", O),
              C &&
                !S.g._collapsable &&
                (S.of.setAttribute("fx", L), S.of.setAttribute("fy", O));
          }
        }
      }
      function g(P, S, u) {
        var d = S.style,
          C = S.d;
        C &&
          (C._mdf || u) &&
          C.dashStr &&
          (d.pElem.setAttribute("stroke-dasharray", C.dashStr),
          d.pElem.setAttribute("stroke-dashoffset", C.dashoffset[0])),
          S.c &&
            (S.c._mdf || u) &&
            d.pElem.setAttribute(
              "stroke",
              "rgb(" +
                bmFloor(S.c.v[0]) +
                "," +
                bmFloor(S.c.v[1]) +
                "," +
                bmFloor(S.c.v[2]) +
                ")"
            ),
          (S.o._mdf || u) && d.pElem.setAttribute("stroke-opacity", S.o.v),
          (S.w._mdf || u) &&
            (d.pElem.setAttribute("stroke-width", S.w.v),
            d.msElem && d.msElem.setAttribute("stroke-width", S.w.v));
      }
      return i;
    })();
    function ShapeTransformManager() {
      ((this || t).sequences = {}),
        ((this || t).sequenceList = []),
        ((this || t).transform_key_count = 0);
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function (e) {
        var r,
          i = e.length,
          s = "_";
        for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
        var a = (this || t).sequences[s];
        return (
          a ||
            ((a = {
              transforms: [].concat(e),
              finalTransform: new Matrix(),
              _mdf: !1,
            }),
            ((this || t).sequences[s] = a),
            (this || t).sequenceList.push(a)),
          a
        );
      },
      processSequence: function (e, r) {
        for (var i = 0, s = e.transforms.length, a = r; i < s && !r; ) {
          if (e.transforms[i].transform.mProps._mdf) {
            a = !0;
            break;
          }
          i += 1;
        }
        if (a) {
          var n;
          for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
            (n = e.transforms[i].transform.mProps.v.props),
              e.finalTransform.transform(
                n[0],
                n[1],
                n[2],
                n[3],
                n[4],
                n[5],
                n[6],
                n[7],
                n[8],
                n[9],
                n[10],
                n[11],
                n[12],
                n[13],
                n[14],
                n[15]
              );
        }
        e._mdf = a;
      },
      processSequences: function (e) {
        var r,
          i = (this || t).sequenceList.length;
        for (r = 0; r < i; r += 1)
          this.processSequence((this || t).sequenceList[r], e);
      },
      getNewKey: function () {
        return (
          ((this || t).transform_key_count += 1),
          "_" + (this || t).transform_key_count
        );
      },
    };
    function CVShapeData(e, r, i, s) {
      ((this || t).styledShapes = []), ((this || t).tr = [0, 0, 0, 0, 0, 0]);
      var a = 4;
      r.ty === "rc"
        ? (a = 5)
        : r.ty === "el"
        ? (a = 6)
        : r.ty === "sr" && (a = 7),
        ((this || t).sh = ShapePropertyFactory.getShapeProp(e, r, a, e));
      var n,
        l = i.length,
        v;
      for (n = 0; n < l; n += 1)
        i[n].closed ||
          ((v = {
            transforms: s.addTransformSequence(i[n].transforms),
            trNodes: [],
          }),
          (this || t).styledShapes.push(v),
          i[n].elements.push(v));
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function BaseElement() {}
    BaseElement.prototype = {
      checkMasks: function () {
        if (!(this || t).data.hasMask) return !1;
        for (var e = 0, r = (this || t).data.masksProperties.length; e < r; ) {
          if (
            (this || t).data.masksProperties[e].mode !== "n" &&
            (this || t).data.masksProperties[e].cl !== !1
          )
            return !0;
          e += 1;
        }
        return !1;
      },
      initExpressions: function () {
        ((this || t).layerInterface = LayerExpressionInterface(this || t)),
          (this || t).data.hasMask &&
            (this || t).maskManager &&
            (this || t).layerInterface.registerMaskInterface(
              (this || t).maskManager
            );
        var e = EffectsExpressionInterface.createEffectsInterface(
          this || t,
          (this || t).layerInterface
        );
        (this || t).layerInterface.registerEffectsInterface(e),
          (this || t).data.ty === 0 || (this || t).data.xt
            ? ((this || t).compInterface = CompExpressionInterface(this || t))
            : (this || t).data.ty === 4
            ? (((this || t).layerInterface.shapeInterface =
                ShapeExpressionInterface(
                  (this || t).shapesData,
                  (this || t).itemsData,
                  (this || t).layerInterface
                )),
              ((this || t).layerInterface.content = (
                this || t
              ).layerInterface.shapeInterface))
            : (this || t).data.ty === 5 &&
              (((this || t).layerInterface.textInterface =
                TextExpressionInterface(this || t)),
              ((this || t).layerInterface.text = (
                this || t
              ).layerInterface.textInterface));
      },
      setBlendMode: function () {
        var e = getBlendMode((this || t).data.bm),
          r = (this || t).baseElement || (this || t).layerElement;
        r.style["mix-blend-mode"] = e;
      },
      initBaseData: function (e, r, i) {
        ((this || t).globalData = r),
          ((this || t).comp = i),
          ((this || t).data = e),
          ((this || t).layerId = createElementID()),
          (this || t).data.sr || ((this || t).data.sr = 1),
          ((this || t).effectsManager = new EffectsManager(
            (this || t).data,
            this || t,
            (this || t).dynamicProperties
          ));
      },
      getType: function () {
        return (this || t).type;
      },
      sourceRectAtTime: function () {},
    };
    function NullElement(e, r, i) {
      this.initFrame(),
        this.initBaseData(e, r, i),
        this.initFrame(),
        this.initTransform(e, r, i),
        this.initHierarchy();
    }
    (NullElement.prototype.prepareFrame = function (e) {
      this.prepareProperties(e, !0);
    }),
      (NullElement.prototype.renderFrame = function () {}),
      (NullElement.prototype.getBaseElement = function () {
        return null;
      }),
      (NullElement.prototype.destroy = function () {}),
      (NullElement.prototype.sourceRectAtTime = function () {}),
      (NullElement.prototype.hide = function () {}),
      extendPrototype(
        [BaseElement, TransformElement, HierarchyElement, FrameElement],
        NullElement
      );
    function SVGBaseElement() {}
    SVGBaseElement.prototype = {
      initRendererElement: function () {
        (this || t).layerElement = createNS("g");
      },
      createContainerElements: function () {
        ((this || t).matteElement = createNS("g")),
          ((this || t).transformedElement = (this || t).layerElement),
          ((this || t).maskedElement = (this || t).layerElement),
          ((this || t)._sizeChanged = !1);
        var e = null,
          r,
          i,
          s;
        if ((this || t).data.td) {
          if ((this || t).data.td == 3 || (this || t).data.td == 1) {
            var a = createNS("mask");
            a.setAttribute("id", (this || t).layerId),
              a.setAttribute(
                "mask-type",
                (this || t).data.td == 3 ? "luminance" : "alpha"
              ),
              a.appendChild((this || t).layerElement),
              (e = a),
              (this || t).globalData.defs.appendChild(a),
              !featureSupport.maskType &&
                (this || t).data.td == 1 &&
                (a.setAttribute("mask-type", "luminance"),
                (r = createElementID()),
                (i = filtersFactory.createFilter(r)),
                (this || t).globalData.defs.appendChild(i),
                i.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                (s = createNS("g")),
                s.appendChild((this || t).layerElement),
                (e = s),
                a.appendChild(s),
                s.setAttribute(
                  "filter",
                  "url(" + locationHref + "#" + r + ")"
                ));
          } else if ((this || t).data.td == 2) {
            var n = createNS("mask");
            n.setAttribute("id", (this || t).layerId),
              n.setAttribute("mask-type", "alpha");
            var l = createNS("g");
            n.appendChild(l),
              (r = createElementID()),
              (i = filtersFactory.createFilter(r));
            var v = createNS("feComponentTransfer");
            v.setAttribute("in", "SourceGraphic"), i.appendChild(v);
            var y = createNS("feFuncA");
            y.setAttribute("type", "table"),
              y.setAttribute("tableValues", "1.0 0.0"),
              v.appendChild(y),
              (this || t).globalData.defs.appendChild(i);
            var g = createNS("rect");
            g.setAttribute("width", (this || t).comp.data.w),
              g.setAttribute("height", (this || t).comp.data.h),
              g.setAttribute("x", "0"),
              g.setAttribute("y", "0"),
              g.setAttribute("fill", "#ffffff"),
              g.setAttribute("opacity", "0"),
              l.setAttribute("filter", "url(" + locationHref + "#" + r + ")"),
              l.appendChild(g),
              l.appendChild((this || t).layerElement),
              (e = l),
              featureSupport.maskType ||
                (n.setAttribute("mask-type", "luminance"),
                i.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                (s = createNS("g")),
                l.appendChild(g),
                s.appendChild((this || t).layerElement),
                (e = s),
                l.appendChild(s)),
              (this || t).globalData.defs.appendChild(n);
          }
        } else
          (this || t).data.tt
            ? ((this || t).matteElement.appendChild((this || t).layerElement),
              (e = (this || t).matteElement),
              ((this || t).baseElement = (this || t).matteElement))
            : ((this || t).baseElement = (this || t).layerElement);
        if (
          ((this || t).data.ln &&
            (this || t).layerElement.setAttribute("id", (this || t).data.ln),
          (this || t).data.cl &&
            (this || t).layerElement.setAttribute("class", (this || t).data.cl),
          (this || t).data.ty === 0 && !(this || t).data.hd)
        ) {
          var P = createNS("clipPath"),
            S = createNS("path");
          S.setAttribute(
            "d",
            "M0,0 L" +
              (this || t).data.w +
              ",0 L" +
              (this || t).data.w +
              "," +
              (this || t).data.h +
              " L0," +
              (this || t).data.h +
              "z"
          );
          var u = createElementID();
          if (
            (P.setAttribute("id", u),
            P.appendChild(S),
            (this || t).globalData.defs.appendChild(P),
            this.checkMasks())
          ) {
            var d = createNS("g");
            d.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"),
              d.appendChild((this || t).layerElement),
              ((this || t).transformedElement = d),
              e
                ? e.appendChild((this || t).transformedElement)
                : ((this || t).baseElement = (this || t).transformedElement);
          } else
            (this || t).layerElement.setAttribute(
              "clip-path",
              "url(" + locationHref + "#" + u + ")"
            );
        }
        (this || t).data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function () {
        (this || t).finalTransform._matMdf &&
          (this || t).transformedElement.setAttribute(
            "transform",
            (this || t).finalTransform.mat.to2dCSS()
          ),
          (this || t).finalTransform._opMdf &&
            (this || t).transformedElement.setAttribute(
              "opacity",
              (this || t).finalTransform.mProp.o.v
            );
      },
      destroyBaseElement: function () {
        ((this || t).layerElement = null),
          ((this || t).matteElement = null),
          (this || t).maskManager.destroy();
      },
      getBaseElement: function () {
        return (this || t).data.hd ? null : (this || t).baseElement;
      },
      createRenderableComponents: function () {
        ((this || t).maskManager = new MaskElement(
          (this || t).data,
          this || t,
          (this || t).globalData
        )),
          ((this || t).renderableEffectsManager = new SVGEffects(this || t));
      },
      setMatte: function (e) {
        (this || t).matteElement &&
          (this || t).matteElement.setAttribute(
            "mask",
            "url(" + locationHref + "#" + e + ")"
          );
      },
    };
    function IShapeElement() {}
    IShapeElement.prototype = {
      addShapeToModifiers: function (e) {
        var r,
          i = (this || t).shapeModifiers.length;
        for (r = 0; r < i; r += 1) (this || t).shapeModifiers[r].addShape(e);
      },
      isShapeInAnimatedModifiers: function (e) {
        for (var r = 0, i = (this || t).shapeModifiers.length; r < i; )
          if ((this || t).shapeModifiers[r].isAnimatedWithShape(e)) return !0;
        return !1;
      },
      renderModifiers: function () {
        if ((this || t).shapeModifiers.length) {
          var e,
            r = (this || t).shapes.length;
          for (e = 0; e < r; e += 1) (this || t).shapes[e].sh.reset();
          r = (this || t).shapeModifiers.length;
          var i;
          for (
            e = r - 1;
            e >= 0 &&
            ((i = (this || t).shapeModifiers[e].processShapes(
              (this || t)._isFirstFrame
            )),
            !i);
            e -= 1
          );
        }
      },
      lcEnum: { 1: "butt", 2: "round", 3: "square" },
      ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
      searchProcessedElement: function (e) {
        for (
          var r = (this || t).processedElements, i = 0, s = r.length;
          i < s;

        ) {
          if (r[i].elem === e) return r[i].pos;
          i += 1;
        }
        return 0;
      },
      addProcessedElement: function (e, r) {
        for (var i = (this || t).processedElements, s = i.length; s; )
          if (((s -= 1), i[s].elem === e)) {
            i[s].pos = r;
            return;
          }
        i.push(new ProcessedElement(e, r));
      },
      prepareFrame: function (e) {
        this.prepareRenderableFrame(e),
          this.prepareProperties(e, (this || t).isInRange);
      },
    };
    function ITextElement() {}
    (ITextElement.prototype.initElement = function (e, r, i) {
      ((this || t).lettersChangedFlag = !0),
        this.initFrame(),
        this.initBaseData(e, r, i),
        ((this || t).textProperty = new TextProperty(
          this || t,
          e.t,
          (this || t).dynamicProperties
        )),
        ((this || t).textAnimator = new TextAnimatorProperty(
          e.t,
          (this || t).renderType,
          this || t
        )),
        this.initTransform(e, r, i),
        this.initHierarchy(),
        this.initRenderable(),
        this.initRendererElement(),
        this.createContainerElements(),
        this.createRenderableComponents(),
        this.createContent(),
        this.hide(),
        (this || t).textAnimator.searchProperties(
          (this || t).dynamicProperties
        );
    }),
      (ITextElement.prototype.prepareFrame = function (e) {
        ((this || t)._mdf = !1),
          this.prepareRenderableFrame(e),
          this.prepareProperties(e, (this || t).isInRange),
          ((this || t).textProperty._mdf ||
            (this || t).textProperty._isFirstFrame) &&
            (this.buildNewText(),
            ((this || t).textProperty._isFirstFrame = !1),
            ((this || t).textProperty._mdf = !1));
      }),
      (ITextElement.prototype.createPathShape = function (e, r) {
        var i,
          s = r.length,
          a,
          n = "";
        for (i = 0; i < s; i += 1)
          (a = r[i].ks.k), (n += buildShapeString(a, a.i.length, !0, e));
        return n;
      }),
      (ITextElement.prototype.updateDocumentData = function (e, r) {
        (this || t).textProperty.updateDocumentData(e, r);
      }),
      (ITextElement.prototype.canResizeFont = function (e) {
        (this || t).textProperty.canResizeFont(e);
      }),
      (ITextElement.prototype.setMinimumFontSize = function (e) {
        (this || t).textProperty.setMinimumFontSize(e);
      }),
      (ITextElement.prototype.applyTextPropertiesToMatrix = function (
        e,
        r,
        i,
        s,
        a
      ) {
        switch (
          (e.ps && r.translate(e.ps[0], e.ps[1] + e.ascent, 0),
          r.translate(0, -e.ls, 0),
          e.j)
        ) {
          case 1:
            r.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[i]), 0, 0);
            break;
          case 2:
            r.translate(
              e.justifyOffset + (e.boxWidth - e.lineWidths[i]) / 2,
              0,
              0
            );
            break;
          default:
            break;
        }
        r.translate(s, a, 0);
      }),
      (ITextElement.prototype.buildColor = function (e) {
        return (
          "rgb(" +
          Math.round(e[0] * 255) +
          "," +
          Math.round(e[1] * 255) +
          "," +
          Math.round(e[2] * 255) +
          ")"
        );
      }),
      (ITextElement.prototype.emptyProp = new LetterProps()),
      (ITextElement.prototype.destroy = function () {});
    function ICompElement() {}
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
      ],
      ICompElement
    ),
      (ICompElement.prototype.initElement = function (e, r, i) {
        this.initFrame(),
          this.initBaseData(e, r, i),
          this.initTransform(e, r, i),
          this.initRenderable(),
          this.initHierarchy(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.createRenderableComponents(),
          ((this || t).data.xt || !r.progressiveLoad) && this.buildAllItems(),
          this.hide();
      }),
      (ICompElement.prototype.prepareFrame = function (e) {
        if (
          (((this || t)._mdf = !1),
          this.prepareRenderableFrame(e),
          this.prepareProperties(e, (this || t).isInRange),
          !(!(this || t).isInRange && !(this || t).data.xt))
        ) {
          if ((this || t).tm._placeholder)
            (this || t).renderedFrame = e / (this || t).data.sr;
          else {
            var r = (this || t).tm.v;
            r === (this || t).data.op && (r = (this || t).data.op - 1),
              ((this || t).renderedFrame = r);
          }
          var i,
            s = (this || t).elements.length;
          for (
            (this || t).completeLayers ||
              this.checkLayers((this || t).renderedFrame),
              i = s - 1;
            i >= 0;
            i -= 1
          )
            ((this || t).completeLayers || (this || t).elements[i]) &&
              ((this || t).elements[i].prepareFrame(
                (this || t).renderedFrame - (this || t).layers[i].st
              ),
              (this || t).elements[i]._mdf && ((this || t)._mdf = !0));
        }
      }),
      (ICompElement.prototype.renderInnerContent = function () {
        var e,
          r = (this || t).layers.length;
        for (e = 0; e < r; e += 1)
          ((this || t).completeLayers || (this || t).elements[e]) &&
            (this || t).elements[e].renderFrame();
      }),
      (ICompElement.prototype.setElements = function (e) {
        (this || t).elements = e;
      }),
      (ICompElement.prototype.getElements = function () {
        return (this || t).elements;
      }),
      (ICompElement.prototype.destroyElements = function () {
        var e,
          r = (this || t).layers.length;
        for (e = 0; e < r; e += 1)
          (this || t).elements[e] && (this || t).elements[e].destroy();
      }),
      (ICompElement.prototype.destroy = function () {
        this.destroyElements(), this.destroyBaseElement();
      });
    function IImageElement(e, r, i) {
      ((this || t).assetData = r.getAssetData(e.refId)),
        this.initElement(e, r, i),
        ((this || t).sourceRect = {
          top: 0,
          left: 0,
          width: (this || t).assetData.w,
          height: (this || t).assetData.h,
        });
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
      ],
      IImageElement
    ),
      (IImageElement.prototype.createContent = function () {
        var e = (this || t).globalData.getAssetsPath((this || t).assetData);
        ((this || t).innerElem = createNS("image")),
          (this || t).innerElem.setAttribute(
            "width",
            (this || t).assetData.w + "px"
          ),
          (this || t).innerElem.setAttribute(
            "height",
            (this || t).assetData.h + "px"
          ),
          (this || t).innerElem.setAttribute(
            "preserveAspectRatio",
            (this || t).assetData.pr ||
              (this || t).globalData.renderConfig.imagePreserveAspectRatio
          ),
          (this || t).innerElem.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "href",
            e
          ),
          (this || t).layerElement.appendChild((this || t).innerElem);
      }),
      (IImageElement.prototype.sourceRectAtTime = function () {
        return (this || t).sourceRect;
      });
    function ISolidElement(e, r, i) {
      this.initElement(e, r, i);
    }
    extendPrototype([IImageElement], ISolidElement),
      (ISolidElement.prototype.createContent = function () {
        var e = createNS("rect");
        e.setAttribute("width", (this || t).data.sw),
          e.setAttribute("height", (this || t).data.sh),
          e.setAttribute("fill", (this || t).data.sc),
          (this || t).layerElement.appendChild(e);
      });
    function AudioElement(e, r, i) {
      this.initFrame(),
        this.initRenderable(),
        ((this || t).assetData = r.getAssetData(e.refId)),
        this.initBaseData(e, r, i),
        ((this || t)._isPlaying = !1),
        ((this || t)._canPlay = !1);
      var s = (this || t).globalData.getAssetsPath((this || t).assetData);
      ((this || t).audio = (this || t).globalData.audioController.createAudio(
        s
      )),
        ((this || t)._currentTime = 0),
        (this || t).globalData.audioController.addAudio(this || t),
        ((this || t).tm = e.tm
          ? PropertyFactory.getProp(this || t, e.tm, 0, r.frameRate, this || t)
          : { _placeholder: !0 });
    }
    (AudioElement.prototype.prepareFrame = function (e) {
      if (
        (this.prepareRenderableFrame(e, !0),
        this.prepareProperties(e, !0),
        (this || t).tm._placeholder)
      )
        (this || t)._currentTime = e / (this || t).data.sr;
      else {
        var r = (this || t).tm.v;
        (this || t)._currentTime = r;
      }
    }),
      extendPrototype(
        [RenderableElement, BaseElement, FrameElement],
        AudioElement
      ),
      (AudioElement.prototype.renderFrame = function () {
        (this || t).isInRange &&
          (this || t)._canPlay &&
          ((this || t)._isPlaying
            ? (!(this || t).audio.playing() ||
                Math.abs(
                  (this || t)._currentTime / (this || t).globalData.frameRate -
                    (this || t).audio.seek()
                ) > 0.1) &&
              (this || t).audio.seek(
                (this || t)._currentTime / (this || t).globalData.frameRate
              )
            : ((this || t).audio.play(),
              (this || t).audio.seek(
                (this || t)._currentTime / (this || t).globalData.frameRate
              ),
              ((this || t)._isPlaying = !0)));
      }),
      (AudioElement.prototype.show = function () {}),
      (AudioElement.prototype.hide = function () {
        (this || t).audio.pause(), ((this || t)._isPlaying = !1);
      }),
      (AudioElement.prototype.pause = function () {
        (this || t).audio.pause(),
          ((this || t)._isPlaying = !1),
          ((this || t)._canPlay = !1);
      }),
      (AudioElement.prototype.resume = function () {
        (this || t)._canPlay = !0;
      }),
      (AudioElement.prototype.setRate = function (e) {
        (this || t).audio.rate(e);
      }),
      (AudioElement.prototype.volume = function (e) {
        (this || t).audio.volume(e);
      }),
      (AudioElement.prototype.getBaseElement = function () {
        return null;
      }),
      (AudioElement.prototype.destroy = function () {}),
      (AudioElement.prototype.sourceRectAtTime = function () {}),
      (AudioElement.prototype.initExpressions = function () {});
    function FootageElement(e, r, i) {
      this.initFrame(),
        this.initRenderable(),
        ((this || t).assetData = r.getAssetData(e.refId)),
        ((this || t).footageData = r.imageLoader.getAsset(
          (this || t).assetData
        )),
        this.initBaseData(e, r, i);
    }
    (FootageElement.prototype.prepareFrame = function () {}),
      extendPrototype(
        [RenderableElement, BaseElement, FrameElement],
        FootageElement
      ),
      (FootageElement.prototype.getBaseElement = function () {
        return null;
      }),
      (FootageElement.prototype.renderFrame = function () {}),
      (FootageElement.prototype.destroy = function () {}),
      (FootageElement.prototype.initExpressions = function () {
        (this || t).layerInterface = FootageInterface(this || t);
      }),
      (FootageElement.prototype.getFootageData = function () {
        return (this || t).footageData;
      });
    function SVGCompElement(e, r, i) {
      ((this || t).layers = e.layers),
        ((this || t).supports3d = !0),
        ((this || t).completeLayers = !1),
        ((this || t).pendingElements = []),
        ((this || t).elements = (this || t).layers
          ? createSizedArray((this || t).layers.length)
          : []),
        this.initElement(e, r, i),
        ((this || t).tm = e.tm
          ? PropertyFactory.getProp(this || t, e.tm, 0, r.frameRate, this || t)
          : { _placeholder: !0 });
    }
    extendPrototype(
      [SVGRenderer, ICompElement, SVGBaseElement],
      SVGCompElement
    );
    function SVGTextLottieElement(e, r, i) {
      ((this || t).textSpans = []),
        ((this || t).renderType = "svg"),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement,
      ],
      SVGTextLottieElement
    ),
      (SVGTextLottieElement.prototype.createContent = function () {
        (this || t).data.singleShape &&
          !(this || t).globalData.fontManager.chars &&
          ((this || t).textContainer = createNS("text"));
      }),
      (SVGTextLottieElement.prototype.buildTextContents = function (e) {
        for (var r = 0, i = e.length, s = [], a = ""; r < i; )
          e[r] === String.fromCharCode(13) || e[r] === String.fromCharCode(3)
            ? (s.push(a), (a = ""))
            : (a += e[r]),
            (r += 1);
        return s.push(a), s;
      }),
      (SVGTextLottieElement.prototype.buildNewText = function () {
        var e,
          r,
          i = (this || t).textProperty.currentData;
        ((this || t).renderedLetters = createSizedArray(i ? i.l.length : 0)),
          i.fc
            ? (this || t).layerElement.setAttribute(
                "fill",
                this.buildColor(i.fc)
              )
            : (this || t).layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
          i.sc &&
            ((this || t).layerElement.setAttribute(
              "stroke",
              this.buildColor(i.sc)
            ),
            (this || t).layerElement.setAttribute("stroke-width", i.sw)),
          (this || t).layerElement.setAttribute("font-size", i.finalSize);
        var s = (this || t).globalData.fontManager.getFontByName(i.f);
        if (s.fClass) (this || t).layerElement.setAttribute("class", s.fClass);
        else {
          (this || t).layerElement.setAttribute("font-family", s.fFamily);
          var a = i.fWeight,
            n = i.fStyle;
          (this || t).layerElement.setAttribute("font-style", n),
            (this || t).layerElement.setAttribute("font-weight", a);
        }
        (this || t).layerElement.setAttribute("aria-label", i.t);
        var l = i.l || [],
          v = !!(this || t).globalData.fontManager.chars;
        r = l.length;
        var y,
          g = (this || t).mHelper,
          P,
          S = "",
          u = (this || t).data.singleShape,
          d = 0,
          C = 0,
          f = !0,
          p = i.tr * 0.001 * i.finalSize;
        if (u && !v && !i.sz) {
          var c = (this || t).textContainer,
            o = "start";
          switch (i.j) {
            case 1:
              o = "end";
              break;
            case 2:
              o = "middle";
              break;
            default:
              o = "start";
              break;
          }
          c.setAttribute("text-anchor", o), c.setAttribute("letter-spacing", p);
          var h = this.buildTextContents(i.finalText);
          for (
            r = h.length, C = i.ps ? i.ps[1] + i.ascent : 0, e = 0;
            e < r;
            e += 1
          )
            (y = (this || t).textSpans[e] || createNS("tspan")),
              (y.textContent = h[e]),
              y.setAttribute("x", 0),
              y.setAttribute("y", C),
              (y.style.display = "inherit"),
              c.appendChild(y),
              ((this || t).textSpans[e] = y),
              (C += i.finalLineHeight);
          (this || t).layerElement.appendChild(c);
        } else {
          var m = (this || t).textSpans.length,
            b,
            A;
          for (e = 0; e < r; e += 1)
            (!v || !u || e === 0) &&
              ((y =
                m > e
                  ? (this || t).textSpans[e]
                  : createNS(v ? "path" : "text")),
              m <= e &&
                (y.setAttribute("stroke-linecap", "butt"),
                y.setAttribute("stroke-linejoin", "round"),
                y.setAttribute("stroke-miterlimit", "4"),
                ((this || t).textSpans[e] = y),
                (this || t).layerElement.appendChild(y)),
              (y.style.display = "inherit")),
              g.reset(),
              g.scale(i.finalSize / 100, i.finalSize / 100),
              u &&
                (l[e].n &&
                  ((d = -p), (C += i.yOffset), (C += f ? 1 : 0), (f = !1)),
                this.applyTextPropertiesToMatrix(i, g, l[e].line, d, C),
                (d += l[e].l || 0),
                (d += p)),
              v
                ? ((A = (this || t).globalData.fontManager.getCharData(
                    i.finalText[e],
                    s.fStyle,
                    (this || t).globalData.fontManager.getFontByName(i.f)
                      .fFamily
                  )),
                  (b = (A && A.data) || {}),
                  (P = b.shapes ? b.shapes[0].it : []),
                  u
                    ? (S += this.createPathShape(g, P))
                    : y.setAttribute("d", this.createPathShape(g, P)))
                : (u &&
                    y.setAttribute(
                      "transform",
                      "translate(" + g.props[12] + "," + g.props[13] + ")"
                    ),
                  (y.textContent = l[e].val),
                  y.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  ));
          u && y && y.setAttribute("d", S);
        }
        for (; e < (this || t).textSpans.length; )
          ((this || t).textSpans[e].style.display = "none"), (e += 1);
        (this || t)._sizeChanged = !0;
      }),
      (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
        if (
          (this.prepareFrame(
            (this || t).comp.renderedFrame - (this || t).data.st
          ),
          this.renderInnerContent(),
          (this || t)._sizeChanged)
        ) {
          (this || t)._sizeChanged = !1;
          var e = (this || t).layerElement.getBBox();
          (this || t).bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height,
          };
        }
        return (this || t).bbox;
      }),
      (SVGTextLottieElement.prototype.renderInnerContent = function () {
        if (
          !(this || t).data.singleShape &&
          ((this || t).textAnimator.getMeasures(
            (this || t).textProperty.currentData,
            (this || t).lettersChangedFlag
          ),
          (this || t).lettersChangedFlag ||
            (this || t).textAnimator.lettersChangedFlag)
        ) {
          (this || t)._sizeChanged = !0;
          var e,
            r,
            i = (this || t).textAnimator.renderedLetters,
            s = (this || t).textProperty.currentData.l;
          r = s.length;
          var a, n;
          for (e = 0; e < r; e += 1)
            s[e].n ||
              ((a = i[e]),
              (n = (this || t).textSpans[e]),
              a._mdf.m && n.setAttribute("transform", a.m),
              a._mdf.o && n.setAttribute("opacity", a.o),
              a._mdf.sw && n.setAttribute("stroke-width", a.sw),
              a._mdf.sc && n.setAttribute("stroke", a.sc),
              a._mdf.fc && n.setAttribute("fill", a.fc));
        }
      });
    function SVGShapeElement(e, r, i) {
      ((this || t).shapes = []),
        ((this || t).shapesData = e.shapes),
        ((this || t).stylesList = []),
        ((this || t).shapeModifiers = []),
        ((this || t).itemsData = []),
        ((this || t).processedElements = []),
        ((this || t).animatedContents = []),
        this.initElement(e, r, i),
        ((this || t).prevViewData = []);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        SVGBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
      ],
      SVGShapeElement
    ),
      (SVGShapeElement.prototype.initSecondaryElement = function () {}),
      (SVGShapeElement.prototype.identityMatrix = new Matrix()),
      (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
      (SVGShapeElement.prototype.createContent = function () {
        this.searchShapes(
          (this || t).shapesData,
          (this || t).itemsData,
          (this || t).prevViewData,
          (this || t).layerElement,
          0,
          [],
          !0
        ),
          this.filterUniqueShapes();
      }),
      (SVGShapeElement.prototype.filterUniqueShapes = function () {
        var e,
          r = (this || t).shapes.length,
          i,
          s,
          a = (this || t).stylesList.length,
          n,
          l = [],
          v = !1;
        for (s = 0; s < a; s += 1) {
          for (
            n = (this || t).stylesList[s], v = !1, l.length = 0, e = 0;
            e < r;
            e += 1
          )
            (i = (this || t).shapes[e]),
              i.styles.indexOf(n) !== -1 &&
                (l.push(i), (v = i._isAnimated || v));
          l.length > 1 && v && this.setShapesAsAnimated(l);
        }
      }),
      (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
        var r,
          i = e.length;
        for (r = 0; r < i; r += 1) e[r].setAsAnimated();
      }),
      (SVGShapeElement.prototype.createStyleElement = function (e, r) {
        var i,
          s = new SVGStyleData(e, r),
          a = s.pElem;
        if (e.ty === "st") i = new SVGStrokeStyleData(this || t, e, s);
        else if (e.ty === "fl") i = new SVGFillStyleData(this || t, e, s);
        else if (e.ty === "gf" || e.ty === "gs") {
          var n =
            e.ty === "gf"
              ? SVGGradientFillStyleData
              : SVGGradientStrokeStyleData;
          (i = new n(this || t, e, s)),
            (this || t).globalData.defs.appendChild(i.gf),
            i.maskId &&
              ((this || t).globalData.defs.appendChild(i.ms),
              (this || t).globalData.defs.appendChild(i.of),
              a.setAttribute(
                "mask",
                "url(" + locationHref + "#" + i.maskId + ")"
              ));
        }
        return (
          (e.ty === "st" || e.ty === "gs") &&
            (a.setAttribute(
              "stroke-linecap",
              (this || t).lcEnum[e.lc] || "round"
            ),
            a.setAttribute(
              "stroke-linejoin",
              (this || t).ljEnum[e.lj] || "round"
            ),
            a.setAttribute("fill-opacity", "0"),
            e.lj === 1 && a.setAttribute("stroke-miterlimit", e.ml)),
          e.r === 2 && a.setAttribute("fill-rule", "evenodd"),
          e.ln && a.setAttribute("id", e.ln),
          e.cl && a.setAttribute("class", e.cl),
          e.bm && (a.style["mix-blend-mode"] = getBlendMode(e.bm)),
          (this || t).stylesList.push(s),
          this.addToAnimatedContents(e, i),
          i
        );
      }),
      (SVGShapeElement.prototype.createGroupElement = function (e) {
        var r = new ShapeGroupData();
        return (
          e.ln && r.gr.setAttribute("id", e.ln),
          e.cl && r.gr.setAttribute("class", e.cl),
          e.bm && (r.gr.style["mix-blend-mode"] = getBlendMode(e.bm)),
          r
        );
      }),
      (SVGShapeElement.prototype.createTransformElement = function (e, r) {
        var i = TransformPropertyFactory.getTransformProperty(
            this || t,
            e,
            this || t
          ),
          s = new SVGTransformData(i, i.o, r);
        return this.addToAnimatedContents(e, s), s;
      }),
      (SVGShapeElement.prototype.createShapeElement = function (e, r, i) {
        var s = 4;
        e.ty === "rc"
          ? (s = 5)
          : e.ty === "el"
          ? (s = 6)
          : e.ty === "sr" && (s = 7);
        var a = ShapePropertyFactory.getShapeProp(this || t, e, s, this || t),
          n = new SVGShapeData(r, i, a);
        return (
          (this || t).shapes.push(n),
          this.addShapeToModifiers(n),
          this.addToAnimatedContents(e, n),
          n
        );
      }),
      (SVGShapeElement.prototype.addToAnimatedContents = function (e, r) {
        for (var i = 0, s = (this || t).animatedContents.length; i < s; ) {
          if ((this || t).animatedContents[i].element === r) return;
          i += 1;
        }
        (this || t).animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(e),
          element: r,
          data: e,
        });
      }),
      (SVGShapeElement.prototype.setElementStyles = function (e) {
        var r = e.styles,
          i,
          s = (this || t).stylesList.length;
        for (i = 0; i < s; i += 1)
          (this || t).stylesList[i].closed || r.push((this || t).stylesList[i]);
      }),
      (SVGShapeElement.prototype.reloadShapes = function () {
        (this || t)._isFirstFrame = !0;
        var e,
          r = (this || t).itemsData.length;
        for (e = 0; e < r; e += 1)
          (this || t).prevViewData[e] = (this || t).itemsData[e];
        for (
          this.searchShapes(
            (this || t).shapesData,
            (this || t).itemsData,
            (this || t).prevViewData,
            (this || t).layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            r = (this || t).dynamicProperties.length,
            e = 0;
          e < r;
          e += 1
        )
          (this || t).dynamicProperties[e].getValue();
        this.renderModifiers();
      }),
      (SVGShapeElement.prototype.searchShapes = function (e, r, i, s, a, n, l) {
        var v = [].concat(n),
          y,
          g = e.length - 1,
          P,
          S,
          u = [],
          d = [],
          C,
          f,
          p;
        for (y = g; y >= 0; y -= 1) {
          if (
            ((p = this.searchProcessedElement(e[y])),
            p ? (r[y] = i[p - 1]) : (e[y]._render = l),
            e[y].ty === "fl" ||
              e[y].ty === "st" ||
              e[y].ty === "gf" ||
              e[y].ty === "gs")
          )
            p
              ? (r[y].style.closed = !1)
              : (r[y] = this.createStyleElement(e[y], a)),
              e[y]._render && s.appendChild(r[y].style.pElem),
              u.push(r[y].style);
          else if (e[y].ty === "gr") {
            if (!p) r[y] = this.createGroupElement(e[y]);
            else
              for (S = r[y].it.length, P = 0; P < S; P += 1)
                r[y].prevViewData[P] = r[y].it[P];
            this.searchShapes(
              e[y].it,
              r[y].it,
              r[y].prevViewData,
              r[y].gr,
              a + 1,
              v,
              l
            ),
              e[y]._render && s.appendChild(r[y].gr);
          } else
            e[y].ty === "tr"
              ? (p || (r[y] = this.createTransformElement(e[y], s)),
                (C = r[y].transform),
                v.push(C))
              : e[y].ty === "sh" ||
                e[y].ty === "rc" ||
                e[y].ty === "el" ||
                e[y].ty === "sr"
              ? (p || (r[y] = this.createShapeElement(e[y], v, a)),
                this.setElementStyles(r[y]))
              : e[y].ty === "tm" ||
                e[y].ty === "rd" ||
                e[y].ty === "ms" ||
                e[y].ty === "pb"
              ? (p
                  ? ((f = r[y]), (f.closed = !1))
                  : ((f = ShapeModifiers.getModifier(e[y].ty)),
                    f.init(this || t, e[y]),
                    (r[y] = f),
                    (this || t).shapeModifiers.push(f)),
                d.push(f))
              : e[y].ty === "rp" &&
                (p
                  ? ((f = r[y]), (f.closed = !0))
                  : ((f = ShapeModifiers.getModifier(e[y].ty)),
                    (r[y] = f),
                    f.init(this || t, e, y, r),
                    (this || t).shapeModifiers.push(f),
                    (l = !1)),
                d.push(f));
          this.addProcessedElement(e[y], y + 1);
        }
        for (g = u.length, y = 0; y < g; y += 1) u[y].closed = !0;
        for (g = d.length, y = 0; y < g; y += 1) d[y].closed = !0;
      }),
      (SVGShapeElement.prototype.renderInnerContent = function () {
        this.renderModifiers();
        var e,
          r = (this || t).stylesList.length;
        for (e = 0; e < r; e += 1) (this || t).stylesList[e].reset();
        for (this.renderShape(), e = 0; e < r; e += 1)
          ((this || t).stylesList[e]._mdf || (this || t)._isFirstFrame) &&
            ((this || t).stylesList[e].msElem &&
              ((this || t).stylesList[e].msElem.setAttribute(
                "d",
                (this || t).stylesList[e].d
              ),
              ((this || t).stylesList[e].d =
                "M0 0" + (this || t).stylesList[e].d)),
            (this || t).stylesList[e].pElem.setAttribute(
              "d",
              (this || t).stylesList[e].d || "M0 0"
            ));
      }),
      (SVGShapeElement.prototype.renderShape = function () {
        var e,
          r = (this || t).animatedContents.length,
          i;
        for (e = 0; e < r; e += 1)
          (i = (this || t).animatedContents[e]),
            ((this || t)._isFirstFrame || i.element._isAnimated) &&
              i.data !== !0 &&
              i.fn(i.data, i.element, (this || t)._isFirstFrame);
      }),
      (SVGShapeElement.prototype.destroy = function () {
        this.destroyBaseElement(),
          ((this || t).shapesData = null),
          ((this || t).itemsData = null);
      });
    function SVGTintFilter(e, r) {
      (this || t).filterManager = r;
      var i = createNS("feColorMatrix");
      if (
        (i.setAttribute("type", "matrix"),
        i.setAttribute("color-interpolation-filters", "linearRGB"),
        i.setAttribute(
          "values",
          "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
        ),
        i.setAttribute("result", "f1"),
        e.appendChild(i),
        (i = createNS("feColorMatrix")),
        i.setAttribute("type", "matrix"),
        i.setAttribute("color-interpolation-filters", "sRGB"),
        i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
        i.setAttribute("result", "f2"),
        e.appendChild(i),
        ((this || t).matrixFilter = i),
        r.effectElements[2].p.v !== 100 || r.effectElements[2].p.k)
      ) {
        var s = createNS("feMerge");
        e.appendChild(s);
        var a;
        (a = createNS("feMergeNode")),
          a.setAttribute("in", "SourceGraphic"),
          s.appendChild(a),
          (a = createNS("feMergeNode")),
          a.setAttribute("in", "f2"),
          s.appendChild(a);
      }
    }
    SVGTintFilter.prototype.renderFrame = function (e) {
      if (e || (this || t).filterManager._mdf) {
        var r = (this || t).filterManager.effectElements[0].p.v,
          i = (this || t).filterManager.effectElements[1].p.v,
          s = (this || t).filterManager.effectElements[2].p.v / 100;
        (this || t).matrixFilter.setAttribute(
          "values",
          i[0] -
            r[0] +
            " 0 0 0 " +
            r[0] +
            " " +
            (i[1] - r[1]) +
            " 0 0 0 " +
            r[1] +
            " " +
            (i[2] - r[2]) +
            " 0 0 0 " +
            r[2] +
            " 0 0 0 " +
            s +
            " 0"
        );
      }
    };
    function SVGFillFilter(e, r) {
      (this || t).filterManager = r;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"),
        i.setAttribute("color-interpolation-filters", "sRGB"),
        i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
        e.appendChild(i),
        ((this || t).matrixFilter = i);
    }
    SVGFillFilter.prototype.renderFrame = function (e) {
      if (e || (this || t).filterManager._mdf) {
        var r = (this || t).filterManager.effectElements[2].p.v,
          i = (this || t).filterManager.effectElements[6].p.v;
        (this || t).matrixFilter.setAttribute(
          "values",
          "0 0 0 0 " +
            r[0] +
            " 0 0 0 0 " +
            r[1] +
            " 0 0 0 0 " +
            r[2] +
            " 0 0 0 " +
            i +
            " 0"
        );
      }
    };
    function SVGGaussianBlurEffect(e, r) {
      e.setAttribute("x", "-100%"),
        e.setAttribute("y", "-100%"),
        e.setAttribute("width", "300%"),
        e.setAttribute("height", "300%"),
        ((this || t).filterManager = r);
      var i = createNS("feGaussianBlur");
      e.appendChild(i), ((this || t).feGaussianBlur = i);
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
      if (e || (this || t).filterManager._mdf) {
        var r = 0.3,
          i = (this || t).filterManager.effectElements[0].p.v * r,
          s = (this || t).filterManager.effectElements[1].p.v,
          a = s == 3 ? 0 : i,
          n = s == 2 ? 0 : i;
        (this || t).feGaussianBlur.setAttribute("stdDeviation", a + " " + n);
        var l =
          (this || t).filterManager.effectElements[2].p.v == 1
            ? "wrap"
            : "duplicate";
        (this || t).feGaussianBlur.setAttribute("edgeMode", l);
      }
    };
    function SVGStrokeEffect(e, r) {
      ((this || t).initialized = !1),
        ((this || t).filterManager = r),
        ((this || t).elem = e),
        ((this || t).paths = []);
    }
    (SVGStrokeEffect.prototype.initialize = function () {
      var e =
          (this || t).elem.layerElement.children ||
          (this || t).elem.layerElement.childNodes,
        r,
        i,
        s,
        a;
      for (
        (this || t).filterManager.effectElements[1].p.v === 1
          ? ((a = (this || t).elem.maskManager.masksProperties.length), (s = 0))
          : ((s = (this || t).filterManager.effectElements[0].p.v - 1),
            (a = s + 1)),
          i = createNS("g"),
          i.setAttribute("fill", "none"),
          i.setAttribute("stroke-linecap", "round"),
          i.setAttribute("stroke-dashoffset", 1),
          s;
        s < a;
        s += 1
      )
        (r = createNS("path")),
          i.appendChild(r),
          (this || t).paths.push({ p: r, m: s });
      if ((this || t).filterManager.effectElements[10].p.v === 3) {
        var n = createNS("mask"),
          l = createElementID();
        n.setAttribute("id", l),
          n.setAttribute("mask-type", "alpha"),
          n.appendChild(i),
          (this || t).elem.globalData.defs.appendChild(n);
        var v = createNS("g");
        for (
          v.setAttribute("mask", "url(" + locationHref + "#" + l + ")");
          e[0];

        )
          v.appendChild(e[0]);
        (this || t).elem.layerElement.appendChild(v),
          ((this || t).masker = n),
          i.setAttribute("stroke", "#fff");
      } else if (
        (this || t).filterManager.effectElements[10].p.v === 1 ||
        (this || t).filterManager.effectElements[10].p.v === 2
      ) {
        if ((this || t).filterManager.effectElements[10].p.v === 2)
          for (
            e =
              (this || t).elem.layerElement.children ||
              (this || t).elem.layerElement.childNodes;
            e.length;

          )
            (this || t).elem.layerElement.removeChild(e[0]);
        (this || t).elem.layerElement.appendChild(i),
          (this || t).elem.layerElement.removeAttribute("mask"),
          i.setAttribute("stroke", "#fff");
      }
      ((this || t).initialized = !0), ((this || t).pathMasker = i);
    }),
      (SVGStrokeEffect.prototype.renderFrame = function (e) {
        (this || t).initialized || this.initialize();
        var r,
          i = (this || t).paths.length,
          s,
          a;
        for (r = 0; r < i; r += 1)
          if (
            (this || t).paths[r].m !== -1 &&
            ((s = (this || t).elem.maskManager.viewData[
              (this || t).paths[r].m
            ]),
            (a = (this || t).paths[r].p),
            (e || (this || t).filterManager._mdf || s.prop._mdf) &&
              a.setAttribute("d", s.lastPath),
            e ||
              (this || t).filterManager.effectElements[9].p._mdf ||
              (this || t).filterManager.effectElements[4].p._mdf ||
              (this || t).filterManager.effectElements[7].p._mdf ||
              (this || t).filterManager.effectElements[8].p._mdf ||
              s.prop._mdf)
          ) {
            var n;
            if (
              (this || t).filterManager.effectElements[7].p.v !== 0 ||
              (this || t).filterManager.effectElements[8].p.v !== 100
            ) {
              var l =
                  Math.min(
                    (this || t).filterManager.effectElements[7].p.v,
                    (this || t).filterManager.effectElements[8].p.v
                  ) * 0.01,
                v =
                  Math.max(
                    (this || t).filterManager.effectElements[7].p.v,
                    (this || t).filterManager.effectElements[8].p.v
                  ) * 0.01,
                y = a.getTotalLength();
              n = "0 0 0 " + y * l + " ";
              var g = y * (v - l),
                P =
                  1 +
                  (this || t).filterManager.effectElements[4].p.v *
                    2 *
                    (this || t).filterManager.effectElements[9].p.v *
                    0.01,
                S = Math.floor(g / P),
                u;
              for (u = 0; u < S; u += 1)
                n +=
                  "1 " +
                  (this || t).filterManager.effectElements[4].p.v *
                    2 *
                    (this || t).filterManager.effectElements[9].p.v *
                    0.01 +
                  " ";
              n += "0 " + y * 10 + " 0 0";
            } else
              n =
                "1 " +
                (this || t).filterManager.effectElements[4].p.v *
                  2 *
                  (this || t).filterManager.effectElements[9].p.v *
                  0.01;
            a.setAttribute("stroke-dasharray", n);
          }
        if (
          ((e || (this || t).filterManager.effectElements[4].p._mdf) &&
            (this || t).pathMasker.setAttribute(
              "stroke-width",
              (this || t).filterManager.effectElements[4].p.v * 2
            ),
          (e || (this || t).filterManager.effectElements[6].p._mdf) &&
            (this || t).pathMasker.setAttribute(
              "opacity",
              (this || t).filterManager.effectElements[6].p.v
            ),
          ((this || t).filterManager.effectElements[10].p.v === 1 ||
            (this || t).filterManager.effectElements[10].p.v === 2) &&
            (e || (this || t).filterManager.effectElements[3].p._mdf))
        ) {
          var d = (this || t).filterManager.effectElements[3].p.v;
          (this || t).pathMasker.setAttribute(
            "stroke",
            "rgb(" +
              bmFloor(d[0] * 255) +
              "," +
              bmFloor(d[1] * 255) +
              "," +
              bmFloor(d[2] * 255) +
              ")"
          );
        }
      });
    function SVGTritoneFilter(e, r) {
      (this || t).filterManager = r;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"),
        i.setAttribute("color-interpolation-filters", "linearRGB"),
        i.setAttribute(
          "values",
          "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
        ),
        i.setAttribute("result", "f1"),
        e.appendChild(i);
      var s = createNS("feComponentTransfer");
      s.setAttribute("color-interpolation-filters", "sRGB"),
        e.appendChild(s),
        ((this || t).matrixFilter = s);
      var a = createNS("feFuncR");
      a.setAttribute("type", "table"),
        s.appendChild(a),
        ((this || t).feFuncR = a);
      var n = createNS("feFuncG");
      n.setAttribute("type", "table"),
        s.appendChild(n),
        ((this || t).feFuncG = n);
      var l = createNS("feFuncB");
      l.setAttribute("type", "table"),
        s.appendChild(l),
        ((this || t).feFuncB = l);
    }
    SVGTritoneFilter.prototype.renderFrame = function (e) {
      if (e || (this || t).filterManager._mdf) {
        var r = (this || t).filterManager.effectElements[0].p.v,
          i = (this || t).filterManager.effectElements[1].p.v,
          s = (this || t).filterManager.effectElements[2].p.v,
          a = s[0] + " " + i[0] + " " + r[0],
          n = s[1] + " " + i[1] + " " + r[1],
          l = s[2] + " " + i[2] + " " + r[2];
        (this || t).feFuncR.setAttribute("tableValues", a),
          (this || t).feFuncG.setAttribute("tableValues", n),
          (this || t).feFuncB.setAttribute("tableValues", l);
      }
    };
    function SVGProLevelsFilter(e, r) {
      (this || t).filterManager = r;
      var i = (this || t).filterManager.effectElements,
        s = createNS("feComponentTransfer");
      (i[10].p.k ||
        i[10].p.v !== 0 ||
        i[11].p.k ||
        i[11].p.v !== 1 ||
        i[12].p.k ||
        i[12].p.v !== 1 ||
        i[13].p.k ||
        i[13].p.v !== 0 ||
        i[14].p.k ||
        i[14].p.v !== 1) &&
        ((this || t).feFuncR = this.createFeFunc("feFuncR", s)),
        (i[17].p.k ||
          i[17].p.v !== 0 ||
          i[18].p.k ||
          i[18].p.v !== 1 ||
          i[19].p.k ||
          i[19].p.v !== 1 ||
          i[20].p.k ||
          i[20].p.v !== 0 ||
          i[21].p.k ||
          i[21].p.v !== 1) &&
          ((this || t).feFuncG = this.createFeFunc("feFuncG", s)),
        (i[24].p.k ||
          i[24].p.v !== 0 ||
          i[25].p.k ||
          i[25].p.v !== 1 ||
          i[26].p.k ||
          i[26].p.v !== 1 ||
          i[27].p.k ||
          i[27].p.v !== 0 ||
          i[28].p.k ||
          i[28].p.v !== 1) &&
          ((this || t).feFuncB = this.createFeFunc("feFuncB", s)),
        (i[31].p.k ||
          i[31].p.v !== 0 ||
          i[32].p.k ||
          i[32].p.v !== 1 ||
          i[33].p.k ||
          i[33].p.v !== 1 ||
          i[34].p.k ||
          i[34].p.v !== 0 ||
          i[35].p.k ||
          i[35].p.v !== 1) &&
          ((this || t).feFuncA = this.createFeFunc("feFuncA", s)),
        ((this || t).feFuncR ||
          (this || t).feFuncG ||
          (this || t).feFuncB ||
          (this || t).feFuncA) &&
          (s.setAttribute("color-interpolation-filters", "sRGB"),
          e.appendChild(s),
          (s = createNS("feComponentTransfer"))),
        (i[3].p.k ||
          i[3].p.v !== 0 ||
          i[4].p.k ||
          i[4].p.v !== 1 ||
          i[5].p.k ||
          i[5].p.v !== 1 ||
          i[6].p.k ||
          i[6].p.v !== 0 ||
          i[7].p.k ||
          i[7].p.v !== 1) &&
          (s.setAttribute("color-interpolation-filters", "sRGB"),
          e.appendChild(s),
          ((this || t).feFuncRComposed = this.createFeFunc("feFuncR", s)),
          ((this || t).feFuncGComposed = this.createFeFunc("feFuncG", s)),
          ((this || t).feFuncBComposed = this.createFeFunc("feFuncB", s)));
    }
    (SVGProLevelsFilter.prototype.createFeFunc = function (e, r) {
      var i = createNS(e);
      return i.setAttribute("type", "table"), r.appendChild(i), i;
    }),
      (SVGProLevelsFilter.prototype.getTableValue = function (e, r, i, s, a) {
        for (
          var n = 0,
            l = 256,
            v,
            y = Math.min(e, r),
            g = Math.max(e, r),
            P = Array.call(null, { length: l }),
            S,
            u = 0,
            d = a - s,
            C = r - e;
          n <= 256;

        )
          (v = n / 256),
            v <= y
              ? (S = C < 0 ? a : s)
              : v >= g
              ? (S = C < 0 ? s : a)
              : (S = s + d * Math.pow((v - e) / C, 1 / i)),
            (P[u] = S),
            (u += 1),
            (n += 256 / (l - 1));
        return P.join(" ");
      }),
      (SVGProLevelsFilter.prototype.renderFrame = function (e) {
        if (e || (this || t).filterManager._mdf) {
          var r,
            i = (this || t).filterManager.effectElements;
          (this || t).feFuncRComposed &&
            (e ||
              i[3].p._mdf ||
              i[4].p._mdf ||
              i[5].p._mdf ||
              i[6].p._mdf ||
              i[7].p._mdf) &&
            ((r = this.getTableValue(
              i[3].p.v,
              i[4].p.v,
              i[5].p.v,
              i[6].p.v,
              i[7].p.v
            )),
            (this || t).feFuncRComposed.setAttribute("tableValues", r),
            (this || t).feFuncGComposed.setAttribute("tableValues", r),
            (this || t).feFuncBComposed.setAttribute("tableValues", r)),
            (this || t).feFuncR &&
              (e ||
                i[10].p._mdf ||
                i[11].p._mdf ||
                i[12].p._mdf ||
                i[13].p._mdf ||
                i[14].p._mdf) &&
              ((r = this.getTableValue(
                i[10].p.v,
                i[11].p.v,
                i[12].p.v,
                i[13].p.v,
                i[14].p.v
              )),
              (this || t).feFuncR.setAttribute("tableValues", r)),
            (this || t).feFuncG &&
              (e ||
                i[17].p._mdf ||
                i[18].p._mdf ||
                i[19].p._mdf ||
                i[20].p._mdf ||
                i[21].p._mdf) &&
              ((r = this.getTableValue(
                i[17].p.v,
                i[18].p.v,
                i[19].p.v,
                i[20].p.v,
                i[21].p.v
              )),
              (this || t).feFuncG.setAttribute("tableValues", r)),
            (this || t).feFuncB &&
              (e ||
                i[24].p._mdf ||
                i[25].p._mdf ||
                i[26].p._mdf ||
                i[27].p._mdf ||
                i[28].p._mdf) &&
              ((r = this.getTableValue(
                i[24].p.v,
                i[25].p.v,
                i[26].p.v,
                i[27].p.v,
                i[28].p.v
              )),
              (this || t).feFuncB.setAttribute("tableValues", r)),
            (this || t).feFuncA &&
              (e ||
                i[31].p._mdf ||
                i[32].p._mdf ||
                i[33].p._mdf ||
                i[34].p._mdf ||
                i[35].p._mdf) &&
              ((r = this.getTableValue(
                i[31].p.v,
                i[32].p.v,
                i[33].p.v,
                i[34].p.v,
                i[35].p.v
              )),
              (this || t).feFuncA.setAttribute("tableValues", r));
        }
      });
    function SVGDropShadowEffect(e, r) {
      var i = r.container.globalData.renderConfig.filterSize;
      e.setAttribute("x", i.x),
        e.setAttribute("y", i.y),
        e.setAttribute("width", i.width),
        e.setAttribute("height", i.height),
        ((this || t).filterManager = r);
      var s = createNS("feGaussianBlur");
      s.setAttribute("in", "SourceAlpha"),
        s.setAttribute("result", "drop_shadow_1"),
        s.setAttribute("stdDeviation", "0"),
        ((this || t).feGaussianBlur = s),
        e.appendChild(s);
      var a = createNS("feOffset");
      a.setAttribute("dx", "25"),
        a.setAttribute("dy", "0"),
        a.setAttribute("in", "drop_shadow_1"),
        a.setAttribute("result", "drop_shadow_2"),
        ((this || t).feOffset = a),
        e.appendChild(a);
      var n = createNS("feFlood");
      n.setAttribute("flood-color", "#00ff00"),
        n.setAttribute("flood-opacity", "1"),
        n.setAttribute("result", "drop_shadow_3"),
        ((this || t).feFlood = n),
        e.appendChild(n);
      var l = createNS("feComposite");
      l.setAttribute("in", "drop_shadow_3"),
        l.setAttribute("in2", "drop_shadow_2"),
        l.setAttribute("operator", "in"),
        l.setAttribute("result", "drop_shadow_4"),
        e.appendChild(l);
      var v = createNS("feMerge");
      e.appendChild(v);
      var y;
      (y = createNS("feMergeNode")),
        v.appendChild(y),
        (y = createNS("feMergeNode")),
        y.setAttribute("in", "SourceGraphic"),
        ((this || t).feMergeNode = y),
        ((this || t).feMerge = v),
        ((this || t).originalNodeAdded = !1),
        v.appendChild(y);
    }
    SVGDropShadowEffect.prototype.renderFrame = function (e) {
      if (e || (this || t).filterManager._mdf) {
        if (
          ((e || (this || t).filterManager.effectElements[4].p._mdf) &&
            (this || t).feGaussianBlur.setAttribute(
              "stdDeviation",
              (this || t).filterManager.effectElements[4].p.v / 4
            ),
          e || (this || t).filterManager.effectElements[0].p._mdf)
        ) {
          var r = (this || t).filterManager.effectElements[0].p.v;
          (this || t).feFlood.setAttribute(
            "flood-color",
            rgbToHex(
              Math.round(r[0] * 255),
              Math.round(r[1] * 255),
              Math.round(r[2] * 255)
            )
          );
        }
        if (
          ((e || (this || t).filterManager.effectElements[1].p._mdf) &&
            (this || t).feFlood.setAttribute(
              "flood-opacity",
              (this || t).filterManager.effectElements[1].p.v / 255
            ),
          e ||
            (this || t).filterManager.effectElements[2].p._mdf ||
            (this || t).filterManager.effectElements[3].p._mdf)
        ) {
          var i = (this || t).filterManager.effectElements[3].p.v,
            s =
              ((this || t).filterManager.effectElements[2].p.v - 90) *
              degToRads,
            a = i * Math.cos(s),
            n = i * Math.sin(s);
          (this || t).feOffset.setAttribute("dx", a),
            (this || t).feOffset.setAttribute("dy", n);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(e, r, i) {
      ((this || t).initialized = !1),
        ((this || t).filterManager = r),
        ((this || t).filterElem = e),
        ((this || t).elem = i),
        (i.matteElement = createNS("g")),
        i.matteElement.appendChild(i.layerElement),
        i.matteElement.appendChild(i.transformedElement),
        (i.baseElement = i.matteElement);
    }
    (SVGMatte3Effect.prototype.findSymbol = function (e) {
      for (var r = 0, i = _svgMatteSymbols.length; r < i; ) {
        if (_svgMatteSymbols[r] === e) return _svgMatteSymbols[r];
        r += 1;
      }
      return null;
    }),
      (SVGMatte3Effect.prototype.replaceInParent = function (e, r) {
        var i = e.layerElement.parentNode;
        if (i) {
          for (
            var s = i.children, a = 0, n = s.length;
            a < n && s[a] !== e.layerElement;

          )
            a += 1;
          var l;
          a <= n - 2 && (l = s[a + 1]);
          var v = createNS("use");
          v.setAttribute("href", "#" + r),
            l ? i.insertBefore(v, l) : i.appendChild(v);
        }
      }),
      (SVGMatte3Effect.prototype.setElementAsMask = function (e, r) {
        if (!this.findSymbol(r)) {
          var i = createElementID(),
            s = createNS("mask");
          s.setAttribute("id", r.layerId),
            s.setAttribute("mask-type", "alpha"),
            _svgMatteSymbols.push(r);
          var a = e.globalData.defs;
          a.appendChild(s);
          var n = createNS("symbol");
          n.setAttribute("id", i),
            this.replaceInParent(r, i),
            n.appendChild(r.layerElement),
            a.appendChild(n);
          var l = createNS("use");
          l.setAttribute("href", "#" + i),
            s.appendChild(l),
            (r.data.hd = !1),
            r.show();
        }
        e.setMatte(r.layerId);
      }),
      (SVGMatte3Effect.prototype.initialize = function () {
        for (
          var e = (this || t).filterManager.effectElements[0].p.v,
            r = (this || t).elem.comp.elements,
            i = 0,
            s = r.length;
          i < s;

        )
          r[i] &&
            r[i].data.ind === e &&
            this.setElementAsMask((this || t).elem, r[i]),
            (i += 1);
        (this || t).initialized = !0;
      }),
      (SVGMatte3Effect.prototype.renderFrame = function () {
        (this || t).initialized || this.initialize();
      });
    function SVGEffects(e) {
      var r,
        i = e.data.ef ? e.data.ef.length : 0,
        s = createElementID(),
        a = filtersFactory.createFilter(s, !0),
        n = 0;
      (this || t).filters = [];
      var l;
      for (r = 0; r < i; r += 1)
        (l = null),
          e.data.ef[r].ty === 20
            ? ((n += 1),
              (l = new SVGTintFilter(a, e.effectsManager.effectElements[r])))
            : e.data.ef[r].ty === 21
            ? ((n += 1),
              (l = new SVGFillFilter(a, e.effectsManager.effectElements[r])))
            : e.data.ef[r].ty === 22
            ? (l = new SVGStrokeEffect(e, e.effectsManager.effectElements[r]))
            : e.data.ef[r].ty === 23
            ? ((n += 1),
              (l = new SVGTritoneFilter(a, e.effectsManager.effectElements[r])))
            : e.data.ef[r].ty === 24
            ? ((n += 1),
              (l = new SVGProLevelsFilter(
                a,
                e.effectsManager.effectElements[r]
              )))
            : e.data.ef[r].ty === 25
            ? ((n += 1),
              (l = new SVGDropShadowEffect(
                a,
                e.effectsManager.effectElements[r]
              )))
            : e.data.ef[r].ty === 28
            ? (l = new SVGMatte3Effect(
                a,
                e.effectsManager.effectElements[r],
                e
              ))
            : e.data.ef[r].ty === 29 &&
              ((n += 1),
              (l = new SVGGaussianBlurEffect(
                a,
                e.effectsManager.effectElements[r]
              ))),
          l && (this || t).filters.push(l);
      n &&
        (e.globalData.defs.appendChild(a),
        e.layerElement.setAttribute(
          "filter",
          "url(" + locationHref + "#" + s + ")"
        )),
        (this || t).filters.length && e.addRenderableComponent(this || t);
    }
    SVGEffects.prototype.renderFrame = function (e) {
      var r,
        i = (this || t).filters.length;
      for (r = 0; r < i; r += 1) (this || t).filters[r].renderFrame(e);
    };
    function CVContextData() {
      ((this || t).saved = []),
        ((this || t).cArrPos = 0),
        ((this || t).cTr = new Matrix()),
        ((this || t).cO = 1);
      var e,
        r = 15;
      for (
        (this || t).savedOp = createTypedArray("float32", r), e = 0;
        e < r;
        e += 1
      )
        (this || t).saved[e] = createTypedArray("float32", 16);
      (this || t)._length = r;
    }
    (CVContextData.prototype.duplicate = function () {
      var e = (this || t)._length * 2,
        r = (this || t).savedOp;
      ((this || t).savedOp = createTypedArray("float32", e)),
        (this || t).savedOp.set(r);
      var i = 0;
      for (i = (this || t)._length; i < e; i += 1)
        (this || t).saved[i] = createTypedArray("float32", 16);
      (this || t)._length = e;
    }),
      (CVContextData.prototype.reset = function () {
        ((this || t).cArrPos = 0),
          (this || t).cTr.reset(),
          ((this || t).cO = 1);
      });
    function CVBaseElement() {}
    (CVBaseElement.prototype = {
      createElements: function () {},
      initRendererElement: function () {},
      createContainerElements: function () {
        ((this || t).canvasContext = (this || t).globalData.canvasContext),
          ((this || t).renderableEffectsManager = new CVEffects(this || t));
      },
      createContent: function () {},
      setBlendMode: function () {
        var e = (this || t).globalData;
        if (e.blendMode !== (this || t).data.bm) {
          e.blendMode = (this || t).data.bm;
          var r = getBlendMode((this || t).data.bm);
          e.canvasContext.globalCompositeOperation = r;
        }
      },
      createRenderableComponents: function () {
        (this || t).maskManager = new CVMaskElement(
          (this || t).data,
          this || t
        );
      },
      hideElement: function () {
        !(this || t).hidden &&
          (!(this || t).isInRange || (this || t).isTransparent) &&
          ((this || t).hidden = !0);
      },
      showElement: function () {
        (this || t).isInRange &&
          !(this || t).isTransparent &&
          (((this || t).hidden = !1),
          ((this || t)._isFirstFrame = !0),
          ((this || t).maskManager._isFirstFrame = !0));
      },
      renderFrame: function () {
        if (!((this || t).hidden || (this || t).data.hd)) {
          this.renderTransform(), this.renderRenderable(), this.setBlendMode();
          var e = (this || t).data.ty === 0;
          (this || t).globalData.renderer.save(e),
            (this || t).globalData.renderer.ctxTransform(
              (this || t).finalTransform.mat.props
            ),
            (this || t).globalData.renderer.ctxOpacity(
              (this || t).finalTransform.mProp.o.v
            ),
            this.renderInnerContent(),
            (this || t).globalData.renderer.restore(e),
            (this || t).maskManager.hasMasks &&
              (this || t).globalData.renderer.restore(!0),
            (this || t)._isFirstFrame && ((this || t)._isFirstFrame = !1);
        }
      },
      destroy: function () {
        ((this || t).canvasContext = null),
          ((this || t).data = null),
          ((this || t).globalData = null),
          (this || t).maskManager.destroy();
      },
      mHelper: new Matrix(),
    }),
      (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
      (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement);
    function CVImageElement(e, r, i) {
      ((this || t).assetData = r.getAssetData(e.refId)),
        ((this || t).img = r.imageLoader.getAsset((this || t).assetData)),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
      ],
      CVImageElement
    ),
      (CVImageElement.prototype.initElement =
        SVGShapeElement.prototype.initElement),
      (CVImageElement.prototype.prepareFrame =
        IImageElement.prototype.prepareFrame),
      (CVImageElement.prototype.createContent = function () {
        if (
          (this || t).img.width &&
          ((this || t).assetData.w !== (this || t).img.width ||
            (this || t).assetData.h !== (this || t).img.height)
        ) {
          var e = createTag("canvas");
          (e.width = (this || t).assetData.w),
            (e.height = (this || t).assetData.h);
          var r = e.getContext("2d"),
            i = (this || t).img.width,
            s = (this || t).img.height,
            a = i / s,
            n = (this || t).assetData.w / (this || t).assetData.h,
            l,
            v,
            y =
              (this || t).assetData.pr ||
              (this || t).globalData.renderConfig.imagePreserveAspectRatio;
          (a > n && y === "xMidYMid slice") || (a < n && y !== "xMidYMid slice")
            ? ((v = s), (l = v * n))
            : ((l = i), (v = l / n)),
            r.drawImage(
              (this || t).img,
              (i - l) / 2,
              (s - v) / 2,
              l,
              v,
              0,
              0,
              (this || t).assetData.w,
              (this || t).assetData.h
            ),
            ((this || t).img = e);
        }
      }),
      (CVImageElement.prototype.renderInnerContent = function () {
        (this || t).canvasContext.drawImage((this || t).img, 0, 0);
      }),
      (CVImageElement.prototype.destroy = function () {
        (this || t).img = null;
      });
    function CVCompElement(e, r, i) {
      ((this || t).completeLayers = !1),
        ((this || t).layers = e.layers),
        ((this || t).pendingElements = []),
        ((this || t).elements = createSizedArray((this || t).layers.length)),
        this.initElement(e, r, i),
        ((this || t).tm = e.tm
          ? PropertyFactory.getProp(this || t, e.tm, 0, r.frameRate, this || t)
          : { _placeholder: !0 });
    }
    extendPrototype(
      [CanvasRenderer, ICompElement, CVBaseElement],
      CVCompElement
    ),
      (CVCompElement.prototype.renderInnerContent = function () {
        var e = (this || t).canvasContext;
        e.beginPath(),
          e.moveTo(0, 0),
          e.lineTo((this || t).data.w, 0),
          e.lineTo((this || t).data.w, (this || t).data.h),
          e.lineTo(0, (this || t).data.h),
          e.lineTo(0, 0),
          e.clip();
        var r,
          i = (this || t).layers.length;
        for (r = i - 1; r >= 0; r -= 1)
          ((this || t).completeLayers || (this || t).elements[r]) &&
            (this || t).elements[r].renderFrame();
      }),
      (CVCompElement.prototype.destroy = function () {
        var e,
          r = (this || t).layers.length;
        for (e = r - 1; e >= 0; e -= 1)
          (this || t).elements[e] && (this || t).elements[e].destroy();
        ((this || t).layers = null), ((this || t).elements = null);
      });
    function CVMaskElement(e, r) {
      ((this || t).data = e),
        ((this || t).element = r),
        ((this || t).masksProperties = (this || t).data.masksProperties || []),
        ((this || t).viewData = createSizedArray(
          (this || t).masksProperties.length
        ));
      var i,
        s = (this || t).masksProperties.length,
        a = !1;
      for (i = 0; i < s; i += 1)
        (this || t).masksProperties[i].mode !== "n" && (a = !0),
          ((this || t).viewData[i] = ShapePropertyFactory.getShapeProp(
            (this || t).element,
            (this || t).masksProperties[i],
            3
          ));
      ((this || t).hasMasks = a),
        a && (this || t).element.addRenderableComponent(this || t);
    }
    (CVMaskElement.prototype.renderFrame = function () {
      if ((this || t).hasMasks) {
        var e = (this || t).element.finalTransform.mat,
          r = (this || t).element.canvasContext,
          i,
          s = (this || t).masksProperties.length,
          a,
          n,
          l;
        for (r.beginPath(), i = 0; i < s; i += 1)
          if ((this || t).masksProperties[i].mode !== "n") {
            (this || t).masksProperties[i].inv &&
              (r.moveTo(0, 0),
              r.lineTo((this || t).element.globalData.compSize.w, 0),
              r.lineTo(
                (this || t).element.globalData.compSize.w,
                (this || t).element.globalData.compSize.h
              ),
              r.lineTo(0, (this || t).element.globalData.compSize.h),
              r.lineTo(0, 0)),
              (l = (this || t).viewData[i].v),
              (a = e.applyToPointArray(l.v[0][0], l.v[0][1], 0)),
              r.moveTo(a[0], a[1]);
            var v,
              y = l._length;
            for (v = 1; v < y; v += 1)
              (n = e.applyToTriplePoints(l.o[v - 1], l.i[v], l.v[v])),
                r.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            (n = e.applyToTriplePoints(l.o[v - 1], l.i[0], l.v[0])),
              r.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          }
        (this || t).element.globalData.renderer.save(!0), r.clip();
      }
    }),
      (CVMaskElement.prototype.getMaskProperty =
        MaskElement.prototype.getMaskProperty),
      (CVMaskElement.prototype.destroy = function () {
        (this || t).element = null;
      });
    function CVShapeElement(e, r, i) {
      ((this || t).shapes = []),
        ((this || t).shapesData = e.shapes),
        ((this || t).stylesList = []),
        ((this || t).itemsData = []),
        ((this || t).prevViewData = []),
        ((this || t).shapeModifiers = []),
        ((this || t).processedElements = []),
        ((this || t).transformsManager = new ShapeTransformManager()),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        CVBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
      ],
      CVShapeElement
    ),
      (CVShapeElement.prototype.initElement =
        RenderableDOMElement.prototype.initElement),
      (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
      (CVShapeElement.prototype.dashResetter = []),
      (CVShapeElement.prototype.createContent = function () {
        this.searchShapes(
          (this || t).shapesData,
          (this || t).itemsData,
          (this || t).prevViewData,
          !0,
          []
        );
      }),
      (CVShapeElement.prototype.createStyleElement = function (e, r) {
        var i = {
            data: e,
            type: e.ty,
            preTransforms: (this || t).transformsManager.addTransformSequence(
              r
            ),
            transforms: [],
            elements: [],
            closed: e.hd === !0,
          },
          s = {};
        if (
          (e.ty === "fl" || e.ty === "st"
            ? ((s.c = PropertyFactory.getProp(
                this || t,
                e.c,
                1,
                255,
                this || t
              )),
              s.c.k ||
                (i.co =
                  "rgb(" +
                  bmFloor(s.c.v[0]) +
                  "," +
                  bmFloor(s.c.v[1]) +
                  "," +
                  bmFloor(s.c.v[2]) +
                  ")"))
            : (e.ty === "gf" || e.ty === "gs") &&
              ((s.s = PropertyFactory.getProp(
                this || t,
                e.s,
                1,
                null,
                this || t
              )),
              (s.e = PropertyFactory.getProp(
                this || t,
                e.e,
                1,
                null,
                this || t
              )),
              (s.h = PropertyFactory.getProp(
                this || t,
                e.h || { k: 0 },
                0,
                0.01,
                this || t
              )),
              (s.a = PropertyFactory.getProp(
                this || t,
                e.a || { k: 0 },
                0,
                degToRads,
                this || t
              )),
              (s.g = new GradientProperty(this || t, e.g, this || t))),
          (s.o = PropertyFactory.getProp(this || t, e.o, 0, 0.01, this || t)),
          e.ty === "st" || e.ty === "gs")
        ) {
          if (
            ((i.lc = (this || t).lcEnum[e.lc] || "round"),
            (i.lj = (this || t).ljEnum[e.lj] || "round"),
            e.lj == 1 && (i.ml = e.ml),
            (s.w = PropertyFactory.getProp(this || t, e.w, 0, null, this || t)),
            s.w.k || (i.wi = s.w.v),
            e.d)
          ) {
            var a = new DashProperty(this || t, e.d, "canvas", this || t);
            (s.d = a),
              s.d.k || ((i.da = s.d.dashArray), (i.do = s.d.dashoffset[0]));
          }
        } else i.r = e.r === 2 ? "evenodd" : "nonzero";
        return (this || t).stylesList.push(i), (s.style = i), s;
      }),
      (CVShapeElement.prototype.createGroupElement = function () {
        var e = { it: [], prevViewData: [] };
        return e;
      }),
      (CVShapeElement.prototype.createTransformElement = function (e) {
        var r = {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: (this || t).transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this || t, e.o, 0, 0.01, this || t),
            mProps: TransformPropertyFactory.getTransformProperty(
              this || t,
              e,
              this || t
            ),
          },
        };
        return r;
      }),
      (CVShapeElement.prototype.createShapeElement = function (e) {
        var r = new CVShapeData(
          this || t,
          e,
          (this || t).stylesList,
          (this || t).transformsManager
        );
        return (this || t).shapes.push(r), this.addShapeToModifiers(r), r;
      }),
      (CVShapeElement.prototype.reloadShapes = function () {
        (this || t)._isFirstFrame = !0;
        var e,
          r = (this || t).itemsData.length;
        for (e = 0; e < r; e += 1)
          (this || t).prevViewData[e] = (this || t).itemsData[e];
        for (
          this.searchShapes(
            (this || t).shapesData,
            (this || t).itemsData,
            (this || t).prevViewData,
            !0,
            []
          ),
            r = (this || t).dynamicProperties.length,
            e = 0;
          e < r;
          e += 1
        )
          (this || t).dynamicProperties[e].getValue();
        this.renderModifiers(),
          (this || t).transformsManager.processSequences(
            (this || t)._isFirstFrame
          );
      }),
      (CVShapeElement.prototype.addTransformToStyleList = function (e) {
        var r,
          i = (this || t).stylesList.length;
        for (r = 0; r < i; r += 1)
          (this || t).stylesList[r].closed ||
            (this || t).stylesList[r].transforms.push(e);
      }),
      (CVShapeElement.prototype.removeTransformFromStyleList = function () {
        var e,
          r = (this || t).stylesList.length;
        for (e = 0; e < r; e += 1)
          (this || t).stylesList[e].closed ||
            (this || t).stylesList[e].transforms.pop();
      }),
      (CVShapeElement.prototype.closeStyles = function (e) {
        var r,
          i = e.length;
        for (r = 0; r < i; r += 1) e[r].closed = !0;
      }),
      (CVShapeElement.prototype.searchShapes = function (e, r, i, s, a) {
        var n,
          l = e.length - 1,
          v,
          y,
          g = [],
          P = [],
          S,
          u,
          d,
          C = [].concat(a);
        for (n = l; n >= 0; n -= 1) {
          if (
            ((S = this.searchProcessedElement(e[n])),
            S ? (r[n] = i[S - 1]) : (e[n]._shouldRender = s),
            e[n].ty === "fl" ||
              e[n].ty === "st" ||
              e[n].ty === "gf" ||
              e[n].ty === "gs")
          )
            S
              ? (r[n].style.closed = !1)
              : (r[n] = this.createStyleElement(e[n], C)),
              g.push(r[n].style);
          else if (e[n].ty === "gr") {
            if (!S) r[n] = this.createGroupElement(e[n]);
            else
              for (y = r[n].it.length, v = 0; v < y; v += 1)
                r[n].prevViewData[v] = r[n].it[v];
            this.searchShapes(e[n].it, r[n].it, r[n].prevViewData, s, C);
          } else
            e[n].ty === "tr"
              ? (S || ((d = this.createTransformElement(e[n])), (r[n] = d)),
                C.push(r[n]),
                this.addTransformToStyleList(r[n]))
              : e[n].ty === "sh" ||
                e[n].ty === "rc" ||
                e[n].ty === "el" ||
                e[n].ty === "sr"
              ? S || (r[n] = this.createShapeElement(e[n]))
              : e[n].ty === "tm" || e[n].ty === "rd" || e[n].ty === "pb"
              ? (S
                  ? ((u = r[n]), (u.closed = !1))
                  : ((u = ShapeModifiers.getModifier(e[n].ty)),
                    u.init(this || t, e[n]),
                    (r[n] = u),
                    (this || t).shapeModifiers.push(u)),
                P.push(u))
              : e[n].ty === "rp" &&
                (S
                  ? ((u = r[n]), (u.closed = !0))
                  : ((u = ShapeModifiers.getModifier(e[n].ty)),
                    (r[n] = u),
                    u.init(this || t, e, n, r),
                    (this || t).shapeModifiers.push(u),
                    (s = !1)),
                P.push(u));
          this.addProcessedElement(e[n], n + 1);
        }
        for (
          this.removeTransformFromStyleList(),
            this.closeStyles(g),
            l = P.length,
            n = 0;
          n < l;
          n += 1
        )
          P[n].closed = !0;
      }),
      (CVShapeElement.prototype.renderInnerContent = function () {
        ((this || t).transformHelper.opacity = 1),
          ((this || t).transformHelper._opMdf = !1),
          this.renderModifiers(),
          (this || t).transformsManager.processSequences(
            (this || t)._isFirstFrame
          ),
          this.renderShape(
            (this || t).transformHelper,
            (this || t).shapesData,
            (this || t).itemsData,
            !0
          );
      }),
      (CVShapeElement.prototype.renderShapeTransform = function (e, r) {
        (e._opMdf || r.op._mdf || (this || t)._isFirstFrame) &&
          ((r.opacity = e.opacity), (r.opacity *= r.op.v), (r._opMdf = !0));
      }),
      (CVShapeElement.prototype.drawLayer = function () {
        var e,
          r = (this || t).stylesList.length,
          i,
          s,
          a,
          n,
          l,
          v,
          y = (this || t).globalData.renderer,
          g = (this || t).globalData.canvasContext,
          P,
          S;
        for (e = 0; e < r; e += 1)
          if (
            ((S = (this || t).stylesList[e]),
            (P = S.type),
            !(
              ((P === "st" || P === "gs") && S.wi === 0) ||
              !S.data._shouldRender ||
              S.coOp === 0 ||
              (this || t).globalData.currentGlobalAlpha === 0
            ))
          ) {
            for (
              y.save(),
                l = S.elements,
                P === "st" || P === "gs"
                  ? ((g.strokeStyle = P === "st" ? S.co : S.grd),
                    (g.lineWidth = S.wi),
                    (g.lineCap = S.lc),
                    (g.lineJoin = S.lj),
                    (g.miterLimit = S.ml || 0))
                  : (g.fillStyle = P === "fl" ? S.co : S.grd),
                y.ctxOpacity(S.coOp),
                P !== "st" && P !== "gs" && g.beginPath(),
                y.ctxTransform(S.preTransforms.finalTransform.props),
                s = l.length,
                i = 0;
              i < s;
              i += 1
            ) {
              for (
                (P === "st" || P === "gs") &&
                  (g.beginPath(),
                  S.da && (g.setLineDash(S.da), (g.lineDashOffset = S.do))),
                  v = l[i].trNodes,
                  n = v.length,
                  a = 0;
                a < n;
                a += 1
              )
                v[a].t === "m"
                  ? g.moveTo(v[a].p[0], v[a].p[1])
                  : v[a].t === "c"
                  ? g.bezierCurveTo(
                      v[a].pts[0],
                      v[a].pts[1],
                      v[a].pts[2],
                      v[a].pts[3],
                      v[a].pts[4],
                      v[a].pts[5]
                    )
                  : g.closePath();
              (P === "st" || P === "gs") &&
                (g.stroke(), S.da && g.setLineDash((this || t).dashResetter));
            }
            P !== "st" && P !== "gs" && g.fill(S.r), y.restore();
          }
      }),
      (CVShapeElement.prototype.renderShape = function (e, r, i, s) {
        var a,
          n = r.length - 1,
          l;
        for (l = e, a = n; a >= 0; a -= 1)
          r[a].ty === "tr"
            ? ((l = i[a].transform), this.renderShapeTransform(e, l))
            : r[a].ty === "sh" ||
              r[a].ty === "el" ||
              r[a].ty === "rc" ||
              r[a].ty === "sr"
            ? this.renderPath(r[a], i[a])
            : r[a].ty === "fl"
            ? this.renderFill(r[a], i[a], l)
            : r[a].ty === "st"
            ? this.renderStroke(r[a], i[a], l)
            : r[a].ty === "gf" || r[a].ty === "gs"
            ? this.renderGradientFill(r[a], i[a], l)
            : r[a].ty === "gr"
            ? this.renderShape(l, r[a].it, i[a].it)
            : r[a].ty;
        s && this.drawLayer();
      }),
      (CVShapeElement.prototype.renderStyledShape = function (e, r) {
        if ((this || t)._isFirstFrame || r._mdf || e.transforms._mdf) {
          var i = e.trNodes,
            s = r.paths,
            a,
            n,
            l,
            v = s._length;
          i.length = 0;
          var y = e.transforms.finalTransform;
          for (l = 0; l < v; l += 1) {
            var g = s.shapes[l];
            if (g && g.v) {
              for (n = g._length, a = 1; a < n; a += 1)
                a === 1 &&
                  i.push({
                    t: "m",
                    p: y.applyToPointArray(g.v[0][0], g.v[0][1], 0),
                  }),
                  i.push({
                    t: "c",
                    pts: y.applyToTriplePoints(g.o[a - 1], g.i[a], g.v[a]),
                  });
              n === 1 &&
                i.push({
                  t: "m",
                  p: y.applyToPointArray(g.v[0][0], g.v[0][1], 0),
                }),
                g.c &&
                  n &&
                  (i.push({
                    t: "c",
                    pts: y.applyToTriplePoints(g.o[a - 1], g.i[0], g.v[0]),
                  }),
                  i.push({ t: "z" }));
            }
          }
          e.trNodes = i;
        }
      }),
      (CVShapeElement.prototype.renderPath = function (e, r) {
        if (e.hd !== !0 && e._shouldRender) {
          var i,
            s = r.styledShapes.length;
          for (i = 0; i < s; i += 1)
            this.renderStyledShape(r.styledShapes[i], r.sh);
        }
      }),
      (CVShapeElement.prototype.renderFill = function (e, r, i) {
        var s = r.style;
        (r.c._mdf || (this || t)._isFirstFrame) &&
          (s.co =
            "rgb(" +
            bmFloor(r.c.v[0]) +
            "," +
            bmFloor(r.c.v[1]) +
            "," +
            bmFloor(r.c.v[2]) +
            ")"),
          (r.o._mdf || i._opMdf || (this || t)._isFirstFrame) &&
            (s.coOp = r.o.v * i.opacity);
      }),
      (CVShapeElement.prototype.renderGradientFill = function (e, r, i) {
        var s = r.style,
          a;
        if (
          !s.grd ||
          r.g._mdf ||
          r.s._mdf ||
          r.e._mdf ||
          (e.t !== 1 && (r.h._mdf || r.a._mdf))
        ) {
          var n = (this || t).globalData.canvasContext,
            l = r.s.v,
            v = r.e.v;
          if (e.t === 1) a = n.createLinearGradient(l[0], l[1], v[0], v[1]);
          else {
            var y = Math.sqrt(
                Math.pow(l[0] - v[0], 2) + Math.pow(l[1] - v[1], 2)
              ),
              g = Math.atan2(v[1] - l[1], v[0] - l[0]),
              P = r.h.v;
            P >= 1 ? (P = 0.99) : P <= -1 && (P = -0.99);
            var S = y * P,
              u = Math.cos(g + r.a.v) * S + l[0],
              d = Math.sin(g + r.a.v) * S + l[1];
            a = n.createRadialGradient(u, d, 0, l[0], l[1], y);
          }
          var C,
            f = e.g.p,
            p = r.g.c,
            c = 1;
          for (C = 0; C < f; C += 1)
            r.g._hasOpacity && r.g._collapsable && (c = r.g.o[C * 2 + 1]),
              a.addColorStop(
                p[C * 4] / 100,
                "rgba(" +
                  p[C * 4 + 1] +
                  "," +
                  p[C * 4 + 2] +
                  "," +
                  p[C * 4 + 3] +
                  "," +
                  c +
                  ")"
              );
          s.grd = a;
        }
        s.coOp = r.o.v * i.opacity;
      }),
      (CVShapeElement.prototype.renderStroke = function (e, r, i) {
        var s = r.style,
          a = r.d;
        a &&
          (a._mdf || (this || t)._isFirstFrame) &&
          ((s.da = a.dashArray), (s.do = a.dashoffset[0])),
          (r.c._mdf || (this || t)._isFirstFrame) &&
            (s.co =
              "rgb(" +
              bmFloor(r.c.v[0]) +
              "," +
              bmFloor(r.c.v[1]) +
              "," +
              bmFloor(r.c.v[2]) +
              ")"),
          (r.o._mdf || i._opMdf || (this || t)._isFirstFrame) &&
            (s.coOp = r.o.v * i.opacity),
          (r.w._mdf || (this || t)._isFirstFrame) && (s.wi = r.w.v);
      }),
      (CVShapeElement.prototype.destroy = function () {
        ((this || t).shapesData = null),
          ((this || t).globalData = null),
          ((this || t).canvasContext = null),
          ((this || t).stylesList.length = 0),
          ((this || t).itemsData.length = 0);
      });
    function CVSolidElement(e, r, i) {
      this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
      ],
      CVSolidElement
    ),
      (CVSolidElement.prototype.initElement =
        SVGShapeElement.prototype.initElement),
      (CVSolidElement.prototype.prepareFrame =
        IImageElement.prototype.prepareFrame),
      (CVSolidElement.prototype.renderInnerContent = function () {
        var e = (this || t).canvasContext;
        (e.fillStyle = (this || t).data.sc),
          e.fillRect(0, 0, (this || t).data.sw, (this || t).data.sh);
      });
    function CVTextElement(e, r, i) {
      ((this || t).textSpans = []),
        ((this || t).yOffset = 0),
        ((this || t).fillColorAnim = !1),
        ((this || t).strokeColorAnim = !1),
        ((this || t).strokeWidthAnim = !1),
        ((this || t).stroke = !1),
        ((this || t).fill = !1),
        ((this || t).justifyOffset = 0),
        ((this || t).currentRender = null),
        ((this || t).renderType = "canvas"),
        ((this || t).values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: "",
        }),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
        ITextElement,
      ],
      CVTextElement
    ),
      (CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d")),
      (CVTextElement.prototype.buildNewText = function () {
        var e = (this || t).textProperty.currentData;
        (this || t).renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var r = !1;
        e.fc
          ? ((r = !0), ((this || t).values.fill = this.buildColor(e.fc)))
          : ((this || t).values.fill = "rgba(0,0,0,0)"),
          ((this || t).fill = r);
        var i = !1;
        e.sc &&
          ((i = !0),
          ((this || t).values.stroke = this.buildColor(e.sc)),
          ((this || t).values.sWidth = e.sw));
        var s = (this || t).globalData.fontManager.getFontByName(e.f),
          a,
          n,
          l = e.l,
          v = (this || t).mHelper;
        ((this || t).stroke = i),
          ((this || t).values.fValue =
            e.finalSize +
            "px " +
            (this || t).globalData.fontManager.getFontByName(e.f).fFamily),
          (n = e.finalText.length);
        var y,
          g,
          P,
          S,
          u,
          d,
          C,
          f,
          p,
          c,
          o = (this || t).data.singleShape,
          h = e.tr * 0.001 * e.finalSize,
          m = 0,
          b = 0,
          A = !0,
          x = 0;
        for (a = 0; a < n; a += 1) {
          for (
            y = (this || t).globalData.fontManager.getCharData(
              e.finalText[a],
              s.fStyle,
              (this || t).globalData.fontManager.getFontByName(e.f).fFamily
            ),
              g = (y && y.data) || {},
              v.reset(),
              o &&
                l[a].n &&
                ((m = -h), (b += e.yOffset), (b += A ? 1 : 0), (A = !1)),
              u = g.shapes ? g.shapes[0].it : [],
              C = u.length,
              v.scale(e.finalSize / 100, e.finalSize / 100),
              o && this.applyTextPropertiesToMatrix(e, v, l[a].line, m, b),
              p = createSizedArray(C),
              d = 0;
            d < C;
            d += 1
          ) {
            for (
              S = u[d].ks.k.i.length, f = u[d].ks.k, c = [], P = 1;
              P < S;
              P += 1
            )
              P === 1 &&
                c.push(
                  v.applyToX(f.v[0][0], f.v[0][1], 0),
                  v.applyToY(f.v[0][0], f.v[0][1], 0)
                ),
                c.push(
                  v.applyToX(f.o[P - 1][0], f.o[P - 1][1], 0),
                  v.applyToY(f.o[P - 1][0], f.o[P - 1][1], 0),
                  v.applyToX(f.i[P][0], f.i[P][1], 0),
                  v.applyToY(f.i[P][0], f.i[P][1], 0),
                  v.applyToX(f.v[P][0], f.v[P][1], 0),
                  v.applyToY(f.v[P][0], f.v[P][1], 0)
                );
            c.push(
              v.applyToX(f.o[P - 1][0], f.o[P - 1][1], 0),
              v.applyToY(f.o[P - 1][0], f.o[P - 1][1], 0),
              v.applyToX(f.i[0][0], f.i[0][1], 0),
              v.applyToY(f.i[0][0], f.i[0][1], 0),
              v.applyToX(f.v[0][0], f.v[0][1], 0),
              v.applyToY(f.v[0][0], f.v[0][1], 0)
            ),
              (p[d] = c);
          }
          o && ((m += l[a].l), (m += h)),
            (this || t).textSpans[x]
              ? ((this || t).textSpans[x].elem = p)
              : ((this || t).textSpans[x] = { elem: p }),
            (x += 1);
        }
      }),
      (CVTextElement.prototype.renderInnerContent = function () {
        var e = (this || t).canvasContext;
        (e.font = (this || t).values.fValue),
          (e.lineCap = "butt"),
          (e.lineJoin = "miter"),
          (e.miterLimit = 4),
          (this || t).data.singleShape ||
            (this || t).textAnimator.getMeasures(
              (this || t).textProperty.currentData,
              (this || t).lettersChangedFlag
            );
        var r,
          i,
          s,
          a,
          n,
          l,
          v = (this || t).textAnimator.renderedLetters,
          y = (this || t).textProperty.currentData.l;
        i = y.length;
        var g,
          P = null,
          S = null,
          u = null,
          d,
          C;
        for (r = 0; r < i; r += 1)
          if (!y[r].n) {
            if (
              ((g = v[r]),
              g &&
                ((this || t).globalData.renderer.save(),
                (this || t).globalData.renderer.ctxTransform(g.p),
                (this || t).globalData.renderer.ctxOpacity(g.o)),
              (this || t).fill)
            ) {
              for (
                g && g.fc
                  ? P !== g.fc && ((P = g.fc), (e.fillStyle = g.fc))
                  : P !== (this || t).values.fill &&
                    ((P = (this || t).values.fill),
                    (e.fillStyle = (this || t).values.fill)),
                  d = (this || t).textSpans[r].elem,
                  a = d.length,
                  (this || t).globalData.canvasContext.beginPath(),
                  s = 0;
                s < a;
                s += 1
              )
                for (
                  C = d[s],
                    l = C.length,
                    (this || t).globalData.canvasContext.moveTo(C[0], C[1]),
                    n = 2;
                  n < l;
                  n += 6
                )
                  (this || t).globalData.canvasContext.bezierCurveTo(
                    C[n],
                    C[n + 1],
                    C[n + 2],
                    C[n + 3],
                    C[n + 4],
                    C[n + 5]
                  );
              (this || t).globalData.canvasContext.closePath(),
                (this || t).globalData.canvasContext.fill();
            }
            if ((this || t).stroke) {
              for (
                g && g.sw
                  ? u !== g.sw && ((u = g.sw), (e.lineWidth = g.sw))
                  : u !== (this || t).values.sWidth &&
                    ((u = (this || t).values.sWidth),
                    (e.lineWidth = (this || t).values.sWidth)),
                  g && g.sc
                    ? S !== g.sc && ((S = g.sc), (e.strokeStyle = g.sc))
                    : S !== (this || t).values.stroke &&
                      ((S = (this || t).values.stroke),
                      (e.strokeStyle = (this || t).values.stroke)),
                  d = (this || t).textSpans[r].elem,
                  a = d.length,
                  (this || t).globalData.canvasContext.beginPath(),
                  s = 0;
                s < a;
                s += 1
              )
                for (
                  C = d[s],
                    l = C.length,
                    (this || t).globalData.canvasContext.moveTo(C[0], C[1]),
                    n = 2;
                  n < l;
                  n += 6
                )
                  (this || t).globalData.canvasContext.bezierCurveTo(
                    C[n],
                    C[n + 1],
                    C[n + 2],
                    C[n + 3],
                    C[n + 4],
                    C[n + 5]
                  );
              (this || t).globalData.canvasContext.closePath(),
                (this || t).globalData.canvasContext.stroke();
            }
            g && (this || t).globalData.renderer.restore();
          }
      });
    function CVEffects() {}
    CVEffects.prototype.renderFrame = function () {};
    function HBaseElement() {}
    (HBaseElement.prototype = {
      checkBlendMode: function () {},
      initRendererElement: function () {
        ((this || t).baseElement = createTag((this || t).data.tg || "div")),
          (this || t).data.hasMask
            ? (((this || t).svgElement = createNS("svg")),
              ((this || t).layerElement = createNS("g")),
              ((this || t).maskedElement = (this || t).layerElement),
              (this || t).svgElement.appendChild((this || t).layerElement),
              (this || t).baseElement.appendChild((this || t).svgElement))
            : ((this || t).layerElement = (this || t).baseElement),
          styleDiv((this || t).baseElement);
      },
      createContainerElements: function () {
        ((this || t).renderableEffectsManager = new CVEffects(this || t)),
          ((this || t).transformedElement = (this || t).baseElement),
          ((this || t).maskedElement = (this || t).layerElement),
          (this || t).data.ln &&
            (this || t).layerElement.setAttribute("id", (this || t).data.ln),
          (this || t).data.cl &&
            (this || t).layerElement.setAttribute("class", (this || t).data.cl),
          (this || t).data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function () {
        var e = (this || t).transformedElement
          ? (this || t).transformedElement.style
          : {};
        if ((this || t).finalTransform._matMdf) {
          var r = (this || t).finalTransform.mat.toCSS();
          (e.transform = r), (e.webkitTransform = r);
        }
        (this || t).finalTransform._opMdf &&
          (e.opacity = (this || t).finalTransform.mProp.o.v);
      },
      renderFrame: function () {
        (this || t).data.hd ||
          (this || t).hidden ||
          (this.renderTransform(),
          this.renderRenderable(),
          this.renderElement(),
          this.renderInnerContent(),
          (this || t)._isFirstFrame && ((this || t)._isFirstFrame = !1));
      },
      destroy: function () {
        ((this || t).layerElement = null),
          ((this || t).transformedElement = null),
          (this || t).matteElement && ((this || t).matteElement = null),
          (this || t).maskManager &&
            ((this || t).maskManager.destroy(),
            ((this || t).maskManager = null));
      },
      createRenderableComponents: function () {
        (this || t).maskManager = new MaskElement(
          (this || t).data,
          this || t,
          (this || t).globalData
        );
      },
      addEffects: function () {},
      setMatte: function () {},
    }),
      (HBaseElement.prototype.getBaseElement =
        SVGBaseElement.prototype.getBaseElement),
      (HBaseElement.prototype.destroyBaseElement =
        HBaseElement.prototype.destroy),
      (HBaseElement.prototype.buildElementParenting =
        HybridRenderer.prototype.buildElementParenting);
    function HSolidElement(e, r, i) {
      this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
      ],
      HSolidElement
    ),
      (HSolidElement.prototype.createContent = function () {
        var e;
        (this || t).data.hasMask
          ? ((e = createNS("rect")),
            e.setAttribute("width", (this || t).data.sw),
            e.setAttribute("height", (this || t).data.sh),
            e.setAttribute("fill", (this || t).data.sc),
            (this || t).svgElement.setAttribute("width", (this || t).data.sw),
            (this || t).svgElement.setAttribute("height", (this || t).data.sh))
          : ((e = createTag("div")),
            (e.style.width = (this || t).data.sw + "px"),
            (e.style.height = (this || t).data.sh + "px"),
            (e.style.backgroundColor = (this || t).data.sc)),
          (this || t).layerElement.appendChild(e);
      });
    function HCompElement(e, r, i) {
      ((this || t).layers = e.layers),
        ((this || t).supports3d = !e.hasMask),
        ((this || t).completeLayers = !1),
        ((this || t).pendingElements = []),
        ((this || t).elements = (this || t).layers
          ? createSizedArray((this || t).layers.length)
          : []),
        this.initElement(e, r, i),
        ((this || t).tm = e.tm
          ? PropertyFactory.getProp(this || t, e.tm, 0, r.frameRate, this || t)
          : { _placeholder: !0 });
    }
    extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
      (HCompElement.prototype._createBaseContainerElements =
        HCompElement.prototype.createContainerElements),
      (HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements(),
          (this || t).data.hasMask
            ? ((this || t).svgElement.setAttribute("width", (this || t).data.w),
              (this || t).svgElement.setAttribute("height", (this || t).data.h),
              ((this || t).transformedElement = (this || t).baseElement))
            : ((this || t).transformedElement = (this || t).layerElement);
      }),
      (HCompElement.prototype.addTo3dContainer = function (e, r) {
        for (var i = 0, s; i < r; )
          (this || t).elements[i] &&
            (this || t).elements[i].getBaseElement &&
            (s = (this || t).elements[i].getBaseElement()),
            (i += 1);
        s
          ? (this || t).layerElement.insertBefore(e, s)
          : (this || t).layerElement.appendChild(e);
      });
    function HShapeElement(e, r, i) {
      ((this || t).shapes = []),
        ((this || t).shapesData = e.shapes),
        ((this || t).stylesList = []),
        ((this || t).shapeModifiers = []),
        ((this || t).itemsData = []),
        ((this || t).processedElements = []),
        ((this || t).animatedContents = []),
        ((this || t).shapesContainer = createNS("g")),
        this.initElement(e, r, i),
        ((this || t).prevViewData = []),
        ((this || t).currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        HSolidElement,
        SVGShapeElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
      ],
      HShapeElement
    ),
      (HShapeElement.prototype._renderShapeFrame =
        HShapeElement.prototype.renderInnerContent),
      (HShapeElement.prototype.createContent = function () {
        var e;
        if (
          (((this || t).baseElement.style.fontSize = 0),
          (this || t).data.hasMask)
        )
          (this || t).layerElement.appendChild((this || t).shapesContainer),
            (e = (this || t).svgElement);
        else {
          e = createNS("svg");
          var r = (this || t).comp.data
            ? (this || t).comp.data
            : (this || t).globalData.compSize;
          e.setAttribute("width", r.w),
            e.setAttribute("height", r.h),
            e.appendChild((this || t).shapesContainer),
            (this || t).layerElement.appendChild(e);
        }
        this.searchShapes(
          (this || t).shapesData,
          (this || t).itemsData,
          (this || t).prevViewData,
          (this || t).shapesContainer,
          0,
          [],
          !0
        ),
          this.filterUniqueShapes(),
          ((this || t).shapeCont = e);
      }),
      (HShapeElement.prototype.getTransformedPoint = function (e, r) {
        var i,
          s = e.length;
        for (i = 0; i < s; i += 1)
          r = e[i].mProps.v.applyToPointArray(r[0], r[1], 0);
        return r;
      }),
      (HShapeElement.prototype.calculateShapeBoundingBox = function (e, r) {
        var i = e.sh.v,
          s = e.transformers,
          a,
          n = i._length,
          l,
          v,
          y,
          g;
        if (!(n <= 1)) {
          for (a = 0; a < n - 1; a += 1)
            (l = this.getTransformedPoint(s, i.v[a])),
              (v = this.getTransformedPoint(s, i.o[a])),
              (y = this.getTransformedPoint(s, i.i[a + 1])),
              (g = this.getTransformedPoint(s, i.v[a + 1])),
              this.checkBounds(l, v, y, g, r);
          i.c &&
            ((l = this.getTransformedPoint(s, i.v[a])),
            (v = this.getTransformedPoint(s, i.o[a])),
            (y = this.getTransformedPoint(s, i.i[0])),
            (g = this.getTransformedPoint(s, i.v[0])),
            this.checkBounds(l, v, y, g, r));
        }
      }),
      (HShapeElement.prototype.checkBounds = function (e, r, i, s, a) {
        this.getBoundsOfCurve(e, r, i, s);
        var n = (this || t).shapeBoundingBox;
        (a.x = bmMin(n.left, a.x)),
          (a.xMax = bmMax(n.right, a.xMax)),
          (a.y = bmMin(n.top, a.y)),
          (a.yMax = bmMax(n.bottom, a.yMax));
      }),
      (HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }),
      (HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0,
      }),
      (HShapeElement.prototype.getBoundsOfCurve = function (e, r, i, s) {
        for (
          var a = [
              [e[0], s[0]],
              [e[1], s[1]],
            ],
            n,
            l,
            v,
            y,
            g,
            P,
            S,
            u = 0;
          u < 2;
          ++u
        )
          (l = 6 * e[u] - 12 * r[u] + 6 * i[u]),
            (n = -3 * e[u] + 9 * r[u] - 9 * i[u] + 3 * s[u]),
            (v = 3 * r[u] - 3 * e[u]),
            (l |= 0),
            (n |= 0),
            (v |= 0),
            (n === 0 && l === 0) ||
              (n === 0
                ? ((y = -v / l),
                  y > 0 &&
                    y < 1 &&
                    a[u].push(this.calculateF(y, e, r, i, s, u)))
                : ((g = l * l - 4 * v * n),
                  g >= 0 &&
                    ((P = (-l + bmSqrt(g)) / (2 * n)),
                    P > 0 &&
                      P < 1 &&
                      a[u].push(this.calculateF(P, e, r, i, s, u)),
                    (S = (-l - bmSqrt(g)) / (2 * n)),
                    S > 0 &&
                      S < 1 &&
                      a[u].push(this.calculateF(S, e, r, i, s, u)))));
        ((this || t).shapeBoundingBox.left = bmMin.apply(null, a[0])),
          ((this || t).shapeBoundingBox.top = bmMin.apply(null, a[1])),
          ((this || t).shapeBoundingBox.right = bmMax.apply(null, a[0])),
          ((this || t).shapeBoundingBox.bottom = bmMax.apply(null, a[1]));
      }),
      (HShapeElement.prototype.calculateF = function (e, r, i, s, a, n) {
        return (
          bmPow(1 - e, 3) * r[n] +
          3 * bmPow(1 - e, 2) * e * i[n] +
          3 * (1 - e) * bmPow(e, 2) * s[n] +
          bmPow(e, 3) * a[n]
        );
      }),
      (HShapeElement.prototype.calculateBoundingBox = function (e, r) {
        var i,
          s = e.length;
        for (i = 0; i < s; i += 1)
          e[i] && e[i].sh
            ? this.calculateShapeBoundingBox(e[i], r)
            : e[i] && e[i].it && this.calculateBoundingBox(e[i].it, r);
      }),
      (HShapeElement.prototype.currentBoxContains = function (e) {
        return (
          (this || t).currentBBox.x <= e.x &&
          (this || t).currentBBox.y <= e.y &&
          (this || t).currentBBox.width + (this || t).currentBBox.x >=
            e.x + e.width &&
          (this || t).currentBBox.height + (this || t).currentBBox.y >=
            e.y + e.height
        );
      }),
      (HShapeElement.prototype.renderInnerContent = function () {
        if (
          (this._renderShapeFrame(),
          !(this || t).hidden &&
            ((this || t)._isFirstFrame || (this || t)._mdf))
        ) {
          var e = (this || t).tempBoundingBox,
            r = 999999;
          if (
            ((e.x = r),
            (e.xMax = -r),
            (e.y = r),
            (e.yMax = -r),
            this.calculateBoundingBox((this || t).itemsData, e),
            (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
            (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
            this.currentBoxContains(e))
          )
            return;
          var i = !1;
          if (
            ((this || t).currentBBox.w !== e.width &&
              (((this || t).currentBBox.w = e.width),
              (this || t).shapeCont.setAttribute("width", e.width),
              (i = !0)),
            (this || t).currentBBox.h !== e.height &&
              (((this || t).currentBBox.h = e.height),
              (this || t).shapeCont.setAttribute("height", e.height),
              (i = !0)),
            i ||
              (this || t).currentBBox.x !== e.x ||
              (this || t).currentBBox.y !== e.y)
          ) {
            ((this || t).currentBBox.w = e.width),
              ((this || t).currentBBox.h = e.height),
              ((this || t).currentBBox.x = e.x),
              ((this || t).currentBBox.y = e.y),
              (this || t).shapeCont.setAttribute(
                "viewBox",
                (this || t).currentBBox.x +
                  " " +
                  (this || t).currentBBox.y +
                  " " +
                  (this || t).currentBBox.w +
                  " " +
                  (this || t).currentBBox.h
              );
            var s = (this || t).shapeCont.style,
              a =
                "translate(" +
                (this || t).currentBBox.x +
                "px," +
                (this || t).currentBBox.y +
                "px)";
            (s.transform = a), (s.webkitTransform = a);
          }
        }
      });
    function HTextElement(e, r, i) {
      ((this || t).textSpans = []),
        ((this || t).textPaths = []),
        ((this || t).currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
        ((this || t).renderType = "svg"),
        ((this || t).isMasked = !1),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement,
      ],
      HTextElement
    ),
      (HTextElement.prototype.createContent = function () {
        if (
          (((this || t).isMasked = this.checkMasks()), (this || t).isMasked)
        ) {
          ((this || t).renderType = "svg"),
            ((this || t).compW = (this || t).comp.data.w),
            ((this || t).compH = (this || t).comp.data.h),
            (this || t).svgElement.setAttribute("width", (this || t).compW),
            (this || t).svgElement.setAttribute("height", (this || t).compH);
          var e = createNS("g");
          (this || t).maskedElement.appendChild(e), ((this || t).innerElem = e);
        } else
          ((this || t).renderType = "html"),
            ((this || t).innerElem = (this || t).layerElement);
        this.checkParenting();
      }),
      (HTextElement.prototype.buildNewText = function () {
        var e = (this || t).textProperty.currentData;
        (this || t).renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var r = (this || t).innerElem.style,
          i = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
        (r.fill = i),
          (r.color = i),
          e.sc &&
            ((r.stroke = this.buildColor(e.sc)), (r.strokeWidth = e.sw + "px"));
        var s = (this || t).globalData.fontManager.getFontByName(e.f);
        if (!(this || t).globalData.fontManager.chars)
          if (
            ((r.fontSize = e.finalSize + "px"),
            (r.lineHeight = e.finalSize + "px"),
            s.fClass)
          )
            (this || t).innerElem.className = s.fClass;
          else {
            r.fontFamily = s.fFamily;
            var a = e.fWeight,
              n = e.fStyle;
            (r.fontStyle = n), (r.fontWeight = a);
          }
        var l,
          v,
          y = e.l;
        v = y.length;
        var g,
          P,
          S,
          u = (this || t).mHelper,
          d,
          C = "",
          f = 0;
        for (l = 0; l < v; l += 1) {
          if (
            ((this || t).globalData.fontManager.chars
              ? ((this || t).textPaths[f]
                  ? (g = (this || t).textPaths[f])
                  : ((g = createNS("path")),
                    g.setAttribute("stroke-linecap", "butt"),
                    g.setAttribute("stroke-linejoin", "round"),
                    g.setAttribute("stroke-miterlimit", "4")),
                (this || t).isMasked ||
                  ((this || t).textSpans[f]
                    ? ((P = (this || t).textSpans[f]), (S = P.children[0]))
                    : ((P = createTag("div")),
                      (P.style.lineHeight = 0),
                      (S = createNS("svg")),
                      S.appendChild(g),
                      styleDiv(P))))
              : (this || t).isMasked
              ? (g = (this || t).textPaths[f]
                  ? (this || t).textPaths[f]
                  : createNS("text"))
              : (this || t).textSpans[f]
              ? ((P = (this || t).textSpans[f]), (g = (this || t).textPaths[f]))
              : ((P = createTag("span")),
                styleDiv(P),
                (g = createTag("span")),
                styleDiv(g),
                P.appendChild(g)),
            (this || t).globalData.fontManager.chars)
          ) {
            var p = (this || t).globalData.fontManager.getCharData(
                e.finalText[l],
                s.fStyle,
                (this || t).globalData.fontManager.getFontByName(e.f).fFamily
              ),
              c;
            if (
              (p ? (c = p.data) : (c = null),
              u.reset(),
              c &&
                c.shapes &&
                ((d = c.shapes[0].it),
                u.scale(e.finalSize / 100, e.finalSize / 100),
                (C = this.createPathShape(u, d)),
                g.setAttribute("d", C)),
              (this || t).isMasked)
            )
              (this || t).innerElem.appendChild(g);
            else {
              if (((this || t).innerElem.appendChild(P), c && c.shapes)) {
                document.body.appendChild(S);
                var o = S.getBBox();
                S.setAttribute("width", o.width + 2),
                  S.setAttribute("height", o.height + 2),
                  S.setAttribute(
                    "viewBox",
                    o.x -
                      1 +
                      " " +
                      (o.y - 1) +
                      " " +
                      (o.width + 2) +
                      " " +
                      (o.height + 2)
                  );
                var h = S.style,
                  m = "translate(" + (o.x - 1) + "px," + (o.y - 1) + "px)";
                (h.transform = m),
                  (h.webkitTransform = m),
                  (y[l].yOffset = o.y - 1);
              } else S.setAttribute("width", 1), S.setAttribute("height", 1);
              P.appendChild(S);
            }
          } else if (
            ((g.textContent = y[l].val),
            g.setAttributeNS(
              "http://www.w3.org/XML/1998/namespace",
              "xml:space",
              "preserve"
            ),
            (this || t).isMasked)
          )
            (this || t).innerElem.appendChild(g);
          else {
            (this || t).innerElem.appendChild(P);
            var b = g.style,
              A = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            (b.transform = A), (b.webkitTransform = A);
          }
          (this || t).isMasked
            ? ((this || t).textSpans[f] = g)
            : ((this || t).textSpans[f] = P),
            ((this || t).textSpans[f].style.display = "block"),
            ((this || t).textPaths[f] = g),
            (f += 1);
        }
        for (; f < (this || t).textSpans.length; )
          ((this || t).textSpans[f].style.display = "none"), (f += 1);
      }),
      (HTextElement.prototype.renderInnerContent = function () {
        var e;
        if ((this || t).data.singleShape) {
          if (!(this || t)._isFirstFrame && !(this || t).lettersChangedFlag)
            return;
          if ((this || t).isMasked && (this || t).finalTransform._matMdf) {
            (this || t).svgElement.setAttribute(
              "viewBox",
              -(this || t).finalTransform.mProp.p.v[0] +
                " " +
                -(this || t).finalTransform.mProp.p.v[1] +
                " " +
                (this || t).compW +
                " " +
                (this || t).compH
            ),
              (e = (this || t).svgElement.style);
            var r =
              "translate(" +
              -(this || t).finalTransform.mProp.p.v[0] +
              "px," +
              -(this || t).finalTransform.mProp.p.v[1] +
              "px)";
            (e.transform = r), (e.webkitTransform = r);
          }
        }
        if (
          ((this || t).textAnimator.getMeasures(
            (this || t).textProperty.currentData,
            (this || t).lettersChangedFlag
          ),
          !(
            !(this || t).lettersChangedFlag &&
            !(this || t).textAnimator.lettersChangedFlag
          ))
        ) {
          var i,
            s,
            a = 0,
            n = (this || t).textAnimator.renderedLetters,
            l = (this || t).textProperty.currentData.l;
          s = l.length;
          var v, y, g;
          for (i = 0; i < s; i += 1)
            l[i].n
              ? (a += 1)
              : ((y = (this || t).textSpans[i]),
                (g = (this || t).textPaths[i]),
                (v = n[a]),
                (a += 1),
                v._mdf.m &&
                  ((this || t).isMasked
                    ? y.setAttribute("transform", v.m)
                    : ((y.style.webkitTransform = v.m),
                      (y.style.transform = v.m))),
                (y.style.opacity = v.o),
                v.sw && v._mdf.sw && g.setAttribute("stroke-width", v.sw),
                v.sc && v._mdf.sc && g.setAttribute("stroke", v.sc),
                v.fc &&
                  v._mdf.fc &&
                  (g.setAttribute("fill", v.fc), (g.style.color = v.fc)));
          if (
            (this || t).innerElem.getBBox &&
            !(this || t).hidden &&
            ((this || t)._isFirstFrame || (this || t)._mdf)
          ) {
            var P = (this || t).innerElem.getBBox();
            (this || t).currentBBox.w !== P.width &&
              (((this || t).currentBBox.w = P.width),
              (this || t).svgElement.setAttribute("width", P.width)),
              (this || t).currentBBox.h !== P.height &&
                (((this || t).currentBBox.h = P.height),
                (this || t).svgElement.setAttribute("height", P.height));
            var S = 1;
            if (
              (this || t).currentBBox.w !== P.width + S * 2 ||
              (this || t).currentBBox.h !== P.height + S * 2 ||
              (this || t).currentBBox.x !== P.x - S ||
              (this || t).currentBBox.y !== P.y - S
            ) {
              ((this || t).currentBBox.w = P.width + S * 2),
                ((this || t).currentBBox.h = P.height + S * 2),
                ((this || t).currentBBox.x = P.x - S),
                ((this || t).currentBBox.y = P.y - S),
                (this || t).svgElement.setAttribute(
                  "viewBox",
                  (this || t).currentBBox.x +
                    " " +
                    (this || t).currentBBox.y +
                    " " +
                    (this || t).currentBBox.w +
                    " " +
                    (this || t).currentBBox.h
                ),
                (e = (this || t).svgElement.style);
              var u =
                "translate(" +
                (this || t).currentBBox.x +
                "px," +
                (this || t).currentBBox.y +
                "px)";
              (e.transform = u), (e.webkitTransform = u);
            }
          }
        }
      });
    function HImageElement(e, r, i) {
      ((this || t).assetData = r.getAssetData(e.refId)),
        this.initElement(e, r, i);
    }
    extendPrototype(
      [
        BaseElement,
        TransformElement,
        HBaseElement,
        HSolidElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
      ],
      HImageElement
    ),
      (HImageElement.prototype.createContent = function () {
        var e = (this || t).globalData.getAssetsPath((this || t).assetData),
          r = new Image();
        (this || t).data.hasMask
          ? (((this || t).imageElem = createNS("image")),
            (this || t).imageElem.setAttribute(
              "width",
              (this || t).assetData.w + "px"
            ),
            (this || t).imageElem.setAttribute(
              "height",
              (this || t).assetData.h + "px"
            ),
            (this || t).imageElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              e
            ),
            (this || t).layerElement.appendChild((this || t).imageElem),
            (this || t).baseElement.setAttribute(
              "width",
              (this || t).assetData.w
            ),
            (this || t).baseElement.setAttribute(
              "height",
              (this || t).assetData.h
            ))
          : (this || t).layerElement.appendChild(r),
          (r.crossOrigin = "anonymous"),
          (r.src = e),
          (this || t).data.ln &&
            (this || t).baseElement.setAttribute("id", (this || t).data.ln);
      });
    function HCameraElement(e, r, i) {
      this.initFrame(), this.initBaseData(e, r, i), this.initHierarchy();
      var s = PropertyFactory.getProp;
      if (
        (((this || t).pe = s(this || t, e.pe, 0, 0, this || t)),
        e.ks.p.s
          ? (((this || t).px = s(this || t, e.ks.p.x, 1, 0, this || t)),
            ((this || t).py = s(this || t, e.ks.p.y, 1, 0, this || t)),
            ((this || t).pz = s(this || t, e.ks.p.z, 1, 0, this || t)))
          : ((this || t).p = s(this || t, e.ks.p, 1, 0, this || t)),
        e.ks.a && ((this || t).a = s(this || t, e.ks.a, 1, 0, this || t)),
        e.ks.or.k.length && e.ks.or.k[0].to)
      ) {
        var a,
          n = e.ks.or.k.length;
        for (a = 0; a < n; a += 1)
          (e.ks.or.k[a].to = null), (e.ks.or.k[a].ti = null);
      }
      ((this || t).or = s(this || t, e.ks.or, 1, degToRads, this || t)),
        ((this || t).or.sh = !0),
        ((this || t).rx = s(this || t, e.ks.rx, 0, degToRads, this || t)),
        ((this || t).ry = s(this || t, e.ks.ry, 0, degToRads, this || t)),
        ((this || t).rz = s(this || t, e.ks.rz, 0, degToRads, this || t)),
        ((this || t).mat = new Matrix()),
        ((this || t)._prevMat = new Matrix()),
        ((this || t)._isFirstFrame = !0),
        ((this || t).finalTransform = { mProp: this || t });
    }
    extendPrototype(
      [BaseElement, FrameElement, HierarchyElement],
      HCameraElement
    ),
      (HCameraElement.prototype.setup = function () {
        var e,
          r = (this || t).comp.threeDElements.length,
          i,
          s,
          a;
        for (e = 0; e < r; e += 1)
          if (((i = (this || t).comp.threeDElements[e]), i.type === "3d")) {
            (s = i.perspectiveElem.style), (a = i.container.style);
            var n = (this || t).pe.v + "px",
              l = "0px 0px 0px",
              v = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (s.perspective = n),
              (s.webkitPerspective = n),
              (a.transformOrigin = l),
              (a.mozTransformOrigin = l),
              (a.webkitTransformOrigin = l),
              (s.transform = v),
              (s.webkitTransform = v);
          }
      }),
      (HCameraElement.prototype.createElements = function () {}),
      (HCameraElement.prototype.hide = function () {}),
      (HCameraElement.prototype.renderFrame = function () {
        var e = (this || t)._isFirstFrame,
          r,
          i;
        if ((this || t).hierarchy)
          for (i = (this || t).hierarchy.length, r = 0; r < i; r += 1)
            e = (this || t).hierarchy[r].finalTransform.mProp._mdf || e;
        if (
          e ||
          (this || t).pe._mdf ||
          ((this || t).p && (this || t).p._mdf) ||
          ((this || t).px &&
            ((this || t).px._mdf ||
              (this || t).py._mdf ||
              (this || t).pz._mdf)) ||
          (this || t).rx._mdf ||
          (this || t).ry._mdf ||
          (this || t).rz._mdf ||
          (this || t).or._mdf ||
          ((this || t).a && (this || t).a._mdf)
        ) {
          if (((this || t).mat.reset(), (this || t).hierarchy))
            for (i = (this || t).hierarchy.length - 1, r = i; r >= 0; r -= 1) {
              var s = (this || t).hierarchy[r].finalTransform.mProp;
              (this || t).mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]),
                (this || t).mat
                  .rotateX(-s.or.v[0])
                  .rotateY(-s.or.v[1])
                  .rotateZ(s.or.v[2]),
                (this || t).mat
                  .rotateX(-s.rx.v)
                  .rotateY(-s.ry.v)
                  .rotateZ(s.rz.v),
                (this || t).mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]),
                (this || t).mat.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
            }
          if (
            ((this || t).p
              ? (this || t).mat.translate(
                  -(this || t).p.v[0],
                  -(this || t).p.v[1],
                  (this || t).p.v[2]
                )
              : (this || t).mat.translate(
                  -(this || t).px.v,
                  -(this || t).py.v,
                  (this || t).pz.v
                ),
            (this || t).a)
          ) {
            var a;
            (this || t).p
              ? (a = [
                  (this || t).p.v[0] - (this || t).a.v[0],
                  (this || t).p.v[1] - (this || t).a.v[1],
                  (this || t).p.v[2] - (this || t).a.v[2],
                ])
              : (a = [
                  (this || t).px.v - (this || t).a.v[0],
                  (this || t).py.v - (this || t).a.v[1],
                  (this || t).pz.v - (this || t).a.v[2],
                ]);
            var n = Math.sqrt(
                Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)
              ),
              l = [a[0] / n, a[1] / n, a[2] / n],
              v = Math.sqrt(l[2] * l[2] + l[0] * l[0]),
              y = Math.atan2(l[1], v),
              g = Math.atan2(l[0], -l[2]);
            (this || t).mat.rotateY(g).rotateX(-y);
          }
          (this || t).mat
            .rotateX(-(this || t).rx.v)
            .rotateY(-(this || t).ry.v)
            .rotateZ((this || t).rz.v),
            (this || t).mat
              .rotateX(-(this || t).or.v[0])
              .rotateY(-(this || t).or.v[1])
              .rotateZ((this || t).or.v[2]),
            (this || t).mat.translate(
              (this || t).globalData.compSize.w / 2,
              (this || t).globalData.compSize.h / 2,
              0
            ),
            (this || t).mat.translate(0, 0, (this || t).pe.v);
          var P = !(this || t)._prevMat.equals((this || t).mat);
          if ((P || (this || t).pe._mdf) && (this || t).comp.threeDElements) {
            i = (this || t).comp.threeDElements.length;
            var S, u, d;
            for (r = 0; r < i; r += 1)
              if (((S = (this || t).comp.threeDElements[r]), S.type === "3d")) {
                if (P) {
                  var C = (this || t).mat.toCSS();
                  (d = S.container.style),
                    (d.transform = C),
                    (d.webkitTransform = C);
                }
                (this || t).pe._mdf &&
                  ((u = S.perspectiveElem.style),
                  (u.perspective = (this || t).pe.v + "px"),
                  (u.webkitPerspective = (this || t).pe.v + "px"));
              }
            (this || t).mat.clone((this || t)._prevMat);
          }
        }
        (this || t)._isFirstFrame = !1;
      }),
      (HCameraElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0);
      }),
      (HCameraElement.prototype.destroy = function () {}),
      (HCameraElement.prototype.getBaseElement = function () {
        return null;
      });
    function HEffects() {}
    HEffects.prototype.renderFrame = function () {};
    var animationManager = (function () {
        var e = {},
          r = [],
          i = 0,
          s = 0,
          a = 0,
          n = !0,
          l = !1;
        function v(M) {
          for (var T = 0, E = M.target; T < s; )
            r[T].animation === E &&
              (r.splice(T, 1), (T -= 1), (s -= 1), E.isPaused || S()),
              (T += 1);
        }
        function y(M, T) {
          if (!M) return null;
          for (var E = 0; E < s; ) {
            if (r[E].elem === M && r[E].elem !== null) return r[E].animation;
            E += 1;
          }
          var F = new AnimationItem();
          return u(F, M), F.setData(M, T), F;
        }
        function g() {
          var M,
            T = r.length,
            E = [];
          for (M = 0; M < T; M += 1) E.push(r[M].animation);
          return E;
        }
        function P() {
          (a += 1), w();
        }
        function S() {
          a -= 1;
        }
        function u(M, T) {
          M.addEventListener("destroy", v),
            M.addEventListener("_active", P),
            M.addEventListener("_idle", S),
            r.push({ elem: T, animation: M }),
            (s += 1);
        }
        function d(M) {
          var T = new AnimationItem();
          return u(T, null), T.setParams(M), T;
        }
        function C(M, T) {
          var E;
          for (E = 0; E < s; E += 1) r[E].animation.setSpeed(M, T);
        }
        function f(M, T) {
          var E;
          for (E = 0; E < s; E += 1) r[E].animation.setDirection(M, T);
        }
        function p(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.play(M);
        }
        function c(M) {
          var T = M - i,
            E;
          for (E = 0; E < s; E += 1) r[E].animation.advanceTime(T);
          (i = M), a && !l ? window.requestAnimationFrame(c) : (n = !0);
        }
        function o(M) {
          (i = M), window.requestAnimationFrame(c);
        }
        function h(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.pause(M);
        }
        function m(M, T, E) {
          var F;
          for (F = 0; F < s; F += 1) r[F].animation.goToAndStop(M, T, E);
        }
        function b(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.stop(M);
        }
        function A(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.togglePause(M);
        }
        function x(M) {
          var T;
          for (T = s - 1; T >= 0; T -= 1) r[T].animation.destroy(M);
        }
        function _(M, T, E) {
          var F = [].concat(
              [].slice.call(document.getElementsByClassName("lottie")),
              [].slice.call(document.getElementsByClassName("bodymovin"))
            ),
            D,
            I = F.length;
          for (D = 0; D < I; D += 1)
            E && F[D].setAttribute("data-bm-type", E), y(F[D], M);
          if (T && I === 0) {
            E || (E = "svg");
            var N = document.getElementsByTagName("body")[0];
            N.innerText = "";
            var z = createTag("div");
            (z.style.width = "100%"),
              (z.style.height = "100%"),
              z.setAttribute("data-bm-type", E),
              N.appendChild(z),
              y(z, M);
          }
        }
        function k() {
          var M;
          for (M = 0; M < s; M += 1) r[M].animation.resize();
        }
        function w() {
          !l && a && n && (window.requestAnimationFrame(o), (n = !1));
        }
        function R() {
          l = !0;
        }
        function V() {
          (l = !1), w();
        }
        function B(M, T) {
          var E;
          for (E = 0; E < s; E += 1) r[E].animation.setVolume(M, T);
        }
        function L(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.mute(M);
        }
        function O(M) {
          var T;
          for (T = 0; T < s; T += 1) r[T].animation.unmute(M);
        }
        return (
          (e.registerAnimation = y),
          (e.loadAnimation = d),
          (e.setSpeed = C),
          (e.setDirection = f),
          (e.play = p),
          (e.pause = h),
          (e.stop = b),
          (e.togglePause = A),
          (e.searchAnimations = _),
          (e.resize = k),
          (e.goToAndStop = m),
          (e.destroy = x),
          (e.freeze = R),
          (e.unfreeze = V),
          (e.setVolume = B),
          (e.mute = L),
          (e.unmute = O),
          (e.getRegisteredAnimations = g),
          e
        );
      })(),
      AnimationItem = function () {
        ((this || t)._cbs = []),
          ((this || t).name = ""),
          ((this || t).path = ""),
          ((this || t).isLoaded = !1),
          ((this || t).currentFrame = 0),
          ((this || t).currentRawFrame = 0),
          ((this || t).firstFrame = 0),
          ((this || t).totalFrames = 0),
          ((this || t).frameRate = 0),
          ((this || t).frameMult = 0),
          ((this || t).playSpeed = 1),
          ((this || t).playDirection = 1),
          ((this || t).playCount = 0),
          ((this || t).animationData = {}),
          ((this || t).assets = []),
          ((this || t).isPaused = !0),
          ((this || t).autoplay = !1),
          ((this || t).loop = !0),
          ((this || t).renderer = null),
          ((this || t).animationID = createElementID()),
          ((this || t).assetsPath = ""),
          ((this || t).timeCompleted = 0),
          ((this || t).segmentPos = 0),
          ((this || t).isSubframeEnabled = subframeEnabled),
          ((this || t).segments = []),
          ((this || t)._idle = !0),
          ((this || t)._completedLoop = !1),
          ((this || t).projectInterface = ProjectInterface()),
          ((this || t).imagePreloader = new ImagePreloader()),
          ((this || t).audioController = audioControllerFactory()),
          ((this || t).markers = []);
      };
    extendPrototype([BaseEvent], AnimationItem),
      (AnimationItem.prototype.setParams = function (e) {
        (e.wrapper || e.container) &&
          ((this || t).wrapper = e.wrapper || e.container);
        var r = "svg";
        switch (
          (e.animType ? (r = e.animType) : e.renderer && (r = e.renderer), r)
        ) {
          case "canvas":
            (this || t).renderer = new CanvasRenderer(
              this || t,
              e.rendererSettings
            );
            break;
          case "svg":
            (this || t).renderer = new SVGRenderer(
              this || t,
              e.rendererSettings
            );
            break;
          default:
            (this || t).renderer = new HybridRenderer(
              this || t,
              e.rendererSettings
            );
            break;
        }
        (this || t).imagePreloader.setCacheType(
          r,
          (this || t).renderer.globalData.defs
        ),
          (this || t).renderer.setProjectInterface(
            (this || t).projectInterface
          ),
          ((this || t).animType = r),
          e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0
            ? ((this || t).loop = !0)
            : e.loop === !1
            ? ((this || t).loop = !1)
            : ((this || t).loop = parseInt(e.loop, 10)),
          ((this || t).autoplay = "autoplay" in e ? e.autoplay : !0),
          ((this || t).name = e.name ? e.name : ""),
          ((this || t).autoloadSegments = Object.prototype.hasOwnProperty.call(
            e,
            "autoloadSegments"
          )
            ? e.autoloadSegments
            : !0),
          ((this || t).assetsPath = e.assetsPath),
          ((this || t).initialSegment = e.initialSegment),
          e.audioFactory &&
            (this || t).audioController.setAudioFactory(e.audioFactory),
          e.animationData
            ? this.configAnimation(e.animationData)
            : e.path &&
              (e.path.lastIndexOf("\\") !== -1
                ? ((this || t).path = e.path.substr(
                    0,
                    e.path.lastIndexOf("\\") + 1
                  ))
                : ((this || t).path = e.path.substr(
                    0,
                    e.path.lastIndexOf("/") + 1
                  )),
              ((this || t).fileName = e.path.substr(
                e.path.lastIndexOf("/") + 1
              )),
              ((this || t).fileName = (this || t).fileName.substr(
                0,
                (this || t).fileName.lastIndexOf(".json")
              )),
              assetLoader.load(
                e.path,
                (this || t).configAnimation.bind(this || t),
                function () {
                  this.trigger("data_failed");
                }.bind(this || t)
              ));
      }),
      (AnimationItem.prototype.setData = function (e, r) {
        r && typeof r != "object" && (r = JSON.parse(r));
        var i = { wrapper: e, animationData: r },
          s = e.attributes;
        (i.path = s.getNamedItem("data-animation-path")
          ? s.getNamedItem("data-animation-path").value
          : s.getNamedItem("data-bm-path")
          ? s.getNamedItem("data-bm-path").value
          : s.getNamedItem("bm-path")
          ? s.getNamedItem("bm-path").value
          : ""),
          (i.animType = s.getNamedItem("data-anim-type")
            ? s.getNamedItem("data-anim-type").value
            : s.getNamedItem("data-bm-type")
            ? s.getNamedItem("data-bm-type").value
            : s.getNamedItem("bm-type")
            ? s.getNamedItem("bm-type").value
            : s.getNamedItem("data-bm-renderer")
            ? s.getNamedItem("data-bm-renderer").value
            : s.getNamedItem("bm-renderer")
            ? s.getNamedItem("bm-renderer").value
            : "canvas");
        var a = s.getNamedItem("data-anim-loop")
          ? s.getNamedItem("data-anim-loop").value
          : s.getNamedItem("data-bm-loop")
          ? s.getNamedItem("data-bm-loop").value
          : s.getNamedItem("bm-loop")
          ? s.getNamedItem("bm-loop").value
          : "";
        a === "false"
          ? (i.loop = !1)
          : a === "true"
          ? (i.loop = !0)
          : a !== "" && (i.loop = parseInt(a, 10));
        var n = s.getNamedItem("data-anim-autoplay")
          ? s.getNamedItem("data-anim-autoplay").value
          : s.getNamedItem("data-bm-autoplay")
          ? s.getNamedItem("data-bm-autoplay").value
          : s.getNamedItem("bm-autoplay")
          ? s.getNamedItem("bm-autoplay").value
          : !0;
        (i.autoplay = n !== "false"),
          (i.name = s.getNamedItem("data-name")
            ? s.getNamedItem("data-name").value
            : s.getNamedItem("data-bm-name")
            ? s.getNamedItem("data-bm-name").value
            : s.getNamedItem("bm-name")
            ? s.getNamedItem("bm-name").value
            : "");
        var l = s.getNamedItem("data-anim-prerender")
          ? s.getNamedItem("data-anim-prerender").value
          : s.getNamedItem("data-bm-prerender")
          ? s.getNamedItem("data-bm-prerender").value
          : s.getNamedItem("bm-prerender")
          ? s.getNamedItem("bm-prerender").value
          : "";
        l === "false" && (i.prerender = !1), this.setParams(i);
      }),
      (AnimationItem.prototype.includeLayers = function (e) {
        e.op > (this || t).animationData.op &&
          (((this || t).animationData.op = e.op),
          ((this || t).totalFrames = Math.floor(
            e.op - (this || t).animationData.ip
          )));
        var r = (this || t).animationData.layers,
          i,
          s = r.length,
          a = e.layers,
          n,
          l = a.length;
        for (n = 0; n < l; n += 1)
          for (i = 0; i < s; ) {
            if (r[i].id === a[n].id) {
              r[i] = a[n];
              break;
            }
            i += 1;
          }
        if (
          ((e.chars || e.fonts) &&
            ((this || t).renderer.globalData.fontManager.addChars(e.chars),
            (this || t).renderer.globalData.fontManager.addFonts(
              e.fonts,
              (this || t).renderer.globalData.defs
            )),
          e.assets)
        )
          for (s = e.assets.length, i = 0; i < s; i += 1)
            (this || t).animationData.assets.push(e.assets[i]);
        ((this || t).animationData.__complete = !1),
          dataManager.completeData(
            (this || t).animationData,
            (this || t).renderer.globalData.fontManager
          ),
          (this || t).renderer.includeLayers(e.layers),
          expressionsPlugin && expressionsPlugin.initExpressions(this || t),
          this.loadNextSegment();
      }),
      (AnimationItem.prototype.loadNextSegment = function () {
        var e = (this || t).animationData.segments;
        if (!e || e.length === 0 || !(this || t).autoloadSegments) {
          this.trigger("data_ready"),
            ((this || t).timeCompleted = (this || t).totalFrames);
          return;
        }
        var r = e.shift();
        (this || t).timeCompleted = r.time * (this || t).frameRate;
        var i =
          (this || t).path +
          (this || t).fileName +
          "_" +
          (this || t).segmentPos +
          ".json";
        ((this || t).segmentPos += 1),
          assetLoader.load(
            i,
            (this || t).includeLayers.bind(this || t),
            function () {
              this.trigger("data_failed");
            }.bind(this || t)
          );
      }),
      (AnimationItem.prototype.loadSegments = function () {
        var e = (this || t).animationData.segments;
        e || ((this || t).timeCompleted = (this || t).totalFrames),
          this.loadNextSegment();
      }),
      (AnimationItem.prototype.imagesLoaded = function () {
        this.trigger("loaded_images"), this.checkLoaded();
      }),
      (AnimationItem.prototype.preloadImages = function () {
        (this || t).imagePreloader.setAssetsPath((this || t).assetsPath),
          (this || t).imagePreloader.setPath((this || t).path),
          (this || t).imagePreloader.loadAssets(
            (this || t).animationData.assets,
            (this || t).imagesLoaded.bind(this || t)
          );
      }),
      (AnimationItem.prototype.configAnimation = function (e) {
        if ((this || t).renderer)
          try {
            ((this || t).animationData = e),
              (this || t).initialSegment
                ? (((this || t).totalFrames = Math.floor(
                    (this || t).initialSegment[1] -
                      (this || t).initialSegment[0]
                  )),
                  ((this || t).firstFrame = Math.round(
                    (this || t).initialSegment[0]
                  )))
                : (((this || t).totalFrames = Math.floor(
                    (this || t).animationData.op - (this || t).animationData.ip
                  )),
                  ((this || t).firstFrame = Math.round(
                    (this || t).animationData.ip
                  ))),
              (this || t).renderer.configAnimation(e),
              e.assets || (e.assets = []),
              ((this || t).assets = (this || t).animationData.assets),
              ((this || t).frameRate = (this || t).animationData.fr),
              ((this || t).frameMult = (this || t).animationData.fr / 1e3),
              (this || t).renderer.searchExtraCompositions(e.assets),
              ((this || t).markers = markerParser(e.markers || [])),
              this.trigger("config_ready"),
              this.preloadImages(),
              this.loadSegments(),
              this.updaFrameModifier(),
              this.waitForFontsLoaded(),
              (this || t).isPaused && (this || t).audioController.pause();
          } catch (r) {
            this.triggerConfigError(r);
          }
      }),
      (AnimationItem.prototype.waitForFontsLoaded = function () {
        (this || t).renderer &&
          ((this || t).renderer.globalData.fontManager.isLoaded
            ? this.checkLoaded()
            : setTimeout((this || t).waitForFontsLoaded.bind(this || t), 20));
      }),
      (AnimationItem.prototype.checkLoaded = function () {
        !(this || t).isLoaded &&
          (this || t).renderer.globalData.fontManager.isLoaded &&
          ((this || t).imagePreloader.loadedImages() ||
            (this || t).renderer.rendererType !== "canvas") &&
          (this || t).imagePreloader.loadedFootages() &&
          (((this || t).isLoaded = !0),
          dataManager.completeData(
            (this || t).animationData,
            (this || t).renderer.globalData.fontManager
          ),
          expressionsPlugin && expressionsPlugin.initExpressions(this || t),
          (this || t).renderer.initItems(),
          setTimeout(
            function () {
              this.trigger("DOMLoaded");
            }.bind(this || t),
            0
          ),
          this.gotoFrame(),
          (this || t).autoplay && this.play());
      }),
      (AnimationItem.prototype.resize = function () {
        (this || t).renderer.updateContainerSize();
      }),
      (AnimationItem.prototype.setSubframe = function (e) {
        (this || t).isSubframeEnabled = !!e;
      }),
      (AnimationItem.prototype.gotoFrame = function () {
        ((this || t).currentFrame = (this || t).isSubframeEnabled
          ? (this || t).currentRawFrame
          : ~~(this || t).currentRawFrame),
          (this || t).timeCompleted !== (this || t).totalFrames &&
            (this || t).currentFrame > (this || t).timeCompleted &&
            ((this || t).currentFrame = (this || t).timeCompleted),
          this.trigger("enterFrame"),
          this.renderFrame();
      }),
      (AnimationItem.prototype.renderFrame = function () {
        if (!((this || t).isLoaded === !1 || !(this || t).renderer))
          try {
            (this || t).renderer.renderFrame(
              (this || t).currentFrame + (this || t).firstFrame
            );
          } catch (e) {
            this.triggerRenderFrameError(e);
          }
      }),
      (AnimationItem.prototype.play = function (e) {
        (e && (this || t).name !== e) ||
          ((this || t).isPaused === !0 &&
            (((this || t).isPaused = !1),
            (this || t).audioController.resume(),
            (this || t)._idle &&
              (((this || t)._idle = !1), this.trigger("_active"))));
      }),
      (AnimationItem.prototype.pause = function (e) {
        (e && (this || t).name !== e) ||
          ((this || t).isPaused === !1 &&
            (((this || t).isPaused = !0),
            ((this || t)._idle = !0),
            this.trigger("_idle"),
            (this || t).audioController.pause()));
      }),
      (AnimationItem.prototype.togglePause = function (e) {
        (e && (this || t).name !== e) ||
          ((this || t).isPaused === !0 ? this.play() : this.pause());
      }),
      (AnimationItem.prototype.stop = function (e) {
        (e && (this || t).name !== e) ||
          (this.pause(),
          ((this || t).playCount = 0),
          ((this || t)._completedLoop = !1),
          this.setCurrentRawFrameValue(0));
      }),
      (AnimationItem.prototype.getMarkerData = function (e) {
        for (var r, i = 0; i < (this || t).markers.length; i += 1)
          if (((r = (this || t).markers[i]), r.payload && r.payload.name === e))
            return r;
        return null;
      }),
      (AnimationItem.prototype.goToAndStop = function (e, r, i) {
        if (!(i && (this || t).name !== i)) {
          var s = Number(e);
          if (isNaN(s)) {
            var a = this.getMarkerData(e);
            a && this.goToAndStop(a.time, !0);
          } else
            r
              ? this.setCurrentRawFrameValue(e)
              : this.setCurrentRawFrameValue(e * (this || t).frameModifier);
          this.pause();
        }
      }),
      (AnimationItem.prototype.goToAndPlay = function (e, r, i) {
        if (!(i && (this || t).name !== i)) {
          var s = Number(e);
          if (isNaN(s)) {
            var a = this.getMarkerData(e);
            a &&
              (a.duration
                ? this.playSegments([a.time, a.time + a.duration], !0)
                : this.goToAndStop(a.time, !0));
          } else this.goToAndStop(s, r, i);
          this.play();
        }
      }),
      (AnimationItem.prototype.advanceTime = function (e) {
        if (!((this || t).isPaused === !0 || (this || t).isLoaded === !1)) {
          var r = (this || t).currentRawFrame + e * (this || t).frameModifier,
            i = !1;
          r >= (this || t).totalFrames - 1 && (this || t).frameModifier > 0
            ? !(this || t).loop || (this || t).playCount === (this || t).loop
              ? this.checkSegments(
                  r > (this || t).totalFrames ? r % (this || t).totalFrames : 0
                ) || ((i = !0), (r = (this || t).totalFrames - 1))
              : r >= (this || t).totalFrames
              ? (((this || t).playCount += 1),
                this.checkSegments(r % (this || t).totalFrames) ||
                  (this.setCurrentRawFrameValue(r % (this || t).totalFrames),
                  ((this || t)._completedLoop = !0),
                  this.trigger("loopComplete")))
              : this.setCurrentRawFrameValue(r)
            : r < 0
            ? this.checkSegments(r % (this || t).totalFrames) ||
              ((this || t).loop &&
              !((this || t).playCount-- <= 0 && (this || t).loop !== !0)
                ? (this.setCurrentRawFrameValue(
                    (this || t).totalFrames + (r % (this || t).totalFrames)
                  ),
                  (this || t)._completedLoop
                    ? this.trigger("loopComplete")
                    : ((this || t)._completedLoop = !0))
                : ((i = !0), (r = 0)))
            : this.setCurrentRawFrameValue(r),
            i &&
              (this.setCurrentRawFrameValue(r),
              this.pause(),
              this.trigger("complete"));
        }
      }),
      (AnimationItem.prototype.adjustSegment = function (e, r) {
        ((this || t).playCount = 0),
          e[1] < e[0]
            ? ((this || t).frameModifier > 0 &&
                ((this || t).playSpeed < 0
                  ? this.setSpeed(-(this || t).playSpeed)
                  : this.setDirection(-1)),
              ((this || t).totalFrames = e[0] - e[1]),
              ((this || t).timeCompleted = (this || t).totalFrames),
              ((this || t).firstFrame = e[1]),
              this.setCurrentRawFrameValue((this || t).totalFrames - 0.001 - r))
            : e[1] > e[0] &&
              ((this || t).frameModifier < 0 &&
                ((this || t).playSpeed < 0
                  ? this.setSpeed(-(this || t).playSpeed)
                  : this.setDirection(1)),
              ((this || t).totalFrames = e[1] - e[0]),
              ((this || t).timeCompleted = (this || t).totalFrames),
              ((this || t).firstFrame = e[0]),
              this.setCurrentRawFrameValue(0.001 + r)),
          this.trigger("segmentStart");
      }),
      (AnimationItem.prototype.setSegment = function (e, r) {
        var i = -1;
        (this || t).isPaused &&
          ((this || t).currentRawFrame + (this || t).firstFrame < e
            ? (i = e)
            : (this || t).currentRawFrame + (this || t).firstFrame > r &&
              (i = r - e)),
          ((this || t).firstFrame = e),
          ((this || t).totalFrames = r - e),
          ((this || t).timeCompleted = (this || t).totalFrames),
          i !== -1 && this.goToAndStop(i, !0);
      }),
      (AnimationItem.prototype.playSegments = function (e, r) {
        if ((r && ((this || t).segments.length = 0), typeof e[0] == "object")) {
          var i,
            s = e.length;
          for (i = 0; i < s; i += 1) (this || t).segments.push(e[i]);
        } else (this || t).segments.push(e);
        (this || t).segments.length &&
          r &&
          this.adjustSegment((this || t).segments.shift(), 0),
          (this || t).isPaused && this.play();
      }),
      (AnimationItem.prototype.resetSegments = function (e) {
        ((this || t).segments.length = 0),
          (this || t).segments.push([
            (this || t).animationData.ip,
            (this || t).animationData.op,
          ]),
          e && this.checkSegments(0);
      }),
      (AnimationItem.prototype.checkSegments = function (e) {
        return (this || t).segments.length
          ? (this.adjustSegment((this || t).segments.shift(), e), !0)
          : !1;
      }),
      (AnimationItem.prototype.destroy = function (e) {
        (e && (this || t).name !== e) ||
          !(this || t).renderer ||
          ((this || t).renderer.destroy(),
          (this || t).imagePreloader.destroy(),
          this.trigger("destroy"),
          ((this || t)._cbs = null),
          ((this || t).onEnterFrame = null),
          ((this || t).onLoopComplete = null),
          ((this || t).onComplete = null),
          ((this || t).onSegmentStart = null),
          ((this || t).onDestroy = null),
          ((this || t).renderer = null),
          ((this || t).renderer = null),
          ((this || t).imagePreloader = null),
          ((this || t).projectInterface = null));
      }),
      (AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
        ((this || t).currentRawFrame = e), this.gotoFrame();
      }),
      (AnimationItem.prototype.setSpeed = function (e) {
        ((this || t).playSpeed = e), this.updaFrameModifier();
      }),
      (AnimationItem.prototype.setDirection = function (e) {
        ((this || t).playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
      }),
      (AnimationItem.prototype.setVolume = function (e, r) {
        (r && (this || t).name !== r) ||
          (this || t).audioController.setVolume(e);
      }),
      (AnimationItem.prototype.getVolume = function () {
        return (this || t).audioController.getVolume();
      }),
      (AnimationItem.prototype.mute = function (e) {
        (e && (this || t).name !== e) || (this || t).audioController.mute();
      }),
      (AnimationItem.prototype.unmute = function (e) {
        (e && (this || t).name !== e) || (this || t).audioController.unmute();
      }),
      (AnimationItem.prototype.updaFrameModifier = function () {
        ((this || t).frameModifier =
          (this || t).frameMult *
          (this || t).playSpeed *
          (this || t).playDirection),
          (this || t).audioController.setRate(
            (this || t).playSpeed * (this || t).playDirection
          );
      }),
      (AnimationItem.prototype.getPath = function () {
        return (this || t).path;
      }),
      (AnimationItem.prototype.getAssetsPath = function (e) {
        var r = "";
        if (e.e) r = e.p;
        else if ((this || t).assetsPath) {
          var i = e.p;
          i.indexOf("images/") !== -1 && (i = i.split("/")[1]),
            (r = (this || t).assetsPath + i);
        } else (r = (this || t).path), (r += e.u ? e.u : ""), (r += e.p);
        return r;
      }),
      (AnimationItem.prototype.getAssetData = function (e) {
        for (var r = 0, i = (this || t).assets.length; r < i; ) {
          if (e === (this || t).assets[r].id) return (this || t).assets[r];
          r += 1;
        }
        return null;
      }),
      (AnimationItem.prototype.hide = function () {
        (this || t).renderer.hide();
      }),
      (AnimationItem.prototype.show = function () {
        (this || t).renderer.show();
      }),
      (AnimationItem.prototype.getDuration = function (e) {
        return e
          ? (this || t).totalFrames
          : (this || t).totalFrames / (this || t).frameRate;
      }),
      (AnimationItem.prototype.trigger = function (e) {
        if ((this || t)._cbs && (this || t)._cbs[e])
          switch (e) {
            case "enterFrame":
              this.triggerEvent(
                e,
                new BMEnterFrameEvent(
                  e,
                  (this || t).currentFrame,
                  (this || t).totalFrames,
                  (this || t).frameModifier
                )
              );
              break;
            case "loopComplete":
              this.triggerEvent(
                e,
                new BMCompleteLoopEvent(
                  e,
                  (this || t).loop,
                  (this || t).playCount,
                  (this || t).frameMult
                )
              );
              break;
            case "complete":
              this.triggerEvent(
                e,
                new BMCompleteEvent(e, (this || t).frameMult)
              );
              break;
            case "segmentStart":
              this.triggerEvent(
                e,
                new BMSegmentStartEvent(
                  e,
                  (this || t).firstFrame,
                  (this || t).totalFrames
                )
              );
              break;
            case "destroy":
              this.triggerEvent(e, new BMDestroyEvent(e, this || t));
              break;
            default:
              this.triggerEvent(e);
          }
        e === "enterFrame" &&
          (this || t).onEnterFrame &&
          (this || t).onEnterFrame.call(
            this || t,
            new BMEnterFrameEvent(
              e,
              (this || t).currentFrame,
              (this || t).totalFrames,
              (this || t).frameMult
            )
          ),
          e === "loopComplete" &&
            (this || t).onLoopComplete &&
            (this || t).onLoopComplete.call(
              this || t,
              new BMCompleteLoopEvent(
                e,
                (this || t).loop,
                (this || t).playCount,
                (this || t).frameMult
              )
            ),
          e === "complete" &&
            (this || t).onComplete &&
            (this || t).onComplete.call(
              this || t,
              new BMCompleteEvent(e, (this || t).frameMult)
            ),
          e === "segmentStart" &&
            (this || t).onSegmentStart &&
            (this || t).onSegmentStart.call(
              this || t,
              new BMSegmentStartEvent(
                e,
                (this || t).firstFrame,
                (this || t).totalFrames
              )
            ),
          e === "destroy" &&
            (this || t).onDestroy &&
            (this || t).onDestroy.call(
              this || t,
              new BMDestroyEvent(e, this || t)
            );
      }),
      (AnimationItem.prototype.triggerRenderFrameError = function (e) {
        var r = new BMRenderFrameErrorEvent(e, (this || t).currentFrame);
        this.triggerEvent("error", r),
          (this || t).onError && (this || t).onError.call(this || t, r);
      }),
      (AnimationItem.prototype.triggerConfigError = function (e) {
        var r = new BMConfigErrorEvent(e, (this || t).currentFrame);
        this.triggerEvent("error", r),
          (this || t).onError && (this || t).onError.call(this || t, r);
      });
    var Expressions = (function () {
      var e = {};
      e.initExpressions = r;
      function r(i) {
        var s = 0,
          a = [];
        function n() {
          s += 1;
        }
        function l() {
          (s -= 1), s === 0 && y();
        }
        function v(g) {
          a.indexOf(g) === -1 && a.push(g);
        }
        function y() {
          var g,
            P = a.length;
          for (g = 0; g < P; g += 1) a[g].release();
          a.length = 0;
        }
        (i.renderer.compInterface = CompExpressionInterface(i.renderer)),
          i.renderer.globalData.projectInterface.registerComposition(
            i.renderer
          ),
          (i.renderer.globalData.pushExpression = n),
          (i.renderer.globalData.popExpression = l),
          (i.renderer.globalData.registerExpressionProperty = v);
      }
      return e;
    })();
    expressionsPlugin = Expressions;
    var ExpressionManager = (function () {
        "use strict";
        var ob = {},
          Math = BMMath,
          window = null,
          document = null;
        function $bm_isInstanceOfArray(e) {
          return e.constructor === Array || e.constructor === Float32Array;
        }
        function isNumerable(e, r) {
          return (
            e === "number" ||
            e === "boolean" ||
            e === "string" ||
            r instanceof Number
          );
        }
        function $bm_neg(e) {
          var r = typeof e;
          if (r === "number" || r === "boolean" || e instanceof Number)
            return -e;
          if ($bm_isInstanceOfArray(e)) {
            var i,
              s = e.length,
              a = [];
            for (i = 0; i < s; i += 1) a[i] = -e[i];
            return a;
          }
          return e.propType ? e.v : -e;
        }
        var easeInBez = BezierFactory.getBezierEasing(
            0.333,
            0,
            0.833,
            0.833,
            "easeIn"
          ).get,
          easeOutBez = BezierFactory.getBezierEasing(
            0.167,
            0.167,
            0.667,
            1,
            "easeOut"
          ).get,
          easeInOutBez = BezierFactory.getBezierEasing(
            0.33,
            0,
            0.667,
            1,
            "easeInOut"
          ).get;
        function sum(e, r) {
          var i = typeof e,
            s = typeof r;
          if (
            i === "string" ||
            s === "string" ||
            (isNumerable(i, e) && isNumerable(s, r))
          )
            return e + r;
          if ($bm_isInstanceOfArray(e) && isNumerable(s, r))
            return (e = e.slice(0)), (e[0] += r), e;
          if (isNumerable(i, e) && $bm_isInstanceOfArray(r))
            return (r = r.slice(0)), (r[0] = e + r[0]), r;
          if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(r)) {
            for (
              var a = 0, n = e.length, l = r.length, v = [];
              a < n || a < l;

            )
              (typeof e[a] == "number" || e[a] instanceof Number) &&
              (typeof r[a] == "number" || r[a] instanceof Number)
                ? (v[a] = e[a] + r[a])
                : (v[a] = r[a] === void 0 ? e[a] : e[a] || r[a]),
                (a += 1);
            return v;
          }
          return 0;
        }
        var add = sum;
        function sub(e, r) {
          var i = typeof e,
            s = typeof r;
          if (isNumerable(i, e) && isNumerable(s, r))
            return (
              i === "string" && (e = parseInt(e, 10)),
              s === "string" && (r = parseInt(r, 10)),
              e - r
            );
          if ($bm_isInstanceOfArray(e) && isNumerable(s, r))
            return (e = e.slice(0)), (e[0] -= r), e;
          if (isNumerable(i, e) && $bm_isInstanceOfArray(r))
            return (r = r.slice(0)), (r[0] = e - r[0]), r;
          if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(r)) {
            for (
              var a = 0, n = e.length, l = r.length, v = [];
              a < n || a < l;

            )
              (typeof e[a] == "number" || e[a] instanceof Number) &&
              (typeof r[a] == "number" || r[a] instanceof Number)
                ? (v[a] = e[a] - r[a])
                : (v[a] = r[a] === void 0 ? e[a] : e[a] || r[a]),
                (a += 1);
            return v;
          }
          return 0;
        }
        function mul(e, r) {
          var i = typeof e,
            s = typeof r,
            a;
          if (isNumerable(i, e) && isNumerable(s, r)) return e * r;
          var n, l;
          if ($bm_isInstanceOfArray(e) && isNumerable(s, r)) {
            for (
              l = e.length, a = createTypedArray("float32", l), n = 0;
              n < l;
              n += 1
            )
              a[n] = e[n] * r;
            return a;
          }
          if (isNumerable(i, e) && $bm_isInstanceOfArray(r)) {
            for (
              l = r.length, a = createTypedArray("float32", l), n = 0;
              n < l;
              n += 1
            )
              a[n] = e * r[n];
            return a;
          }
          return 0;
        }
        function div(e, r) {
          var i = typeof e,
            s = typeof r,
            a;
          if (isNumerable(i, e) && isNumerable(s, r)) return e / r;
          var n, l;
          if ($bm_isInstanceOfArray(e) && isNumerable(s, r)) {
            for (
              l = e.length, a = createTypedArray("float32", l), n = 0;
              n < l;
              n += 1
            )
              a[n] = e[n] / r;
            return a;
          }
          if (isNumerable(i, e) && $bm_isInstanceOfArray(r)) {
            for (
              l = r.length, a = createTypedArray("float32", l), n = 0;
              n < l;
              n += 1
            )
              a[n] = e / r[n];
            return a;
          }
          return 0;
        }
        function mod(e, r) {
          return (
            typeof e == "string" && (e = parseInt(e, 10)),
            typeof r == "string" && (r = parseInt(r, 10)),
            e % r
          );
        }
        var $bm_sum = sum,
          $bm_sub = sub,
          $bm_mul = mul,
          $bm_div = div,
          $bm_mod = mod;
        function clamp(e, r, i) {
          if (r > i) {
            var s = i;
            (i = r), (r = s);
          }
          return Math.min(Math.max(e, r), i);
        }
        function radiansToDegrees(e) {
          return e / degToRads;
        }
        var radians_to_degrees = radiansToDegrees;
        function degreesToRadians(e) {
          return e * degToRads;
        }
        var degrees_to_radians = radiansToDegrees,
          helperLengthArray = [0, 0, 0, 0, 0, 0];
        function length(e, r) {
          if (typeof e == "number" || e instanceof Number)
            return (r = r || 0), Math.abs(e - r);
          r || (r = helperLengthArray);
          var i,
            s = Math.min(e.length, r.length),
            a = 0;
          for (i = 0; i < s; i += 1) a += Math.pow(r[i] - e[i], 2);
          return Math.sqrt(a);
        }
        function normalize(e) {
          return div(e, length(e));
        }
        function rgbToHsl(e) {
          var r = e[0],
            i = e[1],
            s = e[2],
            a = Math.max(r, i, s),
            n = Math.min(r, i, s),
            l,
            v,
            y = (a + n) / 2;
          if (a === n) (l = 0), (v = 0);
          else {
            var g = a - n;
            switch (((v = y > 0.5 ? g / (2 - a - n) : g / (a + n)), a)) {
              case r:
                l = (i - s) / g + (i < s ? 6 : 0);
                break;
              case i:
                l = (s - r) / g + 2;
                break;
              case s:
                l = (r - i) / g + 4;
                break;
              default:
                break;
            }
            l /= 6;
          }
          return [l, v, y, e[3]];
        }
        function hue2rgb(e, r, i) {
          return (
            i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6
              ? e + (r - e) * 6 * i
              : i < 1 / 2
              ? r
              : i < 2 / 3
              ? e + (r - e) * (2 / 3 - i) * 6
              : e
          );
        }
        function hslToRgb(e) {
          var r = e[0],
            i = e[1],
            s = e[2],
            a,
            n,
            l;
          if (i === 0) (a = s), (l = s), (n = s);
          else {
            var v = s < 0.5 ? s * (1 + i) : s + i - s * i,
              y = 2 * s - v;
            (a = hue2rgb(y, v, r + 1 / 3)),
              (n = hue2rgb(y, v, r)),
              (l = hue2rgb(y, v, r - 1 / 3));
          }
          return [a, n, l, e[3]];
        }
        function linear(e, r, i, s, a) {
          if (
            ((s === void 0 || a === void 0) &&
              ((s = r), (a = i), (r = 0), (i = 1)),
            i < r)
          ) {
            var n = i;
            (i = r), (r = n);
          }
          if (e <= r) return s;
          if (e >= i) return a;
          var l = i === r ? 0 : (e - r) / (i - r);
          if (!s.length) return s + (a - s) * l;
          var v,
            y = s.length,
            g = createTypedArray("float32", y);
          for (v = 0; v < y; v += 1) g[v] = s[v] + (a[v] - s[v]) * l;
          return g;
        }
        function random(e, r) {
          if (
            (r === void 0 &&
              (e === void 0 ? ((e = 0), (r = 1)) : ((r = e), (e = void 0))),
            r.length)
          ) {
            var i,
              s = r.length;
            e || (e = createTypedArray("float32", s));
            var a = createTypedArray("float32", s),
              n = BMMath.random();
            for (i = 0; i < s; i += 1) a[i] = e[i] + n * (r[i] - e[i]);
            return a;
          }
          e === void 0 && (e = 0);
          var l = BMMath.random();
          return e + l * (r - e);
        }
        function createPath(e, r, i, s) {
          var a,
            n = e.length,
            l = shapePool.newElement();
          l.setPathData(!!s, n);
          var v = [0, 0],
            y,
            g;
          for (a = 0; a < n; a += 1)
            (y = r && r[a] ? r[a] : v),
              (g = i && i[a] ? i[a] : v),
              l.setTripleAt(
                e[a][0],
                e[a][1],
                g[0] + e[a][0],
                g[1] + e[a][1],
                y[0] + e[a][0],
                y[1] + e[a][1],
                a,
                !0
              );
          return l;
        }
        function initiateExpression(elem, data, property) {
          var val = data.x,
            needsVelocity = /velocity(?![\w\d])/.test(val),
            _needsRandom = val.indexOf("random") !== -1,
            elemType = elem.data.ty,
            transform,
            $bm_transform,
            content,
            effect,
            thisProperty = property;
          (thisProperty.valueAtTime = thisProperty.getValueAtTime),
            Object.defineProperty(thisProperty, "value", {
              get: function () {
                return thisProperty.v;
              },
            }),
            (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
            (elem.comp.displayStartTime = 0);
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
            outPoint = elem.data.op / elem.comp.globalData.frameRate,
            width = elem.data.sw ? elem.data.sw : 0,
            height = elem.data.sh ? elem.data.sh : 0,
            name = elem.data.nm,
            loopIn,
            loop_in,
            loopOut,
            loop_out,
            smooth,
            toWorld,
            fromWorld,
            fromComp,
            toComp,
            fromCompToSurface,
            position,
            rotation,
            anchorPoint,
            scale,
            thisLayer,
            thisComp,
            mask,
            valueAtTime,
            velocityAtTime,
            scoped_bm_rt,
            expression_function = eval(
              "[function _expression_function(){" +
                val +
                ";scoped_bm_rt=$bm_rt}]"
            )[0],
            numKeys = property.kf ? data.k.length : 0,
            active = !(this || t).data || (this || t).data.hd !== !0,
            wiggle = function e(r, i) {
              var s,
                a,
                n = (this || t).pv.length ? (this || t).pv.length : 1,
                l = createTypedArray("float32", n);
              r = 5;
              var v = Math.floor(time * r);
              for (s = 0, a = 0; s < v; ) {
                for (a = 0; a < n; a += 1) l[a] += -i + i * 2 * BMMath.random();
                s += 1;
              }
              var y = time * r,
                g = y - Math.floor(y),
                P = createTypedArray("float32", n);
              if (n > 1) {
                for (a = 0; a < n; a += 1)
                  P[a] =
                    (this || t).pv[a] +
                    l[a] +
                    (-i + i * 2 * BMMath.random()) * g;
                return P;
              }
              return (this || t).pv + l[0] + (-i + i * 2 * BMMath.random()) * g;
            }.bind(this || t);
          thisProperty.loopIn &&
            ((loopIn = thisProperty.loopIn.bind(thisProperty)),
            (loop_in = loopIn)),
            thisProperty.loopOut &&
              ((loopOut = thisProperty.loopOut.bind(thisProperty)),
              (loop_out = loopOut)),
            thisProperty.smooth &&
              (smooth = thisProperty.smooth.bind(thisProperty));
          function loopInDuration(e, r) {
            return loopIn(e, r, !0);
          }
          function loopOutDuration(e, r) {
            return loopOut(e, r, !0);
          }
          (this || t).getValueAtTime &&
            (valueAtTime = (this || t).getValueAtTime.bind(this || t)),
            (this || t).getVelocityAtTime &&
              (velocityAtTime = (this || t).getVelocityAtTime.bind(this || t));
          var comp = elem.comp.globalData.projectInterface.bind(
            elem.comp.globalData.projectInterface
          );
          function lookAt(e, r) {
            var i = [r[0] - e[0], r[1] - e[1], r[2] - e[2]],
              s =
                Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) /
                degToRads,
              a = -Math.atan2(i[1], i[2]) / degToRads;
            return [a, s, 0];
          }
          function easeOut(e, r, i, s, a) {
            return applyEase(easeOutBez, e, r, i, s, a);
          }
          function easeIn(e, r, i, s, a) {
            return applyEase(easeInBez, e, r, i, s, a);
          }
          function ease(e, r, i, s, a) {
            return applyEase(easeInOutBez, e, r, i, s, a);
          }
          function applyEase(e, r, i, s, a, n) {
            a === void 0 ? ((a = i), (n = s)) : (r = (r - i) / (s - i)),
              r > 1 ? (r = 1) : r < 0 && (r = 0);
            var l = e(r);
            if ($bm_isInstanceOfArray(a)) {
              var v,
                y = a.length,
                g = createTypedArray("float32", y);
              for (v = 0; v < y; v += 1) g[v] = (n[v] - a[v]) * l + a[v];
              return g;
            }
            return (n - a) * l + a;
          }
          function nearestKey(e) {
            var r,
              i = data.k.length,
              s,
              a;
            if (!data.k.length || typeof data.k[0] == "number")
              (s = 0), (a = 0);
            else if (
              ((s = -1), (e *= elem.comp.globalData.frameRate), e < data.k[0].t)
            )
              (s = 1), (a = data.k[0].t);
            else {
              for (r = 0; r < i - 1; r += 1)
                if (e === data.k[r].t) {
                  (s = r + 1), (a = data.k[r].t);
                  break;
                } else if (e > data.k[r].t && e < data.k[r + 1].t) {
                  e - data.k[r].t > data.k[r + 1].t - e
                    ? ((s = r + 2), (a = data.k[r + 1].t))
                    : ((s = r + 1), (a = data.k[r].t));
                  break;
                }
              s === -1 && ((s = r + 1), (a = data.k[r].t));
            }
            var n = {};
            return (
              (n.index = s), (n.time = a / elem.comp.globalData.frameRate), n
            );
          }
          function key(e) {
            var r, i, s;
            if (!data.k.length || typeof data.k[0] == "number")
              throw new Error("The property has no keyframe at index " + e);
            (e -= 1),
              (r = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: [],
              });
            var a = Object.prototype.hasOwnProperty.call(data.k[e], "s")
              ? data.k[e].s
              : data.k[e - 1].e;
            for (s = a.length, i = 0; i < s; i += 1)
              (r[i] = a[i]), (r.value[i] = a[i]);
            return r;
          }
          function framesToTime(e, r) {
            return r || (r = elem.comp.globalData.frameRate), e / r;
          }
          function timeToFrames(e, r) {
            return (
              !e && e !== 0 && (e = time),
              r || (r = elem.comp.globalData.frameRate),
              e * r
            );
          }
          function seedRandom(e) {
            BMMath.seedrandom(randSeed + e);
          }
          function sourceRectAtTime() {
            return elem.sourceRectAtTime();
          }
          function substring(e, r) {
            return typeof value == "string"
              ? r === void 0
                ? value.substring(e)
                : value.substring(e, r)
              : "";
          }
          function substr(e, r) {
            return typeof value == "string"
              ? r === void 0
                ? value.substr(e)
                : value.substr(e, r)
              : "";
          }
          function posterizeTime(e) {
            (time = e === 0 ? 0 : Math.floor(time * e) / e),
              (value = valueAtTime(time));
          }
          var time,
            velocity,
            value,
            text,
            textIndex,
            textTotal,
            selectorValue,
            index = elem.data.ind,
            hasParent = !!(elem.hierarchy && elem.hierarchy.length),
            parent,
            randSeed = Math.floor(Math.random() * 1e6),
            globalData = elem.globalData;
          function executeExpression(e) {
            return (
              (value = e),
              _needsRandom && seedRandom(randSeed),
              (this || t).frameExpressionId === elem.globalData.frameId &&
              (this || t).propType !== "textSelector"
                ? value
                : ((this || t).propType === "textSelector" &&
                    ((textIndex = (this || t).textIndex),
                    (textTotal = (this || t).textTotal),
                    (selectorValue = (this || t).selectorValue)),
                  thisLayer ||
                    ((text = elem.layerInterface.text),
                    (thisLayer = elem.layerInterface),
                    (thisComp = elem.comp.compInterface),
                    (toWorld = thisLayer.toWorld.bind(thisLayer)),
                    (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                    (fromComp = thisLayer.fromComp.bind(thisLayer)),
                    (toComp = thisLayer.toComp.bind(thisLayer)),
                    (mask = thisLayer.mask
                      ? thisLayer.mask.bind(thisLayer)
                      : null),
                    (fromCompToSurface = fromComp)),
                  transform ||
                    ((transform = elem.layerInterface("ADBE Transform Group")),
                    ($bm_transform = transform),
                    transform && (anchorPoint = transform.anchorPoint)),
                  elemType === 4 &&
                    !content &&
                    (content = thisLayer("ADBE Root Vectors Group")),
                  effect || (effect = thisLayer(4)),
                  (hasParent = !!(elem.hierarchy && elem.hierarchy.length)),
                  hasParent &&
                    !parent &&
                    (parent = elem.hierarchy[0].layerInterface),
                  (time =
                    (this || t).comp.renderedFrame /
                    (this || t).comp.globalData.frameRate),
                  needsVelocity && (velocity = velocityAtTime(time)),
                  expression_function(),
                  ((this || t).frameExpressionId = elem.globalData.frameId),
                  scoped_bm_rt.propType === "shape" &&
                    (scoped_bm_rt = scoped_bm_rt.v),
                  scoped_bm_rt)
            );
          }
          return executeExpression;
        }
        return (ob.initiateExpression = initiateExpression), ob;
      })(),
      expressionHelpers = (function () {
        function e(l, v, y) {
          v.x &&
            ((y.k = !0),
            (y.x = !0),
            (y.initiateExpression = ExpressionManager.initiateExpression),
            y.effectsSequence.push(y.initiateExpression(l, v, y).bind(y)));
        }
        function r(l) {
          return (
            (l *= (this || t).elem.globalData.frameRate),
            (l -= (this || t).offsetTime),
            l !== (this || t)._cachingAtTime.lastFrame &&
              (((this || t)._cachingAtTime.lastIndex =
                (this || t)._cachingAtTime.lastFrame < l
                  ? (this || t)._cachingAtTime.lastIndex
                  : 0),
              ((this || t)._cachingAtTime.value = this.interpolateValue(
                l,
                (this || t)._cachingAtTime
              )),
              ((this || t)._cachingAtTime.lastFrame = l)),
            (this || t)._cachingAtTime.value
          );
        }
        function i(l) {
          var v = -0.01,
            y = this.getValueAtTime(l),
            g = this.getValueAtTime(l + v),
            P = 0;
          if (y.length) {
            var S;
            for (S = 0; S < y.length; S += 1) P += Math.pow(g[S] - y[S], 2);
            P = Math.sqrt(P) * 100;
          } else P = 0;
          return P;
        }
        function s(l) {
          if ((this || t).vel !== void 0) return (this || t).vel;
          var v = -0.001,
            y = this.getValueAtTime(l),
            g = this.getValueAtTime(l + v),
            P;
          if (y.length) {
            P = createTypedArray("float32", y.length);
            var S;
            for (S = 0; S < y.length; S += 1) P[S] = (g[S] - y[S]) / v;
          } else P = (g - y) / v;
          return P;
        }
        function a() {
          return (this || t).pv;
        }
        function n(l) {
          (this || t).propertyGroup = l;
        }
        return {
          searchExpressions: e,
          getSpeedAtTime: i,
          getVelocityAtTime: s,
          getValueAtTime: r,
          getStaticValueAtTime: a,
          setGroupProperty: n,
        };
      })();
    (function e() {
      function r(d, C, f) {
        if (!(this || t).k || !(this || t).keyframes) return (this || t).pv;
        d = d ? d.toLowerCase() : "";
        var p = (this || t).comp.renderedFrame,
          c = (this || t).keyframes,
          o = c[c.length - 1].t;
        if (p <= o) return (this || t).pv;
        var h, m;
        f
          ? (C
              ? (h = Math.abs(
                  o - (this || t).elem.comp.globalData.frameRate * C
                ))
              : (h = Math.max(0, o - (this || t).elem.data.ip)),
            (m = o - h))
          : ((!C || C > c.length - 1) && (C = c.length - 1),
            (m = c[c.length - 1 - C].t),
            (h = o - m));
        var b, A, x;
        if (d === "pingpong") {
          var _ = Math.floor((p - m) / h);
          if (_ % 2 !== 0)
            return this.getValueAtTime(
              (h - ((p - m) % h) + m) / (this || t).comp.globalData.frameRate,
              0
            );
        } else if (d === "offset") {
          var k = this.getValueAtTime(
              m / (this || t).comp.globalData.frameRate,
              0
            ),
            w = this.getValueAtTime(
              o / (this || t).comp.globalData.frameRate,
              0
            ),
            R = this.getValueAtTime(
              (((p - m) % h) + m) / (this || t).comp.globalData.frameRate,
              0
            ),
            V = Math.floor((p - m) / h);
          if ((this || t).pv.length) {
            for (x = new Array(k.length), A = x.length, b = 0; b < A; b += 1)
              x[b] = (w[b] - k[b]) * V + R[b];
            return x;
          }
          return (w - k) * V + R;
        } else if (d === "continue") {
          var B = this.getValueAtTime(
              o / (this || t).comp.globalData.frameRate,
              0
            ),
            L = this.getValueAtTime(
              (o - 0.001) / (this || t).comp.globalData.frameRate,
              0
            );
          if ((this || t).pv.length) {
            for (x = new Array(B.length), A = x.length, b = 0; b < A; b += 1)
              x[b] =
                B[b] +
                ((B[b] - L[b]) *
                  ((p - o) / (this || t).comp.globalData.frameRate)) /
                  5e-4;
            return x;
          }
          return B + (B - L) * ((p - o) / 0.001);
        }
        return this.getValueAtTime(
          (((p - m) % h) + m) / (this || t).comp.globalData.frameRate,
          0
        );
      }
      function i(d, C, f) {
        if (!(this || t).k) return (this || t).pv;
        d = d ? d.toLowerCase() : "";
        var p = (this || t).comp.renderedFrame,
          c = (this || t).keyframes,
          o = c[0].t;
        if (p >= o) return (this || t).pv;
        var h, m;
        f
          ? (C
              ? (h = Math.abs((this || t).elem.comp.globalData.frameRate * C))
              : (h = Math.max(0, (this || t).elem.data.op - o)),
            (m = o + h))
          : ((!C || C > c.length - 1) && (C = c.length - 1),
            (m = c[C].t),
            (h = m - o));
        var b, A, x;
        if (d === "pingpong") {
          var _ = Math.floor((o - p) / h);
          if (_ % 2 === 0)
            return this.getValueAtTime(
              (((o - p) % h) + o) / (this || t).comp.globalData.frameRate,
              0
            );
        } else if (d === "offset") {
          var k = this.getValueAtTime(
              o / (this || t).comp.globalData.frameRate,
              0
            ),
            w = this.getValueAtTime(
              m / (this || t).comp.globalData.frameRate,
              0
            ),
            R = this.getValueAtTime(
              (h - ((o - p) % h) + o) / (this || t).comp.globalData.frameRate,
              0
            ),
            V = Math.floor((o - p) / h) + 1;
          if ((this || t).pv.length) {
            for (x = new Array(k.length), A = x.length, b = 0; b < A; b += 1)
              x[b] = R[b] - (w[b] - k[b]) * V;
            return x;
          }
          return R - (w - k) * V;
        } else if (d === "continue") {
          var B = this.getValueAtTime(
              o / (this || t).comp.globalData.frameRate,
              0
            ),
            L = this.getValueAtTime(
              (o + 0.001) / (this || t).comp.globalData.frameRate,
              0
            );
          if ((this || t).pv.length) {
            for (x = new Array(B.length), A = x.length, b = 0; b < A; b += 1)
              x[b] = B[b] + ((B[b] - L[b]) * (o - p)) / 0.001;
            return x;
          }
          return B + ((B - L) * (o - p)) / 0.001;
        }
        return this.getValueAtTime(
          (h - (((o - p) % h) + o)) / (this || t).comp.globalData.frameRate,
          0
        );
      }
      function s(d, C) {
        if (!(this || t).k) return (this || t).pv;
        if (((d = (d || 0.4) * 0.5), (C = Math.floor(C || 5)), C <= 1))
          return (this || t).pv;
        var f =
            (this || t).comp.renderedFrame /
            (this || t).comp.globalData.frameRate,
          p = f - d,
          c = f + d,
          o = C > 1 ? (c - p) / (C - 1) : 1,
          h = 0,
          m = 0,
          b;
        (this || t).pv.length
          ? (b = createTypedArray("float32", (this || t).pv.length))
          : (b = 0);
        for (var A; h < C; ) {
          if (((A = this.getValueAtTime(p + h * o)), (this || t).pv.length))
            for (m = 0; m < (this || t).pv.length; m += 1) b[m] += A[m];
          else b += A;
          h += 1;
        }
        if ((this || t).pv.length)
          for (m = 0; m < (this || t).pv.length; m += 1) b[m] /= C;
        else b /= C;
        return b;
      }
      function a(d) {
        (this || t)._transformCachingAtTime ||
          ((this || t)._transformCachingAtTime = { v: new Matrix() });
        var C = (this || t)._transformCachingAtTime.v;
        if (
          (C.cloneFromProps((this || t).pre.props),
          (this || t).appliedTransformations < 1)
        ) {
          var f = (this || t).a.getValueAtTime(d);
          C.translate(
            -f[0] * (this || t).a.mult,
            -f[1] * (this || t).a.mult,
            f[2] * (this || t).a.mult
          );
        }
        if ((this || t).appliedTransformations < 2) {
          var p = (this || t).s.getValueAtTime(d);
          C.scale(
            p[0] * (this || t).s.mult,
            p[1] * (this || t).s.mult,
            p[2] * (this || t).s.mult
          );
        }
        if ((this || t).sk && (this || t).appliedTransformations < 3) {
          var c = (this || t).sk.getValueAtTime(d),
            o = (this || t).sa.getValueAtTime(d);
          C.skewFromAxis(-c * (this || t).sk.mult, o * (this || t).sa.mult);
        }
        if ((this || t).r && (this || t).appliedTransformations < 4) {
          var h = (this || t).r.getValueAtTime(d);
          C.rotate(-h * (this || t).r.mult);
        } else if (!(this || t).r && (this || t).appliedTransformations < 4) {
          var m = (this || t).rz.getValueAtTime(d),
            b = (this || t).ry.getValueAtTime(d),
            A = (this || t).rx.getValueAtTime(d),
            x = (this || t).or.getValueAtTime(d);
          C.rotateZ(-m * (this || t).rz.mult)
            .rotateY(b * (this || t).ry.mult)
            .rotateX(A * (this || t).rx.mult)
            .rotateZ(-x[2] * (this || t).or.mult)
            .rotateY(x[1] * (this || t).or.mult)
            .rotateX(x[0] * (this || t).or.mult);
        }
        if ((this || t).data.p && (this || t).data.p.s) {
          var _ = (this || t).px.getValueAtTime(d),
            k = (this || t).py.getValueAtTime(d);
          if ((this || t).data.p.z) {
            var w = (this || t).pz.getValueAtTime(d);
            C.translate(
              _ * (this || t).px.mult,
              k * (this || t).py.mult,
              -w * (this || t).pz.mult
            );
          } else
            C.translate(_ * (this || t).px.mult, k * (this || t).py.mult, 0);
        } else {
          var R = (this || t).p.getValueAtTime(d);
          C.translate(
            R[0] * (this || t).p.mult,
            R[1] * (this || t).p.mult,
            -R[2] * (this || t).p.mult
          );
        }
        return C;
      }
      function n() {
        return (this || t).v.clone(new Matrix());
      }
      var l = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function (d, C, f) {
        var p = l(d, C, f);
        return (
          p.dynamicProperties.length
            ? (p.getValueAtTime = a.bind(p))
            : (p.getValueAtTime = n.bind(p)),
          (p.setGroupProperty = expressionHelpers.setGroupProperty),
          p
        );
      };
      var v = PropertyFactory.getProp;
      PropertyFactory.getProp = function (d, C, f, p, c) {
        var o = v(d, C, f, p, c);
        o.kf
          ? (o.getValueAtTime = expressionHelpers.getValueAtTime.bind(o))
          : (o.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(o)),
          (o.setGroupProperty = expressionHelpers.setGroupProperty),
          (o.loopOut = r),
          (o.loopIn = i),
          (o.smooth = s),
          (o.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(o)),
          (o.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(o)),
          (o.numKeys = C.a === 1 ? C.k.length : 0),
          (o.propertyIndex = C.ix);
        var h = 0;
        return (
          f !== 0 &&
            (h = createTypedArray(
              "float32",
              C.a === 1 ? C.k[0].s.length : C.k.length
            )),
          (o._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: h,
          }),
          expressionHelpers.searchExpressions(d, C, o),
          o.k && c.addDynamicProperty(o),
          o
        );
      };
      function y(d) {
        return (
          (this || t)._cachingAtTime ||
            ((this || t)._cachingAtTime = {
              shapeValue: shapePool.clone((this || t).pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame,
            }),
          (d *= (this || t).elem.globalData.frameRate),
          (d -= (this || t).offsetTime),
          d !== (this || t)._cachingAtTime.lastTime &&
            (((this || t)._cachingAtTime.lastIndex =
              (this || t)._cachingAtTime.lastTime < d
                ? (this || t)._caching.lastIndex
                : 0),
            ((this || t)._cachingAtTime.lastTime = d),
            this.interpolateShape(
              d,
              (this || t)._cachingAtTime.shapeValue,
              (this || t)._cachingAtTime
            )),
          (this || t)._cachingAtTime.shapeValue
        );
      }
      var g = ShapePropertyFactory.getConstructorFunction(),
        P = ShapePropertyFactory.getKeyframedConstructorFunction();
      function S() {}
      (S.prototype = {
        vertices: function (d, C) {
          (this || t).k && this.getValue();
          var f = (this || t).v;
          C !== void 0 && (f = this.getValueAtTime(C, 0));
          var p,
            c = f._length,
            o = f[d],
            h = f.v,
            m = createSizedArray(c);
          for (p = 0; p < c; p += 1)
            d === "i" || d === "o"
              ? (m[p] = [o[p][0] - h[p][0], o[p][1] - h[p][1]])
              : (m[p] = [o[p][0], o[p][1]]);
          return m;
        },
        points: function (d) {
          return this.vertices("v", d);
        },
        inTangents: function (d) {
          return this.vertices("i", d);
        },
        outTangents: function (d) {
          return this.vertices("o", d);
        },
        isClosed: function () {
          return (this || t).v.c;
        },
        pointOnPath: function (d, C) {
          var f = (this || t).v;
          C !== void 0 && (f = this.getValueAtTime(C, 0)),
            (this || t)._segmentsLength ||
              ((this || t)._segmentsLength = bez.getSegmentsLength(f));
          for (
            var p = (this || t)._segmentsLength,
              c = p.lengths,
              o = p.totalLength * d,
              h = 0,
              m = c.length,
              b = 0,
              A;
            h < m;

          ) {
            if (b + c[h].addedLength > o) {
              var x = h,
                _ = f.c && h === m - 1 ? 0 : h + 1,
                k = (o - b) / c[h].addedLength;
              A = bez.getPointInSegment(
                f.v[x],
                f.v[_],
                f.o[x],
                f.i[_],
                k,
                c[h]
              );
              break;
            } else b += c[h].addedLength;
            h += 1;
          }
          return (
            A ||
              (A = f.c
                ? [f.v[0][0], f.v[0][1]]
                : [f.v[f._length - 1][0], f.v[f._length - 1][1]]),
            A
          );
        },
        vectorOnPath: function (d, C, f) {
          d == 1 ? (d = (this || t).v.c) : d == 0 && (d = 0.999);
          var p = this.pointOnPath(d, C),
            c = this.pointOnPath(d + 0.001, C),
            o = c[0] - p[0],
            h = c[1] - p[1],
            m = Math.sqrt(Math.pow(o, 2) + Math.pow(h, 2));
          if (m === 0) return [0, 0];
          var b = f === "tangent" ? [o / m, h / m] : [-h / m, o / m];
          return b;
        },
        tangentOnPath: function (d, C) {
          return this.vectorOnPath(d, C, "tangent");
        },
        normalOnPath: function (d, C) {
          return this.vectorOnPath(d, C, "normal");
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime,
      }),
        extendPrototype([S], g),
        extendPrototype([S], P),
        (P.prototype.getValueAtTime = y),
        (P.prototype.initiateExpression = ExpressionManager.initiateExpression);
      var u = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function (d, C, f, p, c) {
        var o = u(d, C, f, p, c);
        return (
          (o.propertyIndex = C.ix),
          (o.lock = !1),
          f === 3
            ? expressionHelpers.searchExpressions(d, C.pt, o)
            : f === 4 && expressionHelpers.searchExpressions(d, C.ks, o),
          o.k && d.addDynamicProperty(o),
          o
        );
      };
    })(),
      (function e() {
        function r() {
          return (this || t).data.d.x
            ? (((this || t).calculateExpression =
                ExpressionManager.initiateExpression.bind(this || t)(
                  (this || t).elem,
                  (this || t).data.d,
                  this || t
                )),
              this.addEffect((this || t).getExpressionValue.bind(this || t)),
              !0)
            : null;
        }
        (TextProperty.prototype.getExpressionValue = function (i, s) {
          var a = this.calculateExpression(s);
          if (i.t !== a) {
            var n = {};
            return (
              this.copyData(n, i), (n.t = a.toString()), (n.__complete = !1), n
            );
          }
          return i;
        }),
          (TextProperty.prototype.searchProperty = function () {
            var i = this.searchKeyframes(),
              s = this.searchExpressions();
            return ((this || t).kf = i || s), (this || t).kf;
          }),
          (TextProperty.prototype.searchExpressions = r);
      })();
    var ShapePathInterface = (function () {
        return function (r, i, s) {
          var a = i.sh;
          function n(v) {
            return v === "Shape" ||
              v === "shape" ||
              v === "Path" ||
              v === "path" ||
              v === "ADBE Vector Shape" ||
              v === 2
              ? n.path
              : null;
          }
          var l = propertyGroupFactory(n, s);
          return (
            a.setGroupProperty(PropertyInterface("Path", l)),
            Object.defineProperties(n, {
              path: {
                get: function () {
                  return a.k && a.getValue(), a;
                },
              },
              shape: {
                get: function () {
                  return a.k && a.getValue(), a;
                },
              },
              _name: { value: r.nm },
              ix: { value: r.ix },
              propertyIndex: { value: r.ix },
              mn: { value: r.mn },
              propertyGroup: { value: s },
            }),
            n
          );
        };
      })(),
      propertyGroupFactory = (function () {
        return function (e, r) {
          return function (i) {
            return (i = i === void 0 ? 1 : i), i <= 0 ? e : r(i - 1);
          };
        };
      })(),
      PropertyInterface = (function () {
        return function (e, r) {
          var i = { _name: e };
          function s(a) {
            return (a = a === void 0 ? 1 : a), a <= 0 ? i : r(a - 1);
          }
          return s;
        };
      })(),
      ShapeExpressionInterface = (function () {
        function e(u, d, C) {
          var f = [],
            p,
            c = u ? u.length : 0;
          for (p = 0; p < c; p += 1)
            u[p].ty === "gr"
              ? f.push(i(u[p], d[p], C))
              : u[p].ty === "fl"
              ? f.push(s(u[p], d[p], C))
              : u[p].ty === "st"
              ? f.push(a(u[p], d[p], C))
              : u[p].ty === "tm"
              ? f.push(n(u[p], d[p], C))
              : u[p].ty === "tr" ||
                (u[p].ty === "el"
                  ? f.push(v(u[p], d[p], C))
                  : u[p].ty === "sr"
                  ? f.push(y(u[p], d[p], C))
                  : u[p].ty === "sh"
                  ? f.push(ShapePathInterface(u[p], d[p], C))
                  : u[p].ty === "rc"
                  ? f.push(g(u[p], d[p], C))
                  : u[p].ty === "rd"
                  ? f.push(P(u[p], d[p], C))
                  : u[p].ty === "rp" && f.push(S(u[p], d[p], C)));
          return f;
        }
        function r(u, d, C) {
          var f,
            p = function (h) {
              for (var m = 0, b = f.length; m < b; ) {
                if (
                  f[m]._name === h ||
                  f[m].mn === h ||
                  f[m].propertyIndex === h ||
                  f[m].ix === h ||
                  f[m].ind === h
                )
                  return f[m];
                m += 1;
              }
              return typeof h == "number" ? f[h - 1] : null;
            };
          (p.propertyGroup = propertyGroupFactory(p, C)),
            (f = e(u.it, d.it, p.propertyGroup)),
            (p.numProperties = f.length);
          var c = l(
            u.it[u.it.length - 1],
            d.it[d.it.length - 1],
            p.propertyGroup
          );
          return (
            (p.transform = c), (p.propertyIndex = u.cix), (p._name = u.nm), p
          );
        }
        function i(u, d, C) {
          var f = function (h) {
            switch (h) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return f.content;
              default:
                return f.transform;
            }
          };
          f.propertyGroup = propertyGroupFactory(f, C);
          var p = r(u, d, f.propertyGroup),
            c = l(
              u.it[u.it.length - 1],
              d.it[d.it.length - 1],
              f.propertyGroup
            );
          return (
            (f.content = p),
            (f.transform = c),
            Object.defineProperty(f, "_name", {
              get: function () {
                return u.nm;
              },
            }),
            (f.numProperties = u.np),
            (f.propertyIndex = u.ix),
            (f.nm = u.nm),
            (f.mn = u.mn),
            f
          );
        }
        function s(u, d, C) {
          function f(p) {
            return p === "Color" || p === "color"
              ? f.color
              : p === "Opacity" || p === "opacity"
              ? f.opacity
              : null;
          }
          return (
            Object.defineProperties(f, {
              color: { get: ExpressionPropertyInterface(d.c) },
              opacity: { get: ExpressionPropertyInterface(d.o) },
              _name: { value: u.nm },
              mn: { value: u.mn },
            }),
            d.c.setGroupProperty(PropertyInterface("Color", C)),
            d.o.setGroupProperty(PropertyInterface("Opacity", C)),
            f
          );
        }
        function a(u, d, C) {
          var f = propertyGroupFactory(b, C),
            p = propertyGroupFactory(m, f);
          function c(A) {
            Object.defineProperty(m, u.d[A].nm, {
              get: ExpressionPropertyInterface(d.d.dataProps[A].p),
            });
          }
          var o,
            h = u.d ? u.d.length : 0,
            m = {};
          for (o = 0; o < h; o += 1)
            c(o), d.d.dataProps[o].p.setGroupProperty(p);
          function b(A) {
            return A === "Color" || A === "color"
              ? b.color
              : A === "Opacity" || A === "opacity"
              ? b.opacity
              : A === "Stroke Width" || A === "stroke width"
              ? b.strokeWidth
              : null;
          }
          return (
            Object.defineProperties(b, {
              color: { get: ExpressionPropertyInterface(d.c) },
              opacity: { get: ExpressionPropertyInterface(d.o) },
              strokeWidth: { get: ExpressionPropertyInterface(d.w) },
              dash: {
                get: function () {
                  return m;
                },
              },
              _name: { value: u.nm },
              mn: { value: u.mn },
            }),
            d.c.setGroupProperty(PropertyInterface("Color", f)),
            d.o.setGroupProperty(PropertyInterface("Opacity", f)),
            d.w.setGroupProperty(PropertyInterface("Stroke Width", f)),
            b
          );
        }
        function n(u, d, C) {
          function f(c) {
            return c === u.e.ix || c === "End" || c === "end"
              ? f.end
              : c === u.s.ix
              ? f.start
              : c === u.o.ix
              ? f.offset
              : null;
          }
          var p = propertyGroupFactory(f, C);
          return (
            (f.propertyIndex = u.ix),
            d.s.setGroupProperty(PropertyInterface("Start", p)),
            d.e.setGroupProperty(PropertyInterface("End", p)),
            d.o.setGroupProperty(PropertyInterface("Offset", p)),
            (f.propertyIndex = u.ix),
            (f.propertyGroup = C),
            Object.defineProperties(f, {
              start: { get: ExpressionPropertyInterface(d.s) },
              end: { get: ExpressionPropertyInterface(d.e) },
              offset: { get: ExpressionPropertyInterface(d.o) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        function l(u, d, C) {
          function f(c) {
            return u.a.ix === c || c === "Anchor Point"
              ? f.anchorPoint
              : u.o.ix === c || c === "Opacity"
              ? f.opacity
              : u.p.ix === c || c === "Position"
              ? f.position
              : u.r.ix === c || c === "Rotation" || c === "ADBE Vector Rotation"
              ? f.rotation
              : u.s.ix === c || c === "Scale"
              ? f.scale
              : (u.sk && u.sk.ix === c) || c === "Skew"
              ? f.skew
              : (u.sa && u.sa.ix === c) || c === "Skew Axis"
              ? f.skewAxis
              : null;
          }
          var p = propertyGroupFactory(f, C);
          return (
            d.transform.mProps.o.setGroupProperty(
              PropertyInterface("Opacity", p)
            ),
            d.transform.mProps.p.setGroupProperty(
              PropertyInterface("Position", p)
            ),
            d.transform.mProps.a.setGroupProperty(
              PropertyInterface("Anchor Point", p)
            ),
            d.transform.mProps.s.setGroupProperty(
              PropertyInterface("Scale", p)
            ),
            d.transform.mProps.r.setGroupProperty(
              PropertyInterface("Rotation", p)
            ),
            d.transform.mProps.sk &&
              (d.transform.mProps.sk.setGroupProperty(
                PropertyInterface("Skew", p)
              ),
              d.transform.mProps.sa.setGroupProperty(
                PropertyInterface("Skew Angle", p)
              )),
            d.transform.op.setGroupProperty(PropertyInterface("Opacity", p)),
            Object.defineProperties(f, {
              opacity: {
                get: ExpressionPropertyInterface(d.transform.mProps.o),
              },
              position: {
                get: ExpressionPropertyInterface(d.transform.mProps.p),
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(d.transform.mProps.a),
              },
              scale: { get: ExpressionPropertyInterface(d.transform.mProps.s) },
              rotation: {
                get: ExpressionPropertyInterface(d.transform.mProps.r),
              },
              skew: { get: ExpressionPropertyInterface(d.transform.mProps.sk) },
              skewAxis: {
                get: ExpressionPropertyInterface(d.transform.mProps.sa),
              },
              _name: { value: u.nm },
            }),
            (f.ty = "tr"),
            (f.mn = u.mn),
            (f.propertyGroup = C),
            f
          );
        }
        function v(u, d, C) {
          function f(o) {
            return u.p.ix === o ? f.position : u.s.ix === o ? f.size : null;
          }
          var p = propertyGroupFactory(f, C);
          f.propertyIndex = u.ix;
          var c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
          return (
            c.s.setGroupProperty(PropertyInterface("Size", p)),
            c.p.setGroupProperty(PropertyInterface("Position", p)),
            Object.defineProperties(f, {
              size: { get: ExpressionPropertyInterface(c.s) },
              position: { get: ExpressionPropertyInterface(c.p) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        function y(u, d, C) {
          function f(o) {
            return u.p.ix === o
              ? f.position
              : u.r.ix === o
              ? f.rotation
              : u.pt.ix === o
              ? f.points
              : u.or.ix === o || o === "ADBE Vector Star Outer Radius"
              ? f.outerRadius
              : u.os.ix === o
              ? f.outerRoundness
              : u.ir && (u.ir.ix === o || o === "ADBE Vector Star Inner Radius")
              ? f.innerRadius
              : u.is && u.is.ix === o
              ? f.innerRoundness
              : null;
          }
          var p = propertyGroupFactory(f, C),
            c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
          return (
            (f.propertyIndex = u.ix),
            c.or.setGroupProperty(PropertyInterface("Outer Radius", p)),
            c.os.setGroupProperty(PropertyInterface("Outer Roundness", p)),
            c.pt.setGroupProperty(PropertyInterface("Points", p)),
            c.p.setGroupProperty(PropertyInterface("Position", p)),
            c.r.setGroupProperty(PropertyInterface("Rotation", p)),
            u.ir &&
              (c.ir.setGroupProperty(PropertyInterface("Inner Radius", p)),
              c.is.setGroupProperty(PropertyInterface("Inner Roundness", p))),
            Object.defineProperties(f, {
              position: { get: ExpressionPropertyInterface(c.p) },
              rotation: { get: ExpressionPropertyInterface(c.r) },
              points: { get: ExpressionPropertyInterface(c.pt) },
              outerRadius: { get: ExpressionPropertyInterface(c.or) },
              outerRoundness: { get: ExpressionPropertyInterface(c.os) },
              innerRadius: { get: ExpressionPropertyInterface(c.ir) },
              innerRoundness: { get: ExpressionPropertyInterface(c.is) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        function g(u, d, C) {
          function f(o) {
            return u.p.ix === o
              ? f.position
              : u.r.ix === o
              ? f.roundness
              : u.s.ix === o || o === "Size" || o === "ADBE Vector Rect Size"
              ? f.size
              : null;
          }
          var p = propertyGroupFactory(f, C),
            c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
          return (
            (f.propertyIndex = u.ix),
            c.p.setGroupProperty(PropertyInterface("Position", p)),
            c.s.setGroupProperty(PropertyInterface("Size", p)),
            c.r.setGroupProperty(PropertyInterface("Rotation", p)),
            Object.defineProperties(f, {
              position: { get: ExpressionPropertyInterface(c.p) },
              roundness: { get: ExpressionPropertyInterface(c.r) },
              size: { get: ExpressionPropertyInterface(c.s) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        function P(u, d, C) {
          function f(o) {
            return u.r.ix === o || o === "Round Corners 1" ? f.radius : null;
          }
          var p = propertyGroupFactory(f, C),
            c = d;
          return (
            (f.propertyIndex = u.ix),
            c.rd.setGroupProperty(PropertyInterface("Radius", p)),
            Object.defineProperties(f, {
              radius: { get: ExpressionPropertyInterface(c.rd) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        function S(u, d, C) {
          function f(o) {
            return u.c.ix === o || o === "Copies"
              ? f.copies
              : u.o.ix === o || o === "Offset"
              ? f.offset
              : null;
          }
          var p = propertyGroupFactory(f, C),
            c = d;
          return (
            (f.propertyIndex = u.ix),
            c.c.setGroupProperty(PropertyInterface("Copies", p)),
            c.o.setGroupProperty(PropertyInterface("Offset", p)),
            Object.defineProperties(f, {
              copies: { get: ExpressionPropertyInterface(c.c) },
              offset: { get: ExpressionPropertyInterface(c.o) },
              _name: { value: u.nm },
            }),
            (f.mn = u.mn),
            f
          );
        }
        return function (u, d, C) {
          var f;
          function p(o) {
            if (typeof o == "number")
              return (o = o === void 0 ? 1 : o), o === 0 ? C : f[o - 1];
            for (var h = 0, m = f.length; h < m; ) {
              if (f[h]._name === o) return f[h];
              h += 1;
            }
            return null;
          }
          function c() {
            return C;
          }
          return (
            (p.propertyGroup = propertyGroupFactory(p, c)),
            (f = e(u, d, p.propertyGroup)),
            (p.numProperties = f.length),
            (p._name = "Contents"),
            p
          );
        };
      })(),
      TextExpressionInterface = (function () {
        return function (e) {
          var r, i;
          function s(a) {
            switch (a) {
              case "ADBE Text Document":
                return s.sourceText;
              default:
                return null;
            }
          }
          return (
            Object.defineProperty(s, "sourceText", {
              get: function () {
                e.textProperty.getValue();
                var a = e.textProperty.currentData.t;
                return (
                  a !== r &&
                    ((e.textProperty.currentData.t = r),
                    (i = new String(a)),
                    (i.value = a || new String(a))),
                  i
                );
              },
            }),
            s
          );
        };
      })(),
      LayerExpressionInterface = (function () {
        function e(g) {
          var P = new Matrix();
          if (g !== void 0) {
            var S = (this || t)._elem.finalTransform.mProp.getValueAtTime(g);
            S.clone(P);
          } else {
            var u = (this || t)._elem.finalTransform.mProp;
            u.applyToMatrix(P);
          }
          return P;
        }
        function r(g, P) {
          var S = this.getMatrix(P);
          return (
            (S.props[12] = 0),
            (S.props[13] = 0),
            (S.props[14] = 0),
            this.applyPoint(S, g)
          );
        }
        function i(g, P) {
          var S = this.getMatrix(P);
          return this.applyPoint(S, g);
        }
        function s(g, P) {
          var S = this.getMatrix(P);
          return (
            (S.props[12] = 0),
            (S.props[13] = 0),
            (S.props[14] = 0),
            this.invertPoint(S, g)
          );
        }
        function a(g, P) {
          var S = this.getMatrix(P);
          return this.invertPoint(S, g);
        }
        function n(g, P) {
          if (
            (this || t)._elem.hierarchy &&
            (this || t)._elem.hierarchy.length
          ) {
            var S,
              u = (this || t)._elem.hierarchy.length;
            for (S = 0; S < u; S += 1)
              (this || t)._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(
                g
              );
          }
          return g.applyToPointArray(P[0], P[1], P[2] || 0);
        }
        function l(g, P) {
          if (
            (this || t)._elem.hierarchy &&
            (this || t)._elem.hierarchy.length
          ) {
            var S,
              u = (this || t)._elem.hierarchy.length;
            for (S = 0; S < u; S += 1)
              (this || t)._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(
                g
              );
          }
          return g.inversePoint(P);
        }
        function v(g) {
          var P = new Matrix();
          if (
            (P.reset(),
            (this || t)._elem.finalTransform.mProp.applyToMatrix(P),
            (this || t)._elem.hierarchy && (this || t)._elem.hierarchy.length)
          ) {
            var S,
              u = (this || t)._elem.hierarchy.length;
            for (S = 0; S < u; S += 1)
              (this || t)._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(
                P
              );
            return P.inversePoint(g);
          }
          return P.inversePoint(g);
        }
        function y() {
          return [1, 1, 1, 1];
        }
        return function (g) {
          var P;
          function S(f) {
            d.mask = new MaskManagerInterface(f, g);
          }
          function u(f) {
            d.effect = f;
          }
          function d(f) {
            switch (f) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return d.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return P;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return d.effect;
              case "ADBE Text Properties":
                return d.textInterface;
              default:
                return null;
            }
          }
          (d.getMatrix = e),
            (d.invertPoint = l),
            (d.applyPoint = n),
            (d.toWorld = i),
            (d.toWorldVec = r),
            (d.fromWorld = a),
            (d.fromWorldVec = s),
            (d.toComp = i),
            (d.fromComp = v),
            (d.sampleImage = y),
            (d.sourceRectAtTime = g.sourceRectAtTime.bind(g)),
            (d._elem = g),
            (P = TransformExpressionInterface(g.finalTransform.mProp));
          var C = getDescriptor(P, "anchorPoint");
          return (
            Object.defineProperties(d, {
              hasParent: {
                get: function () {
                  return g.hierarchy.length;
                },
              },
              parent: {
                get: function () {
                  return g.hierarchy[0].layerInterface;
                },
              },
              rotation: getDescriptor(P, "rotation"),
              scale: getDescriptor(P, "scale"),
              position: getDescriptor(P, "position"),
              opacity: getDescriptor(P, "opacity"),
              anchorPoint: C,
              anchor_point: C,
              transform: {
                get: function () {
                  return P;
                },
              },
              active: {
                get: function () {
                  return g.isInRange;
                },
              },
            }),
            (d.startTime = g.data.st),
            (d.index = g.data.ind),
            (d.source = g.data.refId),
            (d.height = g.data.ty === 0 ? g.data.h : 100),
            (d.width = g.data.ty === 0 ? g.data.w : 100),
            (d.inPoint = g.data.ip / g.comp.globalData.frameRate),
            (d.outPoint = g.data.op / g.comp.globalData.frameRate),
            (d._name = g.data.nm),
            (d.registerMaskInterface = S),
            (d.registerEffectsInterface = u),
            d
          );
        };
      })(),
      FootageInterface = (function () {
        var e = function (i) {
            var s = "",
              a = i.getFootageData();
            function n() {
              return (s = ""), (a = i.getFootageData()), l;
            }
            function l(v) {
              if (a[v])
                return (s = v), (a = a[v]), typeof a == "object" ? l : a;
              var y = v.indexOf(s);
              if (y !== -1) {
                var g = parseInt(v.substr(y + s.length), 10);
                return (a = a[g]), typeof a == "object" ? l : a;
              }
              return "";
            }
            return n;
          },
          r = function (i) {
            function s(a) {
              return a === "Outline" ? s.outlineInterface() : null;
            }
            return (s._name = "Outline"), (s.outlineInterface = e(i)), s;
          };
        return function (i) {
          function s(a) {
            return a === "Data" ? s.dataInterface : null;
          }
          return (s._name = "Data"), (s.dataInterface = r(i)), s;
        };
      })(),
      CompExpressionInterface = (function () {
        return function (e) {
          function r(i) {
            for (var s = 0, a = e.layers.length; s < a; ) {
              if (e.layers[s].nm === i || e.layers[s].ind === i)
                return e.elements[s].layerInterface;
              s += 1;
            }
            return null;
          }
          return (
            Object.defineProperty(r, "_name", { value: e.data.nm }),
            (r.layer = r),
            (r.pixelAspect = 1),
            (r.height = e.data.h || e.globalData.compSize.h),
            (r.width = e.data.w || e.globalData.compSize.w),
            (r.pixelAspect = 1),
            (r.frameDuration = 1 / e.globalData.frameRate),
            (r.displayStartTime = 0),
            (r.numLayers = e.layers.length),
            r
          );
        };
      })(),
      TransformExpressionInterface = (function () {
        return function (e) {
          function r(l) {
            switch (l) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return r.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return r.rotation;
              case "ADBE Rotate X":
                return r.xRotation;
              case "ADBE Rotate Y":
                return r.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return r.position;
              case "ADBE Position_0":
                return r.xPosition;
              case "ADBE Position_1":
                return r.yPosition;
              case "ADBE Position_2":
                return r.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return r.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return r.opacity;
              default:
                return null;
            }
          }
          Object.defineProperty(r, "rotation", {
            get: ExpressionPropertyInterface(e.r || e.rz),
          }),
            Object.defineProperty(r, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r),
            }),
            Object.defineProperty(r, "xRotation", {
              get: ExpressionPropertyInterface(e.rx),
            }),
            Object.defineProperty(r, "yRotation", {
              get: ExpressionPropertyInterface(e.ry),
            }),
            Object.defineProperty(r, "scale", {
              get: ExpressionPropertyInterface(e.s),
            });
          var i, s, a, n;
          return (
            e.p
              ? (n = ExpressionPropertyInterface(e.p))
              : ((i = ExpressionPropertyInterface(e.px)),
                (s = ExpressionPropertyInterface(e.py)),
                e.pz && (a = ExpressionPropertyInterface(e.pz))),
            Object.defineProperty(r, "position", {
              get: function () {
                return e.p ? n() : [i(), s(), a ? a() : 0];
              },
            }),
            Object.defineProperty(r, "xPosition", {
              get: ExpressionPropertyInterface(e.px),
            }),
            Object.defineProperty(r, "yPosition", {
              get: ExpressionPropertyInterface(e.py),
            }),
            Object.defineProperty(r, "zPosition", {
              get: ExpressionPropertyInterface(e.pz),
            }),
            Object.defineProperty(r, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a),
            }),
            Object.defineProperty(r, "opacity", {
              get: ExpressionPropertyInterface(e.o),
            }),
            Object.defineProperty(r, "skew", {
              get: ExpressionPropertyInterface(e.sk),
            }),
            Object.defineProperty(r, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa),
            }),
            Object.defineProperty(r, "orientation", {
              get: ExpressionPropertyInterface(e.or),
            }),
            r
          );
        };
      })();
    ProjectInterface = (function () {
      function e(r) {
        (this || t).compositions.push(r);
      }
      return function () {
        function r(i) {
          for (var s = 0, a = (this || t).compositions.length; s < a; ) {
            if (
              (this || t).compositions[s].data &&
              (this || t).compositions[s].data.nm === i
            )
              return (
                (this || t).compositions[s].prepareFrame &&
                  (this || t).compositions[s].data.xt &&
                  (this || t).compositions[s].prepareFrame(
                    (this || t).currentFrame
                  ),
                (this || t).compositions[s].compInterface
              );
            s += 1;
          }
          return null;
        }
        return (
          (r.compositions = []),
          (r.currentFrame = 0),
          (r.registerComposition = e),
          r
        );
      };
    })();
    var EffectsExpressionInterface = (function () {
        var e = { createEffectsInterface: r };
        function r(a, n) {
          if (a.effectsManager) {
            var l = [],
              v = a.data.ef,
              y,
              g = a.effectsManager.effectElements.length;
            for (y = 0; y < g; y += 1)
              l.push(i(v[y], a.effectsManager.effectElements[y], n, a));
            var P = a.data.ef || [],
              S = function (u) {
                for (y = 0, g = P.length; y < g; ) {
                  if (u === P[y].nm || u === P[y].mn || u === P[y].ix)
                    return l[y];
                  y += 1;
                }
                return null;
              };
            return (
              Object.defineProperty(S, "numProperties", {
                get: function () {
                  return P.length;
                },
              }),
              S
            );
          }
          return null;
        }
        function i(a, n, l, v) {
          function y(d) {
            for (var C = a.ef, f = 0, p = C.length; f < p; ) {
              if (d === C[f].nm || d === C[f].mn || d === C[f].ix)
                return C[f].ty === 5 ? P[f] : P[f]();
              f += 1;
            }
            throw new Error();
          }
          var g = propertyGroupFactory(y, l),
            P = [],
            S,
            u = a.ef.length;
          for (S = 0; S < u; S += 1)
            a.ef[S].ty === 5
              ? P.push(
                  i(
                    a.ef[S],
                    n.effectElements[S],
                    n.effectElements[S].propertyGroup,
                    v
                  )
                )
              : P.push(s(n.effectElements[S], a.ef[S].ty, v, g));
          return (
            a.mn === "ADBE Color Control" &&
              Object.defineProperty(y, "color", {
                get: function () {
                  return P[0]();
                },
              }),
            Object.defineProperties(y, {
              numProperties: {
                get: function () {
                  return a.np;
                },
              },
              _name: { value: a.nm },
              propertyGroup: { value: g },
            }),
            (y.enabled = a.en !== 0),
            (y.active = y.enabled),
            y
          );
        }
        function s(a, n, l, v) {
          var y = ExpressionPropertyInterface(a.p);
          function g() {
            return n === 10 ? l.comp.compInterface(a.p.v) : y();
          }
          return (
            a.p.setGroupProperty &&
              a.p.setGroupProperty(PropertyInterface("", v)),
            g
          );
        }
        return e;
      })(),
      MaskManagerInterface = (function () {
        function e(i, s) {
          ((this || t)._mask = i), ((this || t)._data = s);
        }
        Object.defineProperty(e.prototype, "maskPath", {
          get: function () {
            return (
              (this || t)._mask.prop.k && (this || t)._mask.prop.getValue(),
              (this || t)._mask.prop
            );
          },
        }),
          Object.defineProperty(e.prototype, "maskOpacity", {
            get: function () {
              return (
                (this || t)._mask.op.k && (this || t)._mask.op.getValue(),
                (this || t)._mask.op.v * 100
              );
            },
          });
        var r = function (i) {
          var s = createSizedArray(i.viewData.length),
            a,
            n = i.viewData.length;
          for (a = 0; a < n; a += 1)
            s[a] = new e(i.viewData[a], i.masksProperties[a]);
          var l = function (v) {
            for (a = 0; a < n; ) {
              if (i.masksProperties[a].nm === v) return s[a];
              a += 1;
            }
            return null;
          };
          return l;
        };
        return r;
      })(),
      ExpressionPropertyInterface = (function () {
        var e = { pv: 0, v: 0, mult: 1 },
          r = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
        function i(l, v, y) {
          Object.defineProperty(l, "velocity", {
            get: function () {
              return v.getVelocityAtTime(v.comp.currentFrame);
            },
          }),
            (l.numKeys = v.keyframes ? v.keyframes.length : 0),
            (l.key = function (g) {
              if (!l.numKeys) return 0;
              var P = "";
              "s" in v.keyframes[g - 1]
                ? (P = v.keyframes[g - 1].s)
                : "e" in v.keyframes[g - 2]
                ? (P = v.keyframes[g - 2].e)
                : (P = v.keyframes[g - 2].s);
              var S =
                y === "unidimensional" ? new Number(P) : Object.assign({}, P);
              return (
                (S.time =
                  v.keyframes[g - 1].t / v.elem.comp.globalData.frameRate),
                (S.value = y === "unidimensional" ? P[0] : P),
                S
              );
            }),
            (l.valueAtTime = v.getValueAtTime),
            (l.speedAtTime = v.getSpeedAtTime),
            (l.velocityAtTime = v.getVelocityAtTime),
            (l.propertyGroup = v.propertyGroup);
        }
        function s(l) {
          (!l || !("pv" in l)) && (l = e);
          var v = 1 / l.mult,
            y = l.pv * v,
            g = new Number(y);
          return (
            (g.value = y),
            i(g, l, "unidimensional"),
            function () {
              return (
                l.k && l.getValue(),
                (y = l.v * v),
                g.value !== y &&
                  ((g = new Number(y)),
                  (g.value = y),
                  i(g, l, "unidimensional")),
                g
              );
            }
          );
        }
        function a(l) {
          (!l || !("pv" in l)) && (l = r);
          var v = 1 / l.mult,
            y = (l.data && l.data.l) || l.pv.length,
            g = createTypedArray("float32", y),
            P = createTypedArray("float32", y);
          return (
            (g.value = P),
            i(g, l, "multidimensional"),
            function () {
              l.k && l.getValue();
              for (var S = 0; S < y; S += 1) (P[S] = l.v[S] * v), (g[S] = P[S]);
              return g;
            }
          );
        }
        function n() {
          return e;
        }
        return function (l) {
          return l ? (l.propType === "unidimensional" ? s(l) : a(l)) : n;
        };
      })();
    (function () {
      var e = (function () {
          function i(s, a) {
            return (
              ((this || t).textIndex = s + 1),
              ((this || t).textTotal = a),
              ((this || t).v = this.getValue() * (this || t).mult),
              (this || t).v
            );
          }
          return function (a, n) {
            ((this || t).pv = 1),
              ((this || t).comp = a.comp),
              ((this || t).elem = a),
              ((this || t).mult = 0.01),
              ((this || t).propType = "textSelector"),
              ((this || t).textTotal = n.totalChars),
              ((this || t).selectorValue = 100),
              ((this || t).lastValue = [1, 1, 1]),
              ((this || t).k = !0),
              ((this || t).x = !0),
              ((this || t).getValue = ExpressionManager.initiateExpression.bind(
                this || t
              )(a, n, this || t)),
              ((this || t).getMult = i),
              ((this || t).getVelocityAtTime =
                expressionHelpers.getVelocityAtTime),
              (this || t).kf
                ? ((this || t).getValueAtTime =
                    expressionHelpers.getValueAtTime.bind(this || t))
                : ((this || t).getValueAtTime =
                    expressionHelpers.getStaticValueAtTime.bind(this || t)),
              ((this || t).setGroupProperty =
                expressionHelpers.setGroupProperty);
          };
        })(),
        r = TextSelectorProp.getTextSelectorProp;
      TextSelectorProp.getTextSelectorProp = function (i, s, a) {
        return s.t === 1
          ? new TextExpressionSelectorPropFactory(i, s, a)
          : r(i, s, a);
      };
    })();
    function SliderEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 0, 0, i);
    }
    function AngleEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 0, 0, i);
    }
    function ColorEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 1, 0, i);
    }
    function PointEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 1, 0, i);
    }
    function LayerIndexEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 0, 0, i);
    }
    function MaskIndexEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 0, 0, i);
    }
    function CheckboxEffect(e, r, i) {
      (this || t).p = PropertyFactory.getProp(r, e.v, 0, 0, i);
    }
    function NoValueEffect() {
      (this || t).p = {};
    }
    function EffectsManager(e, r) {
      var i = e.ef || [];
      (this || t).effectElements = [];
      var s,
        a = i.length,
        n;
      for (s = 0; s < a; s += 1)
        (n = new GroupEffect(i[s], r)), (this || t).effectElements.push(n);
    }
    function GroupEffect(e, r) {
      this.init(e, r);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect),
      (GroupEffect.prototype.getValue =
        GroupEffect.prototype.iterateDynamicProperties),
      (GroupEffect.prototype.init = function (e, r) {
        ((this || t).data = e),
          ((this || t).effectElements = []),
          this.initDynamicPropertyContainer(r);
        var i,
          s = (this || t).data.ef.length,
          a,
          n = (this || t).data.ef;
        for (i = 0; i < s; i += 1) {
          switch (((a = null), n[i].ty)) {
            case 0:
              a = new SliderEffect(n[i], r, this || t);
              break;
            case 1:
              a = new AngleEffect(n[i], r, this || t);
              break;
            case 2:
              a = new ColorEffect(n[i], r, this || t);
              break;
            case 3:
              a = new PointEffect(n[i], r, this || t);
              break;
            case 4:
            case 7:
              a = new CheckboxEffect(n[i], r, this || t);
              break;
            case 10:
              a = new LayerIndexEffect(n[i], r, this || t);
              break;
            case 11:
              a = new MaskIndexEffect(n[i], r, this || t);
              break;
            case 5:
              a = new EffectsManager(n[i], r, this || t);
              break;
            default:
              a = new NoValueEffect(n[i], r, this || t);
              break;
          }
          a && (this || t).effectElements.push(a);
        }
      });
    var lottie = {};
    function setLocationHref(e) {
      locationHref = e;
    }
    function searchAnimations() {
      standalone === !0
        ? animationManager.searchAnimations(animationData, standalone, renderer)
        : animationManager.searchAnimations();
    }
    function setSubframeRendering(e) {
      subframeEnabled = e;
    }
    function loadAnimation(e) {
      return (
        standalone === !0 && (e.animationData = JSON.parse(animationData)),
        animationManager.loadAnimation(e)
      );
    }
    function setQuality(e) {
      if (typeof e == "string")
        switch (e) {
          case "high":
            defaultCurveSegments = 200;
            break;
          default:
          case "medium":
            defaultCurveSegments = 50;
            break;
          case "low":
            defaultCurveSegments = 10;
            break;
        }
      else !isNaN(e) && e > 1 && (defaultCurveSegments = e);
      defaultCurveSegments >= 50 ? roundValues(!1) : roundValues(!0);
    }
    function inBrowser() {
      return typeof H < "u";
    }
    function installPlugin(e, r) {
      e === "expressions" && (expressionsPlugin = r);
    }
    function getFactory(e) {
      switch (e) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    (lottie.play = animationManager.play),
      (lottie.pause = animationManager.pause),
      (lottie.setLocationHref = setLocationHref),
      (lottie.togglePause = animationManager.togglePause),
      (lottie.setSpeed = animationManager.setSpeed),
      (lottie.setDirection = animationManager.setDirection),
      (lottie.stop = animationManager.stop),
      (lottie.searchAnimations = searchAnimations),
      (lottie.registerAnimation = animationManager.registerAnimation),
      (lottie.loadAnimation = loadAnimation),
      (lottie.setSubframeRendering = setSubframeRendering),
      (lottie.resize = animationManager.resize),
      (lottie.goToAndStop = animationManager.goToAndStop),
      (lottie.destroy = animationManager.destroy),
      (lottie.setQuality = setQuality),
      (lottie.inBrowser = inBrowser),
      (lottie.installPlugin = installPlugin),
      (lottie.freeze = animationManager.freeze),
      (lottie.unfreeze = animationManager.unfreeze),
      (lottie.setVolume = animationManager.setVolume),
      (lottie.mute = animationManager.mute),
      (lottie.unmute = animationManager.unmute),
      (lottie.getRegisteredAnimations =
        animationManager.getRegisteredAnimations),
      (lottie.__getFactory = getFactory),
      (lottie.version = "5.7.8");
    function checkReady() {
      document.readyState === "complete" &&
        (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(e) {
      for (var r = queryString.split("&"), i = 0; i < r.length; i += 1) {
        var s = r[i].split("=");
        if (decodeURIComponent(s[0]) == e) return decodeURIComponent(s[1]);
      }
      return null;
    }
    var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = "",
      queryString;
    if (standalone) {
      var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || { src: "" };
      (queryString = myScript.src.replace(/^[^\?]+\??/, "")),
        (renderer = getQueryVariable("renderer"));
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie;
  });
var Xt = Rt,
  Mt = Xt;
var ut;
(function (e) {
  (e.File = "Upload"), (e.Url = "URL");
})(ut || (ut = {}));
var St;
(function (e) {
  (e.Auto = "Auto"), (e.Custom = "Custom");
})(St || (St = {}));
var Ot =
  "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json";
function zt(e) {
  let {
      style: r,
      srcUrl: i,
      srcFile: s,
      srcType: a,
      poster: n,
      progress: l,
      playing: v,
      loop: y,
      posterProgress: g,
      pauseOnCanvas: P,
      isForwardsDirection: S,
      speed: u,
      onClick: d,
      onMouseEnter: C,
      onMouseLeave: f,
      onMouseDown: p,
      onMouseUp: c,
      onComplete: o,
    } = e,
    h = gt.current() === gt.canvas,
    m = (!P || !h) && v,
    b = S ? 1 : -1,
    A = n === St.Custom,
    x = nt(),
    _ = nt(!1),
    k = nt({ data: null, animation: null, duration: null }),
    w = Gt(l, { transform: (E) => E * 0.01 }),
    R = () => {
      var E, F;
      return (E = k.current) === null ||
        E === void 0 ||
        (F = E.animation) === null ||
        F === void 0
        ? void 0
        : F.play();
    },
    V = () => {
      var E, F;
      return (E = k.current) === null ||
        E === void 0 ||
        (F = E.animation) === null ||
        F === void 0
        ? void 0
        : F.pause();
    },
    B = () => {
      var E, F;
      return (E = k.current) === null ||
        E === void 0 ||
        (F = E.animation) === null ||
        F === void 0
        ? void 0
        : F.destroy();
    },
    L = ct((E, F) => {
      if (!k.current.duration || !k.current.animation) return;
      let D = E === 1 ? k.current.duration - 1 : E * k.current.duration;
      F
        ? k.current.animation.goToAndPlay(D, !0)
        : k.current.animation.goToAndStop(D, !0);
    }, []),
    O = ct(
      async (E) =>
        E
          ? await fetch(E, {
              method: "GET",
              credentials: "omit",
              redirect: "follow",
            }).then((D) => D.json())
          : null,
      []
    ),
    M = ct(async () => {
      B();
      let E;
      a === ut.Url && (E = i),
        a === ut.File && (E = s),
        E || (console.warn("No valid Lottie animation provided"), (E = Ot));
      let F = await O(E);
      return (k.current.data = F), T(_.current);
    }, [a, i, s]),
    T = ct(
      (E) => {
        if (!x.current) return;
        B();
        let F = {
            container: x.current,
            renderer: "svg",
            loop: !h && y,
            autoplay: m,
            animationData: k.current.data,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          },
          D = (k.current.animation = Mt.loadAnimation(F));
        return (
          (k.current.duration = D.getDuration(!0)),
          D.setDirection(b),
          D.setSpeed(u),
          (_.current = !0),
          h && A ? L(g, !1) : L(w.get(), m || E),
          () => {
            D.destroy();
          }
        );
      },
      [y, m, u, b, h, A, g]
    );
  return (
    Z(() => {
      let E;
      return (
        M().then((F) => (E = F)),
        () => {
          E && E();
        }
      );
    }, [a, s, i]),
    Z(() => {
      if (_.current) return T(!1);
    }, [y]),
    Z(() => Mt.setQuality(h ? "low" : "medium"), []),
    Z(
      () =>
        w.onChange((E) => {
          h || (m ? L(E, !0) : L(E, !1));
        }),
      []
    ),
    Z(() => {
      let E = w.get();
      m ? L(E, !0) : L(E, !1);
    }, [l]),
    Z(() => {
      if (!h) return;
      let E = g * 0.01;
      L(A ? E : w.get(), !1);
    }, [A, g]),
    Z(() => {
      var E;
      !((E = k.current) === null || E === void 0) &&
        E.animation &&
        (k.current.animation.setSpeed(u), L(w.get(), !0));
    }, [u]),
    Z(() => {
      var E;
      !((E = k.current) === null || E === void 0) &&
        E.animation &&
        (k.current.animation.setDirection(b), L(w.get(), !0));
    }, [b]),
    Z(() => {
      m ? R() : V();
    }, [m]),
    Et(Ft.div, {
      ref: x,
      style: r,
      onClick: d,
      onMouseEnter: C,
      onMouseLeave: f,
      onMouseDown: p,
      onMouseUp: c,
    })
  );
}
zt.defaultProps = {
  height: 200,
  width: 200,
  srcType: ut.Url,
  pauseOnCanvas: !0,
  srcUrl: Ot,
  progress: 0,
  poster: St.Auto,
  posterProgress: 0,
};
_t(zt, {
  srcType: {
    type: q.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: [ut.Url, ut.File],
  },
  srcUrl: {
    type: q.String,
    title: " ",
    placeholder: "../example.json",
    hidden: (e) => e.srcType === ut.File,
  },
  srcFile: {
    type: q.File,
    title: " ",
    allowedFileTypes: ["json"],
    hidden: (e) => e.srcType === ut.Url,
  },
  playing: {
    type: q.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  loop: {
    type: q.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  isForwardsDirection: {
    title: "Direction",
    type: q.Boolean,
    enabledTitle: "Normal",
    disabledTitle: "Reverse",
  },
  speed: {
    type: q.Number,
    defaultValue: 1,
    min: 0,
    max: 10,
    step: 0.5,
    displayStepper: !0,
    unit: "x",
  },
  poster: {
    title: "Poster",
    type: q.Enum,
    options: [St.Auto, St.Custom],
    displaySegmentedControl: !0,
  },
  posterProgress: {
    title: " ",
    type: q.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ poster: e }) => e === St.Auto,
  },
  progress: {
    title: "Progress",
    type: q.Number,
    max: 100,
    min: 0,
    unit: "%",
    description:
      "This component is made for JSON files. [Learn more here](https://lottiefiles.com/what-is-lottie).",
  },
  ...It,
});
function Kt(e) {
  let r = {
    width: "100%",
    height: "100%",
    backgroundColor: e.backgroundColor,
    backgroundImage: e.showGrid
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Ccircle fill='${encodeURIComponent(
          e.dotColor
        )}' cx='3' cy='3' r='1.5'/%3E%3C/svg%3E")`
      : "",
    backgroundRepeat: "repeat",
  };
  return Et("div", { style: r });
}
_t(Kt, {
  showGrid: { type: q.Boolean, title: "Show Grid", defaultValue: !0 },
  dotColor: { type: q.Color, title: "Dot Color", defaultValue: "#E6E6E6" },
  backgroundColor: {
    type: q.Color,
    title: "Background Color",
    defaultValue: "#FFFFFF",
  },
});
wt.loadFonts(["GF;Gaegu-700"]);
var ka = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Gaegu",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/gaegu/v17/TuGSUVB6Up9NU573jvw-4sdtBk0x.woff2",
          weight: "700",
        },
      ],
    },
  ],
  wa = [
    '.framer-1GI98 .framer-styles-preset-1j9b4gv:not(.rich-text-wrapper), .framer-1GI98 .framer-styles-preset-1j9b4gv.rich-text-wrapper h1 { --framer-font-family: "Gaegu", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, #474747); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  Ia = "framer-1GI98";
export { zt as a, Kt as b, ka as c, wa as d, Ia as e };
//# sourceMappingURL=chunk-XXM65GHS.mjs.map
