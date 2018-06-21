<template>
    <pre><code class="highlight js">
        const webpack = require('webpack')

        module.exports = {
            /*
             ** Router config
             */
            router: {
                middleware: 'set-config'
            },
            /*
             ** Cache
             */
            cache: true,
            /*
             ** Environment
             */
            env: {
                //env: 'testing',
                baseUrl: process.env.BASE_URL || 'http://localhost:3000',
            },
            /*
             ** Headers of the page
             */
            head: {
                title: 'Vue Nuxt Static',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {hid: 'description', content: "Vue Nuxt static project"}
                ],
                script: [
                    {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
                    {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
                ],
                link: [
                    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                    {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
                    {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css'},
                    {
                        rel: 'stylesheet',
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css'
                    },
                    {rel: 'stylesheet', href: '/css/animate.css'},
                    {rel: 'stylesheet', href: '/css/style.css'},
                ]
            },
            build: {
                devtool: 'eval-source-map', // eval-source-map inline-source-map
                vendor: [
                    'babel-polyfill',
                    'lodash',
                ],
                plugins: [
                    new webpack.ProvidePlugin({
                        '_': 'lodash',
                    })
                ]
            },
            /*
             ** Global CSS
             */
            css: [],
            /*
             ** Customize the progress-bar color
             */
            loading: {color: '#3B8070'}
        };
    </code></pre>
</template>