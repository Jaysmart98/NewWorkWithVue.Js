import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex"


const store = createStore({
     state(){
         return{
             name: "Joshua",
             dept:'Mechatronics',
             age:'23'
         }
     },

     getters:{
         displayName(state){
             return state.name
         },
         displayDept(state){
             return state.dept;
         },
         displayAge(state){
             return state.age
         }

     },
     actions:{
         changeName(context){
            context.commit('changeName')
         },
         changeDept({commit}){
             commit('changeDept')
         },
         increaseAge({commit}){
            commit('increaseAge')
         }
     },
     mutations:{
         changeName(state){
            return state.name = "Julius"
         },
         changeDept(state){
            return state.dept = "Electrical and Computer Engineering"
         },
         increaseAge(state){
             return state.age++
         }
         
     }
})

// router.beforeEach((to,from,next)=>{
// if (to.path=='/admin'){
//     next(false)
// }
//  else{
//      next(true)
//  }

// })

createApp(App).use(router).use(store).mount('#app')
