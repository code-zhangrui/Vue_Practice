webpackJsonp([0,2],[,,function(e,t,n){n(18);var s=n(0)(n(25),n(10),null,null);e.exports=s.exports},function(e,t,n){"use strict";var s=n(1),r=n(24),a=n(5),o=n.n(a);s.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:o.a}]})},,function(e,t,n){n(17);var s=n(0)(n(26),n(9),"data-v-00bf60c0",null);e.exports=s.exports},function(e,t,n){n(21);var s=n(0)(n(27),n(13),"data-v-b7d200c8",null);e.exports=s.exports},function(e,t,n){n(19);var s=n(0)(n(28),n(11),null,null);e.exports=s.exports},function(e,t,n){n(20);var s=n(0)(n(29),n(12),"data-v-a6714880",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("header",[n("Topbar")],1),e._v(" "),n("main",[n("ResumeEditor"),e._v(" "),n("ResumePreview")],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"resumePreview"}},[n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.profile,expression:"resume.profile"}],attrs:{"data-name":"profile"}},[n("h1",[e._v("\n      "+e._s(e.resume.profile.name)+"\n    ")]),e._v(" "),n("h2",[e._v(e._s(e.resume.profile.title))]),e._v(" "),n("p",[e._v("\n       "+e._s(e.resume.profile.city)+"\n    ")])]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education,expression:"resume.education"}],attrs:{"data-name":"projects"}},[n("h2",[e._v("项目经历")]),e._v(" "),n("ol",e._l(e.resume.projects,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.workHistory,expression:"resume.workHistory"}],attrs:{"data-name":"workHistory"}},[n("h2",[e._v("工作经历")]),e._v(" "),n("ol",e._l(e.resume.workHistory,function(t){return n("li",[n("h3",[e._v(e._s(t.company))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.education,expression:"resume.education"}],attrs:{"data-name":"education"}},[n("h2",[e._v("毕业院校")]),e._v(" "),n("ol",e._l(e.resume.education,function(t){return n("li",[n("h3",[e._v(e._s(t.school)+"\n            "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" - "+e._s(t.content)+" ")])])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.awards,expression:"resume.awards"}],attrs:{"data-name":"awards"}},[n("h2",[e._v("获奖情况")]),e._v(" "),n("ol",e._l(e.resume.awards,function(t){return n("li",[n("h3",[e._v(e._s(t.name))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.resume.contacts,expression:"resume.contacts"}],attrs:{"data-name":"contacts"}},[n("h2",[e._v("联系方式")]),e._v(" "),n("table",e._l(e.resume.contacts,function(t){return n("tr",[n("td",[e._v(e._s(t.contact))]),e._v(" "),n("td",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"item.content"}]},[e._v(" "+e._s(t.content)+" ")])])}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"topbar"}},[n("div",{staticClass:"wrapper"},[n("span",{staticClass:"logo"},[e._v("文本编辑器")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"resumeEditor"}},[n("nav",[n("ol",e._l(e.resume.config,function(t,s){return n("li",{class:{active:t.field===e.selected},on:{click:function(n){e.selected=t.field}}},[e._v(" "+e._s(t.field)+" ")])}))]),e._v(" "),n("ol",{staticClass:"panels"},e._l(e.resume.config,function(t){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.field===e.selected,expression:"item.field===selected"}]},[e.resume[t.field]instanceof Array?n("div",e._l(e.resume[t.field],function(s,r){return n("div",{staticClass:"subitem"},[e._l(s,function(s,a){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(a))]),e._v(" "),n("input",{attrs:{type:"text"},domProps:{value:s},on:{input:function(n){e.changeResumeField(t.field+"."+r+"."+a,n.target.value)}}})])}),e._v(" "),n("hr")],2)})):e._l(e.resume[t.field],function(s,r){return n("div",{staticClass:"resumeField"},[n("label",[e._v(e._s(r))]),e._v(" "),n("input",{attrs:{type:"text"},domProps:{value:s},on:{input:function(n){e.changeResumeField(t.field+"."+r,n.target.value)}}})])})],2)}))])},staticRenderFns:[]}},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(15),r=(n.n(s),n(16)),a=(n.n(r),n(8)),o=n.n(a),i=n(6),u=n.n(i),c=n(7),l=n.n(c),v=n(30);t.default={name:"app",store:v.a,components:{Topbar:o.a,ResumeEditor:u.a,ResumePreview:l.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumeEditor",computed:{selected:{get:function(){return this.$store.state.selected},set:function(e){return this.$store.commit("switchTab",e)}},resume:function(){return this.$store.state.resume}},methods:{changeResumeField:function(e,t){this.$store.commit("updateResume",{path:e,value:t})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ResumePreview",computed:{resume:function(){return this.$store.state.resume}},created:function(){console.log(this.resume)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Topbar"}},function(e,t,n){"use strict";var s=n(22),r=n(1),a=n(4),o=n.n(a);r.a.use(s.a),t.a=new s.a.Store({state:{selected:"profile",resume:{config:[{field:"profile"},{field:"workHistory"},{field:"education"},{field:"projects"},{field:"awards"},{field:"contacts"}],profile:{name:"张睿",city:"杭州",title:"前端工程师",birthday:""},workHistory:[{company:"自由职业",content:"我的第二份工作是前端工程师"},{company:"广西民族博物馆",content:"我的第一份工作是微信编辑"}],education:[{school:"苏州科技学院",content:"本科肄业"},{school:"韩国汉阳大学",content:"本科毕业"}],projects:[{name:"❤基于 Vue 的在线文本编辑器",content:"利用 Vue 框架设计的一款在线文本编辑器。"},{name:"❤基于 Vue 的迷你云便签",content:"利用 Vue 框架设计的一款迷你云便签，功能包括注册、登入、登出、记录、读取等。"},{name:"❤音乐播放器",content:"功能齐全，包括播放、快进、换频道等。"},{name:"❤jQuery组件库",content:"利封装的一系列组件，包括轮播、标签、回到顶部、模态框等。"}],awards:[{name:"好儿童",content:"曾荣获幼儿园「好儿童」称号"},{name:"火车王",content:"曾在黑上踩碎龙蛋，15秒内击杀50只小龙获得「火车王」头衔"}],contacts:[{contact:"phone",content:"18878989821"},{contact:"email",content:"code.zhangrui@gmail.com"}]}},mutations:{switchTab:function(e,t){e.selected=t},updateResume:function(e,t){var n=t.path,s=t.value;o.a.set(e.resume,n,s)}}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),r=n(2),a=n.n(r),o=n(3);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})}],[31]);
//# sourceMappingURL=app.f7846cf3ecadb269c428.js.map