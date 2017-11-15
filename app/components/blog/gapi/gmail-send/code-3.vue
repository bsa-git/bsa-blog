<template>
    <pre><code class="highlight js">

        ...

        /**
        * Send email
        * @param params
        * etc.{
        userId: 'me',
        to: my@test.com,
        subject: Request for my resume from the employer,
        message: 'My Message!',
        callback: function () {
        ....
        }
        * }
        */
        send (params) {
            try {
                const headers = {
                    'To': params.to,
                    'Subject': params.subject,
                    'Content-Type': 'text/html; charset="UTF-8"'
                }

                let email = ''
                _.forEach(headers, function (value, key) {
                    email += `${key}: ${value}` + '\r\n'
                })

                email += '\r\n' + params.message
                const base64EncodedEmail = _b64UrlEncodeUnicode(email)
                const sendRequest = window.gapi.client.gmail.users.messages.send({
                    'userId': params.userId,
                    'resource': {
                        'raw': base64EncodedEmail
                    }
                })
                sendRequest.execute(params.callback)
            } catch (e) {
                throw e
            }
        }

        /**
        * To encode the unicode string into Base64-encoded-url value
        *
        * @param str
        * @return {string}
        */
        _b64UrlEncodeUnicode (str) {
            // first we use encodeURIComponent to get percent-encoded UTF-8,
            // then we convert the percent encodings into raw bytes which
            // can be fed into btoa.
            const b64Encoded = btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
                function toSolidBytes (match, p1) {
                    return String.fromCharCode('0x' + p1)
                }))
            // Replace for URL
            return b64Encoded.replace(/\+/g, '-').replace(/\//g, '_')
        }

        ...

    </code></pre>
</template>