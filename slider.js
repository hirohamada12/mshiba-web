const _0x44a63d = _0x5dc6;
function _0x5dc6(_0x221890, _0x57d104) {
  const _0x417341 = _0x4173();
  return (
    (_0x5dc6 = function (_0x5dc620, _0x4e98f2) {
      _0x5dc620 = _0x5dc620 - 0x1a7;
      let _0x368524 = _0x417341[_0x5dc620];
      return _0x368524;
    }),
    _0x5dc6(_0x221890, _0x57d104)
  );
}
(function (_0x99ff38, _0x531195) {
  const _0x15f5c9 = _0x5dc6,
    _0x1f36bd = _0x99ff38();
  while (!![]) {
    try {
      const _0x4668ef =
        (parseInt(_0x15f5c9(0x1c0)) / 0x1) *
          (-parseInt(_0x15f5c9(0x1ba)) / 0x2) +
        -parseInt(_0x15f5c9(0x1b4)) / 0x3 +
        parseInt(_0x15f5c9(0x1bb)) / 0x4 +
        parseInt(_0x15f5c9(0x1b6)) / 0x5 +
        (-parseInt(_0x15f5c9(0x1c5)) / 0x6) *
          (-parseInt(_0x15f5c9(0x1b8)) / 0x7) +
        (-parseInt(_0x15f5c9(0x1b7)) / 0x8) *
          (-parseInt(_0x15f5c9(0x1ac)) / 0x9) +
        (parseInt(_0x15f5c9(0x1c8)) / 0xa) *
          (-parseInt(_0x15f5c9(0x1ab)) / 0xb);
      if (_0x4668ef === _0x531195) break;
      else _0x1f36bd["push"](_0x1f36bd["shift"]());
    } catch (_0x707e36) {
      _0x1f36bd["push"](_0x1f36bd["shift"]());
    }
  }
})(_0x4173, 0xe4bd0);
export default class UI {
  constructor(_0x3e37ab, _0x210f83, _0x368571) {
    const _0x64ca51 = _0x5dc6;
    (this[_0x64ca51(0x1c6)] = _0x3e37ab),
      (this[_0x64ca51(0x1af)] = _0x210f83),
      (this["rightArrow"] = _0x368571),
      (this[_0x64ca51(0x1aa)] = 0x0),
      (this["sliderElementsCount"] = _0x3e37ab[_0x64ca51(0x1bc)]),
      this[_0x64ca51(0x1a7)]["addEventListener"](
        _0x64ca51(0x1bd),
        this[_0x64ca51(0x1ad)]["bind"](this)
      ),
      this[_0x64ca51(0x1af)][_0x64ca51(0x1b5)](
        _0x64ca51(0x1bd),
        this[_0x64ca51(0x1a8)][_0x64ca51(0x1be)](this)
      );
    for (let _0x1c82a1 = 0x0; _0x1c82a1 < this[_0x64ca51(0x1a9)]; _0x1c82a1++) {
      const _0x5f1966 = _0x3e37ab[_0x64ca51(0x1b0)][_0x1c82a1],
        _0x164a64 = _0x5f1966["querySelector"](_0x64ca51(0x1b9));
      _0x164a64[_0x64ca51(0x1ae)][_0x64ca51(0x1b1)] =
        0x190 + _0x1c82a1 * 0x32 + "ms";
    }
  }
  [_0x44a63d(0x1ad)]() {
    const _0x4c606a = _0x44a63d;
    this["leftArrow"][_0x4c606a(0x1c1)][_0x4c606a(0x1b3)](
      "slider__arrow--disabled"
    );
    const _0x2a5e87 = 0x4;
    if (
      this[_0x4c606a(0x1aa)] ===
      this["sliderElementsCount"] - _0x2a5e87 - 0x1
    )
      this[_0x4c606a(0x1a7)][_0x4c606a(0x1c1)][_0x4c606a(0x1bf)](
        "slider__arrow--disabled"
      );
    if (this[_0x4c606a(0x1aa)] === this["sliderElementsCount"] - _0x2a5e87)
      return;
    this[_0x4c606a(0x1aa)]++,
      (this[_0x4c606a(0x1c6)][_0x4c606a(0x1ae)]["left"] =
        "-" + this[_0x4c606a(0x1aa)] * 0x19 + "%");
  }
  [_0x44a63d(0x1a8)]() {
    const _0x24456b = _0x44a63d;
    this["rightArrow"][_0x24456b(0x1c1)][_0x24456b(0x1b3)](_0x24456b(0x1c4));
    if (this["slideIndex"] === 0x1)
      this["leftArrow"]["classList"]["add"](_0x24456b(0x1c4));
    if (this[_0x24456b(0x1aa)] === 0x0) return;
    this[_0x24456b(0x1aa)]--,
      (this[_0x24456b(0x1c6)]["style"][_0x24456b(0x1c3)] =
        "-" + this[_0x24456b(0x1aa)] * 0x19 + "%");
  }
  [_0x44a63d(0x1c2)]() {
    const _0x3bdb77 = _0x44a63d;
    this[_0x3bdb77(0x1c6)][_0x3bdb77(0x1c7)](_0x3bdb77(0x1ae)),
      this[_0x3bdb77(0x1a7)]["classList"]["remove"]("slider__arrow--disabled"),
      this[_0x3bdb77(0x1af)][_0x3bdb77(0x1c1)][_0x3bdb77(0x1bf)](
        _0x3bdb77(0x1c4)
      ),
      this[_0x3bdb77(0x1a7)]["removeEventListener"](
        "click",
        this["moveLeft"][_0x3bdb77(0x1be)](this)
      ),
      this[_0x3bdb77(0x1af)][_0x3bdb77(0x1b2)](
        _0x3bdb77(0x1bd),
        this[_0x3bdb77(0x1a8)][_0x3bdb77(0x1be)](this)
      );
  }
}
function _0x4173() {
  const _0x18e7a4 = [
    "slideIndex",
    "16912159WaYeno",
    "6019101YoFAOt",
    "moveLeft",
    "style",
    "leftArrow",
    "children",
    "transitionDelay",
    "removeEventListener",
    "remove",
    "2308731mLgsyt",
    "addEventListener",
    "8666065lXljdp",
    "8BbMmTB",
    "7RsMIcg",
    ".slider__item-image",
    "2vUkYuF",
    "5585844pPqKOs",
    "childElementCount",
    "click",
    "bind",
    "add",
    "1518130qEavem",
    "classList",
    "destroy",
    "left",
    "slider__arrow--disabled",
    "5781750BEEEzW",
    "sliderElement",
    "removeAttribute",
    "10evDscU",
    "rightArrow",
    "moveRight",
    "sliderElementsCount",
  ];
  _0x4173 = function () {
    return _0x18e7a4;
  };
  return _0x4173();
}
