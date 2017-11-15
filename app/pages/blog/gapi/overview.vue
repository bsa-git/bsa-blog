<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-08-21</p>
            <v-card class="blog-post">
                <v-card-text>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как People, Calendar, Drive, GMail и т.д.
                            Для этого нужно использовать  JavaScript клиенскую библиотеку, чтобы взаимодействовать с Google APIs.
                            Оригинал статьи можно посмотреть <a
                                href="https://developers.google.com/api-client-library/javascript/start/start-js"
                                target="_blank">здесь</a>.
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Google аккаунт</strong></dt>
                            <dd><a href="https://www.google.com/accounts" target="_blank">Войти</a></dd>
                            <dd>
                                <a href="https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount"
                                   target="_blank">Зарегистрироваться</a></dd>
                            <dt><strong>Google для разработчика</strong></dt>
                            <dd><a href="https://console.developers.google.com/project" target="_blank">Консоль разработчика</a>
                            </dd>
                            <dd><a href="https://developers.google.com/apis-explorer/" target="_blank">Google APIs и сервисы</a>
                            </dd>
                            <dd><a href="https://console.developers.google.com/apis/credentials" target="_blank">Учетные данные для вашего проекта</a>
                            </dd>
                            <dd><a href="https://developers.google.com/api-client-library/javascript/features/discovery"
                                   target="_blank">API Discovery Document(s)</a></dd>
                            <dd><a href="https://developers.google.com/identity/sign-in/web/devconsole-project"
                                   target="_blank">Регистрация через Google для Вебсайтов</a></dd>
                            <dd><a href="https://developers.google.com/api-client-library/javascript/" target="_blank">Google API Клиентская Библиотека для JavaScript</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Настройка доступа</h2>

                        <h3>Получить Google Account</h3>
                        <p>
                            Вначале, войдите под своим Google Account <a href="https://www.google.com/accounts"
                                                                         target="_blank">войти</a>, если вы еще не
                            имеете Google Account, то <a
                                href="https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount"
                                target="_blank">зарегистрируйтесь</a>.
                        </p>

                        <h3>Создать Google проект</h3>
                        <p>
                            Перейти к <a href="https://console.developers.google.com/project" target="_blank">Google API Консоли</a>.
                            Нажмите <strong>Создать проект</strong>
                            введите имя проекта, и нажмите <strong>Создать</strong>.
                            Если у вас уже есть проекты, то выберете существующий проект.
                        </p>
                        <p>
                            Проект нужен чтобы управлять различными параметрами работы с сервисами Google.
                        </p>
                        <ul>
                            <li>Управлять доступом к ресурсам;</li>
                            <li>Предоставить доступ другим участникам к работе с проектом;</li>
                            <li>Назначать роли и права доступа пользователям;</li>
                            <li>Назначать квоты на использование сервисами;</li>
                            <li>Создавать и удалять криптографические ключи;</li>
                            <li>Создавать учетные данные: Ключи API и Идентификаторы клиентов OAuth 2.0;</li>
                            <li>Подключать Google APIs, с которыми вы планируете работать.</li>
                        </ul>
                        <h3>Подключить Google APIs</h3>
                        <p>
                            После того как вы создадите или выберете существующий проект, войдите в консоль управления проктом
                            в раздел <strong>API и сервисы</strong>. Раздел можно выбрать в верхнем левом углу консоли управления
                            проектом. В разделе <strong>API и сервисы</strong>
                            выберете <strong>Панель управления</strong>
                            нажмите кнопку <strong>Включить API и сервисы</strong>. У вас появится список сервисов и API,
                            из которого можно выбрать и затем включить в проект нужный вам сервис.
                        </p>
                        <p>
                            Информацию о существующих Google APIs и сервисах можно посмотреть в
                            <a href="https://developers.google.com/apis-explorer/" target="_blank">APIs Explorer</a>.
                        </p>
                        <h3>Получить ключи доступа к Google APIs из вашего приложения</h3>
                        <p>Google определяет два уровня API доступа:</p>
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Уровень</th>
                                    <th>Описание</th>
                                    <th>Требования</th>
                                </tr>
                                <tr>
                                    <td>Простой</td>
                                    <td>API вызовы, которые не требуют доступа к приватным данным пользователя</td>
                                    <td>API key</td>
                                </tr>
                                <tr>
                                    <td>Авторизированный</td>
                                    <td>API вызовы, которые могут читать и писать приватные данные пользователя</td>
                                    <td>OAuth 2.0 credentials</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>Чтобы получить API key для простого доступа, сделайте следующее:</h4>
                        <ol>
                            <li>Откройте <a href="https://console.developers.google.com/apis/credentials"
                                            target="_blank">Страницу учетных данных</a> в API Консоли.
                            </li>
                            <li>Нажмите <b>Создать учетные данные &gt; API key</b> и выберете соответствующий тип ключа.
                            </li>
                        </ol>
                        <p>Чтобы обеспечить защиту вашим API keys, следуйте рекомендациям <a
                                href="https://support.google.com/cloud/answer/6310037" target="_blank">лучшая практика использования API keys</a>.
                        </p>
                        <h4>
                            Чтобы получить OAuth 2.0 учетные данные для авторизованного доступа, сделайте следующее:</h4>
                        <ol>
                            <li>Откройте <a href="https://console.developers.google.com/apis/credentials"
                                            target="_blank">Страницу учетных данных</a> в API Консоли.
                            </li>
                            <li>Нажмите <b>Создать учетные данные &gt; OAuth client ID</b>
                                и выберете соответствующий тип.
                            </li>
                        </ol>
                        <h4>
                            Чтобы указать с каких URLs для OAuth 2.0 учетных данных можно делать обращения к Google APIs, сделайте следующее:</h4>
                        <ol>
                            <li>
                                Откройте <a href="https://console.developers.google.com/apis/credentials"
                                            target="_blank">Страницу учетных данных</a> в API Консоли.
                            </li>
                            <li>
                                Выберете соответсвующий <code>OAuth client ID</code> в учетных данных.
                            </li>
                            <li>
                                <b>В разделе ограничения</b>
                                задайте источники JavaScript и/или URI перенапраления.
                            </li>
                            <li>
                                <b>Важно</b>
                                правильно указать источники (URLs). Если вы работаете локально на вашем компьютере
                                например по адресу <code>http://localhost:3000</code>, то нужно указать два адреса:
                                один внешний адрес, с которым вы выходите в интернет пр. <code>http://my-host.com</code>
                                и
                                внутренний пр. <code>http://localhost:3000</code>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h2>Как сделать запросы к Google API?</h2>
                        <p>
                            Для создания запросов к Google API существуют несколько путей чтобы использовать JavaScript клиенскую библиотеку,
                            но все они сводятся к основным базовым понятиям:</p>
                        <ol>
                            <li>Пользовательское приложение должно загрузить JavaScript клиенскую библиотеку.
                                <code v-html>&lt;script src="https://apis.google.com/js/api.js"&gt;&lt;/script&gt;</code>
                            </li>
                            <li>
                                Пользовательское приложение должно инициализировать эту библиотеку с помощью API ключа, OAuth client ID и
                                <a href="https://developers.google.com/api-client-library/javascript/features/discovery"
                                   target="_blank">
                                    API Discovery Document(s)</a>.
                            </li>
                            <li>
                                Пользовательское приложение посылает запросы к Google API и соответствующим образом обрабатывает ответы.
                            </li>
                        </ol>
                        <p>
                            В следующих разделах показано 3 варианта использования JavaScript клиентской библиотеки.</p>
                    </section>
                    <section>
                        <h3>
                            Вариант 1: Загружаем <a
                                href="https://developers.google.com/api-client-library/javascript/features/discovery"
                                target="_blank">API Discovery Document(s)</a>,
                            затем выполняем запрос.
                        </h3>
                        <p>
                            Следующий пример см. пр.1 предполагает, что пользователь уже авторизирован. Полный пример с авторизацией пользователя можно посмотреть
                            <a href="https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests"
                               target="_blank">здесь</a>.
                        </p>
                        <kbd>пр.1</kbd>
                        <overview-code1></overview-code1>
                    </section>
                    <section>
                        <h3>
                            Вариант 2: Использование <strong>gapi.client.request</strong>.
                        </h3>
                        <p>
                            Более общий способ создания запросов - использовать <strong>gapi.client.request</strong>.
                            Ваше приложение не загружает <strong>Discovery Document</strong> как было показано в предыдущем
                            варианте, но оно все еще должно установить <strong>API key</strong>
                            (и авторизацию для некоторых APIs).
                            Вам необходимо будет вручную заполнить REST параметры. При этом будет создаваться один
                            сетевой запрос, что уменьшит размер приложения см. пр.2.
                        </p>
                        <kbd>пр.2</kbd>
                        <overview-code2></overview-code2>
                    </section>
                    <section>
                        <h3>
                            Вариант 3: Использование <strong>CORS</strong>.
                        </h3>
                        <p>Google APIs поддерживает <a href="http://www.w3.org/TR/cors/" target="_blank">CORS</a>.
                            Если вашему приложению необходимо выгружать/загружать медиа файлы, оно должно использовать <strong>CORS</strong>.
                            Подробности можно посмотреть  <a
                                    href="https://developers.google.com/api-client-library/javascript/features/cors"
                                    target="_blank">здесь...</a>
                        </p>
                    </section>
                    <section>
                        <h2>Поддерживаемые среды</h2>
                        <p>
                            С JavaScript клиенской библиотекой можно работать со всеми броузерами, которые поддерживают
                            Google Apps. Список броузеров можно посмотреть <a
                                href="https://support.google.com/a/answer/33864" target="_blank">здесь</a>.
                        </p>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import OverviewCode1 from '~components/blog/gapi/overview/code-1.vue'
    import OverviewCode2 from '~components/blog/gapi/overview/code-2.vue'

    export default {
        components: {
            OverviewCode1,
            OverviewCode2
        },
        data() {
            return {
                title: 'Google Client API',
                description: 'Введение в Google Client API.',
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
            this.$store.commit('SET_THEME', 'blog');
            Highlight.initBlock();
        }
    }
</script>

