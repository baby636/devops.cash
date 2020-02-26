/* Import libraries. */
import CashID from 'cashid'
import moment from 'moment'

/* Initialize BITBOX. */
const bitbox = new window.BITBOX()

/* Import modules. */
import installBadger from '@/libs/installBadger'

/**
 * Sign In
 */
const signIn = () => {
    console.log('SIGN IN')

    if (typeof window.web4bch !== 'undefined') {
        /* Initialize Web4BCH. */
        const web4bch = new window.Web4Bch(window.web4bch.currentProvider)
        console.log('web4bch', web4bch)

        /* Validate web4BCH. */
        if (!web4bch) {
            return installBadger()
        }

        console.log('DEFAULT ACCOUNT', web4bch.bch.defaultAccount)

        /* Validate account. */
        if (web4bch.bch && web4bch.bch.defaultAccount === undefined) {
            alert('please unlock your badgerwallet');
        }

        /* Initialize CashId. */
        // const cashid = new CashID()
        const cashid = new CashID('api.devops.cash', '/v1/cashid')

        /* Set action. */
        const action = 'Sign in'

        /* Set timestamp. */
        // NOTE: This is NOT currently used for any purpose during
        //       user authentication.
        const data = moment().format('LLLL (x)')

        /* Set metadata. */
        // NOTE: This is NOT currently used for any purpose during
        //       user authentication.
        const metadata = {
            optional: {
                identity: ['name', 'nickname'],
                contact: ['email']
            }
        }

        /* Set URI. */
        const cashIDRequest = cashid.createRequest(action, data, metadata)
        console.log('CASHID REQUEST', cashIDRequest)

        /* Set CashID buffer. */
        const cidBuf = Buffer.from(cashIDRequest)
        console.log('CASHID REQUEST BUFFER', cidBuf)

        /* Set CashID (authorization) hash. */
        const authHash = bitbox.Crypto.sha256(cidBuf).toString('hex')
        console.log('CASHID AUTH HASH', authHash)

        /* Initialize signature function. */
        const sigFunc = (err, res) => {
            if (err) return console.error('SIGFUNC ERROR:', err)

            console.log('SIGFUNC RESPONSE', res, authHash)
        }

        web4bch.bch.sign(
            web4bch.bch.defaultAccount,
            cashIDRequest,
            sigFunc
        )
     } else {
         /* Install Badger. */
         installBadger()
     }

}

export default signIn
