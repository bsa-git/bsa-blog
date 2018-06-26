<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-14</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            В приложении представленны примеры, которые демонстрируют использование некоторых Google сервисов,
                            таких как  People, GMail и т.д. Само приложение разработано с помощью
                            <a href="https://nuxtjs.org/guide" target="_blank">Nuxt.js</a>.
                            Nuxt.js — это фреймворк для универсальных приложений на
                            <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/gapi-examples" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://bsa-git.github.io/gapi-examples/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Google API</strong></dt>
                            <dd>
                                <a href="https://developers.google.com/api-client-library/javascript/" target="_blank">Google API Клиентская Библиотека для JavaScript</a>
                            </dd>
                            <dt><strong>Google People API</strong></dt>
                            <dd><a href="https://developers.google.com/people/" target="_blank">Документация</a></dd>
                            <dd>
                                <a href="https://developers.google.com/people/api/rest/v1/people/get"
                                   target="_blank">Method: people.get</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/people/api/rest/v1/people.connections/list"
                                   target="_blank">Method: people.connections.list</a>
                            </dd>
                            <dt><strong>Gmail API</strong></dt>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/guides/"
                                   target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="http://opds.sut.ru/old/electronic_manuals/mail/1_Struct_el_soob.htm"
                                   target="_blank">Структура электронного сообщения</a>
                            </dd>
                            <dd>
                                <a href="https://rfc2.ru/1521.rfc"
                                   target="_blank">RFC 1521 — Почтовый стандарт MIME</a>
                            </dd>
                            <dd>
                                <a href="https://rfc2.ru/5322.rfc"
                                   target="_blank">RFC 5322 — Формат сообщений Internet (IMF)</a>
                            </dd>
                            <dt><strong>Nuxt.js</strong></dt>
                            <dd><a href="https://nuxtjs.org/guide" target="_blank">Документация</a></dd>
                            <dd>
                                <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>
                            </dd>
                            <dd>
                                <a href="https://router.vuejs.org/en/" target="_blank">Vue Router</a>
                            </dd>
                            <dd>
                                <a href="https://vuex.vuejs.org/en/" target="_blank">Vuex</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <p>Это приложение демонстрирует работу следующих Google сервисов:</p>
                        <h3>People API</h3>
                        <ul>
                            <li><a href="#people-get">Method: people.get</a></li>
                            <li><a href="#people-connections">Method: people.connections.list</a></li>
                        </ul>
                        <h3>Gmail API</h3>
                        <ul>
                            <li><a href="#gmail-send">Method: users.messages: send</a></li>
                            <li><a href="#gmail-inbox">Methods: users.messages: list/get</a></li>
                        </ul>
                        <h3>Установка/Конфигурация/Построение приложения</h3>
                        <p>
                            Приложение можно установить с <a
                                href="https://github.com/bsa-git/gapi-examples" target="_blank">GitHub</a>, варианты
                            построения приложения можно посмотреть в пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <examples-code1></examples-code1>
                        <h3>Структура приложения</h3>
                        <p>
                            Приложение имеет следующую структуру см. пр.2.
                        </p>
                        <kbd>пр.2</kbd>
                        <examples-code2></examples-code2>
                    </section>
                    <section>
                        <h2>Загрузка/Инициализация клиенской библиотеки Google API</h2>
                        <p>
                            Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.3.
                            Загрузка происходит с помощью функции <code>loadGapi()</code> при создании компонента
                            в модуле <code>/app/layouts/default.vue</code>.
                        </p>
                        <kbd>пр.3</kbd>
                        <examples-code3></examples-code3>
                    </section>
                    <section>
                        <h2>Авторизация пользователя на Google сервере</h2>
                        <p>
                            В приложении авторизация пользователя происходит на странице сайта <code>Login</code>.
                            Без авторизации пользователя доступ к демонстрационным примерам - <strong>запрещен</strong>!
                            Авторизация пользователя происходит в модуле <code>/app/pages/login.vue</code> с помощью функции
                            <a
                                    href="https://developers.google.com/identity/sign-in/web/reference#googleauthsignin"
                                    target="_blank">GoogleAuth.signIn()</a>, см. пр.4.

                        </p>
                        <kbd>пр.4</kbd>
                        <examples-code4></examples-code4>
                    </section>
                    <section>
                        <h2>Google People API (Method: people.get)</h2>
                        <p><a name="people-get"></a></p>
                        <p>
                            В приложении эта операция выполняется в модуле <code>/app/pages/services/people-get.vue</code> по адресу <code>/services/people-get</code>
                            При этом мы можем получить иноформацию для конкретного пользователя по его уникальному имени.
                            Используя имя <code>people/me</code> мы получим информацию о самом авторизированном пользователе см. пр.5.

                        </p>
                        <kbd>пр.5</kbd>
                        <examples-code5></examples-code5>
                    </section>
                    <section>
                        <h2>Google People API (Method: people.connections.list)</h2>
                        <p><a name="people-connections"></a></p>
                        <p>
                            В приложении эта операция выполняется в модуле <code>/app/pages/services/people-connections.vue</code> по адресу <code>/services/people-connections</code>
                            Обеспечивает список авторизированных пользовательских контактов, и их профайлов см. пр.6.

                        </p>
                        <kbd>пр.6</kbd>
                        <examples-code6></examples-code6>
                    </section>
                    <section>
                        <h2>Передача email сообщений (Method: users.messages: send)</h2>
                        <p><a name="gmail-send"></a></p>
                        <p>
                            В приложении эта операция выполняется в модуле <code>/app/pages/services/gmail-send-message.vue</code> по адресу <code>/services/gmail-send-message</code>
                            Этот метод отправляет указанное сообщение получателям в <code>To, Cc, Bcc</code> заголовках. см. пр.7.
                        </p>
                        <kbd>пр.7</kbd>
                        <examples-code7></examples-code7>
                    </section>
                    <section>
                        <h2>Получение сообщений в формате (text/html; charset="UTF-8")</h2>
                        <p><a name="gmail-inbox"></a></p>
                        <p>
                            В приложении эта операция выполняется в модуле <code>/app/pages/services/gmail-display-inbox.vue</code> по адресу <code>/services/gmail-display-inbox</code>
                            Для получения сообщений в формате (text/html; charset="UTF-8") используются команды
                            (Users.messages: <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list"
                                target="_blank">list</a>/<a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/get"
                                target="_blank">get</a>) см. пр.8.

                        </p>
                        <kbd>пр.8</kbd>
                        <examples-code8></examples-code8>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import ExamplesCode1 from '~components/portfolio/gapi/examples/code-1.vue'
    import ExamplesCode2 from '~components/portfolio/gapi/examples/code-2.vue'
    import ExamplesCode3 from '~components/portfolio/gapi/examples/code-3.vue'
    import ExamplesCode4 from '~components/portfolio/gapi/examples/code-4.vue'
    import ExamplesCode5 from '~components/portfolio/gapi/examples/code-5.vue'
    import ExamplesCode6 from '~components/portfolio/gapi/examples/code-6.vue'
    import ExamplesCode7 from '~components/portfolio/gapi/examples/code-7.vue'
    import ExamplesCode8 from '~components/portfolio/gapi/examples/code-8.vue'

    export default {
        components: {
            LinkToPortfolio,
            ExamplesCode1,
            ExamplesCode2,
            ExamplesCode3,
            ExamplesCode4,
            ExamplesCode5,
            ExamplesCode6,
            ExamplesCode7,
            ExamplesCode8
        },
        data() {
            return {
                title: 'Google API - примеры',
                description: 'Демонстрация работы Google API сервисов.',
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
            this.$store.commit('SET_THEME', 'portfolio');
            Highlight.initBlock();
        }
    }
</script>

