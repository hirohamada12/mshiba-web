const _0x3ea745 = _0x2db1;
function _0x4c55() {
  const _0x220fdc = [
    "getFullYear",
    "dataset",
    "checkContentVisibility",
    "popup--animated",
    "deg)\x20rotateY(",
    "toggleMenu",
    "[data-follow]",
    "forEach",
    "destoryVideo",
    "20oiDEwM",
    "burger--active",
    "transform\x20500ms\x20ease",
    "ui_moveScene",
    "transform",
    "5MENXqV",
    "opacity",
    "centered_y",
    "function",
    "querySelectorAll",
    "getBoundingClientRect",
    "section--hidden-reverse",
    "remove",
    "destroySlider",
    "[data-popup=",
    "blockSceneScrolling",
    "_eventParameter",
    "style",
    "requestAnimationFrame",
    "buttonMoveAnimation",
    "setAttribute",
    "clientX",
    "#slider",
    "querySelector",
    "2057vXTRkj",
    "section--hidden",
    "right",
    "bind",
    "removeEventListener",
    "px),\x200)",
    ".slider__arrow-right",
    "30hweGGu",
    "showPopup",
    "classList",
    "follow",
    "initVideo",
    "innerHTML",
    "video",
    "top",
    ".burger",
    "625176TOxDNW",
    "576054VCKVRS",
    "src",
    ".menu-list",
    ".footer-copy__date",
    "target",
    "push",
    "mainLetters2DAnimation",
    "click",
    "innerHeight",
    "[data-page]",
    ".slider__arrow-left",
    "transition",
    "page",
    "toggle",
    "hidePopup",
    "8448FobAML",
    "3075558XIDeTr",
    "bottom",
    "currentTarget",
    "28273yeSqPu",
    "popup--active",
    "onPagingClick",
    "getFollowElementsPosition",
    "px,\x20calc(",
    "selector",
    "flex",
    "#video",
    "#button_video",
    "ui_moveEvent",
    "translate3d(",
    "%\x20+\x20",
    "innerWidth",
    "clientY",
    "addEventListener",
    "removeAttribute",
    "onMenuPagingClick",
    "175205kouHMK",
    "227631RGPkme",
    "left",
    "add",
    "getCurrentPage",
    "destroy",
    "424nkTXEn",
    ".fixed-content-header__contact",
  ];
  _0x4c55 = function () {
    return _0x220fdc;
  };
  return _0x4c55();
}
(function (_0x4c8d5a, _0x458205) {
  const _0x593296 = _0x2db1,
    _0x389b65 = _0x4c8d5a();
  while (!![]) {
    try {
      const _0x596b89 =
        parseInt(_0x593296(0x1c6)) / 0x1 +
        -parseInt(_0x593296(0x1a2)) / 0x2 +
        (parseInt(_0x593296(0x1c7)) / 0x3) *
          (-parseInt(_0x593296(0x1d7)) / 0x4) +
        (parseInt(_0x593296(0x1dc)) / 0x5) *
          (parseInt(_0x593296(0x1b2)) / 0x6) +
        (-parseInt(_0x593296(0x1b5)) / 0x7) *
          (-parseInt(_0x593296(0x1cc)) / 0x8) +
        (parseInt(_0x593296(0x1a1)) / 0x9) *
          (parseInt(_0x593296(0x1f6)) / 0xa) +
        (-parseInt(_0x593296(0x1ef)) / 0xb) *
          (parseInt(_0x593296(0x1b1)) / 0xc);
      if (_0x596b89 === _0x458205) break;
      else _0x389b65["push"](_0x389b65["shift"]());
    } catch (_0x48b526) {
      _0x389b65["push"](_0x389b65["shift"]());
    }
  }
})(_0x4c55, 0x4bf9d);
import _0x41e492 from "./slider.js";
const uiWrapper = document["querySelector"](".ui-wrapper");
let constructorCb = null,
  followElements = [],
  followElementsPositions = [],
  videoElementSource = "",
  slider = null,
  popup = null;
