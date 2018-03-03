<template>

<panel>
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

              <v-btn  color="primary" dark @click="loginValidator">Login</v-btn>
          </panel>
</template>

<script>
import Panel from "../PanelAuth";

export default {
  name: "login",
  components: {
    Panel
  },
  data() {
    return {
      email: "t@nike.com",
      password: "Xxx123456",
      error: ""
    };
  },
  watch: {
    error(val) {
      setTimeout(() => {
        this.error = "";
      }, 6000);
    }
  },
  methods: {
    async login() {
      try {
        await this.$authLogin({
          email: this.email,
          password: this.password
        }).then(res => {
          this.$store.dispatch("setToken", res.data.token);
          this.$store.commit("setUser", res.data.user);
          this.$router.push({ name: "root" });
        });
      } catch (e) {
        this.error = e.response.data.error;
      }
    },
    loginValidator() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.login();
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary--text {
  color: #18252a !important;
}

.application .theme--dark.toolbar {
  background-color: #3aafa9;
}

.primary {
  background-color: #3aafa9 !important;
  border-color: #3aafa9 !important;
}
</style>
