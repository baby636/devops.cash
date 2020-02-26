/* Import modules. */
import installBadger from '@/libs/installBadger'

/* Initialize BITBOX. */
// const bitbox = new window.BITBOX()

/* Initialize donation address. */
// NOTE: EatBCH VE
const donationAddress = 'bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g'

/* Initialize donation amount. */
const donationAmount = 1000

/**
 * Send Donation
 *
 * TODO: Will mitigate account spamming with a small donation
 *       to a charity of the user's choice.
 */
const sendDonation = () => {
    console.log('SEND DONATION')

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

        /* Set transaction parameters. */
        const txParams = {
            to: donationAddress,
            from: web4bch.bch.defaultAccount,
            value: donationAmount
        }

        /* Initialize transaction function. */
        const txFunc = (err, res) => {
            if (err) {
                console.error('ERROR: sendTransaction', err)

                console.log('ERROR MSG', err.message)

                /* Validate user approval. */
                if (err && err.message) {
                    if (err.message.indexOf('User denied transaction signature') !== -1) {
                        // FIXME: Add a modal message here.
                        alert('User rejected the signature transaction.')
                    }
                }

                return
            }

            console.log('TRANSACTION RESULT', res)
        }

        /* Send transaction. */
        web4bch.bch.sendTransaction(txParams, txFunc)
     } else {
         /* Install Badger. */
         installBadger()
     }

}

export default sendDonation
