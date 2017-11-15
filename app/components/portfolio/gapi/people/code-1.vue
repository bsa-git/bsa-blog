<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;
            // Enter an API key from the Google API Console:
            //   https://console.developers.google.com/apis/credentials
            var apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
            // Enter the API Discovery Docs that describes the APIs you want to
            // access. In this example, we are accessing the People API, so we load
            // Discovery Doc found here: https://developers.google.com/people/api/rest/
            var discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];
            // Enter a client ID for a web application from the Google API Console:
            //   https://console.developers.google.com/apis/credentials?project=_
            // In your API Console project, add a JavaScript origin that corresponds
            //   to the domain where you will be running the script.
            var clientId = 'xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com';
            // Enter one or more authorization scopes. Refer to the documentation for
            // the API or https://developers.google.com/people/v1/how-tos/authorizing
            // for details.
            var scopes = 'profile';
            var authorizeButton = document.getElementById('authorize-button');
            var signoutButton = document.getElementById('signout-button');
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
                    authorizeButton.onclick = handleAuthClick;
                    signoutButton.onclick = handleSignoutClick;
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