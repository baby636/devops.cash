/* Import modules. */
import superagent from 'superagent'

/**
 * Authentication Mixin
 */
const authMixin = {
    methods: {
        getAuth() {
            // var vm = this;

            return new Promise((resolve, reject) => {
                superagent.get('/sessionStatus')
                    .then(response => {
                        resolve(response.data.user);
                    })
                    .catch(error => {
                        reject(error.response.data);
                    });
                })
        }
    }
}

export default authMixin;
