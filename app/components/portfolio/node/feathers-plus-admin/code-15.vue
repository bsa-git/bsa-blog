<template>
    <pre><code class="highlight js">
 /**
 * Set rest transport
 * @return {*}
 */
setRestTransport() {
    let restURL = `${this.req.protocol}//${this.req.hostname}`;
    if (process.env.NODE_ENV === 'development') {
        restURL += `:${this.data.port}`;
    }
    const feathers = require('@feathersjs/client/index');
    const axios = require('axios');
    //---------------------------------
    // Create app
    const app = feathers();
    // Connect to URL
    const restClient = feathers.rest(restURL);
    // Configure an AJAX library (see below) with that client
    app.configure(restClient.axios(axios));

    const authentication = require('@feathersjs/client/authentication');
    app.configure(authentication({
        storage: window.localStorage
    }));
    return app
}
    </code></pre>
</template>