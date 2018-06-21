<template>
    <v-navigation-drawer
            :dark="color_theme === 'dark'"
            persistent
            enable-resize-watcher
            overflow
            :mini-variant.sync="miniVariant"
            :clipped="clipped"
            v-model="compDrawer"
    >
        <v-list>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img :src="logo_img"/>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title
                                    :class="['headline', color_theme === 'dark' ? 'exotic--dark' : 'exotic--light']">
                                {{ logo_title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon router to="/" title="Главная">
                                <v-icon>home</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <template v-for="item in items">
                <v-divider v-if="item.divider"></v-divider>
                <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                <v-list-group v-if="item.children && !miniVariant">
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <template v-for="child in item.children">
                        <v-subheader v-if="child.header" v-text="child.header"></v-subheader>
                        <v-divider v-else-if="child.divider" v-bind:inset="child.inset"></v-divider>
                        <v-list-tile v-else
                                router
                                :to="child.to"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ child.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>
                </v-list-group>
                <v-list-tile v-else
                             router
                             :to="item.to"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: [
            'logo_title',
            'logo_icon',
            'logo_img',
            'miniVariant',
            'clipped',
            'drawer',
            'color_theme'
        ],
        data() {
            return {
                items: [
                    {icon: 'apps', title: 'Главная', to: '/'},
                    {icon: 'contacts', title: 'Об авторе', to: '/about'},
                    {icon: 'library_books', title: 'Блог', to: '/blog/list'},
                    {
                        action: 'shop',
                        title: 'Портфолио',
                        children: [
                            {icon: 'filter_none', title: 'Перечень работ', to: '/portfolio/list'},
                            { divider: true, inset: true },
                            { header: 'Google API' },
                            {icon: 'wc', title: 'Gapi-People', to: '/portfolio/gapi/people'},
                            {icon: 'mail_outline', title: 'Gapi-Email', to: '/portfolio/gapi/email'},
                            {icon: 'more', title: 'Gapi-Examples', to: '/portfolio/gapi/examples'},
                            { divider: true, inset: true },
                            { header: 'Silex (PHP micro-framework)' },
                            {icon: 'desktop_windows', title: 'Silex-MVC', to: '/portfolio/silex/mvc'},
                            {icon: 'last_page', title: 'Silex-UBKI', to: '/portfolio/silex/ubki'},
                            { divider: true, inset: true },
                            { header: 'Zend (PHP framework)' },
                            {icon: 'library_books', title: 'ZF-MyBlog', to: '/portfolio/zf/myblog'},
                            {icon: 'show_chart', title: 'ZF2-ASM', to: '/portfolio/zf/asm'},
                            { divider: true, inset: true },
                            { header: 'Vue.js (JavaScript framework)' },
                            {icon: 'account_circle', title: 'Vue-Resume', to: '/portfolio/vue/resume'},
                            {icon: 'work', title: 'Vue-Business-Light', to: '/portfolio/vue/business-light'},
                            {icon: 'more', title: 'Vue-Examples', to: '/portfolio/vue/examples'},
                            {icon: 'more', title: 'Vuex-Examples', to: '/portfolio/vue/vuex-examples'},
                            { divider: true, inset: true },
                            { header: 'Nuxt (JavaScript framework)' },
                            {icon: 'work', title: 'Nuxt-Business-Light', to: '/portfolio/nuxt/business-light'},
                            {icon: 'picture_in_picture', title: 'Nuxt-Vuetify-Start', to: '/portfolio/nuxt/vuetify-start'}
                        ]
                    },
                    {
                        divider: true,
                        header: 'Темы',
                        action: 'message',
                        title: 'Google Client API',
                        children: [
                            {icon: 'filter_none', title: 'Обзор', to: '/blog/gapi/overview'},
                            {icon: 'contact_mail', title: 'Gmail-Send', to: '/blog/gapi/gmail-send'},
                            {icon: 'mail_outline', title: 'Gmail-Inbox', to: '/blog/gapi/gmail-inbox'}
                        ]
                    }
                ]
            }

        },
        computed: {
            compDrawer: {
                // Getter:
                get: function () {
                    return this.drawer
                },
                // Setter:
                set: function (newValue) {
                    this.$emit('onNavLeft', newValue)
                }
            },
            ...mapGetters({
                theme: 'getTheme'
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .subheader
        height: 100px

    .subheader .btn
        height: initial !important
</style>