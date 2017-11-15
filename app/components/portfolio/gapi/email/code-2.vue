<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;

            ...

            function updateSigninStatus(isSignedIn) {
                if (isSignedIn) {
                    loadGmailApi();
                    $('#authorize-button').remove();
                    $('.table-inbox').removeClass("hidden");
                    $('#compose-button').removeClass("hidden");
                } else {
                    $('#authorize-button').removeClass("hidden");
                    $('#authorize-button').on('click', function () {
                        handleAuthClick();
                    });
                }
            }

            function handleAuthClick() {
                gapi.auth2.getAuthInstance().signIn();
            }

            function loadGmailApi() {
                gapi.client.load('gmail', 'v1', displayInbox);
            }

            ...

        &lt;/script&gt;
    </code></pre>
</template>