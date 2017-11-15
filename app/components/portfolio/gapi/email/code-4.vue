<template>
    <pre><code class="highlight html">
        &lt;script type="text/javascript" &gt;

            ...

            function getHeader(headers, index) {
                var header = '';
                $.each(headers, function () {
                    if (this.name.toLowerCase() === index.toLowerCase()) {
                        header = this.value;
                    }
                });
                return header;
            }

            function getBody(message) {
                var encodedBody = '';
                if (typeof message.parts === 'undefined') {
                    encodedBody = message.body.data;
                }
                else {
                    encodedBody = getHTMLPart(message.parts);
                }
                encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
                return decodeURIComponent(escape(window.atob(encodedBody)));
            }

            function getHTMLPart(arr) {
                for (var x = 0; x <= arr.length; x++) {
                    if (typeof arr[x].parts === 'undefined') {
                        if (arr[x].mimeType === 'text/html') {
                            return arr[x].body.data;
                        }
                    }
                    else {
                        return getHTMLPart(arr[x].parts);
                    }
                }
                return '';
            }

            ...

        &lt;/script&gt;
    </code></pre>
</template>