import { api } from './config'

export default {
    usuario: {
        login(email, password) {
            var obj = {
                email: email,
                password: password,
            }
            return api.post('/login', obj)
        },
        register(user) {
            console.log(user);
            return api.post('/medico/register', user)
        },

    }
}