import { api } from './config'

export default {
    usuario: {
        login(user) {
            var obj = {
                password: sha1(user.password),
                username: user.username,
            }
            return api.post('/login', obj)
        },
        register(user) {
            console.log(user);
            return api.post('/medico/register', user)
        },
        s
    }
}