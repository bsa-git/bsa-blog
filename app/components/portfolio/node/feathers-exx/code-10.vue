<template>
    <pre><code class="highlight js">
'use strict';

const users = require('./users/users.service');
const posts = require('./posts/posts.service');

module.exports = function (app) {
    app.configure(users);
    app.configure(posts);
};

    </code></pre>
</template>