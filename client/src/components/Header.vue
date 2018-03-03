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
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <router-link to="/auth/register" tag="div" v-if="!$store.state.isLoggedIn">
        <v-btn flat>Sign up</v-btn>
    </router-link>

    <router-link to="/auth/login" tag="div" v-if="!$store.state.isLoggedIn">
        <v-btn flat>Sign in</v-btn>
    </router-link>

    <div @click="logout"  v-if="$store.state.isLoggedIn">
        <v-btn flat>Log out</v-btn>
    </div>
    
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
    export default {
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