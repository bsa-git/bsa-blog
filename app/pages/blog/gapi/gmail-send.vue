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
                    <link-to-blog></link-to-blog>
                    <gmail-send-introduction></gmail-send-introduction>
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
                        <gmail-send-code1></gmail-send-code1>
                    </section>
                    <section>
                        <h2>Передача email сообщений (Users.messages: send)</h2>
                        <div class="note">
                            <v-icon class="blue--text text--darken-2">grade</v-icon>
                            Требуется <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/send#auth"
                                target="_blank">авторизация</a>
                        </div>
                        <p>
                            Отправляет указанное сообщение получателям в <code>To, Cc, Bcc</code> заголовках.
                        </p>
                        <p>
                            Этот метод поддерживает <code>/upload URI</code>
                            и может передавать медиа со следующими характеристиками:
                        </p>
                        <ul>
                            <li>Максимальный размер файла: 35MB</li>
                            <li>Предполагает Media MIME типы: message/rfc822</li>
                        </ul>
                        <p>
                            Более подробную информацию по передаче email сообщений можно посмотреть <a
                                href="https://developers.google.com/gmail/api/v1/reference/users/messages/send"
                                target="_blank">здесь</a>
                        </p>
                        <p>
                            Прежде чем передать сообщение необходимо авторизироваться пользователю на Google сервере.
                            Для этого нужно выполнить функцию
                            <a
                                    href="https://developers.google.com/identity/sign-in/web/reference#googleauthsignin"
                                    target="_blank">авторизации</a>, см. пр.2:
                        </p>
                        <kbd>пр.2</kbd>
                        <gmail-send-code2></gmail-send-code2>
                        <p>
                            После авторизации пользователя можно передать сообщение см. пр.3:
                        </p>
                        <kbd>пр.3</kbd>
                        <gmail-send-code3></gmail-send-code3>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToBlog from '~components/blog/link-to-blog.vue'
    import GmailSendIntroduction from '~components/blog/gapi/gmail-send/introduction.vue'
    import GmailSendCode1 from '~components/blog/gapi/gmail-send/code-1.vue'
    import GmailSendCode2 from '~components/blog/gapi/gmail-send/code-2.vue'
    import GmailSendCode3 from '~components/blog/gapi/gmail-send/code-3.vue'

    export default {
        components: {
            LinkToBlog,
            GmailSendIntroduction,
            GmailSendCode1,
            GmailSendCode2,
            GmailSendCode3
        },
        data() {
            return {
                title: 'Gmail - Send Message',
                description: 'Передача сообщений через Gmail Client API.'
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

