<template>
    <pre><code class="highlight js">

        ...

        /**
        * Get Message with given ID.
        *
        * @param  {String} userId User's email address. The special value 'me'
        * can be used to indicate the authenticated user.
        * @param  {String} messageId ID of Message to get.
        * @param  {Function} callback Function to call when the request is complete.
        */
        function getMessage(userId, messageId, callback) {
            var request = gapi.client.gmail.users.messages.get({
                'userId': userId,
                'id': messageId
            });
            request.execute(callback);
        }

        ...

    </code></pre>
</template>