import CoderMail from '~/plugins/lib/google/coder-mail.class'

class GMail {

    /**
     * Constructor
     * @param options
     * etc. {
     * to: my@test.com,
     * subject: Request for my resume from the employer,
     * message: 'My Message!',
     * callback: function () {
            ....
        }
     * }
     */
    constructor(options) {
        this._options = options ? options : {};
    }

    /**
     * Send email
     */
    send () {
        try {

            const headers = {
                'To': this._options.to,
                'Subject': this._options.subject,
                'Content-Type': 'text/html; charset="UTF-8"'
            }

            let email = ''

            _.forEach(headers, function (value, key) {
                email += `${key}: ${value}` + '\r\n'
            })

            email += '\r\n' + this._options.message
            const base64EncodedEmail = new CoderMail('utf-8').b64UrlEncodeUTF8(email)
            const sendRequest = window.gapi.client.gmail.users.messages.send({
                'userId': 'me',
                'resource': {
                    'raw': base64EncodedEmail
                }
            })
            sendRequest.execute(this._options.callback)
        } catch (e) {
            throw e
        }
    }
}


export default GMail
