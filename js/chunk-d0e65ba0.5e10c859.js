(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0e65ba0"],{"1c95":function(t,e,n){"use strict";var i=n("740e"),s=n.n(i);s.a},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),s=n("825a"),o=n("d039"),r=n("ad6d"),c="toString",a=RegExp.prototype,u=a[c],d=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(d||l)&&i(RegExp.prototype,c,(function(){var t=s(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in a)?r.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2a6c":function(t,e,n){"use strict";var i=n("e8c4"),s=n.n(i);s.a},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),o=n("b622"),r=o("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"45f9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-list"},t._l(t.goods,(function(t){return n("goods-list-item",{staticClass:"item",attrs:{"goods-item":t}})})),1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.showImage,expression:"showImage"}],key:t.showImage,on:{load:t.imgLoad}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},r=[],c={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.img||this.goodsItem.image||this.goodsItem.show.img}},methods:{itemClick:function(){var t=this.goodsItem.iid;this.$router.push({path:"/detail"+t})},imgLoad:function(){this.$bus.$emit("imgLoad")}}},a=c,u=(n("c4c8"),n("2877")),d=Object(u["a"])(a,o,r,!1,null,"0c0dfee4",null),l=d.exports,f={name:"goodsList",components:{goodsListItem:l},props:{goods:{type:Array,default:function(){return[]}}}},h=f,A=(n("1c95"),Object(u["a"])(h,i,s,!1,null,"5c7e5395",null));e["a"]=A.exports},"4d63":function(t,e,n){var i=n("83ab"),s=n("da84"),o=n("94ca"),r=n("7156"),c=n("9bf2").f,a=n("241c").f,u=n("44e7"),d=n("ad6d"),l=n("9f7f"),f=n("6eeb"),h=n("d039"),A=n("69f3").set,v=n("2626"),m=n("b622"),p=m("match"),g=s.RegExp,b=g.prototype,D=/a/g,x=/a/g,w=new g(D)!==D,C=l.UNSUPPORTED_Y,I=i&&o("RegExp",!w||C||h((function(){return x[p]=!1,g(D)!=D||g(x)==x||"/a/i"!=g(D,"i")})));if(I){var P=function(t,e){var n,i=this instanceof P,s=u(t),o=void 0===e;if(!i&&s&&t.constructor===P&&o)return t;w?s&&!o&&(t=t.source):t instanceof P&&(o&&(e=d.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=r(w?new g(t,e):g(t,e),i?this:b,P);return C&&n&&A(c,{sticky:n}),c},y=function(t){t in P||c(P,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},E=a(g),T=0;while(E.length>T)y(E[T++]);b.constructor=P,P.prototype=b,f(s,"RegExp",P)}v("RegExp")},"53db":function(t,e,n){},"684a":function(t,e){t.exports="data:image/png;base64,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"},"740e":function(t,e,n){},"90b9":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));n("4d63"),n("ac1f"),n("25f0"),n("5319");function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in n)if(new RegExp("(".concat(i,")")).test(e)){var o=n[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:s(o))}return e}function s(t){return("00"+t).substr(t.length)}function o(t,e){var n;return function(){var i=this,s=arguments;n&&clearTimeout(n),n=setTimeout((function(){t.apply(i,s)}),e)}}},"987e":function(t,e,n){},a137:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");var i=n("cebe"),s=n.n(i);function o(t){return new Promise((function(e,n){var i=s.a.create({baseURL:"http://152.136.185.210:8000/api/n3",timeout:5e3});i.interceptors.response.use((function(t){return t.data})),i(t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}},aff8:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f}));var i=n("90b9"),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-top"},[i("img",{attrs:{src:n("684a")}})])}],r={name:"backTop",components:{},data:function(){return{}},computed:{},methods:{}},c=r,a=(n("f0d3"),n("2877")),u=Object(a["a"])(c,s,o,!1,null,"c5671d16",null),d=u.exports,l={data:function(){return{itemImgLoad:null}},mounted:function(){var t=Object(i["a"])(this.$refs.scroll.refresh,5);this.itemImgLoad=function(){t()},this.$bus.$on("imgLoad",this.itemImgLoad)}},f={data:function(){return{scrollY:0,showBack:!1}},components:{backTop:d},methods:{backClick:function(){this.$refs.scroll.ScrollTo(0,0)},backTopShow:function(t){this.showBack=-t.y>1e3}}}},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,o=Function.prototype,r=o.toString,c=/^\s*function ([^ (]*)/,a="name";i&&!(a in o)&&s(o,a,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},c4c8:function(t,e,n){"use strict";var i=n("dadd"),s=n.n(i);s.a},dadd:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return v}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Abe_swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentItem-1}})}))):t._e()],2)])},s=[],o=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},components:{},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},methods:{handleDom:function(){var t=document.querySelector(".swiper"),e=document.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.appendChild(n),t.insertBefore(i,e[0]),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style,this.setTransform(-this.totalWidth)}},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},startTime:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.srcollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer),this.playTimer=null},srcollContent:function(t){this.scroll=!0,this.swiperStyle.transition="transform 300ms",this.setTransform(t),this.checkPosition(),this.scroll=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1&&(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)),t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},touchStart:function(t){this.scroll||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.distance=t.touches[0].pageX-this.startX;var e=Math.abs(this.distance);if(e<=this.totalWidth){var n=-this.currentIndex*this.totalWidth+this.distance;this.setTransform(n)}},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>.25*this.totalWidth?this.currentIndex--:this.distance<0&&e>.25*this.totalWidth&&this.currentIndex++,this.srcollContent(-this.currentIndex*this.totalWidth),this.startTime())}},computed:{currentItem:function(){return 0===this.currentIndex?this.slideCount:this.currentIndex===this.slideCount+1?1:this.currentIndex}},mounted:function(){var t=this;window.setTimeout((function(){t.handleDom(),t.startTime()}),300)}}),r=o,c=(n("2a6c"),n("2877")),a=Object(c["a"])(r,i,s,!1,null,"029542ce",null),u=a.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},l=[],f={name:"Slide"},h=f,A=(n("e997"),Object(c["a"])(h,d,l,!1,null,"7fb4991e",null)),v=A.exports},e8c4:function(t,e,n){},e997:function(t,e,n){"use strict";var i=n("53db"),s=n.n(i);s.a},f0d3:function(t,e,n){"use strict";var i=n("987e"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-d0e65ba0.5e10c859.js.map