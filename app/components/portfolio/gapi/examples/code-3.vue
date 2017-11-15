<template>
    <pre><code class="highlight js">

        ...

        /**
        * Google Client load/init
        * @param params (Object)
        *  etc. {
        *  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        *  clientId: 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
        *  discoveryDocs: [ 'https://people.googleapis.com/$discovery/rest?version=v1',
        *                   'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        *  scope: 'profile
        *          https://www.googleapis.com/auth/contacts.readonly
        *          https://www.googleapis.com/auth/gmail.readonly
        *          https://www.googleapis.com/auth/gmail.send'
        *  }
        * @return {Promise}
        */
        loadClient (params) {
            return new Promise(function (resolve, reject) {
                _loadGoogleApi().then(function () {
                    if (debug) {
                        console.log('loadGoogleAPI - OK')
                    }
                    return _initClient(params)
                }).then(function () {
                    if (debug) {
                        console.log('googleClient.init - OK')
                    }
                    // Load gmail library
                    window.gapi.client.load('gmail', 'v1', resolve)
                })
            })
        }

        /**
        * Load google api
        * @return {Promise}
        * @private
        */
        _loadGoogleApi () {
            return new Promise(function (resolve, reject) {
                const script = document.createElement('script')
                script.src = 'https://apis.google.com/js/platform.js'
                script.onreadystatechange = script.onload = function () {
                    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                        setTimeout(function () {
                            resolve()
                        }, 500)
                    }
                }
                document.getElementsByTagName('head')[0].appendChild(script)
            })
        }

        /**
        * Google client  load/init
        * @param params (Object)
        *  etc. {
        *  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        *  clientId: 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com',
        *  discoveryDocs: [ 'https://people.googleapis.com/$discovery/rest?version=v1',
        *                   'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        *  scope: 'profile
        *          https://www.googleapis.com/auth/contacts.readonly
        *          https://www.googleapis.com/auth/gmail.readonly
        *          https://www.googleapis.com/auth/gmail.send'
        *  }
        * @return {Promise}
        * @private
        */
        _initClient (params) {
            return new Promise(function (resolve, reject) {
                // Client Init
                const initClient = function () {
                    window.gapi.client.init(params).then(() => {
                        resolve()
                    }, (error) => {
                        console.error('gapi.client.init - Error', error)
                        alert(`gapi.client.init - Error: ${error.error}\n Details: ${error.details}`)
                    })
                }
                window.gapi.load('client:auth2', initClient)
            })
        }

        ...

    </code></pre>
</template>