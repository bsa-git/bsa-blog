<template>
    <pre><code class="highlight js">
        requirejs.config({
            baseUrl: '.',
            paths: {
                css: 'app/js/requirejs/css.min', //requirejs plugin for load css
                text: 'app/js/requirejs/text', //requirejs plugin for load text
                lodash: 'app/js/lodash/lodash.min', // Standard library
                es6_promise: 'app/js/es6-promise/es6-promise.min',
                vue:  'app/js/vue/vue', // 'https://unpkg.com/vue/dist/vue',
                vuex:  'app/js/vue/vuex', // 'https://unpkg.com/vuex/dist/vuex',
                vue_router: 'app/js/vue/vue-router', // 'https://unpkg.com/vue-router/dist/vue-router',
                app_comp: 'app/components/app/app',
            },
            shim: {
                app_comp: {
                    deps: ['lodash', 'es6_promise']
                },
            }
        });

        require([
            // Vue.js
            'vue',
            // Vue-Router
            'vue_router',

            ...

            // Create the router instance and pass the `routes` option
            var router = new VueRouter({
                routes: routes
            });

            // Create and mount the root instance.
            var app = new App({
                router: router
            }).$mount('#app');
        });
    </code></pre>
</template>