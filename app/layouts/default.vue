<template>
    <v-app id="vuetify-nuxt-start" toolbar footer>
        <!-- Navigation left menu -->
        <app-navigation-left
                :logo_title="config.personal_data.logo_title"
                :logo_icon="config.personal_data.logo_icon"
                :logo_img="config.personal_data.logo_img"
                :mini-variant="navLeftMini"
                :clipped="navLeftClipped"
                :drawer="navLeft"
                :color_theme="navLeftTheme"
                v-on:onNavLeft="modelNavLeft"
        ></app-navigation-left>
        <!-- Toolbar -->
        <app-toolbar
                :title="toolbar_title"
                :logo_img="config.personal_data.logo_img"
                v-on:onNavLeft="navLeft = !navLeft"
                v-on:onNavLeftMini="navLeftMini = !navLeftMini"
                v-on:onNavLeftClipped="navLeftClipped = !navLeftClipped"
                v-on:onFooterFixed="footerFixed = !footerFixed"
                v-on:onNavRight="navRight = !navRight"
        ></app-toolbar>
        <!-- Main content -->
        <app-page-content></app-page-content>
        <!-- Navigation right menu -->
        <app-navigation-right
                v-if="config.ui.nav_right.show"
                :rightDrawer="navRight"
                v-on:onNavRight="modelNavRight"
        ></app-navigation-right>
        <!-- Footer -->
        <app-footer
                :fixed="footerFixed"
                :copyright="config.personal_data.copyright"
                :site="config.personal_data.designed_with_url"
                :developer="config.personal_data.designed_with"
        ></app-footer>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    // --- Mutation types --- //
    import types from '~/store/mutation-types'
    // Config
    import config from '~/config/env'
    // User Agent
    import useragent from 'express-useragent'
    // Load google API
    import loadGapi from '~/plugins/lib/google/gapi-load'
    // Components
    import AppToolbar from '~components/app/toolbar.vue'
    import AppPageContent from '~components/app/page-content.vue'
    import AppNavigationLeft from '~components/app/navigation-left.vue'
    import AppNavigationRight from '~components/app/navigation-right.vue'
    import AppFooter from '~components/app/footer.vue'

    export default {
        components: {
            AppToolbar,
            AppPageContent,
            AppNavigationLeft,
            AppNavigationRight,
            AppFooter
        },
        data() {
            return {
                navLeft: true,
                navLeftClipped: false,
                navLeftMini: false,
                navLeftTheme: 'dark', // light dark
                navRight: false,
                footerFixed: false,
            }
        },
        created: function () {
            try {
                if (!this.$isServer && this.config.debug) {
                    console.log('app.default.created - OK')
                }
                // Ini data
                this.iniData()

                // UserAgent
                let userAgent = null;
                if (this.$isServer) {
                    userAgent = {};
                } else {
                    userAgent = this.$store.getters.getUserAgent;
                    if (_.isEmpty(userAgent)) {
                        userAgent = useragent.parse(navigator.userAgent);
                    }
                }
                this.$store.commit(types.SET_USERAGENT, userAgent);
                // Set sign isClient for store
                this.$store.commit('SET_IS_CLIENT', !this.$isServer);
                // Set sign isStatic for store
                if(!this.$isServer){
                    let host = window.location.host;
                    host = host.split(':')[0];
                    this.$store.commit('SET_IS_LOCALHOST', host === 'localhost')
                }
                // Load google API
                loadGapi(this.$store, !this.$isServer, this.$router)
            } catch (error) {
                this.$store.commit('SET_ERROR', error);
                this.$router.replace('/error')
            }
        },
        computed: {
            toolbar_title: function () {
                let route_name = this.$route.name ? this.$route.name : 'Error'
                route_name = _.capitalize(`${route_name == 'index' ? 'home' : route_name}`)
                return `${this.config.personal_data.app_title} / ${route_name}`
            },
            ...mapGetters({
                config: 'getConfig',
                theme: 'getTheme'
                //apiGoogle: 'getGapi'
            })
        },
        methods: {
            iniData: function () {
                this.navLeft = this.config.ui.nav_left.value;
                this.navLeftMini = this.config.ui.nav_left_mini.value;
                this.navLeftClipped = this.config.ui.nav_left_clipped.value;
                this.navLeftTheme = this.config.ui.color_theme;
                this.navRight = this.config.ui.nav_right.value;
                this.footerFixed = this.config.ui.footer_fixed.value;
            },
            modelNavLeft: function (newValue) {
                this.navLeft = newValue
            },
            modelNavRight: function (newValue) {
                this.navRight = newValue
            }
            /*
            loadGoogleAPI: function () {
                if (!this.$isServer && (this.apiGoogle === null)) {
                    // Load/Init Google API
                    const gmail = this.config.gapi.services.gmail;
                    const discoveryDocs = _.concat(gmail.discoveryDocs);
                    const scope = _.concat(
                        gmail.scopes.send).join(' ');
                    const params = {
                        debug: this.config.debug,
                        apiKey: this.config.gapi.apiKey,
                        clientId: this.config.gapi.clientId,
                        discoveryDocs: discoveryDocs,
                        scope: scope
                    };
                    ApiGoogle.staticLoadGoogleAPI(params)
                        .then((apiGoogle) => {
                            if (this.config.debug) {
                                console.log('ApiGoogle.staticLoadGoogleAPI - OK')
                            }
                            this.$store.commit('SET_GOOGLE_API', apiGoogle)
                            // Load google mail API
                            this.apiGoogle.loadGmailApi()
                                .then(() => {
                                    if (this.config.debug) {
                                        console.log('apiGoogle.loadGmailApi - OK')
                                    }
                                    // Synchronization of the real state of signed in with Google
                                    // with the internal state of the signed in in store.
                                    if (this.apiGoogle.isSignedIn() !== this.isAuth) {
                                        const userInfo = this.apiGoogle.getCurrentUserInfo();
                                        // Save to vuex
                                        this.$store.commit('SET_TOKEN', userInfo.token);
                                        this.$store.commit('SET_USER', userInfo)
                                    }
                                })
                        })
                }
            }
            */
        }
    }
</script>

<style lang="stylus" scoped>

    .subheader
        height: 100px

    .subheader .btn
        height: initial !important

</style>