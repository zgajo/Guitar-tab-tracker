const Api = require( '@/services/api')

const register = (credentials)=>{
    return Api().post('users/register', credentials)
}

module.exports = {
    install: function(Vue, options){
        Vue.prototype.authRegister = register;
        Vue.prototype.$authRegister = register;
    }
}