<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-container>
            <v-parallax src="/img/system/vbanner.jpg">
                <v-layout column align-center justify-center>
                    <h1 class="white--text exotic--light">BSA Lab.</h1>
                    <h5 class="white--text ma-3">Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.</h5>
                    <div class="text-xs-right">
                        <em>
                            <small>&mdash; Eric S. Raymond</small>
                        </em>
                    </div>
                </v-layout>
            </v-parallax>
            <br/>

            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-toolbar class="blue darken-4" dark>
                            <v-btn to="/blog/gapi/" icon>
                                <v-icon>more_horiz</v-icon>
                            </v-btn>
                            <v-toolbar-title class="white--text">Google Client API</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn href="https://github.com/bsa-git" target="_blank" icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Google Client API - Введение</h3>
                                <div>
                                    Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как
                                    People, Calendar, Drive и т.д. Для этого нужно использовать JavaScript клиенскую библиотеку,
                                    чтобы взаимодействовать с Google APIs...
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn to="/blog/gapi/"  class="orange--text"  flat>Подробнее...</v-btn>
                            <v-btn href="https://github.com/bsa-git" class="orange--text" target="_blank" flat>Git-Hub</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Блог',
                description: 'Заметки о самом важном.'
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
                store.commit('SET_THEME', 'home')
            } catch (e) {
                error(e)
            }
        }
    }
</script>