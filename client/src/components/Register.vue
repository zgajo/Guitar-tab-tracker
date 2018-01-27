<template>
<v-container grid-list-xl fill-height>
    <v-layout row wrap align-center>
      <v-flex xs6 pa-0 offset-xs3 class="white elevation-1">

        <v-toolbar flat dense dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

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
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
    color: #3aafa9 !important;
}

.application .theme--dark.toolbar{
      background-color: #18252a;
}

.primary {
    background-color: #18252a !important;
    border-color: #18252a !important;
}
</style>
