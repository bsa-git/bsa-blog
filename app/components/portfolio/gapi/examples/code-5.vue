<template>
    <pre><code class="highlight js">

            ...

            getMyNames() {
              return new Promise((resolve, reject) => {
                window.gapi.client.people.people.get({
                  'resourceName': 'people/me',
                  'personFields': 'names,emailAddresses'
                }).then((resp) => {
                  const names = resp.result.names[0]
                  if (debug) {
                    console.log('api.people.get - Executed: ')
                  }
                  resolve(names)
                }, (error) => {
                  console.log('people.get - Error. ', `Error: ${error}`)
                  alert(`Error: ${error}`)
                })
              })
            }

            ...

    </code></pre>
</template>