function _0x2db1(_0x3c6d16, _0x400bde) {
  const _0x4c5584 = _0x4c55();
  return (
    (_0x2db1 = function (_0x2db185, _0x3be6c3) {
      _0x2db185 = _0x2db185 - 0x19a;
      let _0x29d258 = _0x4c5584[_0x2db185];
      return _0x29d258;
    }),
    _0x2db1(_0x3c6d16, _0x400bde)
  );
}
export default class UI {
  constructor(_0x2c4b54) {
    const _0x4ca622 = _0x2db1;
    (constructorCb = _0x2c4b54),
      (followElements = uiWrapper["querySelectorAll"](_0x4ca622(0x1d4))),
      this[_0x4ca622(0x1b8)]();
    const _0x36b6f6 = [
      { selector: _0x4ca622(0x1a0), cb: this[_0x4ca622(0x1d3)] },
      { selector: _0x4ca622(0x1cd), cb: this[_0x4ca622(0x1b7)]["bind"](this) },
      {
        selector: ".fixed-content-paging",
        cb: this["onPagingClick"][_0x4ca622(0x1f2)](this),
      },
      { selector: _0x4ca622(0x1a4), cb: this[_0x4ca622(0x1c5)]["bind"](this) },
      {
        selector: _0x4ca622(0x1bd),
        cb: this["showPopup"][_0x4ca622(0x1f2)](
          this,
          _0x4ca622(0x19e),
          this[_0x4ca622(0x19c)],
          this[_0x4ca622(0x1d6)]
        ),
      },
      {
        selector: "#button_offers",
        cb: this["showPopup"][_0x4ca622(0x1f2)](this, "offers"),
      },
      {
        selector: "#button_team",
        cb: this[_0x4ca622(0x1f7)][_0x4ca622(0x1f2)](
          this,
          "team",
          this["initSlider"],
          this[_0x4ca622(0x1e4)]
        ),
      },
    ];
    _0x36b6f6["forEach"]((_0x77e90) => {
      const _0x480dd6 = _0x4ca622,
        _0x3a0d10 = uiWrapper[_0x480dd6(0x1ee)](_0x77e90[_0x480dd6(0x1ba)]);
      _0x3a0d10 && _0x3a0d10["addEventListener"]("click", _0x77e90["cb"]);
    });
    const _0x2f048e = uiWrapper["querySelector"](_0x4ca622(0x1a5));
    _0x2f048e &&
      (_0x2f048e[_0x4ca622(0x19d)] = "??\x20" + new Date()[_0x4ca622(0x1ce)]());
  }
  [_0x3ea745(0x1be)](_0x15bcb4, _0x1ad50c) {
    const _0x275225 = _0x3ea745;
    this["buttonMoveAnimation"](_0x15bcb4),
      _0x1ad50c && this[_0x275225(0x1a8)](_0x15bcb4);
  }
  [_0x3ea745(0x1ea)](_0x4403f9) {
    const _0x5c4b7f = _0x3ea745,
      _0x12016d = _0x4403f9[_0x5c4b7f(0x1ec)],
      _0x24bb3f = _0x4403f9[_0x5c4b7f(0x1c2)];
    let _0x42b44b = { y: ![] };
    followElements[_0x5c4b7f(0x1d5)]((_0x3239fe, _0x4922ce) => {
      const _0x1b6613 = _0x5c4b7f,
        _0x77c52e = followElementsPositions[_0x4922ce];
      if (
        _0x12016d > _0x77c52e[_0x1b6613(0x1c8)] - 0x64 &&
        _0x12016d < _0x77c52e[_0x1b6613(0x1f1)] + 0x64 &&
        _0x24bb3f > _0x77c52e["top"] - 0x64 &&
        _0x24bb3f < _0x77c52e[_0x1b6613(0x1b3)] + 0x64
      ) {
        const _0x197762 = (_0x77c52e[_0x1b6613(0x1c8)] - _0x12016d) / 0xa,
          _0x3f4279 = (_0x77c52e[_0x1b6613(0x19f)] - _0x24bb3f) / 0xa;
        (_0x42b44b["y"] = ![]),
          _0x3239fe[_0x1b6613(0x1cf)][_0x1b6613(0x19b)] === _0x1b6613(0x1de) &&
            (_0x42b44b["y"] = !![]),
          (_0x3239fe[_0x1b6613(0x1e8)][_0x1b6613(0x1db)] =
            _0x1b6613(0x1bf) +
            -_0x197762 +
            _0x1b6613(0x1b9) +
            (_0x42b44b["y"] ? -0x32 : 0x0) +
            _0x1b6613(0x1c0) +
            -_0x3f4279 +
            _0x1b6613(0x1f4)),
          (_0x3239fe[_0x1b6613(0x1e8)][_0x1b6613(0x1ad)] = "");
      } else
        (_0x3239fe[_0x1b6613(0x1e8)][_0x1b6613(0x1db)] = ""),
          (_0x3239fe["style"][_0x1b6613(0x1ad)] = _0x1b6613(0x1d9));
    });
  }
  [_0x3ea745(0x1a8)](_0xfc7df4) {
    const _0x1e57db = _0x3ea745,
      _0xa0f5fa = document["querySelector"](".configuration__letters");
    if (_0xa0f5fa) {
      const _0x2e9595 = window[_0x1e57db(0x1c1)] / 0x2,
        _0x4ad04d = window[_0x1e57db(0x1aa)] / 0x2,
        _0xd36555 = _0x2e9595 - _0xfc7df4[_0x1e57db(0x1ec)],
        _0x4e0777 = _0x4ad04d - _0xfc7df4[_0x1e57db(0x1c2)];
      _0xa0f5fa[_0x1e57db(0x1e8)][_0x1e57db(0x1db)] =
        "rotateX(" +
        -_0xd36555 / 0x32 +
        _0x1e57db(0x1d2) +
        _0x4e0777 / 0x32 +
        "deg)\x20translateX(-50%)";
    }
  }
  ["showPopup"](_0x2306f3, _0x284da1, _0x58f9c4) {
    const _0x2a3f81 = _0x3ea745;
    if (typeof _0x284da1 === _0x2a3f81(0x1df)) _0x284da1();
    (popup = uiWrapper[_0x2a3f81(0x1ee)](_0x2a3f81(0x1e5) + _0x2306f3 + "]")),
      popup[_0x2a3f81(0x19a)][_0x2a3f81(0x1c9)]("popup--active"),
      setTimeout(() => {
        const _0x37110e = _0x2a3f81;
        popup[_0x37110e(0x19a)][_0x37110e(0x1c9)](_0x37110e(0x1d1)),
          popup[_0x37110e(0x1c3)](_0x37110e(0x1a9), this[_0x37110e(0x1b0)]),
          (popup[_0x37110e(0x1e7)] = _0x58f9c4),
          constructorCb()[_0x37110e(0x1e6)](!![]),
          this["getFollowElementsPosition"]();
      }, 0x0);
  }
  [_0x3ea745(0x1b0)](_0xa79c64) {
    const _0x48e1c2 = _0x3ea745;
    if (_0xa79c64["target"] !== _0xa79c64[_0x48e1c2(0x1b4)]) return;
    popup[_0x48e1c2(0x19a)][_0x48e1c2(0x1e3)](_0x48e1c2(0x1b6)),
      popup[_0x48e1c2(0x19a)][_0x48e1c2(0x1e3)](_0x48e1c2(0x1d1)),
      popup[_0x48e1c2(0x1f3)](_0x48e1c2(0x1a9), this[_0x48e1c2(0x1b0)]),
      constructorCb()["blockSceneScrolling"](![]);
    if (typeof popup[_0x48e1c2(0x1e7)] === _0x48e1c2(0x1df))
      popup["_eventParameter"]();
  }
  ["initSlider"]() {
    const _0x3531d1 = _0x3ea745,
      _0x485ab4 = uiWrapper["querySelector"](_0x3531d1(0x1ed)),
      _0x5362f1 = uiWrapper[_0x3531d1(0x1ee)](_0x3531d1(0x1ac)),
      _0x204eab = uiWrapper[_0x3531d1(0x1ee)](_0x3531d1(0x1f5));
    slider = new _0x41e492(_0x485ab4, _0x5362f1, _0x204eab);
  }
  [_0x3ea745(0x1e4)]() {
    const _0x164ffd = _0x3ea745;
    slider[_0x164ffd(0x1cb)](), (slider = null);
  }
  ["initVideo"]() {
    const _0x4cb325 = _0x3ea745;
    if (!videoElementSource) return;
    const _0x5110fb = document[_0x4cb325(0x1ee)](_0x4cb325(0x1bc));
    _0x5110fb &&
      _0x5110fb[_0x4cb325(0x1eb)](_0x4cb325(0x1a3), videoElementSource);
  }
  [_0x3ea745(0x1d6)]() {
    const _0x4c6d35 = _0x3ea745,
      _0x466466 = document[_0x4c6d35(0x1ee)]("#video");
    _0x466466 &&
      ((videoElementSource = _0x466466[_0x4c6d35(0x1a3)]),
      _0x466466["removeAttribute"](_0x4c6d35(0x1a3)));
  }
  [_0x3ea745(0x1d3)]() {
    const _0x59f145 = _0x3ea745;
    uiWrapper["classList"]["toggle"]("menu-opened"),
      uiWrapper[_0x59f145(0x1ee)](_0x59f145(0x1a0))[_0x59f145(0x19a)][
        _0x59f145(0x1af)
      ](_0x59f145(0x1d8));
  }
  [_0x3ea745(0x1da)](_0x3131e3) {
    const _0x71346c = _0x3ea745;
    this[_0x71346c(0x1d0)](_0x3131e3);
  }
  [_0x3ea745(0x1c5)](_0x16ed17) {
    const _0x3d82b8 = _0x3ea745;
    this[_0x3d82b8(0x1d3)](), this[_0x3d82b8(0x1b7)](_0x16ed17);
  }
  ["onPagingClick"](_0x237f81) {
    const _0x2d335d = _0x3ea745,
      _0x51ec91 =
        +_0x237f81[_0x2d335d(0x1a6)][_0x2d335d(0x1cf)][_0x2d335d(0x1ae)];
    _0x51ec91 >= 0x0 && constructorCb()[_0x2d335d(0x1b7)](_0x51ec91);
  }
  [_0x3ea745(0x1b8)]() {
    const _0x49a803 = _0x3ea745;
    (followElementsPositions = []),
      followElements[_0x49a803(0x1d5)]((_0xf1880a) =>
        followElementsPositions[_0x49a803(0x1a7)](_0xf1880a[_0x49a803(0x1e1)]())
      );
  }
  [_0x3ea745(0x1d0)](_0x4a5fae) {
    const _0xdd4aaf = _0x3ea745,
      _0x486179 = uiWrapper[_0xdd4aaf(0x1e0)](_0xdd4aaf(0x1ab)),
      _0x10f238 = (_0x40808e) => {
        const _0x593f54 = _0xdd4aaf;
        _0x4a5fae === "down"
          ? (_0x40808e["classList"][_0x593f54(0x1c9)]("section--hidden"),
            _0x40808e[_0x593f54(0x19a)][_0x593f54(0x1e3)](_0x593f54(0x1e2)))
          : (_0x40808e[_0x593f54(0x19a)][_0x593f54(0x1c9)](
              "section--hidden-reverse"
            ),
            _0x40808e[_0x593f54(0x19a)][_0x593f54(0x1e3)](_0x593f54(0x1f0)));
        if (
          +_0x40808e[_0x593f54(0x1cf)][_0x593f54(0x1ae)] ===
          constructorCb()[_0x593f54(0x1ca)]()
        ) {
          _0x40808e[_0x593f54(0x1e8)]["display"] = _0x593f54(0x1bb);
          const _0x400ff2 = () =>
            _0x40808e["classList"][_0x593f54(0x1e3)](
              _0x593f54(0x1f0),
              _0x593f54(0x1e2)
            );
          window[_0x593f54(0x1e9)](() => {
            window["requestAnimationFrame"](_0x400ff2);
          });
        }
      };
    _0x486179["forEach"]((_0x370413) => {
      const _0x49eab5 = _0xdd4aaf;
      (_0x370413[_0x49eab5(0x1e8)][_0x49eab5(0x1dd)] = "0"),
        setTimeout(() => {
          const _0x5b3f5c = _0x49eab5;
          _0x370413[_0x5b3f5c(0x1c4)](_0x5b3f5c(0x1e8)), _0x10f238(_0x370413);
        }, 0x12c);
    });
  }
}
