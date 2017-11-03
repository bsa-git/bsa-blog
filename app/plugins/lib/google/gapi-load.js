// Mutation types
import types from '~/store/mutation-types'
// Config
import config from '~/config/env/index'
// Google API
import ApiGoogle from '~/plugins/lib/google/gapi.class'

export default function (store, isClient, router) {
    try {
        const getters = store.getters
        if (isClient && (getters.getGapi === null)) {
            // Load/Init Google API
            const gmail = config.gapi.services.gmail;
            const discoveryDocs = _.concat(gmail.discoveryDocs);
            const scope = _.concat(
                gmail.scopes.send).join(' ');
            const params = {
                debug: config.debug,
                apiKey: config.gapi.apiKey,
                clientId: config.gapi.clientId,
                discoveryDocs: discoveryDocs,
                scope: scope
            };
            ApiGoogle.staticLoadGoogleAPI(params)
                .then((apiGoogle) => {
                    if (config.debug) {
                        console.log('ApiGoogle.staticLoadGoogleAPI - OK')
                    }
                    store.commit(types.SET_GOOGLE_API, apiGoogle)
                    // Load google mail API
                    apiGoogle.loadGmailApi()
                        .then(() => {
                            if (config.debug) {
                                console.log('apiGoogle.loadGmailApi - OK')
                            }
                            // Synchronization of the real state of signed in with Google
                            // with the internal state of the signed in in store.
                            if (apiGoogle.isSignedIn() !== getters.isAuth) {
                                const userInfo = apiGoogle.getCurrentUserInfo();
                                // Save to vuex
                                store.commit(types.SET_TOKEN, userInfo.token);
                                store.commit(types.SET_USER, userInfo)
                                if (config.debug) {
                                    console.log('store.setUserAuth - OK')
                                }
                            }
                        })
                })
        }

    } catch (e) {
        store.commit(types.SET_ERROR, e)
        router.replace('/error')
    }
}