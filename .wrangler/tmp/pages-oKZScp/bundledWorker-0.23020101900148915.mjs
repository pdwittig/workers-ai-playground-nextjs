// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ENV_ALS_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  return envAsyncLocalStorage;
}).catch(() => null);
var te = Object.create;
var V = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var re = Object.getOwnPropertyNames;
var ae = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var T = (e, t) => () => (e && (t = e(e = 0)), t);
var O = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ie = (e, t, r, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of re(t))
      !ne.call(e, a) && a !== r && V(e, a, { get: () => t[a], enumerable: !(s = se(t, a)) || s.enumerable });
  return e;
};
var j = (e, t, r) => (r = e != null ? te(ae(e)) : {}, ie(t || !e || !e.__esModule ? V(r, "default", { value: e, enumerable: true }) : r, e));
var g;
var l = T(() => {
  g = { collectedLocales: [] };
});
var f;
var h = T(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/__index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/__index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|rtXYpFcN4PPE8B_\\-MRQsX)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.0.4" }, crons: [], flags: [] };
});
var m;
var d = T(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/chunks/731-0b5a1ef7972469a3.js": { type: "static" }, "/_next/static/chunks/938-af0c54527eb3d299.js": { type: "static" }, "/_next/static/chunks/app/_not-found-c484c7358b18e33a.js": { type: "static" }, "/_next/static/chunks/app/layout-bc8e81701926ea93.js": { type: "static" }, "/_next/static/chunks/app/page-d0c1a1a88cb9fc50.js": { type: "static" }, "/_next/static/chunks/fd9d1056-bb5e642edb71cb6e.js": { type: "static" }, "/_next/static/chunks/framework-8883d1e9be70c3da.js": { type: "static" }, "/_next/static/chunks/main-app-fdb274144f5f837c.js": { type: "static" }, "/_next/static/chunks/main-ced0ab26db6ceefe.js": { type: "static" }, "/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js": { type: "static" }, "/_next/static/chunks/pages/_error-e87e5963ec1b8011.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-981255ff4040078c.js": { type: "static" }, "/_next/static/css/9d4bfefa581730bf.css": { type: "static" }, "/_next/static/media/05a31a2ca4975f99-s.woff2": { type: "static" }, "/_next/static/media/513657b02c5c193f-s.woff2": { type: "static" }, "/_next/static/media/51ed15f9841b9f9d-s.woff2": { type: "static" }, "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2": { type: "static" }, "/_next/static/media/d6b16ce4a6175f26-s.woff2": { type: "static" }, "/_next/static/media/ec159349637c90ad-s.woff2": { type: "static" }, "/_next/static/media/fd4db3eb5472fc27-s.woff2": { type: "static" }, "/_next/static/rtXYpFcN4PPE8B_-MRQsX/_buildManifest.js": { type: "static" }, "/_next/static/rtXYpFcN4PPE8B_-MRQsX/_ssgManifest.js": { type: "static" }, "/next.svg": { type: "static" }, "/vercel.svg": { type: "static" }, "/api/text-generation": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/text-generation.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = O((Fe, F) => {
  "use strict";
  l();
  h();
  d();
  function w(e, t) {
    e = String(e || "").trim();
    let r = e, s, a = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      a += e.substring(o + 1), e = e.substring(1, o);
    }
    let n = 0;
    return e = ue(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let u = o.substring(c[0].length, o.length - 1);
        return t && (t[n] = c[1]), n++, `(${u})`;
      }
      return o.substring(0, 3) === "(?:" || n++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => w.characterClasses[c] || o), new w.PCRE(e, a, r, a, s);
  }
  function ue(e, t) {
    let r = 0, s = 0, a = false;
    for (let i = 0; i < e.length; i++) {
      let n = e[i];
      if (a) {
        a = false;
        continue;
      }
      switch (n) {
        case "(":
          s === 0 && (r = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = r === 0 ? "" : e.substring(0, r), u = e.substring(o), p = String(t(e.substring(r, o)));
            e = c + p + u, i = r;
          }
          break;
        case "\\":
          a = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(s, a, i, n, o) {
        super(s, a), this.pcrePattern = i, this.pcreFlags = n, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(w || (w = {}));
  w.prototype = w.PCRE.prototype;
  F.exports = w;
});
var Z = O((L) => {
  "use strict";
  l();
  h();
  d();
  L.parse = we;
  L.serialize = _e;
  var xe = Object.prototype.toString, E = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function we(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, s = t || {}, a = s.decode || ve, i = 0; i < e.length; ) {
      var n = e.indexOf("=", i);
      if (n === -1)
        break;
      var o = e.indexOf(";", i);
      if (o === -1)
        o = e.length;
      else if (o < n) {
        i = e.lastIndexOf(";", n - 1) + 1;
        continue;
      }
      var c = e.slice(i, n).trim();
      if (r[c] === void 0) {
        var u = e.slice(n + 1, o).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), r[c] = Se(u, a);
      }
      i = o + 1;
    }
    return r;
  }
  function _e(e, t, r) {
    var s = r || {}, a = s.encode || Pe;
    if (typeof a != "function")
      throw new TypeError("option encode is invalid");
    if (!E.test(e))
      throw new TypeError("argument name is invalid");
    var i = a(t);
    if (i && !E.test(i))
      throw new TypeError("argument val is invalid");
    var n = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      n += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!E.test(s.domain))
        throw new TypeError("option domain is invalid");
      n += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!E.test(s.path))
        throw new TypeError("option path is invalid");
      n += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!be(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      n += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (n += "; HttpOnly"), s.secure && (n += "; Secure"), s.priority) {
      var u = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
        case "low":
          n += "; Priority=Low";
          break;
        case "medium":
          n += "; Priority=Medium";
          break;
        case "high":
          n += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var p = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (p) {
        case true:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return n;
  }
  function ve(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function Pe(e) {
    return encodeURIComponent(e);
  }
  function be(e) {
    return xe.call(e) === "[object Date]" || e instanceof Date;
  }
  function Se(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
l();
h();
d();
l();
h();
d();
l();
h();
d();
var _ = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
h();
d();
l();
h();
d();
l();
h();
d();
l();
h();
d();
var q = j($());
function S(e, t, r) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = r ? "" : "i", a = [];
  return { match: (0, q.default)(`%${e}%${s}`, a).exec(t), captureGroupKeys: a };
}
function v(e, t, r, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (a, i) => {
    let n = r.indexOf(i);
    return s && n === -1 ? a : (n === -1 ? t[parseInt(i, 10)] : t[n + 1]) || "";
  });
}
function M(e, { url: t, cookies: r, headers: s, routeDest: a }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? N(e.value, s.get(e.key), a) : { valid: s.has(e.key) };
    case "cookie": {
      let i = r[e.key];
      return i && e.value !== void 0 ? N(e.value, i, a) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? N(e.value, t.searchParams.get(e.key), a) : { valid: t.searchParams.has(e.key) };
  }
}
function N(e, t, r) {
  let { match: s, captureGroupKeys: a } = S(e, t);
  return r && s && a.length ? { valid: !!s, newRouteDest: v(r, s, a, { namedOnly: true }) } : { valid: !!s };
}
l();
h();
d();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", e.cf.city), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.region), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", _), new Request(e, { headers: t });
}
l();
h();
d();
function R(e, t, r) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [a, i] of s) {
    let n = a.toLowerCase(), o = r?.match ? v(i, r.match, r.captureGroupKeys) : i;
    n === "set-cookie" ? e.append(n, o) : e.set(n, o);
  }
}
function P(e) {
  return /^https?:\/\//.test(e);
}
function x(e, t) {
  for (let [r, s] of t.entries()) {
    let a = /^nxtP(.+)$/.exec(r), i = /^nxtI(.+)$/.exec(r);
    a?.[1] ? (e.set(r, s), e.set(a[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(r) || !!s && !e.getAll(r).includes(s)) && e.append(r, s);
  }
}
function I(e, t) {
  let r = new URL(t, e.url);
  return x(r.searchParams, new URL(e.url).searchParams), r.pathname = r.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(r, e);
}
function b(e) {
  return new Response(e.body, e);
}
function A(e) {
  return e.split(",").map((t) => {
    let [r, s] = t.split(";"), a = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [r.trim(), isNaN(a) ? 1 : a];
  }).sort((t, r) => r[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
l();
h();
d();
function H(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function C(e, { request: t, assetsFetcher: r, ctx: s }, { path: a, searchParams: i }) {
  let n, o = new URL(t.url);
  x(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let u = await import(e.entrypoint);
        try {
          n = await u.default(c, s);
        } catch (p) {
          let y = p;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : p;
        }
        break;
      }
      case "override": {
        n = b(await r.fetch(I(c, e.path ?? a))), e.headers && R(n.headers, e.headers);
        break;
      }
      case "static": {
        n = await r.fetch(I(c, a));
        break;
      }
      default:
        n = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return console.error(u), new Response("Internal Server Error", { status: 500 });
  }
  return b(n);
}
function B(e, t) {
  let r = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(r) || !e.endsWith(s) ? false : e.slice(r.length, -s.length).split("|").every((i) => t.has(i));
}
l();
h();
d();
function le(e, { protocol: t, hostname: r, port: s, pathname: a }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(r).test(e.hostname) || s && !new RegExp(s).test(e.port) || a && !new RegExp(a).test(e.pathname));
}
function he(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: r, searchParams: s } = new URL(e.url), a = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), n = Number.parseInt(s.get("q") ?? "75", 10);
  if (!a || Number.isNaN(i) || Number.isNaN(n) || !t?.sizes?.includes(i) || n < 0 || n > 100)
    return;
  let o = new URL(a, r);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = a.startsWith("/") || a.startsWith("%2F");
  if (!c && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((y) => le(o, y)))
    return;
  let u = e.headers.get("Accept") ?? "", p = t?.formats?.find((y) => u.includes(y))?.replace("image/", "");
  return { isRelative: c, imageUrl: o, options: { width: i, quality: n, format: p } };
}
function de(e, t, r) {
  let s = new Headers();
  if (r?.contentSecurityPolicy && s.set("Content-Security-Policy", r.contentSecurityPolicy), r?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), n = i ? `${r.contentDispositionType}; filename="${i}"` : r.contentDispositionType;
    s.set("Content-Disposition", n);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${r?.minimumCacheTTL ?? 60}`);
  let a = b(e);
  return R(a.headers, s), a;
}
async function z(e, { buildOutput: t, assetsFetcher: r, imagesConfig: s }) {
  let a = he(e, s);
  if (!a)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: n } = a, o = new Request(n, { headers: e.headers }), c = i && n.pathname in t ? await r.fetch(o) : await fetch(o);
  return de(c, n, s);
}
l();
h();
d();
l();
h();
d();
var pe = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
async function W(e) {
  let t = `https://${_}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let r = new URL(e.url), s = await me();
    if (r.pathname === "/v1/suspense-cache/revalidate") {
      let i = r.searchParams.get("tags")?.split(",") ?? [];
      for (let n of i)
        await s.revalidateTag(n);
      return new Response(null, { status: 200 });
    }
    let a = r.pathname.replace("/v1/suspense-cache/", "");
    if (!a.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = K(e, fe), n = await s.get(a, { softTags: i });
        return n ? new Response(JSON.stringify(n.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (n.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = await e.json();
        return i.data.tags === void 0 && (i.tags ??= K(e, pe) ?? []), await s.set(a, i), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (r) {
    return console.error(r), new Response("Error handling cache request", { status: 500 });
  }
}
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
async function G(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function K(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function X() {
  globalThis.fetch[J] || (ge(), globalThis.fetch[J] = true);
}
function ge() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let r = new Request(...t), s = await ye(r);
    return s || (s = await W(r), s) ? s : (Re(r), e(r));
  };
}
async function ye(e) {
  if (e.url.startsWith("blob:"))
    try {
      let r = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return r;
      }, get body() {
        return new ReadableStream({ start(a) {
          let i = Buffer.from(r);
          a.enqueue(i), a.close();
        } });
      }, async text() {
        return Buffer.from(r).toString();
      }, async json() {
        let a = Buffer.from(r);
        return JSON.stringify(a.toString());
      }, async blob() {
        return new Blob(r);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function Re(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
l();
h();
d();
var Q = j(Z());
var k = class {
  constructor(t, r, s, a, i) {
    this.routes = t;
    this.output = r;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((n) => n.domain === this.url.hostname), this.locales = new Set(a.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: r, checkIntercept: s }) {
    let a = S(t.src, this.path, t.caseSensitive);
    if (!a.match || t.methods && !t.methods.map((n) => n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((n) => {
      let o = M(n, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((n) => M(n, i).valid) && !(r && t.status !== this.status)) {
      if (s && t.dest) {
        let n = /\/(\(\.+\))+/, o = n.test(t.dest), c = n.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: a, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let r = "x-middleware-override-headers", s = t.headers.get(r);
    if (s) {
      let c = new Set(s.split(",").map((u) => u.trim()));
      for (let u of c.keys()) {
        let p = `x-middleware-request-${u}`, y = t.headers.get(p);
        this.reqCtx.request.headers.get(u) !== y && (y ? this.reqCtx.request.headers.set(u, y) : this.reqCtx.request.headers.delete(u)), t.headers.delete(p);
      }
      t.headers.delete(r);
    }
    let a = "x-middleware-rewrite", i = t.headers.get(a);
    if (i) {
      let c = new URL(i, this.url), u = this.url.hostname !== c.hostname;
      this.path = u ? `${c}` : c.pathname, x(this.searchParams, c.searchParams), t.headers.delete(a);
    }
    let n = "x-middleware-next";
    t.headers.get(n) ? t.headers.delete(n) : !i && !t.headers.has("location") && (this.body = t.body, this.status = t.status), R(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let r = t && this.output[t];
    if (!r || r.type !== "middleware")
      return this.status = 500, false;
    let s = await C(r, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, r, s) {
    !t.headers || (R(this.headers.normal, t.headers, { match: r, captureGroupKeys: s }), t.important && R(this.headers.important, t.headers, { match: r, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, r, s) {
    if (!t.dest)
      return this.path;
    let a = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = v(i, r, s);
    let n = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(a), c = /^\/__index\.prefetch\.rsc$/i.test(a);
    n && !o && !c && (this.path = a);
    let u = /\.rsc$/i.test(this.path), p = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    u && !p && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let U = new URL(this.path, this.url);
    return x(this.searchParams, U.searchParams), P(this.path) || (this.path = U.pathname), a;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: a } } = t, i = a && this.cookies[a], n = A(i ?? ""), o = A(this.reqCtx.request.headers.get("accept-language") ?? ""), p = [...n, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (p) {
      !this.path.startsWith(p) && (this.headers.normal.set("location", p), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, r) {
    return !this.locales || r !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, r) {
    let s = this.getLocaleFriendlyRoute(r, t), { routeMatch: a, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, n = { ...s, dest: i };
    if (!a?.match || n.middlewarePath && this.middlewareInvoked.includes(n.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = a;
    if (this.applyRouteOverrides(n), this.applyLocaleRedirects(n), !await this.runRouteMiddleware(n.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(n, o, c), this.applyRouteStatus(n);
    let p = this.applyRouteDest(n, o, c);
    if (n.check && !P(this.path))
      if (p === this.path) {
        if (t !== "miss")
          return this.checkPhase(H(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return n.continue ? "next" : "done";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let r = true;
    for (let i of this.routes[t]) {
      let n = await this.checkRoute(t, i);
      if (n === "error")
        return "error";
      if (n === "done") {
        r = false;
        break;
      }
    }
    if (t === "hit" || P(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let n = new RegExp(`/${i}(/.*)`), c = this.path.match(n)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (t === "rewrite" && !s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let a = "miss";
    return s || t === "miss" || t === "error" ? a = "hit" : r && (a = H(t)), this.checkPhase(a);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let r = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), r;
  }
};
async function Y(e, t, r, s) {
  let a = new k(t.routes, r, e, s, t.wildcard), i = await ee(a);
  return Ce(e, i, r);
}
async function ee(e, t = "none", r = false) {
  return await e.run(t) === "error" || !r && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function Ce(e, { path: t = "/404", status: r, headers: s, searchParams: a, body: i }, n) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let p = [...a.keys()].length ? `?${a.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${p}`);
    }
    return new Response(null, { status: r, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: r });
  else if (P(t)) {
    let p = new URL(t);
    x(p.searchParams, a), c = await fetch(p, e.request);
  } else
    c = await C(n[t], e, { path: t, status: r, headers: s, searchParams: a });
  let u = s.normal;
  return R(u, c.headers), R(u, s.important), c = new Response(c.body, { ...c, status: r || c.status, headers: u }), c;
}
var ns = { async fetch(e, t, r) {
  X();
  let s = await __ENV_ALS_PROMISE__;
  if (!s) {
    let a = new URL(e.url), i = await t.ASSETS.fetch(`${a.protocol}//${a.host}/cdn-cgi/errors/no-nodejs_compat.html`), n = i.ok ? i.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(n, { status: 503 });
  }
  return s.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: _ }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return z(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let i = D(e);
    return Y({ request: i, ctx: r, assetsFetcher: t.ASSETS }, f, m, g);
  });
} };
export {
  ns as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.23020101900148915.mjs.map