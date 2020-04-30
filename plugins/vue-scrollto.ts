import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  // デフォルトのオプションとかはここで設定
  offset: -100 // ヘッダ分を考慮
});

export default function(ctx, inject) {
  inject("scrollTo", VueScrollTo.scrollTo);
}