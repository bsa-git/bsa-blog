<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2018-08-28</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Этот проект был написан чтобы продемонстрировать возможности работы <a
                                href="https://docs.feathersjs.com/" target="_blank">"Feathers" фреймворка</a>.
                            По своей сути Feathers представляет собой набор инструментов и шаблон архитектуры, который
                            упрощает создание масштабируемых API REST приложений реального времени.
                            Сравнение с другими фреймворками можно посмотреть <a
                                href="https://feathersjs.com/comparison" target="_blank">здесь</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/feathers-exx" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="http://feathers-exx.herokuapp.com/" target="_blank">здесь</a>
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
                            <li>Использование “Hooks” при работе с сервисами</li>
                            <li>Создание Real-time APIs</li>
                            <li>Процесс аутентификации и авторизации создан на базе Express Password стратегий</li>
                            <li>JWT Authentication используется JSON Web Token</li>
                            <li>Local Authentication используется Email и Password</li>
                            <li>OAuth 1.0a Authentication через Twitter</li>
                            <li>OAuth 2.0 Authentication через Facebook, Google, GitHub, Instagram</li>
                            <li>Работа с базами данных: NeDB, MongoDB, Elasticsearch, RethinkDB</li>
                            <li>
                                Работа с базами данных: MySQL, PostgreSQL, MariaDB, SQLite, MSSQL (с помощью ORM - Knex, Sequelize)
                            </li>
                            <li>Пользовательский интерфейс выполнен на базе клиенского фрейморка <a
                                    href="https://bulma.io/bulma-start/" target="_blank">"Bulma"</a></li>
                            <li>Gravatar</li>
                            <li>Реализован пример Chat (обмена сообщениями между пользователями) в реальном времени</li>
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
                            <dd><a href="http://docs.feathersjs.com/" target="_blank">Документация</a></dd>
                            <dd><a href="https://blog.feathersjs.com/" target="_blank">Блог</a></dd>
                            <dd><a href="https://github.com/feathersjs/awesome-feathersjs" target="_blank">Ресурсы, плагины, примеры</a>
                            </dd>
                            <dt><strong>Клиентский фреймворк "Bulma"</strong></dt>
                            <dd><a href="https://bulma.io/documentation/overview/start/"
                                   target="_blank">Документация</a></dd>
                            <dd><a href="https://jenil.github.io/bulmaswatch/" target="_blank">Схемы</a></dd>
                            <dd><a href="https://dansup.github.io/bulma-templates/" target="_blank">Шаблоны</a></dd>
                            <dd><a href="https://wikiki.github.io/" target="_blank">Расширения</a></dd>
                            <dt><strong>Font Awesome - the iconic font and CSS toolkit</strong></dt>
                            <dd><a href="https://fontawesome.com/icons?d=gallery" target="_blank">Icons</a></dd>
                            <dt><strong>MongoDB (noSQL DataBase)</strong></dt>
                            <dd><a href="https://docs.mongodb.com/" target="_blank">Документация</a></dd>
                            <dd><a href="https://cloud.mongodb.com/user#/atlas/login" target="_blank">Atlas (облачный хостинг)</a>
                            </dd>
                            <dd><a href="https://mlab.com/home" target="_blank">mLab (облачный хостинг 500MB FREE)</a>
                            </dd>
                            <dd><a href="https://docs.mongodb.com/compass/current/" target="_blank">Сompass (инструмент для визуализации данных)</a>
                            </dd>
                            <dd><a href="http://mongoosejs.com/docs/guide.html" target="_blank">Mongoosejs (NPM компонент для работы с моделями базы данных)</a>
                            </dd>
                            <dt><strong>NeDB (noSQL DataBase)</strong></dt>
                            <dd><a href="https://github.com/louischatriot/nedb" target="_blank">Документация</a></dd>
                            <dt><strong>ElasticSearch (noSQL DataBase)</strong></dt>
                            <dd><a href="https://www.elastic.co/guide/en/elasticsearch/reference/6.2/index.html"
                                   target="_blank">Документация</a></dd>
                            <dd><a href="https://cloud.elastic.co/deployments" target="_blank">Bonsai - hosting for ElasticSearch</a>
                            </dd>
                            <dt><strong>RethinkDB (noSQL DataBase)</strong></dt>
                            <dd><a href="https://rethinkdb.com/docs/" target="_blank">Документация</a></dd>
                            <dt>
                                <strong>Knex (SQL DataBase ORM for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle)</strong>
                            </dt>
                            <dd><a href="https://knexjs.org/" target="_blank">Документация</a></dd>
                            <dt><strong>Sequelize (SQL DataBase ORM for PostgreSQL, MySQL, SQLite and MSSQL)</strong>
                            </dt>
                            <dd><a href="http://docs.sequelizejs.com/" target="_blank">Документация</a></dd>

                            <dt><strong>Интересные статьи</strong></dt>
                            <dd>
                                <a href="https://blog.feathersjs.com/why-we-built-the-best-web-framework-you-ve-probably-never-heard-of-until-now-176afc5c6aac"
                                   target="_blank">Why we built the best web framework you’ve probably never heard of (until now)</a>
                            </dd>
                            <dd><a href="https://habr.com/post/206092/"
                                   target="_blank">Feathers.js — реактивный JavaScript-фреймворк поверх Express</a></dd>

                        </dl>
                    </section>
                    <section>
                        <h2>Установка приложения</h2>
                        <h3>Предварительные требования</h3>
                        <ol>
                            <li>
                                <p>
                                    Убедитесь в том, что у вас установлен <a href="https://nodejs.org/">NodeJS 8.0+</a>
                                    и
                                    <a href="https://www.mongodb.org/downloads" target="_blank">MongoDB</a>,
                                    <a href="https://rethinkdb.com/docs/install/" target="_blank">RethinkDB</a>,
                                    <a href="https://www.elastic.co/guide/en/elasticsearch/reference/6.2/_installation.html"
                                       target="_blank">Elasticsearch</a>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Клонируйте или загрузите <a href="https://github.com/bsa-git/feathers-exx"
                                                                target="_blank">feathers-exx</a>
                                    проект с GitHub.
                                </p>
                            </li>
                            <li>
                                Инсталируйте ваши зависимости
                                <pre><code
                                        class="bash">cd &lt;project-name&gt; npm install # Or yarn install</code></pre>
                            </li>
                        </ol>
                        <h3>Переменные окружения</h3>
                        <p>
                            Файл <code>.env</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>.env.example</code>, иначе приложение будет
                            выдавать ошибку. Файл <code>.env</code> устанавливает переменные окружения.
                            В переменных окружения обычно указываются секретные данные пользователя например
                            <em><strong>user_id</strong></em>, <em><strong>user_secret</strong></em> и т.д.
                        </p>

                        <h3>Запуск вашего проекта</h3>
                        <h4>Development</h4>

                        Вначале нужно создать пакет клиентского приложения для этого нужно выполнить команду:
                        <pre><code class="bash">npm run build</code></pre>
                        или
                        <pre><code class="bash">npm run watch</code></pre>

                        чтобы работать с <strong>MongoDB</strong> базой данных нужно выполнить команду
                        <pre><code class="bash">npm run start-mongod</code></pre>

                        чтобы работать с <strong>RethinkDB</strong> базой данных нужно выполнить команду
                        <pre><code class="bash">npm run start-rethinkdb</code></pre>

                        чтобы работать с <strong>ElasticSearch</strong>
                        базой данных нужно вначале установить локально ElasticSearch, а
                        затем запустить ее на выполнение...

                        После этого нужно выполнить приложение в режиме разработки.
                        <pre><code class="bash">npm run dev</code></pre>
                        <p>
                            Приложение будет запущено в режиме <strong>Разработки</strong> и будет выполнятся на
                            <a href="http://localhost:3000">http://localhost:3000</a>
                        </p>
                        <h4>Production</h4>
                        <pre><code class="bash">npm start</code></pre>
                        <p>
                            Приложение будет запущено в <strong>Рабочем</strong> режиме и будет выполнятся на
                            рабочем хостинге пример можно посмотреть <a
                                href="http://express-passport-exx.herokuapp.com/" target="_blank">здесь</a>
                        </p>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>

                        <h3>Файловая структура</h3>
                        <kbd>пр.1</kbd>
                        <feathers-exx-code1></feathers-exx-code1>
                        <p><em>
                            <strong>Замечание: </strong>Здесь представлен мой вариант организации структуры приложения.
                            Вы можете изменять структуру приложения по своему усмотрению...</em></p>

                        <h3>Список <strong>NPM</strong> пакетов</h3>
                        <kbd>пр.2</kbd>
                        <feathers-exx-code2></feathers-exx-code2>

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
                        <feathers-exx-code3></feathers-exx-code3>
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
                        <feathers-exx-code4></feathers-exx-code4>
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
                        <feathers-exx-code5></feathers-exx-code5>
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
                        <feathers-exx-code6></feathers-exx-code6>

                        <h4>Транспортные обработчики</h4>
                        <p>
                            К ним относятся такие модули: <strong>express.rest</strong>, <strong>socketio</strong>.
                            Здесь мы устанавливаем <strong>REST</strong> транспорт используя Express, а также
                            <strong>Socket.io</strong> транспорт. см. пр.7
                        </p>
                        <kbd>пр.7</kbd>
                        <feathers-exx-code7></feathers-exx-code7>

                        <h4>Обработчики для аутентификации</h4>
                        <p>
                            К ним относятся такие модули: <strong>authentication</strong>, <strong>jwt</strong>,
                            <strong>local</strong>, <strong>oauth1</strong>, <strong>oauth2</strong>.
                            А также стратегии на основе <strong>Express Password</strong> такие как: <strong>TwitterStrategy</strong>,
                            <strong>FacebookStrategy</strong>, <strong>GitHubStrategy</strong>, <strong>InstagramStrategy</strong>,
                            <strong>GoogleStrategy</strong>. см. пр.8
                        </p>
                        <kbd>пр.8</kbd>
                        <feathers-exx-code8></feathers-exx-code8>
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
                        <feathers-exx-code9></feathers-exx-code9>

                        <h4>Сервисные обработчики</h4>
                        <p>
                            К ним относятся сервисы: <strong>users</strong>, <strong>posts</strong> см. пр.10.
                        </p>
                        <kbd>пр.10</kbd>
                        <feathers-exx-code10></feathers-exx-code10>
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
                        <feathers-exx-code11></feathers-exx-code11>

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
                        <feathers-exx-code12></feathers-exx-code12>

                    </section>
                    <section>
                        <h2>Работа клиенского приложения</h2>
                        <p>Клиенсткое приложение строится пакетным обработчиком <strong>WebPack</strong> и обработчиком каскадных стилей <strong>node-sass</strong>.
                            Конфигурация <strong>WebPack</strong> задается файлом <strong>webpack.config.js</strong> см. пр 13.</p>
                        <kbd>пр.13</kbd>
                        <feathers-exx-code13></feathers-exx-code13>
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
                        <feathers-exx-code14></feathers-exx-code14>
                        <h3>Инициализация API REST и аутентификация клиента </h3>
                        <p>Модуль <code>client/src/js/controllers/base.client.class.js</code> является дочерним классом <strong>Base</strong>,
                            для всех контроллеров. Из экземпляра этого класса вызывается функция <code>const app = this.setRestTransport();</code>.
                            Пример реализации этой функции можно посмотреть см. пр 15.
                        </p>
                        <kbd>пр.15</kbd>
                        <feathers-exx-code15></feathers-exx-code15>
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
    import FeathersExxCode1 from '~components/portfolio/node/feathers-exx/code-1.vue'
    import FeathersExxCode2 from '~components/portfolio/node/feathers-exx/code-2.vue'
    import FeathersExxCode3 from '~components/portfolio/node/feathers-exx/code-3.vue'
    import FeathersExxCode4 from '~components/portfolio/node/feathers-exx/code-4.vue'
    import FeathersExxCode5 from '~components/portfolio/node/feathers-exx/code-5.vue'
    import FeathersExxCode6 from '~components/portfolio/node/feathers-exx/code-6.vue'
    import FeathersExxCode7 from '~components/portfolio/node/feathers-exx/code-7.vue'
    import FeathersExxCode8 from '~components/portfolio/node/feathers-exx/code-8.vue'
    import FeathersExxCode9 from '~components/portfolio/node/feathers-exx/code-9.vue'
    import FeathersExxCode10 from '~components/portfolio/node/feathers-exx/code-10.vue'
    import FeathersExxCode11 from '~components/portfolio/node/feathers-exx/code-11.vue'
    import FeathersExxCode12 from '~components/portfolio/node/feathers-exx/code-12.vue'
    import FeathersExxCode13 from '~components/portfolio/node/feathers-exx/code-13.vue'
    import FeathersExxCode14 from '~components/portfolio/node/feathers-exx/code-14.vue'
    import FeathersExxCode15 from '~components/portfolio/node/feathers-exx/code-15.vue'

    export default {
        components: {
            LinkToPortfolio,
            FeathersExxCode1,
            FeathersExxCode2,
            FeathersExxCode3,
            FeathersExxCode4,
            FeathersExxCode5,
            FeathersExxCode6,
            FeathersExxCode7,
            FeathersExxCode8,
            FeathersExxCode9,
            FeathersExxCode10,
            FeathersExxCode11,
            FeathersExxCode12,
            FeathersExxCode13,
            FeathersExxCode14,
            FeathersExxCode15
        },
        data() {
            return {
                title: 'Feathers Examples',
                description: 'Примеры работы с сервисами, базами данных, аутентификация/авторизация пользователей.',
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

