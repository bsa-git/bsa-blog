<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;

            ...

            function handleAuthClick(event) {
                gapi.auth2.getAuthInstance().signIn();
            }

            function handleSignoutClick(event) {
                gapi.auth2.getAuthInstance().signOut();
            }

            function updateSigninStatus(isSignedIn) {
                if (isSignedIn) {
                    authorizeButton.style.display = 'none';
                    signoutButton.style.display = 'block';
                    makeApiCall();
                } else {
                    authorizeButton.style.display = 'block';
                    signoutButton.style.display = 'none';
                }
            }

            ...

        &lt;/script&gt;
    </code></pre>
</template>