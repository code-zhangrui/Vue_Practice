webpackJsonp([0,2],[,,function(e,t,r){r(17);var n=r(0)(r(24),r(9),null,null);e.exports=n.exports},function(e,t,r){"use strict";var n=r(1),s=r(23),a=r(4),i=r.n(a);n.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Hello",component:i.a}]})},function(e,t,r){r(16);var n=r(0)(r(25),r(8),"data-v-00bf60c0",null);e.exports=n.exports},function(e,t,r){r(20);var n=r(0)(r(26),r(12),"data-v-b7d200c8",null);e.exports=n.exports},function(e,t,r){r(18);var n=r(0)(r(27),r(10),null,null);e.exports=n.exports},function(e,t,r){r(19);var n=r(0)(r(28),r(11),"data-v-a6714880",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[r("header",[r("Topbar")],1),e._v(" "),r("main",[r("ResumeEditor"),e._v(" "),r("ResumePreview")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"resumePreview"}},[e._v("\n I am resume Preview\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"topbar"}},[r("div",{staticClass:"wrapper"},[r("span",{staticClass:"logo"},[e._v("Resume")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"resumeEditor"}},[r("nav",[r("ol",e._l(e.resume.config,function(t,n){return r("li",{class:{active:t.field===e.selected},on:{click:function(r){e.selected=t.field}}},[e._v(" "+e._s(n)+" ")])}))]),e._v(" "),r("ol",{staticClass:"panels"},e._l(e.resume.config,function(t){return r("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field===selected"}]},[e.resume[t.field]instanceof Array?r("div",e._l(e.resume[t.field],function(t){return r("div",{staticClass:"subitem"},[e._l(t,function(t,n){return r("div",{staticClass:"resumeField"},[r("label",[e._v(e._s(n))]),e._v(" "),r("input",{attrs:{type:"text"},domProps:{value:t}})])}),e._v(" "),r("hr")],2)})):e._l(e.resume[t.field],function(n,s){return r("div",{staticClass:"resumeField"},[r("label",[e._v(e._s(s))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.resume[t.field][s],expression:"resume[item.field][key]"}],attrs:{type:"text"},domProps:{value:e.resume[t.field][s]},on:{input:function(r){if(!r.target.composing){var n=e.resume[t.field],a=s;Array.isArray(n)?n.splice(a,1,r.target.value):e.resume[t.field][s]=r.target.value}}}})])})],2)}))])},staticRenderFns:[]}},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(14),s=(r.n(n),r(15)),a=(r.n(s),r(7)),i=r.n(a),o=r(5),u=r.n(o),c=r(6),l=r.n(c),v=r(29);t.default={name:"app",store:v.a,components:{Topbar:i.a,ResumeEditor:u.a,ResumePreview:l.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumeEditor",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumePreview"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Topbar"}},function(e,t,r){"use strict";var n=r(21);r(1).a.use(n.a),t.a=new n.a.Store({state:{selected:"profile",resume:{config:[{field:"profile"},{field:"work history"},{field:"education"},{field:"projects"},{field:"awards"},{field:"contacts"}],profile:{name:"",city:"",title:""},"work history":[{company:"AL",content:"我的第二份工作是"},{company:"TX",content:"我的第一份工作是"}],education:[{school:"AL",content:"文字"},{school:"TX",content:"文字"}],projects:[{name:"project A",content:"文字"},{name:"project B",content:"文字"}],awards:[{name:"awards A",content:"文字"},{name:"awards B",content:"文字"}],contacts:[{contact:"phone",content:"13812345678"},{contact:"qq",content:"12345678"}]}},mutations:{switchTab:function(e,t){e.selected=t}}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),s=r(2),a=r.n(s),i=r(3);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})}],[30]);
//# sourceMappingURL=app.6ea3c36760596476b60b.js.map