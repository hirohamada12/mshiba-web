const _0x464a76 = _0x2001;
!(function (e, n) {
  const o = _0x2001,
    t = _0x3655();
  for (;;)
    try {
      if (
        432006 ===
        (-parseInt(o(365)) / 1) * (-parseInt(o(317)) / 2) +
          (parseInt(o(291)) / 3) * (-parseInt(o(288)) / 4) +
          parseInt(o(299)) / 5 +
          (parseInt(o(324)) / 6) * (-parseInt(o(373)) / 7) +
          (parseInt(o(313)) / 8) * (-parseInt(o(363)) / 9) +
          parseInt(o(380)) / 10 +
          parseInt(o(359)) / 11
      )
        break;
      t.push(t.shift());
    } catch (e) {
      t.push(t.shift());
    }
})();
const configuration = {
  SiteName: _0x464a76(323),
  Use2DTextOver3D: !1,
  SiteNameSize: 0.6,
  NumberOfVerticalLines: 7,
  NumberOfDots: 2e3,
  colors: {
    CanvasBackgroundColor: "#141414",
    LettersColor: "#fff",
    LinesColors: [_0x464a76(322), _0x464a76(315), _0x464a76(304)],
    LowerLinesColors: ["#96bedc"],
    DotsColor: _0x464a76(304),
  },
};
import * as _0x255c8b from "./ext/three.module.min.js";
import _0xbc2b79 from "./ext/tween.js";
import _0xb5dabc from "./ui.js";
const ui = new _0xb5dabc(uiCallback),
  windowHeightInRadians = 25;
let camera,
  scene,
  renderer,
  sceneMovedAmmount = 0,
  timeoutActive = !1;
