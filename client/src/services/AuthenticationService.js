const Api = require( '@/services/api')

const register = (credentials)=>{
    return Api().post('users/auth/register', credentials)
}

const login = (credentials)=>{
    return Api().post('users/auth/login', credentials)
}

module.exports = {
    install: function(Vue, options){
        Vue.prototype.authRegister = register;
        Vue.prototype.$authRegister = register;

        Vue.prototype.authLogin = login;
        Vue.prototype.$authLogin = login;
    }
}