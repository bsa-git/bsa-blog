<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;
            var clientId = 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';
            var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
            var discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
            var scopes =
                'https://www.googleapis.com/auth/gmail.readonly ' +
                'https://www.googleapis.com/auth/gmail.send';


            function handleClientLoad() {
                // Load the API client and auth2 library
                gapi.load('client:auth2', initClient);
            }

            function initClient() {
                gapi.client.init({
                    apiKey: apiKey,
                    discoveryDocs: discoveryDocs,
                    clientId: clientId,
                    scope: scopes
                }).then(function () {
                    // Listen for sign-in state changes.
                    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
                    // Handle the initial sign-in state.
                    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                });
            }

            ...

        &lt;/script&gt;
        &lt;script async defer
            src="https://apis.google.com/js/api.js"
            onload="this.onload=function(){};handleClientLoad()"
            onreadystatechange="if (this.readyState === 'complete') this.onload()"
        &gt;
        &lt;/script&gt;
    </code></pre>
</template>