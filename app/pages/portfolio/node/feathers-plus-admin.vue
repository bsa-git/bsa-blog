<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2020-08-25</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Этот проект был написан чтобы продемонстрировать возможности работы <strong>Feathers Plus</strong> фреймворка
                            который является надстройкой над <a href="https://buzzard.docs.feathersjs.com/" target="_blank"><strong>Feathers</strong></a>
                            фреймворком. <strong>Feathers Plus</strong> фреймворк, имеет более мощный генератор проектов,
                            который управляется через <strong>Feathers Plus command line interface</strong>.
                            Генератор <strong>Feathers Plus</strong> на <strong>GitHub</strong> можно посмотреть <a
                                href="https://github.com/feathers-plus/generator-feathers-plus/tree/master/docs/get-started" target="_blank">здесь</a>
                            По своей сути <strong>Feathers</strong> представляет собой набор инструментов и шаблон архитектуры, который
                            упрощает создание масштабируемых API REST приложений реального времени.
                            Сравнение с другими фреймворками можно посмотреть <a
                                href="https://feathersjs.com/comparison" target="_blank">здесь</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/feathers-plus-admin" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="http://feathers-plus-admin.herokuapp.com/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Обзор</h2>
                        <p>
                            <em>
                                Основная идея <strong>Feathers</strong>
                                фреймворка уйти от концепции <strong>MVC</strong> и
                                использовать концепцию работы с сервисами и “hooks”.
                                Это дало возможность создать структуру, которая может расти вместе с вами по мере роста вашего продукта.
                                Он достаточно гибкий, чтобы быстро адаптироваться к меняющимся потребностям бизнеса, достаточно мощный
                                для создания современных приложений и достаточно простой, чтобы быстро создавать и работать.</em>
                        </p>
                        <h3>Возможности</h3>
                        <ul>
                            <li>Работа с сервисами на стороне сервера и на стороне клиента</li>
                            <li>Работа с сервисами на стороне клиента выполнена с помощью <strong>Feathers Vuex</strong></li>
                            <li>Использование “Hooks” при работе с сервисами</li>
                            <li>Создание Real-time APIs</li>
                            <li>Созданы тесты для серверной стороны</li>
                            <li>Обеспечивается процедура регистрации/логирования пользователя</li>
                            <li>Процесс аутентификации и авторизации создан на базе Express Password стратегий</li>
                            <li>JWT Authentication используется JSON Web Token</li>
                            <li>Local Authentication используется Email и Password</li>
                            <li>OAuth 2.0 Authentication через Google, GitHub</li>
                            <li>Обеспечивается проверка <strong>Email</strong> при регистрации пользователя</li>
                            <li>Обеспечивается проверка при изменении <strong>Email</strong> пользователем</li>
                            <li>Обеспечивается процедура восстановления забытого пользователем пароля</li>
                            <li>Обеспечивается процедура изменения пользователем пароля</li>
                            <li>Пользователь может изменять свой профиль</li>
                            <li>Для обеспечения авторизации пользователей используются <strong>Roles</strong></li>
                            <li>Для обеспечения разделения пользователей по группам используются <strong>Teams</strong></li>
                            <li>Администратор может управлять пользователями: назначать роли, разделять по группам, изменять активность пользователя, удалять пользователя</li>
                            <li>Работа с базой данных: <strong>MongoDB</strong> через сервисы</li>
                            <li>Показан пример работы <strong>GraphQL Query</strong> интерфейса</li>
                            <li>Обеспечена процедура логирования событий сайта</li>
                            <li>Пользовательский интерфейс выполнен на базе клиенского фрейморка <strong>Vuetify - Material Design Component Framework</strong></li>
                            <li>Показаны примеры работы компонентов <strong>Vuetify</strong> пользовательского интерфейса</li>
                            <li>Реализован пример <strong>Chat</strong> (обмена сообщениями между пользователями) в реальном времени</li>

                        </ul>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Node.js (Chrome's V8 JavaScript engine)</strong></dt>
                            <dd><a href="https://nodejs.org/en/docs/" target="_blank">Документация</a></dd>
                            <dt><strong>Express (Node.js framework)</strong></dt>
                            <dd><a href="http://expressjs.com/en/guide/routing.html" target="_blank">Документация</a>
                            </dd>
                            <dd><a href="http://expressjs.com/en/4x/api.html" target="_blank">API</a></dd>
                            <dt><strong>Passport.js</strong></dt>
                            <dd><a href="http://www.passportjs.org/docs/" target="_blank">Документация</a></dd>
                            <dt><strong>Feathers</strong></dt>
                            <dd><a href="https://buzzard.docs.feathersjs.com/" target="_blank">Документация</a></dd>
                            <dd><a href="https://blog.feathersjs.com/" target="_blank">Блог</a></dd>
                            <dd><a href="https://github.com/feathersjs/awesome-feathersjs" target="_blank">Ресурсы, плагины, примеры</a></dd>
                            <dt><strong>Feathers Plus</strong></dt>
                            <dd><a href="https://feathers-plus.github.io/" target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/feathers-plus/generator-feathers-plus/tree/master/docs/get-started" target="_blank">Генератор проектов</a></dd>
                            <dd><a href="https://github.com/feathers-plus/cli" target="_blank">@feathers-plus/cli</a> - command line interface</dd>
                            <dt><strong>NUXT - Universal Vue.js client applications</strong></dt>
                            <dd><a href="https://nuxtjs.org/" target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/nuxt-community/awesome-nuxt" target="_blank">Awesome Nuxt.js</a></dd>
                            <dt><strong>Vue.js - The Progressive JavaScript Framework</strong></dt>
                            <dd><a href="https://vuejs.org/" target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank">Awesome Vue.js</a></dd>
                            <dt><strong>Vuetify - Material Design Component Framework</strong></dt>
                            <dd><a href="https://vuetifyjs.com/en/getting-started/quick-start" target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/vuetifyjs/awesome-vuetify" target="_blank">Awesome Vuetify</a></dd>
                            <dd><a href="https://vuetifyjs.com/en/themes/premium/" target="_blank">Premium & free themes</a></dd>
                            <dt><strong>Работа с сервисами на стороне клиента выполнена с помощью Feathers Vuex</strong></dt>
                            <dd><a href="https://feathers-vuex-v1.netlify.app/api-overview.html" target="_blank">Документация</a></dd>
                            <dt><strong>ECharts: Framework for Rapid Construction of Web-based Visualization</strong></dt>
                            <dd><a href="https://echarts.apache.org/en/index.html" target="_blank">Документация</a></dd>
                            <dd><a href="https://echarts.apache.org/examples/en/index.html" target="_blank">Примеры использования</a></dd>
                            <dt><strong>Material Design Icons</strong></dt>
                            <dd><a href="https://cdn.materialdesignicons.com/5.0.45/" target="_blank">Icons</a></dd>
                            <dt><strong>Font Awesome - the iconic font and CSS toolkit</strong></dt>
                            <dd><a href="https://fontawesome.com/icons?d=gallery" target="_blank">Icons</a></dd>
                            <dt><strong>MongoDB (noSQL DataBase)</strong></dt>
                            <dd><a href="https://docs.mongodb.com/" target="_blank">Документация</a></dd>
                            <dd><a href="https://cloud.mongodb.com/user#/atlas/login" target="_blank">Atlas (облачный хостинг)</a></dd>
                            <dd><a href="https://mlab.com/home" target="_blank">mLab (облачный хостинг 500MB FREE)</a></dd>
                            <dd><a href="https://docs.mongodb.com/compass/current/" target="_blank">Сompass (инструмент для визуализации данных)</a></dd>
                            <dd><a href="http://mongoosejs.com/docs/guide.html" target="_blank">Mongoosejs (NPM компонент для работы с моделями базы данных)</a></dd>
                            <dt><strong>GraphQL is a query language for APIs</strong></dt>
                            <dd><a href="https://graphql.org/" target="_blank">Документация</a></dd>
                            <dd><a href="https://graphql.org/graphql-js/" target="_blank">Getting Started With GraphQL.js</a></dd>
                            <dd><a href="https://github.com/chentsulin/awesome-graphql" target="_blank">Awesome GraphQl</a></dd>
                            <dt><strong>Интересные статьи</strong></dt>
                            <dd><a href="https://blog.feathersjs.com/why-we-built-the-best-web-framework-you-ve-probably-never-heard-of-until-now-176afc5c6aac"
                                   target="_blank">Why we built the best web framework you’ve probably never heard of (until now)</a></dd>
                            <dd><a href="https://habr.com/post/206092/" target="_blank">Feathers.js — реактивный JavaScript-фреймворк поверх Express</a></dd>

                        </dl>
                    </section>
                    <section>
                        <h2>Установка приложения</h2>
                        <h3>Предварительные требования</h3>
                        <ol>
                            <li>
                                <p>
                                    Убедитесь в том, что у вас установлены <a href="https://nodejs.org/">NodeJS 12.0+</a>,
                                    <a href="https://www.mongodb.org/downloads" target="_blank">MongoDB</a>,
                                    <a href="https://yarnpkg.com/getting-started/install" target="_blank">Yarn</a>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Клонируйте или загрузите <a href="https://github.com/bsa-git/feathers-plus-admin"
                                                                target="_blank">feathers-plus-admin</a>
                                    проект с GitHub.
                                </p>
                            </li>
                            <li>
                                Инсталируйте ваши зависимости
                                <pre><code
                                        class="bash">cd &lt;project-name&gt; yarn install</code></pre>
                            </li>
                        </ol>
                        <h3>Переменные окружения</h3>
                        <p>
                            Файл <code>.env</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>.env.dev.example</code> для режима разработки
                            или <code>.env.prod.example</code> в рабочем режиме, иначе приложение будет
                            выдавать ошибку. Файл <code>.env</code> устанавливает переменные окружения.
                            В переменных окружения обычно указываются секретные данные пользователя например
                            <em><strong>user_id</strong></em>, <em><strong>user_secret</strong></em> и т.д.
                        </p>

                        <h3>Тестирование</h3>
                        Прежде чем работать с проектом нужно запустить тестирование с помощью команды.
                        <pre><code class="bash">yarn test:all</code></pre>
                        Все тесты в директории <strong>/test</strong> будут выполнены.
                        Если нужно выполнить отдельный тест, его нужно перенести в директорию <strong>/test-debug</strong>
                        и выполнить команду.
                        <pre><code class="bash">yarn test:debug</code></pre>
                        Тест из директории <strong>/test-debug</strong> будет выполнен.

                        <h3>Запись тестовых данных в Базу данных</h3>
                        Чтобы записать тестовые данные из файла <strong>/seeds/fake-data.json</strong> в базу данных нужно выполнить команду
                        <pre><code class="bash">yarn start:seed</code></pre>

                        <h3>Запуск вашего проекта</h3>
                        <h4>Development</h4>

                        чтобы работать с <strong>MongoDB</strong> базой данных нужно выполнить команду
                        <pre><code class="bash">yarn start-mongod</code></pre>

                        После этого нужно выполнить приложение в режиме разработки.
                        <pre><code class="bash">yarn dev</code></pre>
                        <p>
                            Приложение будет запущено в режиме <strong>Разработки</strong> и будет выполнятся на
                            <a href="http://localhost:3030"> http://localhost:3030</a>
                        </p>
                        <h4>Production</h4>
                        <pre><code class="bash">yarn start</code></pre>
                        <p>
                            Приложение будет запущено в <strong>Рабочем</strong> режиме и будет выполнятся на
                            рабочем хостинге пример можно посмотреть <a
                                href="http://feathers-plus-admin.herokuapp.com/" target="_blank">здесь</a>
                        </p>

                        <h3>Feathers-plus command line interface</h3>
                        Feathers-plus имеет мощный интерфейс командной строки. Этими командами можно создавать новый проект,
                        создавать сервис, тест и т.д. Вот некоторый перечень команд:
                        <pre><code class="bash">$ npm install -g @feathers-plus/cli          # Install Feathers-plus CLI</code></pre>
                        <br>
                        <pre><code class="bash">$ feathers-plus generate options             # Specify options for this app</code></pre>
                        <pre><code class="bash">$ feathers-plus generate app                 # Generate scaffolding for app</code></pre>
                        <pre><code class="bash">$ feathers generate authentication           # Generate authentication and user-entity service</code></pre>
                        <pre><code class="bash">$ feathers-plus generate secret              # Generate a new secret for authentication</code></pre>
                        <pre><code class="bash">$ feathers-plus generate service             # Generate a new service with its model</code></pre>
                        <pre><code class="bash">$ feathers-plus generate graphql             # Generate a GraphQL endp;oint for services</code></pre>
                        <pre><code class="bash">$ feathers-plus generate all                 # Regenerate the entire app</code></pre>
                        <pre><code class="bash">$ feathers-plus help                         # Show all commands</code></pre>

                        <h3>Особенность выполнения @feathers-plus/cli commands для Windows10</h3>
                        Набор инструментов Yeoman, используемый <strong>@feathers-plus/cli</strong>, имеет нерешенную
                        проблему при запуске в Windows 10 с Node 10+. Вам нужно вызывать <strong>@feathers-plus/cli</strong>
                        commands из <strong>Git Bash</strong>.
                    </section>
                    <section>
                        <h2>Структура приложения</h2>

                        <h3>Файловая структура</h3>
                        <kbd>пр.1</kbd>
                        <p><em>
                            <strong>Замечание: </strong>Здесь представлен мой вариант организации структуры приложения.
                            Вы можете изменять структуру приложения по своему усмотрению...</em></p>
                        <feathers-plus-admin-code1></feathers-plus-admin-code1>
                        <h3>Список <strong>NPM</strong> пакетов</h3>
                        <kbd>пр.2</kbd>
                        <feathers-plus-admin-code2></feathers-plus-admin-code2>

                        <h3>Конфигурация</h3>
                        <h4>.env</h4>
                        <p>
                            Файл <code>.env</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>.env.example</code>, иначе приложение будет
                            выдавать ошибку. Файл <code>.env</code> устанавливает переменные окружения.
                            В переменных окружения обычно указываются секретные данные пользователя например
                            <em><strong>user_id</strong></em>, <em><strong>user_secret</strong></em> и т.д.
                        </p>
                        <kbd>пр.3 для .env.example</kbd>
                        <feathers-plus-admin-code3></feathers-plus-admin-code3>
                        <p><em>
                            <strong>Замечание: </strong>
                            Чтобы иметь реальные ключи для доступа к API различных сервисов нужно зарегистрировать ваше приложение
                            в этих сервисах. Примеры регистрации приложения и получения ключей API в разных сервисах
                            можно посмотреть <a href="https://github.com/sahat/hackathon-starter#obtaining-api-keys"
                                                target="_blank">здесь</a>.
                        </em></p>
                    </section>
                    <section>
                        <h2>Работа серверного приложения</h2>
                        <ul>
                            <li>
                                В приложении демонстрируется работа фреймворка <strong>Feathers</strong> в трех аспектах:
                                работа с сервисами, работа с базами данных и аутентификация пользователей.
                            </li>
                            <li>
                                В примерах показана работа с различными базами данных.
                                <p>Например в приложении я использую базу данных <strong>MongoDB</strong>. Можно <a
                                        href="https://www.mongodb.com/download-center#community" target="_blank">установить MongoDB</a>
                                    локально на компьютер
                                    или использовать MongoDB на облачном хостинге <a href="https://cloud.mongodb.com/"
                                                                                     target="_blank">Atlas</a> или <a
                                            href="https://mlab.com/home" target="_blank">mLab</a>.</p>
                                <p>Также используется база данных <strong>ElasticSearch</strong>
                                    Можно <a
                                            href="https://www.elastic.co/guide/en/elasticsearch/reference/6.2/_installation.html"
                                            target="_blank">установить ElasticSearch</a>
                                    локально на компьютер или использовать ElasticSearch на облачном хостинге
                                    <a href="https://cloud.elastic.co/deployments" target="_blank">Bonsai - hosting for ElasticSearch</a>.
                                </p>
                                <p>Используется база данных <strong>RethinkDB</strong>
                                    Можно <a href="https://rethinkdb.com/docs/install/" target="_blank">установить RethinkDB</a>
                                    локально на компьютер, а вот бесплатного хостинга для RethinkDB я пока не нашел...
                                </p>

                                <p>Для <a href="https://knexjs.org/" target="_blank">Knex</a>
                                    (SQL DataBase ORM for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle)
                                    и для <a href="http://docs.sequelizejs.com/" target="_blank">Sequelize</a>
                                    (SQL DataBase ORM for PostgreSQL, MySQL, SQLite and MSSQL)
                                    я использую бузу данных - <strong>SQLite3</strong>, которая находиться в папке <code>/server/data/db/sqlite3</code>
                                    в виде файла <code>messages.db</code></p>

                                <p>База данных <strong>NeDB</strong> находится в папке <code>/server/data/db/nedb</code>
                                    в виде файлов <code>messages.db, users.db, posts.db</code>.
                                    Файл <strong>messages.db</strong>
                                    используется для демонстрации работы с сервисами, а файлы <strong>users.db, posts.db</strong>
                                    используются для демонстрации аутентификации пользователей и демонстрации приложения <strong>Chat</strong>
                                    (обмен сообщениями между пользователями).</p>
                            </li>
                            <li>
                                Чтобы тестировать в приложении возможность логирования с помощью таких сервисов как
                                Facebook, Google, GitHub, Instagram и т.д. нужно быть там зарегистрированным и иметь свой аккаунт.
                            </li>
                            <li>
                                Если вы разработчик и хотите создавать приложения с возможностью логирования и доступа других пользователей
                                к API различных сервисов, нужно зарегистрировать ваше приложение
                                в этих сервисах. Примеры регистрации приложения и получения ключей API в разных сервисах
                                можно посмотреть <a href="https://github.com/sahat/hackathon-starter#obtaining-api-keys"
                                                    target="_blank">здесь</a>
                            </li>
                            <li>Для построения пользовательского интерфейса используется <a
                                    href="https://bulma.io/documentation/overview/start/" target="_blank">Bulma</a>,
                                это один из популярных HTML, CSS фреймворков и используется,
                                для разработки интерактивных мобильных проектов в Интернете.


                            </li>
                        </ul>

                        <h3>Инициализация серверного приложения</h3>

                        <p>
                            Инициализация приложения происходит в модуле
                            <code>server/app.server.js</code> см. пр.4
                        </p>
                        <kbd>пр.4</kbd>
                        <feathers-plus-admin-code4></feathers-plus-admin-code4>
                        Из структуры модуля <code>app.server.js</code>
                        видно, что происходят следующие действия:
                        <ul>
                            <li>
                                Загрузка переменных окружения из файла <strong>.env</strong>.
                            </li>
                            <li>
                                Создание самого приложения <strong>app</strong> и его конфигурация. Данные по конфигурации
                                берутся из файлов <code>config/default.json, config/production.json</code> и сохраняются
                                в приложении <strong>app</strong>. Их можно получить например так. <code>app.get('authentication')</code>.
                            </li>
                            <li>
                                Установка промежуточных обработчиков в приложение в модуле <code>server/boot/index.js</code>.
                            </li>
                            <li>
                                Установка и настройка путей запросов в приложение в модуле <code>server/routes/index.js</code>.
                            </li>
                        </ul>


                        <h3>Промежуточные обработчики серверного приложения</h3>

                        <p>Установка промежуточных обработчиков в приложение происходит в модуле <code>server/boot/index.js</code>. см. пр.5</p>
                        <kbd>пр.5</kbd>
                        <feathers-plus-admin-code5></feathers-plus-admin-code5>
                        <p>
                            <em>
                                <strong>Замечание: </strong>
                                Здесь важна последовательность выполнения промежуточных обработчиков в приложении.
                            </em>
                        </p>

                        <h4>Express обработчики</h4>
                        <p>
                            К ним относятся такие модули: <strong>cors</strong>, <strong>helmet</strong>, <strong>compress</strong>,
                            <strong>express.json</strong>, <strong>express.urlencoded</strong>, <strong>favicon</strong>,
                            <strong>express.static</strong>. см. пр.6
                        </p>
                        <kbd>пр.6</kbd>
                        <feathers-plus-admin-code6></feathers-plus-admin-code6>

                        <h4>Транспортные обработчики</h4>
                        <p>
                            К ним относятся такие модули: <strong>express.rest</strong>, <strong>socketio</strong>.
                            Здесь мы устанавливаем <strong>REST</strong> транспорт используя Express, а также
                            <strong>Socket.io</strong> транспорт. см. пр.7
                        </p>
                        <kbd>пр.7</kbd>
                        <feathers-plus-admin-code7></feathers-plus-admin-code7>

                        <h4>Обработчики для аутентификации</h4>
                        <p>
                            К ним относятся такие модули: <strong>authentication</strong>, <strong>jwt</strong>,
                            <strong>local</strong>, <strong>oauth1</strong>, <strong>oauth2</strong>.
                            А также стратегии на основе <strong>Express Password</strong> такие как: <strong>TwitterStrategy</strong>,
                            <strong>FacebookStrategy</strong>, <strong>GitHubStrategy</strong>, <strong>InstagramStrategy</strong>,
                            <strong>GoogleStrategy</strong>. см. пр.8
                        </p>
                        <kbd>пр.8</kbd>
                        <feathers-plus-admin-code8></feathers-plus-admin-code8>
                        <p><em>
                            <strong>Замечание: </strong>
                            В этом модуле получаем параметры аутентификации для разных стратегий (см. <code>config/default.json</code>), затем происходит
                            конфигурирование и установка самих обработчиков в приложение. Для сервиса <strong>authentication</strong>
                            устанавливаются соответствующие <strong>hooks</strong> при создании и удалении сервиса.
                        </em></p>

                        <h4>Обработчики событий реального времени</h4>
                        <p>
                            В этом модуле происходит установка и публикация событий для клиентов.
                            Такими событиями могут быть: событие <strong>connection</strong>, событие <strong>login</strong>,
                            событие <strong>authenticated</strong> и т.д. см. пр.9
                        </p>
                        <kbd>пр.9</kbd>
                        <feathers-plus-admin-code9></feathers-plus-admin-code9>

                        <h4>Сервисные обработчики</h4>
                        <p>
                            К ним относятся сервисы: <strong>users</strong>, <strong>posts</strong> см. пр.10.
                        </p>
                        <kbd>пр.10</kbd>
                        <feathers-plus-admin-code10></feathers-plus-admin-code10>
                        <p><em>
                            <strong>Замечание: </strong>
                            Сервисы <strong>users</strong>, <strong>posts</strong>
                            используются для демонстрации аутентификации пользователей и демонстрации приложения <strong>Chat</strong>
                            (обмен сообщениями между пользователями). Модули, которые определяют работу сервисов
                            <strong>users</strong>, <strong>posts</strong> находяться в папках
                            <code>server/services/users</code> и <code>server/services/posts</code> соответственно.
                        </em></p>

                        <h4>app.hooks обработчики</h4>
                        <p>
                            Здесь задается возможность логирования в самом приложении - когда идет обращение к любому сервису или возникает ошибка см. пр.11.
                        </p>
                        <kbd>пр.11</kbd>
                        <feathers-plus-admin-code11></feathers-plus-admin-code11>

                        <h4>Middleware обработчики</h4>
                        <p>
                            Здесь можно подключить свои обработчики например <code>server/middleware/init-app.js</code>.
                            В этом обработчике устанавливаются общие данные для шаблонов.
                            Проверяется наличие файла <strong>.env</strong> в режиме разработки и если этот файл
                            отсутствует, то выдается ошибка.
                            Проверяется режим технического обслуживания и если сайт находится в режиме технического
                            обслуживания, то происходит переход на соответствующую страницу сайта см. пр.12.
                        </p>
                        <kbd>пр.12</kbd>
                        <feathers-plus-admin-code12></feathers-plus-admin-code12>

                    </section>
                    <section>
                        <h2>Работа клиенского приложения</h2>
                        <p>Клиенсткое приложение строится пакетным обработчиком <strong>WebPack</strong> и обработчиком каскадных стилей <strong>node-sass</strong>.
                            Конфигурация <strong>WebPack</strong> задается файлом <strong>webpack.config.js</strong> см. пр 13.</p>
                        <kbd>пр.13</kbd>
                        <feathers-plus-admin-code13></feathers-plus-admin-code13>
                        <p><em>
                            <strong>Замечание: </strong>
                            Модуль <strong>dotenv-webpack</strong> используется в конфигурации для того чтобы секретные
                            данные с файла <strong>.env</strong> попали в параметры окружения на клиетне, при условии
                            если эти параметры будут использоваться в коде клиентского приложения.
                        </em></p>
                        <h3>Инициализация клиентского приложения</h3>
                        <p>Входной точкой клиентского приложения является модуль <code>client/src/js/app.client.js</code> см. пр 14.</p>
                        <p>В модуле <code>app.client.js</code> создается экземпляр класса <strong>Client</strong>,
                            свойствами которого являются обьект хранилища <strong>jStorage</strong>,
                            экземпляр класса <strong>Bulma</strong>, экземпляр класса <strong>HttpBox</strong> и данные полученные
                            от сервера через интерфейсный элемент. Происходит инициализация пользовательского интерфейса
                            с помощью функции <code>client.bulma.init();</code> и выполняется вызов соответствующего действия контроллера
                            через роутер <code>const result = await indexRouter(client);</code>
                        </p>
                        <kbd>пр.14</kbd>
                        <feathers-plus-admin-code14></feathers-plus-admin-code14>
                        <h3>Инициализация API REST и аутентификация клиента </h3>
                        <p>Модуль <code>client/src/js/controllers/base.client.class.js</code> является дочерним классом <strong>Base</strong>,
                            для всех контроллеров. Из экземпляра этого класса вызывается функция <code>const app = this.setRestTransport();</code>.
                            Пример реализации этой функции можно посмотреть см. пр 15.
                        </p>
                        <kbd>пр.15</kbd>
                        <feathers-plus-admin-code15></feathers-plus-admin-code15>
                        <p><em>
                            <strong>Замечание: </strong>
                            В дальнейшем переменную <strong>app</strong> можно использовать для доступа к сервисам и работе с ними.
                            Можно выполнять все операции с сервисами такие как: <strong>create, get, find, delete</strong>,
                            а также производить аутентификацию к защищенным сервисам и работу с ними в защищенном режиме.
                            Примеры реализации работы с сервисами можно посмотреть в котроллерах, находящихся в папке
                            <code>client/src/js/controllers</code>.
                        </em></p>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import FeathersPlusAdminCode1 from '~components/portfolio/node/feathers-plus-admin/code-1.vue'
    import FeathersPlusAdminCode2 from '~components/portfolio/node/feathers-plus-admin/code-2.vue'
    import FeathersPlusAdminCode3 from '~components/portfolio/node/feathers-plus-admin/code-3.vue'
    import FeathersPlusAdminCode4 from '~components/portfolio/node/feathers-plus-admin/code-4.vue'
    import FeathersPlusAdminCode5 from '~components/portfolio/node/feathers-plus-admin/code-5.vue'
    import FeathersPlusAdminCode6 from '~components/portfolio/node/feathers-plus-admin/code-6.vue'
    import FeathersPlusAdminCode7 from '~components/portfolio/node/feathers-plus-admin/code-7.vue'
    import FeathersPlusAdminCode8 from '~components/portfolio/node/feathers-plus-admin/code-8.vue'
    import FeathersPlusAdminCode9 from '~components/portfolio/node/feathers-plus-admin/code-9.vue'
    import FeathersPlusAdminCode10 from '~components/portfolio/node/feathers-plus-admin/code-10.vue'
    import FeathersPlusAdminCode11 from '~components/portfolio/node/feathers-plus-admin/code-11.vue'
    import FeathersPlusAdminCode12 from '~components/portfolio/node/feathers-plus-admin/code-12.vue'
    import FeathersPlusAdminCode13 from '~components/portfolio/node/feathers-plus-admin/code-13.vue'
    import FeathersPlusAdminCode14 from '~components/portfolio/node/feathers-plus-admin/code-14.vue'
    import FeathersPlusAdminCode15 from '~components/portfolio/node/feathers-plus-admin/code-15.vue'

    export default {
        components: {
            LinkToPortfolio,
            FeathersPlusAdminCode1,
            FeathersPlusAdminCode2,
            FeathersPlusAdminCode3,
            FeathersPlusAdminCode4,
            FeathersPlusAdminCode5,
            FeathersPlusAdminCode6,
            FeathersPlusAdminCode7,
            FeathersPlusAdminCode8,
            FeathersPlusAdminCode9,
            FeathersPlusAdminCode10,
            FeathersPlusAdminCode11,
            FeathersPlusAdminCode12,
            FeathersPlusAdminCode13,
            FeathersPlusAdminCode14,
            FeathersPlusAdminCode15
        },
        data() {
            return {
                title: 'Feathers Plus Admin',
                description: 'Административная панель работы с данными',
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

