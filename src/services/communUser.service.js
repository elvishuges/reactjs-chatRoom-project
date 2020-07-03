import { api } from './config'

export default {
    
        login(email, password) {
            console.log('*** em serviço server***');
            var obj = {
                email: email,
                password: password,
            }
            return api.post('/login', obj)
        },  
    
}