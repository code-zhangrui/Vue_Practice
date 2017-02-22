 import Vuex from 'vuex'
 import Vue from 'vue'
 Vue.use(Vuex) //Uncaught Error: [vuex] must call Vue.use(Vuex) before creating a store instance.
 export default new Vuex.Store({
   state: {
         count:0,
         selected: 'profile',
         resume: {
         config: [
             { field: 'profile', icon: 'id' },
             { field: 'workHistory', icon: 'work' },
             { field: 'education', icon: 'book' },
             { field: 'projects', icon: 'heart' },
             { field: 'awards', icon: 'cup' },
             { field: 'contacts', icon: 'phone' },
           ],
           profile: {
             name: '张睿',
             city: '广州',
             title: '前端工程师',
             birthday: '08-21'
           },
            workHistory: [
               {company: 'AL', content: '我的第二份工作是' },
               {company: 'TX', content: '我的第一份工作是' },
            ],
            education: [
              { school: '韩国汉阳大学', content: '德语' },
              { school: '苏州科技学院', content: '数学' },
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
   mutations: {
     switchTab(state, payload) {
       state.selected = payload
     }
   }
 })
