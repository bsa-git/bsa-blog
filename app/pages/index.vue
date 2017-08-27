<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout column>
            <v-flex xs12 sm10 offset-sm1>
                <v-parallax src="/img/system/vbanner.jpg" class="text-xs-center">
                    <h1 class="exotic--dark">BSA Lab.</h1>
                    <h5 class="exotic--dark ma-3">
                        Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.</h5>
                    <div class="text-xs-right">
                        <em>
                            <small>&mdash; Eric S. Raymond</small>
                        </em>
                    </div>
                    <div>
                        <v-btn to="/blog/gapi/" class="orange--text" flat>Контакты...</v-btn>
                        <v-btn href="https://github.com/bsa-git" class="orange--text" target="_blank" flat>Проекты на Git-Hub</v-btn>
                    </div>
                </v-parallax>
                <br />
                <br />
                <v-container fluid grid-list-md class="grey lighten-4">
                    <v-layout row wrap>
                        <v-flex xs12 sm4 v-for="card in cards" :key="card.title">
                            <v-card>
                                <v-toolbar :class="[ card.color, 'darken-4' ]" dark>
                                    <v-toolbar-title>{{ card.title }}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn :to="card.to" title="Подробнее..." icon>
                                        <v-icon>search</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{ card.title }}</h3>
                                        <div v-html="card.content"></div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn :to="card.to" class="orange--text" flat>Подробнее...</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Главная',
                description: '',
                cards: [
                    {
                        to: '/about',
                        title: 'Об Авторе',
                        color: 'purple',
                        content: 'Привет, Я Сергей Бескоровайный <kbd>FRONT-END И BACK-END РАЗРАБОТЧИК</kbd>. ' +
                        'Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script...'
                    },
                    {
                        to: '/blog/',
                        title: 'Мой Блог',
                        color: 'brown',
                        content: 'Привет, Я Сергей Бескоровайный <kbd>FRONT-END И BACK-END РАЗРАБОТЧИК</kbd>. ' +
                        'Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script...'
                    },
                    {
                        to: '/warnings/maintenance',
                        title: 'Мои Проекты',
                        color: 'cyan',
                        content: 'Привет, Я Сергей Бескоровайный <kbd>FRONT-END И BACK-END РАЗРАБОТЧИК</kbd>. ' +
                        'Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script...'
                    }
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
                store.commit('SET_THEME', 'home')
            } catch (e) {
                error(e)
            }
        }
    }
</script>

<style>
    .parallax__content h1{
        font-size: 70px;
    }
    .parallax {
        height: 350px !important;
        /* Border-Radius */
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        /* Box-Shadow */
        box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
    }
</style>