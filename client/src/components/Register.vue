<template>

  <div>
    <h1>Register</h1>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email">
    <br>
    <label for="password">Password</label>
    <input type="password" name="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
  
</template>

<script>
export default {
  mounted(){
    console.log(this.$authRegister)
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    async register(){
      const response = await this.$authRegister({
        email: this.email,
        password: this.password
      })

      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
