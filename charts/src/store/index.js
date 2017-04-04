import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
       selected:'profile',
       resume:{
        config:
           [
             { field: 'profile'},
             { field: 'workHistory'},
             { field: 'education'},
             { field: 'projects'},
             { field: 'awards'},
             { field: 'contacts'},
           ],
        profile:{name:'张睿',city:'上海',title:'前端工程师',birthday:''},
        workHistory: [
             { company: '自由职业', content: '我的第二份工作是前端工程师' },
             { company: '广西民族博物馆', content: '我的第一份工作是微信编辑' },
           ],
           education: [
             { school: '苏州科技学院', content: '本科肄业' },
             { school: '韩国汉阳大学', content: '本科毕业' },
           ],
           projects: [
             { name: '❤基于 Vue 的在线文本编辑器', content: '利用 Vue 框架设计的一款在线文本编辑器。' },
             { name: '❤基于 Vue 的迷你云便签', content: '利用 Vue 框架设计的一款迷你云便签，功能包括注册、登入、登出、记录、读取等。' },
             { name: '❤音乐播放器', content: '功能齐全，包括播放、快进、换频道等。' },
             { name: '❤jQuery组件库', content: '利封装的一系列组件，包括轮播、标签、回到顶部、模态框等。' },

           ],
           awards: [
             { name: '好儿童', content: '曾荣获幼儿园「好儿童」称号' },
             { name: '火车王', content: '曾在黑上踩碎龙蛋，15秒内击杀50只小龙获得「火车王」头衔' },
           ],
           contacts: [
             { contact: 'phone', content: '18878989821' },
             { contact: 'email', content: 'code.zhangrui@gmail.com' },
           ],
	    }
	},
	mutations:{
		switchTab(state,payload){
			state.selected = payload
		},
		updateResume(state,{path,value}){
			objectPath.set(state.resume,path,value)
		}
	}
})