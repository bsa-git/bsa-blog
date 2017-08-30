<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card :class="[theme.base,  'darken-2']" dark>
                    <v-toolbar :class="[theme.base,  'darken-4']" dark>
                        <v-btn to="/" title="Главная" icon>
                            <v-icon>home</v-icon>
                        </v-btn>
                        <v-toolbar-title>Портфолио</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn href="https://github.com/bsa-git" target="_blank" title="GitHub" icon>
                            <v-icon>public</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list two-line dark>
                        <template v-for="project in projects">
                            <v-subheader v-if="project.header" v-text="project.header"></v-subheader>
                            <v-divider v-else-if="project.divider" v-bind:inset="project.inset"></v-divider>
                            <v-list-tile avatar v-else :to="project.to" :key="project.title">
                                <v-list-tile-avatar>
                                    <v-icon dark>{{ project.icon }}</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="project.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="project.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                title: 'Портфолио',
                description: 'Мои проекты.',
                projects: [
                    {header: 'Google Client API'},
                    {
                        icon: 'filter_none',
                        to: '/blog/gapi/',
                        title: 'Введение',
                        subtitle: "Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как <span class='grey--text text--lighten-2'>People...</span>"
                    },
                    {divider: true, inset: true},
                    {
                        icon: 'mail_outline',
                        to: '/blog/gapi/email',
                        title: 'Google Mail',
                        subtitle: "Сервис <span class='grey--text text--lighten-2'>Google Mail</span> позволяет нам передавать/принимать почтовые сообщения..."
                    },
                    {divider: true, inset: true},
                    {
                        icon: 'location_on',
                        to: '/blog/gapi/maps',
                        title: 'Google Maps',
                        subtitle: "Сервис <span class='grey--text text--lighten-2'>Google Maps</span> позволяет нам работать с географическими данными и координатами..."
                    },
                ]
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'portfolio')
            } catch (e) {
                error(e)
            }
        },
        computed: mapGetters({
            theme: 'getTheme'
        })
    }
</script>
