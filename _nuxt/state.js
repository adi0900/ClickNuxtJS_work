import {f as s, D as t} from "./entry.js";
const d = ()=>t("firstLoaded", ()=>!1)
  , i = s({
    imagesLength: null,
    imagesLoaded: 0,
    percent: 0,
    loaded: !1,
    setImagesLength(e) {
        this.imagesLength = e
    },
    incrementImagesLoaded() {
        this.imagesLoaded++,
        this.checkComplete()
    },
    checkComplete() {
        this.percent = this.imagesLoaded / this.imagesLength * 100
    },
    setLoaded() {
        this.loaded = !0
    }
});
export {i as s, d as u};
