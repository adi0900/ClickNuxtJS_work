import {g as e} from "./entry.js";
function p(t, n, r) {
    return e.utils.interpolate(t, n, r)
}
function c(t, n, r, o, a) {
    return e.utils.mapRange(n, r, o, a, t)
}
const i = (t,n)=>{
    const r = t.__vccOpts || t;
    for (const [o,a] of n)
        r[o] = a;
    return r
}
;
export {i as _, p as l, c as m};
