<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-10</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Этот проект демонстрирует использование некоторых функций сервиса <a
                                href="https://developers.google.com/people/"
                                target="_blank">Google People API</a>.
                            Этот сервис обеспечивает доступ к информации о профайлах и контактах пользователей.
                        </p>
                        <p class="subheading">
                            <strong>
                                Пример использования Google People API можно посмотреть <a
                                    href="https://github.com/bsa-git/gapi-people" target="_blank">здесь</a>
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
                            <dt><strong>Google People API</strong></dt>
                            <dd><a href="https://developers.google.com/people/" target="_blank">Документация</a></dd>
                            <dd>
                                <a href="https://developers.google.com/people/api/rest/"
                                   target="_blank">Описание интерфейса</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/people/api/rest/v1/people/get"
                                   target="_blank">Method: people.get</a>
                            </dd>
                            <dd>
                                <a href="https://developers.google.com/people/quickstart/js"
                                   target="_blank">Примеры</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Загрузка/Инициализация клиенской библиотеки Google API</h2>
                        <p>
                            Вначале нужно загрузить и инициализировать клиенскую библиотеку Google API см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <people-code1></people-code1>
                    </section>
                    <section>
                        <h2>Авторизация пользователя на Google сервере</h2>
                        <p>
                            Перед тем как выполнить какие то операции с Google People API необходимо авторизироваться см. пр.2.
                        </p>
                        <kbd>пр.2</kbd>
                        <people-code2></people-code2>
                    </section>
                    <section>
                        <h2>Выполним операцию (Method: people.get)</h2>
                        <p>
                            При этом мы можем получить иноформацию для конкретного пользователя по его уникальному имени.
                            Используя имя <code>people/me</code> мы получим информацию о самом авторизированном пользователе см. пр.3.
                        </p>
                        <kbd>пр.3</kbd>
                        <people-code3></people-code3>
                        <h3>Параметры запроса</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Параметры</th>
                                    <th> </th>
                                </tr>
                                <tr>
                                    <td>personFields</td>
                                    <td>
                                        <p>string (<code><a href="https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMask" target="_blank">FieldMask</a></code> format)</p>
                                        <p><strong>Требуется.</strong> Маска поля для ограничения того, какие данные из профайла пользователя будут получены. Допустимые значения:</p>
                                        <ul>
                                            <li>addresses</li>
                                            <li>ageRanges</li>
                                            <li>biographies</li>
                                            <li>birthdays</li>
                                            <li>braggingRights</li>
                                            <li>coverPhotos</li>
                                            <li>emailAddresses</li>
                                            <li>events</li>
                                            <li>genders</li>
                                            <li>imClients</li>
                                            <li>interests</li>
                                            <li>locales</li>
                                            <li>memberships</li>
                                            <li>metadata</li>
                                            <li>names</li>
                                            <li>nicknames</li>
                                            <li>occupations</li>
                                            <li>organizations</li>
                                            <li>phoneNumbers</li>
                                            <li>photos</li>
                                            <li>relations</li>
                                            <li>relationshipInterests</li>
                                            <li>relationshipStatuses</li>
                                            <li>residences</li>
                                            <li>skills</li>
                                            <li>taglines</li>
                                            <li>urls</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import PeopleCode1 from '~components/portfolio/gapi/people/code-1.vue'
    import PeopleCode2 from '~components/portfolio/gapi/people/code-2.vue'
    import PeopleCode3 from '~components/portfolio/gapi/people/code-3.vue'

    export default {
        components: {
            LinkToPortfolio,
            PeopleCode1,
            PeopleCode2,
            PeopleCode3
        },
        data() {
            return {
                title: 'Google People API - пример',
                description: 'Пример использования Google People API.',
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

