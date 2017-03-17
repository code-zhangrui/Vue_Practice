import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
       selected:'profile',
       resume:{
        config:
           [
             { field: 'profile'},
             { field: 'work history'},
             { field: 'education'},
             { field: 'projects'},
             { field: 'awards'},
             { field: 'contacts'},
           ],
        profile:{name:'',city:'',title:''},
        'work history': [
             { company: 'AL', content: '我的第二份工作是' },
             { company: 'TX', content: '我的第一份工作是' },
           ],
           education: [
             { school: 'AL', content: '文字' },
             { school: 'TX', content: '文字' },
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
			state.selected=payload
		}
	}
})