<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;

            ...

            // Load the API and make an API call.  Display the results on the screen.
            function makeApiCall() {
                gapi.client.people.people.get({
                    'resourceName': 'people/me',
                    'personFields': 'names,emailAddresses'
                }).then(function(resp) {
                    var p = document.createElement('p');
                    var name = resp.result.names[0].givenName;
                    p.appendChild(document.createTextNode('Hello, '+name+'!'));
                    document.getElementById('content').appendChild(p);
                });
            }

            ...

        &lt;/script&gt;
    </code></pre>
</template>