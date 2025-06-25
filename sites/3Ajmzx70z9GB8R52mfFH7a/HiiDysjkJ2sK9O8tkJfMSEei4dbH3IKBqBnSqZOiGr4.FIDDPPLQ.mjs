import { a as at } from "./chunk-SSADWTGU.mjs";
import {
  a as ae,
  b as yt,
  c as pr,
  d as hr,
  e as ur,
} from "./chunk-XXM65GHS.mjs";
import {
  A as Te,
  C as ye,
  D as Se,
  E as et,
  F as te,
  G as Be,
  I as Ee,
  J as nr,
  K as ir,
  M as or,
  O as sr,
  P as Qe,
  S as re,
  U as lr,
  _ as fr,
  ba as cr,
  ca as tt,
  d as Ne,
  da as rt,
  e as S,
  ea as ue,
  fa as B,
  g as ge,
  ha as mr,
  ia as G,
  ja as Re,
  ka as fe,
  la as Ae,
  r as Le,
  t as gt,
  x as u,
} from "./chunk-5TMVSQSY.mjs";
import {
  A as D,
  d as L,
  j as je,
  n as Ke,
  p as tr,
  q as We,
  s as rr,
  u as $e,
  v as he,
  y as ar,
  z as m,
} from "./chunk-KVWHONJO.mjs";
import "./chunk-A4SBUT3M.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-Y5FTINFI.mjs";
rt.loadFonts(["GF;Gaegu-700"]);
var nt = [
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
  it = [
    '.framer-cj7sw .framer-styles-preset-w70ck1:not(.rich-text-wrapper), .framer-cj7sw .framer-styles-preset-w70ck1.rich-text-wrapper h3 { --framer-font-family: "Gaegu", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 31px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, #474747); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  ot = "framer-cj7sw";
var Yr = fe(ae),
  Kr = { NrF3Iwxvq: { hover: !0 } },
  $r = "framer-m4Fxq",
  ea = { NrF3Iwxvq: "framer-v-1ctnpv9" };
function gr(e, ...t) {
  let r = {};
  return t?.forEach((a) => a && Object.assign(r, e[a])), r;
}
var ta = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  yr = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  ra = (e, t) => `translate(-50%, -50%) ${t}`,
  aa = ({ value: e, children: t }) => {
    let r = Ke(Ne),
      a = e ?? r.transition,
      c = $e(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return m(Ne.Provider, { value: c, children: t });
  },
  na = S.create(L),
  ia = ({
    body: e,
    height: t,
    id: r,
    image: a,
    link: c,
    title: o,
    width: h,
    ...d
  }) => {
    var f, i, n;
    return {
      ...d,
      a2MW3PjAo:
        (f = e ?? d.a2MW3PjAo) !== null && f !== void 0
          ? f
          : "Elevate your work with the Enchant portfolio template, a premier choice for creatives and designers aiming for a magical, one-of-a-kind showcase.",
      JMXsk_HCw:
        (i = a ?? d.JMXsk_HCw) !== null && i !== void 0
          ? i
          : {
              src: "https://framerusercontent.com/images/MsECov1H3l0syhEOZUmrblQhLdU.jpg?scale-down-to=1024",
              srcSet:
                "https://framerusercontent.com/images/MsECov1H3l0syhEOZUmrblQhLdU.jpg?scale-down-to=1024 819w,https://framerusercontent.com/images/MsECov1H3l0syhEOZUmrblQhLdU.jpg?scale-down-to=2048 1638w,https://framerusercontent.com/images/MsECov1H3l0syhEOZUmrblQhLdU.jpg?scale-down-to=4096 3277w,https://framerusercontent.com/images/MsECov1H3l0syhEOZUmrblQhLdU.jpg 3930w",
            },
      sCR5wlLuD:
        (n = o ?? d.sCR5wlLuD) !== null && n !== void 0 ? n : "Enchant",
      wPHxCCxFF: c ?? d.wPHxCCxFF,
    };
  },
  oa = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  sa = je(function (e, t) {
    let { activeLocale: r, setLocale: a } = Le(),
      {
        style: c,
        className: o,
        layoutId: h,
        variant: d,
        JMXsk_HCw: f,
        wPHxCCxFF: i,
        sCR5wlLuD: n,
        a2MW3PjAo: s,
        ...l
      } = ia(e),
      {
        baseVariant: p,
        classNames: v,
        clearLoadingGesture: g,
        gestureHandlers: y,
        gestureVariant: w,
        isLoading: b,
        setGestureState: F,
        setVariant: I,
        variants: _,
      } = tt({
        defaultVariant: "NrF3Iwxvq",
        enabledGestures: Kr,
        variant: d,
        variantClassNames: ea,
      }),
      x = oa(e, _),
      j = he(null),
      C = () => w === "NrF3Iwxvq-hover",
      k = () => w !== "NrF3Iwxvq-hover",
      E = We(),
      M = [ot],
      U = et();
    return m(ge, {
      id: h ?? E,
      children: m(na, {
        animate: _,
        initial: !1,
        children: m(aa, {
          value: ta,
          children: m(Qe, {
            href: i,
            nodeId: "NrF3Iwxvq",
            openInNewTab: !1,
            smoothScroll: !0,
            children: D(S.a, {
              ...l,
              ...y,
              className: `${ye(
                $r,
                ...M,
                "framer-1ctnpv9",
                o,
                v
              )} framer-co1o6r`,
              "data-framer-name": "Variant 1",
              layoutDependency: x,
              layoutId: "NrF3Iwxvq",
              ref: t ?? j,
              style: {
                backgroundColor:
                  "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                ...c,
              },
              ...gr(
                { "NrF3Iwxvq-hover": { "data-framer-name": void 0 } },
                p,
                w
              ),
              children: [
                C() &&
                  m(te, {
                    children: m(S.div, {
                      className: "framer-1r8sai-container",
                      layoutDependency: x,
                      layoutId: "sAKYHrQCK-container",
                      children: m(ae, {
                        height: "100%",
                        id: "sAKYHrQCK",
                        isForwardsDirection: !0,
                        layoutId: "sAKYHrQCK",
                        loop: !0,
                        playing: !0,
                        poster: "Auto",
                        posterProgress: 0,
                        progress: 0,
                        speed: 1,
                        srcFile:
                          "https://framerusercontent.com/assets/5RsgX1fFc4MY6ENCnXc9ctn6CE.json",
                        srcType: "Upload",
                        srcUrl:
                          "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                m(S.div, {
                  className: "framer-1ieln4m",
                  layoutDependency: x,
                  layoutId: "QwIYqdBex",
                  children: m(S.div, {
                    className: "framer-1wa33vu",
                    "data-framer-name": "Image Frame",
                    layoutDependency: x,
                    layoutId: "nr8X8Xc2I",
                    style: {
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                    children: m(ue, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 1024,
                        intrinsicWidth: 1024,
                        loading: G(
                          (U?.y || 0) +
                            (8 + ((U?.height || 284) - 16 - 268) / 2) +
                            0 +
                            5684341886080802e-29
                        ),
                        pixelHeight: 1024,
                        pixelWidth: 1024,
                        sizes: "268px",
                        ...yr(f),
                      },
                      className: "framer-8320wa",
                      "data-framer-name": "Image",
                      layoutDependency: x,
                      layoutId: "CgcRfiJ9m",
                      transformTemplate: ra,
                      ...gr(
                        {
                          "NrF3Iwxvq-hover": {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 1024,
                              intrinsicWidth: 1024,
                              loading: G(
                                (U?.y || 0) +
                                  (8 + ((U?.height || 284) - 16 - 268) / 2) +
                                  0 +
                                  -13.399999999999949
                              ),
                              pixelHeight: 1024,
                              pixelWidth: 1024,
                              sizes: "294.8px",
                              ...yr(f),
                            },
                          },
                        },
                        p,
                        w
                      ),
                    }),
                  }),
                }),
                D(S.div, {
                  className: "framer-1b2rm2k",
                  layoutDependency: x,
                  layoutId: "png1iBHvY",
                  children: [
                    m(B, {
                      __fromCanvasComponent: !0,
                      children: m(L, {
                        children: m(S.h3, {
                          className: "framer-styles-preset-w70ck1",
                          "data-styles-preset": "VIwvDOi2B",
                          children: "Enchant",
                        }),
                      }),
                      className: "framer-qi8akx",
                      fonts: ["Inter"],
                      layoutDependency: x,
                      layoutId: "YR7ZtahXx",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: n,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    m(B, {
                      __fromCanvasComponent: !0,
                      children: m(L, {
                        children: m(S.p, {
                          style: {
                            "--font-selector": "R0Y7R2FlZ3UtNzAw",
                            "--framer-font-family": '"Gaegu", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "700",
                            "--framer-text-alignment": "left",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-ee88d82e-f586-4351-9e0d-739b0761209d, rgb(140, 143, 166)))",
                          },
                          children:
                            "Elevate your work with the Enchant portfolio template, a premier choice for creatives and designers aiming for a magical, one-of-a-kind showcase.",
                        }),
                      }),
                      className: "framer-1xh9a5b",
                      fonts: ["GF;Gaegu-700"],
                      layoutDependency: x,
                      layoutId: "TSS5f4hve",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-ee88d82e-f586-4351-9e0d-739b0761209d, rgb(140, 143, 166))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: s,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                k() &&
                  m(S.div, {
                    className: "framer-n9brhn",
                    "data-framer-name": "Outline",
                    layoutDependency: x,
                    layoutId: "nLkBdA3UL",
                    children: m(mr, {
                      className: "framer-16s419t",
                      "data-framer-name": "Vector",
                      layout: "position",
                      layoutDependency: x,
                      layoutId: "cBVtCw0fb",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 691 294"><path d="M 6.41 291.45 C -1.1 202.92 14.06 92.19 11.48 2.84 C 89.21 0.84 590.89 8.26 668.64 8.46 C 674.98 8.48 681.42 8.43 687.51 6.68 C 687.88 90.15 687.73 194.05 688.11 277.52 C 688.11 279.17 687.79 281.28 686.19 281.67 C 604.9 277.67 100.38 280.98 19.35 288.6 C 13.75 289.13 8.1 289.68 2.51 289.01" fill="transparent" stroke-width="3" stroke="rgb(71,71,71)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                      svgContentId: 11987048155,
                      withExternalLayout: !0,
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  la = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-m4Fxq.framer-co1o6r, .framer-m4Fxq .framer-co1o6r { display: block; }",
    ".framer-m4Fxq.framer-1ctnpv9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px 64px 8px 8px; position: relative; text-decoration: none; width: 700px; }",
    ".framer-m4Fxq .framer-1r8sai-container { bottom: -15px; flex: none; left: -31px; position: absolute; right: -45px; top: -56px; z-index: 1; }",
    ".framer-m4Fxq .framer-1ieln4m { flex: none; height: 268px; overflow: visible; position: relative; width: 268px; }",
    ".framer-m4Fxq .framer-1wa33vu { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-m4Fxq .framer-8320wa { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 268px); left: 50%; overflow: hidden; position: absolute; top: 50%; width: 268px; }",
    ".framer-m4Fxq .framer-1b2rm2k { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 252px; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-m4Fxq .framer-qi8akx, .framer-m4Fxq .framer-1xh9a5b { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-m4Fxq .framer-n9brhn { bottom: -9px; flex: none; left: -11px; overflow: visible; position: absolute; right: -5px; top: -9px; z-index: 1; }",
    ".framer-m4Fxq .framer-16s419t { flex: none; height: 294px; left: 0px; position: absolute; top: 0px; width: 691px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-m4Fxq.framer-1ctnpv9, .framer-m4Fxq .framer-1b2rm2k { gap: 0px; } .framer-m4Fxq.framer-1ctnpv9 > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-m4Fxq.framer-1ctnpv9 > :first-child { margin-left: 0px; } .framer-m4Fxq.framer-1ctnpv9 > :last-child { margin-right: 0px; } .framer-m4Fxq .framer-1b2rm2k > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-m4Fxq .framer-1b2rm2k > :first-child { margin-top: 0px; } .framer-m4Fxq .framer-1b2rm2k > :last-child { margin-bottom: 0px; } }",
    ".framer-m4Fxq.framer-v-1ctnpv9.hover .framer-8320wa { height: var(--framer-aspect-ratio-supported, 295px); width: 295px; }",
    ...it,
  ],
  He = Ee(sa, la, "framer-m4Fxq"),
  xt = He;
He.displayName = "Project - Desktop";
He.defaultProps = { height: 284, width: 700 };
Te(He, {
  JMXsk_HCw: {
    __defaultAssetReference:
      "data:framer/asset-reference,MsECov1H3l0syhEOZUmrblQhLdU.jpg?originalFilename=photo-1686148016905-b08dafa868af%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfGFsbHwxN3x8fHx8fDJ8fDE2ODYyNTk4NzB8%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image",
    type: u.ResponsiveImage,
  },
  wPHxCCxFF: { title: "Link", type: u.Link },
  sCR5wlLuD: {
    defaultValue: "Enchant",
    displayTextArea: !1,
    title: "Title",
    type: u.String,
  },
  a2MW3PjAo: {
    defaultValue:
      "Elevate your work with the Enchant portfolio template, a premier choice for creatives and designers aiming for a magical, one-of-a-kind showcase.",
    displayTextArea: !0,
    title: "Body",
    type: u.String,
  },
});
Re(
  He,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Gaegu",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/gaegu/v17/TuGSUVB6Up9NU573jvw-4sdtBk0x.woff2",
          weight: "700",
        },
      ],
    },
    ...Yr,
    ...Ae(nt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var fa = fe(ae),
  ca = "framer-uytj3",
  ma = { AKM9M9lr1: "framer-v-1y69xnn" };
var pa = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ha = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  ua = (e, t) => `translateX(-50%) ${t}`,
  da = ({ value: e, children: t }) => {
    let r = Ke(Ne),
      a = e ?? r.transition,
      c = $e(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
    return m(Ne.Provider, { value: c, children: t });
  },
  ga = S.create(L),
  ya = ({ height: e, id: t, image: r, title: a, width: c, ...o }) => {
    var h, d;
    return {
      ...o,
      akGVifb33:
        (h = r ?? o.akGVifb33) !== null && h !== void 0
          ? h
          : {
              src: "https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?scale-down-to=512",
              srcSet:
                "https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg 5184w",
            },
      LCkifZlII:
        (d = a ?? o.LCkifZlII) !== null && d !== void 0 ? d : "NUDAENG",
    };
  },
  xa = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  va = je(function (e, t) {
    let { activeLocale: r, setLocale: a } = Le(),
      {
        style: c,
        className: o,
        layoutId: h,
        variant: d,
        akGVifb33: f,
        LCkifZlII: i,
        ...n
      } = ya(e),
      {
        baseVariant: s,
        classNames: l,
        clearLoadingGesture: p,
        gestureHandlers: v,
        gestureVariant: g,
        isLoading: y,
        setGestureState: w,
        setVariant: b,
        variants: F,
      } = tt({
        defaultVariant: "AKM9M9lr1",
        variant: d,
        variantClassNames: ma,
      }),
      I = xa(e, F),
      _ = he(null),
      x = We(),
      j = [],
      C = et();
    return m(ge, {
      id: h ?? x,
      children: m(ga, {
        animate: F,
        initial: !1,
        children: m(da, {
          value: pa,
          children: D(S.div, {
            ...n,
            ...v,
            className: ye(ca, ...j, "framer-1y69xnn", o, l),
            "data-framer-name": "Variant 1",
            layoutDependency: I,
            layoutId: "AKM9M9lr1",
            ref: t ?? _,
            style: { ...c },
            children: [
              m(ue, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 896,
                  intrinsicWidth: 895,
                  loading: G((C?.y || 0) + 28),
                  pixelHeight: 896,
                  pixelWidth: 895,
                  sizes: "150px",
                  ...ha(f),
                },
                className: "framer-h7z86b",
                "data-border": !0,
                "data-framer-name": "Image",
                layoutDependency: I,
                layoutId: "UT4nVNk65",
                style: {
                  "--border-bottom-width": "3px",
                  "--border-color":
                    "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                  "--border-left-width": "3px",
                  "--border-right-width": "3px",
                  "--border-style": "solid",
                  "--border-top-width": "3px",
                  borderBottomLeftRadius: 183,
                  borderBottomRightRadius: 183,
                  borderTopLeftRadius: 183,
                  borderTopRightRadius: 183,
                },
              }),
              m(B, {
                __fromCanvasComponent: !0,
                children: m(L, {
                  children: m(S.p, {
                    style: {
                      "--font-selector": "R0Y7R2FlZ3UtNzAw",
                      "--framer-font-family": '"Gaegu", sans-serif',
                      "--framer-font-size": "32px",
                      "--framer-font-weight": "700",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71)))",
                      marginLeft: "40px",
                    },
                    children: "NUDAENG",
                  }),
                }),
                className: "framer-1um8vsh",
                fonts: ["GF;Gaegu-700"],
                layoutDependency: I,
                layoutId: "zoPoPLuJK",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: i,
                transformTemplate: ua,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              m(te, {
                children: m(S.div, {
                  className: "framer-7fv9qe-container",
                  layoutDependency: I,
                  layoutId: "XHYjKWX7m-container",
                  children: m(ae, {
                    height: "100%",
                    id: "XHYjKWX7m",
                    isForwardsDirection: !0,
                    layoutId: "XHYjKWX7m",
                    loop: !0,
                    playing: !1,
                    poster: "Auto",
                    posterProgress: 0,
                    progress: 100,
                    speed: 1,
                    srcFile:
                      "https://framerusercontent.com/assets/GAz9G2mMLU9iqJsrmkVgUIEc.json",
                    srcType: "Upload",
                    srcUrl:
                      "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                    style: { width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
              m(te, {
                children: m(S.div, {
                  className: "framer-1jvm9p0-container",
                  layoutDependency: I,
                  layoutId: "tMch1oOz_-container",
                  style: { rotate: 26 },
                  children: m(ae, {
                    height: "100%",
                    id: "tMch1oOz_",
                    isForwardsDirection: !0,
                    layoutId: "tMch1oOz_",
                    loop: !0,
                    playing: !0,
                    poster: "Auto",
                    posterProgress: 0,
                    progress: 0,
                    speed: 1,
                    srcFile:
                      "https://framerusercontent.com/assets/ajeNQbKVMKbuzvrQoj4MEV7SjlE.json",
                    srcType: "Upload",
                    srcUrl:
                      "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                    style: { height: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  wa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-uytj3.framer-h2domn, .framer-uytj3 .framer-h2domn { display: block; }",
    ".framer-uytj3.framer-1y69xnn { height: 231px; overflow: visible; position: relative; width: 233px; }",
    ".framer-uytj3 .framer-h7z86b { flex: none; height: 150px; left: 35px; overflow: visible; position: absolute; top: 28px; width: 150px; }",
    ".framer-uytj3 .framer-1um8vsh { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; }",
    ".framer-uytj3 .framer-7fv9qe-container { bottom: 8px; flex: none; height: auto; left: 0px; position: absolute; width: 69px; }",
    ".framer-uytj3 .framer-1jvm9p0-container { flex: none; height: 43px; left: 26px; position: absolute; top: 0px; width: 32px; z-index: 1; }",
    '.framer-uytj3[data-border="true"]::after, .framer-uytj3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ve = Ee(va, wa, "framer-uytj3"),
  vt = Ve;
Ve.displayName = "yours truly";
Ve.defaultProps = { height: 231, width: 233 };
Te(Ve, {
  akGVifb33: {
    __defaultAssetReference:
      "data:framer/asset-reference,LXT5cV4ExoLFdItnoMVZcLHiUrA.jpg?originalFilename=photo-1609010697446-11f2155278f0%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwzNXx8cHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjg2MzQ2MjkxfDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image",
    type: u.ResponsiveImage,
  },
  LCkifZlII: {
    defaultValue: "NUDAENG",
    displayTextArea: !1,
    placeholder: "",
    title: "Title",
    type: u.String,
  },
});
Re(
  Ve,
  [
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
    ...fa,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var be,
  T,
  $,
  ba = Object.create,
  Ur = Object.defineProperty,
  _a = Object.getOwnPropertyDescriptor,
  Cr = Object.getOwnPropertyNames,
  ka = Object.getPrototypeOf,
  Fa = Object.prototype.hasOwnProperty,
  ke = (e, t) =>
    function () {
      return t || (0, e[Cr(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Ia = (e, t, r, a) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let c of Cr(t))
        Fa.call(e, c) ||
          c === r ||
          Ur(e, c, {
            get: () => t[c],
            enumerable: !(a = _a(t, c)) || a.enumerable,
          });
    return e;
  },
  Xt = (e, t, r) => (
    (r = e != null ? ba(ka(e)) : {}),
    Ia(
      !t && e && e.__esModule
        ? r
        : Ur(r, "default", { value: e, enumerable: !0 }),
      e
    )
  ),
  Ua = ke({
    "../../../node_modules/dataloader/index.js"(e, t) {
      var r,
        a = (function () {
          function f(n, s) {
            if (typeof n != "function")
              throw TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  n +
                  "."
              );
            (this._batchLoadFn = n),
              (this._maxBatchSize = (function (l) {
                if (!(!l || l.batch !== !1)) return 1;
                var p = l && l.maxBatchSize;
                if (p === void 0) return 1 / 0;
                if (typeof p != "number" || p < 1)
                  throw TypeError(
                    "maxBatchSize must be a positive number: " + p
                  );
                return p;
              })(s)),
              (this._batchScheduleFn = (function (l) {
                var p = l && l.batchScheduleFn;
                if (p === void 0) return c;
                if (typeof p != "function")
                  throw TypeError("batchScheduleFn must be a function: " + p);
                return p;
              })(s)),
              (this._cacheKeyFn = (function (l) {
                var p = l && l.cacheKeyFn;
                if (p === void 0)
                  return function (v) {
                    return v;
                  };
                if (typeof p != "function")
                  throw TypeError("cacheKeyFn must be a function: " + p);
                return p;
              })(s)),
              (this._cacheMap = (function (l) {
                if (!(!l || l.cache !== !1)) return null;
                var p = l && l.cacheMap;
                if (p === void 0) return new Map();
                if (p !== null) {
                  var v = ["get", "set", "delete", "clear"].filter(function (
                    g
                  ) {
                    return p && typeof p[g] != "function";
                  });
                  if (v.length !== 0)
                    throw TypeError(
                      "Custom cacheMap missing methods: " + v.join(", ")
                    );
                }
                return p;
              })(s)),
              (this._batch = null),
              (this.name = s && s.name ? s.name : null);
          }
          var i = f.prototype;
          return (
            (i.load = function (n) {
              if (n == null)
                throw TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(n) +
                    "."
                );
              var s = (function (w) {
                  var b = w._batch;
                  if (
                    b !== null &&
                    !b.hasDispatched &&
                    b.keys.length < w._maxBatchSize
                  )
                    return b;
                  var F = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (w._batch = F),
                    w._batchScheduleFn(function () {
                      (function (I, _) {
                        var x;
                        if (((_.hasDispatched = !0), _.keys.length === 0)) {
                          h(_);
                          return;
                        }
                        try {
                          x = I._batchLoadFn(_.keys);
                        } catch (j) {
                          return o(
                            I,
                            _,
                            TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(j) +
                                "."
                            )
                          );
                        }
                        if (!x || typeof x.then != "function")
                          return o(
                            I,
                            _,
                            TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(x) +
                                "."
                            )
                          );
                        x.then(function (j) {
                          if (!d(j))
                            throw TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(j) +
                                "."
                            );
                          if (j.length !== _.keys.length)
                            throw TypeError(
                              `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                String(_.keys) +
                                `

Values:
` +
                                String(j)
                            );
                          h(_);
                          for (var C = 0; C < _.callbacks.length; C++) {
                            var k = j[C];
                            k instanceof Error
                              ? _.callbacks[C].reject(k)
                              : _.callbacks[C].resolve(k);
                          }
                        }).catch(function (j) {
                          o(I, _, j);
                        });
                      })(w, F);
                    }),
                    F
                  );
                })(this),
                l = this._cacheMap,
                p = this._cacheKeyFn(n);
              if (l) {
                var v = l.get(p);
                if (v) {
                  var g = s.cacheHits || (s.cacheHits = []);
                  return new Promise(function (w) {
                    g.push(function () {
                      w(v);
                    });
                  });
                }
              }
              s.keys.push(n);
              var y = new Promise(function (w, b) {
                s.callbacks.push({ resolve: w, reject: b });
              });
              return l && l.set(p, y), y;
            }),
            (i.loadMany = function (n) {
              if (!d(n))
                throw TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    n +
                    "."
                );
              for (var s = [], l = 0; l < n.length; l++)
                s.push(
                  this.load(n[l]).catch(function (p) {
                    return p;
                  })
                );
              return Promise.all(s);
            }),
            (i.clear = function (n) {
              var s = this._cacheMap;
              if (s) {
                var l = this._cacheKeyFn(n);
                s.delete(l);
              }
              return this;
            }),
            (i.clearAll = function () {
              var n = this._cacheMap;
              return n && n.clear(), this;
            }),
            (i.prime = function (n, s) {
              var l = this._cacheMap;
              if (l) {
                var p,
                  v = this._cacheKeyFn(n);
                l.get(v) === void 0 &&
                  (s instanceof Error
                    ? (p = Promise.reject(s)).catch(function () {})
                    : (p = Promise.resolve(s)),
                  l.set(v, p));
              }
              return this;
            }),
            f
          );
        })(),
        c =
          typeof process == "object" && typeof process.nextTick == "function"
            ? function (f) {
                r || (r = Promise.resolve()),
                  r.then(function () {
                    process.nextTick(f);
                  });
              }
            : typeof setImmediate == "function"
            ? function (f) {
                setImmediate(f);
              }
            : function (f) {
                setTimeout(f);
              };
      function o(f, i, n) {
        h(i);
        for (var s = 0; s < i.keys.length; s++)
          f.clear(i.keys[s]), i.callbacks[s].reject(n);
      }
      function h(f) {
        if (f.cacheHits)
          for (var i = 0; i < f.cacheHits.length; i++) f.cacheHits[i]();
      }
      function d(f) {
        return (
          typeof f == "object" &&
          f !== null &&
          typeof f.length == "number" &&
          (f.length === 0 ||
            (f.length > 0 &&
              Object.prototype.hasOwnProperty.call(f, f.length - 1)))
        );
      }
      t.exports = a;
    },
  }),
  Ca = ke({
    "../../../node_modules/splaytree/dist/splay.js"(e, t) {
      var r;
      (r = function () {
        var a = function (f, i) {
          (this.next = null),
            (this.key = f),
            (this.data = i),
            (this.left = null),
            (this.right = null);
        };
        function c(f, i) {
          return f > i ? 1 : f < i ? -1 : 0;
        }
        function o(f, i, n) {
          for (var s = new a(null, null), l = s, p = s; ; ) {
            var v = n(f, i.key);
            if (v < 0) {
              if (i.left === null) break;
              if (0 > n(f, i.left.key)) {
                var g = i.left;
                if (((i.left = g.right), (g.right = i), (i = g).left === null))
                  break;
              }
              (p.left = i), (p = i), (i = i.left);
            } else if (v > 0) {
              if (i.right === null) break;
              if (n(f, i.right.key) > 0) {
                var g = i.right;
                if (((i.right = g.left), (g.left = i), (i = g).right === null))
                  break;
              }
              (l.right = i), (l = i), (i = i.right);
            } else break;
          }
          return (
            (l.right = i.left),
            (p.left = i.right),
            (i.left = s.right),
            (i.right = s.left),
            i
          );
        }
        function h(f, i, n, s) {
          var l = new a(f, i);
          if (n === null) return (l.left = l.right = null), l;
          n = o(f, n, s);
          var p = s(f, n.key);
          return (
            p < 0
              ? ((l.left = n.left), (l.right = n), (n.left = null))
              : p >= 0 && ((l.right = n.right), (l.left = n), (n.right = null)),
            l
          );
        }
        function d(f, i, n) {
          var s = null,
            l = null;
          if (i) {
            i = o(f, i, n);
            var p = n(i.key, f);
            p === 0
              ? ((s = i.left), (l = i.right))
              : p < 0
              ? ((l = i.right), (i.right = null), (s = i))
              : ((s = i.left), (i.left = null), (l = i));
          }
          return { left: s, right: l };
        }
        return (function () {
          function f(i) {
            i === void 0 && (i = c),
              (this._root = null),
              (this._size = 0),
              (this._comparator = i);
          }
          return (
            (f.prototype.insert = function (i, n) {
              return (
                this._size++,
                (this._root = h(i, n, this._root, this._comparator))
              );
            }),
            (f.prototype.add = function (i, n) {
              var s = new a(i, n);
              this._root === null &&
                ((s.left = s.right = null), this._size++, (this._root = s));
              var l = this._comparator,
                p = o(i, this._root, l),
                v = l(i, p.key);
              return (
                v === 0
                  ? (this._root = p)
                  : (v < 0
                      ? ((s.left = p.left), (s.right = p), (p.left = null))
                      : v > 0 &&
                        ((s.right = p.right), (s.left = p), (p.right = null)),
                    this._size++,
                    (this._root = s)),
                this._root
              );
            }),
            (f.prototype.remove = function (i) {
              this._root = this._remove(i, this._root, this._comparator);
            }),
            (f.prototype._remove = function (i, n, s) {
              var l;
              return n === null
                ? null
                : ((n = o(i, n, s)),
                  s(i, n.key) === 0
                    ? (n.left === null
                        ? (l = n.right)
                        : ((l = o(i, n.left, s)).right = n.right),
                      this._size--,
                      l)
                    : n);
            }),
            (f.prototype.pop = function () {
              var i = this._root;
              if (i) {
                for (; i.left; ) i = i.left;
                return (
                  (this._root = o(i.key, this._root, this._comparator)),
                  (this._root = this._remove(
                    i.key,
                    this._root,
                    this._comparator
                  )),
                  { key: i.key, data: i.data }
                );
              }
              return null;
            }),
            (f.prototype.findStatic = function (i) {
              for (var n = this._root, s = this._comparator; n; ) {
                var l = s(i, n.key);
                if (l === 0) return n;
                n = l < 0 ? n.left : n.right;
              }
              return null;
            }),
            (f.prototype.find = function (i) {
              return this._root &&
                ((this._root = o(i, this._root, this._comparator)),
                this._comparator(i, this._root.key) !== 0)
                ? null
                : this._root;
            }),
            (f.prototype.contains = function (i) {
              for (var n = this._root, s = this._comparator; n; ) {
                var l = s(i, n.key);
                if (l === 0) return !0;
                n = l < 0 ? n.left : n.right;
              }
              return !1;
            }),
            (f.prototype.forEach = function (i, n) {
              for (var s = this._root, l = [], p = !1; !p; )
                s !== null
                  ? (l.push(s), (s = s.left))
                  : l.length !== 0
                  ? ((s = l.pop()), i.call(n, s), (s = s.right))
                  : (p = !0);
              return this;
            }),
            (f.prototype.range = function (i, n, s, l) {
              for (
                var p = [], v = this._comparator, g = this._root;
                p.length !== 0 || g;

              )
                if (g) p.push(g), (g = g.left);
                else {
                  if (v((g = p.pop()).key, n) > 0) break;
                  if (v(g.key, i) >= 0 && s.call(l, g)) return this;
                  g = g.right;
                }
              return this;
            }),
            (f.prototype.keys = function () {
              var i = [];
              return (
                this.forEach(function (n) {
                  var s = n.key;
                  return i.push(s);
                }),
                i
              );
            }),
            (f.prototype.values = function () {
              var i = [];
              return (
                this.forEach(function (n) {
                  var s = n.data;
                  return i.push(s);
                }),
                i
              );
            }),
            (f.prototype.min = function () {
              return this._root ? this.minNode(this._root).key : null;
            }),
            (f.prototype.max = function () {
              return this._root ? this.maxNode(this._root).key : null;
            }),
            (f.prototype.minNode = function (i) {
              if ((i === void 0 && (i = this._root), i))
                for (; i.left; ) i = i.left;
              return i;
            }),
            (f.prototype.maxNode = function (i) {
              if ((i === void 0 && (i = this._root), i))
                for (; i.right; ) i = i.right;
              return i;
            }),
            (f.prototype.at = function (i) {
              for (var n = this._root, s = !1, l = 0, p = []; !s; )
                if (n) p.push(n), (n = n.left);
                else if (p.length > 0) {
                  if (((n = p.pop()), l === i)) return n;
                  l++, (n = n.right);
                } else s = !0;
              return null;
            }),
            (f.prototype.next = function (i) {
              var n = this._root,
                s = null;
              if (i.right) {
                for (s = i.right; s.left; ) s = s.left;
                return s;
              }
              for (var l = this._comparator; n; ) {
                var p = l(i.key, n.key);
                if (p === 0) break;
                p < 0 ? ((s = n), (n = n.left)) : (n = n.right);
              }
              return s;
            }),
            (f.prototype.prev = function (i) {
              var n = this._root,
                s = null;
              if (i.left !== null) {
                for (s = i.left; s.right; ) s = s.right;
                return s;
              }
              for (var l = this._comparator; n; ) {
                var p = l(i.key, n.key);
                if (p === 0) break;
                p < 0 ? (n = n.left) : ((s = n), (n = n.right));
              }
              return s;
            }),
            (f.prototype.clear = function () {
              return (this._root = null), (this._size = 0), this;
            }),
            (f.prototype.toList = function () {
              return (function (i) {
                for (
                  var n = i, s = [], l = !1, p = new a(null, null), v = p;
                  !l;

                )
                  n
                    ? (s.push(n), (n = n.left))
                    : s.length > 0
                    ? (n = (n = v = v.next = s.pop()).right)
                    : (l = !0);
                return (v.next = null), p.next;
              })(this._root);
            }),
            (f.prototype.load = function (i, n, s) {
              n === void 0 && (n = []), s === void 0 && (s = !1);
              var l = i.length,
                p = this._comparator;
              if (
                (s &&
                  (function g(y, w, b, F, I) {
                    if (!(b >= F)) {
                      for (var _ = y[(b + F) >> 1], x = b - 1, j = F + 1; ; ) {
                        do x++;
                        while (0 > I(y[x], _));
                        do j--;
                        while (I(y[j], _) > 0);
                        if (x >= j) break;
                        var C = y[x];
                        (y[x] = y[j]),
                          (y[j] = C),
                          (C = w[x]),
                          (w[x] = w[j]),
                          (w[j] = C);
                      }
                      g(y, w, b, j, I), g(y, w, j + 1, F, I);
                    }
                  })(i, n, 0, l - 1, p),
                this._root === null)
              )
                (this._root = (function g(y, w, b, F) {
                  var I = F - b;
                  if (I > 0) {
                    var _ = b + Math.floor(I / 2),
                      x = y[_],
                      j = w[_],
                      C = new a(x, j);
                    return (
                      (C.left = g(y, w, b, _)), (C.right = g(y, w, _ + 1, F)), C
                    );
                  }
                  return null;
                })(i, n, 0, l)),
                  (this._size = l);
              else {
                var v = (function (g, y, w) {
                  for (
                    var b = new a(null, null), F = b, I = g, _ = y;
                    I !== null && _ !== null;

                  )
                    0 > w(I.key, _.key)
                      ? ((F.next = I), (I = I.next))
                      : ((F.next = _), (_ = _.next)),
                      (F = F.next);
                  return (
                    I !== null ? (F.next = I) : _ !== null && (F.next = _),
                    b.next
                  );
                })(
                  this.toList(),
                  (function (g, y) {
                    for (
                      var w = new a(null, null), b = w, F = 0;
                      F < g.length;
                      F++
                    )
                      b = b.next = new a(g[F], y[F]);
                    return (b.next = null), w.next;
                  })(i, n),
                  p
                );
                (l = this._size + l),
                  (this._root = (function g(y, w, b) {
                    var F = b - w;
                    if (F > 0) {
                      var I = w + Math.floor(F / 2),
                        _ = g(y, w, I),
                        x = y.head;
                      return (
                        (x.left = _),
                        (y.head = y.head.next),
                        (x.right = g(y, I + 1, b)),
                        x
                      );
                    }
                    return null;
                  })({ head: v }, 0, l));
              }
              return this;
            }),
            (f.prototype.isEmpty = function () {
              return this._root === null;
            }),
            Object.defineProperty(f.prototype, "size", {
              get: function () {
                return this._size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(f.prototype, "root", {
              get: function () {
                return this._root;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (f.prototype.toString = function (i) {
              i === void 0 &&
                (i = function (s) {
                  return String(s.key);
                });
              var n = [];
              return (
                (function s(l, p, v, g, y) {
                  if (l) {
                    g(
                      "" +
                        p +
                        (v ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") +
                        y(l) +
                        `
`
                    );
                    var w = p + (v ? "    " : "\u2502   ");
                    l.left && s(l.left, w, !1, g, y),
                      l.right && s(l.right, w, !0, g, y);
                  }
                })(
                  this._root,
                  "",
                  !0,
                  function (s) {
                    return n.push(s);
                  },
                  i
                ),
                n.join("")
              );
            }),
            (f.prototype.update = function (i, n, s) {
              var l,
                p,
                v = this._comparator,
                g = d(i, this._root, v),
                y = g.left,
                w = g.right;
              0 > v(i, n) ? (w = h(n, s, w, v)) : (y = h(n, s, y, v)),
                (this._root =
                  ((l = y),
                  (p = w) === null
                    ? l
                    : (l === null || ((p = o(l.key, p, v)).left = l), p)));
            }),
            (f.prototype.split = function (i) {
              return d(i, this._root, this._comparator);
            }),
            (f.prototype[Symbol.iterator] = function () {
              var i, n, s;
              return (function (l, p) {
                var v,
                  g,
                  y,
                  w,
                  b = {
                    label: 0,
                    sent: function () {
                      if (1 & y[0]) throw y[1];
                      return y[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (w = { next: F(0), throw: F(1), return: F(2) }),
                  typeof Symbol == "function" &&
                    (w[Symbol.iterator] = function () {
                      return this;
                    }),
                  w
                );
                function F(I) {
                  return function (_) {
                    return (function (x) {
                      if (v) throw TypeError("Generator is already executing.");
                      for (; b; )
                        try {
                          if (
                            ((v = 1),
                            g &&
                              (y =
                                2 & x[0]
                                  ? g.return
                                  : x[0]
                                  ? g.throw || ((y = g.return) && y.call(g), 0)
                                  : g.next) &&
                              !(y = y.call(g, x[1])).done)
                          )
                            return y;
                          switch (
                            ((g = 0), y && (x = [2 & x[0], y.value]), x[0])
                          ) {
                            case 0:
                            case 1:
                              y = x;
                              break;
                            case 4:
                              return b.label++, { value: x[1], done: !1 };
                            case 5:
                              b.label++, (g = x[1]), (x = [0]);
                              continue;
                            case 7:
                              (x = b.ops.pop()), b.trys.pop();
                              continue;
                            default:
                              if (
                                !(y =
                                  (y = b.trys).length > 0 && y[y.length - 1]) &&
                                (x[0] === 6 || x[0] === 2)
                              ) {
                                b = 0;
                                continue;
                              }
                              if (
                                x[0] === 3 &&
                                (!y || (x[1] > y[0] && x[1] < y[3]))
                              ) {
                                b.label = x[1];
                                break;
                              }
                              if (x[0] === 6 && b.label < y[1]) {
                                (b.label = y[1]), (y = x);
                                break;
                              }
                              if (y && b.label < y[2]) {
                                (b.label = y[2]), b.ops.push(x);
                                break;
                              }
                              y[2] && b.ops.pop(), b.trys.pop();
                              continue;
                          }
                          x = p.call(l, b);
                        } catch (j) {
                          (x = [6, j]), (g = 0);
                        } finally {
                          v = y = 0;
                        }
                      if (5 & x[0]) throw x[1];
                      return { value: x[0] ? x[1] : void 0, done: !0 };
                    })([I, _]);
                  };
                }
              })(this, function (l) {
                switch (l.label) {
                  case 0:
                    (i = this._root), (n = []), (s = !1), (l.label = 1);
                  case 1:
                    return s
                      ? [3, 6]
                      : i === null
                      ? [3, 2]
                      : (n.push(i), (i = i.left), [3, 5]);
                  case 2:
                    return n.length === 0 ? [3, 4] : [4, (i = n.pop())];
                  case 3:
                    return l.sent(), (i = i.right), [3, 5];
                  case 4:
                    (s = !0), (l.label = 5);
                  case 5:
                    return [3, 1];
                  case 6:
                    return [2];
                }
              });
            }),
            f
          );
        })();
      }),
        typeof e == "object" && t !== void 0
          ? (t.exports = r())
          : typeof define == "function" && define.amd
          ? define(r)
          : (e.SplayTree = r());
    },
  }),
  ct = ke({
    "../../../node_modules/whatwg-mimetype/lib/utils.js"(e) {
      (e.removeLeadingAndTrailingHTTPWhitespace = (t) =>
        t.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "")),
        (e.removeTrailingHTTPWhitespace = (t) => t.replace(/[ \t\n\r]+$/u, "")),
        (e.isHTTPWhitespaceChar = (t) =>
          t === " " ||
          t === "	" ||
          t ===
            `
` ||
          t === "\r"),
        (e.solelyContainsHTTPTokenCodePoints = (t) =>
          /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(t)),
        (e.soleyContainsHTTPQuotedStringTokenCodePoints = (t) =>
          /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(t)),
        (e.asciiLowercase = (t) =>
          t.replace(/[A-Z]/gu, (r) => r.toLowerCase())),
        (e.collectAnHTTPQuotedString = (t, r) => {
          let a = "";
          for (r++; ; ) {
            for (; r < t.length && t[r] !== '"' && t[r] !== "\\"; )
              (a += t[r]), ++r;
            if (r >= t.length) break;
            let c = t[r];
            if ((++r, c === "\\")) {
              if (r >= t.length) {
                a += "\\";
                break;
              }
              (a += t[r]), ++r;
            } else break;
          }
          return [a, r];
        });
    },
  }),
  ja = ke({
    "../../../node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(e, t) {
      var {
        asciiLowercase: r,
        solelyContainsHTTPTokenCodePoints: a,
        soleyContainsHTTPQuotedStringTokenCodePoints: c,
      } = ct();
      t.exports = class {
        get size() {
          return this._map.size;
        }
        get(o) {
          return (o = r(String(o))), this._map.get(o);
        }
        has(o) {
          return (o = r(String(o))), this._map.has(o);
        }
        set(o, h) {
          if (((o = r(String(o))), (h = String(h)), !a(o)))
            throw Error(
              `Invalid MIME type parameter name "${o}": only HTTP token code points are valid.`
            );
          if (!c(h))
            throw Error(
              `Invalid MIME type parameter value "${h}": only HTTP quoted-string token code points are valid.`
            );
          return this._map.set(o, h);
        }
        clear() {
          this._map.clear();
        }
        delete(o) {
          return (o = r(String(o))), this._map.delete(o);
        }
        forEach(o, h) {
          this._map.forEach(o, h);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
        entries() {
          return this._map.entries();
        }
        [Symbol.iterator]() {
          return this._map[Symbol.iterator]();
        }
        constructor(o) {
          this._map = o;
        }
      };
    },
  }),
  Wa = ke({
    "../../../node_modules/whatwg-mimetype/lib/parser.js"(e, t) {
      var {
        removeLeadingAndTrailingHTTPWhitespace: r,
        removeTrailingHTTPWhitespace: a,
        isHTTPWhitespaceChar: c,
        solelyContainsHTTPTokenCodePoints: o,
        soleyContainsHTTPQuotedStringTokenCodePoints: h,
        asciiLowercase: d,
        collectAnHTTPQuotedString: f,
      } = ct();
      t.exports = (i) => {
        i = r(i);
        let n = 0,
          s = "";
        for (; n < i.length && i[n] !== "/"; ) (s += i[n]), ++n;
        if (s.length === 0 || !o(s) || n >= i.length) return null;
        ++n;
        let l = "";
        for (; n < i.length && i[n] !== ";"; ) (l += i[n]), ++n;
        if ((l = a(l)).length === 0 || !o(l)) return null;
        let p = { type: d(s), subtype: d(l), parameters: new Map() };
        for (; n < i.length; ) {
          for (++n; c(i[n]); ) ++n;
          let v = "";
          for (; n < i.length && i[n] !== ";" && i[n] !== "="; )
            (v += i[n]), ++n;
          if (((v = d(v)), n < i.length)) {
            if (i[n] === ";") continue;
            ++n;
          }
          let g = null;
          if (i[n] === '"')
            for ([g, n] = f(i, n); n < i.length && i[n] !== ";"; ) ++n;
          else {
            for (g = ""; n < i.length && i[n] !== ";"; ) (g += i[n]), ++n;
            if ((g = a(g)) === "") continue;
          }
          v.length > 0 &&
            o(v) &&
            h(g) &&
            !p.parameters.has(v) &&
            p.parameters.set(v, g);
        }
        return p;
      };
    },
  }),
  Na = ke({
    "../../../node_modules/whatwg-mimetype/lib/serializer.js"(e, t) {
      var { solelyContainsHTTPTokenCodePoints: r } = ct();
      t.exports = (a) => {
        let c = `${a.type}/${a.subtype}`;
        if (a.parameters.size === 0) return c;
        for (let [o, h] of a.parameters)
          (c += ";" + o + "="),
            (r(h) && h.length !== 0) ||
              ((h = h.replace(/(["\\])/gu, "\\$1")), (h = `"${h}"`)),
            (c += h);
        return c;
      };
    },
  }),
  La = ke({
    "../../../node_modules/whatwg-mimetype/lib/mime-type.js"(e, t) {
      var r = ja(),
        a = Wa(),
        c = Na(),
        { asciiLowercase: o, solelyContainsHTTPTokenCodePoints: h } = ct();
      t.exports = class {
        static parse(d) {
          try {
            return new this(d);
          } catch {
            return null;
          }
        }
        get essence() {
          return `${this.type}/${this.subtype}`;
        }
        get type() {
          return this._type;
        }
        set type(d) {
          if ((d = o(String(d))).length === 0)
            throw Error("Invalid type: must be a non-empty string");
          if (!h(d))
            throw Error(
              `Invalid type ${d}: must contain only HTTP token code points`
            );
          this._type = d;
        }
        get subtype() {
          return this._subtype;
        }
        set subtype(d) {
          if ((d = o(String(d))).length === 0)
            throw Error("Invalid subtype: must be a non-empty string");
          if (!h(d))
            throw Error(
              `Invalid subtype ${d}: must contain only HTTP token code points`
            );
          this._subtype = d;
        }
        get parameters() {
          return this._parameters;
        }
        toString() {
          return c(this);
        }
        isJavaScript({ prohibitParameters: d = !1 } = {}) {
          switch (this._type) {
            case "text":
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "javascript1.0":
                case "javascript1.1":
                case "javascript1.2":
                case "javascript1.3":
                case "javascript1.4":
                case "javascript1.5":
                case "jscript":
                case "livescript":
                case "x-ecmascript":
                case "x-javascript":
                  return !d || this._parameters.size === 0;
                default:
                  return !1;
              }
            case "application":
              switch (this._subtype) {
                case "ecmascript":
                case "javascript":
                case "x-ecmascript":
                case "x-javascript":
                  return !d || this._parameters.size === 0;
                default:
                  return !1;
              }
            default:
              return !1;
          }
        }
        isXML() {
          return (
            (this._subtype === "xml" &&
              (this._type === "text" || this._type === "application")) ||
            this._subtype.endsWith("+xml")
          );
        }
        isHTML() {
          return this._subtype === "html" && this._type === "text";
        }
        constructor(d) {
          d = String(d);
          let f = a(d);
          if (f === null)
            throw Error(`Could not parse MIME type string "${d}"`);
          (this._type = f.type),
            (this._subtype = f.subtype),
            (this._parameters = new r(f.parameters));
        }
      };
    },
  }),
  Ta = Xt(Ua());
function W(e, ...t) {
  if (!e)
    throw Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
}
function lt(e) {
  throw Error(`Unexpected value: ${e}`);
}
var H = {
    Uint8: 1,
    Uint16: 2,
    Uint32: 4,
    BigUint64: 8,
    Int8: 1,
    Int16: 2,
    Int32: 4,
    BigInt64: 8,
    Float32: 4,
    Float64: 8,
  },
  St = class {
    getOffset() {
      return this.offset;
    }
    ensureBufferLength(e) {
      let t = this.buffer.byteLength;
      if (!(this.offset + e <= t)) throw Error("Reading out of bounds");
    }
    readUint8() {
      let e = H.Uint8;
      this.ensureBufferLength(e);
      let t = this.view.getUint8(this.offset);
      return (this.offset += e), t;
    }
    readUint16() {
      let e = H.Uint16;
      this.ensureBufferLength(e);
      let t = this.view.getUint16(this.offset);
      return (this.offset += e), t;
    }
    readUint32() {
      let e = H.Uint32;
      this.ensureBufferLength(e);
      let t = this.view.getUint32(this.offset);
      return (this.offset += e), t;
    }
    readUint64() {
      let e = this.readBigUint64();
      return Number(e);
    }
    readBigUint64() {
      let e = H.BigUint64;
      this.ensureBufferLength(e);
      let t = this.view.getBigUint64(this.offset);
      return (this.offset += e), t;
    }
    readInt8() {
      let e = H.Int8;
      this.ensureBufferLength(e);
      let t = this.view.getInt8(this.offset);
      return (this.offset += e), t;
    }
    readInt16() {
      let e = H.Int16;
      this.ensureBufferLength(e);
      let t = this.view.getInt16(this.offset);
      return (this.offset += e), t;
    }
    readInt32() {
      let e = H.Int32;
      this.ensureBufferLength(e);
      let t = this.view.getInt32(this.offset);
      return (this.offset += e), t;
    }
    readInt64() {
      let e = this.readBigInt64();
      return Number(e);
    }
    readBigInt64() {
      let e = H.BigInt64;
      this.ensureBufferLength(e);
      let t = this.view.getBigInt64(this.offset);
      return (this.offset += e), t;
    }
    readFloat32() {
      let e = H.Float32;
      this.ensureBufferLength(e);
      let t = this.view.getFloat32(this.offset);
      return (this.offset += e), t;
    }
    readFloat64() {
      let e = H.Float64;
      this.ensureBufferLength(e);
      let t = this.view.getFloat64(this.offset);
      return (this.offset += e), t;
    }
    readBuffer(e) {
      let t = this.offset,
        r = t + e,
        a = this.buffer.slice(t, r);
      return (this.offset = r), a;
    }
    readString() {
      let e = this.readUint32(),
        t = this.readBuffer(e);
      return this.decoder.decode(t);
    }
    readJson() {
      let e = this.readString();
      return JSON.parse(e);
    }
    constructor(e) {
      (this.buffer = e),
        (this.offset = 0),
        (this.view = new DataView(this.buffer)),
        (this.decoder = new TextDecoder());
    }
  };
function wt(e) {
  return Number.isFinite(e);
}
function pe(e) {
  return e === void 0;
}
function ft(e) {
  return e === null;
}
var P = Uint8Array,
  Z = Uint16Array,
  Gt = Int32Array,
  mt = new P([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  pt = new P([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Bt = new P([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  jr = function (e, t) {
    for (var r = new Z(31), a = 0; a < 31; ++a) r[a] = t += 1 << e[a - 1];
    for (var c = new Gt(r[30]), a = 1; a < 30; ++a)
      for (var o = r[a]; o < r[a + 1]; ++o) c[o] = ((o - r[a]) << 5) | a;
    return { b: r, r: c };
  },
  Wr = jr(mt, 2),
  Nr = Wr.b,
  Ht = Wr.r;
(Nr[28] = 258), (Ht[258] = 28);
var Lr = jr(pt, 0),
  Ea = Lr.b,
  vr = Lr.r,
  Vt = new Z(32768);
for (T = 0; T < 32768; ++T)
  (be =
    ((61680 &
      (be =
        ((52428 & (be = ((43690 & T) >> 1) | ((21845 & T) << 1))) >> 2) |
        ((13107 & be) << 2))) >>
      4) |
    ((3855 & be) << 4)),
    (Vt[T] = (((65280 & be) >> 8) | ((255 & be) << 8)) >> 1);
var se = function (e, t, r) {
    for (var a, c = e.length, o = 0, h = new Z(t); o < c; ++o)
      e[o] && ++h[e[o] - 1];
    var d = new Z(t);
    for (o = 1; o < t; ++o) d[o] = (d[o - 1] + h[o - 1]) << 1;
    if (r) {
      a = new Z(1 << t);
      var f = 15 - t;
      for (o = 0; o < c; ++o)
        if (e[o])
          for (
            var i = (o << 4) | e[o],
              n = t - e[o],
              s = d[e[o] - 1]++ << n,
              l = s | ((1 << n) - 1);
            s <= l;
            ++s
          )
            a[Vt[s] >> f] = i;
    } else
      for (o = 0, a = new Z(c); o < c; ++o)
        e[o] && (a[o] = Vt[d[e[o] - 1]++] >> (15 - e[o]));
    return a;
  },
  de = new P(288);
for (T = 0; T < 144; ++T) de[T] = 8;
for (T = 144; T < 256; ++T) de[T] = 9;
for (T = 256; T < 280; ++T) de[T] = 7;
for (T = 280; T < 288; ++T) de[T] = 8;
var Ge = new P(32);
for (T = 0; T < 32; ++T) Ge[T] = 5;
var Qa = se(de, 9, 0),
  Ra = se(de, 9, 1),
  Aa = se(Ge, 5, 0),
  Da = se(Ge, 5, 1),
  bt = function (e) {
    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
    return t;
  },
  K = function (e, t, r) {
    var a = (t / 8) | 0;
    return ((e[a] | (e[a + 1] << 8)) >> (7 & t)) & r;
  },
  _t = function (e, t) {
    var r = (t / 8) | 0;
    return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16)) >> (7 & t);
  },
  Zt = function (e) {
    return ((e + 7) / 8) | 0;
  },
  Tr = function (e, t, r) {
    return (
      (t == null || t < 0) && (t = 0),
      (r == null || r > e.length) && (r = e.length),
      new P(e.subarray(t, r))
    );
  },
  za = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data",
  ],
  me = function (e, t, r) {
    var a = Error(t || za[e]);
    if (
      ((a.code = e),
      Error.captureStackTrace && Error.captureStackTrace(a, me),
      !r)
    )
      throw a;
    return a;
  },
  Ma = function (e, t, r, a) {
    var c = e.length,
      o = a ? a.length : 0;
    if (!c || (t.f && !t.l)) return r || new P(0);
    var h = !r,
      d = h || t.i != 2,
      f = t.i;
    h && (r = new P(3 * c));
    var i = function (ze) {
        var Me = r.length;
        if (ze > Me) {
          var Ce = new P(Math.max(2 * Me, ze));
          Ce.set(r), (r = Ce);
        }
      },
      n = t.f || 0,
      s = t.p || 0,
      l = t.b || 0,
      p = t.l,
      v = t.d,
      g = t.m,
      y = t.n,
      w = 8 * c;
    do {
      if (!p) {
        n = K(e, s, 1);
        var b = K(e, s + 1, 3);
        if (((s += 3), b))
          if (b == 1) (p = Ra), (v = Da), (g = 9), (y = 5);
          else if (b == 2) {
            var F = K(e, s, 31) + 257,
              I = K(e, s + 10, 15) + 4,
              _ = F + K(e, s + 5, 31) + 1;
            s += 14;
            for (var x = new P(_), j = new P(19), C = 0; C < I; ++C)
              j[Bt[C]] = K(e, s + 3 * C, 7);
            s += 3 * I;
            for (
              var k = bt(j), E = (1 << k) - 1, M = se(j, k, 1), C = 0;
              C < _;

            ) {
              var U = M[K(e, s, E)];
              s += 15 & U;
              var N = U >> 4;
              if (N < 16) x[C++] = N;
              else {
                var Q = 0,
                  V = 0;
                for (
                  N == 16
                    ? ((V = 3 + K(e, s, 3)), (s += 2), (Q = x[C - 1]))
                    : N == 17
                    ? ((V = 3 + K(e, s, 7)), (s += 3))
                    : N == 18 && ((V = 11 + K(e, s, 127)), (s += 7));
                  V--;

                )
                  x[C++] = Q;
              }
            }
            var z = x.subarray(0, F),
              R = x.subarray(F);
            (g = bt(z)), (y = bt(R)), (p = se(z, g, 1)), (v = se(R, y, 1));
          } else me(1);
        else {
          var N = Zt(s) + 4,
            q = e[N - 4] | (e[N - 3] << 8),
            J = N + q;
          if (J > c) {
            f && me(0);
            break;
          }
          d && i(l + q),
            r.set(e.subarray(N, J), l),
            (t.b = l += q),
            (t.p = s = 8 * J),
            (t.f = n);
          continue;
        }
        if (s > w) {
          f && me(0);
          break;
        }
      }
      d && i(l + 131072);
      for (var De = (1 << g) - 1, Y = (1 << y) - 1, le = s; ; le = s) {
        var Q = p[_t(e, s) & De],
          O = Q >> 4;
        if ((s += 15 & Q) > w) {
          f && me(0);
          break;
        }
        if ((Q || me(2), O < 256)) r[l++] = O;
        else if (O == 256) {
          (le = s), (p = null);
          break;
        } else {
          var X = O - 254;
          if (O > 264) {
            var C = O - 257,
              A = mt[C];
            (X = K(e, s, (1 << A) - 1) + Nr[C]), (s += A);
          }
          var ee = v[_t(e, s) & Y],
            Ie = ee >> 4;
          ee || me(3), (s += 15 & ee);
          var R = Ea[Ie];
          if (Ie > 3) {
            var A = pt[Ie];
            (R += _t(e, s) & ((1 << A) - 1)), (s += A);
          }
          if (s > w) {
            f && me(0);
            break;
          }
          d && i(l + 131072);
          var Ue = l + X;
          if (l < R) {
            var Je = o - R,
              Ye = Math.min(R, Ue);
            for (Je + l < 0 && me(3); l < Ye; ++l) r[l] = a[Je + l];
          }
          for (; l < Ue; ++l) r[l] = r[l - R];
        }
      }
      (t.l = p),
        (t.p = le),
        (t.b = l),
        (t.f = n),
        p && ((n = 1), (t.m = g), (t.d = v), (t.n = y));
    } while (!n);
    return l != r.length && h ? Tr(r, 0, l) : r.subarray(0, l);
  },
  ce = function (e, t, r) {
    r <<= 7 & t;
    var a = (t / 8) | 0;
    (e[a] |= r), (e[a + 1] |= r >> 8);
  },
  Pe = function (e, t, r) {
    r <<= 7 & t;
    var a = (t / 8) | 0;
    (e[a] |= r), (e[a + 1] |= r >> 8), (e[a + 2] |= r >> 16);
  },
  kt = function (e, t) {
    for (var r = [], a = 0; a < e.length; ++a)
      e[a] && r.push({ s: a, f: e[a] });
    var c = r.length,
      o = r.slice();
    if (!c) return { t: Qr, l: 0 };
    if (c == 1) {
      var h = new P(r[0].s + 1);
      return (h[r[0].s] = 1), { t: h, l: 1 };
    }
    r.sort(function (_, x) {
      return _.f - x.f;
    }),
      r.push({ s: -1, f: 25001 });
    var d = r[0],
      f = r[1],
      i = 0,
      n = 1,
      s = 2;
    for (r[0] = { s: -1, f: d.f + f.f, l: d, r: f }; n != c - 1; )
      (d = r[r[i].f < r[s].f ? i++ : s++]),
        (f = r[i != n && r[i].f < r[s].f ? i++ : s++]),
        (r[n++] = { s: -1, f: d.f + f.f, l: d, r: f });
    for (var l = o[0].s, a = 1; a < c; ++a) o[a].s > l && (l = o[a].s);
    var p = new Z(l + 1),
      v = Pt(r[n - 1], p, 0);
    if (v > t) {
      var a = 0,
        g = 0,
        y = v - t,
        w = 1 << y;
      for (
        o.sort(function (x, j) {
          return p[j.s] - p[x.s] || x.f - j.f;
        });
        a < c;
        ++a
      ) {
        var b = o[a].s;
        if (p[b] > t) (g += w - (1 << (v - p[b]))), (p[b] = t);
        else break;
      }
      for (g >>= y; g > 0; ) {
        var F = o[a].s;
        p[F] < t ? (g -= 1 << (t - p[F]++ - 1)) : ++a;
      }
      for (; a >= 0 && g; --a) {
        var I = o[a].s;
        p[I] == t && (--p[I], ++g);
      }
      v = t;
    }
    return { t: new P(p), l: v };
  },
  Pt = function (e, t, r) {
    return e.s == -1
      ? Math.max(Pt(e.l, t, r + 1), Pt(e.r, t, r + 1))
      : (t[e.s] = r);
  },
  wr = function (e) {
    for (var t = e.length; t && !e[--t]; );
    for (
      var r = new Z(++t),
        a = 0,
        c = e[0],
        o = 1,
        h = function (f) {
          r[a++] = f;
        },
        d = 1;
      d <= t;
      ++d
    )
      if (e[d] == c && d != t) ++o;
      else {
        if (!c && o > 2) {
          for (; o > 138; o -= 138) h(32754);
          o > 2 &&
            (h(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305),
            (o = 0));
        } else if (o > 3) {
          for (h(c), --o; o > 6; o -= 6) h(8304);
          o > 2 && (h(((o - 3) << 5) | 8208), (o = 0));
        }
        for (; o--; ) h(c);
        (o = 1), (c = e[d]);
      }
    return { c: r.subarray(0, a), n: t };
  },
  qe = function (e, t) {
    for (var r = 0, a = 0; a < t.length; ++a) r += e[a] * t[a];
    return r;
  },
  Er = function (e, t, r) {
    var a = r.length,
      c = Zt(t + 2);
    (e[c] = 255 & a),
      (e[c + 1] = a >> 8),
      (e[c + 2] = 255 ^ e[c]),
      (e[c + 3] = 255 ^ e[c + 1]);
    for (var o = 0; o < a; ++o) e[c + o + 4] = r[o];
    return (c + 4 + a) * 8;
  },
  br = function (e, t, r, a, c, o, h, d, f, i, n) {
    ce(t, n++, r), ++c[256];
    for (
      var s,
        l,
        p,
        v,
        g = kt(c, 15),
        y = g.t,
        w = g.l,
        b = kt(o, 15),
        F = b.t,
        I = b.l,
        _ = wr(y),
        x = _.c,
        j = _.n,
        C = wr(F),
        k = C.c,
        E = C.n,
        M = new Z(19),
        U = 0;
      U < x.length;
      ++U
    )
      ++M[31 & x[U]];
    for (var U = 0; U < k.length; ++U) ++M[31 & k[U]];
    for (
      var N = kt(M, 7), Q = N.t, V = N.l, z = 19;
      z > 4 && !Q[Bt[z - 1]];
      --z
    );
    var R = (i + 5) << 3,
      q = qe(c, de) + qe(o, Ge) + h,
      J =
        qe(c, y) +
        qe(o, F) +
        h +
        14 +
        3 * z +
        qe(M, Q) +
        2 * M[16] +
        3 * M[17] +
        7 * M[18];
    if (f >= 0 && R <= q && R <= J) return Er(t, n, e.subarray(f, f + i));
    if ((ce(t, n, 1 + (J < q)), (n += 2), J < q)) {
      (s = se(y, w, 0)), (l = y), (p = se(F, I, 0)), (v = F);
      var De = se(Q, V, 0);
      ce(t, n, j - 257), ce(t, n + 5, E - 1), ce(t, n + 10, z - 4), (n += 14);
      for (var U = 0; U < z; ++U) ce(t, n + 3 * U, Q[Bt[U]]);
      n += 3 * z;
      for (var Y = [x, k], le = 0; le < 2; ++le)
        for (var O = Y[le], U = 0; U < O.length; ++U) {
          var X = 31 & O[U];
          ce(t, n, De[X]),
            (n += Q[X]),
            X > 15 && (ce(t, n, (O[U] >> 5) & 127), (n += O[U] >> 12));
        }
    } else (s = Qa), (l = de), (p = Aa), (v = Ge);
    for (var U = 0; U < d; ++U) {
      var A = a[U];
      if (A > 255) {
        var X = (A >> 18) & 31;
        Pe(t, n, s[X + 257]),
          (n += l[X + 257]),
          X > 7 && (ce(t, n, (A >> 23) & 31), (n += mt[X]));
        var ee = 31 & A;
        Pe(t, n, p[ee]),
          (n += v[ee]),
          ee > 3 && (Pe(t, n, (A >> 5) & 8191), (n += pt[ee]));
      } else Pe(t, n, s[A]), (n += l[A]);
    }
    return Pe(t, n, s[256]), n + l[256];
  },
  Sa = new Gt([
    65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
  ]),
  Qr = new P(0),
  Ba = function (e, t, r, a, c, o) {
    var h = o.z || e.length,
      d = new P(a + h + 5 * (1 + Math.ceil(h / 7e3)) + c),
      f = d.subarray(a, d.length - c),
      i = o.l,
      n = 7 & (o.r || 0);
    if (t) {
      n && (f[0] = o.r >> 3);
      for (
        var s = Sa[t - 1],
          l = s >> 13,
          p = 8191 & s,
          v = (1 << r) - 1,
          g = o.p || new Z(32768),
          y = o.h || new Z(v + 1),
          w = Math.ceil(r / 3),
          b = 2 * w,
          F = function (dt) {
            return (e[dt] ^ (e[dt + 1] << w) ^ (e[dt + 2] << b)) & v;
          },
          I = new Gt(25e3),
          _ = new Z(288),
          x = new Z(32),
          j = 0,
          C = 0,
          k = o.i || 0,
          E = 0,
          M = o.w || 0,
          U = 0;
        k + 2 < h;
        ++k
      ) {
        var N = F(k),
          Q = 32767 & k,
          V = y[N];
        if (((g[Q] = V), (y[N] = Q), M <= k)) {
          var z = h - k;
          if ((j > 7e3 || E > 24576) && (z > 423 || !i)) {
            (n = br(e, f, 0, I, _, x, C, E, U, k - U, n)),
              (E = j = C = 0),
              (U = k);
            for (var R = 0; R < 286; ++R) _[R] = 0;
            for (var R = 0; R < 30; ++R) x[R] = 0;
          }
          var q = 2,
            J = 0,
            De = p,
            Y = (Q - V) & 32767;
          if (z > 2 && N == F(k - Y))
            for (
              var le = Math.min(l, z) - 1,
                O = Math.min(32767, k),
                X = Math.min(258, z);
              Y <= O && --De && Q != V;

            ) {
              if (e[k + q] == e[k + q - Y]) {
                for (var A = 0; A < X && e[k + A] == e[k + A - Y]; ++A);
                if (A > q) {
                  if (((q = A), (J = Y), A > le)) break;
                  for (
                    var ee = Math.min(Y, A - 2), Ie = 0, R = 0;
                    R < ee;
                    ++R
                  ) {
                    var Ue = (k - Y + R) & 32767,
                      Je = g[Ue],
                      Ye = (Ue - Je) & 32767;
                    Ye > Ie && ((Ie = Ye), (V = Ue));
                  }
                }
              }
              (V = g[(Q = V)]), (Y += (Q - V) & 32767);
            }
          if (J) {
            I[E++] = 268435456 | (Ht[q] << 18) | vr[J];
            var ze = 31 & Ht[q],
              Me = 31 & vr[J];
            (C += mt[ze] + pt[Me]), ++_[257 + ze], ++x[Me], (M = k + q), ++j;
          } else (I[E++] = e[k]), ++_[e[k]];
        }
      }
      for (k = Math.max(k, M); k < h; ++k) (I[E++] = e[k]), ++_[e[k]];
      (n = br(e, f, i, I, _, x, C, E, U, k - U, n)),
        i ||
          ((o.r = (7 & n) | (f[(n / 8) | 0] << 3)),
          (n -= 7),
          (o.h = y),
          (o.p = g),
          (o.i = k),
          (o.w = M));
    } else {
      for (var k = o.w || 0; k < h + i; k += 65535) {
        var Ce = k + 65535;
        Ce >= h && ((f[(n / 8) | 0] = i), (Ce = h)),
          (n = Er(f, n + 1, e.subarray(k, Ce)));
      }
      o.i = h;
    }
    return Tr(d, 0, a + Zt(n) + c);
  },
  Ha = function (e, t, r, a, c) {
    if (!c && ((c = { l: 1 }), t.dictionary)) {
      var o = t.dictionary.subarray(-32768),
        h = new P(o.length + e.length);
      h.set(o), h.set(e, o.length), (e = h), (c.w = o.length);
    }
    return Ba(
      e,
      t.level == null ? 6 : t.level,
      t.mem == null
        ? c.l
          ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
          : 20
        : 12 + t.mem,
      r,
      a,
      c
    );
  };
function Va(e, t) {
  return Ha(e, t || {}, 0, 0);
}
function Pa(e, t) {
  return Ma(e, { i: 2 }, t && t.out, t && t.dictionary);
}
var qa = typeof TextDecoder < "u" && new TextDecoder(),
  Oa = 0;
try {
  qa.decode(Qr, { stream: !0 }), (Oa = 1);
} catch {}
var qn = Xt(Ca()),
  Xa = 1024,
  Ga = 1.5,
  Ft = (e) => 2 ** e - 1,
  It = (e) => -(2 ** (e - 1)),
  Ut = (e) => 2 ** (e - 1) - 1,
  ne = {
    Uint8: 0,
    Uint16: 0,
    Uint32: 0,
    Uint64: 0,
    BigUint64: 0,
    Int8: It(8),
    Int16: It(16),
    Int32: It(32),
    Int64: Number.MIN_SAFE_INTEGER,
    BigInt64: -(BigInt(2) ** BigInt(63)),
  },
  ie = {
    Uint8: Ft(8),
    Uint16: Ft(16),
    Uint32: Ft(32),
    Uint64: Number.MAX_SAFE_INTEGER,
    BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
    Int8: Ut(8),
    Int16: Ut(16),
    Int32: Ut(32),
    Int64: Number.MAX_SAFE_INTEGER,
    BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
  };
function oe(e, t, r, a) {
  W(e >= t, e, "outside lower bound for", a),
    W(e <= r, e, "outside upper bound for", a);
}
var Za = class {
  getOffset() {
    return this.offset;
  }
  slice(e = 0, t = this.offset) {
    return this.buffer.slice(e, t);
  }
  subarray(e = 0, t = this.offset) {
    return new Uint8Array(this.buffer, e, t);
  }
  ensureBufferLength(e) {
    let t = this.buffer.byteLength;
    if (this.offset + e <= t) return;
    let r = new ArrayBuffer(Math.ceil(t * Ga) + e);
    _r(this.buffer, r, 0), (this.buffer = r), (this.view = new DataView(r));
  }
  writeUint8(e) {
    oe(e, ne.Uint8, ie.Uint8, "Uint8");
    let t = H.Uint8;
    this.ensureBufferLength(t),
      this.view.setUint8(this.offset, e),
      (this.offset += t);
  }
  writeUint16(e) {
    oe(e, ne.Uint16, ie.Uint16, "Uint16");
    let t = H.Uint16;
    this.ensureBufferLength(t),
      this.view.setUint16(this.offset, e),
      (this.offset += t);
  }
  writeUint32(e) {
    oe(e, ne.Uint32, ie.Uint32, "Uint32");
    let t = H.Uint32;
    this.ensureBufferLength(t),
      this.view.setUint32(this.offset, e),
      (this.offset += t);
  }
  writeUint64(e) {
    oe(e, ne.Uint64, ie.Uint64, "Uint64");
    let t = BigInt(e);
    this.writeBigUint64(t);
  }
  writeBigUint64(e) {
    oe(e, ne.BigUint64, ie.BigUint64, "BigUint64");
    let t = H.BigUint64;
    this.ensureBufferLength(t),
      this.view.setBigUint64(this.offset, e),
      (this.offset += t);
  }
  writeInt8(e) {
    oe(e, ne.Int8, ie.Int8, "Int8");
    let t = H.Int8;
    this.ensureBufferLength(t),
      this.view.setInt8(this.offset, e),
      (this.offset += t);
  }
  writeInt16(e) {
    oe(e, ne.Int16, ie.Int16, "Int16");
    let t = H.Int16;
    this.ensureBufferLength(t),
      this.view.setInt16(this.offset, e),
      (this.offset += t);
  }
  writeInt32(e) {
    oe(e, ne.Int32, ie.Int32, "Int32");
    let t = H.Int32;
    this.ensureBufferLength(t),
      this.view.setInt32(this.offset, e),
      (this.offset += t);
  }
  writeInt64(e) {
    oe(e, ne.Int64, ie.Int64, "Int64");
    let t = BigInt(e);
    this.writeBigInt64(t);
  }
  writeBigInt64(e) {
    oe(e, ne.BigInt64, ie.BigInt64, "BigInt64");
    let t = H.BigInt64;
    this.ensureBufferLength(t),
      this.view.setBigInt64(this.offset, e),
      (this.offset += t);
  }
  writeFloat32(e) {
    let t = H.Float32;
    this.ensureBufferLength(t),
      this.view.setFloat32(this.offset, e),
      (this.offset += t);
  }
  writeFloat64(e) {
    let t = H.Float64;
    this.ensureBufferLength(t),
      this.view.setFloat64(this.offset, e),
      (this.offset += t);
  }
  writeBuffer(e) {
    let t = e.byteLength;
    this.ensureBufferLength(t),
      _r(e, this.buffer, this.offset),
      (this.offset += t);
  }
  encodeString(e) {
    let t = this.encodedStrings.get(e);
    if (t) return t;
    let r = this.encoder.encode(e);
    return this.encodedStrings.set(e, r), r;
  }
  writeString(e) {
    let t = this.encodeString(e),
      r = t.byteLength;
    this.writeUint32(r), this.writeBuffer(t);
  }
  writeJson(e) {
    let t = JSON.stringify(e);
    this.writeString(t);
  }
  constructor() {
    (this.offset = 0),
      (this.buffer = new ArrayBuffer(Xa)),
      (this.view = new DataView(this.buffer)),
      (this.encoder = new TextEncoder()),
      (this.encodedStrings = new Map());
  }
};
function _r(e, t, r) {
  let a = new Uint8Array(e);
  new Uint8Array(t).set(a, r);
}
var _e = class {
  static fromString(e) {
    let [t, r, a] = e.split("/").map(Number);
    return (
      W(wt(t), "Invalid chunkId"),
      W(wt(r), "Invalid offset"),
      W(wt(a), "Invalid length"),
      new _e(t, r, a)
    );
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e) {
    let t = e.readUint16(),
      r = e.readUint32(),
      a = e.readUint32();
    return new _e(t, r, a);
  }
  write(e) {
    e.writeUint16(this.chunkId),
      e.writeUint32(this.offset),
      e.writeUint32(this.length);
  }
  compare(e) {
    return this.chunkId < e.chunkId
      ? -1
      : this.chunkId > e.chunkId
      ? 1
      : this.offset < e.offset
      ? -1
      : this.offset > e.offset
      ? 1
      : (W(this.length === e.length), 0);
  }
  constructor(e, t, r) {
    (this.chunkId = e), (this.offset = t), (this.length = r);
  }
};
function Ct(e) {
  if (ft(e)) return 0;
  switch (e.type) {
    case u.Array:
      return 1;
    case u.Boolean:
      return 2;
    case u.Color:
      return 3;
    case u.Date:
      return 4;
    case u.Enum:
      return 5;
    case u.File:
      return 6;
    case u.ResponsiveImage:
      return 10;
    case u.Link:
      return 7;
    case u.Number:
      return 8;
    case u.Object:
      return 9;
    case u.RichText:
      return 11;
    case u.String:
      return 12;
    default:
      lt(e);
  }
}
((e) => {
  (e.read = function (t) {
    let r = t.readUint8();
    switch (r) {
      case 0:
        return null;
      case 1:
        return jt.read(t);
      case 2:
        return Wt.read(t);
      case 3:
        return Nt.read(t);
      case 4:
        return Lt.read(t);
      case 5:
        return Tt.read(t);
      case 6:
        return Et.read(t);
      case 7:
        return Qt.read(t);
      case 8:
        return Rt.read(t);
      case 9:
        return At.read(t);
      case 10:
        return Dt.read(t);
      case 11:
        return zt.read(t);
      case 12:
        return Mt.read(t);
      default:
        lt(r);
    }
  }),
    (e.write = function (t, r) {
      let a = Ct(r);
      if ((t.writeUint8(a), !ft(r)))
        switch (r.type) {
          case u.Array:
            return jt.write(t, r);
          case u.Boolean:
            return Wt.write(t, r);
          case u.Color:
            return Nt.write(t, r);
          case u.Date:
            return Lt.write(t, r);
          case u.Enum:
            return Tt.write(t, r);
          case u.File:
            return Et.write(t, r);
          case u.Link:
            return Qt.write(t, r);
          case u.Number:
            return Rt.write(t, r);
          case u.Object:
            return At.write(t, r);
          case u.ResponsiveImage:
            return Dt.write(t, r);
          case u.RichText:
            return zt.write(t, r);
          case u.String:
            return Mt.write(t, r);
          default:
            lt(r);
        }
    }),
    (e.compare = function (t, r, a) {
      let c = Ct(t),
        o = Ct(r);
      if (c < o) return -1;
      if (c > o) return 1;
      if (ft(t) || ft(r)) return 0;
      switch (t.type) {
        case u.Array:
          return W(r.type === u.Array), jt.compare(t, r, a);
        case u.Boolean:
          return W(r.type === u.Boolean), Wt.compare(t, r, a);
        case u.Color:
          return W(r.type === u.Color), Nt.compare(t, r, a);
        case u.Date:
          return W(r.type === u.Date), Lt.compare(t, r, a);
        case u.Enum:
          return W(r.type === u.Enum), Tt.compare(t, r, a);
        case u.File:
          return W(r.type === u.File), Et.compare(t, r, a);
        case u.Link:
          return W(r.type === u.Link), Qt.compare(t, r, a);
        case u.Number:
          return W(r.type === u.Number), Rt.compare(t, r, a);
        case u.Object:
          return W(r.type === u.Object), At.compare(t, r, a);
        case u.ResponsiveImage:
          return W(r.type === u.ResponsiveImage), Dt.compare(t, r, a);
        case u.RichText:
          return W(r.type === u.RichText), zt.compare(t, r, a);
        case u.String:
          return W(r.type === u.String), Mt.compare(t, r, a);
        default:
          lt(t);
      }
    });
})($ || ($ = {}));
var jt = {
    read(e) {
      let t = e.readUint16(),
        r = [];
      for (let a = 0; a < t; a++) {
        let c = $.read(e);
        r.push(c);
      }
      return { type: u.Array, value: r };
    },
    write(e, t) {
      for (let r of (e.writeUint16(t.value.length), t.value)) $.write(e, r);
    },
    compare(e, t, r) {
      let a = e.value.length,
        c = t.value.length;
      if (a < c) return -1;
      if (a > c) return 1;
      for (let o = 0; o < a; o++) {
        let h = e.value[o],
          d = t.value[o];
        W(!pe(h), "Left item must exist"), W(!pe(d), "Right item must exist");
        let f = $.compare(h, d, r);
        if (f !== 0) return f;
      }
      return 0;
    },
  },
  Wt = {
    read: (e) => ({ type: u.Boolean, value: e.readUint8() !== 0 }),
    write(e, t) {
      e.writeUint8(t.value ? 1 : 0);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Nt = {
    read: (e) => ({ type: u.Color, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Lt = {
    read(e) {
      let t = e.readInt64(),
        r = new Date(t);
      return { type: u.Date, value: r.toISOString() };
    },
    write(e, t) {
      let r = new Date(t.value),
        a = r.getTime();
      e.writeInt64(a);
    },
    compare(e, t) {
      let r = new Date(e.value),
        a = new Date(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  Tt = {
    read: (e) => ({ type: u.Enum, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Et = {
    read: (e) => ({ type: u.File, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  Qt = {
    read: (e) => ({ type: u.Link, value: e.readJson() }),
    write(e, t) {
      e.writeJson(t.value);
    },
    compare(e, t) {
      let r = JSON.stringify(e.value),
        a = JSON.stringify(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  Rt = {
    read: (e) => ({ type: u.Number, value: e.readFloat64() }),
    write(e, t) {
      e.writeFloat64(t.value);
    },
    compare: (e, t) => (e.value < t.value ? -1 : e.value > t.value ? 1 : 0),
  },
  At = {
    read(e) {
      let t = e.readUint16(),
        r = {};
      for (let a = 0; a < t; a++) {
        let c = e.readString();
        r[c] = $.read(e);
      }
      return { type: u.Object, value: r };
    },
    write(e, t) {
      let r = Object.entries(t.value);
      for (let [a, c] of (e.writeUint16(r.length), r))
        e.writeString(a), $.write(e, c);
    },
    compare(e, t, r) {
      let a = Object.keys(e.value).sort(),
        c = Object.keys(t.value).sort();
      if (a.length < c.length) return -1;
      if (a.length > c.length) return 1;
      for (let o = 0; o < a.length; o++) {
        let h = a[o],
          d = c[o];
        if (
          (W(!pe(h), "Left key must exist"),
          W(!pe(d), "Left key must exist"),
          h < d)
        )
          return -1;
        if (h > d) return 1;
        let f = e.value[h],
          i = t.value[d];
        W(!pe(f), "Left value must exist"), W(!pe(i), "Right value must exist");
        let n = $.compare(f, i, r);
        if (n !== 0) return n;
      }
      return 0;
    },
  },
  Dt = {
    read: (e) => ({ type: u.ResponsiveImage, value: e.readJson() }),
    write(e, t) {
      e.writeJson(t.value);
    },
    compare(e, t) {
      let r = JSON.stringify(e.value),
        a = JSON.stringify(t.value);
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  zt = {
    read: (e) => ({ type: u.RichText, value: e.readUint32() }),
    write(e, t) {
      e.writeUint32(t.value);
    },
    compare(e, t) {
      let r = e.value,
        a = t.value;
      return r < a ? -1 : r > a ? 1 : 0;
    },
  },
  Mt = {
    read: (e) => ({ type: u.String, value: e.readString() }),
    write(e, t) {
      e.writeString(t.value);
    },
    compare(e, t, r) {
      let a = e.value,
        c = t.value;
      return (
        r.type === 0 &&
          ((a = e.value.toLowerCase()), (c = t.value.toLowerCase())),
        a < c ? -1 : a > c ? 1 : 0
      );
    },
  };
var Ja = Xt(La()),
  Oe = `\r
`,
  st = "--";
async function Ya(e, t) {
  let r = await fetch(e, { headers: { Range: rn(t) } });
  if (!r.ok) throw Error(`Request failed: ${r.status} ${r.statusText}`);
  let a = await r.arrayBuffer(),
    c = new Uint8Array(a);
  if (r.status === 200)
    return t.map((o) => {
      if (o.to > c.length) throw Error("Missing data");
      return c.slice(o.from, o.to);
    });
  if (r.status === 206) {
    let o = r.headers.get("Content-Type");
    if (!o) throw Error("Missing Content-Type header");
    let h = new en(),
      d = new Ja.default(o);
    if (d.type === "multipart" && d.subtype === "byteranges") {
      let f = d.parameters.get("boundary");
      if (!f) throw Error("Missing boundary parameter");
      let i = $a(c, f);
      for (let { headers: n, body: s } of i) {
        let l = n.get("Content-Range");
        if (!l) throw Error("Missing Content-Range header");
        let p = kr(l);
        if (p.unit !== "bytes") throw Error("Unsupported unit");
        h.write(p.start, s);
      }
    } else {
      let f = r.headers.get("Content-Range");
      if (!f) throw Error("Missing Content-Range header");
      let i = kr(f);
      if (i.unit !== "bytes") throw Error("Unsupported unit");
      h.write(i.start, c);
    }
    return t.map((f) => h.read(f.from, f.to - f.from));
  }
  throw Error(`Unsupported response: ${r.status} ${r.statusText}`);
}
var Xe = new TextEncoder(),
  Ka = new TextDecoder();
function $a(e, t) {
  let r = Xe.encode(st + t),
    a = qt(e, r);
  if (pe(a)) throw Error("Missing parts start");
  let c = a + r.length,
    o = Xe.encode(Oe + st + t + st),
    h = tn(e, o);
  if (pe(h)) throw Error("Missing parts end");
  let d = Xe.encode(Oe + st + t),
    f = e.subarray(c, h);
  return Fr(f, d).map((n) => {
    let s = Xe.encode(Oe + Oe),
      l = qt(n, s);
    if (pe(l)) throw Error("Missing headers end");
    let p = Xe.encode(Oe),
      v = n.subarray(0, l),
      g = Fr(v, p),
      y = new Headers();
    for (let F of g) {
      let I = Ka.decode(F),
        [_, x] = I.split(": ", 2);
      _ && x && y.append(_, x);
    }
    let w = l + s.length,
      b = n.slice(w);
    return { headers: y, body: b };
  });
}
function kr(e) {
  let t = RegExp(
    "^(?<unit>\\w+) (?<start>\\d+)-(?<end>\\d+)\\/(?<size>\\d+|\\*)$",
    "u"
  ).exec(e);
  if (!t || !t.groups) throw Error("Invalid Content-Range header");
  let { unit: r, start: a, end: c, size: o } = t.groups;
  return {
    unit: r,
    start: Number(a),
    end: Number(c),
    size: o !== "*" ? Number(o) : null,
  };
}
var en = class {
  read(e, t) {
    for (let r of this.chunks) {
      if (e < r.start) break;
      if (e > r.end) continue;
      if (e + t > r.end) break;
      let a = e - r.start,
        c = a + t;
      return r.data.slice(a, c);
    }
    throw Error("Missing data");
  }
  write(e, t) {
    let r = e,
      a = r + t.length,
      c = 0,
      o = this.chunks.length;
    for (; c < o; c++) {
      let f = this.chunks[c];
      if ((W(f, "Missing chunk"), !(r > f.end))) {
        if (r > f.start) {
          let i = r - f.start,
            n = f.data.subarray(0, i);
          (t = Ir(n, t)), (r = f.start);
        }
        break;
      }
    }
    for (; o > c; o--) {
      let f = this.chunks[o - 1];
      if ((W(f, "Missing chunk"), !(a < f.start))) {
        if (a < f.end) {
          let i = a - f.start,
            n = f.data.subarray(i);
          (t = Ir(t, n)), (a = f.end);
        }
        break;
      }
    }
    let h = { start: r, end: a, data: t },
      d = o - c;
    this.chunks.splice(c, d, h);
  }
  constructor() {
    this.chunks = [];
  }
};
function Fr(e, t) {
  var r;
  let a = [];
  for (; e.length > 0; ) {
    let c = (r = qt(e, t)) != null ? r : e.length,
      o = e.subarray(0, c);
    a.push(o), (e = e.subarray(c + t.length));
  }
  return a;
}
function qt(e, t) {
  for (let r = 0; r < e.length - t.length; r++) {
    let a = e.subarray(r);
    if (Rr(a, t)) return r;
  }
}
function tn(e, t) {
  for (let r = e.length - t.length; r >= 0; r--) {
    let a = e.subarray(r);
    if (Rr(a, t)) return r;
  }
}
function Rr(e, t) {
  for (let r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Ir(e, t) {
  let r = e.length + t.length,
    a = new Uint8Array(r);
  return a.set(e, 0), a.set(t, e.length), a;
}
function rn(e) {
  W(e.length > 0, "Must have at least one range");
  let t = [...e].sort((c, o) => c.from - o.from),
    r = [];
  for (let c of t) {
    let o = r.length - 1,
      h = r[o];
    h && c.from <= h.to
      ? (r[o] = { from: h.from, to: Math.max(h.to, c.to) })
      : r.push(c);
  }
  return `bytes=${r.map((c) => `${c.from}-${c.to - 1}`).join(",")}`;
}
var Ot = class {
    static read(e, t) {
      let r = new Ot(),
        a = e.readUint32(),
        c = e.readBuffer(a),
        o = Pa(new Uint8Array(c), { dictionary: t }),
        h = new St(o.buffer),
        d = h.readUint16();
      for (let f = 0; f < d; f++) {
        let i = h.readString(),
          n = $.read(h);
        r.setField(i, n);
      }
      return r;
    }
    writeUncompressed(e) {
      for (let [t, r] of (e.writeUint16(this.fields.size), this.fields))
        e.writeString(t), $.write(e, r);
    }
    write(e, t) {
      let r = new Za();
      this.writeUncompressed(r);
      let a = Va(r.subarray(), { dictionary: t });
      e.writeUint32(a.byteLength), e.writeBuffer(a);
    }
    getData() {
      let e = {};
      for (let [t, r] of this.fields) e[t] = r;
      return e;
    }
    setField(e, t) {
      this.fields.set(e, t);
    }
    getField(e) {
      return this.fields.get(e);
    }
    constructor() {
      this.fields = new Map();
    }
  },
  an = class {
    scanItems() {
      return (
        this.itemsPromise != null ||
          (this.itemsPromise = Promise.all([
            fetch(this.url),
            this.getCompressionDictionary(),
          ]).then(async ([e, t]) => {
            if (!e.ok)
              throw Error(`Request failed: ${e.status} ${e.statusText}`);
            let r = await e.arrayBuffer(),
              a = new St(r),
              c = [],
              o = a.readUint32();
            for (let h = 0; h < o; h++) {
              let d = a.getOffset(),
                f = Ot.read(a, t),
                i = a.getOffset() - d,
                n = new _e(this.id, d, i),
                s = n.toString(),
                l = { pointer: s, data: f.getData() };
              this.itemLoader.prime(s, l), c.push(l);
            }
            return c;
          })),
        this.itemsPromise
      );
    }
    resolveItem(e) {
      return this.itemLoader.load(e);
    }
    getCompressionDictionary() {
      let e = this.compressionDictionaryCache.get(
        this.compressionDictionaryUrl
      );
      if (e) return e;
      let t = fetch(this.compressionDictionaryUrl).then(async (r) => {
        if (!r.ok)
          throw Error(
            `Compression dictionary request failed: ${r.status} ${r.statusText}`
          );
        let a = await r.arrayBuffer();
        return new Uint8Array(a);
      });
      return (
        this.compressionDictionaryCache.set(this.compressionDictionaryUrl, t), t
      );
    }
    constructor(e, t, r, a) {
      (this.id = e),
        (this.url = t),
        (this.compressionDictionaryUrl = r),
        (this.compressionDictionaryCache = a),
        (this.itemLoader = new Ta.default(async (c) => {
          let o = c.map((f) => {
              let i = _e.fromString(f);
              return { from: i.offset, to: i.offset + i.length };
            }),
            [h, d] = await Promise.all([
              Ya(this.url, o),
              this.getCompressionDictionary(),
            ]);
          return h.map((f, i) => {
            let n = new St(f.buffer),
              s = Ot.read(n, d),
              l = c[i];
            return W(l, "Missing pointer"), { pointer: l, data: s.getData() };
          });
        }));
    }
  },
  Ar = class {
    async scanItems() {
      return (
        await Promise.all(this.chunks.map(async (t) => t.scanItems()))
      ).flat();
    }
    async resolveItems(e) {
      return Promise.all(
        e.map((t) => {
          let r = _e.fromString(t),
            a = this.chunks[r.chunkId];
          return W(a, "Missing chunk"), a.resolveItem(t);
        })
      );
    }
    compareItems(e, t) {
      let r = _e.fromString(e.pointer),
        a = _e.fromString(t.pointer);
      return r.compare(a);
    }
    compareValues(e, t, r) {
      return $.compare(e, t, r);
    }
    constructor(e) {
      (this.options = e),
        (this.schema = this.options.schema),
        (this.indexes = this.options.indexes),
        (this.resolveRichText = this.options.resolveRichText);
      let t = new Map();
      this.chunks = this.options.chunks.map(
        (r, a) => new an(a, r, this.options.compressionDictionary, t)
      );
    }
  };
/*! Bundled license information:

splaytree/dist/splay.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)
*/ var Jt = (e, t) => async () => (await e())[t],
  Yt = () => import("./FqozOcyT6-2-4LOFSRUD.mjs"),
  nn = [Jt(Yt, "richText"), Jt(Yt, "richText1"), Jt(Yt, "richText2")];
async function Dr(e) {
  let t = nn[e];
  if (t) return await t();
}
var on = {
    appE1OggR: { isNullable: !0, type: u.ResponsiveImage },
    eDDoViJou: { isNullable: !0, type: u.RichText },
    F8jCfieHR: { isNullable: !0, type: u.String },
    id: { isNullable: !1, type: u.String },
    IIE0MHNrM: { isNullable: !0, type: u.RichText },
    JKr93a93y: { isNullable: !0, type: u.RichText },
    l0ACDgFnw: { isNullable: !0, type: u.ResponsiveImage },
    m3XKkRLkA: { isNullable: !0, type: u.String },
    Mu7gQ2bFu: { isNullable: !0, type: u.ResponsiveImage },
    nextItemId: { isNullable: !0, type: u.String },
    previousItemId: { isNullable: !0, type: u.String },
    qM3dnd_Ox: { isNullable: !0, type: u.String },
    SftZQchiS: { isNullable: !0, type: u.ResponsiveImage },
    Vsrs1P4VA: { isNullable: !0, type: u.ResponsiveImage },
    wqVDsNwny: { isNullable: !0, type: u.String },
    zry2UxVVU: { isNullable: !0, type: u.Boolean },
  },
  fi = new lr(),
  zr = {
    collectionByLocaleId: {
      default: new Ar({
        chunks: [
          new URL(
            "./FqozOcyT6-chunk-default-0.framercms",
            "https://framerusercontent.com/modules/mWxOMCTiKuMj3gi6nLmo/HvB8iaT2OQIabjVAWs2f/FqozOcyT6.js"
          ).href,
        ],
        compressionDictionary: new URL(
          "./FqozOcyT6-chunk-default-dict.framercms",
          "https://framerusercontent.com/modules/mWxOMCTiKuMj3gi6nLmo/HvB8iaT2OQIabjVAWs2f/FqozOcyT6.js"
        ).href,
        indexes: [],
        resolveRichText: Dr,
        schema: on,
      }),
    },
    displayName: "Project Details",
  },
  Mr = zr;
Te(zr, {
  wqVDsNwny: { defaultValue: "", title: "Title", type: u.String },
  qM3dnd_Ox: { title: "Slug", type: u.String },
  m3XKkRLkA: {
    defaultValue: "",
    displayTextArea: !1,
    placeholder: "Label",
    title: "Label",
    type: u.String,
  },
  l0ACDgFnw: { title: "Hero Image", type: u.ResponsiveImage },
  F8jCfieHR: {
    defaultValue:
      "Briefly describe the project here. This will appear on the thumbnail of the project.",
    displayTextArea: !0,
    placeholder:
      "Briefly describe the project here. This will appear on the thumbnail of the project.",
    title: "Description",
    type: u.String,
  },
  zry2UxVVU: { defaultValue: !0, title: "Featured", type: u.Boolean },
  SftZQchiS: {
    __defaultAssetReference:
      "data:framer/asset-reference,ujOzA7aVAdk648gIkn9xIPeeGk.jpg?originalFilename=photo-1587355760421-b9de3226a046%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw1fHx1c2VyJTIwcmVzZWFyY2h8ZW58MHx8fHwxNjg2MzkxODg3fDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image 2",
    type: u.ResponsiveImage,
  },
  appE1OggR: {
    __defaultAssetReference:
      "data:framer/asset-reference,I8uoM08Dz5wEhOeO7jxGdv8SA54.jpg?originalFilename=photo-1634245482394-1bcf5ccffcc0%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWV8ZW58MHx8fHwxNjg2MzkxODk2fDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image 3",
    type: u.ResponsiveImage,
  },
  Mu7gQ2bFu: {
    __defaultAssetReference:
      "data:framer/asset-reference,rR9q9FVDtZWp4MLnprxAOre5Q.jpg?originalFilename=photo-1551033406-611cf9a28f67%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwxNXx8d2Vic2l0ZXxlbnwwfHx8fDE2ODYzNDY3NDd8MA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image 4",
    type: u.ResponsiveImage,
  },
  Vsrs1P4VA: {
    __defaultAssetReference:
      "data:framer/asset-reference,UrE8fbg3odfK7OBCLHUIxTrmvWA.jpg?originalFilename=photo-1551650975-87deedd944c3%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwzfHxhcHAlMjBkZXNpZ258ZW58MHx8fHwxNjg2MzkxOTgzfDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    title: "Image 5",
    type: u.ResponsiveImage,
  },
  eDDoViJou: { defaultValue: "", title: "Content", type: u.RichText },
  JKr93a93y: { defaultValue: "", title: "Content 2", type: u.RichText },
  IIE0MHNrM: { defaultValue: "", title: "Content 3", type: u.RichText },
  previousItemId: {
    dataIdentifier: "local-module:collection/FqozOcyT6:default",
    title: "Previous",
    type: u.CollectionReference,
  },
  nextItemId: {
    dataIdentifier: "local-module:collection/FqozOcyT6:default",
    title: "Next",
    type: u.CollectionReference,
  },
});
rt.loadFonts(["GF;Gaegu-700"]);
var Sr = [
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
  Br = [
    '.framer-oFTJT .framer-styles-preset-1f1tf1v:not(.rich-text-wrapper), .framer-oFTJT .framer-styles-preset-1f1tf1v.rich-text-wrapper h4 { --framer-font-family: "Gaegu", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, #474747); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  Hr = "framer-oFTJT";
var ln = fe(yt),
  fn = fe(vt),
  cn = Se(Be),
  Vr = Se(B),
  Kt = Se(S.a),
  $t = Se(S.div),
  mn = fe(ae),
  pn = fe(xt),
  hn = {
    b8XxL5S5h: "(min-width: 810px) and (max-width: 1199px)",
    tTpvab21g: "(min-width: 1200px)",
    WE2cHsKNG: "(max-width: 809px)",
  },
  un = () => typeof document < "u",
  Pr = "framer-9QWhp",
  dn = {
    b8XxL5S5h: "framer-v-mantp7",
    tTpvab21g: "framer-v-1vark51",
    WE2cHsKNG: "framer-v-bihej8",
  },
  Fe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 40,
  },
  Ze = { damping: 24, delay: 0, mass: 4, stiffness: 300, type: "spring" },
  ht = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ze,
    x: 0,
    y: 40,
  },
  gn = (e, t) => {
    if (!(!e || typeof e != "object")) return { ...e, alt: t };
  },
  Or = { damping: 24, delay: 0.1, mass: 4, stiffness: 300, type: "spring" },
  yn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Or,
    x: 0,
    y: 40,
  },
  Xr = { damping: 24, delay: 0.15, mass: 4, stiffness: 300, type: "spring" },
  xn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Xr,
    x: 0,
    y: 40,
  },
  Gr = { damping: 24, delay: 0.2, mass: 4, stiffness: 300, type: "spring" },
  vn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Gr,
    x: 0,
    y: 40,
  };
var qr = (e) => e.preventDefault(),
  Zr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  wn = {
    opacity: 1,
    rotate: -5,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Zr,
  },
  Jr = { damping: 27, delay: 0, mass: 6, stiffness: 300, type: "spring" },
  bn = {
    boxShadow: "0px 24px 14px -14px rgba(64, 49, 160, 0.34)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Jr,
  },
  _n = {
    opacity: 1,
    rotate: 3,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Zr,
  },
  kn = {
    boxShadow: "0px 24px 14px -14px rgba(64, 49, 160, 0.34)",
    opacity: 1,
    rotate: 8,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Jr,
  },
  Fn = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  In = ({ query: e, pageSize: t, children: r }) => {
    let a = cr(e);
    return r(a);
  },
  er = at(),
  Un = { Desktop: "tTpvab21g", Phone: "WE2cHsKNG", Tablet: "b8XxL5S5h" },
  Cn = ({ height: e, id: t, width: r, ...a }) => {
    var c, o;
    return {
      ...a,
      variant:
        (o = (c = Un[a.variant]) !== null && c !== void 0 ? c : a.variant) !==
          null && o !== void 0
          ? o
          : "tTpvab21g",
    };
  },
  jn = je(function (e, t) {
    let { activeLocale: r, setLocale: a } = Le(),
      {
        style: c,
        className: o,
        layoutId: h,
        variant: d,
        l0ACDgFnwRvb2do8fu: f,
        wqVDsNwnyRvb2do8fu: i,
        F8jCfieHRRvb2do8fu: n,
        idRvb2do8fu: s,
        qM3dnd_OxRvb2do8fu: l,
        ...p
      } = Cn(e);
    tr(() => {
      let k = at(void 0, r);
      if (k.robots) {
        let E = document.querySelector('meta[name="robots"]');
        E
          ? E.setAttribute("content", k.robots)
          : ((E = document.createElement("meta")),
            E.setAttribute("name", "robots"),
            E.setAttribute("content", k.robots),
            document.head.appendChild(E));
      }
    }, [void 0, r]),
      rr(() => {
        let k = at(void 0, r);
        if (((document.title = k.title || ""), k.viewport)) {
          var E;
          (E = document.querySelector('meta[name="viewport"]')) === null ||
            E === void 0 ||
            E.setAttribute("content", k.viewport);
        }
        let M = k.bodyClassName;
        if (M) {
          let U = document.body;
          U.classList.forEach(
            (N) => N.startsWith("framer-body-") && U.classList.remove(N)
          ),
            U.classList.add(`${k.bodyClassName}-framer-9QWhp`);
        }
        return () => {
          M &&
            document.body.classList.remove(`${k.bodyClassName}-framer-9QWhp`);
        };
      }, [void 0, r]);
    let [v, g] = fr(d, hn, !1),
      y = void 0,
      w = he(null),
      b = gt("uxagOj4fK"),
      F = he(null),
      I = gt("U2jNjDVg_"),
      _ = he(null),
      x = () => (un() ? v !== "WE2cHsKNG" : !0),
      j = We(),
      C = [ur, ot, Hr];
    return (
      nr({}),
      m(ir.Provider, {
        value: { primaryVariantId: "tTpvab21g", variantClassNames: dn },
        children: D(ge, {
          id: h ?? j,
          children: [
            D(S.div, {
              ...p,
              className: ye(Pr, ...C, "framer-1vark51", o),
              ref: t ?? w,
              style: { ...c },
              children: [
                m(te, {
                  children: m(Be, {
                    className: "framer-1logr6e-container",
                    "data-framer-name": "BG",
                    name: "BG",
                    children: m(yt, {
                      backgroundColor:
                        "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                      dotColor:
                        "var(--token-3cbcd694-156f-407b-a77a-fba33cbececa, rgb(234, 234, 241))",
                      height: "100%",
                      id: "susz92Z9n",
                      layoutId: "susz92Z9n",
                      name: "BG",
                      showGrid: !0,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                D("div", {
                  className: "framer-ts3711",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    m("header", {
                      className: "framer-7novs4",
                      "data-framer-name": "Home",
                      id: b,
                      name: "Home",
                      ref: F,
                      children: m("div", {
                        className: "framer-blnhdh",
                        "data-framer-name": "Hero Container",
                        name: "Hero Container",
                        children: D("div", {
                          className: "framer-1cxumfg",
                          "data-framer-name": "Text Container",
                          name: "Text Container",
                          children: [
                            m("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "16px",
                                width: "100%",
                              },
                              children: [
                                m(re, {
                                  breakpoint: v,
                                  overrides: {
                                    WE2cHsKNG: {
                                      children: m(L, {
                                        children: m("h1", {
                                          className:
                                            "framer-styles-preset-1j9b4gv",
                                          "data-styles-preset": "vARiXVAPs",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            display: "inline",
                                          },
                                          children: "Welcome to",
                                        }),
                                      }),
                                    },
                                  },
                                  children: m(B, {
                                    __fromCanvasComponent: !0,
                                    children: m(L, {
                                      children: m("h1", {
                                        className:
                                          "framer-styles-preset-1j9b4gv",
                                        "data-styles-preset": "vARiXVAPs",
                                        style: {
                                          display: "inline",
                                        },
                                        children: "Welcome to",
                                      }),
                                    }),
                                    className: "framer-1kj8aat",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                m("img", {
                                  src: "/images/text.gif",
                                  alt: "TUZKI",
                                  style: {
                                    width: "50%",
                                  },
                                }),
                              ],
                            }),
                            m(B, {
                              __fromCanvasComponent: !0,
                              children: m(L, {
                                children: m("p", {
                                  style: {
                                    "--font-selector": "R0Y7R2FlZ3UtNzAw",
                                    "--framer-font-family":
                                      '"Gaegu", sans-serif',
                                    "--framer-font-size": "24px",
                                    "--framer-font-weight": "700",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-ee88d82e-f586-4351-9e0d-739b0761209d, rgb(138, 138, 138))",
                                  },
                                  children:
                                    "NUDAENG - a popular soft toy that has captured the hearts of many people and become world famous",
                                }),
                              }),
                              className: "framer-7rcg9x",
                              fonts: ["GF;Gaegu-700"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            m(re, {
                              breakpoint: v,
                              overrides: { WE2cHsKNG: { y: 664.4 } },
                              children: m(te, {
                                height: 231,
                                y: 491.70000000000005,
                                children: m(cn, {
                                  __framer__animate: { transition: Ze },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Fe,
                                  __framer__exit: ht,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-16zhdjl-container",
                                  style: {
                                    transformPerspective: 1200,
                                  },
                                  children: m(vt, {
                                    akGVifb33: gn(
                                      {
                                        src: "images/st1.png",
                                      },
                                      ""
                                    ),
                                    height: "100%",
                                    id: "uSBxVRpQa",
                                    layoutId: "uSBxVRpQa",
                                    LCkifZlII: m("p", {
                                      style: {
                                        marginLeft: "24px",
                                      },
                                      children: "NUDAENG",
                                    }),
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    m("section", {
                      className: "framer-kpdz8l",
                      "data-framer-name": "About",
                      id: I,
                      name: "About",
                      ref: _,
                      children: D("div", {
                        className: "framer-hi86wo",
                        "data-framer-name": "Section 2",
                        name: "Section 2",
                        children: [
                          D("div", {
                            className: "framer-fbxwaa",
                            "data-framer-name": "Skills",
                            name: "Skills",
                            children: [
                              m(re, {
                                breakpoint: v,
                                overrides: {
                                  WE2cHsKNG: {
                                    children: m(L, {
                                      children: m("h3", {
                                        className:
                                          "framer-styles-preset-w70ck1",
                                        "data-styles-preset": "VIwvDOi2B",
                                        style: {
                                          "--framer-text-alignment": "center",
                                        },
                                        children: "Links",
                                      }),
                                    }),
                                  },
                                },
                                children: m(Vr, {
                                  __framer__animate: { transition: Ze },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Fe,
                                  __framer__exit: ht,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: m(L, {
                                    children: m("h3", {
                                      className: "framer-styles-preset-w70ck1",
                                      "data-styles-preset": "VIwvDOi2B",
                                      children: "Links",
                                    }),
                                  }),
                                  className: "framer-126c0vm",
                                  fonts: ["Inter"],
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              m("div", {
                                className: "framer-106m5yk",
                                "data-framer-name": "Labels",
                                name: "Labels",
                                children: D("div", {
                                  className: "framer-1l741h9",
                                  "data-framer-name": "Row",
                                  name: "Row",
                                  children: [
                                    m(Qe, {
                                      href: "https://x.com/nudaeng_club",
                                      nodeId: "YzJhKtPSZ",
                                      children: m(Kt, {
                                        __framer__animate: { transition: Or },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Fe,
                                        __framer__exit: yn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className:
                                          "framer-1pzi5yv framer-14ssoqx",
                                        "data-border": !0,
                                        "data-framer-name": "Label",
                                        name: "Label",
                                        style: { transformPerspective: 1200 },
                                        children: m(B, {
                                          __fromCanvasComponent: !0,
                                          children: m(L, {
                                            children: m("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7R2FlZ3UtNzAw",
                                                "--framer-font-family":
                                                  '"Gaegu", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "700",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                                              },
                                              children: "x.com",
                                            }),
                                          }),
                                          className: "framer-b7tmp8",
                                          fonts: ["GF;Gaegu-700"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    m(Qe, {
                                      href: "https://dexscreener.com/solana/CFWnvL9gvg2KiRUZjUm4ARQesJqD2PUrkhyjB9ENpump",
                                      nodeId: "vTADYutR9",
                                      children: m(Kt, {
                                        __framer__animate: { transition: Xr },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Fe,
                                        __framer__exit: xn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className:
                                          "framer-in4qdh framer-14ssoqx",
                                        "data-border": !0,
                                        "data-framer-name": "Label",
                                        name: "Label",
                                        style: { transformPerspective: 1200 },
                                        children: m(B, {
                                          __fromCanvasComponent: !0,
                                          children: m(L, {
                                            children: m("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7R2FlZ3UtNzAw",
                                                "--framer-font-family":
                                                  '"Gaegu", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "700",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                                              },
                                              children: "dexscreener",
                                            }),
                                          }),
                                          className: "framer-182nzpk",
                                          fonts: ["GF;Gaegu-700"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                    m(Qe, {
                                      href: "https://t.me/nudaeng_club",
                                      nodeId: "eBaMTpM2g",
                                      children: m(Kt, {
                                        __framer__animate: { transition: Gr },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Fe,
                                        __framer__exit: vn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className:
                                          "framer-pgbwoa framer-14ssoqx",
                                        "data-border": !0,
                                        "data-framer-name": "Label",
                                        name: "Label",
                                        style: { transformPerspective: 1200 },
                                        children: m(B, {
                                          __fromCanvasComponent: !0,
                                          children: m(L, {
                                            children: m("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7R2FlZ3UtNzAw",
                                                "--framer-font-family":
                                                  '"Gaegu", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "700",
                                                "--framer-text-alignment":
                                                  "left",
                                                "--framer-text-color":
                                                  "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                                              },
                                              children: "telegram",
                                            }),
                                          }),
                                          className: "framer-4s7mc0",
                                          fonts: ["GF;Gaegu-700"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          D("div", {
                            className: "framer-9si3ry",
                            "data-framer-name": "Experience",
                            name: "Experience",
                            children: [
                              m(re, {
                                breakpoint: v,
                                overrides: {
                                  WE2cHsKNG: {
                                    children: m(L, {
                                      children: m("h3", {
                                        className:
                                          "framer-styles-preset-w70ck1",
                                        "data-styles-preset": "VIwvDOi2B",
                                        style: {
                                          "--framer-text-alignment": "center",
                                        },
                                        children: "Tokenomics",
                                      }),
                                    }),
                                  },
                                },
                                children: m(Vr, {
                                  __framer__animate: { transition: Ze },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Fe,
                                  __framer__exit: ht,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: m(L, {
                                    children: m("h3", {
                                      className: "framer-styles-preset-w70ck1",
                                      "data-styles-preset": "VIwvDOi2B",
                                      children: "Tokenomics",
                                    }),
                                  }),
                                  className: "framer-1imgrv5",
                                  fonts: ["Inter"],
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              D($t, {
                                __framer__animate: { transition: Ze },
                                __framer__animateOnce: !0,
                                __framer__enter: Fe,
                                __framer__exit: ht,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1x8tdpl",
                                "data-framer-name": "Job",
                                name: "Job",
                                style: { transformPerspective: 1200 },
                                children: [
                                  m(B, {
                                    __fromCanvasComponent: !0,
                                    children: m(L, {
                                      children: m("h4", {
                                        className:
                                          "framer-styles-preset-1f1tf1v",
                                        "data-styles-preset": "FlsXjRzar",
                                        children: "1B - Supply",
                                      }),
                                    }),
                                    className: "framer-1md60jz",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  D("div", {
                                    className: "framer-1xv28g3",
                                    "data-framer-name": "Position",
                                    name: "Position",
                                    children: [
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: m("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, rgb(71, 71, 71))",
                                            },
                                            children: "100%",
                                          }),
                                        }),
                                        className: "framer-17sxrna",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: m("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment": "left",
                                              "--framer-text-color":
                                                "var(--token-ee88d82e-f586-4351-9e0d-739b0761209d, rgb(140, 143, 166))",
                                            },
                                            children: "Community Owned",
                                          }),
                                        }),
                                        className: "framer-s870ec",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    m(re, {
                      breakpoint: v,
                      overrides: {
                        WE2cHsKNG: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 132,
                            intrinsicWidth: 132,
                            loading: G(1693),
                            pixelHeight: 640,
                            pixelWidth: 640,
                            sizes: "202px",
                            src: "images/gif1.gif",
                          },
                        },
                      },
                      children: m(ue, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 132,
                          intrinsicWidth: 132,
                          loading: G(1433),
                          pixelHeight: 640,
                          pixelWidth: 640,
                          sizes: "202px",
                          src: "images/gif1.gif",
                        },
                        className: "framer-74chw9",
                        "data-framer-name": "Tuzki",
                        name: "Tuzki",
                      }),
                    }),
                    D("section", {
                      className: "framer-1o012ut",
                      children: [
                        D("div", {
                          className: "framer-4z4bpm",
                          "data-framer-name": "Hero",
                          name: "Hero",
                          children: [
                            m(re, {
                              breakpoint: v,
                              overrides: {
                                WE2cHsKNG: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 8192,
                                    intrinsicWidth: 5464,
                                    loading: G(2095),
                                    pixelHeight: 8192,
                                    pixelWidth: 5464,
                                    sizes: "100vw",
                                    src: "https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg",
                                    srcSet:
                                      "https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=1024 683w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=2048 1366w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=4096 2732w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg 5464w",
                                  },
                                },
                              },
                              children: m("div", {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 8192,
                                  intrinsicWidth: 5464,
                                  loading: G(1705),
                                  pixelHeight: 8192,
                                  pixelWidth: 5464,
                                  sizes: "720px",
                                  src: "https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg",
                                  srcSet:
                                    "https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=1024 683w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=2048 1366w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg?scale-down-to=4096 2732w,https://framerusercontent.com/images/bnFF1qk2J7hZC6Xzrq5XIOFEH8.jpg 5464w",
                                },
                                className: "framer-d42rj0",
                                "data-framer-name": "Hero Image",
                                name: "Hero Image",
                                children: m(re, {
                                  breakpoint: v,
                                  overrides: {
                                    WE2cHsKNG: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 3456,
                                        intrinsicWidth: 5184,
                                        loading: G(2095),
                                        pixelHeight: 500,
                                        pixelWidth: 1500,
                                        sizes: "100vw",
                                        src: "images/tv.gif",
                                      },
                                    },
                                  },
                                  children: m(ue, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 3456,
                                      intrinsicWidth: 5184,
                                      loading: G(1705),
                                      pixelHeight: 500,
                                      pixelWidth: 1500,
                                      sizes: "720px",
                                      src: "images/tv.gif",
                                    },
                                    className: "framer-1c76n39",
                                    "data-framer-name": "Hero Image",
                                    name: "Hero Image",
                                  }),
                                }),
                              }),
                            }),
                            D("div", {
                              className: "framer-1fc4x0t",
                              "data-framer-name": "Stickies Container",
                              name: "Stickies Container",
                              children: [
                                m(re, {
                                  breakpoint: v,
                                  overrides: {
                                    WE2cHsKNG: { style: { rotate: -3 } },
                                  },
                                  children: D($t, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1j29b64",
                                    "data-framer-name": "Sticky",
                                    drag: !0,
                                    dragMomentum: !1,
                                    name: "Sticky",
                                    onMouseDown: qr,
                                    style: { rotate: -5 },
                                    whileHover: wn,
                                    whileTap: bn,
                                    children: [
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: m("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "52px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                                            },
                                            children: "1B",
                                          }),
                                        }),
                                        className: "framer-1cpdk9b",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: m("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                                            },
                                            children: "supply",
                                          }),
                                        }),
                                        className: "framer-1erx0tw",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                m(re, {
                                  breakpoint: v,
                                  overrides: { WE2cHsKNG: { style: {} } },
                                  children: D($t, {
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-zbj0sa",
                                    "data-framer-name": "Sticky",
                                    drag: !0,
                                    dragMomentum: !1,
                                    name: "Sticky",
                                    onMouseDown: qr,
                                    style: { rotate: 3 },
                                    whileHover: _n,
                                    whileTap: kn,
                                    children: [
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: m("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "33px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                                            },
                                            children: "100%",
                                          }),
                                        }),
                                        className: "framer-jp730o",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      m(B, {
                                        __fromCanvasComponent: !0,
                                        children: m(L, {
                                          children: D("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7R2FlZ3UtNzAw",
                                              "--framer-font-family":
                                                '"Gaegu", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "700",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255))",
                                            },
                                            children: [
                                              "community",
                                              m("br", {}),
                                              "owned",
                                            ],
                                          }),
                                        }),
                                        className: "framer-g48jx",
                                        fonts: ["GF;Gaegu-700"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            x() &&
                              m(te, {
                                children: m(Be, {
                                  className:
                                    "framer-833i3q-container hidden-bihej8",
                                  "data-framer-name": "Animation",
                                  name: "Animation",
                                  style: { rotate: 119 },
                                  children: m(ae, {
                                    height: "100%",
                                    id: "KGLd0Ih_0",
                                    isForwardsDirection: !0,
                                    layoutId: "KGLd0Ih_0",
                                    loop: !0,
                                    name: "Animation",
                                    playing: !0,
                                    poster: "Auto",
                                    posterProgress: 0,
                                    progress: 0,
                                    speed: 1,
                                    srcFile:
                                      "https://framerusercontent.com/assets/ajeNQbKVMKbuzvrQoj4MEV7SjlE.json",
                                    srcType: "Upload",
                                    srcUrl:
                                      "https://raw.githubusercontent.com/framer/Lottie/master/Lottie.framerfx/assets/logo.json",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                          ],
                        }),
                        m(B, {
                          __fromCanvasComponent: !0,
                          children: m(L, {
                            children: m("p", {
                              style: {
                                "--font-selector": "R0Y7R2FlZ3UtNzAw",
                                "--framer-font-family": '"Gaegu", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "700",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-ee88d82e-f586-4351-9e0d-739b0761209d, rgb(138, 138, 138))",
                              },
                              children:
                                "This is a memecoin project, created independently and not affiliated with the original asset or entity.",
                            }),
                          }),
                          className: "framer-14t4zbi",
                          fonts: ["GF;Gaegu-700"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),

                        m(ue, {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 132,
                            intrinsicWidth: 132,
                            loading: G(2226),
                            pixelHeight: 264,
                            pixelWidth: 235,
                            src: "images/what.gif",
                          },
                          className: "framer-myt51d hidden-bihej8",
                          "data-framer-name": "NUDAENG",
                          name: "NUDAENG",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            m("div", { className: ye(Pr, ...C), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Wn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${er.bodyClassName}-framer-9QWhp { background: var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255)) /* {"name":"White"} */; }`,
    ".framer-9QWhp.framer-14ssoqx, .framer-9QWhp .framer-14ssoqx { display: block; }",
    ".framer-9QWhp.framer-1vark51 { align-content: center; align-items: center; background-color: var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 200px 0px; position: relative; width: 1200px; }",
    ".framer-9QWhp .framer-1logr6e-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-9QWhp .framer-ts3711 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 720px; }",
    ".framer-9QWhp .framer-7novs4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 720px; }",
    ".framer-9QWhp .framer-blnhdh { flex: none; height: 100px; overflow: visible; position: relative; width: 720px; }",
    ".framer-9QWhp .framer-1cxumfg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: min-content; }",
    ".framer-9QWhp .framer-1kj8aat, .framer-9QWhp .framer-126c0vm, .framer-9QWhp .framer-b7tmp8, .framer-9QWhp .framer-182nzpk, .framer-9QWhp .framer-4s7mc0, .framer-9QWhp .framer-1imgrv5, .framer-9QWhp .framer-1md60jz, .framer-9QWhp .framer-17sxrna, .framer-9QWhp .framer-s870ec { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-9QWhp .framer-7rcg9x, .framer-9QWhp .framer-14t4zbi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 408px; word-break: break-word; word-wrap: break-word; }",
    ".framer-9QWhp .framer-16zhdjl-container, .framer-9QWhp .framer-1cel9p9-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-9QWhp .framer-kpdz8l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-9QWhp .framer-hi86wo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: 293px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-9QWhp .framer-fbxwaa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 328px; }",
    ".framer-9QWhp .framer-106m5yk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-9QWhp .framer-1l741h9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-9QWhp .framer-1pzi5yv, .framer-9QWhp .framer-in4qdh, .framer-9QWhp .framer-pgbwoa { --border-bottom-width: 2px; --border-color: var(--token-2c53595f-e91f-4d4a-91d0-904b1b7f861f, #474747); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9QWhp .framer-9si3ry { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-9QWhp .framer-1x8tdpl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-9QWhp .framer-1xv28g3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-9QWhp .framer-74chw9 { aspect-ratio: 1 / 1; border-bottom-left-radius: 170px; border-bottom-right-radius: 170px; border-top-left-radius: 170px; border-top-right-radius: 170px; flex: none; height: var(--framer-aspect-ratio-supported, 202px); mix-blend-mode: multiply; overflow: visible; position: relative; width: 202px; z-index: 1; }",
    ".framer-9QWhp .framer-1o012ut { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 720px; }",
    ".framer-9QWhp .framer-4z4bpm { flex: none; height: 371px; overflow: visible; position: relative; width: 100%; }",
    ".framer-9QWhp .framer-d42rj0 { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: 242px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-9QWhp .framer-1c76n39 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }",
    ".framer-9QWhp .framer-1fc4x0t { bottom: 38px; flex: none; height: 156px; left: calc(50.00000000000002% - 288px / 2); overflow: visible; position: absolute; width: 288px; }",
    ".framer-9QWhp .framer-1j29b64 { align-content: center; align-items: center; background-color: #262626; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; box-shadow: 0px 20px 10px -14px rgba(125, 125, 125, 0.28); cursor: move; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 130px; justify-content: center; left: 153px; overflow: hidden; padding: 16px; position: absolute; top: calc(50.00000000000002% - 130px / 2); width: 130px; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-9QWhp .framer-1cpdk9b, .framer-9QWhp .framer-1erx0tw, .framer-9QWhp .framer-jp730o, .framer-9QWhp .framer-g48jx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-9QWhp .framer-zbj0sa { align-content: center; align-items: center; background-color: #262626; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; box-shadow: 0px 20px 10px -14px rgba(130, 130, 130, 0.28); cursor: move; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 130px; justify-content: center; left: 4px; overflow: hidden; padding: 16px; position: absolute; top: 4px; width: 130px; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-9QWhp .framer-833i3q-container { flex: none; height: auto; position: absolute; right: -20px; top: -28px; width: 26px; z-index: 1; }",
    ".framer-9QWhp .framer-myt51d { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 163px); mix-blend-mode: multiply; overflow: visible; position: relative; width: 163px; z-index: 1; }",
    ".framer-9QWhp .framer-1pjbzgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px 20px 0px 20px; position: relative; width: 720px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-9QWhp.framer-1vark51, .framer-9QWhp .framer-ts3711, .framer-9QWhp .framer-7novs4, .framer-9QWhp .framer-1cxumfg, .framer-9QWhp .framer-kpdz8l, .framer-9QWhp .framer-hi86wo, .framer-9QWhp .framer-fbxwaa, .framer-9QWhp .framer-106m5yk, .framer-9QWhp .framer-1l741h9, .framer-9QWhp .framer-1pzi5yv, .framer-9QWhp .framer-in4qdh, .framer-9QWhp .framer-pgbwoa, .framer-9QWhp .framer-9si3ry, .framer-9QWhp .framer-1x8tdpl, .framer-9QWhp .framer-1xv28g3, .framer-9QWhp .framer-1o012ut, .framer-9QWhp .framer-1j29b64, .framer-9QWhp .framer-zbj0sa, .framer-9QWhp .framer-1pjbzgr { gap: 0px; } .framer-9QWhp.framer-1vark51 > *, .framer-9QWhp .framer-fbxwaa > *, .framer-9QWhp .framer-9si3ry > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-9QWhp.framer-1vark51 > :first-child, .framer-9QWhp .framer-ts3711 > :first-child, .framer-9QWhp .framer-1cxumfg > :first-child, .framer-9QWhp .framer-kpdz8l > :first-child, .framer-9QWhp .framer-hi86wo > :first-child, .framer-9QWhp .framer-fbxwaa > :first-child, .framer-9QWhp .framer-106m5yk > :first-child, .framer-9QWhp .framer-9si3ry > :first-child, .framer-9QWhp .framer-1x8tdpl > :first-child, .framer-9QWhp .framer-1o012ut > :first-child, .framer-9QWhp .framer-1j29b64 > :first-child, .framer-9QWhp .framer-zbj0sa > :first-child, .framer-9QWhp .framer-1pjbzgr > :first-child { margin-top: 0px; } .framer-9QWhp.framer-1vark51 > :last-child, .framer-9QWhp .framer-ts3711 > :last-child, .framer-9QWhp .framer-1cxumfg > :last-child, .framer-9QWhp .framer-kpdz8l > :last-child, .framer-9QWhp .framer-hi86wo > :last-child, .framer-9QWhp .framer-fbxwaa > :last-child, .framer-9QWhp .framer-106m5yk > :last-child, .framer-9QWhp .framer-9si3ry > :last-child, .framer-9QWhp .framer-1x8tdpl > :last-child, .framer-9QWhp .framer-1o012ut > :last-child, .framer-9QWhp .framer-1j29b64 > :last-child, .framer-9QWhp .framer-zbj0sa > :last-child, .framer-9QWhp .framer-1pjbzgr > :last-child { margin-bottom: 0px; } .framer-9QWhp .framer-ts3711 > * { margin: 0px; margin-bottom: calc(70px / 2); margin-top: calc(70px / 2); } .framer-9QWhp .framer-7novs4 > *, .framer-9QWhp .framer-1pzi5yv > *, .framer-9QWhp .framer-in4qdh > *, .framer-9QWhp .framer-pgbwoa > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-9QWhp .framer-7novs4 > :first-child, .framer-9QWhp .framer-1l741h9 > :first-child, .framer-9QWhp .framer-1pzi5yv > :first-child, .framer-9QWhp .framer-in4qdh > :first-child, .framer-9QWhp .framer-pgbwoa > :first-child, .framer-9QWhp .framer-1xv28g3 > :first-child { margin-left: 0px; } .framer-9QWhp .framer-7novs4 > :last-child, .framer-9QWhp .framer-1l741h9 > :last-child, .framer-9QWhp .framer-1pzi5yv > :last-child, .framer-9QWhp .framer-in4qdh > :last-child, .framer-9QWhp .framer-pgbwoa > :last-child, .framer-9QWhp .framer-1xv28g3 > :last-child { margin-right: 0px; } .framer-9QWhp .framer-1cxumfg > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-9QWhp .framer-kpdz8l > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-9QWhp .framer-hi86wo > *, .framer-9QWhp .framer-1pjbzgr > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-9QWhp .framer-106m5yk > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-9QWhp .framer-1l741h9 > *, .framer-9QWhp .framer-1xv28g3 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-9QWhp .framer-1x8tdpl > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-9QWhp .framer-1o012ut > * { margin: 0px; margin-bottom: calc(3px / 2); margin-top: calc(3px / 2); } .framer-9QWhp .framer-1j29b64 > *, .framer-9QWhp .framer-zbj0sa > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${er.bodyClassName}-framer-9QWhp { background: var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255)) /* {"name":"White"} */; } .framer-9QWhp.framer-1vark51 { width: 810px; } .framer-9QWhp .framer-7novs4 { order: 0; } .framer-9QWhp .framer-kpdz8l { order: 1; } .framer-9QWhp .framer-74chw9 { order: 2; } .framer-9QWhp .framer-1o012ut { order: 3; }}`,
    `@media (max-width: 809px) { .${er.bodyClassName}-framer-9QWhp { background: var(--token-8cf64558-7cb5-42ca-a432-3234dcb1241b, rgb(255, 255, 255)) /* {"name":"White"} */; } .framer-9QWhp.framer-1vark51 { overflow: hidden; width: 390px; } .framer-9QWhp .framer-1logr6e-container { order: 0; top: 0px; } .framer-9QWhp .framer-ts3711 { gap: 200px; order: 1; width: 100%; } .framer-9QWhp .framer-7novs4 { order: 0; width: 100%; } .framer-9QWhp .framer-blnhdh { flex: 1 0 0px; width: 1px; } .framer-9QWhp .framer-1cxumfg { left: 50%; top: 0px; transform: translateX(-50%); width: 348px; } .framer-9QWhp .framer-1kj8aat, .framer-9QWhp .framer-126c0vm, .framer-9QWhp .framer-1imgrv5 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-9QWhp .framer-7rcg9x { width: 100%; } .framer-9QWhp .framer-kpdz8l { order: 1; } .framer-9QWhp .framer-hi86wo, .framer-9QWhp .framer-9si3ry, .framer-9QWhp .framer-1x8tdpl { align-content: center; align-items: center; width: 100%; } .framer-9QWhp .framer-1l741h9 { align-content: center; align-items: center; flex-direction: column; justify-content: center; } .framer-9QWhp .framer-1xv28g3 { justify-content: center; } .framer-9QWhp .framer-74chw9 { order: 2; } .framer-9QWhp .framer-1o012ut { gap: 0px; order: 3; overflow: hidden; width: 100%; } .framer-9QWhp .framer-d42rj0 { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: 131px; right: unset; width: 100%; } .framer-9QWhp .framer-1fc4x0t { bottom: -89px; height: 359px; left: calc(50.00000000000002% - 390px / 2); width: 390px; } .framer-9QWhp .framer-1j29b64 { left: 210px; top: 5px; } .framer-9QWhp .framer-zbj0sa { left: 62px; top: 3px; } .framer-9QWhp .framer-14t4zbi { width: 324px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-9QWhp .framer-ts3711, .framer-9QWhp .framer-1l741h9, .framer-9QWhp .framer-1o012ut { gap: 0px; } .framer-9QWhp .framer-ts3711 > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-9QWhp .framer-ts3711 > :first-child, .framer-9QWhp .framer-1l741h9 > :first-child, .framer-9QWhp .framer-1o012ut > :first-child { margin-top: 0px; } .framer-9QWhp .framer-ts3711 > :last-child, .framer-9QWhp .framer-1l741h9 > :last-child, .framer-9QWhp .framer-1o012ut > :last-child { margin-bottom: 0px; } .framer-9QWhp .framer-1l741h9 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-9QWhp .framer-1o012ut > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }}`,
    ...hr,
    ...it,
    ...Br,
    '.framer-9QWhp[data-border="true"]::after, .framer-9QWhp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ut = Ee(jn, Wn, "framer-9QWhp"),
  Fi = ut;
ut.displayName = "Home";
ut.defaultProps = { height: 3314.5, width: 1200 };
Re(
  ut,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Gaegu",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/gaegu/v17/TuGSUVB6Up9NU573jvw-4sdtBk0x.woff2",
          weight: "700",
        },
      ],
    },
    ...ln,
    ...fn,
    ...mn,
    ...pn,
    ...Ae(pr),
    ...Ae(nt),
    ...Ae(Sr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ii = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerRbNUb9wNm",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"b8XxL5S5h":{"layout":["fixed","auto"]},"WE2cHsKNG":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "3314.5",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ii as __FramerMetadata__, Fi as default };
//# sourceMappingURL=HiiDysjkJ2sK9O8tkJfMSEei4dbH3IKBqBnSqZOiGr4.FIDDPPLQ.mjs.map
