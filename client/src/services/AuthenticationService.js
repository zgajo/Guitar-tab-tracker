const Api = require( '@/services/api')

console.log(Api)

const register = (credentials)=>{
    return Api().post('register', credentials)
}

module.exports = {
    install: function(Vue, options){
        Vue.prototype.authRegister = register;
        Vue.prototype.$authRegister = register;
    }
}