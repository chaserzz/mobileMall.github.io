(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f9f3d32"],{"0dcd":function(t,e,s){"use strict";var a=s("e3b9"),r=s.n(a);r.a},"0f9e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("register-nav-bar"),a("register-detail"),a("img",{staticClass:"image",attrs:{src:s("fa48")}}),a("copy-write"),a("div",{staticClass:"block"})],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-navbar"},[a("nav-bar",[a("div",{attrs:{slot:"left"},slot:"left"},[a("div",{attrs:{slot:"left"},slot:"left"},[a("img",{staticClass:"backImg",attrs:{src:s("7a74")},on:{click:t.back}})])]),a("div",{attrs:{slot:"center"},slot:"center"},[t._v("账号登录")])])],1)},i=[],o=s("a7ac"),c={name:"RegisterNavBar",components:{NavBar:o["a"]},data:function(){return{}},computed:{},methods:{back:function(){this.$router.go(-1)}}},u=c,l=(s("eafc"),s("2877")),d=Object(l["a"])(u,n,i,!1,null,"b003cd54",null),m=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-detail"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"用户名/邮箱/手机号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"btn"},[s("button",{on:{click:t.registerBtn}},[t._v("一键注册并登录")])])])},p=[],v={name:"RegisterDetail",components:{},data:function(){return{username:"",password:""}},computed:{},methods:{registerBtn:function(){if(this.username!=localStorage.getItem("userName")){if(""===this.username)return void this.$toast.show("请先输入用户名",2e3);if(""===this.password)return void this.$toast.show("请输入密码",2e3);localStorage.setItem("isLogin",!0),localStorage.setItem("userName",this.username),localStorage.setItem("passWord",this.password),this.$toast.show("登录成功",1e3),this.username="",this.password="",this.$router.push("/profile")}else if(this.password!=localStorage.getItem.passWord)return this.$toast.show("密码输入错误,请重新输入",2e3),void(this.password="")}}},g=v,h=(s("fe49"),Object(l["a"])(g,f,p,!1,null,"0e7b6d6c",null)),w=h.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copy-write"},[s("div",{staticClass:"content"},[t._v("所有数据仅为学习所用")])])}],C={name:"CopyWrite",components:{},data:function(){return{}},computed:{},methods:{}},$=C,k=(s("d7c5"),Object(l["a"])($,b,_,!1,null,"2a16a612",null)),x=k.exports,N={name:"Register",components:{RegisterNavBar:m,RegisterDetail:w,CopyWrite:x},data:function(){return{}},computed:{},methods:{}},j=N,y=(s("8bc7"),Object(l["a"])(j,a,r,!1,null,"1f0432fd",null));e["default"]=y.exports},"3a10":function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"8bc7":function(t,e,s){"use strict";var a=s("a7c0"),r=s.n(a);r.a},a7ac:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("div",{staticClass:"left"},[t._t("left")],2),s("div",{staticClass:"center"},[t._t("center")],2),s("div",{staticClass:"right"},[t._t("right")],2)])},r=[],n={name:"NavBar",components:{},data:function(){return{}},computed:{},methods:{}},i=n,o=(s("0dcd"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"54573e6c",null);e["a"]=c.exports},a7c0:function(t,e,s){},d743:function(t,e,s){},d7c5:function(t,e,s){"use strict";var a=s("ea45"),r=s.n(a);r.a},e3b9:function(t,e,s){},ea45:function(t,e,s){},eafc:function(t,e,s){"use strict";var a=s("3a10"),r=s.n(a);r.a},fa48:function(t,e,s){t.exports=s.p+"img/mogujie.ee440269.jpg"},fe49:function(t,e,s){"use strict";var a=s("d743"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-8f9f3d32.aa264edb.js.map