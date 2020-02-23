# Web4BCH is a Metamask-style library for use with Bitcoin Cash

### How to send BCH

```
if (typeof window.web4bch !== 'undefined') {
    /* Initialize Web4BCH. */
    const web4bch = new window.Web4Bch(window.web4bch.currentProvider)
    console.log('web4bch', web4bch)

    /* Set transaction parameters. */
    const txParams = {
        to: 'bitcoincash:qqqkp6fxptkkllvfxpc9n60en5c6ft24vc40uuxv2c',
        from: web4bch.bch.defaultAccount,
        value: 1000
    }

    /* Send transaction. */
    web4bch.bch.sendTransaction(txParams, (err, res) => {
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
    })
} else {
    window.open('https://badgerwallet.cash')
}
```
