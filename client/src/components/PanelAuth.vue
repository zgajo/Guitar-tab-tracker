<template>
<v-flex xs6 pa-0 offset-xs3 class="white elevation-1">
    <v-toolbar flat dense dark>
        <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    </v-toolbar>
    <v-flex>
        <v-form ma-3>
            <slot>

            </slot>
        </v-form>
    </v-flex>
</v-flex>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.application .theme--dark.toolbar{
      background-color: #3aafa9;
}
</style>