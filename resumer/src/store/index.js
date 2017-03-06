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
             name: '',
             city: '',
             title: '',
             birthday: ''
           },
            workHistory: [
               {company: '', content: '' },
            ],
            education: [
              { school: '', content: '' },
            ],
            projects: [
              { name: '', content: '' },
            ],
            awards: [
              { name: '', content: '' },
            ],
            contacts: [
              { contact: '', content: '' },
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
