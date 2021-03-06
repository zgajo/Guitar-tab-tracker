import Vue from 'vue';
import Vuex from 'vuex'
import SongsService from "@/services/SongsService";

Vue.use(Vuex)

export default new Vuex.Store({

    strict: false,
    state: {
        token: null,
        user: null,
        songs: null,
        searchResult: null,
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
        },
        clearSearch(state){
            state.searchResult = null;
        }
    },
    actions:{
        setToken({commit}, token){
            console.log(token)
            commit("setToken", token);
        },
        retreiveSongs({state}, value){
            return new Promise( resolve => {
                SongsService.index(value).then(res => {
                    if(value){
                        state.searchResult = res.data
                    }
                    else state.songs = res.data;
                    resolve(res.data);
                });
            }) 
        },
        retreiveSongById({state}, id){
            return new Promise( resolve => {
                SongsService.view(id).then(res => {
                    resolve(res.data);
                });
            }) 
        },
        updateSong({state}, song){
            
            return new Promise( resolve => {
                const index = state.songs.findIndex( s => s.id == song.id);
                state.songs[index] = song;
            }) 
        },
    },
    getters: {
        getSongById: (state)=>(id) => {
            return state.songs.find(song => song.id === id);
        },
        allSongs: (state)=>{
            return state.songs || null;
        },
        getSearchResult: (state)=>{
            return state.searchResult || null;
        },
    }

})