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
                        <v-btn to="/contacts" class="orange--text" flat>Контакты...</v-btn>
                        <v-btn href="https://github.com/bsa-git" class="orange--text" target="_blank" flat>
                            Проекты на Git-Hub
                        </v-btn>
                    </div>
                </v-parallax>
                <br/>
                <br/>
                <v-container fluid grid-list-md class="grey lighten-4">
                    <v-layout row wrap>
                        <v-flex xs12 sm4 v-for="page in pages" :key="page.title">
                            <v-card>
                                <v-toolbar :class="[ getColor(page.theme), 'darken-4' ]" dark>
                                    <v-toolbar-title>{{ page.title }}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-btn :to="page.to" title="Подробнее..." icon>
                                        <v-icon>more_horiz</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{ page.title }}</h3>
                                        <div v-html="page.content"></div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn :to="page.to" class="orange--text" flat>Подробнее...</v-btn>
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
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                title: 'Главная',
                description: '',
                pages: [
                    {
                        to: '/portfolio/',
                        title: 'Портфолио',
                        theme: 'portfolio',
                        content: 'Я участвовал в разработке проектов в разных областях: отображение промышленных данных в ' +
                        'реальном времени, система хранения/раедактирования документации в виде блога, оплата платежей в банковской сфере...'
                    },
                    {
                        to: '/about',
                        title: 'Об Авторе',
                        theme: 'about',
                        content: 'Привет, Я Сергей Бескоровайный <kbd>FRONT-END И BACK-END РАЗРАБОТЧИК</kbd>. ' +
                        'Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script...'
                    },
                    {
                        to: '/blog/',
                        title: 'Мой Блог',
                        theme: 'blog',
                        content: 'Решил опубликовать заметки по темам, которые меня интересуют. Это разработка серверных ' +
                        'приложений, на <strong>PHP</strong>, <strong>Node.js</strong> разработка клиенских ' +
                        'приложений на <strong>HTML5, CSS, JavaScript</strong> и многое другое ...'
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
                store.commit('SET_THEME', 'home')
            } catch (e) {
                error(e)
            }
        },
        computed: {
            ...mapGetters({
                theme: 'getThemeRegister'
            })
        },
        methods: {
            getColor: function (type) {
                return this.theme[type]['base'];
            },
        }
    }
</script>

<style>
    .parallax__content h1 {
        font-size: 70px;
    }

    .parallax {
        height: 350px !important;
        /* Border-Radius */
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        /* Box-Shadow */
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    }
</style>