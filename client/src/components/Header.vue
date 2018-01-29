<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text" style="cursor:pointer" @click="$router.push('/')">Tab Tracker</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <router-link to="/auth/register" tag="div">
        <v-btn flat>Sign up</v-btn>
    </router-link>

    <router-link to="/auth/login" tag="div">
        <v-btn flat>Sign in</v-btn>
    </router-link>
    
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
        
    }
</script>

<style scoped>
    .primary{
        background-color: #27363b !important;
        border-color:  #27363b !important;
    }
</style>