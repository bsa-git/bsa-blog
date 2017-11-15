<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-08</p>
            <v-card class="blog-post">
                <v-card-text>
                    <gmail-inbox-introduction></gmail-inbox-introduction>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
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
                        <h2>Загрузка/Инициализация библиотеки Google API</h2>
                        <p>
                            Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <gmail-inbox-code1></gmail-inbox-code1>
                    </section>
                    <section>
                        <h2>Получение сообщений (Users.messages: list)</h2>
                        <div class="note">
                            <v-icon class="blue--text text--darken-2">grade</v-icon>
                            Требуется <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list#auth"
                                target="_blank">авторизация</a>
                        </div>
                        <p>
                            Получить список сообщений пользователя.
                            Более подробную информацию по этой команде можно посмотреть <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list"
                                target="_blank">здесь</a>
                        </p>
                        <p>
                            Прежде чем выполнить команду необходимо авторизироваться пользователю на Google сервере.
                            Для этого нужно выполнить функцию
                            <a
                                    href="https://developers.google.com/gmail/api/v1/reference/users/messages/list#auth"
                                    target="_blank">авторизации</a>, см. пр.2:
                        </p>
                        <kbd>пр.2</kbd>
                        <gmail-inbox-code2></gmail-inbox-code2>
                        <p>
                            После авторизации пользователя можно выполнить команду, см. пр.3:
                        </p>
                        <kbd>пр.3</kbd>
                        <gmail-inbox-code3></gmail-inbox-code3>
                    </section>
                    <section>
                        <h2>Получение специфического сообщения (Users.messages: get)</h2>
                        <div class="note">
                            <v-icon class="blue--text text--darken-2">grade</v-icon>
                            Требуется <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/get#auth"
                                target="_blank">авторизация</a>
                        </div>
                        <p>
                            Получить специфическое сообщение пользователя.
                            Более подробную информацию по этой команде можно посмотреть <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/get"
                                target="_blank">здесь</a>
                        </p>
                        <p>
                            Прежде чем выполнить команду необходимо авторизироваться пользователю на Google сервере.
                            Для этого нужно выполнить функцию
                            <a
                                    href="https://developers.google.com/gmail/api/v1/reference/users/messages/get#auth"
                                    target="_blank">авторизации</a>, см. пр.2:
                        </p>
                        <p>
                            После авторизации пользователя можно выполнить команду, см. пр.4:
                        </p>
                        <kbd>пр.4</kbd>
                        <gmail-inbox-code4></gmail-inbox-code4>
                    </section>
                    <section>
                        <h2>Получение сообщений в формате (text/html; charset="UTF-8")</h2>
                        <div class="note">
                            <v-icon class="blue--text text--darken-2">grade</v-icon>
                            Требуется <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list#auth"
                                target="_blank">авторизация</a>
                        </div>
                        <p>
                            Для получения сообщений в формате (text/html; charset="UTF-8") используются команды
                            (Users.messages: <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/list"
                                target="_blank">list</a>/<a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/get"
                                target="_blank">get</a>).
                        </p>
                        <p>
                            Прежде чем выполнить эти команды необходимо авторизироваться пользователю на Google сервере см. пр.2.
                            После авторизации пользователя можно выполнить следующий код, см. пр.5:
                        </p>
                        <kbd>пр.5</kbd>
                        <gmail-inbox-code5></gmail-inbox-code5>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import GmailInboxIntroduction from '~components/blog/gapi/gmail-send/introduction.vue'
    import GmailInboxCode1 from '~components/blog/gapi/gmail-send/code-1.vue'
    import GmailInboxCode2 from '~components/blog/gapi/gmail-send/code-2.vue'
    import GmailInboxCode3 from '~components/blog/gapi/gmail-inbox/code-3.vue'
    import GmailInboxCode4 from '~components/blog/gapi/gmail-inbox/code-4.vue'
    import GmailInboxCode5 from '~components/blog/gapi/gmail-inbox/code-5.vue'

    export default {
        components: {
            GmailInboxIntroduction,
            GmailInboxCode1,
            GmailInboxCode2,
            GmailInboxCode3,
            GmailInboxCode4,
            GmailInboxCode5
        },
        data() {
            return {
                title: 'Gmail - Inbox',
                description: 'Получить сообщения из Gmail Inbox.'
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
        mounted: function () {
            this.$store.commit('SET_THEME', 'blog')
            Highlight.initBlock();
        }
    }
</script>

