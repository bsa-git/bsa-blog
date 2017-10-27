const state = {
    config: null,
    isClient: false,
    isLocalhost: false,
    apiGoogle: null,
    auth: {
        token: null,
        user: null
    },
    userAgent: null,
    error: {
        statusCode: '',
        name: '',
        message: '',
        stack: ''
    },
    theme: {
        current:{
            base: 'blue',
            primary: 'blue darken-2',
            accent: 'blue accent-2',
            secondary: 'grey darken-3',
            info: 'blue',
            warning: 'amber',
            error: 'red',
            success: 'green'
        },
        register:{
            error: {
                base: 'red'
            },
            home: {
                base: 'blue'
            },
            comp: {
                base: 'brown'
            },
            blog: {
                base: 'brown'
            },
            about: {
                base: 'purple'
            },
            info: {
                base: 'indigo'
            },
            portfolio: {
                base: 'blue-grey'
            }
        }
    }
}

const mutations = {

    SET_IS_CLIENT (state, isClient) {
        state.isClient = isClient
    },
    SET_IS_LOCALHOST (state, isLocalhost) {
        state.isLocalhost = isLocalhost
    },
    SET_GOOGLE_API (state, apiGoogle) {
        state.apiGoogle = apiGoogle
    },
    SET_USER (state, userData) {
        state.auth.user = userData
    },
    SET_TOKEN (state, token) {
        state.auth.token = token
    },

    SET_ERROR (state, error) {
        state.error = {
            statusCode: error.statusCode ? error.statusCode : '',
            name: error.name,
            message: error.message,
            stack: error.stack
        }
    },

    CLEAR_ERROR (state) {
        state.error.statusCode = ''
        state.error.name = ''
        state.error.message = ''
        state.error.stack = ''
    },

    SET_CONFIG (state, config) {
        state.config = config
    },

    SET_USERAGENT (state, userAgent) {
        state.userAgent = userAgent
    },

    SET_THEME (state, theme) {
        if(!_.isObject(theme)){
            theme = state.theme.register[theme]
        }
        state.theme.current = _.merge(state.theme.current, theme)
    }
}

export default {
    state,
    mutations
}
