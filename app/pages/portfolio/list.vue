<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
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
                        <template v-for="(item, index) in getItems">
                            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
                            <v-list-tile avatar v-else :to="item.to" :key="index">
                                <v-list-tile-avatar>
                                    <v-icon dark>{{ item.icon }}</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
        <div id="portfolio-pagination" class="text-xs-center ma-5">
            <v-pagination v-bind:length.number="pagination.totalPages()" v-model="page"
                          total-visible="3"></v-pagination>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Pagination from '~/plugins/lib/pagination/pagination.class'
    import portfolioProjects from '~/store/data/portfolio-projects'

    export default {
        data() {
            return {
                title: 'Портфолио',
                description: 'Мои проекты.',
                page: 1,
                pagination: null,
                items: portfolioProjects.items,
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
        created: function () {
            // Set theme
            this.$store.commit('SET_THEME', 'portfolio')
            // Create Pagination data
            if (!this.pagination) {
                this.pagination = new Pagination({items: this.items, total: this.config.pagination.total});
            }
        },
        computed: {
            getItems: function () {
                if (!this.pagination) {
                    this.pagination = new Pagination({items: this.items, total: this.config.pagination.total});
                }
                return this.pagination.getItems(this.page);
            },
            ...mapGetters({
                theme: 'getTheme',
                config: 'getConfig'
            })
        }
    }
</script>

<style>
    #portfolio-pagination .pagination__item--active {
        background: #455a64;
    }
</style>
