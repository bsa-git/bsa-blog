const webpack = require('webpack')
module.exports = {
    srcDir: 'app/',
    router: {
        base: '/',
        middleware: 'ini-app'
    },
    generate: {
        dir: 'docs'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Nuxt + Vuetify project',
        meta: [
            {charset: 'utf-8'},
            {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico'},
            // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
            // {rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css'}
        ],
        script: [
            // Highlight.js
            // {src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js'},
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#3B8070'},
    /*
     ** Build configuration
     */
    build: {
        vendor: [
            'babel-polyfill',
            'vuetify',
            'vee-validate',
            'lodash',
            'express-useragent',// UserAgent info
            '~plugins/lib/http/http.class', // Http class
            '~plugins/lib/highlight/highlight.class', // Highlight class
            '~plugins/lib/pagination/pagination.class', // Pagination class
            '~plugins/lib/google/gapi.class', // Google API class
            '~plugins/lib/google/gapi-load', // Load google API
            '~plugins/lib/google/gmail.class', // GMail class
            '~plugins/lib/google/coder.class', // Mail coder class
        ],
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash',
            })
        ]
    },
    plugins: [
        '~plugins/vuetify/vuetify.js',
        // '~plugins/validators/vee-validate.js',
    ],
    css: [
        {src: '~assets/style/vuetify.styl', lang: 'styl'},
        {src: '~assets/style/app.styl', lang: 'styl'}
    ]
}
