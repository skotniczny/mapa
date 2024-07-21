// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var _svgUtilsJs = require("./js/svg-utils.js");
var _utilsJs = require("./js/utils.js");
var _modalJs = require("./js/modal.js");
var _dataJs = require("./js/data.js");
var _mapStateJs = require("./js/map-state.js");
const map = document.querySelector("svg");
const canvas = map.querySelector("#canvas");
const colorPicker = document.querySelector("#colorpicker");
const btnsMenu = document.querySelector(".menu-v");
const modal = document.querySelector(".modal");
const filePicker = document.querySelector("#filePicker");
const minZoom = 0.25;
const maxZoom = 4;
let scale = 1;
const mapState = new (0, _mapStateJs.MapState)("mapState");
const undoRecent = ()=>{
    (0, _utilsJs.clearElements)(mapState);
    mapState.undo();
    (0, _utilsJs.fillElements)(mapState);
    mapState.save();
};
const handleKeyboard = (event)=>{
    if (event.target.tagName.toLowerCase() !== "input") {
        const position = (0, _svgUtilsJs.svgPositionGet)(canvas);
        const key = event.key.toLowerCase();
        if (key === "arrowright" || key === "d") (0, _svgUtilsJs.svgPositionSet)(canvas, {
            x: position.x - 50,
            y: position.y
        });
        if (key === "arrowleft" || key === "a") (0, _svgUtilsJs.svgPositionSet)(canvas, {
            x: position.x + 50,
            y: position.y
        });
        if (key === "arrowup" || key === "w") (0, _svgUtilsJs.svgPositionSet)(canvas, {
            x: position.x,
            y: position.y + 50
        });
        if (key === "arrowdown" || key === "s") (0, _svgUtilsJs.svgPositionSet)(canvas, {
            x: position.x,
            y: position.y - 50
        });
        if (key === "z" && event.ctrlKey) undoRecent();
    }
};
const handleMouseWheel = (event)=>{
    event.preventDefault();
    // calc nextScale
    const delta = event.deltaY || event.deltaX;
    const scaleStep = Math.abs(delta) < 50 ? 0.05 // touchpad pitch
     : 0.25 // mouse wheel
    ;
    const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
    const nextScale = scale + scaleDelta // 'scale' is prev scale
    ;
    // calc fixedPoint
    const fixedPoint = {
        x: event.clientX,
        y: event.clientY
    };
    // scale
    // 'svgEl' is element to scale
    if (nextScale < minZoom || nextScale > maxZoom) return;
    (0, _svgUtilsJs.svgScale)(canvas, fixedPoint, scale, nextScale);
    scale = nextScale;
};
const isInvalidElement = (target)=>target.id === "ocean" || target.tagName !== "path";
const handleMapClick = (event)=>{
    const target = event.target;
    const color = colorPicker.value;
    if (isInvalidElement(target)) return;
    if (target.style.fill && (0, _utilsJs.rgb2hex)(target.style.fill) === color) {
        target.style.fill = "";
        mapState.remove([
            target.id
        ]);
    } else {
        target.style.fill = color;
        mapState.set([
            {
                pathId: target.id,
                color
            }
        ]);
    }
    mapState.save();
};
const handleMapContextmenu = (event)=>{
    event.preventDefault();
    const target = event.target;
    if (isInvalidElement(target)) return;
    const siblings = Array.from(target.parentNode.childNodes).filter((element)=>!isInvalidElement(element) && !element.classList.contains("landxx"));
    if (target.style.fill) {
        const paths = [];
        for (const item of siblings){
            item.style.fill = "";
            paths.push(item.id);
        }
        mapState.remove(paths);
    } else {
        const color = colorPicker.value;
        const paths = [];
        for (const item of siblings){
            item.style.fill = color;
            paths.push({
                pathId: item.id,
                color
            });
        }
        mapState.set(paths);
    }
    mapState.save();
};
const downloadMap = ()=>{
    /* global XMLSerializer */ const source = new XMLSerializer().serializeToString(map);
    // convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<?xml version="1.0" standalone="no"?>\r\n${source}`);
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "map.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};
const resetMap = ()=>{
    (0, _utilsJs.clearElements)(mapState);
    mapState.reset();
    mapState.save();
};
const readState = ()=>{
    mapState.load();
    (0, _utilsJs.fillElements)(mapState);
};
const pickFlag = (event)=>{
    const target = event.target;
    if (target.className === "flag") {
        const picked = document.querySelector("#pickedFlag");
        picked.textContent = event.target.firstChild.textContent;
        picked.title = event.target.title;
        (0, _modalJs.closeModal)(modal);
    }
};
const colorMap = ()=>{
    const colors = [
        "#cfe7c6",
        "#eed2c8",
        "#f8f09b",
        "#f2bb94",
        "#a3b7da",
        "#eca2ca",
        "#99b6dd",
        "#db82c0",
        "#f3c271",
        "#decfaa",
        "#93c9c0",
        "#f0e7b5"
    ];
    const groups = Array.from(canvas.children).filter((element)=>element.tagName === "g").map((element)=>element.querySelectorAll("path"));
    let index = Math.floor(Math.random() * colors.length);
    const paths = [];
    for (const group of groups){
        if (index > colors.length - 1) index = 0;
        if (group.length <= 1) continue;
        const color = colors[index];
        for (const path of group){
            if (path.classList.contains("landxx") || path.style.fill) continue;
            path.style.fill = color;
            paths.push({
                pathId: path.id,
                color
            });
        }
        index += 1;
    }
    mapState.set(paths);
    mapState.save();
};
const sortedFlags = (0, _dataJs.FLAGS).sort((a, b)=>a.name.localeCompare(b.name));
const modalContent = ()=>{
    const elements = [];
    for (const item of sortedFlags){
        const a = document.createElement("a");
        a.className = "flag";
        a.title = item.description;
        a.tabIndex = 1;
        const flag = document.createElement("span");
        if (item.emoji) flag.textContent = item.emoji;
        else flag.style.backgroundImage = `url(${item.svg})`;
        flag.className = "flag_emoji";
        const desc = document.createElement("span");
        desc.textContent = item.name;
        desc.className = "flag_description";
        a.appendChild(flag);
        a.appendChild(desc);
        elements.push(a);
    }
    return elements;
};
const handleSearch = (event)=>{
    const searchValue = event.target.value.toLowerCase();
    const modalItems = modal.querySelectorAll(".modal_items .flag");
    modalItems.forEach((item)=>{
        const itemText = item.querySelector(".flag_description").textContent.toLowerCase();
        if (itemText.includes(searchValue)) item.style.display = "flex";
        else item.style.display = "none";
    });
};
const pickCustomFlag = (event)=>{
    const file = event.target.files[0];
    const container = document.querySelector("#pickedFlag");
    container.innerHTML = "";
    const img = document.createElement("img");
    img.classList.add("flag_file");
    img.src = URL.createObjectURL(file);
    container.appendChild(img);
};
(0, _modalJs.createModalWithSearch)(modal, modalContent, handleSearch);
document.addEventListener("DOMContentLoaded", readState);
document.addEventListener("keydown", handleKeyboard);
map.addEventListener("wheel", handleMouseWheel);
map.addEventListener("click", handleMapClick);
map.addEventListener("contextmenu", handleMapContextmenu);
modal.addEventListener("click", pickFlag);
filePicker.addEventListener("change", pickCustomFlag);
btnsMenu.addEventListener("click", (event)=>{
    const targetId = event.target.id;
    if (targetId === "menuBtn") (0, _modalJs.openModal)(modal);
    if (targetId === "downloadBtn") downloadMap();
    if (targetId === "resetBtn") resetMap();
    if (targetId === "colorBtn") colorMap();
});

},{"./js/svg-utils.js":"d6Y5V","./js/utils.js":"72Dku","./js/modal.js":"aHHgN","./js/data.js":"kq51T","./js/map-state.js":"7104t"}],"d6Y5V":[function(require,module,exports) {
/*
 * Credit: AlexeyBoiko / DgrmJS
 * https://itnext.io/javascript-zoom-like-in-maps-for-svg-html-89c0df016d8d
 * https://github.com/AlexeyBoiko/DgrmJS/blob/e6d6a13c6294e79058f605ff1609c3f08ee5cf27/src/diagram-extensions/scale-feature.js
 */ /* global SVGTransform */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svgPositionSet", ()=>svgPositionSet);
parcelHelpers.export(exports, "svgPositionGet", ()=>svgPositionGet);
parcelHelpers.export(exports, "svgScale", ()=>svgScale);
function first(iterable, filter) {
    for (const el of iterable){
        if (!filter || filter(el)) return el;
    }
    return null;
}
function svgPositionSet(svgEl, position, svg) {
    ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_TRANSLATE, svg).setTranslate(position.x, position.y);
}
/**
  * @param {SVGGraphicsElement} svgEl
  * @returns { {x: number, y: number} }
  */ function svgPositionGet(svgEl) {
    const tr = first(svgEl.transform.baseVal, (tt)=>tt.type === SVGTransform.SVG_TRANSFORM_TRANSLATE);
    return tr ? {
        x: tr.matrix.e,
        y: tr.matrix.f
    } : {
        x: 0,
        y: 0
    };
}
function ensureTransform(svgEl, transform, svg) {
    let tr = first(svgEl.transform.baseVal, (tt)=>tt.type === transform);
    if (!tr) {
        tr = (svgEl.ownerSVGElement || svg).createSVGTransform();
        svgEl.transform.baseVal.appendItem(tr);
    }
    return tr;
}
/**
  * @param {SVGGraphicsElement} svgEl
  * @param {Point} fixedPoint
  *                this point will not change position while scale
  * @param {number} scale
  * @param {number} nextScale
  */ function svgScale(svgEl, fixedPoint, scale, nextScale) {
    const position = svgPositionGet(svgEl);
    svgPositionSet(svgEl, {
        x: nextScale / scale * (position.x - fixedPoint.x) + fixedPoint.x,
        y: nextScale / scale * (position.y - fixedPoint.y) + fixedPoint.y
    });
    ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE).setScale(nextScale, nextScale);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgb2hex", ()=>rgb2hex);
parcelHelpers.export(exports, "fillElements", ()=>fillElements);
parcelHelpers.export(exports, "clearElements", ()=>clearElements);
function rgb2hex(c) {
    return "#" + c.match(/\d+/g).map((x)=>(+x).toString(16).padStart(2, 0)).join("");
}
function fillElements(state, fill = true) {
    for (const item of state.keys)try {
        const el = document.querySelector(`#${item}`);
        if (el) el.style.fill = fill ? state.get(item) : "";
    } catch (e) {
        console.error("B\u0142\u0105d:", e.message);
    }
}
function clearElements(state) {
    fillElements(state, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHHgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createModal", ()=>createModal);
parcelHelpers.export(exports, "createModalWithSearch", ()=>createModalWithSearch);
parcelHelpers.export(exports, "openModal", ()=>openModal);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
function createModal(el, callback) {
    const modalBody = el.querySelector(".modal_body");
    const modalContent = document.createElement("div");
    const modalContentItems = document.createElement("div");
    modalContent.className = "modal_content";
    modalContentItems.className = "modal_items";
    callback().forEach((el)=>modalContentItems.appendChild(el));
    modalContent.appendChild(modalContentItems);
    modalBody.appendChild(modalContent);
    const closeBtn = el.querySelector(".modal_close");
    closeBtn.addEventListener("click", ()=>closeModal(el));
}
function createModalWithSearch(el, callback, searchCallback) {
    createModal(el, callback);
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "search";
    searchInput.classList.add("control", "control-field", "control-search");
    searchInput.addEventListener("input", searchCallback);
    el.querySelector(".modal_content").insertBefore(searchInput, el.querySelector(".modal_items"));
}
function openModal(el) {
    el.classList.add("modal-active");
}
function closeModal(el) {
    el.classList.remove("modal-active");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kq51T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FLAGS", ()=>FLAGS);
const FLAGS = [
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE8",
        description: "Flaga Wyspy Wniebowst\u0105pienia",
        name: "Wyspa Wniebowst\u0105pienia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDE9",
        description: "Flaga Andory",
        name: "Andora"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEA",
        description: "Flaga Zjednoczonych Emirat\xf3w Arabskich",
        name: "Zjednoczone Emiraty Arabskie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEB",
        description: "Flaga Afganistanu",
        name: "Afganistan"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEC",
        description: "Flaga Antigui i Barbudy",
        name: "Antigua i Barbuda"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDEE",
        description: "Flaga Anguilli",
        name: "Anguilla"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF1",
        description: "Flaga Albanii",
        name: "Albania"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF2",
        description: "Flaga Armenii",
        name: "Armenia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF4",
        description: "Flaga Angoli",
        name: "Angola"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF6",
        description: "Flaga Antarktyki",
        name: "Antarktyka"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF7",
        description: "Flaga Argentyny",
        name: "Argentyna"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF8",
        description: "Flaga Samoa Ameryka\u0144skiego",
        name: "Samoa Ameryka\u0144skie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDF9",
        description: "Flaga Austrii",
        name: "Austria"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFA",
        description: "Flaga Australii",
        name: "Australia"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFC",
        description: "Flaga Aruby",
        name: "Aruba"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFD",
        description: "Flaga Wysp Alandzkich",
        name: "Wyspy Alandzkie"
    },
    {
        emoji: "\uD83C\uDDE6\uD83C\uDDFF",
        description: "Flaga Azerbejd\u017Canu",
        name: "Azerbejd\u017Cann"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE6",
        description: "Flaga Bo\u015Bni i Hercegowiny",
        name: "Bo\u015Bnia i Hercegowina"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE7",
        description: "Flaga Barbadosu",
        name: "Barbados"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDE9",
        description: "Flaga Bangladeszu",
        name: "Bangladesz"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEA",
        description: "Flaga Belgii",
        name: "Belgia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEB",
        description: "Flaga Burkina Faso",
        name: "Burkina Faso"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEC",
        description: "Flaga Bu\u0142garii",
        name: "Bu\u0142garia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDED",
        description: "Flaga Bahrajnu",
        name: "Bahrajn"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEE",
        description: "Flaga Burundi",
        name: "Burundi"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDEF",
        description: "Flaga Beninu",
        name: "Benin"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF1",
        description: "Flaga Saint-Barth\xe9lemy",
        name: "Saint-Barth\xe9lemy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF2",
        description: "Flaga Bermud\xf3w",
        name: "Bermudy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF3",
        description: "Flaga Brunei",
        name: "Brunei"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF4",
        description: "Flaga Boliwii",
        name: "Boliwia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF6",
        description: "Flaga Bonaire",
        name: "Bonaire"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF7",
        description: "Flaga Brazylii",
        name: "Brazylia"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF8",
        description: "Flaga Baham\xf3w",
        name: "Bahamy"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDF9",
        description: "Flaga Bhutanu",
        name: "Bhutan"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFB",
        description: "Flaga Wyspy Bouveta",
        name: "Wyspy Bouveta"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFC",
        description: "Flaga Botswany",
        name: "Botswana"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFE",
        description: "Flaga Bia\u0142orusi",
        name: "Bia\u0142oru\u015B"
    },
    {
        emoji: "\uD83C\uDDE7\uD83C\uDDFF",
        description: "Flaga Belize",
        name: "Belize"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE6",
        description: "Flaga Kanady",
        name: "Kanada"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE8",
        description: "Flaga Wysp Kokosowych",
        name: "Wyspy Kokosowe"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDE9",
        description: "Flaga Demokratycznej Republiki Konga",
        name: "Demokratyczna Republika Konga"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEB",
        description: "Flaga Republiki \u015Arodkowoafryka\u0144skiej",
        name: "Republika \u015Arodkowoafryka\u0144ska"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEC",
        description: "Flaga Republiki Konga",
        name: "Republika Konga"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDED",
        description: "Flaga Szwajcarii",
        name: "Szwajcaria"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDEE",
        description: "Flaga Wybrze\u017Ca Ko\u015Bci S\u0142oniowej",
        name: "Wybrze\u017Ce Ko\u015Bci S\u0142oniowej"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF0",
        description: "Flaga Wysp Cooka",
        name: "Wyspy Cooka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF1",
        description: "Flaga Chile",
        name: "Chile"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF2",
        description: "Flaga Kamerunu",
        name: "Kamerun"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF3",
        description: "Flaga Chin",
        name: "Chiny"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF4",
        description: "Flaga Kolumbii",
        name: "Kolumbia"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF5",
        description: "Flaga Wyspy Clippertona",
        name: "Wyspa Clippertona"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDF7",
        description: "Flaga Kostaryki",
        name: "Kostaryka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFA",
        description: "Flaga Kuby",
        name: "Kuba"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFB",
        description: "Flaga Republiki Zielonego Przyl\u0105dka",
        name: "Republika Zielonego Przyl\u0105dka"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFC",
        description: "Flaga Cura\xe7ao",
        name: "Cura\xe7ao"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFD",
        description: "Flaga Wyspy Bo\u017Cego Narodzenia",
        name: "Wyspa Bo\u017Cego Narodzenia"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFE",
        description: "Flaga Cypru",
        name: "Cypr"
    },
    {
        emoji: "\uD83C\uDDE8\uD83C\uDDFF",
        description: "Flaga Czech",
        name: "Czechy"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEA",
        description: "Flaga Niemiec",
        name: "Niemcy"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEC",
        description: "Flaga Diego Garcia",
        name: "Diego Garcia"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDEF",
        description: "Flaga D\u017Cibuti",
        name: "D\u017Cibuti"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF0",
        description: "Flaga Danii",
        name: "Dania"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF2",
        description: "Flaga Dominiki",
        name: "Dominika"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDF4",
        description: "Flaga Dominikany",
        name: "Dominikana"
    },
    {
        emoji: "\uD83C\uDDE9\uD83C\uDDFF",
        description: "Flaga Algierii",
        name: "Algieria"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE6",
        description: "Flaga Ceuty i Melilli",
        name: "Ceuta i Melilla"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDE8",
        description: "Flaga Ekwadoru",
        name: "Ekwador"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEA",
        description: "Flaga Estonii",
        name: "Estonia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDEC",
        description: "Flaga Egiptu",
        name: "Egipt"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDED",
        description: "Flaga Sahary Zachodniej",
        name: "Sahara Zachodnia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF7",
        description: "Flaga Erytrei",
        name: "Erytrea"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF8",
        description: "Flaga Hiszpanii",
        name: "Hiszpania"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDF9",
        description: "Flaga Etiopii",
        name: "Etiopia"
    },
    {
        emoji: "\uD83C\uDDEA\uD83C\uDDFA",
        description: "Flaga Unii Europejskiej",
        name: "Unia Europejska"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEE",
        description: "Flaga Finlandii",
        name: "Finlandia"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDEF",
        description: "Flaga Fid\u017Ci",
        name: "Fid\u017Ci"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF0",
        description: "Flaga Falkland\xf3w",
        name: "Falklandy"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF2",
        description: "Flaga Mikronezji",
        name: "Mikronezja"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF4",
        description: "Flaga Wysp Owczych",
        name: "Wyspy Owcze"
    },
    {
        emoji: "\uD83C\uDDEB\uD83C\uDDF7",
        description: "Flaga Francji",
        name: "Francja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE6",
        description: "Flaga Gabonu",
        name: "Gabon"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE7",
        description: "Flaga Zjednoczonego Kr\xf3lestwa",
        name: "Wielka Brytania"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDE9",
        description: "Flaga Grenady",
        name: "Grenada"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEA",
        description: "Flaga Gruzji",
        name: "Gruzja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEB",
        description: "Flaga Gujany Francuskiej",
        name: "Gujana Francuska"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEC",
        description: "Flaga Wyspy Guernsey",
        name: "Wyspa Guernsey"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDED",
        description: "Flaga Ghany",
        name: "Ghana"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDEE",
        description: "Flaga Gibraltaru",
        name: "Gibraltar"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF1",
        description: "Flaga Grenlandii",
        name: "Grenlandia"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF2",
        description: "Flaga Gambii",
        name: "Gambia"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF3",
        description: "Flaga Gwinei",
        name: "Gwinea"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF5",
        description: "Flaga Gwadelupy",
        name: "Gwadelupa"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF6",
        description: "Flaga Gwinei R\xf3wnikowej",
        name: "Gwinea R\xf3wnikowa"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF7",
        description: "Flaga Grecji",
        name: "Grecja"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF8",
        description: "Flaga Po\u0142udniowej Georgii i Po\u0142udniowych Wysp Sandwich",
        name: "Po\u0142udniowa Georgia i Po\u0142udniowe Wyspy Sandwich"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDF9",
        description: "Flaga Gwatemali",
        name: "Gwatemala"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFA",
        description: "Flaga Guamu",
        name: "Guam"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFC",
        description: "Flaga Gwinei Bissau",
        name: "Gwinea Bissau"
    },
    {
        emoji: "\uD83C\uDDEC\uD83C\uDDFE",
        description: "Flaga Gujany",
        name: "Gujana"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF0",
        description: "Flaga Hongkongu",
        name: "Hongkong"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF2",
        description: "Flaga Wysp Heard i McDonalda",
        name: "Wyspy Heard i McDonald"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF3",
        description: "Flaga Hondurasu",
        name: "Honduras"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF7",
        description: "Flaga Chorwacji",
        name: "Chorwacja"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDF9",
        description: "Flaga Haiti",
        name: "Haiti"
    },
    {
        emoji: "\uD83C\uDDED\uD83C\uDDFA",
        description: "Flaga W\u0119gier",
        name: "W\u0119gry"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE8",
        description: "Flaga Wysp Kanaryjskich",
        name: "Wyspy Kanaryjskie"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDE9",
        description: "Flaga Indonezji",
        name: "Indonezja"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDEA",
        description: "Flaga Irlandii",
        name: "Irlandia"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF1",
        description: "Flaga Izraela",
        name: "Izrael"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF2",
        description: "Flaga Wyspy Man",
        name: "Wyspa Man"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF3",
        description: "Flaga Indii",
        name: "Indie"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF4",
        description: "Flaga Brytyjskiego Terytorium Oceanu Indyjskiego",
        name: "Brytyjskie Terytorium Oceanu Indyjskiego"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF6",
        description: "Flaga Iraku",
        name: "Irak"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF7",
        description: "Flaga Iranu",
        name: "Iran"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF8",
        description: "Flaga Islandii",
        name: "Islandia"
    },
    {
        emoji: "\uD83C\uDDEE\uD83C\uDDF9",
        description: "Flaga W\u0142och",
        name: "W\u0142ochy"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDEA",
        description: "Flaga Wyspy Jersey",
        name: "Wyspa Jersey"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF2",
        description: "Flaga Jamajki",
        name: "Jamajka"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF4",
        description: "Flaga Jordanii",
        name: "Jordania"
    },
    {
        emoji: "\uD83C\uDDEF\uD83C\uDDF5",
        description: "Flaga Japonii",
        name: "Japonia"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEA",
        description: "Flaga Kenii",
        name: "Kenia"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEC",
        description: "Flaga Kirgistanu",
        name: "Kirgistan"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDED",
        description: "Flaga Kambod\u017Cy",
        name: "Kambod\u017Ca"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDEE",
        description: "Flaga Kiribati",
        name: "Kiribati"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF2",
        description: "Flaga Komor\xf3w",
        name: "Komory"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF3",
        description: "Flaga Saint Kitts i Nevis",
        name: "Saint Kitts i Nevis"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF5",
        description: "Flaga Korei P\xf3\u0142nocnej",
        name: "Korea P\xf3\u0142nocna"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDF7",
        description: "Flaga Korei Po\u0142udniowej",
        name: "Korea Po\u0142udniowa"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFC",
        description: "Flaga Kuwejtu",
        name: "Kuwejt"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFE",
        description: "Flaga Kajman\xf3w",
        name: "Kajmany"
    },
    {
        emoji: "\uD83C\uDDF0\uD83C\uDDFF",
        description: "Flaga Kazachstanu",
        name: "Kazachstan"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE6",
        description: "Flaga Laosu",
        name: "Laos"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE7",
        description: "Flaga Libanu",
        name: "Liban"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDE8",
        description: "Flaga Saint Lucia",
        name: "Saint Lucia"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDEE",
        description: "Flaga Liechtensteinu",
        name: "Liechtenstein"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF0",
        description: "Flaga Sri Lanki",
        name: "Sri Lanka"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF7",
        description: "Flaga Liberii",
        name: "Liberia"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF8",
        description: "Flaga Lesotho",
        name: "Lesotho"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDF9",
        description: "Flaga Litwy",
        name: "Litwa"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFA",
        description: "Flaga Luksemburga",
        name: "Luksemburg"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFB",
        description: "Flaga \u0141otwy",
        name: "\u0141otwa"
    },
    {
        emoji: "\uD83C\uDDF1\uD83C\uDDFE",
        description: "Flaga Libii",
        name: "Libia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE6",
        description: "Flaga Maroka",
        name: "Maroko"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE8",
        description: "Flaga Monako",
        name: "Monako"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDE9",
        description: "Flaga Mo\u0142dawii",
        name: "Mo\u0142dawia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEA",
        description: "Flaga Czarnog\xf3ry",
        name: "Czarnog\xf3ra"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEB",
        description: "Flaga Saint-Martin",
        name: "Saint-Martin"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDEC",
        description: "Flaga Madagaskaru",
        name: "Madagaskar"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDED",
        description: "Flaga Wysp Marshalla",
        name: "Wysp Marshalla"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF0",
        description: "Flaga Macedonii P\xf3\u0142nocnej",
        name: "Macedonia P\xf3\u0142nocna"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF1",
        description: "Flaga Mali",
        name: "Mali"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF2",
        description: "Flaga Mjanmy (Birmy)",
        name: "Mjanma (Birma)"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF3",
        description: "Flaga Mongolii",
        name: "Mongolia"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF4",
        description: "Flaga Makau",
        name: "Makau"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF5",
        description: "Flaga Marian\xf3w Po\u0301\u0142nocnych",
        name: "Mariany Po\u0301\u0142nocne"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF6",
        description: "Flaga Martyniki",
        name: "Martynika"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF7",
        description: "Flaga Mauretanii",
        name: "Mauretania"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF8",
        description: "Flaga Montserratu",
        name: "Montserrat"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDF9",
        description: "Flaga Malty",
        name: "Malta"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFA",
        description: "Flaga Mauritiusa",
        name: "Mauritius"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFB",
        description: "Flaga Malediw\xf3w",
        name: "Malediwy"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFC",
        description: "Flaga Malawi",
        name: "Malawi"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFD",
        description: "Flaga Meksyku",
        name: "Meksyk"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFE",
        description: "Flaga Malezji",
        name: "Malezja"
    },
    {
        emoji: "\uD83C\uDDF2\uD83C\uDDFF",
        description: "Flaga Mozambiku",
        name: "Mozambik"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE6",
        description: "Flaga Namibii",
        name: "Namibia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDE8",
        description: "Flaga Nowej Kaledonii",
        name: "Nowej Kaledonia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEA",
        description: "Flaga Nigru",
        name: "Niger"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEB",
        description: "Flaga Wyspy Norfolk",
        name: "Wyspa Norfolk"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEC",
        description: "Flaga Nigerii",
        name: "Nigeria"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDEE",
        description: "Flaga Nikaragui",
        name: "Nikaragua"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF1",
        description: "Flaga Holandii",
        name: "Holandia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF4",
        description: "Flaga Norwegii",
        name: "Norwegia"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF5",
        description: "Flaga Nepalu",
        name: "Nepal"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDF7",
        description: "Flaga Nauru",
        name: "Nauru"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFA",
        description: "Flaga Niue",
        name: "Niue"
    },
    {
        emoji: "\uD83C\uDDF3\uD83C\uDDFF",
        description: "Flaga Nowej Zelandii",
        name: "Nowa Zelandia"
    },
    {
        emoji: "\uD83C\uDDF4\uD83C\uDDF2",
        description: "Flaga Omanu",
        name: "Oman"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDE6",
        description: "Flaga Panamy",
        name: "Panama"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEA",
        description: "Flaga Peru",
        name: "Peru"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEB",
        description: "Flaga Polinezji Francuskiej",
        name: "Polinezja Francuska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDEC",
        description: "Flaga Papui-Nowej Gwinei",
        name: "Papua-Nowea Gwinea"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDED",
        description: "Flaga Filipin",
        name: "Filipiny"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF0",
        description: "Flaga Pakistanu",
        name: "Pakistan"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF1",
        description: "Flaga Polski",
        name: "Polska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF2",
        description: "Flaga Saint-Pierre i Miquelon",
        name: "Saint-Pierre i Miquelon"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF3",
        description: "Flaga Wyspy Pitcairn",
        name: "Wyspa Pitcairn"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF7",
        description: "Flaga Portoryko",
        name: "Portoryko"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF8",
        description: "Flaga Autonomii Palesty\u0144skiej",
        name: "Autonomia Palesty\u0144ska"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDF9",
        description: "Flaga Portugalii",
        name: "Portugalia"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFC",
        description: "Flaga Palau",
        name: "Palau"
    },
    {
        emoji: "\uD83C\uDDF5\uD83C\uDDFE",
        description: "Flaga Paragwaju",
        name: "Paragwaj"
    },
    {
        emoji: "\uD83C\uDDF6\uD83C\uDDE6",
        description: "Flaga Kataru",
        name: "Katar"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDEA",
        description: "Flaga Reunionu",
        name: "Reunion"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF4",
        description: "Flaga Rumunii",
        name: "Rumunia"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDF8",
        description: "Flaga Serbii",
        name: "Serbia"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFA",
        description: "Flaga Rosji",
        name: "Rosja"
    },
    {
        emoji: "\uD83C\uDDF7\uD83C\uDDFC",
        description: "Flaga Rwandy",
        name: "Rwanda"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE6",
        description: "Flaga Arabii Saudyjskiej",
        name: "Arabia Saudyjska"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE7",
        description: "Flaga Wysp Salomona",
        name: "Wyspy Salomona"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE8",
        description: "Flaga Seszeli",
        name: "Seszele"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDE9",
        description: "Flaga Sudanu",
        name: "Sudan"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEA",
        description: "Flaga Szwecji",
        name: "Szwecja"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEC",
        description: "Flaga Singapuru",
        name: "Singapur"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDED",
        description: "Flaga Wyspy \u015Awi\u0119tej Heleny",
        name: "Wyspy \u015Awi\u0119tej Heleny"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEE",
        description: "Flaga S\u0142owenii",
        name: "S\u0142owenia"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDEF",
        description: "Flaga Wysp Svalbard i Jan Mayen",
        name: "Wyspy Svalbard i Jan Mayen"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF0",
        description: "Flaga S\u0142owacji",
        name: "S\u0142owacja"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF1",
        description: "Flaga Sierra Leone",
        name: "Sierra Leone"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF2",
        description: "Flaga San Marino",
        name: "San Marino"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF3",
        description: "Flaga Senegalu",
        name: "Senegal"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF4",
        description: "Flaga Somalii",
        name: "Somalia"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF7",
        description: "Flaga Surinamu",
        name: "Surinam"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF8",
        description: "Flaga Sudanu Po\u0142udniowego",
        name: "Sudan Po\u0142udniowy"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDF9",
        description: "Flaga Wysp \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119cej",
        name: "Wyspa \u015Awi\u0119tego Tomasza i Ksi\u0105\u017C\u0119ca"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFB",
        description: "Flaga Salwadoru",
        name: "Salwador"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFD",
        description: "Flaga Sint Maarten",
        name: "Sint Maarten"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFE",
        description: "Flaga Syrii",
        name: "Syria"
    },
    {
        emoji: "\uD83C\uDDF8\uD83C\uDDFF",
        description: "Flaga Eswatini",
        name: "Eswatini"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE6",
        description: "Flaga Tristan da Cunha",
        name: "Tristan da Cunha"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE8",
        description: "Flaga Wysp Turks i Caicos",
        name: "Wyspy Turks i Caicos"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDE9",
        description: "Flaga Czadu",
        name: "Czad"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEB",
        description: "Flaga Francuskich Terytori\xf3w Po\u0142udniowych",
        name: "Francuskie Terytoria Po\u0142udniowe"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEC",
        description: "Flaga Togo",
        name: "Togo"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDED",
        description: "Flaga Tajlandii",
        name: "Tajlandia"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDEF",
        description: "Flaga Tad\u017Cykistanu",
        name: "Tad\u017Cykistan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF0",
        description: "Flaga Tokelau",
        name: "Tokelau"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF1",
        description: "Flaga Timoru Wschodniego",
        name: "Timor Wschodni"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF2",
        description: "Flaga Turkmenistanu",
        name: "Turkmenistan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF3",
        description: "Flaga Tunezji",
        name: "Tunezja"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF4",
        description: "Flaga Tonga",
        name: "Tongo"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF7",
        description: "Flaga Turcji",
        name: "Turcja"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDF9",
        description: "Flaga Trynidadu i Tobago",
        name: "Trynidad i Tobago"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFB",
        description: "Flaga Tuvalu",
        name: "Tuvalu"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFC",
        description: "Flaga Tajwanu",
        name: "Tajwan"
    },
    {
        emoji: "\uD83C\uDDF9\uD83C\uDDFF",
        description: "Flaga Tanzanii",
        name: "Tanzania"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDE6",
        description: "Flaga Ukrainy",
        name: "Ukraina"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDEC",
        description: "Flaga Ugandy",
        name: "Uganda"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF2",
        description: "Flaga Dalekich Wysp Mniejszych Stan\xf3w Zjednoczonych",
        name: "Dalekie Wyspy Mniejsze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF3",
        description: "Flaga ONZ",
        name: "ONZ"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDF8",
        description: "Flaga Stan\xf3w Zjednoczonych",
        name: "Stany Zjednoczone"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFE",
        description: "Flaga Urugwaju",
        name: "Urugwaj"
    },
    {
        emoji: "\uD83C\uDDFA\uD83C\uDDFF",
        description: "Flaga Uzbekistanu",
        name: "Uzbekistan"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE6",
        description: "Flaga Watykanu",
        name: "Watykan"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDE8",
        description: "Flaga Saint Vincent i Grenadyn",
        name: "Saint Vincent i Grenadyn"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEA",
        description: "Flaga Wenezueli",
        name: "Wenezuela"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEC",
        description: "Flaga Brytyjskich Wysp Dziewiczych",
        name: "Brytyjskie Wyspy Dziewicze"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDEE",
        description: "Flaga Wysp Dziewiczych Stan\xf3w Zjednoczonych",
        name: "Wyspy Dziewicze Stan\xf3w Zjednoczonych"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDF3",
        description: "Flaga Wietnamu",
        name: "Wietnam"
    },
    {
        emoji: "\uD83C\uDDFB\uD83C\uDDFA",
        description: "Flaga Vanuatu",
        name: "Vanuatu"
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDEB",
        description: "Flaga Wysp Wallis i Futuna",
        name: "Wyspy Wallis i Futuna"
    },
    {
        emoji: "\uD83C\uDDFC\uD83C\uDDF8",
        description: "Flaga Samoa",
        name: "Samoa"
    },
    {
        emoji: "\uD83C\uDDFD\uD83C\uDDF0",
        description: "Flaga Kosowa",
        name: "Kosowo"
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDEA",
        description: "Flaga Jemenu",
        name: "Jemen"
    },
    {
        emoji: "\uD83C\uDDFE\uD83C\uDDF9",
        description: "Flaga Majotty",
        name: "Majotta"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDE6",
        description: "Flaga Republiki Po\u0142udniowej Afryki",
        name: "Republika Po\u0142udniowej Afryki"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDF2",
        description: "Flaga Zambii",
        name: "Zambia"
    },
    {
        emoji: "\uD83C\uDDFF\uD83C\uDDFC",
        description: "Flaga Zimbabwe",
        name: "Zimbabwe"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7104t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MapState", ()=>MapState);
class MapState {
    #state = {};
    #prevState = {};
    #localStorageKeyName;
    constructor(localStorageKeyName){
        this.#localStorageKeyName = localStorageKeyName;
    }
    get keys() {
        return Object.keys(this.#state);
    }
    get(id) {
        return this.#state[id];
    }
    set(items) {
        if (items.length <= 0) return;
        this.#prevState = Object.assign({}, this.#state);
        for (const element of items)this.#state[element.pathId] = element.color;
    }
    remove(items) {
        if (items.length <= 0) return;
        this.#prevState = Object.assign({}, this.#state);
        for (const id of items)delete this.#state[id];
    }
    reset() {
        this.#prevState = this.#state;
        this.#state = {};
    }
    undo() {
        const temp = this.#state;
        this.#state = this.#prevState;
        this.#prevState = temp;
    }
    load() {
        this.#state = JSON.parse(window.localStorage.getItem(this.#localStorageKeyName)) || {};
    }
    save() {
        window.localStorage.setItem(this.#localStorageKeyName, JSON.stringify(this.#state));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire4556")

//# sourceMappingURL=index.0641b553.js.map
