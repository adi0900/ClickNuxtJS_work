var $ = Object.defineProperty;
var ee = (a,t,n)=>t in a ? $(a, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : a[t] = n;
var q = (a,t,n)=>(ee(a, typeof t != "symbol" ? t + "" : t, n),
n);
import {s as w, u as te} from "./state.js";
import {r as d, v as f, o as v, g as i, a as p, c as m, e as o, t as oe, k as G, s as h, b as ae, p as x, q as S, y as Z, n as M, z as se, d as _, w as ne, F as re, _ as ie, x as ce, u as le, h as ue, A as Ae, B as de, m as qe} from "./entry.js";
import {_ as N} from "./menubackground.js";
import {_ as g, l as j} from "./plugins.js";
import {_ as _e, b as pe, a as V, u as me} from "./star.js";
const he = {
    class: "l__loader"
}
  , ye = o("div", {
    class: "loader__header"
}, [o("p", null, [h(" Knowing by doing "), o("br"), h(" — SavoirFaire© ")]), o("div", {
    class: "content-right"
}, [o("p", null, [h(" Digital & Branding Design "), o("br"), h(" Photography & Film Production ")]), o("p", null, [h(" Founded in 2020 "), o("br"), h(" Brooklyn, NY ")])])], -1)
  , ge = ae('<div class="preloader__numbers number-one"><span>0</span><span>2</span><span>5</span><span>7</span><span>9</span></div><div class="preloader__numbers number-two"><span>0</span><span>7</span><span>9</span><span>7</span><span>9</span></div>', 2)
  , we = [ge]
  , ve = {
    __name: "PercentLoader",
    setup(a) {
        let t = d(0);
        const n = d(null)
          , c = d(null);
        return f(()=>w.percent, e=>{
            t.value = e,
            n.value.style.transform = `scale(${.1 + e / 100})`
        }
        ),
        v(()=>{
            if (window.skipToContact) {
                const l = document.querySelector(".l__loader");
                return l.style.display = "none",
                w.setLoaded()
            }
            const e = document.querySelectorAll(".number-one span")
              , r = document.querySelectorAll(".number-two span");
            let u = (window.innerWidth - c.value.getBoundingClientRect().width) / 4;
            const s = i.timeline({
                onComplete: ()=>{
                    w.setLoaded(),
                    i.to(".l__loader", {
                        opacity: 0,
                        ease: "power4.inOut"
                    })
                }
                ,
                defaults: {
                    ease: "power4.inOut"
                }
            });
            e.forEach((l,A)=>{
                window.innerWidth > 768 && s.to(c.value, {
                    x: c.value.getBoundingClientRect().left + u * A,
                    repeatRefresh: !0,
                    duration: 1,
                    ease: "power4.inOut"
                }, A),
                s.to(l, {
                    x: 0,
                    ease: "power4.inOut",
                    duration: 1
                }, A),
                s.to(l, {
                    x: "20rem",
                    ease: "power4.inOut",
                    duration: 1
                }, A + 1)
            }
            ),
            r.forEach((l,A)=>{
                s.to(l, {
                    x: 0,
                    ease: "power4.inOut",
                    duration: 1
                }, A),
                s.to(l, {
                    x: "20rem",
                    ease: "power4.inOut",
                    duration: 1
                }, A + 1)
            }
            )
        }
        ),
        (e,r)=>(p(),
        m("div", he, [ye, o("h1", {
            ref_key: "loaderPercent",
            ref: n,
            class: "loader__percent"
        }, oe(Math.round(G(t))), 513), o("div", {
            ref_key: "loaderNumbers",
            ref: c,
            class: "loader__numbers"
        }, we, 512)]))
    }
}
  , fe = "" + new URL("rotate-mobile.0561dc60.svg",import.meta.url).href;
const xe = {}
  , U = a=>(x("data-v-4d6a0aa6"),
a = a(),
S(),
a)
  , Se = {
    class: "mobile__landscape"
}
  , Me = U(()=>o("img", {
    class: "mobile__landscape--background",
    src: N,
    alt: "Background"
}, null, -1))
  , ke = U(()=>o("div", {
    class: "mobile__landscape--content"
}, [o("img", {
    src: fe,
    alt: "Rotate Mobile"
}), o("h2", null, "Oops!"), o("p", null, " We didn’t plan for this... Please rotate your phone back to vertical. ")], -1))
  , Be = [Me, ke];
function be(a, t) {
    return p(),
    m("div", Se, Be)
}
const Ce = g(xe, [["render", be], ["__scopeId", "data-v-4d6a0aa6"]]);
const De = {
    __name: "Preloader",
    setup(a) {
        const t = d(null)
          , n = d(null)
          , c = d(null)
          , e = d(null)
          , r = Z();
        v(async()=>{
            await M()
        }
        ),
        f(()=>w.loaded, s=>{
            u()
        }
        );
        const u = ()=>{
            if (window.skipToContact)
                return t.value.remove();
            const s = i.timeline({
                defaults: {
                    ease: "power4.inOut",
                    duration: 1.5
                }
            });
            i.set(n.value, {
                display: "none",
                opacity: 0,
                delay: .8
            }),
            i.set(t.value, {
                backgroundColor: "#FFF",
                delay: .8
            }),
            i.set(c.value, {
                display: "none",
                opacity: 0,
                delay: 1.6
            }),
            i.set(t.value, {
                backgroundColor: "#cdfd50",
                delay: 1.6
            }),
            i.set(e.value, {
                display: "none",
                opacity: 0,
                delay: 2.4
            }),
            i.set(t.value, {
                backgroundColor: "#000",
                delay: 2.4
            }),
            s.to(n.value, {
                scale: 14
            }, 0),
            s.to(c.value, {
                scale: 14,
                delay: .4,
                onComplete: ()=>{
                    te().value = !0,
                    i.to(".container", {
                        opacity: 1,
                        duration: 1.2,
                        ease: "power4.inOut"
                    })
                }
            }, 0),
            s.to(e.value, {
                scale: 14,
                delay: .8
            }, 0),
            s.to(t.value, {
                opacity: 0,
                delay: 1.1,
                onComplete: ()=>t.value.remove()
            }, 0),
            r.currentRoute.value.path === "/" && s.to(".home__logo--img", {
                rotateY: 0,
                scale: 1,
                opacity: 1,
                duration: 2.5,
                delay: .44
            }, 0),
            s.to(".l__menu", {
                scale: 1,
                delay: 1,
                duration: 1.2
            }, 0)
        }
        ;
        return (s,l)=>(p(),
        m("div", {
            class: "l__preloader",
            ref_key: "el",
            ref: t
        }, [o("img", {
            id: "preloader__star-white",
            class: "preloader__star",
            src: _e,
            alt: "Star White",
            ref_key: "starWhite",
            ref: n
        }, null, 512), o("img", {
            id: "preloader__star-volt",
            class: "preloader__star",
            src: pe,
            alt: "Star Volt",
            ref_key: "starVolt",
            ref: c
        }, null, 512), o("img", {
            id: "preloader__star-black",
            class: "preloader__star",
            src: V,
            alt: "Star Black",
            ref_key: "starBlack",
            ref: e
        }, null, 512)], 512))
    }
}
  , Ee = g(De, [["__scopeId", "data-v-a56e7aa4"]])
  , Ie = "" + new URL("cursor.5ff4b071.svg",import.meta.url).href;
const We = {}
  , Le = a=>(x("data-v-2d993e89"),
a = a(),
S(),
a)
  , Re = {
    class: "custom__cursor"
}
  , ze = Le(()=>o("img", {
    class: "custom__cursor--img",
    src: Ie,
    alt: ""
}, null, -1))
  , Qe = [ze];
function Fe(a, t) {
    return p(),
    m("div", Re, Qe)
}
const Pe = g(We, [["render", Fe], ["__scopeId", "data-v-2d993e89"]]);
const Te = {}
  , Oe = {
    class: "l__transition"
};
function je(a, t) {
    return p(),
    m("div", Oe)
}
const Ge = g(Te, [["render", je], ["__scopeId", "data-v-bc52efd1"]])
  , Ze = "" + new URL("savoir-faire-logo.a8b7c534.svg",import.meta.url).href
  , Ne = "" + new URL("ClickSound.mp3",import.meta.url).href
  , Ve = "data:audio/mpeg;base64,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";
const k = a=>(x("data-v-a3c343d6"),
a = a(),
S(),
a)
  , Ue = k(()=>o("img", {
    class: "menu__star",
    src: V,
    alt: ""
}, null, -1))
  , Ye = k(()=>o("audio", {
    id: "menuHoverSound"
}, [o("source", {
    src: Ne,
    type: "audio/wav"
})], -1))
  , Je = k(()=>o("audio", {
    id: "menuClickSound"
}, [o("source", {
    src: Ve,
    type: "audio/wav"
})], -1))
  , Ke = {
    __name: "Menu",
    setup(a) {
        const t = d(null)
          , n = d(null)
          , c = Z()
          , e = se(()=>c.currentRoute.value.path === "/" ? "/about" : "/");
        return v(async()=>{
            await M(),
            setInterval(function() {
                if (c.currentRoute.value.path == "/about")
                    return;
                const r = document.querySelector(".menu__star");
                r.style.animation = "none",
                r.offsetHeight,
                r.style.animation = null;
                const u = document.querySelector(".menu__background");
                u.style.animation = "none",
                u.offsetHeight,
                u.style.animation = null
            }, 5e3),
            t.value.$el.addEventListener("mouseenter", ()=>{
                const r = document.querySelector("#menuHoverSound");
                r.volume = .3,
                r.play(),
                i.to(".custom__cursor", {
                    duration: 1,
                    delay: -.3,
                    scale: 0,
                    opacity: 0,
                    ease: "expo.inOut"
                }),
                i.to(".custom__cursor--img", {
                    scale: 0,
                    duration: 1,
                    delay: -.3,
                    ease: "expo.inOut"
                })
            }
            ),
            t.value.$el.addEventListener("mouseleave", ()=>{
                c.currentRoute.value.path === "/" && (i.to(".custom__cursor", {
                    duration: 1,
                    delay: -.3,
                    opacity: 1,
                    ease: "expo.inOut"
                }),
                i.to(".custom__cursor--img", {
                    scale: 1,
                    duration: 1,
                    delay: -.3,
                    ease: "expo.inOut"
                }))
            }
            ),
            t.value.$el.addEventListener("click", ()=>{
                const r = document.querySelector("#menuClickSound");
                r.volume = .3,
                r.play()
            }
            )
        }
        ),
        (r,u)=>{
            const s = ie;
            return p(),
            m(re, null, [_(s, {
                to: G(e),
                ref_key: "menu",
                ref: t,
                class: "l__menu"
            }, {
                default: ne(()=>[o("img", {
                    class: "menu__background",
                    src: N,
                    alt: "Menu White Background",
                    ref_key: "menuStar",
                    ref: n
                }, null, 512), Ue]),
                _: 1
            }, 8, ["to"]), Ye, Je], 64)
        }
    }
}
  , Xe = g(Ke, [["__scopeId", "data-v-a3c343d6"]]);
class He {
    constructor() {
        q(this, "enable", ()=>{
            this.initListeners(),
            window.mouse || (window.mouse = this)
        }
        );
        q(this, "disable", ()=>{
            this.destroyListeners(),
            window.mouse = null
        }
        );
        q(this, "initListeners", ()=>{
            window.addEventListener("mousemove", this.onMouseMove.bind(this)),
            window.addEventListener("resize", this.onResize)
        }
        );
        q(this, "onLinkMouseOver", ()=>{
            i.to(this.customCursor, {
                scale: 2,
                duration: .4,
                ease: "Power4.easeIn"
            })
        }
        );
        q(this, "onLinkMouseLeave", ()=>{
            i.to(this.customCursor, {
                scale: 1,
                duration: .4,
                ease: "Power4.easeOut",
                overwrite: !0
            })
        }
        );
        q(this, "onMouseMove", t=>{
            this.position = {
                x: t.clientX,
                y: t.clientY
            }
        }
        );
        q(this, "update", ()=>{
            window.innerWidth < 1024 || (this.cursorPosition.x = j(this.cursorPosition.x, this.position.x, .07),
            this.cursorPosition.y = j(this.cursorPosition.y, this.position.y, .07),
            this.customCursor.style.transform = `translate3d(${this.cursorPosition.x - this.cursorSize.width / 2}px, ${this.cursorPosition.y - this.cursorSize.height / 2}px, 0)`)
        }
        );
        q(this, "destroyListeners", ()=>{
            window.removeEventListener("mousemove", this.onMouseMove.bind(this))
        }
        );
        this.position = {
            x: 0,
            y: 0
        },
        this.cursorPosition = {
            x: 0,
            y: 0
        },
        this.playPosition = {
            x: 0,
            y: 0
        },
        this.ticker = ce(),
        this.customCursor = document.querySelector(".custom__cursor"),
        this.cursorSize = {
            width: 128,
            height: 128
        },
        this.enable(),
        this.ticker.add(this.update.bind(this))
    }
}
const $e = {
    ref: "el",
    class: "l__layout"
}
  , et = {
    ref: "homeLogo",
    class: "home__logo"
}
  , tt = {
    class: "home__logo--img",
    src: Ze,
    alt: "Studio Savoir Faire Logo",
    ref: "homeLogo"
}
  , lt = {
    __name: "default",
    async setup(a) {
        var A, B, b, C, D, E, I, W, L, R, z, Q, F, P, T, O;
        let t, n;
        const {client: c} = le()
          , {data: e} = ([t,n] = ue(()=>qe("meta", ()=>c.getSingle("meta"))),
        t = await t,
        n(),
        t)
          , r = Ae()
          , u = d(null);
        f(()=>r.fullPath, y=>{
            gtag("config", "G-K4SG0SW68D", {
                page_path: y
            })
        }
        ),
        v(async()=>{
            await M(),
            l(),
            new He,
            window.addEventListener("resize", l)
        }
        );
        const s = ()=>{
            const y = window.innerHeight * .01;
            document.documentElement.style.setProperty("--vh", `${y}px`)
        }
          , l = ()=>{
            s()
        }
        ;
        return me({
            title: (B = (A = e == null ? void 0 : e.value) == null ? void 0 : A.data) == null ? void 0 : B.title,
            htmlAttrs: {
                lang: "en"
            },
            meta: [{
                name: "theme-color",
                content: "#000"
            }, {
                name: "description",
                content: (C = (b = e == null ? void 0 : e.value) == null ? void 0 : b.data) == null ? void 0 : C.description
            }, {
                hid: "og-title",
                property: "og:title",
                content: (E = (D = e == null ? void 0 : e.value) == null ? void 0 : D.data) == null ? void 0 : E.title
            }, {
                hid: "og-type",
                property: "og:type",
                content: "website"
            }, {
                hid: "og-desc",
                property: "og:description",
                content: (W = (I = e == null ? void 0 : e.value) == null ? void 0 : I.data) == null ? void 0 : W.description
            }, {
                hid: "og-image",
                property: "og:image",
                content: (R = (L = e == null ? void 0 : e.value) == null ? void 0 : L.data) == null ? void 0 : R.og_image.url
            }, {
                hid: "twitter-title",
                property: "twitter:title",
                content: (Q = (z = e == null ? void 0 : e.value) == null ? void 0 : z.data) == null ? void 0 : Q.title
            }, {
                hid: "twitter-desc",
                property: "twitter:description",
                content: (P = (F = e == null ? void 0 : e.value) == null ? void 0 : F.data) == null ? void 0 : P.description
            }, {
                hid: "twitter-image",
                property: "twitter:image",
                content: (O = (T = e == null ? void 0 : e.value) == null ? void 0 : T.data) == null ? void 0 : O.og_image.url
            }, {
                hid: "twitter-card",
                property: "twitter:card",
                content: "summary_large_image"
            }],
            link: [{
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }],
            script: [{
                src: "https://www.googletagmanager.com/gtag/js?id=G-K4SG0SW68D",
                async: !0
            }, {
                hid: "ga",
                children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-K4SG0SW68D');`,
                text: "text/javascript"
            }]
        }),
        (y,ot)=>{
            const Y = ve
              , J = Ce
              , K = Ee
              , X = Pe
              , H = Ge;
            return p(),
            m("div", $e, [_(Y), _(J), _(K), _(Xe), _(X), _(H), o("canvas", {
                ref_key: "webgl",
                ref: u,
                class: "webgl"
            }, null, 512), o("div", et, [o("img", tt, null, 512)], 512), de(y.$slots, "default")], 512)
        }
    }
};
export {lt as default};
