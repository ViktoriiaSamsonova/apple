!function(e) {
    var t = {};
    function i(s) {
        if (t[s])
            return t[s].exports;
        var r = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.m = e,
    i.c = t,
    i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var s = Object.create(null);
        if (i.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(s, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return s
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/",
    i(i.s = 125)
}([function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME: "data-download-area-keyframe",
        PICTURE_DATA_LAZY: "data-lazy",
        PICTURE_DATA_EMPTY_SOURCE: "data-empty",
        PICTURE_DATA_LOADED: "data-picture-loaded",
        PICTURE_CLASS_LOADED: "loaded"
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        EventEmitterMicro: i(12)
    }
}
, function(e, t, i) {
    "use strict";
    const s = {
        GUI_INSTANCE: null,
        ANIM_INSTANCE: null,
        VIEWPORT_EMITTER_ELEMENT: void 0,
        LOCAL_STORAGE_KEYS: {
            GuiPosition: "anim-ui.position",
            GroupCollapsedStates: "anim-ui.group-collapsed-states",
            scrollY: "anim-ui.scrollY-position",
            path: "anim-ui.path"
        },
        RESIZE_TIMEOUT: -1,
        BREAKPOINTS: [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px)"
        }],
        getBreakpoint: function() {
            for (let e = 0; e < s.BREAKPOINTS.length; e++) {
                let t = s.BREAKPOINTS[e];
                if (window.matchMedia(t.mediaQuery).matches)
                    return t.name
            }
        },
        KeyframeDefaults: {
            ease: 1,
            epsilon: .05,
            preserveState: !1,
            easeFunctionString: "linear",
            easeFunction: "linear",
            hold: !1,
            snapAtCreation: !1,
            toggle: !1,
            breakpointMask: "SMLX",
            event: "",
            disabledWhen: [],
            cssClass: ""
        },
        KeyframeTypes: {
            Interpolation: 0,
            InterpolationForward: 1,
            CSSClass: 2,
            Event: 3
        },
        EVENTS: {
            ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
            ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
            ON_GROUP_CREATED: "ON_GROUP_CREATED",
            ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
            ON_TIMELINE_START: "ON_TIMELINE_START",
            ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
            ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE",
            ON_CHAPTER_INITIATED: "ON_CHAPTER_INITIATED",
            ON_CHAPTER_OCCURRED: "ON_CHAPTER_OCCURRED",
            ON_CHAPTER_COMPLETED: "ON_CHAPTER_COMPLETED"
        },
        PageEvents: {
            ON_SCROLL: "ON_SCROLL",
            ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
            ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
            ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
        },
        KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
        TweenProps: i(51),
        TargetValue: i(13),
        CSSTargetValue: i(34),
        pageMetrics: new function() {
            this.scrollX = 0,
            this.scrollY = 0,
            this.windowWidth = 0,
            this.windowHeight = 0,
            this.documentOffsetX = 0,
            this.documentOffsetY = 0,
            this.previousBreakpoint = "",
            this.breakpoint = ""
        }
        ,
        KeyframeComparison: function(e, t) {
            return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
        }
    };
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    var s = i(16);
    e.exports = s.requestAnimationFrame("draw")
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(3)
      , n = {
        create: i(11),
        update: i(9),
        draw: i(4)
    }
      , a = ()=>{}
    ;
    let o = 0;
    e.exports = class extends s {
        constructor(e) {
            super(),
            this.el = e.el,
            this.gum = e.gum,
            this.componentName = e.componentName,
            this._keyframeController = null
        }
        destroy() {
            this.el = null,
            this.gum = null,
            this._keyframeController = null,
            super.destroy()
        }
        addKeyframe(e) {
            const t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
        }
        addDiscreteEvent(e) {
            e.event = e.event || "Generic-Event-Name-" + o++;
            let t = void 0 !== e.end && e.end !== e.start;
            const i = this.addKeyframe(e);
            return t ? (e.onEnterOnce && i.controller.once(e.event + ":enter", e.onEnterOnce),
            e.onExitOnce && i.controller.once(e.event + ":exit", e.onExitOnce),
            e.onEnter && i.controller.on(e.event + ":enter", e.onEnter),
            e.onExit && i.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && i.controller.once(e.event, e.onEventOnce),
            e.onEventReverseOnce && i.controller.once(e.event + ":reverse", e.onEventReverseOnce),
            e.onEvent && i.controller.on(e.event, e.onEvent),
            e.onEventReverse && i.controller.on(e.event + ":reverse", e.onEventReverse)),
            i
        }
        addRAFLoop(e) {
            let t = ["start", "end"];
            if (!t.every((t=>e.hasOwnProperty(t))))
                return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            const i = new n.create;
            i.on("update", e.onUpdate || a),
            i.on("draw", e.onDraw || a),
            i.on("draw", (()=>i.run()));
            const {onEnter: s, onExit: r} = e;
            return e.onEnter = ()=>{
                i.run(),
                s && s()
            }
            ,
            e.onExit = ()=>{
                i.cancel(),
                r && r()
            }
            ,
            this.addDiscreteEvent(e)
        }
        addContinuousEvent(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"),
            e.event = e.event || "Generic-Event-Name-" + o++;
            let t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw),
            t
        }
        mounted() {}
        onResizeImmediate(e) {}
        onResizeDebounced(e) {}
        onBreakpointChange(e) {}
        get anim() {
            return this.gum.anim
        }
        get keyframeController() {
            return this._keyframeController || (this._keyframeController = this.anim.getControllerForTarget(this.el))
        }
        get pageMetrics() {
            return r.pageMetrics
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(10));
    var n = class {
        constructor(e) {
            this.options = e,
            this.media = e.media,
            this.mounted = this.mounted.bind(this),
            this.media.on(r.default.MOUNTED, this.mounted)
        }
        mounted() {}
        static get isSupported() {
            return !0
        }
        destroy() {}
    }
    ;
    t.default = n
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        lerp: function(e, t, i) {
            return t + (i - t) * e
        },
        map: function(e, t, i, s, r) {
            return s + (r - s) * (e - t) / (i - t)
        },
        mapClamp: function(e, t, i, s, r) {
            var n = s + (r - s) * (e - t) / (i - t);
            return Math.max(s, Math.min(r, n))
        },
        norm: function(e, t, i) {
            return (e - t) / (i - t)
        },
        clamp: function(e, t, i) {
            return Math.max(t, Math.min(i, e))
        },
        randFloat: function(e, t) {
            return Math.random() * (t - e) + e
        },
        randInt: function(e, t) {
            return Math.floor(Math.random() * (t - e) + e)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = {
        GUI_INSTANCE: null,
        ANIM_INSTANCE: null,
        VIEWPORT_EMITTER_ELEMENT: void 0,
        LOCAL_STORAGE_KEYS: {
            GuiPosition: "anim-ui.position",
            GroupCollapsedStates: "anim-ui.group-collapsed-states",
            scrollY: "anim-ui.scrollY-position",
            path: "anim-ui.path"
        },
        RESIZE_TIMEOUT: -1,
        BREAKPOINTS: [{
            name: "S",
            mediaQuery: "only screen and (max-width: 735px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1442px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px)"
        }],
        getBreakpoint: function() {
            for (let e = 0; e < s.BREAKPOINTS.length; e++) {
                let t = s.BREAKPOINTS[e];
                if (window.matchMedia(t.mediaQuery).matches)
                    return t.name
            }
        },
        KeyframeDefaults: {
            ease: 1,
            epsilon: .05,
            easeFunctionString: "linear",
            easeFunction: "linear",
            hold: !1,
            snapAtCreation: !1,
            toggle: !1,
            breakpointMask: "SMLX",
            event: "",
            disabledWhen: [],
            cssClass: ""
        },
        KeyframeTypes: {
            Interpolation: 0,
            InterpolationForward: 1,
            CSSClass: 2,
            Event: 3
        },
        EVENTS: {
            ON_DOM_KEYFRAMES_CREATED: "ON_DOM_KEYFRAMES_CREATED",
            ON_DOM_GROUPS_CREATED: "ON_DOM_GROUPS_CREATED",
            ON_GROUP_CREATED: "ON_GROUP_CREATED",
            ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
            ON_TIMELINE_START: "ON_TIMELINE_START",
            ON_TIMELINE_UPDATE: "ON_TIMELINE_UPDATE",
            ON_TIMELINE_COMPLETE: "ON_TIMELINE_COMPLETE"
        },
        PageEvents: {
            ON_SCROLL: "ON_SCROLL",
            ON_RESIZE_IMMEDIATE: "ON_RESIZE_IMMEDIATE",
            ON_RESIZE_DEBOUNCED: "ON_RESIZE_DEBOUNCED",
            ON_BREAKPOINT_CHANGE: "ON_BREAKPOINT_CHANGE"
        },
        KeyframeJSONReservedWords: ["event", "cssClass", "style", "anchors", "start", "end", "epsilon", "easeFunction", "ease", "breakpointMask", "disabledWhen"],
        TweenProps: i(68),
        TargetValue: class {
            constructor(e, t, i) {
                this.epsilon = parseFloat(t),
                this.snapAtCreation = i,
                this.initialValue = e,
                this.target = e,
                this.current = e,
                this.previousValue = e,
                this.isActive = !1
            }
        }
        ,
        AnimInfo: i(151),
        Progress: function() {
            this.local = 0,
            this.localUnclamped = 0,
            this.lastPosition = 0
        },
        ViewableRange: function(e, t) {
            this.a = e.top - t,
            this.a < 0 && (this.a = e.top),
            this.b = e.top,
            this.d = e.bottom,
            this.c = Math.max(this.d - t, this.b)
        },
        pageMetrics: new function() {
            this.scrollX = 0,
            this.scrollY = 0,
            this.windowWidth = 0,
            this.windowHeight = 0,
            this.documentOffsetX = 0,
            this.documentOffsetY = 0,
            this.previousBreakpoint = "",
            this.breakpoint = ""
        }
        ,
        EventObject: function(e) {
            this.controller = e,
            this.element = this.controller.element,
            this.keyframe = null,
            this.event = "",
            this.tweenProps = this.controller.tweenProps
        },
        KeyframeComparison: function(e, t) {
            return e.start < t.start ? -1 : e.start > t.start ? 1 : 0
        }
    };
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    var s = i(16);
    e.exports = s.requestAnimationFrame("update")
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        MOUNTED: "MOUNTED",
        MEDIA_LOAD_START: "MEDIA_LOAD_START",
        MEDIA_LOAD_COMPLETE: "MEDIA_LOAD_COMPLETE",
        MEDIA_LOAD_ERROR: "MEDIA_LOAD_ERROR",
        PLAYBACK_STATE_CHANGE: "PLAYBACK_STATE_CHANGE",
        LOADING_STATE_CHANGE: "LOADING_STATE_CHANGE"
    }
}
, function(e, t, i) {
    "use strict";
    var s, r = i(2).EventEmitterMicro, n = i(143), a = i(146);
    function o(e) {
        e = e || {},
        r.call(this),
        this.id = a.getNewID(),
        this.executor = e.executor || n,
        this._reset(),
        this._willRun = !1,
        this._didDestroy = !1
    }
    (s = o.prototype = Object.create(r.prototype)).run = function() {
        return this._willRun || (this._willRun = !0),
        this._subscribe()
    }
    ,
    s.cancel = function() {
        this._unsubscribe(),
        this._willRun && (this._willRun = !1),
        this._reset()
    }
    ,
    s.destroy = function() {
        var e = this.willRun();
        return this.cancel(),
        this.executor = null,
        r.prototype.destroy.call(this),
        this._didDestroy = !0,
        e
    }
    ,
    s.willRun = function() {
        return this._willRun
    }
    ,
    s.isRunning = function() {
        return this._isRunning
    }
    ,
    s._subscribe = function() {
        return this.executor.subscribe(this)
    }
    ,
    s._unsubscribe = function() {
        return this.executor.unsubscribe(this)
    }
    ,
    s._onAnimationFrameStart = function(e) {
        this._isRunning = !0,
        this._willRun = !1,
        this._didEmitFrameData || (this._didEmitFrameData = !0,
        this.trigger("start", e))
    }
    ,
    s._onAnimationFrameEnd = function(e) {
        this._willRun || (this.trigger("stop", e),
        this._reset())
    }
    ,
    s._reset = function() {
        this._didEmitFrameData = !1,
        this._isRunning = !1
    }
    ,
    e.exports = o
}
, function(e, t, i) {
    "use strict";
    function s() {
        this._events = {}
    }
    var r = s.prototype;
    r.on = function(e, t) {
        this._events[e] = this._events[e] || [],
        this._events[e].unshift(t)
    }
    ,
    r.once = function(e, t) {
        var i = this;
        this.on(e, (function s(r) {
            i.off(e, s),
            void 0 !== r ? t(r) : t()
        }
        ))
    }
    ,
    r.off = function(e, t) {
        if (this.has(e)) {
            if (1 === arguments.length)
                return this._events[e] = null,
                void delete this._events[e];
            var i = this._events[e].indexOf(t);
            -1 !== i && this._events[e].splice(i, 1)
        }
    }
    ,
    r.trigger = function(e, t) {
        if (this.has(e))
            for (var i = this._events[e].length - 1; i >= 0; i--)
                void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
    }
    ,
    r.has = function(e) {
        return e in this._events != !1 && 0 !== this._events[e].length
    }
    ,
    r.destroy = function() {
        for (var e in this._events)
            this._events[e] = null;
        this._events = null
    }
    ,
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    e.exports = class {
        constructor(e, t, i, s, r=!1, n) {
            this.epsilon = parseFloat(t),
            this.snapAtCreation = i,
            this.initialValue = e,
            this.target = e,
            this.current = e,
            this.previousValue = e,
            this.isActive = !1,
            this.key = s,
            this.round = r,
            this.suffix = n
        }
        update(e, t, i) {
            this.target = e[0] + t * (e[1] - e[0]),
            this.previousValue = this.current,
            this.current += (this.target - this.current) * i;
            let s = this.delta(this.current, this.target);
            return s < this.epsilon && (this.current = this.target,
            s = 0),
            s > this.epsilon || 0 === s && this.previousValue !== this.current
        }
        reconcile(e, t) {
            return this.initialValue = e[0],
            this.update(e, t, 1)
        }
        needsUpdate() {
            return this.delta(this.current, this.target) > this.epsilon
        }
        delta(e, t) {
            return Math.abs(e - t)
        }
        calculateEpsilon(e, t) {
            if (e.epsilon)
                return void (this.epsilon = e.epsilon);
            let i = this.delta(t[0], t[1])
              , s = Math.min(.001 * i, this.epsilon, .05);
            this.epsilon = Math.max(s, .001)
        }
        set(e) {
            let t = this.current;
            this.round && (t = Math.round(t)),
            this.suffix && (t += this.suffix),
            e[this.key] = t
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
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
, function(e, t, i) {
    "use strict";
    const s = i(3)
      , r = i(13)
      , n = i(34)
      , a = i(7)
      , o = i(130)
      , h = i(131)
      , l = i(132)
      , c = i(35)
      , u = i(133)
      , d = i(52)
      , m = i(53)
      , {cssAttributes: p} = i(54);
    class f {
        constructor(e, t) {
            this.controller = e,
            this.anchors = [],
            this.jsonProps = t,
            this.ease = e.group.defaultEase,
            this.easeFunction = o.linear,
            this.start = 0,
            this.end = 0,
            this.localT = 0,
            this.curvedT = 0,
            this.id = 0,
            this.event = "",
            this.needsEventDispatch = !1,
            this.snapAtCreation = !1,
            this.isEnabled = !1,
            this.animValues = {},
            this.breakpointMask = s.KeyframeDefaults.breakpointMask,
            this.disabledWhen = [],
            this.keyframeType = s.KeyframeTypes.Interpolation,
            this.hold = !1,
            this.preserveState = !1,
            this.markedForRemoval = !1;
            let i = !1;
            Object.defineProperty(this, "hidden", {
                get: ()=>i,
                set(t) {
                    i = t,
                    e.group.keyframesDirty = !0
                }
            }),
            this.uuid = m(),
            this.destroyed = !1
        }
        destroy() {
            this.destroyed = !0,
            this.controller = null,
            this.disabledWhen = null,
            this.anchors = null,
            this.jsonProps = null,
            this.easeFunction = null,
            this.animValues = null
        }
        remove() {
            return this.controller.removeKeyframe(this)
        }
        parseOptions(e) {
            this.jsonProps = e,
            e.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${e.relativeTo}"`),
            void 0 === e.end && void 0 === e.duration && (e.end = e.start),
            "" !== e.anchors && e.anchors ? (this.anchors = [],
            e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors],
            e.anchors.forEach(((t,i)=>{
                let s = u(t, this.controller.group.element);
                if (!s) {
                    let s = "";
                    return "string" == typeof t && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."),
                    void console.warn("Keyframe on", this.controller.element, ` failed to find anchor at index ${i} in array`, e.anchors, `. Anchors must be JS Object references, Elements references, or valid query selector strings. ${s}`)
                }
                this.anchors.push(s),
                this.controller.group.metrics.add(s)
            }
            ))) : (this.anchors = [],
            e.anchors = []),
            e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease,
            e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation,
            e.easeFunction || (e.easeFunction = s.KeyframeDefaults.easeFunctionString),
            e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask,
            e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen,
            e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold,
            e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = s.KeyframeDefaults.preserveState,
            this.easeFunction = o[e.easeFunction],
            o.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = h.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = l.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
            for (let t in e) {
                if (-1 !== s.KeyframeJSONReservedWords.indexOf(t))
                    continue;
                let i = e[t];
                if (Array.isArray(i)) {
                    if (1 === i.length && (i[1] = i[0],
                    i[0] = null),
                    void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement) {
                        let a = 0;
                        this.controller._ownerIsElement || (a = this.controller.element[t] || 0);
                        const o = t.startsWith("--");
                        let h = i[2] || (o || ["opacity", "z-index", "font-weight", "zIndex", "fontWeight"].includes(t) ? void 0 : "px")
                          , l = this.controller.group.anim.plugins.keyframe.reduce(((i,s)=>i || s.parseProp.call(this, e, t)), null);
                        if (!l && this.controller._ownerIsElement && (o || p.includes(t))) {
                            let i = d(t)
                              , r = e.round || ["zIndex"].includes(i);
                            a = parseFloat(this.controller.getTargetComputedStyle().getPropertyValue(i)),
                            isNaN(a) && (a = 0),
                            l = new n(a,s.KeyframeDefaults.epsilon,this.snapAtCreation,t,r,h),
                            this.controller.cssAttributes.push(l)
                        }
                        l || (l = new r(a,s.KeyframeDefaults.epsilon,this.snapAtCreation,t,e.round,h)),
                        this.controller.tweenProps[t] = l
                    }
                    this.animValues[t] = this.controller.group.expressionParser.parseArray(this, i),
                    this.controller.tweenProps[t].calculateEpsilon(e, this.animValues[t])
                }
            }
            this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation,
            e.event && (this.event = e.event)
        }
        overwriteProps(e) {
            this.animValues = {};
            let t = Object.assign({}, this.jsonProps, e);
            this.controller.updateKeyframe(this, t)
        }
        updateLocalProgress(e) {
            if (this.start === this.end || e < this.start || e > this.end)
                return this.localT = e < this.start ? this.hold ? this.localT : 0 : e > this.end ? 1 : 0,
                void (this.curvedT = this.easeFunction(this.localT));
            const t = (e - this.start) / (this.end - this.start)
              , i = this.hold ? this.localT : 0;
            this.localT = a.clamp(t, i, 1),
            this.curvedT = this.easeFunction(this.localT)
        }
        reconcile(e) {
            this.controller.tweenProps[e].reconcile(this.animValues[e], this.curvedT) && (this.needsEventDispatch || (this.needsEventDispatch = !0,
            this.controller.keyframesRequiringDispatch.push(this)))
        }
        reset(e) {
            this.localT = e || 0;
            let t = this.ease;
            this.ease = 1;
            for (let e in this.animValues)
                this.reconcile(e);
            this.ease = t
        }
        onDOMRead(e) {
            let t = this.controller.tweenProps[e].update(this.animValues[e], this.curvedT, this.ease);
            return "" === this.event || this.needsEventDispatch || t && (this.needsEventDispatch = !0,
            this.controller.keyframesRequiringDispatch.push(this)),
            t
        }
        isInRange(e) {
            return e >= this.start && e <= this.end
        }
        setEnabled(e) {
            e = e || c(Array.from(document.documentElement.classList));
            let t = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint)
              , i = !1;
            return this.disabledWhen.length > 0 && (i = this.disabledWhen.some((t=>void 0 !== e[t]))),
            this.isEnabled = t && !i,
            this.isEnabled
        }
        evaluateConstraints() {
            this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start),
            this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end),
            this.evaluateInterpolationConstraints()
        }
        evaluateInterpolationConstraints() {
            for (let e in this.animValues) {
                let t = this.jsonProps[e];
                this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t)
            }
        }
    }
    f.DATA_ATTRIBUTE = "data-anim-tween",
    e.exports = f
}
, function(e, t, i) {
    "use strict";
    var s = i(141)
      , r = function() {
        this.events = {}
    }
      , n = r.prototype;
    n.requestAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new s(e)),
        this.events[e].requestAnimationFrame
    }
    ,
    n.cancelAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new s(e)),
        this.events[e].cancelAnimationFrame
    }
    ,
    e.exports = new r
}
, function(e, t, i) {
    "use strict";
    const s = i(8)
      , r = i(7)
      , n = i(69)
      , a = i(70)
      , o = i(152)
      , h = i(38)
      , l = i(153)
      , c = i(71);
    class u {
        constructor(e, t) {
            this.controller = e,
            this.anchors = [],
            this.jsonProps = t,
            this.ease = e.group.defaultEase,
            this.easeFunctionString = s.KeyframeDefaults.easeFunctionString,
            this.easeFunction = n[this.easeFunctionString],
            this.start = 0,
            this.end = 0,
            this.localT = 0,
            this.curvedT = 0,
            this.id = 0,
            this.event = "",
            this.needsEventDispatch = !1,
            this.snapAtCreation = !1,
            this.isEnabled = !1,
            this.animValues = {},
            this.breakpointMask = "SMLX",
            this.disabledWhen = [],
            this.keyframeType = s.KeyframeTypes.Interpolation,
            this.hold = !1,
            this.preserveState = !1,
            this.markedForRemoval = !1,
            this.hidden = !1,
            this.uuid = c()
        }
        destroy() {
            this.controller = null,
            this.disabledWhen = null,
            this.anchors = null,
            this.jsonProps = null,
            this.easeFunction = null,
            this.animValues = null
        }
        remove() {
            return this.controller.removeKeyframe(this)
        }
        parseOptions(e) {
            this.jsonProps = e,
            e.relativeTo && console.error(`KeyframeError: relativeTo has been removed. Use 'anchors' property instead. Found 'relativeTo':"${e.relativeTo}"`),
            "" !== e.anchors && e.anchors ? (this.anchors = [],
            e.anchors = Array.isArray(e.anchors) ? e.anchors : [e.anchors],
            e.anchors.forEach(((t,i)=>{
                let s = l(t, this.controller.group.element);
                if (!s) {
                    let s = "";
                    return "string" == typeof t && (s = " Provided value was a string, so a failed attempt was made to find anchor with the provided querystring in group.element, or in the document."),
                    void console.warn("Keyframe on", this.controller.element, ` failed to find anchor at index ${i} in array`, e.anchors, `. Anchors must be JS Object references, Elements references, or valid query selector strings. ${s}`)
                }
                this.anchors.push(s),
                this.controller.group.metrics.add(s)
            }
            ))) : (this.anchors = [],
            e.anchors = []),
            e.ease ? this.ease = parseFloat(e.ease) : e.ease = this.ease,
            e.hasOwnProperty("snapAtCreation") ? this.snapAtCreation = e.snapAtCreation : e.snapAtCreation = this.snapAtCreation,
            e.easeFunction ? this.easeFunctionString = e.easeFunction : e.easeFunction = this.easeFunctionString,
            e.breakpointMask ? this.breakpointMask = e.breakpointMask : e.breakpointMask = this.breakpointMask,
            e.disabledWhen ? this.disabledWhen = Array.isArray(e.disabledWhen) ? e.disabledWhen : [e.disabledWhen] : e.disabledWhen = this.disabledWhen,
            e.hasOwnProperty("hold") ? this.hold = e.hold : e.hold = this.hold,
            e.hasOwnProperty("preserveState") ? this.preserveState = e.preserveState : e.preserveState = this.preserveState,
            this.easeFunction = n[e.easeFunction],
            n.hasOwnProperty(e.easeFunction) || (e.easeFunction.includes("bezier") ? this.easeFunction = a.fromCSSString(e.easeFunction) : e.easeFunction.includes("spring") ? this.easeFunction = o.fromCSSString(e.easeFunction) : console.error("Keyframe parseOptions cannot find 'easeFunction' named '" + e.easeFunction + "'"));
            for (let t in e) {
                if (-1 !== s.KeyframeJSONReservedWords.indexOf(t))
                    continue;
                let i = e[t];
                if (!Array.isArray(i))
                    continue;
                if (this.animValues[t] = this.controller.group.expressionParser.parseArray(this, i),
                void 0 === this.controller.tweenProps[t] || !this.controller._ownerIsElement) {
                    let e = 0;
                    this.controller._ownerIsElement || (e = this.controller.element[t] || 0);
                    let i = new s.TargetValue(e,s.KeyframeDefaults.epsilon,this.snapAtCreation);
                    this.controller.tweenProps[t] = i
                }
                let r = this.controller.tweenProps[t];
                if (e.epsilon)
                    r.epsilon = e.epsilon;
                else {
                    let e = Math.abs(this.animValues[t][0] - this.animValues[t][1])
                      , i = Math.min(.001 * e, r.epsilon, s.KeyframeDefaults.epsilon);
                    r.epsilon = Math.max(i, 1e-4)
                }
            }
            this.keyframeType = this.hold ? s.KeyframeTypes.InterpolationForward : s.KeyframeTypes.Interpolation,
            e.event && (this.event = e.event)
        }
        overwriteProps(e) {
            this.animValues = {};
            let t = Object.assign({}, this.jsonProps, e);
            this.controller.updateKeyframe(this, t)
        }
        updateLocalProgress(e) {
            if (this.start === this.end || e < this.start || e > this.end)
                return this.localT = e < this.start ? 0 : e > this.end ? 1 : 0,
                void (this.curvedT = this.easeFunction(this.localT));
            const t = (e - this.start) / (this.end - this.start)
              , i = this.hold ? this.localT : 0;
            this.localT = r.clamp(t, i, 1),
            this.curvedT = this.easeFunction(this.localT)
        }
        reconcile(e) {
            let t = this.animValues[e]
              , i = this.controller.tweenProps[e];
            i.initialValue = t[0],
            i.target = t[0] + this.curvedT * (t[1] - t[0]),
            i.current !== i.target && (i.current = i.target,
            this.needsEventDispatch || (this.needsEventDispatch = !0,
            this.controller.keyframesRequiringDispatch.push(this)))
        }
        reset(e) {
            this.localT = e || 0;
            var t = this.ease;
            this.ease = 1;
            for (let e in this.animValues)
                this.reconcile(e);
            this.ease = t
        }
        onDOMRead(e) {
            let t = this.animValues[e]
              , i = this.controller.tweenProps[e];
            i.target = t[0] + this.curvedT * (t[1] - t[0]);
            let s = i.current;
            i.current += (i.target - i.current) * this.ease;
            let r = i.current - i.target;
            r < i.epsilon && r > -i.epsilon && (i.current = i.target,
            r = 0),
            "" === this.event || this.needsEventDispatch || (r > i.epsilon || r < -i.epsilon || 0 === r && s !== i.current) && (this.needsEventDispatch = !0,
            this.controller.keyframesRequiringDispatch.push(this))
        }
        isInRange(e) {
            return e >= this.start && e <= this.end
        }
        setEnabled(e) {
            e = e || h(Array.from(document.documentElement.classList));
            let t = -1 !== this.breakpointMask.indexOf(s.pageMetrics.breakpoint)
              , i = !1;
            return this.disabledWhen.length > 0 && (i = this.disabledWhen.some((t=>void 0 !== e[t]))),
            this.isEnabled = t && !i,
            this.isEnabled
        }
        evaluateConstraints() {
            this.start = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.start),
            this.end = this.controller.group.expressionParser.parseTimeValue(this, this.jsonProps.end),
            this.evaluateInterpolationConstraints()
        }
        evaluateInterpolationConstraints() {
            for (let e in this.animValues) {
                let t = this.jsonProps[e];
                this.animValues[e] = this.controller.group.expressionParser.parseArray(this, t)
            }
        }
    }
    u.DATA_ATTRIBUTE = "data-anim-tween",
    e.exports = u
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        AUTOCOMPLETE: "aria-autocomplete",
        CHECKED: "aria-checked",
        DISABLED: "aria-disabled",
        EXPANDED: "aria-expanded",
        HASPOPUP: "aria-haspopup",
        HIDDEN: "aria-hidden",
        INVALID: "aria-invalid",
        LABEL: "aria-label",
        LEVEL: "aria-level",
        MULTILINE: "aria-multiline",
        MULTISELECTABLE: "aria-multiselectable",
        ORIENTATION: "aria-orientation",
        PRESSED: "aria-pressed",
        READONLY: "aria-readonly",
        REQUIRED: "aria-required",
        SELECTED: "aria-selected",
        SORT: "aria-sort",
        VALUEMAX: "aria-valuemax",
        VALUEMIN: "aria-valuemin",
        VALUENOW: "aria-valuenow",
        VALUETEXT: "aria-valuetext",
        ATOMIC: "aria-atomic",
        BUSY: "aria-busy",
        LIVE: "aria-live",
        RELEVANT: "aria-relevant",
        DROPEFFECT: "aria-dropeffect",
        GRABBED: "aria-grabbed",
        ACTIVEDESCENDANT: "aria-activedescendant",
        CONTROLS: "aria-controls",
        DESCRIBEDBY: "aria-describedby",
        FLOWTO: "aria-flowto",
        LABELLEDBY: "aria-labelledby",
        OWNS: "aria-owns",
        POSINSET: "aria-posinset",
        SETSIZE: "aria-setsize"
    }
}
, function(e, t, i) {
    "use strict";
    var s = {
        ua: window.navigator.userAgent,
        platform: window.navigator.platform,
        vendor: window.navigator.vendor
    };
    e.exports = i(30)(s)
}
, , function(e, t, i) {
    "use strict";
    e.exports = {
        SharedInstance: i(144)
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(16);
    e.exports = s.requestAnimationFrame("external")
}
, function(e, t, i) {
    "use strict";
    var s = i(43)
      , r = function() {
        this.focusableSelectors = s.selectors
    }
      , n = r.prototype;
    n.isFocusableElement = function(e, t, i) {
        return !(t && !this._isDisplayed(e)) && (s.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || (i = i || parseFloat(e.getAttribute("tabindex")),
        !isNaN(i)))
    }
    ,
    n.isTabbableElement = function(e, t) {
        if (t && !this._isDisplayed(e))
            return !1;
        var i = e.getAttribute("tabindex");
        return i = parseFloat(i),
        isNaN(i) ? this.isFocusableElement(e, t, i) : i >= 0
    }
    ,
    n._isDisplayed = function(e) {
        var t = e.getBoundingClientRect();
        return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
    }
    ,
    n.getTabbableElements = function(e, t) {
        for (var i = e.querySelectorAll(this.focusableSelectors), s = i.length, r = [], n = 0; n < s; n++)
            this.isTabbableElement(i[n], t) && r.push(i[n]);
        return r
    }
    ,
    n.getFocusableElements = function(e, t) {
        for (var i = e.querySelectorAll(this.focusableSelectors), s = i.length, r = [], n = 0; n < s; n++)
            this.isFocusableElement(i[n], t) && r.push(i[n]);
        return r
    }
    ,
    e.exports = new r
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        EMPTY: "loading-empty",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "loading-error",
        DISABLED: "loading-disabled"
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        IDLE: "idle",
        PLAYING: "playing",
        PAUSED: "paused",
        ENDED: "ended"
    }
}
, , function(e, t, i) {
    "use strict";
    const s = i(28)
      , r = i(29);
    e.exports = {
        PictureLazyLoading: s,
        PictureHead: r
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(1).PICTURE_DATA_LAZY
      , r = i(1).PICTURE_DATA_EMPTY_SOURCE
      , n = i(1).PICTURE_DATA_DOWNLOAD_AREA_KEYFRAME;
    e.exports = class {
        constructor(e={}) {
            this.options = e,
            this._init()
        }
        _init() {
            this._pictures = Array.from(document.querySelectorAll(`*[${s}]`)),
            this.AnimSystem = this._findAnim(),
            null !== this.AnimSystem && (this._injectSources(),
            this._addKeyframesToImages(),
            this._addMethodsToPictures())
        }
        _addMethodsToPictures() {
            this._pictures.forEach((e=>{
                e.forceLoad = ()=>{
                    this._downloadImage(e)
                }
            }
            ))
        }
        _injectSources() {
            this._pictures.forEach((e=>{
                const t = e.nextElementSibling;
                if (t && "NOSCRIPT" === t.nodeName) {
                    const i = e.querySelector("img")
                      , s = t.textContent.match(/<source .+ \/>/g);
                    s && i.insertAdjacentHTML("beforebegin", s.join(""))
                }
            }
            ))
        }
        _defineKeyframeOptions(e) {
            const t = e.getAttribute(n) || "{}";
            return Object.assign({}, {
                start: "t - 200vh",
                end: "b + 100vh",
                event: "PictureLazyLoading"
            }, JSON.parse(t))
        }
        _addKeyframesToImages() {
            this._pictures.forEach((e=>{
                e.__scrollGroup = this.AnimSystem.getGroupForTarget(document.body),
                this.AnimSystem.getGroupForTarget(e) && (e.__scrollGroup = this.AnimSystem.getGroupForTarget(e));
                let t = this._defineKeyframeOptions(e);
                e.__scrollGroup.addKeyframe(e, t).controller.once("PictureLazyLoading:enter", (()=>{
                    this._imageIsInLoadRange(e)
                }
                ))
            }
            ))
        }
        _imageIsInLoadRange(e) {
            e.querySelector("img") && this._downloadImage(e)
        }
        _downloadImage(e) {
            const t = e.querySelector(`[${r}]`);
            t && e.removeChild(t)
        }
        _findAnim() {
            var e = Array.from(document.querySelectorAll("[data-anim-group],[data-anim-scroll-group],[data-anim-time-group]"));
            return e.map((e=>e._animInfo ? e._animInfo.group : null)).filter((e=>null !== e)),
            e[0] && e[0]._animInfo ? e[0]._animInfo.group.anim : (console.error("PictureLazyLoading: AnimSystem not found, please initialize anim before instantiating"),
            null)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(1).PICTURE_CLASS_LOADED
      , r = i(1).PICTURE_DATA_LOADED
      , n = i(1).PICTURE_DATA_EMPTY_SOURCE;
    e.exports = (window.__pictureElementInstancesLoaded = new Map,
    void (window.__lp = function(e) {
        const t = e.target.parentElement;
        t.querySelector(`[${n}]`) ? e.stopImmediatePropagation() : (t.classList.add(`${s}`),
        t.setAttribute(`${r}`, ""),
        window.__pictureElementInstancesLoaded.set(t.id, t),
        e.target.onload = null)
    }
    ))
}
, function(e, t, i) {
    "use strict";
    var s = i(31)
      , r = i(32);
    function n(e, t) {
        if ("function" == typeof e.parseVersion)
            return e.parseVersion(t);
        var i, s = e.version || e.userAgent;
        "string" == typeof s && (s = [s]);
        for (var r, n = s.length, a = 0; a < n; a++)
            if ((r = t.match((i = s[a],
            new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)","i")))) && r.length > 1)
                return r[1].replace(/_/g, ".");
        return !1
    }
    function a(e, t, i) {
        for (var s, r, a = e.length, o = 0; o < a; o++)
            if ("function" == typeof e[o].test ? !0 === e[o].test(i) && (s = e[o].name) : i.ua.indexOf(e[o].userAgent) > -1 && (s = e[o].name),
            s) {
                if (t[s] = !0,
                "string" == typeof (r = n(e[o], i.ua))) {
                    var h = r.split(".");
                    t.version.string = r,
                    h && h.length > 0 && (t.version.major = parseInt(h[0] || 0),
                    t.version.minor = parseInt(h[1] || 0),
                    t.version.patch = parseInt(h[2] || 0))
                } else
                    "edge" === s && (t.version.string = "12.0.0",
                    t.version.major = "12",
                    t.version.minor = "0",
                    t.version.patch = "0");
                return "function" == typeof e[o].parseDocumentMode && (t.version.documentMode = e[o].parseDocumentMode()),
                t
            }
        return t
    }
    e.exports = function(e) {
        var t = {};
        return t.browser = a(r.browser, s.browser, e),
        t.os = a(r.os, s.os, e),
        t
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        browser: {
            safari: !1,
            chrome: !1,
            firefox: !1,
            ie: !1,
            opera: !1,
            android: !1,
            edge: !1,
            edgeChromium: !1,
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
, function(e, t, i) {
    "use strict";
    e.exports = {
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
, , function(e, t, i) {
    "use strict";
    const s = i(13)
      , r = i(52);
    e.exports = class extends s {
        constructor(e, t, i, s, n=!1, a) {
            super(e, t, i, s = r(s), n, a)
        }
        set(e) {
            let t = this.current;
            this.round && (t = Math.round(t)),
            this.suffix && (t += this.suffix),
            e.setProperty(this.key, t)
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        return e.reduce(((e,t)=>(e[t] = t,
        e)), {})
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(15)
      , r = i(3)
      , n = i(13);
    class a extends s {
        constructor(e, t) {
            super(e, t),
            this.keyframeType = r.KeyframeTypes.CSSClass,
            this._triggerType = a.TRIGGER_TYPE_CSS_CLASS,
            this.cssClass = "",
            this.friendlyName = "",
            this.style = {
                on: null,
                off: null
            },
            this.toggle = r.KeyframeDefaults.toggle,
            this.isApplied = !1
        }
        parseOptions(e) {
            if (!this.controller._ownerIsElement)
                throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
            if (e.x = void 0,
            e.y = void 0,
            e.z = void 0,
            e.scale = void 0,
            e.scaleX = void 0,
            e.scaleY = void 0,
            e.rotationX = void 0,
            e.rotationY = void 0,
            e.rotationZ = void 0,
            e.rotation = void 0,
            e.opacity = void 0,
            e.hold = void 0,
            void 0 !== e.toggle && (this.toggle = e.toggle),
            void 0 !== e.cssClass)
                this._triggerType = a.TRIGGER_TYPE_CSS_CLASS,
                this.cssClass = e.cssClass,
                this.friendlyName = "." + this.cssClass,
                void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
                    add: [],
                    remove: []
                });
            else {
                if (void 0 === e.style || !this.isValidStyleProperty(e.style))
                    throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
                if (this._triggerType = a.TRIGGER_TYPE_STYLE_PROPERTY,
                this.style = e.style,
                this.friendlyName = "style",
                this.toggle = void 0 !== this.style.off || this.toggle,
                this.toggle && void 0 === this.style.off) {
                    this.style.off = {};
                    for (let e in this.style.on)
                        this.style.off[e] = ""
                }
                void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
            }
            if (void 0 === e.end && (e.end = e.start),
            e.toggle = this.toggle,
            this._triggerType === a.TRIGGER_TYPE_CSS_CLASS)
                this.isApplied = this.controller.element.classList.contains(this.cssClass);
            else {
                let e = getComputedStyle(this.controller.element);
                this.isApplied = !0;
                for (let t in this.style.on)
                    if (e[t] !== this.style.on[t]) {
                        this.isApplied = !1;
                        break
                    }
            }
            s.prototype.parseOptions.call(this, e),
            this.animValues[this.friendlyName] = [0, 0],
            void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new n(0,1,!1,this.friendlyName)),
            this.keyframeType = r.KeyframeTypes.CSSClass
        }
        updateLocalProgress(e) {
            this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
        }
        _apply() {
            if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS)
                this.controller.tweenProps.targetClasses.add.push(this.cssClass),
                this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.on)
                    this.controller.tweenProps.targetStyles[e] = this.style.on[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !0
        }
        _unapply() {
            if (this._triggerType === a.TRIGGER_TYPE_CSS_CLASS)
                this.controller.tweenProps.targetClasses.remove.push(this.cssClass),
                this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.off)
                    this.controller.tweenProps.targetStyles[e] = this.style.off[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !1
        }
        isValidStyleProperty(e) {
            if (!e.hasOwnProperty("on"))
                return !1;
            if ("object" != typeof e.on)
                throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
            if (this.toggle && e.hasOwnProperty("off") && "object" != typeof e.off)
                throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:'hidden', otherProperty: 'value'}}");
            return !0
        }
        reconcile(e) {}
        onDOMRead(e) {}
        evaluateInterpolationConstraints() {}
    }
    a.TRIGGER_TYPE_CSS_CLASS = 0,
    a.TRIGGER_TYPE_STYLE_PROPERTY = 1,
    a.DATA_ATTRIBUTE = "data-anim-classname",
    e.exports = a
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(7)
      , n = i(35)
      , a = i(3)
      , o = i(56)
      , h = i(134)
      , l = i(135)
      , c = i(57)
      , u = i(136)
      , d = i(138)
      , m = {};
    "undefined" != typeof window && (m.create = i(11),
    m.update = i(9),
    m.draw = i(4));
    let p = 0;
    e.exports = class extends s {
        constructor(e, t) {
            super(),
            this.anim = t,
            this.element = e,
            this.name = this.name || e.getAttribute("data-anim-scroll-group"),
            this.isEnabled = !0,
            this.position = new h,
            this.metrics = new c,
            this.metrics.add(this.element),
            this.expressionParser = new u(this),
            this.boundsMin = 0,
            this.boundsMax = 0,
            this.timelineUpdateRequired = !1,
            this._keyframesDirty = !1,
            this.viewableRange = this.createViewableRange(),
            this.defaultEase = a.KeyframeDefaults.ease,
            this.keyframeControllers = [],
            this.updateProgress(this.getPosition()),
            this.onDOMRead = this.onDOMRead.bind(this),
            this.onDOMWrite = this.onDOMWrite.bind(this),
            this.gui = null,
            this.computedStyleCache = {},
            this.finalizeInit()
        }
        finalizeInit() {
            this.element._animInfo = new o(this,null,!0),
            this.setupRAFEmitter()
        }
        destroy() {
            this.destroyed = !0,
            this.expressionParser.destroy(),
            this.expressionParser = null;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].destroy();
            this.keyframeControllers = null,
            this.position = null,
            this.viewableRange = null,
            this.gui && (this.gui.destroy(),
            this.gui = null),
            this.metrics.destroy(),
            this.metrics = null,
            this.rafEmitter.destroy(),
            this.rafEmitter = null,
            this.anim = null,
            this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null,
            this.element._animInfo = null),
            this.element = null,
            this.isEnabled = !1,
            super.destroy()
        }
        removeKeyframeController(e) {
            return this.keyframeControllers.includes(e) ? (e._allKeyframes.forEach((e=>e.markedForRemoval = !0)),
            this.keyframesDirty = !0,
            new Promise((t=>{
                m.draw((()=>{
                    const i = this.keyframeControllers.indexOf(e);
                    -1 !== i ? (this.keyframeControllers.splice(i, 1),
                    e.onDOMWrite(),
                    e.destroy(),
                    this.gui && this.gui.create(),
                    t()) : t()
                }
                ))
            }
            ))) : Promise.resolve()
        }
        remove() {
            return this.anim.removeGroup(this)
        }
        clear() {
            return Promise.all(this.keyframeControllers.map((e=>this.removeKeyframeController(e))))
        }
        setupRAFEmitter(e) {
            this.rafEmitter && this.rafEmitter.destroy(),
            this.rafEmitter = e || new m.create,
            this.rafEmitter.on("update", this.onDOMRead),
            this.rafEmitter.on("draw", this.onDOMWrite),
            this.rafEmitter.once("external", (()=>this.reconcile()))
        }
        requestDOMChange() {
            return !!this.isEnabled && this.rafEmitter.run()
        }
        onDOMRead() {
            this.keyframesDirty && this.onKeyframesDirty();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].onDOMRead(this.position.local)
        }
        onDOMWrite() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].onDOMWrite();
            this.needsUpdate() && this.requestDOMChange(),
            this.computedStyleCache = {}
        }
        needsUpdate() {
            if (this._keyframesDirty)
                return !0;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                if (this.keyframeControllers[e].needsUpdate())
                    return !0;
            return !1
        }
        addKeyframe(e, t) {
            let i = this.getControllerForTarget(e);
            return null === i && (i = new d(this,e),
            this.keyframeControllers.push(i)),
            this.keyframesDirty = !0,
            i.addKeyframe(t)
        }
        addEvent(e, t) {
            t.event = t.event || "Generic-Event-Name-" + p++;
            let i = void 0 !== t.end && t.end !== t.start;
            const s = this.addKeyframe(e, t);
            return i ? (t.onEnterOnce && s.controller.once(t.event + ":enter", t.onEnterOnce),
            t.onExitOnce && s.controller.once(t.event + ":exit", t.onExitOnce),
            t.onEnter && s.controller.on(t.event + ":enter", t.onEnter),
            t.onExit && s.controller.on(t.event + ":exit", t.onExit)) : (t.onEventOnce && s.controller.once(t.event, t.onEventOnce),
            t.onEventReverseOnce && s.controller.once(t.event + ":reverse", t.onEventReverseOnce),
            t.onEvent && s.controller.on(t.event, t.onEvent),
            t.onEventReverse && s.controller.on(t.event + ":reverse", t.onEventReverse)),
            s
        }
        forceUpdate({waitForNextUpdate: e=!0, silent: t=!1}={}) {
            this.isEnabled && (this.refreshMetrics(),
            this.timelineUpdateRequired = !0,
            e ? this.keyframesDirty = !0 : this.onKeyframesDirty({
                silent: t
            }))
        }
        onKeyframesDirty({silent: e=!1}={}) {
            this.determineActiveKeyframes(),
            this.keyframesDirty = !1,
            this.metrics.refreshMetrics(this.element),
            this.viewableRange = this.createViewableRange();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].updateAnimationConstraints();
            this.updateBounds(),
            this.updateProgress(this.getPosition()),
            e || this.updateTimeline(),
            this.gui && this.gui.create()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this.keyframeControllers.forEach((t=>{
                e.add(t.element),
                t._allKeyframes.forEach((t=>t.anchors.forEach((t=>e.add(t)))))
            }
            )),
            this.metrics.refreshCollection(e),
            this.viewableRange = this.createViewableRange()
        }
        reconcile() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].reconcile()
        }
        determineActiveKeyframes(e) {
            e = e || n(Array.from(document.documentElement.classList));
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].determineActiveKeyframes(e)
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length)
                return this.boundsMin = 0,
                void (this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].getBounds(e);
            let t = this.convertTValueToScrollPosition(e.min)
              , i = this.convertTValueToScrollPosition(e.max);
            i - t < a.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(t - .5 * a.pageMetrics.windowHeight),
            e.max = this.convertScrollPositionToTValue(i + .5 * a.pageMetrics.windowHeight)) : (e.min -= .001,
            e.max += .001),
            this.boundsMin = e.min,
            this.boundsMax = e.max,
            this.timelineUpdateRequired = !0
        }
        createViewableRange() {
            return new l(this.metrics.get(this.element),a.pageMetrics.windowHeight)
        }
        _onBreakpointChange(e, t) {
            this.keyframesDirty = !0,
            this.determineActiveKeyframes()
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a),
            this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        performTimelineDispatch() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].updateLocalProgress(this.position.local);
            this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local),
            this.trigger("update", this.position.local),
            this.timelineUpdateRequired = !1,
            this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START, this),
            this.trigger("start", this)) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? (this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this),
            this.trigger("start:reverse", this)) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this),
            this.trigger("complete", this)) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && (this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this),
            this.trigger("complete:reverse", this))),
            null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        updateTimeline(e) {
            if (!this.isEnabled)
                return !1;
            void 0 === e && (e = this.getPosition()),
            this.updateProgress(e);
            let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax
              , i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
            if (!this.timelineUpdateRequired && t && i && this.position.lastPosition === e)
                return void (this.position.local = this.position.localUnclamped);
            if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax)
                return this.performTimelineDispatch(),
                this.requestDOMChange(),
                void (this.position.lastPosition = this.position.localUnclamped);
            let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax
              , r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
            if (s && r)
                return this.performTimelineDispatch(),
                this.requestDOMChange(),
                void (this.position.lastPosition = this.position.localUnclamped);
            const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax
              , a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
            (n || a) && (this.performTimelineDispatch(),
            this.requestDOMChange(),
            this.position.lastPosition = this.position.localUnclamped),
            null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        _onScroll(e) {
            this.updateTimeline(e)
        }
        convertScrollPositionToTValue(e) {
            return this.hasDuration() ? r.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
        }
        convertTValueToScrollPosition(e) {
            return this.hasDuration() ? r.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
        }
        hasDuration() {
            return this.viewableRange.a !== this.viewableRange.d
        }
        getPosition() {
            return a.pageMetrics.scrollY
        }
        getControllerForTarget(e) {
            if (!e._animInfo || !e._animInfo.controllers)
                return null;
            if (e._animInfo.controller && e._animInfo.controller.group === this)
                return e._animInfo.controller;
            const t = e._animInfo.controllers;
            for (let e = 0, i = t.length; e < i; e++)
                if (t[e].group === this)
                    return t[e];
            return null
        }
        trigger(e, t) {
            if (void 0 !== this._events[e])
                for (let i = this._events[e].length - 1; i >= 0; i--)
                    void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
        }
        set keyframesDirty(e) {
            this._keyframesDirty = e,
            this._keyframesDirty && this.requestDOMChange()
        }
        get keyframesDirty() {
            return this._keyframesDirty
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        return e.reduce(((e,t)=>(e[t] = t,
        e)), {})
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(17)
      , r = i(8);
    class n extends s {
        constructor(e, t) {
            super(e, t),
            this.keyframeType = r.KeyframeTypes.CSSClass,
            this._triggerType = n.TRIGGER_TYPE_CSS_CLASS,
            this.cssClass = "",
            this.friendlyName = "",
            this.style = {
                on: null,
                off: null
            },
            this.toggle = !1,
            this.isApplied = !1
        }
        parseOptions(e) {
            if (!this.controller._ownerIsElement)
                throw new TypeError("CSS Keyframes cannot be applied to JS Objects");
            if (e.x = void 0,
            e.y = void 0,
            e.scale = void 0,
            e.scaleX = void 0,
            e.scaleY = void 0,
            e.rotation = void 0,
            e.opacity = void 0,
            e.hold = void 0,
            void 0 !== e.toggle && (this.toggle = e.toggle),
            void 0 !== e.cssClass)
                this._triggerType = n.TRIGGER_TYPE_CSS_CLASS,
                this.cssClass = e.cssClass,
                this.friendlyName = "." + this.cssClass,
                void 0 === this.controller.tweenProps.targetClasses && (this.controller.tweenProps.targetClasses = {
                    add: [],
                    remove: []
                });
            else {
                if (void 0 === e.style || !this.isValidStyleProperty(e.style))
                    throw new TypeError("KeyframeCSSClass no 'cssClass` property found. If using `style` property its also missing or invalid");
                if (this._triggerType = n.TRIGGER_TYPE_STYLE_PROPERTY,
                this.style = e.style,
                this.friendlyName = "style",
                this.toggle = void 0 !== this.style.off || this.toggle,
                this.toggle && void 0 === this.style.off) {
                    this.style.off = {};
                    for (let e in this.style.on)
                        this.style.off[e] = ""
                }
                void 0 === this.controller.tweenProps.targetStyles && (this.controller.tweenProps.targetStyles = {})
            }
            if (void 0 === e.end && (e.end = e.start),
            e.toggle = this.toggle,
            this._triggerType === n.TRIGGER_TYPE_CSS_CLASS)
                this.isApplied = this.controller.element.classList.contains(this.cssClass);
            else {
                let e = getComputedStyle(this.controller.element);
                this.isApplied = !0;
                for (let t in this.style.on)
                    if (e[t] !== this.style.on[t]) {
                        this.isApplied = !1;
                        break
                    }
            }
            s.prototype.parseOptions.call(this, e),
            this.animValues[this.friendlyName] = [0, 0],
            void 0 === this.controller.tweenProps[this.friendlyName] && (this.controller.tweenProps[this.friendlyName] = new r.TargetValue(0,1,!1)),
            this.keyframeType = r.KeyframeTypes.CSSClass
        }
        updateLocalProgress(e) {
            this.isApplied && !this.toggle || (this.start !== this.end ? !this.isApplied && e >= this.start && e <= this.end ? this._apply() : this.isApplied && this.toggle && (e < this.start || e > this.end) && this._unapply() : !this.isApplied && e >= this.start ? this._apply() : this.isApplied && this.toggle && e < this.start && this._unapply())
        }
        _apply() {
            if (this._triggerType === n.TRIGGER_TYPE_CSS_CLASS)
                this.controller.tweenProps.targetClasses.add.push(this.cssClass),
                this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.on)
                    this.controller.tweenProps.targetStyles[e] = this.style.on[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !0
        }
        _unapply() {
            if (this._triggerType === n.TRIGGER_TYPE_CSS_CLASS)
                this.controller.tweenProps.targetClasses.remove.push(this.cssClass),
                this.controller.needsClassUpdate = !0;
            else {
                for (let e in this.style.off)
                    this.controller.tweenProps.targetStyles[e] = this.style.off[e];
                this.controller.needsStyleUpdate = !0
            }
            this.isApplied = !1
        }
        isValidStyleProperty(e) {
            if (!e.hasOwnProperty("on"))
                return !1;
            if ("object" != typeof e.on)
                throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            if (this.toggle && e.hasOwnProperty("off") && "object" != typeof e.off)
                throw new TypeError("KeyframeCSSClass `style` property should be in the form of: {on:{visibility:hidden, otherProperty: value}}");
            return !0
        }
        reconcile(e, t) {}
        onDOMRead(e, t) {}
        evaluateInterpolationConstraints() {}
    }
    n.TRIGGER_TYPE_CSS_CLASS = 0,
    n.TRIGGER_TYPE_STYLE_PROPERTY = 1,
    n.DATA_ATTRIBUTE = "data-anim-classname",
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var s = i(16);
    e.exports = s.cancelAnimationFrame("draw")
}
, function(e, t, i) {
    "use strict";
    const s = i(42)
      , r = i(44);
    e.exports = {
        itemsCreated(e) {
            this._items.forEach(((e,t)=>{
                t === this.wrappedIndex(this.currentIndex) ? r(e.el) : s(e.el)
            }
            ))
        },
        onItemChangeCompleted(e) {
            const {previous: t, current: i} = this.selections.completed;
            t && t !== i && s(t.el),
            r(i.el)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(18)
      , r = i(23)
      , n = "data-original-"
      , a = "tabindex"
      , o = function(e, t) {
        var i = e.getAttribute(n + t);
        i || (i = e.getAttribute(t) || "",
        e.setAttribute(n + t, i))
    };
    e.exports = function(e, t) {
        if (r.isFocusableElement(e, t))
            o(e, a),
            e.setAttribute(a, "-1");
        else
            for (var i = r.getTabbableElements(e, t), n = i.length; n--; )
                o(i[n], a),
                i[n].setAttribute(a, "-1");
        o(e, s.HIDDEN),
        e.setAttribute(s.HIDDEN, "true")
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
        nodeName: {
            INPUT: "input",
            SELECT: "select",
            TEXTAREA: "textarea",
            BUTTON: "button",
            OPTGROUP: "optgroup",
            OPTION: "option",
            MENUITEM: "menuitem",
            FIELDSET: "fieldset",
            OBJECT: "object",
            A: "a"
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(45)
      , r = i(18)
      , n = "data-original-"
      , a = "tabindex"
      , o = function(e, t) {
        var i = e.getAttribute(n + t);
        null !== i && ("" === i ? s(e, t) : e.setAttribute(t, i),
        s(e, n + t))
    };
    e.exports = function(e) {
        o(e, a),
        o(e, r.HIDDEN);
        for (var t = e.querySelectorAll(`[${n + a}]`), i = t.length; i--; )
            o(t[i], a)
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        let i;
        i = e instanceof NodeList ? e : [].concat(e),
        t = Array.isArray(t) ? t : [].concat(t),
        i.forEach((e=>{
            t.forEach((t=>{
                e.removeAttribute(t)
            }
            ))
        }
        ))
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = i(90)("warn")
}
, , , , function(e, t, i) {
    "use strict";
    e.exports = class {
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        return e.startsWith("--") ? e : e.replace(/[A-Z]/g, (e=>"-" + e.toLowerCase()))
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = ()=>Math.random().toString(16).slice(-4)
}
, function(e, t, i) {
    "use strict";
    let s = ["borderRadius", "bottom", "fontSize", "fontWeight", "height", "left", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "opacity", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "right", "top", "width", "zIndex", "color", "backgroundColor", "fill", "stroke", "strokeDashoffset"];
    s.push(...s.map((e=>e.replace(/[A-Z]/g, (e=>"-" + e.toLowerCase())))));
    e.exports = {
        transformAttributes: ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"],
        cssAttributes: s,
        domAttributes: ["currentTime", "scrollLeft", "scrollTop"]
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(15)
      , r = i(3)
      , n = i(13);
    class a extends s {
        constructor(e, t) {
            super(e, t),
            this.keyframeType = r.KeyframeTypes.Event,
            this.isApplied = !1,
            this.hasDuration = !1,
            this.isCurrentlyInRange = !1
        }
        parseOptions(e) {
            e.x = void 0,
            e.y = void 0,
            e.scale = void 0,
            e.scaleX = void 0,
            e.scaleY = void 0,
            e.rotation = void 0,
            e.style = void 0,
            e.cssClass = void 0,
            e.rotation = void 0,
            e.opacity = void 0,
            e.hold = void 0,
            this.event = e.event,
            this.animValues[this.event] = [0, 0],
            void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new n(0,1,!1,this.event)),
            super.parseOptions(e),
            this.keyframeType = r.KeyframeTypes.Event
        }
        updateLocalProgress(e) {
            if (this.hasDuration) {
                let t = this.isCurrentlyInRange
                  , i = e >= this.start && e <= this.end;
                if (t === i)
                    return;
                return this.isCurrentlyInRange = i,
                void (i && !t ? this._trigger(this.event + ":enter") : t && !i && this._trigger(this.event + ":exit"))
            }
            !this.isApplied && e >= this.start ? (this.isApplied = !0,
            this._trigger(this.event)) : this.isApplied && e < this.start && (this.isApplied = !1,
            this._trigger(this.event + ":reverse"))
        }
        _trigger(e) {
            this.controller.eventObject.event = e,
            this.controller.eventObject.keyframe = this,
            this.controller.trigger(e, this.controller.eventObject)
        }
        evaluateConstraints() {
            super.evaluateConstraints(),
            this.hasDuration = this.start !== this.end
        }
        reset(e) {
            this.isApplied = !1,
            this.isCurrentlyInRange = !1,
            super.reset(e)
        }
        onDOMRead(e) {}
        reconcile(e) {}
        evaluateInterpolationConstraints() {}
    }
    a.DATA_ATTRIBUTE = "data-anim-event",
    e.exports = a
}
, function(e, t, i) {
    "use strict";
    const s = i(51);
    e.exports = class {
        constructor(e, t, i=!1) {
            this.isGroup = i,
            this.group = e,
            this.controller = t,
            this.controllers = [],
            this.tweenProps = new s
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(3)
      , r = (e,t)=>null == e ? t : e;
    class n {
        constructor(e) {
            this.top = 0,
            this.bottom = 0,
            this.left = 0,
            this.right = 0,
            this.height = 0,
            this.width = 0
        }
        toString() {
            return `top:${this.top}, bottom:${this.bottom}, left:${this.left}, right:${this.right}, height:${this.height}, width:${this.width}`
        }
        toObject() {
            return {
                top: this.top,
                bottom: this.bottom,
                left: this.left,
                right: this.right,
                height: this.height,
                width: this.width
            }
        }
    }
    e.exports = class {
        constructor() {
            this.clear()
        }
        clear() {
            this._metrics = new WeakMap
        }
        destroy() {
            this._metrics = null
        }
        add(e) {
            let t = this._metrics.get(e);
            if (t)
                return t;
            let i = new n(e);
            return this._metrics.set(e, i),
            this._refreshMetrics(e, i)
        }
        get(e) {
            return this._metrics.get(e)
        }
        refreshCollection(e) {
            e.forEach((e=>this._refreshMetrics(e, null)))
        }
        refreshMetrics(e) {
            return this._refreshMetrics(e)
        }
        _refreshMetrics(e, t) {
            if (t = t || this._metrics.get(e),
            !(e instanceof Element))
                return t.width = r(e.width, 0),
                t.height = r(e.height, 0),
                t.top = r(e.top, r(e.y, 0)),
                t.left = r(e.left, r(e.x, 0)),
                t.right = t.left + t.width,
                t.bottom = t.top + t.height,
                t;
            if (void 0 === e.offsetWidth) {
                let i = e.getBoundingClientRect();
                return t.width = i.width,
                t.height = i.height,
                t.top = s.pageMetrics.scrollY + i.top,
                t.left = s.pageMetrics.scrollX + i.left,
                t.right = t.left + t.width,
                t.bottom = t.top + t.height,
                t
            }
            t.width = e.offsetWidth,
            t.height = e.offsetHeight,
            t.top = s.pageMetrics.documentOffsetY,
            t.left = s.pageMetrics.documentOffsetX;
            let i = e;
            for (; i; )
                t.top += i.offsetTop,
                t.left += i.offsetLeft,
                i = i.offsetParent;
            return t.right = t.left + t.width,
            t.bottom = t.top + t.height,
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    "undefined" != typeof window && (window.DOMMatrix = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix);
    const s = 180 / Math.PI
      , r = e=>Math.round(1e6 * e) / 1e6;
    function n(e) {
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    }
    function a(e, t) {
        return 0 === t ? Array.from(e) : [e[0] / t, e[1] / t, e[2] / t]
    }
    function o(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }
    function h(e, t, i, s) {
        return [e[0] * i + t[0] * s, e[1] * i + t[1] * s, e[2] * i + t[2] * s]
    }
    function l(e) {
        const t = new Float32Array(4)
          , i = new Float32Array(3)
          , l = new Float32Array(3)
          , c = new Float32Array(3);
        c[0] = e[3][0],
        c[1] = e[3][1],
        c[2] = e[3][2];
        const u = new Array(3);
        for (let t = 0; t < 3; t++)
            u[t] = e[t].slice(0, 3);
        i[0] = n(u[0]),
        u[0] = a(u[0], i[0]),
        l[0] = o(u[0], u[1]),
        u[1] = h(u[1], u[0], 1, -l[0]),
        i[1] = n(u[1]),
        u[1] = a(u[1], i[1]),
        l[0] /= i[1],
        l[1] = o(u[0], u[2]),
        u[2] = h(u[2], u[0], 1, -l[1]),
        l[2] = o(u[1], u[2]),
        u[2] = h(u[2], u[1], 1, -l[2]),
        i[2] = n(u[2]),
        u[2] = a(u[2], i[2]),
        l[1] /= i[2],
        l[2] /= i[2];
        const d = (m = u[1],
        p = u[2],
        [m[1] * p[2] - m[2] * p[1], m[2] * p[0] - m[0] * p[2], m[0] * p[1] - m[1] * p[0]]);
        var m, p;
        if (o(u[0], d) < 0)
            for (let e = 0; e < 3; e++)
                i[e] *= -1,
                u[e][0] *= -1,
                u[e][1] *= -1,
                u[e][2] *= -1;
        let f;
        return t[0] = .5 * Math.sqrt(Math.max(1 + u[0][0] - u[1][1] - u[2][2], 0)),
        t[1] = .5 * Math.sqrt(Math.max(1 - u[0][0] + u[1][1] - u[2][2], 0)),
        t[2] = .5 * Math.sqrt(Math.max(1 - u[0][0] - u[1][1] + u[2][2], 0)),
        t[3] = .5 * Math.sqrt(Math.max(1 + u[0][0] + u[1][1] + u[2][2], 0)),
        u[2][1] > u[1][2] && (t[0] = -t[0]),
        u[0][2] > u[2][0] && (t[1] = -t[1]),
        u[1][0] > u[0][1] && (t[2] = -t[2]),
        f = t[0] < .001 && t[0] >= 0 && t[1] < .001 && t[1] >= 0 ? [0, 0, r(180 * Math.atan2(u[0][1], u[0][0]) / Math.PI)] : function(e) {
            const [t,i,n,a] = e
              , o = t * t
              , h = i * i
              , l = n * n
              , c = t * i + n * a
              , u = a * a + o + h + l;
            return c > .49999 * u ? [0, 2 * Math.atan2(t, a) * s, 90] : c < -.49999 * u ? [0, -2 * Math.atan2(t, a) * s, -90] : [r(Math.atan2(2 * t * a - 2 * i * n, 1 - 2 * o - 2 * l) * s), r(Math.atan2(2 * i * a - 2 * t * n, 1 - 2 * h - 2 * l) * s), r(Math.asin(2 * t * i + 2 * n * a) * s)]
        }(t),
        {
            translation: c,
            rotation: f,
            eulerRotation: f,
            scale: [r(i[0]), r(i[1]), r(i[2])]
        }
    }
    e.exports = function(e) {
        e instanceof Element && (e = String(getComputedStyle(e).transform).trim());
        let t = new DOMMatrix(e);
        const i = new Array(4);
        for (let e = 1; e < 5; e++) {
            const s = i[e - 1] = new Float32Array(4);
            for (let i = 1; i < 5; i++)
                s[i - 1] = t[`m ${e}${i}`]
        }
        return l(i)
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        majorVersionNumber: "3.x"
    }
}
, function(e, t) {
    e.exports = function() {
        var e = new Float32Array(16);
        return e[0] = 1,
        e[1] = 0,
        e[2] = 0,
        e[3] = 0,
        e[4] = 0,
        e[5] = 1,
        e[6] = 0,
        e[7] = 0,
        e[8] = 0,
        e[9] = 0,
        e[10] = 1,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        e
    }
}
, function(e, t) {
    e.exports = function(e, t, i) {
        var s = Math.sin(i)
          , r = Math.cos(i)
          , n = t[4]
          , a = t[5]
          , o = t[6]
          , h = t[7]
          , l = t[8]
          , c = t[9]
          , u = t[10]
          , d = t[11];
        t !== e && (e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15]);
        return e[4] = n * r + l * s,
        e[5] = a * r + c * s,
        e[6] = o * r + u * s,
        e[7] = h * r + d * s,
        e[8] = l * r - n * s,
        e[9] = c * r - a * s,
        e[10] = u * r - o * s,
        e[11] = d * r - h * s,
        e
    }
}
, function(e, t) {
    e.exports = function(e, t, i) {
        var s = Math.sin(i)
          , r = Math.cos(i)
          , n = t[0]
          , a = t[1]
          , o = t[2]
          , h = t[3]
          , l = t[8]
          , c = t[9]
          , u = t[10]
          , d = t[11];
        t !== e && (e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15]);
        return e[0] = n * r - l * s,
        e[1] = a * r - c * s,
        e[2] = o * r - u * s,
        e[3] = h * r - d * s,
        e[8] = n * s + l * r,
        e[9] = a * s + c * r,
        e[10] = o * s + u * r,
        e[11] = h * s + d * r,
        e
    }
}
, function(e, t) {
    e.exports = function(e, t, i) {
        var s = Math.sin(i)
          , r = Math.cos(i)
          , n = t[0]
          , a = t[1]
          , o = t[2]
          , h = t[3]
          , l = t[4]
          , c = t[5]
          , u = t[6]
          , d = t[7];
        t !== e && (e[8] = t[8],
        e[9] = t[9],
        e[10] = t[10],
        e[11] = t[11],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15]);
        return e[0] = n * r + l * s,
        e[1] = a * r + c * s,
        e[2] = o * r + u * s,
        e[3] = h * r + d * s,
        e[4] = l * r - n * s,
        e[5] = c * r - a * s,
        e[6] = u * r - o * s,
        e[7] = d * r - h * s,
        e
    }
}
, function(e, t) {
    e.exports = function(e, t, i) {
        var s = i[0]
          , r = i[1]
          , n = i[2];
        return e[0] = t[0] * s,
        e[1] = t[1] * s,
        e[2] = t[2] * s,
        e[3] = t[3] * s,
        e[4] = t[4] * r,
        e[5] = t[5] * r,
        e[6] = t[6] * r,
        e[7] = t[7] * r,
        e[8] = t[8] * n,
        e[9] = t[9] * n,
        e[10] = t[10] * n,
        e[11] = t[11] * n,
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15],
        e
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(3);
    class r {
        constructor(e, t) {
            this._index = 0,
            this.keyframe = e,
            t && (this.name = t)
        }
        get start() {
            return this.keyframe.jsonProps.start
        }
        set index(e) {
            this._index = e
        }
        get index() {
            return this._index
        }
    }
    e.exports = class {
        constructor(e) {
            this.timeGroup = e,
            this.chapters = [],
            this.chapterNames = {},
            this.currentChapter = null,
            this.tween = null
        }
        addChapter(e) {
            const {position: t, name: i} = e;
            if (void 0 === t)
                throw ReferenceError("Cannot add chapter without target position.");
            e._impIsFirst || 0 !== this.chapters.length || this.addChapter({
                position: 0,
                _impIsFirst: !0
            });
            let s = this.timeGroup.addKeyframe(this, {
                start: t,
                end: t,
                event: "Chapter"
            });
            this.timeGroup.forceUpdate({
                waitForNextFrame: !1,
                silent: !0
            });
            const n = new r(s,i);
            if (this.chapters.push(n),
            i) {
                if (this.chapterNames.hasOwnProperty(i))
                    throw ReferenceError(`Duplicate chapter name assigned - "${i}" is already in use`);
                this.chapterNames[i] = n
            }
            return this.chapters.sort(((e,t)=>e.start - t.start)).forEach(((e,t)=>e.index = t)),
            this.currentChapter = this.currentChapter || this.chapters[0],
            n
        }
        playToChapter(e) {
            let t;
            if (e.hasOwnProperty("index"))
                t = this.chapters[e.index];
            else {
                if (!e.hasOwnProperty("name"))
                    throw ReferenceError("Cannot play to chapter without target index or name");
                t = this.chapterNames[e.name]
            }
            if (!t || this.currentChapter === t && !0 !== e.force)
                return;
            let i = e.ease || "easeInOutCubic";
            this.tween && this.tween.controller && (this.tween.remove(),
            i = "easeOutQuint"),
            this.timeGroup.timeScale(e.timeScale || 1);
            const r = void 0 !== e.duration ? e.duration : this.getDurationToChapter(t)
              , n = this.timeGroup.time()
              , a = t.start;
            let o = !1;
            this.tween = this.timeGroup.anim.addTween({
                time: n
            }, {
                easeFunction: i,
                duration: r,
                time: [n, a],
                onStart: ()=>this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_INITIATED, {
                    player: this,
                    next: t
                }),
                onDraw: e=>{
                    let i = e.tweenProps.time.current;
                    this.timeGroup.time(i),
                    e.keyframe.curvedT > .5 && !o && (o = !0,
                    this.currentIndex = t.index,
                    this.currentChapter = t,
                    this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_OCCURRED, {
                        player: this,
                        current: t
                    }))
                }
                ,
                onComplete: ()=>{
                    this.timeGroup.trigger(s.EVENTS.ON_CHAPTER_COMPLETED, {
                        player: this,
                        current: t
                    }),
                    this.timeGroup.paused(!0),
                    this.tween = null
                }
            })
        }
        getDurationToChapter(e) {
            const t = this.chapters[e.index - 1] || this.chapters[e.index + 1];
            return Math.abs(t.start - e.start)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(16);
    e.exports = s.cancelAnimationFrame("update")
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        BaseComponent: i(5)
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = class {
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = new class {
        constructor() {
            this.linear = function(e) {
                return e
            }
            ,
            this.easeInQuad = function(e) {
                return e * e
            }
            ,
            this.easeOutQuad = function(e) {
                return e * (2 - e)
            }
            ,
            this.easeInOutQuad = function(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            }
            ,
            this.easeInSin = function(e) {
                return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
            }
            ,
            this.easeOutSin = function(e) {
                return Math.sin(Math.PI / 2 * e)
            }
            ,
            this.easeInOutSin = function(e) {
                return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
            }
            ,
            this.easeInElastic = function(e) {
                return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
            }
            ,
            this.easeOutElastic = function(e) {
                return .04 * e / --e * Math.sin(25 * e)
            }
            ,
            this.easeInOutElastic = function(e) {
                return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
            }
            ,
            this.easeOutBack = function(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }
            ,
            this.easeInCubic = function(e) {
                return e * e * e
            }
            ,
            this.easeOutCubic = function(e) {
                return --e * e * e + 1
            }
            ,
            this.easeInOutCubic = function(e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            }
            ,
            this.easeInQuart = function(e) {
                return e * e * e * e
            }
            ,
            this.easeOutQuart = function(e) {
                return 1 - --e * e * e * e
            }
            ,
            this.easeInOutQuart = function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            }
            ,
            this.easeInQuint = function(e) {
                return e * e * e * e * e
            }
            ,
            this.easeOutQuint = function(e) {
                return 1 + --e * e * e * e * e
            }
            ,
            this.easeInOutQuint = function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = 1e-5
      , r = Math.abs;
    class n {
        constructor(e, t, i, s) {
            this.cp = new Float32Array(6),
            this.cp[0] = 3 * e,
            this.cp[1] = 3 * (i - e) - this.cp[0],
            this.cp[2] = 1 - this.cp[0] - this.cp[1],
            this.cp[3] = 3 * t,
            this.cp[4] = 3 * (s - t) - this.cp[3],
            this.cp[5] = 1 - this.cp[3] - this.cp[4]
        }
        sampleCurveX(e) {
            return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
        }
        sampleCurveY(e) {
            return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
        }
        sampleCurveDerivativeX(e) {
            return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
        }
        solveCurveX(e) {
            var t, i, n, a, o, h;
            for (n = e,
            h = 0; h < 5; h++) {
                if (a = this.sampleCurveX(n) - e,
                r(a) < s)
                    return n;
                if (o = this.sampleCurveDerivativeX(n),
                r(o) < s)
                    break;
                n -= a / o
            }
            if ((n = e) < (t = 0))
                return t;
            if (n > (i = 1))
                return i;
            for (; t < i; ) {
                if (a = this.sampleCurveX(n),
                r(a - e) < s)
                    return n;
                e > a ? t = n : i = n,
                n = .5 * (i - t) + t
            }
            return n
        }
        solve(e) {
            return this.sampleCurveY(this.solveCurveX(e))
        }
    }
    const a = /\d*\.?\d+/g;
    n.fromCSSString = function(e) {
        let t = e.match(a);
        if (4 !== t.length)
            throw `UnitBezier could not convert ${e} to cubic-bezier`;
        let i = t.map(Number)
          , s = new n(i[0],i[1],i[2],i[3]);
        return s.solve.bind(s)
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    e.exports = ()=>Math.random().toString(16).slice(2)
}
, function(e, t, i) {
    "use strict";
    const s = i(17)
      , r = i(8);
    class n extends s {
        constructor(e, t) {
            super(e, t),
            this.keyframeType = r.KeyframeTypes.Event,
            this.isApplied = !1,
            this.hasDuration = !1,
            this.isCurrentlyInRange = !1
        }
        parseOptions(e) {
            e.x = void 0,
            e.y = void 0,
            e.scale = void 0,
            e.scaleX = void 0,
            e.scaleY = void 0,
            e.rotation = void 0,
            e.style = void 0,
            e.cssClass = void 0,
            e.rotation = void 0,
            e.opacity = void 0,
            e.hold = void 0,
            void 0 === e.end && (e.end = e.start),
            this.event = e.event,
            this.animValues[this.event] = [0, 0],
            void 0 === this.controller.tweenProps[this.event] && (this.controller.tweenProps[this.event] = new r.TargetValue(0,1,!1)),
            super.parseOptions(e),
            this.keyframeType = r.KeyframeTypes.Event
        }
        updateLocalProgress(e) {
            if (this.hasDuration) {
                let t = this.isCurrentlyInRange
                  , i = e >= this.start && e <= this.end;
                if (t === i)
                    return;
                return this.isCurrentlyInRange = i,
                void (i && !t ? this._trigger(this.event + ":enter") : t && !i && this._trigger(this.event + ":exit"))
            }
            !this.isApplied && e >= this.start ? (this.isApplied = !0,
            this._trigger(this.event)) : this.isApplied && e < this.start && (this.isApplied = !1,
            this._trigger(this.event + ":reverse"))
        }
        _trigger(e) {
            this.controller.eventObject.event = e,
            this.controller.eventObject.keyframe = this,
            this.controller.trigger(e, this.controller.eventObject)
        }
        evaluateConstraints() {
            super.evaluateConstraints(),
            this.hasDuration = this.start !== this.end
        }
        reset(e) {
            this.isApplied = !1,
            this.isCurrentlyInRange = !1,
            super.reset(e)
        }
        onDOMRead(e, t) {}
        reconcile(e, t) {}
        evaluateInterpolationConstraints() {}
    }
    n.DATA_ATTRIBUTE = "data-anim-event",
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(7)
      , n = i(38)
      , a = i(8)
      , o = i(74)
      , h = i(154)
      , l = i(156)
      , c = {
        create: i(11),
        update: i(9),
        draw: i(4)
    };
    e.exports = class extends s {
        constructor(e, t) {
            super(),
            this.anim = t,
            this.element = e,
            this.name = this.name || e.getAttribute("data-anim-scroll-group"),
            this.isEnabled = !0,
            this.position = new a.Progress,
            this.metrics = new o,
            this.metrics.add(this.element),
            this.expressionParser = new h(this),
            this.boundsMin = 0,
            this.boundsMax = 0,
            this.timelineUpdateRequired = !1,
            this._keyframesDirty = !1,
            this.viewableRange = this.createViewableRange(),
            this.defaultEase = a.KeyframeDefaults.ease,
            this.keyframeControllers = [],
            this.updateProgress(this.getPosition()),
            this.onDOMRead = this.onDOMRead.bind(this),
            this.onDOMWrite = this.onDOMWrite.bind(this),
            this.gui = null,
            this.finalizeInit()
        }
        finalizeInit() {
            this.element._animInfo = new a.AnimInfo(this,null,!0),
            this.setupRAFEmitter()
        }
        destroy() {
            this.expressionParser.destroy(),
            this.expressionParser = null;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].destroy();
            this.keyframeControllers = null,
            this.position = null,
            this.viewableRange = null,
            this.gui && (this.gui.destroy(),
            this.gui = null),
            this.metrics.destroy(),
            this.metrics = null,
            this.rafEmitter.destroy(),
            this.rafEmitter = null,
            this.anim = null,
            this.element._animInfo && this.element._animInfo.group === this && (this.element._animInfo.group = null,
            this.element._animInfo = null),
            this.element = null,
            this.isEnabled = !1,
            super.destroy()
        }
        removeKeyframeController(e) {
            return this.keyframeControllers.includes(e) ? (e._allKeyframes.forEach((e=>e.markedForRemoval = !0)),
            this.keyframesDirty = !0,
            new Promise((t=>{
                c.draw((()=>{
                    const i = this.keyframeControllers.indexOf(e);
                    -1 !== i ? (this.keyframeControllers.splice(i, 1),
                    e.onDOMWrite(),
                    e.destroy(),
                    this.gui && this.gui.create(),
                    t()) : t()
                }
                ))
            }
            ))) : Promise.resolve()
        }
        remove() {
            return this.anim.removeGroup(this)
        }
        setupRAFEmitter(e) {
            this.rafEmitter && this.rafEmitter.destroy(),
            this.rafEmitter = e || new c.create,
            this.rafEmitter.on("update", this.onDOMRead),
            this.rafEmitter.on("draw", this.onDOMWrite),
            this.rafEmitter.once("external", (()=>this.reconcile()))
        }
        requestDOMChange() {
            return !!this.isEnabled && this.rafEmitter.run()
        }
        onDOMRead() {
            this.keyframesDirty && this.onKeyframesDirty();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].onDOMRead(this.position.local)
        }
        onDOMWrite() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].onDOMWrite();
            this.needsUpdate() && this.requestDOMChange()
        }
        needsUpdate() {
            if (this._keyframesDirty)
                return !0;
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                if (this.keyframeControllers[e].needsUpdate())
                    return !0;
            return !1
        }
        addKeyframe(e, t) {
            let i = this.getControllerForTarget(e);
            return null === i && (i = new l(this,e),
            this.keyframeControllers.push(i)),
            this.keyframesDirty = !0,
            i.addKeyframe(t)
        }
        forceUpdate({waitForNextUpdate: e=!0, silent: t=!1}={}) {
            this.isEnabled && (this.refreshMetrics(),
            this.timelineUpdateRequired = !0,
            e ? this.keyframesDirty = !0 : this.onKeyframesDirty({
                silent: t
            }))
        }
        onKeyframesDirty({silent: e=!1}={}) {
            this.determineActiveKeyframes(),
            this.keyframesDirty = !1,
            this.metrics.refreshMetrics(this.element),
            this.viewableRange = this.createViewableRange();
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].updateAnimationConstraints();
            this.updateBounds(),
            this.updateProgress(this.getPosition()),
            e || this._onScroll(),
            this.gui && this.gui.create()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this.keyframeControllers.forEach((t=>{
                e.add(t.element),
                t._allKeyframes.forEach((t=>t.anchors.forEach((t=>e.add(t)))))
            }
            )),
            this.metrics.refreshCollection(e),
            this.viewableRange = this.createViewableRange()
        }
        reconcile() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].reconcile()
        }
        determineActiveKeyframes(e) {
            e = e || n(Array.from(document.documentElement.classList));
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].determineActiveKeyframes(e)
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length)
                return this.boundsMin = 0,
                void (this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].getBounds(e);
            let t = this.convertTValueToScrollPosition(e.min)
              , i = this.convertTValueToScrollPosition(e.max);
            i - t < a.pageMetrics.windowHeight ? (e.min = this.convertScrollPositionToTValue(t - .5 * a.pageMetrics.windowHeight),
            e.max = this.convertScrollPositionToTValue(i + .5 * a.pageMetrics.windowHeight)) : (e.min -= .001,
            e.max += .001),
            this.boundsMin = e.min,
            this.boundsMax = e.max,
            this.timelineUpdateRequired = !0
        }
        createViewableRange() {
            return new a.ViewableRange(this.metrics.get(this.element),a.pageMetrics.windowHeight)
        }
        _onBreakpointChange(e, t) {
            this.keyframesDirty = !0,
            this.determineActiveKeyframes()
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = (e - this.viewableRange.a) / (this.viewableRange.d - this.viewableRange.a),
            this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        performTimelineDispatch() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++)
                this.keyframeControllers[e].updateLocalProgress(this.position.local);
            this.trigger(a.EVENTS.ON_TIMELINE_UPDATE, this.position.local),
            this.timelineUpdateRequired = !1,
            this.position.lastPosition !== this.position.local && (this.position.lastPosition <= this.boundsMin && this.position.localUnclamped > this.boundsMin ? this.trigger(a.EVENTS.ON_TIMELINE_START, this) : this.position.lastPosition >= this.boundsMin && this.position.localUnclamped < this.boundsMin ? this.trigger(a.EVENTS.ON_TIMELINE_START + ":reverse", this) : this.position.lastPosition <= this.boundsMax && this.position.localUnclamped >= this.boundsMax ? this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE, this) : this.position.lastPosition >= this.boundsMax && this.position.localUnclamped < this.boundsMax && this.trigger(a.EVENTS.ON_TIMELINE_COMPLETE + ":reverse", this)),
            null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        _onScroll(e) {
            if (!this.isEnabled)
                return !1;
            void 0 === e && (e = this.getPosition()),
            this.updateProgress(e);
            let t = this.position.lastPosition === this.boundsMin || this.position.lastPosition === this.boundsMax
              , i = this.position.localUnclamped === this.boundsMin || this.position.localUnclamped === this.boundsMax;
            if (!this.timelineUpdateRequired && t && i && this.position.lastPosition === e)
                return void (this.position.local = this.position.localUnclamped);
            if (this.timelineUpdateRequired || this.position.localUnclamped > this.boundsMin && this.position.localUnclamped < this.boundsMax)
                return this.performTimelineDispatch(),
                this.requestDOMChange(),
                void (this.position.lastPosition = this.position.localUnclamped);
            let s = this.position.lastPosition > this.boundsMin && this.position.lastPosition < this.boundsMax
              , r = this.position.localUnclamped <= this.boundsMin || this.position.localUnclamped >= this.boundsMax;
            if (s && r)
                return this.performTimelineDispatch(),
                this.requestDOMChange(),
                void (this.position.lastPosition = this.position.localUnclamped);
            const n = this.position.lastPosition < this.boundsMin && this.position.localUnclamped > this.boundsMax
              , a = this.position.lastPosition > this.boundsMax && this.position.localUnclamped < this.boundsMax;
            (n || a) && (this.performTimelineDispatch(),
            this.requestDOMChange(),
            this.position.lastPosition = this.position.localUnclamped),
            null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        convertScrollPositionToTValue(e) {
            return this.hasDuration() ? r.map(e, this.viewableRange.a, this.viewableRange.d, 0, 1) : 0
        }
        convertTValueToScrollPosition(e) {
            return this.hasDuration() ? r.map(e, 0, 1, this.viewableRange.a, this.viewableRange.d) : 0
        }
        hasDuration() {
            return this.viewableRange.a !== this.viewableRange.d
        }
        getPosition() {
            return a.pageMetrics.scrollY
        }
        getControllerForTarget(e) {
            if (!e._animInfo || !e._animInfo.controllers)
                return null;
            if (e._animInfo.controller && e._animInfo.controller.group === this)
                return e._animInfo.controller;
            const t = e._animInfo.controllers;
            for (let e = 0, i = t.length; e < i; e++)
                if (t[e].group === this)
                    return t[e];
            return null
        }
        trigger(e, t) {
            if (void 0 !== this._events[e])
                for (let i = this._events[e].length - 1; i >= 0; i--)
                    void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
        }
        set keyframesDirty(e) {
            this._keyframesDirty = e,
            this._keyframesDirty && this.requestDOMChange()
        }
        get keyframesDirty() {
            return this._keyframesDirty
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(8)
      , r = (e,t)=>null == e ? t : e;
    class n {
        constructor(e) {
            this.top = 0,
            this.bottom = 0,
            this.left = 0,
            this.right = 0,
            this.height = 0,
            this.width = 0
        }
        toString() {
            return `top:${this.top}, bottom:${this.bottom}, left:${this.left}, right:${this.right}, height:${this.height}, width:${this.width}`
        }
        toObject() {
            return {
                top: this.top,
                bottom: this.bottom,
                left: this.left,
                right: this.right,
                height: this.height,
                width: this.width
            }
        }
    }
    e.exports = class {
        constructor() {
            this.clear()
        }
        clear() {
            this._metrics = new WeakMap
        }
        destroy() {
            this._metrics = null
        }
        add(e) {
            let t = this._metrics.get(e);
            if (t)
                return t;
            let i = new n(e);
            return this._metrics.set(e, i),
            this._refreshMetrics(e, i)
        }
        get(e) {
            return this._metrics.get(e)
        }
        refreshCollection(e) {
            e.forEach((e=>this._refreshMetrics(e, null)))
        }
        refreshMetrics(e) {
            return this._refreshMetrics(e)
        }
        _refreshMetrics(e, t) {
            if (t = t || this._metrics.get(e),
            !(e instanceof Element))
                return t.width = r(e.width, 0),
                t.height = r(e.height, 0),
                t.top = r(e.top, r(e.y, 0)),
                t.left = r(e.left, r(e.x, 0)),
                t.right = t.left + t.width,
                t.bottom = t.top + t.height,
                t;
            if (void 0 === e.offsetWidth) {
                let i = e.getBoundingClientRect();
                return t.width = i.width,
                t.height = i.height,
                t.top = s.pageMetrics.scrollY + i.top,
                t.left = s.pageMetrics.scrollX + i.left,
                t.right = t.left + t.width,
                t.bottom = t.top + t.height,
                t
            }
            t.width = e.offsetWidth,
            t.height = e.offsetHeight,
            t.top = s.pageMetrics.documentOffsetY,
            t.left = s.pageMetrics.documentOffsetX;
            let i = e;
            for (; i; )
                t.top += i.offsetTop,
                t.left += i.offsetLeft,
                i = i.offsetParent;
            return t.right = t.left + t.width,
            t.bottom = t.top + t.height,
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        var i;
        return t ? {
            width: (i = e.getBoundingClientRect()).width,
            height: i.height
        } : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(165)
      , r = i(173)
      , n = i(174)
      , a = i(175)
      , o = i(176)
      , h = i(177);
    e.exports = class {
        constructor(e, t={}) {
            if ("number" != typeof e || !isFinite(e))
                throw new TypeError(`Clip duration must be a finite number; got "${e}"`);
            "function" == typeof t && (t = {
                draw: t
            }),
            this.ease = a(t.ease),
            this.update = a(t.update),
            this.draw = t.draw,
            this.prepare = a(t.prepare),
            this.finish = a(t.finish),
            this._duration = 1e3 * e,
            this._startTime = null,
            this._isPrepared = !1,
            this._promise = null,
            this._isPlaying = !1
        }
        get isReversed() {
            return this._duration < 0
        }
        get isComplete() {
            const e = this.progress;
            return !this.isReversed && e >= 1 || this.isReversed && e <= 0
        }
        get progress() {
            if (0 === this._duration)
                return 1;
            let e = (this.lastFrameTime - this._startTime) / this._duration;
            return this.isReversed && (e = 1 + e),
            h(e, 0, 1)
        }
        get easedProgress() {
            return this.ease ? this.ease(this.progress) : this.progress
        }
        _run(e, t) {
            this.lastFrameTime = Date.now(),
            null === this._startTime && (this._startTime = this.lastFrameTime);
            const i = this.easedProgress;
            this.update && s((()=>this._isPlaying && this.update(i))),
            r((()=>{
                this._isPlaying && (this.draw(i),
                this.isComplete ? o(r, [this.finish, t]) : this._run(this, t))
            }
            ))
        }
        play() {
            if ("function" != typeof this.draw)
                throw new Error('Clip must be given a "draw" function as an option or have its "draw" method overriden.');
            return this._isPlaying = !0,
            this._promise || (this._promise = new Promise(((e,t)=>{
                !this._isPrepared && this.prepare ? (this._isPrepared = !0,
                r((()=>n(this.prepare(), (()=>{
                    this._run(this, e)
                }
                ))))) : this._run(this, e)
            }
            ))),
            this._promise
        }
        destroy() {
            this._isPlaying = !1,
            this.draw = this.finish = this.update = null
        }
        static play() {
            return new this(...arguments).play()
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(166)
      , r = function() {
        this.events = {}
    }
      , n = r.prototype;
    n.requestAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new s(e)),
        this.events[e].requestAnimationFrame
    }
    ,
    n.cancelAnimationFrame = function(e) {
        return this.events[e] || (this.events[e] = new s(e)),
        this.events[e].cancelAnimationFrame
    }
    ,
    e.exports = new r
}
, function(e, t, i) {
    "use strict";
    const s = i(12)
      , r = i(182)
      , n = i(184)
      , a = i(185)
      , o = i(186)
      , h = i(187)
      , l = i(188)
      , c = i(189)
      , u = i(41)
      , d = ["beforeCreate", "created", "beforeMount", "createItems", "itemsCreated", "mounted", "animateToItem", "onItemChangeInitiated", "onItemChangeOccurred", "onItemChangeCompleted", "onResizeImmediate", "onBreakpointChange", "onResizeDebounced", "destroy"];
    class m extends s {
        constructor(e) {
            super(e),
            this.el = e.el,
            this.model = Object.assign({
                options: e
            }, JSON.parse(JSON.stringify(r))),
            this.model.Item.ConstructorFunction = r.Item.ConstructorFunction,
            this._items = [],
            this.currentIndex = 0,
            d.forEach((e=>{
                this[e] = (...t)=>{
                    this[`__ ${e}`] && this[`__ ${e}`].forEach((e=>e.apply(this, t)))
                }
            }
            ));
            const t = this.destroy;
            this.destroy = (...e)=>{
                t.apply(this, e),
                s.prototype.destroy.call(this)
            }
            ,
            this.on(r.Events.ITEM_CHANGE_INITIATED, this.onItemChangeInitiated),
            this.on(r.Events.ITEM_CHANGE_OCCURRED, this.onItemChangeOccurred),
            this.on(r.Events.ITEM_CHANGE_COMPLETED, this.onItemChangeCompleted),
            ["beforeCreate", "created", "beforeMount", "createItems"].forEach((t=>this[t](e)))
        }
    }
    m.withMixins = (...e)=>{
        const t = class extends m {
        }
          , i = t.prototype;
        return e.unshift(n, h, o),
        e.push(l, u, a, c),
        e.forEach((e=>{
            for (const t in e)
                d.includes(t) ? (i[`__ ${t}`] = i[`__ ${t}`] || [],
                i[`__ ${t}`].push(e[t])) : i[t] = e[t]
        }
        )),
        t
    }
    ,
    e.exports = m
}
, function(e, t, i) {
    "use strict";
    const s = i(4);
    e.exports = {
        combine: function(e) {
            let t = "mixin_mask_" + Math.random().toString(16).slice(2);
            const i = {
                beforeCreate() {
                    this[t] = r(this.model.pageMetrics.breakpoint),
                    n(this, "beforeCreate")
                },
                onBreakpointChange(e) {
                    const i = r(e.breakpoint);
                    i !== this[t] && (n(this, "destroy"),
                    this[t] = i,
                    s((()=>{
                        n(this, "beforeCreate", this.model.options),
                        n(this, "created", this.model.options),
                        n(this, "beforeMount", this.model.options),
                        n(this, "itemsCreated"),
                        n(this, "mounted")
                    }
                    ), !1))
                },
                destroy() {
                    n(this, "destroy"),
                    this[t] = null
                }
            }
              , r = function(t) {
                let i = e.find((e=>e.breakpointMask.includes(t)));
                if (!i)
                    throw `Cannot find mode for current breakpoint ${t}. Current Settings ${e}`;
                return i.mixin
            };
            let n = function(e, i, ...s) {
                if (e[t][i])
                    return e[t][i].apply(e, s)
            };
            return e.forEach((function(e) {
                e.mixin || (e.mixin = {}),
                Object.keys(e.mixin).forEach((e=>i[e] = i[e] || function(...t) {
                    return n(this, e, ...t)
                }
                ))
            }
            )),
            i
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        beforeCreate() {
            this.clampedIndex = !0
        },
        wrappedIndex(e) {
            return Math.max(0, Math.min(e, this._items.length - 1))
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(76)
      , r = i(69)
      , n = i(9)
      , a = i(4)
      , o = i(40);
    e.exports = {
        beforeCreate() {
            Object.defineProperties(this, {
                widthOfItem: {
                    configurable: !0,
                    get: ()=>this._items[0].width
                }
            })
        },
        created(e) {
            this.position = 0,
            this.target = 0,
            this.slideContainer = this.el.querySelector(this.model.Slide.Selector),
            this.sign = this.model.IsRTL ? -1 : 1
        },
        mounted() {
            n((()=>{
                this._items.forEach((e=>{
                    e.measure(),
                    e.x = e.width * e.index * this.sign
                }
                )),
                a((()=>{
                    this.position = this.target = this.convertSlideIndexToHorizontalPosition(this.wrappedIndex(this.currentIndex)),
                    this.slideContainer.style.transform = `translate3d(${-this.position}px, 0,0)`,
                    this.checkForSlideUpdate(!0)
                }
                ))
            }
            ))
        },
        animateToItem(e) {
            const t = this.wrappedIndex(e);
            if (this.currentIndex === t)
                return;
            this.el.parentElement.scrollLeft = 0;
            let i = "easeInOutCubic"
              , n = this.target;
            this.clip && this.clip._isPlaying && (n = this.clip.endPosition,
            this.clip.destroy(),
            i = "easeOutQuint");
            const a = this.target
              , o = this.convertSlideIndexToHorizontalPosition(e)
              , h = this.model.PrefersReducedMotion ? .001 : this.model.Slide.duration
              , l = this._items[this.wrappedIndex(e)];
            this.clip = new s(h,{
                ease: r[i],
                prepare: ()=>this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                    gallery: this,
                    next: l
                }),
                update: e=>{
                    this.target = a + (o - a) * e
                }
                ,
                draw: ()=>this.draw(1),
                finish: ()=>this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                    gallery: this,
                    current: l
                })
            }),
            this.clip.endPosition = o,
            this.clip.play().then((()=>{
                this.clip.destroy(),
                this.clip = null
            }
            ))
        },
        draw(e=1) {
            let t = this.target - this.position;
            this.position += t * e;
            const i = Math.abs(this.position - this.target);
            i < .1 && (this.position = this.target),
            this.checkForSlideUpdate(),
            this.slideContainer.style.transform = `translate3d(${-this.position}px, 0,0)`;
            for (let e = 0, t = this._items.length; e < t; e++) {
                let t = this._items[e]
                  , i = (this.position - t.x) / this.widthOfItem;
                t.progress(i)
            }
            this.position,
            this.widthOfItem,
            this._items.length;
            Math.abs(i) > 0 && (o(this.dragDrawId),
            a((()=>this.draw(e))))
        },
        checkForSlideUpdate(e) {
            let t = Math.floor((this.position * this.sign + .5 * this.widthOfItem) / this.widthOfItem);
            isNaN(t) || (t !== this.currentIndex || e) && (this.currentIndex = t,
            this.wrapSlideItems(),
            this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                gallery: this,
                current: this.currentItem
            }))
        },
        wrapSlideItems() {
            this.currentItem.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex),
            this.currentItem.prev.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex - 1),
            this.currentItem.next.x = this.convertSlideIndexToHorizontalPosition(this.currentIndex + 1)
        },
        onResizeImmediate() {
            this.clip && (this.clip.destroy(),
            this.clip = null),
            this._items.forEach((e=>{
                e.measure(),
                e.x = e.width * e.index * this.sign
            }
            )),
            this.currentIndex = this.wrappedIndex(this.currentItem.index),
            this.wrapSlideItems(),
            this.position = this.target = this.convertSlideIndexToHorizontalPosition(this.wrappedIndex(this.currentIndex)),
            this.slideContainer.style.transform = `translate3d(${-this.position}px, 0,0)`
        },
        convertSlideIndexToHorizontalPosition(e) {
            return e * this.widthOfItem * this.sign
        },
        destroy() {
            this._items.forEach((e=>{
                e.measure(),
                e.x = 0,
                e.zIndex = e === this.currentItem ? 2 : 0
            }
            )),
            this.slideContainer.removeAttribute("style")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = ["INPUT", "SELECT", "TEXTAREA"];
    e.exports = {
        created() {
            this.handleIntersect = this.handleIntersect.bind(this),
            this.onKeyDown = this.onKeyDown.bind(this),
            this.observer = new IntersectionObserver(this.handleIntersect),
            this.observer.observe(this.el),
            this.isInView = !1
        },
        destroy() {
            window.removeEventListener("keydown", this.onKeyDown),
            this.observer.disconnect(),
            this.observer = null,
            this.isInView = !1
        },
        handleIntersect(e) {
            e.forEach((e=>{
                this.isInView = e.isIntersecting,
                e.isIntersecting ? window.addEventListener("keydown", this.onKeyDown) : window.removeEventListener("keydown", this.onKeyDown)
            }
            ))
        },
        onKeyDown(e) {
            if (37 !== e.keyCode && 39 !== e.keyCode || this.inputHasFocus())
                return;
            let t = this.model.IsRTL ? -1 : 1
              , i = 37 === e.keyCode ? -1 : 1;
            this.lastInteractionEvent = e;
            const s = this.currentIndex + i * t;
            this.animateToItem(s)
        },
        inputHasFocus: function() {
            return -1 !== s.indexOf(document.activeElement.nodeName)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = (e,t)=>{
        t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "true")
    }
    ;
    e.exports = {
        mounted() {
            const e = this.el.querySelector(this.model.PaddleNav.Selector);
            this.paddleNav = {
                previousEl: e.querySelector(".paddlenav-arrow-previous"),
                nextEl: e.querySelector(".paddlenav-arrow-next")
            },
            this.onPaddleNavSelected = this.onPaddleNavSelected.bind(this),
            [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e=>{
                e.addEventListener("click", this.onPaddleNavSelected)
            }
            ))
        },
        destroy() {
            [this.paddleNav.previousEl, this.paddleNav.nextEl].forEach((e=>{
                e.removeEventListener("click", this.onPaddleNavSelected)
            }
            )),
            this.paddleNav = null
        },
        onPaddleNavSelected(e) {
            let t = e.target.className.includes("previous") ? -1 : 1;
            this.lastInteractionEvent = e;
            const i = this.currentIndex + 1 * t;
            this.animateToItem(i)
        },
        onItemChangeCompleted(e) {
            const t = this.wrappedIndex(this.currentIndex + 1) !== this.currentIndex;
            s(this.paddleNav.nextEl, t);
            const i = this.wrappedIndex(this.currentIndex + -1) !== this.currentIndex;
            s(this.paddleNav.previousEl, i)
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        onItemChangeOccurred(e) {
            const {previous: t, current: i} = this.selections.occurred;
            t && t !== i && t.deselect(),
            i.select()
        }
    }
}
, function(e, t, i) {
    "use strict";
    let s;
    try {
        s = i(190).observer.Gallery
    } catch (e) {}
    e.exports = {
        created(e) {
            this.analytics = {
                lastTrackedItem: null,
                observer: null,
                events: {
                    UPDATE: "update",
                    UPDATE_COMPLETE: "update:complete"
                }
            }
        },
        mounted() {
            if (s) {
                let e = this.el.getAttribute("id");
                e || (console.warn("No ID attribute found on the Mixin Gallery element - please add an ID", this),
                e = "null"),
                this.analytics.observer = new s(this,{
                    galleryName: e,
                    beforeUpdateEvent: this.analytics.events.UPDATE,
                    afterUpdateEvent: this.analytics.events.UPDATE_COMPLETE,
                    trackAutoRotate: !0
                })
            }
        },
        onItemChangeCompleted(e) {
            if (!e.previous || e.current === this.analytics.lastTrackedItem || e.current === e.previous && !this.analytics.lastTrackedItem)
                return;
            this.analytics.lastTrackedItem = e.current;
            let t = {
                incoming: {
                    id: e.current.id
                },
                outgoing: {
                    id: e.previous.id
                },
                interactionEvent: this.lastInteractionEvent
            };
            this.trigger(this.analytics.events.UPDATE_COMPLETE, t)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(4)
      , r = i(40);
    e.exports = {
        created(e) {
            this.swipeDrag = {
                movementRateMultiplier: this.model.SwipeDrag.movementRateMultiplier,
                velocityMultiplier: this.model.SwipeDrag.velocityMultiplier,
                dragDrawId: -1,
                waitingToReachTargetDrawId: -1,
                inputStart: {
                    x: 0,
                    y: 0
                },
                swipeVelocity: 0,
                isDragging: !1
            },
            this._onStartDrag = this._onStartDrag.bind(this),
            this._onDrag = this._onDrag.bind(this),
            this._onStopDrag = this._onStopDrag.bind(this),
            this.waitingToReachTarget = this.waitingToReachTarget.bind(this)
        },
        mounted() {
            this.inputMoveEventName = this.model.IsTouch ? "touchmove" : "mousemove",
            this.inputUpEventName = this.model.IsTouch ? "touchend" : "mouseup",
            this.inputDownEvent = this.model.IsTouch ? "touchstart" : "mousedown",
            (this.model.IsTouch || this.model.SwipeDrag.DesktopSwipe) && (this.el.removeEventListener(this.inputDownEvent, this._onStartDrag),
            this.el.addEventListener(this.inputDownEvent, this._onStartDrag))
        },
        _onStartDrag(e) {
            r(this.swipeDrag.dragDrawId),
            r(this.swipeDrag.waitingToReachTargetDrawId);
            const t = e.target || e.relatedTarget;
            switch (!0) {
            case "A" === t.tagName:
            case "BUTTON" === t.tagName:
            case !e.touches && 1 !== e.which:
                return
            }
            this.clip && this.clip.destroy(),
            this.lastInteractionEvent = e,
            this.swipeDrag.swipeVelocity = 0,
            this.swipeDrag.isDragging = !1;
            const i = this.model.IsTouch ? e.touches[0] : e;
            let {screenX: s, screenY: n} = i;
            this.swipeDrag.inputStart = {
                x: s,
                y: n
            },
            window.addEventListener(this.inputMoveEventName, this._onDrag, {
                passive: !1
            }),
            window.addEventListener(this.inputUpEventName, this._onStopDrag)
        },
        _onDrag(e) {
            this.swipeDrag.isDragging && e.cancelable && e.preventDefault();
            const t = this.model.IsTouch ? e.touches[0] : e;
            let {screenX: i, screenY: n} = t
              , a = this.swipeDrag.inputStart.x - i
              , o = this.swipeDrag.inputStart.y - n;
            this.swipeDrag.inputStart = {
                x: i,
                y: n
            },
            this.swipeDrag.isDragging || (this.swipeDrag.isDragging = Math.abs(a) > 3 && Math.abs(a) > Math.abs(o)),
            this.swipeDrag.isDragging && (this.target += a * this.swipeDrag.movementRateMultiplier,
            this.swipeDrag.swipeVelocity = a * this.swipeDrag.velocityMultiplier,
            this.clampedIndex && (this.model.IsRTL ? this.target = Math.max(this.widthOfItem * this.sign * (this._items.length - 1), Math.min(0, this.target)) : this.target = Math.min(this.widthOfItem * (this._items.length - 1), Math.max(0, this.target))),
            r(this.swipeDrag.dragDrawId),
            this.swipeDrag.dragDrawId = s((()=>this.draw(.3))))
        },
        _onStopDrag(e) {
            if (window.removeEventListener(this.inputMoveEventName, this._onDrag),
            window.removeEventListener(this.inputUpEventName, this._onStopDrag),
            !this.swipeDrag.isDragging)
                return;
            let t = [this.currentIndex - 1, this.currentIndex, this.currentIndex + 1]
              , i = 0
              , n = Number.MAX_VALUE;
            for (let e = 0, s = t.length; e < s; e++) {
                let s = t[e] * this.widthOfItem
                  , r = Math.abs(s - (this.position + this.swipeDrag.swipeVelocity) * this.sign);
                r < n && (n = r,
                i = e)
            }
            this.lastInteractionEvent = e;
            let a = t[i];
            this.clampedIndex && (a = this.wrappedIndex(a)),
            this.target = this.convertSlideIndexToHorizontalPosition(a),
            r(this.swipeDrag.dragDrawId),
            r(this.swipeDrag.waitingToReachTargetDrawId),
            this.swipeDrag.dragDrawId = s((()=>{
                this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                    gallery: this,
                    next: this._items[this.wrappedIndex(a)]
                }),
                this.draw(.2),
                this.waitingToReachTarget(a)
            }
            ))
        },
        waitingToReachTarget(e) {
            if (Math.abs(this.position - this.target) > .1)
                return void (this.swipeDrag.waitingToReachTargetDrawId = s((()=>this.waitingToReachTarget(e))));
            const t = this.selections.occurred.current;
            this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                gallery: this,
                current: t
            })
        },
        destroy() {
            this.el.removeEventListener(this.inputDownEvent, this._onStartDrag),
            window.removeEventListener(this.inputUpEventName, this._onStopDrag),
            window.removeEventListener(this.inputUpEventName, this._onStopDrag)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(191).original
      , r = i(14)
      , n = i(46);
    function a() {
        var e = r.getWindow()
          , t = e.screen.width;
        return e.orientation && e.screen.height < t && (t = e.screen.height),
        !s() && t >= 600
    }
    e.exports = n(a),
    e.exports.original = a
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = t.pluginCache = void 0;
    var r = s(i(12))
      , n = s(i(198))
      , a = s(i(204))
      , o = s(i(10));
    const h = {};
    t.pluginCache = h;
    const l = [];
    let c = 1;
    class u extends r.default {
        constructor(e={}) {
            super(),
            this.el = e.el || document.createElement("video"),
            this.id = e.id || this.el.id || this.el.dataset.inlineMediaId || "inlineMedia-" + c++;
            const t = (e.plugins || []).concat(n.default);
            this._initPlugins(t, e),
            l.push(this)
        }
        async load(e) {
            for (const t of this.plugins)
                if ("function" == typeof t.load)
                    return t.load(e)
        }
        abortLoad() {
            for (const e of this.plugins)
                if ("function" == typeof e.abortLoad) {
                    e.abortLoad();
                    break
                }
        }
        async play() {
            for (const e of this.plugins)
                if ("function" == typeof e.play)
                    return e.play()
        }
        get src() {
            for (const e of this.plugins)
                if (e.src)
                    return e.src;
            return ""
        }
        get playbackState() {
            for (const e of this.plugins) {
                const t = e.playbackState;
                if (void 0 !== t)
                    return t
            }
        }
        get loadingState() {
            for (const e of this.plugins) {
                const t = e.loadingState;
                if (void 0 !== t)
                    return t
            }
        }
        _initPlugins(e, t) {
            this.plugins = [],
            this.pluginMap = new Map;
            for (let i of e) {
                if ("string" == typeof i) {
                    if (!h[i])
                        throw new Error(`Trying to use undefined Plugin named: ${i} . Ensure you call Media.addPlugin() first!`);
                    i = h[i]
                }
                if (!1 !== i.isSupported) {
                    const e = new i(Object.assign({
                        media: this
                    }, t));
                    this.plugins.push(e),
                    this.pluginMap.set(i, e)
                }
            }
            this.trigger(o.default.MOUNTED)
        }
        destroy() {
            if (!this._destroyed) {
                for (const e of this.plugins)
                    "function" == typeof e.destroy && e.destroy();
                super.destroy(),
                l.splice(l.indexOf(this), 1),
                this._destroyed = !0
            }
        }
        static get medias() {
            return l
        }
        static addPlugin(e, t) {
            h[e] = t
        }
        static async autoInitialize(e=document, t={}) {
            return (0,
            a.default)(e, t)
        }
    }
    var d = u;
    t.default = d
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        LOAD_START: "loadstart",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        PLAY: "play",
        PLAYING: "playing",
        PAUSE: "pause",
        WAITING: "waiting",
        SEEKING: "seeking",
        SEEKED: "seeked",
        ERROR: "error",
        ENDED: "ended",
        ABORT: "abort"
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(201);
    e.exports = function(e) {
        return function() {
            if (s && "object" == typeof window.console && "function" == typeof console[e])
                return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
        }
    }
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t, i, s) {
        const r = i[0].toUpperCase() + i.slice(1)
          , n = e["inlineMedia" + r];
        if (void 0 !== n)
            switch (typeof s) {
            case "boolean":
                return "false" !== n;
            case "object":
                return JSON.parse(n);
            case "number":
                return Number(n);
            default:
                return n
            }
        else if (void 0 !== t[i]) {
            const e = t[i];
            return "boolean" != typeof s || "false" !== e && "true" !== e ? e : "false" !== e
        }
        return s
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(214));
    t.default = class {
        constructor(e) {
            this._breakpoints = e.breakpoints || r.default,
            this.options = e,
            this._initialize()
        }
        _initialize() {
            this._updateBreakpoint = this._updateBreakpoint.bind(this),
            this._callback = this.options.callback,
            this._mediaQueries = Object.keys(this._breakpoints).map((e=>window.matchMedia(`(min-width: ${this._breakpoints[e]}px)`))),
            this._addEventListeners(),
            this._updateBreakpoint()
        }
        _addEventListeners() {
            for (const e of this._mediaQueries)
                e.addListener(this._updateBreakpoint)
        }
        _removeEventListeners() {
            for (const e of this._mediaQueries)
                e.removeListener(this._updateBreakpoint)
        }
        _updateBreakpoint() {
            const e = Object.keys(this._breakpoints);
            let t = e[0];
            for (let i = 1; i < e.length; i++) {
                if (!this._mediaQueries[i].matches)
                    break;
                t = e[i]
            }
            let i = !1;
            this._currentBreakpoint && this._currentBreakpoint !== t && (i = !0),
            this._currentBreakpoint = t,
            i && this._callback()
        }
        get breakpoint() {
            return this._currentBreakpoint
        }
        destroy() {
            this._removeEventListeners()
        }
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    e.exports = i(126)
}
, function(e, t, i) {
    "use strict";
    const s = i(127)
      , r = (i(150),
    i(8))
      , n = i(27).PictureLazyLoading
      , a = i(67)
      , o = (i(160),
    i(179))
      , h = {
        initialize: function() {
            Object.assign(a, {
                Accessories: i(180),
                AccessoriesGallery: i(181),
                BigScreen: i(193),
                Holiday2022: i(194),
                ImageSwitch: i(195),
                InlineMedia: i(196),
                Hero: i(218),
                ProductTiles: i(222),
                SmartHome: i(223),
                SmartHomeGallery: i(224)
            }),
            o.detect();
            const e = document.querySelector(".main");
            new s(e).anim.on(r.EVENTS.ON_DOM_GROUPS_CREATED, (()=>{
                new n
            }
            ))
        }
    };
    e.exports = h.initialize()
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(128)
      , n = i(129)
      , a = i(3)
      , o = i(67)
      , h = {};
    class l extends s {
        constructor(e, t={}) {
            super(),
            this.el = e,
            this.anim = n,
            this.componentAttribute = t.attribute || "data-component-list",
            this.components = [],
            this.componentsInitialized = !1,
            this.el.getAttribute("data-anim-scroll-group") || this.el.setAttribute("data-anim-scroll-group", "bubble-gum-group"),
            r.add((()=>{
                n.initialize().then((()=>{
                    this.initComponents(),
                    this.setupEvents(),
                    this.components.forEach((e=>e.mounted())),
                    this.trigger(l.EVENTS.DOM_COMPONENTS_MOUNTED)
                }
                ))
            }
            ))
        }
        initComponents() {
            const e = Array.prototype.slice.call(this.el.querySelectorAll(`[${this.componentAttribute}]`));
            this.el.hasAttribute(this.componentAttribute) && e.push(this.el);
            for (let t = 0; t < e.length; t++) {
                let i = e[t]
                  , s = i.getAttribute(this.componentAttribute).split(" ");
                for (let e = 0, t = s.length; e < t; e++) {
                    let t = s[e];
                    "" !== t && " " !== t && this.addComponent({
                        el: i,
                        componentName: t
                    })
                }
            }
            this.componentsInitialized = !0
        }
        setupEvents() {
            this.onResizeDebounced = this.onResizeDebounced.bind(this),
            this.onResizeImmediate = this.onResizeImmediate.bind(this),
            this.onBreakpointChange = this.onBreakpointChange.bind(this),
            n.on(a.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
            n.on(a.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
            n.on(a.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)
        }
        addComponent(e) {
            const {el: t, componentName: i, data: s} = e;
            if (!o.hasOwnProperty(i))
                throw "BubbleGum::addComponent could not add component to '" + t.className + "'. No component type '" + i + "' found!";
            const r = o[i];
            if (!l.componentIsSupported(r, i))
                return void 0 === h[i] && (console.log("BubbleGum::addComponent unsupported component '" + i + "'. Reason: '" + i + ".IS_SUPPORTED' returned false"),
                h[i] = !0),
                null;
            let n = t.dataset.componentList || "";
            n.includes(i) || (t.dataset.componentList = n.split(" ").concat(i).join(" "));
            let c = new r({
                el: t,
                data: s,
                componentName: e.componentName,
                gum: this,
                pageMetrics: a.pageMetrics
            });
            return this.components.push(c),
            this.componentsInitialized && c.mounted(),
            c
        }
        removeComponent(e) {
            const t = this.components.indexOf(e);
            -1 !== t && (this.components.splice(t, 1),
            e.el.dataset.componentList = e.el.dataset.componentList.split(" ").filter((t=>t !== e.componentName)).join(" "),
            e.destroy())
        }
        getComponentOfType(e, t=document.documentElement) {
            const i = `[${this.componentAttribute}*=${e}]`
              , s = t.matches(i) ? t : t.querySelector(i);
            return s ? this.components.find((t=>t instanceof o[e] && t.el === s)) : null
        }
        getComponentsOfType(e, t=document.documentElement) {
            const i = `[${this.componentAttribute}*=${e}]`
              , s = t.matches(i) ? [t] : Array.from(t.querySelectorAll(i));
            return this.components.filter((t=>t instanceof o[e] && s.includes(t.el)))
        }
        getComponentsForElement(e) {
            return this.components.filter((t=>t.el === e))
        }
        onResizeImmediate() {
            this.components.forEach((e=>e.onResizeImmediate(a.pageMetrics)))
        }
        onResizeDebounced() {
            this.components.forEach((e=>e.onResizeDebounced(a.pageMetrics)))
        }
        onBreakpointChange() {
            this.components.forEach((e=>e.onBreakpointChange(a.pageMetrics)))
        }
        static componentIsSupported(e, t) {
            const i = e.IS_SUPPORTED;
            if (void 0 === i)
                return !0;
            if ("function" != typeof i)
                return console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'),
                !0;
            const s = e.IS_SUPPORTED();
            return void 0 === s ? (console.error('BubbleGum::addComponent error in "' + t + '".IS_SUPPORTED - it should be a function which returns true/false'),
            !0) : s
        }
    }
    l.EVENTS = {
        DOM_COMPONENTS_MOUNTED: "DOM_COMPONENTS_MOUNTED"
    },
    e.exports = l
}
, function(e, t, i) {
    "use strict";
    let s = !1
      , r = !1
      , n = []
      , a = -1;
    e.exports = {
        NUMBER_OF_FRAMES_TO_WAIT: 30,
        add: function(e) {
            if (r && e(),
            n.push(e),
            s)
                return;
            s = !0;
            let t = document.documentElement.scrollHeight
              , i = 0;
            const o = ()=>{
                let e = document.documentElement.scrollHeight;
                if (t !== e)
                    i = 0;
                else if (i++,
                i >= this.NUMBER_OF_FRAMES_TO_WAIT)
                    return void n.forEach((e=>e()));
                t = e,
                a = requestAnimationFrame(o)
            }
            ;
            a = requestAnimationFrame(o)
        },
        reset() {
            cancelAnimationFrame(a),
            s = !1,
            r = !1,
            n = []
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(3)
      , n = i(15)
      , a = i(36)
      , o = i(55)
      , h = i(37)
      , l = i(147)
      , c = i(148)
      , u = i(149)
      , d = {};
    "undefined" != typeof window && (d.update = i(9),
    d.cancelUpdate = i(66),
    d.external = i(22),
    d.draw = i(4));
    let m = null;
    class p extends s {
        constructor() {
            if (super(),
            m)
                throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
            m = this,
            this.groups = [],
            this.scrollSystems = [],
            this.timeSystems = [],
            this.tweenGroup = null,
            this._forceUpdateRAFId = -1,
            this.initialized = !1,
            this.model = r,
            this.plugins = {
                keyframe: [],
                parser: []
            },
            this.version = u.version,
            this._resolveReady = ()=>{}
            ,
            this.ready = new Promise((e=>this._resolveReady = e)),
            this.onScroll = this.onScroll.bind(this),
            this.onResizedDebounced = this.onResizedDebounced.bind(this),
            this.onResizeImmediate = this.onResizeImmediate.bind(this)
        }
        initialize() {
            return this.initialized || "undefined" == typeof window || (this.initialized = !0,
            this.timeSystems = [],
            this.scrollSystems = [],
            this.groups = [],
            this.setupEvents(),
            this.initializeResizeFilter(),
            this.initializeModel(),
            this.createDOMGroups(),
            this.createDOMKeyframes(),
            this.tweenGroup = new c(null,this),
            this.groups.unshift(this.tweenGroup),
            this._resolveReady()),
            this.ready
        }
        use(e, t) {
            e.install(this, t)
        }
        remove() {
            return this.initialized ? Promise.all(this.groups.map((e=>e.remove()))).then((()=>{
                this.groups = null,
                this.scrollSystems = null,
                this.timeSystems = null,
                window.clearTimeout(r.RESIZE_TIMEOUT),
                window.removeEventListener("scroll", this.onScroll),
                window.removeEventListener("resize", this.onResizeImmediate),
                this._events = {},
                this.initialized = !1,
                this.ready = new Promise((e=>this._resolveReady = e))
            }
            )) : (this.ready = new Promise((e=>this._resolveReady = e)),
            Promise.resolve())
        }
        destroy() {
            return this.remove()
        }
        createTimeGroup(e, t) {
            e instanceof HTMLElement || (e = (t = e || {}).el);
            let i = new l(e,this);
            return t && t.name && (i.name = t.name),
            this.groups.push(i),
            this.timeSystems.push(i),
            this.trigger(r.EVENTS.ON_GROUP_CREATED, i),
            i
        }
        createScrollGroup(e, t) {
            if (!e)
                throw "AnimSystem scroll based groups must supply an HTMLElement";
            let i = new h(e,this);
            return (t = t || {}).name && (i.name = t.name),
            t.getPosition && t.getMaxPosition && (i.getPosition = t.getPosition,
            i.createViewableRange = ()=>({
                a: 0,
                d: t.getMaxPosition()
            })),
            i.getPosition = t.getPosition || i.getPosition,
            i.getPosition = t.getPosition || i.getPosition,
            this.groups.push(i),
            this.scrollSystems.push(i),
            this.trigger(r.EVENTS.ON_GROUP_CREATED, i),
            i
        }
        removeGroup(e) {
            return Promise.all(e.keyframeControllers.map((t=>e.removeKeyframeController(t)))).then((()=>{
                let t = this.groups.indexOf(e);
                -1 !== t && this.groups.splice(t, 1),
                t = this.scrollSystems.indexOf(e),
                -1 !== t && this.scrollSystems.splice(t, 1),
                t = this.timeSystems.indexOf(e),
                -1 !== t && this.timeSystems.splice(t, 1),
                e.destroy()
            }
            ))
        }
        createDOMGroups() {
            document.body.setAttribute("data-anim-scroll-group", "body"),
            document.querySelectorAll("[data-anim-scroll-group]").forEach((e=>this.createScrollGroup(e))),
            document.querySelectorAll("[data-anim-time-group]").forEach((e=>this.createTimeGroup(e))),
            this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
        }
        createDOMKeyframes() {
            let e = [];
            ["data-anim-keyframe", n.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(t) {
                for (let i = 0; i < 12; i++)
                    e.push(t + (0 === i ? "" : "-" + (i - 1)))
            }
            ));
            for (let t = 0; t < e.length; t++) {
                let i = e[t]
                  , s = document.querySelectorAll("[" + i + "]");
                for (let e = 0; e < s.length; e++) {
                    const t = s[e]
                      , r = JSON.parse(t.getAttribute(i));
                    this.addKeyframe(t, r)
                }
            }
            d.update((()=>{
                null !== this.groups && (this.groups.forEach((e=>e.onKeyframesDirty({
                    silent: !0
                }))),
                this.groups.forEach((e=>e.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, e))),
                this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this),
                this.groups.forEach((e=>{
                    e.forceUpdate({
                        waitForNextUpdate: !1,
                        silent: !0
                    }),
                    e.reconcile()
                }
                )),
                this.onScroll())
            }
            ), !0)
        }
        initializeResizeFilter() {
            if (r.cssDimensionsTracker)
                return;
            const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
            e.setAttribute("cssDimensionsTracker", "true"),
            e.style.position = "fixed",
            e.style.top = "0",
            e.style.width = "100%",
            e.style.height = "100vh",
            e.style.pointerEvents = "none",
            e.style.visibility = "hidden",
            e.style.zIndex = "-1",
            document.documentElement.appendChild(e),
            r.cssDimensionsTracker = e
        }
        initializeModel() {
            r.pageMetrics.windowHeight = r.cssDimensionsTracker.clientHeight,
            r.pageMetrics.windowWidth = r.cssDimensionsTracker.clientWidth,
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset,
            r.pageMetrics.breakpoint = r.getBreakpoint();
            let e = document.documentElement.getBoundingClientRect();
            r.pageMetrics.documentOffsetX = e.left + r.pageMetrics.scrollX,
            r.pageMetrics.documentOffsetY = e.top + r.pageMetrics.scrollY
        }
        setupEvents() {
            window.removeEventListener("scroll", this.onScroll),
            window.addEventListener("scroll", this.onScroll),
            window.removeEventListener("resize", this.onResizeImmediate),
            window.addEventListener("resize", this.onResizeImmediate)
        }
        onScroll() {
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (let e = 0, t = this.scrollSystems.length; e < t; e++)
                this.scrollSystems[e].updateTimeline();
            this.trigger(r.PageEvents.ON_SCROLL, r.pageMetrics)
        }
        onResizeImmediate() {
            let e = r.cssDimensionsTracker.clientWidth
              , t = r.cssDimensionsTracker.clientHeight;
            if (e === r.pageMetrics.windowWidth && t === r.pageMetrics.windowHeight)
                return;
            r.pageMetrics.windowWidth = e,
            r.pageMetrics.windowHeight = t,
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            let i = document.documentElement.getBoundingClientRect();
            r.pageMetrics.documentOffsetX = i.left + r.pageMetrics.scrollX,
            r.pageMetrics.documentOffsetY = i.top + r.pageMetrics.scrollY,
            window.clearTimeout(r.RESIZE_TIMEOUT),
            r.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250),
            this.trigger(r.PageEvents.ON_RESIZE_IMMEDIATE, r.pageMetrics)
        }
        onResizedDebounced() {
            d.update((()=>{
                let e = r.pageMetrics.breakpoint
                  , t = r.getBreakpoint();
                if (t !== e) {
                    r.pageMetrics.previousBreakpoint = e,
                    r.pageMetrics.breakpoint = t;
                    for (let e = 0, t = this.groups.length; e < t; e++)
                        this.groups[e]._onBreakpointChange();
                    this.trigger(r.PageEvents.ON_BREAKPOINT_CHANGE, r.pageMetrics)
                }
                for (let e = 0, t = this.groups.length; e < t; e++)
                    this.groups[e].forceUpdate({
                        waitForNextUpdate: !1
                    });
                this.trigger(r.PageEvents.ON_RESIZE_DEBOUNCED, r.pageMetrics)
            }
            ), !0)
        }
        forceUpdate({waitForNextUpdate: e=!0, silent: t=!1}={}) {
            -1 !== this._forceUpdateRAFId && d.cancelUpdate(this._forceUpdateRAFId);
            let i = ()=>{
                for (let e = 0, i = this.groups.length; e < i; e++) {
                    this.groups[e].forceUpdate({
                        waitForNextUpdate: !1,
                        silent: t
                    })
                }
                return -1
            }
            ;
            this._forceUpdateRAFId = e ? d.update(i, !0) : i()
        }
        addKeyframe(e, t) {
            let i = this.getGroupForTarget(e);
            return i = i || this.getGroupForTarget(document.body),
            i.addKeyframe(e, t)
        }
        addEvent(e, t) {
            let i = this.getGroupForTarget(e);
            return i = i || this.getGroupForTarget(document.body),
            i.addEvent(e, t)
        }
        getTimeGroupForTarget(e) {
            return this._getGroupForTarget(e, (e=>e instanceof l))
        }
        getScrollGroupForTarget(e) {
            return this._getGroupForTarget(e, (e=>!(e instanceof l)))
        }
        getGroupForTarget(e) {
            return this._getGroupForTarget(e, (()=>!0))
        }
        getGroupByName(e) {
            return this.groups.find((t=>t.name === e))
        }
        _getGroupForTarget(e, t) {
            if (e._animInfo && e._animInfo.group && t(e._animInfo.group))
                return e._animInfo.group;
            let i = e;
            for (; i; ) {
                if (i._animInfo && i._animInfo.isGroup && t(i._animInfo.group))
                    return i._animInfo.group;
                i = i.parentElement
            }
        }
        getControllerForTarget(e) {
            return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
        }
        addTween(e, t) {
            return this.tweenGroup.addKeyframe(e, t)
        }
    }
    e.exports = "undefined" == typeof window ? new p : window.AC.SharedInstance.share("AnimSystem", u.major, p),
    e.exports.default = e.exports
}
, function(e, t, i) {
    "use strict";
    e.exports = new class {
        constructor() {
            this.linear = function(e) {
                return e
            }
            ,
            this.easeInQuad = function(e) {
                return e * e
            }
            ,
            this.easeOutQuad = function(e) {
                return e * (2 - e)
            }
            ,
            this.easeInOutQuad = function(e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            }
            ,
            this.easeInSin = function(e) {
                return 1 + Math.sin(Math.PI / 2 * e - Math.PI / 2)
            }
            ,
            this.easeOutSin = function(e) {
                return Math.sin(Math.PI / 2 * e)
            }
            ,
            this.easeInOutSin = function(e) {
                return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
            }
            ,
            this.easeInElastic = function(e) {
                return 0 === e ? e : (.04 - .04 / e) * Math.sin(25 * e) + 1
            }
            ,
            this.easeOutElastic = function(e) {
                return .04 * e / --e * Math.sin(25 * e)
            }
            ,
            this.easeInOutElastic = function(e) {
                return (e -= .5) < 0 ? (.02 + .01 / e) * Math.sin(50 * e) : (.02 - .01 / e) * Math.sin(50 * e) + 1
            }
            ,
            this.easeOutBack = function(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }
            ,
            this.easeInCubic = function(e) {
                return e * e * e
            }
            ,
            this.easeOutCubic = function(e) {
                return --e * e * e + 1
            }
            ,
            this.easeInOutCubic = function(e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            }
            ,
            this.easeInQuart = function(e) {
                return e * e * e * e
            }
            ,
            this.easeOutQuart = function(e) {
                return 1 - --e * e * e * e
            }
            ,
            this.easeInOutQuart = function(e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            }
            ,
            this.easeInQuint = function(e) {
                return e * e * e * e * e
            }
            ,
            this.easeOutQuint = function(e) {
                return 1 + --e * e * e * e * e
            }
            ,
            this.easeInOutQuint = function(e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = 1e-5
      , r = Math.abs;
    class n {
        constructor(e, t, i, s) {
            this.cp = new Float32Array(6),
            this.cp[0] = 3 * e,
            this.cp[1] = 3 * (i - e) - this.cp[0],
            this.cp[2] = 1 - this.cp[0] - this.cp[1],
            this.cp[3] = 3 * t,
            this.cp[4] = 3 * (s - t) - this.cp[3],
            this.cp[5] = 1 - this.cp[3] - this.cp[4]
        }
        sampleCurveX(e) {
            return ((this.cp[2] * e + this.cp[1]) * e + this.cp[0]) * e
        }
        sampleCurveY(e) {
            return ((this.cp[5] * e + this.cp[4]) * e + this.cp[3]) * e
        }
        sampleCurveDerivativeX(e) {
            return (3 * this.cp[2] * e + 2 * this.cp[1]) * e + this.cp[0]
        }
        solveCurveX(e) {
            var t, i, n, a, o, h;
            for (n = e,
            h = 0; h < 5; h++) {
                if (a = this.sampleCurveX(n) - e,
                r(a) < s)
                    return n;
                if (o = this.sampleCurveDerivativeX(n),
                r(o) < s)
                    break;
                n -= a / o
            }
            if ((n = e) < (t = 0))
                return t;
            if (n > (i = 1))
                return i;
            for (; t < i; ) {
                if (a = this.sampleCurveX(n),
                r(a - e) < s)
                    return n;
                e > a ? t = n : i = n,
                n = .5 * (i - t) + t
            }
            return n
        }
        solve(e) {
            return this.sampleCurveY(this.solveCurveX(e))
        }
    }
    const a = /\d*\.?\d+/g;
    n.fromCSSString = function(e) {
        let t = e.match(a);
        if (4 !== t.length)
            throw `UnitBezier could not convert ${e} to cubic-bezier`;
        let i = t.map(Number)
          , s = new n(i[0],i[1],i[2],i[3]);
        return s.solve.bind(s)
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    const {map: s} = i(7)
      , r = {};
    class n {
        constructor(e, t, i, s) {
            this.mass = e,
            this.stiffness = t,
            this.damping = i,
            this.initialVelocity = s,
            this.m_w0 = Math.sqrt(this.stiffness / this.mass),
            this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)),
            this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta),
            this.m_A = 1,
            this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0,
            this.m_A = 1,
            this.m_B = -this.initialVelocity + this.m_w0)
        }
        solve(e) {
            return 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0))
        }
    }
    const a = /\d*\.?\d+/g;
    n.fromCSSString = function(e) {
        let t = e.match(a);
        if (4 !== t.length)
            throw `SpringEasing could not convert ${cssString} to spring params`;
        let i = t.map(Number)
          , o = new n(...i);
        const h = o.solve.bind(o);
        let l = 0;
        let c = function() {
            if (r[e])
                return r[e];
            const t = 1 / 6;
            let i, s = 0;
            for (; ; ) {
                l += t;
                if (1 === h(l)) {
                    if (s++,
                    s >= 16) {
                        i = l * t;
                        break
                    }
                } else
                    s = 0
            }
            return r[e] = i,
            r[e]
        }();
        return function(e) {
            return 0 === e || 1 === e ? e : h(s(e, 0, 1, 0, c))
        }
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        if ("string" != typeof e)
            return e;
        try {
            return (t || document).querySelector(e) || document.querySelector(e)
        } catch (e) {
            return !1
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = class {
        constructor() {
            this.local = 0,
            this.localUnclamped = 0,
            this.lastPosition = 0
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = class {
        constructor(e, t) {
            this.a = e.top - t,
            this.a < 0 && (this.a = e.top),
            this.b = e.top,
            this.d = e.bottom,
            this.c = Math.max(this.d - t, this.b)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(137)
      , r = new (i(57));
    class n {
        constructor(e) {
            this.group = e,
            this.data = {
                target: null,
                anchors: null,
                metrics: this.group.metrics
            }
        }
        parseArray(e, t) {
            return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])]
        }
        parseExpression(e, t) {
            if (!t)
                return null;
            if ("number" == typeof t)
                return t;
            if ("string" != typeof t)
                throw `Expression must be a string, received ${typeof t}: ${t}`;
            return this.data.target = e.controller.element,
            this.data.anchors = e.anchors,
            this.data.keyframe = e.keyframe,
            this.group.anim.plugins.parser.reduce(((i,s)=>i || s.parseExpression.call(this, e, t)), null) || n._parse(t, this.data)
        }
        parseTimeValue(e, t) {
            if ("number" == typeof t)
                return t;
            let i = this.group.expressionParser.parseExpression(e, t);
            return this.group.convertScrollPositionToTValue(i)
        }
        destroy() {
            this.group = null
        }
        static parse(e, t) {
            return (t = t || {}) && (r.clear(),
            t.target && r.add(t.target),
            t.anchors && t.anchors.forEach((e=>r.add(e)))),
            t.metrics = r,
            n._parse(e, t)
        }
        static _parse(e, t) {
            return s.Parse(e).execute(t)
        }
    }
    n.programs = s.programs,
    "undefined" != typeof window && (window.ExpressionParser = n),
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    const s = i(3)
      , r = i(7)
      , n = {}
      , a = {
        smoothstep: (e,t,i)=>(i = a.clamp((i - e) / (t - e), 0, 1)) * i * (3 - 2 * i),
        deg: e=>180 * e / Math.PI,
        rad: e=>e * Math.PI / 180,
        random: (e,t)=>Math.random() * (t - e) + e,
        atan: Math.atan2
    };
    Object.getOwnPropertyNames(Math).forEach((e=>a[e] ? null : a[e.toLowerCase()] = Math[e])),
    Object.getOwnPropertyNames(r).forEach((e=>a[e] ? null : a[e.toLowerCase()] = r[e]));
    let o = null;
    const h = "a"
      , l = "ALPHA"
      , c = "("
      , u = ")"
      , d = "PLUS"
      , m = "MINUS"
      , p = "MUL"
      , f = "DIV"
      , _ = "INTEGER_CONST"
      , g = "FLOAT_CONST"
      , y = ","
      , E = "EOF"
      , v = {
        NUMBERS: /\d|\d\.\d/,
        DIGIT: /\d/,
        OPERATOR: /[-+*/]/,
        PAREN: /[()]/,
        WHITE_SPACE: /\s/,
        ALPHA: /[a-zA-Z]|%/,
        ALPHANUMERIC: /[a-zA-Z0-9]/,
        OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
        GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
        ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw)$/,
        MATH_FUNCTION: new RegExp(`\\b(${Object.keys(a).join("|")})\\b`,"i")
    }
      , b = function(e, t, i, s="") {
        let r = t.slice(Math.max(i, 0), Math.min(t.length, i + 3))
          , n = new Error(`Expression Error. ${e} in expression "${t}", near "${r}"`);
        throw console.error(n.message, o ? o.keyframe || o.target : ""),
        n
    }
      , w = {
        round: 1,
        clamp: 3,
        lerp: 3,
        random: 2,
        atan: 2,
        floor: 1,
        ceil: 1,
        abs: 1,
        cos: 1,
        sin: 1,
        smoothstep: 3,
        rad: 1,
        deg: 1,
        pow: 2,
        calc: 1
    };
    class T {
        constructor(e, t) {
            this.type = e,
            this.value = t
        }
    }
    T.ONE = new T("100",100),
    T.EOF = new T(E,null);
    class A {
        constructor(e) {
            this.type = e
        }
    }
    class x extends A {
        constructor(e, t) {
            super("UnaryOp"),
            this.token = this.op = e,
            this.expr = t
        }
    }
    class S extends A {
        constructor(e, t, i) {
            super("BinOp"),
            this.left = e,
            this.op = t,
            this.right = i
        }
    }
    class I extends A {
        constructor(e, t) {
            if (super("MathOp"),
            this.op = e,
            this.list = t,
            w[e.value] && t.length !== w[e.value])
                throw new Error(`Incorrect number of arguments for '${e.value}'. Received ${t.length}, expected ${w[e.value]}`)
        }
    }
    class C extends A {
        constructor(e) {
            super("Num"),
            this.token = e,
            this.value = e.value
        }
    }
    class P extends A {
        constructor(e, t, i) {
            super("RefValue"),
            this.num = e,
            this.ref = t,
            this.unit = i
        }
    }
    class O extends A {
        constructor(e, t) {
            super("CSSValue"),
            this.ref = e,
            this.propertyName = t
        }
    }
    class M extends A {
        constructor(e, t) {
            super("PropValue"),
            this.ref = e,
            this.propertyName = t
        }
    }
    class D {
        constructor(e) {
            let t;
            for (this.text = e,
            this.pos = 0,
            this.char = this.text[this.pos],
            this.tokens = []; (t = this.getNextToken()) && t !== T.EOF; )
                this.tokens.push(t);
            this.tokens.push(t)
        }
        advance() {
            this.char = this.text[++this.pos]
        }
        skipWhiteSpace() {
            for (; null != this.char && v.WHITE_SPACE.test(this.char); )
                this.advance()
        }
        name() {
            let e = "";
            for (; null != this.char && v.ALPHA.test(this.char); )
                e += this.char,
                this.advance();
            return new T(l,e)
        }
        number() {
            let e = "";
            for ("." === this.char && (e += this.char,
            this.advance()); null != this.char && v.DIGIT.test(this.char); )
                e += this.char,
                this.advance();
            if (null != this.char && "." === this.char)
                for (e.includes(".") && b("Number appears to contain 2 decimal points", this.text, this.pos),
                e += this.char,
                this.advance(); null != this.char && v.DIGIT.test(this.char); )
                    e += this.char,
                    this.advance();
            return "." === e && b("Attempted to parse a number, but found only a decimal point", this.text, this.pos),
            e.includes(".") ? new T(g,parseFloat(e)) : new T(_,parseInt(e))
        }
        getNextToken() {
            for (; null != this.char; )
                if (v.WHITE_SPACE.test(this.char))
                    this.skipWhiteSpace();
                else {
                    if ("." === this.char || v.DIGIT.test(this.char))
                        return this.number();
                    if ("," === this.char)
                        return this.advance(),
                        new T(y,",");
                    if (v.OPERATOR.test(this.char)) {
                        let e = ""
                          , t = this.char;
                        switch (t) {
                        case "+":
                            e = d;
                            break;
                        case "-":
                            e = m;
                            break;
                        case "*":
                            e = p;
                            break;
                        case "/":
                            e = f
                        }
                        return this.advance(),
                        new T(e,t)
                    }
                    if (v.PAREN.test(this.char)) {
                        let e = ""
                          , t = this.char;
                        switch (t) {
                        case "(":
                            e = c;
                            break;
                        case ")":
                            e = u
                        }
                        return this.advance(),
                        new T(e,t)
                    }
                    if (v.ALPHA.test(this.char))
                        return this.name();
                    b(`Unexpected character "${this.char}"`, this.text, this.pos)
                }
            return T.EOF
        }
    }
    class R {
        constructor(e) {
            this.lexer = e,
            this.pos = 0
        }
        get currentToken() {
            return this.lexer.tokens[this.pos]
        }
        error(e, t="") {
            b(e, t, this.lexer.text, this.pos)
        }
        consume(e) {
            let t = this.currentToken;
            return t.type === e ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${e}`),
            t
        }
        consumeList(e) {
            e.includes(this.currentToken) ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${tokenType}`)
        }
        expr() {
            let e = this.term();
            for (; this.currentToken.type === d || this.currentToken.type === m; ) {
                const t = this.currentToken;
                switch (t.value) {
                case "+":
                    this.consume(d);
                    break;
                case "-":
                    this.consume(m)
                }
                e = new S(e,t,this.term())
            }
            return e
        }
        term() {
            let e = this.factor();
            for (; this.currentToken.type === p || this.currentToken.type === f; ) {
                const t = this.currentToken;
                switch (t.value) {
                case "*":
                    this.consume(p);
                    break;
                case "/":
                    this.consume(f)
                }
                e = new S(e,t,this.factor())
            }
            return e
        }
        factor() {
            if (this.currentToken.type === d)
                return new x(this.consume(d),this.factor());
            if (this.currentToken.type === m)
                return new x(this.consume(m),this.factor());
            if (this.currentToken.type === _ || this.currentToken.type === g) {
                let e = new C(this.currentToken);
                if (this.pos += 1,
                v.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === E)
                    return e;
                if (this.currentToken.type === l && this.currentToken.value === h)
                    return this.consume(l),
                    new P(e,this.anchorIndex(),this.unit(v.ANY_UNIT));
                if (this.currentToken.type === l)
                    return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"),
                    new P(e,null,this.unit());
                this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
            } else {
                if (v.OBJECT_UNIT.test(this.currentToken.value))
                    return new P(new C(T.ONE),null,this.unit());
                if (this.currentToken.value === h) {
                    this.consume(l);
                    const e = this.anchorIndex();
                    if (v.OBJECT_UNIT.test(this.currentToken.value))
                        return new P(new C(T.ONE),e,this.unit())
                } else if (this.currentToken.type === l) {
                    if ("calc" === this.currentToken.value)
                        return this.consume(l),
                        this.expr();
                    if ("css" === this.currentToken.value || "var" === this.currentToken.value || "prop" === this.currentToken.value) {
                        const e = "prop" !== this.currentToken.value ? O : M;
                        this.consume(l),
                        this.consume(c);
                        const t = this.propertyName();
                        let i = null;
                        return this.currentToken.type === y && (this.consume(y),
                        this.consume(l),
                        i = this.anchorIndex()),
                        this.consume(u),
                        new e(i,t)
                    }
                    if (v.MATH_FUNCTION.test(this.currentToken.value)) {
                        const e = this.currentToken.value.toLowerCase();
                        if ("number" == typeof a[e])
                            return this.consume(l),
                            new C(new T(l,a[e]));
                        const t = T[e] || new T(e,e)
                          , i = [];
                        this.consume(l),
                        this.consume(c);
                        let s = null;
                        do {
                            this.currentToken.value === y && this.consume(y),
                            s = this.expr(),
                            i.push(s)
                        } while (this.currentToken.value === y);
                        return this.consume(u),
                        new I(t,i)
                    }
                } else if (this.currentToken.type === c) {
                    this.consume(c);
                    let e = this.expr();
                    return this.consume(u),
                    e
                }
            }
            this.error(`Unexpected token ${this.currentToken.value}`)
        }
        propertyName() {
            let e = "";
            for (; this.currentToken.type === l || this.currentToken.type === m; )
                e += this.currentToken.value,
                this.pos += 1;
            return e
        }
        unit(e=v.ANY_UNIT) {
            const t = this.currentToken;
            if (t.type === l && e.test(t.value))
                return this.consume(l),
                new T(l,t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"));
            this.error("Expected unit type")
        }
        anchorIndex() {
            const e = this.currentToken;
            if (e.type === _)
                return this.consume(_),
                new C(e);
            this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
        }
        parse() {
            const e = this.expr();
            return this.currentToken !== T.EOF && this.error(`Unexpected token ${this.currentToken.value}`),
            e
        }
    }
    class k {
        constructor(e) {
            this.parser = e,
            this.root = e.parse()
        }
        visit(e) {
            let t = this[e.type];
            if (!t)
                throw new Error(`No visit method named, ${t}`);
            return t.call(this, e)
        }
        BinOp(e) {
            switch (e.op.type) {
            case d:
                return this.visit(e.left) + this.visit(e.right);
            case m:
                return this.visit(e.left) - this.visit(e.right);
            case p:
                return this.visit(e.left) * this.visit(e.right);
            case f:
                return this.visit(e.left) / this.visit(e.right)
            }
        }
        RefValue(e) {
            let t = this.unwrapReference(e)
              , i = e.unit.value
              , r = e.num.value;
            const n = o.metrics.get(t);
            switch (i) {
            case "h":
                return .01 * r * n.height;
            case "t":
                return .01 * r * n.top;
            case "vh":
                return .01 * r * s.pageMetrics.windowHeight;
            case "vw":
                return .01 * r * s.pageMetrics.windowWidth;
            case "px":
                return r;
            case "w":
                return .01 * r * n.width;
            case "b":
                return .01 * r * n.bottom;
            case "l":
                return .01 * r * n.left;
            case "r":
                return .01 * r * n.right
            }
        }
        PropValue(e) {
            return (null === e.ref ? o.target : o.anchors[e.ref.value])[e.propertyName]
        }
        CSSValue(e) {
            let t = this.unwrapReference(e);
            const i = getComputedStyle(t).getPropertyValue(e.propertyName);
            return "" === i ? 0 : k.Parse(i).execute(o)
        }
        Num(e) {
            return e.value
        }
        UnaryOp(e) {
            return e.op.type === d ? +this.visit(e.expr) : e.op.type === m ? -this.visit(e.expr) : void 0
        }
        MathOp(e) {
            let t = e.list.map((e=>this.visit(e)));
            return a[e.op.value].apply(null, t)
        }
        unwrapReference(e) {
            return null === e.ref ? o.target : (e.ref.value >= o.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, o.target),
            o.anchors[e.ref.value])
        }
        execute(e) {
            return o = e,
            this.visit(this.root)
        }
        static Parse(e) {
            return n[e] || (n[e] = new k(new R(new D(e))))
        }
    }
    k.programs = n,
    e.exports = k
}
, function(e, t, i) {
    "use strict";
    const s = i(3)
      , r = i(13)
      , n = (i(34),
    i(139))
      , a = i(56)
      , o = (i(15),
    i(36))
      , h = i(140)
      , l = i(35)
      , c = i(53)
      , u = i(2).EventEmitterMicro
      , d = i(58)
      , m = {};
    "undefined" != typeof window && (m.update = i(9),
    m.external = i(22),
    m.draw = i(4));
    const {transformAttributes: p, cssAttributes: f, domAttributes: _} = i(54)
      , g = Math.PI / 180
      , y = {
        create: i(60),
        rotateX: i(61),
        rotateY: i(62),
        rotateZ: i(63),
        scale: i(64)
    };
    e.exports = class extends u {
        constructor(e, t) {
            super(),
            this._events.draw = [],
            this.uuid = c(),
            this.group = e,
            this.element = t,
            this._ownerIsElement = this.element instanceof Element,
            this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid,
            this.element._animInfo = this.element._animInfo || new a(e,this),
            this.element._animInfo.controller = this,
            this.element._animInfo.group = this.group,
            this.element._animInfo.controllers.push(this),
            this.tweenProps = this.element._animInfo.tweenProps,
            this.eventObject = new n(this),
            this.needsStyleUpdate = !1,
            this.needsClassUpdate = !1,
            this.elementMetrics = this.group.metrics.add(this.element),
            this.attributes = [],
            this.cssAttributes = [],
            this.domAttributes = [],
            this.keyframes = {},
            this._allKeyframes = [],
            this._activeKeyframes = [],
            this.keyframesRequiringDispatch = [],
            this.updateCachedValuesFromElement(),
            this.boundsMin = 0,
            this.boundsMax = 0,
            this.mat2d = new Float32Array(6),
            this.mat4 = y.create(),
            this.needsWrite = !0,
            this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
        }
        destroy() {
            if (this.element._animInfo) {
                this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
                let e = this.element._animInfo.controllers.indexOf(this);
                if (-1 !== e && this.element._animInfo.controllers.splice(e, 1),
                0 === this.element._animInfo.controllers.length)
                    this.element._animInfo = null;
                else {
                    let e = this.element._animInfo.controllers.find((e=>e.group !== e.group.anim.tweenGroup));
                    e && (this.element._animInfo.controller = e,
                    this.element._animInfo.group = e.group)
                }
            }
            this.eventObject.controller = null,
            this.eventObject.element = null,
            this.eventObject.keyframe = null,
            this.eventObject.tweenProps = null,
            this.eventObject = null,
            this.elementMetrics = null,
            this.group = null,
            this.keyframesRequiringDispatch = null;
            for (let e = 0; e < this._allKeyframes.length; e++)
                this._allKeyframes[e].destroy();
            this._allKeyframes = null,
            this._activeKeyframes = null,
            this.attributes = null,
            this.keyframes = null,
            this.element = null,
            this.tweenProps = null,
            this.destroyed = !0,
            super.destroy()
        }
        remove() {
            return this.group.removeKeyframeController(this)
        }
        updateCachedValuesFromElement() {
            if (!this._ownerIsElement)
                return;
            const e = this.getTargetComputedStyle(!0);
            let t = new DOMMatrix(e.getPropertyValue("transform"))
              , i = d(t)
              , n = s.KeyframeDefaults.epsilon
              , a = !1;
            ["x", "y", "z"].forEach(((e,t)=>{
                this.tweenProps[e] = new r(i.translation[t],n,a,e)
            }
            )),
            this.tweenProps.rotation = new r(i.rotation[2],n,a,"rotation"),
            ["rotationX", "rotationY", "rotationZ"].forEach(((e,t)=>{
                this.tweenProps[e] = new r(i.rotation[t],n,a,e)
            }
            )),
            this.tweenProps.scale = new r(i.scale[0],n,a,"scale"),
            ["scaleX", "scaleY", "scaleZ"].forEach(((e,t)=>{
                this.tweenProps[e] = new r(i.scale[t],n,a,e)
            }
            )),
            _.forEach((e=>{
                let t = isNaN(this.element[e]) ? 0 : this.element[e];
                this.tweenProps[e] = new r(t,n,a,e,!1)
            }
            ))
        }
        addKeyframe(e) {
            let t = h(e);
            if (!t)
                throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
            let i = new t(this,e);
            return i.parseOptions(e),
            i.id = this._allKeyframes.length,
            this._allKeyframes.push(i),
            i
        }
        needsUpdate() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e];
                if (this.tweenProps[t].needsUpdate())
                    return !0
            }
            return !1
        }
        updateLocalProgress(e) {
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.attributes[t]
                  , s = this.keyframes[this.attributes[t]];
                if (1 === s.length) {
                    s[0].updateLocalProgress(e);
                    continue
                }
                let r = this.getNearestKeyframeForAttribute(i, e);
                r && r.updateLocalProgress(e)
            }
        }
        reconcile() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e]
                  , i = this.getNearestKeyframeForAttribute(t, this.group.position.local);
                i.updateLocalProgress(this.group.position.local),
                i.snapAtCreation && i.reconcile(t)
            }
        }
        determineActiveKeyframes(e) {
            e = e || l(Array.from(document.documentElement.classList));
            let t = this._activeKeyframes
              , i = this.attributes
              , s = {};
            this._activeKeyframes = [],
            this.attributes = [],
            this.keyframes = {};
            for (let t = 0; t < this._allKeyframes.length; t++) {
                let i = this._allKeyframes[t];
                if (i.markedForRemoval || i.hidden || !i.setEnabled(e))
                    for (let e in i.animValues)
                        this.tweenProps[e].isActive = i.preserveState,
                        i.preserveState && (s[e] = !0);
                else {
                    this._activeKeyframes.push(i);
                    for (let e in i.animValues)
                        this.keyframes[e] = this.keyframes[e] || [],
                        this.keyframes[e].push(i),
                        -1 === this.attributes.indexOf(e) && (s[e] = !0,
                        this.attributes.push(e),
                        this.tweenProps[e].isActive = !0)
                }
            }
            this.attributes.forEach((e=>this.tweenProps[e].isActive = !0)),
            this.cssAttributes = this.attributes.filter((e=>f.includes(e) || e.startsWith("--"))).map((e=>this.tweenProps[e])),
            this.domAttributes = this.attributes.filter((e=>_.includes(e))).map((e=>this.tweenProps[e]));
            let r = t.filter((e=>-1 === this._activeKeyframes.indexOf(e)));
            if (0 === r.length)
                return;
            let n = i.filter((e=>-1 === this.attributes.indexOf(e) && !s.hasOwnProperty(e)));
            if (0 !== n.length)
                if (this.needsWrite = !0,
                this._ownerIsElement)
                    m.external((()=>{
                        let e = n.some((e=>p.includes(e)))
                          , t = e && Object.keys(s).some((e=>p.includes(e)));
                        e && !t && this.element.style.removeProperty("transform");
                        for (let e = 0, t = n.length; e < t; ++e) {
                            let t = n[e]
                              , i = this.tweenProps[t]
                              , s = i.isActive ? i.target : i.initialValue;
                            i.current = i.target = s,
                            !i.isActive && f.includes(t) && (this.element.style[t] = null)
                        }
                        for (let e = 0, t = r.length; e < t; ++e) {
                            let t = r[e];
                            t instanceof o && !t.preserveState && t._unapply()
                        }
                    }
                    ), !0);
                else
                    for (let e = 0, t = n.length; e < t; ++e) {
                        let t = this.tweenProps[n[e]];
                        t.current = t.target,
                        t.isActive = !1
                    }
        }
        onDOMRead(e) {
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.attributes[t]
                  , s = this.getNearestKeyframeForAttribute(i, e);
                s && s.onDOMRead(i) && (this.needsWrite = !0)
            }
        }
        onDOMWrite() {
            (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1,
            this.onDOMWriteImp(),
            this.handleEventDispatch())
        }
        onDOMWriteForObject() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e];
                this.element[t] = this.tweenProps[t].current
            }
        }
        onDOMWriteForElement(e=this.element.style) {
            this.handleStyleTransform(e);
            for (let t = 0, i = this.cssAttributes.length; t < i; t++)
                this.cssAttributes[t].set(e);
            for (let e = 0, t = this.domAttributes.length; e < t; e++)
                this.domAttributes[e].set(this.element);
            if (this.needsStyleUpdate) {
                for (let e in this.tweenProps.targetStyles)
                    null !== this.tweenProps.targetStyles[e] && (this.element.style[e] = this.tweenProps.targetStyles[e]),
                    this.tweenProps.targetStyles[e] = null;
                this.needsStyleUpdate = !1
            }
            this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add),
            this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove),
            this.tweenProps.targetClasses.add.length = 0,
            this.tweenProps.targetClasses.remove.length = 0,
            this.needsClassUpdate = !1)
        }
        handleStyleTransform(e=this.element.style) {
            let t = this.tweenProps;
            if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
                const i = this.mat4;
                i[0] = 1,
                i[1] = 0,
                i[2] = 0,
                i[3] = 0,
                i[4] = 0,
                i[5] = 1,
                i[6] = 0,
                i[7] = 0,
                i[8] = 0,
                i[9] = 0,
                i[10] = 1,
                i[11] = 0,
                i[12] = 0,
                i[13] = 0,
                i[14] = 0,
                i[15] = 1;
                const s = t.x.current
                  , r = t.y.current
                  , n = t.z.current;
                if (i[12] = i[0] * s + i[4] * r + i[8] * n + i[12],
                i[13] = i[1] * s + i[5] * r + i[9] * n + i[13],
                i[14] = i[2] * s + i[6] * r + i[10] * n + i[14],
                i[15] = i[3] * s + i[7] * r + i[11] * n + i[15],
                0 !== t.rotation.current || 0 !== t.rotationZ.current) {
                    const e = (t.rotation.current || t.rotationZ.current) * g;
                    y.rotateZ(i, i, e)
                }
                if (0 !== t.rotationX.current) {
                    const e = t.rotationX.current * g;
                    y.rotateX(i, i, e)
                }
                if (0 !== t.rotationY.current) {
                    const e = t.rotationY.current * g;
                    y.rotateY(i, i, e)
                }
                1 === t.scale.current && 1 === t.scaleX.current && 1 === t.scaleY.current || y.scale(i, i, [t.scale.current, t.scale.current, 1]),
                e.transform = "matrix3d(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + "," + i[4] + "," + i[5] + "," + i[6] + "," + i[7] + "," + i[8] + "," + i[9] + "," + i[10] + "," + i[11] + "," + i[12] + "," + i[13] + "," + i[14] + "," + i[15] + ")"
            } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
                const i = this.mat2d;
                i[0] = 1,
                i[1] = 0,
                i[2] = 0,
                i[3] = 1,
                i[4] = 0,
                i[5] = 0;
                const s = t.x.current
                  , r = t.y.current
                  , n = i[0]
                  , a = i[1]
                  , o = i[2]
                  , h = i[3]
                  , l = i[4]
                  , c = i[5];
                if (i[0] = n,
                i[1] = a,
                i[2] = o,
                i[3] = h,
                i[4] = n * s + o * r + l,
                i[5] = a * s + h * r + c,
                0 !== t.rotation.current || 0 !== t.rotationZ.current) {
                    const e = (t.rotation.current || t.rotationZ.current) * g
                      , s = i[0]
                      , r = i[1]
                      , n = i[2]
                      , a = i[3]
                      , o = i[4]
                      , h = i[5]
                      , l = Math.sin(e)
                      , c = Math.cos(e);
                    i[0] = s * c + n * l,
                    i[1] = r * c + a * l,
                    i[2] = s * -l + n * c,
                    i[3] = r * -l + a * c,
                    i[4] = o,
                    i[5] = h
                }
                t.scaleX.isActive || t.scaleY.isActive ? (i[0] = i[0] * t.scaleX.current,
                i[1] = i[1] * t.scaleX.current,
                i[2] = i[2] * t.scaleY.current,
                i[3] = i[3] * t.scaleY.current) : (i[0] = i[0] * t.scale.current,
                i[1] = i[1] * t.scale.current,
                i[2] = i[2] * t.scale.current,
                i[3] = i[3] * t.scale.current),
                e.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")"
            }
        }
        handleEventDispatch() {
            if (0 !== this.keyframesRequiringDispatch.length) {
                for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                    let t = this.keyframesRequiringDispatch[e];
                    t.needsEventDispatch = !1,
                    this.eventObject.keyframe = t,
                    this.eventObject.pageMetrics = s.pageMetrics,
                    this.eventObject.event = t.event,
                    this.trigger(t.event, this.eventObject)
                }
                this.keyframesRequiringDispatch.length = 0
            }
            if (0 !== this._events.draw.length) {
                this.eventObject.keyframe = null,
                this.eventObject.event = "draw";
                for (let e = this._events.draw.length - 1; e >= 0; e--)
                    this._events.draw[e](this.eventObject)
            }
        }
        updateAnimationConstraints() {
            for (let e = 0, t = this._activeKeyframes.length; e < t; e++)
                this._activeKeyframes[e].evaluateConstraints();
            this.attributes.forEach((e=>{
                1 !== this.keyframes[e].length && this.keyframes[e].sort(s.KeyframeComparison)
            }
            )),
            this.updateDeferredPropertyValues()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this._allKeyframes.forEach((t=>t.anchors.forEach((t=>e.add(t))))),
            this.group.metrics.refreshCollection(e),
            this.group.keyframesDirty = !0
        }
        getTargetComputedStyle(e=!1) {
            return this._ownerIsElement ? ((e || void 0 === this.group.computedStyleCache[this.uuid]) && (this.group.computedStyleCache[this.uuid] = getComputedStyle(this.element)),
            this.group.computedStyleCache[this.uuid]) : null
        }
        updateDeferredPropertyValues() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e]
                  , i = this.keyframes[t];
                if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
                    for (let e = 0, s = i.length; e < s; e++) {
                        let r = i[e];
                        null === r.jsonProps[t][0] && (0 === e ? r.jsonProps[t][0] = r.animValues[t][0] = this.tweenProps[t].current : r.animValues[t][0] = i[e - 1].animValues[t][1]),
                        null === r.jsonProps[t][1] && (r.animValues[t][1] = e === s - 1 ? this.tweenProps[t].current : i[e + 1].animValues[t][0]),
                        r.snapAtCreation && (r.jsonProps[t][0] = r.animValues[t][0],
                        r.jsonProps[t][1] = r.animValues[t][1])
                    }
            }
        }
        getBounds(e) {
            this.boundsMin = Number.MAX_VALUE,
            this.boundsMax = -Number.MAX_VALUE;
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.keyframes[this.attributes[t]];
                for (let t = 0; t < i.length; t++) {
                    let s = i[t];
                    this.boundsMin = Math.min(s.start, this.boundsMin),
                    this.boundsMax = Math.max(s.end, this.boundsMax),
                    e.min = Math.min(s.start, e.min),
                    e.max = Math.max(s.end, e.max)
                }
            }
        }
        getNearestKeyframeForAttribute(e, t) {
            t = void 0 !== t ? t : this.group.position.local;
            let i = null
              , s = Number.POSITIVE_INFINITY
              , r = this.keyframes[e];
            if (void 0 === r)
                return null;
            let n = r.length;
            if (0 === n)
                return null;
            if (1 === n)
                return r[0];
            for (let e = 0; e < n; e++) {
                let n = r[e];
                if (n.isInRange(t)) {
                    i = n;
                    break
                }
                let a = Math.min(Math.abs(t - n.start), Math.abs(t - n.end));
                a < s && (s = a,
                i = n)
            }
            return i
        }
        getAllKeyframesForAttribute(e) {
            return this.keyframes[e]
        }
        updateKeyframe(e, t) {
            e.parseOptions(t),
            e.evaluateConstraints(),
            this.group.keyframesDirty = !0,
            m.update((()=>{
                this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e),
                this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e)
            }
            ), !0)
        }
        removeKeyframe(e) {
            return e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0,
            this.group.keyframesDirty = !0,
            new Promise((t=>{
                this.group.rafEmitter.executor.eventEmitter.once("before:draw", (()=>{
                    t(e),
                    e.destroy();
                    let i = this._allKeyframes.indexOf(e);
                    -1 !== i && this._allKeyframes.splice(i, 1)
                }
                ))
            }
            )))
        }
        updateAnimation(e, t) {
            return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"),
            this.updateKeyframe(e, t)
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = class {
        constructor(e) {
            this.controller = e,
            this.element = this.controller.element,
            this.keyframe = null,
            this.event = "",
            this.tweenProps = this.controller.tweenProps
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(3)
      , r = i(15)
      , n = i(55)
      , a = i(36)
      , o = function(e) {
        for (let t in e) {
            let i = e[t];
            if (-1 === s.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(i))
                return !0
        }
        return !1
    };
    e.exports = function(e) {
        if (void 0 !== e.cssClass || void 0 !== e.style) {
            if (o(e))
                throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
            return a
        }
        if (o(e))
            return r;
        if (e.event)
            return n;
        throw delete e.anchors,
        `Could not determine tween type based on ${JSON.stringify(e)}`
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(142)
      , r = function(e) {
        this.phase = e,
        this.rafEmitter = new s,
        this._cachePhaseIndex(),
        this.requestAnimationFrame = this.requestAnimationFrame.bind(this),
        this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this),
        this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this),
        this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this),
        this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this),
        this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)),
        this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart),
        this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase),
        this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase),
        this._frameCallbacks = [],
        this._currentFrameCallbacks = [],
        this._nextFrameCallbacks = [],
        this._phaseActive = !1,
        this._currentFrameID = -1,
        this._cancelFrameIdx = -1,
        this._frameCallbackLength = 0,
        this._currentFrameCallbacksLength = 0,
        this._nextFrameCallbacksLength = 0,
        this._frameCallbackIteration = 0
    }
      , n = r.prototype;
    n.requestAnimationFrame = function(e, t) {
        return !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0),
        this._frameCallbacks.push(this._currentFrameID, e),
        this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1),
        this._currentFrameCallbacks.push(this._currentFrameID, e),
        this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(),
        this._nextFrameCallbacks.push(this._currentFrameID, e),
        this._nextFrameCallbacksLength += 2),
        this._currentFrameID
    }
    ,
    n.cancelAnimationFrame = function(e) {
        this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e),
        this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e),
        this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e),
        this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
    }
    ,
    n._onRAFExecuted = function(e) {
        for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2)
            this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
        this._frameCallbacks.length = 0,
        this._frameCallbackLength = 0
    }
    ,
    n._onBeforeRAFExecutorStart = function() {
        Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)),
        this._currentFrameCallbacksLength = this._nextFrameCallbacksLength,
        this._nextFrameCallbacks.length = 0,
        this._nextFrameCallbacksLength = 0
    }
    ,
    n._onBeforeRAFExecutorPhase = function() {
        this._phaseActive = !0,
        Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)),
        this._frameCallbackLength = this._currentFrameCallbacksLength,
        this._currentFrameCallbacks.length = 0,
        this._currentFrameCallbacksLength = 0
    }
    ,
    n._onAfterRAFExecutorPhase = function() {
        this._phaseActive = !1
    }
    ,
    n._cachePhaseIndex = function() {
        this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
    }
    ,
    n._cancelRunningAnimationFrame = function() {
        this._frameCallbacks.splice(this._cancelFrameIdx, 2),
        this._frameCallbackLength -= 2
    }
    ,
    n._cancelCurrentAnimationFrame = function() {
        this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2),
        this._currentFrameCallbacksLength -= 2
    }
    ,
    n._cancelNextAnimationFrame = function() {
        this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2),
        this._nextFrameCallbacksLength -= 2,
        0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
    }
    ,
    e.exports = r
}
, function(e, t, i) {
    "use strict";
    var s = i(11)
      , r = function(e) {
        s.call(this, e)
    };
    (r.prototype = Object.create(s.prototype))._subscribe = function() {
        return this.executor.subscribe(this, !0)
    }
    ,
    e.exports = r
}
, function(e, t, i) {
    "use strict";
    var s = i(21).SharedInstance
      , r = i(59).majorVersionNumber
      , n = i(145);
    e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, n)
}
, function(e, t, i) {
    "use strict";
    var s, r = window, n = r.AC, a = (s = {},
    {
        get: function(e, t) {
            var i = null;
            return s[e] && s[e][t] && (i = s[e][t]),
            i
        },
        set: function(e, t, i) {
            return s[e] || (s[e] = {}),
            s[e][t] = "function" == typeof i ? new i : i,
            s[e][t]
        },
        share: function(e, t, i) {
            var s = this.get(e, t);
            return s || (s = this.set(e, t, i)),
            s
        },
        remove: function(e, t) {
            var i = typeof t;
            if ("string" !== i && "number" !== i)
                s[e] && (s[e] = null);
            else {
                if (!s[e] || !s[e][t])
                    return;
                s[e][t] = null
            }
        }
    });
    n || (n = r.AC = {}),
    n.SharedInstance || (n.SharedInstance = a),
    e.exports = n.SharedInstance
}
, function(e, t, i) {
    "use strict";
    var s, r = i(12);
    function n(e) {
        e = e || {},
        this._reset(),
        this.updatePhases(),
        this.eventEmitter = new r,
        this._willRun = !1,
        this._totalSubscribeCount = -1,
        this._requestAnimationFrame = window.requestAnimationFrame,
        this._cancelAnimationFrame = window.cancelAnimationFrame,
        this._boundOnAnimationFrame = this._onAnimationFrame.bind(this),
        this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    (s = n.prototype).frameRequestedPhase = "requested",
    s.startPhase = "start",
    s.runPhases = ["update", "external", "draw"],
    s.endPhase = "end",
    s.disabledPhase = "disabled",
    s.beforePhaseEventPrefix = "before:",
    s.afterPhaseEventPrefix = "after:",
    s.subscribe = function(e, t) {
        return this._totalSubscribeCount++,
        this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id),
        this._nextFrameSubscribers[e.id] = e,
        this._nextFrameSubscriberArrayLength++,
        this._nextFrameSubscriberCount++,
        this._run()),
        this._totalSubscribeCount
    }
    ,
    s.subscribeImmediate = function(e, t) {
        return this._totalSubscribeCount++,
        this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id),
        this._subscribers[e.id] = e,
        this._subscriberArrayLength++,
        this._subscriberCount++),
        this._totalSubscribeCount
    }
    ,
    s.unsubscribe = function(e) {
        return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null,
        this._nextFrameSubscriberCount--,
        0 === this._nextFrameSubscriberCount && this._cancel(),
        !0)
    }
    ,
    s.getSubscribeID = function() {
        return this._totalSubscribeCount += 1
    }
    ,
    s.destroy = function() {
        var e = this._cancel();
        return this.eventEmitter.destroy(),
        this.eventEmitter = null,
        this.phases = null,
        this._subscribers = null,
        this._subscribersOrder = null,
        this._nextFrameSubscribers = null,
        this._nextFrameSubscribersOrder = null,
        this._rafData = null,
        this._boundOnAnimationFrame = null,
        this._onExternalAnimationFrame = null,
        e
    }
    ,
    s.useExternalAnimationFrame = function(e) {
        if ("boolean" == typeof e) {
            var t = this._isUsingExternalAnimationFrame;
            return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
            this._animationFrame = null),
            !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
            this._isUsingExternalAnimationFrame = e,
            e ? this._boundOnExternalAnimationFrame : t || !1
        }
    }
    ,
    s.updatePhases = function() {
        this.phases || (this.phases = []),
        this.phases.length = 0,
        this.phases.push(this.frameRequestedPhase),
        this.phases.push(this.startPhase),
        Array.prototype.push.apply(this.phases, this.runPhases),
        this.phases.push(this.endPhase),
        this._runPhasesLength = this.runPhases.length,
        this._phasesLength = this.phases.length
    }
    ,
    s._run = function() {
        if (!this._willRun)
            return this._willRun = !0,
            0 === this.lastFrameTime && (this.lastFrameTime = performance.now()),
            this._animationFrameActive = !0,
            this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
            this.phase === this.disabledPhase && (this.phaseIndex = 0,
            this.phase = this.phases[this.phaseIndex]),
            !0
    }
    ,
    s._cancel = function() {
        var e = !1;
        return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
        this._animationFrame = null),
        this._animationFrameActive = !1,
        this._willRun = !1,
        e = !0),
        this._isRunning || this._reset(),
        e
    }
    ,
    s._onAnimationFrame = function(e) {
        for (this._subscribers = this._nextFrameSubscribers,
        this._subscribersOrder = this._nextFrameSubscribersOrder,
        this._subscriberArrayLength = this._nextFrameSubscriberArrayLength,
        this._subscriberCount = this._nextFrameSubscriberCount,
        this._nextFrameSubscribers = {},
        this._nextFrameSubscribersOrder = [],
        this._nextFrameSubscriberArrayLength = 0,
        this._nextFrameSubscriberCount = 0,
        this.phaseIndex = 0,
        this.phase = this.phases[this.phaseIndex],
        this._isRunning = !0,
        this._willRun = !1,
        this._didRequestNextRAF = !1,
        this._rafData.delta = e - this.lastFrameTime,
        this.lastFrameTime = e,
        this._rafData.fps = 0,
        this._rafData.delta >= 1e3 && (this._rafData.delta = 0),
        0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta),
        this._rafData.time = e,
        this._rafData.naturalFps = this._rafData.fps,
        this._rafData.timeNow = Date.now(),
        this.phaseIndex++,
        this.phase = this.phases[this.phaseIndex],
        this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
        this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
            null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
        for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase),
        this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
            for (this.phaseIndex++,
            this.phase = this.phases[this.phaseIndex],
            this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
            this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
                null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
        }
        for (this.phaseIndex++,
        this.phase = this.phases[this.phaseIndex],
        this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
        this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
            null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
        this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase),
        this._willRun ? (this.phaseIndex = 0,
        this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
    }
    ,
    s._onExternalAnimationFrame = function(e) {
        this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }
    ,
    s._reset = function() {
        this._rafData || (this._rafData = {}),
        this._rafData.time = 0,
        this._rafData.delta = 0,
        this._rafData.fps = 0,
        this._rafData.naturalFps = 0,
        this._rafData.timeNow = 0,
        this._subscribers = {},
        this._subscribersOrder = [],
        this._currentSubscriberIndex = -1,
        this._subscriberArrayLength = 0,
        this._subscriberCount = 0,
        this._nextFrameSubscribers = {},
        this._nextFrameSubscribersOrder = [],
        this._nextFrameSubscriberArrayLength = 0,
        this._nextFrameSubscriberCount = 0,
        this._didEmitFrameData = !1,
        this._animationFrame = null,
        this._animationFrameActive = !1,
        this._isRunning = !1,
        this._shouldReset = !1,
        this.lastFrameTime = 0,
        this._runPhaseIndex = -1,
        this.phaseIndex = -1,
        this.phase = this.disabledPhase
    }
    ,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    var s = i(21).SharedInstance
      , r = i(59).majorVersionNumber
      , n = function() {
        this._currentID = 0
    };
    n.prototype.getNewID = function() {
        return this._currentID++,
        "raf:" + this._currentID
    }
    ,
    e.exports = s.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, n)
}
, function(e, t, i) {
    "use strict";
    const s = i(37)
      , r = i(65)
      , n = i(7);
    let a = 0;
    const o = {};
    "undefined" != typeof window && (o.create = i(11));
    class h extends s {
        constructor(e, t) {
            e || ((e = document.createElement("div")).className = "TimeGroup-" + a++),
            super(e, t),
            this.name = this.name || e.getAttribute("data-anim-time-group"),
            this._isPaused = !0,
            this._repeats = 0,
            this._isReversed = !1,
            this._timeScale = 1,
            this._chapterPlayer = new r(this),
            this.now = performance.now()
        }
        finalizeInit() {
            if (!this.anim)
                throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
            this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this),
            super.finalizeInit()
        }
        progress(e) {
            if (void 0 === e)
                return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
            let t = e * this.boundsMax;
            this.timelineUpdateRequired = !0,
            this.updateTimeline(t)
        }
        time(e) {
            if (void 0 === e)
                return this.position.local;
            e = n.clamp(e, this.boundsMin, this.duration),
            this.timelineUpdateRequired = !0,
            this.updateTimeline(e)
        }
        play(e) {
            this.reversed(!1),
            this.isEnabled = !0,
            this._isPaused = !1,
            this.time(e),
            this.now = performance.now(),
            this._playheadEmitter.run()
        }
        reverse(e) {
            this.reversed(!0),
            this.isEnabled = !0,
            this._isPaused = !1,
            this.time(e),
            this.now = performance.now(),
            this._playheadEmitter.run()
        }
        reversed(e) {
            if (void 0 === e)
                return this._isReversed;
            this._isReversed = e
        }
        restart() {
            this._isReversed ? (this.progress(1),
            this.reverse(this.time())) : (this.progress(0),
            this.play(this.time()))
        }
        pause(e) {
            this.time(e),
            this._isPaused = !0
        }
        paused(e) {
            return void 0 === e ? this._isPaused : (this._isPaused = e,
            this._isPaused || this.play(),
            this)
        }
        onPlayTimeUpdate() {
            if (this._isPaused)
                return;
            let e = performance.now()
              , t = (e - this.now) / 1e3;
            this.now = e,
            this._isReversed && (t = -t);
            let i = this.time() + t * this._timeScale;
            if (this._repeats === h.REPEAT_FOREVER || this._repeats > 0) {
                let e = !1;
                !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax,
                e = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i,
                e = !0),
                e && (this._repeats = this._repeats === h.REPEAT_FOREVER ? h.REPEAT_FOREVER : this._repeats - 1)
            }
            this.time(i);
            let s = !this._isReversed && this.position.local !== this.duration
              , r = this._isReversed && 0 !== this.position.local;
            s || r ? this._playheadEmitter.run() : this.paused(!0)
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = e,
            this.position.local = n.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length)
                return this.boundsMin = 0,
                void (this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].getBounds(e);
            this.boundsMin = 0,
            this.boundsMax = e.max,
            this.viewableRange.a = this.viewableRange.b = 0,
            this.viewableRange.c = this.viewableRange.d = this.boundsMax,
            this.timelineUpdateRequired = !0
        }
        setupRAFEmitter(e) {
            this._playheadEmitter = new o.create,
            this._playheadEmitter.on("update", this.onPlayTimeUpdate),
            super.setupRAFEmitter(e)
        }
        get duration() {
            return this.keyframesDirty && this.onKeyframesDirty({
                silent: !0
            }),
            this.boundsMax
        }
        timeScale(e) {
            return void 0 === e ? this._timeScale : (this._timeScale = e,
            this)
        }
        repeats(e) {
            if (void 0 === e)
                return this._repeats;
            this._repeats = e
        }
        getPosition() {
            return this.position.local
        }
        addChapter(e) {
            return this._chapterPlayer.addChapter(e)
        }
        playToChapter(e) {
            this._chapterPlayer.playToChapter(e)
        }
        convertScrollPositionToTValue(e) {
            return e
        }
        convertTValueToScrollPosition(e) {
            return e
        }
        hasDuration() {
            return this.duration > 0
        }
        destroy() {
            this._playheadEmitter.destroy(),
            this._playheadEmitter = null,
            super.destroy()
        }
        get timelineProgress() {
            return this.progress()
        }
        set timelineProgress(e) {
            this.progress(e)
        }
        get progressValue() {
            return this.progress()
        }
        set progressValue(e) {
            this.progress(e)
        }
        get timeValue() {
            return this.time()
        }
        set timeValue(e) {
            this.time(e)
        }
    }
    h.REPEAT_FOREVER = -1,
    e.exports = h
}
, function(e, t, i) {
    "use strict";
    const s = i(37)
      , r = (i(65),
    i(7));
    let n = 0;
    const a = {};
    "undefined" != typeof window && (a.create = i(11));
    e.exports = class extends s {
        constructor(e, t) {
            e || ((e = document.createElement("div")).className = "TweenGroup-" + n++),
            super(e, t),
            this.name = "Tweens",
            this.keyframes = [],
            this._isPaused = !1,
            this.now = performance.now()
        }
        finalizeInit() {
            this.onTimeEmitterUpdate = this.onTimeEmitterUpdate.bind(this),
            this.removeExpiredKeyframeControllers = this.removeExpiredKeyframeControllers.bind(this),
            super.finalizeInit()
        }
        destroy() {
            this._timeEmitter.destroy(),
            this._timeEmitter = null,
            this._keyframes = [],
            super.destroy()
        }
        setupRAFEmitter(e) {
            this.now = performance.now(),
            this._timeEmitter = new a.create,
            this._timeEmitter.on("update", this.onTimeEmitterUpdate),
            this._timeEmitter.run(),
            super.setupRAFEmitter(e)
        }
        addKeyframe(e, t) {
            if (void 0 !== t.start || void 0 !== t.end)
                throw Error("Tweens do not have a start or end, they can only have a duration. Consider using a TimeGroup instead");
            if ("number" != typeof t.duration)
                throw Error("Tween options.duration is undefined, or is not a number");
            let i, s;
            t.start = (t.delay || 0) + this.position.localUnclamped,
            t.end = t.start + t.duration,
            t.preserveState = !0,
            t.snapAtCreation = !0,
            e._animInfo && (i = e._animInfo.group,
            s = e._animInfo.controller);
            let r = super.addKeyframe(e, t);
            return e._animInfo.group = i,
            e._animInfo.controller = s,
            t.onStart && r.controller.once("draw", (e=>{
                e.keyframe = r,
                t.onStart(e),
                e.keyframe = null
            }
            )),
            t.onDraw && r.controller.on("draw", (e=>{
                e.keyframe = r,
                t.onDraw(e),
                e.keyframe = null
            }
            )),
            this.removeOverlappingProps(r),
            this.keyframes.push(r),
            this._timeEmitter.willRun() || (this.now = performance.now(),
            this._timeEmitter.run()),
            r
        }
        removeOverlappingProps(e) {
            if (e.controller._allKeyframes.length <= 1)
                return;
            let t = Object.keys(e.animValues)
              , i = e.controller;
            for (let s = 0, r = i._allKeyframes.length; s < r; s++) {
                const r = i._allKeyframes[s];
                if (r === e)
                    continue;
                if (r.markedForRemoval)
                    continue;
                let n = Object.keys(r.animValues)
                  , a = n.filter((e=>t.includes(e)));
                a.length !== n.length ? a.forEach((e=>delete r.animValues[e])) : r.markedForRemoval = !0
            }
        }
        onTimeEmitterUpdate(e) {
            if (this._isPaused || 0 === this.keyframeControllers.length)
                return;
            let t = performance.now()
              , i = (t - this.now) / 1e3;
            this.now = t;
            let s = this.position.local + i;
            this.position.local = this.position.localUnclamped = s,
            this.onTimeUpdate()
        }
        onTimeUpdate() {
            for (let e = 0, t = this.keyframes.length; e < t; e++)
                this.keyframes[e].updateLocalProgress(this.position.localUnclamped);
            this.requestDOMChange(),
            this._timeEmitter.run(),
            null !== this.gui && this.gui.onScrollUpdate(this.position)
        }
        onDOMRead() {
            if (this.keyframesDirty && this.onKeyframesDirty(),
            0 !== this.keyframes.length)
                for (let e = 0, t = this.keyframes.length; e < t; e++) {
                    this.keyframes[e].controller.needsWrite = !0;
                    for (let t in this.keyframes[e].animValues)
                        this.keyframes[e].onDOMRead(t)
                }
        }
        onDOMWrite() {
            super.onDOMWrite(),
            this.removeExpiredKeyframes()
        }
        removeExpiredKeyframes() {
            let e = this.keyframes.length
              , t = e;
            for (; e--; ) {
                let t = this.keyframes[e];
                t.destroyed ? this.keyframes.splice(e, 1) : (t.markedForRemoval && (t.jsonProps.onComplete && 1 === t.localT && (t.controller.eventObject.keyframe = t,
                t.jsonProps.onComplete(t.controller.eventObject),
                t.jsonProps.onComplete = null),
                null !== this.gui && this.gui.isDraggingPlayhead || (t.remove(),
                this.keyframes.splice(e, 1))),
                1 === t.localT && (t.markedForRemoval = !0))
            }
            this.keyframes.length === t && 0 !== this.keyframes.length || this._timeEmitter.executor.eventEmitter.once("after:draw", this.removeExpiredKeyframeControllers)
        }
        removeExpiredKeyframeControllers() {
            for (let e = 0, t = this.keyframeControllers.length; e < t; e++) {
                let t = !0
                  , i = this.keyframeControllers[e];
                for (let e = 0, s = i._allKeyframes.length; e < s; e++)
                    if (!i._allKeyframes[e].destroyed) {
                        t = !1;
                        break
                    }
                t && i.remove()
            }
        }
        updateBounds() {
            this.boundsMin = Math.min(...this.keyframes.map((e=>e.start))),
            this.boundsMax = Math.max(...this.keyframes.map((e=>e.end)))
        }
        play() {
            this.isEnabled = !0,
            this._isPaused = !1,
            this.now = performance.now(),
            this._timeEmitter.run()
        }
        pause() {
            this._isPaused = !0
        }
        paused() {
            return this._isPaused
        }
        time(e) {
            if (void 0 === e)
                return this.position.local;
            this.position.local = this.position.localUnclamped = r.clamp(e, this.boundsMin, this.boundsMax),
            this.onTimeUpdate()
        }
        performTimelineDispatch() {}
        hasDuration() {
            return !0
        }
        getPosition() {
            return this.position.local
        }
        updateProgress(e) {}
        get duration() {
            return this.boundsMax
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        version: "3.5.2",
        major: "3.x",
        majorMinor: "3.5"
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = i(8)
      , n = i(17)
      , a = i(39)
      , o = i(72)
      , h = i(73)
      , l = i(158)
      , c = i(159)
      , u = {
        update: i(9),
        cancelUpdate: i(66),
        external: i(22),
        draw: i(4)
    };
    let d = null;
    e.exports = window.AC.SharedInstance.share("AnimSystem", c.major, class extends s {
        constructor() {
            if (super(),
            d)
                throw "You cannot create multiple AnimSystems. You probably want to create multiple groups instead. You can have unlimited groups on a page";
            d = this,
            this.groups = [],
            this.scrollSystems = [],
            this.timeSystems = [],
            this._forceUpdateRAFId = -1,
            this._initialized = !1,
            this.model = r,
            this.version = c.version,
            this._resolveReady = ()=>{}
            ,
            this.ready = new Promise((e=>this._resolveReady = e)),
            this.onScroll = this.onScroll.bind(this),
            this.onResizedDebounced = this.onResizedDebounced.bind(this),
            this.onResizeImmediate = this.onResizeImmediate.bind(this)
        }
        initialize() {
            return this._initialized || (this._initialized = !0,
            this.timeSystems = [],
            this.scrollSystems = [],
            this.groups = [],
            this.setupEvents(),
            this.initializeResizeFilter(),
            this.initializeModel(),
            this.createDOMGroups(),
            this.createDOMKeyframes(),
            this._resolveReady()),
            this.ready
        }
        remove() {
            return Promise.all(this.groups.map((e=>e.remove()))).then((()=>{
                this.groups = null,
                this.scrollSystems = null,
                this.timeSystems = null,
                window.clearTimeout(r.RESIZE_TIMEOUT),
                window.removeEventListener("scroll", this.onScroll),
                window.removeEventListener("resize", this.onResizeImmediate),
                this._events = {},
                this._initialized = !1,
                this.ready = new Promise((e=>this._resolveReady = e))
            }
            ))
        }
        destroy() {
            return this.remove()
        }
        createTimeGroup(e) {
            let t = new l(e,this);
            return this.groups.push(t),
            this.timeSystems.push(t),
            this.trigger(r.EVENTS.ON_GROUP_CREATED, t),
            t
        }
        createScrollGroup(e) {
            if (!e)
                throw "AnimSystem scroll based groups must supply an HTMLElement";
            let t = new h(e,this);
            return this.groups.push(t),
            this.scrollSystems.push(t),
            this.trigger(r.EVENTS.ON_GROUP_CREATED, t),
            t
        }
        removeGroup(e) {
            return Promise.all(e.keyframeControllers.map((t=>e.removeKeyframeController(t)))).then((()=>{
                let t = this.groups.indexOf(e);
                -1 !== t && this.groups.splice(t, 1),
                t = this.scrollSystems.indexOf(e),
                -1 !== t && this.scrollSystems.splice(t, 1),
                t = this.timeSystems.indexOf(e),
                -1 !== t && this.timeSystems.splice(t, 1),
                e.destroy()
            }
            ))
        }
        createDOMGroups() {
            document.body.setAttribute("data-anim-scroll-group", "body"),
            document.querySelectorAll("[data-anim-scroll-group]").forEach((e=>this.createScrollGroup(e))),
            document.querySelectorAll("[data-anim-time-group]").forEach((e=>this.createTimeGroup(e))),
            this.trigger(r.EVENTS.ON_DOM_GROUPS_CREATED, this.groups)
        }
        createDOMKeyframes() {
            let e = [];
            [n.DATA_ATTRIBUTE, a.DATA_ATTRIBUTE, o.DATA_ATTRIBUTE].forEach((function(t) {
                for (let i = 0; i < 12; i++)
                    e.push(t + (0 === i ? "" : "-" + (i - 1)))
            }
            ));
            for (let t = 0; t < e.length; t++) {
                let i = e[t]
                  , s = document.querySelectorAll("[" + i + "]");
                for (let e = 0; e < s.length; e++) {
                    const t = s[e]
                      , r = JSON.parse(t.getAttribute(i));
                    this.addKeyframe(t, r)
                }
            }
            u.update((()=>{
                this.groups.forEach((e=>e.onKeyframesDirty({
                    silent: !0
                }))),
                this.groups.forEach((e=>e.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, e))),
                this.trigger(r.EVENTS.ON_DOM_KEYFRAMES_CREATED, this),
                this.groups.forEach((e=>{
                    e.forceUpdate({
                        waitForNextUpdate: !1,
                        silent: !0
                    }),
                    e.reconcile()
                }
                )),
                this.onScroll()
            }
            ), !0)
        }
        initializeResizeFilter() {
            if (r.cssDimensionsTracker)
                return;
            const e = document.querySelector(".cssDimensionsTracker") || document.createElement("div");
            e.setAttribute("cssDimensionsTracker", "true"),
            e.style.position = "fixed",
            e.style.top = "0",
            e.style.width = "100%",
            e.style.height = "100vh",
            e.style.pointerEvents = "none",
            e.style.visibility = "hidden",
            e.style.zIndex = "-1",
            document.documentElement.appendChild(e),
            r.cssDimensionsTracker = e
        }
        initializeModel() {
            r.pageMetrics.windowHeight = r.cssDimensionsTracker.clientHeight,
            r.pageMetrics.windowWidth = r.cssDimensionsTracker.clientWidth,
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset,
            r.pageMetrics.breakpoint = r.getBreakpoint();
            let e = document.documentElement.getBoundingClientRect();
            r.pageMetrics.documentOffsetX = e.left + r.pageMetrics.scrollX,
            r.pageMetrics.documentOffsetY = e.top + r.pageMetrics.scrollY
        }
        setupEvents() {
            window.removeEventListener("scroll", this.onScroll),
            window.addEventListener("scroll", this.onScroll),
            window.removeEventListener("resize", this.onResizeImmediate),
            window.addEventListener("resize", this.onResizeImmediate)
        }
        onScroll() {
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            for (let e = 0, t = this.scrollSystems.length; e < t; e++)
                this.scrollSystems[e]._onScroll();
            this.trigger(r.PageEvents.ON_SCROLL, r.pageMetrics)
        }
        onResizeImmediate() {
            let e = r.cssDimensionsTracker.clientWidth
              , t = r.cssDimensionsTracker.clientHeight;
            if (e === r.pageMetrics.windowWidth && t === r.pageMetrics.windowHeight)
                return;
            r.pageMetrics.windowWidth = e,
            r.pageMetrics.windowHeight = t,
            r.pageMetrics.scrollY = window.scrollY || window.pageYOffset,
            r.pageMetrics.scrollX = window.scrollX || window.pageXOffset;
            let i = document.documentElement.getBoundingClientRect();
            r.pageMetrics.documentOffsetX = i.left + r.pageMetrics.scrollX,
            r.pageMetrics.documentOffsetY = i.top + r.pageMetrics.scrollY,
            window.clearTimeout(r.RESIZE_TIMEOUT),
            r.RESIZE_TIMEOUT = window.setTimeout(this.onResizedDebounced, 250),
            this.trigger(r.PageEvents.ON_RESIZE_IMMEDIATE, r.pageMetrics)
        }
        onResizedDebounced() {
            u.update((()=>{
                let e = r.pageMetrics.breakpoint
                  , t = r.getBreakpoint();
                if (t !== e) {
                    r.pageMetrics.previousBreakpoint = e,
                    r.pageMetrics.breakpoint = t;
                    for (let e = 0, t = this.groups.length; e < t; e++)
                        this.groups[e]._onBreakpointChange();
                    this.trigger(r.PageEvents.ON_BREAKPOINT_CHANGE, r.pageMetrics)
                }
                for (let e = 0, t = this.groups.length; e < t; e++)
                    this.groups[e].forceUpdate({
                        waitForNextUpdate: !1
                    });
                this.trigger(r.PageEvents.ON_RESIZE_DEBOUNCED, r.pageMetrics)
            }
            ), !0)
        }
        forceUpdate({waitForNextUpdate: e=!0, silent: t=!1}={}) {
            -1 !== this._forceUpdateRAFId && u.cancelUpdate(this._forceUpdateRAFId);
            let i = ()=>{
                for (let e = 0, i = this.groups.length; e < i; e++) {
                    this.groups[e].forceUpdate({
                        waitForNextUpdate: !1,
                        silent: t
                    })
                }
                return -1
            }
            ;
            this._forceUpdateRAFId = e ? u.update(i, !0) : i()
        }
        addKeyframe(e, t) {
            let i = this.getGroupForTarget(e);
            return i = i || this.getGroupForTarget(document.body),
            i.addKeyframe(e, t)
        }
        getGroupForTarget(e) {
            if (e._animInfo && e._animInfo.group)
                return e._animInfo.group;
            let t = e;
            for (; t; ) {
                if (t._animInfo && t._animInfo.isGroup)
                    return t._animInfo.group;
                t = t.parentElement
            }
        }
        getControllerForTarget(e) {
            return e._animInfo && e._animInfo.controller ? e._animInfo.controller : null
        }
    }
    )
}
, function(e, t, i) {
    "use strict";
    const s = i(68);
    e.exports = class {
        constructor(e, t, i=!1) {
            this.isGroup = i,
            this.group = e,
            this.controller = t,
            this.controllers = [],
            this.tweenProps = new s
        }
    }
}
, function(e, t, i) {
    "use strict";
    class s {
        constructor(e, t, i, s) {
            this.mass = e,
            this.stiffness = t,
            this.damping = i,
            this.initialVelocity = s,
            this.m_w0 = Math.sqrt(this.stiffness / this.mass),
            this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass)),
            this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta),
            this.m_A = 1,
            this.m_B = (this.m_zeta * this.m_w0 - this.initialVelocity) / this.m_wd) : (this.m_wd = 0,
            this.m_A = 1,
            this.m_B = -this.initialVelocity + this.m_w0)
        }
        solve(e) {
            return 0 === e || 1 === e ? e : 1 - (e = this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0))
        }
    }
    const r = /\d*\.?\d+/g;
    s.fromCSSString = function(e) {
        let t = e.match(r);
        if (4 !== t.length)
            throw `SpringEasing could not convert ${cssString} to spring params`;
        let i = t.map(Number)
          , n = new s(...i);
        return n.solve.bind(n)
    }
    ,
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        if ("string" != typeof e)
            return e;
        try {
            return (t || document).querySelector(e) || document.querySelector(e)
        } catch (e) {
            return !1
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(155)
      , r = new (i(74));
    class n {
        constructor(e) {
            this.group = e,
            this.data = {
                target: null,
                anchors: null,
                metrics: this.group.metrics
            }
        }
        parseArray(e, t) {
            return [this.parseExpression(e, t[0]), this.parseExpression(e, t[1])]
        }
        parseExpression(e, t) {
            if (!t)
                return null;
            if ("number" == typeof t)
                return t;
            if ("string" != typeof t)
                throw `Expression must be a string, received ${typeof t}: ${t}`;
            return this.data.target = e.controller.element,
            this.data.anchors = e.anchors,
            this.data.keyframe = e.keyframe,
            n._parse(t, this.data)
        }
        parseTimeValue(e, t) {
            if ("number" == typeof t)
                return t;
            let i = this.group.expressionParser.parseExpression(e, t);
            return this.group.convertScrollPositionToTValue(i)
        }
        destroy() {
            this.group = null
        }
        static parse(e, t) {
            return (t = t || {}) && (r.clear(),
            t.target && r.add(t.target),
            t.anchors && t.anchors.forEach((e=>r.add(e)))),
            t.metrics = r,
            n._parse(e, t)
        }
        static _parse(e, t) {
            return s.Parse(e).execute(t)
        }
    }
    n.programs = s.programs,
    window.ExpressionParser = n,
    e.exports = n
}
, function(e, t, i) {
    "use strict";
    const s = i(8)
      , r = i(7)
      , n = {}
      , a = {
        smoothstep: (e,t,i)=>(i = a.clamp((i - e) / (t - e), 0, 1)) * i * (3 - 2 * i),
        deg: e=>180 * e / Math.PI,
        rad: e=>e * Math.PI / 180,
        random: (e,t)=>Math.random() * (t - e) + e,
        atan: Math.atan2
    };
    Object.getOwnPropertyNames(Math).forEach((e=>a[e] ? null : a[e.toLowerCase()] = Math[e])),
    Object.getOwnPropertyNames(r).forEach((e=>a[e] ? null : a[e.toLowerCase()] = r[e]));
    let o = null;
    const h = "a"
      , l = "ALPHA"
      , c = "("
      , u = ")"
      , d = "PLUS"
      , m = "MINUS"
      , p = "MUL"
      , f = "DIV"
      , _ = "INTEGER_CONST"
      , g = "FLOAT_CONST"
      , y = ","
      , E = "EOF"
      , v = {
        NUMBERS: /\d|\d\.\d/,
        DIGIT: /\d/,
        OPERATOR: /[-+*/]/,
        PAREN: /[()]/,
        WHITE_SPACE: /\s/,
        ALPHA: /[a-zA-Z]|%/,
        ALPHANUMERIC: /[a-zA-Z0-9]/,
        OBJECT_UNIT: /^(t|l|b|r|%w|%h|%|h|w)$/,
        GLOBAL_METRICS_UNIT: /^(px|vh|vw)$/,
        ANY_UNIT: /^(t|l|b|r|%w|%h|%|h|w|px|vh|vw)$/,
        MATH_FUNCTION: new RegExp(`\\b(${Object.keys(a).join("|")})\\b`,"i")
    }
      , b = {
        round: 1,
        clamp: 3,
        lerp: 3,
        random: 2,
        atan: 2,
        floor: 1,
        ceil: 1,
        abs: 1,
        cos: 1,
        sin: 1,
        smoothstep: 3,
        rad: 1,
        deg: 1,
        pow: 2,
        calc: 1
    };
    class w {
        constructor(e, t) {
            this.type = e,
            this.value = t
        }
    }
    w.ONE = new w("100",100),
    w.EOF = new w(E,null);
    class T {
        constructor(e) {
            this.type = e
        }
    }
    class A extends T {
        constructor(e, t) {
            super("UnaryOp"),
            this.token = this.op = e,
            this.expr = t
        }
    }
    class x extends T {
        constructor(e, t, i) {
            super("BinOp"),
            this.left = e,
            this.op = t,
            this.right = i
        }
    }
    class S extends T {
        constructor(e, t) {
            if (super("MathOp"),
            this.op = e,
            this.list = t,
            b[e.value] && t.length !== b[e.value])
                throw new Error(`Incorrect number of arguments for '${e.value}'. Received ${t.length}, expected ${b[e.value]}`)
        }
    }
    class I extends T {
        constructor(e) {
            super("Num"),
            this.token = e,
            this.value = e.value
        }
    }
    class C extends T {
        constructor(e, t, i) {
            super("RefValue"),
            this.num = e,
            this.ref = t,
            this.unit = i
        }
    }
    class P extends T {
        constructor(e, t) {
            super("CSSValue"),
            this.ref = e,
            this.propertyName = t
        }
    }
    class O extends T {
        constructor(e, t) {
            super("PropValue"),
            this.ref = e,
            this.propertyName = t
        }
    }
    class M {
        constructor(e) {
            let t;
            for (this.text = e,
            this.pos = 0,
            this.char = this.text[this.pos],
            this.tokens = []; (t = this.getNextToken()) && t !== w.EOF; )
                this.tokens.push(t);
            this.tokens.push(t)
        }
        advance() {
            this.char = this.text[++this.pos]
        }
        skipWhiteSpace() {
            for (; null != this.char && v.WHITE_SPACE.test(this.char); )
                this.advance()
        }
        name() {
            let e = "";
            for (; null != this.char && v.ALPHA.test(this.char); )
                e += this.char,
                this.advance();
            return new w(l,e)
        }
        number() {
            let e = "";
            for (; null != this.char && v.DIGIT.test(this.char); )
                e += this.char,
                this.advance();
            if (null != this.char && "." === this.char) {
                for (e += this.char,
                this.advance(); null != this.char && v.DIGIT.test(this.char); )
                    e += this.char,
                    this.advance();
                return new w(g,parseFloat(e))
            }
            return new w(_,parseInt(e))
        }
        getNextToken() {
            for (; null != this.char; )
                if (v.WHITE_SPACE.test(this.char))
                    this.skipWhiteSpace();
                else {
                    if (v.DIGIT.test(this.char))
                        return this.number();
                    if ("," === this.char)
                        return this.advance(),
                        new w(y,",");
                    if (v.OPERATOR.test(this.char)) {
                        let e = ""
                          , t = this.char;
                        switch (t) {
                        case "+":
                            e = d;
                            break;
                        case "-":
                            e = m;
                            break;
                        case "*":
                            e = p;
                            break;
                        case "/":
                            e = f
                        }
                        return this.advance(),
                        new w(e,t)
                    }
                    if (v.PAREN.test(this.char)) {
                        let e = ""
                          , t = this.char;
                        switch (t) {
                        case "(":
                            e = c;
                            break;
                        case ")":
                            e = u
                        }
                        return this.advance(),
                        new w(e,t)
                    }
                    if (v.ALPHA.test(this.char))
                        return this.name();
                    this.error("Unexpected character " + this.char)
                }
            return w.EOF
        }
    }
    class D {
        constructor(e) {
            this.lexer = e,
            this.pos = 0
        }
        get currentToken() {
            return this.lexer.tokens[this.pos]
        }
        error(e, t="") {
            let i = this.lexer.text.slice(this.pos - 3, this.pos + 3)
              , s = new Error(`${e} in "${this.lexer.text}" near "${i}". ${t} `);
            throw console.error(s.message, o ? o.keyframe || o.target : ""),
            s
        }
        consume(e) {
            let t = this.currentToken;
            return t.type === e ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${e}`),
            t
        }
        consumeList(e) {
            e.includes(this.currentToken) ? this.pos += 1 : this.error(`Invalid token ${this.currentToken.value}, expected ${tokenType}`)
        }
        expr() {
            let e = this.term();
            for (; this.currentToken.type === d || this.currentToken.type === m; ) {
                const t = this.currentToken;
                switch (t.value) {
                case "+":
                    this.consume(d);
                    break;
                case "-":
                    this.consume(m)
                }
                e = new x(e,t,this.term())
            }
            return e
        }
        term() {
            let e = this.factor();
            for (; this.currentToken.type === p || this.currentToken.type === f; ) {
                const t = this.currentToken;
                switch (t.value) {
                case "*":
                    this.consume(p);
                    break;
                case "/":
                    this.consume(f)
                }
                e = new x(e,t,this.factor())
            }
            return e
        }
        factor() {
            if (this.currentToken.type === d)
                return new A(this.consume(d),this.factor());
            if (this.currentToken.type === m)
                return new A(this.consume(m),this.factor());
            if (this.currentToken.type === _ || this.currentToken.type === g) {
                let e = new I(this.currentToken);
                if (this.pos += 1,
                v.OPERATOR.test(this.currentToken.value) || this.currentToken.type === u || this.currentToken.type === y || this.currentToken.type === E)
                    return e;
                if (this.currentToken.type === l && this.currentToken.value === h)
                    return this.consume(l),
                    new C(e,this.anchorIndex(),this.unit(v.ANY_UNIT));
                if (this.currentToken.type === l)
                    return "%a" === this.currentToken.value && this.error("%a is invalid, try removing the %"),
                    new C(e,null,this.unit());
                this.error("Expected a scaling unit type", "Such as 'h' / 'w'")
            } else {
                if (v.OBJECT_UNIT.test(this.currentToken.value))
                    return new C(new I(w.ONE),null,this.unit());
                if (this.currentToken.value === h) {
                    this.consume(l);
                    const e = this.anchorIndex();
                    if (v.OBJECT_UNIT.test(this.currentToken.value))
                        return new C(new I(w.ONE),e,this.unit())
                } else if (this.currentToken.type === l) {
                    if ("css" === this.currentToken.value || "prop" === this.currentToken.value) {
                        const e = "css" === this.currentToken.value ? P : O;
                        this.consume(l),
                        this.consume(c);
                        const t = this.propertyName();
                        let i = null;
                        return this.currentToken.type === y && (this.consume(y),
                        this.consume(l),
                        i = this.anchorIndex()),
                        this.consume(u),
                        new e(i,t)
                    }
                    if (v.MATH_FUNCTION.test(this.currentToken.value)) {
                        const e = this.currentToken.value.toLowerCase();
                        if ("number" == typeof a[e])
                            return this.consume(l),
                            new I(new w(l,a[e]));
                        const t = w[e] || new w(e,e)
                          , i = [];
                        this.consume(l),
                        this.consume(c);
                        let s = null;
                        do {
                            this.currentToken.value === y && this.consume(y),
                            s = this.expr(),
                            i.push(s)
                        } while (this.currentToken.value === y);
                        return this.consume(u),
                        new S(t,i)
                    }
                } else if (this.currentToken.type === c) {
                    this.consume(c);
                    let e = this.expr();
                    return this.consume(u),
                    e
                }
            }
            this.error(`Unexpected token ${this.currentToken.value}`)
        }
        propertyName() {
            let e = "";
            for (; this.currentToken.type === l || this.currentToken.type === m; )
                e += this.currentToken.value,
                this.pos += 1;
            return e
        }
        unit(e=v.ANY_UNIT) {
            const t = this.currentToken;
            if (t.type === l && e.test(t.value))
                return this.consume(l),
                new w(l,t.value = t.value.replace(/%(h|w)/, "$1").replace("%", "h"));
            this.error("Expected unit type")
        }
        anchorIndex() {
            const e = this.currentToken;
            if (e.type === _)
                return this.consume(_),
                new I(e);
            this.error("Invalid anchor reference", ". Should be something like a0, a1, a2")
        }
        parse() {
            const e = this.expr();
            return this.currentToken !== w.EOF && this.error(`Unexpected token ${this.currentToken.value}`),
            e
        }
    }
    class R {
        constructor(e) {
            this.parser = e,
            this.root = e.parse()
        }
        visit(e) {
            let t = this[e.type];
            if (!t)
                throw new Error(`No visit method named, ${t}`);
            return t.call(this, e)
        }
        BinOp(e) {
            switch (e.op.type) {
            case d:
                return this.visit(e.left) + this.visit(e.right);
            case m:
                return this.visit(e.left) - this.visit(e.right);
            case p:
                return this.visit(e.left) * this.visit(e.right);
            case f:
                return this.visit(e.left) / this.visit(e.right)
            }
        }
        RefValue(e) {
            let t = this.unwrapReference(e)
              , i = e.unit.value
              , r = e.num.value;
            const n = o.metrics.get(t);
            switch (i) {
            case "h":
                return .01 * r * n.height;
            case "t":
                return .01 * r * n.top;
            case "vh":
                return .01 * r * s.pageMetrics.windowHeight;
            case "vw":
                return .01 * r * s.pageMetrics.windowWidth;
            case "px":
                return r;
            case "w":
                return .01 * r * n.width;
            case "b":
                return .01 * r * n.bottom;
            case "l":
                return .01 * r * n.left;
            case "r":
                return .01 * r * n.right
            }
        }
        PropValue(e) {
            return (null === e.ref ? o.target : o.anchors[e.ref.value])[e.propertyName]
        }
        CSSValue(e) {
            let t = this.unwrapReference(e);
            const i = getComputedStyle(t).getPropertyValue(e.propertyName);
            return "" === i ? 0 : R.Parse(i).execute(o)
        }
        Num(e) {
            return e.value
        }
        UnaryOp(e) {
            return e.op.type === d ? +this.visit(e.expr) : e.op.type === m ? -this.visit(e.expr) : void 0
        }
        MathOp(e) {
            let t = e.list.map((e=>this.visit(e)));
            return a[e.op.value].apply(null, t)
        }
        unwrapReference(e) {
            return null === e.ref ? o.target : (e.ref.value >= o.anchors.length && console.error(`Not enough anchors supplied for expression ${this.parser.lexer.text}`, o.target),
            o.anchors[e.ref.value])
        }
        execute(e) {
            return o = e,
            this.visit(this.root)
        }
        static Parse(e) {
            return n[e] || (n[e] = new R(new D(new M(e))))
        }
    }
    R.programs = n,
    e.exports = R
}
, function(e, t, i) {
    "use strict";
    const s = i(8)
      , r = (i(17),
    i(39))
      , n = i(157)
      , a = i(38)
      , o = i(71)
      , h = i(2).EventEmitterMicro
      , l = i(58)
      , c = {
        update: i(9),
        external: i(22),
        draw: i(4)
    }
      , u = Math.PI / 180
      , d = ["x", "y", "z", "scale", "scaleX", "scaleY", "rotation", "rotationX", "rotationY", "rotationZ"]
      , m = {
        create: i(60),
        rotateX: i(61),
        rotateY: i(62),
        rotateZ: i(63),
        scale: i(64)
    };
    e.exports = class extends h {
        constructor(e, t) {
            super(),
            this._events.draw = [],
            this.uuid = o(),
            this.group = e,
            this.element = t,
            this._ownerIsElement = this.element instanceof Element,
            this._ownerIsElement ? this.friendlyName = this.element.tagName + "." + Array.from(this.element.classList).join(".") : this.friendlyName = this.element.friendlyName || this.uuid,
            this.element._animInfo = this.element._animInfo || new s.AnimInfo(e,this),
            this.element._animInfo.controller = this,
            this.element._animInfo.group = this.group,
            this.element._animInfo.controllers.push(this),
            this.tweenProps = this.element._animInfo.tweenProps,
            this.eventObject = new s.EventObject(this),
            this.needsStyleUpdate = !1,
            this.needsClassUpdate = !1,
            this.elementMetrics = this.group.metrics.add(this.element),
            this.attributes = [],
            this.keyframes = {},
            this._allKeyframes = [],
            this._activeKeyframes = [],
            this.keyframesRequiringDispatch = [],
            this.updateCachedValuesFromElement(),
            this.boundsMin = 0,
            this.boundsMax = 0,
            this.mat2d = new Float32Array(6),
            this.mat4 = m.create(),
            this.needsWrite = !0,
            this.onDOMWriteImp = this._ownerIsElement ? this.onDOMWriteForElement : this.onDOMWriteForObject
        }
        destroy() {
            if (this.element._animInfo) {
                this.element._animInfo.controller === this && (this.element._animInfo.controller = null);
                let e = this.element._animInfo.controllers.indexOf(this);
                -1 !== e && this.element._animInfo.controllers.splice(e, 1),
                0 === this.element._animInfo.controllers.length ? this.element._animInfo = null : (this.element._animInfo.controller = this.element._animInfo.controllers[this.element._animInfo.controllers.length - 1],
                this.element._animInfo.group = this.element._animInfo.controller.group)
            }
            this.eventObject.controller = null,
            this.eventObject.element = null,
            this.eventObject.keyframe = null,
            this.eventObject.tweenProps = null,
            this.eventObject = null,
            this.elementMetrics = null,
            this.group = null,
            this.keyframesRequiringDispatch = null;
            for (let e = 0; e < this._allKeyframes.length; e++)
                this._allKeyframes[e].destroy();
            this._allKeyframes = null,
            this._activeKeyframes = null,
            this.attributes = null,
            this.keyframes = null,
            this.element = null,
            this.tweenProps = null,
            super.destroy()
        }
        remove() {
            return this.group.removeKeyframeController(this)
        }
        updateCachedValuesFromElement() {
            if (!this._ownerIsElement)
                return;
            const e = getComputedStyle(this.element);
            let t = l(this.element, !0)
              , i = s.KeyframeDefaults.epsilon
              , r = !1;
            ["x", "y", "z"].forEach(((e,n)=>{
                this.tweenProps[e] = new s.TargetValue(t.translation[n],i,r)
            }
            )),
            this.tweenProps.rotation = new s.TargetValue(t.eulerRotation[2],i,r),
            ["rotationX", "rotationY", "rotationZ"].forEach(((e,n)=>{
                this.tweenProps[e] = new s.TargetValue(t.eulerRotation[n],i,r)
            }
            )),
            this.tweenProps.scaleZ = new s.TargetValue(t.scale[0],i,r),
            ["scaleX", "scaleY", "scale"].forEach(((e,n)=>{
                this.tweenProps[e] = new s.TargetValue(t.scale[n],i,r)
            }
            )),
            this.tweenProps.opacity = new s.TargetValue(parseFloat(e.opacity),i,r)
        }
        addKeyframe(e) {
            let t = n(e);
            if (!t)
                throw new Error("AnimSystem Cannot create keyframe for from options `" + e + "`");
            let i = new t(this,e);
            return i.parseOptions(e),
            i.id = this._allKeyframes.length,
            this._allKeyframes.push(i),
            i
        }
        needsUpdate() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e]
                  , i = this.tweenProps[t];
                if (Math.abs(i.current - i.target) > i.epsilon)
                    return !0
            }
            return !1
        }
        updateLocalProgress(e) {
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.attributes[t]
                  , s = this.keyframes[this.attributes[t]];
                if (1 === s.length) {
                    s[0].updateLocalProgress(e);
                    continue
                }
                let r = this.getNearestKeyframeForAttribute(i, e);
                r && r.updateLocalProgress(e)
            }
        }
        reconcile() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e]
                  , i = this.getNearestKeyframeForAttribute(t, this.group.position.local);
                i.updateLocalProgress(this.group.position.local),
                i.snapAtCreation && i.reconcile(t)
            }
        }
        determineActiveKeyframes(e) {
            e = e || a(Array.from(document.documentElement.classList));
            let t = this._activeKeyframes
              , i = this.attributes
              , s = {};
            this._activeKeyframes = [],
            this.attributes = [],
            this.keyframes = {};
            for (let t = 0; t < this._allKeyframes.length; t++) {
                let i = this._allKeyframes[t];
                if (i.markedForRemoval || i.hidden || !i.setEnabled(e))
                    for (let e in i.animValues)
                        this.tweenProps[e].isActive = i.preserveState,
                        i.preserveState && (s[e] = !0);
                else {
                    this._activeKeyframes.push(i);
                    for (let e in i.animValues)
                        this.keyframes[e] = this.keyframes[e] || [],
                        this.keyframes[e].push(i),
                        -1 === this.attributes.indexOf(e) && (s[e] = !0,
                        this.attributes.push(e),
                        this.tweenProps[e].isActive = !0)
                }
            }
            this.attributes.forEach((e=>this.tweenProps[e].isActive = !0));
            let n = t.filter((e=>-1 === this._activeKeyframes.indexOf(e)));
            if (0 === n.length)
                return;
            let o = i.filter((e=>-1 === this.attributes.indexOf(e) && !s.hasOwnProperty(e)));
            if (0 !== o.length)
                if (this.needsWrite = !0,
                this._ownerIsElement)
                    c.external((()=>{
                        0 === Object.keys(s).filter((e=>d.includes(e))).length && this.element.style.removeProperty("transform");
                        for (let e = 0, t = o.length; e < t; ++e) {
                            let t = o[e]
                              , i = this.tweenProps[t];
                            i.current = i.target,
                            i.isActive = !1,
                            "opacity" === t && this.element.style.removeProperty("opacity")
                        }
                        for (let e = 0, t = n.length; e < t; ++e) {
                            let t = n[e];
                            t instanceof r && !t.preserveState && t._unapply()
                        }
                    }
                    ), !0);
                else
                    for (let e = 0, t = o.length; e < t; ++e) {
                        let t = this.tweenProps[o[e]];
                        t.current = t.target,
                        t.isActive = !1
                    }
        }
        onDOMRead(e) {
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.attributes[t];
                this.tweenProps[i].previousValue = this.tweenProps[i].current;
                let s = this.getNearestKeyframeForAttribute(i, e);
                s && s.onDOMRead(i),
                this.tweenProps[i].previousValue !== this.tweenProps[i].current && (this.needsWrite = !0)
            }
        }
        onDOMWrite() {
            (this.needsWrite || this.needsClassUpdate || this.needsStyleUpdate) && (this.needsWrite = !1,
            this.onDOMWriteImp(),
            this.handleEventDispatch())
        }
        onDOMWriteForObject() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e];
                this.element[t] = this.tweenProps[t].current
            }
        }
        onDOMWriteForElement(e=this.element.style) {
            let t = this.tweenProps;
            if (t.z.isActive || t.rotationX.isActive || t.rotationY.isActive) {
                const i = this.mat4;
                if (i[0] = 1,
                i[1] = 0,
                i[2] = 0,
                i[3] = 0,
                i[4] = 0,
                i[5] = 1,
                i[6] = 0,
                i[7] = 0,
                i[8] = 0,
                i[9] = 0,
                i[10] = 1,
                i[11] = 0,
                i[12] = 0,
                i[13] = 0,
                i[14] = 0,
                i[15] = 1,
                t.x.isActive || t.y.isActive || t.z.isActive) {
                    const e = t.x.current
                      , s = t.y.current
                      , r = t.z.current;
                    i[12] = i[0] * e + i[4] * s + i[8] * r + i[12],
                    i[13] = i[1] * e + i[5] * s + i[9] * r + i[13],
                    i[14] = i[2] * e + i[6] * s + i[10] * r + i[14],
                    i[15] = i[3] * e + i[7] * s + i[11] * r + i[15]
                }
                if (t.rotation.isActive || t.rotationZ.isActive) {
                    const e = (t.rotation.current || t.rotationZ.current) * u;
                    m.rotateZ(i, i, e)
                }
                if (t.rotationX.isActive) {
                    const e = t.rotationX.current * u;
                    m.rotateX(i, i, e)
                }
                if (t.rotationY.isActive) {
                    const e = t.rotationY.current * u;
                    m.rotateY(i, i, e)
                }
                (t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) && m.scale(i, i, [t.scale.current, t.scale.current, 1]),
                e.transform = "matrix3d(" + i[0] + "," + i[1] + "," + i[2] + "," + i[3] + "," + i[4] + "," + i[5] + "," + i[6] + "," + i[7] + "," + i[8] + "," + i[9] + "," + i[10] + "," + i[11] + "," + i[12] + "," + i[13] + "," + i[14] + "," + i[15] + ")"
            } else if (t.x.isActive || t.y.isActive || t.rotation.isActive || t.rotationZ.isActive || t.scale.isActive || t.scaleX.isActive || t.scaleY.isActive) {
                const i = this.mat2d;
                if (i[0] = 1,
                i[1] = 0,
                i[2] = 0,
                i[3] = 1,
                i[4] = 0,
                i[5] = 0,
                t.x.isActive || t.y.isActive) {
                    const e = t.x.current
                      , s = t.y.current
                      , r = i[0]
                      , n = i[1]
                      , a = i[2]
                      , o = i[3]
                      , h = i[4]
                      , l = i[5];
                    i[0] = r,
                    i[1] = n,
                    i[2] = a,
                    i[3] = o,
                    i[4] = r * e + a * s + h,
                    i[5] = n * e + o * s + l
                }
                if (t.rotation.isActive || t.rotationZ.isActive) {
                    const e = (t.rotation.current || t.rotationZ.current) * u
                      , s = i[0]
                      , r = i[1]
                      , n = i[2]
                      , a = i[3]
                      , o = i[4]
                      , h = i[5]
                      , l = Math.sin(e)
                      , c = Math.cos(e);
                    i[0] = s * c + n * l,
                    i[1] = r * c + a * l,
                    i[2] = s * -l + n * c,
                    i[3] = r * -l + a * c,
                    i[4] = o,
                    i[5] = h
                }
                t.scale.isActive ? (i[0] = i[0] * t.scale.current,
                i[1] = i[1] * t.scale.current,
                i[2] = i[2] * t.scale.current,
                i[3] = i[3] * t.scale.current,
                i[4] = i[4],
                i[5] = i[5]) : (t.scaleX.isActive || t.scaleY.isActive) && (i[0] = i[0] * t.scaleX.current,
                i[1] = i[1] * t.scaleX.current,
                i[2] = i[2] * t.scaleY.current,
                i[3] = i[3] * t.scaleY.current,
                i[4] = i[4],
                i[5] = i[5]),
                e.transform = "matrix(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + i[3] + ", " + i[4] + ", " + i[5] + ")"
            }
            if (t.opacity.isActive && (e.opacity = t.opacity.current),
            this.needsStyleUpdate) {
                for (let e in this.tweenProps.targetStyles)
                    null !== this.tweenProps.targetStyles[e] && (this.element.style[e] = this.tweenProps.targetStyles[e]),
                    this.tweenProps.targetStyles[e] = null;
                this.needsStyleUpdate = !1
            }
            this.needsClassUpdate && (this.tweenProps.targetClasses.add.length > 0 && this.element.classList.add.apply(this.element.classList, this.tweenProps.targetClasses.add),
            this.tweenProps.targetClasses.remove.length > 0 && this.element.classList.remove.apply(this.element.classList, this.tweenProps.targetClasses.remove),
            this.tweenProps.targetClasses.add.length = 0,
            this.tweenProps.targetClasses.remove.length = 0,
            this.needsClassUpdate = !1)
        }
        handleEventDispatch() {
            if (0 !== this.keyframesRequiringDispatch.length) {
                for (let e = 0, t = this.keyframesRequiringDispatch.length; e < t; e++) {
                    let t = this.keyframesRequiringDispatch[e];
                    t.needsEventDispatch = !1,
                    this.eventObject.keyframe = t,
                    this.eventObject.pageMetrics = s.pageMetrics,
                    this.eventObject.event = t.event,
                    this.trigger(t.event, this.eventObject)
                }
                this.keyframesRequiringDispatch.length = 0
            }
            if (0 !== this._events.draw.length) {
                this.eventObject.keyframe = null,
                this.eventObject.event = "draw";
                for (var e = this._events.draw.length - 1; e >= 0; e--)
                    this._events.draw[e](this.eventObject)
            }
        }
        updateAnimationConstraints() {
            for (let e = 0, t = this._activeKeyframes.length; e < t; e++)
                this._activeKeyframes[e].evaluateConstraints();
            this.attributes.forEach((e=>{
                1 !== this.keyframes[e].length && this.keyframes[e].sort(s.KeyframeComparison)
            }
            )),
            this.updateDeferredPropertyValues()
        }
        refreshMetrics() {
            let e = new Set([this.element]);
            this._allKeyframes.forEach((t=>t.anchors.forEach((t=>e.add(t))))),
            this.group.metrics.refreshCollection(e),
            this.group.keyframesDirty = !0
        }
        updateDeferredPropertyValues() {
            for (let e = 0, t = this.attributes.length; e < t; e++) {
                let t = this.attributes[e]
                  , i = this.keyframes[t];
                if (!(i[0].keyframeType > s.KeyframeTypes.InterpolationForward))
                    for (let e = 0, s = i.length; e < s; e++) {
                        let r = i[e];
                        if (null === r.jsonProps[t][0]) {
                            if (0 === e) {
                                r.animValues[t][0] = this.tweenProps[t].initialValue;
                                continue
                            }
                            r.animValues[t][0] = i[e - 1].animValues[t][1]
                        }
                        if (null === r.jsonProps[t][1]) {
                            if (e === s - 1)
                                throw new RangeError(`AnimSystem - last keyframe cannot defer it's end value! ${t}:[${r.jsonProps[t][0]},null]`);
                            r.animValues[t][1] = i[e + 1].animValues[t][0]
                        }
                    }
            }
        }
        getBounds(e) {
            this.boundsMin = Number.MAX_VALUE,
            this.boundsMax = -Number.MAX_VALUE;
            for (let t = 0, i = this.attributes.length; t < i; t++) {
                let i = this.keyframes[this.attributes[t]];
                for (let t = 0; t < i.length; t++) {
                    let s = i[t];
                    this.boundsMin = Math.min(s.start, this.boundsMin),
                    this.boundsMax = Math.max(s.end, this.boundsMax),
                    e.min = Math.min(s.start, e.min),
                    e.max = Math.max(s.end, e.max)
                }
            }
        }
        getNearestKeyframeForAttribute(e, t) {
            t = void 0 !== t ? t : this.group.position.local;
            let i = null
              , s = Number.POSITIVE_INFINITY
              , r = this.keyframes[e];
            if (void 0 === r)
                return null;
            let n = r.length;
            if (0 === n)
                return null;
            if (1 === n)
                return r[0];
            for (let e = 0; e < n; e++) {
                let n = r[e];
                if (n.isInRange(t)) {
                    i = n;
                    break
                }
                let a = Math.min(Math.abs(t - n.start), Math.abs(t - n.end));
                a < s && (s = a,
                i = n)
            }
            return i
        }
        getAllKeyframesForAttribute(e) {
            return this.keyframes[e]
        }
        updateKeyframe(e, t) {
            e.parseOptions(t),
            e.evaluateConstraints(),
            this.group.keyframesDirty = !0,
            c.update((()=>{
                this.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e),
                this.group.trigger(s.EVENTS.ON_KEYFRAME_UPDATED, e)
            }
            ), !0)
        }
        removeKeyframe(e) {
            return e.controller !== this ? Promise.resolve(null) : (e.markedForRemoval = !0,
            this.group.keyframesDirty = !0,
            new Promise((t=>{
                this.group.rafEmitter.executor.eventEmitter.once("before:draw", (()=>{
                    t(e),
                    e.destroy();
                    let i = this._allKeyframes.indexOf(e);
                    -1 !== i && this._allKeyframes.splice(i, 1)
                }
                ))
            }
            )))
        }
        updateAnimation(e, t) {
            return this.group.gui && console.warn("KeyframeController.updateAnimation(keyframe,props) has been deprecated. Please use updateKeyframe(keyframe,props)"),
            this.updateKeyframe(e, t)
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(8)
      , r = i(17)
      , n = i(72)
      , a = i(39)
      , o = function(e) {
        for (let t in e) {
            let i = e[t];
            if (-1 === s.KeyframeJSONReservedWords.indexOf(t) && Array.isArray(i))
                return !0
        }
        return !1
    };
    e.exports = e=>{
        if (void 0 !== e.cssClass || void 0 !== e.style) {
            if (o(e))
                throw "CSS Keyframes cannot tween values, please use multiple keyframes instead";
            return a
        }
        if (o(e))
            return r;
        if (e.event)
            return n;
        throw delete e.anchors,
        `Could not determine tween type based on ${JSON.stringify(e)}`
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(73)
      , r = i(7);
    let n = 0;
    const a = {
        create: i(11)
    };
    class o extends s {
        constructor(e, t) {
            e || ((e = document.createElement("div")).className = "TimeGroup-" + n++),
            super(e, t),
            window.timeGroup = window.timeGroup || this,
            this.name = this.name || e.getAttribute("data-anim-time-group"),
            this._isPaused = !0,
            this._repeats = 0,
            this._isReversed = !1,
            this._timeScale = 1
        }
        finalizeInit() {
            if (!this.anim)
                throw "TimeGroup not instantiated correctly. Please use `AnimSystem.createTimeGroup(el)`";
            this.defaultEase = 1,
            this.onPlayTimeUpdate = this.onPlayTimeUpdate.bind(this),
            super.finalizeInit()
        }
        progress(e) {
            if (void 0 === e)
                return 0 === this.boundsMax ? 0 : this.position.local / this.boundsMax;
            let t = e * this.boundsMax;
            this.timelineUpdateRequired = !0,
            this._onScroll(t)
        }
        time(e) {
            if (void 0 === e)
                return this.position.local;
            e = r.clamp(e, this.boundsMin, this.boundsMax),
            this.timelineUpdateRequired = !0,
            this._onScroll(e)
        }
        play(e) {
            this.reversed(!1),
            this.isEnabled = !0,
            this._isPaused = !1,
            this.time(e),
            this._playheadEmitter.run()
        }
        reverse(e) {
            this.reversed(!0),
            this.isEnabled = !0,
            this._isPaused = !1,
            this.time(e),
            this._playheadEmitter.run()
        }
        reversed(e) {
            if (void 0 === e)
                return this._isReversed;
            this._isReversed = e
        }
        restart() {
            this._isReversed ? (this.progress(1),
            this.reverse(this.time())) : (this.progress(0),
            this.play(this.time()))
        }
        pause(e) {
            this.time(e),
            this._isPaused = !0
        }
        paused(e) {
            return void 0 === e ? this._isPaused : (this._isPaused = e,
            this._isPaused || this.play(),
            this)
        }
        onPlayTimeUpdate(e) {
            if (this._isPaused)
                return;
            let t = r.clamp(e.delta / 1e3, 0, .5);
            this._isReversed && (t = -t);
            let i = this.time() + t * this._timeScale;
            if (this._repeats === o.REPEAT_FOREVER || this._repeats > 0) {
                let e = !1;
                !this._isReversed && i > this.boundsMax ? (i -= this.boundsMax,
                e = !0) : this._isReversed && i < 0 && (i = this.boundsMax + i,
                e = !0),
                e && (this._repeats = this._repeats === o.REPEAT_FOREVER ? o.REPEAT_FOREVER : this._repeats - 1)
            }
            this.time(i);
            let s = !this._isReversed && this.position.local !== this.duration
              , n = this._isReversed && 0 !== this.position.local;
            s || n ? this._playheadEmitter.run() : this.paused(!0)
        }
        updateProgress(e) {
            this.hasDuration() ? (this.position.localUnclamped = e,
            this.position.local = r.clamp(this.position.localUnclamped, this.boundsMin, this.boundsMax)) : this.position.local = this.position.localUnclamped = 0
        }
        updateBounds() {
            if (0 === this.keyframeControllers.length)
                return this.boundsMin = 0,
                void (this.boundsMax = 0);
            let e = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY
            };
            for (let t = 0, i = this.keyframeControllers.length; t < i; t++)
                this.keyframeControllers[t].getBounds(e);
            this.boundsMin = 0,
            this.boundsMax = e.max,
            this.viewableRange.a = this.viewableRange.b = 0,
            this.viewableRange.c = this.viewableRange.d = this.boundsMax,
            this.timelineUpdateRequired = !0
        }
        setupRAFEmitter(e) {
            this._playheadEmitter = new a.create,
            this._playheadEmitter.on("update", this.onPlayTimeUpdate),
            super.setupRAFEmitter(e)
        }
        get duration() {
            return this.keyframesDirty && this.onKeyframesDirty({
                silent: !0
            }),
            this.boundsMax
        }
        timeScale(e) {
            return void 0 === e ? this._timeScale : (this._timeScale = e,
            this)
        }
        repeats(e) {
            if (void 0 === e)
                return this._repeats;
            this._repeats = e
        }
        getPosition() {
            return this.position.local
        }
        convertScrollPositionToTValue(e) {
            return e
        }
        convertTValueToScrollPosition(e) {
            return e
        }
        hasDuration() {
            return this.duration > 0
        }
        destroy() {
            this._playheadEmitter.destroy(),
            this._playheadEmitter = null,
            super.destroy()
        }
    }
    o.REPEAT_FOREVER = -1,
    e.exports = o
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        version: "3.2.1",
        major: "3.x",
        majorMinor: "3.2"
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(161)
      , r = document.getElementById("chapternav");
    r && (e.exports = new s(r))
}
, function(e, t, i) {
    "use strict";
    const s = i(162).ScrollContainer
      , r = {
        componentName: "chapternav",
        scrollEasing: "ease-out",
        scrollDuration: .4,
        usePaddles: !0
    };
    e.exports = class {
        constructor(e, t) {
            return this.el = e,
            t = Object.assign({}, r, t),
            this.options = {
                componentName: t.componentName,
                itemsSelector: t.itemsSelector || `.${t.componentName}-items`,
                itemSelector: t.itemSelector || `.${t.componentName}-link`,
                itemLabelSelector: t.itemLabelSelector || `.${t.componentName}-label`,
                itemNewSelector: t.itemNewSelector || `.${t.componentName}-new`,
                leftPaddleSelector: t.leftPaddleSelector || `.${t.componentName}-paddle-left`,
                rightPaddleSelector: t.rightPaddleSelector || `.${t.componentName}-paddle-right`,
                tallClass: t.tallClass || `${t.componentName}-tall`,
                scrollEasing: t.scrollEasing,
                scrollDuration: t.scrollDuration,
                usePaddles: t.usePaddles
            },
            this.setChapternavTall(this.isChapternavTall()),
            new s(this.el,this.options)
        }
        isChapternavTall() {
            const e = this.el.querySelectorAll(this.options.itemSelector);
            let t = !1;
            return e.forEach((e=>{
                const i = e.querySelector(this.options.itemLabelSelector)
                  , s = !!e.querySelector(this.options.itemNewSelector)
                  , r = i.getElementsByTagName("BR").length > 0;
                s && r && (t = !0)
            }
            )),
            t
        }
        setChapternavTall(e) {
            !0 === e ? this.el.classList.add(this.options.tallClass) : this.el.classList.remove(this.options.tallClass)
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(163);
    e.exports = {
        ScrollContainer: s
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(75)
      , r = i(164)
      , n = i(76)
      , a = i(70)
      , o = i(178);
    function h(e, t) {
        this.el = e,
        this._options = t || {},
        this._wrapper = this.el.querySelector(this._options.itemsSelector),
        this._items = Array.prototype.slice.call(this.el.querySelectorAll(this._options.itemSelector)),
        this.lastCenteredItem = this._items[0],
        this._isRightToLeft = "rtl" === window.getComputedStyle(e).direction,
        this._inlineStart = this._isRightToLeft ? "right" : "left",
        this._inlineEnd = this._isRightToLeft ? "left" : "right",
        this._scrollType = this._scrollDirection(),
        this._usePaddles = void 0 === this._options.usePaddles || this._options.usePaddles,
        this.centerItem = this.centerItem.bind(this),
        this._init()
    }
    var l = h.prototype;
    l._init = function() {
        this._usePaddles && this._setupPaddles()
    }
    ,
    l.centerItem = function(e, t) {
        this.lastCenteredItem = e;
        var i = .5 * s(this.el).width
          , n = r(e).left + .5 * s(e).width
          , a = Math.round(n - i);
        t ? this.el.scrollLeft = this._setNormalizedScroll(a) : (this._destroyCurrentClip(),
        this._isRightToLeft && (a *= -1),
        this._smoothScrollTo(a))
    }
    ,
    l._getPaddles = function() {
        var e = this._isRightToLeft ? this._options.rightPaddleSelector : this._options.leftPaddleSelector
          , t = this._isRightToLeft ? this._options.leftPaddleSelector : this._options.rightPaddleSelector;
        return {
            start: this.el.querySelector(e),
            end: this.el.querySelector(t)
        }
    }
    ,
    l._setupPaddles = function() {
        this.el.classList.add("with-paddles"),
        this._paddles = this._getPaddles(),
        this._children = this._wrapper.children,
        this._childCount = this._wrapper.children.length,
        this._onScrollClipComplete = this._onScrollClipComplete.bind(this),
        this._onPaddleStartClick = this._onPaddleStartClick.bind(this),
        this._paddles.start.addEventListener("click", this._onPaddleStartClick),
        this._onPaddleEndClick = this._onPaddleEndClick.bind(this),
        this._paddles.end.addEventListener("click", this._onPaddleEndClick),
        this._onScroll = this._onScroll.bind(this),
        this._wrapper.addEventListener("scroll", this._onScroll),
        this._updateElementMetrics = this._updateElementMetrics.bind(this),
        window.addEventListener("resize", this._updateElementMetrics),
        window.addEventListener("orientationchange", this._updateElementMetrics),
        this._updateElementMetrics()
    }
    ,
    l._updateElementMetrics = function() {
        this._wrapperWidth = this._wrapper.offsetWidth,
        this._contentWidth = this._wrapper.scrollWidth,
        this._contentWidth <= this._wrapperWidth && (this._destroyCurrentClip(),
        0 !== this._wrapper.scrollLeft && (this._wrapper.scrollLeft = 0)),
        this._scrollStart = this._wrapper.scrollLeft,
        this._usePaddles && (this._paddleWidth = this._paddles.start.offsetWidth,
        this._updatePaddleDisplay())
    }
    ,
    l._onScroll = function() {
        this._lockPaddles || (this._scrollStart = this._wrapper.scrollLeft,
        this._updatePaddleDisplay())
    }
    ,
    l._updatePaddleDisplay = function() {
        var e = this._getNormalizedScroll(this._scrollStart) + this._wrapperWidth;
        this._paddles.start.disabled = this._getNormalizedScroll(this._scrollStart) <= 1,
        this._paddles.end.disabled = e >= this._contentWidth - 1
    }
    ,
    l._onPaddleStartClick = function(e) {
        this._smoothScrollTo(this._getPaddleStartScrollDestination())
    }
    ,
    l._getPaddleStartScrollDestination = function() {
        var e, t, i = this._getNormalizedScroll(this._scrollStart);
        for (t = this._childCount - 1; t > 0; t--)
            if ((e = this._normalizePosition(r(this._children[t])))[this._inlineStart] < i)
                return e[this._inlineEnd] - this._wrapperWidth;
        return 0
    }
    ,
    l._onPaddleEndClick = function(e) {
        this._smoothScrollTo(this._getPaddleEndScrollDestination())
    }
    ,
    l._getPaddleEndScrollDestination = function() {
        var e, t, i = this._getNormalizedScroll(this._scrollStart) + this._wrapperWidth;
        for (t = 0; t < this._childCount; t++)
            if ((e = this._normalizePosition(r(this._children[t])))[this._inlineEnd] > i)
                return e[this._inlineStart];
        return this._contentWidth
    }
    ,
    l._getBoundedScrollX = function(e) {
        var t = this._contentWidth - this._wrapperWidth;
        return Math.max(Math.min(e, t), 0)
    }
    ,
    l._smoothScrollTo = function(e) {
        if (this._updateElementMetrics(),
        !this._lockPaddles && e !== this._scrollStart) {
            var t = this._wrapper.scrollLeft
              , i = {
                ease: a.fromCSSString(o[this._options.scrollEasing]),
                draw: i=>{
                    this._wrapper.scrollLeft = ((e,t,i)=>e * (i - t) + t)(i, t, this._setNormalizedScroll(e))
                }
            };
            this._usePaddles && (this._lockPaddles = !0),
            this._clip = new n(this._options.scrollDuration,i),
            this._clip.play().then((()=>{
                this._destroyCurrentClip(),
                this._clip = null,
                this._usePaddles && this._onScrollClipComplete()
            }
            ))
        }
    }
    ,
    l._onScrollClipComplete = function() {
        this._updatePaddleDisplay(),
        this._lockPaddles = !1,
        this._onScroll()
    }
    ,
    l._scrollDirection = function() {
        var e = "reverse"
          , t = document.createElement("div");
        return t.style.cssText = "width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;",
        t.style.direction = "rtl",
        t.innerHTML = "test",
        document.body.appendChild(t),
        t.scrollLeft > 0 ? e = "default" : (t.scrollLeft = 1,
        0 === t.scrollLeft && (e = "negative")),
        document.body.removeChild(t),
        e
    }
    ,
    l._getNormalizedScroll = function(e) {
        if (!this._isRightToLeft)
            return e;
        var t = Math.abs(e);
        return "default" === this._scrollType && (t = this._contentWidth - this._wrapperWidth - t),
        t
    }
    ,
    l._setNormalizedScroll = function(e) {
        var t = this._getBoundedScrollX(e);
        return this._isRightToLeft && "reverse" !== this._scrollType ? "negative" === this._scrollType ? -t : -(t - this._contentWidth + this._wrapperWidth) : t
    }
    ,
    l._normalizePosition = function(e) {
        return this._isRightToLeft ? {
            top: e.top,
            right: this._wrapperWidth - e.right + this._paddleWidth,
            bottom: e.bottom,
            left: this._wrapperWidth - e.left + this._paddleWidth
        } : {
            top: e.top,
            right: e.right - this._paddleWidth,
            bottom: e.bottom,
            left: e.left - this._paddleWidth
        }
    }
    ,
    l._destroyCurrentClip = function() {
        this._clip && this._clip._isPlaying && (this._clip.destroy(),
        this._lockPaddles = !1)
    }
    ,
    l._destroyPaddles = function() {
        this._paddles.start.removeEventListener("click", this._onPaddleStartClick),
        this._paddles.end.removeEventListener("click", this._onPaddleEndClick),
        this._wrapper.removeEventListener("scroll", this._onScroll),
        this._paddles = null
    }
    ,
    l.destroy = function() {
        this._items = null,
        this._destroyCurrentClip(),
        this._destroyPaddles(),
        window.removeEventListener("resize", this._updateElementMetrics),
        window.removeEventListener("orientationchange", this._updateElementMetrics)
    }
    ,
    e.exports = h
}
, function(e, t, i) {
    "use strict";
    var s = i(75);
    e.exports = function(e, t) {
        var i, r, n, a, o, h, l;
        return t ? (r = (i = e.getBoundingClientRect()).top,
        n = i.left,
        a = i.width,
        o = i.height,
        e.offsetParent && (r -= (h = e.offsetParent.getBoundingClientRect()).top,
        n -= h.left)) : (l = s(e, t),
        r = e.offsetTop,
        n = e.offsetLeft,
        a = l.width,
        o = l.height),
        {
            top: r,
            right: n + a,
            bottom: r + o,
            left: n
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(77);
    e.exports = s.requestAnimationFrame("update")
}
, function(e, t, i) {
    "use strict";
    var s = i(167)
      , r = function(e) {
        this.rafEmitter = new s,
        this.rafEmitter.on(e, this._onRAFExecuted.bind(this)),
        this.requestAnimationFrame = this.requestAnimationFrame.bind(this),
        this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this),
        this._frameCallbacks = [],
        this._nextFrameCallbacks = [],
        this._currentFrameID = -1,
        this._cancelFrameIdx = -1,
        this._frameCallbackLength = 0,
        this._nextFrameCallbacksLength = 0,
        this._frameCallbackIteration = 0
    }
      , n = r.prototype;
    n.requestAnimationFrame = function(e) {
        return this._currentFrameID = this.rafEmitter.run(),
        this._nextFrameCallbacks.push(this._currentFrameID, e),
        this._nextFrameCallbacksLength += 2,
        this._currentFrameID
    }
    ,
    n.cancelAnimationFrame = function(e) {
        this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e),
        -1 !== this._cancelFrameIdx && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2),
        this._nextFrameCallbacksLength -= 2,
        0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
    }
    ,
    n._onRAFExecuted = function(e) {
        for (this._frameCallbacks = this._nextFrameCallbacks,
        this._frameCallbackLength = this._nextFrameCallbacksLength,
        this._nextFrameCallbacks = [],
        this._nextFrameCallbacksLength = 0,
        this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2)
            this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e)
    }
    ,
    e.exports = r
}
, function(e, t, i) {
    "use strict";
    var s = i(168)
      , r = function(e) {
        s.call(this, e)
    };
    (r.prototype = Object.create(s.prototype))._subscribe = function() {
        return this.executor.subscribe(this, !0)
    }
    ,
    e.exports = r
}
, function(e, t, i) {
    "use strict";
    var s, r = i(2).EventEmitterMicro, n = i(169), a = i(172);
    function o(e) {
        e = e || {},
        r.call(this),
        this.id = a.getNewID(),
        this.executor = e.executor || n,
        this._reset(),
        this._willRun = !1,
        this._didDestroy = !1
    }
    (s = o.prototype = Object.create(r.prototype)).run = function() {
        return this._willRun || (this._willRun = !0),
        this._subscribe()
    }
    ,
    s.cancel = function() {
        this._unsubscribe(),
        this._willRun && (this._willRun = !1),
        this._reset()
    }
    ,
    s.destroy = function() {
        var e = this.willRun();
        return this.cancel(),
        this.executor = null,
        r.prototype.destroy.call(this),
        this._didDestroy = !0,
        e
    }
    ,
    s.willRun = function() {
        return this._willRun
    }
    ,
    s.isRunning = function() {
        return this._isRunning
    }
    ,
    s._subscribe = function() {
        return this.executor.subscribe(this)
    }
    ,
    s._unsubscribe = function() {
        return this.executor.unsubscribe(this)
    }
    ,
    s._onAnimationFrameStart = function(e) {
        this._isRunning = !0,
        this._willRun = !1,
        this._didEmitFrameData || (this._didEmitFrameData = !0,
        this.trigger("start", e))
    }
    ,
    s._onAnimationFrameEnd = function(e) {
        this._willRun || (this.trigger("stop", e),
        this._reset())
    }
    ,
    s._reset = function() {
        this._didEmitFrameData = !1,
        this._isRunning = !1
    }
    ,
    e.exports = o
}
, function(e, t, i) {
    "use strict";
    var s = i(21).SharedInstance
      , r = i(170);
    e.exports = s.share("ac-raf-executor:sharedRAFExecutorInstance", "2.0.1", r)
}
, function(e, t, i) {
    "use strict";
    var s;
    function r(e) {
        e = e || {},
        this._reset(),
        this._willRun = !1,
        this._totalSubscribeCount = -1,
        this._requestAnimationFrame = window.requestAnimationFrame,
        this._cancelAnimationFrame = window.cancelAnimationFrame,
        this._boundOnAnimationFrame = this._onAnimationFrame.bind(this),
        this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
    }
    i(171),
    (s = r.prototype).subscribe = function(e, t) {
        return this._totalSubscribeCount++,
        this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id),
        this._nextFrameSubscribers[e.id] = e,
        this._nextFrameSubscriberArrayLength++,
        this._nextFrameSubscriberCount++,
        this._run()),
        this._totalSubscribeCount
    }
    ,
    s.unsubscribe = function(e) {
        return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null,
        this._nextFrameSubscriberCount--,
        0 === this._nextFrameSubscriberCount && this._cancel(),
        !0)
    }
    ,
    s.trigger = function(e, t) {
        var i;
        for (i = 0; i < this._subscriberArrayLength; i++)
            null !== this._subscribers[this._subscribersOrder[i]] && !1 === this._subscribers[this._subscribersOrder[i]]._didDestroy && this._subscribers[this._subscribersOrder[i]].trigger(e, t)
    }
    ,
    s.destroy = function() {
        var e = this._cancel();
        return this._subscribers = null,
        this._subscribersOrder = null,
        this._nextFrameSubscribers = null,
        this._nextFrameSubscribersOrder = null,
        this._rafData = null,
        this._boundOnAnimationFrame = null,
        this._onExternalAnimationFrame = null,
        e
    }
    ,
    s.useExternalAnimationFrame = function(e) {
        if ("boolean" == typeof e) {
            var t = this._isUsingExternalAnimationFrame;
            return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
            this._animationFrame = null),
            !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
            this._isUsingExternalAnimationFrame = e,
            e ? this._boundOnExternalAnimationFrame : t || !1
        }
    }
    ,
    s._run = function() {
        if (!this._willRun)
            return this._willRun = !0,
            0 === this.lastFrameTime && (this.lastFrameTime = performance.now()),
            this._animationFrameActive = !0,
            this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
            !0
    }
    ,
    s._cancel = function() {
        var e = !1;
        return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
        this._animationFrame = null),
        this._animationFrameActive = !1,
        this._willRun = !1,
        e = !0),
        this._isRunning || this._reset(),
        e
    }
    ,
    s._onSubscribersAnimationFrameStart = function(e) {
        var t;
        for (t = 0; t < this._subscriberArrayLength; t++)
            null !== this._subscribers[this._subscribersOrder[t]] && !1 === this._subscribers[this._subscribersOrder[t]]._didDestroy && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameStart(e)
    }
    ,
    s._onSubscribersAnimationFrameEnd = function(e) {
        var t;
        for (t = 0; t < this._subscriberArrayLength; t++)
            null !== this._subscribers[this._subscribersOrder[t]] && !1 === this._subscribers[this._subscribersOrder[t]]._didDestroy && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameEnd(e)
    }
    ,
    s._onAnimationFrame = function(e) {
        this._subscribers = this._nextFrameSubscribers,
        this._subscribersOrder = this._nextFrameSubscribersOrder,
        this._subscriberArrayLength = this._nextFrameSubscriberArrayLength,
        this._subscriberCount = this._nextFrameSubscriberCount,
        this._nextFrameSubscribers = {},
        this._nextFrameSubscribersOrder = [],
        this._nextFrameSubscriberArrayLength = 0,
        this._nextFrameSubscriberCount = 0,
        this._isRunning = !0,
        this._willRun = !1,
        this._didRequestNextRAF = !1,
        this._rafData.delta = e - this.lastFrameTime,
        this.lastFrameTime = e,
        this._rafData.fps = 0,
        this._rafData.delta >= 1e3 && (this._rafData.delta = 0),
        0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta),
        this._rafData.time = e,
        this._rafData.naturalFps = this._rafData.fps,
        this._rafData.timeNow = Date.now(),
        this._onSubscribersAnimationFrameStart(this._rafData),
        this.trigger("update", this._rafData),
        this.trigger("external", this._rafData),
        this.trigger("draw", this._rafData),
        this._onSubscribersAnimationFrameEnd(this._rafData),
        this._willRun || this._reset()
    }
    ,
    s._onExternalAnimationFrame = function(e) {
        this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
    }
    ,
    s._reset = function() {
        this._rafData = {
            time: 0,
            delta: 0,
            fps: 0,
            naturalFps: 0,
            timeNow: 0
        },
        this._subscribers = {},
        this._subscribersOrder = [],
        this._subscriberArrayLength = 0,
        this._subscriberCount = 0,
        this._nextFrameSubscribers = {},
        this._nextFrameSubscribersOrder = [],
        this._nextFrameSubscriberArrayLength = 0,
        this._nextFrameSubscriberCount = 0,
        this._didEmitFrameData = !1,
        this._animationFrame = null,
        this._animationFrameActive = !1,
        this._isRunning = !1,
        this._shouldReset = !1,
        this.lastFrameTime = 0
    }
    ,
    e.exports = r
}
, function(e, t) {}
, function(e, t, i) {
    "use strict";
    var s = i(21).SharedInstance
      , r = function() {
        this._currentID = 0
    };
    r.prototype.getNewID = function() {
        return this._currentID++,
        "raf:" + this._currentID
    }
    ,
    e.exports = s.share("ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance", "1.0.3", r)
}
, function(e, t, i) {
    "use strict";
    var s = i(77);
    e.exports = s.requestAnimationFrame("draw")
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        e instanceof Promise ? e.then(t) : t()
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        return "function" == typeof e ? e : null
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t) {
        const i = t.length;
        let s = 0;
        !function r() {
            "function" == typeof t[s] && e(t[s]),
            s++,
            s < i && r()
        }()
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e, t, i) {
        return Math.min(Math.max(e, t), i)
    }
}
, function(e, t, i) {
    "use strict";
    const s = {
        easeInCubic: "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
        easeOutCubic: "cubic-bezier(0.0, 0.0, 0.58, 1.0)",
        easeInOutCubic: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
        easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
        easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
        easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
        easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
        easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
        easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        easeOutBack: "cubic-bezier(0.175,  0.885, 0.320, 1.275)",
        easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        linear: "cubic-bezier(0.0, 0.0, 1.0, 1.0)",
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        "ease-in": "cubic-bezier(0.42, 0.0, 1.0, 1.0)",
        "ease-out": "cubic-bezier(0.0, 0.0, 0.58, 1.0)",
        "ease-in-out": "cubic-bezier(0.42, 0.0, 0.58, 1.0)"
    };
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    function s() {
        this._createElements(),
        this._bindEvents()
    }
    var r = s.prototype;
    r._bindEvents = function() {
        this._onResize = this._resize.bind(this)
    }
    ,
    r._createElements = function() {
        this.span = document.createElement("span");
        var e = this.span.style;
        if (e.visibility = "hidden",
        e.position = "absolute",
        e.top = "0",
        e.zIndex = "-1",
        this.span.innerHTML = "&nbsp;",
        !window.ResizeObserver) {
            this.iframe = document.createElement("iframe");
            var t = this.iframe.style;
            t.position = "absolute",
            t.top = "0",
            t.left = "0",
            t.width = "100%",
            t.height = "100%",
            this.span.appendChild(this.iframe)
        }
        document.body.appendChild(this.span)
    }
    ,
    r.detect = function(e) {
        this.originalSize = e || 17,
        this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]),
        this.currentSize > this.originalSize && this._onResize(),
        this.isDetecting || (window.ResizeObserver ? (this.resizeObserver = new ResizeObserver(this._onResize),
        this.resizeObserver.observe(this.span)) : this.iframe.contentWindow.addEventListener("resize", this._onResize),
        this.isDetecting = !0)
    }
    ,
    r._resize = function() {
        this.currentSize = parseFloat(window.getComputedStyle(this.span)["font-size"]),
        this.originalSize < this.currentSize ? document.documentElement.classList.add("text-zoom") : document.documentElement.classList.remove("text-zoom"),
        window.dispatchEvent(new Event("resize")),
        window.dispatchEvent(new CustomEvent("resize:text-zoom",{
            detail: this
        }))
    }
    ,
    r.getScale = function() {
        return this.currentSize / this.originalSize
    }
    ,
    r.remove = function() {
        this.isDetecting && (this.resizeObserver && this.resizeObserver.unobserve(this.span),
        this.iframe && this.iframe.contentWindow.removeEventListener("resize", this._onResize),
        this.isDetecting = !1)
    }
    ,
    r.destroy = function() {
        this.remove(),
        this.span && this.span.parentElement && this.span.parentElement.removeChild(this.span),
        this.span = null,
        this.iframe = null,
        this.resizeObserver = null
    }
    ,
    e.exports = new s
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.sectionContent = this.el.querySelector(".section-accessories .section-content")
        }
        mounted() {
            this.initAccessoriesAnim(),
            this.initGallery()
        }
        initAccessoriesAnim() {
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 75vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "XL",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 70vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "M",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 50vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "S",
                cssClass: "appear",
                hold: !0
            })
        }
        initGallery() {
            const e = document.querySelector("#accessories-gallery");
            this.gum.addComponent({
                el: e,
                componentName: "AccessoriesGallery"
            })
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5)
      , r = i(78)
      , n = i(79)
      , a = i(80)
      , o = i(81)
      , h = i(82)
      , l = i(83)
      , c = i(84)
      , u = i(85)
      , d = i(86)
      , m = i(41)
      , p = i(87)
      , f = (e,t,i,s,r)=>{
        t = window.innerWidth >= 735 || window.innerWidth <= 1068 || p() ? 1 : 2;
        let n = e._items.length - 1
          , a = i;
        return i === n - t && (e.lastSlide = !0,
        a = n - t),
        e.currentIndex === n && (e.lastSlide = !1,
        a = n - t + s * r),
        a
    }
      , _ = {
        beforeCreate() {
            this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion") || document.documentElement.classList.contains("aow"),
            this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir"),
            this.model.IsTouch = "ontouchstart"in document.documentElement,
            this.model.Item.Selector = ".item-container .gallery-item",
            this.model.Slide.Selector = ".item-container",
            this.model.Slide.duration = 1
        },
        itemsCreated() {
            let e = 0;
            this._items.forEach((t=>{
                t._height > e && (e = t._height)
            }
            )),
            window.innerWidth >= 1069 && e < 520 && (e = 520),
            window.innerWidth <= 1068 && e < 470 && (e = 470),
            this._items.forEach((t=>{
                t.el.style.setProperty("height", `${e}px`)
            }
            ));
            let t = this.el.querySelector(".item-container");
            t.style.setProperty("--slide-min-height", `${e}px`),
            t.style.setProperty("height", `${e}px`)
        },
        onResizeImmediate() {
            let e = 0
              , t = this.el.querySelector(".item-container");
            t.style.height = "auto",
            this._items.forEach((e=>{
                e.el.style.height = "auto"
            }
            )),
            this._items.forEach((t=>{
                t.el.offsetHeight > e && (e = t.el.offsetHeight)
            }
            )),
            window.innerWidth >= 1069 && e < 520 && (e = 520),
            window.innerWidth <= 1068 && e < 470 && (e = 470),
            this._items.forEach((t=>{
                t.el.style.height = `${e}px`
            }
            )),
            t.style.height = `${e}px`,
            e = 0
        }
    }
      , g = {
        mounted() {
            l.mounted.apply(this, arguments)
        },
        destroy() {
            l.destroy.apply(this, arguments)
        },
        onPaddleNavSelected(e) {
            if (this.clip && this.clip._isPlaying)
                return;
            this.slideContainer.parentElement.scrollLeft = 0;
            let t = e.currentTarget.className.includes("previous") ? -1 : 1;
            this.lastInteractionEvent = e,
            this.lastSlide = !1;
            let i = this.currentIndex + 1 * t;
            i = f(this, 1, i, t, 1),
            this.animateToItem(i)
        },
        onItemChangeCompleted(e) {
            this.lastSlide && (this.currentIndex = this._items.length - 1),
            l.onItemChangeCompleted.apply(this, arguments)
        }
    }
      , y = {
        wrapSlideItems() {
            this.clampedIndex
        }
    }
      , E = {
        created(e) {
            h.created.apply(this, arguments)
        },
        itemsCreated() {
            this._items.forEach((e=>{
                e.el.querySelector("a").addEventListener("focus", (()=>{
                    this.onItemFocus(e)
                }
                ))
            }
            ))
        },
        destroy() {
            h.destroy.apply(this, arguments)
        },
        handleIntersect() {
            h.handleIntersect.apply(this, arguments)
        },
        onKeyDown(e) {
            let t = this.el.querySelector(".item-container")
              , i = getComputedStyle(t).getPropertyValue("--slide-min-screen-width");
            if (!(!this.isInView || this.inputHasFocus() || this.clip && this.clip._isPlaying || window.innerWidth >= i || 37 !== e.keyCode && 39 !== e.keyCode)) {
                let t = this.model.IsRTL ? -1 : 1
                  , i = 37 === e.keyCode ? -1 : 1;
                this.lastInteractionEvent = e;
                let s = this.currentIndex + i * t;
                s = f(this, 1, s, i, t),
                this.animateToItem(s)
            }
        },
        onItemFocus({index: e}) {
            e === this._items.length - 2 ? this.lastSlide = !0 : e !== this._items.length - 1 && (this.lastSlide = !1),
            e !== this._items.length - 1 && this.animateToItem(e)
        },
        inputHasFocus() {
            h.inputHasFocus.apply(this, arguments)
        },
        onItemChangeCompleted() {
            this.lastSlide && (this.currentIndex = this._items.length - 1)
        }
    };
    e.exports = class extends s {
        constructor() {
            super(...arguments)
        }
        mounted() {
            const e = n.combine([{
                mixin: h,
                breakpointMask: "S"
            }, {
                mixin: E,
                breakpointMask: "ML"
            }])
              , t = n.combine([{
                mixin: l,
                breakpointMask: "S"
            }, {
                mixin: g,
                breakpointMask: "ML"
            }])
              , i = r.withMixins(_, a, d, o, e, t, c, u, y);
            this.removeSetAriaVisibilityOnChangeCompleted(i, ["itemsCreated", "onItemChangeCompleted"]);
            new i({
                el: document.querySelector("#accessories-gallery")
            })
        }
        removeSetAriaVisibilityOnChangeCompleted(e, t) {
            t.forEach((t=>{
                let i = e.prototype[`__ ${t}`].indexOf(m[t]);
                e.prototype[`__ ${t}`].splice(i, 1)
            }
            ))
        }
        onResizeDebounced() {}
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        PrefersReducedMotion: !1,
        IsRTL: !1,
        IsTouch: !1,
        Slide: {
            Selector: ".item-container",
            duration: 1
        },
        Fade: {
            duration: .5
        },
        Item: {
            Selector: ".item-container .gallery-item",
            ConstructorFunction: i(183)
        },
        DotNav: {
            Selector: ".dotnav"
        },
        PaddleNav: {
            Selector: ".paddlenav"
        },
        ChapterPlayer: {
            defaultEase: e=>e
        },
        FadeCaptionOnChange: {
            ItemSelector: ".captions-gallery [data-captions-gallery-item]"
        },
        TabNav: {
            ItemSelector: ".tablist-wrapper li",
            RoamingTabIndexSelector: "a"
        },
        SwipeDrag: {
            DesktopSwipe: !1,
            movementRateMultiplier: 1.5,
            velocityMultiplier: 8
        },
        Events: {
            ITEM_CHANGE_INITIATED: "ITEM_CHANGE_INITIATED",
            ITEM_CHANGE_OCCURRED: "ITEM_CHANGE_OCCURRED",
            ITEM_CHANGE_COMPLETED: "ITEM_CHANGE_COMPLETED"
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(2).EventEmitterMicro
      , r = {};
    "undefined" != typeof window && (r.draw = i(4),
    r.cancelDraw = i(40));
    e.exports = class extends s {
        constructor(e) {
            super(),
            this._x = 0,
            this._y = 0,
            this._opacity = 0,
            this._width = 0,
            this._height = 0,
            this._zIndex = 0,
            this.index = e.index,
            this.el = e.el,
            this.applyDraw = this.applyDraw.bind(this),
            this.measure()
        }
        measure() {
            const e = getComputedStyle(this.el);
            this._width = this.el.clientWidth,
            this._height = this.el.clientHeight,
            this._zIndex = parseInt(e.getPropertyValue("z-index")),
            this._opacity = parseFloat(e.getPropertyValue("opacity"))
        }
        select() {
            this.el.classList.add("current"),
            this.trigger("select", this)
        }
        deselect() {
            this.el.classList.remove("current"),
            this.trigger("deselect", this)
        }
        progress(e) {}
        needsRedraw() {
            r.cancelDraw(this._rafID),
            this._rafID = r.draw(this.applyDraw, !0)
        }
        applyDraw() {
            this.el.style.zIndex = this._zIndex,
            this.el.style.opacity = this._opacity,
            this.el.style.transform = `translate(${this._x}px, ${this._y}px)`
        }
        get id() {
            return this.el.id
        }
        get height() {
            return this._height
        }
        set height(e) {
            this._height = e,
            this.needsRedraw()
        }
        get width() {
            return this._width
        }
        set width(e) {
            this._width = e,
            this.needsRedraw()
        }
        get x() {
            return this._x
        }
        set x(e) {
            this._x = e,
            this.needsRedraw()
        }
        get y() {
            return this._y
        }
        set y(e) {
            this._y = e,
            this.needsRedraw()
        }
        get opacity() {
            return this._opacity
        }
        set opacity(e) {
            this._opacity = e,
            this.needsRedraw()
        }
        get zIndex() {
            return this._zIndex
        }
        set zIndex(e) {
            this._zIndex = e,
            this.needsRedraw()
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        beforeCreate() {
            Object.defineProperties(this, {
                currentItem: {
                    configurable: !0,
                    get: ()=>this._items[this.wrappedIndex(this.currentIndex)]
                }
            })
        },
        wrappedIndex(e) {
            return (e %= this._items.length) < 0 ? this._items.length + e : e
        },
        getItemForTrigger(e) {
            return this._items.find((t=>t.id === e))
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        itemsCreated(e) {
            this.model.options.gum || this._isVue || (this.anim.on("ON_RESIZE_IMMEDIATE", this.onResizeImmediate),
            this.anim.on("ON_RESIZE_DEBOUNCED", this.onResizeDebounced),
            this.anim.on("ON_BREAKPOINT_CHANGE", this.onBreakpointChange),
            requestAnimationFrame(this.mounted))
        },
        destroy() {
            this.model.options.gum || this._isVue || (this.anim.off("ON_RESIZE_IMMEDIATE", this.onResizeImmediate),
            this.anim.off("ON_RESIZE_DEBOUNCED", this.onResizeDebounced),
            this.anim.off("ON_BREAKPOINT_CHANGE", this.onBreakpointChange))
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        beforeCreate() {
            document.body._animInfo && (this.anim = document.body._animInfo.group.anim,
            this.model.pageMetrics = this.anim.model.pageMetrics)
        },
        addKeyframe(e) {
            const t = e.el || this.el;
            return (e.group || this.anim).addKeyframe(t, e)
        },
        addDiscreteEvent(e) {
            e.event = e.event || "Generic-Event-Name-" + tmpUUID++;
            let t = void 0 !== e.end && e.end !== e.start;
            const i = this.addKeyframe(e);
            return t ? (e.onEnterOnce && i.controller.once(e.event + ":enter", e.onEnterOnce),
            e.onExitOnce && i.controller.once(e.event + ":exit", e.onExitOnce),
            e.onEnter && i.controller.on(e.event + ":enter", e.onEnter),
            e.onExit && i.controller.on(e.event + ":exit", e.onExit)) : (e.onEventOnce && i.controller.once(e.event, e.onEventOnce),
            e.onEventReverseOnce && i.controller.once(e.event + ":reverse", e.onEventReverseOnce),
            e.onEvent && i.controller.on(e.event, e.onEvent),
            e.onEventReverse && i.controller.on(e.event + ":reverse", e.onEventReverse)),
            i
        },
        addRAFLoop(e) {
            let t = ["start", "end"];
            if (!t.every((t=>e.hasOwnProperty(t))))
                return void console.log("BubbleGum.BaseComponent::addRAFLoop required options are missing: " + t.join(" "));
            const i = new RAFEmitter.create;
            i.on("update", e.onUpdate || noop),
            i.on("draw", e.onDraw || noop),
            i.on("draw", (()=>i.run()));
            const {onEnter: s, onExit: r} = e;
            return e.onEnter = ()=>{
                i.run(),
                s && s()
            }
            ,
            e.onExit = ()=>{
                i.cancel(),
                r && r()
            }
            ,
            this.addDiscreteEvent(e)
        },
        addContinuousEvent(e) {
            e.onDraw || console.log("BubbleGum.BaseComponent::addContinuousEvent required option `onDraw` is missing. Consider using a regular keyframe if you do not need a callback"),
            e.event = e.event || "Generic-Event-Name-" + tmpUUID++;
            let t = this.addKeyframe(e);
            return t.controller.on(e.event, e.onDraw),
            t
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        beforeCreate() {
            this.selections = {
                initiated: {
                    current: null,
                    previous: null
                },
                occurred: {
                    current: null,
                    previous: null
                },
                completed: {
                    current: null,
                    previous: null
                }
            }
        },
        onItemChangeInitiated(e) {
            this.selections.initiated.previous = this.selections.initiated.current,
            this.selections.initiated.current = this.selections.initiated.next,
            this.selections.initiated.next = e.next
        },
        onItemChangeOccurred(e) {
            this.selections.occurred.previous = e.previous = this.selections.occurred.current,
            this.selections.occurred.current = e.current
        },
        onItemChangeCompleted(e) {
            this.selections.completed.previous = e.previous = this.selections.completed.current,
            this.selections.completed.current = e.current
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        createItems(e) {
            if (this._items.length)
                this.itemsCreated();
            else {
                if (!this.model.Item.ConstructorFunction)
                    throw new ReferenceError("MixinGallery::AutoCreateItems - this.model.Item.ConstructorFunction is null");
                if (0 === this._items.length) {
                    this._items = [],
                    Array.from(this.el.querySelectorAll(this.model.Item.Selector)).forEach(((e,t)=>{
                        const i = new this.model.Item.ConstructorFunction({
                            el: e,
                            index: t
                        });
                        this._items.push(i)
                    }
                    ));
                    let e = this._items[this._items.length - 1];
                    for (let t = 0; t < this._items.length; t++) {
                        const i = this._items[t];
                        i.prev = e,
                        i.next = this._items[t + 1],
                        e = i
                    }
                    e.next = this._items[0]
                }
                this.itemsCreated()
            }
        }
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = {
        mounted() {
            const e = this._items[this.wrappedIndex(this.currentIndex)]
              , t = this;
            this.trigger(this.model.Events.ITEM_CHANGE_INITIATED, {
                gallery: t,
                next: e
            }),
            this.trigger(this.model.Events.ITEM_CHANGE_OCCURRED, {
                gallery: t,
                current: e
            }),
            this.trigger(this.model.Events.ITEM_CHANGE_COMPLETED, {
                gallery: t,
                current: e
            })
        }
    }
}
, function(e, t) {
    e.exports = require("@marcom/ac-analytics")
}
, function(e, t, i) {
    "use strict";
    var s = i(19).os
      , r = i(192).original
      , n = i(14)
      , a = i(46);
    function o() {
        var e = n.getWindow();
        return !r() && !e.orientation || s.windows
    }
    e.exports = a(o),
    e.exports.original = o
}
, function(e, t, i) {
    "use strict";
    var s = i(14)
      , r = i(46);
    function n() {
        var e = s.getWindow()
          , t = s.getDocument()
          , i = s.getNavigator();
        return !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
    }
    e.exports = r(n),
    e.exports.original = n
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.sectionContent = this.el.querySelector(".section-big-screen .row")
        }
        mounted() {
            this.initBigScreenAnim()
        }
        initBigScreenAnim() {
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 100vh",
                end: "a0b - 10vh",
                anchors: [this.el],
                breakpointMask: "XL",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 70vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "M",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 50vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "S",
                cssClass: "appear",
                hold: !0
            })
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.sectionContent = this.el.querySelector(".section-holiday-2022 .row")
        }
        mounted() {
            this.initHoliday2022Anim()
        }
        initHoliday2022Anim() {
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 100vh",
                end: "a0b - 10vh",
                anchors: [this.el],
                breakpointMask: "XL",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 70vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "M",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 130vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "S",
                cssClass: "appear",
                hold: !0
            })
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.screens = this.el.querySelectorAll(".alt-screen"),
            this.logos = this.el.querySelectorAll(".alt-logo"),
            this.captions = this.el.querySelectorAll(".alt-caption"),
            this.onTime = this.el.getAttribute("data-on-time") || 2,
            this.control = this.el.querySelector(".play-pause-button"),
            this.initAnim(),
            this.play = this.play.bind(this),
            this.pause = this.pause.bind(this),
            this.onClick = this.onClick.bind(this),
            this.control.addEventListener("click", this.onClick)
        }
        initAnim() {
            this.fadeTL = this.anim.createTimeGroup(),
            this.fadeTL.name = "Value Props - Alt screens",
            this.screens.forEach(((e,t)=>{
                this.addKeyframe({
                    el: e,
                    group: this.fadeTL,
                    start: t * this.onTime,
                    end: (t + 1) * this.onTime,
                    cssClass: "active",
                    toggle: !0
                })
            }
            )),
            this.logos.forEach(((e,t)=>{
                this.addKeyframe({
                    el: e,
                    group: this.fadeTL,
                    start: t * this.onTime,
                    end: (t + 1) * this.onTime,
                    cssClass: "active",
                    toggle: !0
                })
            }
            )),
            this.captions.forEach(((e,t)=>{
                this.addKeyframe({
                    el: e,
                    group: this.fadeTL,
                    start: t * this.onTime,
                    end: (t + 1) * this.onTime,
                    cssClass: "active",
                    toggle: !0
                })
            }
            )),
            this.fadeTL.repeats(-1),
            this.el.classList.add("loaded"),
            this.play()
        }
        onClick() {
            this.el.classList.contains("playing") ? this.pause() : this.play()
        }
        play() {
            this.el.classList.add("playing"),
            this.fadeTL.play()
        }
        pause() {
            this.el.classList.remove("playing"),
            this.fadeTL.pause()
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const {Media: s} = i(197)
      , r = i(5);
    e.exports = class extends r {
        constructor(e) {
            super(e)
        }
        async mounted() {
            this.mediaInstance = await s.autoInitialize(this.el, {
                anim: this.gum.anim
            }),
            this.trigger("media-instance-ready", this.mediaInstance[0])
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.defineProperty(t, "Media", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }),
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }),
    Object.defineProperty(t, "Plugin", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    }),
    t.autoInit = void 0;
    var r = s(i(88))
      , n = s(i(6));
    const a = r.default.autoInitialize;
    t.autoInit = a
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(199))
      , n = s(i(200))
      , a = s(i(202))
      , o = s(i(203))
      , h = [r.default, n.default, a.default, o.default];
    t.default = h
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6));
    class n extends r.default {
        get src() {
            if (!this.media.el.currentSrc && !this.media.el.src)
                for (let e of this.media.el.querySelectorAll("source"))
                    if (this.media.el.canPlayType(e.type))
                        return e.src;
            return this.media.el.currentSrc || this.media.el.src
        }
    }
    var a = n;
    t.default = a
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(89))
      , a = s(i(10))
      , o = s(i(24))
      , h = s(i(47))
      , l = s(i(19));
    const c = n.default.CAN_PLAY_THROUGH
      , {HAVE_NOTHING: u, HAVE_CURRENT_DATA: d, NETWORK_EMPTY: m} = HTMLMediaElement;
    class p extends r.default {
        constructor(e) {
            super(e),
            this._loadCompleteEvent = e.loadCompleteEvent || c,
            this._onLoaded = this._onLoaded.bind(this),
            this._onError = this._onError.bind(this)
        }
        mounted() {
            "none" !== this.media.el.preload && this.media.src && (async()=>{
                try {
                    await this.media.load(this.media.src)
                } catch (e) {
                    (0,
                    h.default)(`auto load of ${this.media.src} failed or was aborted with err:${e}`)
                }
            }
            )()
        }
        async load(e) {
            if (void 0 === e && this.media.src && (e = this.media.src),
            !e)
                throw new Error("No Media src was specified, can not fullfill load() request");
            return e !== this._currentLoadUrl && (this.media.trigger(a.default.MEDIA_LOAD_START),
            this._currentLoadUrl = e,
            this._pendingPromise = new Promise(((t,i)=>{
                this._resolvePendingPromise = ()=>{
                    this._resolvePendingPromise = null,
                    this._rejectPendingPromise = null,
                    t()
                }
                ,
                this._rejectPendingPromise = ()=>{
                    this._resolvePendingPromise = null,
                    this._rejectPendingPromise = null,
                    i()
                }
                ,
                this.media.el.addEventListener(this._loadCompleteEvent, this._onLoaded),
                l.default.browser.firefox && "canplaythrough" === this._loadCompleteEvent && this.media.el.addEventListener("canplay", this._onLoaded),
                this.media.el.addEventListener(n.default.ERROR, this._onError),
                this.media.el.addEventListener(n.default.ABORT, this._onError),
                this.media.el.src = e,
                this.media.el.load()
            }
            ))),
            this._pendingPromise
        }
        _clearLoadListeners() {
            this.media.el.removeEventListener(this._loadCompleteEvent, this._onLoaded),
            this.media.el.removeEventListener("canplay", this._onLoaded),
            this.media.el.removeEventListener(n.default.ERROR, this._onError),
            this.media.el.removeEventListener(n.default.ABORT, this._onError)
        }
        _onLoaded() {
            this._clearLoadListeners(),
            this.media.trigger(a.default.LOADING_STATE_CHANGE),
            this.media.trigger(a.default.MEDIA_LOAD_COMPLETE),
            this._resolvePendingPromise()
        }
        _onError() {
            this._clearLoadListeners(),
            this.media.trigger(a.default.MEDIA_LOAD_ERROR),
            this.media.trigger(a.default.LOADING_STATE_CHANGE),
            this._rejectPendingPromise()
        }
        abortLoad() {
            this._rejectPendingPromise && this._rejectPendingPromise()
        }
        get loadingState() {
            return this.media.el.error ? o.default.ERROR : this.media.el.networkState === m && this.media.el.readyState === u ? o.default.EMPTY : this.media.el.readyState < d ? this.media.el.buffered.length && 0 === this.media.el.buffered.start(0) && this.media.el.buffered.end(0) === this.media.el.duration ? o.default.LOADED : o.default.LOADING : o.default.LOADED
        }
        destroy() {
            this._clearLoadListeners(),
            super.destroy()
        }
    }
    var f = p;
    t.default = f
}
, function(e, t, i) {
    "use strict";
    var s = !1
      , r = window || self;
    try {
        s = !!r.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
    } catch (e) {}
    e.exports = s
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(25));
    const {HAVE_METADATA: a, HAVE_CURRENT_DATA: o} = HTMLVideoElement;
    class h extends r.default {
        constructor(e) {
            super(e),
            this._initialize()
        }
        _initialize() {
            this.media.el.playsInline = !0,
            this.media.el.autoplay && (this._autoPlayTimer = setTimeout((()=>this.media.play())))
        }
        async play() {
            this.media.el.readyState < a && await this.media.load(),
            await this.media.el.play()
        }
        get playbackState() {
            return this.media.el.ended ? n.default.ENDED : this.media.el.paused && !this.media.el.ended ? n.default.PAUSED : n.default.PLAYING
        }
        destroy() {
            clearTimeout(this._autoPlayTimer),
            super.destroy()
        }
    }
    var l = h;
    t.default = l
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(25))
      , a = s(i(24))
      , o = s(i(89))
      , h = s(i(10));
    const l = [o.default.LOADED_DATA, o.default.LOAD_START, o.default.CAN_PLAY, o.default.CAN_PLAY_THROUGH, o.default.PLAY, o.default.PLAYING, o.default.PAUSE, o.default.WAITING, o.default.SEEKING, o.default.SEEKED, o.default.ERROR, o.default.ENDED]
      , c = "[data-inline-media-controller={id}]";
    class u extends r.default {
        constructor(e) {
            super(e),
            this._container = e.container || this.media.el.parentElement,
            this._playbackState = n.default.IDLE,
            this._loadingState = a.default.EMPTY,
            this._elementsToDecorate = [],
            this._container && this._elementsToDecorate.push(this._container),
            this.media.id && this._elementsToDecorate.push(...Array.from(document.querySelectorAll(c.replace("{id}", this.media.id))));
            for (const e of this._elementsToDecorate)
                e.classList.add(this._playbackState),
                e.classList.add(this._loadingState);
            this.updateState = this.updateState.bind(this),
            this._addEventListeners()
        }
        _addEventListeners() {
            for (let e of l)
                this.media.el.addEventListener(e, this.updateState);
            this.media.on(h.default.LOADING_STATE_CHANGE, this.updateState),
            this.media.on(h.default.PLAYBACK_STATE_CHANGE, this.updateState)
        }
        _removeEventListeners() {
            for (let e of l)
                this.media.el.removeEventListener(e, this.updateState);
            this.media.off(h.default.LOADING_STATE_CHANGE, this.updateState),
            this.media.off(h.default.PLAYBACK_STATE_CHANGE, this.updateState)
        }
        updateState(e) {
            const t = this.media.playbackState
              , i = this._playbackState
              , s = this.media.loadingState
              , r = this._loadingState;
            if (this._playbackState = t,
            this._loadingState = s,
            t !== i) {
                for (const e of this._elementsToDecorate)
                    e.classList.add(t),
                    e.classList.remove(i);
                this.media.trigger(h.default.PLAYBACK_STATE_CHANGE)
            }
            if (s !== r) {
                for (const e of this._elementsToDecorate)
                    e.classList.add(s),
                    e.classList.remove(r);
                this.media.trigger(h.default.LOADING_STATE_CHANGE)
            }
        }
        destroy() {
            for (const e of this._elementsToDecorate)
                e.classList.remove(this._playbackState),
                e.classList.remove(this._loadingState);
            this._removeEventListeners(),
            super.destroy()
        }
    }
    var d = u;
    t.default = d
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = async function(e=document, t={}) {
        e || (e = document);
        const i = e.querySelectorAll("[data-inline-media]")
          , s = [];
        for (let e of i) {
            const i = e.dataset
              , a = i.inlineMediaPlugins ? i.inlineMediaPlugins.split(",").map((e=>e.trim())) : []
              , o = [];
            for (const e of a)
                if (!r.pluginCache[e]) {
                    if (!n.default[e])
                        throw new Error(`Error Trying to use undefined Plugin named: ${e} . Ensure you call Media.addPlugin() first to register this custom plugin!`);
                    o.push((async()=>{
                        const t = (await n.default[e]()).default;
                        r.default.addPlugin(e, t)
                    }
                    ))
                }
            await Promise.all(o.map((async e=>e()))),
            s.push(new r.default(Object.assign({
                el: e,
                plugins: a.map((e=>r.pluginCache[e]))
            }, t)))
        }
        return s
    }
    ;
    var r = function(e, t) {
        if (!t && e && e.__esModule)
            return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
            return {
                default: e
            };
        var i = a(t);
        if (i && i.has(e))
            return i.get(e);
        var s = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
            if ("default" !== n && Object.prototype.hasOwnProperty.call(e, n)) {
                var o = r ? Object.getOwnPropertyDescriptor(e, n) : null;
                o && (o.get || o.set) ? Object.defineProperty(s, n, o) : s[n] = e[n]
            }
        s.default = e,
        i && i.set(e, s);
        return s
    }(i(88))
      , n = s(i(205));
    function a(e) {
        if ("function" != typeof WeakMap)
            return null;
        var t = new WeakMap
          , i = new WeakMap;
        return (a = function(e) {
            return e ? i : t
        }
        )(e)
    }
}
, function(e, t, i) {
    "use strict";
    function s(e) {
        if ("function" != typeof WeakMap)
            return null;
        var t = new WeakMap
          , i = new WeakMap;
        return (s = function(e) {
            return e ? i : t
        }
        )(e)
    }
    function r(e, t) {
        if (!t && e && e.__esModule)
            return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
            return {
                default: e
            };
        var i = s(t);
        if (i && i.has(e))
            return i.get(e);
        var r = {}
          , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
            }
        return r.default = e,
        i && i.set(e, r),
        r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var n = {
        AnimLoad: async()=>Promise.resolve().then((()=>r(i(206)))),
        AnimPlay: async()=>Promise.resolve().then((()=>r(i(207)))),
        FeatureObserver: async()=>Promise.resolve().then((()=>r(i(208)))),
        LoadTimeout: async()=>Promise.resolve().then((()=>r(i(211)))),
        PlayPauseButton: async()=>Promise.resolve().then((()=>r(i(212)))),
        ViewportSource: async()=>Promise.resolve().then((()=>r(i(213))))
    };
    t.default = n
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(91))
      , n = s(i(6))
      , a = s(i(47));
    const o = {
        start: "t - 200vh",
        end: "b + 100vh"
    };
    class h extends n.default {
        constructor(e) {
            super(e),
            this._anim = e.anim,
            this._container = e.container || this.media.el.parentElement,
            this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el),
            this._initialize()
        }
        _initialize() {
            this._onLoadKeyframeEnter = this._onLoadKeyframeEnter.bind(this),
            this._onLoadKeyframeExit = this._onLoadKeyframeExit.bind(this);
            const e = (0,
            r.default)(this.media.el.dataset, this.options, "loadKeyframe", o);
            e.event || (e.event = "inline-media-load-kf"),
            this._loadKeyframe = this._scrollGroup.addKeyframe(this.media.el, e),
            this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter),
            this._loadKeyframe.controller.on(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit)
        }
        get loadKeyframe() {
            return this._loadKeyframe
        }
        async _onLoadKeyframeEnter(e) {
            try {
                await this.media.load(),
                this._loaded = !0
            } catch (e) {
                (0,
                a.default)("AnimLoad: Load error occured")
            }
        }
        _onLoadKeyframeExit(e) {}
        destroy() {
            this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:enter`, this._onLoadKeyframeEnter),
            this._loadKeyframe.controller.off(`${this._loadKeyframe.event}:exit`, this._onLoadKeyframeExit),
            super.destroy()
        }
    }
    t.default = h
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(10))
      , n = s(i(91))
      , a = s(i(6));
    const o = {
        start: "t - 100vh",
        end: "b"
    };
    class h extends a.default {
        constructor(e) {
            super(e),
            this._anim = e.anim,
            this._container = e.container || this.media.el.parentElement,
            this._scrollGroup = this.options.scrollGroup || this._anim.getGroupForTarget(this._container || this.media.el),
            this._initialize()
        }
        _initialize() {
            this._onPlayKeyframeEnter = this._onPlayKeyframeEnter.bind(this),
            this._onPlayKeyframeExit = this._onPlayKeyframeExit.bind(this);
            const e = this.media.el.dataset;
            if (this._autoPlayWithReducedMotion = (0,
            n.default)(e, this.options, "autoPlayWithReducedMotion", !1),
            !this._autoPlayWithReducedMotion && h.prefersReducedMotion)
                return;
            this._pauseOnExit = (0,
            n.default)(e, this.options, "pauseOnExit", !1),
            this._resetOnExit = (0,
            n.default)(e, this.options, "resetOnExit", !1);
            const t = (0,
            n.default)(e, this.options, "playKeyframe", o);
            t.event || (t.event = "inline-media-play-kf"),
            this._playKeyframe = this._scrollGroup.addKeyframe(this.media.el, t),
            this._playKeyframe.controller.on(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter),
            this._playKeyframe.controller.on(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit),
            this._onLoadStart = this._onLoadStart.bind(this),
            this.media.on(r.default.MEDIA_LOAD_START, this._onLoadStart)
        }
        _onLoadStart() {
            this._loaded = !1
        }
        async _onPlayKeyframeEnter(e) {
            if (this._inFrame = !0,
            !this._paused && (this._loaded || (await this.media.load(),
            this._loaded = !0),
            this._inFrame))
                try {
                    await this.media.play()
                } catch (e) {}
        }
        _onPlayKeyframeExit(e) {
            this._inFrame = !1,
            this._loaded && this.media.el.paused && !this.media.el.ended ? this._paused = !0 : this._pauseOnExit && (this._paused = !1,
            this.media.el.pause()),
            this._loaded && this._resetOnExit && (this.media.el.currentTime = 0)
        }
        get playKeyframe() {
            return this._playKeyframe
        }
        destroy() {
            this._playKeyframe.controller.off(`${this._playKeyframe.event}:enter`, this._onPlayKeyframeEnter),
            this._playKeyframe.controller.off(`${this._playKeyframe.event}:exit`, this._onPlayKeyframeExit),
            this.media.off(r.default.MEDIA_LOAD_START, this._onLoadStart),
            super.destroy()
        }
        static get prefersReducedMotion() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
    }
    t.default = h
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(25))
      , a = s(i(24))
      , o = s(i(10))
      , h = s(i(209))
      , l = s(i(210));
    const c = e=>e
      , u = e=>e ? e.split(",").map((e=>e.trim())) : null;
    class d extends r.default {
        constructor(e) {
            super(e);
            const t = (t,i,s)=>{
                let r = "inlineMedia" + t[0].toUpperCase() + t.slice(1);
                return i(this.media.el.dataset[r]) || e[t] || s
            }
            ;
            this._disabledStates = new h.default({
                features: t("disabledWhen", u, []),
                onActivate: this.disable.bind(this),
                onDeactivate: this.enable.bind(this)
            }),
            this._destroyStates = new h.default({
                features: t("destroyWhen", u, []),
                onActivate: this.destroyMedia.bind(this)
            }),
            this._pausedStates = new h.default({
                features: t("pausedWhen", u, []),
                onActivate: this.pauseMedia.bind(this)
            }),
            this._autoplayStates = new h.default({
                features: t("autoplayWhen", u, []),
                onActivate: this.autoplayMedia.bind(this),
                onDeactivate: this.disableAutoplay.bind(this)
            });
            const i = e.featureDetect || {};
            var s;
            this.featureCallbacks = Object.entries(i).map((([e,t])=>new l.default({
                featureClass: e,
                callback: t
            }))),
            this._featureElement = (s = t("featureElement", c, document.documentElement))instanceof HTMLElement ? s : document.querySelector(s),
            this.featureSets = [this._autoplayStates, this._pausedStates, this._disabledStates, this._destroyStates],
            this._featuresUpdated = this._featuresUpdated.bind(this),
            this.play = !1,
            this._observer = new MutationObserver(this._featuresUpdated),
            this._observer.observe(this._featureElement, {
                attributes: !0,
                attributeFilter: ["class"]
            }),
            this._featuresUpdated()
        }
        get loadingState() {
            return this._disabledStates.isDetected ? a.default.DISABLED : void 0
        }
        get playbackState() {
            return this._disabledStates.isDetected ? n.default.PAUSED : void 0
        }
        _featuresUpdated() {
            let e = this._featureElement.classList;
            this.featureSets.filter((t=>(t.updateFeatureState(e),
            t.detectionChanged))).forEach((e=>e.applyEffect())),
            this.featureCallbacks.forEach((t=>{
                t.updatePresence(e),
                t.isPresent && t.presenceChanged && t.triggerCallback(this.media)
            }
            ))
        }
        autoplayMedia() {
            this.media.el.setAttribute("autoplay", !0),
            this.media.play()
        }
        disableAutoplay() {
            this.media.el.setAttribute("autoplay", !1)
        }
        pauseMedia() {
            this.media.el.pause()
        }
        destroyMedia() {
            this.media.destroy()
        }
        destroy() {
            this._observer.disconnect()
        }
        disable() {
            this.media.abortLoad(),
            this.media.el.pause(),
            this.play = c,
            this.media.trigger(o.default.LOADING_STATE_CHANGE),
            this.media.trigger(o.default.PLAYBACK_STATE_CHANGE)
        }
        enable() {
            this.play = !1,
            this.media.trigger(o.default.LOADING_STATE_CHANGE),
            this.media.trigger(o.default.PLAYBACK_STATE_CHANGE)
        }
    }
    var m = d;
    t.default = m
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    const s = ()=>{}
    ;
    var r = class {
        constructor(e) {
            var t;
            this._features = new Set((t = e.features,
            Array.isArray(t) ? t : t ? [t] : [])),
            this._isDetected = !1,
            this._wasDetected = !1,
            this._onActivate = e.onActivate || s,
            this._onDeactivate = e.onDeactivate || s
        }
        get detectionChanged() {
            return this._isDetected !== this._wasDetected
        }
        get isDetected() {
            return this._isDetected
        }
        updateFeatureState(e) {
            this._wasDetected = this._isDetected;
            for (let t of e)
                if (this._features.has(t))
                    return void (this._isDetected = !0);
            this._isDetected = !1
        }
        applyEffect() {
            this._isDetected ? this._onActivate() : this._onDeactivate()
        }
    }
    ;
    t.default = r
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var s = class {
        constructor(e) {
            this.featureClass = e.featureClass,
            this._callback = e.callback,
            this._isPresent = !1,
            this._wasPresent = !1
        }
        get presenceChanged() {
            return this._isPresent !== this._wasPresent
        }
        get isPresent() {
            return this._isPresent
        }
        updatePresence(e) {
            this._wasPresent = this._isPresent,
            this._isPresent = e.contains(this.featureClass)
        }
        triggerCallback(e) {
            return this._callback(e)
        }
    }
    ;
    t.default = s
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(10));
    const a = "inline-media-timeout";
    class o extends r.default {
        static get LOAD_TIMEOUT_EVENT() {
            return a
        }
        constructor(e) {
            super(e);
            const t = this.media.el.dataset;
            this._timeoutDelay = t.loadTimeout || e.loadTimeout || 3e4,
            this._onLoadStart = this._onLoadStart.bind(this),
            this._onLoadComplete = this._onLoadComplete.bind(this),
            this._onTimerComplete = this._onTimerComplete.bind(this),
            this.media.on(n.default.MEDIA_LOAD_START, this._onLoadStart),
            this.media.on(n.default.MEDIA_LOAD_COMPLETE, this._onLoadComplete)
        }
        _onLoadStart() {
            clearTimeout(this._timer),
            this._timer = setTimeout(this._onTimerComplete, this._timeoutDelay)
        }
        _onLoadComplete() {
            clearTimeout(this._timer)
        }
        _onTimerComplete() {
            this.media.trigger(a),
            this.media.destroy(),
            this.media.el.parentElement && this.media.el.parentElement.removeChild(this.media.el)
        }
        destroy() {
            clearTimeout(this._timer),
            this.media.off(n.default.MEDIA_LOAD_START, this._onLoadStart)
        }
    }
    t.default = o
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(10))
      , a = s(i(25));
    const o = '[data-inline-media-control="PlayPause"]'
      , h = "[data-inline-media-controller='{id}']"
      , l = "Pause"
      , c = "Play"
      , u = "Replay"
      , d = {
        CLICK: "data-analytics-click",
        TITLE: "data-analytics-title"
    };
    class m extends r.default {
        constructor(e) {
            super(e),
            this._container = e.container || this.media.el.parentElement,
            this._button = this._findButton(),
            this._onClick = this._onClick.bind(this),
            this._onPlaybackStateChange = this._onPlaybackStateChange.bind(this);
            const t = this._button.dataset;
            this._ariaLabels = {
                playing: t.ariaPlaying || e.ariaPlaying || l,
                paused: t.ariaPaused || e.ariaPaused || c,
                ended: t.ariaEnded || e.ariaEnded || u
            },
            this._button.addEventListener("click", this._onClick),
            this.media.on(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange),
            this._activeAnalytics = Object.values(d).filter((e=>this._button.hasAttribute(e + "-play") && this._button.hasAttribute(e + "-pause") || this._button.hasAttribute(e + "-replay")))
        }
        _findButton() {
            if (this.options.playPauseButton)
                return this.options.playPauseButton;
            let e = this._container.querySelector(`${o}`);
            if (!e) {
                const t = document.querySelectorAll(h.replace("{id}", this.media.id));
                for (const i of t)
                    e = "PlayPause" === i.getAttribute("data-inline-media-control") ? i : i.querySelector(`${o}`)
            }
            return e
        }
        _onPlaybackStateChange() {
            switch (this.media.playbackState) {
            case a.default.PLAYING:
                this._button.setAttribute("aria-label", this._ariaLabels.playing);
                break;
            case a.default.ENDED:
                this._button.setAttribute("aria-label", this._ariaLabels.ended);
                break;
            default:
                this._button.setAttribute("aria-label", this._ariaLabels.paused)
            }
            this._setAnalyticsState()
        }
        _setAnalyticsState() {
            let e;
            switch (this.media.playbackState) {
            case a.default.PLAYING:
                e = "pause";
                break;
            case a.default.ENDED:
                e = "replay";
                break;
            default:
                e = "play"
            }
            for (const t of this._activeAnalytics) {
                let i = e;
                "replay" !== e || this._button.hasAttribute(`${t}-${i}`) || (i = "play"),
                this._button.setAttribute(t, this._button.getAttribute(`${t}-${i}`))
            }
        }
        _onClick(e) {
            this.media.el.paused ? this.media.play() : this.media.el.pause()
        }
        destroy() {
            this._button.removeEventListener("click", this._onClick),
            this.media.off(n.default.PLAYBACK_STATE_CHANGE, this._onPlaybackStateChange)
        }
    }
    t.default = m
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(6))
      , n = s(i(92))
      , a = s(i(215))
      , o = (s(i(47)),
    s(i(217)),
    s(i(24)));
    class h extends r.default {
        constructor(e) {
            super(e),
            this._cachedPlaying = null,
            this._initialize()
        }
        _initialize() {
            this._onBreakpointChange = this._onBreakpointChange.bind(this);
            const e = Object.assign({
                callback: this._onBreakpointChange
            }, this.options);
            this._breakpointDetect = e.anim ? new a.default(e) : new n.default(e),
            this._currentTime = 0;
            const t = this.media.el.dataset;
            this._basePath = this.options.basePath || t.inlineMediaBasepath || "./",
            this._onBreakpointChange()
        }
        _onBreakpointChange() {
            this._currentBreakpoint = this._breakpointDetect.breakpoint;
            const e = window.devicePixelRatio > 1 ? `${this._currentBreakpoint}_2x` : this._currentBreakpoint
              , t = `${this._basePath}${e}.mp4`;
            this._swapSrc(t)
        }
        get src() {
            return this._src
        }
        async _swapSrc(e) {
            if (this._src = e,
            this.media.loadingState === o.default.EMPTY)
                return;
            const t = null !== this._cachedPlaying ? this._cachedPlaying : !this.media.el.paused;
            return this.media.loadingState === o.default.LOADED && (this._currentTime = this.media.el.currentTime),
            this._cachedPlaying = t,
            await this.media.load(`${e}#t=${this._currentTime}`),
            this._cachedPlaying = null,
            t ? this.media.play() : Promise.resolve()
        }
        destroy() {
            this._breakpointDetect.destroy(),
            super.destroy()
        }
    }
    t.default = h
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        small: 0,
        medium: 570,
        large: 780,
        xlarge: 1280
    }
}
, function(e, t, i) {
    "use strict";
    var s = i(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    var r = s(i(92))
      , n = s(i(216));
    class a extends r.default {
        constructor(e) {
            super(e)
        }
        _initialize() {
            this._anim = this.options.anim,
            this._bpMap = this.options.animBreakpointMap || n.default,
            this._updateBreakpoint = this._updateBreakpoint.bind(this),
            this._callback = this.options.callback,
            this._addEventListeners(),
            this._updateBreakpoint()
        }
        _addEventListeners() {
            this._anim.on("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
        }
        _removeEventListeners() {
            this._anim.off("ON_BREAKPOINT_CHANGE", this._updateBreakpoint)
        }
        _updateBreakpoint() {
            const e = this._bpMap[this._anim.model.pageMetrics.breakpoint];
            let t = !1;
            this._currentBreakpoint && this._currentBreakpoint !== e && (t = !0),
            this._currentBreakpoint = e,
            t && this._callback()
        }
        destroy() {
            super.destroy()
        }
    }
    t.default = a
}
, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = void 0;
    t.default = {
        S: "small",
        M: "medium",
        L: "large",
        X: "xlarge"
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = i(90)("log")
}
, function(e, t, i) {
    "use strict";
    const s = i(5)
      , r = i(219);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.hardwareImage = this.el.querySelector(".hero-picture img"),
            this.copyBlock = this.el.querySelector(".hero-header"),
            this.hardwareImage && r(this.hardwareImage).then((()=>this.addHeroBuildIn())).catch((()=>this.onError()))
        }
        addHeroBuildIn() {
            this.heroTimeline = this.anim.createTimeGroup(),
            this.heroTimeline.name = "Hero - Build In",
            this.addKeyframe({
                el: this.hardwareImage,
                group: this.heroTimeline,
                start: 0,
                end: .5,
                opacity: [0, 1]
            }),
            this.addKeyframe({
                el: this.copyBlock,
                group: this.heroTimeline,
                start: 0,
                end: .5,
                opacity: [0, 1]
            }),
            this.addKeyframe({
                el: this.hardwareImage,
                group: this.heroTimeline,
                start: 0,
                end: 1.25,
                scale: [1.1, 1],
                y: [-50, 0],
                easeFunction: "easeOutQuad"
            }),
            this.addKeyframe({
                el: this.copyBlock,
                group: this.heroTimeline,
                start: 0,
                end: 1.25,
                y: [50, 0],
                easeFunction: "easeOutQuad"
            }),
            this.heroTimeline.play(0)
        }
        onError() {
            this.el.classList.add("image-error"),
            this.anim.forceUpdate()
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(220)
      , r = i(221)
      , n = i(1).PICTURE_DATA_LOADED
      , a = i(1).PICTURE_DATA_LAZY;
    e.exports = function(e, t, i=!1) {
        const o = r(e);
        if (!o.length)
            return Promise.reject({
                message: "no elements found / passed into ImagesLoaded function."
            });
        const h = o.map((e=>{
            const r = e.parentElement;
            let o = i;
            return "PICTURE" === r.tagName && r.hasAttribute(a) && !r.hasAttribute(n) && (o = !0),
            s({
                el: e,
                seconds: t,
                forceListener: o
            })
        }
        ));
        return Promise.all(h)
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function({el: e, url: t, seconds: i, forceListener: s}={}) {
        return new Promise(((r,n)=>{
            let a;
            const o = t || e.src;
            if (!o)
                return void n({
                    message: "Couldn't find a src on image",
                    el: e
                });
            const h = o.match(/.*\.svg$/g);
            let l;
            t || h ? a = new Image : "IMG" === e.tagName && (a = e);
            const c = ()=>{
                clearTimeout(l),
                a.removeEventListener("load", c),
                r({
                    el: e,
                    path: o
                })
            }
            ;
            if (i && (l = setTimeout((()=>{
                a.removeEventListener("load", c),
                n({
                    message: "Ran out of time loading: " + o,
                    el: e,
                    path: o
                })
            }
            ), 1e3 * i)),
            !t && a.complete && !h && !s)
                return a.naturalWidth ? (clearTimeout(l),
                void r({
                    el: e,
                    path: o
                })) : void n({
                    message: "Failed to load image:" + o,
                    el: e,
                    path: o
                });
            a.addEventListener("load", c),
            a.addEventListener("error", (function() {
                n({
                    message: "Failed to load image:" + o,
                    el: e,
                    path: o
                })
            }
            )),
            t && (a.src = o)
        }
        ))
    }
}
, function(e, t, i) {
    "use strict";
    e.exports = function(e) {
        let t;
        return t = "string" == typeof e ? Array.from(document.documentElement.querySelectorAll(e)) : Array.isArray(e) ? e : e instanceof Element ? [e] : Array.from(e),
        t
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e)
        }
        mounted() {
            this.el.querySelectorAll(".grid-item").forEach((e=>{
                this.anim.addKeyframe(e, {
                    start: "t - 85vh",
                    cssClass: "appear"
                })
            }
            ))
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5);
    e.exports = class extends s {
        constructor(e) {
            super(e),
            this.sectionContent = this.el.querySelector(".section-smart-home .section-content"),
            this.gallerySiriItem = this.el.querySelector("#siri.gallery-item"),
            this.nextPaddle = this.el.querySelector(".paddlenav-arrow-next")
        }
        mounted() {
            this.initSmartHomeAnim(),
            this.initGallery(),
            window.innerWidth >= 1200 && this.initSiri();
            let e = 0;
            this.nextPaddle.addEventListener("click", (()=>{
                e++,
                window.innerWidth >= 734 && 1 === e && this.initSiri(),
                window.innerWidth <= 734 && e > 1 && this.initSiri()
            }
            ))
        }
        initGallery() {
            const e = document.querySelector("#smart-home-gallery");
            this.gum.addComponent({
                el: e,
                componentName: "SmartHomeGallery"
            })
        }
        initSmartHomeAnim() {
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 75vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "XL",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 70vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "M",
                cssClass: "appear",
                hold: !0
            }),
            this.addKeyframe({
                el: this.sectionContent,
                start: "a0t - 50vh",
                end: "a0b",
                anchors: [this.el],
                breakpointMask: "S",
                cssClass: "appear",
                hold: !0
            })
        }
        initSiri() {
            this.addKeyframe({
                el: this.gallerySiriItem,
                start: "a0t - 80vh",
                anchors: [this.el],
                cssClass: "engaged"
            })
        }
        static IS_SUPPORTED() {
            return document.documentElement.classList.contains("enhance-base-xp")
        }
    }
}
, function(e, t, i) {
    "use strict";
    const s = i(5)
      , r = i(78)
      , n = i(79)
      , a = i(80)
      , o = i(81)
      , h = i(82)
      , l = i(83)
      , c = i(84)
      , u = i(85)
      , d = i(86)
      , m = i(41)
      , p = i(87)
      , f = (e,t,i,s,r)=>{
        t = window.innerWidth >= 735 || window.innerWidth <= 1068 || p() ? 1 : 2;
        let n = e._items.length - 1
          , a = i;
        return i === n - t && (e.lastSlide = !0,
        a = n - t),
        e.currentIndex === n && (e.lastSlide = !1,
        a = n - t + s * r),
        a
    }
      , _ = {
        beforeCreate() {
            this.model.PrefersReducedMotion = document.documentElement.classList.contains("reduced-motion") || document.documentElement.classList.contains("aow"),
            this.model.IsRTL = "rtl" === document.documentElement.getAttribute("dir"),
            this.model.IsTouch = "ontouchstart"in document.documentElement,
            this.model.Item.Selector = ".item-container .gallery-item",
            this.model.Slide.Selector = ".item-container",
            this.model.Slide.duration = 1
        },
        itemsCreated() {
            let e = 0;
            this._items.forEach((t=>{
                t._height > e && (e = t._height)
            }
            )),
            window.innerWidth >= 1069 && e < 480 && (e = 480),
            window.innerWidth <= 1068 && window.innerWidth >= 734 && e < 380 && (e = 380),
            window.innerWidth <= 734 && e < 370 && (e = 370),
            this._items.forEach((t=>{
                t.el.style.setProperty("height", `${e}px`)
            }
            ));
            let t = this.el.querySelector(".item-container");
            t.style.setProperty("--slide-min-height", `${e}px`),
            t.style.setProperty("height", `${e}px`)
        },
        onResizeImmediate() {
            let e = 0
              , t = this.el.querySelector(".item-container");
            t.style.height = "auto",
            this._items.forEach((e=>{
                e.el.style.height = "auto"
            }
            )),
            this._items.forEach((t=>{
                t.el.offsetHeight > e && (e = t.el.offsetHeight)
            }
            )),
            window.innerWidth >= 1069 && e < 480 && (e = 480),
            window.innerWidth <= 1068 && window.innerWidth >= 734 && e < 380 && (e = 380),
            window.innerWidth <= 734 && e < 370 && (e = 370),
            this._items.forEach((t=>{
                t.el.style.height = `${e}px`
            }
            )),
            t.style.height = `${e}px`,
            e = 0
        }
    }
      , g = {
        mounted() {
            l.mounted.apply(this, arguments)
        },
        destroy() {
            l.destroy.apply(this, arguments)
        },
        onPaddleNavSelected(e) {
            if (this.clip && this.clip._isPlaying)
                return;
            this.slideContainer.parentElement.scrollLeft = 0;
            let t = e.currentTarget.className.includes("previous") ? -1 : 1;
            this.lastInteractionEvent = e,
            this.lastSlide = !1;
            let i = this.currentIndex + 1 * t;
            i = f(this, 1, i, t, 1),
            this.animateToItem(i)
        },
        onItemChangeCompleted(e) {
            this.lastSlide && (this.currentIndex = this._items.length - 1),
            l.onItemChangeCompleted.apply(this, arguments)
        }
    }
      , y = {
        wrapSlideItems() {
            this.clampedIndex
        }
    }
      , E = {
        created(e) {
            h.created.apply(this, arguments)
        },
        itemsCreated() {
            this._items.forEach((e=>{
                e.el.querySelector("a").addEventListener("focus", (()=>{
                    this.onItemFocus(e)
                }
                ))
            }
            ))
        },
        destroy() {
            h.destroy.apply(this, arguments)
        },
        handleIntersect() {
            h.handleIntersect.apply(this, arguments)
        },
        onKeyDown(e) {
            let t = this.el.querySelector(".item-container")
              , i = getComputedStyle(t).getPropertyValue("--slide-min-screen-width");
            if (!(!this.isInView || this.inputHasFocus() || this.clip && this.clip._isPlaying || window.innerWidth >= i || 37 !== e.keyCode && 39 !== e.keyCode)) {
                let t = this.model.IsRTL ? -1 : 1
                  , i = 37 === e.keyCode ? -1 : 1;
                this.lastInteractionEvent = e;
                let s = this.currentIndex + i * t;
                s = f(this, 1, s, i, t),
                this.animateToItem(s)
            }
        },
        onItemFocus({index: e}) {
            e === this._items.length - 2 ? this.lastSlide = !0 : e !== this._items.length - 1 && (this.lastSlide = !1),
            e !== this._items.length - 1 && this.animateToItem(e)
        },
        inputHasFocus() {
            h.inputHasFocus.apply(this, arguments)
        },
        onItemChangeCompleted() {
            this.lastSlide && (this.currentIndex = this._items.length - 1)
        }
    };
    e.exports = class extends s {
        constructor() {
            super(...arguments)
        }
        mounted() {
            const e = n.combine([{
                mixin: h,
                breakpointMask: "S"
            }, {
                mixin: E,
                breakpointMask: "ML"
            }])
              , t = n.combine([{
                mixin: l,
                breakpointMask: "S"
            }, {
                mixin: g,
                breakpointMask: "ML"
            }])
              , i = r.withMixins(_, a, d, o, e, t, c, u, y);
            this.removeSetAriaVisibilityOnChangeCompleted(i, ["itemsCreated", "onItemChangeCompleted"]);
            new i({
                el: document.querySelector("#smart-home-gallery")
            })
        }
        removeSetAriaVisibilityOnChangeCompleted(e, t) {
            t.forEach((t=>{
                let i = e.prototype[`__ ${t}`].indexOf(m[t]);
                e.prototype[`__ ${t}`].splice(i, 1)
            }
            ))
        }
        onResizeDebounced() {}
    }
}
]);
