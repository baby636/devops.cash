/* Import modules. */
import superagent from 'superagent'

/**
 * Authentication Mixin
 */
const authMixin = {
    methods: {
        getAuth() {
            /* Set api endpoint. */
            // TODO Move to vuex store.
            const ENDPOINT = 'https://api.devops.cash/v1'

            // var vm = this;

            return new Promise((resolve, reject) => {
                superagent
                    .get(ENDPOINT + '/sessions')
                    .send({ sessionId: 'Manny', species: 'cat' }) // sends a JSON post body
                    .set('accept', 'json')
                    .end((err, res) => {
                        if (err) {
                            return console.error('API ERROR:', err)
                        }

                        console.log('API RESULT', res)

                        this.projects = res.body
                    })

        }
    }
}

export default authMixin;
