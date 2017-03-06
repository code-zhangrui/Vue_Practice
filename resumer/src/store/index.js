 import Vuex from 'vuex'
 import Vue from 'vue'
 import objectPath from "object-path"

 Vue.use(Vuex) //Uncaught Error: [vuex] must call Vue.use(Vuex) before creating a store instance.
 export default new Vuex.Store({
        state: {
         selected: 'profile',
         user: {
         id: '',
         username: ''
        },
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
               {company: '广西民族博物馆', content: '我的第一份工作是微信编辑' },
               {},
            ],
            education: [
              { school: '韩国汉阳大学', content: '德语' },
              { school: '苏州科技学院', content: '数学' },
            ],
            projects: [
              { name: '基于Vue的在线简历编辑器', content: 'Vue' },
              { name: '基于Vue的音乐播放器', content: 'Vue' },
            ],
            awards: [
              { name: '汉语大师', content: '比韩国人的汉语强' },
              { name: '韩语大师', content: '比中国人的韩语强' },
            ],
            contacts: [
              { contact: 'phone', content: '00000000000' },
              { contact: 'qq', content: '12345678' },
            ],
        }
   },
   mutations: {
     initState(state,payload){
       Object.assign(state,payload)
     },
     switchTab(state, payload) {
       state.selected = payload
       localStorage.setItem('state',JSON.stringify(state))
     },
     updateResume(state, {path, value}){
       objectPath.set(state.resume, path, value)
       localStorage.setItem('state',JSON.stringify(state))
     },
     setUser(state,payload){
       Object.assign(state.user,payload)
     },
     removeUser(state){
       state.user.id = null; 
     }
   }
 })
