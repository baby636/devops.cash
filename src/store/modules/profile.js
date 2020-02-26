/* Import libraries. */
// import devops from '../../api/devops'

/* Initialize state. */
const state = {
    /* Initialize session id. */
    sessionId: null,

    /* Initialize session. */
    session: null,

    /* Initialize cash accounts. */
    cashAccounts: null,

}

/* Getters. */
const getters = {}

/* Actions. */
const actions = {
    deleteSession ({ commit }) {
        /* Commit session. */
        commit('setSession', null)

        /* Commit cash accounts. */
        commit('setCashAccounts', null)
    },

    initSession ({ commit }, _session) {
        /* Commit session. */
        commit('setSession', _session)
    },

    updateCashAccounts ({ commit }, _cashAccounts) {
        /* Commit cash accounts. */
        commit('setCashAccounts', _cashAccounts)
    },

}

/* Mutations. */
const mutations = {
    /* Set cash accounts. */
    setCashAccounts (state, _cashAccounts) {
        state.cashAccounts = _cashAccounts
    },

    /* Set session. */
    setSession (state, _session) {
        /* Set session. */
        state.session = _session

        /* Validate session. */
        if (_session) {
            /* Set session id. */
            state.sessionId = _session._id
        } else {
            /* Set session id. */
            state.sessionId = null
        }
    },

}

/* Export. */
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
