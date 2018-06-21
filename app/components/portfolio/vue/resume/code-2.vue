<template>
    <pre><code class="highlight js">
        requirejs.config({
            baseUrl: '',
            paths: {
                css: "js/requirejs/css.min", //requirejs plugin for load css
                text: "js/requirejs/text", //requirejs plugin for load text
                vue: 'https://unpkg.com/vue/dist/vue'
            },
            shim: {
            }
        });

        require(['vue',
            'text!templates/preloader.html',
            'text!templates/phone.html',
            'text!templates/socials.html',
            'text!templates/sidebar.html',
            'text!templates/about.html',
            'text!templates/services.html',
            'text!templates/portfolio.html',
            'text!templates/resume.html',
            'text!templates/blog.html',
            'text!templates/testimonial.html',
            'text!templates/contact.html',
            'text!templates/footer.html',
        ],
            function (  Vue, preloader, phone, socials, sidebar, about, services,
                        portfolio, resume, blog, testimonial, contact, footer) {

                var app = new Vue({
                    el: '#app',
                    data: {
                        loaded: false
                    },
                    mounted: function () {
                        this.loaded = true;
                        // `this` points to the vm instance
                        console.log('App is ready!');
                    },
                    components: {
                        'my-preloader': {
                            template: preloader
                        },
                        'my-phone': {
                            template: phone,
                            data: function () {
                                return { phone: '+1234567890' }
                            }
                        },

                        ...

                    }
                });

                require(['js/scripts.min.js']);
            }
        );
    </code></pre>
</template>