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
                        <v-toolbar-title>Заметки</v-toolbar-title>
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
        <div id="blog-pagination" class="text-xs-center mt-5">
            <v-pagination v-bind:length.number="pagination.totalPages()" v-model="page" total-visible="3"></v-pagination>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Pagination from '~/plugins/lib/pagination/pagination.class'
    import blogPosts from '~/store/data/blog-posts'

    export default {
        data() {
            return {
                title: 'Блог',
                description: 'Заметки о самом важном.',
                page: 1,
                pagination: null,
                items: blogPosts.items,
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
            this.$store.commit('SET_THEME', 'blog');
            // Create Pagination data
            if( !this.pagination){
                this.pagination = new Pagination({items: this.items, total: this.config.pagination.total});
            }
        },
        computed: {
            getItems: function () {
                // Create Pagination data
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
    #blog-pagination .pagination__item--active {
        background: #5d4037;
    }
</style>
