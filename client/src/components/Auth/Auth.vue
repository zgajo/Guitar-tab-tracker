<template>
    <v-container grid-list-xl fill-height>
    <v-layout row wrap align-center>

        <keep-alive>
         <router-view></router-view>
        </keep-alive>
        
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.primary--text {
    color: #18252a !important;
}

.application .theme--dark.toolbar{
      background-color: #3aafa9;
}

.primary {
    background-color: #3aafa9 !important;
    border-color: #3aafa9 !important;
}
</style>