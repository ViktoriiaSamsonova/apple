!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(o, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 0)
}([function(e, t, n) {
    e.exports = n(1)
}
, function(e, t, n) {
    "use strict";
    ({
        initialize() {
            let e = document.documentElement.dataset.segmentCode;
            if (e)
                return void this.hideACMI(e);
            const t = document.documentElement;
            new MutationObserver(((t,n)=>{
                for (const o of t) {
                    if ("data-segment-code" === o.attributeName)
                        return e = document.documentElement.dataset.segmentCode,
                        n.disconnect(),
                        this.hideACMI(e),
                        void this.watchExit()
                }
            }
            )).observe(t, {
                attributes: !0
            })
        },
        hideACMI(e) {
            "eduind" === e || document.documentElement.classList.add("hide-acmi")
        },
        watchExit() {
            let e = document.documentElement.querySelector(".ac-gn-segmentbar-exit, .globalmessage-segment-exit");
            if (e)
                return void this.handleExitClicked(e);
            const t = document.documentElement.querySelector(".globalmessage-segment-content");
            new MutationObserver(((t,n)=>{
                for (const o of t)
                    if (e = o.target.querySelector(".ac-gn-segmentbar-exit, .globalmessage-segment-exit"),
                    e)
                        return n.disconnect(),
                        void this.handleExitClicked(e)
            }
            )).observe(t, {
                childList: !0
            })
        },
        handleExitClicked(e) {
            e.addEventListener("click", (e=>{
                document.documentElement.classList.remove("hide-acmi")
            }
            ), {
                once: !0
            })
        }
    }).initialize()
}
]);
