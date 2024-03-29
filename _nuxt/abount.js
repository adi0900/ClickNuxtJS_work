import {r as i, f as Ne, g as e, u as Xe, h as $e, o as je, n as Je, i as Ge, S as $, a as ce, c as de, e as o, F as Le, j as Ke, k as j, t as ve, l as Qe, m as Ze, p as et, q as tt, s as Oe, b as Ce} from "./entry.js";
import {u as at, _ as ot, a as st, b as nt} from "./star.js";
import {W as lt, i as it, a as rt, s as ut, b as ct, c as dt, d as vt, e as pt} from "./stickerphysics.js";
import {u as mt} from "./state.js";
import {_ as yt, l as Se} from "./plugins.js";
import "./helpers.js";
const _t = "" + new URL("network_plain.9ed966be.svg",import.meta.url).href
  , ft = "" + new URL("play-audio-arrow.57f0a83a.svg",import.meta.url).href
  , ht = "" + new URL("contact.b065826f.svg",import.meta.url).href
  , wt = "" + new URL("email-hover.db3dcfa7.svg",import.meta.url).href
  , xt = "" + new URL("sound.c0bda52c.mp3",import.meta.url).href;
const O = I=>(et("data-v-db972e77"),
I = I(),
tt(),
I)
  , bt = O(()=>o("span", null, "SavoirFaire© 2023.", -1))
  , gt = O(()=>o("span", null, [Oe(" Code by "), o("a", {
    target: "_blank",
    href: "https://henriheymans.com"
}, " Henri Heymans"), Oe(" & "), o("a", {
    target: "_blank",
    href: "https://twitter.com/tjoeaon"
}, "Fabian Tjoe-A-On")], -1))
  , kt = [bt, gt]
  , Lt = O(()=>o("div", {
    class: "matter-canvas"
}, null, -1))
  , Ot = {
    class: "about__networks"
}
  , St = ["href"]
  , Ct = O(()=>o("img", {
    src: _t,
    alt: "Background",
    class: "network__background"
}, null, -1))
  , Et = ["src", "alt"]
  , Tt = {
    class: "content"
}
  , At = O(()=>o("img", {
    src: ft,
    alt: "Play Audio"
}, null, -1))
  , qt = O(()=>o("span", null, "Our 60-second Pitch", -1))
  , Bt = [At, qt]
  , Wt = Ce('<div class="marquee" data-v-db972e77><div class="marquee__inner" data-v-db972e77><span class="marquee__text text--play" data-v-db972e77>Pause</span><span class="marquee__text text--play" data-v-db972e77>Pause</span><span class="marquee__text text--play" data-v-db972e77>Pause</span><span class="marquee__text text--play" data-v-db972e77>Pause</span></div></div>', 1)
  , It = [Wt]
  , Ft = Ce('<div class="marquee" data-v-db972e77><div class="marquee__inner" data-v-db972e77><span class="marquee__text text--play" data-v-db972e77>Start Over</span><span class="marquee__text text--play" data-v-db972e77>Start Over</span><span class="marquee__text text--play" data-v-db972e77>Start Over</span><span class="marquee__text text--play" data-v-db972e77>Start Over</span></div></div>', 1)
  , Pt = [Ft]
  , Mt = {
    class: "end__content"
}
  , Dt = {
    class: "counter"
}
  , Rt = {
    class: "self-destruct__text"
}
  , Ut = {
    class: "counter"
}
  , Ht = {
    class: "contact__wrapper"
}
  , zt = {
    href: "mailto:louis@savoirfaire.nyc,bart@savoirfaire.nyc?subject=Collaboration%20Inquiry&body=Dear%20SavoirFaire%C2%A9%2C%0A%0AYour%20website%20showcases%20a%20world%20of%20possibilities%2C%20and%20I%E2%80%99m%20excited%20about%20the%20prospect%20of%20working%20together.%20Our%20company%20is%20in%20search%20of%20a%20design%20partner%20that%20can%20elevate%20it%20to%20new%20heights%20of%20creativity.%20When%20can%20we%20connect%3F%0A%0AWarm%20regards%2C%0A%5Byour%20name%20here%5D",
    class: "about__contact--circle",
    id: "block",
    matter: ""
}
  , Vt = O(()=>o("img", {
    src: wt,
    alt: "Email"
}, null, -1))
  , Yt = [Vt]
  , Nt = {
    class: "about__contact--cta"
}
  , Xt = {
    __name: "about",
    async setup(I) {
        let F, pe;
        const J = i(null)
          , P = i(null)
          , t = i(null)
          , v = i(null)
          , M = i(null)
          , D = i(null)
          , G = i(null)
          , n = i(null)
          , A = i(null)
          , K = i(null)
          , p = i(null);
        let b = i(null);
        const R = i(null)
          , U = i(null)
          , H = i(null)
          , g = i(null)
          , Q = i(null)
          , Z = i(null)
          , me = i(null)
          , k = i(null)
          , m = i(null)
          , ee = i(null)
          , te = i(null)
          , L = i(null)
          , ye = i(null)
          , ae = i(!1)
          , f = i("play");
        let S = Ne({
            value: 5
        }), oe = !1, d, C = "play", l, q = !1, B, y = !1, E = !1, z = !1, h = [], V = {
            value: 1
        }, T = {
            x: 0,
            y: 0
        }, Y = {
            x: 0,
            y: 0
        }, se = !1, N;
        const _ = Qe()
          , X = e.matchMedia()
          , {client: Ee} = Xe()
          , {data: Te} = ([F,pe] = $e(()=>Ze("about", ()=>Ee.getSingle("about"))),
        F = await F,
        pe(),
        F);
        let ne, r, le = null;
        const Ae = a=>new Promise(s=>setTimeout(s, a));
        je(async()=>{
            var s;
            (s = window == null ? void 0 : window.lenis) == null || s.start(),
            window.scene ? r = window.scene : (r = new lt(document.querySelector("canvas")),
            await r.setup()),
            r.resumeScene(),
            await r.onResize(null, !0),
            r.__lenis = _.value,
            _.value.isStopped && _.value.start(),
            document.querySelector(".l__menu").classList.add("--stop-animation"),
            N = window.innerWidth < 768 ? 43 : 32.1,
            We(),
            r.soundFile = l;
            const a = (u=null)=>{
                if (!(t != null && t.value))
                    return;
                const c = (l == null ? void 0 : l.currentTime) / (l == null ? void 0 : l.duration);
                let W = u ?? c;
                u && !r.logoVisible && r.animateLogoIn(),
                le = u,
                u && Number.isFinite(l.duration) && (l.currentTime = W * l.duration),
                r.updateAudio(),
                t.value.style.setProperty("--progress", W * 100 + "%"),
                e.set(A.value, {
                    border: `solid ${W * N / 10}rem #A9D92E`
                })
            }
            ;
            d = e.timeline({
                paused: !0,
                duration: 74,
                onUpdate: a
            }),
            r.__TLOnUpdate = a,
            r.__playTL = d,
            await Je(),
            window.stickerEngine || it(),
            Be(),
            Ie(),
            Ye(),
            ue(),
            window.skipToContact && he()
        }
        );
        const qe = ()=>{
            ne = setInterval(()=>{
                n.value && n.value.classList.contains("--hidden") || ae.value === !0 || (e.set(n.value, {
                    scale: 1,
                    opacity: 1
                }),
                e.to(n.value, {
                    scaleX: 1.25,
                    scaleY: 1.5,
                    ease: "expo.inOut",
                    duration: .7
                }),
                e.to(n.value, {
                    opacity: 0,
                    duration: .7,
                    ease: "none"
                }),
                e.set(n.value, {
                    opacity: 1,
                    scale: 1,
                    delay: .7
                }),
                e.set(n.value, {
                    scale: 1,
                    opacity: 1,
                    delay: .725
                }),
                e.to(n.value, {
                    scaleX: 1.25,
                    scaleY: 1.5,
                    ease: "expo.inOut",
                    duration: .7,
                    delay: .725
                }),
                e.to(n.value, {
                    opacity: 0,
                    duration: .7,
                    delay: .725,
                    ease: "none"
                }))
            }
            , 5e3)
        }
          , Be = ()=>{
            (rt() ? ut : ct).captions.forEach((s,u)=>{
                const c = document.createElement("span");
                c.classList.add("subtitle--text"),
                c.classList.add("index-" + u),
                s.linebreak ? (c.classList.add("subtitle--text--linebreak"),
                c.classList.remove("subtitle--text"),
                c.setAttribute("data-start", s.startTime),
                c.innerHTML = s.content + " ") : s.icon ? (c.setAttribute("data-start", s.startTime),
                c.classList.add("subtitle--text--video"),
                K.value.appendChild(c)) : (c.setAttribute("data-start", s.startTime),
                c.innerHTML = s.content + " ")
            }
            ),
            P.value = K.value.querySelectorAll(".subtitle--text")
        }
          , We = ()=>{
            l = document.createElement("audio"),
            l.preload = "auto";
            const a = document.createElement("source");
            a.src = xt,
            l.appendChild(a),
            l.load(),
            l.playbackRate = 1,
            l.addEventListener("canplay", _e),
            l.onended = function() {
                fe()
            }
        }
          , _e = ()=>{
            Fe()
        }
          , Ie = ()=>{
            const a = document.querySelectorAll(".about__network--item");
            e.set([t.value, n.value], {
                left: "calc(50% - 14rem)"
            });
            const s = mt().value;
            s || e.set(".l__menu", {
                filter: "invert(1)"
            });
            const u = e.timeline({
                defaults: {
                    ease: "expo.inOut",
                    duration: 1.5
                },
                delay: s === !0 ? 0 : 7
            });
            u.fromTo(a, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: .025
            }, 0),
            e.set([t.value, n.value, v.value], {
                scale: 0
            }),
            e.to([t.value, n.value, v.value], {
                scale: 1,
                duration: 1.5,
                delay: s === !0 ? -.15 : 7,
                onComplete: ()=>qe(),
                ease: "expo.inOut"
            }),
            u.to(J.value, {
                opacity: 1,
                duration: .6,
                onComplete: ()=>{
                    r.animateIn()
                }
            }, 0),
            s ? u.to(".l__transition", {
                y: 0
            }, 0) : e.set(".l__transition", {
                y: 0
            })
        }
          , Fe = ()=>{
            P.value.forEach((a,s)=>{
                const u = P.value[s + 1];
                let c;
                u ? c = u.dataset.start - a.dataset.start : c = 1;
                const W = Number(a.dataset.start) + Number(c / P.value.length) * s;
                d.to(a, {
                    onStart: ()=>{
                        a.classList.add("--visible")
                    }
                    ,
                    duration: .3,
                    delay: W - .2
                }, 0)
            }
            )
        }
          , Pe = ()=>{
            d.paused() !== !1 && fe()
        }
          , fe = ()=>{
            E || (De(),
            _.value.stop(),
            window.removeEventListener("wheel", x),
            window.removeEventListener("touchmove", x),
            oe = !0,
            w("playover"),
            f.value = "playover")
        }
          , ie = ()=>{
            if (r.animateLogoIn(),
            r.play(),
            ae.value === !1 && (ae.value = !0),
            oe === !0) {
                Me(),
                q && (clearInterval(B),
                q = !1,
                e.to(p.value, {
                    scaleY: 0,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.inOut"
                }),
                e.to(p.value.querySelectorAll("p"), {
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.inOut"
                }));
                return
            }
            if (l.paused) {
                if (_.value.stop(),
                w("pause"),
                f.value = "pause",
                n.value.classList.add("--hidden"),
                le) {
                    l.currentTime = le * l.duration;
                    const a = l.currentTime / (l.duration - 1.6);
                    d.progress(a)
                }
                l.volume = 1,
                l.play(),
                d.resume(),
                h.length > 0 && re()
            } else
                w("play"),
                f.value = "play",
                l.pause(),
                d.pause(),
                _.value.start()
        }
          , w = a=>{
            const s = e.matchMedia();
            a === "play" ? (C = "play",
            e.to(m.value, {
                opacity: 0
            }),
            e.to(V, {
                value: .2,
                duration: .8,
                ease: "none",
                onUpdate: ()=>{
                    t.value.style.setProperty("--backgroundOpacity", V.value)
                }
            }),
            e.to(A.value, {
                opacity: 0,
                duration: 1,
                ease: "expo.inOut"
            }),
            s.add("(min-width: 769px)", ()=>{
                e.fromTo(n.value, {
                    scale: 0
                }, {
                    scale: 1,
                    delay: 1,
                    onComplete: ()=>n.value.classList.remove("--hidden")
                }),
                e.to([t.value, n.value], {
                    width: "27.6rem",
                    height: "8.4rem",
                    top: "3rem",
                    left: "6.4rem",
                    duration: 1.5,
                    delay: -.1,
                    backgroundColor: "#FFF",
                    ease: "expo.inOut",
                    onStart: ()=>{
                        y || t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        y || t.value.classList.remove("--transitioning")
                    }
                }),
                e.set(v.value, {
                    transform: "translate(0)",
                    opacity: 0
                }),
                e.to(v.value, {
                    top: "2.2rem",
                    left: "5.55rem",
                    width: "29.2rem",
                    height: "10rem",
                    scale: 1,
                    opacity: .4,
                    duration: 1.5,
                    ease: "expo.inOut"
                })
            }
            ),
            s.add("(max-width: 768px)", ()=>{
                e.set(n.value, {
                    opacity: 0
                }),
                e.to(n.value, {
                    opacity: 1,
                    delay: 1.5
                }),
                e.to([t.value, n.value], {
                    width: "27.6rem",
                    height: "8.4rem",
                    bottom: "3rem",
                    left: "calc(50% - 13.8rem)",
                    y: 0,
                    backgroundColor: "#FFF",
                    duration: 1.5,
                    ease: "expo.inOut",
                    overwrite: !0,
                    onStart: ()=>{
                        t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        t.value.classList.remove("--transitioning")
                    }
                })
            }
            ),
            e.to(M.value, {
                opacity: 1,
                delay: .4,
                duration: 1,
                ease: "expo.inOut"
            }),
            e.to(D.value, {
                opacity: 0,
                delay: 0,
                ease: "expo.inOut",
                duration: 1
            }),
            e.to(G.value, {
                opacity: 0,
                duration: .2,
                delay: 0,
                ease: "expo.inOut",
                overwrite: !0
            })) : a === "pause" ? (n.value.classList.add("--hidden"),
            e.set(n.value, {
                opacity: 0,
                scale: 0
            }),
            e.to(A.value, {
                opacity: 1,
                delay: .3,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            e.to(V, {
                value: 1,
                duration: .8,
                delay: 1,
                ease: "none",
                overwrite: !0,
                onUpdate: ()=>{
                    y || t.value.style.setProperty("--backgroundOpacity", V.value)
                }
            }),
            C = "pause",
            e.to([t.value, n.value], {
                scale: 1,
                duration: .5,
                delay: -.1,
                ease: "expo.inOut"
            }),
            e.to(M.value, {
                scaleX: 1,
                scaleY: 1,
                duration: .5,
                delay: -.1,
                ease: "expo.inOut"
            }),
            s.add("(min-width: 769px)", ()=>{
                e.to([t.value, n.value], {
                    width: "15.7rem",
                    height: "6.4rem",
                    top: "3rem",
                    left: "6.4rem",
                    delay: .3,
                    duration: 1.5,
                    ease: "expo.inOut",
                    onStart: ()=>{
                        y || t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        y || t.value.classList.remove("--transitioning")
                    }
                }),
                e.set(v.value, {
                    scale: 0,
                    opacity: 0,
                    width: "15.7rem",
                    height: "6.4rem",
                    top: "3rem",
                    left: "6.4rem",
                    overwrite: !0
                })
            }
            ),
            s.add("(max-width: 768px)", ()=>{
                e.to([t.value, n.value], {
                    width: "15.7rem",
                    height: "8.4rem",
                    left: "calc(50% - 7.85rem)",
                    delay: .3,
                    duration: 1.5,
                    ease: "expo.inOut",
                    onStart: ()=>{
                        t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        t.value.classList.remove("--transitioning")
                    }
                }),
                e.to(v.value, {
                    scale: 0,
                    opacity: 0,
                    delay: .3,
                    duration: 1.5,
                    overwrite: !0
                })
            }
            ),
            e.to(M.value, {
                opacity: 0,
                delay: .4,
                duration: .75,
                ease: "expo.inOut"
            }),
            e.to(D.value, {
                opacity: 1,
                delay: .7,
                ease: "expo.inOut",
                duration: 1
            })) : a === "playover" ? (n.value.classList.add("--hidden"),
            C = "playover",
            s.add("(min-width: 769px)", ()=>{
                e.to(t.value, {
                    width: "15.7rem",
                    height: "6.4rem",
                    top: "3rem",
                    left: "6.4rem",
                    delay: .3,
                    duration: 1.5,
                    ease: "expo.inOut",
                    onStart: ()=>{
                        t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        t.value.classList.remove("--transitioning")
                    }
                })
            }
            ),
            s.add("(max-width: 768px)", ()=>{
                e.to(t.value, {
                    width: "15.7rem",
                    height: "8.4rem",
                    left: "calc(50% - 7.85rem)",
                    bottom: "10rem",
                    duration: 1.5,
                    ease: "expo.inOut",
                    overwrite: !0,
                    onStart: ()=>{
                        t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        t.value.classList.remove("--transitioning")
                    }
                })
            }
            ),
            e.to(t.value, {
                backgroundColor: "#000",
                duration: 1,
                ease: "expo.inOut",
                onStart: ()=>{
                    t.value.classList.add("--transitioning")
                }
                ,
                onComplete: ()=>{
                    t.value.classList.remove("--transitioning")
                }
            }),
            e.to(A.value, {
                opacity: 0,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            e.to(G.value, {
                opacity: 1,
                duration: 1.5,
                delay: .3,
                ease: "expo.inOut"
            }),
            e.to(D.value, {
                opacity: 0,
                duration: 1,
                ease: "expo.inOut"
            }),
            e.set(v.value, {
                scale: 0,
                opacity: 0,
                overwrite: !0
            })) : a === "playSmall" && (C = "playsmall",
            n.value.classList.remove("--hidden"),
            s.add("(max-width: 768px)", ()=>{
                e.to([t.value, n.value], {
                    top: "unset",
                    bottom: "3rem",
                    left: "calc(50% - 14rem)",
                    width: "27.6rem",
                    height: "8.4rem"
                }),
                e.to(v.value, {
                    top: "unset",
                    left: "calc(50% - 0.17rem)",
                    width: "29.2rem",
                    height: "10rem",
                    transform: "translate(-50%, 0)"
                })
            }
            ),
            s.add("(min-width: 769px)", ()=>{
                e.to([t.value, n.value], {
                    top: "3rem",
                    left: "6.4rem",
                    duration: 1.5,
                    ease: "expo.inOut",
                    onStart: ()=>{
                        y || t.value.classList.add("--transitioning")
                    }
                    ,
                    onComplete: ()=>{
                        y || t.value.classList.remove("--transitioning")
                    }
                }),
                e.to(v.value, {
                    top: "2.2rem",
                    left: "5.55rem",
                    transform: "translate(0)",
                    duration: 1.5,
                    ease: "expo.inOut",
                    overwrite: !0
                })
            }
            ))
        }
          , Me = async()=>{
            pt(),
            await Ae(1e3),
            oe = !1,
            _.value.start(),
            _.value.scrollTo(0),
            E && r.resumeScene(),
            r.reset(),
            re(),
            document.querySelectorAll(".subtitle--text").forEach(a=>{
                a.classList.remove("--visible")
            }
            ),
            window.addEventListener("wheel", x, {
                passive: !0
            }),
            window.addEventListener("touchmove", x, {
                passive: !0
            }),
            setTimeout(()=>{
                we()
            }
            , 500),
            e.to(k.value, {
                scale: 0,
                duration: 1.4,
                ease: "expo.inOut",
                onComplete: ()=>{
                    e.set(me.value, {
                        pointerEvents: "none"
                    }),
                    k.value.style.pointerEvents = "none"
                }
            }),
            w("play"),
            f.value = "play",
            e.to(Q.value, {
                y: "10rem",
                duration: 1.2,
                ease: "expo.inOut"
            }),
            e.to(Z.value, {
                y: "10rem",
                duration: 1.2,
                ease: "expo.inOut"
            }),
            e.to(g.value, {
                opacity: 0,
                delay: .1,
                duration: 1.2,
                ease: "expo.inOut"
            }),
            E = !1,
            d.revert()
        }
          , De = ()=>{
            q !== !0 && (q = !0,
            S.value = 5,
            X.add("(min-width: 769px)", ()=>{
                e.to(p.value, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "expo.inOut"
                })
            }
            ),
            X.add("(max-width: 768px)", ()=>{
                e.to(p.value, {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    overwrite: !0,
                    duration: 1.5,
                    ease: "expo.inOut"
                }),
                e.to([t.value, n.value], {
                    y: -90,
                    opacity: 0,
                    duration: 1.5,
                    ease: "expo.inOut"
                })
            }
            ),
            e.to(p.value.querySelectorAll("p"), {
                opacity: 1,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            setTimeout(()=>{
                B = setInterval(()=>{
                    switch (S.value--,
                    S.value) {
                    case 5:
                        b.value = "five";
                        break;
                    case 4:
                        b.value = "four";
                        break;
                    case 3:
                        b.value = "three";
                        break;
                    case 2:
                        b.value = "two";
                        break;
                    case 1:
                        b.value = "one";
                        break;
                    case 0:
                        b.value = "zero";
                        break
                    }
                    S.value === 0 && (clearInterval(B),
                    he())
                }
                , 1e3)
            }
            , 1e3))
        }
          , he = ()=>{
            var s;
            window.skipToContact || (s = r == null ? void 0 : r.animateOut) == null || s.call(r);
            const a = e.timeline({
                defaults: {
                    ease: "power4.inOut",
                    duration: 1.5
                }
            });
            e.to([t.value, n.value], {
                opacity: 0,
                duration: 1.2,
                pointerEvents: "none",
                ease: "expo.inOut"
            }),
            e.set(g.value, {
                opacity: 1
            }),
            e.set([H.value, U.value, R.value], {
                display: "block",
                scale: 0,
                opacity: 1
            }),
            e.set(g.value, {
                backgroundColor: "transparent"
            }),
            X.add("(min-width: 769px)", ()=>{
                e.to(p.value, {
                    scale: 0,
                    duration: 1.5,
                    ease: "expo.inOut"
                })
            }
            ),
            X.add("(max-width: 768px)", ()=>{
                e.to(p.value, {
                    y: 90,
                    duration: 1.5,
                    ease: "expo.inOut"
                }),
                e.to([t.value, n.value], {
                    y: 0,
                    duration: 1.5,
                    ease: "expo.inOut"
                })
            }
            ),
            e.to(p.value.querySelectorAll("p"), {
                opacity: 0,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            a.to(H.value, {
                scale: 14,
                zIndex: 102
            }, 0),
            e.set(H.value, {
                display: "none",
                opacity: 0,
                delay: .8
            }),
            e.set(g.value, {
                backgroundColor: "#FFF",
                delay: .8
            }),
            a.to(U.value, {
                scale: 14.1,
                delay: .4,
                zIndex: 104,
                onStart: ()=>Re()
            }, 0),
            e.set(U.value, {
                display: "none",
                opacity: 0,
                delay: 1.6
            }),
            e.set(g.value, {
                backgroundColor: "#000",
                delay: 1.6
            }),
            a.to(R.value, {
                scale: 14.2,
                delay: .8,
                zIndex: 106
            }, 0),
            e.set(R.value, {
                display: "none",
                opacity: 0,
                delay: 2.4
            }),
            e.set(g.value, {
                backgroundColor: "transparent",
                delay: 2.4,
                onComplete: ()=>{
                    q = !1
                }
            }),
            e.to([t.value, n.value], {
                opacity: 1,
                duration: 1.2,
                delay: 1.8,
                pointerEvents: "all",
                ease: "expo.inOut"
            }),
            k.value.style.pointerEvents = "all",
            m.value.style.pointerEvents = "all"
        }
          , Re = ()=>{
            const a = e.timeline({
                defaults: {
                    ease: "expo.inOut"
                },
                onComplete: ()=>{
                    e.set([t.value, n.value], {
                        pointerEvents: "all"
                    })
                }
            });
            _.value.stop(),
            w("playover"),
            f.value = "playover",
            window.innerWidth < 768 && a.to(t.value, {
                scale: 0
            }, 0),
            dt(),
            a.to(k.value, {
                scale: 1,
                duration: 1.5,
                delay: .3,
                ease: "expo.inOut",
                onComplete: ()=>{
                    setTimeout(()=>{
                        vt()
                    }
                    , 1e3)
                }
            }, 0),
            a.to(m.value, {
                opacity: 1,
                duration: 1
            }, 1.2),
            a.to([Q.value, Z.value], {
                y: 0,
                duration: 1.9,
                stagger: .03,
                delay: .6,
                ease: "power4.inOut"
            }, 0),
            E = !0
        }
          , we = ()=>{
            if (h.length > 0)
                return;
            document.querySelectorAll(".SplitTextJS-line").forEach(s=>{
                s.querySelectorAll(".subtitle--text"),
                h.push($.create({
                    trigger: s,
                    start: window.innerWidth > 768 ? "top 60%" : "top 50%",
                    end: window.innerWidth > 768 ? "bottom 65%" : "top 55%",
                    scrub: 1,
                    onUpdate: u=>{}
                }))
            }
            ),
            $.create({
                trigger: ".l__about",
                start: "bottom-=50 bottom",
                end: "top bottom",
                onEnter: ()=>{
                    Pe()
                }
            })
        }
          , re = ()=>{
            h.length !== 0 && (h.forEach(a=>{
                a.kill()
            }
            ),
            h = [])
        }
          , Ue = ()=>{
            window.innerWidth < 769 || (w("playSmall"),
            f.value = "playsmall",
            se = !0)
        }
          , x = a=>{
            h.length > 0 || (d.paused() === !0 && we(),
            se !== !0 && Ue())
        }
          , xe = ()=>{
            $.refresh(),
            se === !1 && E === !1 && (w("playSmall"),
            f.value = "playsmall"),
            N && (N = window.innerWidth > 768 ? 43 : 32.1),
            w(f.value)
        }
          , be = a=>{
            Y.x = a.clientX / window.innerWidth,
            Y.y = a.clientY / window.innerHeight
        }
          , ue = ()=>{
            y || window.innerWidth < 768 || E === !1 || (T.x = Se(T.x, Y.x, .05),
            T.y = Se(T.y, Y.y, .05),
            L.value && (L.value.style.transform = `translate3d(${(T.x - .5) * window.innerWidth - L.value.offsetWidth / 2}px, ${(T.y - .5) * window.innerHeight - L.value.offsetHeight / 2}px, 0)`)),
            window.requestAnimationFrame(ue)
        }
          , ge = ()=>{
            C === "play" && e.to(v.value, {
                scaleX: 1.02,
                scaleY: 1.01,
                opacity: 1,
                duration: .8
            })
        }
          , ke = ()=>{
            C === "play" && e.to(v.value, {
                scaleX: 1,
                scaleY: 1,
                opacity: .4,
                duration: .4
            })
        }
          , He = ()=>{
            e.to(L.value, {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                delay: -.4,
                ease: "expo.inOut",
                overwrite: !0
            })
        }
          , ze = ()=>{
            e.to(L.value, {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                delay: -.4,
                ease: "expo.inOut",
                overwrite: !0
            })
        }
          , Ve = ()=>{
            z || (z = !0,
            m.value.classList.add("--active"),
            e.to(ee.value, {
                y: "-130%",
                x: 0,
                duration: 1.1,
                ease: "expo.inOut",
                delay: -.3
            }),
            e.to(te.value, {
                y: 0,
                duration: 1.1,
                ease: "expo.inOut",
                delay: -.1
            }),
            setTimeout(()=>{
                e.to(ee.value, {
                    y: window.innerWidth < 768 ? "130%" : 0,
                    x: 0,
                    duration: 1.1,
                    ease: "expo.inOut",
                    delay: -.3,
                    overwrite: !0
                }),
                e.to(te.value, {
                    y: "150%",
                    duration: 1.1,
                    ease: "expo.inOut",
                    delay: -.3,
                    onComplete: ()=>{
                        m.value.classList.remove("--active")
                    }
                }),
                z = !1
            }
            , 5e3))
        }
          , Ye = ()=>{
            window.togglePlay = ie,
            t.value.addEventListener("click", ie),
            window.addEventListener("wheel", x, {
                passive: !0
            }),
            window.addEventListener("touchmove", x, {
                passive: !0
            }),
            window.addEventListener("resize", xe),
            window.addEventListener("mousemove", be),
            t.value.addEventListener("mouseenter", ge),
            t.value.addEventListener("mouseleave", ke),
            k.value.addEventListener("mouseenter", He),
            k.value.addEventListener("mouseleave", ze),
            m.value.addEventListener("click", Ve),
            m.value.style.pointerEvents = "none"
        }
        ;
        return Ge(()=>{
            y = !0,
            d.pause(),
            B && clearInterval(B),
            ne && clearInterval(ne),
            document.querySelector(".l__menu").classList.remove("--stop-animation"),
            r.pauseScene(),
            e.set(J.value, {
                background: "transparent",
                overwrite: !0
            }),
            t.value.removeEventListener("click", ie),
            window.removeEventListener("wheel", x),
            window.removeEventListener("touchmove", x),
            window.removeEventListener("mousemove", be),
            t.value.removeEventListener("mouseenter", ge),
            t.value.removeEventListener("mouseleave", ke),
            l.removeEventListener("canplaythrough", _e),
            window.removeEventListener("resize", xe),
            l.pause(),
            l.currentTime = 0,
            e.to(ye.value, {
                y: 0,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            e.to(m.value, {
                opacity: 0
            }),
            z = !1,
            e.to(".about__networks a img", {
                opacity: 0,
                duration: .6,
                ease: "expo.inOut",
                overwrite: !0
            }),
            e.to(".SplitTextJS-line", {
                transform: "perspective(100vw) rotateY(-90deg) scale(0.8)",
                opacity: 0,
                duration: 1.2,
                stagger: .02,
                ease: "expo.inOut"
            }),
            e.to(n.value, {
                opacity: 0,
                scale: 0,
                duration: 1.5,
                ease: "expo.inOut"
            }),
            e.to(".content", {
                opacity: 0,
                duration: 1.2,
                ease: "expo.inOut"
            }),
            setTimeout(()=>{
                window.cancelAnimationFrame(ue),
                d.revert(),
                d.kill(),
                d = null,
                h.length > 0 && re(),
                $.getAll().forEach(a=>{
                    a.kill()
                }
                )
            }
            , 1e3)
        }
        ),
        at({
            meta: [{
                name: "theme-color",
                content: "#cdfd50"
            }]
        }),
        (a,s)=>(ce(),
        de(Le, null, [o("div", {
            ref_key: "credits",
            ref: m,
            class: "about__contact--credits"
        }, [o("span", {
            ref_key: "creditsLabel",
            ref: ee,
            class: "credits--label"
        }, "Credits", 512), o("div", {
            ref_key: "creditsContent",
            ref: te,
            class: "credits--content"
        }, kt, 512)], 512), Lt, o("div", {
            ref_key: "el",
            ref: J,
            class: "l__about"
        }, [o("div", {
            ref_key: "aboutBlackTransition",
            ref: ye,
            class: "about__black-transition"
        }, null, 512), o("div", Ot, [(ce(!0),
        de(Le, null, Ke(j(Te).data.links, u=>(ce(),
        de("a", {
            href: u.link_url.url,
            target: "_blank",
            class: "about__network--item",
            key: u.link_url.url
        }, [Ct, o("img", {
            class: "about__network--icon",
            src: u.link_icon.url,
            alt: u.link_icon.alt
        }, null, 8, Et)], 8, St))), 128))]), o("div", Tt, [o("div", {
            ref_key: "contentContainer",
            ref: K,
            class: "subtitle"
        }, null, 512)]), o("div", {
            ref_key: "playAudioTilt",
            ref: n,
            class: "play__audio--tilt"
        }, null, 512), o("div", {
            ref_key: "playAudio",
            ref: t,
            class: "play__audio"
        }, [o("div", {
            ref_key: "marqueeBorder",
            ref: A,
            class: "marquee__border"
        }, null, 512), o("div", {
            ref_key: "playAudioContent",
            ref: M,
            class: "play__audio--content"
        }, Bt, 512), o("div", {
            ref_key: "playAudioPause",
            ref: D,
            class: "play__audio--pause"
        }, It, 512), o("div", {
            ref_key: "playAudioStartOver",
            ref: G,
            class: "play__audio--start-over"
        }, Pt, 512)], 512), o("div", {
            ref_key: "playBackground",
            ref: v,
            class: "play__audio--background"
        }, null, 512), o("div", Mt, [o("div", {
            ref_key: "selfDestructBand",
            ref: p,
            class: "self-destruct__band"
        }, [o("p", Dt, ve(j(S).value), 1), o("p", Rt, " This message will self destruct in " + ve(j(b) || "five") + "... ", 1), o("p", Ut, ve(j(S).value), 1)], 512)]), o("div", {
            class: "about__transition",
            ref_key: "aboutTransition",
            ref: g
        }, [o("img", {
            id: "preloader__star-white",
            class: "about__transition--star",
            src: ot,
            alt: "Star White",
            ref_key: "starWhite",
            ref: H
        }, null, 512), o("img", {
            id: "preloader__star-black",
            class: "about__transition--star",
            src: st,
            alt: "Star Black",
            ref_key: "starBlack",
            ref: U
        }, null, 512), o("img", {
            id: "preloader__star-volt",
            class: "about__transition--star",
            src: nt,
            alt: "Star Volt",
            ref_key: "starVolt",
            ref: R
        }, null, 512)], 512), o("div", Ht, [o("div", {
            ref_key: "aboutContactContainer",
            ref: me,
            class: "about__contact"
        }, [o("a", zt, [o("img", {
            class: "contactCircleImg",
            ref_key: "contactCircle",
            ref: k,
            src: ht,
            alt: "Contact Circle"
        }, null, 512)]), o("div", {
            ref_key: "emailHover",
            ref: L,
            class: "email__hover"
        }, Yt, 512), o("p", Nt, [o("span", {
            ref_key: "contactText",
            ref: Q
        }, "Want to work with us?", 512), o("span", {
            ref_key: "contactText2",
            ref: Z
        }, "Drop us a line.", 512)])], 512)])], 512)], 64))
    }
}
  , ea = yt(Xt, [["__scopeId", "data-v-db972e77"]]);
export {ea as default};
