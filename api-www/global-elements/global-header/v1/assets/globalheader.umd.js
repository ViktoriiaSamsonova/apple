(function(mt) {
    typeof define == "function" && define.amd ? define(mt) : mt()
}
)(function() {
    "use strict";
    function mt(e, t) {
        return t.forEach(function(s) {
            s && typeof s != "string" && !Array.isArray(s) && Object.keys(s).forEach(function(n) {
                if (n !== "default" && !(n in e)) {
                    var a = Object.getOwnPropertyDescriptor(s, n);
                    Object.defineProperty(e, n, a.get ? a : {
                        enumerable: !0,
                        get: function() {
                            return s[n]
                        }
                    })
                }
            })
        }),
        Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }))
    }
    var Ye, M, es, ts, Je, ss, ns, dt = {}, is = [], Pn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function Ne(e, t) {
        for (var s in t)
            e[s] = t[s];
        return e
    }
    function as(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function Xe(e, t, s) {
        var n, a, i, l = {};
        for (i in t)
            i == "key" ? n = t[i] : i == "ref" ? a = t[i] : l[i] = t[i];
        if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ye.call(arguments, 2) : s),
        typeof e == "function" && e.defaultProps != null)
            for (i in e.defaultProps)
                l[i] === void 0 && (l[i] = e.defaultProps[i]);
        return et(e, l, n, a, null)
    }
    function et(e, t, s, n, a) {
        var i = {
            type: e,
            props: t,
            key: s,
            ref: n,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: a == null ? ++es : a
        };
        return a == null && M.vnode != null && M.vnode(i),
        i
    }
    function Dn() {
        return {
            current: null
        }
    }
    function X(e) {
        return e.children
    }
    function ye(e, t) {
        this.props = e,
        this.context = t
    }
    function tt(e, t) {
        if (t == null)
            return e.__ ? tt(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var s; t < e.__k.length; t++)
            if ((s = e.__k[t]) != null && s.__e != null)
                return s.__e;
        return typeof e.type == "function" ? tt(e) : null
    }
    function os(e) {
        var t, s;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if ((s = e.__k[t]) != null && s.__e != null) {
                    e.__e = e.__c.base = s.__e;
                    break
                }
            return os(e)
        }
    }
    function Ft(e) {
        (!e.__d && (e.__d = !0) && Je.push(e) && !pt.__r++ || ss !== M.debounceRendering) && ((ss = M.debounceRendering) || setTimeout)(pt)
    }
    function pt() {
        for (var e; pt.__r = Je.length; )
            e = Je.sort(function(t, s) {
                return t.__v.__b - s.__v.__b
            }),
            Je = [],
            e.some(function(t) {
                var s, n, a, i, l, h;
                t.__d && (l = (i = (s = t).__v).__e,
                (h = s.__P) && (n = [],
                (a = Ne({}, i)).__v = i.__v + 1,
                $t(h, i, a, s.__n, h.ownerSVGElement !== void 0, i.__h != null ? [l] : null, n, l == null ? tt(i) : l, i.__h),
                ds(n, i),
                i.__e != l && os(i)))
            })
    }
    function rs(e, t, s, n, a, i, l, h, c, f) {
        var r, v, b, o, g, k, T, I = n && n.__k || is, y = I.length;
        for (s.__k = [],
        r = 0; r < t.length; r++)
            if ((o = s.__k[r] = (o = t[r]) == null || typeof o == "boolean" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" ? et(null, o, null, null, o) : Array.isArray(o) ? et(X, {
                children: o
            }, null, null, null) : o.__b > 0 ? et(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null) {
                if (o.__ = s,
                o.__b = s.__b + 1,
                (b = I[r]) === null || b && o.key == b.key && o.type === b.type)
                    I[r] = void 0;
                else
                    for (v = 0; v < y; v++) {
                        if ((b = I[v]) && o.key == b.key && o.type === b.type) {
                            I[v] = void 0;
                            break
                        }
                        b = null
                    }
                $t(e, o, b = b || dt, a, i, l, h, c, f),
                g = o.__e,
                (v = o.ref) && b.ref != v && (T || (T = []),
                b.ref && T.push(b.ref, null, o),
                T.push(v, o.__c || g, o)),
                g != null ? (k == null && (k = g),
                typeof o.type == "function" && o.__k === b.__k ? o.__d = c = ls(o, c, e) : c = cs(e, o, b, I, g, c),
                typeof s.type == "function" && (s.__d = c)) : c && b.__e == c && c.parentNode != e && (c = tt(b))
            }
        for (s.__e = k,
        r = y; r--; )
            I[r] != null && fs(I[r], I[r]);
        if (T)
            for (r = 0; r < T.length; r++)
                ps(T[r], T[++r], T[++r])
    }
    function ls(e, t, s) {
        for (var n, a = e.__k, i = 0; a && i < a.length; i++)
            (n = a[i]) && (n.__ = e,
            t = typeof n.type == "function" ? ls(n, t, s) : cs(s, n, n, a, n.__e, t));
        return t
    }
    function st(e, t) {
        return t = t || [],
        e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(s) {
            st(s, t)
        }) : t.push(e)),
        t
    }
    function cs(e, t, s, n, a, i) {
        var l, h, c;
        if (t.__d !== void 0)
            l = t.__d,
            t.__d = void 0;
        else if (s == null || a != i || a.parentNode == null)
            e: if (i == null || i.parentNode !== e)
                e.appendChild(a),
                l = null;
            else {
                for (h = i,
                c = 0; (h = h.nextSibling) && c < n.length; c += 2)
                    if (h == a)
                        break e;
                e.insertBefore(a, i),
                l = i
            }
        return l !== void 0 ? l : a.nextSibling
    }
    function Hn(e, t, s, n, a) {
        var i;
        for (i in s)
            i === "children" || i === "key" || i in t || ft(e, i, null, s[i], n);
        for (i in t)
            a && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || s[i] === t[i] || ft(e, i, t[i], s[i], n)
    }
    function us(e, t, s) {
        t[0] === "-" ? e.setProperty(t, s) : e[t] = s == null ? "" : typeof s != "number" || Pn.test(t) ? s : s + "px"
    }
    function ft(e, t, s, n, a) {
        var i;
        e: if (t === "style")
            if (typeof s == "string")
                e.style.cssText = s;
            else {
                if (typeof n == "string" && (e.style.cssText = n = ""),
                n)
                    for (t in n)
                        s && t in s || us(e.style, t, "");
                if (s)
                    for (t in s)
                        n && s[t] === n[t] || us(e.style, t, s[t])
            }
        else if (t[0] === "o" && t[1] === "n")
            i = t !== (t = t.replace(/Capture$/, "")),
            t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = s,
            s ? n || e.addEventListener(t, i ? ms : hs, i) : e.removeEventListener(t, i ? ms : hs, i);
        else if (t !== "dangerouslySetInnerHTML") {
            if (a)
                t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
                try {
                    e[t] = s == null ? "" : s;
                    break e
                } catch {}
            typeof s == "function" || (s == null || s === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, s))
        }
    }
    function hs(e) {
        this.l[e.type + !1](M.event ? M.event(e) : e)
    }
    function ms(e) {
        this.l[e.type + !0](M.event ? M.event(e) : e)
    }
    function $t(e, t, s, n, a, i, l, h, c) {
        var f, r, v, b, o, g, k, T, I, y, w, L, x, D, K, W = t.type;
        if (t.constructor !== void 0)
            return null;
        s.__h != null && (c = s.__h,
        h = t.__e = s.__e,
        t.__h = null,
        i = [h]),
        (f = M.__b) && f(t);
        try {
            e: if (typeof W == "function") {
                if (T = t.props,
                I = (f = W.contextType) && n[f.__c],
                y = f ? I ? I.props.value : f.__ : n,
                s.__c ? k = (r = t.__c = s.__c).__ = r.__E : ("prototype"in W && W.prototype.render ? t.__c = r = new W(T,y) : (t.__c = r = new ye(T,y),
                r.constructor = W,
                r.render = Un),
                I && I.sub(r),
                r.props = T,
                r.state || (r.state = {}),
                r.context = y,
                r.__n = n,
                v = r.__d = !0,
                r.__h = [],
                r._sb = []),
                r.__s == null && (r.__s = r.state),
                W.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = Ne({}, r.__s)),
                Ne(r.__s, W.getDerivedStateFromProps(T, r.__s))),
                b = r.props,
                o = r.state,
                v)
                    W.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(),
                    r.componentDidMount != null && r.__h.push(r.componentDidMount);
                else {
                    if (W.getDerivedStateFromProps == null && T !== b && r.componentWillReceiveProps != null && r.componentWillReceiveProps(T, y),
                    !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(T, r.__s, y) === !1 || t.__v === s.__v) {
                        for (r.props = T,
                        r.state = r.__s,
                        t.__v !== s.__v && (r.__d = !1),
                        r.__v = t,
                        t.__e = s.__e,
                        t.__k = s.__k,
                        t.__k.forEach(function(te) {
                            te && (te.__ = t)
                        }),
                        w = 0; w < r._sb.length; w++)
                            r.__h.push(r._sb[w]);
                        r._sb = [],
                        r.__h.length && l.push(r);
                        break e
                    }
                    r.componentWillUpdate != null && r.componentWillUpdate(T, r.__s, y),
                    r.componentDidUpdate != null && r.__h.push(function() {
                        r.componentDidUpdate(b, o, g)
                    })
                }
                if (r.context = y,
                r.props = T,
                r.__v = t,
                r.__P = e,
                L = M.__r,
                x = 0,
                "prototype"in W && W.prototype.render) {
                    for (r.state = r.__s,
                    r.__d = !1,
                    L && L(t),
                    f = r.render(r.props, r.state, r.context),
                    D = 0; D < r._sb.length; D++)
                        r.__h.push(r._sb[D]);
                    r._sb = []
                } else
                    do
                        r.__d = !1,
                        L && L(t),
                        f = r.render(r.props, r.state, r.context),
                        r.state = r.__s;
                    while (r.__d && ++x < 25);
                r.state = r.__s,
                r.getChildContext != null && (n = Ne(Ne({}, n), r.getChildContext())),
                v || r.getSnapshotBeforeUpdate == null || (g = r.getSnapshotBeforeUpdate(b, o)),
                K = f != null && f.type === X && f.key == null ? f.props.children : f,
                rs(e, Array.isArray(K) ? K : [K], t, s, n, a, i, l, h, c),
                r.base = t.__e,
                t.__h = null,
                r.__h.length && l.push(r),
                k && (r.__E = r.__ = null),
                r.__e = !1
            } else
                i == null && t.__v === s.__v ? (t.__k = s.__k,
                t.__e = s.__e) : t.__e = Wn(s.__e, t, s, n, a, i, l, c);
            (f = M.diffed) && f(t)
        } catch (te) {
            t.__v = null,
            (c || i != null) && (t.__e = h,
            t.__h = !!c,
            i[i.indexOf(h)] = null),
            M.__e(te, t, s)
        }
    }
    function ds(e, t) {
        M.__c && M.__c(t, e),
        e.some(function(s) {
            try {
                e = s.__h,
                s.__h = [],
                e.some(function(n) {
                    n.call(s)
                })
            } catch (n) {
                M.__e(n, s.__v)
            }
        })
    }
    function Wn(e, t, s, n, a, i, l, h) {
        var c, f, r, v = s.props, b = t.props, o = t.type, g = 0;
        if (o === "svg" && (a = !0),
        i != null) {
            for (; g < i.length; g++)
                if ((c = i[g]) && "setAttribute"in c == !!o && (o ? c.localName === o : c.nodeType === 3)) {
                    e = c,
                    i[g] = null;
                    break
                }
        }
        if (e == null) {
            if (o === null)
                return document.createTextNode(b);
            e = a ? document.createElementNS("http://www.w3.org/2000/svg", o) : document.createElement(o, b.is && b),
            i = null,
            h = !1
        }
        if (o === null)
            v === b || h && e.data === b || (e.data = b);
        else {
            if (i = i && Ye.call(e.childNodes),
            f = (v = s.props || dt).dangerouslySetInnerHTML,
            r = b.dangerouslySetInnerHTML,
            !h) {
                if (i != null)
                    for (v = {},
                    g = 0; g < e.attributes.length; g++)
                        v[e.attributes[g].name] = e.attributes[g].value;
                (r || f) && (r && (f && r.__html == f.__html || r.__html === e.innerHTML) || (e.innerHTML = r && r.__html || ""))
            }
            if (Hn(e, b, v, a, h),
            r)
                t.__k = [];
            else if (g = t.props.children,
            rs(e, Array.isArray(g) ? g : [g], t, s, n, a && o !== "foreignObject", i, l, i ? i[0] : s.__k && tt(s, 0), h),
            i != null)
                for (g = i.length; g--; )
                    i[g] != null && as(i[g]);
            h || ("value"in b && (g = b.value) !== void 0 && (g !== e.value || o === "progress" && !g || o === "option" && g !== v.value) && ft(e, "value", g, v.value, !1),
            "checked"in b && (g = b.checked) !== void 0 && g !== e.checked && ft(e, "checked", g, v.checked, !1))
        }
        return e
    }
    function ps(e, t, s) {
        try {
            typeof e == "function" ? e(t) : e.current = t
        } catch (n) {
            M.__e(n, s)
        }
    }
    function fs(e, t, s) {
        var n, a;
        if (M.unmount && M.unmount(e),
        (n = e.ref) && (n.current && n.current !== e.__e || ps(n, null, t)),
        (n = e.__c) != null) {
            if (n.componentWillUnmount)
                try {
                    n.componentWillUnmount()
                } catch (i) {
                    M.__e(i, t)
                }
            n.base = n.__P = null,
            e.__c = void 0
        }
        if (n = e.__k)
            for (a = 0; a < n.length; a++)
                n[a] && fs(n[a], t, s || typeof e.type != "function");
        s || e.__e == null || as(e.__e),
        e.__ = e.__e = e.__d = void 0
    }
    function Un(e, t, s) {
        return this.constructor(e, s)
    }
    function gs(e, t, s) {
        var n, a, i;
        M.__ && M.__(e, t),
        a = (n = typeof s == "function") ? null : s && s.__k || t.__k,
        i = [],
        $t(t, e = (!n && s || t).__k = Xe(X, null, [e]), a || dt, dt, t.ownerSVGElement !== void 0, !n && s ? [s] : a ? null : t.firstChild ? Ye.call(t.childNodes) : null, i, !n && s ? s : a ? a.__e : t.firstChild, n),
        ds(i, e)
    }
    function Tt(e, t) {
        gs(e, t, Tt)
    }
    function Vn(e, t, s) {
        var n, a, i, l = Ne({}, e.props);
        for (i in t)
            i == "key" ? n = t[i] : i == "ref" ? a = t[i] : l[i] = t[i];
        return arguments.length > 2 && (l.children = arguments.length > 3 ? Ye.call(arguments, 2) : s),
        et(e.type, l, n || e.key, a || e.ref, null)
    }
    function gt(e, t) {
        var s = {
            __c: t = "__cC" + ns++,
            __: e,
            Consumer: function(n, a) {
                return n.children(a)
            },
            Provider: function(n) {
                var a, i;
                return this.getChildContext || (a = [],
                (i = {})[t] = this,
                this.getChildContext = function() {
                    return i
                }
                ,
                this.shouldComponentUpdate = function(l) {
                    this.props.value !== l.value && a.some(Ft)
                }
                ,
                this.sub = function(l) {
                    a.push(l);
                    var h = l.componentWillUnmount;
                    l.componentWillUnmount = function() {
                        a.splice(a.indexOf(l), 1),
                        h && h.call(l)
                    }
                }
                ),
                n.children
            }
        };
        return s.Provider.__ = s.Consumer.contextType = s
    }
    Ye = is.slice,
    M = {
        __e: function(e, t, s, n) {
            for (var a, i, l; t = t.__; )
                if ((a = t.__c) && !a.__)
                    try {
                        if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(e)),
                        l = a.__d),
                        a.componentDidCatch != null && (a.componentDidCatch(e, n || {}),
                        l = a.__d),
                        l)
                            return a.__E = a
                    } catch (h) {
                        e = h
                    }
            throw e
        }
    },
    es = 0,
    ts = function(e) {
        return e != null && e.constructor === void 0
    }
    ,
    ye.prototype.setState = function(e, t) {
        var s;
        s = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state),
        typeof e == "function" && (e = e(Ne({}, s), this.props)),
        e && Ne(s, e),
        e != null && this.__v && (t && this._sb.push(t),
        Ft(this))
    }
    ,
    ye.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        Ft(this))
    }
    ,
    ye.prototype.render = X,
    Je = [],
    pt.__r = 0,
    ns = 0;
    var qn = Object.freeze(Object.defineProperty({
        __proto__: null,
        Component: ye,
        Fragment: X,
        cloneElement: Vn,
        createContext: gt,
        createElement: Xe,
        createRef: Dn,
        h: Xe,
        hydrate: Tt,
        get isValidElement() {
            return ts
        },
        get options() {
            return M
        },
        render: gs,
        toChildArray: st
    }, Symbol.toStringTag, {
        value: "Module"
    })), we, V, Ot, _s, We = 0, vs = [], _t = [], bs = M.__b, ys = M.__r, Ss = M.diffed, Es = M.__c, Ns = M.unmount;
    function Pe(e, t) {
        M.__h && M.__h(V, e, We || t),
        We = 0;
        var s = V.__H || (V.__H = {
            __: [],
            __h: []
        });
        return e >= s.__.length && s.__.push({
            __V: _t
        }),
        s.__[e]
    }
    function se(e) {
        return We = 1,
        ws(Ms, e)
    }
    function ws(e, t, s) {
        var n = Pe(we++, 2);
        if (n.t = e,
        !n.__c && (n.__ = [s ? s(t) : Ms(void 0, t), function(i) {
            var l = n.__N ? n.__N[0] : n.__[0]
              , h = n.t(l, i);
            l !== h && (n.__N = [h, n.__[1]],
            n.__c.setState({}))
        }
        ],
        n.__c = V,
        !V.u)) {
            V.u = !0;
            var a = V.shouldComponentUpdate;
            V.shouldComponentUpdate = function(i, l, h) {
                if (!n.__c.__H)
                    return !0;
                var c = n.__c.__H.__.filter(function(r) {
                    return r.__c
                });
                if (c.every(function(r) {
                    return !r.__N
                }))
                    return !a || a.call(this, i, l, h);
                var f = !1;
                return c.forEach(function(r) {
                    if (r.__N) {
                        var v = r.__[0];
                        r.__ = r.__N,
                        r.__N = void 0,
                        v !== r.__[0] && (f = !0)
                    }
                }),
                !(!f && n.__c.props === i) && (!a || a.call(this, i, l, h))
            }
        }
        return n.__N || n.__
    }
    function fe(e, t) {
        var s = Pe(we++, 3);
        !M.__s && Rt(s.__H, t) && (s.__ = e,
        s.i = t,
        V.__H.__h.push(s))
    }
    function Cs(e, t) {
        var s = Pe(we++, 4);
        !M.__s && Rt(s.__H, t) && (s.__ = e,
        s.i = t,
        V.__h.push(s))
    }
    function z(e) {
        return We = 5,
        It(function() {
            return {
                current: e
            }
        }, [])
    }
    function jn(e, t, s) {
        We = 6,
        Cs(function() {
            return typeof e == "function" ? (e(t()),
            function() {
                return e(null)
            }
            ) : e ? (e.current = t(),
            function() {
                return e.current = null
            }
            ) : void 0
        }, s == null ? s : s.concat(e))
    }
    function It(e, t) {
        var s = Pe(we++, 7);
        return Rt(s.__H, t) ? (s.__V = e(),
        s.i = t,
        s.__h = e,
        s.__V) : s.__
    }
    function Ls(e, t) {
        return We = 8,
        It(function() {
            return e
        }, t)
    }
    function nt(e) {
        var t = V.context[e.__c]
          , s = Pe(we++, 9);
        return s.c = e,
        t ? (s.__ == null && (s.__ = !0,
        t.sub(V)),
        t.props.value) : e.__
    }
    function Zn(e, t) {
        M.useDebugValue && M.useDebugValue(t ? t(e) : e)
    }
    function Gn(e) {
        var t = Pe(we++, 10)
          , s = se();
        return t.__ = e,
        V.componentDidCatch || (V.componentDidCatch = function(n, a) {
            t.__ && t.__(n, a),
            s[1](n)
        }
        ),
        [s[0], function() {
            s[1](void 0)
        }
        ]
    }
    function zn() {
        var e = Pe(we++, 11);
        return e.__ || (e.__ = "P" + function(t) {
            for (var s = 0, n = t.length; n > 0; )
                s = (s << 5) - s + t.charCodeAt(--n) | 0;
            return s
        }(V.__v.__m) + we),
        e.__
    }
    function Kn() {
        for (var e; e = vs.shift(); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(vt),
                    e.__H.__h.forEach(xt),
                    e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [],
                    M.__e(t, e.__v)
                }
    }
    M.__b = function(e) {
        typeof e.type != "function" || e.__m || e.__ === null ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0),
        V = null,
        bs && bs(e)
    }
    ,
    M.__r = function(e) {
        ys && ys(e),
        we = 0;
        var t = (V = e.__c).__H;
        t && (Ot === V ? (t.__h = [],
        V.__h = [],
        t.__.forEach(function(s) {
            s.__N && (s.__ = s.__N),
            s.__V = _t,
            s.__N = s.i = void 0
        })) : (t.__h.forEach(vt),
        t.__h.forEach(xt),
        t.__h = [])),
        Ot = V
    }
    ,
    M.diffed = function(e) {
        Ss && Ss(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (vs.push(t) !== 1 && _s === M.requestAnimationFrame || ((_s = M.requestAnimationFrame) || Qn)(Kn)),
        t.__H.__.forEach(function(s) {
            s.i && (s.__H = s.i),
            s.__V !== _t && (s.__ = s.__V),
            s.i = void 0,
            s.__V = _t
        })),
        Ot = V = null
    }
    ,
    M.__c = function(e, t) {
        t.some(function(s) {
            try {
                s.__h.forEach(vt),
                s.__h = s.__h.filter(function(n) {
                    return !n.__ || xt(n)
                })
            } catch (n) {
                t.some(function(a) {
                    a.__h && (a.__h = [])
                }),
                t = [],
                M.__e(n, s.__v)
            }
        }),
        Es && Es(e, t)
    }
    ,
    M.unmount = function(e) {
        Ns && Ns(e);
        var t, s = e.__c;
        s && s.__H && (s.__H.__.forEach(function(n) {
            try {
                vt(n)
            } catch (a) {
                t = a
            }
        }),
        s.__H = void 0,
        t && M.__e(t, s.__v))
    }
    ;
    var As = typeof requestAnimationFrame == "function";
    function Qn(e) {
        var t, s = function() {
            clearTimeout(n),
            As && cancelAnimationFrame(t),
            setTimeout(e)
        }, n = setTimeout(s, 100);
        As && (t = requestAnimationFrame(s))
    }
    function vt(e) {
        var t = V
          , s = e.__c;
        typeof s == "function" && (e.__c = void 0,
        s()),
        V = t
    }
    function xt(e) {
        var t = V;
        e.__c = e.__(),
        V = t
    }
    function Rt(e, t) {
        return !e || e.length !== t.length || t.some(function(s, n) {
            return s !== e[n]
        })
    }
    function Ms(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    var Yn = Object.freeze(Object.defineProperty({
        __proto__: null,
        useCallback: Ls,
        useContext: nt,
        useDebugValue: Zn,
        useEffect: fe,
        useErrorBoundary: Gn,
        useId: zn,
        useImperativeHandle: jn,
        useLayoutEffect: Cs,
        useMemo: It,
        useReducer: ws,
        useRef: z,
        useState: se
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    function Bt(e) {
        return e === "true"
    }
    function Jn(e) {
        return e.split("-").map((t,s)=>s === 0 ? t.toLowerCase() : t.charAt(0).toUpperCase() + t.slice(1)).join("")
    }
    function ks(e, t) {
        const s = {}
          , n = {};
        return e.forEach(a=>{
            const {name: i, content: l} = a
              , h = Jn(i.replace(t, ""))
              , c = Xn(l)
              , f = h.match(/\[(.*)\]$/i);
            if (f !== null) {
                const r = h.replace(f[0], "")
                  , v = f[1];
                n[v] = c,
                s[r] = n
            } else
                s[h] = c
        }
        ),
        s
    }
    function Xn(e) {
        return e === "true" || e === "false" ? Bt(e) : e
    }
    const Pt = gt(void 0)
      , ei = Pt.Provider
      , ti = Pt.Consumer
      , Fs = "data-segment-code"
      , $s = "globalmessage-segment-visible"
      , Ts = "ac-gn-segmentbar-visible"
      , Os = (e,t)=>{
        var s, n;
        e.showBanner ? (t(!0),
        (s = document.querySelector("html")) == null || s.classList.add(`${$s}`, `${Ts}`),
        document.documentElement.setAttribute(`${Fs}`, e.segmentCode.toLowerCase())) : (t(!1),
        (n = document.querySelector("html")) == null || n.classList.remove(`${$s}`, `${Ts}`),
        document.documentElement.removeAttribute(`${Fs}`))
    }
    ;
    var si = 0;
    function m(e, t, s, n, a) {
        var i, l, h = {};
        for (l in t)
            l == "ref" ? i = t[l] : h[l] = t[l];
        var c = {
            type: e,
            props: h,
            key: s,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --si,
            __source: a,
            __self: n
        };
        if (typeof e == "function" && (i = e.defaultProps))
            for (l in i)
                h[l] === void 0 && (h[l] = i[l]);
        return M.vnode && M.vnode(c),
        c
    }
    const ni = "/shop/goto/home"
      , ii = "/shop/goto/exitstore"
      , ai = (e,t)=>{
        if (t in e && e[t] !== "")
            return e[t];
        const s = Object.keys(e);
        let n = "";
        return s.forEach(a=>{
            t !== void 0 && t.indexOf(`${a}-`) === 0 && e[a] !== "" && (n = e[a])
        }
        ),
        n !== "" ? n : e.other
    }
      , Is = (e,t,s,n)=>{
        if (e.name !== void 0 && e.name !== "") {
            const a = t.view.replace("{%STOREFRONT%}", e.name);
            s(a)
        } else {
            const a = ai(t.segments, e.segmentCode);
            s(a)
        }
        Os(e, n)
    }
    ;
    function oi({view: e, segments: t, exit: s, exitRedirect: n=!1, wwwDomain: a, storeUrlPath: i}) {
        const l = nt(Pt)
          , h = z(null)
          , [c,f] = se("")
          , [r,v] = se(!1)
          , b = `https://${a}${i}${ni}`
          , o = `https://${a}${i}${ii}`;
        fe(()=>{
            var k, T;
            if (((k = h.current) == null ? void 0 : k.dataset.strings) !== void 0) {
                const I = JSON.parse(String((T = h.current) == null ? void 0 : T.dataset.strings));
                l == null || l.getStorefront().then(y=>{
                    Is(y, I, f, v)
                }
                , ()=>{}
                ),
                l == null || l.on("storefrontChange", y=>{
                    Is(y, I, f, v)
                }
                )
            }
        }
        , [l]);
        const g = (k,T)=>{
            l == null || l.exitStorefront(k),
            k || (T.preventDefault(),
            l == null || l.getStorefront().then(I=>{
                Os(I, v)
            }
            , ()=>{}
            )),
            window.dispatchEvent(new CustomEvent("resize")),
            window.dispatchEvent(new CustomEvent("segmentExit"))
        }
        ;
        return m(X, {
            children: m("ul", {
                class: "globalmessage-segment-content",
                "data-strings": JSON.stringify({
                    view: e,
                    segments: t,
                    exit: s
                }),
                ref: h,
                children: r && m(X, {
                    children: [m("li", {
                        class: "globalmessage-segment-item",
                        children: m("a", {
                            href: b,
                            class: "globalmessage-segment-link globalmessage-segment-view",
                            children: c
                        })
                    }), m("li", {
                        class: "globalmessage-segment-item",
                        children: m("a", {
                            href: o,
                            class: "globalmessage-segment-link globalmessage-segment-exit",
                            onClick: k=>g(n, k),
                            children: s
                        })
                    })]
                })
            })
        })
    }
    function ri({locale: e="en-US", textDirection: t="ltr", dataStrings: s, exitRedirect: n=!1, wwwDomain: a, storeUrlPath: i}) {
        return m("aside", {
            id: "globalmessage-segment",
            className: "globalmessage-segment",
            lang: e,
            dir: t,
            children: m(oi, {
                ...s,
                exitRedirect: n,
                wwwDomain: a,
                storeUrlPath: i
            })
        })
    }
    function li({segmentData: e, isoLocale: t, textDirection: s="ltr", wwwDomain: n, storeUrlPath: a}) {
        const i = z(!1);
        return fe(()=>{
            const l = document.querySelectorAll('meta[name^="globalmessage-"]')
              , h = Array.from(l)
              , c = ks(h, "globalmessage-");
            i.current = c.segmentRedirect
        }
        , []),
        m(X, {
            children: e !== void 0 && a !== void 0 && m(ri, {
                locale: t,
                textDirection: s,
                exitRedirect: i.current,
                dataStrings: e.dataStrings,
                wwwDomain: n,
                storeUrlPath: a
            })
        })
    }
    var Zo = ""
      , ci = {
        _attachEvents() {
            for (let e of this.events)
                Object.defineProperty(this.options.ref, e, {
                    value: (...t)=>this.__triggerEvent(e, ...t),
                    configurable: !0,
                    enumerable: !1,
                    writable: !1
                })
        },
        _attachMethods() {
            for (let e of this.mixinsList)
                for (let t in e) {
                    const s = Object.getOwnPropertyDescriptor(e, t);
                    switch (!0) {
                    case (typeof e[t] == "function" && !this.events.includes(t)):
                        Object.defineProperty(this.options.ref, t, {
                            value: (...n)=>this.__triggerMethod(t, ...n),
                            enumerable: t[0] !== "_",
                            configurable: !0,
                            writable: !0
                        });
                        break;
                    case !!s.set:
                        Object.defineProperty(this.options.ref, t, {
                            set: n=>this._enabledMixins.includes(e) && s.set.call(this.options.ref, n)
                        });
                        break;
                    case !!s.get:
                        Object.defineProperty(this.options.ref, t, {
                            get: ()=>this._enabledMixins.includes(e) && s.get.call(this.options.ref)
                        });
                        break
                    }
                }
        },
        _attachDefaultMethods(e) {
            for (let t in e)
                this.options.ref[t] = (...s)=>e[t].call(this, ...s)
        }
    }
      , ui = {
        _destroy() {
            if (this.isDestroyed = !0,
            this.options.ref._viewportInfo = null,
            this.options.viewportEvents) {
                for (const e of this.options.breakpoints)
                    e.viewportQuery.removeEventListener("change", e._viewportChangeHandler);
                this.orientationQuery.removeEventListener("change", this._orientationChangeHandler),
                this.retinaQuery.removeEventListener("change", this._retinaChangeHandler)
            }
        }
    }
      , hi = {
        _proxifyReference(e, t=[]) {
            for (let[s,n] of Object.entries(e))
                if (n && typeof n == "object" && !Array.isArray(n) && !n.nodeType) {
                    const i = t.concat([s]);
                    Object.defineProperty(n, "__isProxy", {
                        value: !0
                    }),
                    Object.defineProperty(n, "__path", {
                        value: i
                    }),
                    e[s] = new Proxy(n,this._proxyHandler()),
                    this._proxifyReference(n, i)
                }
            return Object.defineProperty(e, "__isProxy", {
                value: !0
            }),
            Object.defineProperty(e, "__path", {
                value: t
            }),
            new Proxy(e,this._proxyHandler())
        },
        _proxyHandler() {
            return {
                get: (e,t,s)=>{
                    if (this.currentMixin) {
                        const n = e.__path ? e.__path.concat(t).join(".") : t;
                        this.autoWatchedProps[n] = [...new Set(this.autoWatchedProps[n] ? this.autoWatchedProps[n].concat(this.currentMixin) : [this.currentMixin])]
                    }
                    return Reflect.get(e, t, s)
                }
                ,
                set: (e,t,s)=>{
                    const n = e[t];
                    if (n !== s) {
                        const a = s && typeof s == "object" && !Array.isArray(s) && !s.nodeType && !s instanceof NodeList && !s.__isProxy
                          , i = e.__path ? e.__path.concat(t).join(".") : t;
                        Reflect.set(e, t, a ? this._proxifyReference(s, i.split(".")) : s),
                        Object.keys(this.autoWatchedProps).includes(i) && this._toggleMixins(i),
                        Object.keys(this.options.watch).includes(i) && this.__triggerEvent(this.options.watch[i], {
                            from: n,
                            to: s
                        })
                    }
                    return !0
                }
            }
        }
    }
      , mi = {
        _toggleMixins(e) {
            const t = []
              , s = [];
            for (let n of e ? this.autoWatchedProps[e] || [] : this.mixinsList) {
                this.currentMixin = n;
                const a = !n.isEnabledWhen || n.isEnabledWhen.call(this.options.ref) === !0;
                switch (this.currentMixin = null,
                !0) {
                case (n._isEnabled === !1 && a):
                    t.push(n),
                    n._isEnabled = !0;
                    break;
                case (n._isEnabled === !0 && !a):
                    s.push(n),
                    n._isEnabled = !1;
                    break;
                default:
                    n._isEnabled = a;
                    break
                }
            }
            for (let n of s.reverse())
                n.destroy && n.destroy.call(this.options.ref);
            this._enabledMixins = this._getEnabledMixins();
            for (let n of t) {
                n._isEnabled = !0;
                for (let a of this.options.setupEvents)
                    n[a] && n[a].call(this.options.ref)
            }
        },
        _getEnabledMixins() {
            const e = [];
            if (this.isDestroyed)
                return e;
            const t = this.mixinsList.length;
            for (let s = 0; s < t; s++)
                this.mixinsList[s]._isEnabled && e.push(this.mixinsList[s]);
            return e
        }
    }
      , di = {
        __triggerEvent(e, ...t) {
            if (this.isDestroyed)
                return this.options.ref;
            for (this.queue.unshift({
                event: e,
                data: t
            }); this.queue.length; ) {
                const {event: s, data: n} = this.queue[0];
                this.queue.shift();
                const a = this._enabledMixins.length;
                for (let i = 0; i < a; i++) {
                    const l = this._enabledMixins[i][s];
                    l && l.call(this.options.ref, ...n)
                }
            }
            return e == "destroy" && this._destroy(),
            this.options.ref
        },
        __triggerMethod(e, ...t) {
            if (this.isDestroyed)
                return;
            let s = {
                [e]: ()=>{}
            };
            for (let n = this._enabledMixins.length - 1; n >= 0; n--)
                if (this._enabledMixins[n][e]) {
                    s = this._enabledMixins[n];
                    break
                }
            return s[e].call(this.options.ref, ...t)
        }
    }
      , pi = {
        _setupViewportEvents(e, t, s) {
            if (!!this.options.viewportEvents) {
                this.events = [...new Set(this.events.concat(e))],
                this.options.ref._viewportInfo = {};
                for (const n of this.options.breakpoints) {
                    const {name: a, mediaQuery: i} = n;
                    n.viewportQuery = window.matchMedia(i),
                    n.viewportQuery.matches && (this.options.ref._viewportInfo.viewport = a),
                    n._viewportChangeHandler = this._viewportChangeHandler.bind(this, a),
                    n.viewportQuery.addEventListener("change", n._viewportChangeHandler)
                }
                this.retinaQuery = window.matchMedia(s),
                this.orientationQuery = window.matchMedia(t),
                this.options.ref._viewportInfo.retina = this.retinaQuery.matches,
                this.options.ref._viewportInfo.orientation = this.orientationQuery.matches ? "portrait" : "landscape",
                this._retinaChangeHandler = this._retinaChangeHandler.bind(this),
                this._orientationChangeHandler = this._orientationChangeHandler.bind(this),
                this.retinaQuery.addEventListener("change", this._retinaChangeHandler),
                this.orientationQuery.addEventListener("change", this._orientationChangeHandler)
            }
        },
        _viewportChangeHandler(e, {matches: t}) {
            if (!t)
                return;
            const s = {
                type: "viewport",
                from: this.options.ref._viewportInfo.viewport,
                to: e
            };
            this.options.ref._viewportInfo.viewport = e,
            this.options.ref.onViewportChange(s),
            this.options.ref.onScreenChange(s)
        },
        _orientationChangeHandler({matches: e}) {
            const t = e ? "portrait" : "landscape";
            this.options.ref._viewportInfo.orientation = t;
            const s = {
                type: "orientation",
                orientation: t
            };
            this.options.ref.onOrientationChange(s),
            this.options.ref.onScreenChange(s)
        },
        _retinaChangeHandler({matches: e}) {
            this.options.ref._viewportInfo.retina = e;
            const t = {
                type: "retina",
                retina: e
            };
            this.options.ref.onRetinaChange(t),
            this.options.ref.onScreenChange(t)
        }
    };
    function fi(...e) {
        this.events = [...new Set(this.events.concat(...e))],
        this._attachEvents()
    }
    function gi(e) {
        this._toggleMixins(e)
    }
    const _i = [{
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
      , vi = "only screen and (orientation: portrait)"
      , bi = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"
      , yi = {
        breakpoints: _i,
        events: [],
        ref: {},
        setupEvents: [],
        viewportEvents: !1,
        watch: {}
    }
      , Si = ["destroy"]
      , Ei = ["onViewportChange", "onOrientationChange", "onRetinaChange", "onScreenChange"]
      , Ni = {
        __addEvents: fi,
        __forceUpdate: gi
    };
    class Dt {
        constructor(t, ...s) {
            return Object.assign(Dt.prototype, hi, pi, di, ci, mi, ui),
            this.options = Object.assign({}, yi, t),
            this.events = [...new Set(this.options.events.concat(Object.values(this.options.watch), Si))],
            this.mixinsList = [...new Set(s.flat(9999).map(n=>n.default && n.default() || typeof n == "function" && n() || n))],
            this.isDestroyed = !1,
            this.queue = [],
            this.autoWatchedProps = {},
            this.currentMixin = null,
            this._enabledMixins = [],
            this._setupViewportEvents(Ei, vi, bi),
            this._attachEvents(),
            this._attachMethods(),
            this._attachDefaultMethods(Ni),
            this.options.ref = this._proxifyReference(this.options.ref, []),
            this._toggleMixins(),
            this.options.ref
        }
    }
    var wi = {
        onViewportChange(e) {
            this._isLayoutChange(e) && this.onLayoutChange(this._isBreakpointWithMenu(), e)
        },
        _isLayoutChange(e) {
            return this._isBreakpointWithMenu(e.from) != this._isBreakpointWithMenu(e.to)
        },
        _isBreakpointWithMenu(e=this._viewportInfo.viewport) {
            return this._viewportsWithMenu.includes(e)
        },
        _getCurrentLayout() {
            return this._isBreakpointWithMenu() ? "compact" : "regular"
        },
        _isTouch() {
            return document.documentElement.classList.contains("touch")
        }
    }
      , Ci = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function Li(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    function xs(e) {
        if (e.__esModule)
            return e;
        var t = Object.defineProperty({}, "__esModule", {
            value: !0
        });
        return Object.keys(e).forEach(function(s) {
            var n = Object.getOwnPropertyDescriptor(e, s);
            Object.defineProperty(t, s, n.get ? n : {
                enumerable: !0,
                get: function() {
                    return e[s]
                }
            })
        }),
        t
    }
    var Ai = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CONTROL: 17,
        ALT: 18,
        COMMAND: 91,
        CAPSLOCK: 20,
        ESCAPE: 27,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_ZERO: 96,
        NUMPAD_ONE: 97,
        NUMPAD_TWO: 98,
        NUMPAD_THREE: 99,
        NUMPAD_FOUR: 100,
        NUMPAD_FIVE: 101,
        NUMPAD_SIX: 102,
        NUMPAD_SEVEN: 103,
        NUMPAD_EIGHT: 104,
        NUMPAD_NINE: 105,
        NUMPAD_ASTERISK: 106,
        NUMPAD_PLUS: 107,
        NUMPAD_DASH: 109,
        NUMPAD_DOT: 110,
        NUMPAD_SLASH: 111,
        NUMPAD_EQUALS: 187,
        TICK: 192,
        LEFT_BRACKET: 219,
        RIGHT_BRACKET: 221,
        BACKSLASH: 220,
        SEMICOLON: 186,
        APOSTRAPHE: 222,
        APOSTROPHE: 222,
        SPACEBAR: 32,
        CLEAR: 12,
        COMMA: 188,
        DOT: 190,
        SLASH: 191
    }
      , ue = Ai
      , Mi = {
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
      , Rs = Mi
      , Bs = function() {
        this.focusableSelectors = Rs.selectors
    }
      , it = Bs.prototype;
    it.isFocusableElement = function(e, t, s) {
        if (t && !this._isDisplayed(e))
            return !1;
        var n = Rs.nodeName[e.nodeName];
        return n ? !e.disabled : e.contentEditable ? (s = s || parseFloat(e.getAttribute("tabindex")),
        !isNaN(s)) : !0
    }
    ,
    it.isTabbableElement = function(e, t) {
        if (t && !this._isDisplayed(e))
            return !1;
        var s = e.getAttribute("tabindex");
        return s = parseFloat(s),
        isNaN(s) ? this.isFocusableElement(e, t, s) : s >= 0
    }
    ,
    it._isDisplayed = function(e) {
        var t = e.getBoundingClientRect();
        return t.top === 0 && t.left === 0 && t.width === 0 && t.height === 0 ? !1 : window.getComputedStyle(e).visibility !== "hidden"
    }
    ,
    it.getTabbableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, a = [], i = 0; i < n; i++)
            this.isTabbableElement(s[i], t) && a.push(s[i]);
        return a
    }
    ,
    it.getFocusableElements = function(e, t) {
        for (var s = e.querySelectorAll(this.focusableSelectors), n = s.length, a = [], i = 0; i < n; i++)
            this.isFocusableElement(s[i], t) && a.push(s[i]);
        return a
    }
    ;
    var Ht = new Bs
      , Ps = {
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
      , Ds = Ps
      , Hs = Ht
      , Ws = "data-original-"
      , bt = "tabindex"
      , Wt = function(e, t) {
        var s = e.getAttribute(Ws + t);
        s || (s = e.getAttribute(t) || "",
        e.setAttribute(Ws + t, s))
    }
      , ki = function(t, s) {
        if (Hs.isFocusableElement(t, s))
            Wt(t, bt),
            t.setAttribute(bt, "-1");
        else
            for (var n = Hs.getTabbableElements(t, s), a = n.length; a--; )
                Wt(n[a], bt),
                n[a].setAttribute(bt, "-1");
        Wt(t, Ds.HIDDEN),
        t.setAttribute(Ds.HIDDEN, "true")
    }
      , Us = ki
      , Fi = function e(t, s, n) {
        s = s || document.body;
        for (var a = t, i = t; a = a.previousElementSibling; )
            Us(a, n);
        for (; i = i.nextElementSibling; )
            Us(i, n);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s, n)
    }
      , $i = function(e, t) {
        let s;
        e instanceof NodeList ? s = e : s = [].concat(e),
        t = Array.isArray(t) ? t : [].concat(t),
        s.forEach(n=>{
            t.forEach(a=>{
                n.removeAttribute(a)
            }
            )
        }
        )
    }
      , Ti = $i
      , Vs = Ti
      , Oi = Ps
      , Ut = "data-original-"
      , Vt = "tabindex"
      , qt = function(e, t) {
        var s = e.getAttribute(Ut + t);
        s !== null && (s === "" ? Vs(e, t) : e.setAttribute(t, s),
        Vs(e, Ut + t))
    }
      , Ii = function(t) {
        qt(t, Vt),
        qt(t, Oi.HIDDEN);
        for (var s = t.querySelectorAll(`[${Ut + Vt}]`), n = s.length; n--; )
            qt(s[n], Vt)
    }
      , qs = Ii
      , xi = function e(t, s) {
        s = s || document.body;
        for (var n = t, a = t; n = n.previousElementSibling; )
            qs(n);
        for (; a = a.nextElementSibling; )
            qs(a);
        t.parentElement && t.parentElement !== s && e(t.parentElement, s)
    }
      , Ri = Ht
      , Bi = Fi
      , Pi = xi
      , js = function(e, t) {
        t = t || {},
        this._tabbables = null,
        this._excludeHidden = t.excludeHidden,
        this._firstTabbableElement = t.firstFocusElement,
        this._lastTabbableElement = null,
        this._relatedTarget = null,
        this.el = e,
        this._handleOnFocus = this._handleOnFocus.bind(this)
    }
      , at = js.prototype;
    at.start = function(e) {
        this.updateTabbables(),
        Bi(this.el, null, this._excludeHidden);
        let t = document.activeElement;
        this._firstTabbableElement ? !this.el.contains(document.activeElement) && !e && (this._firstTabbableElement.focus(),
        t = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."),
        this._relatedTarget = t,
        document.addEventListener("focus", this._handleOnFocus, !0)
    }
    ,
    at.stop = function() {
        Pi(this.el),
        document.removeEventListener("focus", this._handleOnFocus, !0)
    }
    ,
    at.updateTabbables = function() {
        this._tabbables = Ri.getTabbableElements(this.el, this._excludeHidden),
        this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0],
        this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
    }
    ,
    at._handleOnFocus = function(e) {
        if (this.el.contains(e.target))
            this._relatedTarget = e.target;
        else {
            if (e.preventDefault(),
            this.updateTabbables(),
            this._relatedTarget === this._lastTabbableElement || this._relatedTarget === null) {
                this._firstTabbableElement.focus(),
                this._relatedTarget = this._firstTabbableElement;
                return
            }
            if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) {
                this._lastTabbableElement.focus(),
                this._relatedTarget = this._lastTabbableElement;
                return
            }
        }
    }
    ,
    at.destroy = function() {
        this.stop(),
        this.el = null,
        this._tabbables = null,
        this._firstTabbableElement = null,
        this._lastTabbableElement = null,
        this._relatedTarget = null,
        this._handleOnFocus = null
    }
    ;
    var Di = js
      , Hi = function(t, s) {
        return t === s ? !1 : "contains"in t ? t.contains(s) : !!(t.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY)
    }
      , yt = {
        onLayoutChange() {
            const {_currentFlyout: e, curtain: t} = this;
            this._setFlyoutHeights(),
            e && (this.el.classList.add(this.classNames.blockTransitions),
            t.classList.add(this.classNames.blockTransitions),
            this.onFlyoutWillClose(e, !1).onFlyoutClose(e),
            requestAnimationFrame(()=>{
                this.el.classList.remove(this.classNames.blockTransitions),
                t.classList.remove(this.classNames.blockTransitions)
            }
            ))
        },
        created() {
            this._currentFlyout = null,
            this._lastFlyoutTrigger = null,
            this._closingFlyout = null,
            this._flyoutTimeouts = [],
            this._isFlyoutActiveClick = !1,
            this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`)
        },
        mounted() {
            this.initiateElements(),
            this.initiateListeners(),
            this.initiateFlyouts(),
            this.el.classList.remove(this.classNames.blockTransitions)
        },
        onMenuItemMouseLeave() {
            this._isBreakpointWithMenu() || this._preventFlyoutClose === !0 || this._usesTouchEvents === !0 || this.closeFlyout(this._currentFlyout)
        },
        onFlyoutWillOpen(e, t) {
            var s, n, a, i, l;
            this.el.addEventListener("mouseleave", this.onMenuItemMouseLeave, {
                once: !0
            }),
            this._currentFlyout = e,
            this._lastFlyoutTrigger = this._getFlyoutItem(e).trigger ? this._getFlyoutItem(e).trigger[this._getCurrentLayout()] : null,
            this.flyoutAbortController = new AbortController,
            this.flyoutAbortControllerSignal = {
                signal: this.flyoutAbortController.signal
            },
            this.el.classList.add(this.classNames.animating),
            document.documentElement.setAttribute(`data-${this.classNames.el}-flyout-open`, "true"),
            t ? e.classList.add(this.classNames.itemFlyoutChangeNext) : (e.classList.add(this.classNames.itemFlyoutOpen),
            this.el.classList.add(this.classNames.withFlyoutOpen),
            document.addEventListener("keydown", this._onFlyoutDocumentKeyDown, this.flyoutAbortControllerSignal),
            !this._isBreakpointWithMenu() && !this._isTouch() && document.addEventListener("scroll", ()=>this.closeFlyout(this._currentFlyout), this.flyoutAbortControllerSignal)),
            this._isBreakpointWithMenu() ? (this._setFlyoutHeight(e),
            this.el.classList.contains(this.classNames.withMenuOpen) || ((n = (s = this.menuButtonAnimation.open.top).beginElement) == null || n.call(s),
            (i = (a = this.menuButtonAnimation.open.bottom).beginElement) == null || i.call(a)),
            this._flyoutTimeouts.push(setTimeout(()=>{
                this.content.setAttribute("role", "dialog"),
                this.content.setAttribute("aria-modal", "true"),
                this.content.setAttribute("tabindex", "-1"),
                this.content.setAttribute("aria-label", e.getAttribute("data-topnav-flyout-label"))
            }
            , 300))) : (l = this._lastFlyoutTrigger) == null || l.setAttribute("aria-expanded", !0)
        },
        onFlyoutWillClose(e, t) {
            var s, n, a, i, l;
            this.el.classList.add(this.classNames.withFlyoutClosing, this.classNames.animating),
            e.classList.add(this.classNames.itemFlyoutClosing),
            e.classList.remove(this.classNames.itemFlyoutOpen),
            t ? e.classList.add(this.classNames.itemFlyoutChangePrevious) : (this.el.classList.remove(this.classNames.withFlyoutOpen),
            this.flyoutAbortController && this.flyoutAbortController.abort(),
            document.documentElement.removeAttribute(`data-${this.classNames.el}-flyout-open`),
            this._currentFlyout = null),
            this._flyoutTimeouts.push(setTimeout(()=>{
                this.content.removeAttribute("role"),
                this.content.removeAttribute("aria-modal"),
                this.content.removeAttribute("tabindex"),
                this.content.removeAttribute("aria-label")
            }
            , 300)),
            this._isBreakpointWithMenu() || (s = this._lastFlyoutTrigger) == null || s.setAttribute("aria-expanded", !1),
            t || (!this._isBreakpointWithMenu() && this._getFlyout(e).classList.remove(this.classNames.flyoutShort),
            (a = (n = this.menuButtonAnimation.close.top).beginElement) == null || a.call(n),
            (l = (i = this.menuButtonAnimation.close.bottom).beginElement) == null || l.call(i)),
            this.circTab.stop()
        },
        onFlyoutOpen(e, t) {
            this._getFlyoutItem(e),
            this.el.classList.remove(this.classNames.animating),
            t && (e.classList.add(this.classNames.itemFlyoutOpen),
            e.classList.remove(this.classNames.itemFlyoutChangeNext)),
            this._isBreakpointWithMenu() ? this.circTab.start() : requestAnimationFrame(()=>this._checkFlyoutHeight(e)),
            addEventListener("beforeunload", this._onWindowBeforeUnload, {
                once: !0
            }),
            this._isFlyoutActiveClick = !1,
            this._closingFlyout && this.closeFlyout(this._closingFlyout, !0)
        },
        onFlyoutClose(e, t) {
            const s = this._getFlyoutItem(e);
            s.scrollContainer && (s.scrollContainer.scrollTop = 0),
            this.el.classList.remove(this.classNames.withFlyoutClosing, this.classNames.animating),
            e.classList.remove(this.classNames.itemFlyoutClosing),
            t && (s.flyout.classList.remove(this.classNames.flyoutShort),
            e.classList.remove(this.classNames.itemFlyoutChangePrevious, this.classNames.itemFlyoutOpen)),
            this._isFlyoutActiveClick = !1,
            this._shouldDelayIconFlyoutOpen && (this._delayFlyoutTarget && this.openFlyout(this._delayFlyoutTarget),
            this._shouldDelayIconFlyoutOpen = !1),
            this._closingFlyout = null
        },
        onTextZoomResize() {
            this._setFlyoutHeights()
        },
        openFlyout(e) {
            const t = this.flyouts.find(i=>i.item === e);
            let s, n, a;
            if (this._currentFlyout) {
                const {_currentFlyout: i} = this
                  , l = this.flyouts.find(h=>h.item === i);
                this._handleCompactMenuChangeTriggers(l, t),
                this.el.style.setProperty(this.cssVariables.flyoutNextHeight, getComputedStyle(this._getFlyout(e)).getPropertyValue(this.cssVariables.flyoutHeight)),
                this.el.style.setProperty(this.cssVariables.flyoutPreviousHeight, getComputedStyle(this._getFlyout(i)).getPropertyValue(this.cssVariables.flyoutHeight)),
                this.onFlyoutWillClose(i, !0),
                this.onFlyoutWillOpen(e, !0),
                n = "animationend",
                a = e,
                s = h=>{
                    this.onFlyoutOpen(h, !0),
                    this.onFlyoutClose(i, !0)
                }
            } else
                this._handleCompactMenuChangeTriggers(t),
                this.onFlyoutWillOpen(e),
                n = "transitionend",
                a = this._isBreakpointWithMenu() ? this.content : e,
                s = i=>{
                    this.onFlyoutOpen(i)
                }
                ;
            this._listenForAnimationChangeEnd(e, a, n, s)
        },
        closeFlyout(e=this._currentFlyout, t) {
            (e !== this._currentFlyout || !this._currentFlyout) && !t || (this._closingFlyout = e,
            this.onFlyoutWillClose(e),
            this._listenForAnimationChangeEnd(e, this._isBreakpointWithMenu() ? this.content : e, "transitionend", ()=>this.onFlyoutClose(e)))
        },
        initiateElements() {
            this.topNavList = this.topNavList || this.el.querySelector(`.${this.classNames.list}`),
            this.curtain = this.curtain || this.el.querySelector(`.${this.classNames.curtain}`),
            this.content = this.content || this.el.querySelector(`.${this.classNames.content}`),
            this.menuButton = this.menuButton || this.el.querySelector(`.${this.classNames.menuButton}`),
            this.menuButtonAnimation = {
                open: {
                    top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-open`),
                    bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-open`)
                },
                close: {
                    top: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-top-close`),
                    bottom: this.menuButton.querySelector(`#${this.options.className}-anim-menutrigger-bread-bottom-close`)
                }
            }
        },
        initiateListeners() {
            const e = new AbortController
              , {signal: t} = e
              , s = !0
              , n = !0;
            this.el.addEventListener("focusout", this._onTopNavFocusOut),
            this._isBreakpointWithMenu() || (document.addEventListener("mousemove", a=>{
                a.target.closest(`.${this.classNames.list}`) || e.abort()
            }
            , {
                once: n
            }),
            this.topNavList.addEventListener("mouseover", a=>{
                a.stopPropagation()
            }
            , {
                capture: s,
                signal: t
            }),
            this.topNavList.addEventListener("mouseout", ()=>{
                e.abort()
            }
            , {
                signal: t
            })),
            this.curtain && this.curtain.addEventListener("click", this._onFlyoutCurtainClick)
        },
        initiateFlyouts() {
            var t, s, n;
            this.flyouts = [];
            const e = [...this.el.querySelectorAll(`.${this.classNames.flyout}`)].map(this._getItemAncestor);
            for (const a of e) {
                let i = {};
                i.item = a,
                i.flyout = (t = i.item) == null ? void 0 : t.querySelector(`.${this.classNames.flyout}`),
                i.scrollContainer = (s = i.flyout) == null ? void 0 : s.querySelector(`:scope > .${this.classNames.flyoutScrollContainer}`),
                i.content = (n = i.scrollContainer) == null ? void 0 : n.querySelector(`:scope > .${this.classNames.flyoutContent}`),
                i.trigger = i.content && {
                    regular: a.querySelector("[data-topnav-flyout-trigger-regular]"),
                    compact: a.querySelector("[data-topnav-flyout-trigger-compact]")
                },
                this.flyouts.push(i)
            }
            this.setFlyoutItems(),
            this._setFlyoutHeights(),
            this.circTab = new Di(this.el)
        },
        setFlyoutItems() {
            const e = (t,s=0)=>{
                const n = t.querySelectorAll(`.${this.classNames.flyoutItem}`);
                n.forEach((a,i)=>{
                    a.style.setProperty(this.cssVariables.flyoutItemNumber, i)
                }
                ),
                t.style.setProperty(this.cssVariables.flyoutItemTotal, n.length),
                t.style.setProperty(this.cssVariables.flyoutGroupNumber, s)
            }
            ;
            this.flyouts.forEach(t=>{
                const {flyout: s} = t
                  , n = s.querySelectorAll(`.${this.classNames.flyoutItemGroup}`);
                n.length ? n.forEach(e) : e(s)
            }
            )
        },
        onCurtainClick() {
            this.closeFlyout()
        },
        unload(e) {
            var s;
            const {_currentFlyout: t} = this;
            !t || (this.el.classList.add(this.classNames.blockTransitions),
            (s = this.onFlyoutWillClose(t).onFlyoutClose(t)) == null || s.closeMenu(),
            this.el.classList.remove(this.classNames.blockTransitions))
        },
        destroy() {
            this.closeFlyout(),
            this._destroyTimeouts(),
            this.flyoutAbortController && this.flyoutAbortController.abort(),
            this.el.removeEventListener("focusout", this._onTopNavFocusOut),
            this.curtain && this.curtain.removeEventListener("click", this._onFlyoutCurtainClick)
        },
        _checkFlyoutHeight(e) {
            var h;
            const t = this._getFlyoutItem(e)
              , {flyout: s, scrollContainer: n} = t
              , a = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.flyoutSpacing))
              , i = parseInt(getComputedStyle(s).getPropertyValue(this.cssVariables.flyoutHeight))
              , l = window.innerWidth - n.clientWidth;
            window.innerHeight - a < i ? (s.classList.add(this.classNames.flyoutShort),
            (h = this.flyoutAbortController) == null || h.abort()) : s.classList.remove(this.classNames.flyoutShort),
            s.style.setProperty(this.cssVariables.scrollbarWidth, `${l}px`)
        },
        _listenForAnimationChangeEnd(e, t, s, n) {
            const a = new AbortController
              , i = a.signal
              , l = this.flyouts.find(c=>c.item === e)
              , h = ({animationName: c, propertyName: f})=>{
                [c === `${this.options.className}-scrim-height-change`, c === `${this.options.className}-flyout-slide-forward-next`, c === `${this.options.className}-flyout-slide-back-next`, f === "height" && l, f === "height" && t === this.content].some(v=>!!v) && (a.abort(),
                n(e))
            }
            ;
            t.addEventListener(s, h, {
                signal: i
            }),
            t.addEventListener("transitioncancel", h, {
                signal: i
            }),
            t.addEventListener("animationcancel", h, {
                signal: i
            })
        },
        _handleCompactMenuChangeTriggers(e, t) {
            if (!this._isBreakpointWithMenu())
                return;
            const s = n=>{
                const a = Ht.getFocusableElements(n)
                  , i = a[0];
                i && !a.includes(document.activeElement) && i.focus()
            }
            ;
            this._listenForAnimationChangeEnd(e.flyout, this.content, `${t ? "animation" : "transition"}start`, n=>{
                setTimeout(s.bind(this, n), 300)
            }
            ),
            t && this._listenForAnimationChangeEnd(t.flyout, this.content, "animationstart", n=>{
                var i;
                n.classList.contains(this.classNames.subMenu) ? s(n) : e.trigger && ((i = e.trigger[this._getCurrentLayout()]) == null || i.focus())
            }
            )
        },
        _destroyTimeouts() {
            this._flyoutTimeouts.forEach(e=>clearTimeout(e))
        },
        _getFlyout(e) {
            var t;
            return (t = this._getFlyoutItem(e)) == null ? void 0 : t.flyout
        },
        _getFlyoutItem(e) {
            return this.flyouts.find(t=>t.item === e)
        },
        _getItemAncestor(e) {
            return e.closest(`.${this.classNames.item}`)
        },
        _setFlyoutHeight(e, t=0) {
            const s = n=>`${Math.min(480, Math.max(240, parseInt(n) / 2))}ms`;
            if (this._isBreakpointWithMenu()) {
                const n = this.content
                  , a = window.innerHeight
                  , i = s(a);
                n.style.setProperty(this.cssVariables.flyoutRateOfChange, i)
            } else {
                const n = this._getFlyoutItem(e)
                  , {content: a, flyout: i} = n;
                if (a) {
                    const l = parseInt(getComputedStyle(a).height)
                      , h = parseInt(getComputedStyle(this.el).getPropertyValue(this.cssVariables.topnavHeight));
                    i.style.setProperty(this.cssVariables.flyoutHeight, `${l + h + t}px`),
                    i.style.setProperty(this.cssVariables.flyoutRateOfChange, s(l + t))
                }
            }
        },
        _setFlyoutHeights() {
            var e;
            (e = this.flyouts) == null || e.forEach(t=>this._setFlyoutHeight(t.item))
        },
        _getFlyoutAnimationDuration(e) {
            const s = (this._isBreakpointWithMenu() ? this.content : this._getFlyout(e || this._currentFlyout)).style.getPropertyValue(this.cssVariables.flyoutRateOfChange);
            return parseInt(s)
        },
        _isFlyoutOpen(e) {
            return this._currentFlyout === e
        },
        _onFlyoutDocumentKeyDown(e) {
            var n, a;
            const {keyCode: t, target: s} = e;
            switch (t) {
            case ue.ESCAPE:
                const i = this._lastFlyoutTrigger
                  , l = (n = s.closest) == null ? void 0 : n.call(s, `.${this.classNames.flyout}`)
                  , h = (a = this.flyouts.find(c=>c.trigger && c.trigger[this._getCurrentLayout()] === i)) == null ? void 0 : a.flyout;
                this.closeFlyout(),
                l === h && this._flyoutTimeouts.push(setTimeout(()=>{
                    i.focus()
                }
                , 300));
                break
            }
        },
        _onFlyoutCurtainClick() {
            this.onCurtainClick()
        },
        _onTopNavFocusOut(e) {
            e.relatedTarget && e.relatedTarget !== document.documentElement && this._currentFlyout && (Hi(this.el, e.relatedTarget) || this.closeFlyout())
        },
        _onWindowBeforeUnload() {
            this.unload()
        }
    }
      , Zs = [yt, {
        created() {
            this.iconFlyoutAbortController = new AbortController,
            this._shouldDelayIconFlyoutOpen = !1,
            this._delayFlyoutTarget = null
        },
        mounted() {
            this.initiateIconFlyouts(),
            this.addIconFlyoutEvents()
        },
        destroy() {
            var e;
            (e = this.iconFlyoutAbortController) == null || e.abort()
        },
        onIconFlyoutFocusIn({currentTarget: e}) {
            e.addEventListener("keydown", this.onIconFlyoutKeyDown, !0)
        },
        onIconFlyoutFocusOut({currentTarget: e}) {
            e.removeEventListener("keydown", this.onIconFlyoutKeyDown, !0)
        },
        onIconFlyoutKeyDown(e) {
            switch (e.keyCode) {
            case ue.SPACEBAR:
                this.onIconFlyoutClick(e);
                break
            }
        },
        onIconFlyoutClick(e) {
            e.preventDefault();
            const t = this._getItemAncestor(e.currentTarget)
              , s = this.el.classList.contains(this.classNames.animating)
              , n = this._isFlyoutOpen(t);
            s ? (this._shouldDelayIconFlyoutOpen = !n,
            this._delayFlyoutTarget = t) : this[n ? "closeFlyout" : "openFlyout"](t)
        },
        onFlyoutOpen(e) {
            for (const t of this.iconFlyouts)
                if (this._currentFlyout === t) {
                    this.el.classList.add(this.classNames.withIconFlyoutOpen);
                    break
                }
        },
        onFlyoutWillClose() {
            this.el.classList.remove(this.classNames.withIconFlyoutOpen)
        },
        onMenuButtonClick() {
            for (const e of this.iconFlyouts)
                this._isFlyoutOpen(e) && this.closeFlyout(e)
        },
        initiateIconFlyouts() {
            this.iconFlyouts = [...this.el.querySelectorAll(`[${this.dataAttributes.iconFlyoutEnabled}]`)]
        },
        addIconFlyoutEvents() {
            const {signal: e} = this.iconFlyoutAbortController;
            for (const t of this.iconFlyouts) {
                const s = t.querySelector(`.${this.classNames.link}`);
                s.addEventListener("focusin", this.onIconFlyoutFocusIn, {
                    signal: e
                }),
                s.addEventListener("focusout", this.onIconFlyoutFocusOut, {
                    signal: e
                }),
                s.addEventListener("click", this.onIconFlyoutClick, {
                    signal: e
                })
            }
        }
    }]
      , Wi = [yt, {
        onLayoutChange(e) {
            this.el.classList.contains(this.classNames.withMenuOpen) && this.closeMenu(),
            this._updateMenuListenersForViewport(e),
            this._updateMenuAttributesForViewport(e)
        },
        created() {
            this.menu = {},
            this.initiateMenuElements(),
            this._onMenuDocumentKeyDown = this._onMenuDocumentKeyDown.bind(this)
        },
        initiateMenuElements() {
            this.menu.elements = {
                list: this.el.querySelector(`.${this.classNames.list}`),
                menuList: this.el.querySelector(`.${this.classNames.menuList}`),
                itemMenus: this.el.querySelectorAll(`.${this.classNames.itemMenu}`),
                scrim: document.querySelector(`.${this.classNames.el}.${this.classNames.scrim}`),
                curtain: document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),
                menu: this.el.querySelector(`.${this.classNames.menu}`),
                menuButton: this.el.querySelector(`.${this.classNames.menuButton}`),
                menuBackButton: this.el.querySelector(`.${this.classNames.menuBackButton}`),
                menuFlyout: this.el.querySelector('[data-topnav-flyout-item="menu"]'),
                menuLabels: {
                    open: this.menuButton.dataset.topnavMenuLabelOpen,
                    close: this.menuButton.dataset.topnavMenuLabelClose
                }
            }
        },
        onMenuButtonClick(e) {
            if (this._isFlyoutActiveClick)
                return e.preventDefault();
            if (this._isFlyoutActiveClick = !0,
            this.el.classList.contains(this.classNames.withMenuOpen))
                this.closeMenu();
            else if (this.el.classList.contains(this.classNames.withFlyoutOpen)) {
                this.menu.elements.menuButton.blur(),
                this._flyoutFocusTimeout = setTimeout(()=>{
                    this._lastFlyoutTrigger.focus()
                }
                , 300);
                return
            } else
                this.openMenu()
        },
        beforeMount() {
            !this.options.curtainBlur && this.removeCurtainBlur(),
            !this.options.scrimBlur && this.removeScrimBlur()
        },
        mounted() {
            this._updateMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateMenuAttributesForViewport(this._isBreakpointWithMenu()),
            this._setItemNumbers()
        },
        onFlyoutWillOpen(e) {
            this._isBreakpointWithMenu() && e.dataset.topnavFlyoutItem === "menu" && (this.el.classList.contains(this.classNames.withMenuOpen) || (this.menu.elements.menuList.scrollTop = 0))
        },
        onFlyoutOpen(e) {
            this._isBreakpointWithMenu() && this.menu.elements.menuButton.setAttribute("aria-label", this.menu.elements.menuLabels.close)
        },
        onFlyoutWillClose() {
            this.menu.elements.menuButton.setAttribute("aria-label", this.menu.elements.menuLabels.open)
        },
        openMenu() {
            this._isBreakpointWithMenu() && this._setFlyoutHeight(this.menu.elements.menuFlyout),
            this.openFlyout(this.menu.elements.menuFlyout),
            this.el.classList.add(this.classNames.withMenuOpen),
            document.addEventListener("keydown", this._onMenuDocumentKeyDown)
        },
        closeMenu() {
            this.el.classList.remove(this.classNames.withMenuOpen),
            this.closeFlyout(),
            document.removeEventListener("keydown", this._onMenuDocumentKeyDown)
        },
        toggleMenu() {
            this.el.classList.contains(this.classNames.menuOpen) ? this.closeMenu() : this.openMenu()
        },
        onCurtainClick() {
            this.closeMenu()
        },
        unload(e) {
            this.closeMenu()
        },
        destroy() {
            this.closeMenu(),
            this._removeMenuEvents()
        },
        addCurtainBlur() {
            this.menu.elements.curtain && this.menu.elements.curtain.classList.remove(this.classNames.curtainNoBlur)
        },
        removeCurtainBlur() {
            this.menu.elements.curtain && this.menu.elements.curtain.classList.add(this.classNames.curtainNoBlur)
        },
        addScrimBlur() {
            this.menu.elements.scrim && this.menu.elements.scrim.classList.remove(this.classNames.scrimNoBlur)
        },
        removeScrimBlur() {
            this.menu.elements.scrim && this.menu.elements.scrim.classList.add(this.classNames.scrimNoBlur)
        },
        _addMenuEvents() {
            this.curtain && this.curtain.addEventListener("click", this._onMenuCurtainClick),
            this.menu.elements.menuButton.addEventListener("click", this.onMenuButtonClick),
            this.menu.elements.menuBackButton.addEventListener("click", this.onMenuBackButtonClick)
        },
        _removeMenuEvents() {
            this.curtain && this.curtain.removeEventListener("click", this._onMenuCurtainClick),
            this.menu.elements.menuButton.removeEventListener("click", this.onMenuButtonClick),
            this.menu.elements.menuBackButton.removeEventListener("click", this.onMenuBackButtonClick)
        },
        _updateMenuListenersForViewport(e) {
            e ? this._addMenuEvents() : this._removeMenuEvents()
        },
        _updateMenuAttributesForViewport(e) {
            e ? (this.menu.elements.list.setAttribute("role", "none"),
            this.menu.elements.menuList.setAttribute("role", "list"),
            [...this.menu.elements.menuList.children].forEach(t=>t.setAttribute("role", "listitem"))) : (this.menu.elements.menu.removeAttribute("role"),
            this.menu.elements.list.removeAttribute("role"),
            this.menu.elements.menuList.removeAttribute("role"),
            [...this.menu.elements.menuList.children].forEach(t=>t.removeAttribute("role")))
        },
        _onMenuCurtainClick() {
            this.onCurtainClick()
        },
        _setItemNumbers() {
            let e = 0;
            this.menu.elements.itemMenus.forEach((t,s)=>{
                t.style.setProperty(this.cssVariables.flyoutItemNumber, s),
                ++e
            }
            ),
            this.menu.elements.menuList.style.setProperty(this.cssVariables.flyoutItemTotal, e)
        },
        _onMenuDocumentKeyDown(e) {
            const {keyCode: t, target: s} = e;
            switch (t) {
            case ue.SPACEBAR:
                s.hasAttribute("data-topnav-flyout-trigger-compact") && (e.preventDefault(),
                s.click());
                break;
            case ue.ESCAPE:
                e.preventDefault(),
                this.closeMenu(),
                this._flyoutFocusTimeout = setTimeout(()=>{
                    this.menu.elements.menuButton.focus()
                }
                , 300);
                break
            }
        }
    }]
      , Ui = [yt, {
        isEnabledWhen() {
            return this.submenuEnabled !== !1
        },
        onLayoutChange() {
            this.el.classList.remove(this.classNames.withSubMenuOpen),
            this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu()),
            this._setSubMenuItemCounts(),
            clearTimeout(this._currentSubMenuMouseOverTimeout)
        },
        mounted() {
            this.el.classList.remove(this.classNames.subMenusDisabled),
            this._findTopNavList(),
            this.initiateSubMenus()
        },
        onMenuBackButtonClick() {
            this._isFlyoutActiveClick = !0,
            this.openFlyout(this.menu.elements.menuFlyout)
        },
        onFlyoutWillClose(e, t) {
            this.subMenuEls.includes(e) && this.el.classList.remove(this.classNames.withSubMenuOpen)
        },
        onHiddenMenuItemClick(e) {
            if (this._isFlyoutActiveClick)
                return e.preventDefault();
            const t = e.target.closest(`.${this.classNames.itemSubMenu}`)
              , s = this.flyouts.map(n=>n.item);
            this._isFlyoutOpen(t) || (e.preventDefault(),
            s.includes(t) && (this._isFlyoutActiveClick = !0,
            this.openFlyout(t)))
        },
        onMenuItemMouseOver({target: e}) {
            if (this._usesTouchEvents)
                return;
            const t = this._getItemAncestor(e)
              , s = 120;
            clearTimeout(this._currentSubMenuMouseOverTimeout),
            this._currentSubMenuMouseOverTimeout = setTimeout(()=>{
                t && t !== this._currentFlyout && t !== this.menu.elements.menuFlyout && (this.subMenuEls.includes(t) ? this.openFlyout(t) : this.closeFlyout(this._currentFlyout))
            }
            , s),
            this.el.addEventListener("mouseleave", this.onMenuItemMouseLeave, {
                once: !0
            }),
            this._flyoutTimeouts.push(this._currentSubMenuMouseOverTimeout)
        },
        onMenuItemButtonClick(e) {
            const {target: t} = e
              , s = !!t.closest(`.${this.classNames.subMenuTriggerGroup}`);
            if (!!t.closest(`.${this.classNames.subMenuTriggerButton}`) || s && this._usesTouchEvents) {
                const a = t.closest(`.${this.classNames.itemSubMenu}`)
                  , i = this._isFlyoutOpen(a)
                  , l = this._getItemAncestor(t)
                  , h = this._currentFlyout && this._getItemAncestor(this._currentFlyout)
                  , c = this._getFlyout(a) !== void 0;
                l !== h && c && e.preventDefault(),
                i ? this.closeFlyout(this._currentFlyout) : this.openFlyout(a)
            }
        },
        onNavListTouchStart(e) {
            this._usesTouchEvents = !0
        },
        onMenuItemMouseLeave() {
            clearTimeout(this._currentSubMenuMouseOverTimeout)
        },
        initiateSubMenus() {
            this.submenus = this.flyouts.filter(e=>e.item.classList.contains(this.classNames.itemSubMenu)).map(e=>{
                const {item: t} = e
                  , s = t.querySelector(`.${this.classNames.subMenuContent}`)
                  , n = t.querySelector(`.${this.classNames.subMenuTriggerGroup}`)
                  , a = t.querySelector(`.${this.classNames.subMenuTriggerLink}`)
                  , i = a.getAttribute("aria-label")
                  , l = t.querySelector(`.${this.classNames.subMenuTriggerButton}`)
                  , h = l.getAttribute("aria-label")
                  , c = {
                    group: n,
                    link: a,
                    linkLabel: i,
                    button: l,
                    buttonLabel: h
                }
                  , f = [...t.querySelectorAll(`.${this.classNames.subMenuGroup}`)].map(r=>{
                    const v = r.classList.contains(this.classNames.subMenuGroupElevated)
                      , b = r.querySelector(`.${this.classNames.subMenuHeader}`)
                      , o = r.querySelector(`.${this.classNames.subMenuList}`);
                    return {
                        isElevated: v,
                        group: r,
                        header: b,
                        list: o
                    }
                }
                );
                return {
                    ...e,
                    trigger: c,
                    content: s,
                    groups: f
                }
            }
            ),
            this._findSubMenus(),
            this._setSubMenuItemCounts(),
            this._updateSubMenuListenersForViewport(this._isBreakpointWithMenu()),
            this._updateSubMenuAttributesForViewport(this._isBreakpointWithMenu())
        },
        onFlyoutWillOpen(e) {
            !this.subMenuEls.includes(e) || this.el.classList.add(this.classNames.withSubMenuOpen)
        },
        destroy() {
            this.closeFlyout(this._currentFlyout),
            this.el.classList.add(this.classNames.subMenusDisabled),
            this._removeSubMenuEvents(),
            clearTimeout(this._compactSubMenuItemFocus)
        },
        _getSubMenu(e) {
            return [...e.children].find(t=>t.classList.contains(this.classNames.subMenu))
        },
        _findTopNavList() {
            return this.topNavList = this.el.querySelector(`.${this.classNames.list}`),
            this.topNavList
        },
        _findSubMenus() {
            return this.subMenuEls = [...this.el.querySelectorAll(`.${this.classNames.itemSubMenu}`)],
            this.subMenuEls
        },
        _setSubMenuItemCounts() {
            const e = this._isBreakpointWithMenu();
            this.submenus.forEach(t=>{
                const {content: s, groups: n} = t;
                let a = 0
                  , i = 0
                  , l = 0;
                e || (i = 0),
                n.forEach((h,c)=>{
                    const {isElevated: f, header: r, list: v, group: b} = h;
                    b.style.setProperty(this.cssVariables.flyoutGroupNumber, c),
                    e || (l = 0),
                    [r, ...v.children].forEach((o,g)=>{
                        o.style.setProperty(this.cssVariables.flyoutItemNumber, ++l),
                        (!c || e) && ++i
                    }
                    ),
                    f && ++a
                }
                ),
                s.style.setProperty(this.cssVariables.flyoutElevatedGroupCount, a),
                s.style.setProperty(this.cssVariables.flyoutGroupTotal, n.length - 1),
                s.style.setProperty(this.cssVariables.flyoutItemTotal, i)
            }
            )
        },
        _addSubMenuEvents() {
            this.topNavList.addEventListener("touchstart", this.onNavListTouchStart, {
                once: !0,
                passive: !0
            }),
            this.topNavList.addEventListener("mouseover", this.onMenuItemMouseOver),
            this.topNavList.addEventListener("click", this.onMenuItemButtonClick);
            for (let e of this.subMenuEls)
                e.removeEventListener("click", this.onHiddenMenuItemClick)
        },
        _removeSubMenuEvents() {
            this.topNavList.removeEventListener("touchstart", this.onNavListTouchStart),
            this.topNavList.removeEventListener("mouseover", this.onMenuItemMouseOver),
            this.topNavList.removeEventListener("click", this.onMenuItemButtonClick);
            for (let e of this.subMenuEls)
                e.addEventListener("click", this.onHiddenMenuItemClick)
        },
        _updateSubMenuListenersForViewport(e) {
            e ? this._removeSubMenuEvents() : this._addSubMenuEvents()
        },
        _updateSubMenuAttributesForViewport(e) {
            this.submenus.forEach(({trigger: t})=>{
                e ? (t.group.setAttribute("role", "none"),
                t.link.setAttribute("role", "button"),
                t.buttonLabel && t.link.setAttribute("aria-label", t.buttonLabel)) : (t.group.removeAttribute("role"),
                t.link.removeAttribute("role"),
                t.linkLabel && t.link.setAttribute("aria-label", t.linkLabel))
            }
            )
        }
    }]
      , Vi = {
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
      , qi = {
        browser: [{
            name: "edge",
            userAgent: "Edge",
            version: ["rv", "Edge"],
            test: function(e) {
                return e.ua.indexOf("Edge") > -1 || e.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        }, {
            name: "edgeChromium",
            userAgent: "Edge",
            version: ["rv", "Edg"],
            test: function(e) {
                return e.ua.indexOf("Edg") > -1 && e.ua.indexOf("Edge") === -1
            }
        }, {
            name: "chrome",
            userAgent: "Chrome"
        }, {
            name: "firefox",
            test: function(e) {
                return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Opera") === -1
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
                return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && e.ua.indexOf("Android") === -1
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
      , Gs = Vi
      , zs = qi;
    function ji(e) {
        return new RegExp(e + "[a-zA-Z\\s/:]+([0-9_.]+)","i")
    }
    function Zi(e, t) {
        if (typeof e.parseVersion == "function")
            return e.parseVersion(t);
        var s = e.version || e.userAgent;
        typeof s == "string" && (s = [s]);
        for (var n = s.length, a, i = 0; i < n; i++)
            if (a = t.match(ji(s[i])),
            a && a.length > 1)
                return a[1].replace(/_/g, ".");
        return !1
    }
    function Ks(e, t, s) {
        for (var n = e.length, a, i, l = 0; l < n; l++)
            if (typeof e[l].test == "function" ? e[l].test(s) === !0 && (a = e[l].name) : s.ua.indexOf(e[l].userAgent) > -1 && (a = e[l].name),
            a) {
                if (t[a] = !0,
                i = Zi(e[l], s.ua),
                typeof i == "string") {
                    var h = i.split(".");
                    t.version.string = i,
                    h && h.length > 0 && (t.version.major = parseInt(h[0] || 0),
                    t.version.minor = parseInt(h[1] || 0),
                    t.version.patch = parseInt(h[2] || 0))
                } else
                    a === "edge" && (t.version.string = "12.0.0",
                    t.version.major = "12",
                    t.version.minor = "0",
                    t.version.patch = "0");
                return typeof e[l].parseDocumentMode == "function" && (t.version.documentMode = e[l].parseDocumentMode()),
                t
            }
        return t
    }
    function Gi(e) {
        var t = {};
        return t.browser = Ks(zs.browser, Gs.browser, e),
        t.os = Ks(zs.os, Gs.os, e),
        t
    }
    var zi = Gi
      , Ki = {
        ua: window.navigator.userAgent,
        platform: window.navigator.platform,
        vendor: window.navigator.vendor
    }
      , Qi = zi(Ki);
    let jt;
    var Yi = function() {
        return jt || (jt = Qi),
        jt
    }
      , Ji = {
        created() {
            this.viewportMeta = document.querySelector("meta[name=viewport]"),
            this.DISABLE_ZOOM_TOKEN = ", maximum-scale=1, user-scalable=0"
        },
        onLayoutChange() {
            this.scrollSwitchUnlock()
        },
        onFlyoutWillOpen(e, t) {
            this._isBreakpointWithMenu() && !t && this.scrollSwitchLock()
        },
        onFlyoutWillClose(e, t) {
            this._isBreakpointWithMenu() && !t && this.scrollSwitchUnlock()
        },
        scrollSwitchLock() {
            const e = window.innerWidth - document.documentElement.clientWidth
              , t = Boolean(e);
            document.documentElement.style.setProperty(this.cssVariables.scrollbarWidth, `${e}px`),
            document.documentElement.classList.add(this.classNames.noScroll),
            document.documentElement.classList.toggle(this.classNames.noScrollLong, t),
            this._shouldManageZoom() && this.viewportMeta.setAttribute("content", `${this.viewportMeta.getAttribute("content")}${this.DISABLE_ZOOM_TOKEN}`)
        },
        scrollSwitchUnlock() {
            document.documentElement.style.removeProperty(this.cssVariables.scrollbarWidth),
            document.documentElement.classList.remove(this.classNames.noScroll),
            document.documentElement.classList.remove(this.classNames.noScrollLong),
            this._shouldManageZoom() && this.viewportMeta.setAttribute("content", this.viewportMeta.getAttribute("content").replace(this.DISABLE_ZOOM_TOKEN, ""))
        },
        _shouldManageZoom() {
            return !(!Yi().browser.android || !this.viewportMeta)
        }
    }
      , Xi = {
        created() {
            this.textZoom = {}
        },
        mounted() {
            this.textZoom.topNavStyles = getComputedStyle(this.el),
            this.textZoom.topNavBaseFontSize = parseInt(this.textZoom.topNavStyles.getPropertyValue(this.cssVariables.fontSize)),
            this._createfontSizeObserverElement(),
            this._createfontSizeObserver()
        },
        onTextZoomResize(e) {
            const s = parseInt(this.textZoom.topNavStyles.fontSize) / this.textZoom.topNavBaseFontSize;
            this.el.classList[s <= 1 ? "remove" : "add"](this.classNames.textZoomIn),
            this.el.style.setProperty(this.cssVariables.textZoomScale, s)
        },
        destroy() {
            this.textZoom.fontSizeObserver.unobserve(this.textZoom.fontSizeObserverElement),
            this.el.removeChild(this.textZoom.fontSizeObserverElement),
            this.textZoom = null
        },
        _createfontSizeObserverElement() {
            this.textZoom.fontSizeObserverElement = document.createElement("span"),
            this.textZoom.fontSizeObserverElement.innerHTML = "&nbsp;",
            this.textZoom.fontSizeObserverElement.style.visibility = "hidden",
            this.textZoom.fontSizeObserverElement.style.position = "absolute",
            this.textZoom.fontSizeObserverElement.style.top = "0",
            this.textZoom.fontSizeObserverElement.style.zIndex = "-1",
            this.el.appendChild(this.textZoom.fontSizeObserverElement)
        },
        _createfontSizeObserver() {
            this.textZoom.fontSizeObserver = new ResizeObserver(this.onTextZoomResize),
            this.textZoom.fontSizeObserver.observe(this.textZoom.fontSizeObserverElement)
        }
    }
      , ea = Object.prototype.hasOwnProperty
      , ta = function e(t) {
        if (typeof t != "object" || t === null)
            throw new TypeError("object-utils.deepClone : Invalid parameter - expected object");
        var s = Array.isArray(t) ? [] : {};
        for (var n in t)
            ea.call(t, n) && (typeof t[n] == "object" && t[n] !== null ? s[n] = e(t[n]) : s[n] = t[n]);
        return s
    };
    function Zt(e, t, s, n) {
        return e ? {
            key: t ? "[" + t + "]" : "",
            val1: s,
            val2: n
        } : !1
    }
    var sa = function e(t, s, n) {
        var a;
        if (!t || !s || typeof t != "object" || typeof s != "object") {
            var i = t === s;
            return i || Zt(n, a, t, s)
        }
        var l = Object.keys(t)
          , h = l.length
          , c = Object.keys(s)
          , f = c.length;
        if (h !== f)
            return Zt(n, a, t, s);
        for (var r = 0; r < h; r++) {
            a = l[r];
            var v = t[a]
              , b = s[a];
            if (typeof v == "object" && typeof b == "object") {
                var o = e(v, b, n);
                if (typeof o != "boolean" && (o.key = "[" + a + "]" + o.key),
                o !== !0)
                    return o
            } else if (v !== b)
                return Zt(n, a, v, b)
        }
        return !0
    }
      , na = Object.prototype.hasOwnProperty
      , ia = function(t) {
        if (typeof t != "object")
            throw new TypeError("object-utils.isEmpty : Invalid parameter - expected object");
        for (var s in t)
            if (na.call(t, s))
                return !1;
        return !0
    }
      , Qs = {
        deepClone: ta,
        isDeepEqual: sa,
        isEmpty: ia
    }
      , aa = [Zs, {
        isEnabledWhen() {
            return this.searchEnabled !== !1
        },
        created() {
            this.search = {},
            this.search.state = {
                isOpening: !1,
                activeState: 0,
                isAnimating: !1,
                lastAnimatedItem: null,
                count: {
                    textContent: ""
                }
            },
            this.search.elements = {
                results: {},
                initialResults: null
            },
            this.search.templateFunction = this._createSearchResultsTemplate,
            this.curtain = this.curtain || document.querySelector(`.${this.classNames.el} ~ .${this.classNames.curtain}`),
            this.topNavList = this.topNavList || this.el.querySelector(`.${this.classNames.list}`)
        },
        beforeMount() {
            this._setupSearchElements(),
            this._addSearchEvents()
        },
        destroy() {
            clearTimeout(this.search.searchDebounce),
            this.closeFlyout(this.search.el),
            this._removeSearchEvents()
        },
        onFlyoutWillOpen(e) {
            e === this.search.elements.el && (this.clearSearch(),
            this.search.state.isOpening = !0,
            this.search.state.activeState = 0,
            this.search.elements.initialResults ? this._renderSearchResults(this.search.templateFunction(this.search.initialResults)) : this.onSearchUpdate(),
            this._addSearchAnimationEvents())
        },
        onFlyoutOpen(e) {
            e === this.search.elements.el && (this.search.elements.input.focus(),
            this._getFlyoutItem(e).scrollContainer.scrollTop = 0,
            this.search.state.isOpening = !1)
        },
        onFlyoutClose(e) {
            if (e !== this.search.elements.el)
                return;
            this.clearSearch();
            const t = (s,n)=>{
                n.substr(0, 5) === "shift" && s.classList.remove(n)
            }
            ;
            this.search.elements.el.classList.forEach(t.bind(this, this.search.elements.el)),
            this._preventFlyoutClose = !1,
            clearTimeout(this.search.countTimeoutId),
            this._removeSearchAnimationEvents()
        },
        onIconFlyoutFocusIn({target: e}) {
            e === this.search.elements.input && this.addSearchInputFocusEvents()
        },
        onSearchMouseMove(e) {
            this._preventFlyoutClose = !1
        },
        onSearchInputKeyDown(e) {
            const {keyCode: t} = e;
            switch (t) {
            case ue.SHIFT:
            case ue.CONTROL:
            case ue.ALT:
            case ue.COMMAND:
            case ue.CAPSLOCK:
                break;
            case ue.ARROW_UP:
                e.preventDefault(),
                this.search.selectionController.active >= 0 && (--this.search.selectionController.active,
                this._highlightSearchSelection());
                break;
            case ue.ARROW_DOWN:
                e.preventDefault(),
                this.search.selectionController.active < this.search.selectionController.links.length - 1 && (++this.search.selectionController.active,
                this._highlightSearchSelection());
                break;
            case ue.ENTER:
                this.search.elements.input.value.trim() === "" && this.search.selectionController.active === -1 ? (e.preventDefault(),
                e.stopPropagation()) : this.search.selectionController.active > -1 && this.search.selectionController.links[this.search.selectionController.active].click();
                break;
            case ue.ESCAPE:
                e.preventDefault();
                break;
            default:
                this._preventFlyoutClose = !0;
                const s = getComputedStyle(this.search.elements.el).getPropertyValue(this.cssVariables.searchResultsTimeoutDuration)
                  , n = s.includes("ms") ? parseInt(s) : s.includes("s") ? parseFloat(s) * 1e3 : 0;
                clearTimeout(this.search.searchDebounce),
                this.search.searchDebounce = setTimeout(()=>this.onSearchInputChange(e), n)
            }
        },
        onSearchInputChange(e) {
            var n, a;
            const t = ((a = (n = e.target) == null ? void 0 : n.value) == null ? void 0 : a.trim()) || "";
            if (t.length < 2 && !this.search.previousSearchTerm || this.search.previousSearchTerm === t) {
                this._updateSearchFieldButtons();
                return
            }
            this.search.previousSearchTerm = t,
            this.onSearchUpdate(e)
        },
        onSearchResultsRendered() {
            var a, i;
            const {value: e} = this.search.elements.input
              , t = (a = this.search.elements.results) == null ? void 0 : a.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsContainer}`).length
              , n = `${(i = this.search.elements.results) == null ? void 0 : i.querySelectorAll(`.${this.classNames.searchResultsCurrent} .${this.classNames.searchResultsListItem}`).length} ${this.search.state.resultsLabel}`;
            this._flyoutTimeouts.push(setTimeout(()=>{
                this.search.elements.count.textContent = n,
                this._flyoutTimeouts.push(setTimeout(()=>{
                    this.search.elements.count.textContent = ""
                }
                , this.search.state.countResetDelayTime))
            }
            , this.search.state.countSetDelayTime)),
            this._updateSearchFieldButtons(),
            this.search.elements.el.classList[e.length > 1 ? "add" : "remove"](this.classNames.searchWithResults),
            this.search.elements.el.classList[t ? "remove" : "add"](this.classNames.searchNoResults),
            this._setFlyoutHeight(this.search.elements.el, this._getSearchFlyoutHeightOffset())
        },
        blurSearchInput(e) {
            const t = e.type === "touchmove"
              , s = this.search.elements.content.contains(e.target);
            this.menu.elements.menuButton.contains(e.target) || (!s || t) && (this.search.elements.input.blur(),
            e.preventDefault())
        },
        addSearchInputFocusEvents() {
            this.content.addEventListener("touchstart", this.blurSearchInput, {
                once: !0
            }),
            this.content.addEventListener("touchmove", this.blurSearchInput, {
                once: !0
            })
        },
        removeSearchInputFocusEvents() {
            this.content.removeEventListener("touchstart", this.blurSearchInput),
            this.content.removeEventListener("touchmove", this.blurSearchInput)
        },
        onSearchResetClick(e) {
            e.preventDefault(),
            this.clearSearch(),
            this.search.elements.input.focus(),
            this.onSearchUpdate()
        },
        clearSearch() {
            this.search.elements.formButtons.forEach(e=>e.setAttribute("tabindex", "-1")),
            this.search.elements.input.value = "",
            this.search.previousSearchTerm = "",
            this.search.elements.cachedResults = "",
            clearTimeout(this.search.elements.countTimeoutId)
        },
        setInitialSearchResults(e) {
            this.search.initialResults = e,
            this._renderSearchResults(this.search.templateFunction(this.search.initialResults))
        },
        setSearchResults(e=[]) {
            var n, a, i;
            const t = Qs.isDeepEqual(e, this.search.elements.initialResults);
            let s = !1;
            if (this.search.elements.cachedResults && e.length) {
                const l = f=>f.reduce((r,v)=>(r.push({
                    ...v,
                    results: v.results.map(b=>({
                        ...b,
                        highlight: null
                    }))
                }),
                r), [])
                  , h = l(e)
                  , c = l(this.search.elements.cachedResults);
                s = Qs.isDeepEqual(h, c)
            }
            if (t && !this.search.elements.cachedResults) {
                this._updateSearchFieldButtons();
                return
            } else if (!e.length && this.search.elements.cachedResults) {
                this.search.elements.el.classList.add(this.classNames.searchResultsOverrideHighlight),
                this._updateSearchFieldButtons();
                return
            } else if (s) {
                const {cachedSearchValue: l} = this.search
                  , {value: h} = this.search.elements.input
                  , c = !(l.includes(h) || h.includes(l));
                this.search.elements.el.classList[c ? "add" : "remove"](this.classNames.searchResultsOverrideHighlight)
            } else
                this.search.elements.cachedResults = ((a = (n = this.search.elements.input) == null ? void 0 : n.value) == null ? void 0 : a.length) > 1 ? e : null,
                this.search.elements.el.classList.remove(this.classNames.searchResultsOverrideHighlight);
            this.search.cachedSearchValue = (i = this.search.elements.input) == null ? void 0 : i.value,
            this._renderSearchResults(this.search.templateFunction(e), s)
        },
        _addSearchEvents() {
            this.search.elements.flyout.addEventListener("mousemove", this.onSearchMouseMove),
            this.search.elements.reset.addEventListener("click", this.onSearchResetClick),
            this.search.elements.input.addEventListener("keydown", this.onSearchInputKeyDown)
        },
        _removeSearchEvents() {
            this.search.elements.flyout.removeEventListener("mousemove", this.onSearchMouseMove),
            this.search.elements.reset.removeEventListener("click", this.onSearchResetClick),
            this.search.elements.input.removeEventListener("keydown", this.onSearchInputKeyDown)
        },
        _addSearchAnimationEvents() {
            this.el.addEventListener("transitionstart", this._onFlyoutTransitionStart),
            this.el.addEventListener("transitionend", this._onFlyoutTransitionEnd),
            this.search.elements.results.addEventListener("animationstart", this._onResultsAnimationStart),
            this.search.elements.results.addEventListener("animationend", this._onResultsAnimationEnd)
        },
        _removeSearchAnimationEvents() {
            this.el.removeEventListener("transitionstart", this._onFlyoutTransitionStart),
            this.el.removeEventListener("transitionend", this._onFlyoutTransitionEnd),
            this.search.elements.results.removeEventListener("animationstart", this._onResultsAnimationStart),
            this.search.elements.results.removeEventListener("animationend", this._onResultsAnimationEnd)
        },
        _onSearchAnimationEnd() {
            var e;
            this.search.state.activeState || this.search.elements.results.container.remove(),
            (e = this.search.elements.results.containerPrevious) == null || e.remove(),
            this.el.classList.remove(this.classNames.animating),
            this.search.state.isAnimating = !1,
            this.search.state.lastAnimatedItem = null
        },
        _onResultsAnimationStart({animationName: e, target: t}) {
            e.includes("-search-") && (this.search.state.lastAnimatedItem = t)
        },
        _onResultsAnimationEnd({animationName: e, elapsedTime: t, target: s}) {
            e.includes("-search-") && !!t && s === this.search.state.lastAnimatedItem && !this.search.state.isAnimating && this._onSearchAnimationEnd()
        },
        _onFlyoutTransitionStart({propertyName: e, target: t}) {
            const s = this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout;
            t === s && e === "height" && (this.search.state.isAnimating = !0)
        },
        _onFlyoutTransitionEnd({propertyName: e, target: t}) {
            const s = this._isBreakpointWithMenu() ? this.content : this.search.elements.flyout;
            t === s && e === "height" && this._onSearchAnimationEnd()
        },
        _getSearchFlyoutHeightOffset() {
            const {marginTop: e} = getComputedStyle(this.search.elements.results)
              , t = this.search.elements.el.classList.contains(this.classNames.searchNoResults);
            let s = 0;
            return t && (s = parseInt(e) * -1),
            s
        },
        _setSearchItemNumbers(e) {
            const t = e || this.search.elements.flyout
              , s = t.querySelector(`.${this.classNames.searchResultsCurrent}`)
              , n = t.querySelector(`.${this.classNames.searchResultsPrevious}`)
              , a = s != null && s.children.length ? s : n;
            if (!a)
                return;
            const i = [`.${this.classNames.searchResultsHeader}`, `.${this.classNames.searchResultsListItem}`]
              , l = [...a.querySelectorAll(`.${this.classNames.searchResultsContainer}`)]
              , h = [...a.querySelectorAll(i.join(", "))];
            l.forEach((c,f)=>c.style.setProperty(this.cssVariables.flyoutGroupNumber, f)),
            h.forEach((c,f)=>c.style.setProperty(this.cssVariables.flyoutItemNumber, f)),
            this.search.elements.flyout.style.setProperty(this.cssVariables.flyoutItemTotal, h.length - 1)
        },
        _setupSearchElements() {
            this.search.elements.el = this.topNavList.querySelector(`.${this.classNames.search}`),
            this.search.elements.link = this.search.elements.el.querySelector(`.${this.classNames.linkSearch}`),
            this.search.elements.flyout = this.search.elements.el.querySelector(`.${this.classNames.subMenu}`),
            this.search.elements.content = this.search.elements.el.querySelector(`.${this.classNames.flyoutContent}`),
            this.search.elements.form = this.search.elements.flyout.querySelector(`.${this.classNames.searchForm}`),
            this.search.elements.input = this.search.elements.flyout.querySelector(`.${this.classNames.searchInput}`),
            this.search.elements.submit = this.search.elements.flyout.querySelector(`.${this.classNames.searchSubmit}`),
            this.search.elements.reset = this.search.elements.flyout.querySelector(`.${this.classNames.searchReset}`),
            this.search.elements.results = this.search.elements.flyout.querySelector(`.${this.classNames.searchResults}`),
            this.search.elements.count = this.search.elements.flyout.querySelector(`.${this.classNames.searchResultsCount}`),
            this.search.elements.resultsListText = Array.from(this.search.elements.flyout.querySelectorAll(`.${this.classNames.searchResultsListText}`)),
            this.search.elements.formButtons = [this.search.elements.submit, this.search.elements.reset],
            this.search.elements.currentResults = null,
            this.search.state.resultsLabel = this.search.elements.count.getAttribute("data-topnav-searchresults-label"),
            this.search.state.countSetDelayTime = 300,
            this.search.state.countResetDelayTime = 1e4,
            this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled, !0)
        },
        _updateSearchFieldButtons() {
            const {value: e} = this.search.elements.input;
            this.search.elements.formButtons.forEach(t=>{
                e ? (t.setAttribute("tabindex", "0"),
                t.removeAttribute("disabled"),
                t.removeAttribute("aria-hidden")) : (t.setAttribute("tabindex", "-1"),
                t.setAttribute("disabled", ""),
                t.setAttribute("aria-hidden", "true"))
            }
            )
        },
        _highlightSearchSelection() {
            this.search.selectionController,
            this.search.selectionController.links.forEach((e,t)=>{
                e.classList[t === this.search.selectionController.active ? "add" : "remove"](this.classNames.searchResultsHover)
            }
            )
        },
        _initSearchResultsSelectionController() {
            var e;
            this.search.selectionController = {},
            this.search.selectionController.links = [],
            this.search.selectionController.active = -1,
            this.search.selectionController.links = ((e = this.search.elements.results.container) == null ? void 0 : e.querySelectorAll(`.${this.classNames.searchResultsListLink}`)) || []
        },
        _createSearchResultsTemplate(e) {
            const t = this._getCurrentLayout()
              , s = {
                width: t === "compact" ? 13 : 9,
                height: t === "compact" ? 25 : 16
            };
            return `${e.map(n=>{
                const {title: a, results: i, icon: l} = n;
                return `
				<div class="${this.classNames.searchResultsContainer}">
					<h2 class="${this.classNames.searchResultsHeader}">${a}</h2>
					<ul class="${this.classNames.searchResultsList}">

						${i.map(h=>{
                    const {url: c, highlight: f} = h;
                    let {label: r} = h;
                    if (f) {
                        const [v,b] = Object.entries(f)[0]
                          , o = Number(v) + Number(b)
                          , g = r.slice(0, v)
                          , k = r.slice(v, o)
                          , T = r.slice(o)
                          , {searchResultsTextHighlight: I} = this.classNames;
                        r = `${g}<span class="${I}">${k}</span>${T}`
                    }
                    return `
								<li class="${this.classNames.searchResultsListItem}">
									<a class="${this.classNames.searchResultsListLink}" href="${c}">
										<span class="${this.classNames.searchResultsListIcon}">
											<svg width="${s.width}" height="${s.height}"><use href="#${this.options.className}-list-icon-${l}-${t}" /></svg>
										</span>
										<span class="${this.classNames.searchResultsListText}">${r}</span>
									</a>
								</li>`
                }
                ).join("")}
					</ul>
				</div>`
            }
            ).join("")}`
        },
        _appendSearchResultsContent(e) {
            const t = document.createElement("div");
            return t.classList.add(this.classNames.searchResultsCurrent),
            t.innerHTML = e,
            this.search.elements.currentResults = t,
            t
        },
        _renderSearchResults(e, t=!1) {
            var l, h, c;
            const s = this.search.elements.el.querySelector(`.${this.classNames.searchResults}`)
              , n = this._appendSearchResultsContent(e)
              , a = this.search.elements.currentResults.querySelectorAll(`.${this.classNames.searchResultsContainer}`);
            if (this._currentFlyout == this.search.elements.el && !t && this.el.classList.add(this.classNames.animating),
            (l = this.search.elements.results.containerPrevious) == null || l.remove(),
            this.search.elements.results.containerPrevious = this.search.elements.results.container,
            (h = this.search.elements.results.containerPrevious) == null || h.classList.remove(`${this.classNames.searchResultsCurrent}`),
            (c = this.search.elements.results.containerPrevious) == null || c.classList.add(`${this.classNames.searchResultsPrevious}`),
            s.appendChild(n),
            this.search.elements.results.container = n,
            this._initSearchResultsSelectionController(),
            this.search.previousState = this.search.state.activeState || 0,
            this.search.state.activeState = a.length,
            this.search.previousShift = this.search.currentShift,
            this.search.currentShift = `shift-${this.search.previousState}-${this.search.state.activeState}`,
            this.search.previousState === 2 && this.search.state.activeState === 1) {
                const f = [...this.search.elements.results.containerPrevious.querySelectorAll(`.${this.classNames.searchResultsHeader}`), ...this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsHeader}`)]
                  , [r,v,b] = f;
                v.textContent === b.textContent && (this.search.currentShift += "-slide")
            }
            if (this.search.state.activeState === 2) {
                const [f,r] = this.search.elements.results.container.querySelectorAll(`.${this.classNames.searchResultsContainer}`)
                  , v = f.scrollHeight
                  , {marginTop: b} = getComputedStyle(r)
                  , o = parseInt(b);
                this.search.elements.flyout.style.setProperty(this.cssVariables.searchSuggestedLinksHeight, `${v + o}px`)
            }
            this.search.elements.el.classList.remove(this.search.previousShift),
            requestAnimationFrame(()=>{
                this.search.elements.el.classList.add(this.search.currentShift),
                this._setFlyoutHeight(this.search.elements.el, this._getSearchFlyoutHeightOffset()),
                this._setSearchItemNumbers(),
                this.onSearchResultsRendered(),
                t && this._onSearchAnimationEnd()
            }
            )
        }
    }];
    const oa = {
        className: "topnav",
        mixins: [],
        curtainBlur: !0,
        scrimBlur: !0
    };
    class ra {
        constructor(t, s={}) {
            this.el = t,
            this.options = Object.assign({}, oa, s),
            this._viewportsWithMenu = ["xsmall", "small", "medium"];
            const n = {
                ref: this,
                events: ["beforeCreate", "created", "beforeMount", "mounted", "unload", "destroy", "onLayoutChange", "onTextZoomResize", "onMenuTransitionEnd", "onMenuWillOpen", "onMenuWillClose", "onMenuOpen", "onMenuClose", "onFlyoutWillOpen", "onFlyoutWillClose", "onFlyoutOpen", "onFlyoutClose", "onMenuButtonClick", "onMenuBackButtonClick", "onHiddenMenuItemClick", "onMenuItemMouseOver", "onMenuItemMouseLeave", "onSearchUpdate", "onSearchResultsRendered", "onCurtainClick", "onIconFlyoutFocusIn", "onIconFlyoutFocusOut", "onIconFlyoutClick", "onIconFlyoutKeyDown"],
                viewportEvents: !0,
                breakpoints: [{
                    name: "xsmall",
                    mediaQuery: "only screen and (max-width: 480px)"
                }, {
                    name: "small",
                    mediaQuery: "only screen and (min-width: 481px) and (max-width: 640px)"
                }, {
                    name: "medium",
                    mediaQuery: "only screen and (min-width: 641px) and (max-width: 833px)"
                }, {
                    name: "large",
                    mediaQuery: "only screen and (min-width: 834px)"
                }],
                setupEvents: ["beforeCreate", "created", "beforeMount", "mounted"]
            };
            return this.classNames = {
                el: this.options.className,
                content: `${this.options.className}-content`,
                list: `${this.options.className}-list`,
                link: `${this.options.className}-link`,
                linkSearch: `${this.options.className}-link-search`,
                curtain: `${this.options.className}-curtain`,
                curtainNoBlur: `${this.options.className}-curtain-noblur`,
                scrim: `${this.options.className}-scrim`,
                scrimNoBlur: `${this.options.className}-scrim-noblur`,
                animating: `${this.options.className}-animating`,
                menuButton: `${this.options.className}-menutrigger-button`,
                menuBackButton: `${this.options.className}-menuback-button`,
                withMenuOpen: `${this.options.className}-with-menu-open`,
                menu: `${this.options.className}-menu`,
                menuList: `${this.options.className}-menu-list`,
                item: `${this.options.className}-item`,
                itemMenu: `${this.options.className}-item-menu`,
                itemSubMenu: `${this.options.className}-item-submenu`,
                itemFlyoutOpen: `${this.options.className}-item-flyout-open`,
                itemFlyoutChangePrevious: `${this.options.className}-item-flyout-change-previous`,
                itemFlyoutChangeNext: `${this.options.className}-item-flyout-change-next`,
                itemFlyoutClosing: `${this.options.className}-item-flyout-closing`,
                withFlyoutOpen: `${this.options.className}-with-flyout-open`,
                withFlyoutClosing: `${this.options.className}-with-flyout-closing`,
                flyout: `${this.options.className}-flyout`,
                flyoutContent: `${this.options.className}-flyout-content`,
                flyoutScrollContainer: `${this.options.className}-flyout-scroll-container`,
                flyoutShort: `${this.options.className}-flyout-short`,
                flyoutItem: `${this.options.className}-flyout-item`,
                flyoutItemGroup: `${this.options.className}-flyout-item-group`,
                withSubMenuOpen: `${this.options.className}-with-submenu-open`,
                withIconFlyoutOpen: `${this.options.className}-with-iconflyout-open`,
                subMenu: `${this.options.className}-submenu`,
                subMenuShort: `${this.options.className}-submenu-short`,
                subMenuLink: `${this.options.className}-submenu-link`,
                subMenuContent: `${this.options.className}-submenu-content`,
                subMenuTriggerGroup: `${this.options.className}-submenu-trigger-group`,
                subMenuTriggerLink: `${this.options.className}-submenu-trigger-link`,
                subMenuTriggerButton: `${this.options.className}-submenu-trigger-button`,
                subMenuGroup: `${this.options.className}-submenu-group`,
                subMenuGroupElevated: `${this.options.className}-submenu-group-elevated`,
                subMenuHeader: `${this.options.className}-submenu-header`,
                subMenuList: `${this.options.className}-submenu-list`,
                subMenusDisabled: `${this.options.className}-submenus-disabled`,
                blockTransitions: `${this.options.className}-block-transitions`,
                noScroll: `${this.options.className}-noscroll`,
                noScrollLong: `${this.options.className}-noscroll-long`,
                search: `${this.options.className}-search`,
                searchForm: `${this.options.className}-searchfield`,
                searchInput: `${this.options.className}-searchfield-input`,
                searchSubmit: `${this.options.className}-searchfield-submit`,
                searchReset: `${this.options.className}-searchfield-reset`,
                searchResults: `${this.options.className}-searchresults`,
                searchResultsCount: `${this.options.className}-searchresults-count`,
                searchResultsCurrent: `${this.options.className}-searchresults-current`,
                searchResultsPrevious: `${this.options.className}-searchresults-previous`,
                searchResultsContainer: `${this.options.className}-searchresults-container`,
                searchResultsHeader: `${this.options.className}-searchresults-header`,
                searchResultsList: `${this.options.className}-searchresults-list`,
                searchResultsListLink: `${this.options.className}-searchresults-list-link`,
                searchResultsListIcon: `${this.options.className}-searchresults-list-icon`,
                searchResultsListItem: `${this.options.className}-searchresults-list-item`,
                searchResultsListText: `${this.options.className}-searchresults-list-text`,
                searchResultsHover: `${this.options.className}-searchresults-hover`,
                searchResultsTextHighlight: `${this.options.className}-searchresults-list-text-highlight`,
                searchWithResults: `${this.options.className}-search-with-results`,
                searchNoResults: `${this.options.className}-search-no-results`,
                searchResultsOverrideHighlight: `${this.options.className}-searchresults-override-highlight`,
                textZoomIn: `${this.options.className}-text-zoom-in`
            },
            this.cssVariables = {
                topnavHeight: `--r-${this.options.className}-height`,
                flyoutItemNumber: `--r-${this.options.className}-flyout-item-number`,
                flyoutItemTotal: `--r-${this.options.className}-flyout-item-total`,
                flyoutGroupNumber: `--r-${this.options.className}-flyout-group-number`,
                flyoutGroupTotal: `--r-${this.options.className}-flyout-group-total`,
                flyoutElevatedGroupCount: `--r-${this.options.className}-flyout-elevated-group-count`,
                flyoutSpacing: `--r-${this.options.className}-flyout-spacing`,
                flyoutHeight: `--r-${this.options.className}-flyout-height`,
                flyoutPreviousHeight: `--r-${this.options.className}-previous-flyout-height`,
                flyoutNextHeight: `--r-${this.options.className}-next-flyout-height`,
                flyoutRateOfChange: `--r-${this.options.className}-flyout-rate`,
                flyoutCloseDelay: `--r-${this.options.className}-flyout-close-delay`,
                scrollbarWidth: `--r-${this.options.className}-scrollbar-width`,
                textZoomScale: `--r-${this.options.className}-text-zoom-scale`,
                fontSize: `--r-${this.options.className}-font-size`,
                searchResultsTimeoutDuration: `--r-${this.options.className}-searchresults-timeout`,
                searchSuggestedLinksHeight: `--r-${this.options.className}-suggested-links-height`
            },
            this.dataAttributes = {
                iconFlyoutEnabled: `data-${this.options.className}-iconFlyout-enabled`
            },
            new Dt(n,wi,...this.options.mixins),
            this.options.manuallyInitLifecycles ? this : this.beforeCreate().created().beforeMount().mounted()
        }
    }
    const Ys = gt(null)
      , la = Ys.Provider
      , Gt = gt(null)
      , ca = Gt.Provider
      , ua = "data-focus-method"
      , Js = "touch"
      , ha = "mouse"
      , ma = "key";
    function da(e, t) {
        t.current = ma
    }
    function pa(e, t) {
        t.current !== Js && (t.current = ha)
    }
    function fa(e, t) {
        t.current = Js
    }
    function ga(e, t, s, n) {
        const a = e.target;
        s.current == null && (s.current = n.current),
        a.setAttribute(t, s.current),
        n.current = s.current,
        s.current = null
    }
    function _a(e, t) {
        e.target.removeAttribute(t)
    }
    function va(e) {
        e.current = null
    }
    const ba = (e,t)=>{
        const s = z(null)
          , n = z(null);
        fe(()=>{
            const a = e == null ? void 0 : e.current
              , i = a != null ? a : document.body
              , l = t != null ? t : ua
              , h = {
                keydown: function(f) {
                    return da(f, n)
                },
                mousedown: function(f) {
                    return pa(f, n)
                },
                touchstart: function(f) {
                    return fa(f, n)
                },
                focus: function(f) {
                    return ga(f, l, n, s)
                },
                blur: function(f) {
                    return _a(f, l)
                },
                windowBlur: function() {
                    return va(n)
                }
            };
            return a !== null && (Object.entries(h).forEach(([c,f])=>{
                i.addEventListener(`${c}`, f, {
                    capture: !0,
                    passive: !0
                })
            }
            ),
            window.addEventListener("blur", h.windowBlur)),
            ()=>{
                a !== null && (Object.entries(h).forEach(([c,f])=>{
                    i.removeEventListener(`${c}`, f)
                }
                ),
                window.removeEventListener("blur", h.windowBlur))
            }
        }
        , [t, e])
    }
      , Ce = e=>{
        if (typeof e != "undefined")
            return e.reduce((t,s)=>(t[s.name] = s.value,
            t), {})
    }
      , me = (e,t)=>{
        typeof t != "undefined" && typeof e != "undefined" && t.forEach(({name: s, value: n})=>{
            e.setAttribute(s, n)
        }
        )
    }
      , St = (e,t)=>{
        typeof t != "undefined" && typeof e != "undefined" && t.forEach(({name: s, value: n})=>{
            e.removeAttribute(s)
        }
        )
    }
    ;
    async function ya({searchLocale: e, apiRequestDomain: t, apiRequestURL: s, searchSrc: n}) {
        const a = await fetch(`${t}${s}?src=${n}&locale=${e}`);
        return a.ok ? await a.json() : await Promise.reject(new Error("no default links"))
    }
    async function Sa({query: e, id: t, searchLocale: s, apiRequestDomain: n, apiRequestURL: a, searchSrc: i}) {
        const l = await fetch(`${n}${a}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: e,
                src: i,
                id: t,
                locale: s
            })
        });
        return l.ok ? await l.json() : await Promise.reject(new Error("no default links"))
    }
    var Ea = {
        isEnabledWhen() {
            return this.searchEnabled !== !1
        },
        created() {
            this.amlSearch = {},
            this.amlSearch.requestId = "",
            this.amlSearch.requestType = "";
            const {hasAbsoluteUrls: e, useRelativeSearchRequest: t, wwwDomain: s, searchSettings: n, locale: a} = this.options.amlSearch;
            this.amlSearch.apiRequestDomain = e && !t ? `https://${s}` : "",
            this.amlSearch.locale = n.searchFieldLocale || a,
            n.searchSuggestionsEnabled !== !1 ? this.search.templateFunction = this._createAMLSearchTemplate : this.search.templateFunction = this._createAMLSearchDisabledTemplate
        },
        beforeMount() {
            const e = this.options.amlSearch.searchSettings.analyticsAttributes.map(t=>t.name === "data-analytics-region" ? {
                name: "data-analytics-region",
                value: `global nav - ${t.value}`
            } : t);
            this.search.elements.el.setAttribute(this.dataAttributes.iconFlyoutEnabled, !0),
            me(this.search.elements.el, this.options.amlSearch.searchSettings.analyticsAttributes),
            me(this.search.elements.el, e),
            St(this.search.elements.el, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this.options.amlSearch.searchSettings.searchSuggestionsEnabled !== !1 ? ya({
                searchLocale: this.amlSearch.locale,
                apiRequestDomain: this.amlSearch.apiRequestDomain,
                apiRequestURL: this.options.amlSearch.searchSettings.defaultLinksApiUrl,
                searchSrc: this.options.amlSearch.searchSettings.searchFieldSrc
            }).then(t=>{
                const {id: s, results: n} = t;
                this.amlSearch.requestId = s;
                const a = this._transformData(n, {
                    quickLinks: this.options.amlSearch.searchSettings.defaultLinks
                });
                this.setInitialSearchResults(a),
                this._setPlaceHolderText(),
                me(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes)
            }
            ).catch(()=>{}
            ) : this.setInitialSearchResults()
        },
        onLayoutChange() {
            me(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this._setPlaceHolderText()
        },
        onFlyoutOpen(e) {
            e === this.search.elements.el && (St(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this._isBreakpointWithMenu() && this.menu.elements.menuButton.setAttribute("aria-label", this.options.amlSearch.searchSettings.close.ariaLabel))
        },
        onFlyoutClose(e) {
            e === this.search.elements.el && (me(this.search.elements.link, this.options.amlSearch.searchSettings.open.analyticsAttributes),
            this.search.elements.form.setAttribute("action", this.options.amlSearch.searchSettings.searchFieldAction))
        },
        onSearchUpdate(e) {
            if (!e && this.options.amlSearch.searchSettings.searchSuggestionsEnabled === !1)
                return;
            const {value: t} = this.search.elements.input;
            t.length >= 2 ? (this.amlSearch.requestType = "suggestions",
            Sa({
                query: t,
                id: this.amlSearch.requestId,
                searchLocale: this.amlSearch.locale,
                apiRequestDomain: this.amlSearch.apiRequestDomain,
                apiRequestURL: this.options.amlSearch.searchSettings.suggestionsApiUrl,
                searchSrc: this.options.amlSearch.searchSettings.searchFieldSrc
            }).then(s=>{
                const {results: n} = s
                  , a = this._transformData(n, {
                    quickLinks: this.options.amlSearch.searchSettings.suggestedLinks,
                    suggestions: this.options.amlSearch.searchSettings.suggestedSearches
                });
                this.setSearchResults(a)
            }
            ).catch(()=>{}
            )) : (this.amlSearch.requestType = "defaultlinks",
            this.setSearchResults(this.search.initialResults))
        },
        _setPlaceHolderText() {
            this._isBreakpointWithMenu() ? this.search.elements.input.setAttribute("placeholder", this.options.amlSearch.searchSettings.searchFieldPlaceholderCompact) : this.search.elements.input.setAttribute("placeholder", this.options.amlSearch.searchSettings.searchFieldPlaceholderRegular)
        },
        _transformData(e, t) {
            const s = [];
            for (const n of e) {
                if (!n.sectionResults.length)
                    continue;
                const a = t[n.sectionName]
                  , i = {
                    title: a.title,
                    icon: a.images,
                    sectionName: n.sectionName,
                    analyticsAttributes: a.analyticsAttributes,
                    results: n.sectionResults
                };
                n.sectionName === "quickLinks" ? s.unshift(i) : s.push(i)
            }
            return s
        },
        _createAMLSearchTemplate(e) {
            const t = {
                quickLinks: {
                    label: "defaultlinks",
                    event: 50
                },
                suggestedLinks: {
                    label: "quicklinks",
                    event: 38
                },
                suggestedSearches: {
                    label: "suggestions",
                    event: 39
                }
            };
            return `${e.map(s=>{
                const {title: n, icon: a, analyticsAttributes: i, results: l} = s
                  , h = this.amlSearch.requestType === "defaultlinks" ? "quickLinks" : s.sectionName === "quickLinks" ? "suggestedLinks" : "suggestedSearches"
                  , c = i.map(f=>f.name === "data-analytics-region" ? `${f.name}="global nav - ${f.value}"` : f).join("");
                return `<div
					class="${this.classNames.searchResultsContainer}"
					${c}
				>
					<h2 class="${this.classNames.searchResultsHeader}">${n}</h2>
					<ul class="${this.classNames.searchResultsList}" role="list">

						${l.map((f,r)=>{
                    const {url: v, highlight: b} = f
                      , o = b !== void 0 && Object.keys(b).length > 0;
                    let {label: g} = f;
                    if (o) {
                        const [y,w] = Object.entries(b)[0]
                          , L = Number(y) + Number(w)
                          , x = g.slice(0, y)
                          , D = g.slice(y, L)
                          , K = g.slice(L)
                          , {searchResultsTextHighlight: W} = this.classNames;
                        g = `${x}<span class="${W}">${D}</span>${K}`
                    }
                    const k = t[h].label;
                    function T(y) {
                        return y.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
                    }
                    const I = [{
                        name: "query",
                        value: this.search.elements.input.value || "no keyword"
                    }, {
                        name: "section",
                        value: k
                    }, {
                        name: "items",
                        value: l.length
                    }, {
                        name: "index",
                        value: r
                    }, {
                        name: "label",
                        value: f.label
                    }];
                    return `
								<li class="${this.classNames.searchResultsListItem}" role="listitem">
									<a
										class="${this.classNames.searchResultsListLink}"
										href="${v}"
										${I.map(({name: y, value: w})=>`data-${y}="${T(w)}"`).join(" ")}
										data-analytics-click="eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index},
											events:event ${t[h].event}"
									>
										<span class="${this.classNames.searchResultsListIcon}">

										${a.map(y=>{
                        const {name: w, assetInline: L} = y;
                        return `<span class="globalnav-image-${w} globalnav-link-image">${L}</span>`
                    }
                    ).join("")}


										</span>
										<span class="${this.classNames.searchResultsListText}">${g}</span>
									</a>
								</li>`
                }
                ).join("")}
					</ul>
				</div>`
            }
            ).join("")}`
        },
        _createAMLSearchDisabledTemplate() {
            return `<div class="${this.classNames.searchResultsContainer}"><div>`
        }
    }
      , Na = [Zs, {
        isEnabledWhen() {
            return this.bagEnabled !== !1
        },
        created() {
            this.bag = {},
            this.classNames.bag = "globalnav-bag",
            this.classNames.linkBag = "globalnav-link-bag",
            this.classNames.bagBadge = "globalnav-bag-badge"
        },
        beforeMount() {
            document.getElementById(this.classNames.bag).setAttribute(this.dataAttributes.iconFlyoutEnabled, !0)
        },
        mounted() {
            this._setupBagElements();
            const t = this.bag.link.getAttribute("href").replace(this.options.bagData.bagHref, this.options.bagData.data.open.url);
            this.bag.link.setAttribute("href", t)
        },
        onLayoutChange() {
            this._isBreakpointWithMenu() && St(this.menu.elements.menuButton, this.options.bagData.data.close.analyticsAttributes),
            this.bag.link.setAttribute("aria-label", this.options.bagData.data.open.ariaLabel),
            me(this.bag.link, this.options.bagData.data.open.analyticsAttributes),
            me(this.bag.bagBadge, this.options.bagData.data.open.analyticsAttributes)
        },
        onFlyoutWillOpen(e) {
            e === this.bag.el && window.acStore.isDisabled && this.unload()
        },
        onFlyoutOpen(e) {
            e === this.bag.el && (me(this.bag.link, this.options.bagData.data.close.analyticsAttributes),
            me(this.bag.bagBadge, this.options.bagData.data.close.analyticsAttributes),
            this._isBreakpointWithMenu() && (this.menu.elements.menuButton.setAttribute("aria-label", this.options.bagData.data.close.ariaLabel),
            me(this.menu.elements.menuButton, this.options.bagData.data.close.analyticsAttributes)))
        },
        onFlyoutClose(e) {
            e === this.bag.el && (this.bag.link.setAttribute("aria-label", this.options.bagData.data.open.ariaLabel),
            me(this.bag.link, this.options.bagData.data.open.analyticsAttributes),
            me(this.bag.bagBadge, this.options.bagData.data.open.analyticsAttributes),
            this._isBreakpointWithMenu() && St(this.menu.elements.menuButton, this.options.bagData.data.close.analyticsAttributes))
        },
        onIconFlyoutClick(e) {
            !this.bag.el.contains(e.target) || e.target.dispatchEvent(new window.CustomEvent("clickbag",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    originalTarget: e.target
                }
            }))
        },
        _setupBagElements() {
            this.bag.el = this.topNavList.querySelector(`.${this.classNames.bag}`),
            this.bag.link = this.bag.el.querySelector(`.${this.classNames.linkBag}`),
            this.bag.flyout = this.bag.el.querySelector(`.${this.classNames.subMenu}`),
            this.bag.bagBadge = this.bag.el.querySelector(`.${this.classNames.bagBadge}`)
        }
    }]
      , wa = {
        mounted() {
            window.dispatchEvent(new window.CustomEvent("globalnav:mounted",{
                detail: {
                    target: this.el
                }
            }))
        },
        onFlyoutWillOpen(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillOpen",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutOpen(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutOpen",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutWillClose(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutWillClose",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        },
        onFlyoutClose(e) {
            this.el.dispatchEvent(new window.CustomEvent("globalnav:onFlyoutClose",{
                detail: {
                    target: e,
                    layout: this._isBreakpointWithMenu() ? "compact" : "regular"
                }
            }))
        }
    }
      , Ca = [yt, {
        mounted() {
            this.menu.elements.menuButton.setAttribute("aria-label", this.options.menuData.data.open.ariaLabel)
        },
        onFlyoutOpen(e) {
            !this.menu.elements.menuFlyout.contains(e) || this._isBreakpointWithMenu() && this.menu.elements.menuButton.setAttribute("aria-label", this.options.menuData.data.close.ariaLabel)
        },
        onFlyoutClose(e) {
            !this.menu.elements.menuFlyout.contains(e) || !this._currentFlyout && this._isBreakpointWithMenu() && this.menu.elements.menuButton.setAttribute("aria-label", this.options.menuData.data.open.ariaLabel)
        }
    }];
    function $e(e, t) {
        return e.match(/^http[s]?/) != null ? e : t !== void 0 && e.startsWith("/") ? `https://${t}${e}` : e
    }
    const La = ["consumer"]
      , zt = (e,t,s)=>{
        e.segmentCode !== void 0 && !La.includes(e.segmentCode) && t(!1),
        e.segmentCode === void 0 && s !== !1 && t(!0)
    }
    ;
    function Xs(e, t) {
        for (var s in t)
            e[s] = t[s];
        return e
    }
    function en(e, t) {
        for (var s in e)
            if (s !== "__source" && !(s in t))
                return !0;
        for (var n in t)
            if (n !== "__source" && e[n] !== t[n])
                return !0;
        return !1
    }
    function tn(e) {
        this.props = e
    }
    (tn.prototype = new ye).isPureReactComponent = !0,
    tn.prototype.shouldComponentUpdate = function(e, t) {
        return en(this.props, e) || en(this.state, t)
    }
    ;
    var sn = M.__b;
    M.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
        e.ref = null),
        sn && sn(e)
    }
    ;
    var Aa = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    function nn(e) {
        function t(s) {
            var n = Xs({}, s);
            return delete n.ref,
            e(n, s.ref || null)
        }
        return t.$$typeof = Aa,
        t.render = t,
        t.prototype.isReactComponent = t.__f = !0,
        t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
        t
    }
    var Ma = M.__e;
    M.__e = function(e, t, s, n) {
        if (e.then) {
            for (var a, i = t; i = i.__; )
                if ((a = i.__c) && a.__c)
                    return t.__e == null && (t.__e = s.__e,
                    t.__k = s.__k),
                    a.__c(e, t)
        }
        Ma(e, t, s, n)
    }
    ;
    var an = M.unmount;
    function on(e, t, s) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
            typeof n.__c == "function" && n.__c()
        }),
        e.__c.__H = null),
        (e = Xs({}, e)).__c != null && (e.__c.__P === s && (e.__c.__P = t),
        e.__c = null),
        e.__k = e.__k && e.__k.map(function(n) {
            return on(n, t, s)
        })),
        e
    }
    function rn(e, t, s) {
        return e && (e.__v = null,
        e.__k = e.__k && e.__k.map(function(n) {
            return rn(n, t, s)
        }),
        e.__c && e.__c.__P === t && (e.__e && s.insertBefore(e.__e, e.__d),
        e.__c.__e = !0,
        e.__c.__P = s)),
        e
    }
    function Kt() {
        this.__u = 0,
        this.t = null,
        this.__b = null
    }
    function ln(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }
    function Et() {
        this.u = null,
        this.o = null
    }
    M.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(),
        t && e.__h === !0 && (e.type = null),
        an && an(e)
    }
    ,
    (Kt.prototype = new ye).__c = function(e, t) {
        var s = t.__c
          , n = this;
        n.t == null && (n.t = []),
        n.t.push(s);
        var a = ln(n.__v)
          , i = !1
          , l = function() {
            i || (i = !0,
            s.__R = null,
            a ? a(h) : h())
        };
        s.__R = l;
        var h = function() {
            if (!--n.__u) {
                if (n.state.__a) {
                    var f = n.state.__a;
                    n.__v.__k[0] = rn(f, f.__c.__P, f.__c.__O)
                }
                var r;
                for (n.setState({
                    __a: n.__b = null
                }); r = n.t.pop(); )
                    r.forceUpdate()
            }
        }
          , c = t.__h === !0;
        n.__u++ || c || n.setState({
            __a: n.__b = n.__v.__k[0]
        }),
        e.then(l, l)
    }
    ,
    Kt.prototype.componentWillUnmount = function() {
        this.t = []
    }
    ,
    Kt.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var s = document.createElement("div")
                  , n = this.__v.__k[0].__c;
                this.__v.__k[0] = on(this.__b, s, n.__O = n.__P)
            }
            this.__b = null
        }
        var a = t.__a && Xe(X, null, e.fallback);
        return a && (a.__h = null),
        [Xe(X, null, t.__a ? null : e.children), a]
    }
    ;
    var cn = function(e, t, s) {
        if (++s[1] === s[0] && e.o.delete(t),
        e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
            for (s = e.u; s; ) {
                for (; s.length > 3; )
                    s.pop()();
                if (s[1] < s[0])
                    break;
                e.u = s = s[2]
            }
    };
    (Et.prototype = new ye).__a = function(e) {
        var t = this
          , s = ln(t.__v)
          , n = t.o.get(e);
        return n[0]++,
        function(a) {
            var i = function() {
                t.props.revealOrder ? (n.push(a),
                cn(t, e, n)) : a()
            };
            s ? s(i) : i()
        }
    }
    ,
    Et.prototype.render = function(e) {
        this.u = null,
        this.o = new Map;
        var t = st(e.children);
        e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
        for (var s = t.length; s--; )
            this.o.set(t[s], this.u = [1, 0, this.u]);
        return e.children
    }
    ,
    Et.prototype.componentDidUpdate = Et.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach(function(t, s) {
            cn(e, s, t)
        })
    }
    ;
    var ka = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103
      , Fa = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
      , $a = typeof document != "undefined"
      , Ta = function(e) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
    ye.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
        Object.defineProperty(ye.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    });
    var un = M.event;
    function Oa() {}
    function Ia() {
        return this.cancelBubble
    }
    function xa() {
        return this.defaultPrevented
    }
    M.event = function(e) {
        return un && (e = un(e)),
        e.persist = Oa,
        e.isPropagationStopped = Ia,
        e.isDefaultPrevented = xa,
        e.nativeEvent = e
    }
    ;
    var hn = {
        configurable: !0,
        get: function() {
            return this.class
        }
    }
      , mn = M.vnode;
    M.vnode = function(e) {
        var t = e.type
          , s = e.props
          , n = s;
        if (typeof t == "string") {
            var a = t.indexOf("-") === -1;
            for (var i in n = {},
            s) {
                var l = s[i];
                $a && i === "children" && t === "noscript" || i === "value" && "defaultValue"in s && l == null || (i === "defaultValue" && "value"in s && s.value == null ? i = "value" : i === "download" && l === !0 ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Ta(s.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : a && Fa.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : l === null && (l = void 0),
                /^oninput$/i.test(i) && (i = i.toLowerCase(),
                n[i] && (i = "oninputCapture")),
                n[i] = l)
            }
            t == "select" && n.multiple && Array.isArray(n.value) && (n.value = st(s.children).forEach(function(h) {
                h.props.selected = n.value.indexOf(h.props.value) != -1
            })),
            t == "select" && n.defaultValue != null && (n.value = st(s.children).forEach(function(h) {
                h.props.selected = n.multiple ? n.defaultValue.indexOf(h.props.value) != -1 : n.defaultValue == h.props.value
            })),
            e.props = n,
            s.class != s.className && (hn.enumerable = "className"in s,
            s.className != null && (n.class = s.className),
            Object.defineProperty(n, "className", hn))
        }
        e.$$typeof = ka,
        mn && mn(e)
    }
    ;
    var dn = M.__r;
    M.__r = function(e) {
        dn && dn(e),
        e.__c
    }
    ;
    const Qt = ({children: e})=>m("div", {
        className: "globalnav-flyout-content globalnav-submenu-content",
        children: e
    })
      , pn = ({children: e})=>m(X, {
        children: m("div", {
            class: "globalnav-flyout-scroll-container",
            children: e
        })
    });
    function Ra({analyticsAttributes: e, count: t, unit: s}) {
        const n = Ce(e);
        return m("span", {
            class: "globalnav-bag-badge",
            "aria-hidden": "true",
            ...n,
            children: [m("span", {
                class: "globalnav-bag-badge-separator"
            }), m("span", {
                class: "globalnav-bag-badge-number",
                children: t
            }), m("span", {
                class: "globalnav-bag-badge-unit",
                children: s
            })]
        })
    }
    const Ba = ({children: e})=>m("div", {
        id: "globalnav-submenu-bag",
        class: "globalnav-flyout globalnav-submenu",
        "aria-labelledby": "globalnav-menubutton-link-bag",
        children: e
    });
    var Pa = nn(({children: e, count: t, analyticsAttributes: s},n)=>m("li", {
        class: t > 0 ? "globalnav-item globalnav-bag with-badge" : "globalnav-item globalnav-bag",
        id: "globalnav-bag",
        ref: n,
        ...Ce(s),
        children: e
    }));
    const fn = ({images: e})=>m(X, {
        children: e == null ? void 0 : e.map(t=>{
            const {name: s, assetInline: n} = t;
            return m("span", {
                className: `globalnav-image-${s}`,
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })
        }
        )
    })
      , Da = ({href: e, ariaLabel: t, images: s, analyticsAttributes: n})=>{
        const a = Ce(n);
        return m("a", {
            role: "button",
            id: "globalnav-menubutton-link-bag",
            className: "globalnav-link globalnav-link-bag",
            href: e,
            "aria-label": t,
            "data-globalnav-item-name": "bag",
            "data-topnav-flyout-trigger-regular": !0,
            "data-topnav-flyout-trigger-compact": !0,
            ...a,
            children: m(fn, {
                images: s
            })
        })
    }
      , Ha = ({children: e})=>m("div", {
        className: "globalnav-bag-wrapper",
        children: e
    });
    var Wa = nn(({href: e, bag: t, bagFlyout: s, badgeCount: n},a)=>{
        const [i,l] = se("")
          , h = "{%BAGITEMCOUNT%}"
          , c = 99
          , f = "+";
        function r(b) {
            return b > c ? c : b
        }
        function v(b) {
            return (b > c ? `${c}${f}` : b).toString()
        }
        return l(r(n) !== 0 ? `${t.badge.ariaLabel.replace(h, v(n))}` : `${t.open.ariaLabel}`),
        m(X, {
            children: m(Pa, {
                ref: a,
                count: n,
                analyticsAttributes: t.analyticsAttributes,
                children: [m(Ha, {
                    children: [m(Da, {
                        href: e,
                        ariaLabel: i,
                        images: t.open.images,
                        analyticsAttributes: t.open.analyticsAttributes
                    }), m(Ra, {
                        count: r(n),
                        unit: f,
                        analyticsAttributes: t.open.analyticsAttributes
                    })]
                }), m(Ba, {
                    children: m(pn, {
                        children: m(Qt, {
                            children: s
                        })
                    })
                })]
            })
        })
    }
    );
    const Ua = ({id: e, title: t})=>m("h2", {
        class: "globalnav-submenu-header",
        id: e,
        children: t
    })
      , Va = ({text: e, url: t, analyticsAttributes: s, ariaLabel: n})=>{
        const a = nt(Gt)
          , i = Ce(s)
          , l = n !== "" ? n : null;
        return m("a", {
            href: $e(t, (a == null ? void 0 : a.hasAbsoluteUrls) === !0 ? a.wwwDomain : void 0),
            className: "globalnav-submenu-link",
            ...i,
            "aria-label": l,
            children: e
        })
    }
      , gn = ({type: e, text: t, url: s, ariaLabel: n, analyticsAttributes: a})=>m("li", {
        className: `globalnav-submenu-list-item ${e !== void 0 ? "-" + e : ""}`,
        children: m(Va, {
            text: t,
            url: s,
            ariaLabel: n,
            analyticsAttributes: a
        })
    })
      , qa = ({data: e})=>{
        var t, s;
        return m("ul", {
            class: "globalnav-submenu-list",
            "aria-labelledby": e.id,
            children: [(t = e.elevatedLinks) == null ? void 0 : t.map(({id: n, text: a, url: i, ariaLabel: l, analyticsAttributes: h})=>m(gn, {
                type: "elevated",
                text: a,
                url: i,
                ariaLabel: l,
                analyticsAttributes: h
            }, n)), (s = e.baseLinks) == null ? void 0 : s.map(({id: n, text: a, url: i, ariaLabel: l, analyticsAttributes: h})=>m(gn, {
                text: a,
                url: i,
                ariaLabel: l,
                analyticsAttributes: h
            }, n))]
        })
    }
      , _n = ({data: e})=>{
        const [t,s] = se([]);
        fe(()=>{
            const i = e.analyticsAttributes.map(l=>l.name === "data-analytics-region" ? {
                name: "data-analytics-region",
                value: `global nav - ${l.value}`
            } : l);
            s(i)
        }
        , [e.analyticsAttributes]);
        const n = e.elevatedLinks != null && e.elevatedLinks.length > 0
          , a = Ce(t);
        return m("div", {
            className: `globalnav-submenu-group ${n ? "globalnav-submenu-group-elevated" : ""}`,
            ...a,
            children: [m(Ua, {
                id: e.id,
                title: e.title
            }), m(qa, {
                data: e
            })]
        })
    }
      , ja = ({name: e, elevatedGroups: t, baseGroups: s})=>m("div", {
        id: `globalnav-submenu-link-${e}`,
        className: "globalnav-flyout globalnav-submenu",
        "aria-labelledby": `globalnav-menubutton-link-${e}`,
        children: m("div", {
            class: "globalnav-flyout-scroll-container",
            children: m(Qt, {
                children: [t == null ? void 0 : t.map(n=>{
                    const {id: a} = n;
                    return m(_n, {
                        data: n
                    }, a)
                }
                ), s == null ? void 0 : s.map(n=>{
                    const {id: a} = n;
                    return m(_n, {
                        data: n
                    }, a)
                }
                )]
            })
        })
    })
      , Za = ({name: e, text: t, url: s, submenuChevron: n, isMenuItem: a, hasSubMenu: i=!1, analyticsAttributes: l, ariaLabel: h, submenuAriaLabel: c, images: f})=>{
        const r = nt(Gt)
          , v = f.filter(o=>a ? o.name === "regular" : o)
          , b = Ce(l);
        return a ? m("ul", {
            class: "globalnav-submenu-trigger-group",
            role: "none",
            children: [m("li", {
                class: "globalnav-submenu-trigger-item",
                children: m("a", {
                    className: `globalnav-link globalnav-submenu-trigger-link globalnav-link-${e}`,
                    href: $e(s, (r == null ? void 0 : r.hasAbsoluteUrls) === !0 ? r.wwwDomain : void 0),
                    "data-globalnav-item-name": e,
                    "data-topnav-flyout-trigger-compact": !0,
                    ...b,
                    "aria-label": h,
                    children: [m("span", {
                        class: "globalnav-link-text-container",
                        children: [v.map(o=>m("span", {
                            className: `globalnav-image-${o.name} globalnav-link-image`,
                            dangerouslySetInnerHTML: {
                                __html: o.assetInline
                            }
                        })), m("span", {
                            className: "globalnav-link-text",
                            children: t
                        })]
                    }), i && m("span", {
                        class: "globalnav-link-chevron",
                        children: m("svg", {
                            height: "48",
                            viewBox: "0 0 9 48",
                            width: "9",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: m("path", {
                                d: "m8.1155 30.358a.6.6 0 1 1 -.831.8653l-7-6.7242a.6.6 0 0 1 -.0045-.8613l7-6.8569a.6.6 0 1 1 .84.8574l-6.5582 6.4238z"
                            })
                        })
                    })]
                })
            }), i && m("li", {
                class: "globalnav-submenu-trigger-item",
                children: m("button", {
                    id: `globalnav-menubutton-link-${e}`,
                    class: "globalnav-submenu-trigger-button",
                    "aria-expanded": "false",
                    "aria-controls": `globalnav-submenu-link-${e}`,
                    "aria-label": c,
                    "data-topnav-flyout-trigger-regular": !0,
                    children: n == null ? void 0 : n.open.images.map(o=>m("span", {
                        className: `globalnav-image-${o.name} globalnav-submenu-button-icon`,
                        dangerouslySetInnerHTML: {
                            __html: o.assetInline
                        }
                    }))
                })
            })]
        }) : m("a", {
            className: `globalnav-link globalnav-link-${e}`,
            href: $e(s, (r == null ? void 0 : r.hasAbsoluteUrls) === !0 ? r.wwwDomain : void 0),
            "data-globalnav-item-name": e,
            ...b,
            "aria-label": t,
            children: [v.map(o=>m("span", {
                className: `globalnav-image-${o.name} globalnav-link-image`,
                dangerouslySetInnerHTML: {
                    __html: o.assetInline
                }
            })), m("span", {
                className: "globalnav-link-text",
                children: t
            })]
        })
    }
      , vn = ({id: e, isMenuItem: t, name: s, text: n, url: a, images: i, submenuChevron: l, ariaLabel: h, submenuAriaLabel: c, analyticsAttributes: f, linksData: r})=>{
        var o, g;
        const v = ((o = r == null ? void 0 : r.baseGroups) == null ? void 0 : o.length) != null || ((g = r == null ? void 0 : r.elevatedGroups) == null ? void 0 : g.length) != null;
        return m(t ? "div" : "li", {
            className: `
				globalnav-item
				globalnav-item-${s}
				${t ? "globalnav-item-menu" : ""}
				${v ? "globalnav-item-submenu" : ""}
			`,
            "data-analytics-element-engagement": `globalnav hover - ${s}`,
            children: [m(Za, {
                name: s,
                isMenuItem: t,
                text: n,
                url: a,
                submenuChevron: l,
                hasSubMenu: v,
                ariaLabel: h,
                submenuAriaLabel: c,
                analyticsAttributes: f,
                images: i
            }), v && m(ja, {
                name: r.name,
                elevatedGroups: r.elevatedGroups,
                baseGroups: r.baseGroups
            }, e)]
        })
    }
      , Ga = ["apple", "search", "bag"];
    async function za(e, t) {
        return await (await fetch(`${t}?locale=${e}`)).json()
    }
    const bn = (e,t)=>{
        let s;
        return Array.isArray(t) && (s = t.find(n=>n.name === e ? n : !1)),
        s
    }
    ;
    async function Ka(e) {
        let t = e;
        try {
            let {AosLinkReplacer: s} = await Promise.resolve().then(function() {
                return wn
            });
            s.shouldReplaceSubMenuLinks() && (t = await s.replaceSubMenuLinks(e))
        } catch {
            t = e
        }
        return t
    }
    const Qa = ({links: e, submenuChevron: t, locale: s, submenuApiUrl: n, subMenuData: a=[], submenusEnabled: i=!0})=>{
        var r, v;
        const [l,h] = se([])
          , c = nt(Ys)
          , f = e == null ? void 0 : e.reduce((b,o)=>(Ga.includes(o.name) ? b.nonMenuItems.push(o) : b.menuItems.push(o),
        b), {
            nonMenuItems: [],
            menuItems: []
        });
        return fe(()=>{
            let b = !1;
            return za(s, n).then(Ka).then(o=>{
                b || h(o)
            }
            ).catch(()=>{}
            ),
            ()=>{
                b = !0
            }
        }
        , []),
        fe(()=>{
            Object.keys(l).length > 0 && (c == null || c.initiateFlyouts(),
            c == null || c.initiateSubMenus()),
            c !== null && (c.submenuEnabled = i)
        }
        , [c, l, i]),
        m(X, {
            children: [(r = f == null ? void 0 : f.nonMenuItems) == null ? void 0 : r.map(b=>{
                const {id: o, name: g, text: k, url: T, images: I, analyticsAttributes: y} = b
                  , w = bn(g, l);
                return m(vn, {
                    id: o,
                    isMenuItem: !1,
                    name: g,
                    linksData: w,
                    text: k,
                    url: T,
                    images: I,
                    analyticsAttributes: y
                })
            }
            ), m("li", {
                class: "globalnav-item globalnav-menu",
                "data-topnav-flyout-item": "menu",
                "data-topnav-flyout-label": "Menu",
                role: "none",
                children: m("div", {
                    class: "globalnav-flyout",
                    "data-topnav-flyout": "menu",
                    children: m("div", {
                        class: "globalnav-menu-list",
                        children: (v = f == null ? void 0 : f.menuItems) == null ? void 0 : v.map(b=>{
                            const {id: o, name: g, text: k, url: T, ariaLabel: I, submenuAriaLabel: y, images: w, analyticsAttributes: L} = b
                              , x = bn(g, l);
                            return m(vn, {
                                id: o,
                                isMenuItem: !0,
                                name: g,
                                linksData: x,
                                submenuChevron: t,
                                text: k,
                                url: T,
                                ariaLabel: I,
                                submenuAriaLabel: y,
                                images: w,
                                analyticsAttributes: L
                            })
                        }
                        )
                    })
                })
            })]
        })
    }
    ;
    function Ya({openLabel: e="Menu", closeLabel: t="Close"}) {
        return m("div", {
            class: "globalnav-menutrigger",
            children: m("button", {
                id: "globalnav-menutrigger-button",
                class: "globalnav-menutrigger-button",
                "aria-controls": "globalnav-list",
                "aria-label": e,
                "data-topnav-menu-label-open": e,
                "data-topnav-menu-label-close": t,
                "data-topnav-flyout-trigger-compact": "menu",
                children: m("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    children: [m("polyline", {
                        id: "globalnav-menutrigger-bread-bottom",
                        class: "globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        points: "2 12, 16 12",
                        children: [m("animate", {
                            id: "globalnav-anim-menutrigger-bread-bottom-open",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                        }), m("animate", {
                            id: "globalnav-anim-menutrigger-bread-bottom-close",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                        })]
                    }), m("polyline", {
                        id: "globalnav-menutrigger-bread-top",
                        class: "globalnav-menutrigger-bread globalnav-menutrigger-bread-top",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        points: "2 5, 16 5",
                        children: [m("animate", {
                            id: "globalnav-anim-menutrigger-bread-top-open",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                        }), m("animate", {
                            id: "globalnav-anim-menutrigger-bread-top-close",
                            attributeName: "points",
                            keyTimes: "0;0.5;1",
                            dur: "0.24s",
                            begin: "indefinite",
                            fill: "freeze",
                            calcMode: "spline",
                            keySplines: "0.42, 0, 1, 1;0, 0, 0.58, 1",
                            values: " 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                        })]
                    })]
                })
            })
        })
    }
    function Ja({placeholder: e, name: t, ariaLabel: s, onInput: n=l=>{}
    , onBlur: a=l=>{}
    , onFocus: i=l=>{}
    }) {
        return m("input", {
            class: "globalnav-searchfield-input",
            placeholder: e,
            name: t,
            "aria-label": s,
            autoCorrect: "off",
            autoCapitalize: "off",
            autoComplete: "off",
            spellCheck: !1,
            onInput: l=>n(l),
            onBlur: l=>a(l),
            onFocus: l=>i(l)
        })
    }
    function Xa(e, t, s) {
        const n = e.target
          , {value: a} = n;
        let i = encodeURIComponent(a.replace(/\s+/g, "-"));
        i.startsWith(" ") && i.trim(),
        i.startsWith("-") && (i = i.replace("-", ""));
        const h = `${t}${i !== "" ? "/" : ""}${i}`;
        s(h)
    }
    function eo({ariaLabel: e, resultsAriaLabel: t, action: s, input: n, placeholder: a, submit: i, reset: l, src: h, name: c, type: f, page: r, locale: v, onInput: b=k=>{}
    , onBlur: o=k=>{}
    , onFocus: g=k=>{}
    }) {
        var w, L;
        const k = z(null)
          , [T,I] = se(s)
          , y = x=>{
            x.preventDefault(),
            I(s)
        }
        ;
        return fe(()=>{
            I(s)
        }
        , [s]),
        m("form", {
            class: "globalnav-searchfield",
            action: T,
            ref: k,
            method: "get",
            children: [m("div", {
                class: "globalnav-searchfield-wrapper",
                children: [m(Ja, {
                    placeholder: a,
                    ariaLabel: e,
                    name: c,
                    onInput: x=>{
                        c === void 0 && (Xa(x, s, I),
                        b(x))
                    }
                    ,
                    onBlur: x=>o(x),
                    onFocus: x=>g(x),
                    autocapitalize: "off",
                    autocomplete: "off",
                    autocorrect: "off",
                    spellcheck: "false",
                    "aria-label": n.ariaLabel
                }), m("input", {
                    id: "globalnav-searchfield-src",
                    type: "hidden",
                    name: "src",
                    value: h
                }), f !== void 0 && m("input", {
                    type: "hidden",
                    name: "type",
                    value: f
                }), r !== void 0 && m("input", {
                    type: "hidden",
                    name: "page",
                    value: r
                }), v !== void 0 && m("input", {
                    type: "hidden",
                    name: "locale",
                    value: v
                }), m("button", {
                    class: "globalnav-searchfield-reset",
                    "aria-label": l.ariaLabel,
                    tabIndex: -1,
                    type: "button",
                    onClick: y,
                    children: (w = l.images) == null ? void 0 : w.map(x=>{
                        const {name: D, assetInline: K} = x;
                        return m("span", {
                            className: `globalnav-image-${D}`,
                            dangerouslySetInnerHTML: {
                                __html: K
                            }
                        })
                    }
                    )
                }), m("button", {
                    class: "globalnav-searchfield-submit",
                    "aria-label": i.ariaLabel,
                    tabIndex: -1,
                    "aria-hidden": "true",
                    type: "submit",
                    children: (L = i.images) == null ? void 0 : L.map(x=>{
                        const {name: D, assetInline: K} = x;
                        return m("span", {
                            className: `globalnav-image-${D}`,
                            dangerouslySetInnerHTML: {
                                __html: K
                            }
                        })
                    }
                    )
                })]
            }), m("div", {
                class: "globalnav-searchresults-count",
                role: "status",
                "aria-live": "polite",
                "data-topnav-searchresults-label": t
            })]
        })
    }
    const to = ({ariaLabel: e, href: t, analyticsAttributes: s, images: n})=>m(X, {
        children: m("a", {
            role: "button",
            id: "globalnav-menubutton-link-search",
            class: "globalnav-link globalnav-link-search",
            href: t,
            "data-topnav-flyout-trigger-regular": !0,
            "data-topnav-flyout-trigger-compact": !0,
            "aria-label": e,
            ...Ce(s),
            children: m(fn, {
                images: n
            })
        })
    })
      , so = ()=>m("div", {
        class: "globalnav-searchresults"
    })
      , no = ({children: e})=>m(X, {
        children: m("div", {
            id: "globalnav-submenu-search",
            class: "globalnav-flyout globalnav-submenu",
            "aria-labelledby": "globalnav-menubutton-link-search",
            children: e
        })
    })
      , io = ({ariaLabel: e, analyticsAttributes: t, children: s})=>m(X, {
        children: m("li", {
            class: "globalnav-item globalnav-search",
            "data-topnav-flyout-label": e,
            ...Ce(t),
            children: s
        })
    });
    function ao({ariaLabel: e, resultsAriaLabel: t, analyticsAttributes: s, href: n, images: a, suggestionsApiUrl: i, defaultLinksApiUrl: l, input: h, placeholder: c, submit: f, reset: r, action: v, src: b, name: o, type: g, page: k, locale: T}) {
        return m(X, {
            children: m(io, {
                ariaLabel: e,
                analyticsAttributes: s,
                children: [m(to, {
                    ariaLabel: e,
                    href: n,
                    analyticsAttributes: s,
                    images: a
                }), m(no, {
                    children: m(pn, {
                        children: m(Qt, {
                            children: [m(eo, {
                                ariaLabel: e,
                                resultsAriaLabel: t,
                                suggestionsApiUrl: i,
                                defaultLinksApiUrl: l,
                                input: h,
                                placeholder: c,
                                submit: f,
                                reset: r,
                                action: v,
                                src: b,
                                name: o,
                                type: g,
                                page: k,
                                locale: T
                            }), m(so, {})]
                        })
                    })
                })]
            })
        })
    }
    const oo = "bagitem-adding"
      , ro = "bagitem-removing"
      , ot = "with-bag-count"
      , lo = "with-bag-count-onload"
      , co = `${ot}-double`
      , uo = `${ot}-triple`;
    function ho({locale: e="en_US", textDirection: t="ltr", ariaLabel: s, bag: n, menu: a, links: i, submenu: l, submenuApiUrl: h, search: c, storeUrlPath: f, analyticsAttributes: r, analyticsType: v, wwwDomain: b="www.apple.com", hasAbsoluteUrls: o=!1, useRelativeSearchRequest: g=!1, hasShopRedirectUrls: k=!0, subMenuData: T, setAcStoreInstance: I}) {
        var ut;
        typeof o == "string" && (o = Bt(o)),
        typeof g == "string" && (g = Bt(g));
        const y = z(null)
          , w = z(null)
          , L = z(void 0)
          , x = z(void 0)
          , D = z(void 0)
          , K = z("")
          , W = z(void 0)
          , te = z("")
          , ie = z("")
          , ee = z("")
          , B = z("")
          , ge = z("")
          , Le = z(void 0)
          , Te = z(void 0)
          , _e = z(void 0)
          , [ae,Ae] = se(null)
          , [Ue,Oe] = se()
          , [Ve,de] = se(!0)
          , [ve,Me] = se(0)
          , [rt,Se] = se("")
          , [ke,qe] = se("")
          , [lt,Ie] = se("")
          , [ct,xe] = se(!1)
          , Re = Ls(()=>{
            ae !== null && (ae.setFlyoutItems(),
            ae._setFlyoutHeight(ae.bag.el),
            ae._checkFlyoutHeight(ae.bag.el))
        }
        , [ae])
          , wt = e.replace("_", "-");
        let pe = f == null ? void 0 : f.replace("/", "");
        e === "zh_CN" && (pe = "cn");
        const De = ((ut = c == null ? void 0 : c.open) == null ? void 0 : ut.url) != null && (c == null ? void 0 : c.suggestionsApiUrl) != null && (c == null ? void 0 : c.defaultLinksApiUrl) != null
          , Be = n !== void 0 && f !== void 0;
        ba(y),
        fe(()=>{
            var Ee, Z, Ge, S, re, Fe, j, ce, Q, He, Ct, Lt, At;
            const oe = document.querySelectorAll('meta[name^="globalnav-"]')
              , le = Array.from(oe)
              , U = ks(le, "globalnav-");
            D.current = (Ee = U.searchField) == null ? void 0 : Ee.action,
            K.current = ((Z = U.searchField) == null ? void 0 : Z.src) !== void 0 ? U.searchField.src : "globalnav",
            B.current = ((Ge = U.searchField) == null ? void 0 : Ge.placeholderRegular) !== void 0 ? (S = U.searchField) == null ? void 0 : S.placeholderRegular : ((re = U.searchField) == null ? void 0 : re.placeholder) !== void 0 ? (Fe = U.searchField) == null ? void 0 : Fe.placeholder : "",
            ge.current = ((j = U.searchField) == null ? void 0 : j.placeholderCompact) !== void 0 ? (ce = U.searchField) == null ? void 0 : ce.placeholderCompact : "",
            W.current = (Q = U.searchField) == null ? void 0 : Q.name,
            te.current = (He = U.searchField) == null ? void 0 : He.type,
            ie.current = (Ct = U.searchField) == null ? void 0 : Ct.page,
            ee.current = (Lt = U.searchField) == null ? void 0 : Lt.locale,
            Le.current = (At = U.searchField) == null ? void 0 : At.href,
            x.current = U.storeKey,
            L.current = U.bagFlyoutEnabled;
            const Ze = U.submenusEnabled;
            Te.current = U.submenusEnabled,
            _e.current = U.searchSuggestionsEnabled,
            de(Ze)
        }
        , []),
        fe(()=>{
            const oe = y == null ? void 0 : y.current
              , le = {
                className: "globalnav",
                mixins: [Wi, Ui, Ji, Xi, wa, Ca],
                amlSearch: {},
                bagData: {},
                menuData: {
                    data: a
                }
            };
            De && (le.mixins.push(aa, Ea),
            c.searchFieldSrc = K.current,
            c.searchFieldAction = D.current !== void 0 ? D.current : $e(c.open.url, o === !0 ? b : void 0),
            c.searchFieldLocale = ee.current,
            c.searchFieldPlaceholderRegular = B.current !== "" ? B.current : c.input.placeholderTextRegular,
            c.searchFieldPlaceholderCompact = ge.current !== "" ? ge.current : c.input.placeholderTextCompact,
            c.searchAriaLabel = B.current !== "" ? B.current : c.open.ariaLabel,
            c.searchSuggestionsEnabled = _e.current !== void 0 ? _e.current : void 0,
            le.amlSearch = {
                searchSettings: c,
                locale: e,
                wwwDomain: b,
                hasAbsoluteUrls: o,
                useRelativeSearchRequest: g
            }),
            Be && x.current !== void 0 && L.current !== !1 && (le.mixins.push(Na),
            le.bagData = {
                data: n,
                bagHref: `${f}/shop/goto ${n.open.url}`
            });
            const U = new ra(oe,le);
            return Ae(U),
            oe !== null && xe(!0),
            ()=>{
                oe !== null && (xe(!1),
                U.destroy(),
                Ae(null))
            }
        }
        , [n, o, g, Be, De, e, a, c, f, b]),
        fe(()=>{
            const oe = y == null ? void 0 : y.current
              , le = w == null ? void 0 : w.current
              , U = Z=>{
                ve === 0 && Z !== 0 && qe(lo)
            }
              , Ze = Z=>{
                Z === 0 ? Se("") : Z > 0 && Z < 10 ? Se(ot) : Z >= 10 && Z < 100 ? Se(`${ot} ${co}`) : Z >= 100 && Se(`${ot} ${uo}`)
            }
              , Ee = Z=>{
                qe(""),
                Z > 0 && ve === 0 ? Ie(oo) : ve > 0 && Z === 0 ? Ie(ro) : Ie("")
            }
            ;
            return le !== null && x.current !== void 0 && L.current !== !1 && Promise.all([Promise.resolve().then(function() {
                return wn
            })]).then(Z=>{
                let[{AcStore: Ge, AcBagFlyout: S}] = Z;
                const re = oe == null ? void 0 : oe.dataset.storeApi
                  , Fe = re == null ? void 0 : re.replace("[storefront]", String(pe));
                let j = window.acStore;
                j === void 0 && (j = new Ge(le,pe,x.current,Fe),
                j !== void 0 && (j.getStoreState().then(ce=>{
                    j == null || j.getItemCount().then(Q=>{
                        U(Q),
                        Ze(Q),
                        Me(Q)
                    }
                    ),
                    j == null || j.on("itemCountChange", Q=>{
                        Ze(Q),
                        Ee(Q),
                        Me(Q)
                    }
                    )
                }
                , ce=>{
                    window.acStore.isDisabled = !0,
                    y.current !== null && (y == null || y.current.addEventListener("clickbag", Q=>{
                        const He = Q.detail.originalTarget.href;
                        He !== "" && (window.location.href = He)
                    }
                    ))
                }
                ),
                j == null || j.getStorefront().then(ce=>{
                    zt(ce, de, Te.current)
                }
                , ()=>{}
                ),
                j.on("storefrontChange", ce=>{
                    zt(ce, de, Te.current)
                }
                ))),
                window.acStore = j,
                I(j),
                Oe(m(ti, {
                    children: ce=>m(S, {
                        acStoreInstance: ce,
                        globalNavEl: oe,
                        onFlyoutContentUpdate: Re
                    })
                })),
                y.current !== null && window.addEventListener("segmentExit", ce=>{
                    j == null || j.getStorefront().then(Q=>{
                        zt(Q, de, Te.current)
                    }
                    , ()=>{}
                    )
                }
                )
            }
            ).catch(Z=>{}
            ),
            ()=>{
                oe !== null && window.removeEventListener("segmentExit", Z=>{}
                )
            }
        }
        , [ve, x, f, pe, Re, I]);
        const je = ()=>ct ? "js" : "no-js"
          , q = Ce(r);
        return m(la, {
            value: ae,
            children: [m("nav", {
                id: "globalnav",
                className: `globalnav ${je()} ${ke} ${rt} ${lt}`,
                lang: wt,
                dir: t,
                ref: y,
                "aria-label": s,
                "data-analytics-element-engagement-start": "globalnav:onFlyoutOpen",
                "data-analytics-element-engagement-end": "globalnav:onFlyoutClose",
                "data-store-api": n !== void 0 ? $e(n.storeApiUrl, o ? b : void 0) : null,
                ...q,
                children: m("div", {
                    className: "globalnav-content",
                    children: [m("div", {
                        class: "globalnav-item globalnav-menuback",
                        children: m("button", {
                            class: "globalnav-menuback-button",
                            "aria-label": a.back.ariaLabel,
                            children: a.back.images.map(({name: oe, assetInline: le})=>oe === "compact" ? m("span", {
                                class: "globalnav-chevron-icon",
                                dangerouslySetInnerHTML: {
                                    __html: le
                                }
                            }) : null)
                        })
                    }), m("ul", {
                        id: "globalnav-list",
                        class: "globalnav-list",
                        children: [m(ca, {
                            value: {
                                hasAbsoluteUrls: o,
                                wwwDomain: b
                            },
                            children: m(Qa, {
                                links: i,
                                locale: e,
                                submenuChevron: l,
                                submenuApiUrl: h,
                                subMenuData: T,
                                submenusEnabled: Ve
                            })
                        }), De && m(ao, {
                            href: Le.current !== void 0 ? Le.current : $e(c.open.url, o ? b : void 0),
                            ariaLabel: c.searchAriaLabel !== void 0 ? c.searchAriaLabel : c.open.ariaLabel,
                            analyticsAttributes: c.open.analyticsAttributes,
                            resultsAriaLabel: c.results.ariaLabel,
                            images: c.open.images,
                            action: D.current !== void 0 ? D.current : $e(c.open.url, o ? b : void 0),
                            input: c.input,
                            placeholder: c.searchFieldPlaceholderRegular !== void 0 ? c.searchFieldPlaceholderRegular : c.input.placeholderTextRegular,
                            submit: c.submit,
                            reset: c.reset,
                            src: K.current,
                            name: W.current,
                            type: te.current,
                            page: ie.current,
                            locale: ee.current,
                            suggestionsApiUrl: c.suggestionsApiUrl,
                            defaultLinksApiUrl: c.defaultLinksApiUrl
                        }), Be && m(Wa, {
                            ref: w,
                            bag: n,
                            bagFlyout: Ue,
                            badgeCount: ve,
                            href: $e(n.open.url, o ? b : void 0)
                        })]
                    }), m(Ya, {})]
                })
            }), m("div", {
                id: "globalnav-curtain",
                class: "globalnav-curtain"
            }), m("div", {
                id: "globalnav-placeholder",
                class: "globalnav-placeholder"
            })]
        })
    }
    function mo({globalNavData: e, subMenuData: t}) {
        const [s,n] = se(void 0)
          , a = e.locale !== void 0 ? e.locale.replace("_", "-") : "en-US";
        return m(X, {
            children: m(ei, {
                value: s,
                children: [m(li, {
                    isoLocale: a,
                    textDirection: e.textDirection !== void 0 ? e.textDirection : "ltr",
                    segmentData: e.segmentbar,
                    wwwDomain: e.wwwDomain,
                    storeUrlPath: e.storeUrlPath
                }), m(ho, {
                    ...e,
                    subMenuData: t,
                    setAcStoreInstance: n
                })]
            })
        })
    }
    const po = e=>{
        var s;
        const t = (s = e == null ? void 0 : e.props) == null ? void 0 : s.globalNavData;
        typeof (t == null ? void 0 : t.hasAbsoluteUrls) == "string" && (t.hasAbsoluteUrls = t.hasAbsoluteUrls === "true")
    }
      , yn = "globalheader"
      , Sn = document.getElementById(yn);
    if (Sn === null)
        throw new Error(`Could not find root node ID: ${yn}`);
    const En = document.getElementById("__ACGH_DATA__");
    if (En === null)
        throw new Error("Can't find the data globalheaderDataElement");
    const Nn = JSON.parse(En.textContent);
    po(Nn);
    const {props: fo} = Nn;
    Tt(m(mo, {
        ...fo
    }), Sn);
    var Nt = {
        exports: {}
    }
      , go = xs(qn)
      , _o = xs(Yn);
    (function(e, t) {
        var s = Object.defineProperty
          , n = Object.defineProperties
          , a = Object.getOwnPropertyDescriptors
          , i = Object.getOwnPropertySymbols
          , l = Object.prototype.hasOwnProperty
          , h = Object.prototype.propertyIsEnumerable
          , c = (y,w,L)=>w in y ? s(y, w, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: L
        }) : y[w] = L
          , f = (y,w)=>{
            for (var L in w || (w = {}))
                l.call(w, L) && c(y, L, w[L]);
            if (i)
                for (var L of i(w))
                    h.call(w, L) && c(y, L, w[L]);
            return y
        }
          , r = (y,w)=>n(y, a(w))
          , v = (y,w,L)=>(c(y, typeof w != "symbol" ? w + "" : w, L),
        L)
          , b = (y,w,L)=>{
            if (!w.has(y))
                throw TypeError("Cannot " + L)
        }
          , o = (y,w,L)=>(b(y, w, "read from private field"),
        L ? L.call(y) : w.get(y))
          , g = (y,w,L)=>{
            if (w.has(y))
                throw TypeError("Cannot add the same private member more than once");
            w instanceof WeakSet ? w.add(y) : w.set(y, L)
        }
          , k = (y,w,L,x)=>(b(y, w, "write to private field"),
        x ? x.call(y, L) : w.set(y, L),
        L)
          , T = (y,w,L,x)=>({
            set _(D) {
                k(y, w, D, L)
            },
            get _() {
                return o(y, w, x)
            }
        })
          , I = (y,w,L)=>new Promise((x,D)=>{
            var K = ie=>{
                try {
                    te(L.next(ie))
                } catch (ee) {
                    D(ee)
                }
            }
              , W = ie=>{
                try {
                    te(L.throw(ie))
                } catch (ee) {
                    D(ee)
                }
            }
              , te = ie=>ie.done ? x(ie.value) : Promise.resolve(ie.value).then(K, W);
            te((L = L.apply(y, w)).next())
        }
        );
        (function(y, w) {
            w(t, go, _o)
        }
        )(Ci, function(y, w, L) {
            var x, D, K, W, te, ie, ee, B, ge, Le, Te, _e, ae, Ae, Ue, Oe, Ve, de, ve, Me, rt, Se, ke, qe, lt, Ie, ct, xe, Re, wt, pe, De, Be, je;
            const q = ({message: d, data: u={}, level: p=q.LEVELS.LOG})=>{}
            ;
            q.LEVELS = {
                LOG: "log",
                INFO: "info",
                ERROR: "error"
            };
            const ut = "bag"
              , oe = "savedIphonePreOrder"
              , le = "checkout"
              , U = "preOrderBag"
              , Ze = "covers"
              , Ee = class {
                constructor({bagContent: d}) {
                    g(this, x, void 0),
                    g(this, D, {});
                    const {message: u} = d
                      , p = Boolean(u && u.type === Ze);
                    if (k(this, x, d),
                    p)
                        o(this, D).covers = Ee.createCoversSection({
                            covers: d
                        });
                    else {
                        const {bag: _, preOrderBag: N, buttons: E} = d;
                        _ && (o(this, D).bag = Ee.createBagSection({
                            bag: _,
                            buttons: E
                        })),
                        N && (o(this, D).preOrderBag = Ee.createPreOrderBagSection({
                            preOrderBag: N,
                            buttons: E
                        })),
                        o(this, D).profile = Ee.createProfileSection({
                            profile: d
                        })
                    }
                    return q({
                        message: "BagFlyoutModel",
                        level: "info",
                        data: {
                            model: o(this, D),
                            server: o(this, x)
                        }
                    }),
                    o(this, D)
                }
            }
            ;
            let Z = Ee;
            x = new WeakMap,
            D = new WeakMap,
            v(Z, "createCoversSection", ({covers: d})=>{
                const {message: u} = d;
                return {
                    title: u.text,
                    showCovers: !0
                }
            }
            ),
            v(Z, "createBagSection", ({bag: d, buttons: u})=>{
                const {title: p, emptyBagMsg: _, extraItemsMsg: N, subHeader: E, items: F=[]} = d;
                return {
                    title: _ || p,
                    emptyBagMsg: _,
                    subHeader: E,
                    lineMessage: N,
                    items: F,
                    hasItems: Boolean(F && F.length),
                    button: u && u.find(({section: A, type: C})=>A === ut || C === le)
                }
            }
            ),
            v(Z, "createPreOrderBagSection", ({preOrderBag: d, buttons: u})=>{
                const {title: p, subHeader: _, mode: N, items: E} = d;
                return {
                    title: p,
                    subHeader: _,
                    mode: N,
                    items: E,
                    hasItems: Boolean(E && E.length),
                    button: u && u.find(({section: F})=>F === U)
                }
            }
            ),
            v(Z, "createProfileSection", ({profile: d})=>{
                const {linksHeader: u, links: p} = d;
                return {
                    title: u,
                    links: p.filter(({type: _})=>_ !== ut && _ !== oe),
                    hasLinks: Boolean(p && p.length)
                }
            }
            );
            var Ge = 0;
            function S(d, u, p, _, N) {
                var E, F, A = {};
                for (F in u)
                    F == "ref" ? E = u[F] : A[F] = u[F];
                var C = {
                    type: d,
                    props: A,
                    key: p,
                    ref: E,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --Ge,
                    __source: N,
                    __self: _
                };
                if (typeof d == "function" && (E = d.defaultProps))
                    for (F in E)
                        A[F] === void 0 && (A[F] = E[F]);
                return w.options.vnode && w.options.vnode(C),
                C
            }
            const re = {
                FLYOUT_WILL_OPEN: "globalnav:onFlyoutWillOpen",
                FLYOUT_OPEN: "globalnav:onFlyoutOpen",
                FLYOUT_WILL_CLOSE: "globalnav:onFlyoutWillClose",
                FLYOUT_CLOSE: "globalnav:onFlyoutClose"
            }
              , Fe = {
                isOpen: !1,
                isLoading: !1,
                showCovers: !1,
                flyoutItemClass: "",
                flyoutData: null
            }
              , j = w.createContext(Fe)
              , ce = ({acStoreInstance: d, globalNavEl: u, onFlyoutContentUpdate: p, children: _})=>{
                const [N,E] = L.useState(Fe.isOpen)
                  , [F,A] = L.useState(Fe.isLoading)
                  , [C,O] = L.useState(Fe.flyoutData)
                  , R = L.useRef(!1)
                  , $ = {
                    isOpen: N,
                    isClosed: !N,
                    isLoading: F,
                    showCovers: C && C.covers && C.covers.showCovers,
                    flyoutItemClass: "globalnav-flyout-item",
                    flyoutData: C
                }
                  , G = L.useCallback(()=>I(this, null, function*() {
                    R.current = !0,
                    A(!0);
                    try {
                        const J = yield d.updateBagFlyout();
                        if (J) {
                            const {bagContent: ne} = J;
                            O(new Z({
                                bagContent: ne
                            }))
                        }
                    } catch (J) {
                        q({
                            message: J,
                            level: q.LEVELS.ERROR,
                            data: J
                        })
                    }
                    R.current = !1,
                    A(!1)
                }), [A, d, O])
                  , P = L.useCallback(J=>I(this, [J], function*({event: ne, callback: ht}) {
                    const {detail: {target: jo}} = ne;
                    if (jo === d.getDomElement()) {
                        if (ht)
                            try {
                                yield ht()
                            } catch (kt) {
                                q({
                                    message: kt,
                                    level: q.LEVELS.ERROR,
                                    data: kt
                                })
                            }
                        E(kt=>!kt)
                    }
                }), [d, E])
                  , H = L.useCallback(J=>{
                    R.current || P({
                        event: J,
                        callback: G
                    })
                }
                , [P, G])
                  , Y = L.useCallback(J=>{
                    P({
                        event: J
                    })
                }
                , [P]);
                return L.useEffect(()=>{
                    if (u)
                        return u.addEventListener(re.FLYOUT_WILL_OPEN, H),
                        u.addEventListener(re.FLYOUT_OPEN, H),
                        u.addEventListener(re.FLYOUT_WILL_CLOSE, Y),
                        u.addEventListener(re.FLYOUT_CLOSE, Y),
                        ()=>{
                            u.removeEventListener(re.FLYOUT_WILL_OPEN, H),
                            u.removeEventListener(re.FLYOUT_OPEN, H),
                            u.removeEventListener(re.FLYOUT_WILL_CLOSE, Y),
                            u.removeEventListener(re.FLYOUT_CLOSE, Y)
                        }
                }
                , [u, H, Y]),
                L.useEffect(p),
                S(j.Provider, {
                    value: $,
                    children: _
                })
            }
            ;
            ce.defaultProps = {
                onFlyoutContentUpdate: ()=>{}
            };
            const Q = ()=>L.useContext(j)
              , He = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="gear_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.6094,12.3252a.5142.5142,0,0,0-.2959-.2959l-.5972-.2324a6.6665,6.6665,0,0,0-.16-.917l.4809-.42a.5172.5172,0,0,0-.3291-.9073l-.6372-.0136c-.0654-.1377-.1343-.2784-.2139-.4151s-.1635-.2636-.2519-.3935l.3076-.5576a.517.517,0,0,0-.62-.7393l-.6035.2051a6.68,6.68,0,0,0-.7134-.5977l.0986-.6328a.5172.5172,0,0,0-.43-.5918.54.54,0,0,0-.4052.1084l-.5015.4033A6.911,6.911,0,0,0,9.87,6.01l-.124-.6328a.5178.5178,0,0,0-.9512-.167l-.333.5507a7.2576,7.2576,0,0,0-.92.0039L7.2056,5.207a.518.518,0,0,0-.9512.167l-.125.6377a6.6192,6.6192,0,0,0-.8652.31l-.501-.4063a.5176.5176,0,0,0-.8364.4834l.0991.6358a6.6073,6.6073,0,0,0-.7017.5947L2.71,7.417a.5173.5173,0,0,0-.6211.7392l.3134.5694a6.7192,6.7192,0,0,0-.4653.7959l-.6421.0117a.516.516,0,0,0-.5083.5264.52.52,0,0,0,.1763.38l.4849.4238a6.8261,6.8261,0,0,0-.16.9111l-.6006.23a.5176.5176,0,0,0-.001.9658l.5972.2324a6.6665,6.6665,0,0,0,.16.917l-.4809.419a.5184.5184,0,0,0-.05.7314.52.52,0,0,0,.3789.1758l.6367.0137c.063.1318.1333.2754.2144.416.0673.1172.143.2246.2163.3281l.04.0566-.312.5664a.5176.5176,0,0,0,.2036.7032.52.52,0,0,0,.416.0361l.5967-.2031a6.82,6.82,0,0,0,.7207.5937l-.0991.6348a.5153.5153,0,0,0,.0933.3857.5187.5187,0,0,0,.7421.0977l.5064-.4082a6.6137,6.6137,0,0,0,.8628.3193l.1245.6358a.5139.5139,0,0,0,.22.33.53.53,0,0,0,.3877.0782.5193.5193,0,0,0,.3433-.24l.3388-.56.0577.0049a4.8076,4.8076,0,0,0,.7871.0019l.0669-.0058.3383.5625a.518.518,0,0,0,.9512-.167l.1245-.6348a6.6152,6.6152,0,0,0,.8589-.3193l.5088.4131a.5176.5176,0,0,0,.8364-.4834l-.0991-.6358a6.6173,6.6173,0,0,0,.7017-.5947l.6142.2119a.5174.5174,0,0,0,.6211-.7392l-.3135-.5694a6.6548,6.6548,0,0,0,.4649-.7959l.6421-.0117a.5168.5168,0,0,0,.5088-.5264.5166.5166,0,0,0-.1768-.38l-.4849-.4238a6.6694,6.6694,0,0,0,.16-.9111l.6006-.2315a.5177.5177,0,0,0,.2969-.6689ZM6.4941,13.9043,4.7666,16.8926a5.4449,5.4449,0,0,1,.0044-8.792L6.5,11.0986A2.0525,2.0525,0,0,0,6.4941,13.9043Zm2.1646-1.7822a.7608.7608,0,1,1-.4609-.3555A.7543.7543,0,0,1,8.6587,12.1221ZM7.54,10.499,5.8154,7.5068A5.4579,5.4579,0,0,1,7.9907,7.041h.0239a5.4693,5.4693,0,0,1,5.4068,4.8633l-3.457-.0029a2.0363,2.0363,0,0,0-.18-.43A2.0586,2.0586,0,0,0,7.54,10.499Zm-.0058,4.0049a2.0556,2.0556,0,0,0,2.435-1.4023l3.4512.0029a5.4455,5.4455,0,0,1-7.6147,4.3877Z" fill="6E6E73"/></g></svg>'
              , Ct = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 17 25" class="ac-gn-bagview-nav-svgicon">
  <g>
    <rect  width="21" height="21" fill="none"/>
    <path d="M14.934,5.017H13.828A3.413,3.413,0,0,0,10.5,2,3.413,3.413,0,0,0,7.172,5.017H6.066A2.058,2.058,0,0,0,4.011,7.072v7.865a2.058,2.058,0,0,0,2.056,2.055h8.867a2.058,2.058,0,0,0,2.056-2.055V7.072A2.058,2.058,0,0,0,14.934,5.017ZM10.5,3a2.413,2.413,0,0,1,2.328,2.017H8.172A2.413,2.413,0,0,1,10.5,3Zm5.511,11.938a1.079,1.079,0,0,1-1.077,1.078H6.066a1.079,1.079,0,0,1-1.077-1.078V7.072A1.079,1.079,0,0,1,6.066,5.995h8.867a1.079,1.079,0,0,1,1.077,1.078Z" fill="6E6E73"/>
  </g>
</svg>
`
              , Lt = '<?xml version="1.0" encoding="UTF-8"?><svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="heart-regular"><path id="art_" d="M8,19.125c-.2673,0-.5174-.1035-.7053-.2922L1.4688,12.9838c-.8266-.8295-1.2699-1.9824-1.2141-3.162,.0558-1.1765,.6055-2.281,1.5093-3.0312,1.6382-1.3631,4.1641-1.185,5.7497,.407l.4863,.4874,.4863-.488c1.5834-1.5904,4.1104-1.7695,5.7497-.4064,.9039,.7502,1.4535,1.8548,1.5093,3.0312,.0558,1.1797-.3875,2.3325-1.2141,3.1626l-5.8259,5.8485c-.1879,.1887-.438,.2922-.7053,.2922ZM4.3544,7.0801c-.657,0-1.3011,.2102-1.8174,.6392-.6572,.5459-1.0391,1.3196-1.0743,2.1771-.0371,.9032,.393,1.7639,1.0313,2.4046l5.4234,5.4445c.0456,.0458,.1198,.0458,.1653,0l5.4227-5.4433c.6385-.641,1.0689-1.5019,1.032-2.4054-.0351-.8577-.4169-1.6315-1.0743-2.1775h0c-1.1637-.9663-2.9725-.8204-4.1201,.3298l-1.1871,1.1921c-.0859,.0863-.2257,.0863-.3117,0l-1.1871-1.1916c-.6377-.6402-1.4804-.9695-2.3027-.9695Z" fill="6E6E73"/></g></svg>'
              , At = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="shippingbox_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M14.5146,9.5234a2.56,2.56,0,0,0-1.11-1.4228l-4.25-2.3975a2.3909,2.3909,0,0,0-2.31,0l-4.25,2.3975a2.2971,2.2971,0,0,0-.6025.5107A2.2684,2.2684,0,0,0,1.4,10.1475v4.705a2.3546,2.3546,0,0,0,1.1953,2.0469l4.25,2.3975a2.3541,2.3541,0,0,0,2.31,0l4.25-2.3975A2.3546,2.3546,0,0,0,14.6,14.8525v-4.705A2.3322,2.3322,0,0,0,14.5146,9.5234ZM7.4,12.9453v5.2871L3.1851,15.8545a1.153,1.153,0,0,1-.585-1.002L2.603,10.24Zm.6-1.04L3.147,9.17a.4347.4347,0,0,1,.0385-.0244l1.7623-.9941,4.895,2.7158Zm5.4-1.666v4.6132a1.153,1.153,0,0,1-.585,1.002L8.6,18.2324V12.9453ZM8.5649,6.748l4.25,2.3975a.4347.4347,0,0,1,.0385.0244l-1.7842,1.0059L6.1733,7.46l1.2618-.712A1.1731,1.1731,0,0,1,8.5649,6.748Z" fill="6E6E73"/></g></svg>'
              , Cn = '<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="person.crop.circle_compact"><rect id="box_" width="16" height="25" fill="none"/><path id="art_" d="M15.09,12.5a7.1,7.1,0,1,1-7.1-7.1A7.1077,7.1077,0,0,1,15.09,12.5ZM7.99,6.6a5.89,5.89,0,0,0-4.4609,9.7471c.6069-.9658,2.48-1.6787,4.4609-1.6787s3.8545.7129,4.4615,1.6787A5.89,5.89,0,0,0,7.99,6.6ZM7.99,8.4A2.5425,2.5425,0,0,0,5.5151,11,2.5425,2.5425,0,0,0,7.99,13.6,2.5424,2.5424,0,0,0,10.4653,11,2.5424,2.5424,0,0,0,7.99,8.4Z" fill="6E6E73"/></g></svg>'
              , bo = `<svg id="Outlined" xmlns="http://www.w3.org/2000/svg" class="ac-gn-bagview-nav-svgicon" width="16" height="25" viewBox="0 0 16 25"><g id="bookmark_compact"><rect id="box_" width="16" height="25" fill="none"/>
<path id="art_" d="M10.3,5.15H5.7a2.3022,2.3022,0,0,0-2.3,2.3V19.0381a.8642.8642,0,0,0,.19.5869.67.67,0,0,0,.5313.2246.7441.7441,0,0,0,.438-.1465,4.8685,4.8685,0,0,0,.5366-.4765l2.8931-2.8858,2.9165,2.8867a6.4062,6.4062,0,0,0,.5307.4717.7286.7286,0,0,0,.4429.15.6684.6684,0,0,0,.5308-.2246.8619.8619,0,0,0,.19-.5869V7.45A2.3022,2.3022,0,0,0,10.3,5.15ZM4.6,7.45A1.102,1.102,0,0,1,5.7,6.35h4.6A1.102,1.102,0,0,1,11.4,7.45l-.0005,10.5781L8.832,15.4863a1.186,1.186,0,0,0-1.665.001L4.6,18.0293Z" fill="6E6E73"/></g></svg>`
              , yo = '<svg class="ac-gn-bagview-bagitem-svgicon" height="75" viewBox="0 0 75 75" width="75" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h75v75h-75z" fill="none"/><path class="ac-gn-bagview-bagitem-svgpath" d="m31.2633 60c.2877 1.1112.8029 2.1304 1.5016 3h-9.7649c-3.3137 0-6-2.6863-6-6v-39c0-3.3137 2.6863-6 6-6h19c3.3137 0 6 2.6863 6 6v2h-3v-2c0-1.6542-1.3458-3-3-3h-19c-1.6542 0-3 1.3458-3 3v39c0 1.6542 1.3458 3 3 3zm-.7634-42.5c-.8286 0-1.5.6719-1.5 1.5s.6714 1.5 1.5 1.5h5c.8286 0 1.5-.6719 1.5-1.5s-.6714-1.5-1.5-1.5zm27.5001 10.5v30c0 2.7615-2.2385 5-5 5h-14c-2.0493 0-3.8057-1.2356-4.5779-3-.2683-.6133-.4221-1.2878-.4221-2v-30c0-2.7615 2.2385-5 5-5h14c2.7615 0 5 2.2385 5 5zm-3 0c0-1.1028-.8972-2-2-2h-14c-1.1028 0-2 .8972-2 2v30c0 1.1028.8972 2 2 2h14c1.1028 0 2-.8972 2-2zm-7 .5h-4.0001c-.8286 0-1.5.6719-1.5 1.5s.6714 1.5 1.5 1.5h4.0001c.8286-.0001 1.4999-.6719 1.4999-1.5s-.6713-1.4999-1.4999-1.5z" fill="#1D1D1F"/></svg>'
              , So = {
                account: He,
                bag: Ct,
                favorites: Lt,
                orders: At,
                signIn: Cn,
                signOut: Cn,
                yoursaves: bo
            }
              , Eo = ({url: d, text: u, type: p, analyticsValue: _, flyoutItemClass: N})=>{
                const E = So[p];
                return S("li", {
                    className: `${N} ac-gn-bagview-nav-item ac-gn-bagview-nav-item-${p}`,
                    children: S("a", {
                        href: d,
                        "data-analytics-title": _,
                        className: `ac-gn-bagview-nav-link ac-gn-bagview-nav-link-${p.toLowerCase()}`,
                        "data-ac-autom": `gn-bagview-link-${p}`,
                        children: [S("div", {
                            className: "ac-gn-bagview-nav-image-container",
                            dangerouslySetInnerHTML: {
                                __html: E
                            }
                        }), S("span", {
                            className: "ac-gn-bagview-nav-text",
                            children: u
                        })]
                    })
                })
            }
              , Ln = (d={},u={})=>{
                const p = u ? Object.assign(d, u) : d;
                return Object.keys(p).map(_=>`${encodeURIComponent(_)}=${encodeURIComponent(p[_])}`).join("&").replace(/^/, "?")
            }
              , Yt = (d="")=>{
                if (!d)
                    return null;
                const u = {};
                return d.split("&").forEach(p=>{
                    const [_,N=""] = p.split("=")
                      , E = decodeURIComponent(N.replace(/\+/g, " "));
                    u[_] = E
                }
                ),
                u
            }
              , No = d=>{
                let u = null;
                if (!d)
                    return u;
                const p = (document.cookie || "").split(";");
                for (let _ = 0; _ < p.length; _ += 1) {
                    const N = (p[_] || "").trim();
                    if (N.substring(0, d.length + 1) === `${d}=`) {
                        u = decodeURIComponent(N.substring(d.length + 1));
                        break
                    }
                }
                if (u && u.match(/^\s*\{/))
                    try {
                        u = JSON.parse(u)
                    } catch (_) {
                        q({
                            message: _,
                            level: q.LEVELS.ERROR,
                            data: _
                        })
                    }
                return u
            }
              , wo = ()=>{
                const d = No("pxro");
                return (d ? parseInt(d, 10) : 2) >= 2
            }
              , Co = (d="",u,p)=>{
                if (!d)
                    return {};
                const [_,N] = d.split("?")
                  , E = Yt(N)
                  , F = Yt(u)
                  , A = Yt(p)
                  , C = p ? _.concat(N.replace(/^/, "?")) : _.concat(Ln(E, F))
                  , O = u ? _.concat(N.replace(/^/, "?")) : _.concat(Ln(E, A));
                return {
                    imgSrc: wo() ? O : C,
                    srcSet: C || O ? `${C}, ${O} 2x` : null
                }
            }
              , An = ({src: d, width: u, height: p, alt: _, scaleParams1: N, scaleParams2: E})=>{
                const {imgSrc: F="", srcSet: A=""} = Co(d, N, E);
                return S("img", {
                    src: d || F,
                    srcSet: A,
                    width: u,
                    height: p,
                    alt: _,
                    className: "ac-gn-bagview-bagitem-picture"
                })
            }
              , Mn = ({name: d, qty: u, orderInfo: p, qtyLabelA11y: _})=>S(w.Fragment, {
                children: [d, u > 1 && S(w.Fragment, {
                    children: S("span", {
                        "aria-label": `${_} ${u}`,
                        className: "ac-gn-bagview-bagitem-qty",
                        children: u
                    })
                }), p && S("span", {
                    className: "ac-gn-bagview-bagitem-info",
                    children: p
                })]
            })
              , kn = ({url: d, text: u, type: p, onClick: _, buttonLabelA11y: N, flyoutItemClass: E, dataAnalyticsTitle: F})=>S("a", {
                onClick: _,
                href: d,
                className: `${E} ac-gn-bagview-button ac-gn-bagview-button-pill`,
                "data-ac-autom": `gn-bagview-button-${p}`,
                "data-autom": "globalnav-reviewBag",
                "data-analytics-title": F,
                "aria-label": N,
                children: u
            })
              , Lo = ()=>S("div", {
                className: "ac-gn-loading-indicator",
                children: S("div", {
                    "data-progress-indicator": "",
                    className: "progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain",
                    "aria-label": "aria-label-from-constructor",
                    children: S("svg", {
                        className: "progress-indicator-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 56 56",
                        "aria-hidden": "true",
                        children: S("g", {
                            className: "progress-indicator-spokes",
                            children: [S("path", {
                                className: "progress-indicator-spoke",
                                d: "M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z"
                            }), S("path", {
                                className: "progress-indicator-spoke",
                                d: "M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z"
                            })]
                        })
                    })
                })
            })
              , Ao = ()=>{
                const {flyoutData: {covers: {title: d}}} = Q();
                return S("h2", {
                    className: "ac-gn-bagview-header",
                    children: d
                })
            }
            ;
            var Fn = {
                exports: {}
            };
            /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
            (function(d) {
                (function() {
                    var u = {}.hasOwnProperty;
                    function p() {
                        for (var _ = [], N = 0; N < arguments.length; N++) {
                            var E = arguments[N];
                            if (E) {
                                var F = typeof E;
                                if (F === "string" || F === "number")
                                    _.push(E);
                                else if (Array.isArray(E)) {
                                    if (E.length) {
                                        var A = p.apply(null, E);
                                        A && _.push(A)
                                    }
                                } else if (F === "object") {
                                    if (E.toString !== Object.prototype.toString && !E.toString.toString().includes("[native code]")) {
                                        _.push(E.toString());
                                        continue
                                    }
                                    for (var C in E)
                                        u.call(E, C) && E[C] && _.push(C)
                                }
                            }
                        }
                        return _.join(" ")
                    }
                    d.exports ? (p.default = p,
                    d.exports = p) : window.classNames = p
                }
                )()
            }
            )(Fn);
            const $n = Fn.exports
              , Mo = ({header: d, subHeader: u, mode: p, lineMessage: _, product: N, flyoutButton: E, flyoutItemClass: F, isEmpty: A})=>{
                const C = p === "preorder"
                  , O = C ? "pre-order" : p
                  , R = C ? "pre-order" : "view";
                return S("div", {
                    className: $n("ac-bag-flyout-content ac-get-ready-bag", {
                        "ac-bag-flyout-content-isempty": A
                    }),
                    "data-analytics-region": `get ready ${O}`,
                    children: [S("div", {
                        className: "ac-bag-flyout-content-left",
                        children: [S("h2", {
                            className: `${F} ac-gn-bagview-header`,
                            children: d
                        }), u && S("div", {
                            className: `${F} ac-gn-bagview-subheader`,
                            dangerouslySetInnerHTML: {
                                __html: u
                            }
                        }), N && S("div", {
                            className: "ac-gn-bagview-bagitem-wrapper",
                            children: N
                        }), _ && S("div", {
                            className: `${F} ac-gn-bagview-message`,
                            children: S("span", {
                                className: "ac-gn-bagview-message-text",
                                children: _
                            })
                        })]
                    }), E && S("div", {
                        className: "ac-bag-flyout-content-right",
                        children: S(kn, {
                            url: E.url,
                            text: E.text,
                            dataAnalyticsTitle: R,
                            type: E.type,
                            buttonLabelA11y: E.buttonLabelA11y,
                            flyoutItemClass: F
                        })
                    })]
                })
            }
              , ko = ({name: d, productUrl: u, imageProps: p, qty: _, orderInfo: N, qtyLabelA11y: E, index: F, flyoutItemClass: A})=>{
                const C = Boolean(Object.keys(p).length);
                return S("li", {
                    className: `${A} ac-gn-bagview-bagitem`,
                    children: S("a", {
                        className: "ac-gn-bagview-bagitem-link",
                        href: u,
                        "data-analytics-title": d,
                        children: [S("span", {
                            className: "ac-gn-bagview-bagitem-column1",
                            children: C && p.src ? S(An, f({}, p)) : S("span", {
                                dangerouslySetInnerHTML: {
                                    __html: yo
                                }
                            })
                        }), S("span", {
                            className: "ac-gn-bagview-bagitem-column2",
                            "data-ac-autom": `gn-bagview-itemname-${F}`,
                            children: S(Mn, {
                                name: d,
                                qty: _,
                                orderInfo: N,
                                qtyLabelA11y: E
                            })
                        })]
                    })
                }, d)
            }
              , Fo = ()=>{
                const {flyoutData: {preOrderBag: d}, flyoutItemClass: u} = Q()
                  , {title: p, subHeader: _, mode: N, hasItems: E, items: F, button: A} = d
                  , C = E && F.map((O,R)=>{
                    const {name: $, productUrl: G, productImg: P={}, qty: H, orderInfo: Y, qtyLabelA11y: J} = O
                      , ne = P && {
                        src: P.src,
                        width: P.width,
                        height: P.height,
                        alt: P.alt,
                        scaleParams1: P.scaleParams1,
                        scaleParams2: P.scaleParams2
                    };
                    return S(ko, {
                        name: $,
                        productUrl: G,
                        imageProps: ne,
                        qty: H,
                        orderInfo: Y,
                        qtyLabelA11y: J,
                        index: R,
                        flyoutItemClass: u
                    }, $)
                }
                );
                return S(Mo, {
                    header: p,
                    subHeader: _,
                    mode: N,
                    lineMessage: void 0,
                    product: C,
                    flyoutButton: A,
                    flyoutItemClass: u,
                    isEmpty: Boolean(!E)
                })
            }
              , $o = ({header: d, subHeader: u, lineMessage: p, product: _, flyoutButton: N, flyoutItemClass: E, isEmpty: F})=>S("div", {
                className: "ac-bag-flyout-content",
                "data-analytics-region": "bag items",
                children: [S("div", {
                    className: $n("ac-bag-flyout-content-left", {
                        "ac-bag-flyout-content-isempty": F
                    }),
                    children: [S("h2", {
                        className: `${E} ac-gn-bagview-header`,
                        children: d
                    }), u && S("div", {
                        className: `${E} ac-gn-bagview-subheader`,
                        dangerouslySetInnerHTML: {
                            __html: u
                        }
                    }), _ && S("div", {
                        className: "ac-gn-bagview-bagitem-wrapper",
                        children: _
                    }), p && S("div", {
                        className: `${E} ac-gn-bagview-message`,
                        children: S("span", {
                            className: "ac-gn-bagview-message-text",
                            children: p
                        })
                    })]
                }), N && S("div", {
                    className: "ac-bag-flyout-content-right",
                    children: S(kn, {
                        url: N.url,
                        text: N.text,
                        dataAnalyticsTitle: "Review Bag",
                        type: N.type,
                        buttonLabelA11y: N.buttonLabelA11y,
                        flyoutItemClass: E
                    })
                })]
            })
              , To = ({name: d, productUrl: u, imageProps: p, qty: _, qtyLabelA11y: N, index: E, flyoutItemClass: F})=>S("li", {
                className: `${F} ac-gn-bagview-bagitem`,
                children: S("a", {
                    className: "ac-gn-bagview-bagitem-link",
                    href: u,
                    "data-analytics-title": d,
                    children: [S("span", {
                        className: "ac-gn-bagview-bagitem-column1",
                        children: S(An, f({}, p))
                    }), S("span", {
                        className: "ac-gn-bagview-bagitem-column2",
                        "data-ac-autom": `gn-bagview-itemname-${E}`,
                        children: S(Mn, {
                            name: d,
                            qty: _,
                            qtyLabelA11y: N
                        })
                    })]
                })
            }, d)
              , Oo = ()=>{
                const {flyoutData: {bag: d}, flyoutItemClass: u} = Q()
                  , {title: p, lineMessage: _, emptyBagMsg: N, subHeader: E, hasItems: F, items: A, button: C} = d
                  , O = F && A.map((R,$)=>{
                    const {name: G, productUrl: P, productImg: H={}, qty: Y, qtyLabelA11y: J} = R
                      , ne = H && {
                        src: H.src,
                        width: H.width,
                        height: H.height,
                        alt: H.alt,
                        scaleParams1: H.scaleParams1,
                        scaleParams2: H.scaleParams2
                    };
                    return S(To, {
                        name: G,
                        productUrl: P,
                        imageProps: ne,
                        qty: Y,
                        qtyLabelA11y: J,
                        index: $,
                        flyoutItemClass: u
                    }, G)
                }
                );
                return S($o, {
                    header: p,
                    subHeader: E,
                    lineMessage: _,
                    product: O,
                    flyoutButton: C,
                    flyoutItemClass: u,
                    isEmpty: Boolean(N)
                })
            }
              , Io = ({linksHeader: d, menuLinks: u, flyoutItemClass: p})=>S("div", {
                className: "ac-gn-bagview-nav-item-wrapper",
                "data-analytics-region": "my profile",
                children: [S("h3", {
                    className: `${p} ac-gn-bagview-nav-item-header`,
                    children: d
                }), S("ul", {
                    children: u
                })]
            })
              , xo = ()=>{
                const {flyoutItemClass: d, flyoutData: {profile: {title: u, hasLinks: p, links: _}}} = Q()
                  , N = p && _.map(E=>S(Eo, {
                    text: E.text,
                    url: E.url,
                    type: E.type,
                    analyticsValue: E.type === "yoursaves" ? "saved items" : E.type,
                    flyoutItemClass: d
                }, E.url));
                return S(Io, {
                    linksHeader: u,
                    menuLinks: N,
                    flyoutItemClass: d
                })
            }
              , Ro = ()=>{
                const {flyoutData: {preOrderBag: d, bag: u, profile: p}} = Q();
                return S(w.Fragment, {
                    children: [d && S(Fo, {}), u && S(Oo, {}), p && S(xo, {})]
                })
            }
            ;
            function Bo() {
                const {flyoutData: d, showCovers: u} = Q();
                return d ? S("div", {
                    className: "ac-bag-flyout-container ac-gn-bagview-content",
                    "data-autom": "ac-gn-bagview",
                    children: u ? S(Ao, {}) : S(Ro, {})
                }) : S(Lo, {})
            }
            function Po({acStoreInstance: d, globalNavEl: u, onFlyoutContentUpdate: p}) {
                return S(ce, {
                    acStoreInstance: d,
                    globalNavEl: u,
                    onFlyoutContentUpdate: p,
                    children: S(Bo, {})
                })
            }
            function Tn() {
                this._events = {}
            }
            var ze = Tn.prototype;
            ze.on = function(d, u) {
                this._events[d] = this._events[d] || [],
                this._events[d].unshift(u)
            }
            ,
            ze.once = function(d, u) {
                var p = this;
                function _(N) {
                    p.off(d, _),
                    N !== void 0 ? u(N) : u()
                }
                this.on(d, _)
            }
            ,
            ze.off = function(d, u) {
                if (this.has(d)) {
                    if (arguments.length === 1) {
                        this._events[d] = null,
                        delete this._events[d];
                        return
                    }
                    var p = this._events[d].indexOf(u);
                    p !== -1 && this._events[d].splice(p, 1)
                }
            }
            ,
            ze.trigger = function(d, u) {
                if (this.has(d))
                    for (var p = this._events[d].length - 1; p >= 0; p--)
                        u !== void 0 ? this._events[d][p](u) : this._events[d][p]()
            }
            ,
            ze.has = function(d) {
                return !(!(d in this._events) || this._events[d].length === 0)
            }
            ,
            ze.destroy = function() {
                for (var d in this._events)
                    this._events[d] = null;
                this._events = null
            }
            ;
            var Do = Tn
              , Ho = {
                EventEmitterMicro: Do
            };
            const Wo = "string"
              , {localStorage: Jt, JSON: On} = window
              , Ke = {
                getItem: d=>{
                    let u = null;
                    try {
                        u = Jt.getItem(d);
                        try {
                            u = On.parse(u)
                        } catch (p) {
                            q({
                                message: p,
                                level: q.LEVELS.ERROR,
                                data: p
                            })
                        }
                    } catch (p) {
                        q({
                            message: p,
                            level: q.LEVELS.ERROR,
                            data: p
                        })
                    }
                    return u
                }
                ,
                setItem: (d,u)=>{
                    try {
                        return typeof u !== Wo && (u = On.stringify(u)),
                        Jt.setItem(d, u),
                        !0
                    } catch (p) {
                        return q({
                            message: p,
                            level: q.LEVELS.ERROR,
                            data: p
                        }),
                        !1
                    }
                }
                ,
                removeItem: d=>{
                    try {
                        return Jt.removeItem(d),
                        !0
                    } catch (u) {
                        return q({
                            message: u,
                            level: q.LEVELS.ERROR,
                            data: u
                        }),
                        !1
                    }
                }
            }
              , Xt = "as_"
              , In = ["", "_stag", "_ce01", "_ce02", "_ce03", "_ce04", "_ce05", "_ce06", "_ce07", "_xe01", "_xe02", "_xe03", "_xe04", "_xe05", "_xe06", "_xe07", "_xe01aws", "_xe02aws", "_xe03aws", "_xe04aws", "_xe05aws", "_xe06aws", "_xe07aws", "_dev01"]
              , be = {
                get: d=>{
                    const {document: {cookie: u}} = window;
                    let p = "";
                    try {
                        const _ = encodeURIComponent(d).replace(/[-.+*]/g, "\\$&")
                          , N = new RegExp(`(?:(?:^|.*;)\\s*${_}\\s*\\=\\s*([^;]*).*$)|^.*$`);
                        p = decodeURIComponent(u.replace(N, "$1"))
                    } catch (_) {
                        q({
                            message: _,
                            level: q.LEVELS.ERROR,
                            data: _
                        })
                    }
                    return p
                }
                ,
                getPrefixedAs: d=>{
                    const {cookieMap: u={}} = window
                      , p = u[`as_ ${d}`];
                    let _;
                    if (p)
                        _ = be.get(p);
                    else
                        for (const N of In)
                            if (_ = be.get(`${Xt}${d}${N}`),
                            _)
                                break;
                    return _
                }
                ,
                has: d=>{
                    const {document: {cookie: u}} = window;
                    let p = !1;
                    if (d)
                        try {
                            const _ = encodeURIComponent(d).replace(/[-.+*]/g, "\\$&");
                            p = new RegExp(`(?:^|;\\s*)${_}\\s*\\=`).test(u)
                        } catch (_) {
                            q({
                                message: _,
                                level: q.LEVELS.ERROR,
                                data: _
                            })
                        }
                    return p
                }
                ,
                remove: (d,u,p)=>{
                    const {document: _} = window
                      , N = p ? `; domain=${p}` : ""
                      , E = p ? `; path=${u}` : "";
                    let F = !1;
                    return be.has(d) && (_.cookie = `${encodeURIComponent(d)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT ${N}${E}`,
                    F = !0),
                    F
                }
                ,
                removePrefixedAs: (d,u,p)=>{
                    const {envCookieSuffix: _} = window;
                    let N;
                    if (_)
                        N = be.remove(`${Xt}${d}${_}`, u, p);
                    else {
                        for (const E of In)
                            be.remove(`${Xt}${d}${E}`, u, p);
                        N = !0
                    }
                    return N
                }
            }
              , xn = class extends Error {
                constructor(d, u) {
                    super(d),
                    this.type = u,
                    this.name = xn.name
                }
            }
            ;
            let he = xn;
            v(he, "name", "AcStoreError"),
            v(he, "Types", {
                BAD_JSON_RESPONSE: 0,
                MISSING_API_ADD_TO_BAG: 1,
                MISSING_API_FLYOUT: 2,
                ITEM_NOT_ADDED: 3
            });
            const Uo = "globalnav"
              , Qe = "ac-store-cache"
              , Rn = {
                FAVORITE_ADDED: "favoriteAdded",
                STATE_CHANGE: "Change"
            }
              , Bn = ()=>{}
            ;
            class Mt extends Ho.EventEmitterMicro {
                constructor(u, p, _, N) {
                    super(),
                    g(this, K, void 0),
                    g(this, W, void 0),
                    g(this, te, void 0),
                    g(this, ie, void 0),
                    g(this, ee, null),
                    g(this, B, null),
                    g(this, ge, null),
                    g(this, Le, 0),
                    g(this, Te, 200),
                    g(this, _e, {
                        storeState: {
                            bag: null,
                            segmentNav: null,
                            covers: null
                        },
                        itemCount: -1,
                        storefront: {},
                        bagContent: o(this, ee)
                    }),
                    g(this, ae, null),
                    g(this, Ae, !1),
                    g(this, Ue, /([^/]*)\/\/([^/]*)\/.*/),
                    g(this, Oe, void 0),
                    g(this, Ve, !1),
                    g(this, de, (A,C)=>{
                        const O = o(this, _e)[A];
                        let R = O !== C;
                        if (R && typeof O == "object" && typeof C == "object") {
                            R = !1;
                            for (const $ in C)
                                if (R = C[$] !== O[$],
                                R)
                                    break;
                            if (!R) {
                                for (const $ in O)
                                    if (R = !($ in C),
                                    R)
                                        break
                            }
                        }
                        R && (o(this, _e)[A] = C,
                        this.trigger(`${A}${Rn.STATE_CHANGE}`, C))
                    }
                    ),
                    g(this, ve, (A,C,O,R)=>{
                        let $ = A;
                        const G = $.indexOf("?") === -1 ? "?" : "&";
                        O = O || {};
                        for (const P in C) {
                            const H = new RegExp(`(%5B|\\[)${P}(%5D|\\])`,"g");
                            $ = $.replace(H, encodeURIComponent(C[P]))
                        }
                        $ = $.indexOf("//") === 0 ? window.location.protocol + $ : $,
                        $ += `${G}apikey=${encodeURIComponent(o(this, te))}`,
                        $ += R ? `&l=${encodeURIComponent(`${window.location}`)}` : "";
                        for (const P in O)
                            $ += P && O[P] ? `&${P}=${encodeURIComponent(O[P])}` : "";
                        return new Promise((P,H)=>{
                            const Y = new XMLHttpRequest;
                            Y.onreadystatechange = ()=>{
                                if (Y.readyState === 4)
                                    try {
                                        const J = JSON.parse(Y.responseText);
                                        P(J)
                                    } catch (J) {
                                        const ne = "Response is not JSON."
                                          , ht = new he(ne,he.Types.BAD_JSON_RESPONSE);
                                        q({
                                            message: ne,
                                            level: q.LEVELS.ERROR,
                                            data: {
                                                error: ht,
                                                exception: J
                                            }
                                        }),
                                        H(ht)
                                    }
                            }
                            ,
                            Y.open("GET", $),
                            Y.withCredentials = !0,
                            Y.send()
                        }
                        )
                    }
                    ),
                    g(this, Me, ()=>{
                        const A = window.decodeURIComponent(window.escape(window.atob(be.getPrefixedAs("sfa")))).split("|")
                          , [C,O,R] = A
                          , $ = G=>{
                            if (C === "2") {
                                if (G === 9)
                                    return R;
                                if (G > 1)
                                    return A[G + 1]
                            }
                            return A[G]
                        }
                        ;
                        return o(this, ge) || k(this, ge, {
                            version: $(0),
                            storefront: $(1),
                            name: $(2),
                            locale: $(3),
                            segmentCode: $(4),
                            channelCode: $(5),
                            showBanner: $(6) === "1" || $(6) === "true",
                            persistBanner: $(7) === "1" || $(7) === "true",
                            bagEnabled: $(8) !== "0" && $(8) !== "false",
                            consumerStorefront: $(9)
                        }),
                        o(this, ge)
                    }
                    ),
                    g(this, rt, ()=>be.get("as_atb").split("|").slice(2).join("")),
                    g(this, Se, ()=>new Promise(A=>{
                        const C = o(this, Me).call(this);
                        o(this, de).call(this, "storefront", C),
                        A(C)
                    }
                    )),
                    g(this, ke, ()=>{
                        const A = new Date().getTime();
                        let C = !1
                          , O = null
                          , R = !0
                          , $ = !0;
                        return o(this, ae) || k(this, ae, o(this, Se).call(this).then(G=>{
                            const P = be.getPrefixedAs("cn")
                              , H = G.storefront || o(this, W)
                              , Y = `${document.location}`.replace(o(this, Ue), "$2");
                            if (k(this, B, o(this, B) || Ke.getItem(Qe)),
                            R = G.bagEnabled,
                            $ = G.showBanner,
                            o(this, B) && (C = o(this, Ae) && o(this, B).ttl === 0 || A < o(this, B).ttl && P === o(this, B).cn && o(this, te) === o(this, B).key && H === o(this, B).sfLoc && (!o(this, Oe) || o(this, Oe) === Y)),
                            k(this, Oe, Y),
                            C)
                                return Promise.resolve();
                            const J = {
                                storefront: H
                            };
                            return o(this, ve).call(this, o(this, ie), J, {}, !1).then(ne=>{
                                O = isNaN(parseInt(ne.items, 10)),
                                k(this, B, {
                                    ttl: parseInt(ne.ttl, 10) * 1e3 + A || 0,
                                    items: O ? 0 : parseInt(ne.items, 10),
                                    cn: P,
                                    api: ne.api,
                                    key: o(this, te),
                                    sfLoc: H
                                }),
                                Ke.setItem(Qe, o(this, B)),
                                k(this, Ae, !!ne.api && !ne.disabled)
                            }
                            )
                        }
                        ).then(Bn, Bn).then(()=>new Promise((G,P)=>{
                            const H = R && (C || o(this, Ae));
                            o(this, de).call(this, "storeState", {
                                bag: H,
                                segmentNav: $,
                                covers: O
                            });
                            const Y = H && o(this, B) && o(this, B).items || 0;
                            o(this, de).call(this, "itemCount", Y),
                            k(this, ae, null),
                            H ? G() : P()
                        }
                        ))),
                        o(this, ae)
                    }
                    ),
                    g(this, qe, ()=>{
                        const A = window.location.host;
                        return A.slice(A.indexOf("."))
                    }
                    ),
                    g(this, lt, A=>new Promise(C=>{
                        setTimeout(C, A)
                    }
                    )),
                    g(this, Ie, (A,C)=>o(this, Se).call(this).then(O=>{
                        const R = o(this, B) && o(this, B).api && o(this, B).api.addToBag;
                        if (!R)
                            throw new he("No add to bag API URL on page.",he.Types.MISSING_API_ADD_TO_BAG);
                        const $ = {
                            storefront: O.storefront || o(this, W),
                            part: A
                        }
                          , G = r(f({}, C), {
                            atbtoken: o(this, rt).call(this)
                        });
                        return o(this, ve).call(this, R, $, G, !1)
                    }
                    ).then(O=>{
                        const {addedToBag: R, bagQuantity: $, errorCode: G, message: P} = O;
                        return R ? (this.__setItemCount($ || 0),
                        this.clearBagCache(),
                        Promise.resolve(P)) : G === "CSRF_TOKEN_EXPIRED" && o(this, Le) > 0 ? (T(this, Le)._--,
                        o(this, lt).call(this, o(this, Te)).then(()=>o(this, Ie).call(this, A, C))) : Promise.reject(new he(P,he.Types.ITEM_NOT_ADDED))
                    }
                    )),
                    v(this, "getDomElement", ()=>o(this, K)),
                    v(this, "getState", ()=>({
                        storeState: o(this, _e).storeState,
                        bagContent: typeof o(this, ee) == "object" ? o(this, ee) : null
                    })),
                    v(this, "getStoreState", ()=>o(this, ke).call(this).then(()=>o(this, _e).storeState)),
                    v(this, "getItemCount", ()=>o(this, ke).call(this).then(()=>o(this, _e).itemCount)),
                    v(this, "__setItemCount", A=>{
                        k(this, ee, null),
                        o(this, de).call(this, "itemCount", A),
                        o(this, B) && (o(this, B).items = A,
                        Ke.setItem(Qe, o(this, B)))
                    }
                    ),
                    v(this, "getStorefront", ()=>new Promise(A=>{
                        const C = o(this, Me).call(this);
                        o(this, de).call(this, "storefront", C),
                        A(C)
                    }
                    )),
                    v(this, "exitStorefront", (A=!1)=>{
                        const C = document.getElementById(Uo);
                        if (C && C.getAttribute("lang") === "zh-CN") {
                            const O = o(this, qe).call(this);
                            be.removePrefixedAs("sfa", "/", O),
                            be.remove("as_sfa", "/", ".apple.com.cn")
                        } else
                            be.removePrefixedAs("sfa", "/", ".apple.com");
                        Ke.removeItem(Qe),
                        k(this, B, null),
                        k(this, ge, null),
                        o(this, Me).call(this),
                        A || o(this, ke).call(this)
                    }
                    ),
                    v(this, "addItem", (A,C,O)=>new Promise(R=>{
                        k(this, Le, C || 1);
                        const $ = O || {};
                        R(o(this, Ie).call(this, A, $))
                    }
                    )),
                    v(this, "addFavorite", A=>new Promise(C=>{
                        this.trigger(Rn.FAVORITE_ADDED),
                        C()
                    }
                    )),
                    v(this, "updateBagFlyout", ()=>new Promise(A=>{
                        o(this, ee) === null ? (k(this, ee, !0),
                        (o(this, B) && o(this, B).api ? Promise.resolve() : o(this, ke).call(this)).then(o(this, Se)).then(C=>{
                            const O = o(this, B) && o(this, B).api && o(this, B).api.flyout
                              , R = {
                                storefront: C.storefront || o(this, W)
                            };
                            if (!O)
                                throw new he("No flyout API URL on page.",he.Types.MISSING_API_FLYOUT);
                            return o(this, ve).call(this, O, R, {}, !0)
                        }
                        ).then(C=>{
                            k(this, ee, C)
                        }
                        , ()=>{
                            k(this, ee, null)
                        }
                        ).finally(()=>{
                            A(this.getState())
                        }
                        )) : A(this.getState())
                    }
                    )),
                    v(this, "clearCache", (A=!1)=>{
                        if (!A || !o(this, Ae))
                            return Ke.removeItem(Qe),
                            k(this, B, null),
                            k(this, ge, null),
                            o(this, ke).call(this)
                    }
                    ),
                    v(this, "clearBagCache", ()=>{
                        k(this, ee, null)
                    }
                    );
                    const E = Object.getPrototypeOf(this);
                    E.AcStoreError = he,
                    k(this, K, u),
                    k(this, W, p),
                    k(this, te, _),
                    k(this, ie, N),
                    k(this, Oe, window.document.referrer.replace(o(this, Ue), "$2"));
                    const F = o(this, Me).call(this).consumerStorefront;
                    !!F && !!p && F !== p && this.exitStorefront(!0)
                }
                get isDisabled() {
                    return o(this, Ve)
                }
                set isDisabled(u) {
                    k(this, Ve, u)
                }
            }
            K = new WeakMap,
            W = new WeakMap,
            te = new WeakMap,
            ie = new WeakMap,
            ee = new WeakMap,
            B = new WeakMap,
            ge = new WeakMap,
            Le = new WeakMap,
            Te = new WeakMap,
            _e = new WeakMap,
            ae = new WeakMap,
            Ae = new WeakMap,
            Ue = new WeakMap,
            Oe = new WeakMap,
            Ve = new WeakMap,
            de = new WeakMap,
            ve = new WeakMap,
            Me = new WeakMap,
            rt = new WeakMap,
            Se = new WeakMap,
            ke = new WeakMap,
            qe = new WeakMap,
            lt = new WeakMap,
            Ie = new WeakMap,
            v(Mt, "name", "AcStore"),
            v(Mt, "AcStoreError", he),
            v(Mt, "staticClearCache", ()=>Ke.removeItem(Qe));
            class Vo {
                constructor() {
                    g(this, ct, "aos-gn-links"),
                    g(this, xe, null),
                    g(this, Re, null),
                    g(this, wt, "AosLinkReplacer"),
                    g(this, pe, ({message: u="", type: p="log", data: _})=>{}
                    ),
                    g(this, De, u=>{
                        for (const [p,_] of Object.entries(o(this, xe))) {
                            const N = new RegExp(`${p}$`);
                            if (u.match(N))
                                return o(this, pe).call(this, {
                                    type: "info",
                                    message: "replaced with AOS value",
                                    data: {
                                        marcomUrl: u,
                                        aosUrl: _
                                    }
                                }),
                                _
                        }
                        return u
                    }
                    ),
                    g(this, Be, u=>{
                        const {url: p} = u;
                        u.url = o(this, De).call(this, p)
                    }
                    ),
                    g(this, je, ({baseLinks: u, elevatedLinks: p})=>{
                        u && u.forEach(o(this, Be)),
                        p && p.forEach(o(this, Be))
                    }
                    ),
                    v(this, "shouldReplaceSubMenuLinks", ()=>{
                        let u = !1;
                        const p = document.getElementById(o(this, ct));
                        if (p)
                            try {
                                k(this, xe, JSON.parse(p.innerHTML)),
                                o(this, pe).call(this, {
                                    message: "AOS Replacement map loaded.",
                                    type: "info",
                                    data: o(this, xe)
                                }),
                                u = !0
                            } catch (_) {
                                o(this, pe).call(this, {
                                    message: _.message,
                                    type: "warn",
                                    data: _
                                }),
                                u = !1
                            }
                        return u
                    }
                    ),
                    v(this, "replaceSubMenuLinks", u=>new Promise(p=>{
                        let _;
                        try {
                            if (!this.shouldReplaceSubMenuLinks())
                                throw new Error("AOS URL replacement map is not defined.");
                            k(this, Re, JSON.parse(JSON.stringify(u))),
                            o(this, Re).forEach(({baseGroups: N, elevatedGroups: E})=>{
                                Array.isArray(N) && N.forEach(o(this, je)),
                                Array.isArray(E) && E.forEach(o(this, je))
                            }
                            ),
                            _ = o(this, Re),
                            o(this, pe).call(this, {
                                message: "replacement completed",
                                type: "info",
                                data: _
                            })
                        } catch (N) {
                            _ = u,
                            o(this, pe).call(this, {
                                message: "replacement failed",
                                type: "warn",
                                data: {
                                    result: _,
                                    error: N
                                }
                            })
                        } finally {
                            p(_)
                        }
                    }
                    ))
                }
            }
            ct = new WeakMap,
            xe = new WeakMap,
            Re = new WeakMap,
            wt = new WeakMap,
            pe = new WeakMap,
            De = new WeakMap,
            Be = new WeakMap,
            je = new WeakMap;
            const qo = new Vo;
            y.AcBagFlyout = Po,
            y.AcStore = Mt,
            y.AcStoreError = he,
            y.AosLinkReplacer = qo,
            Object.defineProperties(y, {
                __esModule: {
                    value: !0
                },
                [Symbol.toStringTag]: {
                    value: "Module"
                }
            })
        })
    }
    )(Nt, Nt.exports);
    var vo = Li(Nt.exports)
      , wn = mt({
        __proto__: null,
        default: vo
    }, [Nt.exports])
});
