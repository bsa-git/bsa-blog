<template>
    <pre><code class="highlight js">
'use strict';

const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

module.exports = function (app) {
    // Set up REST transport using Express
    app.configure(express.rest());
    // Configure the Socket.io transport
    app.configure(socketio());
};
    </code></pre>
</template>