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
        profile:{name:'张睿',city:'杭州',title:'前端工程师',birthday:'1984-08-21'},
        workHistory: [
             { company: 'AL', content: '我的第二份工作是' },
             { company: 'TX', content: '我的第一份工作是' },
           ],
           education: [
             { school: '苏州', content: '文字' },
             { school: '汉阳', content: '文字' },
           ],
           projects: [
             { name: 'project A', content: '文字' },
             { name: 'project B', content: '文字' },
           ],
           awards: [
             { name: 'awards A', content: '文字' },
             { name: 'awards B', content: '文字' },
           ],
           contacts: [
             { contact: 'phone', content: '13812345678' },
             { contact: 'qq', content: '12345678' },
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