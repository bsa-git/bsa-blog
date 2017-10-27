<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-08-21</p>
            <v-card class="" hover raised>
                <v-card-text class="blog-post">
                    <h1>Введение.</h1>
                    Вы можете использовать в своих клиенских веб приложениях такие Google сервисы как People, Calendar, Drive и т.д.
                    Для этого нужно использовать  JavaScript клиенскую библиотеку, чтобы взаимодействовать с Google APIs.
                    Оригинал статьи можно посмотреть <a href="https://developers.google.com/api-client-library/javascript/start/start-js" target="_blank">здесь</a>.
                    <section>
                        <h2>Настройка доступа</h2>

                        <h3>Получить Google Account</h3>
                        <p>
                            Вначале, войдите под своим Google Account <a href="https://www.google.com/accounts" target="_blank">войти</a>, если вы еще не
                            имеете Google Account, то <a href="https://accounts.google.com/SignUp?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount" target="_blank">зарегистрируйтесь</a>.
                        </p>

                        <h3>Создать Google проект</h3>
                        <p>
                            Перейти к <a href="https://console.developers.google.com/project" target="_blank">Google API Консоли</a>.
                            Нажмите <strong>Создать проект</strong> введите имя проекта, и нажмите <strong>Создать</strong>.
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
                            проектом. В разделе <strong>API и сервисы</strong> выберете <strong>Панель управления</strong>
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
                            <li>Откройте <a href="https://console.developers.google.com/apis/credentials" target="_blank">Страницу учетных данных</a> в API Консоли.</li>
                            <li>Нажмите <b>Создать учетные данные &gt; API key</b> и выберете соответствующий тип ключа.</li>
                        </ol>
                        <p>Чтобы обеспечить защиту вашим API keys, следуйте рекомендациям <a href="https://support.google.com/cloud/answer/6310037" target="_blank">лучшая практика использования API keys</a>.</p>
                        <h4>Чтобы получить OAuth 2.0 учетные данные для авторизованного доступа, сделайте следующее:</h4>
                        <ol>
                            <li>Откройте <a href="https://console.developers.google.com/apis/credentials" target="_blank">Страницу учетных данных</a> в API Консоли.</li>
                            <li>Нажмите <b>Создать учетные данные &gt; OAuth client ID</b> и выберете соответствующий тип.</li>
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
                                <a href="https://developers.google.com/api-client-library/javascript/features/discovery" target="_blank">
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
                            Вариант 1: Загружаем <a href="https://developers.google.com/api-client-library/javascript/features/discovery" target="_blank">API Discovery Document(s)</a>,
                            затем выполняем запрос.
                        </h3>
                        <p>
                            Следующий пример предполагает, что пользователь уже авторизирован. Полный пример с авторизацией пользователя можно посмотреть
                            <a href="https://developers.google.com/api-client-library/javascript/samples/samples#authorizing-and-making-authorized-requests" target="_blank">здесь</a>.
                        </p>
                        <code class="highlight">
    function start() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': 'YOUR_API_KEY',
            // Your API key will be automatically added to the Discovery Document URLs.
            'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
            // clientId and scope are optional if auth is not required.
            'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
            'scope': 'profile',
        }).then(function() {
            // 3. Initialize and make the API request.
            return gapi.client.people.people.get({
                'resourceName': 'people/me',
                'requestMask.includeField': 'person.names'
            });
        }).then(function(response) {
            console.log(response.result);
        }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
                        </code>
                    </section>
                    <section>
                        <h3>
                            Вариант 2: Использование <strong>gapi.client.request</strong>.
                        </h3>
                        Более общий способ создания запросов - использовать <strong>gapi.client.request</strong>.
                        Ваше приложение не загружает <strong>Discovery Document</strong> как было показано в предыдущем
                        варианте, но оно все еще должно установить <strong>API key</strong> (и авторизацию для некоторых APIs).
                        Вам необходимо будет вручную заполнить REST параметры. При этом будет создаваться один
                        сетевой запрос, что уменьшит размер приложения.
                        <code class="highlight">
    function start() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': 'YOUR_API_KEY',
            // clientId and scope are optional if auth is not required.
            'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
            'scope': 'profile',
        }).then(function() {
            // 3. Initialize and make the API request.
            return gapi.client.request({
                'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
            })
        }).then(function(response) {
            console.log(response.result);
        }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
                        </code>
                    </section>
                    <section>
                        <h3>
                            Вариант 3: Использование <strong>CORS</strong>.
                        </h3>
                        <p>Google APIs поддерживает <a href="http://www.w3.org/TR/cors/" target="_blank">CORS</a>.
                            Если вашему приложению необходимо выгружать/загружать медиа файлы, оно должно использовать <strong>CORS</strong>.
                            Подробности можно посмотреть  <a href="https://developers.google.com/api-client-library/javascript/features/cors" target="_blank">здесь...</a>
                        </p>
                    </section>
                    <section>
                        <h2>Поддерживаемые среды</h2>
                        <p>
                            С JavaScript клиенской библиотекой можно работать со всеми броузерами, которые поддерживают
                            Google Apps. Список броузеров можно посмотреть <a href="https://support.google.com/a/answer/33864" target="_blank">здесь</a>.
                        </p>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    export default {
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

