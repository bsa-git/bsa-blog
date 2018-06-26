<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-13</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Этот проект демонстрирует использование некоторых функций сервиса
                            <a href="https://developers.google.com/gmail/api/guides/"
                               target="_blank">Gmail API</a>.
                            Gmail API является RESTful API, которое можно использовать для доступа к почтовым сообщениям пользователя
                            и отправлять электронные сообщения. Для большинства веб приложений (включая мобильные приложения),
                            Gmail API является лучшим выбором для авторизованного доступа к пользовательским данным Gmail.
                        </p>
                        <p>
                            Этот пример демонстрирует возможность отображать полученные сообщения, создавать и
                            передавать новые сообщения и отвечать на полученные сообщения. За основу была взята
                            статья которую можно посмотреть <a
                                href="https://www.sitepoint.com/sending-emails-gmail-javascript-api/" target="_blank">здесь</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот пример на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/gapi-email" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Google Client API</strong></dt>
                            <dd>
                                <a href="https://developers.google.com/identity/sign-in/web/devconsole-project"
                                   target="_blank">Регистрация через Google для Вебсайтов</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/api-client-library/javascript/" target="_blank">Google API Клиентская Библиотека для JavaScript</a>
                            </dd>
                            <dt><strong>Gmail API</strong></dt>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/guides/"
                                   target="_blank">Руководство по Gmail API</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/v1/reference/users/messages"
                                   target="_blank">Users.messages</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/v1/reference/users/messages/list"
                                   target="_blank">Users.messages: list</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/v1/reference/users/messages/get"
                                   target="_blank">Users.messages: get</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/gmail/api/v1/reference/users/messages/send"
                                   target="_blank">Users.messages: send</a>
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
                        </dl>
                    </section>
                    <section>
                        <h2>Загрузка/Инициализация клиенской библиотеки Google API</h2>
                        <p>
                            Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <email-code1></email-code1>
                    </section>
                    <section>
                        <h2>Авторизация пользователя на Google сервере</h2>
                        <p>
                            Перед тем как выполнить какие то операции с Gmail API необходимо авторизироваться см. пр.2.
                            Если авторизация прошла успешно, то загружается библиотека <code>loadGmailApi()</code>
                        </p>
                        <kbd>пр.2</kbd>
                        <email-code2></email-code2>
                    </section>
                    <section>
                        <h2>Отображение сообщений пользователя в Inbox</h2>
                        <p>
                            При получении сообщений из Inbox, используются команды (Users.messages: <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list"
                                target="_blank">list</a>/<a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/get"
                                target="_blank">get</a>) см. пр.3.
                        </p>
                        <p>
                            Извлечение/Раскодирование/Отображение информации из почтового сообщения происходит в функции
                            <code>appendMessageRow(message)</code>, с помощью ряда функций см. пр.4.
                        </p>
                        <kbd>пр.3</kbd>
                        <email-code3></email-code3>

                        <kbd>пр.4</kbd>
                        <email-code4></email-code4>
                    </section>
                    <section>
                        <h2>Передача сообщений</h2>
                        <p>
                            При передаче сообщений, используются команда (Users.messages: <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/send"
                                target="_blank">send</a>) см. пр.5.
                        </p>
                        <kbd>пр.5</kbd>
                        <email-code5></email-code5>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import EmailCode1 from '~components/portfolio/gapi/email/code-1.vue'
    import EmailCode2 from '~components/portfolio/gapi/email/code-2.vue'
    import EmailCode3 from '~components/portfolio/gapi/email/code-3.vue'
    import EmailCode4 from '~components/portfolio/gapi/email/code-4.vue'
    import EmailCode5 from '~components/portfolio/gapi/email/code-5.vue'

    export default {
        components: {
            LinkToPortfolio,
            EmailCode1,
            EmailCode2,
            EmailCode3,
            EmailCode4,
            EmailCode5
        },
        data() {
            return {
                title: 'Gmail API - пример',
                description: 'Пример использования Gmail API',
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

