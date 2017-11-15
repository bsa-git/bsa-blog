<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;

            ...

            function displayInbox() {
                var request = gapi.client.gmail.users.messages.list({
                    'userId': 'me',
                    'labelIds': 'INBOX',
                    'maxResults': 10
                });
                request.execute(function (response) {
                    $.each(response.messages, function () {
                        var messageRequest = gapi.client.gmail.users.messages.get({
                            'userId': 'me',
                            'id': this.id
                        });
                        messageRequest.execute(appendMessageRow);
                    });
                });
            }

            ...

        &lt;/script&gt;
    </code></pre>
</template>