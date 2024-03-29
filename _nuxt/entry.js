var Y_ = Object.defineProperty;
var K_ = (t,e,n)=>e in t ? Y_(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Qc = (t,e,n)=>(K_(t, typeof e != "symbol" ? e + "" : e, n),
n);
function Xl(t, e) {
    const n = Object.create(null)
      , r = t.split(",");
    for (let i = 0; i < r.length; i++)
        n[r[i]] = !0;
    return e ? i=>!!n[i.toLowerCase()] : i=>!!n[i]
}
function Gl(t) {
    if (ue(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const r = t[n]
              , i = Ze(r) ? J_(r) : Gl(r);
            if (i)
                for (const s in i)
                    e[s] = i[s]
        }
        return e
    } else {
        if (Ze(t))
            return t;
        if ($e(t))
            return t
    }
}
const X_ = /;(?![^(]*\))/g
  , G_ = /:([^]+)/
  , Q_ = /\/\*.*?\*\//gs;
function J_(t) {
    const e = {};
    return t.replace(Q_, "").split(X_).forEach(n=>{
        if (n) {
            const r = n.split(G_);
            r.length > 1 && (e[r[0].trim()] = r[1].trim())
        }
    }
    ),
    e
}
function Ql(t) {
    let e = "";
    if (Ze(t))
        e = t;
    else if (ue(t))
        for (let n = 0; n < t.length; n++) {
            const r = Ql(t[n]);
            r && (e += r + " ")
        }
    else if ($e(t))
        for (const n in t)
            t[n] && (e += n + " ");
    return e.trim()
}
const Z_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , em = Xl(Z_);
function ad(t) {
    return !!t || t === ""
}
const TE = t=>Ze(t) ? t : t == null ? "" : ue(t) || $e(t) && (t.toString === cd || !ce(t.toString)) ? JSON.stringify(t, ud, 2) : String(t)
  , ud = (t,e)=>e && e.__v_isRef ? ud(t, e.value) : Xi(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`] = i,
    n), {})
} : ld(e) ? {
    [`Set(${e.size})`]: [...e.values()]
} : $e(e) && !ue(e) && !fd(e) ? String(e) : e
  , ze = {}
  , Ki = []
  , kn = ()=>{}
  , tm = ()=>!1
  , nm = /^on[^a-z]/
  , To = t=>nm.test(t)
  , Jl = t=>t.startsWith("onUpdate:")
  , Et = Object.assign
  , Zl = (t,e)=>{
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
  , rm = Object.prototype.hasOwnProperty
  , Se = (t,e)=>rm.call(t, e)
  , ue = Array.isArray
  , Xi = t=>So(t) === "[object Map]"
  , ld = t=>So(t) === "[object Set]"
  , im = t=>So(t) === "[object RegExp]"
  , ce = t=>typeof t == "function"
  , Ze = t=>typeof t == "string"
  , ec = t=>typeof t == "symbol"
  , $e = t=>t !== null && typeof t == "object"
  , tc = t=>$e(t) && ce(t.then) && ce(t.catch)
  , cd = Object.prototype.toString
  , So = t=>cd.call(t)
  , sm = t=>So(t).slice(8, -1)
  , fd = t=>So(t) === "[object Object]"
  , nc = t=>Ze(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t
  , Us = Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ua = t=>{
    const e = Object.create(null);
    return n=>e[n] || (e[n] = t(n))
}
  , om = /-(\w)/g
  , Gn = Ua(t=>t.replace(om, (e,n)=>n ? n.toUpperCase() : ""))
  , am = /\B([A-Z])/g
  , bs = Ua(t=>t.replace(am, "-$1").toLowerCase())
  , Wa = Ua(t=>t.charAt(0).toUpperCase() + t.slice(1))
  , fu = Ua(t=>t ? `on${Wa(t)}` : "")
  , co = (t,e)=>!Object.is(t, e)
  , Ws = (t,e)=>{
    for (let n = 0; n < t.length; n++)
        t[n](e)
}
  , ga = (t,e,n)=>{
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , um = t=>{
    const e = parseFloat(t);
    return isNaN(e) ? t : e
}
  , hd = t=>{
    const e = Ze(t) ? Number(t) : NaN;
    return isNaN(e) ? t : e
}
;
let Jc;
const lm = ()=>Jc || (Jc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let En;
class cm {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = En,
        !e && En && (this.index = (En.scopes || (En.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(e) {
        if (this._active) {
            const n = En;
            try {
                return En = this,
                e()
            } finally {
                En = n
            }
        }
    }
    on() {
        En = this
    }
    off() {
        En = this.parent
    }
    stop(e) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !e) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function fm(t, e=En) {
    e && e.active && e.effects.push(t)
}
function hm() {
    return En
}
const rc = t=>{
    const e = new Set(t);
    return e.w = 0,
    e.n = 0,
    e
}
  , dd = t=>(t.w & zr) > 0
  , pd = t=>(t.n & zr) > 0
  , dm = ({deps: t})=>{
    if (t.length)
        for (let e = 0; e < t.length; e++)
            t[e].w |= zr
}
  , pm = t=>{
    const {deps: e} = t;
    if (e.length) {
        let n = 0;
        for (let r = 0; r < e.length; r++) {
            const i = e[r];
            dd(i) && !pd(i) ? i.delete(t) : e[n++] = i,
            i.w &= ~zr,
            i.n &= ~zr
        }
        e.length = n
    }
}
  , _a = new WeakMap;
let Bs = 0
  , zr = 1;
const Qu = 30;
let Fn;
const fi = Symbol("")
  , Ju = Symbol("");
class ic {
    constructor(e, n=null, r) {
        this.fn = e,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this.parent = void 0,
        fm(this, r)
    }
    run() {
        if (!this.active)
            return this.fn();
        let e = Fn
          , n = Lr;
        for (; e; ) {
            if (e === this)
                return;
            e = e.parent
        }
        try {
            return this.parent = Fn,
            Fn = this,
            Lr = !0,
            zr = 1 << ++Bs,
            Bs <= Qu ? dm(this) : Zc(this),
            this.fn()
        } finally {
            Bs <= Qu && pm(this),
            zr = 1 << --Bs,
            Fn = this.parent,
            Lr = n,
            this.parent = void 0,
            this.deferStop && this.stop()
        }
    }
    stop() {
        Fn === this ? this.deferStop = !0 : this.active && (Zc(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Zc(t) {
    const {deps: e} = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++)
            e[n].delete(t);
        e.length = 0
    }
}
let Lr = !0;
const gd = [];
function ws() {
    gd.push(Lr),
    Lr = !1
}
function Cs() {
    const t = gd.pop();
    Lr = t === void 0 ? !0 : t
}
function Qt(t, e, n) {
    if (Lr && Fn) {
        let r = _a.get(t);
        r || _a.set(t, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = rc()),
        _d(i)
    }
}
function _d(t, e) {
    let n = !1;
    Bs <= Qu ? pd(t) || (t.n |= zr,
    n = !dd(t)) : n = !t.has(Fn),
    n && (t.add(Fn),
    Fn.deps.push(t))
}
function dr(t, e, n, r, i, s) {
    const o = _a.get(t);
    if (!o)
        return;
    let a = [];
    if (e === "clear")
        a = [...o.values()];
    else if (n === "length" && ue(t)) {
        const u = Number(r);
        o.forEach((l,c)=>{
            (c === "length" || c >= u) && a.push(l)
        }
        )
    } else
        switch (n !== void 0 && a.push(o.get(n)),
        e) {
        case "add":
            ue(t) ? nc(n) && a.push(o.get("length")) : (a.push(o.get(fi)),
            Xi(t) && a.push(o.get(Ju)));
            break;
        case "delete":
            ue(t) || (a.push(o.get(fi)),
            Xi(t) && a.push(o.get(Ju)));
            break;
        case "set":
            Xi(t) && a.push(o.get(fi));
            break
        }
    if (a.length === 1)
        a[0] && Zu(a[0]);
    else {
        const u = [];
        for (const l of a)
            l && u.push(...l);
        Zu(rc(u))
    }
}
function Zu(t, e) {
    const n = ue(t) ? t : [...t];
    for (const r of n)
        r.computed && ef(r);
    for (const r of n)
        r.computed || ef(r)
}
function ef(t, e) {
    (t !== Fn || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
}
function gm(t, e) {
    var n;
    return (n = _a.get(t)) === null || n === void 0 ? void 0 : n.get(e)
}
const _m = Xl("__proto__,__v_isRef,__isVue")
  , md = new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t !== "arguments" && t !== "caller").map(t=>Symbol[t]).filter(ec))
  , mm = sc()
  , ym = sc(!1, !0)
  , Dm = sc(!0)
  , tf = vm();
function vm() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e=>{
        t[e] = function(...n) {
            const r = Fe(this);
            for (let s = 0, o = this.length; s < o; s++)
                Qt(r, "get", s + "");
            const i = r[e](...n);
            return i === -1 || i === !1 ? r[e](...n.map(Fe)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(e=>{
        t[e] = function(...n) {
            ws();
            const r = Fe(this)[e].apply(this, n);
            return Cs(),
            r
        }
    }
    ),
    t
}
function bm(t) {
    const e = Fe(this);
    return Qt(e, "has", t),
    e.hasOwnProperty(t)
}
function sc(t=!1, e=!1) {
    return function(r, i, s) {
        if (i === "__v_isReactive")
            return !t;
        if (i === "__v_isReadonly")
            return t;
        if (i === "__v_isShallow")
            return e;
        if (i === "__v_raw" && s === (t ? e ? Im : wd : e ? bd : vd).get(r))
            return r;
        const o = ue(r);
        if (!t) {
            if (o && Se(tf, i))
                return Reflect.get(tf, i, s);
            if (i === "hasOwnProperty")
                return bm
        }
        const a = Reflect.get(r, i, s);
        return (ec(i) ? md.has(i) : _m(i)) || (t || Qt(r, "get", i),
        e) ? a : ht(a) ? o && nc(i) ? a : a.value : $e(a) ? t ? Cd(a) : On(a) : a
    }
}
const wm = yd()
  , Cm = yd(!0);
function yd(t=!1) {
    return function(n, r, i, s) {
        let o = n[r];
        if (Di(o) && ht(o) && !ht(i))
            return !1;
        if (!t && (!ma(i) && !Di(i) && (o = Fe(o),
        i = Fe(i)),
        !ue(n) && ht(o) && !ht(i)))
            return o.value = i,
            !0;
        const a = ue(n) && nc(r) ? Number(r) < n.length : Se(n, r)
          , u = Reflect.set(n, r, i, s);
        return n === Fe(s) && (a ? co(i, o) && dr(n, "set", r, i) : dr(n, "add", r, i)),
        u
    }
}
function Em(t, e) {
    const n = Se(t, e);
    t[e];
    const r = Reflect.deleteProperty(t, e);
    return r && n && dr(t, "delete", e, void 0),
    r
}
function xm(t, e) {
    const n = Reflect.has(t, e);
    return (!ec(e) || !md.has(e)) && Qt(t, "has", e),
    n
}
function Tm(t) {
    return Qt(t, "iterate", ue(t) ? "length" : fi),
    Reflect.ownKeys(t)
}
const Dd = {
    get: mm,
    set: wm,
    deleteProperty: Em,
    has: xm,
    ownKeys: Tm
}
  , Sm = {
    get: Dm,
    set(t, e) {
        return !0
    },
    deleteProperty(t, e) {
        return !0
    }
}
  , Fm = Et({}, Dd, {
    get: ym,
    set: Cm
})
  , oc = t=>t
  , qa = t=>Reflect.getPrototypeOf(t);
function Oo(t, e, n=!1, r=!1) {
    t = t.__v_raw;
    const i = Fe(t)
      , s = Fe(e);
    n || (e !== s && Qt(i, "get", e),
    Qt(i, "get", s));
    const {has: o} = qa(i)
      , a = r ? oc : n ? lc : fo;
    if (o.call(i, e))
        return a(t.get(e));
    if (o.call(i, s))
        return a(t.get(s));
    t !== i && t.get(e)
}
function Mo(t, e=!1) {
    const n = this.__v_raw
      , r = Fe(n)
      , i = Fe(t);
    return e || (t !== i && Qt(r, "has", t),
    Qt(r, "has", i)),
    t === i ? n.has(t) : n.has(t) || n.has(i)
}
function Lo(t, e=!1) {
    return t = t.__v_raw,
    !e && Qt(Fe(t), "iterate", fi),
    Reflect.get(t, "size", t)
}
function nf(t) {
    t = Fe(t);
    const e = Fe(this);
    return qa(e).has.call(e, t) || (e.add(t),
    dr(e, "add", t, t)),
    this
}
function rf(t, e) {
    e = Fe(e);
    const n = Fe(this)
      , {has: r, get: i} = qa(n);
    let s = r.call(n, t);
    s || (t = Fe(t),
    s = r.call(n, t));
    const o = i.call(n, t);
    return n.set(t, e),
    s ? co(e, o) && dr(n, "set", t, e) : dr(n, "add", t, e),
    this
}
function sf(t) {
    const e = Fe(this)
      , {has: n, get: r} = qa(e);
    let i = n.call(e, t);
    i || (t = Fe(t),
    i = n.call(e, t)),
    r && r.call(e, t);
    const s = e.delete(t);
    return i && dr(e, "delete", t, void 0),
    s
}
function of() {
    const t = Fe(this)
      , e = t.size !== 0
      , n = t.clear();
    return e && dr(t, "clear", void 0, void 0),
    n
}
function Bo(t, e) {
    return function(r, i) {
        const s = this
          , o = s.__v_raw
          , a = Fe(o)
          , u = e ? oc : t ? lc : fo;
        return !t && Qt(a, "iterate", fi),
        o.forEach((l,c)=>r.call(i, u(l), u(c), s))
    }
}
function Io(t, e, n) {
    return function(...r) {
        const i = this.__v_raw
          , s = Fe(i)
          , o = Xi(s)
          , a = t === "entries" || t === Symbol.iterator && o
          , u = t === "keys" && o
          , l = i[t](...r)
          , c = n ? oc : e ? lc : fo;
        return !e && Qt(s, "iterate", u ? Ju : fi),
        {
            next() {
                const {value: f, done: h} = l.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Dr(t) {
    return function(...e) {
        return t === "delete" ? !1 : this
    }
}
function Rm() {
    const t = {
        get(s) {
            return Oo(this, s)
        },
        get size() {
            return Lo(this)
        },
        has: Mo,
        add: nf,
        set: rf,
        delete: sf,
        clear: of,
        forEach: Bo(!1, !1)
    }
      , e = {
        get(s) {
            return Oo(this, s, !1, !0)
        },
        get size() {
            return Lo(this)
        },
        has: Mo,
        add: nf,
        set: rf,
        delete: sf,
        clear: of,
        forEach: Bo(!1, !0)
    }
      , n = {
        get(s) {
            return Oo(this, s, !0)
        },
        get size() {
            return Lo(this, !0)
        },
        has(s) {
            return Mo.call(this, s, !0)
        },
        add: Dr("add"),
        set: Dr("set"),
        delete: Dr("delete"),
        clear: Dr("clear"),
        forEach: Bo(!0, !1)
    }
      , r = {
        get(s) {
            return Oo(this, s, !0, !0)
        },
        get size() {
            return Lo(this, !0)
        },
        has(s) {
            return Mo.call(this, s, !0)
        },
        add: Dr("add"),
        set: Dr("set"),
        delete: Dr("delete"),
        clear: Dr("clear"),
        forEach: Bo(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s=>{
        t[s] = Io(s, !1, !1),
        n[s] = Io(s, !0, !1),
        e[s] = Io(s, !1, !0),
        r[s] = Io(s, !0, !0)
    }
    ),
    [t, n, e, r]
}
const [Pm,km,Am,Om] = Rm();
function ac(t, e) {
    const n = e ? t ? Om : Am : t ? km : Pm;
    return (r,i,s)=>i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(Se(n, i) && i in r ? n : r, i, s)
}
const Mm = {
    get: ac(!1, !1)
}
  , Lm = {
    get: ac(!1, !0)
}
  , Bm = {
    get: ac(!0, !1)
}
  , vd = new WeakMap
  , bd = new WeakMap
  , wd = new WeakMap
  , Im = new WeakMap;
function $m(t) {
    switch (t) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Nm(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : $m(sm(t))
}
function On(t) {
    return Di(t) ? t : uc(t, !1, Dd, Mm, vd)
}
function Hm(t) {
    return uc(t, !1, Fm, Lm, bd)
}
function Cd(t) {
    return uc(t, !0, Sm, Bm, wd)
}
function uc(t, e, n, r, i) {
    if (!$e(t) || t.__v_raw && !(e && t.__v_isReactive))
        return t;
    const s = i.get(t);
    if (s)
        return s;
    const o = Nm(t);
    if (o === 0)
        return t;
    const a = new Proxy(t,o === 2 ? r : n);
    return i.set(t, a),
    a
}
function Gi(t) {
    return Di(t) ? Gi(t.__v_raw) : !!(t && t.__v_isReactive)
}
function Di(t) {
    return !!(t && t.__v_isReadonly)
}
function ma(t) {
    return !!(t && t.__v_isShallow)
}
function Ed(t) {
    return Gi(t) || Di(t)
}
function Fe(t) {
    const e = t && t.__v_raw;
    return e ? Fe(e) : t
}
function xd(t) {
    return ga(t, "__v_skip", !0),
    t
}
const fo = t=>$e(t) ? On(t) : t
  , lc = t=>$e(t) ? Cd(t) : t;
function Td(t) {
    Lr && Fn && (t = Fe(t),
    _d(t.dep || (t.dep = rc())))
}
function Sd(t, e) {
    t = Fe(t);
    const n = t.dep;
    n && Zu(n)
}
function ht(t) {
    return !!(t && t.__v_isRef === !0)
}
function Yt(t) {
    return Fd(t, !1)
}
function el(t) {
    return Fd(t, !0)
}
function Fd(t, e) {
    return ht(t) ? t : new zm(t,e)
}
class zm {
    constructor(e, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? e : Fe(e),
        this._value = n ? e : fo(e)
    }
    get value() {
        return Td(this),
        this._value
    }
    set value(e) {
        const n = this.__v_isShallow || ma(e) || Di(e);
        e = n ? e : Fe(e),
        co(e, this._rawValue) && (this._rawValue = e,
        this._value = n ? e : fo(e),
        Sd(this))
    }
}
function he(t) {
    return ht(t) ? t.value : t
}
const jm = {
    get: (t,e,n)=>he(Reflect.get(t, e, n)),
    set: (t,e,n,r)=>{
        const i = t[e];
        return ht(i) && !ht(n) ? (i.value = n,
        !0) : Reflect.set(t, e, n, r)
    }
};
function Rd(t) {
    return Gi(t) ? t : new Proxy(t,jm)
}
class Um {
    constructor(e, n, r) {
        this._object = e,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const e = this._object[this._key];
        return e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        this._object[this._key] = e
    }
    get dep() {
        return gm(Fe(this._object), this._key)
    }
}
function Pd(t, e, n) {
    const r = t[e];
    return ht(r) ? r : new Um(t,e,n)
}
var kd;
class Wm {
    constructor(e, n, r, i) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this[kd] = !1,
        this._dirty = !0,
        this.effect = new ic(e,()=>{
            this._dirty || (this._dirty = !0,
            Sd(this))
        }
        ),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const e = Fe(this);
        return Td(e),
        (e._dirty || !e._cacheable) && (e._dirty = !1,
        e._value = e.effect.run()),
        e._value
    }
    set value(e) {
        this._setter(e)
    }
}
kd = "__v_isReadonly";
function qm(t, e, n=!1) {
    let r, i;
    const s = ce(t);
    return s ? (r = t,
    i = kn) : (r = t.get,
    i = t.set),
    new Wm(r,i,s || !i,n)
}
function Br(t, e, n, r) {
    let i;
    try {
        i = r ? t(...r) : t()
    } catch (s) {
        Es(s, e, n)
    }
    return i
}
function mn(t, e, n, r) {
    if (ce(t)) {
        const s = Br(t, e, n, r);
        return s && tc(s) && s.catch(o=>{
            Es(o, e, n)
        }
        ),
        s
    }
    const i = [];
    for (let s = 0; s < t.length; s++)
        i.push(mn(t[s], e, n, r));
    return i
}
function Es(t, e, n, r=!0) {
    const i = e ? e.vnode : null;
    if (e) {
        let s = e.parent;
        const o = e.proxy
          , a = n;
        for (; s; ) {
            const l = s.ec;
            if (l) {
                for (let c = 0; c < l.length; c++)
                    if (l[c](t, o, a) === !1)
                        return
            }
            s = s.parent
        }
        const u = e.appContext.config.errorHandler;
        if (u) {
            Br(u, null, 10, [t, o, a]);
            return
        }
    }
    Vm(t, n, i, r)
}
function Vm(t, e, n, r=!0) {
    console.error(t)
}
let ho = !1
  , tl = !1;
const Tt = [];
let qn = 0;
const Qi = [];
let sr = null
  , oi = 0;
const Ad = Promise.resolve();
let cc = null;
function Ti(t) {
    const e = cc || Ad;
    return t ? e.then(this ? t.bind(this) : t) : e
}
function Ym(t) {
    let e = qn + 1
      , n = Tt.length;
    for (; e < n; ) {
        const r = e + n >>> 1;
        po(Tt[r]) < t ? e = r + 1 : n = r
    }
    return e
}
function Va(t) {
    (!Tt.length || !Tt.includes(t, ho && t.allowRecurse ? qn + 1 : qn)) && (t.id == null ? Tt.push(t) : Tt.splice(Ym(t.id), 0, t),
    Od())
}
function Od() {
    !ho && !tl && (tl = !0,
    cc = Ad.then(Ld))
}
function Km(t) {
    const e = Tt.indexOf(t);
    e > qn && Tt.splice(e, 1)
}
function Md(t) {
    ue(t) ? Qi.push(...t) : (!sr || !sr.includes(t, t.allowRecurse ? oi + 1 : oi)) && Qi.push(t),
    Od()
}
function af(t, e=ho ? qn + 1 : 0) {
    for (; e < Tt.length; e++) {
        const n = Tt[e];
        n && n.pre && (Tt.splice(e, 1),
        e--,
        n())
    }
}
function ya(t) {
    if (Qi.length) {
        const e = [...new Set(Qi)];
        if (Qi.length = 0,
        sr) {
            sr.push(...e);
            return
        }
        for (sr = e,
        sr.sort((n,r)=>po(n) - po(r)),
        oi = 0; oi < sr.length; oi++)
            sr[oi]();
        sr = null,
        oi = 0
    }
}
const po = t=>t.id == null ? 1 / 0 : t.id
  , Xm = (t,e)=>{
    const n = po(t) - po(e);
    if (n === 0) {
        if (t.pre && !e.pre)
            return -1;
        if (e.pre && !t.pre)
            return 1
    }
    return n
}
;
function Ld(t) {
    tl = !1,
    ho = !0,
    Tt.sort(Xm);
    const e = kn;
    try {
        for (qn = 0; qn < Tt.length; qn++) {
            const n = Tt[qn];
            n && n.active !== !1 && Br(n, null, 14)
        }
    } finally {
        qn = 0,
        Tt.length = 0,
        ya(),
        ho = !1,
        cc = null,
        (Tt.length || Qi.length) && Ld()
    }
}
function Gm(t, e, ...n) {
    if (t.isUnmounted)
        return;
    const r = t.vnode.props || ze;
    let i = n;
    const s = e.startsWith("update:")
      , o = s && e.slice(7);
    if (o && o in r) {
        const c = `${o === "modelValue" ? "model" : o}Modifiers`
          , {number: f, trim: h} = r[c] || ze;
        h && (i = n.map(d=>Ze(d) ? d.trim() : d)),
        f && (i = n.map(um))
    }
    let a, u = r[a = fu(e)] || r[a = fu(Gn(e))];
    !u && s && (u = r[a = fu(bs(e))]),
    u && mn(u, t, 6, i);
    const l = r[a + "Once"];
    if (l) {
        if (!t.emitted)
            t.emitted = {};
        else if (t.emitted[a])
            return;
        t.emitted[a] = !0,
        mn(l, t, 6, i)
    }
}
function Bd(t, e, n=!1) {
    const r = e.emitsCache
      , i = r.get(t);
    if (i !== void 0)
        return i;
    const s = t.emits;
    let o = {}
      , a = !1;
    if (!ce(t)) {
        const u = l=>{
            const c = Bd(l, e, !0);
            c && (a = !0,
            Et(o, c))
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(u),
        t.extends && u(t.extends),
        t.mixins && t.mixins.forEach(u)
    }
    return !s && !a ? ($e(t) && r.set(t, null),
    null) : (ue(s) ? s.forEach(u=>o[u] = null) : Et(o, s),
    $e(t) && r.set(t, o),
    o)
}
function Ya(t, e) {
    return !t || !To(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""),
    Se(t, e[0].toLowerCase() + e.slice(1)) || Se(t, bs(e)) || Se(t, e))
}
let Ft = null
  , Ka = null;
function Da(t) {
    const e = Ft;
    return Ft = t,
    Ka = t && t.type.__scopeId || null,
    e
}
function SE(t) {
    Ka = t
}
function FE() {
    Ka = null
}
function va(t, e=Ft, n) {
    if (!e || t._n)
        return t;
    const r = (...i)=>{
        r._d && yf(-1);
        const s = Da(e);
        let o;
        try {
            o = t(...i)
        } finally {
            Da(s),
            r._d && yf(1)
        }
        return o
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function hu(t) {
    const {type: e, vnode: n, proxy: r, withProxy: i, props: s, propsOptions: [o], slots: a, attrs: u, emit: l, render: c, renderCache: f, data: h, setupState: d, ctx: p, inheritAttrs: g} = t;
    let v, m;
    const _ = Da(t);
    try {
        if (n.shapeFlag & 4) {
            const b = i || r;
            v = fn(c.call(b, b, f, s, d, h, p)),
            m = u
        } else {
            const b = e;
            v = fn(b.length > 1 ? b(s, {
                attrs: u,
                slots: a,
                emit: l
            }) : b(s, null)),
            m = e.props ? u : Jm(u)
        }
    } catch (b) {
        Ys.length = 0,
        Es(b, t, 1),
        v = We(rn)
    }
    let D = v;
    if (m && g !== !1) {
        const b = Object.keys(m)
          , {shapeFlag: C} = D;
        b.length && C & 7 && (o && b.some(Jl) && (m = Zm(m, o)),
        D = pr(D, m))
    }
    return n.dirs && (D = pr(D),
    D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs),
    n.transition && (D.transition = n.transition),
    v = D,
    Da(_),
    v
}
function Qm(t) {
    let e;
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (ls(r)) {
            if (r.type !== rn || r.children === "v-if") {
                if (e)
                    return;
                e = r
            }
        } else
            return
    }
    return e
}
const Jm = t=>{
    let e;
    for (const n in t)
        (n === "class" || n === "style" || To(n)) && ((e || (e = {}))[n] = t[n]);
    return e
}
  , Zm = (t,e)=>{
    const n = {};
    for (const r in t)
        (!Jl(r) || !(r.slice(9)in e)) && (n[r] = t[r]);
    return n
}
;
function e0(t, e, n) {
    const {props: r, children: i, component: s} = t
      , {props: o, children: a, patchFlag: u} = e
      , l = s.emitsOptions;
    if (e.dirs || e.transition)
        return !0;
    if (n && u >= 0) {
        if (u & 1024)
            return !0;
        if (u & 16)
            return r ? uf(r, o, l) : !!o;
        if (u & 8) {
            const c = e.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (o[h] !== r[h] && !Ya(l, h))
                    return !0
            }
        }
    } else
        return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? uf(r, o, l) : !0 : !!o;
    return !1
}
function uf(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const s = r[i];
        if (e[s] !== t[s] && !Ya(n, s))
            return !0
    }
    return !1
}
function fc({vnode: t, parent: e}, n) {
    for (; e && e.subTree === t; )
        (t = e.vnode).el = n,
        e = e.parent
}
const Id = t=>t.__isSuspense
  , t0 = {
    name: "Suspense",
    __isSuspense: !0,
    process(t, e, n, r, i, s, o, a, u, l) {
        t == null ? n0(e, n, r, i, s, o, a, u, l) : r0(t, e, n, r, i, o, a, u, l)
    },
    hydrate: i0,
    create: hc,
    normalize: s0
}
  , $d = t0;
function go(t, e) {
    const n = t.props && t.props[e];
    ce(n) && n()
}
function n0(t, e, n, r, i, s, o, a, u) {
    const {p: l, o: {createElement: c}} = u
      , f = c("div")
      , h = t.suspense = hc(t, i, r, e, f, n, s, o, a, u);
    l(null, h.pendingBranch = t.ssContent, f, null, r, h, s, o),
    h.deps > 0 ? (go(t, "onPending"),
    go(t, "onFallback"),
    l(null, t.ssFallback, e, n, r, null, s, o),
    Ji(h, t.ssFallback)) : h.resolve()
}
function r0(t, e, n, r, i, s, o, a, {p: u, um: l, o: {createElement: c}}) {
    const f = e.suspense = t.suspense;
    f.vnode = e,
    e.el = t.el;
    const h = e.ssContent
      , d = e.ssFallback
      , {activeBranch: p, pendingBranch: g, isInFallback: v, isHydrating: m} = f;
    if (g)
        f.pendingBranch = h,
        Rn(h, g) ? (u(g, h, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 ? f.resolve() : v && (u(p, d, n, r, i, null, s, o, a),
        Ji(f, d))) : (f.pendingId++,
        m ? (f.isHydrating = !1,
        f.activeBranch = g) : l(g, i, f),
        f.deps = 0,
        f.effects.length = 0,
        f.hiddenContainer = c("div"),
        v ? (u(null, h, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 ? f.resolve() : (u(p, d, n, r, i, null, s, o, a),
        Ji(f, d))) : p && Rn(h, p) ? (u(p, h, n, r, i, f, s, o, a),
        f.resolve(!0)) : (u(null, h, f.hiddenContainer, null, i, f, s, o, a),
        f.deps <= 0 && f.resolve()));
    else if (p && Rn(h, p))
        u(p, h, n, r, i, f, s, o, a),
        Ji(f, h);
    else if (go(e, "onPending"),
    f.pendingBranch = h,
    f.pendingId++,
    u(null, h, f.hiddenContainer, null, i, f, s, o, a),
    f.deps <= 0)
        f.resolve();
    else {
        const {timeout: _, pendingId: D} = f;
        _ > 0 ? setTimeout(()=>{
            f.pendingId === D && f.fallback(d)
        }
        , _) : _ === 0 && f.fallback(d)
    }
}
function hc(t, e, n, r, i, s, o, a, u, l, c=!1) {
    const {p: f, m: h, um: d, n: p, o: {parentNode: g, remove: v}} = l
      , m = t.props ? hd(t.props.timeout) : void 0
      , _ = {
        vnode: t,
        parent: e,
        parentComponent: n,
        isSVG: o,
        container: r,
        hiddenContainer: i,
        anchor: s,
        deps: 0,
        pendingId: 0,
        timeout: typeof m == "number" ? m : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !0,
        isHydrating: c,
        isUnmounted: !1,
        effects: [],
        resolve(D=!1) {
            const {vnode: b, activeBranch: C, pendingBranch: S, pendingId: T, effects: x, parentComponent: R, container: A} = _;
            if (_.isHydrating)
                _.isHydrating = !1;
            else if (!D) {
                const X = C && S.transition && S.transition.mode === "out-in";
                X && (C.transition.afterLeave = ()=>{
                    T === _.pendingId && h(S, A, H, 0)
                }
                );
                let {anchor: H} = _;
                C && (H = p(C),
                d(C, R, _, !0)),
                X || h(S, A, H, 0)
            }
            Ji(_, S),
            _.pendingBranch = null,
            _.isInFallback = !1;
            let I = _.parent
              , O = !1;
            for (; I; ) {
                if (I.pendingBranch) {
                    I.effects.push(...x),
                    O = !0;
                    break
                }
                I = I.parent
            }
            O || Md(x),
            _.effects = [],
            go(b, "onResolve")
        },
        fallback(D) {
            if (!_.pendingBranch)
                return;
            const {vnode: b, activeBranch: C, parentComponent: S, container: T, isSVG: x} = _;
            go(b, "onFallback");
            const R = p(C)
              , A = ()=>{
                _.isInFallback && (f(null, D, T, R, S, null, x, a, u),
                Ji(_, D))
            }
              , I = D.transition && D.transition.mode === "out-in";
            I && (C.transition.afterLeave = A),
            _.isInFallback = !0,
            d(C, S, null, !0),
            I || A()
        },
        move(D, b, C) {
            _.activeBranch && h(_.activeBranch, D, b, C),
            _.container = D
        },
        next() {
            return _.activeBranch && p(_.activeBranch)
        },
        registerDep(D, b) {
            const C = !!_.pendingBranch;
            C && _.deps++;
            const S = D.vnode.el;
            D.asyncDep.catch(T=>{
                Es(T, D, 0)
            }
            ).then(T=>{
                if (D.isUnmounted || _.isUnmounted || _.pendingId !== D.suspenseId)
                    return;
                D.asyncResolved = !0;
                const {vnode: x} = D;
                al(D, T, !1),
                S && (x.el = S);
                const R = !S && D.subTree.el;
                b(D, x, g(S || D.subTree.el), S ? null : p(D.subTree), _, o, u),
                R && v(R),
                fc(D, x.el),
                C && --_.deps === 0 && _.resolve()
            }
            )
        },
        unmount(D, b) {
            _.isUnmounted = !0,
            _.activeBranch && d(_.activeBranch, n, D, b),
            _.pendingBranch && d(_.pendingBranch, n, D, b)
        }
    };
    return _
}
function i0(t, e, n, r, i, s, o, a, u) {
    const l = e.suspense = hc(e, r, n, t.parentNode, document.createElement("div"), null, i, s, o, a, !0)
      , c = u(t, l.pendingBranch = e.ssContent, n, l, s, o);
    return l.deps === 0 && l.resolve(),
    c
}
function s0(t) {
    const {shapeFlag: e, children: n} = t
      , r = e & 32;
    t.ssContent = lf(r ? n.default : n),
    t.ssFallback = r ? lf(n.fallback) : We(rn)
}
function lf(t) {
    let e;
    if (ce(t)) {
        const n = us && t._c;
        n && (t._d = !1,
        Sr()),
        t = t(),
        n && (t._d = !0,
        e = dn,
        up())
    }
    return ue(t) && (t = Qm(t)),
    t = fn(t),
    e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n=>n !== t)),
    t
}
function Nd(t, e) {
    e && e.pendingBranch ? ue(t) ? e.effects.push(...t) : e.effects.push(t) : Md(t)
}
function Ji(t, e) {
    t.activeBranch = e;
    const {vnode: n, parentComponent: r} = t
      , i = n.el = e.el;
    r && r.subTree === n && (r.vnode.el = i,
    fc(r, i))
}
function Zi(t, e) {
    if (Qe) {
        let n = Qe.provides;
        const r = Qe.parent && Qe.parent.provides;
        r === n && (n = Qe.provides = Object.create(r)),
        n[t] = e
    }
}
function $t(t, e, n=!1) {
    const r = Qe || Ft;
    if (r) {
        const i = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
        if (i && t in i)
            return i[t];
        if (arguments.length > 1)
            return n && ce(e) ? e.call(r.proxy) : e
    }
}
function o0(t, e) {
    return dc(t, null, e)
}
const $o = {};
function hr(t, e, n) {
    return dc(t, e, n)
}
function dc(t, e, {immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o}=ze) {
    const a = hm() === (Qe == null ? void 0 : Qe.scope) ? Qe : null;
    let u, l = !1, c = !1;
    if (ht(t) ? (u = ()=>t.value,
    l = ma(t)) : Gi(t) ? (u = ()=>t,
    r = !0) : ue(t) ? (c = !0,
    l = t.some(D=>Gi(D) || ma(D)),
    u = ()=>t.map(D=>{
        if (ht(D))
            return D.value;
        if (Gi(D))
            return Ni(D);
        if (ce(D))
            return Br(D, a, 2)
    }
    )) : ce(t) ? e ? u = ()=>Br(t, a, 2) : u = ()=>{
        if (!(a && a.isUnmounted))
            return f && f(),
            mn(t, a, 3, [h])
    }
    : u = kn,
    e && r) {
        const D = u;
        u = ()=>Ni(D())
    }
    let f, h = D=>{
        f = m.onStop = ()=>{
            Br(D, a, 4)
        }
    }
    , d;
    if (cs)
        if (h = kn,
        e ? n && mn(e, a, 3, [u(), c ? [] : void 0, h]) : u(),
        i === "sync") {
            const D = Q0();
            d = D.__watcherHandles || (D.__watcherHandles = [])
        } else
            return kn;
    let p = c ? new Array(t.length).fill($o) : $o;
    const g = ()=>{
        if (m.active)
            if (e) {
                const D = m.run();
                (r || l || (c ? D.some((b,C)=>co(b, p[C])) : co(D, p))) && (f && f(),
                mn(e, a, 3, [D, p === $o ? void 0 : c && p[0] === $o ? [] : p, h]),
                p = D)
            } else
                m.run()
    }
    ;
    g.allowRecurse = !!e;
    let v;
    i === "sync" ? v = g : i === "post" ? v = ()=>bt(g, a && a.suspense) : (g.pre = !0,
    a && (g.id = a.uid),
    v = ()=>Va(g));
    const m = new ic(u,v);
    e ? n ? g() : p = m.run() : i === "post" ? bt(m.run.bind(m), a && a.suspense) : m.run();
    const _ = ()=>{
        m.stop(),
        a && a.scope && Zl(a.scope.effects, m)
    }
    ;
    return d && d.push(_),
    _
}
function a0(t, e, n) {
    const r = this.proxy
      , i = Ze(t) ? t.includes(".") ? Hd(r, t) : ()=>r[t] : t.bind(r, r);
    let s;
    ce(e) ? s = e : (s = e.handler,
    n = e);
    const o = Qe;
    jr(this);
    const a = dc(i, s.bind(r), n);
    return o ? jr(o) : Ir(),
    a
}
function Hd(t, e) {
    const n = e.split(".");
    return ()=>{
        let r = t;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Ni(t, e) {
    if (!$e(t) || t.__v_skip || (e = e || new Set,
    e.has(t)))
        return t;
    if (e.add(t),
    ht(t))
        Ni(t.value, e);
    else if (ue(t))
        for (let n = 0; n < t.length; n++)
            Ni(t[n], e);
    else if (ld(t) || Xi(t))
        t.forEach(n=>{
            Ni(n, e)
        }
        );
    else if (fd(t))
        for (const n in t)
            Ni(t[n], e);
    return t
}
function u0() {
    const t = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Si(()=>{
        t.isMounted = !0
    }
    ),
    xs(()=>{
        t.isUnmounting = !0
    }
    ),
    t
}
const un = [Function, Array]
  , l0 = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: un,
        onEnter: un,
        onAfterEnter: un,
        onEnterCancelled: un,
        onBeforeLeave: un,
        onLeave: un,
        onAfterLeave: un,
        onLeaveCancelled: un,
        onBeforeAppear: un,
        onAppear: un,
        onAfterAppear: un,
        onAppearCancelled: un
    },
    setup(t, {slots: e}) {
        const n = Yr()
          , r = u0();
        let i;
        return ()=>{
            const s = e.default && Ud(e.default(), !0);
            if (!s || !s.length)
                return;
            let o = s[0];
            if (s.length > 1) {
                for (const g of s)
                    if (g.type !== rn) {
                        o = g;
                        break
                    }
            }
            const a = Fe(t)
              , {mode: u} = a;
            if (r.isLeaving)
                return du(o);
            const l = cf(o);
            if (!l)
                return du(o);
            const c = nl(l, a, r, n);
            ba(l, c);
            const f = n.subTree
              , h = f && cf(f);
            let d = !1;
            const {getTransitionKey: p} = l.type;
            if (p) {
                const g = p();
                i === void 0 ? i = g : g !== i && (i = g,
                d = !0)
            }
            if (h && h.type !== rn && (!Rn(l, h) || d)) {
                const g = nl(h, a, r, n);
                if (ba(h, g),
                u === "out-in")
                    return r.isLeaving = !0,
                    g.afterLeave = ()=>{
                        r.isLeaving = !1,
                        n.update.active !== !1 && n.update()
                    }
                    ,
                    du(o);
                u === "in-out" && l.type !== rn && (g.delayLeave = (v,m,_)=>{
                    const D = jd(r, h);
                    D[String(h.key)] = h,
                    v._leaveCb = ()=>{
                        m(),
                        v._leaveCb = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = _
                }
                )
            }
            return o
        }
    }
}
  , zd = l0;
function jd(t, e) {
    const {leavingVNodes: n} = t;
    let r = n.get(e.type);
    return r || (r = Object.create(null),
    n.set(e.type, r)),
    r
}
function nl(t, e, n, r) {
    const {appear: i, mode: s, persisted: o=!1, onBeforeEnter: a, onEnter: u, onAfterEnter: l, onEnterCancelled: c, onBeforeLeave: f, onLeave: h, onAfterLeave: d, onLeaveCancelled: p, onBeforeAppear: g, onAppear: v, onAfterAppear: m, onAppearCancelled: _} = e
      , D = String(t.key)
      , b = jd(n, t)
      , C = (x,R)=>{
        x && mn(x, r, 9, R)
    }
      , S = (x,R)=>{
        const A = R[1];
        C(x, R),
        ue(x) ? x.every(I=>I.length <= 1) && A() : x.length <= 1 && A()
    }
      , T = {
        mode: s,
        persisted: o,
        beforeEnter(x) {
            let R = a;
            if (!n.isMounted)
                if (i)
                    R = g || a;
                else
                    return;
            x._leaveCb && x._leaveCb(!0);
            const A = b[D];
            A && Rn(t, A) && A.el._leaveCb && A.el._leaveCb(),
            C(R, [x])
        },
        enter(x) {
            let R = u
              , A = l
              , I = c;
            if (!n.isMounted)
                if (i)
                    R = v || u,
                    A = m || l,
                    I = _ || c;
                else
                    return;
            let O = !1;
            const X = x._enterCb = H=>{
                O || (O = !0,
                H ? C(I, [x]) : C(A, [x]),
                T.delayedLeave && T.delayedLeave(),
                x._enterCb = void 0)
            }
            ;
            R ? S(R, [x, X]) : X()
        },
        leave(x, R) {
            const A = String(t.key);
            if (x._enterCb && x._enterCb(!0),
            n.isUnmounting)
                return R();
            C(f, [x]);
            let I = !1;
            const O = x._leaveCb = X=>{
                I || (I = !0,
                R(),
                X ? C(p, [x]) : C(d, [x]),
                x._leaveCb = void 0,
                b[A] === t && delete b[A])
            }
            ;
            b[A] = t,
            h ? S(h, [x, O]) : O()
        },
        clone(x) {
            return nl(x, e, n, r)
        }
    };
    return T
}
function du(t) {
    if (Fo(t))
        return t = pr(t),
        t.children = null,
        t
}
function cf(t) {
    return Fo(t) ? t.children ? t.children[0] : void 0 : t
}
function ba(t, e) {
    t.shapeFlag & 6 && t.component ? ba(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent),
    t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}
function Ud(t, e=!1, n) {
    let r = []
      , i = 0;
    for (let s = 0; s < t.length; s++) {
        let o = t[s];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
        o.type === qt ? (o.patchFlag & 128 && i++,
        r = r.concat(Ud(o.children, e, a))) : (e || o.type !== rn) && r.push(a != null ? pr(o, {
            key: a
        }) : o)
    }
    if (i > 1)
        for (let s = 0; s < r.length; s++)
            r[s].patchFlag = -2;
    return r
}
function Nt(t) {
    return ce(t) ? {
        setup: t,
        name: t.name
    } : t
}
const hi = t=>!!t.type.__asyncLoader;
function c0(t) {
    ce(t) && (t = {
        loader: t
    });
    const {loader: e, loadingComponent: n, errorComponent: r, delay: i=200, timeout: s, suspensible: o=!0, onError: a} = t;
    let u = null, l, c = 0;
    const f = ()=>(c++,
    u = null,
    h())
      , h = ()=>{
        let d;
        return u || (d = u = e().catch(p=>{
            if (p = p instanceof Error ? p : new Error(String(p)),
            a)
                return new Promise((g,v)=>{
                    a(p, ()=>g(f()), ()=>v(p), c + 1)
                }
                );
            throw p
        }
        ).then(p=>d !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default),
        l = p,
        p)))
    }
    ;
    return Nt({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        get __asyncResolved() {
            return l
        },
        setup() {
            const d = Qe;
            if (l)
                return ()=>pu(l, d);
            const p = _=>{
                u = null,
                Es(_, d, 13, !r)
            }
            ;
            if (o && d.suspense || cs)
                return h().then(_=>()=>pu(_, d)).catch(_=>(p(_),
                ()=>r ? We(r, {
                    error: _
                }) : null));
            const g = Yt(!1)
              , v = Yt()
              , m = Yt(!!i);
            return i && setTimeout(()=>{
                m.value = !1
            }
            , i),
            s != null && setTimeout(()=>{
                if (!g.value && !v.value) {
                    const _ = new Error(`Async component timed out after ${s}ms.`);
                    p(_),
                    v.value = _
                }
            }
            , s),
            h().then(()=>{
                g.value = !0,
                d.parent && Fo(d.parent.vnode) && Va(d.parent.update)
            }
            ).catch(_=>{
                p(_),
                v.value = _
            }
            ),
            ()=>{
                if (g.value && l)
                    return pu(l, d);
                if (v.value && r)
                    return We(r, {
                        error: v.value
                    });
                if (n && !m.value)
                    return We(n)
            }
        }
    })
}
function pu(t, e) {
    const {ref: n, props: r, children: i, ce: s} = e.vnode
      , o = We(t, r, i);
    return o.ref = n,
    o.ce = s,
    delete e.vnode.ce,
    o
}
const Fo = t=>t.type.__isKeepAlive
  , f0 = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(t, {slots: e}) {
        const n = Yr()
          , r = n.ctx;
        if (!r.renderer)
            return ()=>{
                const _ = e.default && e.default();
                return _ && _.length === 1 ? _[0] : _
            }
            ;
        const i = new Map
          , s = new Set;
        let o = null;
        const a = n.suspense
          , {renderer: {p: u, m: l, um: c, o: {createElement: f}}} = r
          , h = f("div");
        r.activate = (_,D,b,C,S)=>{
            const T = _.component;
            l(_, D, b, 0, a),
            u(T.vnode, _, D, b, T, a, C, _.slotScopeIds, S),
            bt(()=>{
                T.isDeactivated = !1,
                T.a && Ws(T.a);
                const x = _.props && _.props.onVnodeMounted;
                x && Ut(x, T.parent, _)
            }
            , a)
        }
        ,
        r.deactivate = _=>{
            const D = _.component;
            l(_, h, null, 1, a),
            bt(()=>{
                D.da && Ws(D.da);
                const b = _.props && _.props.onVnodeUnmounted;
                b && Ut(b, D.parent, _),
                D.isDeactivated = !0
            }
            , a)
        }
        ;
        function d(_) {
            gu(_),
            c(_, n, a, !0)
        }
        function p(_) {
            i.forEach((D,b)=>{
                const C = ul(D.type);
                C && (!_ || !_(C)) && g(b)
            }
            )
        }
        function g(_) {
            const D = i.get(_);
            !o || !Rn(D, o) ? d(D) : o && gu(o),
            i.delete(_),
            s.delete(_)
        }
        hr(()=>[t.include, t.exclude], ([_,D])=>{
            _ && p(b=>Is(_, b)),
            D && p(b=>!Is(D, b))
        }
        , {
            flush: "post",
            deep: !0
        });
        let v = null;
        const m = ()=>{
            v != null && i.set(v, _u(n.subTree))
        }
        ;
        return Si(m),
        Kd(m),
        xs(()=>{
            i.forEach(_=>{
                const {subTree: D, suspense: b} = n
                  , C = _u(D);
                if (_.type === C.type && _.key === C.key) {
                    gu(C);
                    const S = C.component.da;
                    S && bt(S, b);
                    return
                }
                d(_)
            }
            )
        }
        ),
        ()=>{
            if (v = null,
            !e.default)
                return null;
            const _ = e.default()
              , D = _[0];
            if (_.length > 1)
                return o = null,
                _;
            if (!ls(D) || !(D.shapeFlag & 4) && !(D.shapeFlag & 128))
                return o = null,
                D;
            let b = _u(D);
            const C = b.type
              , S = ul(hi(b) ? b.type.__asyncResolved || {} : C)
              , {include: T, exclude: x, max: R} = t;
            if (T && (!S || !Is(T, S)) || x && S && Is(x, S))
                return o = b,
                D;
            const A = b.key == null ? C : b.key
              , I = i.get(A);
            return b.el && (b = pr(b),
            D.shapeFlag & 128 && (D.ssContent = b)),
            v = A,
            I ? (b.el = I.el,
            b.component = I.component,
            b.transition && ba(b, b.transition),
            b.shapeFlag |= 512,
            s.delete(A),
            s.add(A)) : (s.add(A),
            R && s.size > parseInt(R, 10) && g(s.values().next().value)),
            b.shapeFlag |= 256,
            o = b,
            Id(D.type) ? D : b
        }
    }
}
  , h0 = f0;
function Is(t, e) {
    return ue(t) ? t.some(n=>Is(n, e)) : Ze(t) ? t.split(",").includes(e) : im(t) ? t.test(e) : !1
}
function Wd(t, e) {
    Vd(t, "a", e)
}
function qd(t, e) {
    Vd(t, "da", e)
}
function Vd(t, e, n=Qe) {
    const r = t.__wdc || (t.__wdc = ()=>{
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return t()
    }
    );
    if (Xa(e, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            Fo(i.parent.vnode) && d0(r, e, n, i),
            i = i.parent
    }
}
function d0(t, e, n, r) {
    const i = Xa(e, t, r, !0);
    os(()=>{
        Zl(r[e], i)
    }
    , n)
}
function gu(t) {
    t.shapeFlag &= -257,
    t.shapeFlag &= -513
}
function _u(t) {
    return t.shapeFlag & 128 ? t.ssContent : t
}
function Xa(t, e, n=Qe, r=!1) {
    if (n) {
        const i = n[t] || (n[t] = [])
          , s = e.__weh || (e.__weh = (...o)=>{
            if (n.isUnmounted)
                return;
            ws(),
            jr(n);
            const a = mn(e, n, t, o);
            return Ir(),
            Cs(),
            a
        }
        );
        return r ? i.unshift(s) : i.push(s),
        s
    }
}
const mr = t=>(e,n=Qe)=>(!cs || t === "sp") && Xa(t, (...r)=>e(...r), n)
  , Yd = mr("bm")
  , Si = mr("m")
  , p0 = mr("bu")
  , Kd = mr("u")
  , xs = mr("bum")
  , os = mr("um")
  , g0 = mr("sp")
  , _0 = mr("rtg")
  , m0 = mr("rtc");
function Xd(t, e=Qe) {
    Xa("ec", t, e)
}
function jn(t, e, n, r) {
    const i = t.dirs
      , s = e && e.dirs;
    for (let o = 0; o < i.length; o++) {
        const a = i[o];
        s && (a.oldValue = s[o].value);
        let u = a.dir[r];
        u && (ws(),
        mn(u, n, 8, [t.el, a, t, e]),
        Cs())
    }
}
const pc = "components";
function y0(t, e) {
    return Qd(pc, t, !0, e) || t
}
const Gd = Symbol();
function D0(t) {
    return Ze(t) ? Qd(pc, t, !1) || t : t || Gd
}
function Qd(t, e, n=!0, r=!1) {
    const i = Ft || Qe;
    if (i) {
        const s = i.type;
        if (t === pc) {
            const a = ul(s, !1);
            if (a && (a === e || a === Gn(e) || a === Wa(Gn(e))))
                return s
        }
        const o = ff(i[t] || s[t], e) || ff(i.appContext[t], e);
        return !o && r ? s : o
    }
}
function ff(t, e) {
    return t && (t[e] || t[Gn(e)] || t[Wa(Gn(e))])
}
function RE(t, e, n, r) {
    let i;
    const s = n && n[r];
    if (ue(t) || Ze(t)) {
        i = new Array(t.length);
        for (let o = 0, a = t.length; o < a; o++)
            i[o] = e(t[o], o, void 0, s && s[o])
    } else if (typeof t == "number") {
        i = new Array(t);
        for (let o = 0; o < t; o++)
            i[o] = e(o + 1, o, void 0, s && s[o])
    } else if ($e(t))
        if (t[Symbol.iterator])
            i = Array.from(t, (o,a)=>e(o, a, void 0, s && s[a]));
        else {
            const o = Object.keys(t);
            i = new Array(o.length);
            for (let a = 0, u = o.length; a < u; a++) {
                const l = o[a];
                i[a] = e(t[l], l, a, s && s[a])
            }
        }
    else
        i = [];
    return n && (n[r] = i),
    i
}
function PE(t, e, n={}, r, i) {
    if (Ft.isCE || Ft.parent && hi(Ft.parent) && Ft.parent.isCE)
        return e !== "default" && (n.name = e),
        We("slot", n, r && r());
    let s = t[e];
    s && s._c && (s._d = !1),
    Sr();
    const o = s && Jd(s(n))
      , a = Hi(qt, {
        key: n.key || o && o.key || `_${e}`
    }, o || (r ? r() : []), o && t._ === 1 ? 64 : -2);
    return !i && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    a
}
function Jd(t) {
    return t.some(e=>ls(e) ? !(e.type === rn || e.type === qt && !Jd(e.children)) : !0) ? t : null
}
const rl = t=>t ? dp(t) ? yc(t) || t.proxy : rl(t.parent) : null
  , qs = Et(Object.create(null), {
    $: t=>t,
    $el: t=>t.vnode.el,
    $data: t=>t.data,
    $props: t=>t.props,
    $attrs: t=>t.attrs,
    $slots: t=>t.slots,
    $refs: t=>t.refs,
    $parent: t=>rl(t.parent),
    $root: t=>rl(t.root),
    $emit: t=>t.emit,
    $options: t=>gc(t),
    $forceUpdate: t=>t.f || (t.f = ()=>Va(t.update)),
    $nextTick: t=>t.n || (t.n = Ti.bind(t.proxy)),
    $watch: t=>a0.bind(t)
})
  , mu = (t,e)=>t !== ze && !t.__isScriptSetup && Se(t, e)
  , v0 = {
    get({_: t}, e) {
        const {ctx: n, setupState: r, data: i, props: s, accessCache: o, type: a, appContext: u} = t;
        let l;
        if (e[0] !== "$") {
            const d = o[e];
            if (d !== void 0)
                switch (d) {
                case 1:
                    return r[e];
                case 2:
                    return i[e];
                case 4:
                    return n[e];
                case 3:
                    return s[e]
                }
            else {
                if (mu(r, e))
                    return o[e] = 1,
                    r[e];
                if (i !== ze && Se(i, e))
                    return o[e] = 2,
                    i[e];
                if ((l = t.propsOptions[0]) && Se(l, e))
                    return o[e] = 3,
                    s[e];
                if (n !== ze && Se(n, e))
                    return o[e] = 4,
                    n[e];
                il && (o[e] = 0)
            }
        }
        const c = qs[e];
        let f, h;
        if (c)
            return e === "$attrs" && Qt(t, "get", e),
            c(t);
        if ((f = a.__cssModules) && (f = f[e]))
            return f;
        if (n !== ze && Se(n, e))
            return o[e] = 4,
            n[e];
        if (h = u.config.globalProperties,
        Se(h, e))
            return h[e]
    },
    set({_: t}, e, n) {
        const {data: r, setupState: i, ctx: s} = t;
        return mu(i, e) ? (i[e] = n,
        !0) : r !== ze && Se(r, e) ? (r[e] = n,
        !0) : Se(t.props, e) || e[0] === "$" && e.slice(1)in t ? !1 : (s[e] = n,
        !0)
    },
    has({_: {data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s}}, o) {
        let a;
        return !!n[o] || t !== ze && Se(t, o) || mu(e, o) || (a = s[0]) && Se(a, o) || Se(r, o) || Se(qs, o) || Se(i.config.globalProperties, o)
    },
    defineProperty(t, e, n) {
        return n.get != null ? t._.accessCache[e] = 0 : Se(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
    }
};
let il = !0;
function b0(t) {
    const e = gc(t)
      , n = t.proxy
      , r = t.ctx;
    il = !1,
    e.beforeCreate && hf(e.beforeCreate, t, "bc");
    const {data: i, computed: s, methods: o, watch: a, provide: u, inject: l, created: c, beforeMount: f, mounted: h, beforeUpdate: d, updated: p, activated: g, deactivated: v, beforeDestroy: m, beforeUnmount: _, destroyed: D, unmounted: b, render: C, renderTracked: S, renderTriggered: T, errorCaptured: x, serverPrefetch: R, expose: A, inheritAttrs: I, components: O, directives: X, filters: H} = e;
    if (l && w0(l, r, null, t.appContext.config.unwrapInjectedRef),
    o)
        for (const V in o) {
            const Y = o[V];
            ce(Y) && (r[V] = Y.bind(n))
        }
    if (i) {
        const V = i.call(n, n);
        $e(V) && (t.data = On(V))
    }
    if (il = !0,
    s)
        for (const V in s) {
            const Y = s[V]
              , L = ce(Y) ? Y.bind(n, n) : ce(Y.get) ? Y.get.bind(n, n) : kn
              , F = !ce(Y) && ce(Y.set) ? Y.set.bind(n) : kn
              , de = Pe({
                get: L,
                set: F
            });
            Object.defineProperty(r, V, {
                enumerable: !0,
                configurable: !0,
                get: ()=>de.value,
                set: ge=>de.value = ge
            })
        }
    if (a)
        for (const V in a)
            Zd(a[V], r, n, V);
    if (u) {
        const V = ce(u) ? u.call(n) : u;
        Reflect.ownKeys(V).forEach(Y=>{
            Zi(Y, V[Y])
        }
        )
    }
    c && hf(c, t, "c");
    function $(V, Y) {
        ue(Y) ? Y.forEach(L=>V(L.bind(n))) : Y && V(Y.bind(n))
    }
    if ($(Yd, f),
    $(Si, h),
    $(p0, d),
    $(Kd, p),
    $(Wd, g),
    $(qd, v),
    $(Xd, x),
    $(m0, S),
    $(_0, T),
    $(xs, _),
    $(os, b),
    $(g0, R),
    ue(A))
        if (A.length) {
            const V = t.exposed || (t.exposed = {});
            A.forEach(Y=>{
                Object.defineProperty(V, Y, {
                    get: ()=>n[Y],
                    set: L=>n[Y] = L
                })
            }
            )
        } else
            t.exposed || (t.exposed = {});
    C && t.render === kn && (t.render = C),
    I != null && (t.inheritAttrs = I),
    O && (t.components = O),
    X && (t.directives = X)
}
function w0(t, e, n=kn, r=!1) {
    ue(t) && (t = sl(t));
    for (const i in t) {
        const s = t[i];
        let o;
        $e(s) ? "default"in s ? o = $t(s.from || i, s.default, !0) : o = $t(s.from || i) : o = $t(s),
        ht(o) && r ? Object.defineProperty(e, i, {
            enumerable: !0,
            configurable: !0,
            get: ()=>o.value,
            set: a=>o.value = a
        }) : e[i] = o
    }
}
function hf(t, e, n) {
    mn(ue(t) ? t.map(r=>r.bind(e.proxy)) : t.bind(e.proxy), e, n)
}
function Zd(t, e, n, r) {
    const i = r.includes(".") ? Hd(n, r) : ()=>n[r];
    if (Ze(t)) {
        const s = e[t];
        ce(s) && hr(i, s)
    } else if (ce(t))
        hr(i, t.bind(n));
    else if ($e(t))
        if (ue(t))
            t.forEach(s=>Zd(s, e, n, r));
        else {
            const s = ce(t.handler) ? t.handler.bind(n) : e[t.handler];
            ce(s) && hr(i, s, t)
        }
}
function gc(t) {
    const e = t.type
      , {mixins: n, extends: r} = e
      , {mixins: i, optionsCache: s, config: {optionMergeStrategies: o}} = t.appContext
      , a = s.get(e);
    let u;
    return a ? u = a : !i.length && !n && !r ? u = e : (u = {},
    i.length && i.forEach(l=>wa(u, l, o, !0)),
    wa(u, e, o)),
    $e(e) && s.set(e, u),
    u
}
function wa(t, e, n, r=!1) {
    const {mixins: i, extends: s} = e;
    s && wa(t, s, n, !0),
    i && i.forEach(o=>wa(t, o, n, !0));
    for (const o in e)
        if (!(r && o === "expose")) {
            const a = C0[o] || n && n[o];
            t[o] = a ? a(t[o], e[o]) : e[o]
        }
    return t
}
const C0 = {
    data: df,
    props: ri,
    emits: ri,
    methods: ri,
    computed: ri,
    beforeCreate: Ot,
    created: Ot,
    beforeMount: Ot,
    mounted: Ot,
    beforeUpdate: Ot,
    updated: Ot,
    beforeDestroy: Ot,
    beforeUnmount: Ot,
    destroyed: Ot,
    unmounted: Ot,
    activated: Ot,
    deactivated: Ot,
    errorCaptured: Ot,
    serverPrefetch: Ot,
    components: ri,
    directives: ri,
    watch: x0,
    provide: df,
    inject: E0
};
function df(t, e) {
    return e ? t ? function() {
        return Et(ce(t) ? t.call(this, this) : t, ce(e) ? e.call(this, this) : e)
    }
    : e : t
}
function E0(t, e) {
    return ri(sl(t), sl(e))
}
function sl(t) {
    if (ue(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++)
            e[t[n]] = t[n];
        return e
    }
    return t
}
function Ot(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}
function ri(t, e) {
    return t ? Et(Et(Object.create(null), t), e) : e
}
function x0(t, e) {
    if (!t)
        return e;
    if (!e)
        return t;
    const n = Et(Object.create(null), t);
    for (const r in e)
        n[r] = Ot(t[r], e[r]);
    return n
}
function T0(t, e, n, r=!1) {
    const i = {}
      , s = {};
    ga(s, Ga, 1),
    t.propsDefaults = Object.create(null),
    ep(t, e, i, s);
    for (const o in t.propsOptions[0])
        o in i || (i[o] = void 0);
    n ? t.props = r ? i : Hm(i) : t.type.props ? t.props = i : t.props = s,
    t.attrs = s
}
function S0(t, e, n, r) {
    const {props: i, attrs: s, vnode: {patchFlag: o}} = t
      , a = Fe(i)
      , [u] = t.propsOptions;
    let l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = t.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (Ya(t.emitsOptions, h))
                    continue;
                const d = e[h];
                if (u)
                    if (Se(s, h))
                        d !== s[h] && (s[h] = d,
                        l = !0);
                    else {
                        const p = Gn(h);
                        i[p] = ol(u, a, p, d, t, !1)
                    }
                else
                    d !== s[h] && (s[h] = d,
                    l = !0)
            }
        }
    } else {
        ep(t, e, i, s) && (l = !0);
        let c;
        for (const f in a)
            (!e || !Se(e, f) && ((c = bs(f)) === f || !Se(e, c))) && (u ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = ol(u, a, f, void 0, t, !0)) : delete i[f]);
        if (s !== a)
            for (const f in s)
                (!e || !Se(e, f)) && (delete s[f],
                l = !0)
    }
    l && dr(t, "set", "$attrs")
}
function ep(t, e, n, r) {
    const [i,s] = t.propsOptions;
    let o = !1, a;
    if (e)
        for (let u in e) {
            if (Us(u))
                continue;
            const l = e[u];
            let c;
            i && Se(i, c = Gn(u)) ? !s || !s.includes(c) ? n[c] = l : (a || (a = {}))[c] = l : Ya(t.emitsOptions, u) || (!(u in r) || l !== r[u]) && (r[u] = l,
            o = !0)
        }
    if (s) {
        const u = Fe(n)
          , l = a || ze;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = ol(i, u, f, l[f], t, !Se(l, f))
        }
    }
    return o
}
function ol(t, e, n, r, i, s) {
    const o = t[n];
    if (o != null) {
        const a = Se(o, "default");
        if (a && r === void 0) {
            const u = o.default;
            if (o.type !== Function && ce(u)) {
                const {propsDefaults: l} = i;
                n in l ? r = l[n] : (jr(i),
                r = l[n] = u.call(null, e),
                Ir())
            } else
                r = u
        }
        o[0] && (s && !a ? r = !1 : o[1] && (r === "" || r === bs(n)) && (r = !0))
    }
    return r
}
function tp(t, e, n=!1) {
    const r = e.propsCache
      , i = r.get(t);
    if (i)
        return i;
    const s = t.props
      , o = {}
      , a = [];
    let u = !1;
    if (!ce(t)) {
        const c = f=>{
            u = !0;
            const [h,d] = tp(f, e, !0);
            Et(o, h),
            d && a.push(...d)
        }
        ;
        !n && e.mixins.length && e.mixins.forEach(c),
        t.extends && c(t.extends),
        t.mixins && t.mixins.forEach(c)
    }
    if (!s && !u)
        return $e(t) && r.set(t, Ki),
        Ki;
    if (ue(s))
        for (let c = 0; c < s.length; c++) {
            const f = Gn(s[c]);
            pf(f) && (o[f] = ze)
        }
    else if (s)
        for (const c in s) {
            const f = Gn(c);
            if (pf(f)) {
                const h = s[c]
                  , d = o[f] = ue(h) || ce(h) ? {
                    type: h
                } : Object.assign({}, h);
                if (d) {
                    const p = mf(Boolean, d.type)
                      , g = mf(String, d.type);
                    d[0] = p > -1,
                    d[1] = g < 0 || p < g,
                    (p > -1 || Se(d, "default")) && a.push(f)
                }
            }
        }
    const l = [o, a];
    return $e(t) && r.set(t, l),
    l
}
function pf(t) {
    return t[0] !== "$"
}
function gf(t) {
    const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
    return e ? e[2] : t === null ? "null" : ""
}
function _f(t, e) {
    return gf(t) === gf(e)
}
function mf(t, e) {
    return ue(e) ? e.findIndex(n=>_f(n, t)) : ce(e) && _f(e, t) ? 0 : -1
}
const np = t=>t[0] === "_" || t === "$stable"
  , _c = t=>ue(t) ? t.map(fn) : [fn(t)]
  , F0 = (t,e,n)=>{
    if (e._n)
        return e;
    const r = va((...i)=>_c(e(...i)), n);
    return r._c = !1,
    r
}
  , rp = (t,e,n)=>{
    const r = t._ctx;
    for (const i in t) {
        if (np(i))
            continue;
        const s = t[i];
        if (ce(s))
            e[i] = F0(i, s, r);
        else if (s != null) {
            const o = _c(s);
            e[i] = ()=>o
        }
    }
}
  , ip = (t,e)=>{
    const n = _c(e);
    t.slots.default = ()=>n
}
  , R0 = (t,e)=>{
    if (t.vnode.shapeFlag & 32) {
        const n = e._;
        n ? (t.slots = Fe(e),
        ga(e, "_", n)) : rp(e, t.slots = {})
    } else
        t.slots = {},
        e && ip(t, e);
    ga(t.slots, Ga, 1)
}
  , P0 = (t,e,n)=>{
    const {vnode: r, slots: i} = t;
    let s = !0
      , o = ze;
    if (r.shapeFlag & 32) {
        const a = e._;
        a ? n && a === 1 ? s = !1 : (Et(i, e),
        !n && a === 1 && delete i._) : (s = !e.$stable,
        rp(e, i)),
        o = e
    } else
        e && (ip(t, e),
        o = {
            default: 1
        });
    if (s)
        for (const a in i)
            !np(a) && !(a in o) && delete i[a]
}
;
function sp() {
    return {
        app: null,
        config: {
            isNativeTag: tm,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let k0 = 0;
function A0(t, e) {
    return function(r, i=null) {
        ce(r) || (r = Object.assign({}, r)),
        i != null && !$e(i) && (i = null);
        const s = sp()
          , o = new Set;
        let a = !1;
        const u = s.app = {
            _uid: k0++,
            _component: r,
            _props: i,
            _container: null,
            _context: s,
            _instance: null,
            version: Dc,
            get config() {
                return s.config
            },
            set config(l) {},
            use(l, ...c) {
                return o.has(l) || (l && ce(l.install) ? (o.add(l),
                l.install(u, ...c)) : ce(l) && (o.add(l),
                l(u, ...c))),
                u
            },
            mixin(l) {
                return s.mixins.includes(l) || s.mixins.push(l),
                u
            },
            component(l, c) {
                return c ? (s.components[l] = c,
                u) : s.components[l]
            },
            directive(l, c) {
                return c ? (s.directives[l] = c,
                u) : s.directives[l]
            },
            mount(l, c, f) {
                if (!a) {
                    const h = We(r, i);
                    return h.appContext = s,
                    c && e ? e(h, l) : t(h, l, f),
                    a = !0,
                    u._container = l,
                    l.__vue_app__ = u,
                    yc(h.component) || h.component.proxy
                }
            },
            unmount() {
                a && (t(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(l, c) {
                return s.provides[l] = c,
                u
            }
        };
        return u
    }
}
function Ca(t, e, n, r, i=!1) {
    if (ue(t)) {
        t.forEach((h,d)=>Ca(h, e && (ue(e) ? e[d] : e), n, r, i));
        return
    }
    if (hi(r) && !i)
        return;
    const s = r.shapeFlag & 4 ? yc(r.component) || r.component.proxy : r.el
      , o = i ? null : s
      , {i: a, r: u} = t
      , l = e && e.r
      , c = a.refs === ze ? a.refs = {} : a.refs
      , f = a.setupState;
    if (l != null && l !== u && (Ze(l) ? (c[l] = null,
    Se(f, l) && (f[l] = null)) : ht(l) && (l.value = null)),
    ce(u))
        Br(u, a, 12, [o, c]);
    else {
        const h = Ze(u)
          , d = ht(u);
        if (h || d) {
            const p = ()=>{
                if (t.f) {
                    const g = h ? Se(f, u) ? f[u] : c[u] : u.value;
                    i ? ue(g) && Zl(g, s) : ue(g) ? g.includes(s) || g.push(s) : h ? (c[u] = [s],
                    Se(f, u) && (f[u] = c[u])) : (u.value = [s],
                    t.k && (c[t.k] = u.value))
                } else
                    h ? (c[u] = o,
                    Se(f, u) && (f[u] = o)) : d && (u.value = o,
                    t.k && (c[t.k] = o))
            }
            ;
            o ? (p.id = -1,
            bt(p, n)) : p()
        }
    }
}
let vr = !1;
const No = t=>/svg/.test(t.namespaceURI) && t.tagName !== "foreignObject"
  , Ho = t=>t.nodeType === 8;
function O0(t) {
    const {mt: e, p: n, o: {patchProp: r, createText: i, nextSibling: s, parentNode: o, remove: a, insert: u, createComment: l}} = t
      , c = (m,_)=>{
        if (!_.hasChildNodes()) {
            n(null, m, _),
            ya(),
            _._vnode = m;
            return
        }
        vr = !1,
        f(_.firstChild, m, null, null, null),
        ya(),
        _._vnode = m,
        vr && console.error("Hydration completed but contains mismatches.")
    }
      , f = (m,_,D,b,C,S=!1)=>{
        const T = Ho(m) && m.data === "["
          , x = ()=>g(m, _, D, b, C, T)
          , {type: R, ref: A, shapeFlag: I, patchFlag: O} = _;
        let X = m.nodeType;
        _.el = m,
        O === -2 && (S = !1,
        _.dynamicChildren = null);
        let H = null;
        switch (R) {
        case as:
            X !== 3 ? _.children === "" ? (u(_.el = i(""), o(m), m),
            H = m) : H = x() : (m.data !== _.children && (vr = !0,
            m.data = _.children),
            H = s(m));
            break;
        case rn:
            X !== 8 || T ? H = x() : H = s(m);
            break;
        case Vs:
            if (T && (m = s(m),
            X = m.nodeType),
            X === 1 || X === 3) {
                H = m;
                const J = !_.children.length;
                for (let $ = 0; $ < _.staticCount; $++)
                    J && (_.children += H.nodeType === 1 ? H.outerHTML : H.data),
                    $ === _.staticCount - 1 && (_.anchor = H),
                    H = s(H);
                return T ? s(H) : H
            } else
                x();
            break;
        case qt:
            T ? H = p(m, _, D, b, C, S) : H = x();
            break;
        default:
            if (I & 1)
                X !== 1 || _.type.toLowerCase() !== m.tagName.toLowerCase() ? H = x() : H = h(m, _, D, b, C, S);
            else if (I & 6) {
                _.slotScopeIds = C;
                const J = o(m);
                if (e(_, J, null, D, b, No(J), S),
                H = T ? v(m) : s(m),
                H && Ho(H) && H.data === "teleport end" && (H = s(H)),
                hi(_)) {
                    let $;
                    T ? ($ = We(qt),
                    $.anchor = H ? H.previousSibling : J.lastChild) : $ = m.nodeType === 3 ? hp("") : We("div"),
                    $.el = m,
                    _.component.subTree = $
                }
            } else
                I & 64 ? X !== 8 ? H = x() : H = _.type.hydrate(m, _, D, b, C, S, t, d) : I & 128 && (H = _.type.hydrate(m, _, D, b, No(o(m)), C, S, t, f))
        }
        return A != null && Ca(A, null, b, _),
        H
    }
      , h = (m,_,D,b,C,S)=>{
        S = S || !!_.dynamicChildren;
        const {type: T, props: x, patchFlag: R, shapeFlag: A, dirs: I} = _
          , O = T === "input" && I || T === "option";
        if (O || R !== -1) {
            if (I && jn(_, null, D, "created"),
            x)
                if (O || !S || R & 48)
                    for (const H in x)
                        (O && H.endsWith("value") || To(H) && !Us(H)) && r(m, H, null, x[H], !1, void 0, D);
                else
                    x.onClick && r(m, "onClick", null, x.onClick, !1, void 0, D);
            let X;
            if ((X = x && x.onVnodeBeforeMount) && Ut(X, D, _),
            I && jn(_, null, D, "beforeMount"),
            ((X = x && x.onVnodeMounted) || I) && Nd(()=>{
                X && Ut(X, D, _),
                I && jn(_, null, D, "mounted")
            }
            , b),
            A & 16 && !(x && (x.innerHTML || x.textContent))) {
                let H = d(m.firstChild, _, m, D, b, C, S);
                for (; H; ) {
                    vr = !0;
                    const J = H;
                    H = H.nextSibling,
                    a(J)
                }
            } else
                A & 8 && m.textContent !== _.children && (vr = !0,
                m.textContent = _.children)
        }
        return m.nextSibling
    }
      , d = (m,_,D,b,C,S,T)=>{
        T = T || !!_.dynamicChildren;
        const x = _.children
          , R = x.length;
        for (let A = 0; A < R; A++) {
            const I = T ? x[A] : x[A] = fn(x[A]);
            if (m)
                m = f(m, I, b, C, S, T);
            else {
                if (I.type === as && !I.children)
                    continue;
                vr = !0,
                n(null, I, D, null, b, C, No(D), S)
            }
        }
        return m
    }
      , p = (m,_,D,b,C,S)=>{
        const {slotScopeIds: T} = _;
        T && (C = C ? C.concat(T) : T);
        const x = o(m)
          , R = d(s(m), _, x, D, b, C, S);
        return R && Ho(R) && R.data === "]" ? s(_.anchor = R) : (vr = !0,
        u(_.anchor = l("]"), x, R),
        R)
    }
      , g = (m,_,D,b,C,S)=>{
        if (vr = !0,
        _.el = null,
        S) {
            const R = v(m);
            for (; ; ) {
                const A = s(m);
                if (A && A !== R)
                    a(A);
                else
                    break
            }
        }
        const T = s(m)
          , x = o(m);
        return a(m),
        n(null, _, x, T, D, b, No(x), C),
        T
    }
      , v = m=>{
        let _ = 0;
        for (; m; )
            if (m = s(m),
            m && Ho(m) && (m.data === "[" && _++,
            m.data === "]")) {
                if (_ === 0)
                    return s(m);
                _--
            }
        return m
    }
    ;
    return [c, f]
}
const bt = Nd;
function M0(t) {
    return op(t)
}
function L0(t) {
    return op(t, O0)
}
function op(t, e) {
    const n = lm();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: s, createElement: o, createText: a, createComment: u, setText: l, setElementText: c, parentNode: f, nextSibling: h, setScopeId: d=kn, insertStaticContent: p} = t
      , g = (y,w,k,M=null,B=null,E=null,K=!1,N=null,W=!!w.dynamicChildren)=>{
        if (y === w)
            return;
        y && !Rn(y, w) && (M = j(y),
        ge(y, B, E, !0),
        y = null),
        w.patchFlag === -2 && (W = !1,
        w.dynamicChildren = null);
        const {type: z, ref: Z, shapeFlag: G} = w;
        switch (z) {
        case as:
            v(y, w, k, M);
            break;
        case rn:
            m(y, w, k, M);
            break;
        case Vs:
            y == null && _(w, k, M, K);
            break;
        case qt:
            O(y, w, k, M, B, E, K, N, W);
            break;
        default:
            G & 1 ? C(y, w, k, M, B, E, K, N, W) : G & 6 ? X(y, w, k, M, B, E, K, N, W) : (G & 64 || G & 128) && z.process(y, w, k, M, B, E, K, N, W, _e)
        }
        Z != null && B && Ca(Z, y && y.ref, E, w || y, !w)
    }
      , v = (y,w,k,M)=>{
        if (y == null)
            r(w.el = a(w.children), k, M);
        else {
            const B = w.el = y.el;
            w.children !== y.children && l(B, w.children)
        }
    }
      , m = (y,w,k,M)=>{
        y == null ? r(w.el = u(w.children || ""), k, M) : w.el = y.el
    }
      , _ = (y,w,k,M)=>{
        [y.el,y.anchor] = p(y.children, w, k, M, y.el, y.anchor)
    }
      , D = ({el: y, anchor: w},k,M)=>{
        let B;
        for (; y && y !== w; )
            B = h(y),
            r(y, k, M),
            y = B;
        r(w, k, M)
    }
      , b = ({el: y, anchor: w})=>{
        let k;
        for (; y && y !== w; )
            k = h(y),
            i(y),
            y = k;
        i(w)
    }
      , C = (y,w,k,M,B,E,K,N,W)=>{
        K = K || w.type === "svg",
        y == null ? S(w, k, M, B, E, K, N, W) : R(y, w, B, E, K, N, W)
    }
      , S = (y,w,k,M,B,E,K,N)=>{
        let W, z;
        const {type: Z, props: G, shapeFlag: ee, transition: ie, dirs: te} = y;
        if (W = y.el = o(y.type, E, G && G.is, G),
        ee & 8 ? c(W, y.children) : ee & 16 && x(y.children, W, null, M, B, E && Z !== "foreignObject", K, N),
        te && jn(y, null, M, "created"),
        T(W, y, y.scopeId, K, M),
        G) {
            for (const le in G)
                le !== "value" && !Us(le) && s(W, le, null, G[le], E, y.children, M, B, U);
            "value"in G && s(W, "value", null, G.value),
            (z = G.onVnodeBeforeMount) && Ut(z, M, y)
        }
        te && jn(y, null, M, "beforeMount");
        const pe = (!B || B && !B.pendingBranch) && ie && !ie.persisted;
        pe && ie.beforeEnter(W),
        r(W, w, k),
        ((z = G && G.onVnodeMounted) || pe || te) && bt(()=>{
            z && Ut(z, M, y),
            pe && ie.enter(W),
            te && jn(y, null, M, "mounted")
        }
        , B)
    }
      , T = (y,w,k,M,B)=>{
        if (k && d(y, k),
        M)
            for (let E = 0; E < M.length; E++)
                d(y, M[E]);
        if (B) {
            let E = B.subTree;
            if (w === E) {
                const K = B.vnode;
                T(y, K, K.scopeId, K.slotScopeIds, B.parent)
            }
        }
    }
      , x = (y,w,k,M,B,E,K,N,W=0)=>{
        for (let z = W; z < y.length; z++) {
            const Z = y[z] = N ? xr(y[z]) : fn(y[z]);
            g(null, Z, w, k, M, B, E, K, N)
        }
    }
      , R = (y,w,k,M,B,E,K)=>{
        const N = w.el = y.el;
        let {patchFlag: W, dynamicChildren: z, dirs: Z} = w;
        W |= y.patchFlag & 16;
        const G = y.props || ze
          , ee = w.props || ze;
        let ie;
        k && Jr(k, !1),
        (ie = ee.onVnodeBeforeUpdate) && Ut(ie, k, w, y),
        Z && jn(w, y, k, "beforeUpdate"),
        k && Jr(k, !0);
        const te = B && w.type !== "foreignObject";
        if (z ? A(y.dynamicChildren, z, N, k, M, te, E) : K || Y(y, w, N, null, k, M, te, E, !1),
        W > 0) {
            if (W & 16)
                I(N, w, G, ee, k, M, B);
            else if (W & 2 && G.class !== ee.class && s(N, "class", null, ee.class, B),
            W & 4 && s(N, "style", G.style, ee.style, B),
            W & 8) {
                const pe = w.dynamicProps;
                for (let le = 0; le < pe.length; le++) {
                    const Be = pe[le]
                      , Ae = G[Be]
                      , yt = ee[Be];
                    (yt !== Ae || Be === "value") && s(N, Be, Ae, yt, B, y.children, k, M, U)
                }
            }
            W & 1 && y.children !== w.children && c(N, w.children)
        } else
            !K && z == null && I(N, w, G, ee, k, M, B);
        ((ie = ee.onVnodeUpdated) || Z) && bt(()=>{
            ie && Ut(ie, k, w, y),
            Z && jn(w, y, k, "updated")
        }
        , M)
    }
      , A = (y,w,k,M,B,E,K)=>{
        for (let N = 0; N < w.length; N++) {
            const W = y[N]
              , z = w[N]
              , Z = W.el && (W.type === qt || !Rn(W, z) || W.shapeFlag & 70) ? f(W.el) : k;
            g(W, z, Z, null, M, B, E, K, !0)
        }
    }
      , I = (y,w,k,M,B,E,K)=>{
        if (k !== M) {
            if (k !== ze)
                for (const N in k)
                    !Us(N) && !(N in M) && s(y, N, k[N], null, K, w.children, B, E, U);
            for (const N in M) {
                if (Us(N))
                    continue;
                const W = M[N]
                  , z = k[N];
                W !== z && N !== "value" && s(y, N, z, W, K, w.children, B, E, U)
            }
            "value"in M && s(y, "value", k.value, M.value)
        }
    }
      , O = (y,w,k,M,B,E,K,N,W)=>{
        const z = w.el = y ? y.el : a("")
          , Z = w.anchor = y ? y.anchor : a("");
        let {patchFlag: G, dynamicChildren: ee, slotScopeIds: ie} = w;
        ie && (N = N ? N.concat(ie) : ie),
        y == null ? (r(z, k, M),
        r(Z, k, M),
        x(w.children, k, Z, B, E, K, N, W)) : G > 0 && G & 64 && ee && y.dynamicChildren ? (A(y.dynamicChildren, ee, k, B, E, K, N),
        (w.key != null || B && w === B.subTree) && ap(y, w, !0)) : Y(y, w, k, Z, B, E, K, N, W)
    }
      , X = (y,w,k,M,B,E,K,N,W)=>{
        w.slotScopeIds = N,
        y == null ? w.shapeFlag & 512 ? B.ctx.activate(w, k, M, K, W) : H(w, k, M, B, E, K, W) : J(y, w, W)
    }
      , H = (y,w,k,M,B,E,K)=>{
        const N = y.component = W0(y, M, B);
        if (Fo(y) && (N.ctx.renderer = _e),
        q0(N),
        N.asyncDep) {
            if (B && B.registerDep(N, $),
            !y.el) {
                const W = N.subTree = We(rn);
                m(null, W, w, k)
            }
            return
        }
        $(N, y, w, k, B, E, K)
    }
      , J = (y,w,k)=>{
        const M = w.component = y.component;
        if (e0(y, w, k))
            if (M.asyncDep && !M.asyncResolved) {
                V(M, w, k);
                return
            } else
                M.next = w,
                Km(M.update),
                M.update();
        else
            w.el = y.el,
            M.vnode = w
    }
      , $ = (y,w,k,M,B,E,K)=>{
        const N = ()=>{
            if (y.isMounted) {
                let {next: Z, bu: G, u: ee, parent: ie, vnode: te} = y, pe = Z, le;
                Jr(y, !1),
                Z ? (Z.el = te.el,
                V(y, Z, K)) : Z = te,
                G && Ws(G),
                (le = Z.props && Z.props.onVnodeBeforeUpdate) && Ut(le, ie, Z, te),
                Jr(y, !0);
                const Be = hu(y)
                  , Ae = y.subTree;
                y.subTree = Be,
                g(Ae, Be, f(Ae.el), j(Ae), y, B, E),
                Z.el = Be.el,
                pe === null && fc(y, Be.el),
                ee && bt(ee, B),
                (le = Z.props && Z.props.onVnodeUpdated) && bt(()=>Ut(le, ie, Z, te), B)
            } else {
                let Z;
                const {el: G, props: ee} = w
                  , {bm: ie, m: te, parent: pe} = y
                  , le = hi(w);
                if (Jr(y, !1),
                ie && Ws(ie),
                !le && (Z = ee && ee.onVnodeBeforeMount) && Ut(Z, pe, w),
                Jr(y, !0),
                G && se) {
                    const Be = ()=>{
                        y.subTree = hu(y),
                        se(G, y.subTree, y, B, null)
                    }
                    ;
                    le ? w.type.__asyncLoader().then(()=>!y.isUnmounted && Be()) : Be()
                } else {
                    const Be = y.subTree = hu(y);
                    g(null, Be, k, M, y, B, E),
                    w.el = Be.el
                }
                if (te && bt(te, B),
                !le && (Z = ee && ee.onVnodeMounted)) {
                    const Be = w;
                    bt(()=>Ut(Z, pe, Be), B)
                }
                (w.shapeFlag & 256 || pe && hi(pe.vnode) && pe.vnode.shapeFlag & 256) && y.a && bt(y.a, B),
                y.isMounted = !0,
                w = k = M = null
            }
        }
          , W = y.effect = new ic(N,()=>Va(z),y.scope)
          , z = y.update = ()=>W.run();
        z.id = y.uid,
        Jr(y, !0),
        z()
    }
      , V = (y,w,k)=>{
        w.component = y;
        const M = y.vnode.props;
        y.vnode = w,
        y.next = null,
        S0(y, w.props, M, k),
        P0(y, w.children, k),
        ws(),
        af(),
        Cs()
    }
      , Y = (y,w,k,M,B,E,K,N,W=!1)=>{
        const z = y && y.children
          , Z = y ? y.shapeFlag : 0
          , G = w.children
          , {patchFlag: ee, shapeFlag: ie} = w;
        if (ee > 0) {
            if (ee & 128) {
                F(z, G, k, M, B, E, K, N, W);
                return
            } else if (ee & 256) {
                L(z, G, k, M, B, E, K, N, W);
                return
            }
        }
        ie & 8 ? (Z & 16 && U(z, B, E),
        G !== z && c(k, G)) : Z & 16 ? ie & 16 ? F(z, G, k, M, B, E, K, N, W) : U(z, B, E, !0) : (Z & 8 && c(k, ""),
        ie & 16 && x(G, k, M, B, E, K, N, W))
    }
      , L = (y,w,k,M,B,E,K,N,W)=>{
        y = y || Ki,
        w = w || Ki;
        const z = y.length
          , Z = w.length
          , G = Math.min(z, Z);
        let ee;
        for (ee = 0; ee < G; ee++) {
            const ie = w[ee] = W ? xr(w[ee]) : fn(w[ee]);
            g(y[ee], ie, k, null, B, E, K, N, W)
        }
        z > Z ? U(y, B, E, !0, !1, G) : x(w, k, M, B, E, K, N, W, G)
    }
      , F = (y,w,k,M,B,E,K,N,W)=>{
        let z = 0;
        const Z = w.length;
        let G = y.length - 1
          , ee = Z - 1;
        for (; z <= G && z <= ee; ) {
            const ie = y[z]
              , te = w[z] = W ? xr(w[z]) : fn(w[z]);
            if (Rn(ie, te))
                g(ie, te, k, null, B, E, K, N, W);
            else
                break;
            z++
        }
        for (; z <= G && z <= ee; ) {
            const ie = y[G]
              , te = w[ee] = W ? xr(w[ee]) : fn(w[ee]);
            if (Rn(ie, te))
                g(ie, te, k, null, B, E, K, N, W);
            else
                break;
            G--,
            ee--
        }
        if (z > G) {
            if (z <= ee) {
                const ie = ee + 1
                  , te = ie < Z ? w[ie].el : M;
                for (; z <= ee; )
                    g(null, w[z] = W ? xr(w[z]) : fn(w[z]), k, te, B, E, K, N, W),
                    z++
            }
        } else if (z > ee)
            for (; z <= G; )
                ge(y[z], B, E, !0),
                z++;
        else {
            const ie = z
              , te = z
              , pe = new Map;
            for (z = te; z <= ee; z++) {
                const tt = w[z] = W ? xr(w[z]) : fn(w[z]);
                tt.key != null && pe.set(tt.key, z)
            }
            let le, Be = 0;
            const Ae = ee - te + 1;
            let yt = !1
              , yr = 0;
            const Ht = new Array(Ae);
            for (z = 0; z < Ae; z++)
                Ht[z] = 0;
            for (z = ie; z <= G; z++) {
                const tt = y[z];
                if (Be >= Ae) {
                    ge(tt, B, E, !0);
                    continue
                }
                let dt;
                if (tt.key != null)
                    dt = pe.get(tt.key);
                else
                    for (le = te; le <= ee; le++)
                        if (Ht[le - te] === 0 && Rn(tt, w[le])) {
                            dt = le;
                            break
                        }
                dt === void 0 ? ge(tt, B, E, !0) : (Ht[dt - te] = z + 1,
                dt >= yr ? yr = dt : yt = !0,
                g(tt, w[dt], k, null, B, E, K, N, W),
                Be++)
            }
            const Jn = yt ? B0(Ht) : Ki;
            for (le = Jn.length - 1,
            z = Ae - 1; z >= 0; z--) {
                const tt = te + z
                  , dt = w[tt]
                  , we = tt + 1 < Z ? w[tt + 1].el : M;
                Ht[z] === 0 ? g(null, dt, k, we, B, E, K, N, W) : yt && (le < 0 || z !== Jn[le] ? de(dt, k, we, 2) : le--)
            }
        }
    }
      , de = (y,w,k,M,B=null)=>{
        const {el: E, type: K, transition: N, children: W, shapeFlag: z} = y;
        if (z & 6) {
            de(y.component.subTree, w, k, M);
            return
        }
        if (z & 128) {
            y.suspense.move(w, k, M);
            return
        }
        if (z & 64) {
            K.move(y, w, k, _e);
            return
        }
        if (K === qt) {
            r(E, w, k);
            for (let G = 0; G < W.length; G++)
                de(W[G], w, k, M);
            r(y.anchor, w, k);
            return
        }
        if (K === Vs) {
            D(y, w, k);
            return
        }
        if (M !== 2 && z & 1 && N)
            if (M === 0)
                N.beforeEnter(E),
                r(E, w, k),
                bt(()=>N.enter(E), B);
            else {
                const {leave: G, delayLeave: ee, afterLeave: ie} = N
                  , te = ()=>r(E, w, k)
                  , pe = ()=>{
                    G(E, ()=>{
                        te(),
                        ie && ie()
                    }
                    )
                }
                ;
                ee ? ee(E, te, pe) : pe()
            }
        else
            r(E, w, k)
    }
      , ge = (y,w,k,M=!1,B=!1)=>{
        const {type: E, props: K, ref: N, children: W, dynamicChildren: z, shapeFlag: Z, patchFlag: G, dirs: ee} = y;
        if (N != null && Ca(N, null, k, y, !0),
        Z & 256) {
            w.ctx.deactivate(y);
            return
        }
        const ie = Z & 1 && ee
          , te = !hi(y);
        let pe;
        if (te && (pe = K && K.onVnodeBeforeUnmount) && Ut(pe, w, y),
        Z & 6)
            P(y.component, k, M);
        else {
            if (Z & 128) {
                y.suspense.unmount(k, M);
                return
            }
            ie && jn(y, null, w, "beforeUnmount"),
            Z & 64 ? y.type.remove(y, w, k, B, _e, M) : z && (E !== qt || G > 0 && G & 64) ? U(z, w, k, !1, !0) : (E === qt && G & 384 || !B && Z & 16) && U(W, w, k),
            M && et(y)
        }
        (te && (pe = K && K.onVnodeUnmounted) || ie) && bt(()=>{
            pe && Ut(pe, w, y),
            ie && jn(y, null, w, "unmounted")
        }
        , k)
    }
      , et = y=>{
        const {type: w, el: k, anchor: M, transition: B} = y;
        if (w === qt) {
            Te(k, M);
            return
        }
        if (w === Vs) {
            b(y);
            return
        }
        const E = ()=>{
            i(k),
            B && !B.persisted && B.afterLeave && B.afterLeave()
        }
        ;
        if (y.shapeFlag & 1 && B && !B.persisted) {
            const {leave: K, delayLeave: N} = B
              , W = ()=>K(k, E);
            N ? N(y.el, E, W) : W()
        } else
            E()
    }
      , Te = (y,w)=>{
        let k;
        for (; y !== w; )
            k = h(y),
            i(y),
            y = k;
        i(w)
    }
      , P = (y,w,k)=>{
        const {bum: M, scope: B, update: E, subTree: K, um: N} = y;
        M && Ws(M),
        B.stop(),
        E && (E.active = !1,
        ge(K, y, w, k)),
        N && bt(N, w),
        bt(()=>{
            y.isUnmounted = !0
        }
        , w),
        w && w.pendingBranch && !w.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === w.pendingId && (w.deps--,
        w.deps === 0 && w.resolve())
    }
      , U = (y,w,k,M=!1,B=!1,E=0)=>{
        for (let K = E; K < y.length; K++)
            ge(y[K], w, k, M, B)
    }
      , j = y=>y.shapeFlag & 6 ? j(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : h(y.anchor || y.el)
      , Q = (y,w,k)=>{
        y == null ? w._vnode && ge(w._vnode, null, null, !0) : g(w._vnode || null, y, w, null, null, null, k),
        af(),
        ya(),
        w._vnode = y
    }
      , _e = {
        p: g,
        um: ge,
        m: de,
        r: et,
        mt: H,
        mc: x,
        pc: Y,
        pbc: A,
        n: j,
        o: t
    };
    let ye, se;
    return e && ([ye,se] = e(_e)),
    {
        render: Q,
        hydrate: ye,
        createApp: A0(Q, ye)
    }
}
function Jr({effect: t, update: e}, n) {
    t.allowRecurse = e.allowRecurse = n
}
function ap(t, e, n=!1) {
    const r = t.children
      , i = e.children;
    if (ue(r) && ue(i))
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            let a = i[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = xr(i[s]),
            a.el = o.el),
            n || ap(o, a)),
            a.type === as && (a.el = o.el)
        }
}
function B0(t) {
    const e = t.slice()
      , n = [0];
    let r, i, s, o, a;
    const u = t.length;
    for (r = 0; r < u; r++) {
        const l = t[r];
        if (l !== 0) {
            if (i = n[n.length - 1],
            t[i] < l) {
                e[r] = i,
                n.push(r);
                continue
            }
            for (s = 0,
            o = n.length - 1; s < o; )
                a = s + o >> 1,
                t[n[a]] < l ? s = a + 1 : o = a;
            l < t[n[s]] && (s > 0 && (e[r] = n[s - 1]),
            n[s] = r)
        }
    }
    for (s = n.length,
    o = n[s - 1]; s-- > 0; )
        n[s] = o,
        o = e[o];
    return n
}
const I0 = t=>t.__isTeleport
  , qt = Symbol(void 0)
  , as = Symbol(void 0)
  , rn = Symbol(void 0)
  , Vs = Symbol(void 0)
  , Ys = [];
let dn = null;
function Sr(t=!1) {
    Ys.push(dn = t ? null : [])
}
function up() {
    Ys.pop(),
    dn = Ys[Ys.length - 1] || null
}
let us = 1;
function yf(t) {
    us += t
}
function lp(t) {
    return t.dynamicChildren = us > 0 ? dn || Ki : null,
    up(),
    us > 0 && dn && dn.push(t),
    t
}
function $0(t, e, n, r, i, s) {
    return lp(fp(t, e, n, r, i, s, !0))
}
function Hi(t, e, n, r, i) {
    return lp(We(t, e, n, r, i, !0))
}
function ls(t) {
    return t ? t.__v_isVNode === !0 : !1
}
function Rn(t, e) {
    return t.type === e.type && t.key === e.key
}
const Ga = "__vInternal"
  , cp = ({key: t})=>t ?? null
  , ia = ({ref: t, ref_key: e, ref_for: n})=>t != null ? Ze(t) || ht(t) || ce(t) ? {
    i: Ft,
    r: t,
    k: e,
    f: !!n
} : t : null;
function fp(t, e=null, n=null, r=0, i=null, s=t === qt ? 0 : 1, o=!1, a=!1) {
    const u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && cp(e),
        ref: e && ia(e),
        scopeId: Ka,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Ft
    };
    return a ? (mc(u, n),
    s & 128 && t.normalize(u)) : n && (u.shapeFlag |= Ze(n) ? 8 : 16),
    us > 0 && !o && dn && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && dn.push(u),
    u
}
const We = N0;
function N0(t, e=null, n=null, r=0, i=null, s=!1) {
    if ((!t || t === Gd) && (t = rn),
    ls(t)) {
        const a = pr(t, e, !0);
        return n && mc(a, n),
        us > 0 && !s && dn && (a.shapeFlag & 6 ? dn[dn.indexOf(t)] = a : dn.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (X0(t) && (t = t.__vccOpts),
    e) {
        e = H0(e);
        let {class: a, style: u} = e;
        a && !Ze(a) && (e.class = Ql(a)),
        $e(u) && (Ed(u) && !ue(u) && (u = Et({}, u)),
        e.style = Gl(u))
    }
    const o = Ze(t) ? 1 : Id(t) ? 128 : I0(t) ? 64 : $e(t) ? 4 : ce(t) ? 2 : 0;
    return fp(t, e, n, r, i, o, s, !0)
}
function H0(t) {
    return t ? Ed(t) || Ga in t ? Et({}, t) : t : null
}
function pr(t, e, n=!1) {
    const {props: r, ref: i, patchFlag: s, children: o} = t
      , a = e ? z0(r || {}, e) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && cp(a),
        ref: e && e.ref ? n && i ? ue(i) ? i.concat(ia(e)) : [i, ia(e)] : ia(e) : i,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: o,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== qt ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && pr(t.ssContent),
        ssFallback: t.ssFallback && pr(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    }
}
function hp(t=" ", e=0) {
    return We(as, null, t, e)
}
function kE(t, e) {
    const n = We(Vs, null, t);
    return n.staticCount = e,
    n
}
function fn(t) {
    return t == null || typeof t == "boolean" ? We(rn) : ue(t) ? We(qt, null, t.slice()) : typeof t == "object" ? xr(t) : We(as, null, String(t))
}
function xr(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : pr(t)
}
function mc(t, e) {
    let n = 0;
    const {shapeFlag: r} = t;
    if (e == null)
        e = null;
    else if (ue(e))
        n = 16;
    else if (typeof e == "object")
        if (r & 65) {
            const i = e.default;
            i && (i._c && (i._d = !1),
            mc(t, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = e._;
            !i && !(Ga in e) ? e._ctx = Ft : i === 3 && Ft && (Ft.slots._ === 1 ? e._ = 1 : (e._ = 2,
            t.patchFlag |= 1024))
        }
    else
        ce(e) ? (e = {
            default: e,
            _ctx: Ft
        },
        n = 32) : (e = String(e),
        r & 64 ? (n = 16,
        e = [hp(e)]) : n = 8);
    t.children = e,
    t.shapeFlag |= n
}
function z0(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        for (const i in r)
            if (i === "class")
                e.class !== r.class && (e.class = Ql([e.class, r.class]));
            else if (i === "style")
                e.style = Gl([e.style, r.style]);
            else if (To(i)) {
                const s = e[i]
                  , o = r[i];
                o && s !== o && !(ue(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o)
            } else
                i !== "" && (e[i] = r[i])
    }
    return e
}
function Ut(t, e, n, r=null) {
    mn(t, e, 7, [n, r])
}
const j0 = sp();
let U0 = 0;
function W0(t, e, n) {
    const r = t.type
      , i = (e ? e.appContext : t.appContext) || j0
      , s = {
        uid: U0++,
        vnode: t,
        type: r,
        parent: e,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new cm(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: tp(r, i),
        emitsOptions: Bd(r, i),
        emit: null,
        emitted: null,
        propsDefaults: ze,
        inheritAttrs: r.inheritAttrs,
        ctx: ze,
        data: ze,
        props: ze,
        attrs: ze,
        slots: ze,
        refs: ze,
        setupState: ze,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return s.ctx = {
        _: s
    },
    s.root = e ? e.root : s,
    s.emit = Gm.bind(null, s),
    t.ce && t.ce(s),
    s
}
let Qe = null;
const Yr = ()=>Qe || Ft
  , jr = t=>{
    Qe = t,
    t.scope.on()
}
  , Ir = ()=>{
    Qe && Qe.scope.off(),
    Qe = null
}
;
function dp(t) {
    return t.vnode.shapeFlag & 4
}
let cs = !1;
function q0(t, e=!1) {
    cs = e;
    const {props: n, children: r} = t.vnode
      , i = dp(t);
    T0(t, n, i, e),
    R0(t, r);
    const s = i ? V0(t, e) : void 0;
    return cs = !1,
    s
}
function V0(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null),
    t.proxy = xd(new Proxy(t.ctx,v0));
    const {setup: r} = n;
    if (r) {
        const i = t.setupContext = r.length > 1 ? K0(t) : null;
        jr(t),
        ws();
        const s = Br(r, t, 0, [t.props, i]);
        if (Cs(),
        Ir(),
        tc(s)) {
            if (s.then(Ir, Ir),
            e)
                return s.then(o=>{
                    al(t, o, e)
                }
                ).catch(o=>{
                    Es(o, t, 0)
                }
                );
            t.asyncDep = s
        } else
            al(t, s, e)
    } else
        pp(t, e)
}
function al(t, e, n) {
    ce(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : $e(e) && (t.setupState = Rd(e)),
    pp(t, n)
}
let Df;
function pp(t, e, n) {
    const r = t.type;
    if (!t.render) {
        if (!e && Df && !r.render) {
            const i = r.template || gc(t).template;
            if (i) {
                const {isCustomElement: s, compilerOptions: o} = t.appContext.config
                  , {delimiters: a, compilerOptions: u} = r
                  , l = Et(Et({
                    isCustomElement: s,
                    delimiters: a
                }, o), u);
                r.render = Df(i, l)
            }
        }
        t.render = r.render || kn
    }
    jr(t),
    ws(),
    b0(t),
    Cs(),
    Ir()
}
function Y0(t) {
    return new Proxy(t.attrs,{
        get(e, n) {
            return Qt(t, "get", "$attrs"),
            e[n]
        }
    })
}
function K0(t) {
    const e = r=>{
        t.exposed = r || {}
    }
    ;
    let n;
    return {
        get attrs() {
            return n || (n = Y0(t))
        },
        slots: t.slots,
        emit: t.emit,
        expose: e
    }
}
function yc(t) {
    if (t.exposed)
        return t.exposeProxy || (t.exposeProxy = new Proxy(Rd(xd(t.exposed)),{
            get(e, n) {
                if (n in e)
                    return e[n];
                if (n in qs)
                    return qs[n](t)
            },
            has(e, n) {
                return n in e || n in qs
            }
        }))
}
function ul(t, e=!0) {
    return ce(t) ? t.displayName || t.name : t.name || e && t.__name
}
function X0(t) {
    return ce(t) && "__vccOpts"in t
}
const Pe = (t,e)=>qm(t, e, cs);
function AE(t) {
    const e = Yr();
    let n = t();
    return Ir(),
    tc(n) && (n = n.catch(r=>{
        throw jr(e),
        r
    }
    )),
    [n, ()=>jr(e)]
}
function qe(t, e, n) {
    const r = arguments.length;
    return r === 2 ? $e(e) && !ue(e) ? ls(e) ? We(t, null, [e]) : We(t, e) : We(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ls(n) && (n = [n]),
    We(t, e, n))
}
const G0 = Symbol("")
  , Q0 = ()=>$t(G0)
  , Dc = "3.2.47"
  , J0 = "http://www.w3.org/2000/svg"
  , ai = typeof document < "u" ? document : null
  , vf = ai && ai.createElement("template")
  , Z0 = {
    insert: (t,e,n)=>{
        e.insertBefore(t, n || null)
    }
    ,
    remove: t=>{
        const e = t.parentNode;
        e && e.removeChild(t)
    }
    ,
    createElement: (t,e,n,r)=>{
        const i = e ? ai.createElementNS(J0, t) : ai.createElement(t, n ? {
            is: n
        } : void 0);
        return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: t=>ai.createTextNode(t),
    createComment: t=>ai.createComment(t),
    setText: (t,e)=>{
        t.nodeValue = e
    }
    ,
    setElementText: (t,e)=>{
        t.textContent = e
    }
    ,
    parentNode: t=>t.parentNode,
    nextSibling: t=>t.nextSibling,
    querySelector: t=>ai.querySelector(t),
    setScopeId(t, e) {
        t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, r, i, s) {
        const o = n ? n.previousSibling : e.lastChild;
        if (i && (i === s || i.nextSibling))
            for (; e.insertBefore(i.cloneNode(!0), n),
            !(i === s || !(i = i.nextSibling)); )
                ;
        else {
            vf.innerHTML = r ? `<svg>${t}</svg>` : t;
            const a = vf.content;
            if (r) {
                const u = a.firstChild;
                for (; u.firstChild; )
                    a.appendChild(u.firstChild);
                a.removeChild(u)
            }
            e.insertBefore(a, n)
        }
        return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
};
function ey(t, e, n) {
    const r = t._vtc;
    r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
function ty(t, e, n) {
    const r = t.style
      , i = Ze(n);
    if (n && !i) {
        if (e && !Ze(e))
            for (const s in e)
                n[s] == null && ll(r, s, "");
        for (const s in n)
            ll(r, s, n[s])
    } else {
        const s = r.display;
        i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"),
        "_vod"in t && (r.display = s)
    }
}
const bf = /\s*!important$/;
function ll(t, e, n) {
    if (ue(n))
        n.forEach(r=>ll(t, e, r));
    else if (n == null && (n = ""),
    e.startsWith("--"))
        t.setProperty(e, n);
    else {
        const r = ny(t, e);
        bf.test(n) ? t.setProperty(bs(r), n.replace(bf, ""), "important") : t[r] = n
    }
}
const wf = ["Webkit", "Moz", "ms"]
  , yu = {};
function ny(t, e) {
    const n = yu[e];
    if (n)
        return n;
    let r = Gn(e);
    if (r !== "filter" && r in t)
        return yu[e] = r;
    r = Wa(r);
    for (let i = 0; i < wf.length; i++) {
        const s = wf[i] + r;
        if (s in t)
            return yu[e] = s
    }
    return e
}
const Cf = "http://www.w3.org/1999/xlink";
function ry(t, e, n, r, i) {
    if (r && e.startsWith("xlink:"))
        n == null ? t.removeAttributeNS(Cf, e.slice(6, e.length)) : t.setAttributeNS(Cf, e, n);
    else {
        const s = em(e);
        n == null || s && !ad(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n)
    }
}
function iy(t, e, n, r, i, s, o) {
    if (e === "innerHTML" || e === "textContent") {
        r && o(r, i, s),
        t[e] = n ?? "";
        return
    }
    if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
        t._value = n;
        const u = n ?? "";
        (t.value !== u || t.tagName === "OPTION") && (t.value = u),
        n == null && t.removeAttribute(e);
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const u = typeof t[e];
        u === "boolean" ? n = ad(n) : n == null && u === "string" ? (n = "",
        a = !0) : u === "number" && (n = 0,
        a = !0)
    }
    try {
        t[e] = n
    } catch {}
    a && t.removeAttribute(e)
}
function sy(t, e, n, r) {
    t.addEventListener(e, n, r)
}
function oy(t, e, n, r) {
    t.removeEventListener(e, n, r)
}
function ay(t, e, n, r, i=null) {
    const s = t._vei || (t._vei = {})
      , o = s[e];
    if (r && o)
        o.value = r;
    else {
        const [a,u] = uy(e);
        if (r) {
            const l = s[e] = fy(r, i);
            sy(t, a, l, u)
        } else
            o && (oy(t, a, o, u),
            s[e] = void 0)
    }
}
const Ef = /(?:Once|Passive|Capture)$/;
function uy(t) {
    let e;
    if (Ef.test(t)) {
        e = {};
        let r;
        for (; r = t.match(Ef); )
            t = t.slice(0, t.length - r[0].length),
            e[r[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : bs(t.slice(2)), e]
}
let Du = 0;
const ly = Promise.resolve()
  , cy = ()=>Du || (ly.then(()=>Du = 0),
Du = Date.now());
function fy(t, e) {
    const n = r=>{
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        mn(hy(r, n.value), e, 5, [r])
    }
    ;
    return n.value = t,
    n.attached = cy(),
    n
}
function hy(t, e) {
    if (ue(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = ()=>{
            n.call(t),
            t._stopped = !0
        }
        ,
        e.map(r=>i=>!i._stopped && r && r(i))
    } else
        return e
}
const xf = /^on[a-z]/
  , dy = (t,e,n,r,i=!1,s,o,a,u)=>{
    e === "class" ? ey(t, r, i) : e === "style" ? ty(t, n, r) : To(e) ? Jl(e) || ay(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1),
    !0) : e[0] === "^" ? (e = e.slice(1),
    !1) : py(t, e, r, i)) ? iy(t, e, r, s, o, a, u) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r),
    ry(t, e, r, i))
}
;
function py(t, e, n, r) {
    return r ? !!(e === "innerHTML" || e === "textContent" || e in t && xf.test(e) && ce(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || xf.test(e) && Ze(n) ? !1 : e in t
}
const br = "transition"
  , Ps = "animation"
  , Ro = (t,{slots: e})=>qe(zd, gy(t), e);
Ro.displayName = "Transition";
const gp = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
Ro.props = Et({}, zd.props, gp);
const Zr = (t,e=[])=>{
    ue(t) ? t.forEach(n=>n(...e)) : t && t(...e)
}
  , Tf = t=>t ? ue(t) ? t.some(e=>e.length > 1) : t.length > 1 : !1;
function gy(t) {
    const e = {};
    for (const O in t)
        O in gp || (e[O] = t[O]);
    if (t.css === !1)
        return e;
    const {name: n="v", type: r, duration: i, enterFromClass: s=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: u=s, appearActiveClass: l=o, appearToClass: c=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: h=`${n}-leave-active`, leaveToClass: d=`${n}-leave-to`} = t
      , p = _y(i)
      , g = p && p[0]
      , v = p && p[1]
      , {onBeforeEnter: m, onEnter: _, onEnterCancelled: D, onLeave: b, onLeaveCancelled: C, onBeforeAppear: S=m, onAppear: T=_, onAppearCancelled: x=D} = e
      , R = (O,X,H)=>{
        ei(O, X ? c : a),
        ei(O, X ? l : o),
        H && H()
    }
      , A = (O,X)=>{
        O._isLeaving = !1,
        ei(O, f),
        ei(O, d),
        ei(O, h),
        X && X()
    }
      , I = O=>(X,H)=>{
        const J = O ? T : _
          , $ = ()=>R(X, O, H);
        Zr(J, [X, $]),
        Sf(()=>{
            ei(X, O ? u : s),
            wr(X, O ? c : a),
            Tf(J) || Ff(X, r, g, $)
        }
        )
    }
    ;
    return Et(e, {
        onBeforeEnter(O) {
            Zr(m, [O]),
            wr(O, s),
            wr(O, o)
        },
        onBeforeAppear(O) {
            Zr(S, [O]),
            wr(O, u),
            wr(O, l)
        },
        onEnter: I(!1),
        onAppear: I(!0),
        onLeave(O, X) {
            O._isLeaving = !0;
            const H = ()=>A(O, X);
            wr(O, f),
            Dy(),
            wr(O, h),
            Sf(()=>{
                O._isLeaving && (ei(O, f),
                wr(O, d),
                Tf(b) || Ff(O, r, v, H))
            }
            ),
            Zr(b, [O, H])
        },
        onEnterCancelled(O) {
            R(O, !1),
            Zr(D, [O])
        },
        onAppearCancelled(O) {
            R(O, !0),
            Zr(x, [O])
        },
        onLeaveCancelled(O) {
            A(O),
            Zr(C, [O])
        }
    })
}
function _y(t) {
    if (t == null)
        return null;
    if ($e(t))
        return [vu(t.enter), vu(t.leave)];
    {
        const e = vu(t);
        return [e, e]
    }
}
function vu(t) {
    return hd(t)
}
function wr(t, e) {
    e.split(/\s+/).forEach(n=>n && t.classList.add(n)),
    (t._vtc || (t._vtc = new Set)).add(e)
}
function ei(t, e) {
    e.split(/\s+/).forEach(r=>r && t.classList.remove(r));
    const {_vtc: n} = t;
    n && (n.delete(e),
    n.size || (t._vtc = void 0))
}
function Sf(t) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(t)
    }
    )
}
let my = 0;
function Ff(t, e, n, r) {
    const i = t._endId = ++my
      , s = ()=>{
        i === t._endId && r()
    }
    ;
    if (n)
        return setTimeout(s, n);
    const {type: o, timeout: a, propCount: u} = yy(t, e);
    if (!o)
        return r();
    const l = o + "end";
    let c = 0;
    const f = ()=>{
        t.removeEventListener(l, h),
        s()
    }
      , h = d=>{
        d.target === t && ++c >= u && f()
    }
    ;
    setTimeout(()=>{
        c < u && f()
    }
    , a + 1),
    t.addEventListener(l, h)
}
function yy(t, e) {
    const n = window.getComputedStyle(t)
      , r = p=>(n[p] || "").split(", ")
      , i = r(`${br}Delay`)
      , s = r(`${br}Duration`)
      , o = Rf(i, s)
      , a = r(`${Ps}Delay`)
      , u = r(`${Ps}Duration`)
      , l = Rf(a, u);
    let c = null
      , f = 0
      , h = 0;
    e === br ? o > 0 && (c = br,
    f = o,
    h = s.length) : e === Ps ? l > 0 && (c = Ps,
    f = l,
    h = u.length) : (f = Math.max(o, l),
    c = f > 0 ? o > l ? br : Ps : null,
    h = c ? c === br ? s.length : u.length : 0);
    const d = c === br && /\b(transform|all)(,|$)/.test(r(`${br}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: h,
        hasTransform: d
    }
}
function Rf(t, e) {
    for (; t.length < e.length; )
        t = t.concat(t);
    return Math.max(...e.map((n,r)=>Pf(n) + Pf(t[r])))
}
function Pf(t) {
    return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
function Dy() {
    return document.body.offsetHeight
}
const _p = Et({
    patchProp: dy
}, Z0);
let Ks, kf = !1;
function vy() {
    return Ks || (Ks = M0(_p))
}
function by() {
    return Ks = kf ? Ks : L0(_p),
    kf = !0,
    Ks
}
const wy = (...t)=>{
    const e = vy().createApp(...t)
      , {mount: n} = e;
    return e.mount = r=>{
        const i = mp(r);
        if (!i)
            return;
        const s = e._component;
        !ce(s) && !s.render && !s.template && (s.template = i.innerHTML),
        i.innerHTML = "";
        const o = n(i, !1, i instanceof SVGElement);
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        o
    }
    ,
    e
}
  , Cy = (...t)=>{
    const e = by().createApp(...t)
      , {mount: n} = e;
    return e.mount = r=>{
        const i = mp(r);
        if (i)
            return n(i, !0, i instanceof SVGElement)
    }
    ,
    e
}
;
function mp(t) {
    return Ze(t) ? document.querySelector(t) : t
}
const Ey = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , xy = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Ty = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;
function Sy(t, e) {
    if (t !== "__proto__" && !(t === "constructor" && e && typeof e == "object" && "prototype"in e))
        return e
}
function yp(t, e={}) {
    if (typeof t != "string")
        return t;
    const n = t.toLowerCase().trim();
    if (n === "true")
        return !0;
    if (n === "false")
        return !1;
    if (n === "null")
        return null;
    if (n === "nan")
        return Number.NaN;
    if (n === "infinity")
        return Number.POSITIVE_INFINITY;
    if (n !== "undefined") {
        if (!Ty.test(t)) {
            if (e.strict)
                throw new SyntaxError("Invalid JSON");
            return t
        }
        try {
            return Ey.test(t) || xy.test(t) ? JSON.parse(t, Sy) : JSON.parse(t)
        } catch (r) {
            if (e.strict)
                throw r;
            return t
        }
    }
}
const Fy = /#/g
  , Ry = /&/g
  , Py = /=/g
  , Dp = /\+/g
  , ky = /%5e/gi
  , Ay = /%60/gi
  , Oy = /%7c/gi
  , My = /%20/gi;
function Ly(t) {
    return encodeURI("" + t).replace(Oy, "|")
}
function cl(t) {
    return Ly(typeof t == "string" ? t : JSON.stringify(t)).replace(Dp, "%2B").replace(My, "+").replace(Fy, "%23").replace(Ry, "%26").replace(Ay, "`").replace(ky, "^")
}
function bu(t) {
    return cl(t).replace(Py, "%3D")
}
function vp(t="") {
    try {
        return decodeURIComponent("" + t)
    } catch {
        return "" + t
    }
}
function By(t) {
    return vp(t.replace(Dp, " "))
}
function Iy(t="") {
    const e = {};
    t[0] === "?" && (t = t.slice(1));
    for (const n of t.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2)
            continue;
        const i = vp(r[1]);
        if (i === "__proto__" || i === "constructor")
            continue;
        const s = By(r[2] || "");
        typeof e[i] < "u" ? Array.isArray(e[i]) ? e[i].push(s) : e[i] = [e[i], s] : e[i] = s
    }
    return e
}
function $y(t, e) {
    return (typeof e == "number" || typeof e == "boolean") && (e = String(e)),
    e ? Array.isArray(e) ? e.map(n=>`${bu(t)}=${cl(n)}`).join("&") : `${bu(t)}=${cl(e)}` : bu(t)
}
function bp(t) {
    return Object.keys(t).filter(e=>t[e] !== void 0).map(e=>$y(e, t[e])).join("&")
}
const Ny = /^\w{2,}:([/\\]{1,2})/
  , Hy = /^\w{2,}:([/\\]{2})?/
  , zy = /^[/\\]{2}[^/\\]+/;
function vi(t, e={}) {
    return typeof e == "boolean" && (e = {
        acceptRelative: e
    }),
    e.strict ? Ny.test(t) : Hy.test(t) || (e.acceptRelative ? zy.test(t) : !1)
}
const jy = /\/$|\/\?/;
function fl(t="", e=!1) {
    return e ? jy.test(t) : t.endsWith("/")
}
function wp(t="", e=!1) {
    if (!e)
        return (fl(t) ? t.slice(0, -1) : t) || "/";
    if (!fl(t, !0))
        return t || "/";
    const [n,...r] = t.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}
function Uy(t="", e=!1) {
    if (!e)
        return t.endsWith("/") ? t : t + "/";
    if (fl(t, !0))
        return t || "/";
    const [n,...r] = t.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}
function Cp(t="") {
    return t.startsWith("/")
}
function Wy(t="") {
    return (Cp(t) ? t.slice(1) : t) || "/"
}
function qy(t="") {
    return Cp(t) ? t : "/" + t
}
function Vy(t, e) {
    if (Ep(e) || vi(t))
        return t;
    const n = wp(e);
    return t.startsWith(n) ? t : Qa(n, t)
}
function Af(t, e) {
    if (Ep(e))
        return t;
    const n = wp(e);
    if (!t.startsWith(n))
        return t;
    const r = t.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}
function Yy(t, e) {
    const n = Ja(t)
      , r = {
        ...Iy(n.search),
        ...e
    };
    return n.search = bp(r),
    Xy(n)
}
function Ep(t) {
    return !t || t === "/"
}
function Ky(t) {
    return t && t !== "/"
}
function Qa(t, ...e) {
    let n = t || "";
    for (const r of e.filter(i=>Ky(i)))
        n = n ? Uy(n) + Wy(r) : r;
    return n
}
function Ja(t="", e) {
    if (!vi(t, {
        acceptRelative: !0
    }))
        return e ? Ja(e + t) : Of(t);
    const [n="",r,i=""] = (t.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1)
      , [s="",o=""] = (i.match(/([^#/?]*)(.*)?/) || []).splice(1)
      , {pathname: a, search: u, hash: l} = Of(o.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
        host: s,
        pathname: a,
        search: u,
        hash: l
    }
}
function Of(t="") {
    const [e="",n="",r=""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: e,
        search: n,
        hash: r
    }
}
function Xy(t) {
    const e = t.pathname + (t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "") + t.hash;
    return t.protocol ? t.protocol + "//" + (t.auth ? t.auth + "@" : "") + t.host + e : e
}
class Gy extends Error {
    constructor() {
        super(...arguments),
        this.name = "FetchError"
    }
}
function Qy(t, e, n) {
    let r = "";
    e && (r = e.message),
    t && n ? r = `${r} (${n.status} ${n.statusText} (${t.toString()}))` : t && (r = `${r} (${t.toString()})`);
    const i = new Gy(r);
    return Object.defineProperty(i, "request", {
        get() {
            return t
        }
    }),
    Object.defineProperty(i, "response", {
        get() {
            return n
        }
    }),
    Object.defineProperty(i, "data", {
        get() {
            return n && n._data
        }
    }),
    Object.defineProperty(i, "status", {
        get() {
            return n && n.status
        }
    }),
    Object.defineProperty(i, "statusText", {
        get() {
            return n && n.statusText
        }
    }),
    Object.defineProperty(i, "statusCode", {
        get() {
            return n && n.status
        }
    }),
    Object.defineProperty(i, "statusMessage", {
        get() {
            return n && n.statusText
        }
    }),
    i
}
const Jy = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function Mf(t="GET") {
    return Jy.has(t.toUpperCase())
}
function Zy(t) {
    if (t === void 0)
        return !1;
    const e = typeof t;
    return e === "string" || e === "number" || e === "boolean" || e === null ? !0 : e !== "object" ? !1 : Array.isArray(t) ? !0 : t.constructor && t.constructor.name === "Object" || typeof t.toJSON == "function"
}
const eD = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"])
  , tD = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function nD(t="") {
    if (!t)
        return "json";
    const e = t.split(";").shift() || "";
    return tD.test(e) ? "json" : eD.has(e) || e.startsWith("text/") ? "text" : "blob"
}
const rD = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function xp(t) {
    const {fetch: e, Headers: n} = t;
    function r(o) {
        const a = o.error && o.error.name === "AbortError" || !1;
        if (o.options.retry !== !1 && !a) {
            let l;
            typeof o.options.retry == "number" ? l = o.options.retry : l = Mf(o.options.method) ? 0 : 1;
            const c = o.response && o.response.status || 500;
            if (l > 0 && rD.has(c))
                return i(o.request, {
                    ...o.options,
                    retry: l - 1
                })
        }
        const u = Qy(o.request, o.error, o.response);
        throw Error.captureStackTrace && Error.captureStackTrace(u, i),
        u
    }
    const i = async function(a, u={}) {
        const l = {
            request: a,
            options: {
                ...t.defaults,
                ...u
            },
            response: void 0,
            error: void 0
        };
        l.options.onRequest && await l.options.onRequest(l),
        typeof l.request == "string" && (l.options.baseURL && (l.request = Vy(l.request, l.options.baseURL)),
        (l.options.query || l.options.params) && (l.request = Yy(l.request, {
            ...l.options.params,
            ...l.options.query
        })),
        l.options.body && Mf(l.options.method) && Zy(l.options.body) && (l.options.body = typeof l.options.body == "string" ? l.options.body : JSON.stringify(l.options.body),
        l.options.headers = new n(l.options.headers),
        l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"),
        l.options.headers.has("accept") || l.options.headers.set("accept", "application/json"))),
        l.response = await e(l.request, l.options).catch(async f=>(l.error = f,
        l.options.onRequestError && await l.options.onRequestError(l),
        r(l)));
        const c = (l.options.parseResponse ? "json" : l.options.responseType) || nD(l.response.headers.get("content-type") || "");
        if (c === "json") {
            const f = await l.response.text()
              , h = l.options.parseResponse || yp;
            l.response._data = h(f)
        } else
            c === "stream" ? l.response._data = l.response.body : l.response._data = await l.response[c]();
        return l.options.onResponse && await l.options.onResponse(l),
        l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l),
        r(l)) : l.response
    }
      , s = function(a, u) {
        return i(a, u).then(l=>l._data)
    };
    return s.raw = i,
    s.native = e,
    s.create = (o={})=>xp({
        ...t,
        defaults: {
            ...t.defaults,
            ...o
        }
    }),
    s
}
const Tp = function() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("unable to locate global object")
}()
  , iD = Tp.fetch || (()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")))
  , sD = Tp.Headers
  , oD = xp({
    fetch: iD,
    Headers: sD
})
  , aD = oD
  , uD = ()=>{
    var t;
    return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {}
}
  , Ea = uD().app
  , lD = ()=>Ea.baseURL
  , cD = ()=>Ea.buildAssetsDir
  , fD = (...t)=>Qa(Sp(), cD(), ...t)
  , Sp = (...t)=>{
    const e = Ea.cdnURL || Ea.baseURL;
    return t.length ? Qa(e, ...t) : e
}
;
globalThis.__buildAssetsURL = fD,
globalThis.__publicAssetsURL = Sp;
function hl(t, e={}, n) {
    for (const r in t) {
        const i = t[r]
          , s = n ? `${n}:${r}` : r;
        typeof i == "object" && i !== null ? hl(i, e, s) : typeof i == "function" && (e[s] = i)
    }
    return e
}
function hD(t, e) {
    return t.reduce((n,r)=>n.then(()=>r.apply(void 0, e)), Promise.resolve())
}
function dD(t, e) {
    return Promise.all(t.map(n=>n.apply(void 0, e)))
}
function wu(t, e) {
    for (const n of t)
        n(e)
}
class pD {
    constructor() {
        this._hooks = {},
        this._before = void 0,
        this._after = void 0,
        this._deprecatedMessages = void 0,
        this._deprecatedHooks = {},
        this.hook = this.hook.bind(this),
        this.callHook = this.callHook.bind(this),
        this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, n, r={}) {
        if (!e || typeof n != "function")
            return ()=>{}
            ;
        const i = e;
        let s;
        for (; this._deprecatedHooks[e]; )
            s = this._deprecatedHooks[e],
            e = s.to;
        if (s && !r.allowDeprecated) {
            let o = s.message;
            o || (o = `${i} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")),
            this._deprecatedMessages || (this._deprecatedMessages = new Set),
            this._deprecatedMessages.has(o) || (console.warn(o),
            this._deprecatedMessages.add(o))
        }
        return this._hooks[e] = this._hooks[e] || [],
        this._hooks[e].push(n),
        ()=>{
            n && (this.removeHook(e, n),
            n = void 0)
        }
    }
    hookOnce(e, n) {
        let r, i = (...s)=>(typeof r == "function" && r(),
        r = void 0,
        i = void 0,
        n(...s));
        return r = this.hook(e, i),
        r
    }
    removeHook(e, n) {
        if (this._hooks[e]) {
            const r = this._hooks[e].indexOf(n);
            r !== -1 && this._hooks[e].splice(r, 1),
            this._hooks[e].length === 0 && delete this._hooks[e]
        }
    }
    deprecateHook(e, n) {
        this._deprecatedHooks[e] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[e] || [];
        this._hooks[e] = void 0;
        for (const i of r)
            this.hook(e, i)
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
        for (const n in e)
            this.deprecateHook(n, e[n])
    }
    addHooks(e) {
        const n = hl(e)
          , r = Object.keys(n).map(i=>this.hook(i, n[i]));
        return ()=>{
            for (const i of r.splice(0, r.length))
                i()
        }
    }
    removeHooks(e) {
        const n = hl(e);
        for (const r in n)
            this.removeHook(r, n[r])
    }
    callHook(e, ...n) {
        return this.callHookWith(hD, e, ...n)
    }
    callHookParallel(e, ...n) {
        return this.callHookWith(dD, e, ...n)
    }
    callHookWith(e, n, ...r) {
        const i = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && wu(this._before, i);
        const s = e(this._hooks[n] || [], r);
        return s instanceof Promise ? s.finally(()=>{
            this._after && i && wu(this._after, i)
        }
        ) : (this._after && i && wu(this._after, i),
        s)
    }
    beforeEach(e) {
        return this._before = this._before || [],
        this._before.push(e),
        ()=>{
            const n = this._before.indexOf(e);
            n !== -1 && this._before.splice(n, 1)
        }
    }
    afterEach(e) {
        return this._after = this._after || [],
        this._after.push(e),
        ()=>{
            const n = this._after.indexOf(e);
            n !== -1 && this._after.splice(n, 1)
        }
    }
}
function Fp() {
    return new pD
}
function gD() {
    let t, e = !1;
    const n = r=>{
        if (t && t !== r)
            throw new Error("Context conflict")
    }
    ;
    return {
        use: ()=>{
            if (t === void 0)
                throw new Error("Context is not available");
            return t
        }
        ,
        tryUse: ()=>t,
        set: (r,i)=>{
            i || n(r),
            t = r,
            e = !0
        }
        ,
        unset: ()=>{
            t = void 0,
            e = !1
        }
        ,
        call: (r,i)=>{
            n(r),
            t = r;
            try {
                return i()
            } finally {
                e || (t = void 0)
            }
        }
        ,
        async callAsync(r, i) {
            t = r;
            const s = ()=>{
                t = r
            }
              , o = ()=>t === r ? s : void 0;
            dl.add(o);
            try {
                const a = i();
                return e || (t = void 0),
                await a
            } finally {
                dl.delete(o)
            }
        }
    }
}
function _D() {
    const t = {};
    return {
        get(e) {
            return t[e] || (t[e] = gD()),
            t[e],
            t[e]
        }
    }
}
const xa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}
  , Lf = "__unctx__"
  , mD = xa[Lf] || (xa[Lf] = _D())
  , yD = t=>mD.get(t)
  , Bf = "__unctx_async_handlers__"
  , dl = xa[Bf] || (xa[Bf] = new Set);
function pl(t) {
    const e = [];
    for (const i of dl) {
        const s = i();
        s && e.push(s)
    }
    const n = ()=>{
        for (const i of e)
            i()
    }
    ;
    let r = t();
    return r && typeof r == "object" && "catch"in r && (r = r.catch(i=>{
        throw n(),
        i
    }
    )),
    [r, n]
}
const Rp = yD("nuxt-app")
  , DD = "__nuxt_plugin";
function vD(t) {
    let e = 0;
    const n = {
        provide: void 0,
        globalName: "nuxt",
        payload: On({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__
        }),
        static: {
            data: {}
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating)
                return ()=>{}
                ;
            e++;
            let s = !1;
            return ()=>{
                if (!s && (s = !0,
                e--,
                e === 0))
                    return n.isHydrating = !1,
                    n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        ...t
    };
    n.hooks = Fp(),
    n.hook = n.hooks.hook,
    n.callHook = n.hooks.callHook,
    n.provide = (s,o)=>{
        const a = "$" + s;
        zo(n, a, o),
        zo(n.vueApp.config.globalProperties, a, o)
    }
    ,
    zo(n.vueApp, "$nuxt", n),
    zo(n.vueApp.config.globalProperties, "$nuxt", n),
    window.addEventListener("nuxt.preloadError", s=>{
        n.callHook("app:chunkError", {
            error: s.payload
        })
    }
    );
    const r = On(n.payload.config)
      , i = new Proxy(r,{
        get(s, o) {
            return o === "public" ? s.public : s[o] ?? s.public[o]
        },
        set(s, o, a) {
            return o === "public" || o === "app" ? !1 : (s[o] = a,
            s.public[o] = a,
            !0)
        }
    });
    return n.provide("config", i),
    n
}
async function bD(t, e) {
    if (typeof e != "function")
        return;
    const {provide: n} = await ar(t, e, [t]) || {};
    if (n && typeof n == "object")
        for (const r in n)
            t.provide(r, n[r])
}
async function wD(t, e) {
    for (const n of e)
        await bD(t, n)
}
function CD(t) {
    return t.map(n=>typeof n != "function" ? null : n.length > 1 ? r=>n(r, r.provide) : n).filter(Boolean)
}
function Kr(t) {
    return t[DD] = !0,
    t
}
function ar(t, e, n) {
    const r = ()=>n ? e(...n) : e();
    return Rp.set(t),
    r()
}
function ut() {
    const t = Rp.tryUse();
    if (!t) {
        const e = Yr();
        if (!e)
            throw new Error("nuxt instance unavailable");
        return e.appContext.app.$nuxt
    }
    return t
}
function ED() {
    return ut().$config
}
function zo(t, e, n) {
    Object.defineProperty(t, e, {
        get: ()=>n
    })
}
const Cu = {}
  , xD = Kr(t=>{
    for (const e in Cu)
        t.vueApp.component(e, Cu[e]),
        t.vueApp.component("Lazy" + e, Cu[e])
}
);
function TD(t) {
    return Array.isArray(t) ? t : [t]
}
const SD = ["title", "script", "style", "noscript"]
  , vc = ["base", "meta", "link", "style", "script", "noscript"]
  , FD = ["title", "titleTemplate", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]
  , RD = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs"]
  , PD = ["tagPosition", "tagPriority", "tagDuplicateStrategy"];
function Pp(t, e) {
    const {props: n, tag: r} = t;
    if (RD.includes(r))
        return r;
    if (r === "link" && n.rel === "canonical")
        return "canonical";
    if (n.charset)
        return "charset";
    const i = ["id"];
    r === "meta" && i.push("name", "property", "http-equiv");
    for (const s of i)
        if (typeof n[s] < "u") {
            const o = String(n[s]);
            return e && !e(o) ? !1 : `${r}:${s}:${o}`
        }
    return !1
}
const kD = t=>{
    t = t || {};
    const e = t.dedupeKeys || ["hid", "vmid", "key"];
    return {
        hooks: {
            "tag:normalise": function({tag: n}) {
                e.forEach(i=>{
                    n.props[i] && (n.key = n.props[i],
                    delete n.props[i])
                }
                );
                const r = n.key ? `${n.tag}:${n.key}` : Pp(n);
                r && (n._d = r)
            },
            "tags:resolve": function(n) {
                const r = {};
                n.tags.forEach(i=>{
                    let s = i._d || i._p;
                    const o = r[s];
                    if (o) {
                        let a = i == null ? void 0 : i.tagDuplicateStrategy;
                        if (!a && (i.tag === "htmlAttrs" || i.tag === "bodyAttrs") && (a = "merge"),
                        a === "merge") {
                            const l = o.props;
                            ["class", "style"].forEach(c=>{
                                i.props[c] && l[c] && (c === "style" && !l[c].endsWith(";") && (l[c] += ";"),
                                i.props[c] = `${l[c]} ${i.props[c]}`)
                            }
                            ),
                            r[s].props = {
                                ...l,
                                ...i.props
                            };
                            return
                        } else
                            i._e === o._e && (s = i._d = `${s}:${i._p}`);
                        const u = Object.keys(i.props).length;
                        if ((u === 0 || u === 1 && typeof i.props["data-h-key"] < "u") && !i.children) {
                            delete r[s];
                            return
                        }
                    }
                    r[s] = i
                }
                ),
                n.tags = Object.values(r)
            }
        }
    }
}
;
function kp(t) {
    let e = 9;
    for (let n = 0; n < t.length; )
        e = Math.imul(e ^ t.charCodeAt(n++), 9 ** 9);
    return ((e ^ e >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}
const jo = (t,e)=>{
    const {tag: n, $el: r} = t;
    r && (Object.entries(n.props).forEach(([i,s])=>{
        s = String(s);
        const o = `attr:${i}`;
        if (i === "class") {
            if (!s)
                return;
            for (const a of s.split(" ")) {
                const u = `${o}:${a}`;
                e && e(t, u, ()=>r.classList.remove(a)),
                r.classList.contains(a) || r.classList.add(a)
            }
            return
        }
        e && !i.startsWith("data-h-") && e(t, o, ()=>r.removeAttribute(i)),
        r.getAttribute(i) !== s && r.setAttribute(i, s)
    }
    ),
    SD.includes(n.tag) && r.innerHTML !== (n.children || "") && (r.innerHTML = n.children || ""))
}
;
async function Ap(t, e={}) {
    var f, h;
    const n = {
        shouldRender: !0
    };
    if (await t.hooks.callHook("dom:beforeRender", n),
    !n.shouldRender)
        return;
    const r = e.document || window.document
      , i = t._popSideEffectQueue();
    t.headEntries().map(d=>d._sde).forEach(d=>{
        Object.entries(d).forEach(([p,g])=>{
            i[p] = g
        }
        )
    }
    );
    const s = async d=>{
        const p = t.headEntries().find(v=>v._i === d._e)
          , g = {
            renderId: d._d || kp(JSON.stringify({
                ...d,
                _e: void 0,
                _p: void 0
            })),
            $el: null,
            shouldRender: !0,
            tag: d,
            entry: p,
            staleSideEffects: i
        };
        return await t.hooks.callHook("dom:beforeRenderTag", g),
        g
    }
      , o = []
      , a = {
        body: [],
        head: []
    }
      , u = (d,p,g)=>{
        p = `${d.renderId}:${p}`,
        d.entry && (d.entry._sde[p] = g),
        delete i[p]
    }
      , l = d=>{
        t._elMap[d.renderId] = d.$el,
        o.push(d),
        u(d, "el", ()=>{
            var p;
            (p = d.$el) == null || p.remove(),
            delete t._elMap[d.renderId]
        }
        )
    }
    ;
    for (const d of await t.resolveTags()) {
        const p = await s(d);
        if (!p.shouldRender)
            continue;
        const {tag: g} = p;
        if (g.tag === "title") {
            r.title = g.children || "",
            o.push(p);
            continue
        }
        if (g.tag === "htmlAttrs" || g.tag === "bodyAttrs") {
            p.$el = r[g.tag === "htmlAttrs" ? "documentElement" : "body"],
            jo(p, u),
            o.push(p);
            continue
        }
        if (p.$el = t._elMap[p.renderId],
        !p.$el && g._hash && (p.$el = r.querySelector(`${(f = g.tagPosition) != null && f.startsWith("body") ? "body" : "head"} > ${g.tag}[data-h-${g._hash}]`)),
        p.$el) {
            p.tag._d && jo(p),
            l(p);
            continue
        }
        p.$el = r.createElement(g.tag),
        jo(p),
        a[(h = g.tagPosition) != null && h.startsWith("body") ? "body" : "head"].push(p)
    }
    const c = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    Object.entries(a).forEach(([d,p])=>{
        var v;
        if (!p.length)
            return;
        const g = (v = r == null ? void 0 : r[d]) == null ? void 0 : v.children;
        if (g) {
            for (const m of [...g].reverse()) {
                const _ = m.tagName.toLowerCase();
                if (!vc.includes(_))
                    continue;
                const D = Pp({
                    tag: _,
                    props: m.getAttributeNames().reduce((C,S)=>({
                        ...C,
                        [S]: m.getAttribute(S)
                    }), {})
                })
                  , b = p.findIndex(C=>{
                    var S;
                    return C && (C.tag._d === D || ((S = m.isEqualNode) == null ? void 0 : S.call(m, C.$el)))
                }
                );
                if (b !== -1) {
                    const C = p[b];
                    C.$el = m,
                    jo(C),
                    l(C),
                    delete p[b]
                }
            }
            p.forEach(m=>{
                const _ = m.tag.tagPosition || "head";
                c[_] = c[_] || r.createDocumentFragment(),
                c[_].appendChild(m.$el),
                l(m)
            }
            )
        }
    }
    ),
    c.head && r.head.appendChild(c.head),
    c.bodyOpen && r.body.insertBefore(c.bodyOpen, r.body.firstChild),
    c.bodyClose && r.body.appendChild(c.bodyClose);
    for (const d of o)
        await t.hooks.callHook("dom:renderTag", d);
    Object.values(i).forEach(d=>d())
}
let Eu = null;
async function Op(t, e={}) {
    function n() {
        return Eu = null,
        Ap(t, e)
    }
    const r = e.delayFn || (i=>setTimeout(i, 10));
    return Eu = Eu || new Promise(i=>r(()=>i(n())))
}
const AD = t=>({
    hooks: {
        "entries:updated": function(e) {
            if (typeof (t == null ? void 0 : t.document) > "u" && typeof window > "u")
                return;
            let n = t == null ? void 0 : t.delayFn;
            !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame),
            Op(e, {
                document: (t == null ? void 0 : t.document) || window.document,
                delayFn: n
            })
        }
    }
})
  , If = {
    critical: 2,
    high: 9,
    low: 12,
    base: -1,
    title: 1,
    meta: 10
};
function $f(t) {
    if (typeof t.tagPriority == "number")
        return t.tagPriority;
    if (t.tag === "meta") {
        if (t.props.charset)
            return -2;
        if (t.props["http-equiv"] === "content-security-policy")
            return 0
    }
    const e = t.tagPriority || t.tag;
    return e in If ? If[e] : 10
}
const OD = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}];
function MD() {
    return {
        hooks: {
            "tags:resolve": t=>{
                const e = n=>{
                    var r;
                    return (r = t.tags.find(i=>i._d === n)) == null ? void 0 : r._p
                }
                ;
                for (const {prefix: n, offset: r} of OD)
                    for (const i of t.tags.filter(s=>typeof s.tagPriority == "string" && s.tagPriority.startsWith(n))) {
                        const s = e(i.tagPriority.replace(n, ""));
                        typeof s < "u" && (i._p = s + r)
                    }
                t.tags.sort((n,r)=>n._p - r._p).sort((n,r)=>$f(n) - $f(r))
            }
        }
    }
}
const Nf = (t,e)=>t == null ? e || null : typeof t == "function" ? t(e) : t.replace("%s", e ?? "")
  , LD = ()=>({
    hooks: {
        "tags:resolve": t=>{
            const {tags: e} = t;
            let n = e.findIndex(i=>i.tag === "titleTemplate");
            const r = e.findIndex(i=>i.tag === "title");
            if (r !== -1 && n !== -1) {
                const i = Nf(e[n].children, e[r].children);
                i !== null ? e[r].children = i || e[r].children : delete e[r]
            } else if (n !== -1) {
                const i = Nf(e[n].children);
                i !== null && (e[n].children = i,
                e[n].tag = "title",
                n = -1)
            }
            n !== -1 && delete e[n],
            t.tags = e.filter(Boolean)
        }
    }
})
  , BD = ()=>({
    hooks: {
        "tag:normalise": function({tag: t}) {
            typeof t.props.body < "u" && (t.tagPosition = "bodyClose",
            delete t.props.body)
        }
    }
})
  , ID = typeof window < "u"
  , $D = ()=>({
    hooks: {
        "tag:normalise": t=>{
            var i, s;
            const {tag: e, entry: n} = t
              , r = typeof e.props._dynamic < "u";
            !vc.includes(e.tag) || !e.key || (e._hash = kp(JSON.stringify({
                tag: e.tag,
                key: e.key
            })),
            !(ID || (s = (i = Lp()) == null ? void 0 : i.resolvedOptions) != null && s.document) && (n._m === "server" || r) && (e.props[`data-h-${e._hash}`] = ""))
        }
        ,
        "tags:resolve": t=>{
            t.tags = t.tags.map(e=>(delete e.props._dynamic,
            e))
        }
    }
})
  , Hf = ["script", "link", "bodyAttrs"]
  , ND = ()=>{
    const t = (e,n)=>{
        const r = {}
          , i = {};
        Object.entries(n.props).forEach(([o,a])=>{
            o.startsWith("on") && typeof a == "function" ? i[o] = a : r[o] = a
        }
        );
        let s;
        return e === "dom" && n.tag === "script" && typeof r.src == "string" && typeof i.onload < "u" && (s = r.src,
        delete r.src),
        {
            props: r,
            eventHandlers: i,
            delayedSrc: s
        }
    }
    ;
    return {
        hooks: {
            "ssr:render": function(e) {
                e.tags = e.tags.map(n=>(!Hf.includes(n.tag) || !Object.entries(n.props).find(([r,i])=>r.startsWith("on") && typeof i == "function") || (n.props = t("ssr", n).props),
                n))
            },
            "dom:beforeRenderTag": function(e) {
                if (!Hf.includes(e.tag.tag) || !Object.entries(e.tag.props).find(([s,o])=>s.startsWith("on") && typeof o == "function"))
                    return;
                const {props: n, eventHandlers: r, delayedSrc: i} = t("dom", e.tag);
                Object.keys(r).length && (e.tag.props = n,
                e.tag._eventHandlers = r,
                e.tag._delayedSrc = i)
            },
            "dom:renderTag": function(e) {
                const n = e.$el;
                if (!e.tag._eventHandlers || !n)
                    return;
                const r = e.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
                Object.entries(e.tag._eventHandlers).forEach(([i,s])=>{
                    const o = `${e.tag._d || e.tag._p}:${i}`
                      , a = i.slice(2).toLowerCase()
                      , u = `data-h-${a}`;
                    if (delete e.staleSideEffects[o],
                    n.hasAttribute(u))
                        return;
                    const l = s;
                    n.setAttribute(u, ""),
                    r.addEventListener(a, l),
                    e.entry && (e.entry._sde[o] = ()=>{
                        r.removeEventListener(a, l),
                        n.removeAttribute(u)
                    }
                    )
                }
                ),
                e.tag._delayedSrc && n.setAttribute("src", e.tag._delayedSrc)
            }
        }
    }
}
;
let Mp;
const HD = t=>Mp = t
  , Lp = ()=>Mp;
async function zD(t, e) {
    const n = {
        tag: t,
        props: {}
    };
    return t === "title" || t === "titleTemplate" ? (n.children = e instanceof Promise ? await e : e,
    n) : (n.props = await jD({
        ...e
    }),
    ["children", "innerHtml", "innerHTML"].forEach(r=>{
        typeof n.props[r] < "u" && (n.children = n.props[r],
        typeof n.children == "object" && (n.children = JSON.stringify(n.children)),
        delete n.props[r])
    }
    ),
    Object.keys(n.props).filter(r=>PD.includes(r)).forEach(r=>{
        n[r] = n.props[r],
        delete n.props[r]
    }
    ),
    typeof n.props.class == "object" && !Array.isArray(n.props.class) && (n.props.class = Object.keys(n.props.class).filter(r=>n.props.class[r])),
    Array.isArray(n.props.class) && (n.props.class = n.props.class.join(" ")),
    n.props.content && Array.isArray(n.props.content) ? n.props.content.map((r,i)=>{
        const s = {
            ...n,
            props: {
                ...n.props
            }
        };
        return s.props.content = r,
        s.key = `${n.props.name || n.props.property}:${i}`,
        s
    }
    ) : n)
}
async function jD(t) {
    for (const e of Object.keys(t))
        t[e]instanceof Promise && (t[e] = await t[e]),
        String(t[e]) === "true" ? t[e] = "" : String(t[e]) === "false" && delete t[e];
    return t
}
const UD = 10;
async function WD(t) {
    const e = [];
    return Object.entries(t.resolvedInput || t.input).filter(([n,r])=>typeof r < "u" && FD.includes(n)).forEach(([n,r])=>{
        const i = TD(r);
        e.push(...i.map(s=>zD(n, s)).flat())
    }
    ),
    (await Promise.all(e)).flat().map((n,r)=>(n._e = t._i,
    n._p = (t._i << UD) + r,
    n))
}
const qD = ()=>[kD(), MD(), LD(), $D(), ND(), BD()]
  , VD = (t={})=>[AD({
    document: t == null ? void 0 : t.document,
    delayFn: t == null ? void 0 : t.domDelayFn
})];
function YD(t={}) {
    const e = KD({
        ...t,
        plugins: [...VD(t), ...(t == null ? void 0 : t.plugins) || []]
    });
    return HD(e),
    e
}
function KD(t={}) {
    let e = []
      , n = {}
      , r = 0;
    const i = Fp();
    t != null && t.hooks && i.addHooks(t.hooks),
    t.plugins = [...qD(), ...(t == null ? void 0 : t.plugins) || []],
    t.plugins.forEach(a=>a.hooks && i.addHooks(a.hooks));
    const s = ()=>i.callHook("entries:updated", o)
      , o = {
        resolvedOptions: t,
        headEntries() {
            return e
        },
        get hooks() {
            return i
        },
        use(a) {
            a.hooks && i.addHooks(a.hooks)
        },
        push(a, u) {
            const l = {
                _i: r++,
                input: a,
                _sde: {}
            };
            return u != null && u.mode && (l._m = u == null ? void 0 : u.mode),
            e.push(l),
            s(),
            {
                dispose() {
                    e = e.filter(c=>c._i !== l._i ? !0 : (n = {
                        ...n,
                        ...c._sde || {}
                    },
                    c._sde = {},
                    s(),
                    !1))
                },
                patch(c) {
                    e = e.map(f=>(f._i === l._i && (l.input = f.input = c,
                    s()),
                    f))
                }
            }
        },
        async resolveTags() {
            const a = {
                tags: [],
                entries: [...e]
            };
            await i.callHook("entries:resolve", a);
            for (const u of a.entries)
                for (const l of await WD(u)) {
                    const c = {
                        tag: l,
                        entry: u
                    };
                    await i.callHook("tag:normalise", c),
                    a.tags.push(c.tag)
                }
            return await i.callHook("tags:resolve", a),
            a.tags
        },
        _elMap: {},
        _popSideEffectQueue() {
            const a = {
                ...n
            };
            return n = {},
            a
        }
    };
    return o.hooks.callHook("init", o),
    o
}
function XD(t) {
    return typeof t == "function" ? t() : he(t)
}
function Ta(t, e="") {
    if (t instanceof Promise)
        return t;
    const n = XD(t);
    if (!t || !n)
        return n;
    if (Array.isArray(n))
        return n.map(r=>Ta(r, e));
    if (typeof n == "object") {
        let r = !1;
        const i = Object.fromEntries(Object.entries(n).map(([s,o])=>s === "titleTemplate" || s.startsWith("on") ? [s, he(o)] : ((typeof o == "function" || ht(o)) && (r = !0),
        [s, Ta(o, s)])));
        return r && vc.includes(String(e)) && (i._dynamic = !0),
        i
    }
    return n
}
const GD = Dc.startsWith("3")
  , QD = typeof window < "u"
  , Bp = "usehead";
function bc() {
    return Yr() && $t(Bp) || Lp()
}
function JD(t={}) {
    const e = YD({
        ...t,
        domDelayFn: r=>setTimeout(()=>Ti(()=>r()), 10),
        plugins: [ZD(), ...(t == null ? void 0 : t.plugins) || []]
    })
      , n = {
        install(r) {
            GD && (r.config.globalProperties.$unhead = e,
            r.provide(Bp, e))
        }
    };
    return e.install = n.install,
    e
}
const ZD = ()=>({
    hooks: {
        "entries:resolve": function(t) {
            for (const e of t.entries)
                e.resolvedInput = Ta(e.input)
        }
    }
});
function ev(t, e={}) {
    const n = bc()
      , r = Yt(!1)
      , i = Yt({});
    o0(()=>{
        i.value = r.value ? {} : Ta(t)
    }
    );
    const s = n.push(i.value, e);
    return hr(i, a=>{
        s.patch(a)
    }
    ),
    Yr() && (xs(()=>{
        s.dispose()
    }
    ),
    qd(()=>{
        r.value = !0
    }
    ),
    Wd(()=>{
        r.value = !1
    }
    )),
    s
}
function tv(t, e={}) {
    return bc().push(t, e)
}
function Ip(t, e={}) {
    var r;
    const n = bc();
    if (n) {
        const i = QD || !!((r = n.resolvedOptions) != null && r.document);
        return e.mode === "server" && i || e.mode === "client" && !i ? void 0 : i ? ev(t, e) : tv(t, e)
    }
}
function nv(t) {
    const e = JD()
      , n = {
        unhead: e,
        install(r) {
            Dc.startsWith("3") && (r.config.globalProperties.$head = e,
            r.provide("usehead", e))
        },
        use(r) {
            e.use(r)
        },
        resolveTags() {
            return e.resolveTags()
        },
        headEntries() {
            return e.headEntries()
        },
        headTags() {
            return e.resolveTags()
        },
        push(r, i) {
            return e.push(r, i)
        },
        addEntry(r, i) {
            return e.push(r, i)
        },
        addHeadObjs(r, i) {
            return e.push(r, i)
        },
        addReactiveEntry(r, i) {
            const s = Ip(r, i);
            return typeof s < "u" ? s.dispose : ()=>{}
        },
        removeHeadObjs() {},
        updateDOM(r, i) {
            i ? Ap(e, {
                document: r
            }) : Op(e, {
                delayFn: s=>setTimeout(()=>s(), 50),
                document: r
            })
        },
        internalHooks: e.hooks,
        hooks: {
            "before:dom": [],
            "resolved:tags": [],
            "resolved:entries": []
        }
    };
    return e.addHeadObjs = n.addHeadObjs,
    e.updateDOM = n.updateDOM,
    e.hooks.hook("dom:beforeRender", r=>{
        for (const i of n.hooks["before:dom"])
            i() === !1 && (r.shouldRender = !1)
    }
    ),
    t && n.addHeadObjs(t),
    n
}
const rv = {
    meta: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1"
    }, {
        charset: "utf-8"
    }],
    link: [],
    style: [],
    script: [],
    noscript: []
}
  , iv = !1
  , gl = !1
  , sv = !1
  , ov = "__nuxt"
  , av = Kr(t=>{
    const e = nv();
    e.push(rv),
    t.vueApp.use(e);
    {
        let n = !0;
        const r = ()=>{
            n = !1,
            e.internalHooks.callHook("entries:updated", e.unhead)
        }
        ;
        e.internalHooks.hook("dom:beforeRender", i=>{
            i.shouldRender = !n
        }
        ),
        t.hooks.hook("page:start", ()=>{
            n = !0
        }
        ),
        t.hooks.hook("page:finish", r),
        t.hooks.hook("app:mounted", r)
    }
    t._useHead = Ip
}
);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const Bi = typeof window < "u";
function uv(t) {
    return t.__esModule || t[Symbol.toStringTag] === "Module"
}
const ke = Object.assign;
function xu(t, e) {
    const n = {};
    for (const r in e) {
        const i = e[r];
        n[r] = Mn(i) ? i.map(t) : t(i)
    }
    return n
}
const Xs = ()=>{}
  , Mn = Array.isArray
  , lv = /\/$/
  , cv = t=>t.replace(lv, "");
function Tu(t, e, n="/") {
    let r, i = {}, s = "", o = "";
    const a = e.indexOf("#");
    let u = e.indexOf("?");
    return a < u && a >= 0 && (u = -1),
    u > -1 && (r = e.slice(0, u),
    s = e.slice(u + 1, a > -1 ? a : e.length),
    i = t(s)),
    a > -1 && (r = r || e.slice(0, a),
    o = e.slice(a, e.length)),
    r = pv(r ?? e, n),
    {
        fullPath: r + (s && "?") + s + o,
        path: r,
        query: i,
        hash: o
    }
}
function fv(t, e) {
    const n = e.query ? t(e.query) : "";
    return e.path + (n && "?") + n + (e.hash || "")
}
function zf(t, e) {
    return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}
function hv(t, e, n) {
    const r = e.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && fs(e.matched[r], n.matched[i]) && $p(e.params, n.params) && t(e.query) === t(n.query) && e.hash === n.hash
}
function fs(t, e) {
    return (t.aliasOf || t) === (e.aliasOf || e)
}
function $p(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (!dv(t[n], e[n]))
            return !1;
    return !0
}
function dv(t, e) {
    return Mn(t) ? jf(t, e) : Mn(e) ? jf(e, t) : t === e
}
function jf(t, e) {
    return Mn(e) ? t.length === e.length && t.every((n,r)=>n === e[r]) : t.length === 1 && t[0] === e
}
function pv(t, e) {
    if (t.startsWith("/"))
        return t;
    if (!t)
        return e;
    const n = e.split("/")
      , r = t.split("/");
    let i = n.length - 1, s, o;
    for (s = 0; s < r.length; s++)
        if (o = r[s],
        o !== ".")
            if (o === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/")
}
var _o;
(function(t) {
    t.pop = "pop",
    t.push = "push"
}
)(_o || (_o = {}));
var Gs;
(function(t) {
    t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(Gs || (Gs = {}));
function gv(t) {
    if (!t)
        if (Bi) {
            const e = document.querySelector("base");
            t = e && e.getAttribute("href") || "/",
            t = t.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            t = "/";
    return t[0] !== "/" && t[0] !== "#" && (t = "/" + t),
    cv(t)
}
const _v = /^[^#]+#/;
function mv(t, e) {
    return t.replace(_v, "#") + e
}
function yv(t, e) {
    const n = document.documentElement.getBoundingClientRect()
      , r = t.getBoundingClientRect();
    return {
        behavior: e.behavior,
        left: r.left - n.left - (e.left || 0),
        top: r.top - n.top - (e.top || 0)
    }
}
const Za = ()=>({
    left: window.pageXOffset,
    top: window.pageYOffset
});
function Dv(t) {
    let e;
    if ("el"in t) {
        const n = t.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        e = yv(i, t)
    } else
        e = t;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}
function Uf(t, e) {
    return (history.state ? history.state.position - e : -1) + t
}
const _l = new Map;
function vv(t, e) {
    _l.set(t, e)
}
function bv(t) {
    const e = _l.get(t);
    return _l.delete(t),
    e
}
let wv = ()=>location.protocol + "//" + location.host;
function Np(t, e) {
    const {pathname: n, search: r, hash: i} = e
      , s = t.indexOf("#");
    if (s > -1) {
        let a = i.includes(t.slice(s)) ? t.slice(s).length : 1
          , u = i.slice(a);
        return u[0] !== "/" && (u = "/" + u),
        zf(u, "")
    }
    return zf(n, t) + r + i
}
function Cv(t, e, n, r) {
    let i = []
      , s = []
      , o = null;
    const a = ({state: h})=>{
        const d = Np(t, location)
          , p = n.value
          , g = e.value;
        let v = 0;
        if (h) {
            if (n.value = d,
            e.value = h,
            o && o === p) {
                o = null;
                return
            }
            v = g ? h.position - g.position : 0
        } else
            r(d);
        i.forEach(m=>{
            m(n.value, p, {
                delta: v,
                type: _o.pop,
                direction: v ? v > 0 ? Gs.forward : Gs.back : Gs.unknown
            })
        }
        )
    }
    ;
    function u() {
        o = n.value
    }
    function l(h) {
        i.push(h);
        const d = ()=>{
            const p = i.indexOf(h);
            p > -1 && i.splice(p, 1)
        }
        ;
        return s.push(d),
        d
    }
    function c() {
        const {history: h} = window;
        h.state && h.replaceState(ke({}, h.state, {
            scroll: Za()
        }), "")
    }
    function f() {
        for (const h of s)
            h();
        s = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c),
    {
        pauseListeners: u,
        listen: l,
        destroy: f
    }
}
function Wf(t, e, n, r=!1, i=!1) {
    return {
        back: t,
        current: e,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? Za() : null
    }
}
function Ev(t) {
    const {history: e, location: n} = window
      , r = {
        value: Np(t, n)
    }
      , i = {
        value: e.state
    };
    i.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function s(u, l, c) {
        const f = t.indexOf("#")
          , h = f > -1 ? (n.host && document.querySelector("base") ? t : t.slice(f)) + u : wv() + t + u;
        try {
            e[c ? "replaceState" : "pushState"](l, "", h),
            i.value = l
        } catch (d) {
            console.error(d),
            n[c ? "replace" : "assign"](h)
        }
    }
    function o(u, l) {
        const c = ke({}, e.state, Wf(i.value.back, u, i.value.forward, !0), l, {
            position: i.value.position
        });
        s(u, c, !0),
        r.value = u
    }
    function a(u, l) {
        const c = ke({}, i.value, e.state, {
            forward: u,
            scroll: Za()
        });
        s(c.current, c, !0);
        const f = ke({}, Wf(r.value, u, null), {
            position: c.position + 1
        }, l);
        s(u, f, !1),
        r.value = u
    }
    return {
        location: r,
        state: i,
        push: a,
        replace: o
    }
}
function Hp(t) {
    t = gv(t);
    const e = Ev(t)
      , n = Cv(t, e.state, e.location, e.replace);
    function r(s, o=!0) {
        o || n.pauseListeners(),
        history.go(s)
    }
    const i = ke({
        location: "",
        base: t,
        go: r,
        createHref: mv.bind(null, t)
    }, e, n);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: ()=>e.location.value
    }),
    Object.defineProperty(i, "state", {
        enumerable: !0,
        get: ()=>e.state.value
    }),
    i
}
function xv(t) {
    return t = location.host ? t || location.pathname + location.search : "",
    t.includes("#") || (t += "#"),
    Hp(t)
}
function Tv(t) {
    return typeof t == "string" || t && typeof t == "object"
}
function zp(t) {
    return typeof t == "string" || typeof t == "symbol"
}
const Cr = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , jp = Symbol("");
var qf;
(function(t) {
    t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(qf || (qf = {}));
function hs(t, e) {
    return ke(new Error, {
        type: t,
        [jp]: !0
    }, e)
}
function nr(t, e) {
    return t instanceof Error && jp in t && (e == null || !!(t.type & e))
}
const Vf = "[^/]+?"
  , Sv = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Fv = /[.+*?^${}()[\]/\\]/g;
function Rv(t, e) {
    const n = ke({}, Sv, e)
      , r = [];
    let i = n.start ? "^" : "";
    const s = [];
    for (const l of t) {
        const c = l.length ? [] : [90];
        n.strict && !l.length && (i += "/");
        for (let f = 0; f < l.length; f++) {
            const h = l[f];
            let d = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0)
                f || (i += "/"),
                i += h.value.replace(Fv, "\\$&"),
                d += 40;
            else if (h.type === 1) {
                const {value: p, repeatable: g, optional: v, regexp: m} = h;
                s.push({
                    name: p,
                    repeatable: g,
                    optional: v
                });
                const _ = m || Vf;
                if (_ !== Vf) {
                    d += 10;
                    try {
                        new RegExp(`(${_})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + b.message)
                    }
                }
                let D = g ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
                f || (D = v && l.length < 2 ? `(?:/${D})` : "/" + D),
                v && (D += "?"),
                i += D,
                d += 20,
                v && (d += -8),
                g && (d += -20),
                _ === ".*" && (d += -50)
            }
            c.push(d)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const l = r.length - 1;
        r[l][r[l].length - 1] += .7000000000000001
    }
    n.strict || (i += "/?"),
    n.end ? i += "$" : n.strict && (i += "(?:/|$)");
    const o = new RegExp(i,n.sensitive ? "" : "i");
    function a(l) {
        const c = l.match(o)
          , f = {};
        if (!c)
            return null;
        for (let h = 1; h < c.length; h++) {
            const d = c[h] || ""
              , p = s[h - 1];
            f[p.name] = d && p.repeatable ? d.split("/") : d
        }
        return f
    }
    function u(l) {
        let c = ""
          , f = !1;
        for (const h of t) {
            (!f || !c.endsWith("/")) && (c += "/"),
            f = !1;
            for (const d of h)
                if (d.type === 0)
                    c += d.value;
                else if (d.type === 1) {
                    const {value: p, repeatable: g, optional: v} = d
                      , m = p in l ? l[p] : "";
                    if (Mn(m) && !g)
                        throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
                    const _ = Mn(m) ? m.join("/") : m;
                    if (!_)
                        if (v)
                            h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${p}"`);
                    c += _
                }
        }
        return c || "/"
    }
    return {
        re: o,
        score: r,
        keys: s,
        parse: a,
        stringify: u
    }
}
function Pv(t, e) {
    let n = 0;
    for (; n < t.length && n < e.length; ) {
        const r = e[n] - t[n];
        if (r)
            return r;
        n++
    }
    return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}
function kv(t, e) {
    let n = 0;
    const r = t.score
      , i = e.score;
    for (; n < r.length && n < i.length; ) {
        const s = Pv(r[n], i[n]);
        if (s)
            return s;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (Yf(r))
            return 1;
        if (Yf(i))
            return -1
    }
    return i.length - r.length
}
function Yf(t) {
    const e = t[t.length - 1];
    return t.length > 0 && e[e.length - 1] < 0
}
const Av = {
    type: 0,
    value: ""
}
  , Ov = /[a-zA-Z0-9_]/;
function Mv(t) {
    if (!t)
        return [[]];
    if (t === "/")
        return [[Av]];
    if (!t.startsWith("/"))
        throw new Error(`Invalid path "${t}"`);
    function e(d) {
        throw new Error(`ERR (${n})/"${l}": ${d}`)
    }
    let n = 0
      , r = n;
    const i = [];
    let s;
    function o() {
        s && i.push(s),
        s = []
    }
    let a = 0, u, l = "", c = "";
    function f() {
        l && (n === 0 ? s.push({
            type: 0,
            value: l
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (u === "*" || u === "+") && e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),
        s.push({
            type: 1,
            value: l,
            regexp: c,
            repeatable: u === "*" || u === "+",
            optional: u === "*" || u === "?"
        })) : e("Invalid state to consume buffer"),
        l = "")
    }
    function h() {
        l += u
    }
    for (; a < t.length; ) {
        if (u = t[a++],
        u === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            u === "/" ? (l && f(),
            o()) : u === ":" ? (f(),
            n = 1) : h();
            break;
        case 4:
            h(),
            n = r;
            break;
        case 1:
            u === "(" ? n = 2 : Ov.test(u) ? h() : (f(),
            n = 0,
            u !== "*" && u !== "?" && u !== "+" && a--);
            break;
        case 2:
            u === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + u : n = 3 : c += u;
            break;
        case 3:
            f(),
            n = 0,
            u !== "*" && u !== "?" && u !== "+" && a--,
            c = "";
            break;
        default:
            e("Unknown state");
            break
        }
    }
    return n === 2 && e(`Unfinished custom RegExp for param "${l}"`),
    f(),
    o(),
    i
}
function Lv(t, e, n) {
    const r = Rv(Mv(t.path), n)
      , i = ke(r, {
        record: t,
        parent: e,
        children: [],
        alias: []
    });
    return e && !i.record.aliasOf == !e.record.aliasOf && e.children.push(i),
    i
}
function Bv(t, e) {
    const n = []
      , r = new Map;
    e = Gf({
        strict: !1,
        end: !0,
        sensitive: !1
    }, e);
    function i(c) {
        return r.get(c)
    }
    function s(c, f, h) {
        const d = !h
          , p = Iv(c);
        p.aliasOf = h && h.record;
        const g = Gf(e, c)
          , v = [p];
        if ("alias"in c) {
            const D = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const b of D)
                v.push(ke({}, p, {
                    components: h ? h.record.components : p.components,
                    path: b,
                    aliasOf: h ? h.record : p
                }))
        }
        let m, _;
        for (const D of v) {
            const {path: b} = D;
            if (f && b[0] !== "/") {
                const C = f.record.path
                  , S = C[C.length - 1] === "/" ? "" : "/";
                D.path = f.record.path + (b && S + b)
            }
            if (m = Lv(D, f, g),
            h ? h.alias.push(m) : (_ = _ || m,
            _ !== m && _.alias.push(m),
            d && c.name && !Xf(m) && o(c.name)),
            p.children) {
                const C = p.children;
                for (let S = 0; S < C.length; S++)
                    s(C[S], m, h && h.children[S])
            }
            h = h || m,
            (m.record.components && Object.keys(m.record.components).length || m.record.name || m.record.redirect) && u(m)
        }
        return _ ? ()=>{
            o(_)
        }
        : Xs
    }
    function o(c) {
        if (zp(c)) {
            const f = r.get(c);
            f && (r.delete(c),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(o),
            f.alias.forEach(o))
        } else {
            const f = n.indexOf(c);
            f > -1 && (n.splice(f, 1),
            c.record.name && r.delete(c.record.name),
            c.children.forEach(o),
            c.alias.forEach(o))
        }
    }
    function a() {
        return n
    }
    function u(c) {
        let f = 0;
        for (; f < n.length && kv(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !Up(c, n[f])); )
            f++;
        n.splice(f, 0, c),
        c.record.name && !Xf(c) && r.set(c.record.name, c)
    }
    function l(c, f) {
        let h, d = {}, p, g;
        if ("name"in c && c.name) {
            if (h = r.get(c.name),
            !h)
                throw hs(1, {
                    location: c
                });
            g = h.record.name,
            d = ke(Kf(f.params, h.keys.filter(_=>!_.optional).map(_=>_.name)), c.params && Kf(c.params, h.keys.map(_=>_.name))),
            p = h.stringify(d)
        } else if ("path"in c)
            p = c.path,
            h = n.find(_=>_.re.test(p)),
            h && (d = h.parse(p),
            g = h.record.name);
        else {
            if (h = f.name ? r.get(f.name) : n.find(_=>_.re.test(f.path)),
            !h)
                throw hs(1, {
                    location: c,
                    currentLocation: f
                });
            g = h.record.name,
            d = ke({}, f.params, c.params),
            p = h.stringify(d)
        }
        const v = [];
        let m = h;
        for (; m; )
            v.unshift(m.record),
            m = m.parent;
        return {
            name: g,
            path: p,
            params: d,
            matched: v,
            meta: Nv(v)
        }
    }
    return t.forEach(c=>s(c)),
    {
        addRoute: s,
        resolve: l,
        removeRoute: o,
        getRoutes: a,
        getRecordMatcher: i
    }
}
function Kf(t, e) {
    const n = {};
    for (const r of e)
        r in t && (n[r] = t[r]);
    return n
}
function Iv(t) {
    return {
        path: t.path,
        redirect: t.redirect,
        name: t.name,
        meta: t.meta || {},
        aliasOf: void 0,
        beforeEnter: t.beforeEnter,
        props: $v(t),
        children: t.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in t ? t.components || null : t.component && {
            default: t.component
        }
    }
}
function $v(t) {
    const e = {}
      , n = t.props || !1;
    if ("component"in t)
        e.default = n;
    else
        for (const r in t.components)
            e[r] = typeof n == "boolean" ? n : n[r];
    return e
}
function Xf(t) {
    for (; t; ) {
        if (t.record.aliasOf)
            return !0;
        t = t.parent
    }
    return !1
}
function Nv(t) {
    return t.reduce((e,n)=>ke(e, n.meta), {})
}
function Gf(t, e) {
    const n = {};
    for (const r in t)
        n[r] = r in e ? e[r] : t[r];
    return n
}
function Up(t, e) {
    return e.children.some(n=>n === t || Up(t, n))
}
const Wp = /#/g
  , Hv = /&/g
  , zv = /\//g
  , jv = /=/g
  , Uv = /\?/g
  , qp = /\+/g
  , Wv = /%5B/g
  , qv = /%5D/g
  , Vp = /%5E/g
  , Vv = /%60/g
  , Yp = /%7B/g
  , Yv = /%7C/g
  , Kp = /%7D/g
  , Kv = /%20/g;
function wc(t) {
    return encodeURI("" + t).replace(Yv, "|").replace(Wv, "[").replace(qv, "]")
}
function Xv(t) {
    return wc(t).replace(Yp, "{").replace(Kp, "}").replace(Vp, "^")
}
function ml(t) {
    return wc(t).replace(qp, "%2B").replace(Kv, "+").replace(Wp, "%23").replace(Hv, "%26").replace(Vv, "`").replace(Yp, "{").replace(Kp, "}").replace(Vp, "^")
}
function Gv(t) {
    return ml(t).replace(jv, "%3D")
}
function Qv(t) {
    return wc(t).replace(Wp, "%23").replace(Uv, "%3F")
}
function Jv(t) {
    return t == null ? "" : Qv(t).replace(zv, "%2F")
}
function Sa(t) {
    try {
        return decodeURIComponent("" + t)
    } catch {}
    return "" + t
}
function Zv(t) {
    const e = {};
    if (t === "" || t === "?")
        return e;
    const r = (t[0] === "?" ? t.slice(1) : t).split("&");
    for (let i = 0; i < r.length; ++i) {
        const s = r[i].replace(qp, " ")
          , o = s.indexOf("=")
          , a = Sa(o < 0 ? s : s.slice(0, o))
          , u = o < 0 ? null : Sa(s.slice(o + 1));
        if (a in e) {
            let l = e[a];
            Mn(l) || (l = e[a] = [l]),
            l.push(u)
        } else
            e[a] = u
    }
    return e
}
function Qf(t) {
    let e = "";
    for (let n in t) {
        const r = t[n];
        if (n = Gv(n),
        r == null) {
            r !== void 0 && (e += (e.length ? "&" : "") + n);
            continue
        }
        (Mn(r) ? r.map(s=>s && ml(s)) : [r && ml(r)]).forEach(s=>{
            s !== void 0 && (e += (e.length ? "&" : "") + n,
            s != null && (e += "=" + s))
        }
        )
    }
    return e
}
function eb(t) {
    const e = {};
    for (const n in t) {
        const r = t[n];
        r !== void 0 && (e[n] = Mn(r) ? r.map(i=>i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return e
}
const tb = Symbol("")
  , Jf = Symbol("")
  , eu = Symbol("")
  , Cc = Symbol("")
  , yl = Symbol("");
function ks() {
    let t = [];
    function e(r) {
        return t.push(r),
        ()=>{
            const i = t.indexOf(r);
            i > -1 && t.splice(i, 1)
        }
    }
    function n() {
        t = []
    }
    return {
        add: e,
        list: ()=>t,
        reset: n
    }
}
function Tr(t, e, n, r, i) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return ()=>new Promise((o,a)=>{
        const u = f=>{
            f === !1 ? a(hs(4, {
                from: n,
                to: e
            })) : f instanceof Error ? a(f) : Tv(f) ? a(hs(2, {
                from: e,
                to: f
            })) : (s && r.enterCallbacks[i] === s && typeof f == "function" && s.push(f),
            o())
        }
          , l = t.call(r && r.instances[i], e, n, u);
        let c = Promise.resolve(l);
        t.length < 3 && (c = c.then(u)),
        c.catch(f=>a(f))
    }
    )
}
function Su(t, e, n, r) {
    const i = [];
    for (const s of t)
        for (const o in s.components) {
            let a = s.components[o];
            if (!(e !== "beforeRouteEnter" && !s.instances[o]))
                if (nb(a)) {
                    const l = (a.__vccOpts || a)[e];
                    l && i.push(Tr(l, n, r, s, o))
                } else {
                    let u = a();
                    i.push(()=>u.then(l=>{
                        if (!l)
                            return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));
                        const c = uv(l) ? l.default : l;
                        s.components[o] = c;
                        const h = (c.__vccOpts || c)[e];
                        return h && Tr(h, n, r, s, o)()
                    }
                    ))
                }
        }
    return i
}
function nb(t) {
    return typeof t == "object" || "displayName"in t || "props"in t || "__vccOpts"in t
}
function Zf(t) {
    const e = $t(eu)
      , n = $t(Cc)
      , r = Pe(()=>e.resolve(he(t.to)))
      , i = Pe(()=>{
        const {matched: u} = r.value
          , {length: l} = u
          , c = u[l - 1]
          , f = n.matched;
        if (!c || !f.length)
            return -1;
        const h = f.findIndex(fs.bind(null, c));
        if (h > -1)
            return h;
        const d = eh(u[l - 2]);
        return l > 1 && eh(c) === d && f[f.length - 1].path !== d ? f.findIndex(fs.bind(null, u[l - 2])) : h
    }
    )
      , s = Pe(()=>i.value > -1 && ob(n.params, r.value.params))
      , o = Pe(()=>i.value > -1 && i.value === n.matched.length - 1 && $p(n.params, r.value.params));
    function a(u={}) {
        return sb(u) ? e[he(t.replace) ? "replace" : "push"](he(t.to)).catch(Xs) : Promise.resolve()
    }
    return {
        route: r,
        href: Pe(()=>r.value.href),
        isActive: s,
        isExactActive: o,
        navigate: a
    }
}
const rb = Nt({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Zf,
    setup(t, {slots: e}) {
        const n = On(Zf(t))
          , {options: r} = $t(eu)
          , i = Pe(()=>({
            [th(t.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [th(t.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const s = e.default && e.default(n);
            return t.custom ? s : qe("a", {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, s)
        }
    }
})
  , ib = rb;
function sb(t) {
    if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
        if (t.currentTarget && t.currentTarget.getAttribute) {
            const e = t.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(e))
                return
        }
        return t.preventDefault && t.preventDefault(),
        !0
    }
}
function ob(t, e) {
    for (const n in e) {
        const r = e[n]
          , i = t[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!Mn(i) || i.length !== r.length || r.some((s,o)=>s !== i[o]))
            return !1
    }
    return !0
}
function eh(t) {
    return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const th = (t,e,n)=>t ?? e ?? n
  , ab = Nt({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(t, {attrs: e, slots: n}) {
        const r = $t(yl)
          , i = Pe(()=>t.route || r.value)
          , s = $t(Jf, 0)
          , o = Pe(()=>{
            let l = he(s);
            const {matched: c} = i.value;
            let f;
            for (; (f = c[l]) && !f.components; )
                l++;
            return l
        }
        )
          , a = Pe(()=>i.value.matched[o.value]);
        Zi(Jf, Pe(()=>o.value + 1)),
        Zi(tb, a),
        Zi(yl, i);
        const u = Yt();
        return hr(()=>[u.value, a.value, t.name], ([l,c,f],[h,d,p])=>{
            c && (c.instances[f] = l,
            d && d !== c && l && l === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards),
            c.updateGuards.size || (c.updateGuards = d.updateGuards))),
            l && c && (!d || !fs(c, d) || !h) && (c.enterCallbacks[f] || []).forEach(g=>g(l))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const l = i.value
              , c = t.name
              , f = a.value
              , h = f && f.components[c];
            if (!h)
                return nh(n.default, {
                    Component: h,
                    route: l
                });
            const d = f.props[c]
              , p = d ? d === !0 ? l.params : typeof d == "function" ? d(l) : d : null
              , v = qe(h, ke({}, p, e, {
                onVnodeUnmounted: m=>{
                    m.component.isUnmounted && (f.instances[c] = null)
                }
                ,
                ref: u
            }));
            return nh(n.default, {
                Component: v,
                route: l
            }) || v
        }
    }
});
function nh(t, e) {
    if (!t)
        return null;
    const n = t(e);
    return n.length === 1 ? n[0] : n
}
const Xp = ab;
function ub(t) {
    const e = Bv(t.routes, t)
      , n = t.parseQuery || Zv
      , r = t.stringifyQuery || Qf
      , i = t.history
      , s = ks()
      , o = ks()
      , a = ks()
      , u = el(Cr);
    let l = Cr;
    Bi && t.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = xu.bind(null, P=>"" + P)
      , f = xu.bind(null, Jv)
      , h = xu.bind(null, Sa);
    function d(P, U) {
        let j, Q;
        return zp(P) ? (j = e.getRecordMatcher(P),
        Q = U) : Q = P,
        e.addRoute(Q, j)
    }
    function p(P) {
        const U = e.getRecordMatcher(P);
        U && e.removeRoute(U)
    }
    function g() {
        return e.getRoutes().map(P=>P.record)
    }
    function v(P) {
        return !!e.getRecordMatcher(P)
    }
    function m(P, U) {
        if (U = ke({}, U || u.value),
        typeof P == "string") {
            const y = Tu(n, P, U.path)
              , w = e.resolve({
                path: y.path
            }, U)
              , k = i.createHref(y.fullPath);
            return ke(y, w, {
                params: h(w.params),
                hash: Sa(y.hash),
                redirectedFrom: void 0,
                href: k
            })
        }
        let j;
        if ("path"in P)
            j = ke({}, P, {
                path: Tu(n, P.path, U.path).path
            });
        else {
            const y = ke({}, P.params);
            for (const w in y)
                y[w] == null && delete y[w];
            j = ke({}, P, {
                params: f(P.params)
            }),
            U.params = f(U.params)
        }
        const Q = e.resolve(j, U)
          , _e = P.hash || "";
        Q.params = c(h(Q.params));
        const ye = fv(r, ke({}, P, {
            hash: Xv(_e),
            path: Q.path
        }))
          , se = i.createHref(ye);
        return ke({
            fullPath: ye,
            hash: _e,
            query: r === Qf ? eb(P.query) : P.query || {}
        }, Q, {
            redirectedFrom: void 0,
            href: se
        })
    }
    function _(P) {
        return typeof P == "string" ? Tu(n, P, u.value.path) : ke({}, P)
    }
    function D(P, U) {
        if (l !== P)
            return hs(8, {
                from: U,
                to: P
            })
    }
    function b(P) {
        return T(P)
    }
    function C(P) {
        return b(ke(_(P), {
            replace: !0
        }))
    }
    function S(P) {
        const U = P.matched[P.matched.length - 1];
        if (U && U.redirect) {
            const {redirect: j} = U;
            let Q = typeof j == "function" ? j(P) : j;
            return typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = _(Q) : {
                path: Q
            },
            Q.params = {}),
            ke({
                query: P.query,
                hash: P.hash,
                params: "path"in Q ? {} : P.params
            }, Q)
        }
    }
    function T(P, U) {
        const j = l = m(P)
          , Q = u.value
          , _e = P.state
          , ye = P.force
          , se = P.replace === !0
          , y = S(j);
        if (y)
            return T(ke(_(y), {
                state: typeof y == "object" ? ke({}, _e, y.state) : _e,
                force: ye,
                replace: se
            }), U || j);
        const w = j;
        w.redirectedFrom = U;
        let k;
        return !ye && hv(r, Q, j) && (k = hs(16, {
            to: w,
            from: Q
        }),
        F(Q, Q, !0, !1)),
        (k ? Promise.resolve(k) : R(w, Q)).catch(M=>nr(M) ? nr(M, 2) ? M : L(M) : V(M, w, Q)).then(M=>{
            if (M) {
                if (nr(M, 2))
                    return T(ke({
                        replace: se
                    }, _(M.to), {
                        state: typeof M.to == "object" ? ke({}, _e, M.to.state) : _e,
                        force: ye
                    }), U || w)
            } else
                M = I(w, Q, !0, se, _e);
            return A(w, Q, M),
            M
        }
        )
    }
    function x(P, U) {
        const j = D(P, U);
        return j ? Promise.reject(j) : Promise.resolve()
    }
    function R(P, U) {
        let j;
        const [Q,_e,ye] = lb(P, U);
        j = Su(Q.reverse(), "beforeRouteLeave", P, U);
        for (const y of Q)
            y.leaveGuards.forEach(w=>{
                j.push(Tr(w, P, U))
            }
            );
        const se = x.bind(null, P, U);
        return j.push(se),
        ki(j).then(()=>{
            j = [];
            for (const y of s.list())
                j.push(Tr(y, P, U));
            return j.push(se),
            ki(j)
        }
        ).then(()=>{
            j = Su(_e, "beforeRouteUpdate", P, U);
            for (const y of _e)
                y.updateGuards.forEach(w=>{
                    j.push(Tr(w, P, U))
                }
                );
            return j.push(se),
            ki(j)
        }
        ).then(()=>{
            j = [];
            for (const y of P.matched)
                if (y.beforeEnter && !U.matched.includes(y))
                    if (Mn(y.beforeEnter))
                        for (const w of y.beforeEnter)
                            j.push(Tr(w, P, U));
                    else
                        j.push(Tr(y.beforeEnter, P, U));
            return j.push(se),
            ki(j)
        }
        ).then(()=>(P.matched.forEach(y=>y.enterCallbacks = {}),
        j = Su(ye, "beforeRouteEnter", P, U),
        j.push(se),
        ki(j))).then(()=>{
            j = [];
            for (const y of o.list())
                j.push(Tr(y, P, U));
            return j.push(se),
            ki(j)
        }
        ).catch(y=>nr(y, 8) ? y : Promise.reject(y))
    }
    function A(P, U, j) {
        for (const Q of a.list())
            Q(P, U, j)
    }
    function I(P, U, j, Q, _e) {
        const ye = D(P, U);
        if (ye)
            return ye;
        const se = U === Cr
          , y = Bi ? history.state : {};
        j && (Q || se ? i.replace(P.fullPath, ke({
            scroll: se && y && y.scroll
        }, _e)) : i.push(P.fullPath, _e)),
        u.value = P,
        F(P, U, j, se),
        L()
    }
    let O;
    function X() {
        O || (O = i.listen((P,U,j)=>{
            if (!Te.listening)
                return;
            const Q = m(P)
              , _e = S(Q);
            if (_e) {
                T(ke(_e, {
                    replace: !0
                }), Q).catch(Xs);
                return
            }
            l = Q;
            const ye = u.value;
            Bi && vv(Uf(ye.fullPath, j.delta), Za()),
            R(Q, ye).catch(se=>nr(se, 12) ? se : nr(se, 2) ? (T(se.to, Q).then(y=>{
                nr(y, 20) && !j.delta && j.type === _o.pop && i.go(-1, !1)
            }
            ).catch(Xs),
            Promise.reject()) : (j.delta && i.go(-j.delta, !1),
            V(se, Q, ye))).then(se=>{
                se = se || I(Q, ye, !1),
                se && (j.delta && !nr(se, 8) ? i.go(-j.delta, !1) : j.type === _o.pop && nr(se, 20) && i.go(-1, !1)),
                A(Q, ye, se)
            }
            ).catch(Xs)
        }
        ))
    }
    let H = ks(), J = ks(), $;
    function V(P, U, j) {
        L(P);
        const Q = J.list();
        return Q.length ? Q.forEach(_e=>_e(P, U, j)) : console.error(P),
        Promise.reject(P)
    }
    function Y() {
        return $ && u.value !== Cr ? Promise.resolve() : new Promise((P,U)=>{
            H.add([P, U])
        }
        )
    }
    function L(P) {
        return $ || ($ = !P,
        X(),
        H.list().forEach(([U,j])=>P ? j(P) : U()),
        H.reset()),
        P
    }
    function F(P, U, j, Q) {
        const {scrollBehavior: _e} = t;
        if (!Bi || !_e)
            return Promise.resolve();
        const ye = !j && bv(Uf(P.fullPath, 0)) || (Q || !j) && history.state && history.state.scroll || null;
        return Ti().then(()=>_e(P, U, ye)).then(se=>se && Dv(se)).catch(se=>V(se, P, U))
    }
    const de = P=>i.go(P);
    let ge;
    const et = new Set
      , Te = {
        currentRoute: u,
        listening: !0,
        addRoute: d,
        removeRoute: p,
        hasRoute: v,
        getRoutes: g,
        resolve: m,
        options: t,
        push: b,
        replace: C,
        go: de,
        back: ()=>de(-1),
        forward: ()=>de(1),
        beforeEach: s.add,
        beforeResolve: o.add,
        afterEach: a.add,
        onError: J.add,
        isReady: Y,
        install(P) {
            const U = this;
            P.component("RouterLink", ib),
            P.component("RouterView", Xp),
            P.config.globalProperties.$router = U,
            Object.defineProperty(P.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>he(u)
            }),
            Bi && !ge && u.value === Cr && (ge = !0,
            b(i.location).catch(_e=>{}
            ));
            const j = {};
            for (const _e in Cr)
                j[_e] = Pe(()=>u.value[_e]);
            P.provide(eu, U),
            P.provide(Cc, On(j)),
            P.provide(yl, u);
            const Q = P.unmount;
            et.add(P),
            P.unmount = function() {
                et.delete(P),
                et.size < 1 && (l = Cr,
                O && O(),
                O = null,
                u.value = Cr,
                ge = !1,
                $ = !1),
                Q()
            }
        }
    };
    return Te
}
function ki(t) {
    return t.reduce((e,n)=>e.then(()=>n()), Promise.resolve())
}
function lb(t, e) {
    const n = []
      , r = []
      , i = []
      , s = Math.max(e.matched.length, t.matched.length);
    for (let o = 0; o < s; o++) {
        const a = e.matched[o];
        a && (t.matched.find(l=>fs(l, a)) ? r.push(a) : n.push(a));
        const u = t.matched[o];
        u && (e.matched.find(l=>fs(l, u)) || i.push(u))
    }
    return [n, r, i]
}
function cb() {
    return $t(Cc)
}
const fb = decodeURIComponent
  , hb = encodeURIComponent
  , db = /; */
  , Uo = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function pb(t, e) {
    if (typeof t != "string")
        throw new TypeError("argument str must be a string");
    let n = {}
      , r = e || {}
      , i = t.split(db)
      , s = r.decode || fb;
    for (let o = 0; o < i.length; o++) {
        let a = i[o]
          , u = a.indexOf("=");
        if (u < 0)
            continue;
        let l = a.substr(0, u).trim()
          , c = a.substr(++u, a.length).trim();
        c[0] == '"' && (c = c.slice(1, -1)),
        n[l] == null && (n[l] = gb(c, s))
    }
    return n
}
function rh(t, e, n) {
    let r = n || {}
      , i = r.encode || hb;
    if (typeof i != "function")
        throw new TypeError("option encode is invalid");
    if (!Uo.test(t))
        throw new TypeError("argument name is invalid");
    let s = i(e);
    if (s && !Uo.test(s))
        throw new TypeError("argument val is invalid");
    let o = t + "=" + s;
    if (r.maxAge != null) {
        let a = r.maxAge - 0;
        if (isNaN(a) || !isFinite(a))
            throw new TypeError("option maxAge is invalid");
        o += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!Uo.test(r.domain))
            throw new TypeError("option domain is invalid");
        o += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Uo.test(r.path))
            throw new TypeError("option path is invalid");
        o += "; Path=" + r.path
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        o += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (o += "; HttpOnly"),
    r.secure && (o += "; Secure"),
    r.sameSite)
        switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            o += "; SameSite=Strict";
            break;
        case "lax":
            o += "; SameSite=Lax";
            break;
        case "strict":
            o += "; SameSite=Strict";
            break;
        case "none":
            o += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return o
}
function gb(t, e) {
    try {
        return e(t)
    } catch {
        return t
    }
}
function Fu(t) {
    return t !== null && typeof t == "object"
}
function Dl(t, e, n=".", r) {
    if (!Fu(e))
        return Dl(t, {}, n, r);
    const i = Object.assign({}, e);
    for (const s in t) {
        if (s === "__proto__" || s === "constructor")
            continue;
        const o = t[s];
        o != null && (r && r(i, s, o, n) || (Array.isArray(o) && Array.isArray(i[s]) ? i[s] = [...o, ...i[s]] : Fu(o) && Fu(i[s]) ? i[s] = Dl(o, i[s], (n ? `${n}.` : "") + s.toString(), r) : i[s] = o))
    }
    return i
}
function Gp(t) {
    return (...e)=>e.reduce((n,r)=>Dl(n, r, "", t), {})
}
const Ec = Gp()
  , _b = Gp((t,e,n)=>{
    if (typeof t[e] < "u" && typeof n == "function")
        return t[e] = n(t[e]),
        !0
}
);
class vl extends Error {
    constructor() {
        super(...arguments),
        this.statusCode = 500,
        this.fatal = !1,
        this.unhandled = !1,
        this.statusMessage = void 0
    }
    toJSON() {
        const e = {
            message: this.message,
            statusCode: this.statusCode
        };
        return this.statusMessage && (e.statusMessage = this.statusMessage),
        this.data !== void 0 && (e.data = this.data),
        e
    }
}
vl.__h3_error__ = !0;
function bl(t) {
    if (typeof t == "string")
        return new vl(t);
    if (mb(t))
        return t;
    const e = new vl(t.message ?? t.statusMessage,t.cause ? {
        cause: t.cause
    } : void 0);
    if ("stack"in t)
        try {
            Object.defineProperty(e, "stack", {
                get() {
                    return t.stack
                }
            })
        } catch {
            try {
                e.stack = t.stack
            } catch {}
        }
    return t.data && (e.data = t.data),
    t.statusCode ? e.statusCode = t.statusCode : t.status && (e.statusCode = t.status),
    t.statusMessage ? e.statusMessage = t.statusMessage : t.statusText && (e.statusMessage = t.statusText),
    t.fatal !== void 0 && (e.fatal = t.fatal),
    t.unhandled !== void 0 && (e.unhandled = t.unhandled),
    e
}
function mb(t) {
    var e;
    return ((e = t == null ? void 0 : t.constructor) == null ? void 0 : e.__h3_error__) === !0
}
const tu = ()=>Pd(ut().payload, "error")
  , zi = t=>{
    const e = Fa(t);
    try {
        ut().callHook("app:error", e);
        const r = tu();
        r.value = r.value || e
    } catch {
        throw e
    }
    return e
}
  , yb = async(t={})=>{
    const e = ut()
      , n = tu();
    e.callHook("app:error:cleared", t),
    t.redirect && await e.$router.replace(t.redirect),
    n.value = null
}
  , Db = t=>!!(t && typeof t == "object" && "__nuxt_error"in t)
  , Fa = t=>{
    const e = bl(t);
    return e.__nuxt_error = !0,
    e
}
;
function vb(...t) {
    const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
    typeof t[0] != "string" && t.unshift(e);
    const [n,r] = t;
    if (!n || typeof n != "string")
        throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function")
        throw new Error("[nuxt] [useState] init must be a function: " + r);
    const i = "$s" + n
      , s = ut()
      , o = Pd(s.payload.state, i);
    if (o.value === void 0 && r) {
        const a = r();
        if (ht(a))
            return s.payload.state[i] = a,
            a;
        o.value = a
    }
    return o
}
const Ts = ()=>{
    var t;
    return (t = ut()) == null ? void 0 : t.$router
}
  , Qp = ()=>Yr() ? $t("_route", ut()._route) : ut()._route
  , bb = t=>t
  , wb = ()=>{
    try {
        if (ut()._processingMiddleware)
            return !0
    } catch {
        return !0
    }
    return !1
}
  , Cb = (t,e)=>{
    t || (t = "/");
    const n = typeof t == "string" ? t : t.path || "/"
      , r = vi(n, !0);
    if (r && !(e != null && e.external))
        throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
    if (r && Ja(n).protocol === "script:")
        throw new Error("Cannot navigate to an URL with script protocol.");
    if (!r && wb())
        return t;
    const i = Ts();
    return r ? (e != null && e.replace ? location.replace(n) : location.href = n,
    Promise.resolve()) : e != null && e.replace ? i.replace(t) : i.push(t)
}
  , Eb = "modulepreload"
  , xb = function(t, e) {
    return t.startsWith(".") ? new URL(t,e).href : t
}
  , ih = {}
  , mo = function(e, n, r) {
    if (!n || n.length === 0)
        return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(n.map(s=>{
        if (s = xb(s, r),
        s in ih)
            return;
        ih[s] = !0;
        const o = s.endsWith(".css")
          , a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
            for (let c = i.length - 1; c >= 0; c--) {
                const f = i[c];
                if (f.href === s && (!o || f.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${s}"]${a}`))
            return;
        const l = document.createElement("link");
        if (l.rel = o ? "stylesheet" : Eb,
        o || (l.as = "script",
        l.crossOrigin = ""),
        l.href = s,
        document.head.appendChild(l),
        o)
            return new Promise((c,f)=>{
                l.addEventListener("load", c),
                l.addEventListener("error", ()=>f(new Error(`Unable to preload CSS for ${s}`)))
            }
            )
    }
    )).then(()=>e())
}
  , sh = [{
    name: "about",
    path: "/about",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: ()=>mo(()=>import("./abount.js"), ["./abount.js", "./star.js", "./stickerphysics.js", "./helpers.js", "./plugins.js", "./state.js", "./about.css"], import.meta.url).then(t=>t.default || t)
}, {
    name: "index",
    path: "/",
    children: [],
    meta: {},
    alias: [],
    redirect: void 0,
    component: ()=>mo(()=>import("./index.js"), ["./index.js", "./marquee.js", "./helpers.js", "./plugins.js", "./state.js", "./stickerphysics.js", "./index.css"], import.meta.url).then(t=>t.default || t)
}]
  , Tb = {
    scrollBehavior(t, e, n) {
        const r = ut();
        let i = n || void 0;
        if (!i && e && t && t.meta.scrollToTop !== !1 && Sb(e, t) && (i = {
            left: 0,
            top: 0
        }),
        t.path === e.path) {
            if (e.hash && !t.hash)
                return {
                    left: 0,
                    top: 0
                };
            if (t.hash)
                return {
                    el: t.hash,
                    top: oh(t.hash)
                }
        }
        const s = a=>!!(a.meta.pageTransition ?? gl)
          , o = s(e) && s(t) ? "page:transition:finish" : "page:finish";
        return new Promise(a=>{
            r.hooks.hookOnce(o, async()=>{
                await Ti(),
                t.hash && (i = {
                    el: t.hash,
                    top: oh(t.hash)
                }),
                a(i)
            }
            )
        }
        )
    }
};
function oh(t) {
    try {
        const e = document.querySelector(t);
        if (e)
            return parseFloat(getComputedStyle(e).scrollMarginTop)
    } catch {}
    return 0
}
function Sb(t, e) {
    const n = t.matched[0] === e.matched[0];
    return !!(!n || n && JSON.stringify(t.params) !== JSON.stringify(e.params))
}
const Fb = {}
  , rr = {
    ...Fb,
    ...Tb
}
  , Rb = bb(async t=>{
    var u;
    let e, n;
    if (!((u = t.meta) != null && u.validate))
        return;
    const r = ut()
      , i = Ts();
    if (([e,n] = pl(()=>Promise.resolve(t.meta.validate(t))),
    e = await e,
    n(),
    e) === !0)
        return;
    const o = Fa({
        statusCode: 404,
        statusMessage: `Page Not Found: ${t.fullPath}`
    })
      , a = i.beforeResolve(l=>{
        if (a(),
        l === t) {
            const c = i.afterEach(async()=>{
                c(),
                await ar(r, zi, [o]),
                window.history.pushState({}, "", t.fullPath)
            }
            );
            return !1
        }
    }
    )
}
)
  , Pb = [Rb]
  , Qs = {};
function kb(t, e) {
    const {pathname: n, search: r, hash: i} = e
      , s = t.indexOf("#");
    if (s > -1) {
        const a = i.includes(t.slice(s)) ? t.slice(s).length : 1;
        let u = i.slice(a);
        return u[0] !== "/" && (u = "/" + u),
        Af(u, "")
    }
    return Af(n, t) + r + i
}
const Ab = Kr(async t=>{
    var p, g;
    let e, n, r = ED().app.baseURL;
    rr.hashMode && !r.includes("#") && (r += "#");
    const i = ((p = rr.history) == null ? void 0 : p.call(rr, r)) ?? (rr.hashMode ? xv(r) : Hp(r))
      , s = ((g = rr.routes) == null ? void 0 : g.call(rr, sh)) ?? sh
      , o = kb(r, window.location)
      , a = ub({
        ...rr,
        history: i,
        routes: s
    });
    t.vueApp.use(a);
    const u = el(a.currentRoute.value);
    a.afterEach((v,m)=>{
        u.value = m
    }
    ),
    Object.defineProperty(t.vueApp.config.globalProperties, "previousRoute", {
        get: ()=>u.value
    });
    const l = el(a.resolve(o))
      , c = ()=>{
        l.value = a.currentRoute.value
    }
    ;
    t.hook("page:finish", c),
    a.afterEach((v,m)=>{
        var _, D, b, C;
        ((D = (_ = v.matched[0]) == null ? void 0 : _.components) == null ? void 0 : D.default) === ((C = (b = m.matched[0]) == null ? void 0 : b.components) == null ? void 0 : C.default) && c()
    }
    );
    const f = {};
    for (const v in l.value)
        f[v] = Pe(()=>l.value[v]);
    t._route = On(f),
    t._middleware = t._middleware || {
        global: [],
        named: {}
    };
    const h = tu();
    try {
        [e,n] = pl(()=>a.isReady()),
        await e,
        n()
    } catch (v) {
        [e,n] = pl(()=>ar(t, zi, [v])),
        await e,
        n()
    }
    const d = vb("_layout");
    return a.beforeEach(async(v,m)=>{
        var D;
        v.meta = On(v.meta),
        t.isHydrating && d.value && !Di(v.meta.layout) && (v.meta.layout = d.value),
        t._processingMiddleware = !0;
        const _ = new Set([...Pb, ...t._middleware.global]);
        for (const b of v.matched) {
            const C = b.meta.middleware;
            if (C)
                if (Array.isArray(C))
                    for (const S of C)
                        _.add(S);
                else
                    _.add(C)
        }
        for (const b of _) {
            const C = typeof b == "string" ? t._middleware.named[b] || await ((D = Qs[b]) == null ? void 0 : D.call(Qs).then(T=>T.default || T)) : b;
            if (!C)
                throw new Error(`Unknown route middleware: '${b}'.`);
            const S = await ar(t, C, [v, m]);
            if (!t.payload.serverRendered && t.isHydrating && (S === !1 || S instanceof Error)) {
                const T = S || bl({
                    statusCode: 404,
                    statusMessage: `Page Not Found: ${o}`
                });
                return await ar(t, zi, [T]),
                !1
            }
            if (S || S === !1)
                return S
        }
    }
    ),
    a.afterEach(async v=>{
        delete t._processingMiddleware,
        !t.isHydrating && h.value && await ar(t, yb),
        v.matched.length === 0 && await ar(t, zi, [bl({
            statusCode: 404,
            fatal: !1,
            statusMessage: `Page not found: ${v.fullPath}`
        })])
    }
    ),
    t.hooks.hookOnce("app:created", async()=>{
        try {
            await a.replace({
                ...a.resolve(o),
                name: void 0,
                force: !0
            })
        } catch (v) {
            await ar(t, zi, [v])
        }
    }
    ),
    {
        provide: {
            router: a
        }
    }
}
)
  , ji = {
    default: ()=>mo(()=>import("./default.js"), ["./default.js", "./state.js", "./menubackground.js", "./plugins.js", "./star.js", "./default.css"], import.meta.url).then(t=>t.default || t)
}
  , Ob = Kr(()=>{
    const t = ut()
      , e = Ts();
    t.hooks.hook("app:mounted", ()=>{
        e.beforeEach(async n=>{
            var i;
            const r = (i = n == null ? void 0 : n.meta) == null ? void 0 : i.layout;
            r && typeof ji[r] == "function" && await ji[r]()
        }
        )
    }
    ),
    t.hooks.hook("link:prefetch", n=>{
        var o, a, u, l;
        if (vi(n))
            return;
        const r = e.resolve(n);
        if (!r)
            return;
        const i = (o = r == null ? void 0 : r.meta) == null ? void 0 : o.layout;
        let s = Array.isArray((a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware) ? (u = r == null ? void 0 : r.meta) == null ? void 0 : u.middleware : [(l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware];
        s = s.filter(c=>typeof c == "string");
        for (const c of s)
            typeof Qs[c] == "function" && Qs[c]();
        i && typeof ji[i] == "function" && ji[i]()
    }
    )
}
)
  , Mb = ()=>null;
function OE(...t) {
    var h;
    const e = typeof t[t.length - 1] == "string" ? t.pop() : void 0;
    typeof t[0] != "string" && t.unshift(e);
    let[n,r,i={}] = t;
    if (typeof n != "string")
        throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function")
        throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    i.server = i.server ?? !0,
    i.default = i.default ?? Mb,
    i.lazy = i.lazy ?? !1,
    i.immediate = i.immediate ?? !0;
    const s = ut()
      , o = ()=>s.isHydrating ? s.payload.data[n] : s.static.data[n]
      , a = ()=>o() !== void 0;
    s._asyncData[n] || (s._asyncData[n] = {
        data: Yt(o() ?? ((h = i.default) == null ? void 0 : h.call(i)) ?? null),
        pending: Yt(!a()),
        error: Yt(s.payload._errors[n] ? Fa(s.payload._errors[n]) : null)
    });
    const u = {
        ...s._asyncData[n]
    };
    u.refresh = u.execute = (d={})=>{
        if (s._asyncDataPromises[n]) {
            if (d.dedupe === !1)
                return s._asyncDataPromises[n];
            s._asyncDataPromises[n].cancelled = !0
        }
        if (d._initial && a())
            return o();
        u.pending.value = !0;
        const p = new Promise((g,v)=>{
            try {
                g(r(s))
            } catch (m) {
                v(m)
            }
        }
        ).then(g=>{
            if (p.cancelled)
                return s._asyncDataPromises[n];
            i.transform && (g = i.transform(g)),
            i.pick && (g = Lb(g, i.pick)),
            u.data.value = g,
            u.error.value = null
        }
        ).catch(g=>{
            var v;
            if (p.cancelled)
                return s._asyncDataPromises[n];
            u.error.value = g,
            u.data.value = he(((v = i.default) == null ? void 0 : v.call(i)) ?? null)
        }
        ).finally(()=>{
            p.cancelled || (u.pending.value = !1,
            s.payload.data[n] = u.data.value,
            u.error.value && (s.payload._errors[n] = Fa(u.error.value)),
            delete s._asyncDataPromises[n])
        }
        );
        return s._asyncDataPromises[n] = p,
        s._asyncDataPromises[n]
    }
    ;
    const l = ()=>u.refresh({
        _initial: !0
    })
      , c = i.server !== !1 && s.payload.serverRendered;
    {
        const d = Yr();
        if (d && !d._nuxtOnBeforeMountCbs) {
            d._nuxtOnBeforeMountCbs = [];
            const g = d._nuxtOnBeforeMountCbs;
            d && (Yd(()=>{
                g.forEach(v=>{
                    v()
                }
                ),
                g.splice(0, g.length)
            }
            ),
            os(()=>g.splice(0, g.length)))
        }
        c && s.isHydrating && a() ? u.pending.value = !1 : d && (s.payload.serverRendered && s.isHydrating || i.lazy) && i.immediate ? d._nuxtOnBeforeMountCbs.push(l) : i.immediate && l(),
        i.watch && hr(i.watch, ()=>u.refresh());
        const p = s.hook("app:data:refresh", g=>{
            if (!g || g.includes(n))
                return u.refresh()
        }
        );
        d && os(p)
    }
    const f = Promise.resolve(s._asyncDataPromises[n]).then(()=>u);
    return Object.assign(f, u),
    f
}
async function Jp(t) {
    const e = t ? Array.isArray(t) ? t : [t] : void 0;
    await ut().hooks.callHookParallel("app:data:refresh", e)
}
function Lb(t, e) {
    const n = {};
    for (const r of e)
        n[r] = t[r];
    return n
}
const Bb = {
    path: "/",
    watch: !0,
    decode: t=>yp(decodeURIComponent(t)),
    encode: t=>encodeURIComponent(typeof t == "string" ? t : JSON.stringify(t))
};
function Ib(t, e) {
    var s;
    const n = {
        ...Bb,
        ...e
    }
      , r = $b(n) || {}
      , i = Yt(r[t] ?? ((s = n.default) == null ? void 0 : s.call(n)));
    {
        const o = ()=>{
            Hb(t, i.value, n)
        }
        ;
        n.watch ? hr(i, o, {
            deep: n.watch !== "shallow"
        }) : o()
    }
    return i
}
function $b(t={}) {
    return pb(document.cookie, t)
}
function Nb(t, e, n={}) {
    return e == null ? rh(t, e, {
        ...n,
        maxAge: -1
    }) : rh(t, e, n)
}
function Hb(t, e, n={}) {
    document.cookie = Nb(t, e, n)
}
const wl = globalThis.requestIdleCallback || (t=>{
    const e = Date.now()
      , n = {
        didTimeout: !1,
        timeRemaining: ()=>Math.max(0, 50 - (Date.now() - e))
    };
    return setTimeout(()=>{
        t(n)
    }
    , 1)
}
)
  , zb = globalThis.cancelIdleCallback || (t=>{
    clearTimeout(t)
}
)
  , jb = t=>{
    const e = ut();
    e.isHydrating ? e.hooks.hookOnce("app:suspense:resolve", ()=>{
        wl(t)
    }
    ) : wl(t)
}
;
async function Zp(t, e=Ts()) {
    if (e._routePreloaded || (e._routePreloaded = new Set),
    e._routePreloaded.has(t))
        return;
    const n = e._preloadPromises = e._preloadPromises || [];
    if (n.length > 4)
        return Promise.all(n).then(()=>Zp(t, e));
    e._routePreloaded.add(t);
    const r = e.resolve(t).matched.map(i=>{
        var s;
        return (s = i.components) == null ? void 0 : s.default
    }
    ).filter(i=>typeof i == "function");
    for (const i of r) {
        const s = Promise.resolve(i()).catch(()=>{}
        ).finally(()=>n.splice(n.indexOf(s)));
        n.push(s)
    }
    await Promise.all(n)
}
const Ub = (...t)=>t.find(e=>e !== void 0)
  , Wb = "noopener noreferrer";
function qb(t) {
    const e = t.componentName || "NuxtLink";
    return Nt({
        name: e,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(n, {slots: r}) {
            const i = Ts()
              , s = Pe(()=>n.to || n.href || "")
              , o = Pe(()=>n.external || n.target && n.target !== "_self" ? !0 : typeof s.value == "object" ? !1 : s.value === "" || vi(s.value, !0))
              , a = Yt(!1)
              , u = Yt(null);
            if (n.prefetch !== !1 && n.noPrefetch !== !0 && typeof s.value == "string" && n.target !== "_blank" && !Yb()) {
                const c = ut();
                let f, h = null;
                Si(()=>{
                    const d = Vb();
                    jb(()=>{
                        f = wl(()=>{
                            var p;
                            (p = u == null ? void 0 : u.value) != null && p.tagName && (h = d.observe(u.value, async()=>{
                                h == null || h(),
                                h = null,
                                await Promise.all([c.hooks.callHook("link:prefetch", s.value).catch(()=>{}
                                ), !o.value && Zp(s.value, i).catch(()=>{}
                                )]),
                                a.value = !0
                            }
                            ))
                        }
                        )
                    }
                    )
                }
                ),
                xs(()=>{
                    f && zb(f),
                    h == null || h(),
                    h = null
                }
                )
            }
            return ()=>{
                var d, p;
                if (!o.value)
                    return qe(y0("RouterLink"), {
                        ref: g=>{
                            u.value = g == null ? void 0 : g.$el
                        }
                        ,
                        to: s.value,
                        ...a.value && !n.custom ? {
                            class: n.prefetchedClass || t.prefetchedClass
                        } : {},
                        activeClass: n.activeClass || t.activeClass,
                        exactActiveClass: n.exactActiveClass || t.exactActiveClass,
                        replace: n.replace,
                        ariaCurrentValue: n.ariaCurrentValue,
                        custom: n.custom
                    }, r.default);
                const l = typeof s.value == "object" ? ((d = i.resolve(s.value)) == null ? void 0 : d.href) ?? null : s.value || null
                  , c = n.target || null
                  , f = n.noRel ? null : Ub(n.rel, t.externalRelAttribute, l ? Wb : "") || null
                  , h = ()=>Cb(l, {
                    replace: n.replace
                });
                return n.custom ? r.default ? r.default({
                    href: l,
                    navigate: h,
                    route: i.resolve(l),
                    rel: f,
                    target: c,
                    isExternal: o.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : qe("a", {
                    ref: u,
                    href: l,
                    rel: f,
                    target: c
                }, (p = r.default) == null ? void 0 : p.call(r))
            }
        }
    })
}
const ah = qb({
    componentName: "NuxtLink"
});
function Vb() {
    const t = ut();
    if (t._observer)
        return t._observer;
    let e = null;
    const n = new Map
      , r = (s,o)=>(e || (e = new IntersectionObserver(a=>{
        for (const u of a) {
            const l = n.get(u.target);
            (u.isIntersecting || u.intersectionRatio > 0) && l && l()
        }
    }
    )),
    n.set(s, o),
    e.observe(s),
    ()=>{
        n.delete(s),
        e.unobserve(s),
        n.size === 0 && (e.disconnect(),
        e = null)
    }
    );
    return t._observer = {
        observe: r
    }
}
function Yb() {
    const t = navigator.connection;
    return !!(t && (t.saveData || /2g/.test(t.effectiveType)))
}
const Kb = {};
_b(Kb);
const uh = "@nuxtjs/prismic"
  , Xb = Kr(t=>{
    (t.payload.config[uh] ?? t.payload.config.public[uh] ?? {}).preview && window.addEventListener("prismicPreviewUpdate", n=>{
        n.preventDefault(),
        Jp()
    }
    )
}
)
  , Gb = t=>/^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(t);
var Qb = Object.defineProperty
  , Jb = (t,e,n)=>e in t ? Qb(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , lh = (t,e,n)=>(Jb(t, typeof e != "symbol" ? e + "" : e, n),
n);
class Vn extends Error {
    constructor(e="An invalid API response was returned", n, r) {
        super(e),
        lh(this, "url"),
        lh(this, "response"),
        this.url = n,
        this.response = r
    }
}
const Zb = t=>{
    if (Gb(t))
        return `https://${t}.cdn.prismic.io/api/v2`;
    throw new Vn(`An invalid Prismic repository name was given: ${t}`,void 0,void 0)
}
  , e1 = t=>{
    try {
        return new URL(t),
        !0
    } catch {
        return !1
    }
}
  , ui = t=>Array.isArray(t) ? t : [t]
  , t1 = {
    accessToken: "access_token"
}
  , n1 = t=>typeof t == "string" ? t : [t.field, t.direction === "desc" ? t.direction : void 0].filter(Boolean).join(" ")
  , r1 = (t,e)=>{
    const {predicates: n, ...r} = e
      , i = new URL("documents/search",`${t}/`);
    if (n)
        for (const s of ui(n))
            i.searchParams.append("q", `[${s}]`);
    for (const s in r) {
        const o = t1[s] ?? s;
        let a = r[s];
        if (o === "orderings") {
            const u = r[o];
            u != null && (a = `[${ui(u).map(c=>n1(c)).join(",")}]`)
        } else
            o === "routes" && typeof r[o] == "object" && (a = JSON.stringify(ui(r[o])));
        a != null && i.searchParams.set(o, ui(a).join(","))
    }
    return i.toString()
}
  , i1 = t=>t ? t.length === 24 ? new Date(t.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(t) : null
  , Re = {
    heading1: "heading1",
    heading2: "heading2",
    heading3: "heading3",
    heading4: "heading4",
    heading5: "heading5",
    heading6: "heading6",
    paragraph: "paragraph",
    preformatted: "preformatted",
    strong: "strong",
    em: "em",
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    image: "image",
    embed: "embed",
    hyperlink: "hyperlink",
    label: "label",
    span: "span"
}
  , Fr = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
}
  , eg = t=>{
    var e;
    return {
        link_type: Fr.Document,
        id: t.id,
        uid: t.uid ?? void 0,
        type: t.type,
        tags: t.tags,
        lang: t.lang,
        url: t.url ?? void 0,
        slug: (e = t.slugs) == null ? void 0 : e[0],
        ...t.data && Object.keys(t.data).length > 0 ? {
            data: t.data
        } : {}
    }
}
  , nu = (t,e)=>{
    if (!t)
        return null;
    const n = "link_type"in t ? t : eg(t);
    switch (n.link_type) {
    case Fr.Media:
    case Fr.Web:
        return "url"in n ? n.url : null;
    case Fr.Document:
        {
            if ("id"in n && e) {
                const r = e(n);
                if (r != null)
                    return r
            }
            return "url"in n && n.url ? n.url : null
        }
    case Fr.Any:
    default:
        return null
    }
}
  , ru = ()=>(++ru.i).toString();
ru.i = 0;
const s1 = t=>{
    const e = o1(t)
      , n = [];
    for (let r = 0; r < e.length; r++)
        n.push(tg(e[r]));
    return {
        key: ru(),
        children: n
    }
}
  , Js = (t,e=[])=>({
    key: ru(),
    type: t.type,
    text: "text"in t ? t.text : void 0,
    node: t,
    children: e
})
  , Ru = t=>Js({
    type: Re.span,
    text: t,
    spans: []
})
  , o1 = t=>{
    const e = t.slice(0);
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (r.type === Re.listItem || r.type === Re.oListItem) {
            const i = [r];
            for (; e[n + 1] && e[n + 1].type === r.type; )
                i.push(e[n + 1]),
                e.splice(n, 1);
            r.type === Re.listItem ? e[n] = {
                type: Re.list,
                items: i
            } : e[n] = {
                type: Re.oList,
                items: i
            }
        }
    }
    return e
}
  , tg = t=>{
    if ("text"in t)
        return Js(t, ng(t.spans, t));
    if ("items"in t) {
        const e = [];
        for (let n = 0; n < t.items.length; n++)
            e.push(tg(t.items[n]));
        return Js(t, e)
    }
    return Js(t)
}
  , ng = (t,e,n)=>{
    if (!t.length)
        return [Ru(e.text)];
    const r = t.slice(0);
    r.sort((s,o)=>s.start - o.start || o.end - s.end);
    const i = [];
    for (let s = 0; s < r.length; s++) {
        const o = r[s]
          , a = n && n.start || 0
          , u = o.start - a
          , l = o.end - a
          , c = e.text.slice(u, l)
          , f = [];
        for (let d = s; d < r.length; d++) {
            const p = r[d];
            p !== o && (p.start >= o.start && p.end <= o.end ? (f.push(p),
            r.splice(d, 1),
            d--) : p.start < o.end && p.end > o.start && (f.push({
                ...p,
                end: o.end
            }),
            r[d] = {
                ...p,
                start: o.end
            }))
        }
        s === 0 && u > 0 && i.push(Ru(e.text.slice(0, u)));
        const h = {
            ...o,
            text: c
        };
        i.push(Js(h, ng(f, {
            ...e,
            text: c
        }, o))),
        l < e.text.length && i.push(Ru(e.text.slice(l, r[s + 1] ? r[s + 1].start - a : void 0)))
    }
    return i
}
  , a1 = (t,e=" ")=>{
    let n = "";
    for (let r = 0; r < t.length; r++)
        "text"in t[r] && (n += (n ? e : "") + t[r].text);
    return n
}
  , u1 = (t,e)=>rg(s1(t).children, e)
  , rg = (t,e)=>{
    const n = [];
    for (let r = 0; r < t.length; r++) {
        const i = t[r]
          , s = e(i.type, i.node, i.text, rg(i.children, e), i.key);
        s != null && n.push(s)
    }
    return n
}
  , l1 = {
    [Re.listItem]: "listItem",
    [Re.oListItem]: "oListItem",
    [Re.list]: "list",
    [Re.oList]: "oList"
}
  , c1 = t=>(e,n,r,i,s)=>{
    const o = t[l1[e] || e];
    if (o)
        return o({
            type: e,
            node: n,
            text: r,
            children: i,
            key: s
        })
}
  , f1 = (...t)=>(...e)=>{
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (r) {
            const i = r(...e);
            if (i != null)
                return i
        }
    }
}
  , ig = (t,e)=>t ? a1(t, e) : null
  , h1 = /["'&<>]/
  , yo = t=>{
    const e = "" + t
      , n = h1.exec(e);
    if (!n)
        return e;
    let r, i = "", s = 0, o = 0;
    for (s = n.index; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
        case 34:
            r = "&quot;";
            break;
        case 38:
            r = "&amp;";
            break;
        case 39:
            r = "&#39;";
            break;
        case 60:
            r = "&lt;";
            break;
        case 62:
            r = "&gt;";
            break;
        default:
            continue
        }
        o !== s && (i += e.substring(o, s)),
        o = s + 1,
        i += r
    }
    return o !== s ? i + e.substring(o, s) : i
}
  , es = t=>"data"in t && "label"in t.data ? ` class="${t.data.label}"` : ""
  , zt = (t,e,n)=>`<${t}${es(e)}>${n.join("")}</${t}>`
  , d1 = t=>`<pre${es(t)}>${yo(t.text)}</pre>`
  , p1 = (t,e)=>{
    let n = `<img src="${e.url}" alt="${yo(e.alt)}"${e.copyright ? ` copyright="${yo(e.copyright)}"` : ""} />`;
    return e.linkTo && (n = sg(t, {
        type: Re.hyperlink,
        data: e.linkTo,
        start: 0,
        end: 0
    }, [n])),
    `<p class="block-img">${n}</p>`
}
  , g1 = t=>`<div data-oembed="${t.oembed.embed_url}" data-oembed-type="${t.oembed.type}" data-oembed-provider="${t.oembed.provider_name}"${es(t)}>${t.oembed.html}</div>`
  , sg = (t,e,n)=>{
    switch (e.data.link_type) {
    case Fr.Web:
        return `<a href="${yo(e.data.url)}" ${e.data.target ? `target="${e.data.target}" ` : ""}rel="noopener noreferrer"${es(e)}>${n.join("")}</a>`;
    case Fr.Document:
        return `<a href="${nu(e.data, t)}"${es(e)}>${n.join("")}</a>`;
    case Fr.Media:
        return `<a href="${e.data.url}"${es(e)}>${n.join("")}</a>`
    }
}
  , _1 = t=>t ? yo(t).replace(/\n/g, "<br />") : ""
  , ch = t=>(e,n,r,i,s)=>{
    switch (n.type) {
    case Re.heading1:
        return zt("h1", n, i);
    case Re.heading2:
        return zt("h2", n, i);
    case Re.heading3:
        return zt("h3", n, i);
    case Re.heading4:
        return zt("h4", n, i);
    case Re.heading5:
        return zt("h5", n, i);
    case Re.heading6:
        return zt("h6", n, i);
    case Re.paragraph:
        return zt("p", n, i);
    case Re.preformatted:
        return d1(n);
    case Re.strong:
        return zt("strong", n, i);
    case Re.em:
        return zt("em", n, i);
    case Re.listItem:
        return zt("li", n, i);
    case Re.oListItem:
        return zt("li", n, i);
    case Re.list:
        return zt("ul", n, i);
    case Re.oList:
        return zt("ol", n, i);
    case Re.image:
        return p1(t, n);
    case Re.embed:
        return g1(n);
    case Re.hyperlink:
        return sg(t, n, i);
    case Re.label:
        return zt("span", n, i);
    case Re.span:
    default:
        return _1(r)
    }
}
  , m1 = t=>{
    const e = {};
    for (const n in t) {
        const r = t[n];
        r && (e[n] = i=>r({
            ...i,
            children: i.children.join("")
        }))
    }
    return c1(e)
}
  , og = (t,e,n)=>{
    if (t) {
        let r;
        return n ? r = f1(typeof n == "object" ? m1(n) : (i,s,o,a,u)=>n(i, s, o, a.join(""), u), ch(e)) : r = ch(e),
        u1(t, r).join("")
    } else
        return null
}
  , y1 = t=>t.replace(/[A-Z]/g, e=>`-${e.toLowerCase()}`)
  , Po = (t,e)=>{
    const n = new URL(t);
    for (const i in e) {
        const s = y1(i)
          , o = e[i];
        o === void 0 ? n.searchParams.delete(s) : Array.isArray(o) ? n.searchParams.set(s, o.join(",")) : n.searchParams.set(s, `${o}`)
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"),
    n.searchParams.append("s", r)),
    n.toString()
}
  , D1 = (t,{pixelDensities: e, ...n})=>e.map(r=>`${Po(t, {
    ...n,
    dpr: r
})} ${r}x`).join(", ")
  , Pu = (t,{widths: e, ...n})=>e.map(r=>`${Po(t, {
    ...n,
    w: void 0,
    width: r
})} ${r}w`).join(", ")
  , ag = t=>t != null
  , ug = t=>ag(t) ? t.length === 1 && "text"in t[0] ? !!t[0].text : !!t.length : !1
  , iu = t=>ag(t) && !!t.url
  , v1 = iu
  , lg = (t,e={})=>t && iu(t) ? Po(t.url, e) : null
  , fh = [640, 828, 1200, 2048, 3840]
  , cg = (t,e={})=>{
    if (t && iu(t)) {
        let {widths: n=fh, ...r} = e;
        const {url: i, dimensions: s, alt: o, copyright: a, ...u} = t
          , l = Object.values(u);
        return n === "thumbnails" && l.length < 1 && (n = fh),
        {
            src: Po(i, r),
            srcset: n === "thumbnails" ? [Pu(i, {
                ...r,
                widths: [s.width]
            }), ...l.map(c=>Pu(c.url, {
                ...r,
                widths: [c.dimensions.width]
            }))].join(", ") : Pu(t.url, {
                ...r,
                widths: n
            })
        }
    } else
        return null
}
  , b1 = [1, 2, 3]
  , fg = (t,e={})=>{
    if (t && iu(t)) {
        const {pixelDensities: n=b1, ...r} = e;
        return {
            src: Po(t.url, r),
            srcset: D1(t.url, {
                ...r,
                pixelDensities: n
            })
        }
    } else
        return null
}
  , kt = (t={},e)=>({
    ...t,
    predicates: [...t.predicates || [], ...ui(e)]
})
  , w1 = t=>typeof t == "function" ? t : ()=>t
  , xc = (t,e)=>{
    const n = t.find(r=>e(r));
    if (!n)
        throw new Vn("Ref could not be found.",void 0,void 0);
    return n
}
  , hh = t=>xc(t, e=>e.isMasterRef)
  , ku = (t,e)=>xc(t, n=>n.id === e)
  , Au = (t,e)=>xc(t, n=>n.label === e)
  , hg = "io.prismic.preview"
  , C1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: hg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dh = t=>t.replace(/%3B/g, ";")
  , E1 = t=>{
    const e = t.split("; ");
    let n;
    for (const r of e) {
        const i = r.split("=");
        if (dh(i[0]).replace(/%3D/g, "=") === hg) {
            n = dh(i.slice(1).join("="));
            continue
        }
    }
    return n
}
  , x1 = t=>t.replace(/(\n| )*( |{|})(\n| )*/gm, (e,n,r)=>r);
class T1 extends Vn {
}
class S1 extends Vn {
}
class F1 extends Vn {
}
const dg = t=>Array.isArray(t) ? `[${t.map(dg).join(", ")}]` : typeof t == "string" ? `"${t}"` : t instanceof Date ? `${t.getTime()}` : `${t}`
  , Oe = t=>(n,...r)=>{
    const i = r.map(dg).join(", ")
      , s = n && r.length ? ", " : "";
    return `[${t}(${n}${s}${i})]`
}
  , ph = t=>{
    const e = Oe(t);
    return r=>e(r)
}
  , R1 = t=>{
    const e = Oe(t);
    return (...r)=>e("", ...r)
}
  , Wn = {
    at: Oe("at"),
    not: Oe("not"),
    any: Oe("any"),
    in: Oe("in"),
    fulltext: Oe("fulltext"),
    has: ph("has"),
    missing: ph("missing"),
    similar: R1("similar"),
    geopointNear: Oe("geopoint.near"),
    numberLessThan: Oe("number.lt"),
    numberGreaterThan: Oe("number.gt"),
    numberInRange: Oe("number.inRange"),
    dateAfter: Oe("date.after"),
    dateBefore: Oe("date.before"),
    dateBetween: Oe("date.between"),
    dateDayOfMonth: Oe("date.day-of-month"),
    dateDayOfMonthAfter: Oe("date.day-of-month-after"),
    dateDayOfMonthBefore: Oe("date.day-of-month-before"),
    dateDayOfWeek: Oe("date.day-of-week"),
    dateDayOfWeekAfter: Oe("date.day-of-week-after"),
    dateDayOfWeekBefore: Oe("date.day-of-week-before"),
    dateMonth: Oe("date.month"),
    dateMonthAfter: Oe("date.month-after"),
    dateMonthBefore: Oe("date.month-before"),
    dateYear: Oe("date.year"),
    dateHour: Oe("date.hour"),
    dateHourAfter: Oe("date.hour-after"),
    dateHourBefore: Oe("date.hour-before")
};
var P1 = Object.defineProperty
  , k1 = (t,e,n)=>e in t ? P1(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n
  , Nn = (t,e,n)=>(k1(t, typeof e != "symbol" ? e + "" : e, n),
n);
const A1 = 100
  , O1 = 5e3
  , M1 = 500;
var zn;
(function(t) {
    t.Master = "Master",
    t.ReleaseID = "ReleaseID",
    t.ReleaseLabel = "ReleaseLabel",
    t.Manual = "Manual"
}
)(zn || (zn = {}));
const Ai = t=>Wn.at("document.type", t)
  , gh = t=>Wn.at("document.tags", ui(t))
  , Wo = t=>Wn.any("document.tags", ui(t))
  , L1 = (t,e)=>new B1(t,e);
class B1 {
    constructor(e, n={}) {
        if (Nn(this, "endpoint"),
        Nn(this, "accessToken"),
        Nn(this, "routes"),
        Nn(this, "brokenRoute"),
        Nn(this, "fetchFn"),
        Nn(this, "defaultParams"),
        Nn(this, "refState", {
            mode: zn.Master,
            autoPreviewsEnabled: !0
        }),
        Nn(this, "cachedRepository"),
        Nn(this, "cachedRepositoryExpiration", 0),
        Nn(this, "graphqlFetch", this.graphQLFetch.bind(this)),
        e1(e) ? this.endpoint = e : this.endpoint = Zb(e),
        this.accessToken = n.accessToken,
        this.routes = n.routes,
        this.brokenRoute = n.brokenRoute,
        this.defaultParams = n.defaultParams,
        n.ref && this.queryContentFromRef(n.ref),
        typeof n.fetch == "function")
            this.fetchFn = n.fetch;
        else if (typeof globalThis.fetch == "function")
            this.fetchFn = globalThis.fetch;
        else
            throw new Vn("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.",void 0,void 0);
        this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis)),
        this.graphQLFetch = this.graphQLFetch.bind(this)
    }
    enableAutoPreviews() {
        this.refState.autoPreviewsEnabled = !0
    }
    enableAutoPreviewsFromReq(e) {
        this.refState.httpRequest = e,
        this.refState.autoPreviewsEnabled = !0
    }
    disableAutoPreviews() {
        this.refState.autoPreviewsEnabled = !1
    }
    async query(e, n) {
        const r = await this.buildQueryURL({
            ...n,
            predicates: e
        });
        return await this.fetch(r, n)
    }
    async get(e) {
        const n = await this.buildQueryURL(e);
        return await this.fetch(n, e)
    }
    async getFirst(e) {
        var n;
        const r = {
            ...e
        };
        !(e && e.page) && !(e != null && e.pageSize) && (r.pageSize = ((n = this.defaultParams) == null ? void 0 : n.pageSize) ?? 1);
        const i = await this.buildQueryURL(r)
          , o = (await this.fetch(i, e)).results[0];
        if (o)
            return o;
        throw new Vn("No documents were returned",i,void 0)
    }
    async dangerouslyGetAll(e={}) {
        var n;
        const {limit: r=1 / 0, ...i} = e
          , s = {
            ...i,
            pageSize: Math.min(r, i.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || A1)
        }
          , o = [];
        let a;
        for (; (!a || a.next_page) && o.length < r; ) {
            const u = a ? a.page + 1 : void 0;
            a = await this.get({
                ...s,
                page: u
            }),
            o.push(...a.results),
            a.next_page && await new Promise(l=>setTimeout(l, M1))
        }
        return o.slice(0, r)
    }
    async getByID(e, n) {
        return await this.getFirst(kt(n, Wn.at("document.id", e)))
    }
    async getByIDs(e, n) {
        return await this.get(kt(n, Wn.in("document.id", e)))
    }
    async getAllByIDs(e, n) {
        return await this.dangerouslyGetAll(kt(n, Wn.in("document.id", e)))
    }
    async getByUID(e, n, r) {
        return await this.getFirst(kt(r, [Ai(e), Wn.at(`my.${e}.uid`, n)]))
    }
    async getByUIDs(e, n, r) {
        return await this.get(kt(r, [Ai(e), Wn.in(`my.${e}.uid`, n)]))
    }
    async getAllByUIDs(e, n, r) {
        return await this.dangerouslyGetAll(kt(r, [Ai(e), Wn.in(`my.${e}.uid`, n)]))
    }
    async getSingle(e, n) {
        return await this.getFirst(kt(n, Ai(e)))
    }
    async getByType(e, n) {
        return await this.get(kt(n, Ai(e)))
    }
    async getAllByType(e, n) {
        return await this.dangerouslyGetAll(kt(n, Ai(e)))
    }
    async getByTag(e, n) {
        return await this.get(kt(n, Wo(e)))
    }
    async getAllByTag(e, n) {
        return await this.dangerouslyGetAll(kt(n, Wo(e)))
    }
    async getByEveryTag(e, n) {
        return await this.get(kt(n, gh(e)))
    }
    async getAllByEveryTag(e, n) {
        return await this.dangerouslyGetAll(kt(n, gh(e)))
    }
    async getBySomeTags(e, n) {
        return await this.get(kt(n, Wo(e)))
    }
    async getAllBySomeTags(e, n) {
        return await this.dangerouslyGetAll(kt(n, Wo(e)))
    }
    async getRepository(e) {
        const n = new URL(this.endpoint);
        return this.accessToken && n.searchParams.set("access_token", this.accessToken),
        await this.fetch(n.toString(), e)
    }
    async getRefs(e) {
        return (await this.getRepository(e)).refs
    }
    async getRefByID(e, n) {
        const r = await this.getRefs(n);
        return ku(r, e)
    }
    async getRefByLabel(e, n) {
        const r = await this.getRefs(n);
        return Au(r, e)
    }
    async getMasterRef(e) {
        const n = await this.getRefs(e);
        return hh(n)
    }
    async getReleases(e) {
        return (await this.getRefs(e)).filter(r=>!r.isMasterRef)
    }
    async getReleaseByID(e, n) {
        const r = await this.getReleases(n);
        return ku(r, e)
    }
    async getReleaseByLabel(e, n) {
        const r = await this.getReleases(n);
        return Au(r, e)
    }
    async getTags(e) {
        try {
            const n = await this.getCachedRepositoryForm("tags", e)
              , r = new URL(n.action);
            return this.accessToken && r.searchParams.set("access_token", this.accessToken),
            await this.fetch(r.toString(), e)
        } catch {
            return (await this.getRepository(e)).tags
        }
    }
    async buildQueryURL({signal: e, ...n}={}) {
        const r = n.ref || await this.getResolvedRefString()
          , i = n.integrationFieldsRef || (await this.getCachedRepository({
            signal: e
        })).integrationFieldsRef || void 0;
        return r1(this.endpoint, {
            ...this.defaultParams,
            ...n,
            ref: r,
            integrationFieldsRef: i,
            routes: n.routes || this.routes,
            brokenRoute: n.brokenRoute || this.brokenRoute,
            accessToken: n.accessToken || this.accessToken
        })
    }
    async resolvePreviewURL(e) {
        var n, r;
        let i = e.documentID
          , s = e.previewToken;
        if (typeof globalThis.location < "u") {
            const o = new URLSearchParams(globalThis.location.search);
            i = i || o.get("documentId"),
            s = s || o.get("token")
        } else if (this.refState.httpRequest) {
            if ("query"in this.refState.httpRequest)
                i = i || ((n = this.refState.httpRequest.query) == null ? void 0 : n.documentId),
                s = s || ((r = this.refState.httpRequest.query) == null ? void 0 : r.token);
            else if ("url"in this.refState.httpRequest && this.refState.httpRequest.url) {
                const o = new URL(this.refState.httpRequest.url).searchParams;
                i = i || o.get("documentId"),
                s = s || o.get("token")
            }
        }
        if (i != null && s != null) {
            const o = await this.getByID(i, {
                signal: e.signal,
                ref: s,
                lang: "*"
            })
              , a = nu(o, e.linkResolver);
            if (typeof a == "string")
                return a
        }
        return e.defaultURL
    }
    queryLatestContent() {
        this.refState.mode = zn.Master
    }
    queryContentFromReleaseByID(e) {
        this.refState = {
            ...this.refState,
            mode: zn.ReleaseID,
            releaseID: e
        }
    }
    queryContentFromReleaseByLabel(e) {
        this.refState = {
            ...this.refState,
            mode: zn.ReleaseLabel,
            releaseLabel: e
        }
    }
    queryContentFromRef(e) {
        this.refState = {
            ...this.refState,
            mode: zn.Manual,
            ref: e
        }
    }
    async graphQLFetch(e, n) {
        const r = await this.getCachedRepository()
          , i = await this.getResolvedRefString()
          , s = {
            "Prismic-ref": i,
            Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
            ...n ? n.headers : {}
        };
        r.integrationFieldsRef && (s["Prismic-integration-field-ref"] = r.integrationFieldsRef);
        const o = {};
        for (const l in s)
            s[l] && (o[l.toLowerCase()] = s[l]);
        const a = new URL(e);
        a.searchParams.set("ref", i);
        const u = a.searchParams.get("query");
        return u && a.searchParams.set("query", x1(u)),
        await this.fetchFn(a.toString(), {
            ...n,
            headers: o
        })
    }
    async getCachedRepository(e) {
        return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + O1,
        this.cachedRepository = await this.getRepository(e)),
        this.cachedRepository
    }
    async getCachedRepositoryForm(e, n) {
        const i = (await this.getCachedRepository(n)).forms[e];
        if (!i)
            throw new Vn(`Form with name "${e}" could not be found`,void 0,void 0);
        return i
    }
    async getResolvedRefString(e) {
        var n, r;
        if (this.refState.autoPreviewsEnabled) {
            let o, a;
            if ((n = this.refState.httpRequest) != null && n.headers ? "get"in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie"in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie),
            a && (o = E1(a)),
            o)
                return o
        }
        const i = await this.getCachedRepository(e)
          , s = this.refState.mode;
        if (s === zn.ReleaseID)
            return ku(i.refs, this.refState.releaseID).ref;
        if (s === zn.ReleaseLabel)
            return Au(i.refs, this.refState.releaseLabel).ref;
        if (s === zn.Manual) {
            const o = await w1(this.refState.ref)();
            if (typeof o == "string")
                return o
        }
        return hh(i.refs).ref
    }
    async fetch(e, n={}) {
        const r = await this.fetchFn(e, {
            signal: n.signal
        });
        let i;
        try {
            i = await r.json()
        } catch {
            throw r.status === 404 ? new S1(`Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`,e,void 0) : new Vn(void 0,e,void 0)
        }
        switch (r.status) {
        case 200:
            return i;
        case 400:
            throw new F1(i.message,e,i);
        case 401:
        case 403:
            throw new T1("error"in i ? i.error : i.message,e,i)
        }
        throw new Vn(void 0,e,i)
    }
}
const bi = t=>D0(t)
  , I1 = "div"
  , $1 = Nt({
    name: "PrismicEmbed",
    props: {
        field: {
            type: Object,
            required: !0
        },
        wrapper: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        }
    },
    setup(t) {
        return t.field ? ()=>qe(bi(t.wrapper || I1), {
            "data-oembed": t.field.embed_url,
            "data-oembed-type": t.field.type,
            "data-oembed-provider": t.field.provider_name,
            innerHTML: t.field.html || null
        }) : ()=>null
    }
})
  , _h = $1
  , pg = Symbol("prismic")
  , ko = ()=>$t(pg, {
    options: {
        endpoint: ""
    }
})
  , N1 = "img"
  , H1 = t=>{
    const {options: e} = ko()
      , n = Pe(()=>{
        var a, u;
        const l = he(t.field);
        if (!v1(l))
            return {
                src: null,
                srcset: null
            };
        const c = he(t.imgixParams)
          , f = he(t.widths)
          , h = he(t.pixelDensities);
        return f ? cg(l, {
            ...c,
            widths: f === "defaults" ? (a = e.components) == null ? void 0 : a.imageWidthSrcSetDefaults : f
        }) : h ? fg(l, {
            ...c,
            pixelDensities: h === "defaults" ? (u = e.components) == null ? void 0 : u.imagePixelDensitySrcSetDefaults : h
        }) : {
            src: lg(l, c),
            srcset: null
        }
    }
    )
      , r = Pe(()=>n.value.src)
      , i = Pe(()=>n.value.srcset)
      , s = Pe(()=>he(t.field).alt || "")
      , o = Pe(()=>he(t.field).copyright || null);
    return {
        src: r,
        srcset: i,
        alt: s,
        copyright: o
    }
}
  , z1 = Nt({
    name: "PrismicImage",
    props: {
        field: {
            type: Object,
            required: !0
        },
        imageComponent: {
            type: [String, Object],
            default: void 0,
            required: !1
        },
        imgixParams: {
            type: Object,
            default: void 0,
            required: !1
        },
        widths: {
            type: [String, Object],
            default: void 0,
            required: !1
        },
        pixelDensities: {
            type: [String, Object],
            default: void 0,
            required: !1
        }
    },
    setup(t) {
        if (!t.field)
            return ()=>null;
        const {options: e} = ko()
          , n = Pe(()=>{
            var a;
            return t.imageComponent || ((a = e.components) == null ? void 0 : a.imageComponent) || N1
        }
        )
          , {src: r, srcset: i, alt: s, copyright: o} = H1(t);
        return ()=>{
            const a = {
                src: r.value,
                srcset: i.value,
                alt: s.value
            };
            switch (n.value) {
            case "img":
                return qe("img", a);
            default:
                return qe(bi(n.value), {
                    ...a,
                    copyright: o.value
                })
            }
        }
    }
})
  , mh = z1
  , gg = t=>{
    const e = /^\/(?!\/)/.test(t)
      , n = !e && !/^https?:\/\//i.test(t);
    return e && !n
}
  , j1 = (t,e,n)=>{
    if (typeof t == "string")
        return e.default && e.default(n);
    if (e.default) {
        const r = e.default(n);
        return {
            ...e,
            default: ()=>r
        }
    } else
        return e
}
  , U1 = "router-link"
  , W1 = "a"
  , q1 = "noopener noreferrer"
  , V1 = t=>{
    const {options: e} = ko()
      , n = Pe(()=>{
        var o, a;
        const u = he(t.internalComponent) || ((o = e.components) == null ? void 0 : o.linkInternalComponent) || U1
          , l = he(t.externalComponent) || ((a = e.components) == null ? void 0 : a.linkExternalComponent) || W1;
        return r.value && gg(r.value) && !i.value ? u : l
    }
    )
      , r = Pe(()=>{
        const o = he(t.field)
          , a = he(t.linkResolver) ?? e.linkResolver;
        return nu(o, a) ?? ""
    }
    )
      , i = Pe(()=>{
        const o = he(t.field)
          , a = he(t.target);
        return typeof a < "u" ? a : o && "target"in o && o.target ? o.target : null
    }
    )
      , s = Pe(()=>{
        var o;
        const a = he(t.rel);
        if (typeof a < "u")
            return a;
        if (i.value === "_blank") {
            const u = he(t.blankTargetRelAttribute);
            return typeof u < "u" ? u : typeof ((o = e.components) == null ? void 0 : o.linkBlankTargetRelAttribute) < "u" ? e.components.linkBlankTargetRelAttribute : q1
        } else
            return null
    }
    );
    return {
        type: n,
        href: r,
        target: i,
        rel: s
    }
}
  , Y1 = Nt({
    name: "PrismicLink",
    props: {
        field: {
            type: Object,
            required: !0
        },
        linkResolver: {
            type: Function,
            default: void 0,
            required: !1
        },
        target: {
            type: String,
            default: void 0,
            required: !1
        },
        rel: {
            type: String,
            default: void 0,
            required: !1
        },
        blankTargetRelAttribute: {
            type: String,
            default: void 0,
            required: !1
        },
        internalComponent: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        },
        externalComponent: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        }
    },
    setup(t, {slots: e}) {
        if (!t.field)
            return ()=>null;
        const {type: n, href: r, target: i, rel: s} = V1(t);
        return ()=>{
            const o = n.value === "a" ? "a" : bi(n.value)
              , a = j1(o, e, On({
                href: r.value
            }));
            return typeof o == "string" ? qe(o, {
                href: r.value,
                target: i.value,
                rel: s.value
            }, a) : qe(o, {
                to: r.value
            }, a)
        }
    }
})
  , yh = Y1
  , K1 = "div"
  , X1 = t=>({
    text: Pe(()=>{
        const n = he(t.field);
        return ug(n) ? ig(he(n), he(t.separator)) : he(t.fallback) ?? ""
    }
    )
})
  , G1 = Nt({
    name: "PrismicText",
    props: {
        field: {
            type: Array,
            default: void 0,
            required: !1
        },
        separator: {
            type: String,
            default: void 0,
            required: !1
        },
        wrapper: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        },
        fallback: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(t) {
        const {text: e} = X1(t);
        return ()=>{
            const n = bi(t.wrapper || K1);
            return qe(n, null, {
                default: ()=>e.value
            })
        }
    }
})
  , Dh = G1
  , Q1 = "div"
  , J1 = t=>{
    const {options: e} = ko();
    return {
        html: Pe(()=>{
            const r = he(t.field);
            if (!ug(r))
                return he(t.fallback) ?? "";
            const i = he(t.linkResolver) ?? e.linkResolver
              , s = he(t.htmlSerializer) ?? e.htmlSerializer;
            return og(he(r), i, s)
        }
        )
    }
}
  , Z1 = Nt({
    name: "PrismicRichText",
    props: {
        field: {
            type: Array,
            default: void 0,
            required: !1
        },
        linkResolver: {
            type: Function,
            default: void 0,
            required: !1
        },
        htmlSerializer: {
            type: [Function, Object],
            default: void 0,
            required: !1
        },
        wrapper: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        },
        fallback: {
            type: String,
            default: void 0,
            required: !1
        }
    },
    setup(t) {
        const {html: e} = J1(t)
          , n = Yt(null)
          , r = $t(eu, null);
        if (r) {
            let i = [];
            const s = function(u) {
                u.preventDefault(),
                r.push(this.href)
            }
              , o = ()=>{
                const u = n.value && "$el"in n.value ? n.value.$el : n.value;
                u && "querySelectorAll"in u && (i = Array.from(u.querySelectorAll("a")).map(l=>{
                    const c = l.getAttribute("href");
                    if (c && gg(c)) {
                        const f = s.bind({
                            href: c
                        });
                        return l.addEventListener("click", f),
                        {
                            element: l,
                            listener: f
                        }
                    } else
                        return !1
                }
                ).filter(l=>l))
            }
              , a = ()=>{
                i.forEach(({element: u, listener: l})=>u.removeEventListener("click", l)),
                i = []
            }
            ;
            hr(e, ()=>{
                a(),
                Ti(o)
            }
            , {
                immediate: !0
            }),
            xs(()=>{
                a()
            }
            )
        }
        return ()=>qe(bi(t.wrapper || Q1), {
            innerHTML: e.value,
            ref: n
        })
    }
})
  , vh = Z1
  , ew = ()=>null
  , tw = Nt({
    name: "SliceZone",
    props: {
        slices: {
            type: Array,
            required: !0
        },
        components: {
            type: Object,
            default: void 0,
            required: !1
        },
        resolver: {
            type: Function,
            default: void 0,
            required: !1
        },
        context: {
            type: null,
            default: void 0,
            required: !1
        },
        defaultComponent: {
            type: Object,
            default: void 0,
            required: !1
        },
        wrapper: {
            type: [String, Object, Function],
            default: void 0,
            required: !1
        }
    },
    setup(t) {
        if (!t.slices)
            return ()=>null;
        const {options: e} = ko()
          , n = Pe(()=>t.slices.map((r,i)=>{
            var s;
            const o = "slice_type"in r ? r.slice_type : r.type;
            let a = t.components && o in t.components ? t.components[o] : t.defaultComponent || ((s = e.components) == null ? void 0 : s.sliceZoneDefaultComponent) || ew;
            if (t.resolver) {
                const c = t.resolver({
                    slice: r,
                    sliceName: o,
                    i
                });
                c && (a = c)
            }
            const l = {
                key: "id"in r && r.id ? r.id : `${i}-${JSON.stringify(r)}`,
                slice: r,
                index: i,
                context: t.context,
                slices: t.slices
            };
            return qe(bi(a), l)
        }
        ));
        return ()=>{
            if (t.wrapper) {
                const r = bi(t.wrapper);
                return typeof r == "string" ? qe(r, null, n.value) : qe(r, null, {
                    default: ()=>n.value
                })
            } else
                return n.value
        }
    }
})
  , bh = tw
  , nw = t=>{
    let e;
    return t.client ? e = t.client : e = L1(t.endpoint, {
        fetch: async(s,o)=>{
            let a;
            return typeof globalThis.fetch == "function" ? a = globalThis.fetch : a = (await mo(()=>import("./browser.3f5b2d8a.js").then(u=>u.b), ["./browser.3f5b2d8a.js", "./helpers.js"], import.meta.url)).default,
            await a(s, o)
        }
        ,
        ...t.clientConfig
    }),
    {
        options: t,
        ...{
            client: e,
            predicate: Wn,
            cookie: C1
        },
        ...{
            asText: ig,
            asHTML: (s,o,a)=>og(s, o || t.linkResolver, a || t.htmlSerializer),
            asLink: (s,o)=>nu(s, o || t.linkResolver),
            asDate: i1,
            asImageSrc: lg,
            asImageWidthSrcSet: cg,
            asImagePixelDensitySrcSet: fg,
            documentToLinkField: eg
        },
        install(s) {
            s.provide(pg, this),
            s.config.globalProperties.$prismic = this,
            t.injectComponents !== !1 && (s.component(yh.name, yh),
            s.component(_h.name, _h),
            s.component(mh.name, mh),
            s.component(Dh.name, Dh),
            s.component(vh.name, vh),
            s.component(bh.name, bh))
        }
    }
}
  , rw = void 0
  , iw = t=>{
    if (t.type === "homepage")
        return "/"
}
  , sw = void 0
  , wh = "@nuxtjs/prismic"
  , ow = Kr(t=>{
    const e = t.payload.config[wh] ?? t.payload.config.public[wh] ?? {}
      , n = nw({
        ...e,
        client: rw,
        linkResolver: iw,
        htmlSerializer: sw,
        injectComponents: !1,
        components: {
            linkInternalComponent: ah,
            linkExternalComponent: ah,
            ...e.components
        }
    });
    if (t.vueApp.use(n),
    e.preview) {
        const r = Ib("io.prismic.preview").value;
        if (r)
            try {
                const i = typeof r == "string" ? JSON.parse(decodeURIComponent(r)) : r;
                Object.keys(i).some(s=>s in i && typeof i[s] == "object" && i[s] !== null && "preview"in i[s] && i[s].preview) && Jp()
            } catch (i) {
                console.warn("Failed to parse Prismic preview cookie", i)
            }
    }
}
);
async function aw(t, e) {
    return await uw(e).catch(r=>(console.error("Failed to get image meta for " + e, r + ""),
    {
        width: 0,
        height: 0,
        ratio: 0
    }))
}
async function uw(t) {
    if (typeof Image > "u")
        throw new TypeError("Image not supported");
    return new Promise((e,n)=>{
        const r = new Image;
        r.onload = ()=>{
            const i = {
                width: r.width,
                height: r.height,
                ratio: r.width / r.height
            };
            e(i)
        }
        ,
        r.onerror = i=>n(i),
        r.src = t
    }
    )
}
function Ra(t="") {
    if (typeof t == "number")
        return t;
    if (typeof t == "string" && t.replace("px", "").match(/^\d+$/g))
        return parseInt(t, 10)
}
function lw(t) {
    const e = {
        options: t
    }
      , n = (i,s={})=>_g(e, i, s)
      , r = (i,s={},o={})=>n(i, {
        ...o,
        modifiers: Ec(s, o.modifiers || {})
    }).url;
    for (const i in t.presets)
        r[i] = (s,o,a)=>r(s, o, {
            ...t.presets[i],
            ...a
        });
    return r.options = t,
    r.getImage = n,
    r.getMeta = (i,s)=>cw(e, i, s),
    r.getSizes = (i,s)=>dw(e, i, s),
    e.$img = r,
    r
}
async function cw(t, e, n) {
    const r = _g(t, e, {
        ...n
    });
    return typeof r.getMeta == "function" ? await r.getMeta() : await aw(t, r.url)
}
function _g(t, e, n) {
    var l, c;
    if (typeof e != "string" || e === "")
        throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);
    if (e.startsWith("data:"))
        return {
            url: e
        };
    const {provider: r, defaults: i} = fw(t, n.provider || t.options.provider)
      , s = hw(t, n.preset);
    if (e = vi(e) ? e : qy(e),
    !r.supportsAlias)
        for (const f in t.options.alias)
            e.startsWith(f) && (e = Qa(t.options.alias[f], e.substr(f.length)));
    if (r.validateDomains && vi(e)) {
        const f = Ja(e).host;
        if (!t.options.domains.find(h=>h === f))
            return {
                url: e
            }
    }
    const o = Ec(n, s, i);
    o.modifiers = {
        ...o.modifiers
    };
    const a = o.modifiers.format;
    (l = o.modifiers) != null && l.width && (o.modifiers.width = Ra(o.modifiers.width)),
    (c = o.modifiers) != null && c.height && (o.modifiers.height = Ra(o.modifiers.height));
    const u = r.getImage(e, o, t);
    return u.format = u.format || a || "",
    u
}
function fw(t, e) {
    const n = t.options.providers[e];
    if (!n)
        throw new Error("Unknown provider: " + e);
    return n
}
function hw(t, e) {
    if (!e)
        return {};
    if (!t.options.presets[e])
        throw new Error("Unknown preset: " + e);
    return t.options.presets[e]
}
function dw(t, e, n) {
    var l, c;
    const r = Ra((l = n.modifiers) == null ? void 0 : l.width)
      , i = Ra((c = n.modifiers) == null ? void 0 : c.height)
      , s = r && i ? i / r : 0
      , o = []
      , a = {};
    if (typeof n.sizes == "string")
        for (const f of n.sizes.split(/[\s,]+/).filter(h=>h)) {
            const h = f.split(":");
            h.length === 2 && (a[h[0].trim()] = h[1].trim())
        }
    else
        Object.assign(a, n.sizes);
    for (const f in a) {
        const h = t.options.screens && t.options.screens[f] || parseInt(f);
        let d = String(a[f]);
        const p = d.endsWith("vw");
        if (!p && /^\d+$/.test(d) && (d = d + "px"),
        !p && !d.endsWith("px"))
            continue;
        let g = parseInt(d);
        if (!h || !g)
            continue;
        p && (g = Math.round(g / 100 * h));
        const v = s ? Math.round(g * s) : i;
        o.push({
            width: g,
            size: d,
            screenMaxWidth: h,
            media: `(max-width: ${h}px)`,
            src: t.$img(e, {
                ...n.modifiers,
                width: g,
                height: v
            }, n)
        })
    }
    o.sort((f,h)=>f.screenMaxWidth - h.screenMaxWidth);
    const u = o[o.length - 1];
    return u && (u.media = ""),
    {
        sizes: o.map(f=>`${f.media ? f.media + " " : ""}${f.size}`).join(", "),
        srcset: o.map(f=>`${f.src} ${f.width}w`).join(", "),
        src: u == null ? void 0 : u.src
    }
}
const pw = (t,{modifiers: e, baseURL: n="/_vercel/image"}={},r)=>{
    const i = Object.values(r.options.screens || {}).sort((a,u)=>a - u)
      , s = i[i.length - 1];
    let o = Number((e == null ? void 0 : e.width) || 0);
    return o ? i.includes(o) || (o = i.find(a=>a > o) || s) : o = s,
    {
        url: n + "?" + bp({
            url: t,
            w: String(o),
            q: String((e == null ? void 0 : e.quality) || "100")
        })
    }
}
  , gw = !0
  , _w = Object.freeze(Object.defineProperty({
    __proto__: null,
    getImage: pw,
    validateDomains: gw
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mg = {
    screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        "2xl": 1536
    },
    presets: {},
    provider: "vercel",
    domains: [],
    alias: {}
};
mg.providers = {
    vercel: {
        provider: _w,
        defaults: {}
    }
};
const mw = Kr(()=>({
    provide: {
        img: lw(mg)
    }
}));
function yw() {
    window.dataLayer = window.dataLayer || [];
    function t() {
        dataLayer.push(arguments)
    }
    t("js", new Date),
    t("config", "G-K4SG0SW68D")
}
function or(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function yg(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var sn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, ds = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Tc, Rt, ot, pn = 1e8, Le = 1 / pn, Cl = Math.PI * 2, Dw = Cl / 4, vw = 0, Dg = Math.sqrt, bw = Math.cos, ww = Math.sin, mt = function(e) {
    return typeof e == "string"
}, Je = function(e) {
    return typeof e == "function"
}, gr = function(e) {
    return typeof e == "number"
}, Sc = function(e) {
    return typeof e > "u"
}, Qn = function(e) {
    return typeof e == "object"
}, Kt = function(e) {
    return e !== !1
}, vg = function() {
    return typeof window < "u"
}, qo = function(e) {
    return Je(e) || mt(e)
}, bg = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Pt = Array.isArray, El = /(?:-?\.?\d|\.)+/gi, wg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ui = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ou = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Cg = /[+-]=-?[.\d]+/, Eg = /[^,'"\[\]\s]+/gi, Cw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, je, cn, xl, Fc, on = {}, Pa = {}, xg, Tg = function(e) {
    return (Pa = wi(e, on)) && an
}, Rc = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, ka = function(e, n) {
    return !n && console.warn(e)
}, Sg = function(e, n) {
    return e && (on[e] = n) && Pa && (Pa[e] = n) || on
}, Do = function() {
    return 0
}, Ew = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, sa = {
    suppressEvents: !0,
    kill: !1
}, xw = {
    suppressEvents: !0
}, Pc = {}, $r = [], Tl = {}, Fg, en = {}, Mu = {}, Ch = 30, oa = [], kc = "", Ac = function(e) {
    var n = e[0], r, i;
    if (Qn(n) || Je(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = oa.length; i-- && !oa[i].targetTest(n); )
            ;
        r = oa[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new Gg(e[i],r))) || e.splice(i, 1);
    return e
}, di = function(e) {
    return e._gsap || Ac(gn(e))[0]._gsap
}, Rg = function(e, n, r) {
    return (r = e[n]) && Je(r) ? e[n]() : Sc(r) && e.getAttribute && e.getAttribute(n) || r
}, Xt = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, rt = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, wt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, ts = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, Tw = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, Aa = function() {
    var e = $r.length, n = $r.slice(0), r, i;
    for (Tl = {},
    $r.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, Pg = function(e, n, r, i) {
    $r.length && !Rt && Aa(),
    e.render(n, r, i || Rt && n < 0 && (e._initted || e._startAt)),
    $r.length && !Rt && Aa()
}, kg = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(Eg).length < 2 ? n : mt(e) ? e.trim() : e
}, Ag = function(e) {
    return e
}, Dn = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, Sw = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, wi = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, Eh = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Qn(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, Oa = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, Zs = function(e) {
    var n = e.parent || je
      , r = e.keyframes ? Sw(Pt(e.keyframes)) : Dn;
    if (Kt(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, Fw = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, Og = function(e, n, r, i, s) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var o = e[i], a;
    if (s)
        for (a = n[s]; o && o[s] > a; )
            o = o._prev;
    return o ? (n._next = o._next,
    o._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = o,
    n.parent = n._dp = e,
    n
}, su = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var s = n._prev
      , o = n._next;
    s ? s._next = o : e[r] === n && (e[r] = o),
    o ? o._prev = s : e[i] === n && (e[i] = s),
    n._next = n._prev = n.parent = null
}, Ur = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
    e._act = 0
}, pi = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, Rw = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Sl = function(e, n, r, i) {
    return e._startAt && (Rt ? e._startAt.revert(sa) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, Pw = function t(e) {
    return !e || e._ts && t(e.parent)
}, xh = function(e) {
    return e._repeat ? ps(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, ps = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, Ma = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, ou = function(e) {
    return e._end = wt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Le) || 0))
}, au = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = wt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    ou(e),
    r._dirty || pi(r, e)),
    e
}, Mg = function(e, n) {
    var r;
    if ((n._time || n._initted && !n._dur) && (r = Ma(e.rawTime(), n),
    (!n._dur || Ao(0, n.totalDuration(), r) - n._tTime > Le) && n.render(r, !0)),
    pi(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -Le
    }
}, Yn = function(e, n, r, i) {
    return n.parent && Ur(n),
    n._start = wt((gr(r) ? r : r || e !== je ? ln(e, r, n) : e._time) + n._delay),
    n._end = wt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    Og(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Fl(n) || (e._recent = n),
    i || Mg(e, n),
    e._ts < 0 && au(e, e._tTime),
    e
}, Lg = function(e, n) {
    return (on.ScrollTrigger || Rc("scrollTrigger", n)) && on.ScrollTrigger.create(n, e)
}, Bg = function(e, n, r, i, s) {
    if (Mc(e, n, s),
    !e._initted)
        return 1;
    if (!r && e._pt && !Rt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Fg !== tn.frame)
        return $r.push(e),
        e._lazy = [s, i],
        1
}, kw = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Fl = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, Aw = function(e, n, r, i) {
    var s = e.ratio, o = n < 0 || !n && (!e._start && kw(e) && !(!e._initted && Fl(e)) || (e._ts < 0 || e._dp._ts < 0) && !Fl(e)) ? 0 : 1, a = e._rDelay, u = 0, l, c, f;
    if (a && e._repeat && (u = Ao(0, e._tDur, n),
    c = ps(u, a),
    e._yoyo && c & 1 && (o = 1 - o),
    c !== ps(e._tTime, a) && (s = 1 - o,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    o !== s || Rt || i || e._zTime === Le || !n && e._zTime) {
        if (!e._initted && Bg(e, n, i, r, u))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? Le : 0),
        r || (r = n && !f),
        e.ratio = o,
        e._from && (o = 1 - o),
        e._time = 0,
        e._tTime = u,
        l = e._pt; l; )
            l.r(o, l.d),
            l = l._next;
        n < 0 && Sl(e, n, r, !0),
        e._onUpdate && !r && _n(e, "onUpdate"),
        u && e._repeat && !r && e.parent && _n(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === o && (o && Ur(e, 1),
        !r && !Rt && (_n(e, o ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, Ow = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, gs = function(e, n, r, i) {
    var s = e._repeat
      , o = wt(n) || 0
      , a = e._tTime / e._tDur;
    return a && !i && (e._time *= o / e._dur),
    e._dur = o,
    e._tDur = s ? s < 0 ? 1e10 : wt(o * (s + 1) + e._rDelay * s) : o,
    a > 0 && !i && au(e, e._tTime = e._tDur * a),
    e.parent && ou(e),
    r || pi(e.parent, e),
    e
}, Th = function(e) {
    return e instanceof Vt ? pi(e) : gs(e, e._dur)
}, Mw = {
    _start: 0,
    endTime: Do,
    totalDuration: Do
}, ln = function t(e, n, r) {
    var i = e.labels, s = e._recent || Mw, o = e.duration() >= pn ? s.endTime(!1) : e._dur, a, u, l;
    return mt(n) && (isNaN(n) || n in i) ? (u = n.charAt(0),
    l = n.substr(-1) === "%",
    a = n.indexOf("="),
    u === "<" || u === ">" ? (a >= 0 && (n = n.replace(/=/, "")),
    (u === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (n in i || (i[n] = o),
    i[n]) : (u = parseFloat(n.charAt(a - 1) + n.substr(a + 1)),
    l && r && (u = u / 100 * (Pt(r) ? r[0] : r).totalDuration()),
    a > 1 ? t(e, n.substr(0, a - 1), r) + u : o + u)) : n == null ? o : +n
}, eo = function(e, n, r) {
    var i = gr(n[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = n[s], a, u;
    if (i && (o.duration = n[1]),
    o.parent = r,
    e) {
        for (a = o,
        u = r; u && !("immediateRender"in a); )
            a = u.vars.defaults || {},
            u = Kt(u.vars.inherit) && u.parent;
        o.immediateRender = Kt(a.immediateRender),
        e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1]
    }
    return new ct(n[0],o,n[s + 1])
}, Xr = function(e, n) {
    return e || e === 0 ? n(e) : n
}, Ao = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, St = function(e, n) {
    return !mt(e) || !(n = Cw.exec(e)) ? "" : n[1]
}, Lw = function(e, n, r) {
    return Xr(r, function(i) {
        return Ao(e, n, i)
    })
}, Rl = [].slice, Ig = function(e, n) {
    return e && Qn(e) && "length"in e && (!n && !e.length || e.length - 1 in e && Qn(e[0])) && !e.nodeType && e !== cn
}, Bw = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var s;
        return mt(i) && !n || Ig(i, 1) ? (s = r).push.apply(s, gn(i)) : r.push(i)
    }) || r
}, gn = function(e, n, r) {
    return ot && !n && ot.selector ? ot.selector(e) : mt(e) && !r && (xl || !_s()) ? Rl.call((n || Fc).querySelectorAll(e), 0) : Pt(e) ? Bw(e, r) : Ig(e) ? Rl.call(e, 0) : e ? [e] : []
}, Pl = function(e) {
    return e = gn(e)[0] || ka("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return gn(n, r.querySelectorAll ? r : r === e ? ka("Invalid scope") || Fc.createElement("div") : e)
    }
}, $g = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Ng = function(e) {
    if (Je(e))
        return e;
    var n = Qn(e) ? e : {
        each: e
    }
      , r = gi(n.ease)
      , i = n.from || 0
      , s = parseFloat(n.base) || 0
      , o = {}
      , a = i > 0 && i < 1
      , u = isNaN(i) || a
      , l = n.axis
      , c = i
      , f = i;
    return mt(i) ? c = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !a && u && (c = i[0],
    f = i[1]),
    function(h, d, p) {
        var g = (p || n).length, v = o[g], m, _, D, b, C, S, T, x, R;
        if (!v) {
            if (R = n.grid === "auto" ? 0 : (n.grid || [1, pn])[1],
            !R) {
                for (T = -pn; T < (T = p[R++].getBoundingClientRect().left) && R < g; )
                    ;
                R--
            }
            for (v = o[g] = [],
            m = u ? Math.min(R, g) * c - .5 : i % R,
            _ = R === pn ? 0 : u ? g * f / R - .5 : i / R | 0,
            T = 0,
            x = pn,
            S = 0; S < g; S++)
                D = S % R - m,
                b = _ - (S / R | 0),
                v[S] = C = l ? Math.abs(l === "y" ? b : D) : Dg(D * D + b * b),
                C > T && (T = C),
                C < x && (x = C);
            i === "random" && $g(v),
            v.max = T - x,
            v.min = x,
            v.v = g = (parseFloat(n.amount) || parseFloat(n.each) * (R > g ? g - 1 : l ? l === "y" ? g / R : R : Math.max(R, g / R)) || 0) * (i === "edges" ? -1 : 1),
            v.b = g < 0 ? s - g : s,
            v.u = St(n.amount || n.each) || 0,
            r = r && g < 0 ? Yg(r) : r
        }
        return g = (v[h] - v.min) / v.max || 0,
        wt(v.b + (r ? r(g) : g) * v.v) + v.u
    }
}, kl = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = wt(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (gr(r) ? 0 : St(r))
    }
}, Hg = function(e, n) {
    var r = Pt(e), i, s;
    return !r && Qn(e) && (i = r = e.radius || pn,
    e.values ? (e = gn(e.values),
    (s = !gr(e[0])) && (i *= i)) : e = kl(e.increment)),
    Xr(n, r ? Je(e) ? function(o) {
        return s = e(o),
        Math.abs(s - o) <= i ? s : o
    }
    : function(o) {
        for (var a = parseFloat(s ? o.x : o), u = parseFloat(s ? o.y : 0), l = pn, c = 0, f = e.length, h, d; f--; )
            s ? (h = e[f].x - a,
            d = e[f].y - u,
            h = h * h + d * d) : h = Math.abs(e[f] - a),
            h < l && (l = h,
            c = f);
        return c = !i || l <= i ? e[c] : o,
        s || c === o || gr(o) ? c : c + St(o)
    }
    : kl(e))
}, zg = function(e, n, r, i) {
    return Xr(Pt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return Pt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, Iw = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(s, o) {
            return o(s)
        }, i)
    }
}, $w = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || St(r))
    }
}, Nw = function(e, n, r) {
    return Ug(e, n, 0, 1, r)
}, jg = function(e, n, r) {
    return Xr(r, function(i) {
        return e[~~n(i)]
    })
}, Hw = function t(e, n, r) {
    var i = n - e;
    return Pt(e) ? jg(e, t(0, e.length), n) : Xr(r, function(s) {
        return (i + (s - e) % i) % i + e
    })
}, zw = function t(e, n, r) {
    var i = n - e
      , s = i * 2;
    return Pt(e) ? jg(e, t(0, e.length - 1), n) : Xr(r, function(o) {
        return o = (s + (o - e) % s) % s || 0,
        e + (o > i ? s - o : o)
    })
}, vo = function(e) {
    for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
        o = e.indexOf(")", i),
        a = e.charAt(i + 7) === "[",
        s = e.substr(i + 7, o - i - 7).match(a ? Eg : El),
        r += e.substr(n, i - n) + zg(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5),
        n = o + 1;
    return r + e.substr(n, e.length - n)
}, Ug = function(e, n, r, i, s) {
    var o = n - e
      , a = i - r;
    return Xr(s, function(u) {
        return r + ((u - e) / o * a || 0)
    })
}, jw = function t(e, n, r, i) {
    var s = isNaN(e + n) ? 0 : function(d) {
        return (1 - d) * e + d * n
    }
    ;
    if (!s) {
        var o = mt(e), a = {}, u, l, c, f, h;
        if (r === !0 && (i = 1) && (r = null),
        o)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (Pt(e) && !Pt(n)) {
            for (c = [],
            f = e.length,
            h = f - 2,
            l = 1; l < f; l++)
                c.push(t(e[l - 1], e[l]));
            f--,
            s = function(p) {
                p *= f;
                var g = Math.min(h, ~~p);
                return c[g](p - g)
            }
            ,
            r = n
        } else
            i || (e = wi(Pt(e) ? [] : {}, e));
        if (!c) {
            for (u in n)
                Oc.call(a, e, u, "get", n[u]);
            s = function(p) {
                return Ic(p, a) || (o ? e.p : e)
            }
        }
    }
    return Xr(r, s)
}, Sh = function(e, n, r) {
    var i = e.labels, s = pn, o, a, u;
    for (o in i)
        a = i[o] - n,
        a < 0 == !!r && a && s > (a = Math.abs(a)) && (u = o,
        s = a);
    return u
}, _n = function(e, n, r) {
    var i = e.vars, s = i[n], o = ot, a = e._ctx, u, l, c;
    if (s)
        return u = i[n + "Params"],
        l = i.callbackScope || e,
        r && $r.length && Aa(),
        a && (ot = a),
        c = u ? s.apply(l, u) : s.call(l),
        ot = o,
        c
}, $s = function(e) {
    return Ur(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Rt),
    e.progress() < 1 && _n(e, "onInterrupt"),
    e
}, Wi, Uw = function(e) {
    e = !e.name && e.default || e;
    var n = e.name
      , r = Je(e)
      , i = n && !r && e.init ? function() {
        this._props = []
    }
    : e
      , s = {
        init: Do,
        render: Ic,
        add: Oc,
        kill: sC,
        modifier: iC,
        rawVars: 0
    }
      , o = {
        targetTest: 0,
        get: 0,
        getSetter: Bc,
        aliases: {},
        register: 0
    };
    if (_s(),
    e !== i) {
        if (en[n])
            return;
        Dn(i, Dn(Oa(e, s), o)),
        wi(i.prototype, wi(s, Oa(e, o))),
        en[i.prop = n] = i,
        e.targetTest && (oa.push(i),
        Pc[n] = 1),
        n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
    }
    Sg(n, i),
    e.register && e.register(an, i, Gt)
}, Me = 255, Ns = {
    aqua: [0, Me, Me],
    lime: [0, Me, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Me],
    navy: [0, 0, 128],
    white: [Me, Me, Me],
    olive: [128, 128, 0],
    yellow: [Me, Me, 0],
    orange: [Me, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Me, 0, 0],
    pink: [Me, 192, 203],
    cyan: [0, Me, Me],
    transparent: [Me, Me, Me, 0]
}, Lu = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * Me + .5 | 0
}, Wg = function(e, n, r) {
    var i = e ? gr(e) ? [e >> 16, e >> 8 & Me, e & Me] : 0 : Ns.black, s, o, a, u, l, c, f, h, d, p;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Ns[e])
            i = Ns[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (s = e.charAt(1),
            o = e.charAt(2),
            a = e.charAt(3),
            e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & Me, i & Me, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & Me, e & Me]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = p = e.match(El),
            !n)
                u = +i[0] % 360 / 360,
                l = +i[1] / 100,
                c = +i[2] / 100,
                o = c <= .5 ? c * (l + 1) : c + l - c * l,
                s = c * 2 - o,
                i.length > 3 && (i[3] *= 1),
                i[0] = Lu(u + 1 / 3, s, o),
                i[1] = Lu(u, s, o),
                i[2] = Lu(u - 1 / 3, s, o);
            else if (~e.indexOf("="))
                return i = e.match(wg),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(El) || Ns.transparent;
        i = i.map(Number)
    }
    return n && !p && (s = i[0] / Me,
    o = i[1] / Me,
    a = i[2] / Me,
    f = Math.max(s, o, a),
    h = Math.min(s, o, a),
    c = (f + h) / 2,
    f === h ? u = l = 0 : (d = f - h,
    l = c > .5 ? d / (2 - f - h) : d / (f + h),
    u = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4,
    u *= 60),
    i[0] = ~~(u + .5),
    i[1] = ~~(l * 100 + .5),
    i[2] = ~~(c * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, qg = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(Nr).forEach(function(s) {
        var o = s.match(Ui) || [];
        n.push.apply(n, o),
        r.push(i += o.length + 1)
    }),
    n.c = r,
    n
}, Fh = function(e, n, r) {
    var i = "", s = (e + i).match(Nr), o = n ? "hsla(" : "rgba(", a = 0, u, l, c, f;
    if (!s)
        return e;
    if (s = s.map(function(h) {
        return (h = Wg(h, n, 1)) && o + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    r && (c = qg(e),
    u = r.c,
    u.join(i) !== c.c.join(i)))
        for (l = e.replace(Nr, "1").split(Ui),
        f = l.length - 1; a < f; a++)
            i += l[a] + (~u.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (c.length ? c : s.length ? s : r).shift());
    if (!l)
        for (l = e.split(Nr),
        f = l.length - 1; a < f; a++)
            i += l[a] + s[a];
    return i + l[f]
}, Nr = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Ns)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), Ww = /hsl[a]?\(/, Vg = function(e) {
    var n = e.join(" "), r;
    if (Nr.lastIndex = 0,
    Nr.test(n))
        return r = Ww.test(n),
        e[1] = Fh(e[1], r),
        e[0] = Fh(e[0], r, qg(e[1])),
        !0
}, bo, tn = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, s = 1e3 / 240, o = s, a = [], u, l, c, f, h, d, p = function g(v) {
        var m = t() - i, _ = v === !0, D, b, C, S;
        if (m > e && (r += m - n),
        i += m,
        C = i - r,
        D = C - o,
        (D > 0 || _) && (S = ++f.frame,
        h = C - f.time * 1e3,
        f.time = C = C / 1e3,
        o += D + (D >= s ? 4 : s - D),
        b = 1),
        _ || (u = l(g)),
        b)
            for (d = 0; d < a.length; d++)
                a[d](C, h, S, v)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(v) {
            return h / (1e3 / (v || 60))
        },
        wake: function() {
            xg && (!xl && vg() && (cn = xl = window,
            Fc = cn.document || {},
            on.gsap = an,
            (cn.gsapVersions || (cn.gsapVersions = [])).push(an.version),
            Tg(Pa || cn.GreenSockGlobals || !cn.gsap && cn || {}),
            c = cn.requestAnimationFrame),
            u && f.sleep(),
            l = c || function(v) {
                return setTimeout(v, o - f.time * 1e3 + 1 | 0)
            }
            ,
            bo = 1,
            p(2))
        },
        sleep: function() {
            (c ? cn.cancelAnimationFrame : clearTimeout)(u),
            bo = 0,
            l = Do
        },
        lagSmoothing: function(v, m) {
            e = v || 1 / 0,
            n = Math.min(m || 33, e)
        },
        fps: function(v) {
            s = 1e3 / (v || 240),
            o = f.time * 1e3 + s
        },
        add: function(v, m, _) {
            var D = m ? function(b, C, S, T) {
                v(b, C, S, T),
                f.remove(D)
            }
            : v;
            return f.remove(v),
            a[_ ? "unshift" : "push"](D),
            _s(),
            D
        },
        remove: function(v, m) {
            ~(m = a.indexOf(v)) && a.splice(m, 1) && d >= m && d--
        },
        _listeners: a
    },
    f
}(), _s = function() {
    return !bo && tn.wake()
}, Ee = {}, qw = /^[\d.\-M][\d.\-,\s]/, Vw = /["']/g, Yw = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, a, u, l; s < o; s++)
        u = r[s],
        a = s !== o - 1 ? u.lastIndexOf(",") : u.length,
        l = u.substr(0, a),
        n[i] = isNaN(l) ? l.replace(Vw, "").trim() : +l,
        i = u.substr(a + 1).trim();
    return n
}, Kw = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, Xw = function(e) {
    var n = (e + "").split("(")
      , r = Ee[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Yw(n[1])] : Kw(e).split(",").map(kg)) : Ee._CE && qw.test(e) ? Ee._CE("", e) : r
}, Yg = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, Kg = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof Vt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, gi = function(e, n) {
    return e && (Je(e) ? e : Ee[e] || Xw(e)) || n
}, Fi = function(e, n, r, i) {
    r === void 0 && (r = function(u) {
        return 1 - n(1 - u)
    }
    ),
    i === void 0 && (i = function(u) {
        return u < .5 ? n(u * 2) / 2 : 1 - n((1 - u) * 2) / 2
    }
    );
    var s = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, o;
    return Xt(e, function(a) {
        Ee[a] = on[a] = s,
        Ee[o = a.toLowerCase()] = r;
        for (var u in s)
            Ee[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = Ee[a + "." + u] = s[u]
    }),
    s
}, Xg = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, Bu = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , s = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , o = s / Cl * (Math.asin(1 / i) || 0)
      , a = function(c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * ww((c - o) * s) + 1
    }
      , u = e === "out" ? a : e === "in" ? function(l) {
        return 1 - a(1 - l)
    }
    : Xg(a);
    return s = Cl / s,
    u.config = function(l, c) {
        return t(e, l, c)
    }
    ,
    u
}, Iu = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(s) {
        return 1 - r(1 - s)
    }
    : Xg(r);
    return i.config = function(s) {
        return t(e, s)
    }
    ,
    i
};
Xt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    Fi(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
Fi("Elastic", Bu("in"), Bu("out"), Bu());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , s = function(a) {
        return a < n ? t * a * a : a < r ? t * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? t * (a -= 2.25 / e) * a + .9375 : t * Math.pow(a - 2.625 / e, 2) + .984375
    };
    Fi("Bounce", function(o) {
        return 1 - s(1 - o)
    }, s)
}
)(7.5625, 2.75);
Fi("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
Fi("Circ", function(t) {
    return -(Dg(1 - t * t) - 1)
});
Fi("Sine", function(t) {
    return t === 1 ? 1 : -bw(t * Dw) + 1
});
Fi("Back", Iu("in"), Iu("out"), Iu());
Ee.SteppedEase = Ee.steps = on.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , s = n ? 1 : 0
          , o = 1 - Le;
        return function(a) {
            return ((i * Ao(0, o, a) | 0) + s) * r
        }
    }
};
ds.ease = Ee["quad.out"];
Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return kc += t + "," + t + "Params,"
});
var Gg = function(e, n) {
    this.id = vw++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : Rg,
    this.set = n ? n.getSetter : Bc
}
  , ms = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        gs(this, +n.duration, 1, 1),
        this.data = n.data,
        ot && (this._ctx = ot,
        ot.data.push(this)),
        bo || tn.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        gs(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (_s(),
        !arguments.length)
            return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
            for (au(this, r),
            !s._dp || s.parent || Mg(s, this); s && s.parent; )
                s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0),
                s = s.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Yn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === Le || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Pg(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + xh(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + xh(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? ps(this._tTime, s) + 1 : 1
    }
    ,
    e.timeScale = function(r) {
        if (!arguments.length)
            return this._rts === -Le ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? Ma(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -Le ? 0 : this._rts,
        this.totalTime(Ao(-this._delay, this._tDur, i), !0),
        ou(this),
        Rw(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (_s(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Le && (this._tTime -= Le)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Yn(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (Kt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ma(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = xw);
        var i = Rt;
        return Rt = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Rt = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
            s = i._start + s / (i._ts || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : s
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Th(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            Th(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(ln(this, r), Kt(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Kt(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Le : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -Le,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, s;
        return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - Le)
    }
    ,
    e.eventCallback = function(r, i, s) {
        var o = this.vars;
        return arguments.length > 1 ? (i ? (o[r] = i,
        s && (o[r + "Params"] = s),
        r === "onUpdate" && (this._onUpdate = i)) : delete o[r],
        this) : o[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(s) {
            var o = Je(r) ? r : Ag
              , a = function() {
                var l = i.then;
                i.then = null,
                Je(o) && (o = o(i)) && (o.then || o === i) && (i.then = l),
                s(o),
                i.then = l
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        $s(this)
    }
    ,
    t
}();
Dn(ms.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Le,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Vt = function(t) {
    yg(e, t);
    function e(r, i) {
        var s;
        return r === void 0 && (r = {}),
        s = t.call(this, r) || this,
        s.labels = {},
        s.smoothChildTiming = !!r.smoothChildTiming,
        s.autoRemoveChildren = !!r.autoRemoveChildren,
        s._sort = Kt(r.sortChildren),
        je && Yn(r.parent || je, or(s), i),
        r.reversed && s.reverse(),
        r.paused && s.paused(!0),
        r.scrollTrigger && Lg(or(s), r.scrollTrigger),
        s
    }
    var n = e.prototype;
    return n.to = function(i, s, o) {
        return eo(0, arguments, this),
        this
    }
    ,
    n.from = function(i, s, o) {
        return eo(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, s, o, a) {
        return eo(2, arguments, this),
        this
    }
    ,
    n.set = function(i, s, o) {
        return s.duration = 0,
        s.parent = this,
        Zs(s).repeatDelay || (s.repeat = 0),
        s.immediateRender = !!s.immediateRender,
        new ct(i,s,ln(this, o),1),
        this
    }
    ,
    n.call = function(i, s, o) {
        return Yn(this, ct.delayedCall(0, i, s), o)
    }
    ,
    n.staggerTo = function(i, s, o, a, u, l, c) {
        return o.duration = s,
        o.stagger = o.stagger || a,
        o.onComplete = l,
        o.onCompleteParams = c,
        o.parent = this,
        new ct(i,o,ln(this, u)),
        this
    }
    ,
    n.staggerFrom = function(i, s, o, a, u, l, c) {
        return o.runBackwards = 1,
        Zs(o).immediateRender = Kt(o.immediateRender),
        this.staggerTo(i, s, o, a, u, l, c)
    }
    ,
    n.staggerFromTo = function(i, s, o, a, u, l, c, f) {
        return a.startAt = o,
        Zs(a).immediateRender = Kt(a.immediateRender),
        this.staggerTo(i, s, a, u, l, c, f)
    }
    ,
    n.render = function(i, s, o) {
        var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = i <= 0 ? 0 : wt(i), f = this._zTime < 0 != i < 0 && (this._initted || !l), h, d, p, g, v, m, _, D, b, C, S, T;
        if (this !== je && c > u && i >= 0 && (c = u),
        c !== this._tTime || o || f) {
            if (a !== this._time && l && (c += this._time - a,
            i += this._time - a),
            h = c,
            b = this._start,
            D = this._ts,
            m = !D,
            f && (l || (a = this._zTime),
            (i || !s) && (this._zTime = i)),
            this._repeat) {
                if (S = this._yoyo,
                v = l + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(v * 100 + i, s, o);
                if (h = wt(c % v),
                c === u ? (g = this._repeat,
                h = l) : (g = ~~(c / v),
                g && g === c / v && (h = l,
                g--),
                h > l && (h = l)),
                C = ps(this._tTime, v),
                !a && this._tTime && C !== g && (C = g),
                S && g & 1 && (h = l - h,
                T = 1),
                g !== C && !this._lock) {
                    var x = S && C & 1
                      , R = x === (S && g & 1);
                    if (g < C && (x = !x),
                    a = x ? 0 : l,
                    this._lock = 1,
                    this.render(a || (T ? 0 : wt(g * v)), s, !l)._lock = 0,
                    this._tTime = c,
                    !s && this.parent && _n(this, "onRepeat"),
                    this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                    a && a !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (l = this._dur,
                    u = this._tDur,
                    R && (this._lock = 2,
                    a = x ? l : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !T && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !m)
                        return this;
                    Kg(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (_ = Ow(this, wt(a), wt(h)),
            _ && (c -= h - (h = _._start))),
            this._tTime = c,
            this._time = h,
            this._act = !D,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            a = 0),
            !a && h && !s && (_n(this, "onStart"),
            this._tTime !== c))
                return this;
            if (h >= a && i >= 0)
                for (d = this._first; d; ) {
                    if (p = d._next,
                    (d._act || h >= d._start) && d._ts && _ !== d) {
                        if (d.parent !== this)
                            return this.render(i, s, o);
                        if (d.render(d._ts > 0 ? (h - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts, s, o),
                        h !== this._time || !this._ts && !m) {
                            _ = 0,
                            p && (c += this._zTime = -Le);
                            break
                        }
                    }
                    d = p
                }
            else {
                d = this._last;
                for (var A = i < 0 ? i : h; d; ) {
                    if (p = d._prev,
                    (d._act || A <= d._end) && d._ts && _ !== d) {
                        if (d.parent !== this)
                            return this.render(i, s, o);
                        if (d.render(d._ts > 0 ? (A - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (A - d._start) * d._ts, s, o || Rt && (d._initted || d._startAt)),
                        h !== this._time || !this._ts && !m) {
                            _ = 0,
                            p && (c += this._zTime = A ? -Le : Le);
                            break
                        }
                    }
                    d = p
                }
            }
            if (_ && !s && (this.pause(),
            _.render(h >= a ? 0 : -Le)._zTime = h >= a ? 1 : -1,
            this._ts))
                return this._start = b,
                ou(this),
                this.render(i, s, o);
            this._onUpdate && !s && _n(this, "onUpdate", !0),
            (c === u && this._tTime >= this.totalDuration() || !c && a) && (b === this._start || Math.abs(D) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (c === u && this._ts > 0 || !c && this._ts < 0) && Ur(this, 1),
            !s && !(i < 0 && !a) && (c || a || !u) && (_n(this, c === u && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(c < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, s) {
        var o = this;
        if (gr(s) || (s = ln(this, s, i)),
        !(i instanceof ms)) {
            if (Pt(i))
                return i.forEach(function(a) {
                    return o.add(a, s)
                }),
                this;
            if (mt(i))
                return this.addLabel(i, s);
            if (Je(i))
                i = ct.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? Yn(this, i, s) : this
    }
    ,
    n.getChildren = function(i, s, o, a) {
        i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -pn);
        for (var u = [], l = this._first; l; )
            l._start >= a && (l instanceof ct ? s && u.push(l) : (o && u.push(l),
            i && u.push.apply(u, l.getChildren(!0, s, o)))),
            l = l._next;
        return u
    }
    ,
    n.getById = function(i) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
            if (s[o].vars.id === i)
                return s[o]
    }
    ,
    n.remove = function(i) {
        return mt(i) ? this.removeLabel(i) : Je(i) ? this.killTweensOf(i) : (su(this, i),
        i === this._recent && (this._recent = this._last),
        pi(this))
    }
    ,
    n.totalTime = function(i, s) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = wt(tn.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, s),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, s) {
        return this.labels[i] = ln(this, s),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, s, o) {
        var a = ct.delayedCall(0, s || Do, o);
        return a.data = "isPause",
        this._hasPause = 1,
        Yn(this, a, ln(this, i))
    }
    ,
    n.removePause = function(i) {
        var s = this._first;
        for (i = ln(this, i); s; )
            s._start === i && s.data === "isPause" && Ur(s),
            s = s._next
    }
    ,
    n.killTweensOf = function(i, s, o) {
        for (var a = this.getTweensOf(i, o), u = a.length; u--; )
            Rr !== a[u] && a[u].kill(i, s);
        return this
    }
    ,
    n.getTweensOf = function(i, s) {
        for (var o = [], a = gn(i), u = this._first, l = gr(s), c; u; )
            u instanceof ct ? Tw(u._targets, a) && (l ? (!Rr || u._initted && u._ts) && u.globalTime(0) <= s && u.globalTime(u.totalDuration()) > s : !s || u.isActive()) && o.push(u) : (c = u.getTweensOf(a, s)).length && o.push.apply(o, c),
            u = u._next;
        return o
    }
    ,
    n.tweenTo = function(i, s) {
        s = s || {};
        var o = this, a = ln(o, i), u = s, l = u.startAt, c = u.onStart, f = u.onStartParams, h = u.immediateRender, d, p = ct.to(o, Dn({
            ease: s.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: s.duration || Math.abs((a - (l && "time"in l ? l.time : o._time)) / o.timeScale()) || Le,
            onStart: function() {
                if (o.pause(),
                !d) {
                    var v = s.duration || Math.abs((a - (l && "time"in l ? l.time : o._time)) / o.timeScale());
                    p._dur !== v && gs(p, v, 0, 1).render(p._time, !0, !0),
                    d = 1
                }
                c && c.apply(p, f || [])
            }
        }, s));
        return h ? p.render(0) : p
    }
    ,
    n.tweenFromTo = function(i, s, o) {
        return this.tweenTo(s, Dn({
            startAt: {
                time: ln(this, i)
            }
        }, o))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Sh(this, ln(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Sh(this, ln(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Le)
    }
    ,
    n.shiftChildren = function(i, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, u = this.labels, l; a; )
            a._start >= o && (a._start += i,
            a._end += i),
            a = a._next;
        if (s)
            for (l in u)
                u[l] >= o && (u[l] += i);
        return pi(this)
    }
    ,
    n.invalidate = function(i) {
        var s = this._first;
        for (this._lock = 0; s; )
            s.invalidate(i),
            s = s._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var s = this._first, o; s; )
            o = s._next,
            this.remove(s),
            s = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        pi(this)
    }
    ,
    n.totalDuration = function(i) {
        var s = 0, o = this, a = o._last, u = pn, l, c, f;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
        if (o._dirty) {
            for (f = o.parent; a; )
                l = a._prev,
                a._dirty && a.totalDuration(),
                c = a._start,
                c > u && o._sort && a._ts && !o._lock ? (o._lock = 1,
                Yn(o, a, c - a._delay, 1)._lock = 0) : u = c,
                c < 0 && a._ts && (s -= c,
                (!f && !o._dp || f && f.smoothChildTiming) && (o._start += c / o._ts,
                o._time -= c,
                o._tTime -= c),
                o.shiftChildren(-c, !1, -1 / 0),
                u = 0),
                a._end > s && a._ts && (s = a._end),
                a = l;
            gs(o, o === je && o._time > s ? o._time : s, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (je._ts && (Pg(je, Ma(i, je)),
        Fg = tn.frame),
        tn.frame >= Ch) {
            Ch += sn.autoSleep || 120;
            var s = je._first;
            if ((!s || !s._ts) && sn.autoSleep && tn._listeners.length < 2) {
                for (; s && !s._ts; )
                    s = s._next;
                s || tn.sleep()
            }
        }
    }
    ,
    e
}(ms);
Dn(Vt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Gw = function(e, n, r, i, s, o, a) {
    var u = new Gt(this._pt,e,n,0,1,n_,null,s), l = 0, c = 0, f, h, d, p, g, v, m, _;
    for (u.b = r,
    u.e = i,
    r += "",
    i += "",
    (m = ~i.indexOf("random(")) && (i = vo(i)),
    o && (_ = [r, i],
    o(_, e, n),
    r = _[0],
    i = _[1]),
    h = r.match(Ou) || []; f = Ou.exec(i); )
        p = f[0],
        g = i.substring(l, f.index),
        d ? d = (d + 1) % 5 : g.substr(-5) === "rgba(" && (d = 1),
        p !== h[c++] && (v = parseFloat(h[c - 1]) || 0,
        u._pt = {
            _next: u._pt,
            p: g || c === 1 ? g : ",",
            s: v,
            c: p.charAt(1) === "=" ? ts(v, p) - v : parseFloat(p) - v,
            m: d && d < 4 ? Math.round : 0
        },
        l = Ou.lastIndex);
    return u.c = l < i.length ? i.substring(l, i.length) : "",
    u.fp = a,
    (Cg.test(i) || m) && (u.e = 0),
    this._pt = u,
    u
}, Oc = function(e, n, r, i, s, o, a, u, l, c) {
    Je(i) && (i = i(s || 0, e, o));
    var f = e[n], h = r !== "get" ? r : Je(f) ? l ? e[n.indexOf("set") || !Je(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](l) : e[n]() : f, d = Je(f) ? l ? tC : e_ : Lc, p;
    if (mt(i) && (~i.indexOf("random(") && (i = vo(i)),
    i.charAt(1) === "=" && (p = ts(h, i) + (St(h) || 0),
    (p || p === 0) && (i = p))),
    !c || h !== i || Al)
        return !isNaN(h * i) && i !== "" ? (p = new Gt(this._pt,e,n,+h || 0,i - (h || 0),typeof f == "boolean" ? rC : t_,0,d),
        l && (p.fp = l),
        a && p.modifier(a, this, e),
        this._pt = p) : (!f && !(n in e) && Rc(n, i),
        Gw.call(this, e, n, h, i, d, u || sn.stringFilter, l))
}, Qw = function(e, n, r, i, s) {
    if (Je(e) && (e = to(e, s, n, r, i)),
    !Qn(e) || e.style && e.nodeType || Pt(e) || bg(e))
        return mt(e) ? to(e, s, n, r, i) : e;
    var o = {}, a;
    for (a in e)
        o[a] = to(e[a], s, n, r, i);
    return o
}, Qg = function(e, n, r, i, s, o) {
    var a, u, l, c;
    if (en[e] && (a = new en[e]).init(s, a.rawVars ? n[e] : Qw(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = u = new Gt(r._pt,s,e,0,1,a.render,a,0,a.priority),
    r !== Wi))
        for (l = r._ptLookup[r._targets.indexOf(s)],
        c = a._props.length; c--; )
            l[a._props[c]] = u;
    return a
}, Rr, Al, Mc = function t(e, n, r) {
    var i = e.vars, s = i.ease, o = i.startAt, a = i.immediateRender, u = i.lazy, l = i.onUpdate, c = i.onUpdateParams, f = i.callbackScope, h = i.runBackwards, d = i.yoyoEase, p = i.keyframes, g = i.autoRevert, v = e._dur, m = e._startAt, _ = e._targets, D = e.parent, b = D && D.data === "nested" ? D.vars.targets : _, C = e._overwrite === "auto" && !Tc, S = e.timeline, T, x, R, A, I, O, X, H, J, $, V, Y, L;
    if (S && (!p || !s) && (s = "none"),
    e._ease = gi(s, ds.ease),
    e._yEase = d ? Yg(gi(d === !0 ? s : d, ds.ease)) : 0,
    d && e._yoyo && !e._repeat && (d = e._yEase,
    e._yEase = e._ease,
    e._ease = d),
    e._from = !S && !!i.runBackwards,
    !S || p && !i.stagger) {
        if (H = _[0] ? di(_[0]).harness : 0,
        Y = H && i[H.prop],
        T = Oa(i, Pc),
        m && (m._zTime < 0 && m.progress(1),
        n < 0 && h && a && !g ? m.render(-1, !0) : m.revert(h && v ? sa : Ew),
        m._lazy = 0),
        o) {
            if (Ur(e._startAt = ct.set(_, Dn({
                data: "isStart",
                overwrite: !1,
                parent: D,
                immediateRender: !0,
                lazy: !m && Kt(u),
                startAt: null,
                delay: 0,
                onUpdate: l,
                onUpdateParams: c,
                callbackScope: f,
                stagger: 0
            }, o))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Rt || !a && !g) && e._startAt.revert(sa),
            a && v && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (h && v && !m) {
            if (n && (a = !1),
            R = Dn({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !m && Kt(u),
                immediateRender: a,
                stagger: 0,
                parent: D
            }, T),
            Y && (R[H.prop] = Y),
            Ur(e._startAt = ct.set(_, R)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (Rt ? e._startAt.revert(sa) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !a)
                t(e._startAt, Le, Le);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        u = v && Kt(u) || u && !v,
        x = 0; x < _.length; x++) {
            if (I = _[x],
            X = I._gsap || Ac(_)[x]._gsap,
            e._ptLookup[x] = $ = {},
            Tl[X.id] && $r.length && Aa(),
            V = b === _ ? x : b.indexOf(I),
            H && (J = new H).init(I, Y || T, e, V, b) !== !1 && (e._pt = A = new Gt(e._pt,I,J.name,0,1,J.render,J,0,J.priority),
            J._props.forEach(function(F) {
                $[F] = A
            }),
            J.priority && (O = 1)),
            !H || Y)
                for (R in T)
                    en[R] && (J = Qg(R, T, e, V, I, b)) ? J.priority && (O = 1) : $[R] = A = Oc.call(e, I, R, "get", T[R], V, b, 0, i.stringFilter);
            e._op && e._op[x] && e.kill(I, e._op[x]),
            C && e._pt && (Rr = e,
            je.killTweensOf(I, $, e.globalTime(n)),
            L = !e.parent,
            Rr = 0),
            e._pt && u && (Tl[X.id] = 1)
        }
        O && r_(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = l,
    e._initted = (!e._op || e._pt) && !L,
    p && n <= 0 && S.render(pn, !0, !0)
}, Jw = function(e, n, r, i, s, o, a) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], l, c, f, h;
    if (!u)
        for (u = e._ptCache[n] = [],
        f = e._ptLookup,
        h = e._targets.length; h--; ) {
            if (l = f[h][n],
            l && l.d && l.d._pt)
                for (l = l.d._pt; l && l.p !== n && l.fp !== n; )
                    l = l._next;
            if (!l)
                return Al = 1,
                e.vars[n] = "+=0",
                Mc(e, a),
                Al = 0,
                1;
            u.push(l)
        }
    for (h = u.length; h--; )
        c = u[h],
        l = c._pt || c,
        l.s = (i || i === 0) && !s ? i : l.s + (i || 0) + o * l.c,
        l.c = r - l.s,
        c.e && (c.e = rt(r) + St(c.e)),
        c.b && (c.b = l.s + St(c.b))
}, Zw = function(e, n) {
    var r = e[0] ? di(e[0]).harness : 0, i = r && r.aliases, s, o, a, u;
    if (!i)
        return n;
    s = wi({}, n);
    for (o in i)
        if (o in s)
            for (u = i[o].split(","),
            a = u.length; a--; )
                s[u[a]] = s[o];
    return s
}, eC = function(e, n, r, i) {
    var s = n.ease || i || "power1.inOut", o, a;
    if (Pt(n))
        a = r[e] || (r[e] = []),
        n.forEach(function(u, l) {
            return a.push({
                t: l / (n.length - 1) * 100,
                v: u,
                e: s
            })
        });
    else
        for (o in n)
            a = r[o] || (r[o] = []),
            o === "ease" || a.push({
                t: parseFloat(e),
                v: n[o],
                e: s
            })
}, to = function(e, n, r, i, s) {
    return Je(e) ? e.call(n, r, i, s) : mt(e) && ~e.indexOf("random(") ? vo(e) : e
}, Jg = kc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Zg = {};
Xt(Jg + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return Zg[t] = 1
});
var ct = function(t) {
    yg(e, t);
    function e(r, i, s, o) {
        var a;
        typeof i == "number" && (s.duration = i,
        i = s,
        s = null),
        a = t.call(this, o ? i : Zs(i)) || this;
        var u = a.vars, l = u.duration, c = u.delay, f = u.immediateRender, h = u.stagger, d = u.overwrite, p = u.keyframes, g = u.defaults, v = u.scrollTrigger, m = u.yoyoEase, _ = i.parent || je, D = (Pt(r) || bg(r) ? gr(r[0]) : "length"in i) ? [r] : gn(r), b, C, S, T, x, R, A, I;
        if (a._targets = D.length ? Ac(D) : ka("GSAP target " + r + " not found. https://greensock.com", !sn.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        p || h || qo(l) || qo(c)) {
            if (i = a.vars,
            b = a.timeline = new Vt({
                data: "nested",
                defaults: g || {},
                targets: _ && _.data === "nested" ? _.vars.targets : D
            }),
            b.kill(),
            b.parent = b._dp = or(a),
            b._start = 0,
            h || qo(l) || qo(c)) {
                if (T = D.length,
                A = h && Ng(h),
                Qn(h))
                    for (x in h)
                        ~Jg.indexOf(x) && (I || (I = {}),
                        I[x] = h[x]);
                for (C = 0; C < T; C++)
                    S = Oa(i, Zg),
                    S.stagger = 0,
                    m && (S.yoyoEase = m),
                    I && wi(S, I),
                    R = D[C],
                    S.duration = +to(l, or(a), C, R, D),
                    S.delay = (+to(c, or(a), C, R, D) || 0) - a._delay,
                    !h && T === 1 && S.delay && (a._delay = c = S.delay,
                    a._start += c,
                    S.delay = 0),
                    b.to(R, S, A ? A(C, R, D) : 0),
                    b._ease = Ee.none;
                b.duration() ? l = c = 0 : a.timeline = 0
            } else if (p) {
                Zs(Dn(b.vars.defaults, {
                    ease: "none"
                })),
                b._ease = gi(p.ease || i.ease || "none");
                var O = 0, X, H, J;
                if (Pt(p))
                    p.forEach(function($) {
                        return b.to(D, $, ">")
                    }),
                    b.duration();
                else {
                    S = {};
                    for (x in p)
                        x === "ease" || x === "easeEach" || eC(x, p[x], S, p.easeEach);
                    for (x in S)
                        for (X = S[x].sort(function($, V) {
                            return $.t - V.t
                        }),
                        O = 0,
                        C = 0; C < X.length; C++)
                            H = X[C],
                            J = {
                                ease: H.e,
                                duration: (H.t - (C ? X[C - 1].t : 0)) / 100 * l
                            },
                            J[x] = H.v,
                            b.to(D, J, O),
                            O += J.duration;
                    b.duration() < l && b.to({}, {
                        duration: l - b.duration()
                    })
                }
            }
            l || a.duration(l = b.duration())
        } else
            a.timeline = 0;
        return d === !0 && !Tc && (Rr = or(a),
        je.killTweensOf(D),
        Rr = 0),
        Yn(_, or(a), s),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (f || !l && !p && a._start === wt(_._time) && Kt(f) && Pw(or(a)) && _.data !== "nested") && (a._tTime = -Le,
        a.render(Math.max(0, -c) || 0)),
        v && Lg(or(a), v),
        a
    }
    var n = e.prototype;
    return n.render = function(i, s, o) {
        var a = this._time, u = this._tDur, l = this._dur, c = i < 0, f = i > u - Le && !c ? u : i < Le ? 0 : i, h, d, p, g, v, m, _, D, b;
        if (!l)
            Aw(this, i, s, o);
        else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
            if (h = f,
            D = this.timeline,
            this._repeat) {
                if (g = l + this._rDelay,
                this._repeat < -1 && c)
                    return this.totalTime(g * 100 + i, s, o);
                if (h = wt(f % g),
                f === u ? (p = this._repeat,
                h = l) : (p = ~~(f / g),
                p && p === f / g && (h = l,
                p--),
                h > l && (h = l)),
                m = this._yoyo && p & 1,
                m && (b = this._yEase,
                h = l - h),
                v = ps(this._tTime, g),
                h === a && !o && this._initted)
                    return this._tTime = f,
                    this;
                p !== v && (D && this._yEase && Kg(D, m),
                this.vars.repeatRefresh && !m && !this._lock && (this._lock = o = 1,
                this.render(wt(g * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Bg(this, c ? i : h, o, s, f))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (l !== this._dur)
                    return this.render(i, s, o)
            }
            if (this._tTime = f,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = _ = (b || this._ease)(h / l),
            this._from && (this.ratio = _ = 1 - _),
            h && !a && !s && (_n(this, "onStart"),
            this._tTime !== f))
                return this;
            for (d = this._pt; d; )
                d.r(_, d.d),
                d = d._next;
            D && D.render(i < 0 ? i : !h && m ? -Le : D._dur * D._ease(h / this._dur), s, o) || this._startAt && (this._zTime = i),
            this._onUpdate && !s && (c && Sl(this, i, s, o),
            _n(this, "onUpdate")),
            this._repeat && p !== v && this.vars.onRepeat && !s && this.parent && _n(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (c && !this._onUpdate && Sl(this, i, !0, !0),
            (i || !l) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ur(this, 1),
            !s && !(c && !a) && (f || a || m) && (_n(this, f === u ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, s, o, a) {
        bo || tn.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
        return this._initted || Mc(this, u),
        l = this._ease(u / this._dur),
        Jw(this, i, s, o, a, l, u) ? this.resetTo(i, s, o, a) : (au(this, 0),
        this.parent || Og(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, s) {
        if (s === void 0 && (s = "all"),
        !i && (!s || s === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? $s(this) : this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, s, Rr && Rr.vars.overwrite !== !0)._first || $s(this),
            this.parent && o !== this.timeline.totalDuration() && gs(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var a = this._targets, u = i ? gn(i) : a, l = this._ptLookup, c = this._pt, f, h, d, p, g, v, m;
        if ((!s || s === "all") && Fw(a, u))
            return s === "all" && (this._pt = 0),
            $s(this);
        for (f = this._op = this._op || [],
        s !== "all" && (mt(s) && (g = {},
        Xt(s, function(_) {
            return g[_] = 1
        }),
        s = g),
        s = Zw(a, s)),
        m = a.length; m--; )
            if (~u.indexOf(a[m])) {
                h = l[m],
                s === "all" ? (f[m] = s,
                p = h,
                d = {}) : (d = f[m] = f[m] || {},
                p = s);
                for (g in p)
                    v = h && h[g],
                    v && ((!("kill"in v.d) || v.d.kill(g) === !0) && su(this, v, "_pt"),
                    delete h[g]),
                    d !== "all" && (d[g] = 1)
            }
        return this._initted && !this._pt && c && $s(this),
        this
    }
    ,
    e.to = function(i, s) {
        return new e(i,s,arguments[2])
    }
    ,
    e.from = function(i, s) {
        return eo(1, arguments)
    }
    ,
    e.delayedCall = function(i, s, o, a) {
        return new e(s,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(i, s, o) {
        return eo(2, arguments)
    }
    ,
    e.set = function(i, s) {
        return s.duration = 0,
        s.repeatDelay || (s.repeat = 0),
        new e(i,s)
    }
    ,
    e.killTweensOf = function(i, s, o) {
        return je.killTweensOf(i, s, o)
    }
    ,
    e
}(ms);
Dn(ct.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Xt("staggerTo,staggerFrom,staggerFromTo", function(t) {
    ct[t] = function() {
        var e = new Vt
          , n = Rl.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var Lc = function(e, n, r) {
    return e[n] = r
}
  , e_ = function(e, n, r) {
    return e[n](r)
}
  , tC = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , nC = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , Bc = function(e, n) {
    return Je(e[n]) ? e_ : Sc(e[n]) && e.setAttribute ? nC : Lc
}
  , t_ = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , rC = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , n_ = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , Ic = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , iC = function(e, n, r, i) {
    for (var s = this._pt, o; s; )
        o = s._next,
        s.p === i && s.modifier(e, n, r),
        s = o
}
  , sC = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? su(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , oC = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , r_ = function(e) {
    for (var n = e._pt, r, i, s, o; n; ) {
        for (r = n._next,
        i = s; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : o) ? n._prev._next = n : s = n,
        (n._next = i) ? i._prev = n : o = n,
        n = r
    }
    e._pt = s
}
  , Gt = function() {
    function t(n, r, i, s, o, a, u, l, c) {
        this.t = r,
        this.s = s,
        this.c = o,
        this.p = i,
        this.r = a || t_,
        this.d = u || this,
        this.set = l || Lc,
        this.pr = c || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, s) {
        this.mSet = this.mSet || this.set,
        this.set = oC,
        this.m = r,
        this.mt = s,
        this.tween = i
    }
    ,
    t
}();
Xt(kc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Pc[t] = 1
});
on.TweenMax = on.TweenLite = ct;
on.TimelineLite = on.TimelineMax = Vt;
je = new Vt({
    sortChildren: !1,
    defaults: ds,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
sn.stringFilter = Vg;
var ys = []
  , aa = {}
  , aC = []
  , Rh = 0
  , $u = function(e) {
    return (aa[e] || aC).map(function(n) {
        return n()
    })
}
  , Ol = function() {
    var e = Date.now()
      , n = [];
    e - Rh > 2 && ($u("matchMediaInit"),
    ys.forEach(function(r) {
        var i = r.queries, s = r.conditions, o, a, u, l;
        for (a in i)
            o = cn.matchMedia(i[a]).matches,
            o && (u = 1),
            o !== s[a] && (s[a] = o,
            l = 1);
        l && (r.revert(),
        u && n.push(r))
    }),
    $u("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r)
    }),
    Rh = e,
    $u("matchMedia"))
}
  , i_ = function() {
    function t(n, r) {
        this.selector = r && Pl(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
        Je(r) && (s = i,
        i = r,
        r = Je);
        var o = this
          , a = function() {
            var l = ot, c = o.selector, f;
            return l && l !== o && l.data.push(o),
            s && (o.selector = Pl(s)),
            ot = o,
            f = i.apply(o, arguments),
            Je(f) && o._r.push(f),
            ot = l,
            o.selector = c,
            o.isReverted = !1,
            f
        };
        return o.last = a,
        r === Je ? a(o) : r ? o[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var i = ot;
        ot = null,
        r(this),
        ot = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof ct && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var s = this;
        if (r) {
            var o = this.getTweens();
            this.data.forEach(function(u) {
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(l) {
                    return o.splice(o.indexOf(l), 1)
                }))
            }),
            o.map(function(u) {
                return {
                    g: u.globalTime(0),
                    t: u
                }
            }).sort(function(u, l) {
                return l.g - u.g || -1
            }).forEach(function(u) {
                return u.t.revert(r)
            }),
            this.data.forEach(function(u) {
                return !(u instanceof ms) && u.revert && u.revert(r)
            }),
            this._r.forEach(function(u) {
                return u(r, s)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(u) {
                return u.kill && u.kill()
            });
        if (this.clear(),
        i) {
            var a = ys.indexOf(this);
            ~a && ys.splice(a, 1)
        }
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , uC = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n
    }
    var e = t.prototype;
    return e.add = function(r, i, s) {
        Qn(r) || (r = {
            matches: r
        });
        var o = new i_(0,s || this.scope), a = o.conditions = {}, u, l, c;
        this.contexts.push(o),
        i = o.add("onMatch", i),
        o.queries = r;
        for (l in r)
            l === "all" ? c = 1 : (u = cn.matchMedia(r[l]),
            u && (ys.indexOf(o) < 0 && ys.push(o),
            (a[l] = u.matches) && (c = 1),
            u.addListener ? u.addListener(Ol) : u.addEventListener("change", Ol)));
        return c && i(o),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , La = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return Uw(i)
        })
    },
    timeline: function(e) {
        return new Vt(e)
    },
    getTweensOf: function(e, n) {
        return je.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        mt(e) && (e = gn(e)[0]);
        var s = di(e || {}).get
          , o = r ? Ag : kg;
        return r === "native" && (r = ""),
        e && (n ? o((en[n] && en[n].get || s)(e, n, r, i)) : function(a, u, l) {
            return o((en[a] && en[a].get || s)(e, a, u, l))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = gn(e),
        e.length > 1) {
            var i = e.map(function(c) {
                return an.quickSetter(c, n, r)
            })
              , s = i.length;
            return function(c) {
                for (var f = s; f--; )
                    i[f](c)
            }
        }
        e = e[0] || {};
        var o = en[n]
          , a = di(e)
          , u = a.harness && (a.harness.aliases || {})[n] || n
          , l = o ? function(c) {
            var f = new o;
            Wi._pt = 0,
            f.init(e, r ? c + r : c, Wi, 0, [e]),
            f.render(1, f),
            Wi._pt && Ic(1, Wi)
        }
        : a.set(e, u);
        return o ? l : function(c) {
            return l(e, u, r ? c + r : c, a, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, s = an.to(e, wi((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i), r || {})), o = function(u, l, c) {
            return s.resetTo(n, u, l, c)
        };
        return o.tween = s,
        o
    },
    isTweening: function(e) {
        return je.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = gi(e.ease, ds.ease)),
        Eh(ds, e || {})
    },
    config: function(e) {
        return Eh(sn, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , s = e.defaults
          , o = e.extendTimeline;
        (i || "").split(",").forEach(function(a) {
            return a && !en[a] && !on[a] && ka(n + " effect requires " + a + " plugin.")
        }),
        Mu[n] = function(a, u, l) {
            return r(gn(a), Dn(u || {}, s), l)
        }
        ,
        o && (Vt.prototype[n] = function(a, u, l) {
            return this.add(Mu[n](a, Qn(u) ? u : (l = u) && {}, this), l)
        }
        )
    },
    registerEase: function(e, n) {
        Ee[e] = gi(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? gi(e, n) : Ee
    },
    getById: function(e) {
        return je.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new Vt(e), i, s;
        for (r.smoothChildTiming = Kt(e.smoothChildTiming),
        je.remove(r),
        r._dp = 0,
        r._time = r._tTime = je._time,
        i = je._first; i; )
            s = i._next,
            (n || !(!i._dur && i instanceof ct && i.vars.onComplete === i._targets[0])) && Yn(r, i, i._start - i._delay),
            i = s;
        return Yn(je, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new i_(e,n) : ot
    },
    matchMedia: function(e) {
        return new uC(e)
    },
    matchMediaRefresh: function() {
        return ys.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || Ol()
    },
    addEventListener: function(e, n) {
        var r = aa[e] || (aa[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = aa[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: Hw,
        wrapYoyo: zw,
        distribute: Ng,
        random: zg,
        snap: Hg,
        normalize: Nw,
        getUnit: St,
        clamp: Lw,
        splitColor: Wg,
        toArray: gn,
        selector: Pl,
        mapRange: Ug,
        pipe: Iw,
        unitize: $w,
        interpolate: jw,
        shuffle: $g
    },
    install: Tg,
    effects: Mu,
    ticker: tn,
    updateRoot: Vt.updateRoot,
    plugins: en,
    globalTimeline: je,
    core: {
        PropTween: Gt,
        globals: Sg,
        Tween: ct,
        Timeline: Vt,
        Animation: ms,
        getCache: di,
        _removeLinkedListItem: su,
        reverting: function() {
            return Rt
        },
        context: function(e) {
            return e && ot && (ot.data.push(e),
            e._ctx = ot),
            ot
        },
        suppressOverwrites: function(e) {
            return Tc = e
        }
    }
};
Xt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return La[t] = ct[t]
});
tn.add(Vt.updateRoot);
Wi = La.to({}, {
    duration: 0
});
var lC = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , cC = function(e, n) {
    var r = e._targets, i, s, o;
    for (i in n)
        for (s = r.length; s--; )
            o = e._ptLookup[s][i],
            o && (o = o.d) && (o._pt && (o = lC(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[s], i))
}
  , Nu = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, s, o) {
            o._onInit = function(a) {
                var u, l;
                if (mt(s) && (u = {},
                Xt(s, function(c) {
                    return u[c] = 1
                }),
                s = u),
                n) {
                    u = {};
                    for (l in s)
                        u[l] = n(s[l]);
                    s = u
                }
                cC(a, s)
            }
        }
    }
}
  , an = La.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, s) {
        var o, a, u;
        this.tween = r;
        for (o in n)
            u = e.getAttribute(o) || "",
            a = this.add(e, "setAttribute", (u || 0) + "", n[o], i, s, 0, 0, o),
            a.op = o,
            a.b = u,
            this._props.push(o)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            Rt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, Nu("roundProps", kl), Nu("modifiers"), Nu("snap", Hg)) || La;
ct.version = Vt.version = an.version = "3.11.4";
xg = 1;
vg() && _s();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;

var Ph, Pr, ns, $c, li, kh, Nc, fC = function() {
    return typeof window < "u"
}, _r = {}, ii = 180 / Math.PI, rs = Math.PI / 180, Oi = Math.atan2, Ah = 1e8, Hc = /([A-Z])/g, hC = /(left|right|width|margin|padding|x)/i, dC = /[\s,\(]\S/, cr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ml = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, pC = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, gC = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, _C = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, s_ = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, o_ = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, mC = function(e, n, r) {
    return e.style[n] = r
}, yC = function(e, n, r) {
    return e.style.setProperty(n, r)
}, DC = function(e, n, r) {
    return e._gsap[n] = r
}, vC = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, bC = function(e, n, r, i, s) {
    var o = e._gsap;
    o.scaleX = o.scaleY = r,
    o.renderTransform(s, o)
}, wC = function(e, n, r, i, s) {
    var o = e._gsap;
    o[n] = r,
    o.renderTransform(s, o)
}, Ue = "transform", An = Ue + "Origin", CC = function(e, n) {
    var r = this
      , i = this.target
      , s = i.style;
    if (e in _r) {
        if (this.tfm = this.tfm || {},
        e !== "transform" && (e = cr[e] || e,
        ~e.indexOf(",") ? e.split(",").forEach(function(o) {
            return r.tfm[o] = ur(i, o)
        }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : ur(i, e)),
        this.props.indexOf(Ue) >= 0)
            return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(An, n, "")),
        e = Ue
    }
    (s || n) && this.props.push(e, n, s[e])
}, a_ = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, EC = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, s, o;
    for (s = 0; s < e.length; s += 3)
        e[s + 1] ? n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].replace(Hc, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            i[o] = this.tfm[o];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        s = Nc(),
        s && !s.isStart && !r[Ue] && (a_(r),
        i.uncache = 1)
    }
}, u_ = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: EC,
        save: CC
    };
    return n && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, l_, Ll = function(e, n) {
    var r = Pr.createElementNS ? Pr.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Pr.createElement(e);
    return r.style ? r : Pr.createElement(e)
}, Kn = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(Hc, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Ds(n) || n, 1) || ""
}, Oh = "O,Moz,ms,Ms,Webkit".split(","), Ds = function(e, n, r) {
    var i = n || li
      , s = i.style
      , o = 5;
    if (e in s && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Oh[o] + e in s); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Oh[o] : "") + e
}, Bl = function() {
    fC() && window.document && (Ph = window,
    Pr = Ph.document,
    ns = Pr.documentElement,
    li = Ll("div") || {
        style: {}
    },
    Ll("div"),
    Ue = Ds(Ue),
    An = Ue + "Origin",
    li.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    l_ = !!Ds("perspective"),
    Nc = an.core.reverting,
    $c = 1)
}, Hu = function t(e) {
    var n = Ll("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, s = this.style.cssText, o;
    if (ns.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            o = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (o = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    ns.removeChild(n),
    this.style.cssText = s,
    o
}, Mh = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, c_ = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = Hu.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === Hu || (n = Hu.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +Mh(e, ["x", "cx", "x1"]) || 0,
        y: +Mh(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, f_ = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && c_(e))
}, wo = function(e, n) {
    if (n) {
        var r = e.style;
        n in _r && n !== An && (n = Ue),
        r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(n.replace(Hc, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, kr = function(e, n, r, i, s, o) {
    var a = new Gt(e._pt,n,r,0,1,o ? o_ : s_);
    return e._pt = a,
    a.b = i,
    a.e = s,
    e._props.push(r),
    a
}, Lh = {
    deg: 1,
    rad: 1,
    turn: 1
}, xC = {
    grid: 1,
    flex: 1
}, Wr = function t(e, n, r, i) {
    var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", a = li.style, u = hC.test(n), l = e.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (u ? "Width" : "Height"), f = 100, h = i === "px", d = i === "%", p, g, v, m;
    return i === o || !s || Lh[i] || Lh[o] ? s : (o !== "px" && !h && (s = t(e, n, r, "px")),
    m = e.getCTM && f_(e),
    (d || o === "%") && (_r[n] || ~n.indexOf("adius")) ? (p = m ? e.getBBox()[u ? "width" : "height"] : e[c],
    rt(d ? s / p * f : s / 100 * p)) : (a[u ? "width" : "height"] = f + (h ? o : i),
    g = ~n.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode,
    m && (g = (e.ownerSVGElement || {}).parentNode),
    (!g || g === Pr || !g.appendChild) && (g = Pr.body),
    v = g._gsap,
    v && d && v.width && u && v.time === tn.time && !v.uncache ? rt(s / v.width * f) : ((d || o === "%") && !xC[Kn(g, "display")] && (a.position = Kn(e, "position")),
    g === e && (a.position = "static"),
    g.appendChild(li),
    p = li[c],
    g.removeChild(li),
    a.position = "absolute",
    u && d && (v = di(g),
    v.time = tn.time,
    v.width = g[c]),
    rt(h ? p * s / f : p && s ? f / p * s : 0))))
}, ur = function(e, n, r, i) {
    var s;
    return $c || Bl(),
    n in cr && n !== "transform" && (n = cr[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    _r[n] && n !== "transform" ? (s = Eo(e, i),
    s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : Ia(Kn(e, An)) + " " + s.zOrigin + "px") : (s = e.style[n],
    (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Ba[n] && Ba[n](e, n, r) || Kn(e, n) || Rg(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(s + "").trim().indexOf(" ") ? Wr(e, n, s, r) + r : s
}, TC = function(e, n, r, i) {
    if (!r || r === "none") {
        var s = Ds(n, e, 1)
          , o = s && Kn(e, s, 1);
        o && o !== r ? (n = s,
        r = o) : n === "borderColor" && (r = Kn(e, "borderTopColor"))
    }
    var a = new Gt(this._pt,e.style,n,0,1,n_), u = 0, l = 0, c, f, h, d, p, g, v, m, _, D, b, C;
    if (a.b = r,
    a.e = i,
    r += "",
    i += "",
    i === "auto" && (e.style[n] = i,
    i = Kn(e, n) || i,
    e.style[n] = r),
    c = [r, i],
    Vg(c),
    r = c[0],
    i = c[1],
    h = r.match(Ui) || [],
    C = i.match(Ui) || [],
    C.length) {
        for (; f = Ui.exec(i); )
            v = f[0],
            _ = i.substring(u, f.index),
            p ? p = (p + 1) % 5 : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (p = 1),
            v !== (g = h[l++] || "") && (d = parseFloat(g) || 0,
            b = g.substr((d + "").length),
            v.charAt(1) === "=" && (v = ts(d, v) + b),
            m = parseFloat(v),
            D = v.substr((m + "").length),
            u = Ui.lastIndex - D.length,
            D || (D = D || sn.units[n] || b,
            u === i.length && (i += D,
            a.e += D)),
            b !== D && (d = Wr(e, n, g, D) || 0),
            a._pt = {
                _next: a._pt,
                p: _ || l === 1 ? _ : ",",
                s: d,
                c: m - d,
                m: p && p < 4 || n === "zIndex" ? Math.round : 0
            });
        a.c = u < i.length ? i.substring(u, i.length) : ""
    } else
        a.r = n === "display" && i === "none" ? o_ : s_;
    return Cg.test(i) && (a.e = 0),
    this._pt = a,
    a
}, Bh = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, SC = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = Bh[r] || r,
    n[1] = Bh[i] || i,
    n.join(" ")
}, FC = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, s = n.u, o = r._gsap, a, u, l;
        if (s === "all" || s === !0)
            i.cssText = "",
            u = 1;
        else
            for (s = s.split(","),
            l = s.length; --l > -1; )
                a = s[l],
                _r[a] && (u = 1,
                a = a === "transformOrigin" ? An : Ue),
                wo(r, a);
        u && (wo(r, Ue),
        o && (o.svg && r.removeAttribute("transform"),
        Eo(r, 1),
        o.uncache = 1,
        a_(i)))
    }
}, Ba = {
    clearProps: function(e, n, r, i, s) {
        if (s.data !== "isFromStart") {
            var o = e._pt = new Gt(e._pt,n,r,0,0,FC);
            return o.u = i,
            o.pr = -10,
            o.tween = s,
            e._props.push(r),
            1
        }
    }
}, Co = [1, 0, 0, 1, 0, 0], h_ = {}, d_ = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Ih = function(e) {
    var n = Kn(e, Ue);
    return d_(n) ? Co : n.substr(7).match(wg).map(rt)
}, zc = function(e, n) {
    var r = e._gsap || di(e), i = e.style, s = Ih(e), o, a, u, l;
    return r.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix,
    s = [u.a, u.b, u.c, u.d, u.e, u.f],
    s.join(",") === "1,0,0,1,0,0" ? Co : s) : (s === Co && !e.offsetParent && e !== ns && !r.svg && (u = i.display,
    i.display = "block",
    o = e.parentNode,
    (!o || !e.offsetParent) && (l = 1,
    a = e.nextElementSibling,
    ns.appendChild(e)),
    s = Ih(e),
    u ? i.display = u : wo(e, "display"),
    l && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : ns.removeChild(e))),
    n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
}, Il = function(e, n, r, i, s, o) {
    var a = e._gsap, u = s || zc(e, !0), l = a.xOrigin || 0, c = a.yOrigin || 0, f = a.xOffset || 0, h = a.yOffset || 0, d = u[0], p = u[1], g = u[2], v = u[3], m = u[4], _ = u[5], D = n.split(" "), b = parseFloat(D[0]) || 0, C = parseFloat(D[1]) || 0, S, T, x, R;
    r ? u !== Co && (T = d * v - p * g) && (x = b * (v / T) + C * (-g / T) + (g * _ - v * m) / T,
    R = b * (-p / T) + C * (d / T) - (d * _ - p * m) / T,
    b = x,
    C = R) : (S = c_(e),
    b = S.x + (~D[0].indexOf("%") ? b / 100 * S.width : b),
    C = S.y + (~(D[1] || D[0]).indexOf("%") ? C / 100 * S.height : C)),
    i || i !== !1 && a.smooth ? (m = b - l,
    _ = C - c,
    a.xOffset = f + (m * d + _ * g) - m,
    a.yOffset = h + (m * p + _ * v) - _) : a.xOffset = a.yOffset = 0,
    a.xOrigin = b,
    a.yOrigin = C,
    a.smooth = !!i,
    a.origin = n,
    a.originIsAbsolute = !!r,
    e.style[An] = "0px 0px",
    o && (kr(o, a, "xOrigin", l, b),
    kr(o, a, "yOrigin", c, C),
    kr(o, a, "xOffset", f, a.xOffset),
    kr(o, a, "yOffset", h, a.yOffset)),
    e.setAttribute("data-svg-origin", b + " " + C)
}, Eo = function(e, n) {
    var r = e._gsap || new Gg(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, s = r.scaleX < 0, o = "px", a = "deg", u = getComputedStyle(e), l = Kn(e, An) || "0", c, f, h, d, p, g, v, m, _, D, b, C, S, T, x, R, A, I, O, X, H, J, $, V, Y, L, F, de, ge, et, Te, P;
    return c = f = h = g = v = m = _ = D = b = 0,
    d = p = 1,
    r.svg = !!(e.getCTM && f_(e)),
    u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[Ue] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[Ue] !== "none" ? u[Ue] : "")),
    i.scale = i.rotate = i.translate = "none"),
    T = zc(e, r.svg),
    r.svg && (r.uncache ? (Y = e.getBBox(),
    l = r.xOrigin - Y.x + "px " + (r.yOrigin - Y.y) + "px",
    V = "") : V = !n && e.getAttribute("data-svg-origin"),
    Il(e, V || l, !!V || r.originIsAbsolute, r.smooth !== !1, T)),
    C = r.xOrigin || 0,
    S = r.yOrigin || 0,
    T !== Co && (I = T[0],
    O = T[1],
    X = T[2],
    H = T[3],
    c = J = T[4],
    f = $ = T[5],
    T.length === 6 ? (d = Math.sqrt(I * I + O * O),
    p = Math.sqrt(H * H + X * X),
    g = I || O ? Oi(O, I) * ii : 0,
    _ = X || H ? Oi(X, H) * ii + g : 0,
    _ && (p *= Math.abs(Math.cos(_ * rs))),
    r.svg && (c -= C - (C * I + S * X),
    f -= S - (C * O + S * H))) : (P = T[6],
    et = T[7],
    F = T[8],
    de = T[9],
    ge = T[10],
    Te = T[11],
    c = T[12],
    f = T[13],
    h = T[14],
    x = Oi(P, ge),
    v = x * ii,
    x && (R = Math.cos(-x),
    A = Math.sin(-x),
    V = J * R + F * A,
    Y = $ * R + de * A,
    L = P * R + ge * A,
    F = J * -A + F * R,
    de = $ * -A + de * R,
    ge = P * -A + ge * R,
    Te = et * -A + Te * R,
    J = V,
    $ = Y,
    P = L),
    x = Oi(-X, ge),
    m = x * ii,
    x && (R = Math.cos(-x),
    A = Math.sin(-x),
    V = I * R - F * A,
    Y = O * R - de * A,
    L = X * R - ge * A,
    Te = H * A + Te * R,
    I = V,
    O = Y,
    X = L),
    x = Oi(O, I),
    g = x * ii,
    x && (R = Math.cos(x),
    A = Math.sin(x),
    V = I * R + O * A,
    Y = J * R + $ * A,
    O = O * R - I * A,
    $ = $ * R - J * A,
    I = V,
    J = Y),
    v && Math.abs(v) + Math.abs(g) > 359.9 && (v = g = 0,
    m = 180 - m),
    d = rt(Math.sqrt(I * I + O * O + X * X)),
    p = rt(Math.sqrt($ * $ + P * P)),
    x = Oi(J, $),
    _ = Math.abs(x) > 2e-4 ? x * ii : 0,
    b = Te ? 1 / (Te < 0 ? -Te : Te) : 0),
    r.svg && (V = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !d_(Kn(e, Ue)),
    V && e.setAttribute("transform", V))),
    Math.abs(_) > 90 && Math.abs(_) < 270 && (s ? (d *= -1,
    _ += g <= 0 ? 180 : -180,
    g += g <= 0 ? 180 : -180) : (p *= -1,
    _ += _ <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = c - ((r.xPercent = c && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o,
    r.z = h + o,
    r.scaleX = rt(d),
    r.scaleY = rt(p),
    r.rotation = rt(g) + a,
    r.rotationX = rt(v) + a,
    r.rotationY = rt(m) + a,
    r.skewX = _ + a,
    r.skewY = D + a,
    r.transformPerspective = b + o,
    (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[An] = Ia(l)),
    r.xOffset = r.yOffset = 0,
    r.force3D = sn.force3D,
    r.renderTransform = r.svg ? PC : l_ ? p_ : RC,
    r.uncache = 0,
    r
}, Ia = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, zu = function(e, n, r) {
    var i = St(n);
    return rt(parseFloat(n) + parseFloat(Wr(e, "x", r + "px", i))) + i
}, RC = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    p_(e, n)
}, ti = "0deg", As = "0px", ni = ") ", p_ = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , s = r.yPercent
      , o = r.x
      , a = r.y
      , u = r.z
      , l = r.rotation
      , c = r.rotationY
      , f = r.rotationX
      , h = r.skewX
      , d = r.skewY
      , p = r.scaleX
      , g = r.scaleY
      , v = r.transformPerspective
      , m = r.force3D
      , _ = r.target
      , D = r.zOrigin
      , b = ""
      , C = m === "auto" && e && e !== 1 || m === !0;
    if (D && (f !== ti || c !== ti)) {
        var S = parseFloat(c) * rs, T = Math.sin(S), x = Math.cos(S), R;
        S = parseFloat(f) * rs,
        R = Math.cos(S),
        o = zu(_, o, T * R * -D),
        a = zu(_, a, -Math.sin(S) * -D),
        u = zu(_, u, x * R * -D + D)
    }
    v !== As && (b += "perspective(" + v + ni),
    (i || s) && (b += "translate(" + i + "%, " + s + "%) "),
    (C || o !== As || a !== As || u !== As) && (b += u !== As || C ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + ni),
    l !== ti && (b += "rotate(" + l + ni),
    c !== ti && (b += "rotateY(" + c + ni),
    f !== ti && (b += "rotateX(" + f + ni),
    (h !== ti || d !== ti) && (b += "skew(" + h + ", " + d + ni),
    (p !== 1 || g !== 1) && (b += "scale(" + p + ", " + g + ni),
    _.style[Ue] = b || "translate(0, 0)"
}, PC = function(e, n) {
    var r = n || this, i = r.xPercent, s = r.yPercent, o = r.x, a = r.y, u = r.rotation, l = r.skewX, c = r.skewY, f = r.scaleX, h = r.scaleY, d = r.target, p = r.xOrigin, g = r.yOrigin, v = r.xOffset, m = r.yOffset, _ = r.forceCSS, D = parseFloat(o), b = parseFloat(a), C, S, T, x, R;
    u = parseFloat(u),
    l = parseFloat(l),
    c = parseFloat(c),
    c && (c = parseFloat(c),
    l += c,
    u += c),
    u || l ? (u *= rs,
    l *= rs,
    C = Math.cos(u) * f,
    S = Math.sin(u) * f,
    T = Math.sin(u - l) * -h,
    x = Math.cos(u - l) * h,
    l && (c *= rs,
    R = Math.tan(l - c),
    R = Math.sqrt(1 + R * R),
    T *= R,
    x *= R,
    c && (R = Math.tan(c),
    R = Math.sqrt(1 + R * R),
    C *= R,
    S *= R)),
    C = rt(C),
    S = rt(S),
    T = rt(T),
    x = rt(x)) : (C = f,
    x = h,
    S = T = 0),
    (D && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (D = Wr(d, "x", o, "px"),
    b = Wr(d, "y", a, "px")),
    (p || g || v || m) && (D = rt(D + p - (p * C + g * T) + v),
    b = rt(b + g - (p * S + g * x) + m)),
    (i || s) && (R = d.getBBox(),
    D = rt(D + i / 100 * R.width),
    b = rt(b + s / 100 * R.height)),
    R = "matrix(" + C + "," + S + "," + T + "," + x + "," + D + "," + b + ")",
    d.setAttribute("transform", R),
    _ && (d.style[Ue] = R)
}, kC = function(e, n, r, i, s) {
    var o = 360, a = mt(s), u = parseFloat(s) * (a && ~s.indexOf("rad") ? ii : 1), l = u - i, c = i + l + "deg", f, h;
    return a && (f = s.split("_")[1],
    f === "short" && (l %= o,
    l !== l % (o / 2) && (l += l < 0 ? o : -o)),
    f === "cw" && l < 0 ? l = (l + o * Ah) % o - ~~(l / o) * o : f === "ccw" && l > 0 && (l = (l - o * Ah) % o - ~~(l / o) * o)),
    e._pt = h = new Gt(e._pt,n,r,i,l,pC),
    h.e = c,
    h.u = "deg",
    e._props.push(r),
    h
}, $h = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, AC = function(e, n, r) {
    var i = $h({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, u, l, c, f, h, d, p;
    i.svg ? (l = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    o[Ue] = n,
    a = Eo(r, 1),
    wo(r, Ue),
    r.setAttribute("transform", l)) : (l = getComputedStyle(r)[Ue],
    o[Ue] = n,
    a = Eo(r, 1),
    o[Ue] = l);
    for (u in _r)
        l = i[u],
        c = a[u],
        l !== c && s.indexOf(u) < 0 && (d = St(l),
        p = St(c),
        f = d !== p ? Wr(r, u, l, p) : parseFloat(l),
        h = parseFloat(c),
        e._pt = new Gt(e._pt,a,u,f,h - f,Ml),
        e._pt.u = p || 0,
        e._props.push(u));
    $h(a, i)
};
Xt("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , s = "Left"
      , o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(a) {
        return e < 2 ? t + a : "border" + a + t
    });
    Ba[e > 1 ? "border" + t : t] = function(a, u, l, c, f) {
        var h, d;
        if (arguments.length < 4)
            return h = o.map(function(p) {
                return ur(a, p, l)
            }),
            d = h.join(" "),
            d.split(h[0]).length === 5 ? h[0] : d;
        h = (c + "").split(" "),
        d = {},
        o.forEach(function(p, g) {
            return d[p] = h[g] = h[g] || h[(g - 1) / 2 | 0]
        }),
        a.init(u, d, f)
    }
});
var g_ = {
    name: "css",
    register: Bl,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, s) {
        var o = this._props, a = e.style, u = r.vars.startAt, l, c, f, h, d, p, g, v, m, _, D, b, C, S, T, x;
        $c || Bl(),
        this.styles = this.styles || u_(e),
        x = this.styles.props,
        this.tween = r;
        for (g in n)
            if (g !== "autoRound" && (c = n[g],
            !(en[g] && Qg(g, n, r, i, e, s)))) {
                if (d = typeof c,
                p = Ba[g],
                d === "function" && (c = c.call(r, i, e, s),
                d = typeof c),
                d === "string" && ~c.indexOf("random(") && (c = vo(c)),
                p)
                    p(this, e, g, c, r) && (T = 1);
                else if (g.substr(0, 2) === "--")
                    l = (getComputedStyle(e).getPropertyValue(g) + "").trim(),
                    c += "",
                    Nr.lastIndex = 0,
                    Nr.test(l) || (v = St(l),
                    m = St(c)),
                    m ? v !== m && (l = Wr(e, g, l, m) + m) : v && (c += v),
                    this.add(a, "setProperty", l, c, i, s, 0, 0, g),
                    o.push(g),
                    x.push(g, 0, a[g]);
                else if (d !== "undefined") {
                    if (u && g in u ? (l = typeof u[g] == "function" ? u[g].call(r, i, e, s) : u[g],
                    mt(l) && ~l.indexOf("random(") && (l = vo(l)),
                    St(l + "") || (l += sn.units[g] || St(ur(e, g)) || ""),
                    (l + "").charAt(1) === "=" && (l = ur(e, g))) : l = ur(e, g),
                    h = parseFloat(l),
                    _ = d === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                    _ && (c = c.substr(2)),
                    f = parseFloat(c),
                    g in cr && (g === "autoAlpha" && (h === 1 && ur(e, "visibility") === "hidden" && f && (h = 0),
                    x.push("visibility", 0, a.visibility),
                    kr(this, a, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    g !== "scale" && g !== "transform" && (g = cr[g],
                    ~g.indexOf(",") && (g = g.split(",")[0]))),
                    D = g in _r,
                    D) {
                        if (this.styles.save(g),
                        b || (C = e._gsap,
                        C.renderTransform && !n.parseTransform || Eo(e, n.parseTransform),
                        S = n.smoothOrigin !== !1 && C.smooth,
                        b = this._pt = new Gt(this._pt,a,Ue,0,1,C.renderTransform,C,0,-1),
                        b.dep = 1),
                        g === "scale")
                            this._pt = new Gt(this._pt,C,"scaleY",C.scaleY,(_ ? ts(C.scaleY, _ + f) : f) - C.scaleY || 0,Ml),
                            this._pt.u = 0,
                            o.push("scaleY", g),
                            g += "X";
                        else if (g === "transformOrigin") {
                            x.push(An, 0, a[An]),
                            c = SC(c),
                            C.svg ? Il(e, c, 0, S, 0, this) : (m = parseFloat(c.split(" ")[2]) || 0,
                            m !== C.zOrigin && kr(this, C, "zOrigin", C.zOrigin, m),
                            kr(this, a, g, Ia(l), Ia(c)));
                            continue
                        } else if (g === "svgOrigin") {
                            Il(e, c, 1, S, 0, this);
                            continue
                        } else if (g in h_) {
                            kC(this, C, g, h, _ ? ts(h, _ + c) : c);
                            continue
                        } else if (g === "smoothOrigin") {
                            kr(this, C, "smooth", C.smooth, c);
                            continue
                        } else if (g === "force3D") {
                            C[g] = c;
                            continue
                        } else if (g === "transform") {
                            AC(this, c, e);
                            continue
                        }
                    } else
                        g in a || (g = Ds(g) || g);
                    if (D || (f || f === 0) && (h || h === 0) && !dC.test(c) && g in a)
                        v = (l + "").substr((h + "").length),
                        f || (f = 0),
                        m = St(c) || (g in sn.units ? sn.units[g] : v),
                        v !== m && (h = Wr(e, g, l, m)),
                        this._pt = new Gt(this._pt,D ? C : a,g,h,(_ ? ts(h, _ + f) : f) - h,!D && (m === "px" || g === "zIndex") && n.autoRound !== !1 ? _C : Ml),
                        this._pt.u = m || 0,
                        v !== m && m !== "%" && (this._pt.b = l,
                        this._pt.r = gC);
                    else if (g in a)
                        TC.call(this, e, g, l, _ ? _ + c : c);
                    else if (g in e)
                        this.add(e, g, l || e[g], _ ? _ + c : c, i, s);
                    else if (g !== "parseTransform") {
                        Rc(g, c);
                        continue
                    }
                    D || (g in a ? x.push(g, 0, a[g]) : x.push(g, 1, l || e[g])),
                    o.push(g)
                }
            }
        T && r_(this)
    },
    render: function(e, n) {
        if (n.tween._time || !Nc())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: ur,
    aliases: cr,
    getSetter: function(e, n, r) {
        var i = cr[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in _r && n !== An && (e._gsap.x || ur(e, "x")) ? r && kh === r ? n === "scale" ? vC : DC : (kh = r || {}) && (n === "scale" ? bC : wC) : e.style && !Sc(e.style[n]) ? mC : ~n.indexOf("-") ? yC : Bc(e, n)
    },
    core: {
        _removeProperty: wo,
        _getMatrix: zc
    }
};
an.utils.checkPrefix = Ds;
an.core.getStyleSaver = u_;
(function(t, e, n, r) {
    var i = Xt(t + "," + e + "," + n, function(s) {
        _r[s] = 1
    });
    Xt(e, function(s) {
        sn.units[s] = "deg",
        h_[s] = 1
    }),
    cr[i[13]] = t + "," + e,
    Xt(r, function(s) {
        var o = s.split(":");
        cr[o[1]] = i[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    sn.units[t] = "px"
});
an.registerPlugin(g_);
var Ne = an.registerPlugin(g_) || an;
Ne.core.Tween;
function Nh(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function OC(t, e, n) {
    return e && Nh(t.prototype, e),
    n && Nh(t, n),
    t
}
/*!
 * Observer 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ct, $l, nn, Ar, Or, is, __, si, no, m_, fr, Cn, y_, D_ = function() {
    return Ct || typeof window < "u" && (Ct = window.gsap) && Ct.registerPlugin && Ct
}, v_ = 1, qi = [], ve = [], Xn = [], ro = Date.now, Nl = function(e, n) {
    return n
}, MC = function() {
    var e = no.core
      , n = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, ve),
    i.push.apply(i, Xn),
    ve = r,
    Xn = i,
    Nl = function(o, a) {
        return n[o](a)
    }
}, Hr = function(e, n) {
    return ~Xn.indexOf(e) && Xn[Xn.indexOf(e) + 1][n]
}, io = function(e) {
    return !!~m_.indexOf(e)
}, jt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!s
    })
}, At = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, Vo = "scrollLeft", Yo = "scrollTop", Hl = function() {
    return fr && fr.isPressed || ve.cache++
}, $a = function(e, n) {
    var r = function i(s) {
        if (s || s === 0) {
            v_ && (nn.history.scrollRestoration = "manual");
            var o = fr && fr.isPressed;
            s = i.v = Math.round(s) || (fr && fr.iOS ? 1 : 0),
            e(s),
            i.cacheID = ve.cache,
            o && Nl("ss", s)
        } else
            (n || ve.cache !== i.cacheID || Nl("ref")) && (i.cacheID = ve.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, Bt = {
    s: Vo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: $a(function(t) {
        return arguments.length ? nn.scrollTo(t, ft.sc()) : nn.pageXOffset || Ar[Vo] || Or[Vo] || is[Vo] || 0
    })
}, ft = {
    s: Yo,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Bt,
    sc: $a(function(t) {
        return arguments.length ? nn.scrollTo(Bt.sc(), t) : nn.pageYOffset || Ar[Yo] || Or[Yo] || is[Yo] || 0
    })
}, Wt = function(e) {
    return Ct.utils.toArray(e)[0] || (typeof e == "string" && Ct.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, qr = function(e, n) {
    var r = n.s
      , i = n.sc;
    io(e) && (e = Ar.scrollingElement || Or);
    var s = ve.indexOf(e)
      , o = i === ft.sc ? 1 : 2;
    !~s && (s = ve.push(e) - 1),
    ve[s + o] || e.addEventListener("scroll", Hl);
    var a = ve[s + o]
      , u = a || (ve[s + o] = $a(Hr(e, r), !0) || (io(e) ? i : $a(function(l) {
        return arguments.length ? e[r] = l : e[r]
    })));
    return u.target = e,
    a || (u.smooth = Ct.getProperty(e, "scrollBehavior") === "smooth"),
    u
}, zl = function(e, n, r) {
    var i = e
      , s = e
      , o = ro()
      , a = o
      , u = n || 50
      , l = Math.max(500, u * 3)
      , c = function(p, g) {
        var v = ro();
        g || v - o > u ? (s = i,
        i = p,
        a = o,
        o = v) : r ? i += p : i = s + (p - s) / (v - a) * (o - a)
    }
      , f = function() {
        s = i = r ? 0 : i,
        a = o = 0
    }
      , h = function(p) {
        var g = a
          , v = s
          , m = ro();
        return (p || p === 0) && p !== i && c(p),
        o === a || m - a > l ? 0 : (i + (r ? v : -v)) / ((r ? m : o) - g) * 1e3
    };
    return {
        update: c,
        reset: f,
        getVelocity: h
    }
}, Os = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Hh = function(e) {
    var n = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
}, b_ = function() {
    no = Ct.core.globals().ScrollTrigger,
    no && no.core && MC()
}, w_ = function(e) {
    return Ct = e || D_(),
    Ct && typeof document < "u" && document.body && (nn = window,
    Ar = document,
    Or = Ar.documentElement,
    is = Ar.body,
    m_ = [nn, Ar, Or, is],
    Ct.utils.clamp,
    y_ = Ct.core.context || function() {}
    ,
    si = "onpointerenter"in is ? "pointer" : "mouse",
    __ = at.isTouch = nn.matchMedia && nn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in nn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Cn = at.eventTypes = ("ontouchstart"in Or ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Or ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return v_ = 0
    }, 500),
    b_(),
    $l = 1),
    $l
};
Bt.op = ft;
ve.cache = 0;
var at = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(r) {
        $l || w_(Ct) || console.warn("Please gsap.registerPlugin(Observer)"),
        no || b_();
        var i = r.tolerance
          , s = r.dragMinimum
          , o = r.type
          , a = r.target
          , u = r.lineHeight
          , l = r.debounce
          , c = r.preventDefault
          , f = r.onStop
          , h = r.onStopDelay
          , d = r.ignore
          , p = r.wheelSpeed
          , g = r.event
          , v = r.onDragStart
          , m = r.onDragEnd
          , _ = r.onDrag
          , D = r.onPress
          , b = r.onRelease
          , C = r.onRight
          , S = r.onLeft
          , T = r.onUp
          , x = r.onDown
          , R = r.onChangeX
          , A = r.onChangeY
          , I = r.onChange
          , O = r.onToggleX
          , X = r.onToggleY
          , H = r.onHover
          , J = r.onHoverEnd
          , $ = r.onMove
          , V = r.ignoreCheck
          , Y = r.isNormalizer
          , L = r.onGestureStart
          , F = r.onGestureEnd
          , de = r.onWheel
          , ge = r.onEnable
          , et = r.onDisable
          , Te = r.onClick
          , P = r.scrollSpeed
          , U = r.capture
          , j = r.allowClicks
          , Q = r.lockAxis
          , _e = r.onLockAxis;
        this.target = a = Wt(a) || Or,
        this.vars = r,
        d && (d = Ct.utils.toArray(d)),
        i = i || 1e-9,
        s = s || 0,
        p = p || 1,
        P = P || 1,
        o = o || "wheel,touch,pointer",
        l = l !== !1,
        u || (u = parseFloat(nn.getComputedStyle(is).lineHeight) || 22);
        var ye, se, y, w, k, M, B, E = this, K = 0, N = 0, W = qr(a, Bt), z = qr(a, ft), Z = W(), G = z(), ee = ~o.indexOf("touch") && !~o.indexOf("pointer") && Cn[0] === "pointerdown", ie = io(a), te = a.ownerDocument || Ar, pe = [0, 0, 0], le = [0, 0, 0], Be = 0, Ae = function() {
            return Be = ro()
        }, yt = function(re, q) {
            return (E.event = re) && d && ~d.indexOf(re.target) || q && ee && re.pointerType !== "touch" || V && V(re, q)
        }, yr = function() {
            E._vx.reset(),
            E._vy.reset(),
            se.pause(),
            f && f(E)
        }, Ht = function() {
            var re = E.deltaX = Hh(pe)
              , q = E.deltaY = Hh(le)
              , oe = Math.abs(re) >= i
              , ae = Math.abs(q) >= i;
            I && (oe || ae) && I(E, re, q, pe, le),
            oe && (C && E.deltaX > 0 && C(E),
            S && E.deltaX < 0 && S(E),
            R && R(E),
            O && E.deltaX < 0 != K < 0 && O(E),
            K = E.deltaX,
            pe[0] = pe[1] = pe[2] = 0),
            ae && (x && E.deltaY > 0 && x(E),
            T && E.deltaY < 0 && T(E),
            A && A(E),
            X && E.deltaY < 0 != N < 0 && X(E),
            N = E.deltaY,
            le[0] = le[1] = le[2] = 0),
            (w || y) && ($ && $(E),
            y && (_(E),
            y = !1),
            w = !1),
            M && !(M = !1) && _e && _e(E),
            k && (de(E),
            k = !1),
            ye = 0
        }, Jn = function(re, q, oe) {
            pe[oe] += re,
            le[oe] += q,
            E._vx.update(re),
            E._vy.update(q),
            l ? ye || (ye = requestAnimationFrame(Ht)) : Ht()
        }, tt = function(re, q) {
            Q && !B && (E.axis = B = Math.abs(re) > Math.abs(q) ? "x" : "y",
            M = !0),
            B !== "y" && (pe[2] += re,
            E._vx.update(re, !0)),
            B !== "x" && (le[2] += q,
            E._vy.update(q, !0)),
            l ? ye || (ye = requestAnimationFrame(Ht)) : Ht()
        }, dt = function(re) {
            if (!yt(re, 1)) {
                re = Os(re, c);
                var q = re.clientX
                  , oe = re.clientY
                  , ae = q - E.x
                  , fe = oe - E.y
                  , pt = E.isDragging;
                E.x = q,
                E.y = oe,
                (pt || Math.abs(E.startX - q) >= s || Math.abs(E.startY - oe) >= s) && (_ && (y = !0),
                pt || (E.isDragging = !0),
                tt(ae, fe),
                pt || v && v(E))
            }
        }, we = E.onPress = function(xe) {
            yt(xe, 1) || (E.axis = B = null,
            se.pause(),
            E.isPressed = !0,
            xe = Os(xe),
            K = N = 0,
            E.startX = E.x = xe.clientX,
            E.startY = E.y = xe.clientY,
            E._vx.reset(),
            E._vy.reset(),
            jt(Y ? a : te, Cn[1], dt, c, !0),
            E.deltaX = E.deltaY = 0,
            D && D(E))
        }
        , Zn = function(re) {
            if (!yt(re, 1)) {
                At(Y ? a : te, Cn[1], dt, !0);
                var q = !isNaN(E.y - E.startY)
                  , oe = E.isDragging && (Math.abs(E.x - E.startX) > 3 || Math.abs(E.y - E.startY) > 3)
                  , ae = Os(re);
                !oe && q && (E._vx.reset(),
                E._vy.reset(),
                c && j && Ct.delayedCall(.08, function() {
                    if (ro() - Be > 300 && !re.defaultPrevented) {
                        if (re.target.click)
                            re.target.click();
                        else if (te.createEvent) {
                            var fe = te.createEvent("MouseEvents");
                            fe.initMouseEvent("click", !0, !0, nn, 1, ae.screenX, ae.screenY, ae.clientX, ae.clientY, !1, !1, !1, !1, 0, null),
                            re.target.dispatchEvent(fe)
                        }
                    }
                })),
                E.isDragging = E.isGesturing = E.isPressed = !1,
                f && !Y && se.restart(!0),
                m && oe && m(E),
                b && b(E, oe)
            }
        }, vn = function(re) {
            return re.touches && re.touches.length > 1 && (E.isGesturing = !0) && L(re, E.isDragging)
        }, bn = function() {
            return (E.isGesturing = !1) || F(E)
        }, Ln = function(re) {
            if (!yt(re)) {
                var q = W()
                  , oe = z();
                Jn((q - Z) * P, (oe - G) * P, 1),
                Z = q,
                G = oe,
                f && se.restart(!0)
            }
        }, Bn = function(re) {
            if (!yt(re)) {
                re = Os(re, c),
                de && (k = !0);
                var q = (re.deltaMode === 1 ? u : re.deltaMode === 2 ? nn.innerHeight : 1) * p;
                Jn(re.deltaX * q, re.deltaY * q, 0),
                f && !Y && se.restart(!0)
            }
        }, Gr = function(re) {
            if (!yt(re)) {
                var q = re.clientX
                  , oe = re.clientY
                  , ae = q - E.x
                  , fe = oe - E.y;
                E.x = q,
                E.y = oe,
                w = !0,
                (ae || fe) && tt(ae, fe)
            }
        }, Ri = function(re) {
            E.event = re,
            H(E)
        }, er = function(re) {
            E.event = re,
            J(E)
        }, Ss = function(re) {
            return yt(re) || Os(re, c) && Te(E)
        };
        se = E._dc = Ct.delayedCall(h || .25, yr).pause(),
        E.deltaX = E.deltaY = 0,
        E._vx = zl(0, 50, !0),
        E._vy = zl(0, 50, !0),
        E.scrollX = W,
        E.scrollY = z,
        E.isDragging = E.isGesturing = E.isPressed = !1,
        y_(this),
        E.enable = function(xe) {
            return E.isEnabled || (jt(ie ? te : a, "scroll", Hl),
            o.indexOf("scroll") >= 0 && jt(ie ? te : a, "scroll", Ln, c, U),
            o.indexOf("wheel") >= 0 && jt(a, "wheel", Bn, c, U),
            (o.indexOf("touch") >= 0 && __ || o.indexOf("pointer") >= 0) && (jt(a, Cn[0], we, c, U),
            jt(te, Cn[2], Zn),
            jt(te, Cn[3], Zn),
            j && jt(a, "click", Ae, !1, !0),
            Te && jt(a, "click", Ss),
            L && jt(te, "gesturestart", vn),
            F && jt(te, "gestureend", bn),
            H && jt(a, si + "enter", Ri),
            J && jt(a, si + "leave", er),
            $ && jt(a, si + "move", Gr)),
            E.isEnabled = !0,
            xe && xe.type && we(xe),
            ge && ge(E)),
            E
        }
        ,
        E.disable = function() {
            E.isEnabled && (qi.filter(function(xe) {
                return xe !== E && io(xe.target)
            }).length || At(ie ? te : a, "scroll", Hl),
            E.isPressed && (E._vx.reset(),
            E._vy.reset(),
            At(Y ? a : te, Cn[1], dt, !0)),
            At(ie ? te : a, "scroll", Ln, U),
            At(a, "wheel", Bn, U),
            At(a, Cn[0], we, U),
            At(te, Cn[2], Zn),
            At(te, Cn[3], Zn),
            At(a, "click", Ae, !0),
            At(a, "click", Ss),
            At(te, "gesturestart", vn),
            At(te, "gestureend", bn),
            At(a, si + "enter", Ri),
            At(a, si + "leave", er),
            At(a, si + "move", Gr),
            E.isEnabled = E.isPressed = E.isDragging = !1,
            et && et(E))
        }
        ,
        E.kill = E.revert = function() {
            E.disable();
            var xe = qi.indexOf(E);
            xe >= 0 && qi.splice(xe, 1),
            fr === E && (fr = 0)
        }
        ,
        qi.push(E),
        Y && io(a) && (fr = E),
        E.enable(g)
    }
    ,
    OC(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
at.version = "3.11.4";
at.create = function(t) {
    return new at(t)
}
;
at.register = w_;
at.getAll = function() {
    return qi.slice()
}
;
at.getById = function(t) {
    return qi.filter(function(e) {
        return e.vars.id === t
    })[0]
}
;
D_() && Ct.registerPlugin(at);

var ne, Ii, Ce, He, Sn, Ge, C_, Na, Ha, Vi, ua, Ko, xt, uu, jl, Mt, zh, jh, $i, E_, ju, x_, Jt, T_, S_, F_, Er, Ul, jc, Uu, Xo = 1, Lt = Date.now, Wu = Lt(), yn = 0, Go = 0, Uh = function() {
    return uu = 1
}, Wh = function() {
    return uu = 0
}, Un = function(e) {
    return e
}, Hs = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, R_ = function() {
    return typeof window < "u"
}, P_ = function() {
    return ne || R_() && (ne = window.gsap) && ne.registerPlugin && ne
}, Ci = function(e) {
    return !!~C_.indexOf(e)
}, k_ = function(e) {
    return Hr(e, "getBoundingClientRect") || (Ci(e) ? function() {
        return pa.width = Ce.innerWidth,
        pa.height = Ce.innerHeight,
        pa
    }
    : function() {
        return lr(e)
    }
    )
}, LC = function(e, n, r) {
    var i = r.d
      , s = r.d2
      , o = r.a;
    return (o = Hr(e, "getBoundingClientRect")) ? function() {
        return o()[i]
    }
    : function() {
        return (n ? Ce["inner" + s] : e["client" + s]) || 0
    }
}, BC = function(e, n) {
    return !n || ~Xn.indexOf(e) ? k_(e) : function() {
        return pa
    }
}, Mr = function(e, n) {
    var r = n.s
      , i = n.d2
      , s = n.d
      , o = n.a;
    return (r = "scroll" + i) && (o = Hr(e, r)) ? o() - k_(e)()[s] : Ci(e) ? (Sn[r] || Ge[r]) - (Ce["inner" + i] || Sn["client" + i] || Ge["client" + i]) : e[r] - e["offset" + i]
}, Qo = function(e, n) {
    for (var r = 0; r < $i.length; r += 3)
        (!n || ~n.indexOf($i[r + 1])) && e($i[r], $i[r + 1], $i[r + 2])
}, xn = function(e) {
    return typeof e == "string"
}, It = function(e) {
    return typeof e == "function"
}, zs = function(e) {
    return typeof e == "number"
}, la = function(e) {
    return typeof e == "object"
}, Ms = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
}, qu = function(e, n) {
    if (e.enabled) {
        var r = n(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, Mi = Math.abs, A_ = "left", O_ = "top", Uc = "right", Wc = "bottom", _i = "width", mi = "height", so = "Right", oo = "Left", ao = "Top", uo = "Bottom", nt = "padding", hn = "margin", vs = "Width", qc = "Height", Dt = "px", Pn = function(e) {
    return Ce.getComputedStyle(e)
}, IC = function(e) {
    var n = Pn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, qh = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, lr = function(e, n) {
    var r = n && Pn(e)[jl] !== "matrix(1, 0, 0, 1, 0, 0)" && ne.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, Wl = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
}, M_ = function(e) {
    var n = [], r = e.labels, i = e.duration(), s;
    for (s in r)
        n.push(r[s] / i);
    return n
}, $C = function(e) {
    return function(n) {
        return ne.utils.snap(M_(e), n)
    }
}, Vc = function(e) {
    var n = ne.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, s) {
        return i - s
    });
    return r ? function(i, s, o) {
        o === void 0 && (o = .001);
        var a;
        if (!s)
            return n(i);
        if (s > 0) {
            for (i -= o,
            a = 0; a < r.length; a++)
                if (r[a] >= i)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            i += o; a--; )
                if (r[a] <= i)
                    return r[a];
        return r[0]
    }
    : function(i, s, o) {
        o === void 0 && (o = .001);
        var a = n(i);
        return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : n(s < 0 ? i - e : i + e)
    }
}, NC = function(e) {
    return function(n, r) {
        return Vc(M_(e))(n, r.direction)
    }
}, Jo = function(e, n, r, i) {
    return r.split(",").forEach(function(s) {
        return e(n, s, i)
    })
}, vt = function(e, n, r, i, s) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!s
    })
}, _t = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, Zo = function(e, n, r) {
    return r && r.wheelHandler && e(n, "wheel", r)
}, Vh = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, ea = {
    toggleActions: "play",
    anticipatePin: 0
}, za = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, ca = function(e, n) {
    if (xn(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in za ? za[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
}, ta = function(e, n, r, i, s, o, a, u) {
    var l = s.startColor
      , c = s.endColor
      , f = s.fontSize
      , h = s.indent
      , d = s.fontWeight
      , p = He.createElement("div")
      , g = Ci(r) || Hr(r, "pinType") === "fixed"
      , v = e.indexOf("scroller") !== -1
      , m = g ? Ge : r
      , _ = e.indexOf("start") !== -1
      , D = _ ? l : c
      , b = "border-color:" + D + ";font-size:" + f + ";color:" + D + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return b += "position:" + ((v || u) && g ? "fixed;" : "absolute;"),
    (v || u || !g) && (b += (i === ft ? Uc : Wc) + ":" + (o + parseFloat(h)) + "px;"),
    a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    p._isStart = _,
    p.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
    p.style.cssText = b,
    p.innerText = n || n === 0 ? e + "-" + n : e,
    m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
    p._offset = p["offset" + i.op.d2],
    fa(p, 0, i, _),
    p
}, fa = function(e, n, r, i) {
    var s = {
        display: "block"
    }
      , o = r[i ? "os2" : "p2"]
      , a = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    s[r.a + "Percent"] = i ? -100 : 0,
    s[r.a] = i ? "1px" : 0,
    s["border" + o + vs] = 1,
    s["border" + a + vs] = 0,
    s[r.p] = n + "px",
    ne.set(e, s)
}, me = [], ql = {}, xo, Yh = function() {
    return Lt() - yn > 34 && (xo || (xo = requestAnimationFrame(Vr)))
}, Li = function() {
    (!Jt || !Jt.isPressed || Jt.startX > Ge.clientWidth) && (ve.cache++,
    Jt ? xo || (xo = requestAnimationFrame(Vr)) : Vr(),
    yn || xi("scrollStart"),
    yn = Lt())
}, Vu = function() {
    F_ = Ce.innerWidth,
    S_ = Ce.innerHeight
}, js = function() {
    ve.cache++,
    !xt && !x_ && !He.fullscreenElement && !He.webkitFullscreenElement && (!T_ || F_ !== Ce.innerWidth || Math.abs(Ce.innerHeight - S_) > Ce.innerHeight * .25) && Na.restart(!0)
}, Ei = {}, HC = [], L_ = function t() {
    return _t(be, "scrollEnd", t) || ci(!0)
}, xi = function(e) {
    return Ei[e] && Ei[e].map(function(n) {
        return n()
    }) || HC
}, Zt = [], B_ = function(e) {
    for (var n = 0; n < Zt.length; n += 5)
        (!e || Zt[n + 4] && Zt[n + 4].query === e) && (Zt[n].style.cssText = Zt[n + 1],
        Zt[n].getBBox && Zt[n].setAttribute("transform", Zt[n + 2] || ""),
        Zt[n + 3].uncache = 1)
}, Yc = function(e, n) {
    var r;
    for (Mt = 0; Mt < me.length; Mt++)
        r = me[Mt],
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && B_(n),
    n || xi("revert")
}, I_ = function(e, n) {
    ve.cache++,
    (n || !Tn) && ve.forEach(function(r) {
        return It(r) && r.cacheID++ && (r.rec = 0)
    }),
    xn(e) && (Ce.history.scrollRestoration = jc = e)
}, Tn, yi = 0, Kh, zC = function() {
    if (Kh !== yi) {
        var e = Kh = yi;
        requestAnimationFrame(function() {
            return e === yi && ci(!0)
        })
    }
}, ci = function(e, n) {
    if (yn && !e) {
        vt(be, "scrollEnd", L_);
        return
    }
    Tn = be.isRefreshing = !0,
    ve.forEach(function(i) {
        return It(i) && i.cacheID++ && (i.rec = i())
    });
    var r = xi("refreshInit");
    E_ && be.sort(),
    n || Yc(),
    ve.forEach(function(i) {
        It(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    me.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    me.forEach(function(i, s) {
        if (i._subPinOffset && i.pin) {
            var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = i.pin[o];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[o] - a),
            i.revert(!1, 1)
        }
    }),
    me.forEach(function(i) {
        return i.vars.end === "max" && i.setPositions(i.start, Math.max(i.start + 1, Mr(i.scroller, i._dir)))
    }),
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    ve.forEach(function(i) {
        It(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    I_(jc, 1),
    Na.pause(),
    yi++,
    Vr(2),
    me.forEach(function(i) {
        return It(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Tn = be.isRefreshing = !1,
    xi("refresh")
}, Xh = 0, ha = 1, lo, Vr = function(e) {
    if (!Tn || e === 2) {
        be.isUpdating = !0,
        lo && lo.update(0);
        var n = me.length
          , r = Lt()
          , i = r - Wu >= 50
          , s = n && me[0].scroll();
        if (ha = Xh > s ? -1 : 1,
        Xh = s,
        i && (yn && !uu && r - yn > 200 && (yn = 0,
        xi("scrollEnd")),
        ua = Wu,
        Wu = r),
        ha < 0) {
            for (Mt = n; Mt-- > 0; )
                me[Mt] && me[Mt].update(0, i);
            ha = 1
        } else
            for (Mt = 0; Mt < n; Mt++)
                me[Mt] && me[Mt].update(0, i);
        be.isUpdating = !1
    }
    xo = 0
}, Vl = [A_, O_, Wc, Uc, hn + uo, hn + so, hn + ao, hn + oo, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], da = Vl.concat([_i, mi, "boxSizing", "max" + vs, "max" + qc, "position", hn, nt, nt + ao, nt + so, nt + uo, nt + oo]), jC = function(e, n, r) {
    ss(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        ss(i.spacerState);
    else if (e._gsap.swappedIn) {
        var s = n.parentNode;
        s && (s.insertBefore(e, n),
        s.removeChild(n))
    }
    e._gsap.swappedIn = !1
}, Yu = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
        for (var s = Vl.length, o = n.style, a = e.style, u; s--; )
            u = Vl[s],
            o[u] = r[u];
        o.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (o.display = "inline-block"),
        a[Wc] = a[Uc] = "auto",
        o.flexBasis = r.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[_i] = Wl(e, Bt) + Dt,
        o[mi] = Wl(e, ft) + Dt,
        o[nt] = a[hn] = a[O_] = a[A_] = "0",
        ss(i),
        a[_i] = a["max" + vs] = r[_i],
        a[mi] = a["max" + qc] = r[mi],
        a[nt] = r[nt],
        e.parentNode !== n && (e.parentNode.insertBefore(n, e),
        n.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, UC = /([A-Z])/g, ss = function(e) {
    if (e) {
        var n = e.t.style, r = e.length, i = 0, s, o;
        for ((e.t._gsap || ne.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            o = e[i + 1],
            s = e[i],
            o ? n[s] = o : n[s] && n.removeProperty(s.replace(UC, "-$1").toLowerCase())
    }
}, na = function(e) {
    for (var n = da.length, r = e.style, i = [], s = 0; s < n; s++)
        i.push(da[s], r[da[s]]);
    return i.t = e,
    i
}, WC = function(e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
        a = e[o],
        i.push(a, a in n ? n[a] : e[o + 1]);
    return i.t = e.t,
    i
}, pa = {
    left: 0,
    top: 0
}, Gh = function(e, n, r, i, s, o, a, u, l, c, f, h, d) {
    It(e) && (e = e(u)),
    xn(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? ca("0" + e.substr(3), r) : 0));
    var p = d ? d.time() : 0, g, v, m;
    if (d && d.seek(0),
    zs(e))
        a && fa(a, r, i, !0);
    else {
        It(n) && (n = n(u));
        var _ = (e || "0").split(" "), D, b, C, S;
        m = Wt(n) || Ge,
        D = lr(m) || {},
        (!D || !D.left && !D.top) && Pn(m).display === "none" && (S = m.style.display,
        m.style.display = "block",
        D = lr(m),
        S ? m.style.display = S : m.style.removeProperty("display")),
        b = ca(_[0], D[i.d]),
        C = ca(_[1] || "0", r),
        e = D[i.p] - l[i.p] - c + b + s - C,
        a && fa(a, C, i, r - C < 20 || a._isStart && C > 20),
        r -= r - C
    }
    if (o) {
        var T = e + r
          , x = o._isStart;
        g = "scroll" + i.d2,
        fa(o, T, i, x && T > 20 || !x && (f ? Math.max(Ge[g], Sn[g]) : o.parentNode[g]) <= T + 1),
        f && (l = lr(a),
        f && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Dt))
    }
    return d && m && (g = lr(m),
    d.seek(h),
    v = lr(m),
    d._caScrollDist = g[i.p] - v[i.p],
    e = e / d._caScrollDist * h),
    d && d.seek(p),
    d ? e : Math.round(e)
}, qC = /(webkit|moz|length|cssText|inset)/i, Qh = function(e, n, r, i) {
    if (e.parentNode !== n) {
        var s = e.style, o, a;
        if (n === Ge) {
            e._stOrig = s.cssText,
            a = Pn(e);
            for (o in a)
                !+o && !qC.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
            s.top = r,
            s.left = i
        } else
            s.cssText = e._stOrig;
        ne.core.getCache(e).uncache = 1,
        n.appendChild(e)
    }
}, Jh = function(e, n) {
    var r = qr(e, n), i = "_scroll" + n.p2, s, o, a = function u(l, c, f, h, d) {
        var p = u.tween
          , g = c.onComplete
          , v = {};
        return f = f || r(),
        d = h && d || 0,
        h = h || l - f,
        p && p.kill(),
        s = Math.round(f),
        c[i] = l,
        c.modifiers = v,
        v[i] = function(m) {
            return m = Math.round(r()),
            m !== s && m !== o && Math.abs(m - s) > 3 && Math.abs(m - o) > 3 ? (p.kill(),
            u.tween = 0) : m = f + h * p.ratio + d * p.ratio * p.ratio,
            o = s,
            s = Math.round(m)
        }
        ,
        c.onUpdate = function() {
            ve.cache++,
            Vr()
        }
        ,
        c.onComplete = function() {
            u.tween = 0,
            g && g.call(p)
        }
        ,
        p = u.tween = ne.to(e, c),
        p
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return a.tween && a.tween.kill() && (a.tween = 0)
    }
    ,
    vt(e, "wheel", r.wheelHandler),
    a
}, be = function() {
    function t(n, r) {
        Ii || t.register(ne) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Go) {
            this.update = this.refresh = this.kill = Un;
            return
        }
        r = qh(xn(r) || zs(r) || r.nodeType ? {
            trigger: r
        } : r, ea);
        var s = r, o = s.onUpdate, a = s.toggleClass, u = s.id, l = s.onToggle, c = s.onRefresh, f = s.scrub, h = s.trigger, d = s.pin, p = s.pinSpacing, g = s.invalidateOnRefresh, v = s.anticipatePin, m = s.onScrubComplete, _ = s.onSnapComplete, D = s.once, b = s.snap, C = s.pinReparent, S = s.pinSpacer, T = s.containerAnimation, x = s.fastScrollEnd, R = s.preventOverlaps, A = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Bt : ft, I = !f && f !== 0, O = Wt(r.scroller || Ce), X = ne.core.getCache(O), H = Ci(O), J = ("pinType"in r ? r.pinType : Hr(O, "pinType") || H && "fixed") === "fixed", $ = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], V = I && r.toggleActions.split(" "), Y = "markers"in r ? r.markers : ea.markers, L = H ? 0 : parseFloat(Pn(O)["border" + A.p2 + vs]) || 0, F = this, de = r.onRefreshInit && function() {
            return r.onRefreshInit(F)
        }
        , ge = LC(O, H, A), et = BC(O, H), Te = 0, P = 0, U = qr(O, A), j, Q, _e, ye, se, y, w, k, M, B, E, K, N, W, z, Z, G, ee, ie, te, pe, le, Be, Ae, yt, yr, Ht, Jn, tt, dt, we, Zn, vn, bn, Ln, Bn, Gr, Ri, er;
        if (Ul(F),
        F._dir = A,
        v *= 45,
        F.scroller = O,
        F.scroll = T ? T.time.bind(T) : U,
        ye = U(),
        F.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (E_ = 1,
        r.refreshPriority === -9999 && (lo = F)),
        X.tweenScroll = X.tweenScroll || {
            top: Jh(O, ft),
            left: Jh(O, Bt)
        },
        F.tweenTo = j = X.tweenScroll[A.p],
        F.scrubDuration = function(q) {
            Zn = zs(q) && q,
            Zn ? we ? we.duration(q) : we = ne.to(i, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: Zn,
                paused: !0,
                onComplete: function() {
                    return m && m(F)
                }
            }) : (we && we.progress(1).kill(),
            we = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        F.animation = i.pause(),
        i.scrollTrigger = F,
        F.scrubDuration(f),
        tt = 0,
        u || (u = i.vars.id)),
        me.push(F),
        b && ((!la(b) || b.push) && (b = {
            snapTo: b
        }),
        "scrollBehavior"in Ge.style && ne.set(H ? [Ge, Sn] : O, {
            scrollBehavior: "auto"
        }),
        ve.forEach(function(q) {
            return It(q) && q.target === (H ? He.scrollingElement || Sn : O) && (q.smooth = !1)
        }),
        _e = It(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? $C(i) : b.snapTo === "labelsDirectional" ? NC(i) : b.directional !== !1 ? function(q, oe) {
            return Vc(b.snapTo)(q, Lt() - P < 500 ? 0 : oe.direction)
        }
        : ne.utils.snap(b.snapTo),
        vn = b.duration || {
            min: .1,
            max: 2
        },
        vn = la(vn) ? Vi(vn.min, vn.max) : Vi(vn, vn),
        bn = ne.delayedCall(b.delay || Zn / 2 || .1, function() {
            var q = U()
              , oe = Lt() - P < 500
              , ae = j.tween;
            if ((oe || Math.abs(F.getVelocity()) < 10) && !ae && !uu && Te !== q) {
                var fe = (q - y) / N
                  , pt = i && !I ? i.totalProgress() : fe
                  , De = oe ? 0 : (pt - dt) / (Lt() - ua) * 1e3 || 0
                  , it = ne.utils.clamp(-fe, 1 - fe, Mi(De / 2) * De / .185)
                  , Ve = fe + (b.inertia === !1 ? 0 : it)
                  , In = Vi(0, 1, _e(Ve, F))
                  , Ie = Math.round(y + In * N)
                  , gt = b
                  , wn = gt.onStart
                  , Ye = gt.onInterrupt
                  , Ke = gt.onComplete;
                if (q <= w && q >= y && Ie !== q) {
                    if (ae && !ae._initted && ae.data <= Mi(Ie - q))
                        return;
                    b.inertia === !1 && (it = In - fe),
                    j(Ie, {
                        duration: vn(Mi(Math.max(Mi(Ve - pt), Mi(In - pt)) * .185 / De / .05 || 0)),
                        ease: b.ease || "power3",
                        data: Mi(Ie - q),
                        onInterrupt: function() {
                            return bn.restart(!0) && Ye && Ye(F)
                        },
                        onComplete: function() {
                            F.update(),
                            Te = U(),
                            tt = dt = i && !I ? i.totalProgress() : F.progress,
                            _ && _(F),
                            Ke && Ke(F)
                        }
                    }, q, it * N, Ie - q - it * N),
                    wn && wn(F, j.tween)
                }
            } else
                F.isActive && Te !== q && bn.restart(!0)
        }).pause()),
        u && (ql[u] = F),
        h = F.trigger = Wt(h || d),
        er = h && h._gsap && h._gsap.stRevert,
        er && (er = er(F)),
        d = d === !0 ? h : Wt(d),
        xn(a) && (a = {
            targets: h,
            className: a
        }),
        d && (p === !1 || p === hn || (p = !p && d.parentNode && d.parentNode.style && Pn(d.parentNode).display === "flex" ? !1 : nt),
        F.pin = d,
        Q = ne.core.getCache(d),
        Q.spacer ? W = Q.pinState : (S && (S = Wt(S),
        S && !S.nodeType && (S = S.current || S.nativeElement),
        Q.spacerIsNative = !!S,
        S && (Q.spacerState = na(S))),
        Q.spacer = G = S || He.createElement("div"),
        G.classList.add("pin-spacer"),
        u && G.classList.add("pin-spacer-" + u),
        Q.pinState = W = na(d)),
        r.force3D !== !1 && ne.set(d, {
            force3D: !0
        }),
        F.spacer = G = Q.spacer,
        Jn = Pn(d),
        Be = Jn[p + A.os2],
        ie = ne.getProperty(d),
        te = ne.quickSetter(d, A.a, Dt),
        Yu(d, G, Jn),
        Z = na(d)),
        Y) {
            K = la(Y) ? qh(Y, Vh) : Vh,
            B = ta("scroller-start", u, O, A, K, 0),
            E = ta("scroller-end", u, O, A, K, 0, B),
            ee = B["offset" + A.op.d2];
            var Ss = Wt(Hr(O, "content") || O);
            k = this.markerStart = ta("start", u, Ss, A, K, ee, 0, T),
            M = this.markerEnd = ta("end", u, Ss, A, K, ee, 0, T),
            T && (Ri = ne.quickSetter([k, M], A.a, Dt)),
            !J && !(Xn.length && Hr(O, "fixedMarkers") === !0) && (IC(H ? Ge : O),
            ne.set([B, E], {
                force3D: !0
            }),
            yt = ne.quickSetter(B, A.a, Dt),
            Ht = ne.quickSetter(E, A.a, Dt))
        }
        if (T) {
            var xe = T.vars.onUpdate
              , re = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function() {
                F.update(0, 0, 1),
                xe && xe.apply(re || [])
            })
        }
        F.previous = function() {
            return me[me.indexOf(F) - 1]
        }
        ,
        F.next = function() {
            return me[me.indexOf(F) + 1]
        }
        ,
        F.revert = function(q, oe) {
            if (!oe)
                return F.kill(!0);
            var ae = q !== !1 || !F.enabled
              , fe = xt;
            ae !== F.isReverted && (ae && (Bn = Math.max(U(), F.scroll.rec || 0),
            Ln = F.progress,
            Gr = i && i.progress()),
            k && [k, M, B, E].forEach(function(pt) {
                return pt.style.display = ae ? "none" : "block"
            }),
            ae && (xt = 1,
            F.update(ae)),
            d && (!C || !F.isActive) && (ae ? jC(d, G, W) : Yu(d, G, Pn(d), Ae)),
            ae || F.update(ae),
            xt = fe,
            F.isReverted = ae)
        }
        ,
        F.refresh = function(q, oe) {
            if (!((xt || !F.enabled) && !oe)) {
                if (d && q && yn) {
                    vt(t, "scrollEnd", L_);
                    return
                }
                !Tn && de && de(F),
                xt = 1,
                P = Lt(),
                j.tween && (j.tween.kill(),
                j.tween = 0),
                we && we.pause(),
                g && i && i.revert({
                    kill: !1
                }).invalidate(),
                F.isReverted || F.revert(!0, !0),
                F._subPinOffset = !1;
                for (var ae = ge(), fe = et(), pt = T ? T.duration() : Mr(O, A), De = 0, it = 0, Ve = r.end, In = r.endTrigger || h, Ie = r.start || (r.start === 0 || !h ? 0 : d ? "0 0" : "0 100%"), gt = F.pinnedContainer = r.pinnedContainer && Wt(r.pinnedContainer), wn = h && Math.max(0, me.indexOf(F)) || 0, Ye = wn, Ke, st, Pi, Qr, lt, Xe, tr, cu, Gc, Fs, $n; Ye--; )
                    Xe = me[Ye],
                    Xe.end || Xe.refresh(0, 1) || (xt = 1),
                    tr = Xe.pin,
                    tr && (tr === h || tr === d) && !Xe.isReverted && (Fs || (Fs = []),
                    Fs.unshift(Xe),
                    Xe.revert(!0, !0)),
                    Xe !== me[Ye] && (wn--,
                    Ye--);
                for (It(Ie) && (Ie = Ie(F)),
                y = Gh(Ie, h, ae, A, U(), k, B, F, fe, L, J, pt, T) || (d ? -.001 : 0),
                It(Ve) && (Ve = Ve(F)),
                xn(Ve) && !Ve.indexOf("+=") && (~Ve.indexOf(" ") ? Ve = (xn(Ie) ? Ie.split(" ")[0] : "") + Ve : (De = ca(Ve.substr(2), ae),
                Ve = xn(Ie) ? Ie : y + De,
                In = h)),
                w = Math.max(y, Gh(Ve || (In ? "100% 0" : pt), In, ae, A, U() + De, M, E, F, fe, L, J, pt, T)) || -.001,
                N = w - y || (y -= .01) && .001,
                De = 0,
                Ye = wn; Ye--; )
                    Xe = me[Ye],
                    tr = Xe.pin,
                    tr && Xe.start - Xe._pinPush <= y && !T && Xe.end > 0 && (Ke = Xe.end - Xe.start,
                    (tr === h && Xe.start - Xe._pinPush < y || tr === gt) && !zs(Ie) && (De += Ke * (1 - Xe.progress)),
                    tr === d && (it += Ke));
                if (y += De,
                w += De,
                F._pinPush = it,
                k && De && (Ke = {},
                Ke[A.a] = "+=" + De,
                gt && (Ke[A.p] = "-=" + U()),
                ne.set([k, M], Ke)),
                d)
                    Ke = Pn(d),
                    Qr = A === ft,
                    Pi = U(),
                    pe = parseFloat(ie(A.a)) + it,
                    !pt && w > 1 && ($n = (H ? He.scrollingElement || Sn : O).style,
                    $n = {
                        style: $n,
                        value: $n["overflow" + A.a.toUpperCase()]
                    },
                    $n["overflow" + A.a.toUpperCase()] = "scroll"),
                    Yu(d, G, Ke),
                    Z = na(d),
                    st = lr(d, !0),
                    cu = J && qr(O, Qr ? Bt : ft)(),
                    p && (Ae = [p + A.os2, N + it + Dt],
                    Ae.t = G,
                    Ye = p === nt ? Wl(d, A) + N + it : 0,
                    Ye && Ae.push(A.d, Ye + Dt),
                    ss(Ae),
                    gt && me.forEach(function(Rs) {
                        Rs.pin === gt && Rs.vars.pinSpacing !== !1 && (Rs._subPinOffset = !0)
                    }),
                    J && U(Bn)),
                    J && (lt = {
                        top: st.top + (Qr ? Pi - y : cu) + Dt,
                        left: st.left + (Qr ? cu : Pi - y) + Dt,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    lt[_i] = lt["max" + vs] = Math.ceil(st.width) + Dt,
                    lt[mi] = lt["max" + qc] = Math.ceil(st.height) + Dt,
                    lt[hn] = lt[hn + ao] = lt[hn + so] = lt[hn + uo] = lt[hn + oo] = "0",
                    lt[nt] = Ke[nt],
                    lt[nt + ao] = Ke[nt + ao],
                    lt[nt + so] = Ke[nt + so],
                    lt[nt + uo] = Ke[nt + uo],
                    lt[nt + oo] = Ke[nt + oo],
                    z = WC(W, lt, C),
                    Tn && U(0)),
                    i ? (Gc = i._initted,
                    ju(1),
                    i.render(i.duration(), !0, !0),
                    le = ie(A.a) - pe + N + it,
                    yr = Math.abs(N - le) > 1,
                    J && yr && z.splice(z.length - 2, 2),
                    i.render(0, !0, !0),
                    Gc || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    ju(0)) : le = N,
                    $n && ($n.value ? $n.style["overflow" + A.a.toUpperCase()] = $n.value : $n.style.removeProperty("overflow-" + A.a));
                else if (h && U() && !T)
                    for (st = h.parentNode; st && st !== Ge; )
                        st._pinOffset && (y -= st._pinOffset,
                        w -= st._pinOffset),
                        st = st.parentNode;
                Fs && Fs.forEach(function(Rs) {
                    return Rs.revert(!1, !0)
                }),
                F.start = y,
                F.end = w,
                ye = se = Tn ? Bn : U(),
                !T && !Tn && (ye < Bn && U(Bn),
                F.scroll.rec = 0),
                F.revert(!1, !0),
                bn && (Te = -1,
                F.isActive && U(y + N * Ln),
                bn.restart(!0)),
                xt = 0,
                i && I && (i._initted || Gr) && i.progress() !== Gr && i.progress(Gr, !0).render(i.time(), !0, !0),
                (Ln !== F.progress || T) && (i && !I && i.totalProgress(Ln, !0),
                F.progress = (ye - y) / N === Ln ? 0 : Ln),
                d && p && (G._pinOffset = Math.round(F.progress * le)),
                c && !Tn && c(F)
            }
        }
        ,
        F.getVelocity = function() {
            return (U() - se) / (Lt() - ua) * 1e3 || 0
        }
        ,
        F.endAnimation = function() {
            Ms(F.callbackAnimation),
            i && (we ? we.progress(1) : i.paused() ? I || Ms(i, F.direction < 0, 1) : Ms(i, i.reversed()))
        }
        ,
        F.labelToScroll = function(q) {
            return i && i.labels && (y || F.refresh() || y) + i.labels[q] / i.duration() * N || 0
        }
        ,
        F.getTrailing = function(q) {
            var oe = me.indexOf(F)
              , ae = F.direction > 0 ? me.slice(0, oe).reverse() : me.slice(oe + 1);
            return (xn(q) ? ae.filter(function(fe) {
                return fe.vars.preventOverlaps === q
            }) : ae).filter(function(fe) {
                return F.direction > 0 ? fe.end <= y : fe.start >= w
            })
        }
        ,
        F.update = function(q, oe, ae) {
            if (!(T && !ae && !q)) {
                var fe = Tn ? Bn : F.scroll(), pt = q ? 0 : (fe - y) / N, De = pt < 0 ? 0 : pt > 1 ? 1 : pt || 0, it = F.progress, Ve, In, Ie, gt, wn, Ye, Ke, st;
                if (oe && (se = ye,
                ye = T ? U() : fe,
                b && (dt = tt,
                tt = i && !I ? i.totalProgress() : De)),
                v && !De && d && !xt && !Xo && yn && y < fe + (fe - se) / (Lt() - ua) * v && (De = 1e-4),
                De !== it && F.enabled) {
                    if (Ve = F.isActive = !!De && De < 1,
                    In = !!it && it < 1,
                    Ye = Ve !== In,
                    wn = Ye || !!De != !!it,
                    F.direction = De > it ? 1 : -1,
                    F.progress = De,
                    wn && !xt && (Ie = De && !it ? 0 : De === 1 ? 1 : it === 1 ? 2 : 3,
                    I && (gt = !Ye && V[Ie + 1] !== "none" && V[Ie + 1] || V[Ie],
                    st = i && (gt === "complete" || gt === "reset" || gt in i))),
                    R && (Ye || st) && (st || f || !i) && (It(R) ? R(F) : F.getTrailing(R).forEach(function(Xe) {
                        return Xe.endAnimation()
                    })),
                    I || (we && !xt && !Xo ? (we._dp._time - we._start !== we._time && we.render(we._dp._time - we._start),
                    we.resetTo ? we.resetTo("totalProgress", De, i._tTime / i._tDur) : (we.vars.totalProgress = De,
                    we.invalidate().restart())) : i && i.totalProgress(De, !!xt)),
                    d) {
                        if (q && p && (G.style[p + A.os2] = Be),
                        !J)
                            te(Hs(pe + le * De));
                        else if (wn) {
                            if (Ke = !q && De > it && w + 1 > fe && fe + 1 >= Mr(O, A),
                            C)
                                if (!q && (Ve || Ke)) {
                                    var Pi = lr(d, !0)
                                      , Qr = fe - y;
                                    Qh(d, Ge, Pi.top + (A === ft ? Qr : 0) + Dt, Pi.left + (A === ft ? 0 : Qr) + Dt)
                                } else
                                    Qh(d, G);
                            ss(Ve || Ke ? z : Z),
                            yr && De < 1 && Ve || te(pe + (De === 1 && !Ke ? le : 0))
                        }
                    }
                    b && !j.tween && !xt && !Xo && bn.restart(!0),
                    a && (Ye || D && De && (De < 1 || !Uu)) && Ha(a.targets).forEach(function(Xe) {
                        return Xe.classList[Ve || D ? "add" : "remove"](a.className)
                    }),
                    o && !I && !q && o(F),
                    wn && !xt ? (I && (st && (gt === "complete" ? i.pause().totalProgress(1) : gt === "reset" ? i.restart(!0).pause() : gt === "restart" ? i.restart(!0) : i[gt]()),
                    o && o(F)),
                    (Ye || !Uu) && (l && Ye && qu(F, l),
                    $[Ie] && qu(F, $[Ie]),
                    D && (De === 1 ? F.kill(!1, 1) : $[Ie] = 0),
                    Ye || (Ie = De === 1 ? 1 : 3,
                    $[Ie] && qu(F, $[Ie]))),
                    x && !Ve && Math.abs(F.getVelocity()) > (zs(x) ? x : 2500) && (Ms(F.callbackAnimation),
                    we ? we.progress(1) : Ms(i, gt === "reverse" ? 1 : !De, 1))) : I && o && !xt && o(F)
                }
                if (Ht) {
                    var lt = T ? fe / T.duration() * (T._caScrollDist || 0) : fe;
                    yt(lt + (B._isFlipped ? 1 : 0)),
                    Ht(lt)
                }
                Ri && Ri(-fe / T.duration() * (T._caScrollDist || 0))
            }
        }
        ,
        F.enable = function(q, oe) {
            F.enabled || (F.enabled = !0,
            vt(O, "resize", js),
            vt(H ? He : O, "scroll", Li),
            de && vt(t, "refreshInit", de),
            q !== !1 && (F.progress = Ln = 0,
            ye = se = Te = U()),
            oe !== !1 && F.refresh())
        }
        ,
        F.getTween = function(q) {
            return q && j ? j.tween : we
        }
        ,
        F.setPositions = function(q, oe) {
            d && (pe += q - y,
            le += oe - q - N,
            p === nt && F.adjustPinSpacing(oe - q - N)),
            F.start = y = q,
            F.end = w = oe,
            N = oe - q,
            F.update()
        }
        ,
        F.adjustPinSpacing = function(q) {
            if (Ae) {
                var oe = Ae.indexOf(A.d) + 1;
                Ae[oe] = parseFloat(Ae[oe]) + q + Dt,
                Ae[1] = parseFloat(Ae[1]) + q + Dt,
                ss(Ae)
            }
        }
        ,
        F.disable = function(q, oe) {
            if (F.enabled && (q !== !1 && F.revert(!0, !0),
            F.enabled = F.isActive = !1,
            oe || we && we.pause(),
            Bn = 0,
            Q && (Q.uncache = 1),
            de && _t(t, "refreshInit", de),
            bn && (bn.pause(),
            j.tween && j.tween.kill() && (j.tween = 0)),
            !H)) {
                for (var ae = me.length; ae--; )
                    if (me[ae].scroller === O && me[ae] !== F)
                        return;
                _t(O, "resize", js),
                _t(O, "scroll", Li)
            }
        }
        ,
        F.kill = function(q, oe) {
            F.disable(q, oe),
            we && !oe && we.kill(),
            u && delete ql[u];
            var ae = me.indexOf(F);
            ae >= 0 && me.splice(ae, 1),
            ae === Mt && ha > 0 && Mt--,
            ae = 0,
            me.forEach(function(fe) {
                return fe.scroller === F.scroller && (ae = 1)
            }),
            ae || Tn || (F.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            q && i.revert({
                kill: !1
            }),
            oe || i.kill()),
            k && [k, M, B, E].forEach(function(fe) {
                return fe.parentNode && fe.parentNode.removeChild(fe)
            }),
            lo === F && (lo = 0),
            d && (Q && (Q.uncache = 1),
            ae = 0,
            me.forEach(function(fe) {
                return fe.pin === d && ae++
            }),
            ae || (Q.spacer = 0)),
            r.onKill && r.onKill(F)
        }
        ,
        F.enable(!1, !1),
        er && er(F),
        !i || !i.add || N ? F.refresh() : ne.delayedCall(.01, function() {
            return y || w || F.refresh()
        }) && (N = .01) && (y = w = 0),
        d && zC()
    }
    ,
    t.register = function(r) {
        return Ii || (ne = r || P_(),
        R_() && window.document && t.enable(),
        Ii = Go),
        Ii
    }
    ,
    t.defaults = function(r) {
        if (r)
            for (var i in r)
                ea[i] = r[i];
        return ea
    }
    ,
    t.disable = function(r, i) {
        Go = 0,
        me.forEach(function(o) {
            return o[i ? "kill" : "disable"](r)
        }),
        _t(Ce, "wheel", Li),
        _t(He, "scroll", Li),
        clearInterval(Ko),
        _t(He, "touchcancel", Un),
        _t(Ge, "touchstart", Un),
        Jo(_t, He, "pointerdown,touchstart,mousedown", Uh),
        Jo(_t, He, "pointerup,touchend,mouseup", Wh),
        Na.kill(),
        Qo(_t);
        for (var s = 0; s < ve.length; s += 3)
            Zo(_t, ve[s], ve[s + 1]),
            Zo(_t, ve[s], ve[s + 2])
    }
    ,
    t.enable = function() {
        if (Ce = window,
        He = document,
        Sn = He.documentElement,
        Ge = He.body,
        ne && (Ha = ne.utils.toArray,
        Vi = ne.utils.clamp,
        Ul = ne.core.context || Un,
        ju = ne.core.suppressOverwrites || Un,
        jc = Ce.history.scrollRestoration || "auto",
        ne.core.globals("ScrollTrigger", t),
        Ge)) {
            Go = 1,
            at.register(ne),
            t.isTouch = at.isTouch,
            Er = at.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            vt(Ce, "wheel", Li),
            C_ = [Ce, He, Sn, Ge],
            ne.matchMedia ? (t.matchMedia = function(u) {
                var l = ne.matchMedia(), c;
                for (c in u)
                    l.add(c, u[c]);
                return l
            }
            ,
            ne.addEventListener("matchMediaInit", function() {
                return Yc()
            }),
            ne.addEventListener("matchMediaRevert", function() {
                return B_()
            }),
            ne.addEventListener("matchMedia", function() {
                ci(0, 1),
                xi("matchMedia")
            }),
            ne.matchMedia("(orientation: portrait)", function() {
                return Vu(),
                Vu
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Vu(),
            vt(He, "scroll", Li);
            var r = Ge.style, i = r.borderTopStyle, s = ne.core.Animation.prototype, o, a;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            o = lr(Ge),
            ft.m = Math.round(o.top + ft.sc()) || 0,
            Bt.m = Math.round(o.left + Bt.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            Ko = setInterval(Yh, 250),
            ne.delayedCall(.5, function() {
                return Xo = 0
            }),
            vt(He, "touchcancel", Un),
            vt(Ge, "touchstart", Un),
            Jo(vt, He, "pointerdown,touchstart,mousedown", Uh),
            Jo(vt, He, "pointerup,touchend,mouseup", Wh),
            jl = ne.utils.checkPrefix("transform"),
            da.push(jl),
            Ii = Lt(),
            Na = ne.delayedCall(.2, ci).pause(),
            $i = [He, "visibilitychange", function() {
                var u = Ce.innerWidth
                  , l = Ce.innerHeight;
                He.hidden ? (zh = u,
                jh = l) : (zh !== u || jh !== l) && js()
            }
            , He, "DOMContentLoaded", ci, Ce, "load", ci, Ce, "resize", js],
            Qo(vt),
            me.forEach(function(u) {
                return u.enable(0, 1)
            }),
            a = 0; a < ve.length; a += 3)
                Zo(_t, ve[a], ve[a + 1]),
                Zo(_t, ve[a], ve[a + 2])
        }
    }
    ,
    t.config = function(r) {
        "limitCallbacks"in r && (Uu = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(Ko) || (Ko = i) && setInterval(Yh, i),
        "ignoreMobileResize"in r && (T_ = t.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (Qo(_t) || Qo(vt, r.autoRefreshEvents || "none"),
        x_ = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    t.scrollerProxy = function(r, i) {
        var s = Wt(r)
          , o = ve.indexOf(s)
          , a = Ci(s);
        ~o && ve.splice(o, a ? 6 : 2),
        i && (a ? Xn.unshift(Ce, i, Ge, i, Sn, i) : Xn.unshift(s, i))
    }
    ,
    t.clearMatchMedia = function(r) {
        me.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    t.isInViewport = function(r, i, s) {
        var o = (xn(r) ? Wt(r) : r).getBoundingClientRect()
          , a = o[s ? _i : mi] * i || 0;
        return s ? o.right - a > 0 && o.left + a < Ce.innerWidth : o.bottom - a > 0 && o.top + a < Ce.innerHeight
    }
    ,
    t.positionInViewport = function(r, i, s) {
        xn(r) && (r = Wt(r));
        var o = r.getBoundingClientRect()
          , a = o[s ? _i : mi]
          , u = i == null ? a / 2 : i in za ? za[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
        return s ? (o.left + u) / Ce.innerWidth : (o.top + u) / Ce.innerHeight
    }
    ,
    t.killAll = function(r) {
        if (me.slice(0).forEach(function(s) {
            return s.vars.id !== "ScrollSmoother" && s.kill()
        }),
        r !== !0) {
            var i = Ei.killAll || [];
            Ei = {},
            i.forEach(function(s) {
                return s()
            })
        }
    }
    ,
    t
}();
be.version = "3.11.4";
be.saveStyles = function(t) {
    return t ? Ha(t).forEach(function(e) {
        if (e && e.style) {
            var n = Zt.indexOf(e);
            n >= 0 && Zt.splice(n, 5),
            Zt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ne.core.getCache(e), Ul())
        }
    }) : Zt
}
;
be.revert = function(t, e) {
    return Yc(!t, e)
}
;
be.create = function(t, e) {
    return new be(t,e)
}
;
be.refresh = function(t) {
    return t ? js() : (Ii || be.register()) && ci(!0)
}
;
be.update = function(t) {
    return ++ve.cache && Vr(t === !0 ? 2 : 0)
}
;
be.clearScrollMemory = I_;
be.maxScroll = function(t, e) {
    return Mr(t, e ? Bt : ft)
}
;
be.getScrollFunc = function(t, e) {
    return qr(Wt(t), e ? Bt : ft)
}
;
be.getById = function(t) {
    return ql[t]
}
;
be.getAll = function() {
    return me.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
}
;
be.isScrolling = function() {
    return !!yn
}
;
be.snapDirectional = Vc;
be.addEventListener = function(t, e) {
    var n = Ei[t] || (Ei[t] = []);
    ~n.indexOf(e) || n.push(e)
}
;
be.removeEventListener = function(t, e) {
    var n = Ei[t]
      , r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
}
;
be.batch = function(t, e) {
    var n = [], r = {}, i = e.interval || .016, s = e.batchMax || 1e9, o = function(l, c) {
        var f = []
          , h = []
          , d = ne.delayedCall(i, function() {
            c(f, h),
            f = [],
            h = []
        }).pause();
        return function(p) {
            f.length || d.restart(!0),
            f.push(p.trigger),
            h.push(p),
            s <= f.length && d.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && It(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return It(s) && (s = s(),
    vt(be, "refresh", function() {
        return s = e.batchMax()
    })),
    Ha(t).forEach(function(u) {
        var l = {};
        for (a in r)
            l[a] = r[a];
        l.trigger = u,
        n.push(be.create(l))
    }),
    n
}
;
var Zh = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Ku = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (at.isTouch ? " pinch-zoom" : "") : "none",
    e === Sn && t(Ge, n)
}, ra = {
    auto: 1,
    scroll: 1
}, VC = function(e) {
    var n = e.event, r = e.target, i = e.axis, s = (n.changedTouches ? n.changedTouches[0] : n).target, o = s._gsap || ne.core.getCache(s), a = Lt(), u;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== Ge && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(ra[(u = Pn(s)).overflowY] || ra[u.overflowX])); )
            s = s.parentNode;
        o._isScroll = s && s !== r && !Ci(s) && (ra[(u = Pn(s)).overflowY] || ra[u.overflowX]),
        o._isScrollT = a
    }
    (o._isScroll || i === "x") && (n.stopPropagation(),
    n._gsapAllow = !0)
}, $_ = function(e, n, r, i) {
    return at.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: i = i && VC,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && vt(He, at.eventTypes[0], td, !1, !0)
        },
        onDisable: function() {
            return _t(He, at.eventTypes[0], td, !0)
        }
    })
}, YC = /(input|label|select|textarea)/i, ed, td = function(e) {
    var n = YC.test(e.target.tagName);
    (n || ed) && (e._gsapAllow = !0,
    ed = n)
}, KC = function(e) {
    la(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var n = e, r = n.normalizeScrollX, i = n.momentum, s = n.allowNestedScroll, o, a, u = Wt(e.target) || Sn, l = ne.core.globals().ScrollSmoother, c = l && l.get(), f = Er && (e.content && Wt(e.content) || c && e.content !== !1 && !c.smooth() && c.content()), h = qr(u, ft), d = qr(u, Bt), p = 1, g = (at.isTouch && Ce.visualViewport ? Ce.visualViewport.scale * Ce.visualViewport.width : Ce.outerWidth) / Ce.innerWidth, v = 0, m = It(i) ? function() {
        return i(o)
    }
    : function() {
        return i || 2.8
    }
    , _, D, b = $_(u, e.type, !0, s), C = function() {
        return D = !1
    }, S = Un, T = Un, x = function() {
        a = Mr(u, ft),
        T = Vi(Er ? 1 : 0, a),
        r && (S = Vi(0, Mr(u, Bt))),
        _ = yi
    }, R = function() {
        f._gsap.y = Hs(parseFloat(f._gsap.y) + h.offset) + "px",
        f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)",
        h.offset = h.cacheID = 0
    }, A = function() {
        if (D) {
            requestAnimationFrame(C);
            var V = Hs(o.deltaY / 2)
              , Y = T(h.v - V);
            if (f && Y !== h.v + h.offset) {
                h.offset = Y - h.v;
                var L = Hs((parseFloat(f && f._gsap.y) || 0) - h.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + L + ", 0, 1)",
                f._gsap.y = L + "px",
                h.cacheID = ve.cache,
                Vr()
            }
            return !0
        }
        h.offset && R(),
        D = !0
    }, I, O, X, H, J = function() {
        x(),
        I.isActive() && I.vars.scrollY > a && (h() > a ? I.progress(1) && h(a) : I.resetTo("scrollY", a))
    };
    return f && ne.set(f, {
        y: "+=0"
    }),
    e.ignoreCheck = function($) {
        return Er && $.type === "touchmove" && A() || p > 1.05 && $.type !== "touchstart" || o.isGesturing || $.touches && $.touches.length > 1
    }
    ,
    e.onPress = function() {
        var $ = p;
        p = Hs((Ce.visualViewport && Ce.visualViewport.scale || 1) / g),
        I.pause(),
        $ !== p && Ku(u, p > 1.01 ? !0 : r ? !1 : "x"),
        O = d(),
        X = h(),
        x(),
        _ = yi
    }
    ,
    e.onRelease = e.onGestureStart = function($, V) {
        if (h.offset && R(),
        !V)
            H.restart(!0);
        else {
            ve.cache++;
            var Y = m(), L, F;
            r && (L = d(),
            F = L + Y * .05 * -$.velocityX / .227,
            Y *= Zh(d, L, F, Mr(u, Bt)),
            I.vars.scrollX = S(F)),
            L = h(),
            F = L + Y * .05 * -$.velocityY / .227,
            Y *= Zh(h, L, F, Mr(u, ft)),
            I.vars.scrollY = T(F),
            I.invalidate().duration(Y).play(.01),
            (Er && I.vars.scrollY >= a || L >= a - 1) && ne.to({}, {
                onUpdate: J,
                duration: Y
            })
        }
    }
    ,
    e.onWheel = function() {
        I._ts && I.pause(),
        Lt() - v > 1e3 && (_ = 0,
        v = Lt())
    }
    ,
    e.onChange = function($, V, Y, L, F) {
        if (yi !== _ && x(),
        V && r && d(S(L[2] === V ? O + ($.startX - $.x) : d() + V - L[1])),
        Y) {
            h.offset && R();
            var de = F[2] === Y
              , ge = de ? X + $.startY - $.y : h() + Y - F[1]
              , et = T(ge);
            de && ge !== et && (X += et - ge),
            h(et)
        }
        (Y || V) && Vr()
    }
    ,
    e.onEnable = function() {
        Ku(u, r ? !1 : "x"),
        be.addEventListener("refresh", J),
        vt(Ce, "resize", J),
        h.smooth && (h.target.style.scrollBehavior = "auto",
        h.smooth = d.smooth = !1),
        b.enable()
    }
    ,
    e.onDisable = function() {
        Ku(u, !0),
        _t(Ce, "resize", J),
        be.removeEventListener("refresh", J),
        b.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    o = new at(e),
    o.iOS = Er,
    Er && !h() && h(1),
    Er && ne.ticker.add(Un),
    H = o._dc,
    I = ne.to(o, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: H.vars.onComplete
    }),
    o
};
be.sort = function(t) {
    return me.sort(t || function(e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
be.observe = function(t) {
    return new at(t)
}
;
be.normalizeScroll = function(t) {
    if (typeof t > "u")
        return Jt;
    if (t === !0 && Jt)
        return Jt.enable();
    if (t === !1)
        return Jt && Jt.kill();
    var e = t instanceof at ? t : KC(t);
    return Jt && Jt.target === e.target && Jt.kill(),
    Ci(e.target) && (Jt = e),
    e
}
;
be.core = {
    _getVelocityProp: zl,
    _inputObserver: $_,
    _scrollers: ve,
    _proxies: Xn,
    bridge: {
        ss: function() {
            yn || xi("scrollStart"),
            yn = Lt()
        },
        ref: function() {
            return xt
        }
    }
};
P_() && ne.registerPlugin(be);

var XC = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function N_(t) {
    var e = t.nodeType
      , n = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof t.textContent == "string")
            return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling)
            n += N_(t)
    } else if (e === 3 || e === 4)
        return t.nodeValue;
    return n
}
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Yi, Yl, H_, Ls, z_, lu, GC = /(?:\r|\n|\t\t)/g, QC = /(?:\s\s+)/g, j_ = function(e) {
    Yi = document,
    Yl = window,
    Ls = Ls || e || Yl.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    Ls && (lu = Ls.utils.toArray,
    z_ = Ls.core.context || function() {}
    ,
    H_ = 1)
}, U_ = function(e) {
    return Yl.getComputedStyle(e)
}, Kc = function(e) {
    return e.position === "absolute" || e.absolute === !0
}, JC = function(e, n) {
    for (var r = n.length, i; --r > -1; )
        if (i = n[r],
        e.substr(0, i.length) === i)
            return i.length
}, ZC = " style='position:relative;display:inline-block;'", nd = function(e, n) {
    e === void 0 && (e = "");
    var r = ~e.indexOf("++")
      , i = 1;
    return r && (e = e.split("++").join("")),
    function() {
        return "<" + n + ZC + (e ? " class='" + e + (r ? i++ : "") + "'>" : ">")
    }
}, W_ = function t(e, n, r) {
    var i = e.nodeType;
    if (i === 1 || i === 9 || i === 11)
        for (e = e.firstChild; e; e = e.nextSibling)
            t(e, n, r);
    else
        (i === 3 || i === 4) && (e.nodeValue = e.nodeValue.split(n).join(r))
}, Xu = function(e, n) {
    for (var r = n.length; --r > -1; )
        e.push(n[r])
}, rd = function(e, n, r) {
    for (var i; e && e !== n; ) {
        if (i = e._next || e.nextSibling,
        i)
            return i.textContent.charAt(0) === r;
        e = e.parentNode || e._parent
    }
}, eE = function t(e) {
    var n = lu(e.childNodes), r = n.length, i, s;
    for (i = 0; i < r; i++)
        s = n[i],
        s._isSplit ? t(s) : i && s.previousSibling && s.previousSibling.nodeType === 3 ? (s.previousSibling.nodeValue += s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue,
        e.removeChild(s)) : s.nodeType !== 3 && (e.insertBefore(s.firstChild, s),
        e.removeChild(s))
}, Hn = function(e, n) {
    return parseFloat(n[e]) || 0
}, tE = function(e, n, r, i, s, o, a) {
    var u = U_(e), l = Hn("paddingLeft", u), c = -999, f = Hn("borderBottomWidth", u) + Hn("borderTopWidth", u), h = Hn("borderLeftWidth", u) + Hn("borderRightWidth", u), d = Hn("paddingTop", u) + Hn("paddingBottom", u), p = Hn("paddingLeft", u) + Hn("paddingRight", u), g = Hn("fontSize", u) * (n.lineThreshold || .2), v = u.textAlign, m = [], _ = [], D = [], b = n.wordDelimiter || " ", C = n.tag ? n.tag : n.span ? "span" : "div", S = n.type || n.split || "chars,words,lines", T = s && ~S.indexOf("lines") ? [] : null, x = ~S.indexOf("words"), R = ~S.indexOf("chars"), A = Kc(n), I = n.linesClass, O = ~(I || "").indexOf("++"), X = [], H = u.display === "flex", J = e.style.display, $, V, Y, L, F, de, ge, et, Te, P, U, j;
    for (O && (I = I.split("++").join("")),
    H && (e.style.display = "block"),
    V = e.getElementsByTagName("*"),
    Y = V.length,
    F = [],
    $ = 0; $ < Y; $++)
        F[$] = V[$];
    if (T || A)
        for ($ = 0; $ < Y; $++)
            L = F[$],
            de = L.parentNode === e,
            (de || A || R && !x) && (j = L.offsetTop,
            T && de && Math.abs(j - c) > g && (L.nodeName !== "BR" || $ === 0) && (ge = [],
            T.push(ge),
            c = j),
            A && (L._x = L.offsetLeft,
            L._y = j,
            L._w = L.offsetWidth,
            L._h = L.offsetHeight),
            T && ((L._isSplit && de || !R && de || x && de || !x && L.parentNode.parentNode === e && !L.parentNode._isSplit) && (ge.push(L),
            L._x -= l,
            rd(L, e, b) && (L._wordEnd = !0)),
            L.nodeName === "BR" && (L.nextSibling && L.nextSibling.nodeName === "BR" || $ === 0) && T.push([])));
    for ($ = 0; $ < Y; $++) {
        if (L = F[$],
        de = L.parentNode === e,
        L.nodeName === "BR") {
            T || A ? (L.parentNode && L.parentNode.removeChild(L),
            F.splice($--, 1),
            Y--) : x || e.appendChild(L);
            continue
        }
        if (A && (Te = L.style,
        !x && !de && (L._x += L.parentNode._x,
        L._y += L.parentNode._y),
        Te.left = L._x + "px",
        Te.top = L._y + "px",
        Te.position = "absolute",
        Te.display = "block",
        Te.width = L._w + 1 + "px",
        Te.height = L._h + "px"),
        !x && R)
            if (L._isSplit)
                for (L._next = V = L.nextSibling,
                L.parentNode.appendChild(L); V && V.nodeType === 3 && V.textContent === " "; )
                    L._next = V.nextSibling,
                    L.parentNode.appendChild(V),
                    V = V.nextSibling;
            else
                L.parentNode._isSplit ? (L._parent = L.parentNode,
                !L.previousSibling && L.firstChild && (L.firstChild._isFirst = !0),
                L.nextSibling && L.nextSibling.textContent === " " && !L.nextSibling.nextSibling && X.push(L.nextSibling),
                L._next = L.nextSibling && L.nextSibling._isFirst ? null : L.nextSibling,
                L.parentNode.removeChild(L),
                F.splice($--, 1),
                Y--) : de || (j = !L.nextSibling && rd(L.parentNode, e, b),
                L.parentNode._parent && L.parentNode._parent.appendChild(L),
                j && L.parentNode.appendChild(Yi.createTextNode(" ")),
                C === "span" && (L.style.display = "inline"),
                m.push(L));
        else
            L.parentNode._isSplit && !L._isSplit && L.innerHTML !== "" ? _.push(L) : R && !L._isSplit && (C === "span" && (L.style.display = "inline"),
            m.push(L))
    }
    for ($ = X.length; --$ > -1; )
        X[$].parentNode.removeChild(X[$]);
    if (T) {
        for (A && (P = Yi.createElement(C),
        e.appendChild(P),
        U = P.offsetWidth + "px",
        j = P.offsetParent === e ? 0 : e.offsetLeft,
        e.removeChild(P)),
        Te = e.style.cssText,
        e.style.cssText = "display:none;"; e.firstChild; )
            e.removeChild(e.firstChild);
        for (et = b === " " && (!A || !x && !R),
        $ = 0; $ < T.length; $++) {
            for (ge = T[$],
            P = Yi.createElement(C),
            P.style.cssText = "display:block;text-align:" + v + ";position:" + (A ? "absolute;" : "relative;"),
            I && (P.className = I + (O ? $ + 1 : "")),
            D.push(P),
            Y = ge.length,
            V = 0; V < Y; V++)
                ge[V].nodeName !== "BR" && (L = ge[V],
                P.appendChild(L),
                et && L._wordEnd && P.appendChild(Yi.createTextNode(" ")),
                A && (V === 0 && (P.style.top = L._y + "px",
                P.style.left = l + j + "px"),
                L.style.top = "0px",
                j && (L.style.left = L._x - j + "px")));
            Y === 0 ? P.innerHTML = "&nbsp;" : !x && !R && (eE(P),
            W_(P, String.fromCharCode(160), " ")),
            A && (P.style.width = U,
            P.style.height = L._h + "px"),
            e.appendChild(P)
        }
        e.style.cssText = Te
    }
    A && (a > e.clientHeight && (e.style.height = a - d + "px",
    e.clientHeight < a && (e.style.height = a + f + "px")),
    o > e.clientWidth && (e.style.width = o - p + "px",
    e.clientWidth < o && (e.style.width = o + h + "px"))),
    H && (J ? e.style.display = J : e.style.removeProperty("display")),
    Xu(r, m),
    x && Xu(i, _),
    Xu(s, D)
}, nE = function(e, n, r, i) {
    var s = n.tag ? n.tag : n.span ? "span" : "div", o = n.type || n.split || "chars,words,lines", a = ~o.indexOf("chars"), u = Kc(n), l = n.wordDelimiter || " ", c = l !== " " ? "" : u ? "&#173; " : " ", f = "</" + s + ">", h = 1, d = n.specialChars ? typeof n.specialChars == "function" ? n.specialChars : JC : null, p, g, v, m, _, D, b, C, S = Yi.createElement("div"), T = e.parentNode;
    for (T.insertBefore(S, e),
    S.textContent = e.nodeValue,
    T.removeChild(e),
    e = S,
    p = N_(e),
    b = p.indexOf("<") !== -1,
    n.reduceWhiteSpace !== !1 && (p = p.replace(QC, " ").replace(GC, "")),
    b && (p = p.split("<").join("{{LT}}")),
    _ = p.length,
    g = (p.charAt(0) === " " ? c : "") + r(),
    v = 0; v < _; v++)
        if (D = p.charAt(v),
        d && (C = d(p.substr(v), n.specialChars)))
            D = p.substr(v, C || 1),
            g += a && D !== " " ? i() + D + "</" + s + ">" : D,
            v += C - 1;
        else if (D === l && p.charAt(v - 1) !== l && v) {
            for (g += h ? f : "",
            h = 0; p.charAt(v + 1) === l; )
                g += c,
                v++;
            v === _ - 1 ? g += c : p.charAt(v + 1) !== ")" && (g += c + r(),
            h = 1)
        } else
            D === "{" && p.substr(v, 6) === "{{LT}}" ? (g += a ? i() + "{{LT}}</" + s + ">" : "{{LT}}",
            v += 5) : D.charCodeAt(0) >= 55296 && D.charCodeAt(0) <= 56319 || p.charCodeAt(v + 1) >= 65024 && p.charCodeAt(v + 1) <= 65039 ? (m = ((p.substr(v, 12).split(XC) || [])[1] || "").length || 2,
            g += a && D !== " " ? i() + p.substr(v, m) + "</" + s + ">" : p.substr(v, m),
            v += m - 1) : g += a && D !== " " ? i() + D + "</" + s + ">" : D;
    e.outerHTML = g + (h ? f : ""),
    b && W_(T, "{{LT}}", "<")
}, rE = function t(e, n, r, i) {
    var s = lu(e.childNodes), o = s.length, a = Kc(n), u, l;
    if (e.nodeType !== 3 || o > 1) {
        for (n.absolute = !1,
        u = 0; u < o; u++)
            l = s[u],
            l._next = l._isFirst = l._parent = l._wordEnd = null,
            (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (a && l.nodeType !== 3 && U_(l).display === "inline" && (l.style.display = "inline-block",
            l.style.position = "relative"),
            l._isSplit = !0,
            t(l, n, r, i));
        n.absolute = a,
        e._isSplit = !0;
        return
    }
    nE(e, n, r, i)
}, Xc = function() {
    function t(n, r) {
        H_ || j_(),
        this.elements = lu(n),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = r || {},
        z_(this),
        this.split(r)
    }
    var e = t.prototype;
    return e.split = function(r) {
        this.isSplit && this.revert(),
        this.vars = r = r || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var i = this.elements.length, s = r.tag ? r.tag : r.span ? "span" : "div", o = nd(r.wordsClass, s), a = nd(r.charsClass, s), u, l, c; --i > -1; )
            c = this.elements[i],
            this._originals[i] = c.innerHTML,
            u = c.clientHeight,
            l = c.clientWidth,
            rE(c, r, o, a),
            tE(c, r, this.chars, this.words, this.lines, l, u);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        var r = this._originals;
        if (!r)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(i, s) {
            return i.innerHTML = r[s]
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    t.create = function(r, i) {
        return new t(r,i)
    }
    ,
    t
}();
Xc.version = "3.11.4";
Xc.register = j_;
const iE = Kr(()=>{
    typeof window < "u" && (Ne.registerPlugin(be),
    Ne.registerPlugin(Xc))
}
)
  , sE = [xD, av, Ab, Ob, Xb, ow, mw, yw, iE]
  , oE = (t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n=>{
    var r;
    return ((r = t.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
}
)
  , aE = (t,e)=>{
    const n = t.route.matched.find(i=>{
        var s;
        return ((s = i.components) == null ? void 0 : s.default) === t.Component.type
    }
    )
      , r = e ?? (n == null ? void 0 : n.meta.key) ?? (n && oE(t.route, n));
    return typeof r == "function" ? r(t.route) : r
}
  , uE = (t,e)=>({
    default: ()=>t ? qe(h0, t === !0 ? {} : t, e) : e
})
  , lE = Nt({
    name: "FragmentWrapper",
    setup(t, {slots: e}) {
        return ()=>{
            var n;
            return (n = e.default) == null ? void 0 : n.call(e)
        }
    }
})
  , Kl = (t,e,n)=>({
    default: ()=>e ? qe(t, e === !0 ? {} : e, n) : qe(lE, {}, n)
})
  , cE = Nt({
    name: "NuxtPage",
    inheritAttrs: !1,
    props: {
        name: {
            type: String
        },
        transition: {
            type: [Boolean, Object],
            default: void 0
        },
        keepalive: {
            type: [Boolean, Object],
            default: void 0
        },
        route: {
            type: Object
        },
        pageKey: {
            type: [Function, String],
            default: null
        }
    },
    setup(t, {attrs: e}) {
        const n = ut();
        return ()=>qe(Xp, {
            name: t.name,
            route: t.route,
            ...e
        }, {
            default: r=>{
                if (!r.Component)
                    return;
                const i = aE(r, t.pageKey)
                  , s = n.deferHydration()
                  , o = !!(t.transition ?? r.route.meta.pageTransition ?? gl)
                  , a = o && hE([t.transition, r.route.meta.pageTransition, gl, {
                    onAfterLeave: ()=>{
                        n.callHook("page:transition:finish", r.Component)
                    }
                }].filter(Boolean));
                return Kl(Ro, o && a, uE(t.keepalive ?? r.route.meta.keepalive ?? sv, qe($d, {
                    onPending: ()=>n.callHook("page:start", r.Component),
                    onResolve: ()=>{
                        Ti(()=>n.callHook("page:finish", r.Component).finally(s))
                    }
                }, {
                    default: ()=>qe(dE, {
                        key: i,
                        routeProps: r,
                        pageKey: i,
                        hasTransition: o
                    })
                }))).default()
            }
        })
    }
});
function fE(t) {
    return Array.isArray(t) ? t : t ? [t] : []
}
function hE(t) {
    const e = t.map(n=>({
        ...n,
        onAfterLeave: fE(n.onAfterLeave)
    }));
    return Ec(...e)
}
const dE = Nt({
    name: "RouteProvider",
    props: ["routeProps", "pageKey", "hasTransition"],
    setup(t) {
        const e = t.pageKey
          , n = t.routeProps.route
          , r = {};
        for (const i in t.routeProps.route)
            r[i] = Pe(()=>e === t.pageKey ? t.routeProps.route[i] : n[i]);
        return Zi("_route", On(r)),
        ()=>qe(t.routeProps.Component)
    }
})
  , pE = Nt({
    name: "LayoutLoader",
    inheritAttrs: !1,
    props: {
        name: String
    },
    async setup(t, e) {
        const n = await ji[t.name]().then(r=>r.default || r);
        return ()=>qe(n, e.attrs, e.slots)
    }
})
  , gE = Nt({
    name: "NuxtLayout",
    inheritAttrs: !1,
    props: {
        name: {
            type: [String, Boolean, Object],
            default: null
        }
    },
    setup(t, e) {
        const n = $t("_route")
          , r = n === Qp() ? cb() : n
          , i = Pe(()=>he(t.name) ?? r.meta.layout ?? "default");
        return ()=>{
            const s = i.value && i.value in ji
              , o = r.meta.layoutTransition ?? iv;
            return Kl(Ro, s && o, {
                default: ()=>Kl(pE, s && {
                    key: i.value,
                    name: i.value,
                    ...e.attrs
                }, e.slots).default()
            }).default()
        }
    }
});
function ja(t, e, n) {
    return Math.max(t, Math.min(e, n))
}
class _E {
    advance(e) {
        var n;
        if (!this.isRunning)
            return;
        let r = !1;
        if (this.lerp)
            this.value = (1 - (i = this.lerp)) * this.value + i * this.to,
            Math.round(this.value) === this.to && (this.value = this.to,
            r = !0);
        else {
            this.currentTime += e;
            const s = ja(0, this.currentTime / this.duration, 1);
            r = s >= 1;
            const o = r ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * o
        }
        var i;
        (n = this.onUpdate) == null || n.call(this, this.value, {
            completed: r
        }),
        r && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, n, {lerp: r=.1, duration: i=1, easing: s=a=>a, onUpdate: o}) {
        this.from = this.value = e,
        this.to = n,
        this.lerp = r,
        this.duration = i,
        this.easing = s,
        this.currentTime = 0,
        this.isRunning = !0,
        this.onUpdate = o
    }
}
function id(t, e) {
    let n;
    return function() {
        let r = arguments
          , i = this;
        clearTimeout(n),
        n = setTimeout(function() {
            t.apply(i, r)
        }, e)
    }
}
class mE {
    constructor(e, n) {
        this.onWindowResize = ()=>{
            this.width = window.innerWidth,
            this.height = window.innerHeight
        }
        ,
        this.onWrapperResize = ()=>{
            this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight
        }
        ,
        this.onContentResize = ()=>{
            const r = this.wrapper === window ? document.documentElement : this.wrapper;
            this.scrollHeight = r.scrollHeight,
            this.scrollWidth = r.scrollWidth
        }
        ,
        this.wrapper = e,
        this.content = n,
        this.wrapper === window ? (window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize()) : (this.wrapperResizeObserver = new ResizeObserver(id(this.onWrapperResize, 100)),
        this.wrapperResizeObserver.observe(this.wrapper),
        this.onWrapperResize()),
        this.contentResizeObserver = new ResizeObserver(id(this.onContentResize, 100)),
        this.contentResizeObserver.observe(this.content),
        this.onContentResize()
    }
    destroy() {
        var e, n;
        window.removeEventListener("resize", this.onWindowResize, !1),
        (e = this.wrapperResizeObserver) == null || e.disconnect(),
        (n = this.contentResizeObserver) == null || n.disconnect()
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
let q_ = ()=>({
    events: {},
    emit(t, ...e) {
        let n = this.events[t] || [];
        for (let r = 0, i = n.length; r < i; r++)
            n[r](...e)
    },
    on(t, e) {
        var n;
        return (n = this.events[t]) != null && n.push(e) || (this.events[t] = [e]),
        ()=>{
            var r;
            this.events[t] = (r = this.events[t]) == null ? void 0 : r.filter(i=>e !== i)
        }
    }
});
class yE {
    constructor(e, {wheelMultiplier: n=1, touchMultiplier: r=2, normalizeWheel: i=!1}) {
        this.onTouchStart = s=>{
            const {pageX: o, pageY: a} = s.targetTouches ? s.targetTouches[0] : s;
            this.touchStart.x = o,
            this.touchStart.y = a
        }
        ,
        this.onTouchMove = s=>{
            const {pageX: o, pageY: a} = s.targetTouches ? s.targetTouches[0] : s
              , u = -(o - this.touchStart.x) * this.touchMultiplier
              , l = -(a - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = o,
            this.touchStart.y = a,
            this.emitter.emit("scroll", {
                type: "touch",
                deltaX: u,
                deltaY: l,
                event: s
            })
        }
        ,
        this.onWheel = s=>{
            let {deltaX: o, deltaY: a} = s;
            this.normalizeWheel && (o = ja(-100, o, 100),
            a = ja(-100, a, 100)),
            o *= this.wheelMultiplier,
            a *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                type: "wheel",
                deltaX: o,
                deltaY: a,
                event: s
            })
        }
        ,
        this.element = e,
        this.wheelMultiplier = n,
        this.touchMultiplier = r,
        this.normalizeWheel = i,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = q_(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        })
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    destroy() {
        this.emitter.events = {},
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        })
    }
}
class DE {
    constructor({direction: e, gestureDirection: n, mouseMultiplier: r, smooth: i, wrapper: s=window, content: o=document.documentElement, wheelEventsTarget: a=s, smoothWheel: u=i == null || i, smoothTouch: l=!1, duration: c, easing: f=D=>Math.min(1, 1.001 - Math.pow(2, -10 * D)), lerp: h=c ? null : .1, infinite: d=!1, orientation: p=e ?? "vertical", gestureOrientation: g=n ?? "vertical", touchMultiplier: v=2, wheelMultiplier: m=r ?? 1, normalizeWheel: _=!1}={}) {
        this.onVirtualScroll = ({type: D, deltaX: b, deltaY: C, event: S})=>{
            if (S.ctrlKey || this.options.gestureOrientation === "vertical" && C === 0 || this.options.gestureOrientation === "horizontal" && b === 0 || S.composedPath().find(x=>x == null || x.hasAttribute == null ? void 0 : x.hasAttribute("data-lenis-prevent")))
                return;
            if (this.isStopped || this.isLocked)
                return void S.preventDefault();
            if (this.isSmooth = this.options.smoothTouch && D === "touch" || this.options.smoothWheel && D === "wheel",
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            S.preventDefault();
            let T = C;
            this.options.gestureOrientation === "both" ? T = Math.abs(C) > Math.abs(b) ? C : b : this.options.gestureOrientation === "horizontal" && (T = b),
            this.scrollTo(this.targetScroll + T, {
                programmatic: !1
            })
        }
        ,
        this.onScroll = ()=>{
            if (!this.isScrolling) {
                const D = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - D),
                this.emit()
            }
        }
        ,
        e && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),
        n && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),
        r && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),
        i && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),
        window.lenisVersion = "1.0.5",
        s !== document.documentElement && s !== document.body || (s = window),
        this.options = {
            wrapper: s,
            content: o,
            wheelEventsTarget: a,
            smoothWheel: u,
            smoothTouch: l,
            duration: c,
            easing: f,
            lerp: h,
            infinite: d,
            gestureOrientation: g,
            orientation: p,
            touchMultiplier: v,
            wheelMultiplier: m,
            normalizeWheel: _
        },
        this.dimensions = new mE(s,o),
        this.rootElement.classList.add("lenis"),
        this.velocity = 0,
        this.isStopped = !1,
        this.isSmooth = u || l,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.animate = new _E,
        this.emitter = q_(),
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1
        }),
        this.virtualScroll = new yE(a,{
            touchMultiplier: v,
            wheelMultiplier: m,
            normalizeWheel: _
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.events = {},
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
            passive: !1
        }),
        this.virtualScroll.destroy()
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    off(e, n) {
        var r;
        this.emitter.events[e] = (r = this.emitter.events[e]) == null ? void 0 : r.filter(i=>n !== i)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped = !1,
        this.reset()
    }
    stop() {
        this.isStopped = !0,
        this.animate.stop(),
        this.reset()
    }
    raf(e) {
        const n = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * n)
    }
    scrollTo(e, {offset: n=0, immediate: r=!1, lock: i=!1, duration: s=this.options.duration, easing: o=this.options.easing, lerp: a=!s && this.options.lerp, onComplete: u=null, force: l=!1, programmatic: c=!0}={}) {
        if (!this.isStopped || l) {
            if (["top", "left", "start"].includes(e))
                e = 0;
            else if (["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                var f;
                let h;
                if (typeof e == "string" ? h = document.querySelector(e) : (f = e) != null && f.nodeType && (h = e),
                h) {
                    if (this.options.wrapper !== window) {
                        const p = this.options.wrapper.getBoundingClientRect();
                        n -= this.isHorizontal ? p.left : p.top
                    }
                    const d = h.getBoundingClientRect();
                    e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += n,
                e = Math.round(e),
                this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = ja(0, e, this.limit),
                r)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.emit(),
                    void (u == null || u());
                if (!c) {
                    if (e === this.targetScroll)
                        return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: s,
                    easing: o,
                    lerp: a,
                    onUpdate: (h,{completed: d})=>{
                        i && (this.isLocked = !0),
                        this.isScrolling = !0,
                        this.velocity = h - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = h,
                        this.setScroll(this.scroll),
                        c && (this.targetScroll = h),
                        d && (i && (this.isLocked = !1),
                        requestAnimationFrame(()=>{
                            this.isScrolling = !1
                        }
                        ),
                        this.velocity = 0,
                        u == null || u()),
                        this.emit()
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? this.options.content : this.options.wrapper
    }
    get limit() {
        return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? function(e, n) {
            let r = e % n;
            return (n > 0 && r < 0 || n < 0 && r > 0) && (r += n),
            r
        }(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e),
        this.__isSmooth = e)
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e),
        this.__isScrolling = e)
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e),
        this.__isStopped = e)
    }
}
class vE {
    constructor() {
        Qc(this, "update", (e,n,r)=>{
            this.updateFns.forEach(i=>i.fn({
                et: e,
                dt: n / 1e3
            }))
        }
        );
        this.rafId = null,
        this.gsapTicker = Ne.ticker,
        this.updateFns = []
    }
    add(e, n=0) {
        const r = {
            fn: e,
            priority: n
        };
        this.updateFns.push(r),
        this.updateFns.sort((i,s)=>i.priority - s.priority)
    }
    remove(e) {
        this.updateFns.splice(this.updateFns.findIndex(n=>n.fn === e), 1)
    }
    start() {
        this.stop(),
        this.gsapTicker.add(this.update)
    }
    stop() {
        this.gsapTicker.remove(this.update)
    }
}
let Gu = null;
const V_ = ()=>(Gu || (Gu = new vE),
Gu)
  , bE = (t,e=void 0)=>{
    const n = V_();
    Si(()=>{
        n.add(t, e)
    }
    ),
    os(()=>{
        n.remove(t)
    }
    )
}
  , ir = Yt(null)
  , wE = ()=>(Si(()=>{
    ir.value || (ir.value = new DE({
        duration: 1.2,
        easing: t=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: .4,
        touchMultiplier: 1.5
    }),
    window.lenis = ir.value)
}
),
bE(({et: t})=>{
    ir.value.raf(t * 1e3)
}
),
os(()=>{
    ir.value && (ir.value.destroy(),
    ir.value = null)
}
),
ir)
  , ME = ()=>ir
  , CE = {
    __name: "app",
    setup(t) {
        const e = V_()
          , n = wE()
          , r = Ts()
          , i = {
            onLeave: (s,o)=>{
                const a = document.querySelector(".l__transition");
                document.body.classList.add("--transitioning"),
                r.currentRoute.value.path === "/about" ? (Ne.to(".brandmark__mobile", {
                    scale: 0,
                    ease: "expo.inOut",
                    duration: 1.5
                }),
                Ne.set(".home__logo", {
                    zIndex: 16
                }),
                Ne.set(".container", {
                    zIndex: 2
                }),
                Ne.set(a, {
                    y: -window.innerHeight,
                    onComplete: ()=>{
                        Ne.set(a, {
                            opacity: 0
                        })
                    }
                }),
                Ne.to(".l__menu", {
                    filter: "invert(1)",
                    ease: "expo.inOut",
                    duration: 1.5
                }),
                Ne.set(a, {
                    opacity: 1,
                    y: -window.innerHeight
                }),
                Ne.to(a, {
                    y: 0,
                    duration: 1.5,
                    ease: "expo.inOut",
                    onComplete: o
                }),
                Ne.to(".home__logo--img", {
                    rotateY: 90,
                    scale: 0,
                    opacity: 0,
                    duration: 2.2,
                    delay: -.4,
                    ease: "power4.inOut",
                    ease: "expo.inOut"
                })) : (Ne.set(".home__logo", {
                    zIndex: 16
                }),
                Ne.set(a, {
                    opacity: 1,
                    y: -window.innerHeight
                }),
                Ne.set(a, {
                    y: 0,
                    overwrite: !0
                }),
                Ne.to(".l__menu", {
                    filter: "invert(0)",
                    ease: "expo.inOut",
                    duration: 1.5
                }),
                Ne.set(".l__about", {
                    backgroundColor: "transparent"
                }),
                Ne.to([a, ".about__transition", ".about__contact"], {
                    y: -window.innerHeight,
                    duration: 1.5,
                    ease: "expo.inOut",
                    overwrite: !0,
                    onComplete: o
                }),
                Ne.to(".play__audio", {
                    duration: 1,
                    scale: 0,
                    ease: "expo.inOut"
                }),
                Ne.to(".play__audio--background", {
                    scale: 0,
                    duration: 1.1,
                    ease: "expo.inOut",
                    opacity: 0
                }),
                Ne.to(".about__contact", {
                    opacity: 0,
                    duration: 1.1,
                    ease: "expo.inOut",
                    opacity: 0
                }),
                Ne.to(".home__logo--img", {
                    rotateY: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 2.2,
                    ease: "power4.inOut",
                    delay: -.3
                }))
            }
            ,
            onEnter: (s,o)=>{
                const a = r.currentRoute.value.path;
                Ne.to(s, {
                    opacity: 1,
                    duration: a !== "/about" ? 1.2 : 0,
                    onComplete: o
                }),
                setTimeout(()=>{
                    document.body.classList.remove("--transitioning")
                }
                , 1200)
            }
        };
        return ut().hook("page:finish", ()=>{
            be.getAll().forEach(s=>{
                s.kill()
            }
            ),
            be.refresh(),
            n.value.scrollTo(0, {
                duration: 1e-4
            })
        }
        ),
        Si(()=>{
            window.urlParams = new Proxy(new URLSearchParams(window.location.search),{
                get: (s,o)=>s.get(o)
            }),
            window.skipToContact = window.urlParams.skipToContact !== null,
            e.start()
        }
        ),
        (s,o)=>{
            const a = cE
              , u = gE;
            return Sr(),
            Hi(u, null, {
                default: va(()=>[We(Ro, {
                    name: "page-transitions",
                    appear: !0,
                    mode: "out-in",
                    css: !1,
                    onEnter: i.onEnter,
                    onLeave: i.onLeave
                }, {
                    default: va(()=>[(Sr(),
                    $0("div", {
                        class: "container",
                        key: s.$route.fullPath
                    }, [We(a, {
                        transition: i
                    })]))]),
                    _: 1
                }, 8, ["onEnter", "onLeave"])]),
                _: 1
            })
        }
    }
}
  , sd = {
    __name: "nuxt-root",
    setup(t) {
        const e = c0(()=>mo(()=>import("./e"), ["./menubackground.js", "./marquee.js", "./helpers.js", "./plugins.js"], import.meta.url).then(a=>a.default || a))
          , n = ()=>null
          , r = ut()
          , i = r.deferHydration();
        Zi("_route", Qp()),
        r.hooks.callHookWith(a=>a.map(u=>u()), "vue:setup");
        const s = tu();
        Xd((a,u,l)=>{
            r.hooks.callHook("vue:error", a, u, l).catch(c=>console.error("[nuxt] Error in `vue:error` hook", c)),
            Db(a) && (a.fatal || a.unhandled) && ar(r, zi, [a])
        }
        );
        const {islandContext: o} = !1;
        return (a,u)=>(Sr(),
        Hi($d, {
            onResolve: he(i)
        }, {
            default: va(()=>[he(s) ? (Sr(),
            Hi(he(e), {
                key: 0,
                error: he(s)
            }, null, 8, ["error"])) : he(o) ? (Sr(),
            Hi(he(n), {
                key: 1,
                context: he(o)
            }, null, 8, ["context"])) : (Sr(),
            Hi(he(CE), {
                key: 2
            }))]),
            _: 1
        }, 8, ["onResolve"]))
    }
};
globalThis.$fetch || (globalThis.$fetch = aD.create({
    baseURL: lD()
}));
let od;
const EE = CD(sE);
od = async function() {
    var i;
    const n = Boolean((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ? Cy(sd) : wy(sd)
      , r = vD({
        vueApp: n
    });
    try {
        await wD(r, EE)
    } catch (s) {
        await r.callHook("app:error", s),
        r.payload.error = r.payload.error || s
    }
    try {
        await r.hooks.callHook("app:created", n),
        await r.hooks.callHook("app:beforeMount", n),
        n.mount("#" + ov),
        await r.hooks.callHook("app:mounted", n),
        await Ti()
    } catch (s) {
        await r.callHook("app:error", s),
        r.payload.error = r.payload.error || s
    }
}
,
od().catch(t=>{
    console.error("Error while mounting app:", t)
}
);
export {Qp as A, PE as B, ut as C, vb as D, qt as F, be as S, ah as _, Sr as a, kE as b, $0 as c, We as d, fp as e, On as f, Ne as g, AE as h, xs as i, RE as j, he as k, ME as l, OE as m, Ti as n, Si as o, SE as p, FE as q, Yt as r, hp as s, TE as t, ko as u, hr as v, va as w, V_ as x, Ts as y, Pe as z};
