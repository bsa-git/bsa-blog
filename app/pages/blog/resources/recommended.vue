<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2018-06-25</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-blog></link-to-blog>
                    <section>
                        <h2>Полезные инструменты и ресурсы</h2>
                        <ul>
                            <li><a href="http://www.javascripting.com/" target="_blank">JavaScripting</a>
                                - The Database of JavaScript Libraries
                            </li>
                            <li><a href="http://sahatyalkabov.com/jsrecipes/" target="_blank">JS Recipes</a>
                                - JavaScript tutorials for backend and frontend development.
                            </li>
                            <li><a href="https://html-to-pug.com/" target="_blank">HTML to Pug converter</a>
                                - HTML to PUG is a free online converter helping you to convert html files to pug syntax in realtime.
                            </li>
                            <li><a href="http://www.javascriptoo.com/" target="_blank">JavascriptOO</a>
                                - A directory of JavaScript libraries with examples, CDN links, statistics, and videos.
                            </li>
                            <li><a href="http://realfavicongenerator.net/" target="_blank">Favicon Generator</a>
                                - Generate favicons for PC, Android, iOS, Windows 8.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Рекомендуемые ресурсы для разработки дизайна</h2>
                        <ul>
                            <li><a href="http://codeguide.co/" target="_blank">Code Guide</a>
                                - Standards for developing flexible, durable, and sustainable HTML and CSS.
                            </li>
                            <li><a href="http://bootsnipp.com/" target="_blank">Bootsnipp</a>
                                - Code snippets for Bootstrap.
                            </li>
                            <li><a href="http://www.uibox.in" target="_blank">UIBox</a>
                                - Curated HTML, CSS, JS, UI components.
                            </li>
                            <li><a href="https://www.bootstrapzero.com" target="_blank">Bootstrap Zero</a>
                                - Free Bootstrap templates themes.
                            </li>
                            <li><a href="http://todc.github.io/todc-bootstrap/" target="_blank">Google Bootstrap</a>
                                - Google-styled theme for Bootstrap.
                            </li>
                            <li><a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Font Awesome Icons</a>
                                - It's already part of the Hackathon Starter, so use this page as a reference.
                            </li>
                            <li><a href="http://clrs.cc" target="_blank">Colors</a> - A nicer color palette for the web.
                            </li>
                            <li><a href="http://tympanus.net/Development/CreativeButtons/" target="_blank">Creative Button Styles</a>
                                - awesome button styles.
                            </li>
                            <li><a href="http://tympanus.net/Development/CreativeLinkEffects/" target="_blank">Creative Link Effects</a>
                                - Beautiful link effects in CSS.
                            </li>
                            <li><a href="http://codepen.io/andreasstorm/pen/pyjEh"
                                   target="_blank">Medium Scroll Effect</a>
                                - Fade in/out header background image as you scroll.
                            </li>
                            <li><a href="https://github.com/btmills/geopattern" target="_blank">GeoPattern</a>
                                - SVG background pattern generator.
                            </li>
                            <li><a href="https://github.com/qrohlf/trianglify" target="_blank">Trianglify</a>
                                - SVG low-poly background pattern generator.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Рекомендуемые библиотеки Node.js</h2>
                        <ul>
                            <li><a href="https://github.com/remy/nodemon" target="_blank">Nodemon</a>
                                - Automatically restart Node.js server on code changes.
                            </li>
                            <li><a href="https://github.com/bluesmoon/node-geoip" target="_blank">geoip-lite</a>
                                - Geolocation coordinates from IP address.
                            </li>
                            <li><a href="http://filesizejs.com/" target="_blank">Filesize.js</a>
                                - Pretty file sizes, e.g. <code>filesize(265318); // "265.32 kB"</code>.
                            </li>
                            <li><a href="http://numeraljs.com" target="_blank">Numeral.js</a>
                                - Library for formatting and manipulating numbers.
                            </li>
                            <li><a href="https://github.com/node-inspector/node-inspector" target="_blank">Node Inspector</a>
                                - Node.js debugger based on Chrome Developer Tools.
                            </li>
                            <li><a href="https://github.com/nikhilm/node-taglib" target="_blank">node-taglib</a>
                                - Library for reading the meta-data of several popular audio formats.
                            </li>
                            <li><a href="https://github.com/lovell/sharp" target="_blank">sharp</a>
                                - Node.js module for resizing JPEG, PNG, WebP and TIFF images.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Рекомендуемые библиотеки на стороне клиента</h2>
                        <ul>
                            <li><a href="http://www.idangero.us/framework7/" target="_blank">Framework7</a>
                                - Full Featured HTML Framework For Building iOS7 Apps.
                            </li>
                            <li><a href="http://instantclick.io" target="_blank">InstantClick</a>
                                - Makes your pages load instantly by pre-loading them on mouse hover.
                            </li>
                            <li><a href="https://github.com/rstacruz/nprogress" target="_blank">NProgress.js</a>
                                - Slim progress bars like on YouTube and Medium.
                            </li>
                            <li><a href="https://github.com/IanLunn/Hover" target="_blank">Hover</a>
                                - Awesome CSS3 animations on mouse hover.
                            </li>
                            <li><a href="http://dimsemenov.com/plugins/magnific-popup/"
                                   target="_blank">Magnific Popup</a> - Responsive jQuery Lightbox Plugin.
                            </li>
                            <li><a href="http://wbotelhos.com/raty/" target="_blank">jQuery Raty</a>
                                - Star Rating Plugin.
                            </li>
                            <li><a href="http://wicky.nillia.ms/headroom.js/" target="_blank">Headroom.js</a>
                                - Hide your header until you need it.
                            </li>
                            <li><a href="http://vitalets.github.io/x-editable/" target="_blank">X-editable</a>
                                - Edit form elements inline.
                            </li>
                            <li><a href="http://github.hubspot.com/offline/docs/welcome/" target="_blank">Offline.js</a>
                                - Detect when user's internet connection goes offline.
                            </li>
                            <li><a href="http://fabien-d.github.io/alertify.js/" target="_blank">Alertify.js</a>
                                - Sweet looking alerts and browser dialogs.
                            </li>
                            <li><a href="http://brianreavis.github.io/selectize.js/" target="_blank">selectize.js</a>
                                - Styleable select elements and input tags.
                            </li>
                            <li><a href="http://github.hubspot.com/drop/docs/welcome/" target="_blank">drop.js</a>
                                -  Powerful Javascript and CSS library for creating dropdowns and other floating displays.
                            </li>
                            <li><a href="https://github.com/jlmakes/scrollReveal.js" target="_blank">scrollReveal.js</a>
                                - Declarative on-scroll reveal animations.
                            </li>
                        </ul>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import LinkToBlog from '~components/blog/link-to-blog.vue'

    export default {
        components: {
            LinkToBlog
        },
        data() {
            return {
                title: 'Рекомендуемые ресурсы',
                description: 'Ссылки на полезные инструменты и ресурсы для разработчика',
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ]
            }
        },
        mounted: function () {
            this.$store.commit('SET_THEME', 'blog');
        }
    }
</script>

