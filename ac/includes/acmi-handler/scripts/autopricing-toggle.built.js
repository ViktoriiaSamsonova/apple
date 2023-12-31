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
    n(n.s = 2)
}([, , function(e, t, n) {
    e.exports = n(3)
}
, function(e, t, n) {
    "use strict";
    ({
        pricingElements: [],
        initialize() {
            if (this.pricingElements = [...document.querySelectorAll("[data-product-template]")],
            !(this.pricingElements.length < 1)) {
                if (this.createTemplate(),
                document.documentElement.classList.contains("hide-acmi"))
                    return this.toggleACMI(),
                    void this.watchExit();
                this.watchHideACMI()
            }
        },
        createTemplate() {
            const e = document.createElement("template");
            e.classList.add("acmi-template");
            this.pricingElements.map(((t,n)=>{
                t.dataset.acmiIdx = n,
                t.dataset.displayStyle = t.style.display;
                const o = t.dataset.productTemplate.toLowerCase();
                if (!o.includes("month"))
                    return null;
                if (o.includes("monthlyfrom")) {
                    const n = e.appendChild(t.cloneNode(!0));
                    return n.classList.add("acmi-cached"),
                    n.dataset.productTemplate = n.dataset.productTemplate.replace("monthlyFrom", "from"),
                    n
                }
                return t
            }
            ));
            document.documentElement.appendChild(e)
        },
        watchHideACMI() {
            const e = document.documentElement;
            new MutationObserver(((e,t)=>{
                for (const n of e) {
                    if ("class" === n.attributeName && document.documentElement.classList.contains("hide-acmi"))
                        return t.disconnect(),
                        this.toggleACMI(),
                        void this.watchExit()
                }
            }
            )).observe(e, {
                attributes: !0
            })
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
                this.toggleACMI()
            }
            ), {
                once: !0
            })
        },
        toggleACMI() {
            const e = document.querySelector(".acmi-template")
              , t = [...e.querySelectorAll("[data-acmi-idx]")]
              , n = [...document.querySelectorAll("[data-product-template]")];
            for (const o of t) {
                const t = parseInt(o.dataset.acmiIdx)
                  , i = n[t].parentNode;
                o.cloneNode(!0);
                i.replaceChild(o, n[t]),
                e.appendChild(n[t])
            }
        }
    }).initialize()
}
]);
