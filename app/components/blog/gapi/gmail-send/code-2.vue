<template>
    <pre><code class="highlight js">

        ...

        /**
        * Google SignIn
        * @param successCallback (Function)
        * @param errorCallback (Function)
        */
        signIn (successCallback, errorCallback) {
            window.gapi.auth2.getAuthInstance().signIn().then(function (googleUser) {
                successCallback(googleUser)
                if (debug) {
                    console.log('GoogleAuth.signIn - OK')
                }
            }, function (error) {
                errorCallback(error)
                console.log('GoogleAuth.signIn - Error: ', error)
            })
        }

        ...

    </code></pre>
</template>