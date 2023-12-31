!function t(e, i, s) {
    function n(a, o) {
        if (!i[a]) {
            if (!e[a]) {
                var h = "function" == typeof require && require;
                if (!o && h)
                    return h(a, !0);
                if (r)
                    return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var d = i[a] = {
                exports: {}
            };
            e[a][0].call(d.exports, (function(t) {
                return n(e[a][1][t] || t)
            }
            ), d, d.exports, t, e, i, s)
        }
        return i[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < s.length; a++)
        n(s[a]);
    return n
}({
    1: [function(t, e, i) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t(2)
        }
    }
    , {
        2: 2
    }],
    2: [function(t, e, i) {
        "use strict";
        function s() {
            this._events = {}
        }
        let n = s.prototype;
        n.on = function(t, e) {
            return this._events[t] = this._events[t] || [],
            this._events[t].unshift(e),
            e
        }
        ,
        n.once = function(t, e) {
            let i = this;
            return this.on(t, (function s(n) {
                i.off(t, s),
                void 0 !== n ? e(n) : e()
            }
            ))
        }
        ,
        n.off = function(t, e) {
            if (!this.has(t))
                return;
            if (1 === arguments.length)
                return this._events[t] = null,
                void delete this._events[t];
            let i = this._events[t].indexOf(e);
            -1 !== i && this._events[t].splice(i, 1)
        }
        ,
        n.trigger = function(t, e) {
            if (this.has(t))
                for (let i = this._events[t].length - 1; i >= 0; i--)
                    void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
        }
        ,
        n.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }
        ,
        n.destroy = function() {
            for (let t in this._events)
                this._events[t] = null;
            this._events = null
        }
        ,
        e.exports = s
    }
    , {}],
    3: [function(t, e, i) {
        "use strict";
        const s = t(4)
          , n = {
            className: "footer"
        };
        e.exports = class {
            constructor(t, e) {
                e = Object.assign({}, n, e),
                this.el = t,
                this._selectors = {
                    wrapper: "." + e.className,
                    directory: e.directorySelector || `.${e.className}-directory`,
                    mini: e.miniSelector || `.${e.className}-mini`
                },
                this._initializeDirectory(e),
                this._initializeLangLink()
            }
            _initializeDirectory(t) {
                if (this._directory = this.el.querySelector(this._selectors.directory),
                !this._directory)
                    return;
                this._directory.querySelectorAll(this._selectors.directory + "-column-section").forEach(e=>{
                    const i = e.querySelector(this._selectors.directory + "-column-section-title-button")
                      , n = e.querySelector(this._selectors.directory + "-column-section-list");
                    s.create(e, i, n, {
                        expandedClassName: t.className + "-directory-column-expanded"
                    })
                }
                )
            }
            _initializeLangLink() {
                if (this._langLink = this.el.querySelector(this._selectors.mini + "-locale-lang"),
                !this._langLink)
                    return;
                let t = window.location.pathname;
                const e = this._langLink.getAttribute("data-locale-current")
                  , i = this._langLink.pathname;
                if (t.includes(e)) {
                    t = t.replace(e, i);
                    t.startsWith("/") || (t = "/" + t),
                    this._langLink.href = t
                }
            }
        }
    }
    , {
        4: 4
    }],
    4: [function(t, e, i) {
        const s = t(6)
          , n = {
            expandedClassName: "footer-directory-column-expanded"
        }
          , r = new s({
            breakpoints: [{
                name: "xsmall",
                mediaQuery: "only screen and (max-width: 480px)"
            }, {
                name: "small",
                mediaQuery: "only screen and (min-width: 481px) and (max-width: 833px)"
            }, {
                name: "medium",
                mediaQuery: "only screen and (min-width: 834px) and (max-width: 1023px)"
            }, {
                name: "large",
                mediaQuery: "only screen and (min-width: 1024px)"
            }]
        });
        class a {
            constructor(t, e, i, r) {
                this.options = Object.assign({}, n, r),
                this.section = t,
                this.button = e,
                this.list = i,
                this.expanded = !1,
                this.button.addEventListener("click", this.toggle.bind(this)),
                a._viewports.on(s.CHANGE_EVENTS.VIEWPORT, this.onViewportChange.bind(this));
                const o = a._viewports.getBreakpoint();
                this.onViewportChange({
                    viewport: o
                })
            }
            static create(t, e, i, s) {
                return new a(t,e,i,s)
            }
            isExpanded() {
                return this.expanded
            }
            toggle() {
                this.isExpanded() ? this.collapse() : this.expand()
            }
            expand() {
                this.expanded || (this.expanded = !0,
                this.section.classList.add(this.options.expandedClassName),
                this.button.ariaExpanded = !0)
            }
            collapse() {
                this.expanded && (this.expanded = !1,
                this.section.classList.remove(this.options.expandedClassName),
                this.button.ariaExpanded = !1)
            }
            _isBreakPointWithMenu(t) {
                return "small" === t || "xsmall" === t
            }
            onViewportChange(t) {
                this._isBreakPointWithMenu(t.viewport) ? (this.button.removeAttribute("disabled"),
                this.button.setAttribute("aria-expanded", "false"),
                this.button.setAttribute("aria-controls", this.list.id)) : (this.collapse(),
                this.button.setAttribute("disabled", ""),
                this.button.removeAttribute("aria-expanded"),
                this.button.removeAttribute("aria-controls"))
            }
            destroy() {
                this.button.removeEventListener("click", this.toggle.bind(this))
            }
        }
        a._viewports = r,
        e.exports = a
    }
    , {
        6: 6
    }],
    5: [function(t, e, i) {
        e.exports = class {
            constructor(t, e) {
                this._target = t,
                this._tests = {},
                this.addTests(e)
            }
            addTests(t) {
                this._tests = Object.assign(this._tests, t)
            }
            htmlClass() {
                this._target.classList.remove("no-js"),
                this._target.classList.add("js");
                for (let t of Object.keys(this._tests))
                    this._addClass(t)
            }
            _supports(t) {
                return void 0 !== this._tests[t] && ("function" == typeof this._tests[t] && (this._tests[t] = this._tests[t]()),
                this._tests[t])
            }
            _addClass(t, e) {
                e = e || "no-",
                this._supports(t) ? this._target.classList.add(t) : this._target.classList.add(e + t)
            }
        }
    }
    , {}],
    6: [function(t, e, i) {
        "use strict";
        const s = t(1).EventEmitterMicro
          , n = [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
        }, {
            name: "X",
            mediaQuery: "only screen and (min-width: 1441px)"
        }]
          , r = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"
          , a = "only screen and (orientation: portrait)";
        class o extends s {
            constructor(t={}) {
                super(),
                this.BREAKPOINTS = t.breakpoints || n,
                this._setupProperties(),
                this._onRetinaChange = this._onRetinaChange.bind(this),
                this._onOrientationChange = this._onOrientationChange.bind(this),
                this.listenersAdded = {
                    orientation: !1,
                    retina: !1,
                    viewport: !1
                }
            }
            static get CHANGE_EVENTS() {
                return {
                    ORIENTATION: "change:orientation",
                    RETINA: "change:retina",
                    VIEWPORT: "change:viewport"
                }
            }
            on() {
                this._setupListeners(arguments[0]),
                super.on.apply(this, arguments)
            }
            _onRetinaChange() {
                this.trigger(o.CHANGE_EVENTS.RETINA, this)
            }
            _onOrientationChange() {
                this.trigger(o.CHANGE_EVENTS.ORIENTATION, this)
            }
            _setupProperties() {
                Object.defineProperty(this, "retina", {
                    get: ()=>window.matchMedia(r).matches
                }),
                Object.defineProperty(this, "orientation", {
                    get: ()=>window.matchMedia(a).matches ? "portrait" : "landscape"
                }),
                this.viewport = this.getBreakpoint()
            }
            _setupListeners(t) {
                if (t !== o.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(r).addListener(this._onRetinaChange),
                this.listenersAdded.retina = !0),
                t !== o.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(a).addListener(this._onOrientationChange),
                this.listenersAdded.orientation = !0),
                t === o.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
                    for (let t = 0; t < this.BREAKPOINTS.length; t++) {
                        let e = this.BREAKPOINTS[t];
                        window.matchMedia(e.mediaQuery).addListener(t=>{
                            t.matches && (this.oldViewport = this.viewport,
                            this.viewport = e.name,
                            this.trigger(o.CHANGE_EVENTS.VIEWPORT, this))
                        }
                        )
                    }
                    this.listenersAdded.viewport = !0
                }
            }
            getBreakpoint() {
                for (let t = 0; t < this.BREAKPOINTS.length; t++) {
                    let e = this.BREAKPOINTS[t];
                    if (window.matchMedia(e.mediaQuery).matches)
                        return e.name
                }
            }
        }
        e.exports = o
    }
    , {
        1: 1
    }],
    7: [function(t, e, i) {
        "use strict";
        const s = t(8)
          , n = document.getElementById("ac-globalfooter");
        n && (e.exports = new s(n))
    }
    , {
        8: 8
    }],
    8: [function(t, e, i) {
        "use strict";
        const s = t(3)
          , n = t(5);
        e.exports = class extends s {
            constructor(t) {
                super(t, {
                    className: "ac-gf",
                    miniSelector: ".ac-gf-footer"
                });
                new n(t).htmlClass(),
                this._initializeBuyStrip()
            }
            _initializeBuyStrip() {
                if (this._buystrip = this.el.querySelector(this._selectors.wrapper + "-buystrip"),
                !this._buystrip)
                    return;
                this._buystrip.querySelectorAll(this._selectors.wrapper + "-buystrip-info-content").forEach(t=>{
                    this._makeBlockLink(t)
                }
                ),
                this._initializeChatLink()
            }
            _makeBlockLink(t) {
                const e = t.querySelector("a");
                if (!e)
                    return;
                const i = document.createElement("a");
                i.className = "ac-gf-block",
                i.href = e.href,
                "analyticsTitle"in e.dataset && (i.dataset.analyticsTitle = e.dataset.analyticsTitle),
                "analyticsExitLink"in e.dataset && (i.dataset.analyticsExitLink = e.dataset.analyticsExitLink);
                const s = document.createElement("span");
                for (s.className = e.className + " ac-gf-block-link",
                s.innerHTML = e.innerHTML,
                e.parentNode.classList.add("with-cta"),
                e.parentNode.replaceChild(s, e),
                t.insertBefore(i, t.firstChild); t.childNodes.length > 1; ) {
                    let e = t.childNodes[1];
                    if (e.href)
                        break;
                    i.appendChild(e)
                }
            }
            _initializeChatLink() {
                if (this._chatLink = this._buystrip.querySelector(this._selectors.wrapper + "-buystrip-info-cta-chat"),
                this._chatLink) {
                    const t = this._chatLink.parentNode;
                    t.href && (this._chatLink = t),
                    this._onChatLinkClick = this._onChatLinkClick.bind(this),
                    this._chatLink.addEventListener("click", this._onChatLinkClick)
                }
            }
            _onChatLinkClick(t) {
                t.preventDefault(),
                window.open(this._chatLink.href, "chat", "width=375,height=773")
            }
        }
    }
    , {
        3: 3,
        5: 5
    }]
}, {}, [7]);