const mainGeomertries = [];
let mainLettersMesh, touchStartPosition;
function _0x2001(e, n) {
  const o = _0x3655();
  return (_0x2001 = function (e, n) {
    return o[(e -= 286)];
  })(e, n);
}
function init() {
  const e = _0x464a76;
  (camera = new _0x255c8b[e(381)](
    55,
    window[e(347)] / window.innerHeight,
    2,
    2e4
  )),
    (camera[e(372)].z = 20),
    (scene = new _0x255c8b[e(383)]()),
    (scene.background = new _0x255c8b[e(293)](configuration[e(318)][e(340)]));
  (scene.fog = new _0x255c8b.Fog(configuration.colors[e(340)], 10, 150)),
    configuration.Use2DTextOver3D ? loadMain2DLetters() : loadMainLetters();
  for (let n = 0; n < configuration[e(342)]; n++)
    generateRandomObject(
      1,
      [
        [0.2, 2, 4, 5],
        [0.1, 0.2],
      ],
      configuration[e(318)][e(331)]
    ),
      generateRandomObject(
        (-25 * n) / 3,
        [[2, 4], [0.05]],
        configuration[e(318)][e(307)]
      );
  (renderer = new _0x255c8b.WebGLRenderer()),
    renderer[e(320)](window[e(314)]),
    renderer[e(303)](window[e(347)], window[e(319)]),
    document[e(370)][e(343)](renderer[e(339)]),
    window[e(310)](e(364), windowResize, !1),
    window[e(310)](e(316), windowWheelOrTouch, !1),
    window[e(310)](
      e(321),
      (n) => {
        const o = e;
        touchStartPosition = n[o(302)][0][o(375)];
      },
      !1
    ),
    window.addEventListener(e(378), windowWheelOrTouch, !1),
    isMobile() || window[e(310)]("mousemove", mouseMove, !1);
}
function animate(e) {
  const n = _0x464a76;
  requestAnimationFrame(animate), _0xbc2b79[n(379)](), render(e);
}
function render(e) {
  const n = _0x464a76;
  (e /= 1e3),
    mainLettersMesh && (mainLettersMesh[n(361)][n(292)][n(333)].value = e),
    mainGeomertries.forEach((o, t) => {
      const r = n;
      o[r(367)].x = 0.5 * Math[r(377)](e / 2 + 3 * t) + 0.5;
    }),
    renderer.render(scene, camera);
}
function _0x3655() {
  const e = [
    "Quartic",
    "Easing",
    "12yEgMPy",
    "classList",
    "vec3",
    "721023EIZbBq",
    "uniforms",
    "Color",
    "Points",
    "resources/images/icons/pointImg.png",
    "applyMatrix4",
    "querySelector",
    "configuration__letters--hidden",
    "1045385FsgPMg",
    "\n  varying vec2 vUv;\n  uniform float time;\n  \n  vec3 mod289(vec3 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n  \n  vec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n  }\n  \n  vec4 permute(vec4 x) {\n       return mod289(((x*34.0)+1.0)*x);\n  }\n  \n  vec4 taylorInvSqrt(vec4 r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n  \n  float snoise(vec3 v) {\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n    \n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n  \n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n    \n    // Permutations\n    i = mod289(i);\n    vec4 p = permute( permute( permute(\n               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n             \n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D.wyz - D.xzx;\n  \n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n  \n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n  \n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n  \n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n  \n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n  \n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n  \n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n    \n    // Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    \n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                  dot(p2,x2), dot(p3,x3) ) );\n  }\n  \n  void main() {\n    vUv = uv;\n  \n    vec3 pos = position;\n    float noiseFreq = 3.5;\n    float noiseAmp = 0.15; \n    vec3 noisePos = vec3(pos.x * noiseFreq + time, pos.y, pos.z);\n    pos.x += snoise(noisePos) * noiseAmp;\n  \n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n  }\n  ",
    "page-not-loaded",
    "touches",
    "setSize",
    "#96bedc",
    "resources/fonts/Roboto.json",
    "push",
    "LowerLinesColors",
    "\n  uniform vec3 color;\n  void main() {\n    gl_FragColor = vec4(color, 1.0 );\n  }\n  ",
    "down",
    "addEventListener",
    "DoubleSide",
    "ui_moveEvent",
    "1398856qGSQoz",
    "devicePixelRatio",
    "#96bedc",
    "wheel",
    "236290DvpVpl",
    "colors",
    "innerHeight",
    "setPixelRatio",
    "touchstart",
    "#96bedc",
    "NITROSHIBA",
    "138VhMlQf",
    "SiteName",
    "updateProjectionMatrix",
    ".configuration__letters",
    "InOut",
    "aspect",
    "FrontSide",
    "LinesColors",
    "Tween",
    "time",
    "Matrix4",
    "load",
    "parameters",
    "TextGeometry",
    "PointsMaterial",
    "domElement",
    "CanvasBackgroundColor",
    "floor",
    "NumberOfVerticalLines",
    "appendChild",
    "touchEvent",
    "PlaneBufferGeometry",
    "Mesh",
    "innerWidth",
    "createEvent",
    "random",
    "width",
    "clientY",
    "ShaderMaterial",
    "center",
    "setAttribute",
    "TextureLoader",
    "remove",
    "DotsColor",
    "min",
    "8048876GrwXiB",
    "SiteNameSize",
    "material",
    "Float32BufferAttribute",
    "18kjfekZ",
    "resize",
    "7qvkxQq",
    "lookAt",
    "scale",
    "ui_moveScene",
    "max",
    "body",
    "length",
    "position",
    "197834XXNtnd",
    "LettersColor",
    "pageY",
    "add",
    "sin",
    "touchmove",
    "update",
    "3849610sluXDB",
    "PerspectiveCamera",
    "FontLoader",
    "Scene",
    ".ui-wrapper",
  ];
  return (_0x3655 = function () {
    return e;
  })();
}
function generateRandomObject(e, n, o) {
  const t = _0x464a76,
    r = (e, n) => Math[t(341)](Math.random() * (n - e + 1) + e),
    i = n[0][r(0, n[0].length - 1)],
    c = n[1][r(0, n[1].length - 1)],
    a = o[r(0, o[t(371)] - 1)],
    s = new _0x255c8b[t(345)](i, c, 1);
  s[t(296)](
    new _0x255c8b[t(334)]().makeTranslation(-s[t(336)][t(350)] / 2, 0, 0)
  );
  const x = new _0x255c8b.MeshBasicMaterial({
      color: a,
      side: _0x255c8b[t(330)],
    }),
    m = new _0x255c8b[t(346)](s, x);
  (m[t(372)].x = r(-10, 10)),
    (m[t(372)].y = e + r(-10, 10)),
    (m[t(372)].z = r(-10, 10)),
    scene[t(376)](m),
    mainGeomertries.push(m);
}
function loadMainLetters() {
  const e = _0x464a76;
  new _0x255c8b[e(382)]()[e(335)](e(305), (n) => {
    const o = e;
    let t = new _0x255c8b[o(337)](configuration[o(325)], {
      font: n,
      size: 5,
      height: 3,
      curveSegments: 3,
    });
    t[o(353)](),
      t[o(367)](
        configuration.SiteNameSize,
        configuration[o(360)],
        configuration[o(360)]
      );
    const r = new _0x255c8b[o(352)]({
      uniforms: {
        time: { value: 0 },
        color: {
          type: o(290),
          value: new _0x255c8b[o(293)](configuration[o(318)][o(374)]),
        },
      },
      vertexShader: vertexShader(),
      fragmentShader: fragmentShader(),
      side: _0x255c8b[o(311)],
      wireframe: !0,
    });
    (mainLettersMesh = new _0x255c8b[o(346)](t, r)),
      scene[o(376)](mainLettersMesh);
    let i = [];
    for (let e = 0; e < configuration.NumberOfDots; e++) {
      let e = 200 * Math.random() - 100,
        n = 200 * Math[o(349)]() - 100,
        t = 200 * Math[o(349)]() - 100;
      i[o(306)](e, n, t);
    }
    const c = new _0x255c8b.BufferGeometry();
    c[o(354)](o(372), new _0x255c8b[o(362)](i, 3));
    const a = new _0x255c8b[o(355)]()[o(335)](o(295)),
      s = new _0x255c8b[o(338)]({
        color: configuration[o(318)][o(357)],
        size: 0.5,
        map: a,
        transparent: !0,
        alphaTest: 0.5,
      }),
      x = new _0x255c8b[o(294)](c, s);
    scene[o(376)](x), windowResize();
  });
}
function vertexShader() {
  return _0x464a76(300);
}
function fragmentShader() {
  return _0x464a76(308);
}
function loadMain2DLetters() {
  const e = _0x464a76;
  document[e(297)](e(327))[e(289)][e(356)](e(298));
}
function isMobile() {
  const e = _0x464a76;
  try {
    return document[e(348)](e(344)), !0;
  } catch (e) {
    return !1;
  }
}
function uiCallback() {
  return {
    onPagingClick(e) {
      const n = _0x2001;
      sceneMovedAmmount > sceneMovedAmmount
        ? ui[n(368)](n(309))
        : ui[n(368)]("up"),
        (sceneMovedAmmount = e),
        moveScene();
    },
    getCurrentPage: () => sceneMovedAmmount,
    blockSceneScrolling(e) {
      timeoutActive = !!e;
    },
  };
}
function moveScene() {
  const e = _0x464a76;
  new _0xbc2b79[e(332)](scene[e(372)])
    .to(
      { x: scene[e(372)].x, y: 25 * sceneMovedAmmount, z: scene.position.z },
      1e3
    )
    .easing(_0xbc2b79[e(287)][e(286)][e(328)])
    .start();
}
function windowResize() {
  const e = _0x464a76;
  if (mainLettersMesh) {
    const n = Math[e(358)](window[e(347)] / 1100, 1);
    (mainLettersMesh[e(367)].x = n), (mainLettersMesh[e(367)].y = n);
  }
  (camera[e(329)] = window[e(347)] / window[e(319)]),
    camera[e(326)](),
    renderer[e(303)](window[e(347)], window[e(319)]);
}
function windowWheelOrTouch(e) {
  const n = _0x464a76;
  if (!timeoutActive) {
    if (
      ((timeoutActive = !0),
      setTimeout(() => {
        timeoutActive = !1;
      }, 1500),
      e.deltaY > 0 || (e[n(302)] && e[n(302)][0].pageY < touchStartPosition))
    ) {
      if (5 === sceneMovedAmmount) return;
      return (
        sceneMovedAmmount++,
        (sceneMovedAmmount = Math[n(358)](sceneMovedAmmount, 5)),
        moveScene(),
        void ui[n(368)]("down")
      );
    }
    0 !== sceneMovedAmmount &&
      (sceneMovedAmmount--,
      (sceneMovedAmmount = Math[n(369)](sceneMovedAmmount, 0)),
      moveScene(),
      ui[n(368)]("up"));
  }
}
function mouseMove(e) {
  const n = _0x464a76;
  if ((ui[n(312)](e, configuration.Use2DTextOver3D), sceneMovedAmmount > 0))
    return;
  const o = window.innerWidth / 2,
    t = window[n(319)] / 2,
    r = o - e.clientX,
    i = t - e[n(351)];
  (camera.position.x = -r / 100),
    (camera[n(372)].y = i / 100),
    camera[n(366)](scene[n(372)]);
}
window[_0x464a76(310)]("load", () => {
  const e = _0x464a76;
  document[e(297)](e(384))[e(289)][e(356)](e(301)),
    setTimeout(() => {
      init(), animate();
    }, 3e3);
});
