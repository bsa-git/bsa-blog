<template>
    <pre><code class="nohighlight">
        |--gapi-examples
        |-- app/
        |  |-- assets/          # Un-compiled assets such as Less, Sass or JavaScript
        |  |-- components/      # Vue.js Components
        |  |-- config/          # Configuration files
        |  |-- layouts/         # Application Layouts
        |  |-- middleware/      # Application Middleware (functions that can be run before rendering)
        |  |-- pages/           # Application Views and Routes
        |  |-- plugins/         # Javascript plugins
        |  |-- static/          # Static files. (each file inside this directory is mapped to "/")
        |  |-- store/           # Vuex Store files
        |  |-- env.example.js   # Example of env.js (user configuration file)
        |  `-- env.js           # User configuration file
        |
        |-- docs/               # folder created with the command ($ npm run generate)
        |-- node_modules/       # folder created with the command ($ npm install # Or yarn install)
        |-- .gitignore          # Git ignore file
        |-- LICENSE.md          # License file
        |-- nuxt.config.js      # Nuxt configuration file
        |-- package.json        # NPM configuration file
        `-- README.md           # Readme file

    </code></pre>
</template>