<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title 
      class="white--text" 
      style="cursor:pointer" 
      @click="$router.push('/')">Tab Tracker</v-toolbar-title>

    <router-link :to="{name: 'Songs'}" 
                  tag="div" >
        <v-btn flat>Browse</v-btn>
    </router-link>
    <router-link :to="{name: 'Create song'}" 
                  tag="div" >
        <v-btn flat>Create song</v-btn>
    </router-link>
    
    <v-spacer></v-spacer>
      <v-icon>search</v-icon>
      <v-select
            :items="songs"
            :search-input.sync="searching"
            :filter="customFilter"
            v-model="song"
            item-text="title"
            label="Search song, artist, genre, album"
            autocomplete
          ></v-select>

    <router-link to="/auth/register" tag="div" v-if="!$store.state.isLoggedIn">
        <v-btn flat>Sign up</v-btn>
    </router-link>

    <router-link to="/auth/login" tag="div" v-if="!$store.state.isLoggedIn">
        <v-btn flat>Sign in</v-btn>
    </router-link>

    <div @click="logout"  v-if="$store.state.isLoggedIn">
        <v-btn flat>Log out</v-btn>
    </div>
    
  </v-toolbar>
</template>

<script>
    export default {
      data(){
        return {
            song: null,
            searching: null,
            songs: [
        
            ],
            a1: "",
            customFilter (item, queryText, itemText) {
                
                const hasValue = val => val != null ? val : ''
                
                const text = hasValue(item.title)
                const query = hasValue(queryText)

                return text.toString()
                    .toLowerCase()
                    .indexOf(query.toString().toLowerCase()) > -1
            }
        }
      },
      watch:{
          async searching(val){
            if(!val) this.$store.commit("clearSearch");
            else this.songs = await this.$store.dispatch("retreiveSongs", val);
          }
      },
        methods: {
          logout(){
            this.$store.dispatch("setToken", null);
            this.$store.commit("setUser", null);
            this.$router.push({name: 'root'})
          }
        }
    }
</script>

<style scoped>
    .primary{
        background-color: #27363b !important;
        border-color:  #27363b !important;
    }
</style>