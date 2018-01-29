<template>

 <v-flex xs6 pa-0 offset-xs3 class="white elevation-1">
        <form-header></form-header>
        <v-flex>
          <v-form ma-3>

              <v-text-field
                v-model="email"
                label="Email"
                :error-messages="errors.collect('email')"
                v-validate="'required|email'"
                data-vv-name="email"
                required
              ></v-text-field>


              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                data-vv-name="password"
                v-validate="'required|min:8|max:32'"
                :error-messages="errors.collect('password')"
                required
              ></v-text-field>
              
              <v-alert color="error" icon="warning" :value="error" v-html="error">
              </v-alert>

              <v-btn  color="primary" dark @click="registerValidator">Register</v-btn>
          </v-form>

        </v-flex>
 </v-flex>
</template>

<script>
import FormHeader from './FormHeader'

export default {
  name:"Register",
  components: {
    FormHeader
  },
  data(){
    return{
      email: '',
      password: '',
      error: ""
    }
  },
  watch:{
    error(val){
      setTimeout(()=>{
        this.error = ""
      }, 6000)
    }
  },
  methods:{
    async register(){

      try{
        await this.$authRegister({
          email: this.email,
          password: this.password
        })
      } 
      catch(e){
        this.error = e.response.data.error;
      }

    },
    registerValidator(){

      this.$validator.validateAll().then( res => {

        if(res){
          this.register()
        }
        
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
