require = function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c)
                        return c(i, !0);
                    if (u)
                        return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)
            o(t[i]);
        return o
    }
    return r
}()({
    1: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-utils")
          , t = require("@apple/analytics-data-layer")
          , n = require("@apple/analytics-omniture-constants");
        function r(e) {
            if (e && e.__esModule)
                return e;
            var t = Object.create(null);
            return e && Object.keys(e).forEach(function(n) {
                if ("default" !== n) {
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, r.get ? r : {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }
            }),
            t.default = e,
            Object.freeze(t)
        }
        var o = r(t)
          , a = function(e) {
            return function(t) {
                return "string" == typeof t ? t.slice(0, e) : null
            }
        }
          , i = {
            path: "/",
            secure: !0
        }
          , c = [t.KEYS.PERSISTED, t.KEYS.DEFERRED_BEACON]
          , s = [{
            name: "btuid",
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(7)]
        }, {
            name: n.VARS.EVENTS,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(150)]
        }, {
            name: n.VARS.EVAR_1,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(250)]
        }, {
            name: n.VARS.PROP_14,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(100)]
        }, {
            name: n.VARS.PROP_57,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(100)]
        }, {
            name: n.VARS.PROP_7,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(100)]
        }, {
            name: n.VARS.EVAR_15,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(250)]
        }, {
            name: n.VARS.EVAR_23,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(250)]
        }, {
            name: n.VARS.PROP_25,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(100)]
        }, {
            name: n.VARS.EVAR_2,
            sanitizers: [e.beaconHelpers.toBeaconSafeVal, a(250)]
        }, {
            name: "pj",
            sanitizers: [a(100)]
        }];
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach(function(t) {
                    p(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function b(e) {
            return function(e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var m = [].concat(b(t.KEYS.PATHS.CONFIG), ["global", "cookieDomain"])
          , y = function() {
            return t.get(m)
        }
          , S = e.pipe(function() {
            var t = e.cookieJson.get("mk_epub");
            return e.cookieJson.set("mk_epub", null, l(l({}, i), {}, {
                domain: y()
            })),
            t
        }, function(t) {
            var n = o.get(c);
            !e.beaconHelpers.isNotEmpty(t) || e.beaconHelpers.isNotEmpty(n) && t.btuid === n.btuid || o.set(c, t),
            o.remove([].concat(b(c), ["btuid"]))
        })
          , O = e.pipe(function(t) {
            return e.beaconHelpers.isNotEmpty(t) ? s.reduce(function(n, r) {
                var a = r.sanitizers || []
                  , o = e.pipe.apply(void 0, b(a))(t[r.name]);
                return o && (n[r.name] = o),
                n
            }, {}) : null
        }, function(t) {
            return e.beaconHelpers.isNotEmpty(t) ? s.reduce(function(n, r) {
                var a = n.beacon
                  , o = n.beaconLength
                  , i = r.name
                  , c = e.toStr(t[i])
                  , s = i.length + c.length + 6;
                return c && o + s <= 500 ? (a[i] = c,
                {
                    beacon: a,
                    beaconLength: o + s
                }) : {
                    beacon: a,
                    beaconLength: o
                }
            }, {
                beacon: {},
                beaconLength: 0
            }).beacon : null
        })
          , g = e.pipe(function() {
            var t = o.get(c);
            return e.beaconHelpers.isNotEmpty(t) && (t.btuid = window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36),
            o.set(c, t)),
            t
        }, O, function(t) {
            e.beaconHelpers.isNotEmpty(t) && e.cookieJson.set("mk_epub", t, l(l({}, i), {}, {
                domain: y()
            }))
        });
        exports.retrieve = S,
        exports.store = g
    }
    , {
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-omniture-constants": 8,
        "@apple/analytics-utils": 12
    }],
    2: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-merge-beacons")
          , r = require("@apple/analytics-passive-tracker")
          , t = require("@apple/analytics-omniture-collection");
        function n(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })),
                t.push.apply(t, n)
            }
            return t
        }
        function a(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? n(Object(t), !0).forEach(function(r) {
                    c(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }
        function c(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var o = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = e.keyPrefix, t = void 0 === r ? "" : r, n = e.valuePrefix, a = void 0 === n ? "" : n, o = e.count, c = void 0 === o ? 0 : o, i = {}, u = 1; u <= c; u++)
                i["".concat(t).concat(u)] = "".concat(a).concat(u);
            return i
        }
          , i = a(a({
            CAMPAIGN: "campaign",
            CHANNEL: "channel",
            CHAR_SET: "charSet",
            CITY: "city",
            CURRENCY_CODE: "currencyCode",
            EVENTS: "events",
            HIER1: "hier1",
            LINK_INTERNAL_FILTERS: "linkInternalFilters",
            LINK_TRACK_EVENTS: "linkTrackEvents",
            LINK_TRACK_VARS: "linkTrackVars",
            LIST_1: "list1",
            LIST_2: "list2",
            LIST_3: "list3",
            PAGE_NAME: "pageName",
            PAGE_TYPE: "pageType",
            PAGE_URL: "pageURL",
            PRODUCTS: "products",
            PROVINCE: "province",
            PURCHASE_ID: "purchaseID",
            REFERRER: "referrer",
            SERVER: "server",
            STATE: "state",
            TRACKING_SERVER: "trackingServer",
            TRACKING_SERVER_SECURE: "trackingServerSecure",
            ZIP: "zip"
        }, o({
            keyPrefix: "PROP_",
            valuePrefix: "prop",
            count: 75
        })), o({
            keyPrefix: "EVAR_",
            valuePrefix: "eVar",
            count: 155
        }))
          , u = o({
            keyPrefix: "EVENT_",
            valuePrefix: "event",
            count: 520
        });
        function l(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })),
                t.push.apply(t, n)
            }
            return t
        }
        function p(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? l(Object(t), !0).forEach(function(r) {
                    s(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }
        function s(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        u.SC_ADD = "scAdd",
        u.PROD_VIEW = "prodView";
        var f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = p({}, e);
            return e.hasOwnProperty(i.EVENTS) && (r[i.EVENTS] = t.parseEventCollectionString(e[i.EVENTS])),
            e.hasOwnProperty(i.PRODUCTS) && (r[i.PRODUCTS] = t.parseProductCollectionString(e[i.PRODUCTS])),
            r
        }
          , v = [function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = r.current
              , n = void 0 === t ? {} : t
              , a = r.previous
              , o = void 0 === a ? {} : a;
            return e.merge({
                target: f(o.beacon),
                source: f(n.beacon)
            })
        }
        , function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = Object.keys(e).reduce(function(r, t) {
                var n = e[t];
                if (!n || !n.api)
                    return r;
                var a = n.api
                  , o = "".concat("current" === t ? "pageName" : "c14", '+"');
                return r.concat(a.map(function(e) {
                    var r = e.type
                      , t = e.value;
                    return o + "::" + r + "::" + t
                }))
            }, []).join('^"+');
            return 0 === r.length ? null : s({}, i.LIST_2, "D=" + r + '"')
        }
        , function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).previous;
            if (!e || !e.pageName)
                return null;
            var r = e.pageName;
            return s({}, i.PROP_14, r)
        }
        , function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).previous;
            if (!e || !e.area)
                return null;
            var r = e.area;
            return s({}, i.PROP_57, r)
        }
        ]
          , O = {
            pageLoad: "page",
            userInteraction: "next"
        }
          , b = function(t) {
            var n = t.type
              , a = t.globalTracking
              , o = t.element;
            if (!Object.keys(O).includes(n) || a && function(e) {
                if (!o)
                    return !1;
                var r = o.closest("a");
                return null !== r && !(!r.dataset.aseLoader && !r.dataset.aseTabsLoader && "#" !== r.getAttribute("href"))
            }() || t.deferred && !0 === t.deferred)
                return t;
            var c = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "next"
                  , n = r.load(t);
                return null === n ? null : v.reduce(function(r, t) {
                    var a = t(n);
                    return a && e.merge({
                        target: r,
                        source: a
                    }),
                    r
                }, {})
            }(O[n]);
            return null !== c && (t.beacon = e.merge({
                target: t.beacon,
                source: c
            })),
            t
        };
        b.label = "analytics-bp-passive-tracker-loader",
        exports.passiveTrackerLoader = b
    }
    , {
        "@apple/analytics-merge-beacons": 6,
        "@apple/analytics-omniture-collection": 7,
        "@apple/analytics-passive-tracker": 9
    }],
    3: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = {
            CONFIG: ["pageDataModel", "config"],
            PAGE_DATA: ["pageDataModel", "data"],
            DEFERRED_BEACON: ["persisted", "deferredBeacon"]
        };
        exports.CLICK_TIMER = "clickTimer",
        exports.DEFERRED_BEACON = "deferredBeacon",
        exports.METADATA = "metaData",
        exports.PAGE_DATA_MODEL = "pageDataModel",
        exports.PAGE_DATA_MODEL_LEGACY = "pageDataModel.data.properties",
        exports.PAGE_LOAD = "pageLoad",
        exports.PATHS = e,
        exports.PERSISTED = "persisted",
        exports.PURCHASE_JOURNEY = "purchaseJourney",
        exports.REFERRER = "referrer",
        exports.RELAY = "relay",
        exports.SESSION_STORE = "sessionStore"
    }
    , {}],
    4: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-data-layer-keys")
          , t = require("@apple/analytics-utils");
        function r(e) {
            if (e && e.__esModule)
                return e;
            var t = Object.create(null);
            return e && Object.keys(e).forEach(function(r) {
                if ("default" !== r) {
                    var o = Object.getOwnPropertyDescriptor(e, r);
                    Object.defineProperty(t, r, o.get ? o : {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                }
            }),
            t.default = e,
            Object.freeze(t)
        }
        var o, n = r(e), i = function() {
            t.localStorage.remove("mk_epub_expiry"),
            t.localStorage.remove("mk_epub")
        }, s = function() {
            return (Number(t.localStorage.get("mk_epub_expiry")) || 0) < Date.now()
        }, a = function e(r) {
            !r && s() || (t.localStorage.set("mk_epub_expiry", Date.now() + 72e5),
            o = setTimeout(e, 3e5))
        }, c = function() {
            clearTimeout(o),
            a(!0)
        };
        function u(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var l = function(e) {
            return !(!e || "object" !== f(e) || Array.isArray(e))
        }
          , y = {}
          , b = function(e) {
            return t.objectPath.get(y, e)
        }
          , m = function(e, r) {
            y = t.objectPath.set(y, e, r)
        }
          , g = {}
          , k = {
            pageDataModel: ["key", "selector"],
            meta: ["key", "selector", "keyAttribute", "valueAttribute"],
            state: ["defaultState"],
            persisted: ["key"],
            sessionStore: ["key"]
        }
          , d = function(e) {
            l(e) && Object.keys(k).forEach(function(t) {
                (function(e, t) {
                    return l(e) && Array.isArray(t) && t.every(function(t) {
                        return e[t]
                    })
                }
                )(e[t], k[t]) && (g[t] = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(r), !0).forEach(function(t) {
                            p(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({}, e[t]))
            })
        }
          , S = function() {
            g.persisted && m([g.persisted.key], function() {
                if (s())
                    return i(),
                    {};
                var e = t.localStorageJson.get("mk_epub");
                return e ? (c(),
                e) : (i(),
                {})
            }())
        }
          , j = function() {
            var e;
            g.persisted && ((e = b([g.persisted.key])) && "object" === f(e) && Object.keys(e).length ? (c(),
            t.localStorageJson.set("mk_epub", e)) : i())
        }
          , v = function() {
            t.sessionStorage.remove("mk_epub")
        }
          , O = function() {
            g.sessionStore && m([g.sessionStore.key], t.sessionStorageJson.get("mk_epub") || (v(),
            {}))
        }
          , P = function() {
            var e;
            g.sessionStore && ((e = b([g.sessionStore.key])) && "object" === f(e) && Object.keys(e).length ? t.sessionStorageJson.set("mk_epub", e) : v())
        }
          , h = function(e, r) {
            var o = t.objectPath.formatPath(e);
            m(o, r),
            g.persisted && o[0] === g.persisted.key && j(),
            g.sessionStore && o[0] === g.sessionStore.key && P()
        }
          , _ = function() {
            var e;
            e = g.state && g.state.defaultState,
            y = l(e) ? e : {},
            function() {
                if (g.meta) {
                    for (var e = g.meta, t = e.key, r = e.selector, o = e.keyAttribute, n = e.keyPrefix, i = e.valueAttribute, s = {}, c = document.querySelectorAll(r), u = 0; u < c.length; u++)
                        s[c[u].getAttribute(o).replace(n, "")] = c[u].getAttribute(i);
                    h(t, s)
                }
            }(),
            function() {
                if (g.pageDataModel) {
                    var e = {}
                      , t = window.document.querySelector(g.pageDataModel.selector);
                    try {
                        e = JSON.parse(t.textContent)
                    } catch (e) {}
                    h(g.pageDataModel.key, e)
                }
            }(),
            S(),
            O()
        }
          , w = !1;
        exports.KEYS = n,
        exports.get = function(e) {
            return e ? b(t.objectPath.formatPath(e)) : b()
        }
        ,
        exports.init = function(e) {
            var t;
            w || (w = !0,
            d(e),
            _(),
            g.persisted && "function" == typeof (t = S) && window.addEventListener("storage", function(e) {
                return function(t) {
                    "mk_epub" === t.key && e()
                }
            }(t)))
        }
        ,
        exports.remove = function(e) {
            var r = t.objectPath.formatPath(e);
            !function(e) {
                y = t.objectPath.remove(y, e)
            }(r),
            g.persisted && r[0] === g.persisted.key && j(),
            g.sessionStore && r[0] === g.sessionStore.key && P()
        }
        ,
        exports.set = h
    }
    , {
        "@apple/analytics-data-layer-keys": 3,
        "@apple/analytics-utils": 12
    }],
    5: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-omniture-collection")
          , n = require("@apple/analytics-omniture-constants")
          , t = {
            engagementObserver: {},
            onPageEnd: function() {},
            element: null
        }
          , r = function(r) {
            if (!(r[0].intersectionRatio <= 0)) {
                var o, a, i, l = (o = {},
                a = n.VARS.EVENTS,
                i = new e.OmnitureCollection(new e.OmnitureEvent([n.EVENTS.EVENT_406])),
                a in o ? Object.defineProperty(o, a, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = i,
                o);
                t.onPageEnd({
                    beacon: l
                }),
                t.engagementObserver.disconnect()
            }
        }
          , o = function(e) {
            var n = e.element;
            t.engagementObserver = new IntersectionObserver(r),
            t.engagementObserver.observe(n)
        }
          , a = !1;
        exports.endOfPage = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = e.element
              , r = e.onPageEnd;
            n instanceof HTMLElement && (a || (t.element = n,
            "function" == typeof r && (t.onPageEnd = r),
            o({
                element: n
            }),
            a = !0))
        }
        ,
        exports.update = function() {
            t.element instanceof HTMLElement && (t.engagementObserver.disconnect(),
            o({
                element: t.element
            }))
        }
    }
    , {
        "@apple/analytics-omniture-collection": 7,
        "@apple/analytics-omniture-constants": 8
    }],
    6: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-omniture-collection")
          , r = Object.freeze({
            __proto__: null,
            target: function(e) {
                return e
            },
            source: function(e, r) {
                return r
            },
            targetOrSource: function(e, r) {
                return e || r
            },
            sourceOrTarget: function(e, r) {
                return r || e
            },
            targetAndSource: function(e, r) {
                return e && r
            },
            sourceAndTarget: function(e, r) {
                return r && e
            },
            targetPlusSource: function(e, r) {
                return e + r
            },
            sourcePlusTarget: function(e, r) {
                return r + e
            },
            targetMergeSource: function(e, r) {
                return e.merge(r)
            },
            sourceMergeTarget: function(e, r) {
                return r.merge(e)
            }
        });
        exports.merge = function(r) {
            var t = r.target
              , n = void 0 === t ? {} : t
              , u = r.source
              , o = void 0 === u ? {} : u
              , c = r.mergers
              , i = void 0 === c ? {} : c;
            return Object.keys(o).forEach(function(r) {
                i[r] ? n[r] = i[r](n[r], o[r]) : n[r]instanceof e.OmnitureCollection && o[r]instanceof e.OmnitureCollection ? n[r].merge(o[r]) : n[r] = o[r]
            }),
            n
        }
        ,
        exports.mergers = r
    }
    , {
        "@apple/analytics-omniture-collection": 7
    }],
    7: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var t = require("@apple/analytics-utils")
          , e = require("@apple/analytics-omniture-constants");
        function r(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    a(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function u(t, e, r) {
            return e && o(t.prototype, e),
            r && o(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        function a(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function c(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e && l(t, e)
        }
        function s(t) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function l(t, e) {
            return (l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function f() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (t) {
                return !1
            }
        }
        function p(t, e, r) {
            return (p = f() ? Reflect.construct : function(t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var i = new (Function.bind.apply(t, n));
                return r && l(i, r.prototype),
                i
            }
            ).apply(null, arguments)
        }
        function y(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return (y = function(t) {
                if (null === t || (r = t,
                -1 === Function.toString.call(r).indexOf("[native code]")))
                    return t;
                var r;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, n)
                }
                function n() {
                    return p(t, arguments, s(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                l(n, t)
            }
            )(t)
        }
        function v(t, e) {
            if (e && ("object" == typeof e || "function" == typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }
        function h(t) {
            var e = f();
            return function() {
                var r, n = s(t);
                if (e) {
                    var i = s(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return v(this, r)
            }
        }
        function b(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != r) {
                    var n, i, o = [], u = !0, a = !1;
                    try {
                        for (r = r.call(t); !(u = (n = r.next()).done) && (o.push(n.value),
                        !e || o.length !== e); u = !0)
                            ;
                    } catch (t) {
                        a = !0,
                        i = t
                    } finally {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                    return o
                }
            }(t, e) || m(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(t) {
            return function(t) {
                if (Array.isArray(t))
                    return d(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                    return Array.from(t)
            }(t) || m(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function m(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return d(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === r && t.constructor && (r = t.constructor.name),
                "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
            }
        }
        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        var w = function(t) {
            if (!t)
                return {
                    prefix: "",
                    number: 0
                };
            var e = t.match(/\d+$/);
            if (!e)
                return {
                    prefix: t,
                    number: 0
                };
            var r = e.index;
            return {
                prefix: t.slice(0, r),
                number: parseInt(t.slice(r), 10)
            }
        }
          , k = function() {
            function e(r) {
                i(this, e),
                this.key = t.toStrTrim(r)
            }
            return u(e, [{
                key: "merge",
                value: function(t) {
                    return t instanceof e && (this.key = t.key),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    return this.key
                }
            }, {
                key: "compareKeys",
                value: function(t) {
                    if (!(t instanceof e))
                        return 0;
                    var r = w(this.key)
                      , n = r.prefix
                      , i = r.number
                      , o = w(t.key)
                      , u = o.prefix
                      , a = o.number;
                    return i === a && n && u ? n.localeCompare(u) : i - a
                }
            }]),
            e
        }()
          , O = ","
          , S = ";"
          , j = "|"
          , E = "|"
          , P = function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return e.reduce(function(t, e) {
                return e instanceof x ? t.push.apply(t, g(e.values())) : t.push(e),
                t
            }, []).filter(function(t) {
                return t instanceof k
            })
        }
          , x = function(t) {
            c(r, y(Map));
            var e = h(r);
            function r() {
                var t, n;
                return i(this, r),
                (t = n = e.call(this)).merge.apply(t, arguments),
                n
            }
            return u(r, [{
                key: "add",
                value: function(t) {
                    return t instanceof k ? this.set(t.key, t) : this
                }
            }, {
                key: "merge",
                value: function() {
                    var t = this;
                    return P.apply(void 0, arguments).forEach(function(e) {
                        if (e instanceof k) {
                            var r = t.get(e.key);
                            r ? r.merge(e) : t.add(e)
                        }
                    }),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O;
                    return g(this.values()).map(function(t) {
                        return t.toString()
                    }).filter(Boolean).join(t)
                }
            }, {
                key: "sort",
                value: function() {
                    var t = g(this.values());
                    this.clear(),
                    t.sort(function(t, e) {
                        return t.compareKeys(e)
                    }),
                    this.merge.apply(this, g(t))
                }
            }]),
            r
        }()
          , T = function(e) {
            c(n, k);
            var r = h(n);
            function n(t, e) {
                var o;
                return i(this, n),
                (o = r.call(this, t)).value = e,
                o
            }
            return u(n, [{
                key: "merge",
                value: function(t) {
                    return t instanceof n && t.key === this.key && (this.value = t.value),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    if (!this.key)
                        return "";
                    var e = t.toStrTrim(this.value);
                    return e && "true" !== e ? "".concat(this.key, "=").concat(e) : this.key
                }
            }]),
            n
        }()
          , q = function(e) {
            c(n, k);
            var r = h(n);
            function n(t, e) {
                var o;
                return i(this, n),
                (o = r.call(this, t)).value = e,
                o
            }
            return u(n, [{
                key: "merge",
                value: function(t) {
                    return t instanceof n && t.key === this.key && (this.value = t.value),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    var e = t.toStrTrim(this.value);
                    return this.key && e ? "".concat(this.key, "=").concat(e) : ""
                }
            }]),
            n
        }()
          , A = function(e) {
            c(o, k);
            var r = h(o);
            function o() {
                var e, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, o);
                var a = n(n({}, {
                    sku: "",
                    category: "",
                    qty: 0,
                    price: 0,
                    events: new x,
                    variables: new x
                }), u);
                return a.sku = t.beaconHelpers.guessPartNumber(a.sku),
                (e = r.call(this, a.sku)).sku = a.sku,
                e.category = a.category,
                e.qty = a.qty,
                e.price = a.price,
                e.events = a.events,
                e.variables = a.variables,
                e
            }
            return u(o, [{
                key: "merge",
                value: function(t) {
                    return t instanceof o && t.key === this.key && (this.category = t.category || this.category,
                    this.qty = t.qty || this.qty,
                    this.price = t.price || this.price,
                    this.events.merge(t.events),
                    this.variables.merge(t.variables)),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    return [t.toStrTrim(this.category), t.toStrTrim(this.sku), this.qty ? t.toStrTrim(this.qty) : "", this.price ? t.beaconHelpers.formatPrice(this.price) : "", this.events ? this.events.toString(j) : "", this.variables ? this.variables.toString(E) : ""].join(S).replace(",", "")
                }
            }]),
            o
        }()
          , _ = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O
              , r = new x;
            return t && "string" == typeof t ? (t.split(e).forEach(function(t) {
                var e = b(t.split("="), 2)
                  , n = e[0]
                  , i = e[1];
                n && r.add(new T(n,i))
            }),
            r) : r
        }
          , I = e.EVENTS.EVENT_101
          , C = e.EVENTS.EVENT_102
          , R = t.beaconHelpers.getRawNumberFromString
          , N = t.beaconHelpers.formatPrice;
        exports.OmnitureCollection = x,
        exports.OmnitureEvent = T,
        exports.OmnitureItem = k,
        exports.OmnitureProduct = A,
        exports.OmnitureVariable = q,
        exports.parseEventCollectionString = _,
        exports.parseItemCollectionArray = function(t) {
            var e = new x;
            return t && Array.isArray(t) ? (t.forEach(function(t) {
                t && e.add(new k(t))
            }),
            e) : e
        }
        ,
        exports.parseItemCollectionString = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O
              , r = new x;
            return t && "string" == typeof t ? (t.split(e).forEach(function(t) {
                t && r.add(new k(t))
            }),
            r) : r
        }
        ,
        exports.parseProductCollectionString = function(t) {
            var e = new x;
            return t && "string" == typeof t ? (function(t) {
                return t && "string" == typeof t ? t.split(O).filter(Boolean).reduce(function(t, e) {
                    return t.length && !e.includes(S) ? t[t.length - 1] += O + e : t.push(e),
                    t
                }, []) : []
            }(t).forEach(function(t) {
                !function(t, e) {
                    if (!(t instanceof x && e instanceof A))
                        return t;
                    var r = t.get(e.sku);
                    if (!r)
                        return t.add(e);
                    var n = R(r.qty) + R(e.qty)
                      , i = N(R(r.price) * n);
                    r.qty = n,
                    r.variables.merge(e.variables),
                    r.events.merge(e.events, new T(I,n), new T(C,i))
                }(e, function(t) {
                    if (!t || "string" != typeof t)
                        return null;
                    var e, r, n = b(t.split(S), 6), i = n[0], o = n[1], u = n[2], a = n[3], c = n[4], s = n[5], l = {
                        category: i,
                        sku: o,
                        qty: u,
                        price: a,
                        events: _(c, j),
                        variables: (e = s,
                        r = new x,
                        e && "string" == typeof e ? (e.split(E).forEach(function(t) {
                            var e = b(t.split("="), 2)
                              , n = e[0]
                              , i = e[1];
                            n && i && r.add(new q(n,i))
                        }),
                        r) : r)
                    };
                    return new A(l)
                }(t))
            }),
            e) : e
        }
    }
    , {
        "@apple/analytics-omniture-constants": 8,
        "@apple/analytics-utils": 12
    }],
    8: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        const e = function() {
            let {keyPrefix: e="", valuePrefix: E="", count: r=0} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const t = {};
            for (let R = 1; R <= r; R++)
                t[`${e}${R}`] = `${E}${R}`;
            return t
        }
          , r = {
            CAMPAIGN: "campaign",
            CHANNEL: "channel",
            CHAR_SET: "charSet",
            CITY: "city",
            CURRENCY_CODE: "currencyCode",
            EVENTS: "events",
            HIER1: "hier1",
            LINK_INTERNAL_FILTERS: "linkInternalFilters",
            LINK_TRACK_EVENTS: "linkTrackEvents",
            LINK_TRACK_VARS: "linkTrackVars",
            LIST_1: "list1",
            LIST_2: "list2",
            LIST_3: "list3",
            PAGE_NAME: "pageName",
            PAGE_TYPE: "pageType",
            PAGE_URL: "pageURL",
            PRODUCTS: "products",
            PROVINCE: "province",
            PURCHASE_ID: "purchaseID",
            REFERRER: "referrer",
            SERVER: "server",
            STATE: "state",
            TRACKING_SERVER: "trackingServer",
            TRACKING_SERVER_SECURE: "trackingServerSecure",
            ZIP: "zip",
            ...e({
                keyPrefix: "PROP_",
                valuePrefix: "prop",
                count: 75
            }),
            ...e({
                keyPrefix: "EVAR_",
                valuePrefix: "eVar",
                count: 155
            })
        }
          , E = e({
            keyPrefix: "EVENT_",
            valuePrefix: "event",
            count: 520
        });
        E.SC_ADD = "scAdd",
        E.PROD_VIEW = "prodView",
        exports.EVAR_MAX = 155,
        exports.EVENTS = E,
        exports.EVENT_MAX = 520,
        exports.PROP_MAX = 75,
        exports.TRACK_LINK_ARGS = {
            ELEMENT: {
                DISABLE_DELAY: !0
            },
            LINK_TYPE: {
                DOWNLOAD: "d",
                EXTERNAL: "e",
                CUSTOM: "o"
            }
        },
        exports.VARS = r
    }
    , {}],
    9: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var analyticsOmnitureConstants = require("@apple/analytics-omniture-constants")
          , analyticsOmnitureCollection = require("@apple/analytics-omniture-collection");
        function t(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function a(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {};
                r % 2 ? t(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function i(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], i = !0, c = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); i = !0)
                            ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return a
                }
            }(e, t) || s(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function c(e) {
            return function(e) {
                if (Array.isArray(e))
                    return u(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || s(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return u(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
            }
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var l = function(e) {
            return e
        }
          , f = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(e) {
                return t.reduce(function(e, t) {
                    return t(e)
                }, e)
            }
        }
          , m = function() {
            return Math.random().toString(36).slice(2, 6)
        }
          , d = function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m()).slice(0, 4) + m()
        }
          , p = function(e) {
            return {
                global: e.slice(0, 4),
                session: e.slice(4)
            }
        }
          , v = function(e) {
            return function(t) {
                return t.slice(0, e)
            }
        }
          , y = function(e) {
            return e
        }
          , g = "~"
          , k = "^"
          , h = "::"
          , b = {
            v1: {
                prefix: "v1",
                data: [{
                    key: "uuid",
                    map: "x",
                    mergeDefault: "override",
                    validStorage: ["session", "cookie"],
                    syncTabs: !1,
                    clean: function(e) {
                        return e
                    }
                }, {
                    key: "minor",
                    map: "m",
                    mergeDefault: "override",
                    validStorage: ["session", "cookie"],
                    syncTabs: !0,
                    clean: y
                }, {
                    key: "pageName",
                    map: "n",
                    mergeDefault: "override",
                    validStorage: ["session", "cookie"],
                    syncTabs: !1,
                    prePack: f(v(120), encodeURIComponent),
                    clean: y,
                    postPack: decodeURIComponent
                }, {
                    key: "area",
                    map: "r",
                    mergeDefault: "override",
                    validStorage: ["session", "cookie"],
                    syncTabs: !1,
                    clean: y
                }, {
                    key: "api",
                    map: "a",
                    mergeDefault: "append",
                    validStorage: ["session", "cookie"],
                    syncTabs: !0,
                    prePack: function(e) {
                        return e.map(function(e) {
                            var t = e.type
                              , r = e.value;
                            return t + h + r
                        }).join(k)
                    },
                    clean: v(600),
                    postPack: function(e) {
                        return e.split(k).map(function(e) {
                            var t = i(e.split(h), 2);
                            return {
                                type: t[0],
                                value: t[1]
                            }
                        })
                    }
                }, {
                    key: "beacon",
                    map: "b",
                    mergeDefault: "merge",
                    validStorage: ["session"],
                    syncTabs: !0,
                    prePack: function(e) {
                        return Object.entries(e).filter(function(e) {
                            var t = i(e, 1)[0];
                            return /^[eVar|prop|events|products]/.test(t)
                        }).map(function(e) {
                            var t = i(e, 2)
                              , r = t[0]
                              , n = t[1];
                            return r + h + n
                        }).join(k)
                    },
                    clean: y,
                    postPack: function(e) {
                        return e.split(k).reduce(function(e, t) {
                            var r = i(t.split(h), 2)
                              , n = r[0]
                              , o = r[1];
                            return e[n] = o,
                            e
                        }, {})
                    }
                }],
                settings: {
                    sessionName: "pt-dm",
                    cookieName: "pt-dm",
                    separator: g,
                    transformers: ["mergeExisting", "mapToSchema", "compress"]
                }
            }
        }
          , S = function(e) {
            return e ? b.hasOwnProperty(e) ? b[e] : null : b
        }
          , w = function(e) {
            return e.options && e.options.version ? e.schema = S(e.options.version) : e.allSchemas = S(),
            e
        }
          , O = function() {
            return {
                set cookie(e) {
                    window.document.cookie = e
                },
                get cookie() {
                    return window.document.cookie
                },
                sessionStorage: window.sessionStorage,
                localStorage: window.localStorage
            }
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e.options = a(a({}, {
                origin: "same",
                version: "v1",
                minor: "1"
            }), e.options),
            e
        }
          , P = function(e) {
            var t = e.key
              , r = e.value
              , n = e.cookieDomain
              , o = e.api
              , a = void 0 === o ? O : o
              , i = "".concat(t, "=").concat(r);
            i += ";secure",
            i += ";samesite=strict",
            i += ";path=/",
            n && (i += ";domain=".concat(n)),
            a().cookie = i
        }
          , D = function(e) {
            var t = e.key
              , r = e.value
              , n = e.api;
            (void 0 === n ? O : n)().sessionStorage.setItem(t, r)
        }
          , E = function(e) {
            var t = e.key
              , r = e.value
              , n = e.api;
            (void 0 === n ? O : n)().localStorage.setItem(t, r)
        }
          , T = function(e) {
            for (var t = e.key, r = e.api, n = String((void 0 === r ? O : r)().cookie).split("; "), o = 0; o < n.length; o++) {
                var a = i(n[o].split("="), 2)
                  , c = a[0]
                  , s = a[1];
                if (c === t)
                    return s
            }
            return null
        }
          , N = function(e) {
            var t = e.key
              , r = e.api;
            return (void 0 === r ? O : r)().sessionStorage.getItem(t)
        }
          , A = function(e) {
            var t = e.key
              , r = e.cookieDomain
              , n = e.api
              , o = void 0 === n ? O : n
              , a = "".concat(t, "=");
            a += ";secure",
            a += ";samesite=strict",
            a += ";path=/",
            a += ";expires=Thu, 01 Jan 1970 00:00:01 GMT",
            r && (a += ";domain=".concat(r)),
            o().cookie = a
        }
          , x = function(e) {
            var t = e.key
              , r = e.api;
            (void 0 === r ? O : r)().sessionStorage.removeItem(t)
        }
          , I = function(e) {
            var t = e.key
              , r = e.api;
            (void 0 === r ? O : r)().localStorage.removeItem(t)
        }
          , V = function(e) {
            var t = e.value
              , r = e.api
              , n = void 0 === r ? O : r;
            E({
                api: n,
                key: "sync",
                value: t
            }),
            I({
                api: n,
                key: "sync"
            })
        }
          , C = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).api
              , t = void 0 === e ? O : e;
            E({
                api: t,
                key: "clearAll",
                value: "sync-clear-all"
            }),
            I({
                api: t,
                key: "clearAll"
            })
        }
          , R = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
            if (!e || !e.transformed || "" === e.transformed)
                return null;
            switch (e.destination) {
            case "cookie":
                var r = {
                    api: t,
                    key: e.schema.settings.cookieName,
                    value: e.transformed
                };
                e.options && e.options.cookieDomain && (r.cookieDomain = e.options.cookieDomain),
                P(r);
                break;
            case "session":
            default:
                D({
                    api: t,
                    key: e.schema.settings.sessionName,
                    value: e.transformed
                }),
                e.transformedSync && "" !== e.transformedSync && V({
                    api: t,
                    value: e.transformedSync
                })
            }
            return e.transformed
        }
          , U = function(e) {
            var t = e.schema
              , r = e.sessionData
              , n = e.cookieData
              , o = null
              , i = function(e) {
                return null !== e
            }
              , c = i(r) ? te({
                schema: t,
                data: r
            }) : null
              , s = i(n) ? te({
                schema: t,
                data: n
            }) : null
              , u = i(c) ? p(c.uuid) : null
              , l = i(s) ? p(s.uuid) : null
              , f = i(r) && i(n)
              , d = i(u) && i(l) && u.global === l.global
              , y = d && u.session === l.session;
            switch (!0) {
            case !i(r) && i(n):
                o = s;
                break;
            case i(r) && !i(n):
                o = c;
                break;
            case f && y:
                o = a(a({}, c), s);
                break;
            case f && !y && d:
                var v = a({}, s);
                t.data.filter(function(e) {
                    return !e.syncTabs
                }).forEach(function(e) {
                    var t = e.key;
                    delete v[t]
                }),
                o = a(a({}, c), v);
                break;
            case f && !d:
                o = c
            }
            return o
        }
          , M = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O
              , t = w({
                options: {}
            });
            if (t.allSchemas) {
                for (var r = Object.keys(t.allSchemas).sort(function(e, t) {
                    return e < t ? 1 : -1
                }), n = {}, o = 0; o < r.length; o++) {
                    var a = r[o]
                      , i = t.allSchemas[a]
                      , c = i.settings
                      , s = c.cookieName
                      , u = c.sessionName
                      , l = T({
                        api: e,
                        key: s
                    })
                      , f = N({
                        api: e,
                        key: u
                    })
                      , p = U({
                        schema: i,
                        cookieData: l,
                        sessionData: f
                    });
                    if (null !== p && (n = p),
                    0 !== Object.keys(n).length)
                        break
                }
                return 0 === Object.keys(n).length ? null : n
            }
        }
          , $ = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O
              , r = {
                options: e
            };
            if (!(r = w(r)).allSchemas)
                return null;
            var n = M(t);
            Object.values(r.allSchemas).forEach(function(e) {
                var n = e.settings
                  , o = n.cookieName
                  , a = n.sessionName
                  , i = {
                    api: t,
                    key: o
                };
                r.options && r.options.cookieDomain && (i.cookieDomain = r.options.cookieDomain),
                A(i),
                x({
                    api: t,
                    key: a
                }),
                C({
                    api: t
                })
            }),
            n && n.uuid && f(j, w, re, R)({
                data: {
                    uuid: n.uuid
                },
                options: e
            })
        }
          , L = M
          , G = function(e) {
            var t = L();
            return t ? J(e, t) : e.data && (e.data.uuid || q(e)),
            e
        }
          , J = function(e, t) {
            Object.keys(t).forEach(function(r) {
                var n = t[r]
                  , o = e.data[r]
                  , a = B(e, r);
                e.data[r] = z({
                    storedValue: n,
                    newValue: o,
                    mergePolicy: a
                })
            })
        }
          , q = function(e) {
            e.data.uuid = d()
        }
          , z = function(e) {
            var t = e.storedValue
              , r = e.newValue;
            switch (e.mergePolicy) {
            case "keep":
                return t;
            case "override":
                return r || t;
            case "append":
                return H(r, t);
            case "merge":
                return K(r, t);
            default:
                return r
            }
        }
          , B = function(e, t) {
            return e.isSync ? "override" : F(e.schema, t)
        }
          , F = function(e, t) {
            return e.data.find(function(e) {
                return e.key === t
            }).mergeDefault
        }
          , H = function(e, t) {
            return e ? t.concat(e) : t
        }
          , K = function(e, t) {
            return a(a(a({}, t), e), Q(e, t))
        }
          , Q = function(e, t) {
            var r = {};
            if (e && t) {
                var n = function(n, o) {
                    if (t[n] && e[n]) {
                        var a = o(t[n])
                          , i = o(e[n]);
                        r[n] = a.merge(i).toString()
                    }
                };
                return n(analyticsOmnitureConstants.VARS.EVENTS, analyticsOmnitureCollection.parseEventCollectionString),
                n(analyticsOmnitureConstants.VARS.PRODUCTS, analyticsOmnitureCollection.parseProductCollectionString),
                r
            }
        }
          , W = function(e) {
            return e
        }
          , X = function(e) {
            var t = e.schema;
            return e.transformed = {},
            e.transformedSync = {},
            e.destination = e.options && "cross" === e.options.origin ? "cookie" : "session",
            null === e.data || (!e.data.hasOwnProperty("minor") && e.options && e.options.hasOwnProperty("minor") && (e.data.minor = e.options.minor),
            t.data.forEach(function(t) {
                var r = t.key
                  , n = t.map
                  , o = t.validStorage
                  , a = t.clean
                  , i = t.prePack
                  , c = void 0 === i ? l : i
                  , s = t.syncTabs
                  , u = void 0 !== s && s;
                if (o.includes(e.destination) && e.data[r]) {
                    var y = e.data[r]
                      , v = f(c, a)(y);
                    if (v && "" !== v)
                        if (e.transformed[n] = v,
                        u)
                            e.transformedSync[n] = v;
                        else if ("uuid" === r) {
                            var m = p(v).global;
                            e.transformedSync[n] = d(m)
                        }
                }
            })),
            e
        }
          , Y = function(e) {
            var t = {};
            return e.data && null !== e.data ? (Object.keys(e.data).forEach(function(r) {
                var n = e.schema.data.find(function(e) {
                    return e.map === r
                });
                if (n) {
                    var o = n.key
                      , a = n.postPack
                      , i = e.data[r];
                    t[o] = a ? a(i) : i
                }
            }),
            0 === Object.keys(t).length ? null : t) : null
        }
          , Z = function(e) {
            var t = []
              , r = []
              , n = e.schema.settings.separator;
            if (e.transformed && Object.entries(e.transformed).forEach(function(e) {
                var r = i(e, 2)
                  , o = r[0]
                  , a = r[1];
                t.push(o + n + a)
            }),
            e.transformedSync && Object.entries(e.transformedSync).forEach(function(e) {
                var t = i(e, 2)
                  , o = t[0]
                  , a = t[1];
                r.push(o + n + a)
            }),
            e.transformed = t.join(n),
            e.transformedSync = r.join(n),
            "" === e.transformed)
                return e;
            if (e.schema.prefix) {
                var o = [e.schema.prefix, n, e.transformed];
                if (e.transformed = o.join(""),
                "" !== e.transformedSync) {
                    var a = [e.schema.prefix, n, e.transformedSync];
                    e.transformedSync = a.join("")
                }
            }
            return e
        }
          , _ = function(e) {
            var t = e.data
              , r = e.schema
              , n = r.settings.separator
              , o = t;
            if (null === o)
                return e;
            for (var a = new RegExp("^".concat(r.prefix).concat(n.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"))), i = (o = o.replace(a, "")).split(r.settings.separator), c = {}, s = 0; s < i.length; s += 2) {
                var u = i[s]
                  , l = i[s + 1];
                c[u] = l
            }
            return e.data = c,
            e
        }
          , ee = {
            mergeExisting: function(e) {
                return e ? G : W
            },
            mapToSchema: function(e) {
                return e ? X : Y
            },
            compress: function(e) {
                return e ? Z : _
            }
        }
          , ne = function(e) {
            return function(t) {
                if (!t || !t.schema)
                    return null;
                var r = t.schema.settings.transformers.map(function(e) {
                    return function(t) {
                        return ee[t](e)
                    }
                }(e))
                  , n = e ? r : c(r).reverse();
                return f.apply(void 0, c(n))(t)
            }
        }
          , re = ne(!0)
          , te = ne(!1)
          , ae = function() {
            !function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).api
                  , t = void 0 === e ? O : e;
                E({
                    api: t,
                    key: "onNewPage",
                    value: "handle-new-page-save"
                }),
                I({
                    api: t,
                    key: "onNewPage"
                })
            }();
            var e = function(e) {
                var t = e.schema
                  , r = e.api
                  , n = void 0 === r ? O : r;
                return function(e) {
                    var r = t.settings.sessionName;
                    switch (e.key) {
                    case "onNewPage":
                        var o = N({
                            api: n,
                            key: r
                        })
                          , i = te({
                            schema: t,
                            data: o
                        })
                          , c = re({
                            schema: t,
                            data: i,
                            isSync: !0
                        }).transformedSync;
                        c && (E({
                            api: n,
                            key: "sync",
                            value: c
                        }),
                        I({
                            api: n,
                            key: "sync"
                        }));
                        break;
                    case "sync":
                        if (e.newValue) {
                            var s = N({
                                api: n,
                                key: r
                            })
                              , u = e.newValue;
                            if (s) {
                                var l = te({
                                    schema: t,
                                    data: s
                                })
                                  , f = te({
                                    schema: t,
                                    data: e.newValue
                                })
                                  , d = p(l.uuid)
                                  , y = p(f.uuid)
                                  , v = d.global === y.global ? l.uuid : f.uuid;
                                t.data.forEach(function(e) {
                                    e.syncTabs && delete l[e.key]
                                });
                                var m = a(a(a({}, l), f), {}, {
                                    uuid: v
                                });
                                u = re({
                                    schema: t,
                                    data: m,
                                    isSync: !0
                                }).transformed
                            }
                            D({
                                api: n,
                                key: r,
                                value: u
                            })
                        }
                        break;
                    case "clearAll":
                        x({
                            api: n,
                            key: r
                        })
                    }
                }
            }({
                schema: w(j()).schema
            })
              , t = function(t) {
                e(t)
            };
            return window.addEventListener("storage", t),
            function() {
                window.removeEventListener("storage", t)
            }
        }
          , oe = f(function(e) {
            var t = e.data
              , r = e.options;
            return {
                data: a({}, t),
                options: a({}, r)
            }
        }, j, w, re, R)
          , ie = f(function() {}, M)
          , ce = $;
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread2(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
        }
        function _arrayWithoutHoles(e) {
            if (Array.isArray(e))
                return _arrayLikeToArray(e)
        }
        function _iterableToArray(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        function _unsupportedIterableToArray(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return _arrayLikeToArray(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
            }
        }
        function _arrayLikeToArray(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var cookieDomain = null
          , registerCookieDomain = function(e) {
            cookieDomain = e
        }
          , getCookieDomain = function() {
            return cookieDomain
        }
          , setDefaults = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return _objectSpread2(_objectSpread2({}, {
                type: "next"
            }), e)
        }
          , dataStore = {}
          , MULE_VERSION = "v1"
          , readDataStore = function() {
            var e = _objectSpread2({}, dataStore)
              , t = ie();
            return t && null !== t && (e.page = t),
            e
        }
          , configure = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).mule
              , t = void 0 === e ? null : e;
            null !== t && t.version && (MULE_VERSION = t.version)
        }
          , store = function(e) {
            var t = e.type
              , r = e.key
              , n = e.data;
            if ("page" === t) {
                var o = {
                    version: MULE_VERSION
                }
                  , a = _objectSpread2(_objectSpread2({}, o), {}, {
                    origin: "cross"
                })
                  , i = getCookieDomain();
                return null !== i && (a.cookieDomain = i),
                void oe({
                    data: _defineProperty({}, r, n),
                    options: o
                })
            }
            dataStore.hasOwnProperty(t) || (dataStore[t] = {}),
            dataStore[t][r] = n
        }
          , retrieve = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.type
              , r = e.key
              , n = void 0 === r ? null : r;
            if ("page" === t) {
                var o = ie();
                return null === n ? o : o[n] || null
            }
            return dataStore.hasOwnProperty(t) ? null === n ? dataStore[t] || null : dataStore[t][n] || null : null
        }
          , clear = function(e) {
            var t = e.type;
            if ("page" === t) {
                var r = getCookieDomain()
                  , n = {};
                null !== r && (n.cookieDomain = r),
                ce(n)
            }
            dataStore[t] && delete dataStore[t]
        }
          , syncToCookie = function() {
            var e = _objectSpread2(_objectSpread2({}, {
                version: MULE_VERSION
            }), {}, {
                origin: "cross"
            })
              , t = getCookieDomain();
            null !== t && (e.cookieDomain = t),
            oe({
                data: {},
                options: e
            })
        }
          , triggerNewPage = function() {
            ["next", "exit"].forEach(function(e) {
                var t = retrieve({
                    type: e
                });
                null !== t && (Object.keys(t).forEach(function(e) {
                    var r = t[e];
                    "beacon" === e && "object" === _typeof(r) && Object.keys(r).forEach(function(e) {
                        var t = r[e];
                        "string" == typeof t && (r[e] = t.replace(/pageName/g, "c14"))
                    }),
                    store({
                        type: "page",
                        key: e,
                        data: r
                    })
                }),
                clear({
                    type: e
                }))
            }),
            syncToCookie()
        }
          , init = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.muleVersion
              , r = void 0 === t ? null : t
              , n = e.cookieDomain
              , o = void 0 === n ? null : n;
            configure({
                mule: {
                    version: r || "v1"
                }
            }),
            null !== o && registerCookieDomain(o);
            var a = ae();
            return window.addEventListener("pagehide", triggerNewPage),
            window.addEventListener("beforeunload", triggerNewPage),
            function() {
                a(),
                window.removeEventListener("pagehide", triggerNewPage),
                window.removeEventListener("beforeunload", triggerNewPage)
            }
        }
          , error = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.type
              , r = void 0 === t ? null : t
              , n = e.message
              , o = void 0 === n ? "Unknown error" : n;
            return new Error("[PASSIVE TRACKER".concat(r ? ":" + r.toUpperCase() : "", "] ").concat(o))
        }
          , set = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e || "string" != typeof e)
                throw error("set", "invalid key");
            if (t) {
                var n = setDefaults(r).type;
                store({
                    type: n,
                    key: e,
                    data: t
                })
            }
        }
          , mergeObjects = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              , n = _objectSpread2(_objectSpread2({}, e), t);
            return r && e.hasOwnProperty("events") && t.hasOwnProperty("events") && (n.events = analyticsOmnitureCollection.parseEventCollectionString(e.events).merge(analyticsOmnitureCollection.parseEventCollectionString(t.events)).toString()),
            r && e.hasOwnProperty("products") && t.hasOwnProperty("products") && (n.products = analyticsOmnitureCollection.parseProductCollectionString(e.products).merge(analyticsOmnitureCollection.parseProductCollectionString(t.products)).toString()),
            n
        }
          , isObject = function(e) {
            return "object" === _typeof(e)
        }
          , merge = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e || "string" != typeof e)
                throw error("merge", "invalid key");
            if (t) {
                var n = setDefaults(r)
                  , o = n.type
                  , a = retrieve({
                    type: o,
                    key: e
                })
                  , i = null !== a && !isObject(a)
                  , c = !isObject(t);
                if (i || c)
                    throw error("merge", "invalid data type");
                null !== a ? Array.isArray(a) ? store({
                    type: o,
                    key: e,
                    data: Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(t))))
                }) : store({
                    type: o,
                    key: e,
                    data: mergeObjects(a, t, "beacon" === e)
                }) : set(e, t, n)
            }
        }
          , append = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e || "string" != typeof e)
                throw error("append", "invalid key");
            if (t) {
                var n = setDefaults(r)
                  , o = n.type
                  , a = retrieve({
                    type: o,
                    key: e
                });
                if (null !== a && "function" != typeof a.concat || "function" != typeof t.concat)
                    throw error("append", "cannot call append on this type of data");
                null !== a ? store({
                    type: o,
                    key: e,
                    data: a.concat(t)
                }) : set(e, t, n)
            }
        }
          , load = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "next"
              , t = {
                current: retrieve({
                    type: "next"
                })
            };
            return clear({
                type: "next"
            }),
            "page" === e && (t.previous = retrieve({
                type: "page"
            }),
            clear({
                type: "page"
            })),
            null === t.current && delete t.current,
            null === t.previous && delete t.previous,
            0 === Object.entries(t).length ? null : t
        };
        exports.append = append,
        exports.init = init,
        exports.load = load,
        exports.merge = merge,
        exports.readDataStore = readDataStore,
        exports.set = set,
        exports.triggerNewPage = triggerNewPage
    }
    , {
        "@apple/analytics-omniture-collection": 7,
        "@apple/analytics-omniture-constants": 8
    }],
    10: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var t = function(t) {
            return /^\d{3}$/.test(t)
        }
          , n = function(t) {
            return /^[0-9A-Za-z-_]+$/.test(t)
        }
          , e = function(t) {
            return /^cid%3D[0-9A-Za-z-_]+$/.test(t)
        }
          , r = function(r, o, c) {
            return !t(r) || "string" != typeof o[r] || (a = o[r],
            !n(a) && !e(a)) || c >= 5;
            var a
        }
          , o = function(t) {
            return Object.keys(t).forEach(function(n, o) {
                var c;
                r(n, t, o) ? delete t[n] : (c = t[n],
                e(c) && c.length > 100 ? t[n] = t[n].slice(0, 100) : function(t) {
                    return t.length > 50
                }(t[n]) && (t[n] = t[n].slice(0, 50)))
            }),
            t
        };
        function c(t, n) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, n) {
                var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != e) {
                    var r, o, c = [], a = !0, u = !1;
                    try {
                        for (e = e.call(t); !(a = (r = e.next()).done) && (c.push(r.value),
                        !n || c.length !== n); a = !0)
                            ;
                    } catch (t) {
                        u = !0,
                        o = t
                    } finally {
                        try {
                            a || null == e.return || e.return()
                        } finally {
                            if (u)
                                throw o
                        }
                    }
                    return c
                }
            }(t, n) || function(t, n) {
                if (t) {
                    if ("string" == typeof t)
                        return u(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name),
                    "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(t, n) : void 0
                }
            }(t, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function u(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++)
                r[e] = t[e];
            return r
        }
        var a = function(t, n) {
            return "".concat(t, ":").concat(encodeURIComponent(n[t]))
        }
          , i = function(t) {
            var n = o(t);
            return Object.keys(n).reduce(function(t, e) {
                return "" === t ? a(e, n) : (r = t,
                o = a(e, n),
                "".concat(r, "|").concat(o));
                var r, o
            }, "")
        }
          , f = function(r) {
            return "string" != typeof r ? {} : r.split("|").reduce(function(r, o) {
                var a = c(o.split(":"), 2)
                  , u = a[0]
                  , i = a[1]
                  , f = decodeURIComponent(i)
                  , l = !t(u)
                  , s = !(n(f) || e(f));
                return l || s || (r[u] = f),
                r
            }, {})
        }
          , l = function(t) {
            return URLSearchParams ? new URLSearchParams(t) : function(t) {
                var n = t.split("&").reduce(function(t, n) {
                    if ("" === n)
                        return t;
                    var e = c(n.split("="), 2)
                      , r = e[0]
                      , o = e[1];
                    return t[r] = o,
                    t
                }, {});
                return {
                    set: function(t, e) {
                        n[t] = e
                    },
                    get: function(t) {
                        return n[t]
                    },
                    toString: function() {
                        return Object.keys(n).reduce(function(t, e) {
                            return "" === t ? "".concat(e, "=").concat(n[e]) : "".concat(t, "&").concat(e, "=").concat(n[e])
                        }, "")
                    }
                }
            }(t)
        }
          , s = function(t, n) {
            return t ? "".concat(t, ",event").concat(n) : "event".concat(n)
        }
          , v = function(t, n) {
            return t ? "".concat(t, "|").concat(n) : n
        };
        exports.getBeacon = function(n) {
            var e = n.keys
              , r = n.cookieData
              , o = n.defaultCampaigns
              , c = f(r)
              , a = {};
            return Array.isArray(e) && e.forEach(function(n) {
                t(n) && (c[n] ? (a.events = s(a.events, n),
                a.eVar17 = v(a.eVar17, c[n])) : o && o[n] && (a.events = s(a.events, n),
                a.eVar17 = v(a.eVar17, o[n])))
            }),
            a
        }
        ,
        exports.getOne = function(t) {
            var n = t.key
              , e = t.cookieData;
            return f(e)[n] || null
        }
        ,
        exports.relayRead = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = n.queryString
              , r = void 0 === e ? "" : e
              , o = n.relay
              , c = n.cookieData;
            if (!c || !o)
                return {
                    queryString: r
                };
            var a = f(c)
              , u = l(r)
              , i = {};
            return Object.keys(o).forEach(function(n) {
                a[n] && t(n) && (u.set(o[n], a[n]),
                i.events = s(i.events, n),
                i.eVar17 = v(i.eVar17, a[n]))
            }),
            {
                queryString: u.toString(),
                beacon: i
            }
        }
        ,
        exports.relayWrite = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.queryString
              , e = void 0 === n ? "" : n
              , r = t.cookieData
              , o = f(void 0 === r ? "" : r)
              , c = l(e).get("rid");
            return c && (o[c.slice(0, 3)] = encodeURIComponent(c.slice(4))),
            i(o)
        }
    }
    , {}],
    11: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-omniture-collection")
          , t = require("@apple/analytics-omniture-constants")
          , n = require("@apple/analytics-utils")
          , r = require("@apple/analytics-relay");
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    E(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        function E(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var c = {
            COMPLETE: t.EVENTS.EVENT_7,
            SEARCH: t.EVENTS.EVENT_8,
            EXIT: t.EVENTS.EVENT_364,
            BEGIN: t.EVENTS.EVENT_366,
            QUICK_LINK: t.EVENTS.EVENT_38,
            SUGGESTED: t.EVENTS.EVENT_39,
            NO_RESULTS: t.EVENTS.EVENT_49,
            NO_RESULTS_CLICK: t.EVENTS.EVENT_67,
            DEFAULT_LINK: t.EVENTS.EVENT_50,
            ACCESSORIES_LINK: t.EVENTS.EVENT_52,
            STORE_LINK: t.EVENTS.EVENT_288,
            ACCESSORIES_FILTER: t.EVENTS.EVENT_369,
            CURATED: t.EVENTS.EVENT_370,
            PAGINATION: t.EVENTS.EVENT_371,
            SERP_DIRECT: t.EVENTS.EVENT_372
        }
          , a = [{
            protocol: "applenewss:",
            token: "nws-0-int_srch-apl",
            event: t.EVENTS.EVENT_285
        }, {
            protocol: "itms-apps:",
            token: "arc-0-int_srch-apl",
            event: t.EVENTS.EVENT_288
        }, {
            origin: "https://news.apple.com",
            token: "nws-0-int_srch-apl",
            event: t.EVENTS.EVENT_285
        }, {
            origin: "https://music.apple.com",
            token: "mus-0-int_srch-apl",
            event: t.EVENTS.EVENT_286
        }, {
            origin: "https://wallet.apple.com",
            token: "ccd-0-int_srch-apl",
            event: t.EVENTS.EVENT_287
        }, {
            origin: "https://apps.apple.com",
            token: "app_store-0-int_srch-apl",
            event: t.EVENTS.EVENT_288
        }, {
            origin: "https://tv.apple.com",
            token: "atv-0-int_srch-apl",
            event: t.EVENTS.EVENT_289
        }, {
            origin: "https://books.apple.com",
            token: "books-0-int_srch-apl",
            event: t.EVENTS.EVENT_294
        }, {
            origin: "https://fitness.apple.com",
            token: "fitness-0-int_srch-apl",
            event: t.EVENTS.EVENT_299
        }, {
            origin: "https://podcasts.apple.com",
            token: "podcasts-0-int_srch-apl",
            event: t.EVENTS.EVENT_300
        }]
          , s = function(t) {
            var n = new e.OmnitureCollection;
            switch (t) {
            case "quicklinks":
                n.add(new e.OmnitureEvent(c.COMPLETE)),
                n.add(new e.OmnitureEvent(c.QUICK_LINK));
                break;
            case "suggestions":
                n.add(new e.OmnitureEvent(c.SUGGESTED));
                break;
            case "defaultlinks":
                n.add(new e.OmnitureEvent(c.COMPLETE)),
                n.add(new e.OmnitureEvent(c.DEFAULT_LINK))
            }
            return n
        }
          , S = ["quicklinks", "suggestions", "defaultlinks"]
          , l = function(t) {
            var n = t.accessoriesLink
              , r = t.storeLink
              , E = t.relay
              , o = t.results
              , i = t.isComplete
              , a = new e.OmnitureCollection(new e.OmnitureEvent(i ? c.COMPLETE : c.SEARCH));
            return 0 === o && a.add(new e.OmnitureEvent(c.NO_RESULTS_CLICK)),
            n && a.add(new e.OmnitureEvent(c.ACCESSORIES_LINK)),
            r && a.add(new e.OmnitureEvent(c.STORE_LINK)),
            E && a.merge(E.events),
            a
        }
          , V = function(t) {
            var n, E = t.URLObject, o = t.serviceLink, i = t.relayId, c = new e.OmnitureCollection;
            if (E) {
                var s = function(t) {
                    return a.find(function(e) {
                        return e.origin ? e.origin === t.origin : e.protocol === t.protocol
                    })
                }(E);
                s && (n = r.getOne(s.token) || "aos_search_result",
                c.add(new e.OmnitureEvent(s.event)))
            }
            return n || (n = o ? i || "aos_search_result" : ""),
            {
                eVar17: n,
                events: c
            }
        }
          , u = function(t) {
            return t.map(n.toStrTrim).join("|")
        };
        exports.accessoriesFilter = function() {
            var r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = o.keyword, a = o.action, s = o.text, S = o.analyticsPrefix;
            return E(r = {}, t.VARS.EVAR_2, n.toStrTrim(i).toLowerCase()),
            E(r, t.VARS.EVAR_4, "".concat(n.toStrTrim(S), ":search:accessories")),
            E(r, t.VARS.PROP_3, "filter - ".concat(n.toStrTrim(a), " - ").concat(n.toStrTrim(s))),
            E(r, t.VARS.PROP_7, n.toStrTrim(i).toLowerCase()),
            E(r, t.VARS.EVENTS, new e.OmnitureCollection(new e.OmnitureEvent(c.ACCESSORIES_FILTER))),
            r
        }
        ,
        exports.begin = function() {
            var r, o = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).action, i = void 0 === o ? "" : o;
            return E(r = {}, t.VARS.PROP_3, "".concat(n.toStrTrim(i) || "engage", " - search field")),
            E(r, t.VARS.EVENTS, new e.OmnitureCollection(new e.OmnitureEvent(c.BEGIN))),
            r
        }
        ,
        exports.exit = function() {
            var r, o = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).keyword;
            return E(r = {}, t.VARS.PROP_7, n.toStrTrim(o).toLowerCase()),
            E(r, t.VARS.PROP_29, null),
            E(r, t.VARS.EVAR_2, "D=c7"),
            E(r, t.VARS.EVENTS, new e.OmnitureCollection(new e.OmnitureEvent(c.EXIT))),
            r
        }
        ,
        exports.pagination = function() {
            var r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = o.currentPage, a = o.nextPage, s = o.action, S = void 0 === s ? "click" : s;
            return E(r = {}, t.VARS.PROP_2, "".concat(n.toStrTrim(S), " - page ").concat(n.toStrTrim(i))),
            E(r, t.VARS.PROP_3, "".concat(n.toStrTrim(S), " - page ").concat(n.toStrTrim(a))),
            E(r, t.VARS.EVAR_15, "search (search)"),
            E(r, t.VARS.EVENTS, new e.OmnitureCollection(new e.OmnitureEvent(c.SEARCH),new e.OmnitureEvent(c.PAGINATION))),
            r
        }
        ,
        exports.perform = function() {
            var r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = o.keyword, l = o.method, V = o.position, u = o.results, T = o.source, p = o.suggestedValue, _ = o.type, R = n.toStrTrim(a).toLowerCase(), O = "no keyword" === R ? "" : R, N = n.toStrTrim(p).toLowerCase(), m = s(_), d = "suggestions" === _ ? "suggested" : l;
            return i(i({}, void 0 !== V ? E({}, t.VARS.EVAR_23, [O, N, d, u, V].map(n.toStrTrim).join("|")) : {}), {}, (E(r = {}, t.VARS.PROP_7, S.includes(_) ? N : R || "___blank___"),
            E(r, t.VARS.EVAR_2, "D=c7"),
            E(r, t.VARS.EVAR_15, "".concat(n.toStrTrim(T), " (").concat("suggestions" === _ ? "typed" : n.toStrTrim(l), ")")),
            E(r, t.VARS.EVENTS, m.add(new e.OmnitureEvent(c.SEARCH))),
            r))
        }
        ,
        exports.resultClick = function() {
            var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = r.accessoriesLink, i = r.storeLink, c = r.serviceLink, a = r.bannerLink, s = r.keyword, S = r.intent, T = r.position, p = r.relayId, _ = r.region, R = r.URLObject, O = r.results, N = r.currentPage, m = n.toStrTrim(s).toLowerCase(), d = 0 === O, v = c || !d, A = V({
                URLObject: R,
                serviceLink: c,
                relayId: p
            }), w = l({
                accessoriesLink: o,
                storeLink: i,
                relay: A,
                results: O,
                isComplete: v
            }), g = (E(e = {}, t.VARS.PROP_7, m),
            E(e, t.VARS.EVAR_2, "D=c7"),
            E(e, t.VARS.EVENTS, w),
            e);
            return A.eVar17 && (g[t.VARS.EVAR_17] = A.eVar17),
            !a && v && (g[t.VARS.PROP_29] = u([m, S, O, N, T])),
            d && (g[t.VARS.PROP_30] = u([m, S, O, _, T])),
            d && !c && (g[t.VARS.EVAR_15] = "null (clicked)"),
            g
        }
        ,
        exports.serpPageLoad = function() {
            var r, o, a, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, S = s.directLanding, l = s.keyword, V = s.intent, u = s.results, T = s.channelPrefix, p = s.curatedKit, _ = new e.OmnitureCollection(new e.OmnitureEvent(c.SEARCH));
            u || _.add(new e.OmnitureEvent(c.NO_RESULTS)),
            p && _.add(new e.OmnitureEvent(c.CURATED));
            var R = "".concat(n.toStrTrim(T), ":search");
            return i(i({}, (E(r = {}, t.VARS.PAGE_NAME, "".concat(R, ":").concat(n.toStrTrim(V))),
            E(r, t.VARS.PROP_7, n.toStrTrim(l).toLowerCase()),
            E(r, t.VARS.PROP_21, n.toStrTrim(u) || "0"),
            r)), {}, S ? (E(o = {}, t.VARS.EVAR_2, "D=c7"),
            E(o, t.VARS.EVAR_15, "external (direct)|".concat(n.toStrTrim(V))),
            E(o, t.VARS.EVENTS, _.add(new e.OmnitureEvent(c.SERP_DIRECT))),
            o) : (E(a = {}, t.VARS.EVAR_15, "|".concat(n.toStrTrim(V))),
            E(a, t.VARS.EVENTS, _),
            a))
        }
    }
    , {
        "@apple/analytics-omniture-collection": 7,
        "@apple/analytics-omniture-constants": 8,
        "@apple/analytics-relay": 10,
        "@apple/analytics-utils": 12
    }],
    12: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@apple/analytics-omniture-constants")
          , t = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e || !1 === e || 0 === e ? String(e) : ""
        }
          , r = function(e) {
            return t(e).trim()
        }
          , n = function(e) {
            return t(e).replace(/\s+/g, " ")
        }
          , o = function(e) {
            return t(e).replace(/[^ -~]+/g, "")
        }
          , i = function(e, r) {
            return t(e).slice(0, r).trim()
        }
          , u = function(e) {
            return function(t) {
                return i(t, e)
            }
        }
          , a = Object.freeze({
            __proto__: null,
            toStrTrim: r,
            toStr: t,
            trimExtraWhiteSpaces: n,
            trimAllNonPrintable: o,
            sliceTrim: i,
            sliceTrimFactory: u
        })
          , c = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(e) {
                return t.reduce(function(e, t) {
                    return t(e)
                }, e)
            }
        }
          , l = [{
            expression: /\/order\/detail\/.*/i,
            value: "/order/detail"
        }, {
            expression: /\/order\/cancel\/.*/i,
            value: "/order/cancel"
        }, {
            expression: /\/order\/guest\/.*/i,
            value: "/order/guest/******"
        }, {
            expression: /\/order\/applynow\/ep_payments\/.*/i,
            value: "/order/applynow/ep_payments/******"
        }, {
            expression: /\/onMyWay\/.*/i,
            value: "/onMyWay/******"
        }, {
            expression: /\/startPickup\/.*/i,
            value: "/startPickup/******"
        }, {
            expression: /\/[^\/]+@.*/i,
            value: "/******"
        }, {
            expression: /W[0-9-]+/,
            value: "WXXXXXXXX"
        }]
          , s = function(e) {
            var r = t(e)
              , n = l.find(function(e) {
                return e.expression.test(r)
            });
            return n ? r.replace(n.expression, n.value) : r
        }
          , f = function(e, t) {
            return c(o, s, n, u(t))(e).toLowerCase()
        }
          , p = function(e) {
            return f(e, 40)
        }
          , g = Object.freeze({
            __proto__: null,
            formatLink: function(e) {
                var t = e.text
                  , r = e.href
                  , n = e.region
                  , o = f(t, 50)
                  , i = p(n)
                  , u = 128 - (o.length + i.length + 2 * " | ".length)
                  , a = f(r, u);
                return "".concat(o).concat(" | ").concat(a).concat(" | ").concat(i)
            },
            sanitizeRegion: p,
            sanitizeLink: f
        })
          , m = function(e) {
            if (null == e)
                return null;
            for (var t = (document.cookie || "").split(";"), r = 0; r < t.length; r++) {
                var n = (t[r] || "").trim();
                if (n.slice(0, e.length + 1) === "".concat(e, "="))
                    return decodeURIComponent(n.slice(e.length + 1))
            }
            return null
        }
          , y = function(e) {
            if ("number" == typeof e) {
                var t = new Date;
                return t.setTime(t.getTime() + 24 * (e || 0) * 60 * 60 * 1e3),
                t
            }
            return e
        }
          , v = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = y(null == t ? -1 : r.expires)
              , o = n ? "; expires=" + n.toUTCString() : ""
              , i = r.path ? "; path=" + r.path : ""
              , u = r.domain ? "; domain=" + r.domain : ""
              , a = r.secure ? "; secure" : "";
            document.cookie = e + "=" + encodeURIComponent(t || "") + o + i + u + a
        }
          , d = Object.freeze({
            __proto__: null,
            get: m,
            set: v
        });
        function b(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? b(Object(r), !0).forEach(function(t) {
                    w(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _(e) {
            return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function w(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function O(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, i = [], u = !0, a = !1;
                    try {
                        for (r = r.call(e); !(u = (n = r.next()).done) && (i.push(n.value),
                        !t || i.length !== t); u = !0)
                            ;
                    } catch (e) {
                        a = !0,
                        o = e
                    } finally {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || x(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function S(e) {
            return function(e) {
                if (Array.isArray(e))
                    return j(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || x(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function x(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return j(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0
            }
        }
        function j(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            if (!e)
                return "";
            var t = window.cookieMap;
            return t && "object" === _(t) && t[e] || e
        }
          , A = c(k, m)
          , P = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return v(k(e), t, r)
        }
          , L = Object.freeze({
            __proto__: null,
            get: A,
            set: P
        })
          , I = function(e) {
            if (!e)
                return null;
            try {
                return JSON.parse(e)
            } catch (e) {
                return null
            }
        }
          , E = function(e) {
            if (!e)
                return null;
            try {
                return JSON.stringify(e)
            } catch (e) {
                return null
            }
        }
          , z = Object.freeze({
            __proto__: null,
            decode: I,
            encode: E
        })
          , N = c(A, I)
          , T = Object.freeze({
            __proto__: null,
            get: N,
            set: function(e, t, r) {
                return P(e, E(t), r)
            }
        })
          , C = function(e) {
            if ("number" == typeof e)
                return e;
            if (!e)
                return null;
            if ("string" != typeof e)
                return null;
            var t = O(e.replace(/[^\d.,]/g, "").split(/[.,](\d{1,2})$/), 2)
              , r = t[0]
              , n = void 0 === r ? "0" : r
              , o = t[1]
              , i = void 0 === o ? "00" : o
              , u = parseFloat(n.replace(/[^\d\/]/g, "") + "." + i);
            return isNaN(u) ? null : u
        }
          , M = [/^APPLE/, /^HOMEPOD/, /^IMAC/, /^IPAD/, /^IPHONE/, /^IPOD/, /^MAC/, /^PRO/, /^W\d\d_/, /^Z/, /\+/, /GIFT_CARDS/, /^AOS/]
          , R = function(e) {
            if (!e || "string" != typeof e)
                return "";
            var t = e.toUpperCase();
            return M.some(function(e) {
                return e.test(t)
            }) ? e : e.substring(0, 5)
        }
          , U = function(e) {
            return !(!e || "object" !== _(e) || Array.isArray(e))
        }
          , D = U
          , W = function(e) {
            return !(!U(e) || !Object.keys(e).length)
        }
          , F = function(e) {
            return e && "object" !== _(e) ? String(e) : null
        }
          , H = Object.values(e.VARS)
          , X = function(e) {
            var t = e.element
              , r = e.parent;
            if (t) {
                var n = (t.dataset || {}).basePartNumber;
                if (n)
                    return n
            }
            if (r) {
                var o = (r.dataset || {}).basePartNumber;
                if (o)
                    return o
            }
            return null
        }
          , J = function(e) {
            var t = e.element
              , r = e.parent;
            if (t) {
                var n = (t.dataset || {}).partNumber;
                if (n)
                    return R(n)
            }
            if (r) {
                var o = (r.dataset || {}).partNumber;
                if (o)
                    return R(o)
            }
            return null
        }
          , V = Object.freeze({
            __proto__: null,
            formatPrice: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0.00"
                  , r = C(e);
                return null === r ? t : r.toFixed(2)
            },
            getRawNumberFromString: C,
            guessPartNumber: R,
            isBeacon: D,
            isNotEmpty: function(e) {
                return D(e) && W(e)
            },
            setValue: function(e, t, r) {
                if (!D(e) || !t)
                    return e;
                var n = F(r);
                return n ? e[t] = n : delete e[t],
                e
            },
            toBeaconSafeVal: F,
            isValidBeaconKey: function(e) {
                return H.includes(e)
            },
            getPartNumber: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.element
                  , r = void 0 === t ? null : t
                  , n = e.parent
                  , o = void 0 === n ? null : n
                  , i = X({
                    element: r,
                    parent: o
                });
                return i || (J({
                    element: r,
                    parent: o
                }) || null)
            }
        })
          , K = c(m, I)
          , B = Object.freeze({
            __proto__: null,
            get: K,
            set: function(e, t, r) {
                return v(e, E(t), r)
            }
        })
          , G = function(e) {
            return ["analytics-form-submit", "submit"].includes(e.type)
        }
          , $ = function(e) {
            return "click" === e.type && e.target && null !== e.target.closest("a")
        }
          , q = Object.freeze({
            __proto__: null,
            debounce: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
                  , r = null;
                return function() {
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                        o[i] = arguments[i];
                    clearTimeout(r),
                    r = setTimeout(function() {
                        r = null,
                        e.apply(void 0, o)
                    }, t)
                }
            },
            isNavigationEvent: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return !(!e || !e.type) && (G(e) || $(e))
            }
        })
          , Q = function() {
            return window.s
        }
          , Z = function(e) {
            try {
                return window.localStorage.getItem(e)
            } catch (e) {
                return ""
            }
        }
          , Y = function(e, t) {
            try {
                return window.localStorage.setItem(e, t || ""),
                !0
            } catch (e) {
                return !1
            }
        }
          , ee = function(e) {
            try {
                return window.localStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }
          , te = Object.freeze({
            __proto__: null,
            get: Z,
            set: Y,
            remove: ee
        })
          , re = c(Z, I)
          , ne = Object.freeze({
            __proto__: null,
            get: re,
            set: function(e, t) {
                return Y(e, E(t))
            },
            remove: ee
        })
          , oe = "."
          , ie = function(e, t) {
            return t && t.length ? t.reduce(function(e, t) {
                return e && "object" === _(e) ? e[t] : null
            }, e) : e
        }
          , ue = function(e, t, r) {
            return t && t.length ? ae(e, S(t).reverse(), r) : e
        }
          , ae = function e(t, r, n) {
            if (!r.length)
                return n;
            if ("object" === _(t)) {
                var o = r.pop()
                  , i = Array.isArray(t) ? S(t) : h({}, t);
                return i[o] = e(i[o], r, n),
                i
            }
            return e({}, r, n)
        }
          , ce = function e(t, r) {
            var n = r.pop()
              , o = Array.isArray(t) ? S(t) : h({}, t);
            return r.length ? ("object" === _(o[n]) && (o[n] = e(o[n], r)),
            o) : (Array.isArray(o) ? o.splice(Number(n) || o.length, 1) : delete o[n],
            o)
        }
          , le = Object.freeze({
            __proto__: null,
            formatPath: function e() {
                for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
                    n[o] = arguments[o];
                return n.map(function(r) {
                    return Array.isArray(r) ? e.apply(void 0, S(r)) : t(r).split(oe)
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            },
            get: ie,
            getFactory: function(e) {
                return function(t) {
                    return ie(t, e)
                }
            },
            set: ue,
            setFactory: function(e) {
                return function(t, r) {
                    return ue(t, e, r)
                }
            },
            remove: function(e, t) {
                return t && t.length && "object" === _(e) ? ce(e, S(t).reverse()) : e
            }
        })
          , se = Object.freeze({
            __proto__: null,
            isObject: U,
            isNotEmpty: W,
            isValidObject: function(e, t) {
                return U(e) && Array.isArray(t) && t.every(function(t) {
                    return e[t]
                })
            }
        })
          , fe = function(e) {
            try {
                return window.sessionStorage.getItem(e)
            } catch (e) {
                return ""
            }
        }
          , pe = function(e, t) {
            try {
                return window.sessionStorage.setItem(e, t || ""),
                !0
            } catch (e) {
                return !1
            }
        }
          , ge = function(e) {
            try {
                return window.sessionStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }
          , me = Object.freeze({
            __proto__: null,
            get: fe,
            set: pe,
            remove: ge
        })
          , ye = c(fe, I)
          , ve = Object.freeze({
            __proto__: null,
            get: ye,
            set: function(e, t) {
                return pe(e, E(t))
            },
            remove: ge
        })
          , de = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return e instanceof HTMLElement && r.some(function(t) {
                return e.classList.contains(t)
            })
        }
          , be = function(e) {
            return e ? "origin"in e ? e.origin : "".concat(e.protocol, "//").concat(e.hostname) : ""
        }
          , he = function(e) {
            if (!e)
                return !1;
            if ("A" !== e.tagName)
                return !1;
            var t = (e.getAttribute("href") || "").trim();
            return t.length > 0 && 0 !== t.indexOf("#") && 0 !== t.indexOf("about:") && 0 !== t.indexOf("javascript:") && 0 !== t.indexOf("mailto:") && 0 !== t.indexOf("tel:") && !e.dataset.analyticsIntrapageLink
        }
          , _e = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.element
              , r = e.property
              , n = e.values;
            return !!t && (void 0 === n ? [] : n).includes(t[r])
        }
          , we = ["applenews:", "itms-apps:"]
          , Oe = ["apps.apple.com", "news.apple.com", "music.apple.com", "wallet.apple.com", "tv.apple.com", "books.apple.com"]
          , Se = Object.freeze({
            __proto__: null,
            classListContains: de,
            getOrigin: be,
            getQueryParam: function(e) {
                return window.URL ? new URL(window.location).searchParams.get(e) : null
            },
            isAccessoriesSERPLink: function(e) {
                return de(e, "as-producttile-tilelink", "pd-onebox-block")
            },
            isCrossOriginLink: function(e) {
                return he(e) && be(e) !== be(window.document.location)
            },
            isExitLink: function(e) {
                return he(e) && void 0 !== e.dataset.analyticsExitLink
            },
            isExternalLink: function(e) {
                return !(!he(e) || !e.hostname) && ((Q() || {}).linkInternalFilters || "").split(",").every(function(t) {
                    return e.hostname.indexOf(t.trim()) < 0
                })
            },
            isGlobalNavLink: function(e) {
                return de(e, "ac-gn-link")
            },
            isImmediateLink: function(e) {
                return de(e, "as-analytics-sendimmediately")
            },
            isMarcomUrl: function(e) {
                return !!e && e.indexOf("shop") < 0 && e.indexOf("search") < 0
            },
            isSearchLink: function(e) {
                return de(e, "ac-gn-searchresults-link")
            },
            isServiceSERPLink: function(e) {
                return he(e) && (_e({
                    element: e,
                    property: "protocol",
                    values: we
                }) || _e({
                    element: e,
                    property: "hostname",
                    values: Oe
                }))
            },
            isSignInLink: function(e) {
                return de(e, "ac-gn-bagview-nav-link-signIn")
            },
            isSignOutLink: function(e) {
                return de(e, "ac-gn-bagview-nav-link-signOut")
            },
            isStoreSERPLink: function(e) {
                return he(e) && _e({
                    element: e,
                    property: "hostname",
                    values: ["apps.apple.com"]
                })
            },
            isTargetingOtherWindow: function(e, t) {
                if (!e || !t)
                    return !1;
                var r = (e.target || "").toLowerCase();
                return t.metaKey || t.ctrlKey || t.shiftKey || ["", "_self", "_parent", "_top"].every(function(e) {
                    return e !== r
                }) || window.name.length > 0 && r.length > 0 && r !== window.name
            },
            isValidLink: he,
            redirectsToSignInLink: function(e) {
                return de(e, "ac-gn-bagview-nav-link-favorites", "ac-gn-bagview-nav-link-orders", "ac-gn-bagview-nav-link-account", "ac-gn-bagview-nav-link-signIn")
            },
            resolvesToSearchPage: function(e) {
                return !!e && /\/search\//.test(e.getAttribute("href"))
            },
            sanitizeUrl: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.url
                  , n = e.pageType
                  , o = e.isReferrerUrl
                  , i = r(t);
                if (!i)
                    return "";
                (o || "string" == typeof n && "errorpage" === n.toLowerCase()) && (i = i.replace(/\/vieworder\/.*/, "/vieworder/******")),
                i = (i = (i = (i = (i = i.replace(/\/order\/guest\/.*/, "/order/guest/******")).replace(/\/order\/applynow\/ep_payments\/.*/, "/order/applynow/ep_payments/******")).replace(/\/onMyWay\/.*/, "/onMyWay/******")).replace(/\/startPickup\/.*/, "/startPickup/******")).replace(/\/[^\/]+@.*/i, "/******");
                var u = new URL(i);
                /(\/shop(\/[^\/\n\r]*)?\/(sign|log)_?in)/i.test(u.pathname) && (u.search = "");
                var a = new URLSearchParams(u.search);
                return a.delete("fnode"),
                u.search = a.toString(),
                u.toString()
            }
        });
        exports.activityMap = g,
        exports.asCookie = L,
        exports.asCookieJson = T,
        exports.beaconHelpers = V,
        exports.cookie = d,
        exports.cookieJson = B,
        exports.deepClone = function e(t) {
            if (!t || "object" !== _(t))
                return t;
            if (Array.isArray(t)) {
                for (var r = Array(t.length), n = 0; n < t.length; n++)
                    r[n] = e(t[n]);
                return r
            }
            for (var o = {}, i = 0, u = Object.keys(t); i < u.length; i++) {
                var a = u[i];
                o[a] = e(t[a])
            }
            return o
        }
        ,
        exports.dispatchEventAsync = function(e, t) {
            return e instanceof Element && t instanceof Event && (setTimeout(function() {
                e.dispatchEvent(t)
            }, 0),
            !0)
        }
        ,
        exports.eventHelpers = q,
        exports.getOmniture = Q,
        exports.getRandomInt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
            return Math.floor(Math.random() * Math.floor(e))
        }
        ,
        exports.jsonEncoder = z,
        exports.localStorage = te,
        exports.localStorageJson = ne,
        exports.objectHelpers = se,
        exports.objectPath = le,
        exports.pipe = c,
        exports.sessionStorage = me,
        exports.sessionStorageJson = ve,
        exports.stringHelpers = a,
        exports.toStr = t,
        exports.toStrTrim = r,
        exports.urlHelpers = Se
    }
    , {
        "@apple/analytics-omniture-constants": 8
    }],
    13: [function(require, module, exports) {
        "use strict";
        var DEBUG_MESSAGING_KEY = "f7c9180f-5c45-47b4-8de4-428015f096c0"
          , enabled = !1
          , _window = window || self;
        try {
            enabled = !!_window.localStorage.getItem(DEBUG_MESSAGING_KEY)
        } catch (e) {}
        module.exports = enabled
    }
    , {}],
    14: [function(require, module, exports) {
        "use strict";
        var enabled = require("../enabled");
        module.exports = function(e) {
            return function() {
                if (enabled && "object" == typeof window.console && "function" == typeof console[e])
                    return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
            }
        }
    }
    , {
        "../enabled": 13
    }],
    15: [function(require, module, exports) {
        "use strict";
        module.exports = require("./internal/expose")("log")
    }
    , {
        "./internal/expose": 14
    }],
    16: [function(require, module, exports) {
        "use strict";
        module.exports = require("./internal/expose")("trace")
    }
    , {
        "./internal/expose": 14
    }],
    17: [function(require, module, exports) {
        "use strict";
        module.exports = function(t, e) {
            var i;
            return e ? {
                width: (i = t.getBoundingClientRect()).width,
                height: i.height
            } : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
    }
    , {}],
    18: [function(require, module, exports) {
        "use strict";
        var getDimensions = require("./getDimensions")
          , getScrollX = require("./getScrollX")
          , getScrollY = require("./getScrollY");
        module.exports = function(t, e) {
            var o, r, i, f;
            if (e)
                return o = t.getBoundingClientRect(),
                r = getScrollX(),
                i = getScrollY(),
                {
                    top: o.top + i,
                    right: o.right + r,
                    bottom: o.bottom + i,
                    left: o.left + r
                };
            for (f = getDimensions(t, e),
            o = {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: f.width,
                height: f.height
            }; t = t.offsetParent; )
                o.top += t.offsetTop,
                o.left += t.offsetLeft;
            return {
                top: o.top,
                right: o.left + o.width,
                bottom: o.top + o.height,
                left: o.left
            }
        }
    }
    , {
        "./getDimensions": 17,
        "./getScrollX": 19,
        "./getScrollY": 20
    }],
    19: [function(require, module, exports) {
        "use strict";
        module.exports = function(o) {
            return (o = o || window) === window ? window.scrollX || window.pageXOffset : o.scrollLeft
        }
    }
    , {}],
    20: [function(require, module, exports) {
        "use strict";
        module.exports = function(o) {
            return (o = o || window) === window ? window.scrollY || window.pageYOffset : o.scrollTop
        }
    }
    , {}],
    21: [function(require, module, exports) {
        "use strict";
        module.exports = Object.freeze({
            ELEMENT: 1,
            TEXT: 3,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11
        })
    }
    , {}],
    22: [function(require, module, exports) {
        "use strict";
        module.exports = {
            createDocumentFragment: require("./createDocumentFragment"),
            filterByNodeType: require("./filterByNodeType"),
            insertAfter: require("./insertAfter"),
            insertBefore: require("./insertBefore"),
            insertFirstChild: require("./insertFirstChild"),
            isNode: require("./isNode"),
            isNodeList: require("./isNodeList"),
            isNodeType: require("./isNodeType"),
            replace: require("./replace"),
            NODE_TYPES: require("./NODE_TYPES")
        }
    }
    , {
        "./NODE_TYPES": 21,
        "./createDocumentFragment": 23,
        "./filterByNodeType": 24,
        "./insertAfter": 25,
        "./insertBefore": 26,
        "./insertFirstChild": 27,
        "./isNode": 29,
        "./isNodeList": 30,
        "./isNodeType": 31,
        "./replace": 32
    }],
    23: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            var t, r = document.createDocumentFragment();
            if (e)
                for ((t = document.createElement("div")).innerHTML = e; t.firstChild; )
                    r.appendChild(t.firstChild);
            return r
        }
    }
    , {}],
    24: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./isNodeType")
          , ELEMENT_NODE = require("./NODE_TYPES").ELEMENT;
        module.exports = function(e, r) {
            return r = r || ELEMENT_NODE,
            (e = Array.prototype.slice.call(e)).filter(function(e) {
                return isNodeType(e, r)
            })
        }
    }
    , {
        "./NODE_TYPES": 21,
        "./isNodeType": 31
    }],
    25: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, t) {
            return validate.insertNode(e, "insertAfter"),
            validate.childNode(t, "insertAfter"),
            validate.hasParentNode(t, "insertAfter"),
            t.nextSibling ? t.parentNode.insertBefore(e, t.nextSibling) : t.parentNode.appendChild(e)
        }
    }
    , {
        "./internal/validate": 28
    }],
    26: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, r) {
            return validate.insertNode(e, "insertBefore"),
            validate.childNode(r, "insertBefore"),
            validate.hasParentNode(r, "insertBefore"),
            r.parentNode.insertBefore(e, r)
        }
    }
    , {
        "./internal/validate": 28
    }],
    27: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, i) {
            return validate.insertNode(e, "insertFirstChild"),
            validate.parentNode(i, "insertFirstChild"),
            i.firstChild ? i.insertBefore(e, i.firstChild) : i.appendChild(e)
        }
    }
    , {
        "./internal/validate": 28
    }],
    28: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("../isNodeType")
          , NODE_TYPES = require("../NODE_TYPES")
          , COMMENT_NODE = NODE_TYPES.COMMENT
          , DOCUMENT_FRAGMENT_NODE = NODE_TYPES.DOCUMENT_FRAGMENT
          , ELEMENT_NODE = NODE_TYPES.ELEMENT
          , TEXT_NODE = NODE_TYPES.TEXT
          , VALID_INSERT_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE, DOCUMENT_FRAGMENT_NODE]
          , ERR_INVALID_INSERT_NODE = " must be an Element, TextNode, Comment, or Document Fragment"
          , VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE]
          , ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment"
          , VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_FRAGMENT_NODE]
          , ERR_INVALID_PARENT_NODE = " must be an Element, or Document Fragment"
          , ERR_NO_PARENT_NODE = " must have a parentNode";
        module.exports = {
            parentNode: function(E, N, e) {
                if (e = e || "target",
                E && !isNodeType(E, VALID_PARENT_NODE))
                    throw new TypeError(N + ": " + e + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N, e) {
                if (e = e || "target",
                E && !isNodeType(E, VALID_CHILD_NODE))
                    throw new TypeError(N + ": " + e + ERR_INVALID_CHILD_NODE)
            },
            insertNode: function(E, N, e) {
                if (e = e || "node",
                E && !isNodeType(E, VALID_INSERT_NODE))
                    throw new TypeError(N + ": " + e + ERR_INVALID_INSERT_NODE)
            },
            hasParentNode: function(E, N, e) {
                if (e = e || "target",
                !E.parentNode)
                    throw new TypeError(N + ": " + e + ERR_NO_PARENT_NODE)
            }
        }
    }
    , {
        "../NODE_TYPES": 21,
        "../isNodeType": 31
    }],
    29: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }
    , {}],
    30: [function(require, module, exports) {
        "use strict";
        var nodeListToStringPattern = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        module.exports = function(t) {
            return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && nodeListToStringPattern.test(Object.prototype.toString.call(t))))
        }
    }
    , {}],
    31: [function(require, module, exports) {
        "use strict";
        var isNode = require("./isNode");
        module.exports = function(e, r) {
            return !!isNode(e) && ("number" == typeof r ? e.nodeType === r : !!Array.isArray(r) && -1 !== r.indexOf(e.nodeType))
        }
    }
    , {
        "./isNode": 29
    }],
    32: [function(require, module, exports) {
        "use strict";
        var validate = require("./internal/validate");
        module.exports = function(e, i) {
            return validate.insertNode(e, "insertFirstChild", "newNode"),
            validate.childNode(i, "insertFirstChild", "oldNode"),
            validate.hasParentNode(i, "insertFirstChild", "oldNode"),
            i.parentNode.replaceChild(e, i)
        }
    }
    , {
        "./internal/validate": 28
    }],
    33: [function(require, module, exports) {
        var ElementEngagement = require("./ac-element-engagement/ElementEngagement");
        module.exports = new ElementEngagement,
        module.exports.ElementEngagement = ElementEngagement
    }
    , {
        "./ac-element-engagement/ElementEngagement": 34
    }],
    34: [function(require, module, exports) {
        "use strict";
        var proto, EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro, ac_Object = {
            defaults: require("@marcom/ac-object/defaults"),
            extend: require("@marcom/ac-object/extend")
        }, Super = require("@marcom/ac-element-tracker").ElementTracker, trackedElementDefaults = {
            timeToEngage: 500,
            inViewThreshold: .75,
            stopOnEngaged: !0
        }, extendedTrackedElementProps = {
            thresholdEnterTime: 0,
            thresholdExitTime: 0,
            inThreshold: !1,
            engaged: !1,
            tracking: !0
        }, ElementEngagement = function(e) {
            Super.call(this, null, e),
            EventEmitterMicro.call(this),
            this._thresholdEnter = this._thresholdEnter.bind(this),
            this._thresholdExit = this._thresholdExit.bind(this),
            this._enterView = this._enterView.bind(this),
            this._exitView = this._exitView.bind(this)
        };
        proto = ElementEngagement.prototype = Object.create(Super.prototype),
        (proto = ac_Object.extend(proto, EventEmitterMicro.prototype))._decorateTrackedElement = function(e, t) {
            var i;
            i = ac_Object.defaults(trackedElementDefaults, t || {}),
            ac_Object.extend(e, i),
            ac_Object.extend(e, extendedTrackedElementProps)
        }
        ,
        proto._attachElementListeners = function(e) {
            e.on("thresholdenter", this._thresholdEnter, this),
            e.on("thresholdexit", this._thresholdExit, this),
            e.on("enterview", this._enterView, this),
            e.on("exitview", this._exitView, this)
        }
        ,
        proto._removeElementListeners = function(e) {
            e.off("thresholdenter", this._thresholdEnter),
            e.off("thresholdexit", this._thresholdExit),
            e.off("enterview", this._enterView),
            e.off("exitview", this._exitView)
        }
        ,
        proto._attachAllElementListeners = function() {
            this.elements.forEach(function(e) {
                e.stopOnEngaged && e.engaged || this._attachElementListeners(e)
            }, this)
        }
        ,
        proto._removeAllElementListeners = function() {
            this.elements.forEach(function(e) {
                this._removeElementListeners(e)
            }, this)
        }
        ,
        proto._elementInViewPastThreshold = function(e) {
            return e.pixelsInView === this._windowHeight || e.percentInView > e.inViewThreshold
        }
        ,
        proto._ifInView = function(e, t) {
            var i = e.inThreshold;
            Super.prototype._ifInView.apply(this, arguments),
            !i && this._elementInViewPastThreshold(e) && (e.inThreshold = !0,
            e.trigger("thresholdenter", e),
            "number" == typeof e.timeToEngage && e.timeToEngage >= 0 && (e.engagedTimeout = window.setTimeout(this._engaged.bind(this, e), e.timeToEngage)))
        }
        ,
        proto._ifAlreadyInView = function(e) {
            var t = e.inThreshold;
            Super.prototype._ifAlreadyInView.apply(this, arguments),
            t && !this._elementInViewPastThreshold(e) && (e.inThreshold = !1,
            e.trigger("thresholdexit", e),
            e.engagedTimeout && (window.clearTimeout(e.engagedTimeout),
            e.engagedTimeout = null))
        }
        ,
        proto._engaged = function(e) {
            e.engagedTimeout = null,
            this._elementEngaged(e),
            e.trigger("engaged", e),
            this.trigger("engaged", e)
        }
        ,
        proto._thresholdEnter = function(e) {
            e.thresholdEnterTime = Date.now(),
            e.thresholdExitTime = 0,
            this.trigger("thresholdenter", e)
        }
        ,
        proto._thresholdExit = function(e) {
            e.thresholdExitTime = Date.now(),
            this.trigger("thresholdexit", e)
        }
        ,
        proto._enterView = function(e) {
            this.trigger("enterview", e)
        }
        ,
        proto._exitView = function(e) {
            this.trigger("exitview", e)
        }
        ,
        proto._elementEngaged = function(e) {
            e.engaged = !0,
            e.stopOnEngaged && this.stop(e)
        }
        ,
        proto.stop = function(e) {
            this.tracking && !e && (this._removeAllElementListeners(),
            Super.prototype.stop.call(this)),
            e && e.tracking && (e.tracking = !1,
            this._removeElementListeners(e),
            this.removeElement(e))
        }
        ,
        proto.start = function(e) {
            e || this._attachAllElementListeners(),
            e && !e.tracking && (e.stopOnEngaged && e.engaged || (e.tracking = !0,
            this._attachElementListeners(e))),
            this.tracking ? (this.refreshAllElementMetrics(),
            this.refreshAllElementStates()) : Super.prototype.start.call(this)
        }
        ,
        proto.addElement = function(e, t) {
            t = t || {};
            var i = Super.prototype.addElement.call(this, e, t.useRenderedPosition);
            return this._decorateTrackedElement(i, t),
            i
        }
        ,
        proto.addElements = function(e, t) {
            [].forEach.call(e, function(e) {
                this.addElement(e, t)
            }, this)
        }
        ,
        module.exports = ElementEngagement
    }
    , {
        "@marcom/ac-element-tracker": 40,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/ac-object/defaults": 46,
        "@marcom/ac-object/extend": 47
    }],
    35: [function(require, module, exports) {
        "use strict";
        module.exports = 1
    }
    , {}],
    36: [function(require, module, exports) {
        "use strict";
        var isNode = require("../isNode");
        module.exports = function(e, o) {
            return !!isNode(e) && ("number" == typeof o ? e.nodeType === o : -1 !== o.indexOf(e.nodeType))
        }
    }
    , {
        "../isNode": 38
    }],
    37: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("./internal/isNodeType")
          , ELEMENT_NODE = require("./ELEMENT_NODE");
        module.exports = function(e) {
            return isNodeType(e, ELEMENT_NODE)
        }
    }
    , {
        "./ELEMENT_NODE": 35,
        "./internal/isNodeType": 36
    }],
    38: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            return !(!e || !e.nodeType)
        }
    }
    , {}],
    39: [function(require, module, exports) {
        "use strict";
        var nodeListToStringPattern = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        module.exports = function(t) {
            return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && nodeListToStringPattern.test(Object.prototype.toString.call(t))))
        }
    }
    , {}],
    40: [function(require, module, exports) {
        var ElementTracker = require("./ac-element-tracker/ElementTracker")
          , TrackedElement = require("./ac-element-tracker/TrackedElement");
        module.exports = new ElementTracker,
        module.exports.ElementTracker = ElementTracker,
        module.exports.TrackedElement = TrackedElement
    }
    , {
        "./ac-element-tracker/ElementTracker": 41,
        "./ac-element-tracker/TrackedElement": 42
    }],
    41: [function(require, module, exports) {
        "use strict";
        var ac_dom_nodes = {
            isNodeList: require("@marcom/ac-dom-nodes/isNodeList"),
            isElement: require("@marcom/ac-dom-nodes/isElement")
        }
          , ac_dom_metrics = {
            getDimensions: require("@marcom/ac-dom-metrics/getDimensions"),
            getPagePosition: require("@marcom/ac-dom-metrics/getPagePosition"),
            getScrollY: require("@marcom/ac-dom-metrics/getScrollY")
        }
          , ac_Object = {
            clone: require("@marcom/ac-object/clone"),
            extend: require("@marcom/ac-object/extend")
        }
          , TrackedElement = require("./TrackedElement")
          , defaultOptions = {
            autoStart: !1,
            useRenderedPosition: !1
        };
        function ElementTracker(e, t) {
            this.options = ac_Object.clone(defaultOptions),
            this.options = "object" == typeof t ? ac_Object.extend(this.options, t) : this.options,
            this._scrollY = this._getScrollY(),
            this._windowHeight = this._getWindowHeight(),
            this.tracking = !1,
            this.elements = [],
            e && (Array.isArray(e) || ac_dom_nodes.isNodeList(e) || ac_dom_nodes.isElement(e)) && this.addElements(e),
            this.refreshAllElementStates = this.refreshAllElementStates.bind(this),
            this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this),
            this.options.autoStart && this.start()
        }
        var proto = ElementTracker.prototype;
        proto.destroy = function() {
            var e, t;
            for (this.stop(),
            e = 0,
            t = this.elements.length; e < t; e++)
                this.elements[e].destroy();
            this.elements = null,
            this.options = null
        }
        ,
        proto._registerTrackedElements = function(e) {
            [].concat(e).forEach(function(e) {
                this._elementInDOM(e.element) && (e.offsetTop = e.element.offsetTop,
                this.elements.push(e))
            }, this)
        }
        ,
        proto._elementInDOM = function(e) {
            var t = !1
              , i = document.getElementsByTagName("body")[0];
            return ac_dom_nodes.isElement(e) && i.contains(e) && (t = !0),
            t
        }
        ,
        proto._elementPercentInView = function(e) {
            return e.pixelsInView / e.height
        }
        ,
        proto._elementPixelsInView = function(e) {
            var t = e.top - this._scrollY
              , i = e.bottom - this._scrollY;
            return t > this._windowHeight || i < 0 ? 0 : Math.min(i, this._windowHeight) - Math.max(t, 0)
        }
        ,
        proto._ifInView = function(e, t) {
            t || e.trigger("enterview", e)
        }
        ,
        proto._ifAlreadyInView = function(e) {
            e.inView || e.trigger("exitview", e)
        }
        ,
        proto.addElements = function(e, t) {
            void 0 === t && (t = this.options.useRenderedPosition);
            for (var i = 0, n = (e = ac_dom_nodes.isNodeList(e) ? Array.prototype.slice.call(e) : [].concat(e)).length; i < n; i++)
                this.addElement(e[i], t)
        }
        ,
        proto.addElement = function(e, t) {
            var i = null;
            if (void 0 === t && (t = this.options.useRenderedPosition),
            !ac_dom_nodes.isElement(e))
                throw new TypeError("ElementTracker: " + e + " is not a valid DOM element");
            return i = new TrackedElement(e,t),
            this._registerTrackedElements(i),
            this.refreshElementMetrics(i),
            this.refreshElementState(i),
            i
        }
        ,
        proto.removeElement = function(e) {
            var t, i = [];
            this.elements.forEach(function(t, n) {
                t !== e && t.element !== e || i.push(n)
            }),
            t = this.elements.filter(function(e, t) {
                return i.indexOf(t) < 0
            }),
            this.elements = t
        }
        ,
        proto.start = function() {
            !1 === this.tracking && (this.tracking = !0,
            window.addEventListener("resize", this.refreshAllElementMetrics),
            window.addEventListener("orientationchange", this.refreshAllElementMetrics),
            window.addEventListener("scroll", this.refreshAllElementStates),
            this.refreshAllElementMetrics())
        }
        ,
        proto.stop = function() {
            !0 === this.tracking && (this.tracking = !1,
            window.removeEventListener("resize", this.refreshAllElementMetrics),
            window.removeEventListener("orientationchange", this.refreshAllElementMetrics),
            window.removeEventListener("scroll", this.refreshAllElementStates))
        }
        ,
        proto.refreshAllElementMetrics = function(e, t) {
            "number" != typeof e && (e = this._getScrollY()),
            "number" != typeof t && (t = this._getWindowHeight()),
            this._scrollY = e,
            this._windowHeight = t,
            this.elements.forEach(this.refreshElementMetrics, this)
        }
        ,
        proto.refreshElementMetrics = function(e) {
            if (!e.isActive)
                return e;
            var t = ac_dom_metrics.getDimensions(e.element, e.useRenderedPosition)
              , i = ac_dom_metrics.getPagePosition(e.element, e.useRenderedPosition);
            return e = ac_Object.extend(e, t, i),
            this.refreshElementState(e)
        }
        ,
        proto.refreshAllElementStates = function(e) {
            "number" != typeof e && (e = this._getScrollY()),
            this._scrollY = e,
            this.elements.forEach(this.refreshElementState, this)
        }
        ,
        proto.refreshElementState = function(e) {
            if (!e.isActive)
                return e;
            var t = e.inView;
            return e.pixelsInView = this._elementPixelsInView(e),
            e.percentInView = this._elementPercentInView(e),
            e.inView = e.pixelsInView > 0,
            e.inView && this._ifInView(e, t),
            t && this._ifAlreadyInView(e),
            e
        }
        ,
        proto.pauseElementTracking = function(e) {
            e && (e.isActive = !1)
        }
        ,
        proto.resumeElementTracking = function(e) {
            e && (e.isActive = !0)
        }
        ,
        proto._getWindowHeight = function() {
            return window.innerHeight
        }
        ,
        proto._getScrollY = function() {
            return ac_dom_metrics.getScrollY()
        }
        ,
        module.exports = ElementTracker
    }
    , {
        "./TrackedElement": 42,
        "@marcom/ac-dom-metrics/getDimensions": 17,
        "@marcom/ac-dom-metrics/getPagePosition": 18,
        "@marcom/ac-dom-metrics/getScrollY": 20,
        "@marcom/ac-dom-nodes/isElement": 37,
        "@marcom/ac-dom-nodes/isNodeList": 39,
        "@marcom/ac-object/clone": 45,
        "@marcom/ac-object/extend": 47
    }],
    42: [function(require, module, exports) {
        "use strict";
        var ac_dom_nodes = {
            isElement: require("@marcom/ac-dom-nodes/isElement")
        }
          , EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , superclass = EventEmitterMicro.prototype;
        function TrackedElement(e, t) {
            if (!ac_dom_nodes.isElement(e))
                throw new TypeError("TrackedElement: " + e + " is not a valid DOM element");
            EventEmitterMicro.call(this),
            this.element = e,
            this.inView = !1,
            this.isActive = !0,
            this.percentInView = 0,
            this.pixelsInView = 0,
            this.offsetTop = 0,
            this.top = 0,
            this.right = 0,
            this.bottom = 0,
            this.left = 0,
            this.width = 0,
            this.height = 0,
            this.useRenderedPosition = t || !1
        }
        var proto = TrackedElement.prototype = Object.create(superclass);
        proto.destroy = function() {
            this.element = null,
            superclass.destroy.call(this)
        }
        ,
        module.exports = TrackedElement
    }
    , {
        "@marcom/ac-dom-nodes/isElement": 37,
        "@marcom/ac-event-emitter-micro": 43
    }],
    43: [function(require, module, exports) {
        "use strict";
        module.exports = {
            EventEmitterMicro: require("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }
    , {
        "./ac-event-emitter-micro/EventEmitterMicro": 44
    }],
    44: [function(require, module, exports) {
        "use strict";
        function EventEmitterMicro() {
            this._events = {}
        }
        var proto = EventEmitterMicro.prototype;
        proto.on = function(t, e) {
            this._events[t] = this._events[t] || [],
            this._events[t].unshift(e)
        }
        ,
        proto.once = function(t, e) {
            var n = this;
            this.on(t, function i(s) {
                n.off(t, i),
                void 0 !== s ? e(s) : e()
            })
        }
        ,
        proto.off = function(t, e) {
            if (this.has(t)) {
                if (1 === arguments.length)
                    return this._events[t] = null,
                    void delete this._events[t];
                var n = this._events[t].indexOf(e);
                -1 !== n && this._events[t].splice(n, 1)
            }
        }
        ,
        proto.trigger = function(t, e) {
            if (this.has(t))
                for (var n = this._events[t].length - 1; n >= 0; n--)
                    void 0 !== e ? this._events[t][n](e) : this._events[t][n]()
        }
        ,
        proto.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }
        ,
        proto.destroy = function() {
            for (var t in this._events)
                this._events[t] = null;
            this._events = null
        }
        ,
        module.exports = EventEmitterMicro
    }
    , {}],
    45: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/isArray");
        var extend = require("./extend")
          , hasOwnProp = Object.prototype.hasOwnProperty
          , deepClone = function(e, r) {
            var n;
            for (n in r)
                hasOwnProp.call(r, n) && (null === r[n] ? e[n] = null : "object" == typeof r[n] ? (e[n] = Array.isArray(r[n]) ? [] : {},
                deepClone(e[n], r[n])) : e[n] = r[n]);
            return e
        };
        module.exports = function(e, r) {
            return r ? deepClone({}, e) : extend({}, e)
        }
    }
    , {
        "./extend": 47,
        "@marcom/ac-polyfills/Array/isArray": 48
    }],
    46: [function(require, module, exports) {
        "use strict";
        var extend = require("./extend");
        module.exports = function(e, t) {
            if ("object" != typeof e)
                throw new TypeError("defaults: must provide a defaults object");
            if ("object" != typeof (t = t || {}))
                throw new TypeError("defaults: options must be a typeof object");
            return extend({}, e, t)
        }
    }
    , {
        "./extend": 47
    }],
    47: [function(require, module, exports) {
        "use strict";
        require("@marcom/ac-polyfills/Array/prototype.forEach");
        var hasOwnProp = Object.prototype.hasOwnProperty;
        module.exports = function() {
            var r, o;
            return r = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments),
            o = r.shift(),
            r.forEach(function(r) {
                if (null != r)
                    for (var t in r)
                        hasOwnProp.call(r, t) && (o[t] = r[t])
            }),
            o
        }
    }
    , {
        "@marcom/ac-polyfills/Array/prototype.forEach": 49
    }],
    48: [function(require, module, exports) {
        Array.isArray || (Array.isArray = function(r) {
            return "[object Array]" === Object.prototype.toString.call(r)
        }
        )
    }
    , {}],
    49: [function(require, module, exports) {
        Array.prototype.forEach || (Array.prototype.forEach = function(o, r) {
            var t, a, c = Object(this);
            if ("function" != typeof o)
                throw new TypeError("No function object passed to forEach.");
            var e = this.length;
            for (t = 0; t < e; t += 1)
                a = c[t],
                o.call(r, a, t, c)
        }
        )
    }
    , {}],
    50: [function(require, module, exports) {
        "use strict";
        var appMeasurementSetup = require("./appmeasurement-setup/AppMeasurementSetup");
        module.exports = {
            init: appMeasurementSetup.init,
            getInstance: appMeasurementSetup.getInstance
        }
    }
    , {
        "./appmeasurement-setup/AppMeasurementSetup": 54
    }],
    51: [function(require, module, exports) {
        !function() {
            function e(e) {
                var t, n, a, i, r, o = window.s_c_il, c = e.split(","), s = 0;
                if (o)
                    for (n = 0; !s && n < o.length; ) {
                        if ("s_c" == (t = o[n])._c && (t.account || t.oun))
                            if (t.account && t.account == e)
                                s = 1;
                            else
                                for (a = t.account ? t.account : t.oun,
                                a = t.allAccounts ? t.allAccounts : a.split(","),
                                i = 0; i < c.length; i++)
                                    for (r = 0; r < a.length; r++)
                                        c[i] == a[r] && (s = 1);
                        n++
                    }
                return s ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e),
                t
            }
            function t() {
                var t, n, a, i = window, r = i.s_giq;
                if (r)
                    for (t = 0; t < r.length; t++)
                        (a = e((n = r[t]).oun)).setAccount(n.un),
                        a.setTagContainer(n.tagContainerName);
                i.s_giq = 0
            }
            window.AppMeasurement_Module_ActivityMap = function(e) {
                function t() {
                    var e = s.pageYOffset + (s.innerHeight || 0);
                    e && e > +u && (u = e)
                }
                function n() {
                    if (c.scrollReachSelector) {
                        var t = e.d.querySelector && e.d.querySelector(c.scrollReachSelector);
                        t ? (u = t.scrollTop || 0,
                        t.addEventListener("scroll", function() {
                            var e;
                            (e = t && t.scrollTop + t.clientHeight || 0) > u && (u = e)
                        })) : 0 < f-- && setTimeout(n, 1e3)
                    }
                }
                function a(e, t) {
                    var n, a, i;
                    if (e && t && (n = c.c[t] || (c.c[t] = t.split(","))))
                        for (i = 0; i < n.length && (a = n[i++]); )
                            if (-1 < e.indexOf(a))
                                return null;
                    return e
                }
                function i(t, n, a, i, r) {
                    var o, c;
                    if (t.dataset && (c = t.dataset[n]) ? o = c : t.getAttribute && ((c = t.getAttribute("data-" + a)) ? o = c : (c = t.getAttribute(a)) && (o = c)),
                    !o && e.useForcedLinkTracking && r) {
                        var s;
                        if (t = t.onclick ? "" + t.onclick : "",
                        n = "",
                        i && t && 0 <= (a = t.indexOf(i))) {
                            for (a += i.length; a < t.length; )
                                if (c = t.charAt(a++),
                                0 <= "'\"".indexOf(c)) {
                                    s = c;
                                    break
                                }
                            for (var l = !1; a < t.length && s && (c = t.charAt(a),
                            l || c !== s); )
                                "\\" === c ? l = !0 : (n += c,
                                l = !1),
                                a++
                        }
                        (s = n) && (e.w[i] = s)
                    }
                    return o || r && e.w[i]
                }
                function r(e, t, n) {
                    var i;
                    return (i = c[t](e, n)) && a(o(i), c[t + "Exclusions"])
                }
                function o(e) {
                    if (null == e || null == e)
                        return e;
                    try {
                        return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r   ᠎ - \u2028\u2029 　\ufeff]{1,}", "mg"), " ").substring(0, 254)
                    } catch (e) {}
                }
                var c = this;
                c.s = e;
                var s = window;
                s.s_c_in || (s.s_c_il = [],
                s.s_c_in = 0),
                c._il = s.s_c_il,
                c._in = s.s_c_in,
                c._il[c._in] = c,
                s.s_c_in++,
                c._c = "s_m";
                var l, u = 0, f = 60;
                c.c = {};
                var p = {
                    SCRIPT: 1,
                    STYLE: 1,
                    LINK: 1,
                    CANVAS: 1
                };
                c._g = function() {
                    var t, n, a, i = e.contextData, o = e.linkObject;
                    (t = e.pageName || e.pageURL) && (n = r(o, "link", e.linkName)) && (a = r(o, "region")) && (i["a.activitymap.page"] = t.substring(0, 255),
                    i["a.activitymap.link"] = 128 < n.length ? n.substring(0, 128) : n,
                    i["a.activitymap.region"] = 127 < a.length ? a.substring(0, 127) : a,
                    0 < u && (i["a.activitymap.xy"] = 10 * Math.floor(u / 10)),
                    i["a.activitymap.pageIDType"] = e.pageName ? 1 : 0)
                }
                ,
                c._d = function() {
                    c.trackScrollReach && !l && (c.scrollReachSelector ? n() : (t(),
                    s.addEventListener && s.addEventListener("scroll", t, !1)),
                    l = !0)
                }
                ,
                c.link = function(e, t) {
                    var n;
                    if (t)
                        n = a(o(t), c.linkExclusions);
                    else if ((n = e) && !(n = i(e, "sObjectId", "s-object-id", "s_objectID", 1))) {
                        var r, s;
                        (s = a(o(e.innerText || e.textContent), c.linkExclusions)) || (function e(t, n, a) {
                            var i;
                            if (t && !(1 === (i = t.nodeType) && (i = t.nodeName) && (i = i.toUpperCase()) && p[i]) && (1 === t.nodeType && (i = t.nodeValue) && (n[n.length] = i),
                            a.a || a.t || a.s || !t.getAttribute || ((i = t.getAttribute("alt")) ? a.a = i : (i = t.getAttribute("title")) ? a.t = i : "IMG" == ("" + t.nodeName).toUpperCase() && (i = t.getAttribute("src") || t.src) && (a.s = i)),
                            (i = t.childNodes) && i.length))
                                for (t = 0; t < i.length; t++)
                                    e(i[t], n, a)
                        }(e, r = [], n = {
                            a: void 0,
                            t: void 0,
                            s: void 0
                        }),
                        (s = a(o(r.join("")))) || (s = a(o(n.a ? n.a : n.t ? n.t : n.s ? n.s : void 0))) || !(r = (r = e.tagName) && r.toUpperCase ? r.toUpperCase() : "") || ("INPUT" == r || "SUBMIT" == r && e.value ? s = a(o(e.value)) : "IMAGE" == r && e.src && (s = a(o(e.src))))),
                        n = s
                    }
                    return n
                }
                ,
                c.region = function(e) {
                    for (var t, n = c.regionIDAttribute || "id"; e && (e = e.parentNode); ) {
                        if (t = i(e, n, n, n))
                            return t;
                        if ("BODY" == e.nodeName)
                            return "BODY"
                    }
                }
            }
            ,
            window.AppMeasurement = function(e) {
                var t = this;
                t.version = "2.23.0";
                var n = window;
                n.s_c_in || (n.s_c_il = [],
                n.s_c_in = 0),
                t._il = n.s_c_il,
                t._in = n.s_c_in,
                t._il[t._in] = t,
                n.s_c_in++,
                t._c = "s_c";
                var a = n.AppMeasurement.mc;
                a || (a = null);
                var i, r, o, c = n;
                try {
                    for (i = c.parent,
                    r = c.location; i && i.location && r && "" + i.location != "" + r && c.location && "" + i.location != "" + c.location && i.location.host === r.host; )
                        i = (c = i).parent
                } catch (e) {}
                t.log = function(e) {
                    try {
                        console.log(e)
                    } catch (e) {}
                }
                ,
                t.Sa = function(e) {
                    return "" + parseInt(e) == "" + e
                }
                ,
                t.replace = function(e, t, n) {
                    return !e || 0 > e.indexOf(t) ? e : e.split(t).join(n)
                }
                ,
                t.escape = function(e) {
                    var n, a;
                    if (!e)
                        return e;
                    for (e = encodeURIComponent(e),
                    n = 0; 7 > n; n++)
                        a = "+~!*()'".substring(n, n + 1),
                        0 <= e.indexOf(a) && (e = t.replace(e, a, "%" + a.charCodeAt(0).toString(16).toUpperCase()));
                    return e
                }
                ,
                t.unescape = function(e) {
                    if (!e)
                        return e;
                    e = 0 <= e.indexOf("+") ? t.replace(e, "+", " ") : e;
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {}
                    return unescape(e)
                }
                ,
                t.Rb = function() {
                    var e, a = n.location.hostname, i = t.fpCookieDomainPeriods;
                    if (i || (i = t.cookieDomainPeriods),
                    a && !t.La && !/^[0-9.]+$/.test(a) && (i = 2 < (i = i ? parseInt(i) : 2) ? i : 2,
                    0 <= (e = a.lastIndexOf(".")))) {
                        for (; 0 <= e && 1 < i; )
                            e = a.lastIndexOf(".", e - 1),
                            i--;
                        t.La = 0 < e ? a.substring(e) : a
                    }
                    return t.La
                }
                ,
                t.c_r = t.cookieRead = function(e) {
                    e = t.escape(e);
                    var n = " " + t.d.cookie
                      , a = n.indexOf(" " + e + "=")
                      , i = 0 > a ? a : n.indexOf(";", a);
                    return "[[B]]" != (e = 0 > a ? "" : t.unescape(n.substring(a + 2 + e.length, 0 > i ? n.length : i))) ? e : ""
                }
                ,
                t.c_w = t.cookieWrite = function(e, n, a) {
                    var i, r = t.Rb(), o = t.cookieLifetime;
                    return n = "" + n,
                    o = o ? ("" + o).toUpperCase() : "",
                    a && "SESSION" != o && "NONE" != o && ((i = "" != n ? parseInt(o || 0) : -60) ? (a = new Date).setTime(a.getTime() + 1e3 * i) : 1 === a && (i = (a = new Date).getYear(),
                    a.setYear(i + 2 + (1900 > i ? 1900 : 0)))),
                    e && "NONE" != o ? (t.d.cookie = t.escape(e) + "=" + t.escape("" != n ? n : "[[B]]") + "; path=/;" + (a && "SESSION" != o ? " expires=" + a.toUTCString() + ";" : "") + (r ? " domain=" + r + ";" : "") + (t.writeSecureCookies ? " secure;" : ""),
                    t.cookieRead(e) == n) : 0
                }
                ,
                t.Ob = function() {
                    var e = t.Util.getIeVersion();
                    "number" == typeof e && 10 > e && (t.unsupportedBrowser = !0,
                    t.Bb(t, function() {}))
                }
                ,
                t.za = function() {
                    var e = navigator.userAgent;
                    return "Microsoft Internet Explorer" === navigator.appName || 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/") && 0 <= e.indexOf("Windows NT 6")
                }
                ,
                t.Bb = function(e, t) {
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && "function" == typeof e[n] && (e[n] = t)
                }
                ,
                t.K = [],
                t.fa = function(e, n, a) {
                    if (t.Ma)
                        return 0;
                    t.maxDelay || (t.maxDelay = 250);
                    var i = 0
                      , r = (new Date).getTime() + t.maxDelay
                      , o = t.d.visibilityState
                      , c = ["webkitvisibilitychange", "visibilitychange"];
                    if (o || (o = t.d.webkitVisibilityState),
                    o && "prerender" == o) {
                        if (!t.ga)
                            for (t.ga = 1,
                            a = 0; a < c.length; a++)
                                t.d.addEventListener(c[a], function() {
                                    var e = t.d.visibilityState;
                                    e || (e = t.d.webkitVisibilityState),
                                    "visible" == e && (t.ga = 0,
                                    t.delayReady())
                                });
                        i = 1,
                        r = 0
                    } else
                        a || t.u("_d") && (i = 1);
                    return i && (t.K.push({
                        m: e,
                        a: n,
                        t: r
                    }),
                    t.ga || setTimeout(t.delayReady, t.maxDelay)),
                    i
                }
                ,
                t.delayReady = function() {
                    var e, n = (new Date).getTime(), a = 0;
                    for (t.u("_d") ? a = 1 : t.Ba(); 0 < t.K.length; ) {
                        if (e = t.K.shift(),
                        a && !e.t && e.t > n) {
                            t.K.unshift(e),
                            setTimeout(t.delayReady, parseInt(t.maxDelay / 2));
                            break
                        }
                        t.Ma = 1,
                        t[e.m].apply(t, e.a),
                        t.Ma = 0
                    }
                }
                ,
                t.setAccount = t.sa = function(e) {
                    var n, a;
                    if (!t.fa("setAccount", arguments))
                        if (t.account = e,
                        t.allAccounts)
                            for (n = t.allAccounts.concat(e.split(",")),
                            t.allAccounts = [],
                            n.sort(),
                            a = 0; a < n.length; a++)
                                0 != a && n[a - 1] == n[a] || t.allAccounts.push(n[a]);
                        else
                            t.allAccounts = e.split(",")
                }
                ,
                t.foreachVar = function(e, n) {
                    var a, i, r, o, c = "";
                    for (r = i = "",
                    t.lightProfileID ? (a = t.O,
                    (c = t.lightTrackVars) && (c = "," + c + "," + t.la.join(",") + ",")) : (a = t.g,
                    (t.pe || t.linkType) && (c = t.linkTrackVars,
                    i = t.linkTrackEvents,
                    t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1),
                    t[r] && (c = t[r].ic,
                    i = t[r].hc))),
                    c && (c = "," + c + "," + t.D.join(",") + ","),
                    i && c && (c += ",events,")),
                    n && (n = "," + n + ","),
                    i = 0; i < a.length; i++)
                        r = a[i],
                        (o = t[r]) && (!c || 0 <= c.indexOf("," + r + ",")) && (!n || 0 <= n.indexOf("," + r + ",")) && e(r, o)
                }
                ,
                t.l = function(e, n, a, i, r) {
                    var o, c, s, l, u = "", f = 0;
                    if ("contextData" == e && (e = "c"),
                    "clientHints" == e && (e = "h"),
                    n) {
                        for (o in n)
                            if (!(Object.prototype[o] || r && o.substring(0, r.length) != r) && n[o] && (!a || 0 <= a.indexOf("," + (i ? i + "." : "") + o + ","))) {
                                if (s = !1,
                                f)
                                    for (c = 0; c < f.length; c++)
                                        if (o.substring(0, f[c].length) == f[c]) {
                                            s = !0;
                                            break
                                        }
                                if (!s && ("" == u && (u += "&" + e + "."),
                                c = n[o],
                                r && (o = o.substring(r.length)),
                                0 < o.length))
                                    if (0 < (s = o.indexOf(".")))
                                        s = (r || "") + (c = o.substring(0, s)) + ".",
                                        f || (f = []),
                                        f.push(s),
                                        u += t.l(c, n, a, i, s);
                                    else if ("boolean" == typeof c && (c = c ? "true" : "false"),
                                    c) {
                                        if ("retrieveLightData" == i && 0 > r.indexOf(".contextData."))
                                            switch (s = o.substring(0, 4),
                                            l = o.substring(4),
                                            o) {
                                            case "transactionID":
                                                o = "xact";
                                                break;
                                            case "channel":
                                                o = "ch";
                                                break;
                                            case "campaign":
                                                o = "v0";
                                                break;
                                            default:
                                                t.Sa(l) && ("prop" == s ? o = "c" + l : "eVar" == s ? o = "v" + l : "list" == s ? o = "l" + l : "hier" == s && (o = "h" + l,
                                                c = c.substring(0, 255)))
                                            }
                                        u += "&" + t.escape(o) + "=" + t.escape(c)
                                    }
                            }
                        "" != u && (u += "&." + e)
                    }
                    return u
                }
                ,
                t.usePostbacks = 0,
                t.Ub = function() {
                    var e, n, i, r, o, c, s, l, u = "", f = "", p = "", g = r = "", d = t.T();
                    if (t.lightProfileID ? (e = t.O,
                    (f = t.lightTrackVars) && (f = "," + f + "," + t.la.join(",") + ",")) : (e = t.g,
                    (t.pe || t.linkType) && (f = t.linkTrackVars,
                    p = t.linkTrackEvents,
                    t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1),
                    t[r] && (f = t[r].ic,
                    p = t[r].hc))),
                    f && (f = "," + f + "," + t.D.join(",") + ","),
                    p && (p = "," + p + ",",
                    f && (f += ",events,")),
                    t.events2 && (g += ("" != g ? "," : "") + t.events2)),
                    d && d.getCustomerIDs) {
                        if (r = a,
                        o = d.getCustomerIDs())
                            for (n in o)
                                Object.prototype[n] || "object" == typeof (i = o[n]) && (r || (r = {}),
                                i.id && (r[n + ".id"] = i.id),
                                i.authState && (r[n + ".as"] = i.authState));
                        r && (u += t.l("cid", r))
                    }
                    for (t.AudienceManagement && t.AudienceManagement.isReady() && (u += t.l("d", t.AudienceManagement.getEventCallConfigParams())),
                    n = 0; n < e.length; n++) {
                        if (r = e[n],
                        o = t[r],
                        i = r.substring(0, 4),
                        c = r.substring(4),
                        o || ("events" == r && g ? (o = g,
                        g = "") : "marketingCloudOrgID" == r && d && t.V("ECID") && (o = d.marketingCloudOrgID)),
                        o && (!f || 0 <= f.indexOf("," + r + ","))) {
                            switch (r) {
                            case "customerPerspective":
                                r = "cp";
                                break;
                            case "marketingCloudOrgID":
                                r = "mcorgid";
                                break;
                            case "supplementalDataID":
                                r = "sdid";
                                break;
                            case "timestamp":
                                r = "ts";
                                break;
                            case "dynamicVariablePrefix":
                                r = "D";
                                break;
                            case "visitorID":
                                r = "vid";
                                break;
                            case "marketingCloudVisitorID":
                                r = "mid";
                                break;
                            case "analyticsVisitorID":
                                r = "aid";
                                break;
                            case "audienceManagerLocationHint":
                                r = "aamlh";
                                break;
                            case "audienceManagerBlob":
                                r = "aamb";
                                break;
                            case "authState":
                                r = "as";
                                break;
                            case "pageURL":
                                r = "g",
                                255 < o.length && (t.pageURLRest = o.substring(255),
                                o = o.substring(0, 255));
                                break;
                            case "pageURLRest":
                                r = "-g";
                                break;
                            case "referrer":
                                r = "r";
                                break;
                            case "vmk":
                            case "visitorMigrationKey":
                                r = "vmt";
                                break;
                            case "visitorMigrationServer":
                                r = "vmf",
                                t.ssl && t.visitorMigrationServerSecure && (o = "");
                                break;
                            case "visitorMigrationServerSecure":
                                r = "vmf",
                                !t.ssl && t.visitorMigrationServer && (o = "");
                                break;
                            case "charSet":
                                r = "ce";
                                break;
                            case "visitorNamespace":
                                r = "ns";
                                break;
                            case "cookieDomainPeriods":
                                r = "cdp";
                                break;
                            case "cookieLifetime":
                                r = "cl";
                                break;
                            case "variableProvider":
                                r = "vvp";
                                break;
                            case "currencyCode":
                                r = "cc";
                                break;
                            case "channel":
                                r = "ch";
                                break;
                            case "transactionID":
                                r = "xact";
                                break;
                            case "campaign":
                                r = "v0";
                                break;
                            case "latitude":
                                r = "lat";
                                break;
                            case "longitude":
                                r = "lon";
                                break;
                            case "resolution":
                                r = "s";
                                break;
                            case "colorDepth":
                                r = "c";
                                break;
                            case "javascriptVersion":
                                r = "j";
                                break;
                            case "javaEnabled":
                                r = "v";
                                break;
                            case "cookiesEnabled":
                                r = "k";
                                break;
                            case "browserWidth":
                                r = "bw";
                                break;
                            case "browserHeight":
                                r = "bh";
                                break;
                            case "connectionType":
                                r = "ct";
                                break;
                            case "homepage":
                                r = "hp";
                                break;
                            case "events":
                                if (g && (o += ("" != o ? "," : "") + g),
                                p && "string" == typeof o)
                                    for (c = o.split(","),
                                    o = "",
                                    i = 0; i < c.length; i++)
                                        0 <= (l = (s = c[i]).indexOf("=")) && (s = s.substring(0, l)),
                                        0 <= (l = s.indexOf(":")) && (s = s.substring(0, l)),
                                        0 <= p.indexOf("," + s + ",") && (o += (o ? "," : "") + c[i]);
                                break;
                            case "events2":
                                o = "";
                                break;
                            case "contextData":
                                u += t.l("c", t[r], f, r),
                                o = "";
                                break;
                            case "clientHints":
                                u += t.l("h", t[r], f, r),
                                o = "";
                                break;
                            case "lightProfileID":
                                r = "mtp";
                                break;
                            case "lightStoreForSeconds":
                                r = "mtss",
                                t.lightProfileID || (o = "");
                                break;
                            case "lightIncrementBy":
                                r = "mti",
                                t.lightProfileID || (o = "");
                                break;
                            case "retrieveLightProfiles":
                                r = "mtsr";
                                break;
                            case "deleteLightProfiles":
                                r = "mtsd";
                                break;
                            case "retrieveLightData":
                                t.retrieveLightProfiles && (u += t.l("mts", t[r], f, r)),
                                o = "";
                                break;
                            default:
                                t.Sa(c) && ("prop" == i ? r = "c" + c : "eVar" == i ? r = "v" + c : "list" == i ? r = "l" + c : "hier" == i && (r = "h" + c,
                                o = o.substring(0, 255)))
                            }
                            o && (u += "&" + r + "=" + ("pev" != r.substring(0, 3) ? t.escape(o) : o))
                        }
                        "pev3" == r && t.e && (u += t.e)
                    }
                    return t.ka && (u += "&lrt=" + t.ka,
                    t.ka = null),
                    u
                }
                ,
                t.B = function(e) {
                    var t = e.tagName;
                    return "undefined" != "" + e.pc || "undefined" != "" + e.cc && "HTML" != ("" + e.cc).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""),
                    t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")),
                    t)
                }
                ,
                t.Oa = function(e) {
                    var t, a, i, r = n.location, o = e.href ? e.href : "";
                    return "string" != typeof o && (o = ""),
                    t = o.indexOf(":"),
                    a = o.indexOf("?"),
                    i = o.indexOf("/"),
                    o && (0 > t || 0 <= a && t > a || 0 <= i && t > i) && (a = e.protocol && 1 < e.protocol.length ? e.protocol : r.protocol ? r.protocol : "",
                    t = r.pathname.lastIndexOf("/"),
                    o = (a ? a + "//" : "") + (e.host ? e.host : r.host ? r.host : "") + ("/" != o.substring(0, 1) ? r.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + o),
                    o
                }
                ,
                t.L = function(e) {
                    var n, a, i = t.B(e), r = "", o = 0;
                    return i && (n = e.protocol,
                    a = e.onclick,
                    !e.href || "A" != i && "AREA" != i || a && n && !(0 > n.toLowerCase().indexOf("javascript")) ? a ? (r = t.replace(t.replace(t.replace(t.replace("" + a, "\r", ""), "\n", ""), "\t", ""), " ", ""),
                    o = 2) : "INPUT" == i || "SUBMIT" == i ? (e.value ? r = e.value : e.innerText ? r = e.innerText : e.textContent && (r = e.textContent),
                    o = 3) : "IMAGE" == i && e.src && (r = e.src) : r = t.Oa(e),
                    r) ? {
                        id: r.substring(0, 100),
                        type: o
                    } : 0
                }
                ,
                t.nc = function(e) {
                    for (var n = t.B(e), a = t.L(e); e && !a && "BODY" != n; )
                        (e = e.parentElement ? e.parentElement : e.parentNode) && (n = t.B(e),
                        a = t.L(e));
                    return a && "BODY" != n || (e = 0),
                    e && (0 <= (n = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= n.indexOf(".trackLink(")) && (e = 0),
                    e
                }
                ,
                t.bc = function() {
                    var e, a, i, r, o = t.linkObject, c = t.linkType, s = t.linkURL;
                    if (t.ma = 1,
                    o || (t.ma = 0,
                    o = t.clickObject),
                    o) {
                        for (e = t.B(o),
                        a = t.L(o); o && !a && "BODY" != e; )
                            (o = o.parentElement ? o.parentElement : o.parentNode) && (e = t.B(o),
                            a = t.L(o));
                        if (a && "BODY" != e || (o = 0),
                        o && !t.linkObject) {
                            var l = o.onclick ? "" + o.onclick : "";
                            (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (o = 0)
                        }
                    } else
                        t.ma = 1;
                    if (!s && o && (s = t.Oa(o)),
                    s && !t.linkLeaveQueryString && (0 <= (i = s.indexOf("?")) && (s = s.substring(0, i))),
                    !c && s) {
                        var u, f = 0, p = 0;
                        if (t.trackDownloadLinks && t.linkDownloadFileTypes)
                            for (i = (l = s.toLowerCase()).indexOf("?"),
                            r = l.indexOf("#"),
                            0 <= i ? 0 <= r && r < i && (i = r) : i = r,
                            0 <= i && (l = l.substring(0, i)),
                            i = t.linkDownloadFileTypes.toLowerCase().split(","),
                            r = 0; r < i.length; r++)
                                (u = i[r]) && (l.substring(l.length - (u.length + 1)) == "." + u || l.substring(l.length - (u.length + 1)) == "/" + u) && (c = "d");
                        if (t.trackExternalLinks && !c && (l = s.toLowerCase(),
                        t.Ra(l) && (t.linkInternalFilters || (t.linkInternalFilters = n.location.hostname),
                        i = 0,
                        t.linkExternalFilters ? (i = t.linkExternalFilters.toLowerCase().split(","),
                        f = 1) : t.linkInternalFilters && (i = t.linkInternalFilters.toLowerCase().split(",")),
                        i))) {
                            for (r = 0; r < i.length; r++)
                                u = i[r],
                                0 <= l.indexOf(u) && (p = 1);
                            p ? f && (c = "e") : f || (c = "e")
                        }
                    }
                    t.linkObject = o,
                    t.linkURL = s,
                    t.linkType = c,
                    (t.trackClickMap || t.trackInlineStats) && (t.e = "",
                    o && (c = t.pageName,
                    s = 1,
                    o = o.sourceIndex,
                    c || (c = t.pageURL,
                    s = 0),
                    n.s_objectID && (a.id = n.s_objectID,
                    o = a.type = 1),
                    c && a && a.id && e && (t.e = "&pid=" + t.escape(c.substring(0, 255)) + (s ? "&pidt=" + s : "") + "&oid=" + t.escape(a.id.substring(0, 100)) + (a.type ? "&oidt=" + a.type : "") + "&ot=" + e + (o ? "&oi=" + o : ""))))
                }
                ,
                t.Vb = function() {
                    var e = t.ma
                      , n = t.linkType
                      , a = t.linkURL
                      , i = t.linkName;
                    if (n && (a || i) && ("d" != (n = n.toLowerCase()) && "e" != n && (n = "o"),
                    t.pe = "lnk_" + n,
                    t.pev1 = a ? t.escape(a) : "",
                    t.pev2 = i ? t.escape(i) : "",
                    e = 1),
                    t.abort && (e = 0),
                    t.trackClickMap || t.trackInlineStats || t.Yb()) {
                        n = {},
                        a = 0;
                        var r, o, c, s = (l = t.vb()) ? l.split("&") : 0, l = 0;
                        if (s)
                            for (r = 0; r < s.length; r++)
                                o = s[r].split("="),
                                i = t.unescape(o[0]).split(","),
                                n[o = t.unescape(o[1])] = i;
                        for (c in i = t.account.split(","),
                        r = {},
                        t.contextData)
                            c && !Object.prototype[c] && "a.activitymap." == c.substring(0, 14) && (r[c] = t.contextData[c],
                            t.contextData[c] = "");
                        if (t.e = t.l("c", r) + (t.e ? t.e : ""),
                        e || t.e) {
                            for (o in e && !t.e && (l = 1),
                            n)
                                if (!Object.prototype[o])
                                    for (c = 0; c < i.length; c++)
                                        for (l && ((s = n[o].join(",")) == t.account && (t.e += ("&" != o.charAt(0) ? "&" : "") + o,
                                        n[o] = [],
                                        a = 1)),
                                        r = 0; r < n[o].length; r++)
                                            (s = n[o][r]) == i[c] && (l && (t.e += "&u=" + t.escape(s) + ("&" != o.charAt(0) ? "&" : "") + o + "&u=0"),
                                            n[o].splice(r, 1),
                                            a = 1);
                            if (e || (a = 1),
                            a) {
                                for (o in l = "",
                                r = 2,
                                !e && t.e && (l = t.escape(i.join(",")) + "=" + t.escape(t.e),
                                r = 1),
                                n)
                                    !Object.prototype[o] && 0 < r && 0 < n[o].length && (l += (l ? "&" : "") + t.escape(n[o].join(",")) + "=" + t.escape(o),
                                    r--);
                                t.Db(l)
                            }
                        }
                    }
                    return e
                }
                ,
                t.vb = function() {
                    return t.useLinkTrackSessionStorage ? t.Fa() ? n.sessionStorage.getItem(t.P) : void 0 : t.cookieRead(t.P)
                }
                ,
                t.Fa = function() {
                    return !!n.sessionStorage
                }
                ,
                t.Db = function(e) {
                    t.useLinkTrackSessionStorage ? t.Fa() && n.sessionStorage.setItem(t.P, e) : t.cookieWrite(t.P, e)
                }
                ,
                t.Wb = function() {
                    if (!t.gc) {
                        var e, n, a, i, r = new Date, o = c.location, s = n = e = "", l = "1.2", u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N", f = "", p = "";
                        if (r.setUTCDate && (l = "1.3",
                        0..toPrecision && (l = "1.5",
                        (r = []).forEach))) {
                            l = "1.6",
                            n = 0,
                            e = {};
                            try {
                                (n = new Iterator(e)).next && (l = "1.7",
                                r.reduce && ((l = "1.8").trim && (l = "1.8.1",
                                Date.parse && (l = "1.8.2",
                                Object.create && (l = "1.8.5")))))
                            } catch (e) {}
                        }
                        e = screen.width + "x" + screen.height,
                        s = navigator.javaEnabled() ? "Y" : "N",
                        n = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth,
                        a = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth,
                        i = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;
                        try {
                            t.b.addBehavior("#default#homePage"),
                            f = t.b.oc(o) ? "Y" : "N"
                        } catch (e) {}
                        try {
                            t.b.addBehavior("#default#clientCaps"),
                            p = t.b.connectionType
                        } catch (e) {}
                        t.resolution = e,
                        t.colorDepth = n,
                        t.javascriptVersion = l,
                        t.javaEnabled = s,
                        t.cookiesEnabled = u,
                        t.browserWidth = a,
                        t.browserHeight = i,
                        t.connectionType = p,
                        t.homepage = f,
                        t.gc = 1
                    }
                }
                ,
                t.ib = function() {
                    if (t.collectHighEntropyUserAgentHints && !t.H && t.cb()) {
                        t.H = !0;
                        try {
                            navigator.userAgentData.getHighEntropyValues(t.ta).then(function(e) {
                                t.clientHints = {},
                                t.ta.forEach(function(n) {
                                    Object.prototype.hasOwnProperty.call(e, n) && (t.clientHints[n] = e[n])
                                })
                            }).catch(function(e) {
                                t.H = !1,
                                t.clientHints = {},
                                t.debugTracking && t.log(e.message)
                            })
                        } catch (e) {
                            t.H = !1,
                            t.clientHints = {},
                            t.debugTracking && t.log(e.message)
                        }
                    } else
                        t.clientHints = {}
                }
                ,
                t.cb = function() {
                    return void 0 !== navigator.userAgentData
                }
                ,
                t.Q = {},
                t.loadModule = function(e, a) {
                    var i = t.Q[e];
                    if (!i) {
                        i = n["AppMeasurement_Module_" + e] ? new n["AppMeasurement_Module_" + e](t) : {},
                        t.Q[e] = t[e] = i,
                        i.ob = function() {
                            return i.yb
                        }
                        ,
                        i.Eb = function(n) {
                            (i.yb = n) && (t[e + "_onLoad"] = n,
                            t.fa(e + "_onLoad", [t, i], 1) || n(t, i))
                        }
                        ;
                        try {
                            Object.defineProperty ? Object.defineProperty(i, "onLoad", {
                                get: i.ob,
                                set: i.Eb
                            }) : i._olc = 1
                        } catch (e) {
                            i._olc = 1
                        }
                    }
                    a && (t[e + "_onLoad"] = a,
                    t.fa(e + "_onLoad", [t, i], 1) || a(t, i))
                }
                ,
                t.u = function(e) {
                    var n, a;
                    for (n in t.Q)
                        if (!Object.prototype[n] && (a = t.Q[n]) && (a._olc && a.onLoad && (a._olc = 0,
                        a.onLoad(t, a)),
                        a[e] && a[e]()))
                            return 1;
                    return 0
                }
                ,
                t.Yb = function() {
                    return !(!t.ActivityMap || !t.ActivityMap._c)
                }
                ,
                t.Zb = function() {
                    var e = Math.floor(1e13 * Math.random())
                      , n = t.visitorSampling
                      , a = t.visitorSamplingGroup
                      , i = (a = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (a ? "_" + a : ""),
                    t.cookieRead(a));
                    if (n) {
                        if (n *= 100,
                        i && (i = parseInt(i)),
                        !i) {
                            if (!t.cookieWrite(a, e))
                                return 0;
                            i = e
                        }
                        if (i % 1e4 > n)
                            return 0
                    }
                    return 1
                }
                ,
                t.S = function(e, n) {
                    var a, i, r, o, c, s, l;
                    for (l = {},
                    a = 0; 2 > a; a++)
                        for (i = 0 < a ? t.Ha : t.g,
                        r = 0; r < i.length; r++)
                            if ((c = e[o = i[r]]) || e["!" + o]) {
                                if (c && !n && ("contextData" == o || "retrieveLightData" == o) && t[o])
                                    for (s in t[o])
                                        c[s] || (c[s] = t[o][s]);
                                t[o] || (l["!" + o] = 1),
                                l[o] = t[o],
                                t[o] = c
                            }
                    return l
                }
                ,
                t.lc = function(e) {
                    var n, a, i, r;
                    for (n = 0; 2 > n; n++)
                        for (a = 0 < n ? t.Ha : t.g,
                        i = 0; i < a.length; i++)
                            e[r = a[i]] = t[r],
                            e[r] || "prop" !== r.substring(0, 4) && "eVar" !== r.substring(0, 4) && "hier" !== r.substring(0, 4) && "list" !== r.substring(0, 4) && "channel" !== r && "events" !== r && "eventList" !== r && "products" !== r && "productList" !== r && "purchaseID" !== r && "transactionID" !== r && "state" !== r && "zip" !== r && "campaign" !== r && "events2" !== r && "latitude" !== r && "longitude" !== r && "ms_a" !== r && "contextData" !== r && "supplementalDataID" !== r && "tnt" !== r && "timestamp" !== r && "abort" !== r && "useBeacon" !== r && "linkObject" !== r && "clickObject" !== r && "linkType" !== r && "linkName" !== r && "linkURL" !== r && "bodyClickTarget" !== r && "bodyClickFunction" !== r || (e["!" + r] = 1)
                }
                ,
                t.Qb = function(e) {
                    var t, n, a, i, r, o, c = 0, s = "", l = "";
                    if (e && 255 < e.length && (0 < (n = (t = "" + e).indexOf("?")) && (o = t.substring(n + 1),
                    a = 0,
                    "http://" == (i = (t = t.substring(0, n)).toLowerCase()).substring(0, 7) ? a += 7 : "https://" == i.substring(0, 8) && (a += 8),
                    0 < (n = i.indexOf("/", a)) && (i = i.substring(a, n),
                    r = t.substring(n),
                    t = t.substring(0, n),
                    0 <= i.indexOf("google") ? c = ",q,ie,start,search_key,word,kw,cd," : 0 <= i.indexOf("yahoo.co") ? c = ",p,ei," : 0 <= i.indexOf("baidu.") && (c = ",wd,word,"),
                    c && o)))) {
                        if ((e = o.split("&")) && 1 < e.length) {
                            for (a = 0; a < e.length; a++)
                                0 < (n = (i = e[a]).indexOf("=")) && 0 <= c.indexOf("," + i.substring(0, n) + ",") ? s += (s ? "&" : "") + i : l += (l ? "&" : "") + i;
                            s && l ? o = s + "&" + l : l = ""
                        }
                        e = t + (0 < (n = 253 - (o.length - l.length) - t.length) ? r.substring(0, n) : "") + "?" + o
                    }
                    return e
                }
                ,
                t.gb = function(e) {
                    var n = t.d.visibilityState
                      , a = ["webkitvisibilitychange", "visibilitychange"];
                    if (n || (n = t.d.webkitVisibilityState),
                    n && "prerender" == n) {
                        if (e)
                            for (n = 0; n < a.length; n++)
                                t.d.addEventListener(a[n], function() {
                                    var n = t.d.visibilityState;
                                    n || (n = t.d.webkitVisibilityState),
                                    "visible" == n && e()
                                });
                        return !1
                    }
                    return !0
                }
                ,
                t.ca = !1,
                t.G = !1,
                t.Gb = function() {
                    t.G = !0,
                    t.p()
                }
                ,
                t.I = !1,
                t.Hb = function(e) {
                    t.marketingCloudVisitorID = e.MCMID,
                    t.visitorOptedOut = e.MCOPTOUT,
                    t.analyticsVisitorID = e.MCAID,
                    t.audienceManagerLocationHint = e.MCAAMLH,
                    t.audienceManagerBlob = e.MCAAMB,
                    t.I = !1,
                    t.p()
                }
                ,
                t.fb = function(e) {
                    return t.maxDelay || (t.maxDelay = 250),
                    !t.u("_d") || (e && setTimeout(function() {
                        e()
                    }, t.maxDelay),
                    !1)
                }
                ,
                t.aa = !1,
                t.F = !1,
                t.Ba = function() {
                    t.F = !0,
                    t.p()
                }
                ,
                t.isReadyToTrack = function() {
                    var e = !0;
                    return !(!t.sb() || !t.qb()) && (t.ub() || (e = !1),
                    t.xb() || (e = !1),
                    t.hb() || (e = !1),
                    e)
                }
                ,
                t.sb = function() {
                    return t.ca || t.G || (t.gb(t.Gb) ? t.G = !0 : t.ca = !0),
                    !(t.ca && !t.G)
                }
                ,
                t.qb = function() {
                    var e = t.xa();
                    if (e) {
                        if (!t.ua && !t.ba)
                            return e.fetchPermissions(t.zb, !0),
                            t.ba = !0,
                            !1;
                        if (!t.ua)
                            return !1;
                        if (!e.isApproved(e.Categories.ANALYTICS))
                            return !1
                    }
                    return !0
                }
                ,
                t.V = function(e) {
                    var n = t.xa();
                    return !(n && !n.isApproved(n.Categories[e]))
                }
                ,
                t.xa = function() {
                    return n.adobe && n.adobe.optIn ? n.adobe.optIn : null
                }
                ,
                t.Y = !0,
                t.ub = function() {
                    var e = t.T();
                    return !e || !e.getVisitorValues || (t.Y && (t.Y = !1,
                    t.I || (t.I = !0,
                    e.getVisitorValues(t.Hb))),
                    !t.I)
                }
                ,
                t.T = function() {
                    var e = t.visitor;
                    return e && !e.isAllowed() && (e = null),
                    e
                }
                ,
                t.xb = function() {
                    return t.aa || t.F || (t.fb(t.Ba) ? t.F = !0 : t.aa = !0),
                    !(t.aa && !t.F)
                }
                ,
                t.hb = function() {
                    return t.H || t.clientHints || t.ib(),
                    t.clientHints
                }
                ,
                t.ba = !1,
                t.zb = function() {
                    t.ba = !1,
                    t.ua = !0
                }
                ,
                t.j = a,
                t.q = 0,
                t.callbackWhenReadyToTrack = function(e, n, i) {
                    var r;
                    (r = {}).Lb = e,
                    r.Kb = n,
                    r.Ib = i,
                    t.j == a && (t.j = []),
                    t.j.push(r),
                    0 == t.q && (t.q = setInterval(t.p, 100))
                }
                ,
                t.p = function() {
                    var e;
                    if (t.isReadyToTrack() && (t.Fb(),
                    t.j != a))
                        for (; 0 < t.j.length; )
                            (e = t.j.shift()).Kb.apply(e.Lb, e.Ib)
                }
                ,
                t.Fb = function() {
                    t.q && (clearInterval(t.q),
                    t.q = 0)
                }
                ,
                t.va = function(e) {
                    var n, i = {};
                    if (t.lc(i),
                    e != a)
                        for (n in e)
                            i[n] = e[n];
                    t.callbackWhenReadyToTrack(t, t.Ga, [i]),
                    t.Ea()
                }
                ,
                t.Sb = function() {
                    var e, n = t.cookieRead("s_fid"), a = "", i = "";
                    e = 8;
                    var r = 4;
                    if (!n || 0 > n.indexOf("-")) {
                        for (n = 0; 16 > n; n++)
                            e = Math.floor(Math.random() * e),
                            a += "0123456789ABCDEF".substring(e, e + 1),
                            e = Math.floor(Math.random() * r),
                            i += "0123456789ABCDEF".substring(e, e + 1),
                            e = r = 16;
                        n = a + "-" + i
                    }
                    return t.cookieWrite("s_fid", n, 1) || (n = 0),
                    n
                }
                ,
                t.Ga = function(e) {
                    var a, i = new Date, r = "s" + Math.floor(i.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()), o = i.getYear(), s = (o = "t=" + t.escape(i.getDate() + "/" + i.getMonth() + "/" + (1900 > o ? o + 1900 : o) + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + " " + i.getDay() + " " + i.getTimezoneOffset()),
                    t.T());
                    e && (a = t.S(e, 1)),
                    t.Zb() && !t.visitorOptedOut && (t.ya() || (t.fid = t.Sb()),
                    t.bc(),
                    t.usePlugins && t.doPlugins && t.doPlugins(t),
                    t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(i.getTime() / 1e3)),
                    e = n.location,
                    t.pageURL || (t.pageURL = e.href ? e.href : e),
                    t.referrer || t.ab || (e = t.Util.getQueryParam("adobe_mc_ref", null, null, !0),
                    t.referrer = e || void 0 === e ? void 0 === e ? "" : e : c.document.referrer),
                    t.ab = 1,
                    !t.referrer && t.Z && (t.referrer = t.Z),
                    t.Z = 0,
                    t.referrer = t.Qb(t.referrer),
                    t.u("_g")),
                    t.Vb() && !t.abort && (s && t.V("TARGET") && !t.supplementalDataID && s.getSupplementalDataID && (t.supplementalDataID = s.getSupplementalDataID("AppMeasurement:" + t._in, !t.expectSupplementalData)),
                    t.V("AAM") || (t.contextData["cm.ssf"] = 1),
                    t.Wb(),
                    t.Ab(),
                    o += t.Ub(),
                    t.wb(r, o),
                    t.u("_t"),
                    t.referrer = "",
                    t.contextData && t.contextData.excCodes && (t.contextData.excCodes = 0)))),
                    t.referrer && (t.Z = t.referrer),
                    t.Ea(),
                    a && t.S(a, 1)
                }
                ,
                t.t = t.track = function(e, n) {
                    n && t.S(n),
                    t.Y = !0,
                    t.isReadyToTrack() ? null != t.j && 0 < t.j.length ? (t.va(e),
                    t.p()) : t.Ga(e) : t.va(e)
                }
                ,
                t.Ab = function() {
                    t.writeSecureCookies && !t.ssl && t.bb()
                }
                ,
                t.bb = function() {
                    t.contextData.excCodes = t.contextData.excCodes || [],
                    t.contextData.excCodes.push(1)
                }
                ,
                t.Ea = function() {
                    t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = n.s_objectID = t.pe = t.pev1 = t.pev2 = t.pev3 = t.e = t.lightProfileID = t.useBeacon = t.referrer = 0
                }
                ,
                t.Da = [],
                t.registerPreTrackCallback = function(e) {
                    for (var n = [], a = 1; a < arguments.length; a++)
                        n.push(arguments[a]);
                    "function" == typeof e ? t.Da.push([e, n]) : t.debugTracking && t.log("Warning, Non function type passed to registerPreTrackCallback")
                }
                ,
                t.lb = function(e) {
                    t.wa(t.Da, e)
                }
                ,
                t.Ca = [],
                t.registerPostTrackCallback = function(e) {
                    for (var n = [], a = 1; a < arguments.length; a++)
                        n.push(arguments[a]);
                    "function" == typeof e ? t.Ca.push([e, n]) : t.debugTracking && t.log("Warning, Non function type passed to registerPostTrackCallback")
                }
                ,
                t.kb = function(e) {
                    t.wa(t.Ca, e)
                }
                ,
                t.wa = function(e, n) {
                    if ("object" == typeof e)
                        for (var a = 0; a < e.length; a++) {
                            var i = e[a][0]
                              , r = e[a][1].slice();
                            if (r.unshift(n),
                            "function" == typeof i)
                                try {
                                    i.apply(null, r)
                                } catch (e) {
                                    t.debugTracking && t.log(e.message)
                                }
                        }
                }
                ,
                t.tl = t.trackLink = function(e, n, a, i, r) {
                    return t.linkObject = e,
                    t.linkType = n,
                    t.linkName = a,
                    r && (t.bodyClickTarget = e,
                    t.bodyClickFunction = r),
                    t.track(i)
                }
                ,
                t.trackLight = function(e, n, a, i) {
                    return t.lightProfileID = e,
                    t.lightStoreForSeconds = n,
                    t.lightIncrementBy = a,
                    t.track(i)
                }
                ,
                t.clearVars = function() {
                    var e, n;
                    for (e = 0; e < t.g.length; e++)
                        ("prop" == (n = t.g[e]).substring(0, 4) || "eVar" == n.substring(0, 4) || "hier" == n.substring(0, 4) || "list" == n.substring(0, 4) || "channel" == n || "events" == n || "eventList" == n || "products" == n || "productList" == n || "purchaseID" == n || "transactionID" == n || "state" == n || "zip" == n || "campaign" == n) && (t[n] = void 0)
                }
                ,
                t.tagContainerMarker = "",
                t.wb = function(e, n) {
                    var a = t.mb() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (t.Aa() ? "callback=s_c_il[" + t._in + "].doPostbacks&et=1&" : "") + n + "&AQE=1";
                    t.lb(a),
                    t.jb(a),
                    t.U()
                }
                ,
                t.mb = function() {
                    var e = t.nb();
                    return "http" + (t.ssl ? "s" : "") + "://" + e + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (t.Aa() ? "10" : "1") + "/JS-" + t.version + (t.fc ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "")
                }
                ,
                t.Aa = function() {
                    return t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks
                }
                ,
                t.nb = function() {
                    var e = t.dc
                      , n = t.trackingServer;
                    return n ? t.trackingServerSecure && t.ssl && (n = t.trackingServerSecure) : ("d1" == (e = e ? ("" + e).toLowerCase() : "d1") ? e = "112" : "d2" == e && (e = "122"),
                    n = t.pb() + "." + e + ".2o7.net"),
                    n
                }
                ,
                t.pb = function() {
                    var e = t.visitorNamespace;
                    return e || (e = (e = t.account.split(",")[0]).replace(/[^0-9a-z]/gi, "")),
                    e
                }
                ,
                t.$a = /{(%?)(.*?)(%?)}/,
                t.kc = RegExp(t.$a.source, "g"),
                t.Pb = function(e) {
                    if ("object" == typeof e.dests)
                        for (var n = 0; n < e.dests.length; ++n) {
                            var a = e.dests[n];
                            if ("string" == typeof a.c && "aa." == a.id.substr(0, 3))
                                for (var i = a.c.match(t.kc), r = 0; r < i.length; ++r) {
                                    var o = i[r]
                                      , c = o.match(t.$a)
                                      , s = "";
                                    "%" == c[1] && "timezone_offset" == c[2] ? s = (new Date).getTimezoneOffset() : "%" == c[1] && "timestampz" == c[2] && (s = t.Tb()),
                                    a.c = a.c.replace(o, t.escape(s))
                                }
                        }
                }
                ,
                t.Tb = function() {
                    var e = new Date
                      , n = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
                    return t.k(4, e.getFullYear()) + "-" + t.k(2, e.getMonth() + 1) + "-" + t.k(2, e.getDate()) + "T" + t.k(2, e.getHours()) + ":" + t.k(2, e.getMinutes()) + ":" + t.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + t.k(2, n.getUTCHours()) + ":" + t.k(2, n.getUTCMinutes())
                }
                ,
                t.k = function(e, t) {
                    return (Array(e + 1).join(0) + t).slice(-e)
                }
                ,
                t.qa = {},
                t.doPostbacks = function(e) {
                    if ("object" == typeof e)
                        if (t.Pb(e),
                        "object" == typeof t.AudienceManagement && "function" == typeof t.AudienceManagement.isReady && t.AudienceManagement.isReady() && "function" == typeof t.AudienceManagement.passData)
                            t.AudienceManagement.passData(e);
                        else if ("object" == typeof e && "object" == typeof e.dests)
                            for (var n = 0; n < e.dests.length; ++n) {
                                var a = e.dests[n];
                                "object" == typeof a && "string" == typeof a.c && "string" == typeof a.id && "aa." == a.id.substr(0, 3) && (t.qa[a.id] = new Image,
                                t.qa[a.id].alt = "",
                                t.qa[a.id].src = a.c)
                            }
                }
                ,
                t.jb = function(e) {
                    t.i || t.Xb(),
                    t.i.push(e),
                    t.ja = t.A(),
                    t.Za()
                }
                ,
                t.Xb = function() {
                    t.i = t.$b(),
                    t.i || (t.i = [])
                }
                ,
                t.$b = function() {
                    var e, a;
                    if (t.pa()) {
                        try {
                            (a = n.localStorage.getItem(t.na())) && (e = n.JSON.parse(a))
                        } catch (e) {}
                        return e
                    }
                }
                ,
                t.pa = function() {
                    var e = !0;
                    return t.trackOffline && t.offlineFilename && n.localStorage && n.JSON || (e = !1),
                    e
                }
                ,
                t.Pa = function() {
                    var e = 0;
                    return t.i && (e = t.i.length),
                    t.o && e++,
                    e
                }
                ,
                t.U = function() {
                    if (!t.o || (t.v && t.v.complete && t.v.C && t.v.R(),
                    !t.o))
                        if (t.Qa = a,
                        t.oa)
                            t.ja > t.N && t.Xa(t.i),
                            t.ra(500);
                        else {
                            var e = t.Jb();
                            0 < e ? t.ra(e) : (e = t.Na()) && (t.o = 1,
                            t.ac(e),
                            t.ec(e))
                        }
                }
                ,
                t.ra = function(e) {
                    t.Qa || (e || (e = 0),
                    t.Qa = setTimeout(t.U, e))
                }
                ,
                t.Jb = function() {
                    var e;
                    return !t.trackOffline || 0 >= t.offlineThrottleDelay ? 0 : (e = t.A() - t.Va,
                    t.offlineThrottleDelay < e ? 0 : t.offlineThrottleDelay - e)
                }
                ,
                t.Na = function() {
                    if (0 < t.i.length)
                        return t.i.shift()
                }
                ,
                t.ac = function(e) {
                    if (t.debugTracking) {
                        var n, a = "AppMeasurement Debug: " + e;
                        for (e = e.split("&"),
                        n = 0; n < e.length; n++)
                            a += "\n\t" + t.unescape(e[n]);
                        t.log(a)
                    }
                }
                ,
                t.ya = function() {
                    return t.marketingCloudVisitorID || t.analyticsVisitorID
                }
                ,
                t.X = !1;
                try {
                    o = JSON.parse('{"x":"y"}')
                } catch (e) {
                    o = null
                }
                for (o && "y" == o.x ? (t.X = !0,
                t.W = function(e) {
                    return JSON.parse(e)
                }
                ) : n.$ && n.$.parseJSON ? (t.W = function(e) {
                    return n.$.parseJSON(e)
                }
                ,
                t.X = !0) : t.W = function() {
                    return null
                }
                ,
                t.ec = function(e) {
                    var i, r, o;
                    if (t.rb(e) && (r = 1,
                    i = {
                        send: function(e) {
                            t.useBeacon = !1,
                            navigator.sendBeacon(e) ? i.R() : i.ha()
                        }
                    }),
                    !i && t.ya() && 2047 < e.length && (t.eb() && (r = 2,
                    i = new XMLHttpRequest),
                    i && (t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks) && (t.X ? i.Ia = !0 : i = 0)),
                    !i && t.jc && (e = e.substring(0, 2047)),
                    !i && t.d.createElement && (0 != t.usePostbacks || t.AudienceManagement && t.AudienceManagement.isReady()) && (i = t.d.createElement("SCRIPT")) && "async"in i && ((o = (o = t.d.getElementsByTagName("HEAD")) && o[0] ? o[0] : t.d.body) ? (i.type = "text/javascript",
                    i.setAttribute("async", "async"),
                    r = 3) : i = 0),
                    i || (r = 4,
                    (i = new Image).alt = "",
                    i.abort || void 0 === n.InstallTrigger || (i.abort = function() {
                        i.src = a
                    }
                    )),
                    i.Wa = Date.now(),
                    i.Ka = function() {
                        try {
                            i.C && (clearTimeout(i.C),
                            i.C = 0)
                        } catch (e) {}
                    }
                    ,
                    i.onload = i.R = function() {
                        if (i.Wa && (t.ka = Date.now() - i.Wa),
                        t.kb(e),
                        i.Ka(),
                        t.Nb(),
                        t.da(),
                        t.o = 0,
                        t.U(),
                        i.Ia) {
                            i.Ia = !1;
                            try {
                                t.doPostbacks(t.W(i.responseText))
                            } catch (e) {}
                        }
                    }
                    ,
                    i.onabort = i.onerror = i.ha = function() {
                        i.Ka(),
                        (t.trackOffline || t.oa) && t.o && t.i.unshift(t.Mb),
                        t.o = 0,
                        t.ja > t.N && t.Xa(t.i),
                        t.da(),
                        t.ra(500)
                    }
                    ,
                    i.onreadystatechange = function() {
                        4 == i.readyState && (200 == i.status ? i.R() : i.ha())
                    }
                    ,
                    t.Va = t.A(),
                    1 === r)
                        i.send(e);
                    else if (2 === r)
                        o = e.indexOf("?"),
                        r = e.substring(0, o),
                        o = (o = e.substring(o + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""),
                        i.open("POST", r, !0),
                        i.withCredentials = !0,
                        i.send(o);
                    else if (i.src = e,
                    3 === r) {
                        if (t.Ta)
                            try {
                                o.removeChild(t.Ta)
                            } catch (e) {}
                        o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i),
                        t.Ta = t.v
                    }
                    i.C = setTimeout(function() {
                        i.C && (i.complete ? i.R() : (t.trackOffline && i.abort && i.abort(),
                        i.ha()))
                    }, 5e3),
                    t.Mb = e,
                    t.v = n["s_i_" + t.replace(t.account, ",", "_")] = i,
                    (t.useForcedLinkTracking && t.J || t.bodyClickFunction) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250),
                    t.ea = setTimeout(t.da, t.forcedLinkTrackingTimeout))
                }
                ,
                t.rb = function(e) {
                    var n = !1;
                    return navigator.sendBeacon && (t.tb(e) ? n = !0 : t.useBeacon && (n = !0)),
                    t.Cb(e) && (n = !1),
                    n
                }
                ,
                t.tb = function(e) {
                    return !!(e && 0 < e.indexOf("pe=lnk_e"))
                }
                ,
                t.Cb = function(e) {
                    return 64e3 <= e.length
                }
                ,
                t.eb = function() {
                    return "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
                }
                ,
                t.Nb = function() {
                    if (t.pa() && !(t.Ua > t.N))
                        try {
                            n.localStorage.removeItem(t.na()),
                            t.Ua = t.A()
                        } catch (e) {}
                }
                ,
                t.Xa = function(e) {
                    if (t.pa()) {
                        t.Za();
                        try {
                            n.localStorage.setItem(t.na(), n.JSON.stringify(e)),
                            t.N = t.A()
                        } catch (e) {}
                    }
                }
                ,
                t.Za = function() {
                    if (t.trackOffline)
                        for ((!t.offlineLimit || 0 >= t.offlineLimit) && (t.offlineLimit = 10); t.i.length > t.offlineLimit; )
                            t.Na()
                }
                ,
                t.forceOffline = function() {
                    t.oa = !0
                }
                ,
                t.forceOnline = function() {
                    t.oa = !1
                }
                ,
                t.na = function() {
                    return t.offlineFilename + "-" + t.visitorNamespace + t.account
                }
                ,
                t.A = function() {
                    return (new Date).getTime()
                }
                ,
                t.Ra = function(e) {
                    return 0 != (e = e.toLowerCase()).indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:")
                }
                ,
                t.setTagContainer = function(e) {
                    var n, a, i;
                    for (t.fc = e,
                    n = 0; n < t._il.length; n++)
                        if ((a = t._il[n]) && "s_l" == a._c && a.tagContainerName == e) {
                            if (t.S(a),
                            a.lmq)
                                for (n = 0; n < a.lmq.length; n++)
                                    i = a.lmq[n],
                                    t.loadModule(i.n);
                            if (a.ml)
                                for (i in a.ml)
                                    if (t[i])
                                        for (n in e = t[i],
                                        i = a.ml[i])
                                            !Object.prototype[n] && ("function" != typeof i[n] || 0 > ("" + i[n]).indexOf("s_c_il")) && (e[n] = i[n]);
                            if (a.mmq)
                                for (n = 0; n < a.mmq.length; n++)
                                    i = a.mmq[n],
                                    t[i.m] && ((e = t[i.m])[i.f] && "function" == typeof e[i.f] && (i.a ? e[i.f].apply(e, i.a) : e[i.f].apply(e)));
                            if (a.tq)
                                for (n = 0; n < a.tq.length; n++)
                                    t.track(a.tq[n]);
                            a.s = t;
                            break
                        }
                }
                ,
                t.Util = {
                    urlEncode: t.escape,
                    urlDecode: t.unescape,
                    cookieRead: t.cookieRead,
                    cookieWrite: t.cookieWrite,
                    getQueryParam: function(e, a, i, r) {
                        var o, c = "";
                        return a || (a = t.pageURL ? t.pageURL : n.location),
                        i = i || "&",
                        e && a ? 0 > (o = (a = "" + a).indexOf("?")) ? c : (a = i + a.substring(o + 1) + i,
                        r && (0 <= a.indexOf(i + e + i) || 0 <= a.indexOf(i + e + "=" + i)) ? void 0 : (0 <= (o = a.indexOf("#")) && (a = a.substr(0, o) + i),
                        0 > (o = a.indexOf(i + e + "=")) ? c : (0 <= (o = (a = a.substring(o + i.length + e.length + 1)).indexOf(i)) && (a = a.substring(0, o)),
                        0 < a.length && (c = t.unescape(a)),
                        c))) : c
                    },
                    getIeVersion: function() {
                        return document.documentMode ? document.documentMode : t.za() ? 7 : null
                    }
                },
                t.D = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell clientHints currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "),
                t.g = t.D.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")),
                t.la = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "),
                t.O = t.la.slice(0),
                t.Ha = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage collectHighEntropyUserAgentHints trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "),
                i = 0; 250 >= i; i++)
                    76 > i && (t.g.push("prop" + i),
                    t.O.push("prop" + i)),
                    t.g.push("eVar" + i),
                    t.O.push("eVar" + i),
                    6 > i && t.g.push("hier" + i),
                    4 > i && t.g.push("list" + i);
                i = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "),
                t.g = t.g.concat(i),
                t.D = t.D.concat(i),
                t.ssl = 0 <= n.location.protocol.toLowerCase().indexOf("https"),
                t.charSet = "UTF-8",
                t.contextData = {},
                t.ta = ["architecture", "bitness", "model", "platformVersion", "wow64"],
                t.writeSecureCookies = !1,
                t.collectHighEntropyUserAgentHints = !1,
                t.offlineThrottleDelay = 0,
                t.offlineFilename = "AppMeasurement.offline",
                t.P = "s_sq",
                t.Va = 0,
                t.ja = 0,
                t.N = 0,
                t.Ua = 0,
                t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx",
                t.w = n,
                t.d = n.document,
                t.da = function() {
                    t.ea && (n.clearTimeout(t.ea),
                    t.ea = a),
                    t.bodyClickTarget && t.J && t.bodyClickTarget.dispatchEvent(t.J),
                    t.bodyClickFunction && ("function" == typeof t.bodyClickFunction ? t.bodyClickFunction() : t.bodyClickTarget && t.bodyClickTarget.href && (t.d.location = t.bodyClickTarget.href)),
                    t.bodyClickTarget = t.J = t.bodyClickFunction = 0
                }
                ,
                t.Ya = function() {
                    t.b = t.d.body,
                    t.b ? (t.r = function(e) {
                        var a, i, r, o, c;
                        if (!(t.d && t.d.getElementById("cppXYctnr") || e && e["s_fe_" + t._in])) {
                            if (t.Ja) {
                                if (!t.useForcedLinkTracking)
                                    return t.b.removeEventListener("click", t.r, !0),
                                    void (t.Ja = t.useForcedLinkTracking = 0);
                                t.b.removeEventListener("click", t.r, !1)
                            } else
                                t.useForcedLinkTracking = 0;
                            t.clickObject = e.srcElement ? e.srcElement : e.target;
                            try {
                                if (!t.clickObject || t.M && t.M == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode))
                                    t.clickObject = 0;
                                else {
                                    var s = t.M = t.clickObject;
                                    if (t.ia && (clearTimeout(t.ia),
                                    t.ia = 0),
                                    t.ia = setTimeout(function() {
                                        t.M == s && (t.M = 0)
                                    }, 1e4),
                                    r = t.Pa(),
                                    t.track(),
                                    r < t.Pa() && t.useForcedLinkTracking && e.target) {
                                        for (o = e.target; o && o != t.b && "A" != o.tagName.toUpperCase() && "AREA" != o.tagName.toUpperCase(); )
                                            o = o.parentNode;
                                        if (o && (c = o.href,
                                        t.Ra(c) || (c = 0),
                                        i = o.target,
                                        e.target.dispatchEvent && c && (!i || "_self" == i || "_top" == i || "_parent" == i || n.name && i == n.name))) {
                                            try {
                                                a = t.d.createEvent("MouseEvents")
                                            } catch (e) {
                                                a = new n.MouseEvent
                                            }
                                            if (a) {
                                                try {
                                                    a.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
                                                } catch (e) {
                                                    a = 0
                                                }
                                                a && (a["s_fe_" + t._in] = a.s_fe = 1,
                                                e.stopPropagation(),
                                                e.stopImmediatePropagation && e.stopImmediatePropagation(),
                                                e.preventDefault(),
                                                t.bodyClickTarget = e.target,
                                                t.J = a)
                                            }
                                        }
                                    }
                                }
                            } catch (e) {
                                t.clickObject = 0
                            }
                        }
                    }
                    ,
                    t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.r) : t.b && t.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && t.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && n.MouseEvent) && (t.Ja = 1,
                    t.useForcedLinkTracking = 1,
                    t.b.addEventListener("click", t.r, !0)),
                    t.b.addEventListener("click", t.r, !1))) : setTimeout(t.Ya, 30)
                }
                ,
                t.jc = t.za(),
                t.Ob(),
                t.qc || (e ? t.setAccount(e) : t.log("Error, missing Report Suite ID in AppMeasurement initialization"),
                t.Ya(),
                t.loadModule("ActivityMap"))
            }
            ,
            AppMeasurement.getInstance = e,
            window.s_objectID || (window.s_objectID = 0),
            t(),
            t(),
            module.exports = {
                s_gi: e,
                s_pgicq: t
            }
        }()
    }
    , {}],
    52: [function(require, module, exports) {
        "use strict";
        var s_gi = require("./AppMeasurement").s_gi
          , AppMeasurement = require("./AppMeasurement");
        function initialize(e) {
            if ("string" == typeof e)
                return s_gi(e)
        }
        module.exports = initialize
    }
    , {
        "./AppMeasurement": 51
    }],
    53: [function(require, module, exports) {
        "use strict";
        function init(i, t) {
            i.forEach(function(i) {
                i.init ? i.init(t) : i(t)
            })
        }
        module.exports.init = init
    }
    , {}],
    54: [function(require, module, exports) {
        "use strict";
        var app, initSGI = require("./AppMeasurement/initialize"), initPlugins = require("./AppMeasurement/plugins");
        function init(i) {
            if (i && (!app || !0 === i.options.force))
                return setDefaults(i, app = window.s = initSGI(_modifyBucket(i.bucket))),
                initPlugins.init(i.options.corePlugins, app),
                app
        }
        function getInstance() {
            return app
        }
        function setDefaults(i, t) {
            Object.keys(i).forEach(function(e) {
                "options" !== e && (t[e] = i[e])
            }),
            !0 === t.isSafariTopSitesPreview && (t.t = function() {
                return ""
            }
            )
        }
        function _modifyBucket(i) {
            var t = document.location.search;
            return i && "string" == typeof i || (i = ""),
            t && i && -1 === i.indexOf("applestoreww") && (t.indexOf("?cid=AOS-") > -1 || t.indexOf("&cid=AOS-") > -1) && (i += ",applestoreww"),
            i
        }
        module.exports = {
            init: init,
            getInstance: getInstance
        }
    }
    , {
        "./AppMeasurement/initialize": 52,
        "./AppMeasurement/plugins": 53
    }],
    55: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("@marcom/ac-dom-nodes/isNodeType")
          , validate = require("./internal/validate")
          , ELEMENT = require("@marcom/ac-dom-nodes/NODE_TYPES").ELEMENT;
        module.exports = function(e, r, o, a) {
            if (validate.childNode(e, "ancestors"),
            validate.selector(r, "ancestors"),
            o && isNodeType(e, ELEMENT) && (!r || e.matches(r)))
                return e;
            if (e !== (a = a || document.body))
                for (; (e = e.parentNode) && isNodeType(e, ELEMENT); ) {
                    if (!r || e.matches(r))
                        return e;
                    if (e === a)
                        break
                }
            return null
        }
    }
    , {
        "./internal/validate": 56,
        "@marcom/ac-dom-nodes/NODE_TYPES": 21,
        "@marcom/ac-dom-nodes/isNodeType": 31
    }],
    56: [function(require, module, exports) {
        "use strict";
        var isNodeType = require("@marcom/ac-dom-nodes/isNodeType")
          , NODE_TYPES = require("@marcom/ac-dom-nodes/NODE_TYPES")
          , COMMENT_NODE = NODE_TYPES.COMMENT
          , DOCUMENT_FRAGMENT_NODE = NODE_TYPES.DOCUMENT_FRAGMENT
          , DOCUMENT_NODE = NODE_TYPES.DOCUMENT
          , ELEMENT_NODE = NODE_TYPES.ELEMENT
          , TEXT_NODE = NODE_TYPES.TEXT
          , VALID_PARENT_NODE = [ELEMENT_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE]
          , ERR_INVALID_PARENT_NODE = " must be an Element, Document, or Document Fragment"
          , VALID_CHILD_NODE = [ELEMENT_NODE, TEXT_NODE, COMMENT_NODE]
          , ERR_INVALID_CHILD_NODE = " must be an Element, TextNode, or Comment"
          , ERR_INVALID_SELECTOR = " must be a string";
        module.exports = {
            parentNode: function(E, N) {
                if (!E || !isNodeType(E, VALID_PARENT_NODE))
                    throw new TypeError(N + ": node" + ERR_INVALID_PARENT_NODE)
            },
            childNode: function(E, N) {
                if (!E || !isNodeType(E, VALID_CHILD_NODE))
                    throw new TypeError(N + ": node" + ERR_INVALID_CHILD_NODE)
            },
            selector: function(E, N, e) {
                if (e = "boolean" == typeof e && e,
                (E || e) && "string" != typeof E)
                    throw new TypeError(N + ": selector" + ERR_INVALID_SELECTOR)
            }
        }
    }
    , {
        "@marcom/ac-dom-nodes/NODE_TYPES": 21,
        "@marcom/ac-dom-nodes/isNodeType": 31
    }],
    57: [function(require, module, exports) {
        "use strict";
        module.exports = function(n, o) {
            return n !== o && ("contains"in n ? n.contains(o) : !!(n.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY))
        }
    }
    , {}],
    58: [function(require, module, exports) {
        const {defaultOptions, ElementEngagementObserver} = require("./element-engagement-observer/ElementEngagementObserver");
        module.exports = {
            defaultOptions: defaultOptions,
            ElementEngagementObserver: ElementEngagementObserver
        }
    }
    , {
        "./element-engagement-observer/ElementEngagementObserver": 59
    }],
    59: [function(require, module, exports) {
        const defaultOptions = {
            titleDataAttribute: "analytics-element-engagement",
            dataAttribute: "analyticsElementEngagement",
            startDataAttribute: "analyticsElementEngagementStart",
            endDataAttribute: "analyticsElementEngagementEnd",
            target: document.body,
            startHandler: null,
            endHandler: null,
            evaluateHandler: null,
            track: null,
            engagementTimeThreshold: 1e3,
            once: !0,
            autoEnable: !1
        };
        class ElementEngagementObserver {
            constructor(t={}) {
                this.options = {
                    ...defaultOptions,
                    ...t
                },
                this.observerType = "elementEngagement",
                this.engagements = {},
                this.options.autoEnable && this.enable()
            }
            enable() {
                this.attachEventListeners()
            }
            disable() {
                this.detachEventListeners();
                for (const t in this.engagements)
                    clearTimeout(this.engagements[t].timeout)
            }
            attachEventListeners() {
                const {target: t} = this.options;
                let {[this.options.startDataAttribute]: e, [this.options.endDataAttribute]: n} = t.dataset;
                t.addEventListener(e, this.startHandler.bind(this)),
                t.addEventListener(n, this.endHandler.bind(this))
            }
            detachEventListeners() {
                const {target: t} = this.options;
                let {[this.options.startDataAttribute]: e, [this.options.endDataAttribute]: n} = t.dataset;
                t.removeEventListener(e, this.startHandler),
                t.removeEventListener(n, this.endHandler)
            }
            startHandler(t) {
                const {detail: e} = t
                  , {target: n} = e || t
                  , {dataset: {analyticsElementEngagement: a}} = n;
                a && (this.engagements[a] = this.engagements[a] || {},
                this.engagements[a].timeout && clearTimeout(this.engagements[a].timeout),
                this.options.once && this.engagements[a].hasFired || (this.engagements[a].timeout = setTimeout(()=>{
                    this.track({
                        engagementTitle: a,
                        target: n
                    }),
                    this.options.once && (this.engagements[a].hasFired = !0)
                }
                , this.options.engagementTimeThreshold)))
            }
            endHandler(t) {
                const {detail: e} = t
                  , {target: n} = e || t
                  , {dataset: {analyticsElementEngagement: a}} = n;
                a && (this.engagements[a] = this.engagements[a] || {},
                this.engagements[a].timeout && clearTimeout(this.engagements[a].timeout))
            }
            track(t) {
                this.options.track && "function" == typeof this.options.track && this.options.track(t)
            }
        }
        module.exports = {
            defaultOptions: defaultOptions,
            ElementEngagementObserver: ElementEngagementObserver
        }
    }
    , {}],
    60: [function(require, module, exports) {
        "use strict";
        module.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }
    , {}],
    61: [function(require, module, exports) {
        "use strict";
        var os = require("@marcom/useragent-detect").os
          , touchAvailable = require("./touchAvailable").original
          , globalsHelper = require("./helpers/globals")
          , once = require("@marcom/function-utils/once");
        function isDesktop() {
            var e = globalsHelper.getWindow();
            return !touchAvailable() && !e.orientation || os.windows
        }
        module.exports = once(isDesktop),
        module.exports.original = isDesktop
    }
    , {
        "./helpers/globals": 60,
        "./touchAvailable": 64,
        "@marcom/function-utils/once": 66,
        "@marcom/useragent-detect": 70
    }],
    62: [function(require, module, exports) {
        "use strict";
        var isDesktop = require("./isDesktop").original
          , isTablet = require("./isTablet").original
          , once = require("@marcom/function-utils/once");
        function isHandheld() {
            return !isDesktop() && !isTablet()
        }
        module.exports = once(isHandheld),
        module.exports.original = isHandheld
    }
    , {
        "./isDesktop": 61,
        "./isTablet": 63,
        "@marcom/function-utils/once": 66
    }],
    63: [function(require, module, exports) {
        "use strict";
        var isDesktop = require("./isDesktop").original
          , globalsHelper = require("./helpers/globals")
          , once = require("@marcom/function-utils/once")
          , MIN_TABLET_WIDTH = 600;
        function isTablet() {
            var e = globalsHelper.getWindow()
              , i = e.screen.width;
            return e.orientation && e.screen.height < i && (i = e.screen.height),
            !isDesktop() && i >= MIN_TABLET_WIDTH
        }
        module.exports = once(isTablet),
        module.exports.original = isTablet
    }
    , {
        "./helpers/globals": 60,
        "./isDesktop": 61,
        "@marcom/function-utils/once": 66
    }],
    64: [function(require, module, exports) {
        "use strict";
        var globalsHelper = require("./helpers/globals")
          , once = require("@marcom/function-utils/once");
        function touchAvailable() {
            var e = globalsHelper.getWindow()
              , o = globalsHelper.getDocument()
              , l = globalsHelper.getNavigator();
            return !!("ontouchstart"in e || e.DocumentTouch && o instanceof e.DocumentTouch || l.maxTouchPoints > 0 || l.msMaxTouchPoints > 0)
        }
        module.exports = once(touchAvailable),
        module.exports.original = touchAvailable
    }
    , {
        "./helpers/globals": 60,
        "@marcom/function-utils/once": 66
    }],
    65: [function(require, module, exports) {
        "use strict";
        var PARAM_ERROR_TEXT = "Error: Expected parameter is missing or has the wrong type"
          , DEFAULT_OPTIONS = {
            trailing: !0,
            leading: !1
        };
        function debounce(e, i, n) {
            if ("number" != typeof i || "function" != typeof e)
                throw new TypeError(PARAM_ERROR_TEXT);
            if ("boolean" != typeof (n = Object.assign({}, DEFAULT_OPTIONS, n)).trailing || "boolean" != typeof n.leading)
                throw new TypeError(PARAM_ERROR_TEXT);
            n.trailing || n.leading || (n.trailing = !0);
            var t = null
              , r = 0;
            function a() {
                n.leading && n.trailing && r++;
                var a = arguments;
                null === t && n.leading && e.apply(this, a);
                var l = function() {
                    t = null,
                    n.leading ? r > 1 && n.trailing && (e.apply(this, a),
                    r = 0) : e.apply(this, a)
                }
                .bind(this);
                clearTimeout(t),
                t = setTimeout(l, i)
            }
            return a.cancel = function() {
                clearTimeout(t)
            }
            ,
            a
        }
        module.exports = debounce
    }
    , {}],
    66: [function(require, module, exports) {
        "use strict";
        module.exports = function(t) {
            var r;
            return function() {
                return void 0 === r && (r = t.apply(this, arguments)),
                r
            }
        }
    }
    , {}],
    67: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                edgeChromium: !1,
                samsung: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }
    , {}],
    68: [function(require, module, exports) {
        "use strict";
        module.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function(e) {
                    return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)),
                    e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }, {
                name: "samsung",
                userAgent: "SamsungBrowser"
            }],
            os: [{
                name: "windows",
                test: function(e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(e) {
                    return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(e) {
                    return e.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }
    , {}],
    69: [function(require, module, exports) {
        "use strict";
        var defaults = require("./defaults")
          , dictionary = require("./dictionary");
        function _matchVersionStrRegExp(e) {
            return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)","i")
        }
        function _parseVersion(e, r) {
            if ("function" == typeof e.parseVersion)
                return e.parseVersion(r);
            var n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            for (var t, s = n.length, o = 0; o < s; o++)
                if ((t = r.match(_matchVersionStrRegExp(n[o]))) && t.length > 1)
                    return t[1].replace(/_/g, ".");
            return !1
        }
        function _parseUserAgent(e, r, n) {
            for (var t, s, o = e.length, i = 0; i < o; i++)
                if ("function" == typeof e[i].test ? !0 === e[i].test(n) && (t = e[i].name) : n.ua.indexOf(e[i].userAgent) > -1 && (t = e[i].name),
                t) {
                    if (r[t] = !0,
                    "string" == typeof (s = _parseVersion(e[i], n.ua))) {
                        var a = s.split(".");
                        r.version.string = s,
                        a && a.length > 0 && (r.version.major = parseInt(a[0] || 0),
                        r.version.minor = parseInt(a[1] || 0),
                        r.version.patch = parseInt(a[2] || 0))
                    } else
                        "edge" === t && (r.version.string = "12.0.0",
                        r.version.major = "12",
                        r.version.minor = "0",
                        r.version.patch = "0");
                    return "function" == typeof e[i].parseDocumentMode && (r.version.documentMode = e[i].parseDocumentMode()),
                    r
                }
            return r
        }
        function parseUserAgent(e) {
            var r = {};
            return r.browser = _parseUserAgent(dictionary.browser, defaults.browser, e),
            r.os = _parseUserAgent(dictionary.os, defaults.os, e),
            r
        }
        module.exports = parseUserAgent
    }
    , {
        "./defaults": 67,
        "./dictionary": 68
    }],
    70: [function(require, module, exports) {
        "use strict";
        var navigatorObj = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        module.exports = require("./parseUserAgent")(navigatorObj)
    }
    , {
        "./parseUserAgent": 69
    }],
    71: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, a)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var errorHandler = require("../ErrorHandler")
          , appMeasurementSetup = require("@marcom/appmeasurement-setup")
          , biscuitTin = require("@apple/analytics-biscuit-tin")
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , refreshDataLayer = require("../helpers/dataLayer").refresh
          , eventsToString = require("../helpers/eventsToString")
          , formatter = require("../helpers/formatter")
          , passiveTrackerInit = require("@apple/analytics-passive-tracker").init
          , triggerNewPage = require("@apple/analytics-passive-tracker").triggerNewPage
          , generateSpecialExitLinks = require("../helpers/generateSpecialExitLinks")
          , submitMethods = require("./submit-methods/submitMethods")
          , templateVarHelper = require("../helpers/templateVar")
          , constants = require("../constants")
          , metaKey = constants.dataLayer.meta.key
          , confKey = constants.dataLayer.configuration.key
          , optionsKey = constants.dataLayer.configuration.optionsKey
          , dlKeys = constants.dataLayer.configuration.keys
          , doPlugins = require("./doPlugins/doPlugins")
          , corePlugins = require("./appMeasurementPlugins")
          , urlHelpers = require("@apple/analytics-utils").urlHelpers
          , observerRegistry = require("../observers/observerRegistry")
          , cookie = require("../helpers/cookie")
          , defaultOptions = {
            force: !0,
            destroyObservers: !1
        }
          , moduleName = "AppMeasurementPlugin"
          , AppMeasurementPlugin = function() {
            function e(t) {
                _classCallCheck(this, e),
                this.options = _objectSpread(_objectSpread({}, defaultOptions), t),
                this.conf = {},
                this._bindMethods()
            }
            return _createClass(e, [{
                key: "destroy",
                value: function(e) {
                    this.options = _objectSpread(_objectSpread({}, defaultOptions), e),
                    this.destroyAppMeasurement(),
                    this.resetReferrer(),
                    this.resetLoadTiming(),
                    this.options.destroyObservers && this.destroyObservers(this.options)
                }
            }, {
                key: "initialize",
                value: function(e) {
                    if (this.refreshData(e),
                    passiveTrackerInit({
                        muleVersion: "v1",
                        cookieDomain: get(confKey)[dlKeys.trackingDomain]
                    }),
                    !errorHandler.exception) {
                        var t = this.getAppMeasurementConfig();
                        errorHandler.exception || (t = this.preAppMeasurementInit(t),
                        errorHandler.exception || appMeasurementSetup.init(t))
                    }
                }
            }, {
                key: "refreshData",
                value: function(e) {
                    refreshDataLayer(e),
                    this._prepareDataLayer(),
                    biscuitTin.retrieve()
                }
            }, {
                key: "_prepareDataLayer",
                value: function() {
                    var e = this
                      , t = get(metaKey);
                    if (this._hasRequiredData(t) || errorHandler.log(moduleName, "_prepareDataLayer", "Missing required source data"),
                    !errorHandler.exception && (Object.keys(t).forEach(function(r) {
                        e.conf[e._transformPropertyName(r)] = t[r]
                    }),
                    this._setConfigurationProperty(dlKeys.pageName, this._getPageName(this.conf[dlKeys.track])),
                    this._setConfigurationProperty(dlKeys.productName, this._getProductName(this.conf[dlKeys.track])),
                    this._setConfigurationProperty(dlKeys.locale, this._getLocale(this.conf[dlKeys.track])),
                    this.conf[dlKeys.locale] || errorHandler.log(moduleName, "_prepareDataLayer", "ISO code must be provided"),
                    !errorHandler.exception)) {
                        this._setConfigurationProperty(dlKeys.pageType, this._getPageType(this.conf[dlKeys.pageName]));
                        var r = urlHelpers.sanitizeUrl({
                            url: document.location.href,
                            pageType: this.conf[dlKeys.pageType]
                        });
                        this._setConfigurationProperty(dlKeys.pageURL, r);
                        var a = new URL(r);
                        this._setConfigurationProperty(dlKeys.queryString, a.search),
                        this._setConfigurationProperty(dlKeys.pageURLNoQueryString, r.replace(a.search, ""));
                        var o = get([confKey, dlKeys.referrer]);
                        if (o || (o = urlHelpers.sanitizeUrl({
                            url: document.referrer,
                            pageType: this.conf[dlKeys.pageType],
                            isReferrerUrl: !0
                        })),
                        this._setConfigurationProperty(dlKeys.referrer, o || ""),
                        this._setConfigurationProperty(dlKeys.searchTerm, this._getSearchTerm()),
                        this._setConfigurationProperty(dlKeys.initialTimeStamp, Date.now()),
                        this._setConfigurationProperty(dlKeys.platform, this._getPlatform()),
                        this._setConfigurationProperty(dlKeys.countryBuckets, constants.countryBuckets),
                        this._setConfigurationProperty(dlKeys.subdomains, constants.subdomains),
                        this._setConfigurationProperty(dlKeys.subdomainSupportedDomains, constants.supportedSubdomains),
                        this._setConfigurationProperty(dlKeys.currencyCode, "USD"),
                        this._setConfigurationProperty(dlKeys.acAnalyticsVersion, constants.acAnalyticsVersion),
                        this._setConfigurationProperty(dlKeys.trackingDomain, this.getTrackingDomain()),
                        this._setConfigurationProperty(dlKeys.cookieDomainPeriods, this.setCookieDomainPeriods()),
                        this._setConfigurationProperty(dlKeys.cookieLifetime, constants.cookieLifetime),
                        this._setConfigurationProperty(dlKeys.clickTimerCount, 0),
                        this._setConfigurationProperty(dlKeys.clickTimerLinkInteraction, !1),
                        this._setConfigurationProperty(dlKeys.trackingServer, this.getTrackingServer()),
                        this._setConfigurationProperty(dlKeys.trackingServerSecure, this.getSecureTrackingServer()),
                        this._setConfigurationProperty(dlKeys.linkDownloadFileTypes, constants.linkDownloadFileTypes.join(",")),
                        !errorHandler.exception) {
                            this.formattedValues = {};
                            var n = this.conf.locale.toLowerCase();
                            this.formattedValues.countryCodeFilter = formatter.countryCodeFilter(n),
                            this.formattedValues.legacyCountryCode = formatter.legacyCountryCode(n),
                            this.formattedValues.pageName = formatter.pageName(this.conf.pageName, n),
                            this.formattedValues.channel = formatter.channel(this.conf.channel, n),
                            this.formattedValues.productName = formatter.productName(this.conf.productName),
                            this.formattedValues.campaign = this.conf.campaign,
                            this._setConfigurationProperty(dlKeys.linkInternalFiltersLocale, this._getLinkInternalFiltersLocale(this.formattedValues.countryCodeFilter)),
                            this._setConfigurationProperty(dlKeys.computedCampaign, this.formattedValues.campaign),
                            this._setConfigurationProperty(dlKeys.computedProductName, this.formattedValues.productName),
                            this._setConfigurationProperty(dlKeys.computedPageName, this.formattedValues.pageName),
                            this._setConfigurationProperty(dlKeys.legacyCountryCode, this.formattedValues.legacyCountryCode),
                            this._setConfigurationProperty(dlKeys.countryCodeFilter, this.formattedValues.countryCodeFilter),
                            set(confKey, this.conf),
                            set(["pageDataModel", "config", "global", "cookieDomain"], this.conf[dlKeys.trackingDomain]),
                            this.templateVarArr = templateVarHelper.set(),
                            this._setConfigurationProperty(dlKeys.bucket, this._getBucket(this.conf, this.formattedValues.legacyCountryCode)),
                            set([confKey, dlKeys.bucket], this.conf.bucket),
                            this.conf[dlKeys.computedChannel] = this._replaceTemplateVars(this.formattedValues.channel),
                            set([confKey, dlKeys.computedChannel], this.conf.computedChannel),
                            Object.keys(this.options).forEach(function(t) {
                                set([optionsKey, t], e.options[t])
                            }),
                            this.conf = {}
                        }
                    }
                }
            }, {
                key: "_setConfigurationProperty",
                value: function(e, t) {
                    void 0 === this.conf[e] && (this.conf[e] = t)
                }
            }, {
                key: "_hasRequiredData",
                value: function(e) {
                    return !Object.values(e).some(function(e) {
                        return void 0 === e || "" === e
                    })
                }
            }, {
                key: "getAppMeasurementConfig",
                value: function() {
                    var e = get(confKey)
                      , t = {
                        acAnalytics: {},
                        options: {}
                    };
                    t.acAnalytics.version = e[dlKeys.acAnalyticsVersion],
                    t.acAnalytics.trackingDomain = t.Ia = e[dlKeys.trackingDomain],
                    t.cookieDomainPeriods = e[dlKeys.cookieDomainPeriods],
                    t.pageName = e[dlKeys.computedPageName],
                    t.bucket = e[dlKeys.bucket];
                    var r = window.localStorage.getItem("acAnalyticsValidationExtraReportSuite");
                    r && "string" == typeof r && (t.bucket.includes(r) || (t.bucket += ",".concat(r))),
                    t.channel = e[dlKeys.computedChannel],
                    t.currencyCode = e[dlKeys.currencyCode],
                    t.trackDownloadLinks = !0,
                    t.trackExternalLinks = !0,
                    t.trackInlineStats = !0,
                    t.useForcedLinkTracking = !0,
                    t.forcedLinkTrackingTimeout = 100,
                    t.linkDownloadFileTypes = e[dlKeys.linkDownloadFileTypes],
                    t.linkInternalFilters = "tel:,mailto:,javascript:," + t.acAnalytics.trackingDomain + "," + t.acAnalytics.trackingDomain + "/media," + t.acAnalytics.trackingDomain + "/105",
                    t.linkLeaveQueryString = !1,
                    t._isSafari = !1,
                    t.usePlugins = !0,
                    t.doPlugins = doPlugins,
                    t.cookieLifetime = e[dlKeys.cookieLifetime],
                    t.writeSecureCookies = !0,
                    t.trackingServer = e[dlKeys.trackingServer],
                    t.trackingServerSecure = e[dlKeys.trackingServerSecure];
                    var a = window.localStorage.getItem("acAnalyticsValidatationTrackingServer");
                    a && "string" == typeof a && (t.trackingServerSecure = a),
                    t.dc = this.getDataCenterId();
                    var o = {};
                    return e && e.options && (t.options = e.options,
                    e.options.overrides && (o = e.options.overrides,
                    Object.keys(t).forEach(function(e) {
                        t[e] = o[e]
                    }))),
                    t.options.corePlugins = corePlugins,
                    t
                }
            }, {
                key: "resetReferrer",
                value: function() {
                    var e;
                    this.options && this.options.referrer ? e = this.options.referrer : (e = get([confKey, dlKeys.pageURL]),
                    set([confKey, dlKeys.referrer], e))
                }
            }, {
                key: "resetLoadTiming",
                value: function() {
                    this.conf.loadTiming = Date.now()
                }
            }, {
                key: "destroyObservers",
                value: function() {
                    observerRegistry.destroy()
                }
            }, {
                key: "preAppMeasurementInit",
                value: function(e) {
                    return cookie.updateCookieOptions(e.acAnalytics.trackingDomain),
                    set([confKey, dlKeys.specialExitLinks], generateSpecialExitLinks()),
                    e
                }
            }, {
                key: "getTrackingDomain",
                value: function() {
                    return constants.domainRegex.test(window.location.hostname) ? "apple.com.cn" : "apple.com"
                }
            }, {
                key: "setCookieDomainPeriods",
                value: function() {
                    return constants.domainRegex.test(window.location.hostname) ? "3" : "2"
                }
            }, {
                key: "destroyAppMeasurement",
                value: function() {
                    var e = appMeasurementSetup.getInstance();
                    triggerNewPage(),
                    "object" === _typeof(e) && (e.ac_amt.destroy(),
                    e.manageVars("clearVars"),
                    e.tcall = void 0,
                    e.pageURL = e.g_prop6 = e.g_pageURL = e.g_channel = "")
                }
            }, {
                key: "submit",
                value: function(e) {
                    var t = appMeasurementSetup.getInstance();
                    e && "object" === _typeof(e) || errorHandler.log(moduleName, "submit", "Request param (".concat(e, ") is not an object")),
                    errorHandler.exception || (e.type && "string" == typeof e.type || errorHandler.log(moduleName, "submit", 'property "type" ('.concat(e.type, '") must be a string')),
                    window.s && "object" === _typeof(window.s) || errorHandler.log(moduleName, "submit", "appMeasurement (".concat(window.s, ") is not an object")),
                    errorHandler.exception || e.submitMethod && submitMethods[e.submitMethod] && (this._setAppMeasurementProps(e),
                    submitMethods[e.submitMethod](e, get(confKey), t)))
                }
            }, {
                key: "_getLinkInternalFiltersLocale",
                value: function(e) {
                    var t = "";
                    return "us" !== e && (t = e),
                    t
                }
            }, {
                key: "_setAppMeasurementProps",
                value: function(e) {
                    var t = e.beacon || {};
                    e.linkTrackVars = [];
                    var r = appMeasurementSetup.getInstance();
                    for (var a in r.linkTrackEvents = "",
                    t)
                        "events" === a && "page" !== e.type && (t[a] = eventsToString(t[a]),
                        r.linkTrackEvents = t[a].replace(/=([^,]+)/g, "")),
                        "title" !== a && ("page" !== e.type && e.linkTrackVars.push(a),
                        r[a] = t[a])
                }
            }, {
                key: "_getProductName",
                value: function(e) {
                    var t = this._strToArray(e);
                    if (Array.isArray(t) && 0 !== t.length || errorHandler.log(moduleName, "_getProductname", '"track" meta tag value is malformed. e.g. "product name - page name"'),
                    !errorHandler.exception)
                        return t[0].trim()
                }
            }, {
                key: "_getPageName",
                value: function(e) {
                    if (e && "" !== e ? e.match(/[^\S ]/g) && errorHandler.warn(moduleName, "_getPageName", '"track" meta tag value includes an invalid whitespace character, identified by the following regex: "[^\\S ]"') : errorHandler.log(moduleName, "_getPageName", '"track" meta tag value is malformed. e.g. "product name - page name"'),
                    !errorHandler.exception) {
                        var t = escape(e);
                        return t = (t = (t = t.replace(/(%u2018|%u2019|%u02BC|%u02BD)/g, "%27")).replace(/(%u201C|%u201D|%E2%80%9C|%E2%80%9D)/g, "%22")).replace(/(%09|%0A|%0D)/g, ""),
                        (e = unescape(t)).toLowerCase()
                    }
                }
            }, {
                key: "_getPageType",
                value: function(e) {
                    return "search - results" === e ? "search" : "404 - page not found" === e ? "errorPage" : "normal"
                }
            }, {
                key: "_getSearchTerm",
                value: function() {
                    return window.location.pathname.split("/").filter(function(e) {
                        return e
                    }).pop()
                }
            }, {
                key: "_getLocale",
                value: function() {
                    if (document && document.documentElement) {
                        var e = document.documentElement;
                        return e.getAttribute("data-locale") || e.lang
                    }
                }
            }, {
                key: "_getPlatform",
                value: function() {
                    var e = "other"
                      , t = navigator.userAgent
                      , r = {
                        "mobile other": "/(kindle|silk-accelerated|android|webos|rim tablet os|windows phone)/i",
                        windows: /windows/i,
                        "iphone/ipod touch": /(iphone|ipod)/i,
                        ipad: /(ipad)/i,
                        Mac: /Mac OS X/i
                    };
                    for (var a in r)
                        if (t.match(r[a])) {
                            e = a;
                            break
                        }
                    return e
                }
            }, {
                key: "_strToArray",
                value: function(e, t) {
                    if (t = t || "-",
                    "string" != typeof e && errorHandler.log(moduleName, "_strToArray", e + " is not a valid string"),
                    !errorHandler.exception)
                        return e.split(t)
                }
            }, {
                key: "_transformPropertyName",
                value: function(e) {
                    return e.replace(/^s-/, "").replace(/-+(.)?/g, function(e, t) {
                        return t ? t.toUpperCase() : ""
                    })
                }
            }, {
                key: "_getBucket",
                value: function(e, t) {
                    for (var r = constants.countryBuckets.length, a = 2, o = 0; o < r; o++)
                        if (-1 !== constants.countryBuckets[o].indexOf(t)) {
                            a = o;
                            break
                        }
                    var n = this._replaceTemplateVars(e["bucket" + a]);
                    if (n || errorHandler.log(moduleName, "bucket", "analytics-s-bucket-" + a + " metadata tag must exist"),
                    !errorHandler.exception) {
                        var i = this._replaceTemplateVars(e["bucketProduct" + a])
                          , s = this._replaceTemplateVars(e.bucketStore);
                        return n + (i ? "," + i : "") + (s ? "," + s : "")
                    }
                }
            }, {
                key: "_replaceTemplateVars",
                value: function(e) {
                    return templateVarHelper.translate(e, this.templateVarArr)
                }
            }, {
                key: "isSafariTopSitesPreview",
                value: function() {
                    return !(!navigator || !navigator.loadPurpose || "preview" !== navigator.loadPurpose)
                }
            }, {
                key: "getTrackingServer",
                value: function() {
                    return this._isProduction() ? "metrics." + this.conf[dlKeys.trackingDomain] : location.hostname
                }
            }, {
                key: "getSecureTrackingServer",
                value: function() {
                    return this._isProduction() ? "securemetrics." + this.conf[dlKeys.trackingDomain] : location.hostname
                }
            }, {
                key: "getDataCenterId",
                value: function() {
                    return 112
                }
            }, {
                key: "_isProduction",
                value: function() {
                    var e = this.generateProdURLs()
                      , t = window.location.host;
                    return e.indexOf(t) > -1
                }
            }, {
                key: "generateProdURLs",
                value: function() {
                    var e = this.conf[dlKeys.trackingDomain]
                      , t = []
                      , r = constants.supportedSubdomains || ["apple.com"]
                      , a = constants.subdomains || ["www"];
                    return -1 !== r.indexOf(e) && a.forEach(function(r) {
                        t.push(r + "." + e)
                    }),
                    t
                }
            }, {
                key: "_bindMethods",
                value: function() {
                    this._replaceTemplateVars = this._replaceTemplateVars.bind(this)
                }
            }]),
            e
        }();
        module.exports = AppMeasurementPlugin
    }
    , {
        "../ErrorHandler": 118,
        "../constants": 121,
        "../helpers/cookie": 124,
        "../helpers/dataLayer": 125,
        "../helpers/eventsToString": 128,
        "../helpers/formatter": 130,
        "../helpers/generateSpecialExitLinks": 131,
        "../helpers/templateVar": 145,
        "../observers/observerRegistry": 158,
        "./appMeasurementPlugins": 72,
        "./doPlugins/doPlugins": 83,
        "./submit-methods/submitMethods": 115,
        "@apple/analytics-biscuit-tin": 1,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-passive-tracker": 9,
        "@apple/analytics-utils": 12,
        "@marcom/appmeasurement-setup": 50
    }],
    72: [function(require, module, exports) {
        "use strict";
        var plugins = [require("./appMeasurementPlugins/AppMeasurementTools"), require("./appMeasurementPlugins/utilities/utilities"), require("./appMeasurementPlugins/linkHandler"), require("./appMeasurementPlugins/getPercentPageViewed"), require("./appMeasurementPlugins/getQueryParam"), require("./appMeasurementPlugins/getValOnce"), require("./appMeasurementPlugins/activitymap/link"), require("./appMeasurementPlugins/activitymap/region"), require("./appMeasurementPlugins/activitymap/ActivityMapCollection")];
        module.exports = plugins
    }
    , {
        "./appMeasurementPlugins/AppMeasurementTools": 73,
        "./appMeasurementPlugins/activitymap/ActivityMapCollection": 74,
        "./appMeasurementPlugins/activitymap/link": 76,
        "./appMeasurementPlugins/activitymap/region": 77,
        "./appMeasurementPlugins/getPercentPageViewed": 78,
        "./appMeasurementPlugins/getQueryParam": 79,
        "./appMeasurementPlugins/getValOnce": 80,
        "./appMeasurementPlugins/linkHandler": 81,
        "./appMeasurementPlugins/utilities/utilities": 82
    }],
    73: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.ac_amt && e.ac_amt._isEmpty && e.ac_amt.eventListeners && !e.ac_amt._isEmpty(e.ac_amt.eventListeners) && e.ac_amt.destroy && e.ac_amt.destroy(),
            e.ac_amt = {
                addListener: function(e, t, s, n, i) {
                    e && t && s && n && (this.eventListeners[e] && this.removeListener(this.eventListeners[e]),
                    this.eventListeners[e] = {
                        node: t,
                        type: s,
                        listener: n
                    },
                    t.addEventListener(s, n, i))
                },
                destroy: function() {
                    this.removeListeners()
                },
                removeListeners: function() {
                    if (this.eventListeners) {
                        for (var e in this.eventListeners)
                            this.eventListeners.hasOwnProperty(e) && this.removeListener(e, this.eventListeners[e].node, this.eventListeners[e].type, this.eventListeners[e].listener);
                        this.eventListeners = {}
                    }
                },
                removeListener: function(e, t, s, n) {
                    e && t && s && n && (t.removeEventListener(s, n),
                    delete this.eventListeners[e])
                },
                eventListeners: {},
                options: {
                    reinitializeActivityMapCollection: !0
                },
                _isEmpty: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t))
                            return !1;
                    return !0
                }
            }
        }
    }
    , {}],
    74: [function(require, module, exports) {
        "use strict";
        var _ancestor = require("@marcom/dom-traversal/ancestor")
          , _isAncestorOf = require("@marcom/dom-traversal/isAncestorOf")
          , _helpers = require("./helpers/helpers.js")
          , DELIMITER = " - ";
        function ActivityMapCollection() {
            this._regionSelectors = ["[data-analytics-activitymap-region-id]", "[data-analytics-section-engagement]", "[data-card-analytics]"],
            this._globalRegionSelectors = ['[data-analytics-region="buy strip"]', "#globalnav", "#ac-globalnav", "#ac-localnav", "#ac-globalfooter", "#chapternav"],
            this.createActivityMapCollection = this.createActivityMapCollection.bind(this),
            this.addElToCollection = this.addElToCollection.bind(this)
        }
        var proto = ActivityMapCollection.prototype;
        proto.init = function(e) {
            var t = this;
            this.AppMeasurement = e,
            this.AppMeasurement && this.AppMeasurement.ac_amt && ("complete" !== document.readyState && "interactive" !== document.readyState && this.AppMeasurement.ac_amt.addListener ? this.AppMeasurement.ac_amt.addListener("amc_readystatechange", document, "readystatechange", function(e) {
                "interactive" !== e.target.readyState && "complete" !== e.target.readyState || t.createActivityMapCollection()
            }) : this.AppMeasurement.ac_amt.options && this.AppMeasurement.ac_amt.options.reinitializeActivityMapCollection && this.createActivityMapCollection())
        }
        ,
        proto.createActivityMapCollection = function() {
            this.AppMeasurement = this.AppMeasurement || window.s,
            this.AppMeasurement && (this.AppMeasurement.acAnalyticsActivityMapCollection = null,
            this.AppMeasurement.acAnalyticsActivityMapCollection = this._assembleActivityMapCollection())
        }
        ,
        proto._createLinkData = function(e) {
            var t = this._determineRegionName(e, this._globalRegionElements, this._regionSelectors);
            return {
                element: e,
                linkId: this._createLinkId(e, t.id),
                regionElement: t.el,
                regionName: t.id
            }
        }
        ,
        proto.addElToCollection = function(e) {
            var t = this._createLinkData(e);
            return this._addToActivityMapCollection(t)
        }
        ,
        proto._addToActivityMapCollection = function(e) {
            var t, i, a = !0, n = 0;
            if (i = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(t) {
                return t.linkId === e.linkId
            })[0])
                i.linkId = i.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(1)),
                e.linkId = e.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(2));
            else
                for (; a; )
                    n++,
                    t = e.linkId.concat(DELIMITER, "#", _helpers.prefixCharacters(n)),
                    (i = this.AppMeasurement.acAnalyticsActivityMapCollection.filter(function(e) {
                        return e.linkId === t
                    })[0]) || (a = !1,
                    n > 1 && (e.linkId = t));
            this.AppMeasurement.acAnalyticsActivityMapCollection.push(e)
        }
        ,
        proto._assembleActivityMapCollection = function() {
            this._globalRegionElements = _helpers.getGlobalElements(this._globalRegionSelectors);
            for (var e = document.querySelectorAll("a, button"), t = [], i = 0; i < e.length; i++) {
                var a = this._createLinkData(e[i]);
                t.push(a)
            }
            return this._renameDuplicateIds(t)
        }
        ,
        proto._renameDuplicateIds = function(e) {
            for (var t = {}, i = {}, a = 0; a < e.length; a++) {
                var n = e[a].linkId;
                t[n] = t[n] ? t[n] + 1 : 1,
                t[n] > 1 ? e[a].linkId = e[a].linkId + " - #" + _helpers.prefixCharacters(t[n]) : i[n] = a,
                2 === t[n] && (e[i[n]].linkId = e[i[n]].linkId + " - #01")
            }
            return e
        }
        ,
        proto._determineRegionName = function(e, t, i) {
            for (var a = null, n = null, r = 0; r < t.length; r++)
                _isAncestorOf(t[r], e) && !a && (a = t[r],
                n = "ac-globalnav" === t[r].id ? a.getAttribute("data-analytics-region") || "global nav" : a.id || a.getAttribute("data-analytics-region"));
            if (!a && (a = _ancestor(e, i.join(","), !0))) {
                var o = i.find(function(e) {
                    return a.hasAttribute(_helpers.removeArrayBrackets(e))
                });
                n = a.getAttribute(_helpers.removeArrayBrackets(o)),
                "[data-analytics-section-engagement]" === o && (n = n.replace("name:", ""))
            }
            return a || (a = document.body,
            n = "body"),
            {
                el: a,
                id: n.toLowerCase()
            }
        }
        ,
        proto._createLinkId = function(e, t) {
            var i = _helpers.createLinkText(e)
              , a = _helpers.createLinkHref(e, this.AppMeasurement)
              , n = _helpers.limitStrLength(t, 40);
            return _helpers.createLinkId(i, a, n, DELIMITER).toLowerCase()
        }
        ,
        module.exports = new ActivityMapCollection
    }
    , {
        "./helpers/helpers.js": 75,
        "@marcom/dom-traversal/ancestor": 55,
        "@marcom/dom-traversal/isAncestorOf": 57
    }],
    75: [function(require, module, exports) {
        "use strict";
        function Helpers() {
            this.createLinkId = this.createLinkId.bind(this)
        }
        var proto = Helpers.prototype;
        proto.prefixCharacters = function(t, r, e) {
            var n = "";
            for (r = r || 2,
            e = e || 0; r; )
                n += e,
                r--;
            return n.substring(0, n.length - t.toString().length) + t
        }
        ,
        proto.limitStrLength = function(t, r) {
            return t.substring(0, r).trim()
        }
        ,
        proto.removeArrayBrackets = function(t) {
            return "[" === t[0] && "]" === t[t.length - 1] ? t.substr(1, t.length - 2) : t
        }
        ,
        proto.getGlobalElements = function(t) {
            for (var r = [], e = 0; e < t.length; e++) {
                var n = document.querySelector(t[e]);
                n && r.push(n)
            }
            return r
        }
        ,
        proto.createLinkText = function(t) {
            var r = t.getAttribute("data-analytics-activitymap-link-id") || t.getAttribute("data-ac-gallery-trigger") || t.getAttribute("data-analytics-title") || this.removeSpecialChars(t.textContent) || t.id || t.tagName || "no text";
            return this.limitStrLength(r, 50)
        }
        ,
        proto.createLinkHref = function(t, r) {
            var e, n;
            return t.protocol && "http:" !== t.protocol && "https:" !== t.protocol ? n = t.protocol.substring(0, t.protocol.length - 1) : (t.hostname !== window.location.hostname && t.hostname !== "www." + r.acAnalytics.trackingDomain && (e = t.hostname + t.pathname),
            n = e || t.hash || t.pathname || "no href"),
            n
        }
        ,
        proto.createLinkId = function(t, r, e, n) {
            var o, a, i = t.concat(n, r, n, e);
            return i.length > 128 && (o = 128 - t.concat(n, n, e).length,
            a = this.limitStrLength(r, o),
            i = t.concat(n, a, n, e)),
            i
        }
        ,
        proto.removeSpecialChars = function(t) {
            var r;
            if (t) {
                var e = ["&rlm;", "\\u200F", "&#8207;", "&#x200f;"].join("|")
                  , n = new RegExp(e,"gi");
                r = t.replace(n, "").replace(/\s+/g, " ").trim()
            }
            return r
        }
        ,
        module.exports = new Helpers
    }
    , {}],
    76: [function(require, module, exports) {
        "use strict";
        var ActivityMapCollection = require("./ActivityMapCollection")
          , useragent = require("@marcom/useragent-detect")
          , closeStr = "close"
          , openStr = "open"
          , initialBagState = useragent.browser.firefox || useragent.browser.ie ? openStr : closeStr
          , alteredBagState = useragent.browser.firefox || useragent.browser.ie ? closeStr : openStr;
        function getPath(e) {
            return e.replace(/.+\.com(\.cn)?/, "")
        }
        function getBagString(e, t) {
            return "".concat(e, " - bag - ").concat(t, " - globalnav - ").concat(e)
        }
        module.exports = function(e) {
            e.ActivityMap.link = function(t, n) {
                var r;
                function i(t) {
                    return (e.acAnalyticsActivityMapCollection || []).filter(function(e) {
                        return e.element.isSameNode(t)
                    })[0]
                }
                if ((!n || -1 === n.indexOf("v@e") && -1 === n.indexOf("v@sk") && -1 === n.indexOf("v@m")) && t && !t.hasAttribute("data-analytics-ignore-link")) {
                    if (r = i(t)) {
                        if (-1 !== r.linkId.indexOf("/shop/goto/bag")) {
                            var a = getPath(r.element.href);
                            return "true" === r.element.getAttribute("aria-expanded") ? getBagString(initialBagState, a) : getBagString(alteredBagState, a)
                        }
                        return r.linkId
                    }
                    return ActivityMapCollection.addElToCollection(t),
                    (r = i(t)) ? r.linkId : void 0
                }
            }
        }
    }
    , {
        "./ActivityMapCollection": 74,
        "@marcom/useragent-detect": 70
    }],
    77: [function(require, module, exports) {
        "use strict";
        module.exports = function(i) {
            i.ActivityMap.region = function(t) {
                if (t) {
                    var e = i.acAnalyticsActivityMapCollection.filter(function(i) {
                        return i.element.isSameNode(t)
                    })[0];
                    return e ? e.regionName : void 0
                }
            }
        }
    }
    , {}],
    78: [function(require, module, exports) {
        "use strict";
        var isStorageAvailable = require("../../helpers/isStorageAvailable")
          , SESSION_STORAGE = require("../../constants").sessionStorage;
        module.exports = function(e) {
            isStorageAvailable(SESSION_STORAGE) && (e.getPercentPageViewed = function() {
                if (void 0 === s.linkType) {
                    try {
                        s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) ? sessionStorage.getItem(s.ppv.sessionStorageKey) : ""
                    } catch (e) {}
                    return s.ppv.init(),
                    s.ppv.previous.split(",")
                }
                if (!s.ppv.previous) {
                    try {
                        s.ppv.previous = sessionStorage.getItem(s.ppv.sessionStorageKey) || ""
                    } catch (e) {}
                    return s.ppv.init(),
                    s.ppv.previous.split(",")
                }
            }
            ,
            e.ppv = {
                initialPercent: 0,
                maxPercent: 0,
                throttleAmount: 500,
                sessionStorageKey: "s_ppv",
                init: function() {
                    s && s.ac_amt && s.ac_amt.addListener && (s.ac_amt.addListener("ppv_scroll", window, "scroll", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1),
                    s.ac_amt.addListener("ppv_resize", window, "resize", s.ppv.throttle(s.ppv.scroll, s.ppv.throttleAmount), !1),
                    s.ac_amt.addListener("ppv_beforeunload", window, "beforeunload", s.ppv.unload, !1),
                    "complete" !== document.readyState ? s.ac_amt.addListener("ppv_load", window, "load", s.ppv.scroll, !1) : s.ppv.scroll())
                },
                scroll: function() {
                    var e = s.ppv;
                    if (100 !== e.maxPercent) {
                        var t = void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement || document.body.parentNode || document.body.scrollTop
                          , o = document.clientHeight || document.documentElement.clientHeight || document.body.clientHeight
                          , n = e.getDocHeight();
                        if (n = Math.round((t + o) / n * 100),
                        e.initialPercent || (e.initialPercent = n),
                        n > e.maxPercent) {
                            e.maxPercent = n;
                            var i = [];
                            i.push(s.pageName),
                            i.push(n),
                            i.push(e.initialPercent),
                            i.push(t + o);
                            try {
                                sessionStorage.setItem(e.sessionStorageKey, i.join(","))
                            } catch (e) {}
                        }
                    }
                },
                getDocHeight: function() {
                    var e = window.document;
                    return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight), Math.max(e.body.offsetHeight, e.documentElement.offsetHeight), Math.max(e.body.clientHeight, e.documentElement.clientHeight))
                },
                unload: function() {
                    try {
                        sessionStorage.getItem(s.ppv.sessionStorageKey) && sessionStorage.setItem(s.ppv.sessionStorageKey, sessionStorage.getItem(s.ppv.sessionStorageKey))
                    } catch (e) {}
                },
                throttle: function(e, t) {
                    var s, o, n = null, i = 0, a = function() {
                        i = new Date,
                        n = null,
                        o = e.apply(void 0, s)
                    };
                    return function() {
                        var r = new Date;
                        i || (i = r);
                        var p = t - (r - i);
                        return s = arguments,
                        0 >= p ? (clearTimeout(n),
                        n = null,
                        i = r,
                        o = e.apply(this, s)) : n || (n = setTimeout(a, p)),
                        o
                    }
                }
            })
        }
    }
    , {
        "../../constants": 121,
        "../../helpers/isStorageAvailable": 137
    }],
    79: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.getQueryParam = e.Util.getQueryParam
        }
    }
    , {}],
    80: [function(require, module, exports) {
        "use strict";
        module.exports = function(e) {
            e.getValOnce = function(e, t, i, r) {
                e = e || "",
                t = t || "s_gvo",
                i = i || 0;
                var n = this.c_r(t);
                if (e) {
                    var s = 0;
                    if (0 !== i) {
                        var c = i * ("m" === r ? 6e4 : 864e5);
                        (s = new Date).setTime(s.getTime() + c)
                    }
                    this.c_w(t, e, s)
                }
                return e === n ? "" : e
            }
        }
    }
    , {}],
    81: [function(require, module, exports) {
        "use strict";
        module.exports = function(n) {
            n.p_gn = function(n, e) {
                var t, r, i = n ? n.indexOf("~") : -1;
                return n && e && (t = i < 0 ? "" : n.substring(0, i),
                r = n.substring(i + 1),
                e.indexOf(r.toLowerCase()) > -1) ? t || "[[" : 0
            }
            ,
            n.p_gh = function() {
                var n = this;
                if (n.linkObject)
                    return n.linkObject.href;
                if (!n.eo && !n.lnk)
                    return "";
                var e = n.eo ? n.eo : n.lnk
                  , t = n.ot(e)
                  , r = n.oid(e);
                e.s_oidt;
                if (n.eo && e == n.eo)
                    for (; e && !r && "BODY" != t; ) {
                        if (!(e = e.parentElement ? e.parentElement : e.parentNode))
                            return "";
                        t = n.ot(e),
                        r = n.oid(e),
                        e.s_oidt
                    }
                return e.href ? e.href : ""
            }
            ,
            n.pt = function(n, e, t, r) {
                for (var i, o, u = n, s = 0; u; ) {
                    if (i = (i = u.indexOf(e)) < 0 ? u.length : i,
                    u = u.substring(0, i),
                    o = this[t](u, r))
                        return o;
                    s += i + e.length,
                    u = n.substring(s, n.length),
                    u = s < n.length ? u : ""
                }
                return ""
            }
            ,
            n.linkHandler = function(n, e, t) {
                var r, i, o = this, u = o.p_gh(), s = u;
                return e = e || "o",
                !s || o.linkType && (s || o.linkName) ? "" : (r = s.indexOf("?"),
                s = o.linkLeaveQueryString || r < 0 ? s : s.substring(0, r),
                (i = o.pt(n, "|", "p_gn", s.toLowerCase())) ? (o.linkName = "[[" == i ? "" : i,
                o.linkType = e,
                t ? u : s) : "")
            }
        }
    }
    , {}],
    82: [function(require, module, exports) {
        "use strict";
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        module.exports = function(t) {
            t.manageVars = function(t, e, n) {
                var r, o, a, i = this;
                if (e = e || "",
                n = n || 1,
                !i[t])
                    return !1;
                r = "pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID";
                for (var f = 1; f < 76; f++)
                    r += ",prop" + f;
                for (f = 1; f < 251; f++)
                    r += ",eVar" + f;
                for (f = 1; f < 6; f++)
                    r += ",hier" + f;
                for (f = 1; f < 4; f++)
                    r += ",list" + f;
                for (f in i.contextData)
                    r += ",contextData." + f;
                if (!e || 1 != n && 2 != n)
                    return "" == e && 1 == n && (i.pt(r, ",", t, 0),
                    !0);
                if (1 == n && (r = e.replace("['", ".").replace("']", "")),
                2 == n) {
                    for (var s in o = e.split(","),
                    a = r.split(","),
                    r = "",
                    o)
                        if (o.hasOwnProperty(s))
                            for (var c in o[s].indexOf("contextData") > -1 && (lax = o[s].split("'"),
                            o[s] = "contextData." + lax[1]),
                            a)
                                o[s] == a[c] && (a[c] = "");
                    for (var c in a)
                        r += a[c] ? "," + a[c] : ""
                }
                return i.pt(r, ",", t, 0),
                !0
            }
            ,
            t.clearVars = function(t) {
                if (-1 == t.indexOf("contextData"))
                    this[t] = "";
                else if (t.indexOf("contextData") > -1) {
                    var e = t.substring(t.indexOf(".") + 1);
                    this.contextData[e] = ""
                }
            }
            ,
            t.lowercaseVars = function(t) {
                var e = this;
                if ("events" != t && -1 == t.indexOf("contextData") && e[t])
                    e[t] = e[t].toString(),
                    0 != e[t].indexOf("D=") && (e[t] = e[t].toLowerCase());
                else if (t.indexOf("contextData") > -1) {
                    var n = t.substring(t.indexOf(".") + 1);
                    e.contextData[n] && (e.contextData[n] = e.contextData[n].toString(),
                    e.contextData[n] = e.contextData[n].toLowerCase())
                }
            }
            ,
            t.pt = function(t, e, n, r) {
                for (var o, a, i = t, f = 0; i; ) {
                    if (o = (o = i.indexOf(e)) < 0 ? i.length : o,
                    i = i.substring(0, o),
                    a = this[n](i, r))
                        return a;
                    f += o + e.length,
                    i = t.substring(f, t.length),
                    i = f < t.length ? i : ""
                }
                return ""
            }
            ,
            t.join = function(t, e) {
                var n, r, o, a;
                e && (n = e.front ? e.front : "",
                r = e.back ? e.back : "",
                o = e.delim ? e.delim : "",
                a = e.wrap ? e.wrap : "");
                for (var i = "", f = 0; f < t.length; f++)
                    "object" == _typeof(t[f]) ? i += this.join(t[f], e) : i += a + t[f] + a,
                    f < t.length - 1 && (i += o);
                return n + i + r
            }
            ,
            t.apl = function(t, e, n, r) {
                var o = 0;
                if (t || (t = ""),
                r) {
                    var a, i, f = this.split(t, n);
                    for (a = 0; a < f.length; a++)
                        i = f[a],
                        o = o || (1 == r ? i == e : i.toLowerCase() == e.toLowerCase())
                }
                return o || (t = t ? t + n + e : e),
                t
            }
            ,
            t.split = function(t, e) {
                for (var n, r = 0, o = new Array; t; )
                    n = (n = t.indexOf(e)) > -1 ? n : t.length,
                    o[r++] = t.substring(0, n),
                    t = t.substring(n + e.length);
                return o
            }
        }
    }
    , {}],
    83: [function(require, module, exports) {
        "use strict";
        var doPluginsRegistry = require("./doPluginsRegistry");
        function doPlugins(i) {
            doPluginsRegistry.run(i)
        }
        module.exports = doPlugins
    }
    , {
        "./doPluginsRegistry": 84
    }],
    84: [function(require, module, exports) {
        "use strict";
        function _defineProperties(e, i) {
            for (var s = 0; s < i.length; s++) {
                var n = i[s];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, i, s) {
            return i && _defineProperties(e.prototype, i),
            s && _defineProperties(e, s),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _classCallCheck(e, i) {
            if (!(e instanceof i))
                throw new TypeError("Cannot call a class as a function")
        }
        var DoPluginsPhase = _createClass(function e(i) {
            _classCallCheck(this, e),
            this.name = i,
            this.steps = []
        })
          , DoPluginsStage = _createClass(function e(i, s) {
            var n = this;
            _classCallCheck(this, e),
            this.name = i,
            this.phases = s,
            this.phases.forEach(function(e) {
                n[e.name] = e
            })
        })
          , DoPluginsRegistry = function() {
            function e(i) {
                var s = this;
                _classCallCheck(this, e),
                this.stages = i,
                this.stages.forEach(function(e) {
                    s[e.name] = e
                })
            }
            return _createClass(e, [{
                key: "run",
                value: function(e) {
                    this.stages.forEach(function(i) {
                        i.phases && i.phases.forEach(function(i) {
                            i.steps && i.steps.forEach(function(i) {
                                i(e)
                            })
                        })
                    })
                }
            }]),
            e
        }()
          , doPluginsRegistry = new DoPluginsRegistry([new DoPluginsStage("pretracking",[new DoPluginsPhase("initialize"), new DoPluginsPhase("main"), new DoPluginsPhase("finalize")]), new DoPluginsStage("tracking",[new DoPluginsPhase("initialize"), new DoPluginsPhase("sideEffects"), new DoPluginsPhase("main"), new DoPluginsPhase("finalize"), new DoPluginsPhase("sanitize")]), new DoPluginsStage("cleanup",[new DoPluginsPhase("initialize"), new DoPluginsPhase("main"), new DoPluginsPhase("finalize")])])
          , trackingState = require("./plugins/trackingState");
        doPluginsRegistry.pretracking.main.steps.push(require("./plugins/referrerQueryParam")),
        doPluginsRegistry.tracking.sideEffects.steps.push(require("./plugins/handleLink"), require("./plugins/specialRssLinks")),
        doPluginsRegistry.tracking.main.steps.push(trackingState.begin, require("./plugins/acAnalyticsVersion"), require("./plugins/externalCampaign"), require("./plugins/internalCampaign"), require("./plugins/percentPageViewed"), require("./plugins/afid"), require("./plugins/retailCookies"), require("./plugins/feedbackPage"), require("./plugins/contactRetail"), require("./plugins/asTex"), require("./plugins/enhanceDownloadLinks"), require("./plugins/langLocale"), require("./plugins/userSignInStatus"), require("./plugins/pageName"), require("./plugins/asPvi"), require("./plugins/hierarchy1"), require("./plugins/referrerAndCurrentUrl"), require("./plugins/clickTimer"), require("./plugins/beaconType"), require("./plugins/linkMissingTitle")),
        doPluginsRegistry.tracking.finalize.steps.push(require("./plugins/passiveTracker"), require("./plugins/newPassiveTracker")),
        doPluginsRegistry.tracking.sanitize.steps.push(require("./plugins/removeSpacesInLinkTrackVars"), require("./plugins/manageVars")),
        doPluginsRegistry.cleanup.main.steps.push(require("./plugins/clearLinkTracksAfterDownloadAndExit")),
        doPluginsRegistry.cleanup.finalize.steps.push(trackingState.end, require("./plugins/setTcallToFalse")),
        module.exports = doPluginsRegistry
    }
    , {
        "./plugins/acAnalyticsVersion": 86,
        "./plugins/afid": 87,
        "./plugins/asPvi": 88,
        "./plugins/asTex": 89,
        "./plugins/beaconType": 90,
        "./plugins/clearLinkTracksAfterDownloadAndExit": 91,
        "./plugins/clickTimer": 92,
        "./plugins/contactRetail": 93,
        "./plugins/enhanceDownloadLinks": 94,
        "./plugins/externalCampaign": 95,
        "./plugins/feedbackPage": 96,
        "./plugins/handleLink": 97,
        "./plugins/hierarchy1": 98,
        "./plugins/internalCampaign": 99,
        "./plugins/langLocale": 100,
        "./plugins/linkMissingTitle": 101,
        "./plugins/manageVars": 102,
        "./plugins/newPassiveTracker": 103,
        "./plugins/pageName": 104,
        "./plugins/passiveTracker": 105,
        "./plugins/percentPageViewed": 106,
        "./plugins/referrerAndCurrentUrl": 107,
        "./plugins/referrerQueryParam": 108,
        "./plugins/removeSpacesInLinkTrackVars": 109,
        "./plugins/retailCookies": 110,
        "./plugins/setTcallToFalse": 111,
        "./plugins/specialRssLinks": 112,
        "./plugins/trackingState": 113,
        "./plugins/userSignInStatus": 114
    }],
    85: [function(require, module, exports) {
        "use strict";
        var get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , dataLayerConfig = require("../../constants").dataLayer.configuration
          , isIntraPageLink = require("../../helpers/DOM").isIntraPageLink;
        function getReferrer() {
            return get([dataLayerConfig.key, dataLayerConfig.keys.referrer]) || document.referrer || ""
        }
        function setReferrer(e) {
            set([dataLayerConfig.key, dataLayerConfig.keys.referrer], e)
        }
        function isMicroEvent(e) {
            return !!e.linkType
        }
        function isPageLoad(e) {
            return e.tcall
        }
        function isExitLink(e) {
            return "e" === e.linkType
        }
        function appendList(e, r, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ","
              , t = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
            "string" == typeof i && (i = [i]),
            "string" != typeof e[r] && (e[r] = JSON.stringify(e[r])),
            i.forEach(function(i) {
                e[r] = e.apl(e[r], i, n, t)
            })
        }
        function isTracking(e) {
            return isPageLoad(e) || isMicroEvent(e)
        }
        function isOutgoingLink(e) {
            return !isIntraPageLink(e.linkObject)
        }
        module.exports = {
            isMicroEvent: isMicroEvent,
            isPageLoad: isPageLoad,
            isExitLink: isExitLink,
            isTracking: isTracking,
            appendList: appendList,
            getReferrer: getReferrer,
            setReferrer: setReferrer,
            isOutgoingLink: isOutgoingLink
        }
    }
    , {
        "../../constants": 121,
        "../../helpers/DOM": 123,
        "@apple/analytics-data-layer": 4
    }],
    86: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration;
        function acAnalyticsVersion(a) {
            if (isPageLoad(a)) {
                var e = get([dataLayerConfig.key, dataLayerConfig.keys.acAnalyticsVersion]);
                e && (a.server = "ac-".concat(e))
            }
        }
        module.exports = acAnalyticsVersion
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    87: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , propName = "eVar10";
        function afid(e) {
            if (isPageLoad(e)) {
                var a = e.getQueryParam("afid");
                a && (e[propName] = e.getValOnce(a, "s_afc"))
            }
        }
        module.exports = afid
    }
    , {
        "../helpers": 85
    }],
    88: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , isMicroEvent = _require.isMicroEvent
          , appendList = _require.appendList
          , trackingProp = "prop51"
          , cookieName = "as_pvi";
        function asPvi(e) {
            if (isPageLoad(e)) {
                var i = e.Util.cookieRead(cookieName);
                i && (e[trackingProp] = i)
            } else
                isMicroEvent(e) && e[trackingProp] && appendList(e, "linkTrackVars", trackingProp)
        }
        module.exports = asPvi
    }
    , {
        "../helpers": 85
    }],
    89: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking
          , isMicroEvent = _require.isMicroEvent
          , appendList = _require.appendList
          , propName = "list3"
          , propData = "D=as_tex";
        function asTex(e) {
            isTracking(e) && (e[propName] = propData,
            isMicroEvent(e) && appendList(e, "linkTrackVars", propName))
        }
        module.exports = asTex
    }
    , {
        "../helpers": 85
    }],
    90: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , isMicroEvent = _require.isMicroEvent
          , appendList = _require.appendList
          , propName = "eVar97"
          , pageLoadIdentifer = "s.t-p"
          , microEventIndentifer = "s.tl-";
        function beaconType(e) {
            isPageLoad(e) ? e[propName] = pageLoadIdentifer : isMicroEvent(e) && (e[propName] = "".concat(microEventIndentifer).concat(e.linkType),
            appendList(e, "linkTrackVars", propName))
        }
        module.exports = beaconType
    }
    , {
        "../helpers": 85
    }],
    91: [function(require, module, exports) {
        "use strict";
        function clearLinkTracksAfterDownloadAndExit(n) {
            "d" !== n.linkType && "e" !== n.linkType || (n.bodyClickFunction = function(n) {
                n.linkTrackVars = "",
                n.linkTrackEvents = ""
            }
            .bind(null, n))
        }
        module.exports = clearLinkTracksAfterDownloadAndExit
    }
    , {}],
    92: [function(require, module, exports) {
        "use strict";
        var passiveTracker = require("../../../passiveTracker")
          , utils = require("@apple/analytics-utils")
          , mergeIntoDeferredBeacon = require("../../../helpers/mergeIntoDeferredBeacon")
          , cookieJson = utils.cookieJson
          , beaconHelpers = utils.beaconHelpers
          , toStr = utils.toStr
          , isOutgoingLink = require("../helpers").isOutgoingLink
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , dataLayerKeys = require("../../../constants").dataLayer
          , confKey = dataLayerKeys.configuration.key
          , confKeys = dataLayerKeys.configuration.keys
          , clickCount = [confKey, confKeys.clickTimerCount]
          , linkInteraction = [confKey, confKeys.clickTimerLinkInteraction]
          , loadTiming = [confKey, confKeys.loadTiming]
          , trackingDomain = [confKey, confKeys.trackingDomain]
          , COUNT_PROP = "eVar93"
          , TIME_PROP = "eVar94"
          , TIME_EVENT = "event210"
          , TIME_EVENT_COUNTER = "event246"
          , INVALID_EVENT = "event242"
          , COOKIE_NAME = "s_aca_ct"
          , COOKIE_OPTIONS = {
            path: "/",
            expires: .021,
            secure: !0
        }
          , CLICK_TIME_THRESHOLD = 900;
        function trackClickTime(e) {
            if (!e.linkName || -1 === e.linkName.indexOf("v@e") && -1 === e.linkName.indexOf("v@sk") && -1 === e.linkName.indexOf("v@m"))
                if (e.tcall)
                    _track(e);
                else if (isOutgoingLink(e) && "e" !== e.linkType && "d" !== e.linkType)
                    _storeData(e);
                else if (get(linkInteraction) && e.linkName)
                    _track(e);
                else if (e.linkObject) {
                    if ("d" === e.linkType || "e" === e.linkType)
                        return void _track(e);
                    set(linkInteraction, !0)
                }
        }
        function _track(e) {
            if (!e.tcall) {
                _incrementClickTimer();
                var n = _createDataObject(e);
                set(linkInteraction, !1),
                n && _applyData(e, n)
            }
        }
        function _storeData(e) {
            _incrementClickTimer();
            var n = _createDataObject(e)
              , t = {};
            t.events = JSON.parse(JSON.stringify(n.events)),
            t.events = t.events.join(","),
            t[COUNT_PROP] = n[COUNT_PROP],
            t[TIME_PROP] = n[TIME_PROP],
            beaconHelpers.isNotEmpty(t) && mergeIntoDeferredBeacon(_sanitizeBeacon(t))
        }
        function _applyData(e, n) {
            n[COUNT_PROP] && (e[COUNT_PROP] = n[COUNT_PROP]),
            n[TIME_PROP] && (e[TIME_PROP] = n[TIME_PROP]),
            n.events && _applyEventsData(e, n.events),
            e.tcall || (void 0 !== n.linkTrackEvents && n.linkTrackEvents.forEach(function(n) {
                e.linkTrackEvents = e.apl(e.linkTrackEvents, n, ",", 1)
            }),
            void 0 !== n.linkTrackVars && n.linkTrackVars.forEach(function(n) {
                e.linkTrackVars = e.apl(e.linkTrackVars, n, ",", 1)
            }))
        }
        function _createDataObject() {
            var e = _getTimeSinceLoad()
              , n = {
                linkTrackVars: [],
                linkTrackEvents: [],
                events: []
            };
            return null !== e ? (n.events.push(TIME_EVENT_COUNTER),
            n.events.push(TIME_EVENT + "=" + e),
            n.linkTrackVars.push(TIME_PROP),
            n.linkTrackEvents.push(TIME_EVENT, TIME_EVENT_COUNTER),
            n[TIME_PROP] = e) : (n.events.push(INVALID_EVENT),
            n.linkTrackEvents.push(INVALID_EVENT)),
            n[COUNT_PROP] = get(clickCount),
            n.linkTrackVars.push(COUNT_PROP),
            n.linkTrackVars.push("events"),
            n
        }
        function _incrementClickTimer() {
            var e = get(clickCount);
            e ? e++ : e = 1,
            set(clickCount, e)
        }
        function _applyEventCounter(e, n) {
            n && (e.events = e.apl(e.events, n, ",", 1))
        }
        function _applyEventWithValue(e, n) {
            if (n) {
                var t = {}
                  , i = n.split("=")[0]
                  , a = e.events.split(",");
                a.forEach(function(e, n) {
                    t[e.split("=")[0]] = n
                }),
                isNaN(t[i]) ? e.events = e.apl(e.events, n, ",", 1) : (a.splice(t[i], 1, n),
                e.events = a.join(","))
            }
        }
        function _applyEventsData(e, n) {
            "string" != typeof e.events && void 0 !== e.events || n.forEach(function(n) {
                -1 === n.indexOf("=") ? _applyEventCounter(e, n) : _applyEventWithValue(e, n)
            })
        }
        function _getTimeSinceLoad() {
            var e = get(loadTiming);
            if (!e) {
                if (!(window && window.performance && window.performance.timing && window.performance.timing.domInteractive))
                    return null;
                e = window.performance.timing.domInteractive
            }
            var n = ((Date.now() - e) / 1e3).toFixed(2);
            return isNaN(n) ? null : (n = parseFloat(n)) >= CLICK_TIME_THRESHOLD || n <= 0 ? null : n
        }
        function _sanitizeBeacon(e) {
            return Object.keys(e).forEach(function(n) {
                var t = n.substring(0, 4)
                  , i = toStr(e[n]);
                "prop" === t ? e[n] = i.substring(0, 100) : "eVar" === t && (e[n] = i.substring(0, 250))
            }),
            e
        }
        module.exports = trackClickTime
    }
    , {
        "../../../constants": 121,
        "../../../helpers/mergeIntoDeferredBeacon": 138,
        "../../../passiveTracker": 159,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-utils": 12
    }],
    93: [function(require, module, exports) {
        "use strict";
        var appendList = require("../helpers").appendList
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , contactRetailProp = "prop41";
        function contactRetail(a) {
            if ("e" === a.linkType && "contactretail" === a.linkName) {
                var t = "none";
                a.ActivityMap && a.ActivityMap.region && a.linkObject && (t = a.ActivityMap.region(a.linkObject));
                var e = get([dataLayerConfig.key, dataLayerConfig.keys.computedPageName]) || "none";
                a[contactRetailProp] = "open | apple chat | ".concat(t, " | ").concat(e),
                appendList(a, "linkTrackVars", contactRetailProp)
            }
        }
        module.exports = contactRetail
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    94: [function(require, module, exports) {
        "use strict";
        var appendList = require("../helpers").appendList
          , downloadEvent = "event5"
          , interactionTrackingProp = "prop16"
          , interactionTrackingVar = "eVar16";
        function enhanceDownloadLinks(n) {
            "d" === n.linkType && n.linkURL && (n.linkURL.match(/\.rss|\.xml/) ? n[interactionTrackingVar] = n[interactionTrackingProp] = "sign ups" : (n[interactionTrackingVar] = n[interactionTrackingProp] = "downloads",
            appendList(n, "events", downloadEvent),
            appendList(n, "linkTrackVars", "events"),
            appendList(n, "linkTrackEvents", downloadEvent)),
            appendList(n, "linkTrackVars", [interactionTrackingVar, interactionTrackingProp]))
        }
        module.exports = enhanceDownloadLinks
    }
    , {
        "../helpers": 85
    }],
    95: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , setReferrer = _require.setReferrer
          , propName = "campaign"
          , cookieName = "s_campaign"
          , queryParam = "cid"
          , regexPattern = /OAS-.+?-DOMAINS-/i;
        function externalCampaign(e) {
            isPageLoad(e) && (e[propName] || (e[propName] = e.getQueryParam(queryParam),
            e[propName].match(regexPattern) && setReferrer("http://" + e[propName].replace(regexPattern, ""))),
            e[propName] = e.getValOnce(e[propName], cookieName, 0))
        }
        module.exports = externalCampaign
    }
    , {
        "../helpers": 85
    }],
    96: [function(require, module, exports) {
        "use strict";
        var isPageLoad = require("../helpers").isPageLoad
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , trackingProp = "prop16"
          , trackingVar = "eVar16";
        function feedbackPage(a) {
            var e = get([dataLayerConfig.key, dataLayerConfig.keys.pageName]);
            isPageLoad && e.match(/feedback - thank you/) && (a[trackingProp] = a[trackingVar] = "feedback")
        }
        module.exports = feedbackPage
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    97: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , appendList = _require.appendList
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , parseFromDataAttribute = require("../../../helpers/parseFromDataAttribute")
          , _require2 = require("../helpers")
          , isOutgoingLink = _require2.isOutgoingLink
          , passiveTrackerInput = require("../../../passiveTracker");
        function handleLink(e) {
            !isPageLoad(e) && e.linkObject && "A" == e.linkObject.tagName && (cancelFalseExitLink(e),
            specialExitLink(e),
            exitLinkAttribute(e),
            shoppingBag(e),
            passiveLink(e))
        }
        function cancelFalseExitLink(e) {
            "e" !== e.linkType || isOutgoingLink(e) || (e.linkURL = "",
            e.linkType = "")
        }
        function specialExitLink(e) {
            e.linkHandler(get([dataLayerConfig.key, dataLayerConfig.keys.specialExitLinks]), "e")
        }
        function exitLinkAttribute(e) {
            "e" !== e.linkType && "d" !== e.linkType && e.linkObject.hasAttribute("data-analytics-exit-link") && "false" !== e.linkObject.getAttribute("data-analytics-exit-link") && (e.linkType = "e",
            e.linkName = e.linkObject.getAttribute("data-analytics-exit-link"))
        }
        function shoppingBag(e) {
            if (e.linkObject.classList.contains("ac-gn-link-bag") || e.linkObject.classList.contains("globalnav-link-bag")) {
                var a = get([dataLayerConfig.key, dataLayerConfig.keys.pageName])
                  , i = e.linkObject.dataset.analyticsTitle;
                e.linkName = "".concat(a, " - bag"),
                e.prop3 = i,
                e.linkType = "o",
                e.bodyClickTarget = e.linkObject,
                set([dataLayerConfig.key, dataLayerConfig.keys.clickTimerLinkInteraction], !0),
                e.eVar1 = "".concat(e.pageName, " | global nav | ").concat(i),
                appendList(e, "linkTrackVars", ["eVar1", "prop3"]),
                e.bodyClickFunction = function(e) {
                    e.M = 0,
                    e.linkTrackVars = "",
                    e.eVar1 = "",
                    e.prop3 = ""
                }
                .bind(null, e)
            }
        }
        function passiveLink(e) {
            var a = e.linkObject.getAttribute("data-analytics-passive-link");
            if (a) {
                var i = parseFromDataAttribute(a);
                i && passiveTrackerInput(i)
            }
        }
        module.exports = handleLink
    }
    , {
        "../../../constants": 121,
        "../../../helpers/parseFromDataAttribute": 141,
        "../../../passiveTracker": 159,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    98: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking
          , isMicroEvent = _require.isMicroEvent
          , appendList = _require.appendList
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , propName = "hier1";
        function hierarchy1(e) {
            isTracking(e) && (e[propName] = get([dataLayerConfig.key, dataLayerConfig.keys.computedChannel]) || "",
            e[propName] && isMicroEvent(e) && appendList(e, "linkTrackVars", propName))
        }
        module.exports = hierarchy1
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    99: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , AppMeasurementSetup = require("@marcom/appmeasurement-setup/src/appmeasurement-setup/AppMeasurementSetup")
          , propName = "eVar7"
          , cookieName = "s_var_7"
          , queryParam = "aid";
        function internalCampaign(e) {
            isPageLoad(e) && (e[propName] || (e[propName] = e.getQueryParam(queryParam)),
            e[propName] = e.getValOnce(e[propName], cookieName, 0))
        }
        module.exports = internalCampaign
    }
    , {
        "../helpers": 85,
        "@marcom/appmeasurement-setup/src/appmeasurement-setup/AppMeasurementSetup": 54
    }],
    100: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , appendList = _require.appendList
          , isMicroEvent = _require.isMicroEvent
          , isPageLoad = _require.isPageLoad
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , langLocaleProp = "eVar14";
        function langLocale(e) {
            if (isPageLoad(e)) {
                var a = get([dataLayerConfig.key, dataLayerConfig.keys.locale]);
                a || (a = "n/a"),
                e[langLocaleProp] = a
            } else
                isMicroEvent(e) && appendList(e, "linkTrackVars", langLocaleProp)
        }
        module.exports = langLocale
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    101: [function(require, module, exports) {
        "use strict";
        var passiveTracker = require("../../../passiveTracker")
          , get = require("@apple/analytics-data-layer").get
          , dataLayerKeys = require("../../../constants").dataLayer
          , confKey = dataLayerKeys.configuration.key
          , confKeys = dataLayerKeys.configuration.keys
          , linkInteraction = [confKey, confKeys.trackingStateLinkInteraction]
          , beacon = {
            events: "event500"
        };
        function linkMissingTitle(e) {
            get(linkInteraction) && (e.linkObject.getAttribute("data-analytics-title") || passiveTracker(beacon))
        }
        module.exports = linkMissingTitle
    }
    , {
        "../../../constants": 121,
        "../../../passiveTracker": 159,
        "@apple/analytics-data-layer": 4
    }],
    102: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking;
        function manageVars(e) {
            isTracking(e) && e.manageVars("lowercaseVars", "purchaseID,pageType,events,products,transactionID", 2)
        }
        module.exports = manageVars
    }
    , {
        "../helpers": 85
    }],
    103: [function(require, module, exports) {
        "use strict";
        var passiveTrackerLoader = require("@apple/analytics-bp-passive-tracker-loader").passiveTrackerLoader
          , _require = require("@apple/analytics-omniture-collection")
          , parseEventCollectionString = _require.parseEventCollectionString
          , _require2 = require("../helpers")
          , isTracking = _require2.isTracking
          , isPageLoad = _require2.isPageLoad;
        function track(e) {
            if (isTracking(e)) {
                var r = {
                    beacon: e
                };
                isPageLoad(e) ? (r.type = "pageLoad",
                r.beacon.events && "string" == typeof r.beacon.events && (r.beacon.events = parseEventCollectionString(r.beacon.events))) : r.type = "userInteraction",
                passiveTrackerLoader(r)
            }
        }
        module.exports = track
    }
    , {
        "../helpers": 85,
        "@apple/analytics-bp-passive-tracker-loader": 2,
        "@apple/analytics-omniture-collection": 7
    }],
    104: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking
          , isMicroEvent = _require.isMicroEvent
          , appendList = _require.appendList
          , propName = "eVar4";
        function pageName(e) {
            isTracking(e) && (e[propName] = "D=pageName",
            isMicroEvent(e) && appendList(e, "linkTrackVars", propName))
        }
        module.exports = pageName
    }
    , {
        "../helpers": 85
    }],
    105: [function(require, module, exports) {
        "use strict";
        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function _unsupportedIterableToArray(e, r) {
            if (e) {
                if ("string" == typeof e)
                    return _arrayLikeToArray(e, r);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(e, r) : void 0
            }
        }
        function _iterableToArray(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        function _arrayWithoutHoles(e) {
            if (Array.isArray(e))
                return _arrayLikeToArray(e)
        }
        function _arrayLikeToArray(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var a = 0, t = new Array(r); a < r; a++)
                t[a] = e[a];
            return t
        }
        var am, _require = require("@apple/analytics-omniture-collection"), parseEventCollectionString = _require.parseEventCollectionString, _require2 = require("@apple/analytics-merge-beacons"), merge = _require2.merge, _require3 = require("../helpers"), isMicroEvent = _require3.isMicroEvent, isExitLink = _require3.isExitLink, filterBeaconsByType = require("../../../helpers/filterBeaconsByType"), getPassiveTrackerData = require("../../../helpers/getPassiveTrackerData"), mergePassiveTrackerData = require("../../../helpers/mergePassiveTrackerData"), remove = require("@apple/analytics-data-layer").remove, passiveTrackerPath = require("../../../constants").dataLayer.paths.passiveTracker;
        function track(e) {
            var r;
            if (isMicroEvent(am = e) && isStorageAvailable("sessionStorage") && (r = getPassiveTrackerData())) {
                var a = trackingType();
                (r = filterBeaconsByType(r, a)).length && (r = mergePassiveTrackerData(r)) && prepareAppMeasurement(r)
            }
        }
        function trackingType() {
            if (isMicroEvent(am))
                return isExitLink(am) ? "exit" : "micro-event"
        }
        function prepareAppMeasurement(e) {
            setEventsData(e),
            setVarData(e),
            remove(passiveTrackerPath)
        }
        function setEventsData(e) {
            if (e.events) {
                var r = {
                    events: parseEventCollectionString(e.events)
                }
                  , a = {};
                am.events ? a.events = parseEventCollectionString(am.events) : a.events = {};
                var t = merge({
                    target: a,
                    source: r
                });
                am.linkTrackEvents = _toConsumableArray(t.events.keys()).join(","),
                am.events = t.events.toString(),
                am.linkTrackVars = am.apl(am.linkTrackVars, "events", ",", 1),
                delete e.events
            }
        }
        function setVarData(e) {
            0 !== Object.keys(e) && Object.keys(e).forEach(function(r) {
                am[r] = e[r],
                isMicroEvent(am) && (am.linkTrackVars = am.apl(am.linkTrackVars, r, ",", 1))
            })
        }
        function isStorageAvailable(e) {
            try {
                var r = window[e]
                  , a = "acAnalyticsStorageTestItem";
                return r.setItem(a, "a"),
                r.removeItem(a),
                !0
            } catch (e) {
                return !1
            }
        }
        module.exports = track
    }
    , {
        "../../../constants": 121,
        "../../../helpers/filterBeaconsByType": 129,
        "../../../helpers/getPassiveTrackerData": 132,
        "../../../helpers/mergePassiveTrackerData": 139,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-merge-beacons": 6,
        "@apple/analytics-omniture-collection": 7
    }],
    106: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad;
        function percentPageViewed(e) {
            var r;
            isPageLoad(e) && (e.prop17 || ("function" == typeof e.getPercentPageViewed && (r = e.getPercentPageViewed()),
            r && r.length >= 4 && void 0 !== r[1] && (e.prop17 = r[1] + ":" + r[2],
            e.prop28 = 10 * Math.round(r[3] / 10))))
        }
        module.exports = percentPageViewed
    }
    , {
        "../helpers": 85
    }],
    107: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , isMicroEvent = _require.isMicroEvent
          , isTracking = _require.isTracking
          , appendList = _require.appendList
          , getReferrer = _require.getReferrer
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../../constants").dataLayer.configuration
          , currentUrlProp = "eVar54"
          , secondCurrentUrlProp = "prop4"
          , referrerProp = "eVar49"
          , currentUrlDynamicVariable = "D=g"
          , referrerDynamicVariable = "D=r";
        function referrerAndCurrentUrl(r) {
            if (isTracking(r)) {
                var e = getReferrer();
                if (isPageLoad(r)) {
                    var a = get([dataLayerConfig.key, dataLayerConfig.keys.pageURL]);
                    r.pageURL = a,
                    r[currentUrlProp] = currentUrlDynamicVariable;
                    var i, n = get([dataLayerConfig.key, dataLayerConfig.keys.pageURLNoQueryString]);
                    i = a === n ? currentUrlDynamicVariable : n,
                    r[secondCurrentUrlProp] = i,
                    e && (r.referrer = e,
                    r[referrerProp] = referrerDynamicVariable)
                }
                isMicroEvent(r) && (e && (r[referrerProp] = e),
                appendList(r, "linkTrackVars", [currentUrlProp, referrerProp]))
            }
        }
        module.exports = referrerAndCurrentUrl
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    108: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , setReferrer = _require.setReferrer
          , queryParam = "ref";
        function referrerQueryParam(e) {
            if (isPageLoad(e)) {
                var r = e.getQueryParam(queryParam);
                r && setReferrer(r)
            }
        }
        module.exports = referrerQueryParam
    }
    , {
        "../helpers": 85
    }],
    109: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking;
        function removeSpacesInLinkTrackVars(r) {
            isTracking(r) && r.linkTrackVars && (r.linkTrackVars = r.linkTrackVars.replace(new RegExp(" ","g"), ""))
        }
        module.exports = removeSpacesInLinkTrackVars
    }
    , {
        "../helpers": 85
    }],
    110: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isPageLoad = _require.isPageLoad
          , appendList = _require.appendList
          , eventName = "event37";
        function retailCookies(e) {
            isPageLoad(e) && ((e.Util.cookieRead("rtsid") || e.Util.cookieRead("rtsidInt")) && appendList(e, "events", eventName))
        }
        module.exports = retailCookies
    }
    , {
        "../helpers": 85
    }],
    111: [function(require, module, exports) {
        "use strict";
        function setTcallToFalse(l) {
            l.tcall = !1
        }
        module.exports = setTcallToFalse
    }
    , {}],
    112: [function(require, module, exports) {
        "use strict";
        var appendList = require("../helpers").appendList
          , trackingProp = "prop16"
          , trackingVar = "eVar16";
        function specialRssLinks(s) {
            s.linkHandler("rss~rss.support.apple.com"),
            s.linkURL && s.linkURL.includes("/ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/") && s.linkType && "e" === s.linkType && (s.linkName = "rss"),
            "rss" === s.linkName && (s[trackingVar] = s[trackingProp] = "sign ups",
            appendList(s, "linkTrackVars", [trackingVar, trackingProp]))
        }
        module.exports = specialRssLinks
    }
    , {
        "../helpers": 85
    }],
    113: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isTracking = _require.isTracking
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , dataLayerKeys = require("../../../constants").dataLayer
          , confKey = dataLayerKeys.configuration.key
          , confKeys = dataLayerKeys.configuration.keys
          , linkInteraction = [confKey, confKeys.trackingStateLinkInteraction];
        function begin(e) {
            isTracking(e) || e.linkObject && set(linkInteraction, !0)
        }
        function end(e) {
            isTracking(e) || set(linkInteraction, !1)
        }
        module.exports = {
            begin: begin,
            end: end
        }
    }
    , {
        "../../../constants": 121,
        "../helpers": 85,
        "@apple/analytics-data-layer": 4
    }],
    114: [function(require, module, exports) {
        "use strict";
        var _require = require("../helpers")
          , isMicroEvent = _require.isMicroEvent
          , isTracking = _require.isTracking
          , appendList = _require.appendList
          , cookieName = "as_cn"
          , eventName = "event209";
        function userSignInStatus(e) {
            isTracking(e) && e.Util.cookieRead(cookieName) && (appendList(e, "events", eventName),
            isMicroEvent(e) && (appendList(e, "linkTrackEvents", eventName),
            appendList(e, "linkTrackVars", "events")))
        }
        module.exports = userSignInStatus
    }
    , {
        "../helpers": 85
    }],
    115: [function(require, module, exports) {
        "use strict";
        var t = require("./t")
          , tl = require("./tl");
        module.exports = {
            t: t,
            tl: tl
        }
    }
    , {
        "./t": 116,
        "./tl": 117
    }],
    116: [function(require, module, exports) {
        "use strict";
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function submit(t, o, e) {
            "object" === _typeof(e) && "function" == typeof e.t && (e.tcall = !0,
            e.t())
        }
        module.exports = submit
    }
    , {}],
    117: [function(require, module, exports) {
        "use strict";
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var errorHandler = require("../../ErrorHandler")
          , moduleName = "appMeasurementPluginSubmitMethodtl"
          , DOMHelper = require("../../helpers/DOM");
        function submit(t, e, r) {
            var n, o;
            if ("object" === _typeof(r) && "function" == typeof r.tl) {
                if ("object" !== _typeof(t.beacon) && errorHandler.log(moduleName, "submit", "trackingData param data (".concat(t.beacon, ") is not an object")),
                "string" != typeof t.beacon.title && errorHandler.log(moduleName, "submit", "trackingData param title (".concat(t.beacon.title, ") is not a string")),
                errorHandler.exception)
                    return;
                t.linkTrackVars && t.linkTrackVars.length > 0 && (r.linkTrackVars = t.linkTrackVars.join(",")),
                n = t.beacon.linkType || "o",
                o = _targetEl(t.data.targetEl),
                r.forcedLinkTrackingTimeout = _forcedLinkTrackingTimeout(t),
                t.options.useBeacon && (r.useBeacon = !0),
                r.tl(o, n, t.beacon.title),
                _clearTrackingData(r)
            }
        }
        function _clearTrackingData(t) {
            t.linkTrackVars = "",
            t.linkTrackEvents = ""
        }
        function _forcedLinkTrackingTimeout(t) {
            var e = 0
              , r = t.data.targetEl;
            return (t.type && "link" === t.type || "click" === t.type) && !0 === _isOutgoingLink(r) && (e = 500),
            e
        }
        function _targetEl(t) {
            return !0 !== _isOutgoingLink(t) || t
        }
        function _isOutgoingLink(t) {
            return !!t && !0 !== DOMHelper.isIntraPageLink(t)
        }
        module.exports = submit
    }
    , {
        "../../ErrorHandler": 118,
        "../../helpers/DOM": 123
    }],
    118: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function _createClass(e, r, t) {
            return r && _defineProperties(e.prototype, r),
            t && _defineProperties(e, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var _log = require("@marcom/ac-console/log")
          , trace = require("@marcom/ac-console/trace")
          , messagePrefix = "Analytics"
          , ErrorHandler = function() {
            function e() {
                _classCallCheck(this, e),
                this.exception = !1,
                this.errors = []
            }
            return _createClass(e, [{
                key: "log",
                value: function(e, r, t) {
                    var a = this._formatMessage(e, r, t);
                    this.exception = !0,
                    this.errors.push({
                        instance: e,
                        method: r,
                        message: a
                    }),
                    _log(a),
                    trace()
                }
            }, {
                key: "warn",
                value: function(e, r, t) {
                    var a = this._formatMessage(e, r, t);
                    _log(a),
                    trace()
                }
            }, {
                key: "report",
                value: function(e) {
                    var r = "";
                    return "number" == typeof e && this.errors[e] ? (r = this.errors[e].message,
                    _log(this.errors[e].message)) : (this.errors.forEach(function(e) {
                        r += "".concat(e.message, " '\r\n")
                    }),
                    _log(r)),
                    r
                }
            }, {
                key: "_formatMessage",
                value: function(e, r, t) {
                    var a = "";
                    return (e || r) && (a = (e || "") + (e && r ? "." : "") + (r || "") + " : "),
                    messagePrefix + " : " + a + t
                }
            }, {
                key: "bailed",
                value: function() {
                    return this.errors.length > 0
                }
            }]),
            e
        }();
        module.exports = new ErrorHandler
    }
    , {
        "@marcom/ac-console/log": 15,
        "@marcom/ac-console/trace": 16
    }],
    119: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var a = 0; a < r.length; a++) {
                var t = r[a];
                t.enumerable = t.enumerable || !1,
                t.configurable = !0,
                "value"in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t)
            }
        }
        function _createClass(e, r, a) {
            return r && _defineProperties(e.prototype, r),
            a && _defineProperties(e, a),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var jsonEncoder = require("@apple/analytics-utils").jsonEncoder
          , errorHandler = require("./ErrorHandler")
          , queueDataLayerKey = require("./constants").dataLayer.paths.queue
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , remove = require("@apple/analytics-data-layer").remove
          , isStorageAvailable = require("./helpers/isStorageAvailable")
          , Queue = function() {
            function e() {
                _classCallCheck(this, e),
                this._arr = [],
                this._length = 0
            }
            return _createClass(e, [{
                key: "add",
                value: function(e) {
                    e || errorHandler.log("Queue", "add", e + " is not a valid object"),
                    errorHandler.exception || (this._arr.push(e),
                    this._updateQueueSize())
                }
            }, {
                key: "remove",
                value: function() {
                    this.size() > 0 && (this._arr.shift(),
                    this._updateQueueSize())
                }
            }, {
                key: "reset",
                value: function() {
                    this._arr = [],
                    this._length = 0
                }
            }, {
                key: "peek",
                value: function() {
                    if (this.size() > 0)
                        return this._arr[0]
                }
            }, {
                key: "isEmpty",
                value: function() {
                    return 0 === this.size()
                }
            }, {
                key: "size",
                value: function() {
                    return this._length
                }
            }, {
                key: "load",
                value: function() {
                    var e = get(queueDataLayerKey);
                    (e = jsonEncoder.decode(e)) && e && Array.isArray(e) && (this._arr = e,
                    remove(queueDataLayerKey),
                    this._updateQueueSize())
                }
            }, {
                key: "save",
                value: function() {
                    set(queueDataLayerKey, jsonEncoder.encode(this._arr)),
                    this.reset()
                }
            }, {
                key: "collect",
                value: function() {
                    var e = this._arr
                      , r = jsonEncoder.decode(get(queueDataLayerKey));
                    Array.isArray(r) && (e = r.concat(e)),
                    set(queueDataLayerKey, jsonEncoder.encode(e)),
                    this.reset()
                }
            }, {
                key: "canSave",
                value: function() {
                    return isStorageAvailable()
                }
            }, {
                key: "_updateQueueSize",
                value: function() {
                    this._length = this._arr.length
                }
            }]),
            e
        }();
        module.exports = Queue
    }
    , {
        "./ErrorHandler": 118,
        "./constants": 121,
        "./helpers/isStorageAvailable": 137,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-utils": 12
    }],
    120: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var Queue = require("./Queue")
          , AppMeasurement = require("./Appmeasurement/AppMeasurement")
          , passiveTracker = require("./passiveTracker")
          , errorHandler = require("./ErrorHandler")
          , moduleName = "Tracker"
          , templateVarHelper = require("./helpers/templateVar")
          , isEmptyObj = require("./helpers/isEmptyObj")
          , trackerRegistry = require("./trackers/TrackerRegistry")
          , mergeIntoDeferredBeacon = require("./helpers/mergeIntoDeferredBeacon");
        trackerRegistry.registerAllTrackers();
        var Tracker = function() {
            function e() {
                _classCallCheck(this, e),
                this.AppMeasurement = new AppMeasurement,
                this.paused = !1,
                this._queue = new Queue,
                this.trackGeneric = this.trackGeneric.bind(this),
                this.resume()
            }
            return _createClass(e, [{
                key: "track",
                value: function(e) {
                    if (e && "object" === _typeof(e) && e.type || errorHandler.log(moduleName, "track", e + " is not a valid request object"),
                    !errorHandler.exception) {
                        var t = templateVarHelper.set();
                        if ("page" === e.type ? (e.submitMethod = "t",
                        e.beacon = JSON.parse(JSON.stringify(e.data))) : (e.submitMethod = "tl",
                        e.beacon = {}),
                        trackerRegistry.processBeaconByType(e.type, e),
                        !isEmptyObj(e.beacon)) {
                            for (var r in e.beacon)
                                "string" == typeof e.beacon[r] && (e.beacon[r] = templateVarHelper.translate(e.beacon[r], t));
                            return e.options.deferred ? (e.beacon.title && delete e.beacon.title,
                            void mergeIntoDeferredBeacon(e.beacon)) : e.options.usePassiveTracker ? (delete e.beacon.title,
                            void passiveTracker(e.beacon)) : void (!0 !== e.options.silent && (this._queue.add(e),
                            !0 !== this.paused ? this._run() : this._queue.collect()))
                        }
                    }
                }
            }, {
                key: "isPaused",
                value: function() {
                    return this.paused
                }
            }, {
                key: "resume",
                value: function() {
                    this._queue.load(),
                    0 !== this._queue.size() && (this.paused = !1,
                    this._run())
                }
            }, {
                key: "_run",
                value: function() {
                    if (0 !== this._queue.size()) {
                        var e = this._queue.peek().options || {};
                        void 0 === e.async && (e.async = !0),
                        (!1 === e.async ? this.sync(this.send.bind(this)) : this.async(this.send.bind(this))).then(function() {
                            !this.paused && this._queue.size() > 0 && this._run()
                        }
                        .bind(this))
                    }
                }
            }, {
                key: "send",
                value: function() {
                    if ("function" != typeof this.AppMeasurement.submit && errorHandler.log(moduleName, "send", "provided plugin does not contain a valid submit method"),
                    !errorHandler.exception && 0 !== this._queue.size()) {
                        var e = this._queue.peek();
                        this.AppMeasurement.submit(e),
                        this._queue.remove()
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    !0 !== this.paused && this.canPause() && (this._queue.size() > 0 && this._queue.save(),
                    this.paused = !0)
                }
            }, {
                key: "canPause",
                value: function() {
                    return this._queue.canSave()
                }
            }, {
                key: "async",
                value: function(e) {
                    if (e && "function" == typeof e || errorHandler.log(moduleName, "async", 'Provided callback "' + e + '" is not a function'),
                    !errorHandler.exception)
                        return new Promise(function(t) {
                            setTimeout(function() {
                                e(),
                                t()
                            }, 0)
                        }
                        )
                }
            }, {
                key: "sync",
                value: function(e) {
                    if (e && "function" == typeof e || errorHandler.log(moduleName, "sync", 'Provided callback "' + e + '" is not a function'),
                    !errorHandler.exception)
                        return new Promise(function(t) {
                            e(),
                            t()
                        }
                        )
                }
            }, {
                key: "trackGeneric",
                value: function(e, t) {
                    var r = {
                        data: e,
                        type: "custom",
                        options: t || {}
                    };
                    this.track(r)
                }
            }]),
            e
        }();
        module.exports = new Tracker
    }
    , {
        "./Appmeasurement/AppMeasurement": 71,
        "./ErrorHandler": 118,
        "./Queue": 119,
        "./helpers/isEmptyObj": 133,
        "./helpers/mergeIntoDeferredBeacon": 138,
        "./helpers/templateVar": 145,
        "./passiveTracker": 159,
        "./trackers/TrackerRegistry": 160
    }],
    121: [function(require, module, exports) {
        "use strict";
        var dataLayerKeys = require("@apple/analytics-data-layer").KEYS
          , constants = {
            acAnalyticsVersion: "2.19.0",
            sessionStorage: "sessionStorage",
            primaryDomain: "apple.com",
            domainRegex: /apple.com.cn$/,
            performanceTimingEvents: "event220,event221,event222,event223,event224,event225,event226,event227,event228,event229,event230,event231,event232",
            dataLayer: {
                meta: {
                    key: dataLayerKeys.METADATA,
                    keys: {
                        "s-bucket-0": "s-bucket-0",
                        "s-bucket-1": "s-bucket-1",
                        "s-bucket-2": "s-bucket-2",
                        "s-campaign": "s-campaign",
                        "s-channel": "s-channel",
                        "s-page-tracking-data": "s-page-tracking-data",
                        track: "track"
                    },
                    selector: 'meta[property^="analytics-"]',
                    keyAttribute: "property",
                    valueAttribute: "content",
                    keyPrefix: "analytics-"
                },
                paths: {
                    deferred: [dataLayerKeys.PERSISTED, dataLayerKeys.DEFERRED_BEACON],
                    passiveTracker: ["passiveTracker"],
                    queue: [dataLayerKeys.PERSISTED, "acAnalyticsQueue"],
                    performancePage: [dataLayerKeys.SESSION_STORE, "performanceTimingPage"],
                    performanceAssets: [dataLayerKeys.SESSION_STORE, "performanceTimingAssets"]
                },
                deferred: {
                    key: dataLayerKeys.DEFERRED_BEACON
                },
                pageDataModel: {
                    key: dataLayerKeys.PAGE_DATA_MODEL,
                    selector: "script#metrics"
                },
                persisted: {
                    key: dataLayerKeys.PERSISTED
                },
                sessionStore: {
                    key: dataLayerKeys.SESSION_STORE
                },
                configuration: {
                    key: "conf",
                    optionsKey: "conf.options",
                    keys: {
                        acAnalyticsVersion: "acAnalyticsVersion",
                        bucket: "bucket",
                        bucket0: "bucket0",
                        bucket1: "bucket1",
                        bucket2: "bucket2",
                        bucketstore: "bucketstore",
                        campaign: "campaign",
                        channel: "channel",
                        clickTimerCount: "clickTimerCount",
                        clickTimerLinkInteraction: "clickTimerLinkInteraction",
                        computedCampaign: "computedCampaign",
                        computedChannel: "computedChannel",
                        computedPageName: "computedPageName",
                        computedProductName: "computedProductName",
                        cookieLifetime: "cookieLifetime",
                        countryBuckets: "countryBuckets",
                        countryCodeFilter: "countryCodeFilter",
                        currencyCode: "currencyCode",
                        initialTimeStamp: "initialTimeStamp",
                        legacyCountryCode: "legacyCountryCode",
                        linkDownloadFileTypes: "linkDownloadFileTypes",
                        loadTiming: "loadTiming",
                        locale: "locale",
                        pageName: "pageName",
                        pageTrackingData: "pageTrackingData",
                        pageType: "pageType",
                        pageURL: "pageURL",
                        pageURLNoQueryString: "pageURLNoQueryString",
                        platform: "platform",
                        productName: "productName",
                        queryString: "queryString",
                        referrer: "referrer",
                        searchTerm: "searchTerm",
                        specialExitLinks: "specialExitLinks",
                        subdomains: "subdomains",
                        subdomainSupportedDomains: "subdomainSupportedDomains",
                        track: "track",
                        trackingDomain: "trackingDomain",
                        trackingServer: "trackingServer",
                        trackingServerSecure: "trackingServerSecure",
                        trackingStateLinkInteraction: "trackingStateLinkInteraction"
                    }
                }
            },
            countryBuckets: ["us", "au|ca|cn|de|es|fr|it|jp|uk", "ap|at|bf|bl|br|ce|cr|dk|fi|hk|ie|in|kr|la|mx|nl|no|nz|pl|pt|ru|se|sg|th|tw|za"],
            subdomains: ["www", "images", "movies", "ssl", "search", "smb", "nova", "experience", "partner-relay"],
            supportedSubdomains: ["apple.com", "apple.com.cn"],
            cookieLifetime: "1800",
            linkDownloadFileTypes: ["ical", "ics", "zip", "wav", "mp3", "doc", "pdf", "xls", "dmg", "sit", "pkg", "exe", "m4a", "rss", "xml", "extz", "safariextz", "ibooks", "epub", "pages", "numbers", "key", "xlsx", "pptx", "docx", "psd", "aif"],
            regexp: {
                curlyBracePattern: new RegExp(/[{|}]/g),
                storeUrlPattern: new RegExp(/^(https?:\/\/.*\.apple\.com)?(\/[a-z\-_0-9]*)?\/shop(\/.*)?$/i),
                tokenPattern: new RegExp(/(\{[a-zA-Z][\w-]+?\})/g)
            }
        };
        module.exports = Object.freeze(constants)
    }
    , {
        "@apple/analytics-data-layer": 4
    }],
    122: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })),
                t.push.apply(t, n)
            }
            return t
        }
        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                    _defineProperty(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }
        function _defineProperty(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var regions = require("./trackers/regions/regions")
          , Tracker = require("./Tracker")
          , defaultOptions = {
            clearRegions: !0
        };
        function destroy() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (e = _objectSpread(_objectSpread({}, defaultOptions), e)).clearRegions && regions.clearRegions(),
            Tracker.AppMeasurement.destroy(e)
        }
        module.exports = destroy
    }
    , {
        "./Tracker": 120,
        "./trackers/regions/regions": 174
    }],
    123: [function(require, module, exports) {
        "use strict";
        var domNodes = require("@marcom/ac-dom-nodes")
          , errorHandler = require("../ErrorHandler")
          , storeUrlPattern = require("../constants").storeUrlPattern
          , moduleName = "appMeasurementPluginHelper-DOM";
        function isIntraPageLink(e) {
            var t;
            return !domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT) || (!e.href || ("#" === (t = e.getAttribute("href").trim()).charAt(0) || 0 === t.indexOf("javascript:") || 0 === t.indexOf("mailto:") || 0 === t.indexOf("tel:") || (!!(e.classList.contains("ac-gn-link-search") || e.classList.contains("ac-gn-link-bag") || e.classList.contains("globalnav-link-search") || e.classList.contains("globalnav-link-bag")) || !!(e.hasAttribute("data-analytics-intrapage-link") || e.hasAttribute("data-analytics-id") || e.hasAttribute("data-analytics-video-id")))))
        }
        function isStoreLink(e) {
            if ("string" != typeof e && errorHandler.log(moduleName, "isStoreLink", e + " is not a valid string"),
            !errorHandler.exception)
                return storeUrlPattern.test(e)
        }
        function getLinkHref(e) {
            return e.getAttribute("href") || ""
        }
        module.exports = {
            isIntraPageLink: isIntraPageLink,
            isStoreLink: isStoreLink,
            getLinkHref: getLinkHref
        }
    }
    , {
        "../ErrorHandler": 118,
        "../constants": 121,
        "@marcom/ac-dom-nodes": 22
    }],
    124: [function(require, module, exports) {
        "use strict";
        var utils = require("@apple/analytics-utils")
          , cookieJson = utils.cookieJson
          , beaconHelpers = utils.beaconHelpers
          , toStr = utils.toStr
          , cookieName = "mk_epub"
          , cookieOpts = {
            path: "/",
            domain: "apple.com",
            secure: !0
        };
        function getSharedCookie() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e = Object.assign({}, cookieOpts, e);
            var o = cookieJson.get(cookieName);
            return cookieJson.set(cookieName, null, e),
            o
        }
        function setSharedCookie(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o = Object.assign({}, cookieOpts, o),
            beaconHelpers.isNotEmpty(e) && cookieJson.set(cookieName, sanitizeBeacon(e), o)
        }
        function sanitizeBeacon(e) {
            return Object.keys(e).forEach(function(o) {
                var i = o.substring(0, 4)
                  , t = toStr(e[o]);
                "prop" === i ? e[o] = t.substring(0, 100) : "eVar" === i && (e[o] = t.substring(0, 250))
            }),
            e
        }
        function updateCookieOptions(e) {
            cookieOpts.domain = e
        }
        module.exports = {
            getSharedCookie: getSharedCookie,
            setSharedCookie: setSharedCookie,
            sanitizeBeacon: sanitizeBeacon,
            updateCookieOptions: updateCookieOptions
        }
    }
    , {
        "@apple/analytics-utils": 12
    }],
    125: [function(require, module, exports) {
        "use strict";
        var dataLayer = require("@apple/analytics-data-layer")
          , constants = require("../constants")
          , errorHandler = require("../ErrorHandler")
          , init = dataLayer.init
          , set = dataLayer.set;
        function refresh(e) {
            var t = constants.dataLayer.meta
              , a = t.key
              , r = t.selector
              , c = t.keyAttribute
              , s = t.keyPrefix
              , n = t.valueAttribute;
            if (init(constants.dataLayer),
            e.sourceData) {
                var o = e.sourceData["s-bucket-0"]
                  , u = e.sourceData["s-bucket-1"]
                  , i = e.sourceData["s-bucket-2"]
                  , l = e.sourceData["s-channel"]
                  , d = e.sourceData.track;
                return o && u && i && l && d ? set(a, e.sourceData) : void errorHandler.log("Missing page data passed - cannot initialize. |bucket0 - ".concat(o, "|bucket1 - ").concat(u, "|bucket2 - ").concat(i, "|channel - ").concat(l, "|track - ").concat(d))
            }
            for (var k = {}, y = document.querySelectorAll(r), b = 0; b < y.length; b++) {
                k[y[b].getAttribute(c).replace(s, "")] = y[b].getAttribute(n)
            }
            set(a, k)
        }
        module.exports = {
            refresh: refresh
        }
    }
    , {
        "../ErrorHandler": 118,
        "../constants": 121,
        "@apple/analytics-data-layer": 4
    }],
    126: [function(require, module, exports) {
        "use strict";
        var errorHandler = require("../ErrorHandler")
          , moduleName = "dataAttributeHelper"
          , methodName = "dataStringToObject";
        function dataStringToObject(r) {
            if (!r)
                return errorHandler.log(moduleName, methodName, "`str` must not be falsey"),
                {};
            if ("string" != typeof r || 0 === r.length)
                return errorHandler.log(moduleName, methodName, "`str` must contain a value and be of type string"),
                {};
            var e, t, a;
            try {
                e = JSON.parse(r)
            } catch (r) {}
            if (e)
                return e;
            var o = {};
            t = r.split(",");
            for (var n = 0; n < t.length; n++)
                o[(a = t[n].split(":"))[0].trim()] = a[1] ? a[1].trim() : a[1];
            return o
        }
        module.exports = dataStringToObject
    }
    , {
        "../ErrorHandler": 118
    }],
    127: [function(require, module, exports) {
        "use strict";
        var isEmptyString = require("./isEmptyString")
          , eventListeners = {}
          , keyIncrementor = 0
          , dynamicEventBinder = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = e.parentSelector
              , t = e.eventType
              , r = e.childSelector
              , i = e.callback
              , s = e.exactMatch;
            if (!("function" != typeof i || isEmptyString(n) || isEmptyString(t) || isEmptyString(r)) || n === window) {
                if (n === window) {
                    var o = window
                      , v = function(e) {
                        i(e)
                    };
                    return eventListeners[++keyIncrementor] = {
                        node: o,
                        type: t,
                        handler: v
                    },
                    void o.addEventListener(t, v)
                }
                document.querySelectorAll(n).forEach(function(e) {
                    var n = function(n) {
                        var t = n.target;
                        if (s)
                            t.matches(r) && (n.dynamicEventBinderTarget = t);
                        else {
                            var o = t.closest(r);
                            e.contains(o) && (n.dynamicEventBinderTarget = o,
                            i(n))
                        }
                    };
                    eventListeners[++keyIncrementor] = {
                        node: e,
                        type: t,
                        handler: n
                    },
                    e.addEventListener(t, n)
                })
            }
        };
        function removeListener(e) {
            eventListeners[e].node.removeEventListener(eventListeners[e].type, eventListeners[e].handler),
            delete eventListeners[e]
        }
        function removeListeners() {
            eventListeners && (Object.keys(eventListeners).forEach(function(e) {
                removeListener(e)
            }),
            eventListeners = {})
        }
        module.exports = {
            dynamicEventBinder: dynamicEventBinder,
            removeListeners: removeListeners
        }
    }
    , {
        "./isEmptyString": 134
    }],
    128: [function(require, module, exports) {
        "use strict";
        function eventsToString(t) {
            return t && "string" !== t && t.toString ? t.toString() : t
        }
        module.exports = eventsToString
    }
    , {}],
    129: [function(require, module, exports) {
        "use strict";
        function filterBeaconsByType(t, e) {
            var r;
            switch (e) {
            case "page":
                r = filterByPage;
                break;
            case "exit":
                r = filterByExit;
                break;
            case "micro-event":
                r = filterByMicroEvent;
                break;
            default:
                return
            }
            return t.filter(function(t) {
                var e = t.options;
                return r(e)
            })
        }
        function filterByPage(t) {
            return t.trackOnPageLoad || !t.trackOnExitLink
        }
        function filterByExit(t) {
            return t.trackOnExitLink || !t.trackOnPageLoad
        }
        function filterByMicroEvent(t) {
            return !t.trackOnPageLoad && !t.trackOnExitLink
        }
        module.exports = filterBeaconsByType
    }
    , {}],
    130: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var errorHandler = require("../ErrorHandler")
          , moduleName = "appMeasurementPluginFormatter"
          , separator = require("./separator");
        function productName(e) {
            return lowerCaseString(e)
        }
        function channel(e, r) {
            if (e || errorHandler.log(moduleName, "channel", "analytics-s-channel metadata tag must exist"),
            !errorHandler.exception) {
                e = e.toLowerCase().split(" ").join(".");
                var n = "www."
                  , t = {
                    "fr-ca": "ca.fr"
                };
                return (n += t[r] ? t[r] : legacyCountryCode(r)) + "." + e
            }
        }
        function pageName(e, r) {
            var n = ""
              , t = {
                "fr-ca": "ca-fr"
            }[r];
            return e = e || "",
            "string" == typeof r && (r = r.toLowerCase(),
            n = _decorateCountryCode(n = t || legacyCountryCode(r))),
            lowerCaseString(e) + n
        }
        function eventString(e, r) {
            return r = r || "",
            (e = e || "") ? e + "@" + r : r
        }
        function countryCodeFilter(e) {
            var r, n = {
                "fr-ca": "ca/fr",
                "en-419": "lae",
                "es-419": "la",
                "en-ap": "asia",
                "en-gb": "uk"
            };
            if (n[e])
                r = n[e];
            else if (["fr-be", "nl-be", "fr-ch", "de-ch"].indexOf(e) >= 0) {
                r = _transformLocale(e).reverse().join("-")
            } else
                r = _getCountryCodeFromLocale(e);
            return r
        }
        function legacyCountryCode(e) {
            var r = {
                "fr-be": "bf",
                "nl-be": "bl",
                "fr-ch": "cr",
                "de-ch": "ce",
                "en-419": "la",
                "es-419": "la",
                "en-gb": "uk"
            };
            return r[e] ? r[e] : _getCountryCodeFromLocale(e)
        }
        function cleanProps(e) {
            var r = {};
            if ("object" === _typeof(e))
                for (var n in e)
                    r[n] = _sanitize(e[n]);
            return r
        }
        function stringReplacer(e, r, n) {
            var t = e;
            return r = "string" == typeof r ? r : "",
            n = "string" == typeof n ? n : "",
            "string" == typeof t && (t = t.replace(new RegExp(r,"gi"), n)),
            t
        }
        function getRegionAncestry(e) {
            var r = "";
            return Array.isArray(e.regionAncestry) && e.regionAncestry.forEach(function(e) {
                r += e.name + separator.pipe
            }),
            r
        }
        function lowerCaseString(e) {
            return "string" == typeof e && (e = e.toLowerCase()),
            e
        }
        function _getCountryCodeFromLocale(e) {
            if (e || errorHandler.log(moduleName, "_getCountryCodeFromLocale", "locale should be a valid string"),
            !errorHandler.exception) {
                var r, n = _transformLocale(e);
                return n.length > 1 && (r = lowerCaseString(n[1])),
                r
            }
        }
        function _decorateCountryCode(e) {
            if (e || errorHandler.log(moduleName, "_decorateCountryCode", "countryCode should be a valid string"),
            !errorHandler.exception)
                return " (" + lowerCaseString(e) + ")"
        }
        var whitelist = /[ìîëí]/g;
        function _sanitize(e) {
            return "string" == typeof e && (e = e.replace(whitelist, "")),
            e
        }
        function _transformLocale(e) {
            return e.split(/[-_]/)
        }
        module.exports = {
            productName: productName,
            channel: channel,
            pageName: pageName,
            eventString: eventString,
            countryCodeFilter: countryCodeFilter,
            legacyCountryCode: legacyCountryCode,
            cleanProps: cleanProps,
            stringReplacer: stringReplacer,
            lowerCaseString: lowerCaseString,
            getRegionAncestry: getRegionAncestry
        }
    }
    , {
        "../ErrorHandler": 118,
        "./separator": 142
    }],
    131: [function(require, module, exports) {
        "use strict";
        var get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , constants = require("../constants")
          , specialExitLinkList = [{
            name: "deploy",
            url: "deploy.apple.com"
        }, {
            name: "ade",
            url: "ade.apple.com"
        }, {
            name: "appleteacher",
            url: "appleteacher.apple.com"
        }, {
            name: "ecommerce",
            url: "ecommerce.apple.com"
        }, {
            name: "school",
            url: "school.apple.com"
        }, {
            name: "help",
            url: "help.apple.com"
        }, {
            name: "survey",
            url: "survey.apple.com"
        }, {
            name: "itunespartner",
            url: "itunespartner.apple.com"
        }, {
            name: "investor",
            url: "investor.apple.com"
        }, {
            name: "consultants",
            url: "consultants.apple.com"
        }, {
            name: "itms",
            url: "itms.apple.com"
        }, {
            name: "artists",
            url: "artists.apple.com"
        }, {
            name: "itunes",
            url: "itunes.apple.com"
        }, {
            name: "tv",
            url: "tv.apple.com"
        }, {
            name: "contactretail",
            url: "contactretail.apple.com"
        }];
        function specialExitLinks() {
            var e = get([dataLayerConfig.key, dataLayerConfig.keys.trackingDomain]);
            e && e === constants.primaryDomain && specialExitLinkList.push({
                name: "apple.com.cn",
                url: "apple.com.cn"
            });
            var a = "";
            return specialExitLinkList.forEach(function(e) {
                a += e.name + "~" + e.url + "|"
            }),
            a = a.slice(0, -1)
        }
        module.exports = specialExitLinks
    }
    , {
        "../constants": 121,
        "@apple/analytics-data-layer": 4
    }],
    132: [function(require, module, exports) {
        "use strict";
        var get = require("@apple/analytics-data-layer").get
          , passiveTrackerPath = require("../constants").dataLayer.paths.passiveTracker;
        function getPassiveTrackerData() {
            var a = get(passiveTrackerPath);
            if (a)
                try {
                    return JSON.parse(a)
                } catch (a) {
                    return
                }
        }
        module.exports = getPassiveTrackerData
    }
    , {
        "../constants": 121,
        "@apple/analytics-data-layer": 4
    }],
    133: [function(require, module, exports) {
        "use strict";
        var isEmptyObj = function(t) {
            return 0 === Object.keys(t).length && t.constructor === Object
        };
        module.exports = isEmptyObj
    }
    , {}],
    134: [function(require, module, exports) {
        "use strict";
        var toStr = require("@apple/analytics-utils").toStr
          , isEmptyString = function(t) {
            return "" === toStr(t).trim()
        };
        module.exports = isEmptyString
    }
    , {
        "@apple/analytics-utils": 12
    }],
    135: [function(require, module, exports) {
        "use strict";
        function isFirstPageView() {
            return void 0 === window.sessionStorage.fpv && (window.sessionStorage.fpv = 0,
            !isAppleReferred())
        }
        function isAppleReferred() {
            return /\.apple\.com/.test(document.referrer)
        }
        module.exports = isFirstPageView
    }
    , {}],
    136: [function(require, module, exports) {
        "use strict";
        function isNumeric(i) {
            return !isNaN(i)
        }
        module.exports = isNumeric
    }
    , {}],
    137: [function(require, module, exports) {
        "use strict";
        function isStorageAvailable(e) {
            try {
                var t = window[e]
                  , a = "acAnalyticsStorageTestItem";
                return t.setItem(a, "a"),
                t.removeItem(a),
                !0
            } catch (e) {
                return !1
            }
        }
        module.exports = isStorageAvailable
    }
    , {}],
    138: [function(require, module, exports) {
        "use strict";
        var get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , deferredPath = require("../constants").dataLayer.paths.deferred
          , merge = require("@apple/analytics-merge-beacons").merge
          , biscuitTin = require("@apple/analytics-biscuit-tin")
          , _require = require("@apple/analytics-omniture-collection")
          , parseEventCollectionString = _require.parseEventCollectionString;
        function mergeIntoDeferredBeacon(e) {
            var t = get(deferredPath);
            if (t) {
                e.events = provideEventsString(e.events),
                t.events = provideEventsString(t.events);
                var r = merge({
                    target: {
                        events: parseEventCollectionString(t.events)
                    },
                    source: {
                        events: parseEventCollectionString(e.events)
                    }
                });
                "string" == typeof e.events && (e.events = r.events.toString()),
                e = merge({
                    target: t,
                    source: e
                })
            }
            set(deferredPath, e),
            biscuitTin.store()
        }
        function provideEventsString(e) {
            return e ? "string" == typeof e ? e : e.toString ? e.toString() : "" : ""
        }
        module.exports = mergeIntoDeferredBeacon
    }
    , {
        "../constants": 121,
        "@apple/analytics-biscuit-tin": 1,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-merge-beacons": 6,
        "@apple/analytics-omniture-collection": 7
    }],
    139: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                })),
                t.push.apply(t, n)
            }
            return t
        }
        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                    _defineProperty(e, r, t[r])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                })
            }
            return e
        }
        function _defineProperty(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t,
            e
        }
        var _require = require("@apple/analytics-omniture-collection")
          , parseEventCollectionString = _require.parseEventCollectionString;
        function mergePassiveTrackerData(e) {
            return e && (e.length > 1 ? (e.sort(function(e, r) {
                return r.options.priority - e.options.priority
            }),
            e = mergeData(e)) : e = e[0]),
            e
        }
        function mergeData(e) {
            return delete (e = e.reduce(function(e, r) {
                var t = mergeItem(e, r);
                if (e.events && r.events) {
                    var n = parseEventCollectionString(e.events);
                    n.merge(parseEventCollectionString(r.events)),
                    t.events = n.toString()
                }
                return t
            })).options,
            e
        }
        function mergeItem(e, r) {
            return _objectSpread(_objectSpread({}, e), r)
        }
        module.exports = mergePassiveTrackerData
    }
    , {
        "@apple/analytics-omniture-collection": 7
    }],
    140: [function(require, module, exports) {
        "use strict";
        function onDocumentReady(e) {
            "complete" === document.readyState ? e() : document.addEventListener("readystatechange", function t() {
                "complete" === document.readyState && (e(),
                document.removeEventListener("readystatechange", t))
            })
        }
        module.exports = onDocumentReady
    }
    , {}],
    141: [function(require, module, exports) {
        "use strict";
        var tokenReplacer = require("./tokens/tokenReplacer")
          , dataStringToObject = require("./dataStringToObject")
          , isNode = require("@marcom/ac-dom-nodes/isNode");
        function parseFromDataAttribute(e, t) {
            var r, a, o;
            return (r = tokenReplacer.parseTokens(e)) && 0 !== r.length ? (a = _getTokenValues(t, r),
            o = tokenReplacer.replace(e, a),
            dataStringToObject(o)) : dataStringToObject(e)
        }
        function _getTokenValues(e, t) {
            var r, a = {}, o = t.length, n = 0;
            if (isNode(e))
                for (n = 0; n < o; n++)
                    e.getAttribute(t[n]) && (r = e.getAttribute(t[n]),
                    a[t[n]] = r);
            return a
        }
        module.exports = parseFromDataAttribute
    }
    , {
        "./dataStringToObject": 126,
        "./tokens/tokenReplacer": 147,
        "@marcom/ac-dom-nodes/isNode": 29
    }],
    142: [function(require, module, exports) {
        "use strict";
        module.exports = {
            pipe: " | ",
            hyphen: " - ",
            colon: ": ",
            dot: ".",
            space: " "
        }
    }
    , {}],
    143: [function(require, module, exports) {
        "use strict";
        var DOMHelper = require("./DOM");
        function async(e) {
            var r = !0;
            return DOMHelper.isIntraPageLink(e.targetEl) || (r = !1),
            r
        }
        module.exports = {
            async: async
        }
    }
    , {
        "./DOM": 123
    }],
    144: [function(require, module, exports) {
        "use strict";
        function setProperty(t, e, o) {
            void 0 === t[e] && void 0 !== o && (t[e] = o)
        }
        module.exports = setProperty
    }
    , {}],
    145: [function(require, module, exports) {
        "use strict";
        var get = require("@apple/analytics-data-layer").get
          , formatter = require("./formatter")
          , dataLayerConfig = require("../constants").dataLayer.configuration;
        function set() {
            return [{
                name: "{PAGE_NAME}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.computedPageName])
            }, {
                name: "{PAGE_NAME_NO_LOCALE}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.pageName])
            }, {
                name: "{CHANNEL}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.channel])
            }, {
                name: "{CAMPAIGN}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.computedCampaign])
            }, {
                name: "{COUNTRY_CODE}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.legacyCountryCode])
            }, {
                name: "{COUNTRY_CODE_FILTER}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.countryCodeFilter])
            }, {
                name: "{PRODUCT_NAME}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.productName])
            }, {
                name: "{PLATFORM}",
                value: get([dataLayerConfig.key, dataLayerConfig.keys.platform])
            }]
        }
        function translate(e, a) {
            return "string" == typeof e && a.forEach(function(a) {
                a.name && "string" == typeof a.name && e.toLowerCase().indexOf(a.name.toLowerCase()) > -1 && (e = formatter.stringReplacer(e, a.name, a.value))
            }),
            e
        }
        module.exports = {
            set: set,
            translate: translate
        }
    }
    , {
        "../constants": 121,
        "./formatter": 130,
        "@apple/analytics-data-layer": 4
    }],
    146: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var moduleName = "TokenRegistry"
          , errorHandler = require("../../ErrorHandler")
          , TokenRegistry = function() {
            function e() {
                _classCallCheck(this, e),
                this.tokens = {},
                this._size = 0
            }
            return _createClass(e, [{
                key: "setToken",
                value: function(e, t) {
                    "string" != typeof e && errorHandler.log(moduleName, "setToken", "".concat(e, " is not a valid string")),
                    "string" != typeof t && errorHandler.log(moduleName, "setToken", "".concat(t, " is not a valid string")),
                    errorHandler.exception || (this.tokens[e] = t,
                    this._updateSize())
                }
            }, {
                key: "removeToken",
                value: function(e) {
                    "string" != typeof e && errorHandler.log(moduleName, "removeToken", e + " is not a valid string"),
                    this.tokens[e] || errorHandler.log(moduleName, "removeToken", e + " doesnt exist"),
                    errorHandler.exception || (delete this.tokens[e],
                    this._updateSize())
                }
            }, {
                key: "getToken",
                value: function(e) {
                    if ("string" != typeof e && errorHandler.log(moduleName, "getToken", e + " is not a valid string"),
                    !errorHandler.exception)
                        return this.tokens[e]
                }
            }, {
                key: "size",
                value: function() {
                    return this._size
                }
            }, {
                key: "clear",
                value: function() {
                    this.tokens = {},
                    this._size = 0
                }
            }, {
                key: "_updateSize",
                value: function() {
                    this._size = Object.keys(this.tokens).length
                }
            }]),
            e
        }();
        module.exports = new TokenRegistry
    }
    , {
        "../../ErrorHandler": 118
    }],
    147: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var n = r[t];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, r, t) {
            return r && _defineProperties(e.prototype, r),
            t && _defineProperties(e, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var moduleName = "TokenReplacer"
          , tokenPattern = require("../../constants").tokenPattern
          , curlysPattern = require("../../constants").curlysPattern
          , tokenRegistry = require("./Registry")
          , errorHandler = require("../../ErrorHandler")
          , TokenReplacer = function() {
            function e() {
                _classCallCheck(this, e),
                this.registry = tokenRegistry
            }
            return _createClass(e, [{
                key: "replace",
                value: function(e, r) {
                    if ("string" != typeof e && errorHandler.log(moduleName, "replace", e + " is not a valid string"),
                    !errorHandler.exception)
                        return "object" === _typeof(r) && (e = this._replace(e, r)),
                        this.registry.size() > 0 && (e = this._replace(e, this.registry.tokens)),
                        e
                }
            }, {
                key: "parseTokens",
                value: function(e) {
                    var r, t = this;
                    if ("string" != typeof e && errorHandler.log(moduleName, "parseTokens", e + " is not a valid string"),
                    !errorHandler.exception)
                        return (r = e.match(tokenPattern)) ? r.map(function(e) {
                            return t._removeCurlys(e)
                        }) : void 0
                }
            }, {
                key: "_replace",
                value: function(e, r) {
                    var t = this;
                    return e.replace(tokenPattern, function(e) {
                        return "string" == typeof r[t._removeCurlys(e)] ? r[t._removeCurlys(e)] : e
                    })
                }
            }, {
                key: "_removeCurlys",
                value: function(e) {
                    return (e = e.trim()).replace(curlysPattern, "")
                }
            }]),
            e
        }();
        module.exports = new TokenReplacer
    }
    , {
        "../../ErrorHandler": 118,
        "../../constants": 121,
        "./Registry": 146
    }],
    148: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                    _defineProperty(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var PageObserver = require("./observers/Page")
          , LinkObserver = require("./observers/Link")
          , ClickObserver = require("./observers/Click")
          , SectionObserver = require("./observers/Section")
          , ElementEngagementObserver = require("./observers/ElementEngagement")
          , onDocumentReady = require("./helpers/onDocumentReady")
          , AdobeTargetObserver = require("./observers/AdobeTarget")
          , isNode = require("@marcom/ac-dom-nodes").isNode
          , defaults = {
            onDOMContentLoadedOptions: {
                section: {
                    autoEnable: !1
                },
                globalNav: {
                    autoEnable: !1,
                    initListener: function() {
                        var e = document.querySelector("#globalnav");
                        e ? this.onEnableListenerCallback({
                            detail: {
                                target: e
                            }
                        }) : addEventListener("globalnav:mounted", this.onEnableListenerCallback.bind(this))
                    }
                }
            },
            onPageDataLoadedOptions: {
                page: {},
                click: {},
                link: {}
            },
            compatibilityMode: !1
        };
        function initialize(e) {
            e || (e = getSettings()),
            e && e.compatibilityMode && (e = setLegacySettings(e));
            var t = onPageDataLoaded((e = e ? _objectSpread(_objectSpread({}, defaults), e) : defaults).onPageDataLoadedOptions)
              , n = onDOMContentLoaded(e.onDOMContentLoadedOptions);
            return _objectSpread(_objectSpread({}, t), n)
        }
        function onPageDataLoaded(e) {
            return {
                page: new PageObserver(e.page),
                link: new LinkObserver(e.link),
                click: new ClickObserver(e.click),
                adobeTarget: new AdobeTargetObserver
            }
        }
        function onDOMContentLoaded(e) {
            var t = {
                section: new SectionObserver(e.section),
                globalNav: new ElementEngagementObserver(e.globalNav)
            };
            return onDocumentReady(function() {
                Object.keys(t).forEach(function(e) {
                    t[e].enable()
                })
            }),
            t
        }
        function getSettings() {
            if (window.acAnalyticsSettings)
                return isNode(window.acAnalyticsSettings) ? getSettingsFromDOM() : window.acAnalyticsSettings
        }
        function getSettingsFromDOM() {
            var e = document.getElementById("acAnalyticsSettings");
            if (e)
                try {
                    return JSON.parse(e.innerHTML)
                } catch (e) {}
        }
        function setLegacySettings(e) {
            var t = getLegacyPageName()
              , n = getLocale()
              , a = {
                "s-bucket-0": "applestoreww",
                "s-bucket-1": "applestoreww",
                "s-bucket-2": "applestoreww",
                "s-channel": getChannel(),
                track: t,
                locale: n
            };
            return e || (e = {}),
            e.onPageDataLoadedOptions || (e.onPageDataLoadedOptions = {}),
            e.onPageDataLoadedOptions.page || (e.onPageDataLoadedOptions.page = {}),
            e.onPageDataLoadedOptions.page.sourceData || (e.onPageDataLoadedOptions.page.sourceData = {}),
            e.onPageDataLoadedOptions.page.sourceData = _objectSpread(_objectSpread({}, a), e.onPageDataLoadedOptions.page.sourceData),
            e
        }
        function getLegacyPageName() {
            for (var e, t = document.getElementsByTagName("meta"), n = 0; e = t[n]; n++)
                if ("omni_page" === e.getAttribute("name"))
                    return e.getAttribute("content").toLowerCase();
            var a = document.title
              , o = window.location.hostname
              , r = window.location.pathname
              , i = a.toLowerCase();
            return /\s-\s/.test(i) && (i = i.replace(/\s*-?\s*(apple|アップル|애플컴퓨터코리아|蘋果|蘋果電腦|apple中国|苹果中国)\s+[^-]*-?\s*/, "")),
            r.match(/^\/(ws|pr|g5|go|ta|wm)\//) || (r = r.replace(/^\/(\w{2}|befr|benl|chfr|chde|asia|lae)(?=\/)/, "")),
            !(r.match(/\//g).length <= 2) || r.match(/support/) || o.match(/support/) || o.match(/selfsolve/) || !r.match(/index\.html/) && r.match(/\.html/) || (i += " - index"),
            /\/pr\//.test(r) && (i = "pr - " + i),
            i
        }
        function getLocale() {
            if (document && document.documentElement) {
                var e = document.documentElement.getAttribute("data-locale") || document.documentElement.lang;
                if (e)
                    return e;
                var t = document.getElementById("globalnav") || document.getElementById("ac-globalnav");
                if (t) {
                    var n = t.getAttribute("lang");
                    if (n)
                        return n
                }
                var a = document.getElementById("globalmessage-segment") || document.getElementById("ac-gn-segmentbar");
                if (a) {
                    var o = a.getAttribute("lang");
                    if (o)
                        return o
                }
                var r = document.getElementById("ac-globalfooter");
                if (r) {
                    var i = r.getAttribute("lang");
                    if (i)
                        return i
                }
                var c = document.querySelector('meta[property="og:locale"]');
                if (c) {
                    var s = c.getAttribute("content").split("_").join("-");
                    if (s)
                        return s
                }
            }
        }
        function getChannel() {
            var e;
            return window && window.location && window.location.pathname && (e = window.location.pathname.split("/")[1]),
            "" === e && (e = "root"),
            e
        }
        module.exports = initialize
    }
    , {
        "./helpers/onDocumentReady": 140,
        "./observers/AdobeTarget": 149,
        "./observers/Click": 150,
        "./observers/ElementEngagement": 151,
        "./observers/Link": 154,
        "./observers/Page": 155,
        "./observers/Section": 156,
        "@marcom/ac-dom-nodes": 22
    }],
    149: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var t = 0; t < r.length; t++) {
                var a = r[t];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function _createClass(e, r, t) {
            return r && _defineProperties(e.prototype, r),
            t && _defineProperties(e, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var Tracker = require("../Tracker")
          , observerRegistry = require("./observerRegistry")
          , isFirstPageView = require("../helpers/isFirstPageView")
          , merge = require("@apple/analytics-passive-tracker").merge
          , get = require("@apple/analytics-data-layer").get
          , passiveTrack = require("../passiveTracker")
          , AdobeTargetObserver = function() {
            function e() {
                _classCallCheck(this, e),
                this.observerType = "target",
                observerRegistry.add(this),
                this.tracker = Tracker,
                this.isEnabled = !0,
                this.isFirstPageView = isFirstPageView(),
                this.listenForTargetEvent()
            }
            return _createClass(e, [{
                key: "listenForTargetEvent",
                value: function() {
                    document.addEventListener("at-content-rendering-succeeded", this.track.bind(this)),
                    window.ac_target && window.ac_target.data && this.track()
                }
            }, {
                key: "track",
                value: function() {
                    var e = getTargetData()
                      , r = get("conf.pageName") ? get("conf.pageName") : "";
                    this.tracker && e && (this.isFirstPageView ? this.passivelyTrack(e, r) : this.tracker.trackGeneric({
                        title: "abtnnb",
                        eVar57: "".concat(e, ":").concat(r).toLowerCase()
                    }))
                }
            }, {
                key: "passivelyTrack",
                value: function(e, r) {
                    var t = {
                        eVar57: "".concat(e, ":").concat(r).toLowerCase()
                    };
                    merge("beacon", t),
                    passiveTrack(t)
                }
            }]),
            e
        }();
        function getTargetData() {
            if (window && window.ac_target) {
                var e = window.ac_target.data
                  , r = window.ac_target.tracked;
                if (e && !r)
                    return window.ac_target.tracked = !0,
                    e
            }
        }
        module.exports = AdobeTargetObserver
    }
    , {
        "../Tracker": 120,
        "../helpers/isFirstPageView": 135,
        "../passiveTracker": 159,
        "./observerRegistry": 158,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-passive-tracker": 9
    }],
    150: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && _setPrototypeOf(e, t)
        }
        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _createSuper(e) {
            var t = _isNativeReflectConstruct();
            return function() {
                var r, n = _getPrototypeOf(e);
                if (t) {
                    var o = _getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return _possibleConstructorReturn(this, r)
            }
        }
        function _possibleConstructorReturn(e, t) {
            if (t && ("object" === _typeof(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(e)
        }
        function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ancestor = require("@marcom/dom-traversal/ancestor")
          , acDomNodes = require("@marcom/ac-dom-nodes")
          , Tracker = require("../Tracker")
          , errorHandler = require("../ErrorHandler")
          , EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , observerRegistry = require("./observerRegistry")
          , defaultOptions = {
            dataAttribute: "analytics-click",
            titleDataAttribute: "analytics-title",
            autoEnable: !0
        }
          , moduleName = "ClickAnalyticsObserver"
          , exitLinkPattern = /^https?:\/\/|^\/\//i
          , ClickAnalyticsObserver = function(e) {
            _inherits(r, EventEmitterMicro);
            var t = _createSuper(r);
            function r() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _classCallCheck(this, r),
                (e = t.call(this, n)).options = _objectSpread(_objectSpread({}, defaultOptions), n),
                e.observerType = "click",
                observerRegistry.add(_assertThisInitialized(e)),
                e.tracker = Tracker,
                e.isEnabled = !1,
                e._boundOnInteraction = e._onInteraction.bind(_assertThisInitialized(e)),
                e._elements = null,
                !0 === e.options.autoEnable && e.enable(),
                e
            }
            return _createClass(r, [{
                key: "enable",
                value: function() {
                    errorHandler.exception || this.isEnabled || (this.addListener(),
                    this.isEnabled = !0,
                    this.trigger("enabled"))
                }
            }, {
                key: "addListener",
                value: function() {
                    document.body.addEventListener("click", this._boundOnInteraction)
                }
            }, {
                key: "removeListener",
                value: function() {
                    document.body.removeEventListener("click", this._boundOnInteraction)
                }
            }, {
                key: "_onInteraction",
                value: function(e) {
                    var t, r = e.target;
                    r.getAttribute("data-" + this.options.dataAttribute) || (t = ancestor(r, "[data-" + this.options.dataAttribute + "]")) && (r = t),
                    r.classList.contains("ac-gn-link-bag") || r.classList.contains("globalnav-link-bag") || "ac-gn-link-search" === r.id || "ac-gn-link-search-small" === r.id || "globalnav-menubutton-link-search" === r.id || r.hasAttribute("href") && "A" === r.tagName && !r.hasAttribute("data-analytics-intrapage-link") && exitLinkPattern.test(r.getAttribute("href")) || r.getAttribute("data-" + this.options.dataAttribute) && this.track(e, r)
                }
            }, {
                key: "track",
                value: function(e, t) {
                    if (this.tracker) {
                        var r = {};
                        acDomNodes.isNodeType(t, acDomNodes.NODE_TYPES.ELEMENT) || errorHandler.log(moduleName, "track", t + " is not a valid DOM element"),
                        errorHandler.exception || (r.targetEl = t,
                        this.tracker.track({
                            type: "click",
                            event: e,
                            data: r,
                            options: JSON.parse(JSON.stringify(this.options))
                        }))
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeListener(),
                    this.options = null,
                    this.tracker = null,
                    this.isEnabled = null,
                    this._boundOnInteraction = null,
                    this._elements = null,
                    observerRegistry.remove(this)
                }
            }]),
            r
        }();
        module.exports = ClickAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "./observerRegistry": 158,
        "@marcom/ac-dom-nodes": 22,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/dom-traversal/ancestor": 55
    }],
    151: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && _setPrototypeOf(e, t)
        }
        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _createSuper(e) {
            var t = _isNativeReflectConstruct();
            return function() {
                var r, n = _getPrototypeOf(e);
                if (t) {
                    var o = _getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return _possibleConstructorReturn(this, r)
            }
        }
        function _possibleConstructorReturn(e, t) {
            if (t && ("object" === _typeof(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(e)
        }
        function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , Tracker = require("../Tracker")
          , _require = require("@marcom/element-engagement-observer")
          , eeoDefaultOptions = _require.defaultOptions
          , EEO = _require.ElementEngagementObserver
          , defaultOptions = _objectSpread(_objectSpread({}, eeoDefaultOptions), {}, {
            initListener: function() {
                this.onEnableListenerCallback({
                    detail: {
                        target: document.body
                    }
                })
            }
        })
          , ElementEngagementObserver = function(e) {
            _inherits(r, EventEmitterMicro);
            var t = _createSuper(r);
            function r(e) {
                var n;
                return _classCallCheck(this, r),
                (n = t.call(this, e)).options = Object.assign(defaultOptions, e),
                n.tracker = Tracker,
                n
            }
            return _createClass(r, [{
                key: "enable",
                value: function() {
                    this.options.initListener.call(this)
                }
            }, {
                key: "onEnableListenerCallback",
                value: function(e) {
                    var t = (e.detail || e).target;
                    this.options.target = t,
                    this.elementEngagementObserver = new EEO(_objectSpread(_objectSpread({}, this.options), {}, {
                        autoEnable: !0,
                        track: this.track.bind(this)
                    }))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = e.engagementTitle
                      , r = e.target
                      , n = Object.assign({}, e);
                    n.engagementTitle = t,
                    n.target = r;
                    var o = {
                        type: "elementEngagement",
                        observer: this,
                        options: this.options,
                        data: n
                    };
                    this.tracker.track(o)
                }
            }]),
            r
        }();
        module.exports = ElementEngagementObserver
    }
    , {
        "../Tracker": 120,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/element-engagement-observer": 58
    }],
    152: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var errorHandler = require("../ErrorHandler")
          , Tracker = require("../Tracker")
          , observerRegistry = require("./observerRegistry")
          , defaultOptions = {
            interactionEvents: [],
            interactionEventCallbacks: {}
        }
          , moduleName = "EventAnalyticsObserver"
          , EventAnalyticsObserver = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, e),
                t && "object" === _typeof(t) && "function" == typeof t.on && "function" == typeof t.off || errorHandler.log(moduleName, null, t + " does not appear to be a valid EventEmitter"),
                this.options = _objectSpread(_objectSpread({}, defaultOptions), r),
                this.observerType = "event",
                observerRegistry.add(this),
                Array.isArray(this.options.interactionEvents) || errorHandler.log(moduleName, null, this.options.interactionEvents + " is not an array"),
                this.tracker = Tracker,
                this.targetObj = t,
                this._callbacks = {},
                this.attachEvents()
            }
            return _createClass(e, [{
                key: "attachEvents",
                value: function() {
                    if (!errorHandler.exception) {
                        var e, t = this.options;
                        t.interactionEvents.forEach(function(r) {
                            e = "function" == typeof (e = t.interactionEventCallbacks[r]) ? e : this.track.bind(this),
                            this._callbacks[r] = e,
                            this.addListener(r, e)
                        }, this)
                    }
                }
            }, {
                key: "detachEvents",
                value: function() {
                    Object.keys(this._callbacks).forEach(function(e) {
                        this.removeListener(e, this._callbacks[e])
                    }, this)
                }
            }, {
                key: "addListener",
                value: function(e, t) {
                    this.targetObj.on(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.targetObj.off(e, t)
                }
            }, {
                key: "track",
                value: function(e) {
                    this.tracker && this.tracker.track({
                        type: "custom",
                        data: e,
                        options: this.options
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.detachEvents(),
                    this.options = null,
                    this.tracker = null,
                    this.targetObj = null,
                    this._callbacks = null,
                    observerRegistry.remove(this)
                }
            }]),
            e
        }();
        module.exports = EventAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "./observerRegistry": 158
    }],
    153: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
                    _defineProperty(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t),
            n && _defineProperties(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var Tracker = require("../Tracker")
          , get = require("@apple/analytics-data-layer").get
          , errorHandler = require("../ErrorHandler")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , confKey = dataLayerConfig.key
          , observerRegistry = require("./observerRegistry")
          , defaultOptions = {
            trackAutoRotate: !1,
            beforeUpdateEvent: "willShow",
            afterUpdateEvent: "didShow"
        }
          , moduleName = "GalleryAnalyticsObserver"
          , GalleryAnalyticsObserver = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, e),
                t && "object" === _typeof(t) || errorHandler.log(moduleName, null, t + " is not an object"),
                this.options = _objectSpread(_objectSpread({}, defaultOptions), n),
                this.observerType = "gallery",
                observerRegistry.add(this),
                this.gallery = t,
                this.tracker = Tracker,
                this.trackedInteractionTypes = [],
                this.outgoingSlideInteractionType = "auto",
                this.incomingSlideTimestamp = get([confKey, dataLayerConfig.keys.initialTimeStamp]),
                this._onUpdate = this._onUpdate.bind(this),
                this._onComplete = this.track.bind(this),
                this.addListener()
            }
            return _createClass(e, [{
                key: "addListener",
                value: function() {
                    errorHandler.exception || (this.options.beforeUpdateEvent && this.gallery.on(this.options.beforeUpdateEvent, this._onUpdate),
                    this.options.afterUpdateEvent && this.gallery.on(this.options.afterUpdateEvent, this._onComplete))
                }
            }, {
                key: "removeListener",
                value: function() {
                    this.options.beforeUpdateEvent && this.gallery.off(this.options.beforeUpdateEvent, this._onUpdate),
                    this.options.afterUpdateEvent && this.gallery.off(this.options.afterUpdateEvent, this._onComplete)
                }
            }, {
                key: "_createInteractionEvent",
                value: function(e) {
                    var t = e.interactionEvent.originalEvent || e.interactionEvent;
                    return t ? {
                        type: t.type,
                        target: t.target,
                        srcElement: t.srcElement
                    } : null
                }
            }, {
                key: "_onUpdate",
                value: function(e) {
                    this.interactionEvent = null,
                    e.interactionEvent && (this.interactionEvent = this._createInteractionEvent(e))
                }
            }, {
                key: "_getSlideId",
                value: function(e) {
                    var t = ""
                      , n = 0;
                    if (e && Array.isArray(e)) {
                        n = e.length;
                        for (var r = 0; r < n; r++)
                            if ("function" == typeof e[r].getElement && "function" == typeof e[r].getElementId) {
                                var i = e[r].getElement()
                                  , o = i ? i.getAttribute("data-analytics-gallery-item-id") : null;
                                t += o ? o + "-" : e[r].getElementId() + "-"
                            }
                    }
                    return t.slice(0, t.length - 1)
                }
            }, {
                key: "track",
                value: function(e) {
                    if (this.tracker && (!1 !== this.options.trackAutoRotate || e.interactionEvent && (!e.interactionEvent.gallery || e.interactionEvent.gallery !== this.gallery))) {
                        var t = Object.assign({}, e);
                        t.interactionEvent = this.interactionEvent || this._createInteractionEvent(e),
                        this.options.galleryName || errorHandler.log(moduleName, "track", this.options.galleryName + " is not a valid gallery name"),
                        errorHandler.exception || (t.incoming && "string" != typeof t.incoming.id && (t.incoming.id = this._getSlideId(t.incoming)),
                        t.outgoing && "string" != typeof t.outgoing.id && (t.outgoing.id = this._getSlideId(t.outgoing)),
                        this.outgoingSlideTimestamp = this.incomingSlideTimestamp,
                        this.incomingSlideTimestamp = Date.now(),
                        t.incomingSlideTimestamp = this.incomingSlideTimestamp,
                        t.outgoingSlideTimestamp = this.outgoingSlideTimestamp,
                        this.tracker.track({
                            type: "gallery",
                            data: t,
                            observer: this,
                            options: this.options
                        }))
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.gallery || errorHandler.log(moduleName, "destroy", this.gallery + " is not an object"),
                    errorHandler.exception || (this.removeListener(),
                    this.options = null,
                    this.tracker = null,
                    this.gallery = null,
                    this.trackedInteractionTypes = null,
                    this.interactionEvent = null,
                    observerRegistry.remove(this))
                }
            }]),
            e
        }();
        module.exports = GalleryAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "../constants": 121,
        "./observerRegistry": 158,
        "@apple/analytics-data-layer": 4
    }],
    154: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && _setPrototypeOf(e, t)
        }
        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _createSuper(e) {
            var t = _isNativeReflectConstruct();
            return function() {
                var r, n = _getPrototypeOf(e);
                if (t) {
                    var o = _getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return _possibleConstructorReturn(this, r)
            }
        }
        function _possibleConstructorReturn(e, t) {
            if (t && ("object" === _typeof(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(e)
        }
        function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ancestor = require("@marcom/dom-traversal/ancestor")
          , Tracker = require("../Tracker")
          , errorHandler = require("../ErrorHandler")
          , EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , isIntraPageLink = require("../helpers/DOM").isIntraPageLink
          , observerRegistry = require("./observerRegistry")
          , defaultOptions = {
            dataAttribute: "analytics-link",
            titleDataAttribute: "analytics-title",
            silent: !0,
            deferred: !0,
            autoEnable: !0
        }
          , LinkAnalyticsObserver = function(e) {
            _inherits(r, EventEmitterMicro);
            var t = _createSuper(r);
            function r() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _classCallCheck(this, r),
                (e = t.call(this, n)).options = _objectSpread(_objectSpread({}, defaultOptions), n),
                e.observerType = "link",
                observerRegistry.add(_assertThisInitialized(e)),
                e.tracker = Tracker,
                e.isEnabled = !1,
                e.defaultTracking = e.track.bind(_assertThisInitialized(e)),
                !0 === e.options.autoEnable && e.enable(),
                e
            }
            return _createClass(r, [{
                key: "enable",
                value: function() {
                    errorHandler.exception || this.isEnabled || (this.addListener(),
                    this.isEnabled = !0,
                    this.trigger("enabled"))
                }
            }, {
                key: "addListener",
                value: function() {
                    document.body.addEventListener("mouseup", this.defaultTracking)
                }
            }, {
                key: "removeListener",
                value: function() {
                    document.body.removeEventListener("mouseup", this.defaultTracking)
                }
            }, {
                key: "track",
                value: function(e) {
                    if (this.tracker) {
                        var t, r, n = {}, o = e.target;
                        "a" === o.nodeName.toLowerCase() && (t = o),
                        t || (r = ancestor(o, "a")) && (t = r),
                        t && !isIntraPageLink(t) && (n.targetEl = t,
                        this.tracker.track({
                            type: "link",
                            event: e,
                            data: n,
                            options: this.options
                        }))
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeListener(),
                    this.options = null,
                    this.tracker = null,
                    this.isEnabled = null,
                    this.defaultTracking = null,
                    observerRegistry.remove(this)
                }
            }]),
            r
        }();
        module.exports = LinkAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "../helpers/DOM": 123,
        "./observerRegistry": 158,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/dom-traversal/ancestor": 55
    }],
    155: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && _setPrototypeOf(e, t)
        }
        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _createSuper(e) {
            var t = _isNativeReflectConstruct();
            return function() {
                var r, n = _getPrototypeOf(e);
                if (t) {
                    var i = _getPrototypeOf(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else
                    r = n.apply(this, arguments);
                return _possibleConstructorReturn(this, r)
            }
        }
        function _possibleConstructorReturn(e, t) {
            if (t && ("object" === _typeof(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(e)
        }
        function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Tracker = require("../Tracker")
          , errorHandler = require("../ErrorHandler")
          , onDocumentReady = require("../helpers/onDocumentReady")
          , dynamicEventBinder = require("../helpers/dynamicEventBinder").dynamicEventBinder
          , dynamicEventBinderRemoveListeners = require("../helpers/dynamicEventBinder").removeListeners
          , EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , isIntraPageLink = require("../helpers/DOM").isIntraPageLink
          , ancestor = require("@marcom/dom-traversal/ancestor")
          , endOfPageTrack = require("@apple/analytics-end-of-page").endOfPage
          , observerRegistry = require("./observerRegistry")
          , defaultOptions = {
            autoEnable: !0
        }
          , body = "body"
          , PageAnalyticsObserver = function(e) {
            _inherits(r, EventEmitterMicro);
            var t = _createSuper(r);
            function r() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                _classCallCheck(this, r),
                (e = t.call(this, n)).options = _objectSpread(_objectSpread({}, defaultOptions), n),
                e.observerType = "page",
                observerRegistry.add(_assertThisInitialized(e)),
                e.tracker = Tracker,
                e.initialized = !1,
                e.enabled = !1;
                return e.onReadyTracking = e.track.bind(_assertThisInitialized(e), "readyStateComplete", {
                    silent: !0
                }),
                e.onFocusIn = e.track.bind(_assertThisInitialized(e), "focusin", {}),
                e.onEndOfPage = e.trackEndOfPage.bind(_assertThisInitialized(e), "endOfPage", {}),
                e.onSubmit = e.track.bind(_assertThisInitialized(e), "submit", {
                    deferred: !0
                }),
                e.onLinkClick = e.track.bind(_assertThisInitialized(e), "linkClick", {}),
                e.onNavigationalLink = e.onNavigationalLink.bind(_assertThisInitialized(e)),
                e.onPageHide = e.track.bind(_assertThisInitialized(e), "pageHide", {
                    deferred: !0,
                    beacon: {}
                }),
                e.onScroll = e.onScroll.bind(_assertThisInitialized(e)),
                !0 === e.options.autoEnable && e.enable(),
                e
            }
            return _createClass(r, [{
                key: "onScroll",
                value: function() {
                    endOfPageTrack({
                        element: document.querySelector("#ac-globalfooter"),
                        onPageEnd: this.onEndOfPage
                    }),
                    document.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "enable",
                value: function() {
                    var e = this;
                    errorHandler.exception || this.enabled || (this.tracker.AppMeasurement.initialize(this.options),
                    this.track("page"),
                    this.enabled = !0,
                    this.trigger("enabled"),
                    setTimeout(function() {
                        e.track("storeAtPageLoad", {
                            deferred: !0
                        }),
                        onDocumentReady(e.onReadyTracking),
                        dynamicEventBinder({
                            parentSelector: body,
                            eventType: "focusin",
                            childSelector: "input",
                            callback: e.onFocusIn
                        }),
                        dynamicEventBinder({
                            parentSelector: body,
                            eventType: "click",
                            childSelector: "a",
                            callback: e.onLinkClick
                        }),
                        dynamicEventBinder({
                            parentSelector: body,
                            eventType: "click",
                            childSelector: "a",
                            callback: e.onNavigationalLink
                        }),
                        dynamicEventBinder({
                            parentSelector: body,
                            eventType: "submit",
                            childSelector: "form",
                            callback: e.onSubmit
                        }),
                        dynamicEventBinder({
                            parentSelector: window,
                            eventType: "pagehide",
                            callback: e.onPageHide
                        })
                    }, 0),
                    setTimeout(function() {
                        document.addEventListener("scroll", e.onScroll)
                    }, 1e3))
                }
            }, {
                key: "onNavigationalLink",
                value: function(e) {
                    if (this.tracker) {
                        var t, r, n = {}, i = e.target;
                        "a" === i.nodeName.toLowerCase() && (t = i),
                        t || (r = ancestor(i, "a")) && (t = r),
                        t && !isIntraPageLink(t) && (n.targetEl = t,
                        this.tracker.track({
                            type: "navigationalLink",
                            event: e,
                            data: n,
                            options: JSON.parse(JSON.stringify({
                                deferred: !0,
                                beacon: {}
                            }))
                        }))
                    }
                }
            }, {
                key: "track",
                value: function(e, t, r) {
                    if (this.tracker) {
                        var n = {};
                        "page" === e && this.options && this.options.data && (n = this.options.data),
                        t = _objectSpread(_objectSpread({}, this.options), t),
                        this.tracker.track({
                            type: e,
                            event: r,
                            data: n,
                            options: JSON.parse(JSON.stringify(t))
                        })
                    }
                }
            }, {
                key: "trackEndOfPage",
                value: function(e, t, r) {
                    this.tracker && this.tracker.track({
                        type: e,
                        data: {
                            events: r.beacon.events.toString()
                        },
                        options: JSON.parse(JSON.stringify(t))
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.options = null,
                    this.tracker = null,
                    this.initialized = null,
                    dynamicEventBinderRemoveListeners(),
                    document.removeEventListener("scroll", this.onScroll),
                    observerRegistry.remove(this)
                }
            }]),
            r
        }();
        module.exports = PageAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "../helpers/DOM": 123,
        "../helpers/dynamicEventBinder": 127,
        "../helpers/onDocumentReady": 140,
        "./observerRegistry": 158,
        "@apple/analytics-end-of-page": 5,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/dom-traversal/ancestor": 55
    }],
    156: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _toConsumableArray(e) {
            return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function _unsupportedIterableToArray(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return _arrayLikeToArray(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
            }
        }
        function _iterableToArray(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        function _arrayWithoutHoles(e) {
            if (Array.isArray(e))
                return _arrayLikeToArray(e)
        }
        function _arrayLikeToArray(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t),
            n && _defineProperties(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && _setPrototypeOf(e, t)
        }
        function _setPrototypeOf(e, t) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function _createSuper(e) {
            var t = _isNativeReflectConstruct();
            return function() {
                var n, i = _getPrototypeOf(e);
                if (t) {
                    var r = _getPrototypeOf(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return _possibleConstructorReturn(this, n)
            }
        }
        function _possibleConstructorReturn(e, t) {
            if (t && ("object" === _typeof(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(e)
        }
        function _assertThisInitialized(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var ElementEngagement = require("@marcom/ac-element-engagement")
          , Tracker = require("../Tracker")
          , errorHandler = require("../ErrorHandler")
          , dataStringToObject = require("../helpers/dataStringToObject")
          , isNumeric = require("../helpers/isNumeric")
          , EventEmitterMicro = require("@marcom/ac-event-emitter-micro").EventEmitterMicro
          , debounce = require("@marcom/function-utils/debounce")
          , observerRegistry = require("./observerRegistry")
          , moduleName = "SectionAnalyticsObserver";
        ElementEngagement._elementInViewPastThreshold = function(e) {
            return (e.engaged ? e.pixelsInView >= Math.min(this._windowHeight / 3, 325) : e.pixelsInView >= Math.min(this._windowHeight / 2.1, 450)) || e.percentInView > e.inViewThreshold
        }
        ;
        var defaultOptions = {
            dataAttribute: "analytics-section-engagement",
            autoEnable: !0,
            customInitialization: !1
        }
          , trackedElementDefaults = {
            stopOnEngaged: !1,
            timeToEngage: 1e3
        }
          , debounceOptions = {
            leading: !0
        }
          , SectionAnalyticsObserver = function(e) {
            _inherits(n, EventEmitterMicro);
            var t = _createSuper(n);
            function n() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return _classCallCheck(this, n),
                e = t.call(this, i),
                ElementEngagement.elements.length > 0 && errorHandler.warn(moduleName, "constructor", "element engagement was already tracking elements when a new section observer was created. This could lead to errors in tracking. Make sure to destroy section observer before creating a new one."),
                e.options = Object.assign({}, defaultOptions, i),
                e.observerType = "section",
                observerRegistry.add(_assertThisInitialized(e)),
                e.tracker = Tracker,
                e.elementEngagement = ElementEngagement,
                e.isEnabled = !1,
                e.sections = [],
                e._listeners = !1,
                !0 === e.options.autoEnable && e.enable(),
                e
            }
            return _createClass(n, [{
                key: "enable",
                value: function() {
                    errorHandler.exception || this.isEnabled || (this._bindMethods(),
                    this.options.customInitialization || (this._loadSections(),
                    this.initializeTracking()))
                }
            }, {
                key: "initializeTracking",
                value: function() {
                    this.sections && this.sections.length > 0 ? (this._setPosition(),
                    this.options.elements = this.sections,
                    this._addListeners(),
                    this.elementEngagement.start(),
                    this.isEnabled = !0,
                    this.trigger("enabled")) : errorHandler.warn(moduleName, "initializeTracking", "initialization of Section Observer had no effect because no valid sections were queued before initialization.")
                }
            }, {
                key: "initializeSection",
                value: function(e) {
                    if (this.sections && 0 !== this.sections.length) {
                        var t = this._getTrackedElement(e);
                        t && (this._setPosition(),
                        this._listeners || this._addListeners(),
                        this.options.elements && Array.isArray(this.options.elements) ? this.options.elements.push(e) : this.options.elements = [e],
                        t.tracking = !1,
                        this.elementEngagement.start(t))
                    }
                }
            }, {
                key: "addSection",
                value: function(e) {
                    if (e && e instanceof Element && !this._getTrackedElement(e)) {
                        var t;
                        this.sections.push(e);
                        var n = e.getAttribute("data-" + this.options.dataAttribute);
                        t = dataStringToObject(n),
                        t = this._castDataAttributeOptions(t),
                        t = Object.assign({}, trackedElementDefaults, t),
                        this.elementEngagement.addElement(e, t)
                    }
                }
            }, {
                key: "removeSection",
                value: function(e) {
                    var t = this._getTrackedElement(e)
                      , n = this.sections.indexOf(e);
                    n > -1 && this.sections.splice(n, 1),
                    this.elementEngagement.stop(t)
                }
            }, {
                key: "clearSections",
                value: function() {
                    this.elementEngagement && this.elementEngagement.elements && this.elementEngagement.elements.forEach(function(e) {
                        this.elementEngagement.stop(e)
                    }
                    .bind(this)),
                    this.sections = []
                }
            }, {
                key: "refreshMetrics",
                value: function() {
                    this.elementEngagement.refreshAllElementMetrics()
                }
            }, {
                key: "startSectionEngagement",
                value: function(e) {
                    var t = this._getTrackedElement(e);
                    t && (t.trigger("thresholdenter", t),
                    t.trigger("engaged", t),
                    this.elementEngagement._engaged.call(this.elementEngagement, t))
                }
            }, {
                key: "endSectionEngagement",
                value: function(e) {
                    var t = this._getTrackedElement(e);
                    t && t.tracking && (t.thresholdExitTime = Date.now(),
                    this.elementEngagement.stop(t),
                    this.track({
                        element: t
                    }))
                }
            }, {
                key: "pauseElementTracking",
                value: function(e) {
                    var t = this._getTrackedElement(e);
                    t && (t.isActive = !1)
                }
            }, {
                key: "resumeElementTracking",
                value: function(e) {
                    var t = this._getTrackedElement(e);
                    t && (t.isActive = !0)
                }
            }, {
                key: "_bindMethods",
                value: function() {
                    this._onThresholdExit = this._onThresholdExit.bind(this),
                    this._onScroll = this._onScroll.bind(this),
                    this._onResize = this._onResize.bind(this),
                    this.endSectionEngagement = this.endSectionEngagement.bind(this),
                    this._getTrackedElement = this._getTrackedElement.bind(this)
                }
            }, {
                key: "_loadSections",
                value: function() {
                    _toConsumableArray(document.querySelectorAll("[data-" + this.options.dataAttribute + "]")).forEach(function(e) {
                        this.addSection(e)
                    }, this)
                }
            }, {
                key: "_setPosition",
                value: function() {
                    var e, t = this.sections.length;
                    for (e = 0; e < t; e += 1)
                        this.sections[e].position = e + 1
                }
            }, {
                key: "_castDataAttributeOptions",
                value: function(e) {
                    return e = Object.assign({}, e),
                    Object.keys(e).forEach(function(t) {
                        var n, i = e[t];
                        n = "false" !== i && ("true" === i || (isNumeric(i),
                        i)),
                        e[t] = n
                    }),
                    e
                }
            }, {
                key: "_addListeners",
                value: function() {
                    this._listeners = !0,
                    this.elementEngagement.on("thresholdexit", this._onThresholdExit),
                    window.addEventListener("scroll", this._onScroll),
                    window.addEventListener("resize", this._onResize),
                    window.addEventListener("orientationchange", this._onResize)
                }
            }, {
                key: "_removeListeners",
                value: function() {
                    this._listeners = !1,
                    this.elementEngagement && this.elementEngagement.off && "function" == typeof this.elementEngagement.off && this.elementEngagement.off("thresholdexit", this._onThresholdExit),
                    window.removeEventListener("scroll", this._onScroll),
                    window.removeEventListener("resize", this._onResize),
                    window.removeEventListener("orientationchange", this._onResize)
                }
            }, {
                key: "_onThresholdExit",
                value: function(e) {
                    if (e.engaged) {
                        var t = {
                            element: e
                        };
                        this.elementEngagement.stop(e),
                        this.track(t)
                    }
                }
            }, {
                key: "_onScroll",
                value: function() {
                    var e = this;
                    return debounce(function() {
                        e.refreshMetrics(),
                        e._checkForPageEnd()
                    }, 300, debounceOptions)()
                }
            }, {
                key: "_onResize",
                value: function() {
                    var e = this;
                    return debounce(function() {
                        e._checkForPageEnd()
                    }, 300, debounceOptions)()
                }
            }, {
                key: "_checkForPageEnd",
                value: function() {
                    window.pageYOffset >= document.body.scrollHeight - window.innerHeight && this._pageEnd()
                }
            }, {
                key: "_pageEnd",
                value: function() {
                    var e = [];
                    this.elementEngagement.elements.forEach(function(t) {
                        t.inView && t.inThreshold && t.tracking && t.isActive && e.push(t)
                    }),
                    e.forEach(function(e) {
                        e.engaged ? this.endSectionEngagement(e) : !1 === e.has("engaged") && e.once("engaged", this.endSectionEngagement)
                    }, this)
                }
            }, {
                key: "track",
                value: function(e) {
                    this.tracker && this.tracker.track({
                        type: "section",
                        data: e,
                        options: this.options
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.elementEngagement && (this.clearSections(),
                    this.elementEngagement.stop()),
                    this._removeListeners(),
                    this.options = null,
                    this.elementEngagement = null,
                    this.tracker = null,
                    this.sections = null,
                    observerRegistry.remove(this)
                }
            }, {
                key: "_getTrackedElement",
                value: function(e) {
                    return e instanceof Element && (e = this.elementEngagement.elements.filter(function(t) {
                        return t.element === e
                    })[0]),
                    e instanceof EventEmitterMicro ? e : null
                }
            }]),
            n
        }();
        module.exports = SectionAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "../helpers/dataStringToObject": 126,
        "../helpers/isNumeric": 136,
        "./observerRegistry": 158,
        "@marcom/ac-element-engagement": 33,
        "@marcom/ac-event-emitter-micro": 43,
        "@marcom/function-utils/debounce": 65
    }],
    157: [function(require, module, exports) {
        "use strict";
        function ownKeys(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, s)
            }
            return i
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(i), !0).forEach(function(t) {
                    _defineProperty(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        function _defineProperty(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.enumerable = s.enumerable || !1,
                s.configurable = !0,
                "value"in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s)
            }
        }
        function _createClass(e, t, i) {
            return t && _defineProperties(e.prototype, t),
            i && _defineProperties(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var errorHandler = require("../ErrorHandler")
          , Tracker = require("../Tracker")
          , isNode = require("@marcom/ac-dom-nodes/isNode")
          , debounce = require("@marcom/function-utils/debounce")
          , isHandheld = require("@marcom/feature-detect/isHandheld")()
          , acUserAgent = require("@marcom/useragent-detect")
          , observerRegistry = require("./observerRegistry")
          , dataAttributeAnalyticsId = "analytics-id"
          , moduleName = "VideoAnalyticsObserver"
          , videoSegmentBoundries = [0, .1, .25, .5, .75, .9, 1]
          , defaultOptions = {
            mediaEvents: [],
            mediaEventCallbacks: {},
            dataAttribute: dataAttributeAnalyticsId,
            trackCaptions: !0,
            trackMilestones: !0,
            trackSeeking: !0,
            trackDuration: !0,
            trackCurrentTime: !0,
            streamingVideo: !1
        }
          , AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION = "3.6.1"
          , IS_IE = acUserAgent.browser.ie
          , IS_MOBILE = acUserAgent.os.ios || acUserAgent.os.android
          , VideoAnalyticsObserver = function() {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, e),
                t && "object" === _typeof(t) || errorHandler.log(moduleName, null, t + " is not an object"),
                this.options = _objectSpread(_objectSpread({}, defaultOptions), i),
                this.observerType = "video",
                observerRegistry.add(this),
                !0 === this.options.streamingVideo && (this.options.trackMilestones = !1,
                this.options.trackSeeking = !1,
                this.options.trackDuration = !1,
                this.options.trackCurrentTime = !1),
                Array.isArray(this.options.mediaEvents) || errorHandler.log(moduleName, null, this.options.mediaEvents + " is not a valid media events array"),
                this.tracker = Tracker,
                this.video = t,
                this.playCount = 0,
                this.ttShowCount = 0,
                this._callbacks = {},
                this._events = {
                    play: "play",
                    playing: "playing",
                    pause: "pause",
                    timeupdate: "timeupdate",
                    seeking: "seeking",
                    seeked: "seeked",
                    ended: "ended",
                    texttrackshow: "texttrackshow",
                    PlayPromiseResolved: "PlayPromiseResolved"
                },
                this._onWebkitEndFullscreen = this._onWebkitEndFullscreen.bind(this),
                this._onPlayingFromStart = this._onPlayFromStart.bind(this),
                this._getPlayEventName = this._getPlayEventName.bind(this),
                this._initializeInDOM()
            }
            return _createClass(e, [{
                key: "_initializeInDOM",
                value: function() {
                    errorHandler.exception || (this.options.videoElement ? this.videoElement = this.options.videoElement : this._isAcVideo() && this._setVideoElement(),
                    (this.options.trackMilestones || this.options.trackSeeking) && this._setupMilestoneTracking(),
                    this.attachEvents())
                }
            }, {
                key: "_setupMilestoneTracking",
                value: function() {
                    var e = this;
                    this._milestoneTrackingTimeout = null,
                    this._hadSeeked = !1,
                    this._hadJustEnded = !1,
                    this._milestoneTimeoutDuration = 1e3,
                    this._allVideoMilestone = this._createVideoMilestones(),
                    this._activeVideoMilestones = [],
                    this._milestonesSeeked = debounce(function() {
                        e._hadSeeked || (e._hadJustEnded && e._isAcVideo() ? e._hadJustEnded = !1 : (e._hadSeeked = !0,
                        e._refreshMilestones(),
                        e.videoElement && !e.videoElement.paused && (e._milestoneTimeoutDuration = 2500,
                        e._checkForMilestone())))
                    }, 100),
                    this._milestonesSeekedCancel = this._milestonesSeeked.cancel,
                    this._bindMilestoneHandlers()
                }
            }, {
                key: "_createVideoMilestones",
                value: function() {
                    var e = [];
                    return videoSegmentBoundries.forEach(function(t, i) {
                        i !== videoSegmentBoundries.length - 1 && e.push([t, videoSegmentBoundries[i + 1]])
                    }),
                    e
                }
            }, {
                key: "attachEvents",
                value: function() {
                    var e, t = this.options;
                    t.mediaEvents.forEach(function(i) {
                        e = "function" == typeof (e = t.mediaEventCallbacks[i]) ? e : this._defaultTracking.bind(this, i),
                        this._callbacks[i] = e,
                        this.addListener(i, this._callbacks[i])
                    }
                    .bind(this)),
                    this._attachDefaultEvents()
                }
            }, {
                key: "_attachDefaultEvents",
                value: function() {
                    this._prepareForPlayFromStart(),
                    this.video.on(this._events.ended, this._onEnded, this),
                    this.video.on(this._events.timeupdate, this._onTimeupdate, this),
                    !0 === this.options.trackCaptions && this.video.on(this._events.texttrackshow, this._onTextTrackShow, this)
                }
            }, {
                key: "detachEvents",
                value: function() {
                    this.options.mediaEvents.forEach(function(e) {
                        this.removeListener(e, this._callbacks[e])
                    }
                    .bind(this)),
                    this._detachPrivateEvents()
                }
            }, {
                key: "_detachPrivateEvents",
                value: function() {
                    this.video.off(this._events.play, this._onPlayFromStart, this),
                    this.video.off(this._events.PlayPromiseResolved, this._onPlayingFromStart, this),
                    this.video.off(this._events.ended, this._onEnded, this),
                    this.video.off(this._events.timeupdate, this._onTimeupdate, this),
                    this.video.off(this._events.texttrackshow, this._onTextTrackShow, this)
                }
            }, {
                key: "_prepareForPlayFromStart",
                value: function() {
                    this._playBound || ((this.options.trackMilestones || this.options.trackSeeking) && this._cleanUpMilestoneTracking(),
                    IS_IE && this._isAcVideo() && this.ended ? this.videoElement.addEventListener(this._events.playing, this._onPlayingFromStart) : IS_IE ? this.video.once(this._events.play, this._onPlayFromStart, this) : this.video.once(this._getPlayEventName(), this._onPlayingFromStart, this),
                    this._playBound = !0)
                }
            }, {
                key: "_onPlayFromStart",
                value: function(e) {
                    if (!this.started) {
                        (this.options.trackMilestones || this.options.trackSeeking) && (this._setVideoElement(),
                        this.videoElement && (IS_IE && this._isAcVideo() && this.ended && this.videoElement.removeEventListener(this._events.playing, this._onPlayingFromStart),
                        isHandheld && !this._isAcVideo() && this.videoElement.addEventListener("webkitendfullscreen", this._onWebkitEndFullscreen)),
                        this._hadSeeked = !1,
                        this._refreshMilestones(),
                        this._startTrackingMilestones()),
                        this._started = !0;
                        var t = this._bundleTrackingData(this._events.play, e);
                        t.playCount = this.playCount,
                        this.track(t),
                        this.playCount += 1,
                        this._playBound = !1
                    }
                }
            }, {
                key: "_onWebkitEndFullscreen",
                value: function() {
                    this._started = !1,
                    this.videoElement && this.videoElement.removeEventListener("webkitendfullscreen", this._prepareForPlayFromStart),
                    this._prepareForPlayFromStart()
                }
            }, {
                key: "_onTimeupdate",
                value: function(e) {
                    if (e.currentTime < .1) {
                        var t = !0;
                        this.videoElement && void 0 !== _typeof(this.videoElement.paused) && (t = this.videoElement.paused),
                        this.playCount > 0 && this._started && t && (this._started = !1,
                        this._prepareForPlayFromStart())
                    }
                }
            }, {
                key: "_onEnded",
                value: function(e) {
                    (this.options.trackMilestones || this.options.trackSeeking) && (this._milestonesSeekedCancel(),
                    this._hadJustEnded = !0),
                    this._started = !1;
                    var t = this._bundleTrackingData("ended", e);
                    this.ended = !0,
                    this.track(t),
                    this._prepareForPlayFromStart()
                }
            }, {
                key: "_onTextTrackShow",
                value: function(e) {
                    var t = this.video._videoImpl.getMediaElement()
                      , i = this._bundleTrackingData(this._events.texttrackshow, e);
                    !t.paused && !t.ended && t.currentTime > 0 && (i.ttShowCount = this.ttShowCount,
                    this.track(i),
                    this.ttShowCount += 1)
                }
            }, {
                key: "_setVideoElement",
                value: function() {
                    this.video && (void 0 !== this.video.getMediaElement && this.video.getMediaElement() ? this.videoElement = this.video.getMediaElement() : this.video.videoId && (this.videoElement = document.querySelector('[data-analytics-video-id="' + this.video.videoId + '"] video')))
                }
            }, {
                key: "_startTrackingMilestones",
                value: function() {
                    this.videoElement && (this._setMilestoneEventListeners(),
                    this._checkForMilestone())
                }
            }, {
                key: "_bindMilestoneHandlers",
                value: function() {
                    this._milestonesSeeking = this._milestonesSeeking.bind(this),
                    this._milestonesSeeked = this._milestonesSeeked.bind(this),
                    this._milestonesPlay = this._milestonesPlay.bind(this),
                    this._milestonesPause = this._milestonesPause.bind(this)
                }
            }, {
                key: "_setMilestoneEventListeners",
                value: function() {
                    this.videoElement.addEventListener(this._events.seeking, this._milestonesSeeking),
                    this.videoElement.addEventListener(this._events.seeked, this._milestonesSeeked),
                    IS_IE || IS_MOBILE ? this.videoElement.addEventListener(this._events.play, this._milestonesPlay) : this.videoElement.addEventListener(this._getPlayEventName(), this._milestonesPlay),
                    this.videoElement.addEventListener(this._events.pause, this._milestonesPause)
                }
            }, {
                key: "_milestonesSeeking",
                value: function() {
                    if (this._hadSeeked && (this._hadSeeked = !1),
                    this._milestoneTrackingTimeout) {
                        if (this._hadJustEnded && this._isAcVideo())
                            return;
                        clearTimeout(this._milestoneTrackingTimeout),
                        this._milestoneTrackingTimeout = null
                    }
                }
            }, {
                key: "_milestonesPlay",
                value: function() {
                    this._checkForMilestone()
                }
            }, {
                key: "_milestonesPause",
                value: function() {
                    clearTimeout(this._milestoneTrackingTimeout),
                    this._milestoneTrackingTimeout = null
                }
            }, {
                key: "_checkForMilestone",
                value: function() {
                    this._milestoneTrackingTimeout && clearTimeout(this._milestoneTrackingTimeout),
                    this._milestoneTrackingTimeout = setTimeout(function() {
                        var e = this._getElligibleMilestone();
                        e && this._trackMilestone(e),
                        this._milestoneTimeoutDuration = 1e3,
                        this._checkForMilestone()
                    }
                    .bind(this), this._milestoneTimeoutDuration)
                }
            }, {
                key: "_getElligibleMilestone",
                value: function() {
                    var e;
                    if (!(!this.videoElement || this.videoElement.paused || 0 === this.videoElement.currentTime || this.videoElement.readyState < 3 || 0 === this.videoElement.duration || this.videoElement.duration === 1 / 0 || isNaN(this.videoElement.duration)) && (this._activeVideoMilestones[0] && !(e = this.videoElement.currentTime / this.videoElement.duration,
                    isNaN(e) || this._activeVideoMilestones[0][0] > e))) {
                        var t, i = this._activeVideoMilestones.filter(function(i, s) {
                            if (e >= i[0] && e < i[1])
                                return t = s,
                                !0
                        });
                        return i && i[0] ? {
                            name: i[0][0],
                            index: t
                        } : void 0
                    }
                }
            }, {
                key: "_trackMilestone",
                value: function(e) {
                    var t;
                    this._activeVideoMilestones.splice(e.index, 1),
                    (t = this._bundleTrackingData("milestone")).milestone = e.name,
                    this._hadSeeked && (t.seeked = !0,
                    this._hadSeeked = !1),
                    this.track(t)
                }
            }, {
                key: "_cleanUpMilestoneTracking",
                value: function() {
                    this._hadSeeked = !1,
                    this._refreshMilestones(),
                    clearTimeout(this._milestoneTrackingTimeout),
                    this._milestoneTrackingTimeout = null,
                    this.videoElement && (this.videoElement.removeEventListener(this._events.seeking, this._milestonesSeeking),
                    this.videoElement.removeEventListener(this._events.seeked, this._milestonesSeeked),
                    IS_IE || IS_MOBILE ? this.videoElement.removeEventListener(this._events.play, this._milestonesPlay) : this.videoElement.removeEventListener(this._getPlayEventName(), this._milestonesPlay),
                    this.videoElement.removeEventListener(this._events.pause, this._milestonesPause))
                }
            }, {
                key: "_refreshMilestones",
                value: function() {
                    this._hadSeeked ? this._activeVideoMilestones = this._allVideoMilestone.slice(0) : this._activeVideoMilestones = this._allVideoMilestone.slice(1)
                }
            }, {
                key: "addListener",
                value: function(e, t) {
                    this.video.on(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.video.off(e, t)
                }
            }, {
                key: "_getCommonVideoData",
                value: function(e) {
                    var t, i = {};
                    return i.targetEl = this.video.el || null,
                    t = i.targetEl && isNode(i.targetEl) ? i.targetEl.getAttribute("data-" + dataAttributeAnalyticsId) : "",
                    i.videoId = t || this.video.targetId,
                    i.ended = this.ended,
                    i.eventType = e,
                    "playing" === i.eventType && (i.eventType = "play"),
                    this.videoElement && (i.duration = NaN,
                    i.currentTime = NaN,
                    i.src = null,
                    isNaN(this.videoElement.duration) || (i.duration = this.videoElement.duration),
                    isNaN(this.videoElement.currentTime) || (i.currentTime = this.videoElement.currentTime),
                    void 0 !== this.videoElement.src && (i.src = this._getUniqueVideoId(this.videoElement.src))),
                    this._hadSeeked && i.currentTime && (i.currentTime = i.currentTime - this._milestoneTimeoutDuration / (this._milestoneTimeoutDuration / 2)),
                    i
                }
            }, {
                key: "_getUniqueVideoId",
                value: function(e) {
                    var t;
                    return (t = e.match(/[\w\d]{8}[\w\d-]+[\w\d\/]+\//g)) && t.length ? t[0] : e
                }
            }, {
                key: "_bundleTrackingData",
                value: function(e, t) {
                    var i = this._getCommonVideoData(e);
                    return Object.assign({}, t, i)
                }
            }, {
                key: "_defaultTracking",
                value: function(e) {
                    var t = this._bundleTrackingData(e);
                    this.track(t)
                }
            }, {
                key: "_isAcVideo",
                value: function() {
                    return "function" == typeof this.video.play
                }
            }, {
                key: "_getPlayEventName",
                value: function() {
                    return this.video.VERSION && this._isVersionGreaterOrEqual(this.video.VERSION.toArray(), AC_VIDEO_SUPPORTS_CUSTOM_PLAY_VERSION.split(".")) ? this._events.PlayPromiseResolved : this._events.play
                }
            }, {
                key: "_isVersionGreaterOrEqual",
                value: function(e, t) {
                    return !e.length && !t.length || (e[0] > t[0] || (parseInt(e[0]) === parseInt(t[0]) ? this._isVersionGreaterOrEqual(e.slice(1), t.slice(1)) : !(e[0] < t[0]) && void 0))
                }
            }, {
                key: "track",
                value: function(e) {
                    if (this.tracker) {
                        if ("milestone" === e.eventType) {
                            if (!this.options.trackMilestones && void 0 === e.seeked)
                                return;
                            if (!this.options.trackSeeking && void 0 !== e.seeked)
                                return
                        }
                        this.tracker.track({
                            type: "video",
                            data: e,
                            options: this.options
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.detachEvents(),
                    this.options = null,
                    this.tracker = null,
                    this.video = null,
                    this.playCount = null,
                    this.ttShowCount = null,
                    this._events = null,
                    this._callbacks = null,
                    observerRegistry.remove(this)
                }
            }]),
            e
        }();
        module.exports = VideoAnalyticsObserver
    }
    , {
        "../ErrorHandler": 118,
        "../Tracker": 120,
        "./observerRegistry": 158,
        "@marcom/ac-dom-nodes/isNode": 29,
        "@marcom/feature-detect/isHandheld": 62,
        "@marcom/function-utils/debounce": 65,
        "@marcom/useragent-detect": 70
    }],
    158: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var s = 0; s < r.length; s++) {
                var o = r[s];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function _createClass(e, r, s) {
            return r && _defineProperties(e.prototype, r),
            s && _defineProperties(e, s),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var idIncrementor = 0
          , observerRegistry = function() {
            function e() {
                _classCallCheck(this, e),
                this.observers = {}
            }
            return _createClass(e, [{
                key: "destroy",
                value: function() {
                    var e = this.observers;
                    Object.keys(this.observers).forEach(function(r) {
                        e[r] && e[r].forEach(function(e) {
                            e.destroy && e.destroy()
                        })
                    }),
                    idIncrementor = 0
                }
            }, {
                key: "add",
                value: function(e) {
                    this.observers[e.observerType] || (this.observers[e.observerType] = []),
                    e.observerId = idIncrementor,
                    idIncrementor++,
                    this.observers[e.observerType].push(e)
                }
            }, {
                key: "remove",
                value: function(e) {
                    this.observers[e.observerType] && (this.observers[e.observerType] = this.observers[e.observerType].filter(function(r) {
                        if (r.observerId !== e.observerId)
                            return !0
                    }),
                    this.observers[e.observerType].length || delete this.observers[e.observerType])
                }
            }]),
            e
        }();
        module.exports = new observerRegistry
    }
    , {}],
    159: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var errorHandler = require("./ErrorHandler")
          , moduleName = "PassiveTracker"
          , passiveTrackerPath = require("./constants").dataLayer.paths.passiveTracker
          , templateVarHelper = require("./helpers/templateVar")
          , get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set;
        function track(e, t) {
            if (t = t || {},
            e && "object" === _typeof(e) && !Array.isArray(e)) {
                t.priority = t.priority || 50,
                t.trackOnPageLoad = !0 === t.trackOnPageLoad,
                t.trackOnExitLink = !0 === t.trackOnExitLink,
                e.options = {},
                t.overwriteAppMeasurementValues && (e.options.overwriteAppMeasurementValues = !0),
                !1 === t.overwriteAppMeasurementEvents && (e.options.overwriteAppMeasurementEvents = !1),
                t.trackOnPageLoad && (e.options.trackOnPageLoad = !0),
                t.trackOnExitLink && (e.options.trackOnExitLink = !0),
                e.options.priority = t.priority;
                var r = JSON.stringify(e);
                r ? (r = templateVarHelper.translate(r, templateVarHelper.set()),
                storeTrackingData(JSON.parse(r), t)) : errorHandler.warn(moduleName, "track", "data was invalid because it could not be stringified")
            } else
                errorHandler.warn(moduleName, "track", "data must be a valid object")
        }
        function storeTrackingData(e, t) {
            var r = getExistingData(t);
            if (r) {
                var a = createMergedData(e, r, t);
                a && storeData(a)
            } else
                storeData([e])
        }
        function getExistingData(e) {
            if (e.overwriteStorageItem)
                return null;
            var t = get(passiveTrackerPath);
            return t ? "object" !== _typeof(t = JSON.parse(t)) ? null : t : void 0
        }
        function createMergedData(e, t) {
            return t.push(e),
            t
        }
        function storeData(e) {
            "object" === _typeof(e) && (e = JSON.stringify(e)),
            set(passiveTrackerPath, e)
        }
        module.exports = track
    }
    , {
        "./ErrorHandler": 118,
        "./constants": 121,
        "./helpers/templateVar": 145,
        "@apple/analytics-data-layer": 4
    }],
    160: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, r) {
            for (var i = 0; i < r.length; i++) {
                var t = r[i];
                t.enumerable = t.enumerable || !1,
                t.configurable = !0,
                "value"in t && (t.writable = !0),
                Object.defineProperty(e, t.key, t)
            }
        }
        function _createClass(e, r, i) {
            return r && _defineProperties(e.prototype, r),
            i && _defineProperties(e, i),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        var TrackerRegistry = function() {
            function e() {
                _classCallCheck(this, e),
                this.registry = {}
            }
            return _createClass(e, [{
                key: "addEntry",
                value: function(e, r, i, t) {
                    this.registry[r] = {
                        type: e,
                        name: r,
                        order: i,
                        track: t
                    }
                }
            }, {
                key: "processBeaconByType",
                value: function(e, r) {
                    var i = Object.values(this.registry).filter(function(r) {
                        return r.type === e
                    });
                    i.sort(function(e, r) {
                        return e.order - r.order
                    }),
                    i.forEach(function(e) {
                        e.track(r)
                    })
                }
            }, {
                key: "registerAllTrackers",
                value: function() {
                    [require("./pageHide"), require("./endOfPage"), require("./pageLoad"), require("./storeDeferredBeaconAtPageLoad"), require("./customPageLoad"), require("./deferredToPageLoad"), require("./sectionEngagement"), require("./click"), require("./link"), require("./navigationalLink"), require("./gallery"), require("./video"), require("./event"), require("./elementEngagement"), require("./performance"), require("./search/begin"), require("./search/perform")].forEach(function(e) {
                        e.initialize()
                    })
                }
            }]),
            e
        }();
        module.exports = new TrackerRegistry
    }
    , {
        "./click": 161,
        "./customPageLoad": 162,
        "./deferredToPageLoad": 163,
        "./elementEngagement": 164,
        "./endOfPage": 165,
        "./event": 166,
        "./gallery": 167,
        "./link": 168,
        "./navigationalLink": 169,
        "./pageHide": 170,
        "./pageLoad": 171,
        "./performance": 172,
        "./search/begin": 175,
        "./search/perform": 176,
        "./sectionEngagement": 177,
        "./storeDeferredBeaconAtPageLoad": 178,
        "./video": 179
    }],
    161: [function(require, module, exports) {
        "use strict";
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var registry = require("./TrackerRegistry")
          , regions = require("./regions/regions")
          , parseFromDataAttribute = require("../helpers/parseFromDataAttribute")
          , get = require("@apple/analytics-data-layer").get
          , setOptions = require("../helpers/setOptions")
          , separator = require("../helpers/separator")
          , formatter = require("../helpers/formatter")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , confKey = dataLayerConfig.key
          , confKeys = dataLayerConfig.keys
          , moduleName = "clickTracker";
        function initialize() {
            registry.addEntry("click", moduleName, 50, track)
        }
        function track(t) {
            var e = generateSourceData(t);
            return t.beacon.title = e.formattedTitle,
            t.beacon.prop3 = e.formattedTitle,
            t.beacon.eVar1 = get([confKey, confKeys.computedPageName]) + separator.pipe + e.regionAncestry + e.title,
            _setCustomTrackingProps(t),
            t.options.async = setOptions.async(t.data),
            t
        }
        function generateSourceData(t) {
            var e, r = {}, a = t.data.targetEl.getAttribute("data-" + t.options.titleDataAttribute);
            return e = (e = a || (t.data.targetEl.textContent ? t.data.targetEl.textContent.trim() : t.data.targetEl.innerText ? t.data.targetEl.innerText.trim() : "no title available")).toLowerCase(),
            r.title = e,
            r.formattedTitle = get([confKey, confKeys.pageName]) + separator.hyphen + e,
            r.regionAncestry = regions.getRegionAncestryByElement(t.data.targetEl),
            r.regionAncestry = formatter.getRegionAncestry(r),
            r
        }
        function _setCustomTrackingProps(t) {
            var e = t.data.targetEl.getAttribute("data-" + t.options.dataAttribute)
              , r = e ? parseFromDataAttribute(e, t.data.targetEl) : "";
            if (r || "object" === _typeof(r))
                for (var a in r)
                    "usePassiveTracker" === a ? "true" === r[a] && (t.options.usePassiveTracker = !0) : "useBeacon" === a ? "true" === r[a] && (t.options.useBeacon = !0) : t.beacon[a] = r[a]
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../constants": 121,
        "../helpers/formatter": 130,
        "../helpers/parseFromDataAttribute": 141,
        "../helpers/separator": 142,
        "../helpers/setOptions": 143,
        "./TrackerRegistry": 160,
        "./regions/regions": 174,
        "@apple/analytics-data-layer": 4
    }],
    162: [function(require, module, exports) {
        "use strict";
        function _typeof(r) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                return typeof r
            }
            : function(r) {
                return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }
            )(r)
        }
        var registry = require("./TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , errorHandler = require("../ErrorHandler")
          , moduleName = "customPageLoad"
          , dataLayerKeys = require("../constants").dataLayer
          , confKey = dataLayerKeys.configuration.key
          , confKeys = dataLayerKeys.configuration.keys;
        function initialize() {
            registry.addEntry("page", moduleName, 100, track)
        }
        function track(r) {
            var e = get([confKey, confKeys.pageTrackingData]);
            if (!e)
                return r;
            try {
                e = JSON.parse(e)
            } catch (r) {
                errorHandler.warn(moduleName, "_setCustomProps", "JSON.parse had an error with the input of: \n\n" + e + "\n\nIs it in proper JSON format? \n\nOriginal error:\n" + r)
            }
            if (!e || "object" !== _typeof(e) || Array.isArray(e))
                return r;
            for (var t in e)
                e.hasOwnProperty(t) && (r.beacon[t] = e[t]);
            return r
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../ErrorHandler": 118,
        "../constants": 121,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4
    }],
    163: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , remove = require("@apple/analytics-data-layer").remove
          , dataLayerKeys = require("../constants").dataLayer
          , deferredPath = dataLayerKeys.paths.deferred
          , setProperty = require("../helpers/setProperty")
          , moduleName = "deferredToPageLoad";
        function initialize() {
            registry.addEntry("page", moduleName, 50, track)
        }
        function track(e) {
            var r = _getDeferredData() || {};
            return Object.keys(r).forEach(function(a) {
                setProperty(e.beacon, a, r[a])
            }),
            !e.beacon.prop57 && r.hier1 && setProperty(e.beacon, "prop57", r.hier1),
            e
        }
        function _getDeferredData() {
            var e = get(deferredPath);
            return remove(deferredPath),
            e || (e = {}),
            delete e.eVar15,
            e
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../constants": 121,
        "../helpers/setProperty": 144,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4
    }],
    164: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , moduleName = "elementEngagementTracker";
        function initialize() {
            registry.addEntry("elementEngagement", moduleName, 50, track)
        }
        function track(e) {
            var t, n, i;
            return e.beacon.title = "element engagement",
            e.beacon.events = "event316",
            e.beacon.prop3 = e.data.engagementTitle,
            e.beacon.eVar30 = (null === (t = e.options) || void 0 === t ? void 0 : null === (n = t.target) || void 0 === n ? void 0 : null === (i = n.dataset) || void 0 === i ? void 0 : i.analyticsRegion) || "missing region",
            e
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "./TrackerRegistry": 160
    }],
    165: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , moduleName = "endOfPageTracker";
        function initialize() {
            registry.addEntry("endOfPage", moduleName, 50, track)
        }
        function track(e) {
            return e.beacon = {
                title: "end of page",
                events: e.data.events
            },
            e
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "./TrackerRegistry": 160
    }],
    166: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , moduleName = "customTracker";
        function initialize() {
            registry.addEntry("custom", moduleName, 50, track)
        }
        function track(r) {
            for (var t in r.data)
                r.beacon[t] = r.data[t];
            return r
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "./TrackerRegistry": 160
    }],
    167: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , ancestor = require("@marcom/dom-traversal/ancestor")
          , get = require("@apple/analytics-data-layer").get
          , formatter = require("../helpers/formatter")
          , separator = require("../helpers/separator")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , moduleName = "galleryTracker"
          , interactionTypes = {
            click: function(e) {
                return _triggerNavType(e) || "click"
            },
            auto: function() {
                return "auto"
            },
            keydown: function() {
                return "keydown"
            },
            touchend: function() {
                return "swipe"
            },
            touchstart: function() {
                return "swipe"
            },
            touchmove: function() {
                return "swipe"
            }
        }
          , interactionTypeMap = {
            click: "ci",
            keydown: "ki",
            swipe: "si",
            dotnav: "bi",
            thumbnav: "ci",
            tabnav: "ci",
            paddlenav: "pi",
            auto: "ai"
        };
        function initialize() {
            registry.addEntry("gallery", moduleName, 50, track)
        }
        function track(e) {
            var t, a, n = _interactionEventType(e), i = n;
            interactionTypes[n] && (i = interactionTypes[n](e)),
            e.data.targetEl = _getTargetElement(e),
            e.data.slideInViewTime = _slideInViewTime(e),
            e.data.outgoingInteractionType = e.observer.outgoingSlideInteractionType,
            e.data.incomingInteractionType = i,
            e.data.galleryFirstTimeTrigger = _isFirstTimeGalleryTrigger(e),
            e.observer.outgoingSlideInteractionType = i,
            interactionTypeMap[e.data.incomingInteractionType] && (a = interactionTypeMap[e.data.incomingInteractionType]),
            void 0 === a && (a = "ci"),
            interactionTypeMap[e.data.outgoingInteractionType] && (t = interactionTypeMap[e.data.outgoingInteractionType]),
            void 0 === t && (t = "ci");
            var r = get([dataLayerConfig.key, dataLayerConfig.keys.pageName]) + separator.hyphen + e.options.galleryName + separator.hyphen;
            return e.beacon.prop2 = formatter.eventString(t, "") + r + e.data.outgoing.id,
            e.beacon.prop3 = e.beacon.title = formatter.eventString(a, "") + r + e.data.incoming.id,
            !0 === e.data.galleryFirstTimeTrigger && (e.beacon.prop16 = "gallery interaction",
            e.beacon.eVar16 = (e.options.galleryName ? e.options.galleryName + " " : "") + "gallery interaction",
            e.beacon.events = "event1"),
            e
        }
        function _triggerNavType(e) {
            var t = !1
              , a = _getTargetElement(e);
            return a && (t = _getNavType(a)),
            t
        }
        function _getNavType(e) {
            var t, a, n = null, i = ["dotnav", "thumbnav", "paddlenav", "tabnav"], r = ancestor(e, ".dotnav, .thumbnav, .paddlenav, .tabnav, [data-analytics-gallery-interaction-type]");
            if (r)
                if (r.hasAttribute("data-analytics-gallery-interaction-type"))
                    n = r.getAttribute("data-analytics-gallery-interaction-type");
                else
                    for (t = r.className,
                    a = 0; a < i.length; a++)
                        if (-1 !== t.indexOf(i[a])) {
                            n = i[a];
                            break
                        }
            return n
        }
        function _getTargetElement(e) {
            var t = e.data.interactionEvent
              , a = !1;
            return t && (a = t.target || t.srcElement),
            a
        }
        function _slideInViewTime(e) {
            return e.data.incomingSlideTimestamp - e.data.outgoingSlideTimestamp
        }
        function _isFirstTimeGalleryTrigger(e) {
            var t = e.data.incomingInteractionType
              , a = e.observer
              , n = !1;
            return "auto" !== t && -1 === a.trackedInteractionTypes.indexOf(t) && (n = !0,
            a.trackedInteractionTypes.push(t)),
            n
        }
        function _interactionEventType(e) {
            var t = e.data
              , a = "auto";
            return t.interactionEvent && t.interactionEvent.type && (a = t.interactionEvent.type),
            a
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../constants": 121,
        "../helpers/formatter": 130,
        "../helpers/separator": 142,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4,
        "@marcom/dom-traversal/ancestor": 55
    }],
    168: [function(require, module, exports) {
        "use strict";
        function _typeof(t) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        var registry = require("./TrackerRegistry")
          , regions = require("./regions/regions")
          , separator = require("../helpers/separator")
          , formatter = require("../helpers/formatter")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , get = require("@apple/analytics-data-layer").get
          , moduleName = "linkTracker";
        function initialize() {
            registry.addEntry("link", moduleName, 50, track)
        }
        function track(t) {
            var e = regions.getRegionByElement(t.data.targetEl)
              , a = t.data.targetEl.getAttribute("data-" + t.options.titleDataAttribute);
            return a ? t.data.linkText = a : t.data.targetEl.textContent ? t.data.linkText = t.data.targetEl.textContent.trim() : t.data.targetEl.innerText ? t.data.linkText = t.data.targetEl.innerText.trim() : t.data.linkText = "no title available",
            t.data.regionAncestry = regions.getRegionAncestryByElement(t.data.targetEl),
            t.data.targetEl.id && (t.data.linkId = t.data.targetEl.id),
            "object" === _typeof(e) && (t.data.region = e.name),
            setNavigationSrc(t),
            t
        }
        function setNavigationSrc(t) {
            var e = t.data
              , a = {}
              , r = {}
              , i = formatter.getRegionAncestry(e)
              , n = get([dataLayerConfig.key, dataLayerConfig.keys.computedPageName]) || ""
              , o = e.linkText || "";
            r.eVar1 = a.eVar1 = n + separator.pipe + i + o,
            r.prop57 = a.prop57 = get([dataLayerConfig.key, dataLayerConfig.keys.computedChannel]) || "",
            t.beacon = r
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../constants": 121,
        "../helpers/formatter": 130,
        "../helpers/separator": 142,
        "./TrackerRegistry": 160,
        "./regions/regions": 174,
        "@apple/analytics-data-layer": 4
    }],
    169: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , pageHide = require("./pageHide")
          , moduleName = "navigationalLinkTracker";
        function initialize() {
            registry.addEntry("navigationalLink", moduleName, 50, track)
        }
        function track(i) {
            return pageHide.track(i)
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "./TrackerRegistry": 160,
        "./pageHide": 170
    }],
    170: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , moduleName = "beforeUnload"
          , getPassiveTrackerData = require("../helpers/getPassiveTrackerData")
          , filterBeaconsByType = require("../helpers/filterBeaconsByType")
          , mergePassiveTrackerData = require("../helpers/mergePassiveTrackerData")
          , remove = require("@apple/analytics-data-layer").remove
          , passiveTrackerPath = require("../constants").dataLayer.paths.passiveTracker
          , _require = require("@apple/analytics-merge-beacons")
          , merge = _require.merge;
        function initialize() {
            registry.addEntry("pageHide", moduleName, 50, track)
        }
        function track(e) {
            var r = getPassiveTrackerData();
            return r && (r = filterBeaconsByType(r, "page")).length ? (r = mergePassiveTrackerData(r),
            e.beacon = merge({
                target: e.beacon,
                source: r
            }),
            remove(passiveTrackerPath),
            e) : e
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../constants": 121,
        "../helpers/filterBeaconsByType": 129,
        "../helpers/getPassiveTrackerData": 132,
        "../helpers/mergePassiveTrackerData": 139,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-merge-beacons": 6
    }],
    171: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , separator = require("../helpers/separator")
          , moduleName = "pageLoad"
          , dataLayerKeys = require("../constants").dataLayer
          , confKey = dataLayerKeys.configuration.key
          , confKeys = dataLayerKeys.configuration.keys
          , setProperty = require("../helpers/setProperty");
        function initialize() {
            registry.addEntry("page", moduleName, 1, track)
        }
        function track(e) {
            var a;
            return setProperty(e.beacon, "prop20", "AOS".concat(separator.colon, "{COUNTRY_CODE}")),
            setProperty(e.beacon, "pageName", get([confKey, confKeys.computedPageName])),
            setProperty(e.beacon, "channel", get([confKey, confKeys.computedChannel])),
            setProperty(e.beacon, "eVar3", e.beacon.prop20),
            null !== (a = window.ac_target) && void 0 !== a && a.ssdata && setProperty(e.beacon, "eVar57", window.ac_target.ssdata),
            e
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../constants": 121,
        "../helpers/separator": 142,
        "../helpers/setProperty": 144,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4
    }],
    172: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , passiveTracker = require("../passiveTracker")
          , performanceTimingEvents = require("../constants").performanceTimingEvents
          , passiveTrackerOptions = {
            trackOnPageLoad: !0,
            trackOnExitLink: !0
        }
          , moduleName = "performanceTracker"
          , hasTracked = !1;
        function initialize() {
            registry.addEntry("readyStateComplete", moduleName, 50, track)
        }
        function track(e) {
            if (window && window.performance && window.performance.timing && !hasTracked)
                var n = e.options
                  , r = setInterval(function() {
                    window.performance.timing.loadEventEnd && (performanceWrite(window.performance, n),
                    trackFirstContentfulPaint(window.performance),
                    hasTracked = !0,
                    clearInterval(r))
                }, 200)
        }
        function trackFirstContentfulPaint(e) {
            var n = e.getEntriesByName("first-contentful-paint");
            if (n && n.length && n[0].startTime && n[0].startTime.toFixed(2)) {
                var r = {
                    events: "event419=".concat((n[0].startTime / 1e3).toFixed(3), ",event420")
                };
                passiveTracker(r, passiveTrackerOptions)
            }
        }
        function trackFirstMeaningfulPaint(e) {
            if (e)
                e = parseFloat(e);
            else {
                if (!window || !window.performance || !window.performance)
                    return;
                e = window.performance.now()
            }
            if ("number" == typeof e) {
                var n = {
                    events: "event421=".concat((e / 1e3).toFixed(3), ",event422")
                };
                passiveTracker(n, passiveTrackerOptions)
            }
        }
        function performanceWrite(e) {
            var n = e.timing
              , r = [];
            r.push(performanceCheck(n.fetchStart, n.navigationStart)),
            r.push(performanceCheck(n.domainLookupStart, n.fetchStart)),
            r.push(performanceCheck(n.domainLookupEnd, n.domainLookupStart)),
            r.push(performanceCheck(n.connectEnd, n.connectStart)),
            r.push(performanceCheck(n.responseStart, n.connectEnd)),
            r.push(performanceCheck(n.responseEnd, n.responseStart)),
            r.push(performanceCheck(n.domInteractive, n.domLoading)),
            r.push(performanceCheck(n.domContentLoadedEventEnd, n.domInteractive)),
            r.push(performanceCheck(n.domComplete, n.domContentLoadedEventEnd)),
            r.push(performanceCheck(n.loadEventStart, n.domLoading)),
            r.push(performanceCheck(n.loadEventEnd, n.loadEventStart)),
            r.push(performanceCheck(n.loadEventEnd, n.navigationStart));
            var t = performanceTimingEvents.split(",")
              , a = "";
            t.forEach(function(e, n) {
                void 0 !== r[n] ? a += "".concat(e, "=").concat(r[n], ",") : a += "".concat(e, ",")
            }),
            a = a.substring(0, a.length - 1),
            passiveTracker({
                events: a
            }, passiveTrackerOptions)
        }
        function performanceCheck(e, n) {
            return e - n < 6e4 && e - n >= 0 ? ((e - n) / 1e3).toFixed(3) : 600
        }
        module.exports = {
            track: track,
            initialize: initialize,
            trackFirstMeaningfulPaint: trackFirstMeaningfulPaint
        }
    }
    , {
        "../constants": 121,
        "../passiveTracker": 159,
        "./TrackerRegistry": 160
    }],
    173: [function(require, module, exports) {
        "use strict";
        function _classCallCheck(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function _createClass(t, e, i) {
            return e && _defineProperties(t.prototype, e),
            i && _defineProperties(t, i),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        var dataAttribute = "analytics-region"
          , optionsAttribute = "analytics-options"
          , validJSONPattern = /(?:\w+:\w+)(?:,(?=(?:\w+:\w+))|$)/
          , singleValuePattern = /[\w\s]+/
          , dataStringToObject = require("../../helpers/dataStringToObject")
          , Region = function() {
            function t(e) {
                _classCallCheck(this, t),
                this.element = e,
                this.childRegions = {},
                this.parentRegion = "",
                this.options = this.getDataOptions(),
                this.name = this.setName()
            }
            return _createClass(t, [{
                key: "setName",
                value: function() {
                    var t = "";
                    return this.options.name && (t = this.options.name),
                    !this.options.name && this.element.id && (this.options.name = this.element.id),
                    t
                }
            }, {
                key: "getDataOptions",
                value: function() {
                    var t = {}
                      , e = this.element.getAttribute("data-" + dataAttribute)
                      , i = this.element.getAttribute("data-" + optionsAttribute);
                    for (var n in e = this._removeTrailingCommas(e),
                    i = this._removeTrailingCommas(i),
                    this._isJSONable(e) ? t = dataStringToObject(e) : this._isSingleValue(e) && (t.name = e),
                    i && this._isJSONable(i) && (t = Object.assign({}, t, dataStringToObject(i))),
                    t)
                        t.hasOwnProperty(n) && ("false" === t[n] ? t[n] = !1 : "true" === t[n] && (t[n] = !0));
                    return t
                }
            }, {
                key: "_isJSONable",
                value: function(t) {
                    return validJSONPattern.test(t)
                }
            }, {
                key: "_isSingleValue",
                value: function(t) {
                    return singleValuePattern.test(t)
                }
            }, {
                key: "_removeTrailingCommas",
                value: function(t) {
                    if (t && "string" == typeof t)
                        return "," === t.charAt(t.length - 1) ? t.substr(0, t.length - 1) : t
                }
            }]),
            t
        }();
        module.exports = {
            Region: Region,
            dataAttribute: dataAttribute
        }
    }
    , {
        "../../helpers/dataStringToObject": 126
    }],
    174: [function(require, module, exports) {
        "use strict";
        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var domNodes = require("@marcom/ac-dom-nodes")
          , Region = require("./Region").Region
          , dataAttribute = require("./Region").dataAttribute
          , allRegions = []
          , tree = {};
        function getAllRegions() {
            if (allRegions.length > 0)
                return allRegions;
            var e, n = document.querySelectorAll("[data-" + dataAttribute + "]"), o = n.length, t = 0;
            function i(e) {
                for (var o; domNodes.isNodeType(n[t + 1], domNodes.NODE_TYPES.ELEMENT) && e.element.contains(n[t + 1]); )
                    o = new Region(n[t + 1]),
                    allRegions.push(o),
                    o.parentRegion = e.name,
                    e.childRegions[o.name] = o,
                    t += 1,
                    i(o)
            }
            for (; t < o; t += 1)
                e = new Region(n[t]),
                tree[e.name] = e,
                allRegions.push(e),
                i(e);
            return allRegions
        }
        function getTree() {
            if (getAllRegions(),
            Object.keys(tree).length > 0)
                return tree
        }
        function getRegionByElement(e) {
            if (domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT)) {
                var n = getRegionAncestryByElement(e);
                if (n.length > 0)
                    return n.pop()
            }
        }
        function getRegionAncestryByElement(e) {
            var n = getAllRegions();
            if (domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT))
                return n.filter(function(n) {
                    if (n.element.contains(e))
                        return _refreshDynamicRegion(n),
                        !0
                })
        }
        function getRegionByName(e) {
            var n = getAllRegions();
            if ("string" == typeof e)
                return n.filter(function(n) {
                    return _refreshDynamicRegion(n),
                    n.name === e
                })
        }
        function _refreshDynamicRegion(e) {
            e.options && e.options.dynamic && refreshRegion(e)
        }
        function refreshRegion(e) {
            var n = e;
            domNodes.isNodeType(e, domNodes.NODE_TYPES.ELEMENT) && (n = getRegionByElement(e)),
            "object" === _typeof(n) && allRegions.forEach(function(e) {
                e.element === n.element && (e.options = e.getDataOptions(),
                e.name = e.setName())
            })
        }
        function clearRegions() {
            allRegions = []
        }
        module.exports = {
            getTree: getTree,
            getAllRegions: getAllRegions,
            getRegionByElement: getRegionByElement,
            getRegionByName: getRegionByName,
            getRegionAncestryByElement: getRegionAncestryByElement,
            refreshRegion: refreshRegion,
            clearRegions: clearRegions
        }
    }
    , {
        "./Region": 173,
        "@marcom/ac-dom-nodes": 22
    }],
    175: [function(require, module, exports) {
        "use strict";
        var getBeginBeacon = require("@apple/analytics-search").begin
          , merge = require("@apple/analytics-merge-beacons").merge
          , registry = require("../TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../constants").dataLayer.configuration
          , confKey = dataLayerConfig.key
          , confKeys = dataLayerConfig.keys
          , pageTypeKey = [confKey, confKeys.pageType]
          , moduleName = "beginSearchTracker"
          , config = {
            action: {
                OPEN: "open",
                CLOSE: "close",
                ENGAGE: "engage"
            },
            errorPage: {
                pageType: "errorPage",
                id: "searchform-input"
            },
            trackEvents: ["linkClick", "focusin"],
            globalNav: ".ac-gn-link-search, #globalnav-menubutton-link-search"
        };
        function initialize() {
            registry.addEntry("linkClick", moduleName + "LinkClick", 50, track),
            registry.addEntry("focusin", moduleName + "FocusIn", 50, track)
        }
        function track(e) {
            var a = getSearchObj(e);
            return a ? (merge({
                target: e.beacon,
                source: getBeginBeacon(a)
            }),
            e.beacon.title = e.beacon.prop3,
            e) : null
        }
        function getSearchObj(e) {
            if (!(e && e.type && e.event && e.event.dynamicEventBinderTarget))
                return null;
            if (!config.trackEvents.includes(e.type))
                return null;
            var a = e.event.dynamicEventBinderTarget;
            return get(pageTypeKey) === config.errorPage.pageType && a.id === config.errorPage.id ? {
                action: config.action.ENGAGE
            } : a.matches(config.globalNav) ? {
                action: Boolean(a.dataset.analyticsTitle) ? config.action.OPEN : config.action.CLOSE
            } : null
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../../constants": 121,
        "../TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-merge-beacons": 6,
        "@apple/analytics-search": 11
    }],
    176: [function(require, module, exports) {
        "use strict";
        var getPerformBeacon = require("@apple/analytics-search").perform
          , merge = require("@apple/analytics-merge-beacons").merge
          , registry = require("../TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , dataLayerConfig = require("../../constants").dataLayer.configuration
          , confKey = dataLayerConfig.key
          , confKeys = dataLayerConfig.keys
          , pageTypeKey = [confKey, confKeys.pageType]
          , moduleName = "performSearchTracker"
          , config = {
            errorPage: {
                pageType: "errorPage",
                id: "searchform-form"
            },
            searchPage: {
                pageType: "search"
            },
            trackEvents: ["submit", "linkClick"],
            globalNav: "#ac-gn-searchform, .globalnav-searchfield",
            globalNavLink: ".ac-gn-searchresults-link, .globalnav-searchresults-list-link",
            searchSource: {
                ERROR: "error",
                SEARCH: "search",
                MARCOM: "www"
            },
            searchMethod: {
                TYPED: "typed",
                DEFAULT: "default"
            },
            keywordSelectors: {
                globalNav: "#ac-gn-searchform-input, .globalnav-searchfield-input",
                errorPage: "#searchform-input"
            }
        };
        function initialize() {
            registry.addEntry("linkClick", moduleName + "LinkClick", 50, track),
            registry.addEntry("submit", moduleName + "FocusIn", 50, track)
        }
        function track(e) {
            var r = getSearchObj(e);
            return r ? (e.options.deferred = !0,
            e.options.silent = !0,
            merge({
                target: e.beacon,
                source: getPerformBeacon(r)
            }),
            e) : null
        }
        function getSearchObj(e) {
            var r = e.type
              , a = e.event;
            if (!a || !config.trackEvents.includes(r))
                return null;
            var t = a.dynamicEventBinderTarget;
            return [submitForm, clickLink].reduce(function(e, r) {
                return e || r({
                    el: t
                })
            }, null) || null
        }
        function clickLink(e) {
            var r = e.el;
            if (!r.matches(config.globalNavLink))
                return null;
            var a = getElementDataSet(r, "section");
            return {
                keyword: getElementDataSet(r, "query"),
                method: a,
                position: getElementDataSet(r, "index"),
                results: getElementDataSet(r, "items"),
                source: getSearchSource(r),
                suggestedValue: getElementDataSet(r, "label"),
                type: a
            }
        }
        function getElementDataSet(e, r) {
            return e.dataset[r] || null
        }
        function getSearchSource(e) {
            return get(pageTypeKey) === config.errorPage.pageType ? config.searchSource.ERROR : get(pageTypeKey) === config.searchPage.pageType ? config.searchSource.SEARCH : config.searchSource.MARCOM
        }
        function getInputValue(e) {
            var r, a;
            return get(pageTypeKey) === config.errorPage.pageType ? (null === (r = e.querySelector(config.keywordSelectors.errorPage)) || void 0 === r ? void 0 : r.value) || null : e.matches(config.globalNav) && (null === (a = e.querySelector(config.keywordSelectors.globalNav)) || void 0 === a ? void 0 : a.value) || null
        }
        function submitForm(e) {
            var r = e.el;
            return r.matches(config.globalNav) || r.id === config.errorPage.id ? {
                keyword: getInputValue(r),
                method: config.searchMethod.TYPED,
                source: getSearchSource(r)
            } : null
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../../constants": 121,
        "../TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-merge-beacons": 6,
        "@apple/analytics-search": 11
    }],
    177: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , separator = require("../helpers/separator")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , confKey = dataLayerConfig.key
          , moduleName = "sectionEngagement";
        function initialize() {
            registry.addEntry("section", moduleName, 50, track)
        }
        function track(e) {
            var t = e.data.element
              , a = t.name || t.id || ""
              , r = t.thresholdExitTime - t.thresholdEnterTime;
            if (t.element && t.element.position && (t.element.position + separator.dot + separator.space,
            separator.space + separator.dot + t.element.position),
            e.beacon.title = "section engagement",
            e.beacon.prop34 = a,
            e.beacon.prop35 = (r / 1e3).toFixed(2),
            e.beacon.prop36 = t.element.position,
            e.beacon.prop35) {
                var n = "event243=" + e.beacon.prop35;
                e.beacon.events = n + ",event244"
            }
            return e
        }
        module.exports = {
            initialize: initialize,
            track: track
        }
    }
    , {
        "../constants": 121,
        "../helpers/separator": 142,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4
    }],
    178: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , get = require("@apple/analytics-data-layer").get
          , _require = require("@apple/analytics-passive-tracker")
          , merge = _require.merge
          , set = _require.set
          , moduleName = "storeForNextPageTracker";
        function initialize() {
            registry.addEntry("storeAtPageLoad", moduleName, 50, track)
        }
        function track(e) {
            var a = get([dataLayerConfig.key, dataLayerConfig.keys.computedPageName])
              , r = {};
            e.beacon.prop57 = r.prop57 = get([dataLayerConfig.key, dataLayerConfig.keys.computedChannel]) || "",
            set("pageName", a, {
                type: "page"
            }),
            merge("beacon", r, {
                type: "page"
            })
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../constants": 121,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4,
        "@apple/analytics-passive-tracker": 9
    }],
    179: [function(require, module, exports) {
        "use strict";
        var registry = require("./TrackerRegistry")
          , get = require("@apple/analytics-data-layer").get
          , formatter = require("../helpers/formatter")
          , separator = require("../helpers/separator")
          , dataLayerConfig = require("../constants").dataLayer.configuration
          , moduleName = "videoTracker"
          , eventTypes = {
            play: function() {
                return "started"
            },
            ended: function() {
                return "ended"
            },
            texttrackshow: function(e) {
                return 0 === e.data.ttShowCount ? "texttrackshow" : "texttrackshown"
            },
            milestone: function(e) {
                return e.data.seeked ? "seeked" : "milestone"
            }
        }
          , interactionTypes = {
            click: function(e) {
                return e.data.event.type
            }
        }
          , milestoneEvents = {
            0: {
                play: null,
                seek: "event214"
            },
            .1: {
                play: "event73",
                seek: "event215"
            },
            .25: {
                play: "event74",
                seek: "event216"
            },
            .5: {
                play: "event75",
                seek: "event217"
            },
            .75: {
                play: "event76",
                seek: "event218"
            },
            .9: {
                play: "event77",
                seek: "event219"
            }
        }
          , eventTypeMap = {
            started: "s",
            ended: "e",
            texttrackshow: "ce",
            seeked: "sk",
            milestone: "m"
        };
        function initialize() {
            registry.addEntry("video", moduleName, 50, track)
        }
        function track(e) {
            var t = e.data;
            t.eventType = eventTypes[t.eventType] ? eventTypes[t.eventType](e) : t.eventType,
            t.event && interactionTypes[t.event.type] && (t.interactionType = interactionTypes[t.event.type](e)),
            isNaN(t.duration) ? t.duration = "unavailable" : t.duration = Math.round(t.duration).toString(),
            isNaN(t.currentTime) ? t.currentTime = "unavailable" : t.currentTime = Math.round(t.currentTime).toString(),
            eventTypeMap[t.eventType] ? e.options.silent = !1 : e.options.silent = !0;
            var n = get([dataLayerConfig.key, dataLayerConfig.keys.pageName]) + separator.hyphen + t.videoId
              , r = _setTitle(t, n, t.eventType && eventTypeMap[t.eventType] ? eventTypeMap[t.eventType] : t.eventType)
              , a = {};
            return a.title = a.prop13 = r,
            a.eVar87 = n,
            void 0 !== t.duration && e.options.trackDuration && (a.eVar91 = t.duration,
            _setEvents(a, "event233=" + t.duration)),
            void 0 !== t.currentTime && "ended" !== t.eventType && e.options.trackCurrentTime && (a.eVar92 = t.currentTime,
            _setEvents(a, "event69=" + t.currentTime)),
            t.src && (a.eVar95 = t.src),
            "started" === t.eventType && (a.prop16 = a.eVar16 = "video plays",
            _setEvents(a, "event2")),
            "ended" === t.eventType && (a.prop16 = a.eVar16 = "video ends",
            _setEvents(a, "event72"),
            void 0 !== t.duration && e.options.trackCurrentTime && (a.eVar92 = t.duration,
            _setEvents(a, "event69=" + t.duration))),
            "texttrackshow" === t.eventType && (a.title = a.prop2 = n + separator.hyphen + "cc",
            a.prop13 = ""),
            "milestone" !== t.eventType && "seeked" !== t.eventType || (_setMilestoneEventValues(milestoneEvents, t, a),
            a.prop13 = ""),
            "milestone" === t.eventType && (a.prop16 = a.eVar16 = "video milestone"),
            "seeked" === t.eventType && (a.eVar96 = "" + 100 * t.milestone,
            a.prop16 = a.eVar16 = "video seek"),
            t.videoType && t.playerType && (a.prop18 = t.videoType + " via " + t.playerType),
            e.beacon = a,
            e
        }
        function _setMilestoneEventValues(e, t, n) {
            _setEvents(n, t.seeked ? e[t.milestone].seek : e[t.milestone].play)
        }
        function _setEvents(e, t) {
            e.events ? e.events += "," + t : e.events = t
        }
        function _setTitle(e, t, n) {
            var r = formatter.eventString("v", n)
              , a = null;
            return e.hasOwnProperty("milestone") && !isNaN(e.milestone) && (a = 100 * e.milestone),
            null !== a && (r += a),
            r += ": " + t
        }
        module.exports = {
            track: track,
            initialize: initialize
        }
    }
    , {
        "../constants": 121,
        "../helpers/formatter": 130,
        "../helpers/separator": 142,
        "./TrackerRegistry": 160,
        "@apple/analytics-data-layer": 4
    }],
    "@marcom/ac-analytics": [function(require, module, exports) {
        "use strict";
        var _get = require("@apple/analytics-data-layer").get
          , set = require("@apple/analytics-data-layer").set
          , dataLayer = require("./ac-analytics/constants").dataLayer
          , configuration = dataLayer.configuration
          , meta = dataLayer.meta;
        module.exports = {
            createBasicObserverSuite: require("./ac-analytics/initialize"),
            initialize: require("./ac-analytics/initialize"),
            observer: {
                Click: require("./ac-analytics/observers/Click"),
                Event: require("./ac-analytics/observers/Event"),
                Gallery: require("./ac-analytics/observers/Gallery"),
                Link: require("./ac-analytics/observers/Link"),
                Page: require("./ac-analytics/observers/Page"),
                Section: require("./ac-analytics/observers/Section"),
                Video: require("./ac-analytics/observers/Video"),
                Registry: require("./ac-analytics/observers/observerRegistry")
            },
            track: require("./ac-analytics/Tracker").trackGeneric,
            passiveTracker: require("./ac-analytics/passiveTracker"),
            regions: require("./ac-analytics/trackers/regions/regions"),
            reset: require("./ac-analytics/destroy"),
            destroy: require("./ac-analytics/destroy"),
            resetActivityMap: require("./ac-analytics/Appmeasurement/appMeasurementPlugins/activitymap/ActivityMapCollection").createActivityMapCollection,
            addActivityMapItem: require("./ac-analytics/Appmeasurement/appMeasurementPlugins/activitymap/ActivityMapCollection").addElToCollection,
            errorHandler: require("./ac-analytics/ErrorHandler"),
            trackFirstMeaningfulPaint: require("./ac-analytics/trackers/performance").trackFirstMeaningfulPaint,
            dataLayer: {
                get: _get,
                set: set,
                configuration: {
                    key: configuration.key,
                    keys: configuration.keys,
                    get: function() {
                        return _get(configuration.key)
                    }
                },
                meta: {
                    key: meta.key,
                    keys: meta.keys,
                    get: function() {
                        return _get(meta.key)
                    }
                }
            }
        }
    }
    , {
        "./ac-analytics/Appmeasurement/appMeasurementPlugins/activitymap/ActivityMapCollection": 74,
        "./ac-analytics/ErrorHandler": 118,
        "./ac-analytics/Tracker": 120,
        "./ac-analytics/constants": 121,
        "./ac-analytics/destroy": 122,
        "./ac-analytics/initialize": 148,
        "./ac-analytics/observers/Click": 150,
        "./ac-analytics/observers/Event": 152,
        "./ac-analytics/observers/Gallery": 153,
        "./ac-analytics/observers/Link": 154,
        "./ac-analytics/observers/Page": 155,
        "./ac-analytics/observers/Section": 156,
        "./ac-analytics/observers/Video": 157,
        "./ac-analytics/observers/observerRegistry": 158,
        "./ac-analytics/passiveTracker": 159,
        "./ac-analytics/trackers/performance": 172,
        "./ac-analytics/trackers/regions/regions": 174,
        "@apple/analytics-data-layer": 4
    }],
    "ac-analytics": [function(require, module, exports) {
        "use strict";
        module.exports = require("../ac-analytics")
    }
    , {
        "../ac-analytics": "@marcom/ac-analytics"
    }]
}, {}, ["@marcom/ac-analytics"]);
