<template>
    <pre><code class="highlight js">
        define([], function () {
            var config = {
                env: 'testing',// development, production, testing
                debug: true,
                api: {
                    base_url: 'http://localhost:8888',
                    defaultRequest: {
                        headers: {
                            'X-Requested-With': 'rest.js',
                            'Content-Type': 'application/json'
                        }
                    }
                },
                personal_data: {
                    copyright: '© 2016 OSAHAN - All Rights Reserved',
                    designed_with: 'Osahan Studio',
                    designed_with_url: 'https://www.facebook.com/iamgurdeeposahan',
                    contact: {
                        location: '795 Folsom Ave, Suite 600',
                        phone: '+01 234 567 890',
                        email: 'company@company.com',
                        website: 'www.yourdomain.com'
                    },

                    ...

                },
            }
            return config;
        })
    </code></pre>
</template>