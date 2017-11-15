<template>
    <pre><code class="highlight js">

            ...

            getMyConnections() {
              let myConnections = []
              return new Promise((resolve, reject) => {
                window.gapi.client.people.people.connections.list({
                  'resourceName': 'people/me',
                  'pageSize': 10,
                  'personFields': 'names,emailAddresses'
                }).then(function (response) {
                  const connections = response.result.connections
                  if (connections.length > 0) {
                    for (let i = 0; i < connections.length; i++) {
                      const person = connections[i]
                      if (person.names && person.names.length > 0) {
                        myConnections.push(person.names[0].displayName)
                      } else {
                        myConnections.push('No display name found for connection.')
                      }
                    }
                  } else {
                    myConnections.push('No upcoming events found.')
                  }
                  if (debug) {
                    console.log('api.people.connections - Executed')
                  }
                  resolve(myConnections)
                }, (error) => {
                  console.log('people.connections - Error. ', `Error: ${error}`)
                  alert(`Error: ${error}`)
                })
              })
            }

            ...

    </code></pre>
</template>