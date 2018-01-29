import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    strict: true,
    state: {
        token: null,
        user: null,
        isLoggedIn: false
    },
    mutations:{
        setToken(state, token){
            state.token = token;

            if(token){
                state.isLoggedIn = true;
            }
            else{
                state.isLoggedIn = false;
            }
        },
        setUser(state, token){
            state.user = token;
        }
    },
    actions:{
        setToken({commit}, token){
            console.log(token)
            commit("setToken", token);
        },
    }

})