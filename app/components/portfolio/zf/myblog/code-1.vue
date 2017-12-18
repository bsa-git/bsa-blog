<template>
    <pre><code class="highlight ini">
        ...
        [production]
            ; PHP settings
            phpSettings.display_startup_errors = 0
            phpSettings.display_errors = 0

            ;Indicate the path and classname of the bootstrap
            bootstrap.path = APPLICATION_PATH &quot;/Bootstrap.php&quot;
            bootstrap.class = &quot;Bootstrap&quot;
            appnamespace = &quot;Application&quot;
            ...
        [testing : production]
            phpSettings.display_startup_errors = 1
            phpSettings.display_errors = 1

        [development : production]
            phpSettings.display_startup_errors = 1
            phpSettings.display_errors = 1
            resources.frontController.params.displayExceptions = 1
         ...
    </code></pre>
</template>