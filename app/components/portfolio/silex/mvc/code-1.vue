<template>
    <pre><code class="highlight yaml">
        ...
        service_providers:
            swiftmailer:
                class: Silex\Provider\SwiftmailerServiceProvider
                parameters:
                    swiftmailer.options:
                        host: %mail.host%
                        port: %mail.port%
                        username: %mail.username%
                        password: %mail.password%
                        encryption: %mail.encryption%
                        auth_mode: %mail.auth_mode%
         ...
    </code></pre>
</template>