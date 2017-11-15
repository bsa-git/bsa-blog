<template>
    <pre><code class="highlight js">

        ...

       /**
       * Get inbox messages
       * @param params
       * etc. {
          userId: 'me',
          labelIds: 'INBOX',
          maxResults: 10
       * }
       * @return {Promise}
       */
      getInbox (params) {
        let arrPromises = []
        return new Promise((resolve, reject) => {
            _getMyMessagesList(params)
            .then(list => {
              _.forEach(list, function (item) {
                arrPromises.push(_getMessageForId(item.id, params.userId))
              })
              const allPromises = Promise.all(arrPromises)
              resolve(allPromises)
            })
        })
      }

      _getMyMessagesList (params) {
        // Execute this request for 'gmail.users.messages.list'
        const request = window.gapi.client.gmail.users.messages.list(params)
        return new Promise((resolve, reject) => {
          request.execute(function (response) {
            if (debug) {
              console.log('api.gmail.users.messages.list - Executed: ', response.messages)
            }
            resolve(response.messages)
          })
        })
      }

      _getMessageForId (id, userId) {
        let _message = {}
        // Execute this request for 'gmail.users.messages.get'
        const messageRequest = window.gapi.client.gmail.users.messages.get({
          'userId': userId,
          'id': id
        })
        return new Promise((resolve, reject) => {
          messageRequest.execute(message => {
            // Parsing  message
            _message.id = message.id
            _message.from = _getHeader(message.payload.headers, 'From')
            _message.subject = _getHeader(message.payload.headers, 'Subject')
            _message.date = _getHeader(message.payload.headers, 'Date')
            _message.reply_to = _getHeader(message.payload.headers, 'Reply-to')
            _message.message_id = _getHeader(message.payload.headers, 'Message-ID')
            _message.body = _getBody(message.payload)
            if (debug) {
              console.log('api.gmail.users.messages.get - Executed: ', _message)
            }
            resolve(_message)
          })
        })
      }

      _getHeader (headers, index) {
        let headerValue = ''
        _.forEach(headers, function (header) {
          if (header.name.toLowerCase() === index.toLowerCase()) {
            headerValue = header.value
          }
        })
        return headerValue
      }

      _getBody (message) {
        var encodedBody = ''
        try {
          if (typeof message.parts === 'undefined') {
            encodedBody = message.body.data
          } else {
            encodedBody = _getHTMLPart(message.parts)
          }
          return _b64UrlDecodeUnicode(encodedBody)
        } catch (error) {
          console.error('apiGmail._getBody - Error', error)
          throw error
        }
      }

      _getHTMLPart (arr) {
        for (let x = 0; x <= arr.length; x++) {
          if (typeof arr[x].parts === 'undefined') {
            if (arr[x].mimeType === 'text/html') {
              return arr[x].body.data
            }
          } else {
            return _getHTMLPart(arr[x].parts)
          }
        }
        return ''
      }

      /**
       * To decode the Base64-encoded-url value back into a String
       *
       * @param str
       * @return {string}
       */
      _b64UrlDecodeUnicode (str) {
        const encodedBody = str.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '')
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(encodedBody).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
      }

        ...

    </code></pre>
</template>