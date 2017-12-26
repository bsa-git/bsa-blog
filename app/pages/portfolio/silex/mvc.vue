<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-15</p>
            <v-card class="blog-post">
                <v-card-text>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Простое приложение реализующее шаблон проектирования - MVC на базе SILEX (PHP микро-фреймворка,
                            созданного на основе Symfony2 компонентов). Некоторые идеи мной были заимствованы с проекта
                            <a href="https://github.com/FluencyLabs/silex-enhanced-skeleton" target="_blank">GitHub (silex-enhanced)</a>.
                            С документацией по SILEX можно познакомиться <a href="http://silex.sensiolabs.org" target="_blank">здесь</a>.
                            Примеры установки фреймворка приведены для ОС &quot;Windows&quot;
                            и веб сервера Nginx.</p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/silex-mvc" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Подробную документацию можно посмотреть <a
                                    href="http://bsa-git.github.io/silex-mvc/ru/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Silex Разработка</strong></dt>
                            <dd>
                                <a href="https://silex.symfony.com/doc/2.0/" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="http://github.com/silexphp/Silex" target="_blank">Официальный репозитарий</a>
                            </dd>
                            <dd>
                                <a href="http://silex.sensiolabs.org/doc/changelog.html" target="_blank">Обновление</a>
                            </dd>
                            <dd>
                                <a href="http://stackoverflow.com/" target="_blank">Поддержка</a>
                            </dd>
                            <dd>
                                <a href="http://github.com/silexphp/Silex/issues"
                                   target="_blank">Сообщения Об Ошибках</a>
                            </dd>
                            <dt><strong>Symfony</strong></dt>
                            <dd><a href="http://symfony.com/" target="_blank">Документация</a></dd>
                            <dd>
                                <a href="http://symfony.com/community" target="_blank">Сообщество</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <p>Основные характеристики приложения:</p>
                        <ul>
                            <li>приложение реализует простое приложение управления блогом;</li>
                            <li>расширяется с помощью конфигурационных файлов, расположенных в <code>app/Resources/Сonfig</code>;
                            </li>
                            <li>работает как веб или как консольное приложение;</li>
                            <li>
                                с помощью консольного приложения можно выполнять разные служебные задачи (пр. создание БД <code>app/Console/scripts/orm/schema_create.bat</code>);
                            </li>
                            <li>для примера с помощью консольного приложения реализована работа с сервисом <a
                                    href="http://ubki.ua/ru" target="_blank">UBKI</a>;
                            </li>
                            <li>реализована локализация для двух языков: английский, русский;</li>
                            <li>обеспечивается процесс регистрации, аутентификации и авторизации пользователей;</li>
                            <li>
                                в БД созданы два пользователя с соответствующими правами. Администратор (login=admin; pass=foo) User (login=user; pass=foo);
                            </li>
                            <li>использует БД типа SqlLite <code>app/Resources/db/app.db</code>;</li>
                            <li>работа с БД обеспечивается с помощью Doctrine(DBAL, ORM) <code>vendor/doctrine</code>
                                и PHP ActiveRecord <code>library/AR</code>;
                            </li>
                            <li>
                                реализована возможность вывода данных по страницам с помощью библиотеки Pagerfanta <code>library/Pagerfanta</code>;
                            </li>
                            <li>используется шаблонизатор Twig <code>vendor/twig</code>;</li>
                            <li>для работы с почтой используется библиотека SwiftMailer <code>vendor/swiftmailer</code>;
                            </li>
                            <li>
                                добавлены сервисы такие как Zend-Filter, Zend-Json и др. <code>vendor/zendframework</code>;
                            </li>
                            <li>так же добавлены сервисы для работы с массивами, строками, XML, HTTP, Markdown <code>app/Services/My</code>;
                            </li>
                            <li>
                                на стороне клиента используются библиотеки : jQuery, Bootstrap 3, RequireJS, Backbone, Vue <code>public/js/lib</code>;
                            </li>
                            <li>
                                на стороне клиента используются сервисы: Datepicker, FormValidation, MaskInput, Highlight <code>public/js/app/services</code>;
                            </li>
                            <li>для примера работы фреймворка Backbone.js реализовано приложение <code>ToDo</code>
                                для локального или серверного хранилищ данных <code>public/js/app/bb-todo</code>;
                            </li>
                            <li>для примера работы фреймворка Vue.js реализовано приложение <code>ToDo</code>
                                для локального хранилища данных <code>public/js/app/vue-todo</code>.
                            </li>
                        </ul>
                        <h2>Установка</h2>
                        <h3>Предварительные требования</h3>
                        <ul>
                            <li><a href="http://php.net" target="_blank">PHP</a> version &gt;= 5.4</li>
                            <li>веб сервер <a href="https://httpd.apache.org/download.cgi" target="_blank">Apache2</a>, <a
                                    href="http://nginx.org/ru/" target="_blank">Nginx</a> или похожие
                            </li>
                            <li><a href="https://getcomposer.org/" target="_blank">Composer</a></li>
                        </ul>
                        <h3>Развертывание</h3>
                        <ol>
                            <li>Клонировать <a href="https://github.com/bsa-git/silex-mvc" target="_blank">silex-mvc</a>
                                проект с помощью git.
                            </li>
                            <li>Выполнить <code>composer install</code>.</li>
                            <li>Для создания базы данных выполнить командный файл из консоли <code>app/Console/scripts/orm/schema_create.bat</code>,
                                предварительно отредактировав пути к <code>php.exe</code> и к <code>app\Console\index.php</code>;
                            </li>
                            <li>Сконфигурируйте веб сервер, чтобы точка входа была <code>public/index.php</code>.</li>
                            <li>
                                Установите, если необходимо, соответсвующие права на запись в <code>path/to/project/var</code>.
                            </li>
                            <li>Введите адрес сайта в броузер</li>
                        </ol>
                        <h2>Конфигурация</h2>
                        <h5>parameters.yml</h5>
                        <p>
                            Здесь устанавливаются значения основных параметров вашей конфигурации,
                            которые могут использоваться в других ваших конфигурациях.
                            Значения параметров можно получить через <code>$app['config']['parameters']</code>.
                        </p>
                        <h5>config.yml</h5>
                        <p>
                            Общая конфигурация используется как веб приложением так и консольным приложением.
                            Разместите данные о ваших общих сервисах в секции <code>service_providers</code> см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <mvc-code1></mvc-code1>
                        <h5>console.yml или application.yml</h5>
                        <p>
                            Конфигурации соответственно применяются для консольного и веб приложений.
                            Если вы используете в ваших конфигурациях выражение <code>imports</code>,
                            то ваш конфиг будет рекурсивно объединен с конфигом указанным в выражении <code>imports</code>.
                        </p>
                        <h5>security.yml</h5>
                        <p>
                            Здесь устанавливаются значения способа аутентификации пользователя и его авторизации.
                            С подробностями можно познакомиться <a
                                href="http://silex.sensiolabs.org/doc/providers/security.html" target="_blank">сдесь</a>.
                        </p>
                        <h5>env.yml</h5>
                        <p>
                            Часто необходимо иметь разные значения для разных настроек в зависимости от среды,
                            в которой выполняется приложение. Например, вы можете захотеть использовать разные
                            драйвера кэша на локальном и производственном (продакшн) серверах.
                            Это легко достигается использованием настроек, зависящих от среды.
                        </p>
                        <p>
                            Для решения этой задачи можно создать файл <code>env.yml</code> с вашими специфическими
                            настройками и разместить его в корне вашего приложения. Этот файл будет замещать
                            файл <code>parameters.yml</code>, где установлены основные параметры вашей конфигурации.
                        </p>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>
                        <p><strong>Silex-MVC</strong> проект имеет файловую структуру, показанную ниже см. пр.2.</p>
                        <kbd>пр.2</kbd>
                        <mvc-code2></mvc-code2>
                        <p>
                            <strong>Silex-MVC</strong> состоит из двух независимых приложений. Это <strong>Веб приложение</strong>
                            и <strong>Консольное приложение</strong>. Эти приложения конфигурируются по разному, хотя у
                            них есть общие файлы конфигурации и общие библиотеки.
                        </p>

                        <h3>Структура веб приложения (app)</h3>
                        <p>Приложение имеет следующую файловую структуру см. пр3.</p>
                        <kbd>пр.3</kbd>
                        <mvc-code3></mvc-code3>
                        <p>Последовательность выполнения веб приложения следующая.</p>
                        <pre><code>Request --&gt; index.php --&gt; Bootstrap.php --&gt; Controller --&gt; Response</code></pre>

                        <h3>Структура веб приложения (public)</h3>
                        <p>Публичные данные имеют следующую файловую структуру см. пр.5</p>
                        <kbd>пр.5</kbd>
                        <mvc-code5></mvc-code5>
                        <p>Входной точкой в приложение является файл - <code>index.php</code>.</p>
                        <p>Основной набор Java Script библиотек, сервисов и фреймворков
                            имеют следующую файловую структуру см. пр.6</p>
                        <kbd>пр.6</kbd>
                        <mvc-code6></mvc-code6>
                        <p>Для работы приложения на стороне клиента основные ресурсы загружаются
                            с помощью макета <code>app/Views/Layout/base.html.twig</code>.</p>
                        <p>Сюда входят следующие ресурсы:</p>
                        <ul>
                            <li><strong>Bootstrap</strong> является самым популярным HTML, CSS, JS фреймворком для создания гибких, мобильных проектов в интернете.</li>
                            <li><strong>Font Awesome</strong> дает вам масштабируемые векторные иконки, которые мгновенно могут быть настроены - по размеру, цвету и всему, что может быть сделано с помощью CSS.</li>
                            <li><strong>Google fonts</strong> Фонты, с помощью которых можно отображать текст на вашем сайте.</li>
                            <li><strong>jQuery</strong> - библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX.</li>
                        </ul>

                        <h3>Структура консольного приложения</h3>
                        <p>Использует <code>Symfony 2</code> <a href="http://symfony.com/doc/current/components/console/index.html" target="_blank">компоненты</a>,
                            которые облегчают создание удобного интерфейса командной строки см. пр4.</p>
                        <kbd>пр.4</kbd>
                        <mvc-code4></mvc-code4>
                        <p>Последовательность выполнения консольного приложения следующая.</p>
                        <pre><code>script.bat --&gt; index.php --&gt; Bootstrap.php --&gt; Command(s) --&gt; Output</code></pre>
                        <p>
                            Для конфигурации консольного приложения используется файл конфигурации
                            <code>app/Resources/Config/parameters.yml</code>, а также <code>app/Resources/Config/console.yml</code>,
                            который наследует параметры конфигурации из файла <code>app/Resources/Config/config.yml</code>.
                        </p>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import MvcCode1 from '~components/portfolio/silex/mvc/code-1.vue'
    import MvcCode2 from '~components/portfolio/silex/mvc/code-2.vue'
    import MvcCode3 from '~components/portfolio/silex/mvc/code-3.vue'
    import MvcCode4 from '~components/portfolio/silex/mvc/code-4.vue'
    import MvcCode5 from '~components/portfolio/silex/mvc/code-5.vue'
    import MvcCode6 from '~components/portfolio/silex/mvc/code-6.vue'

    export default {
        components: {
            MvcCode1,
            MvcCode2,
            MvcCode3,
            MvcCode4,
            MvcCode5,
            MvcCode6
        },
        data() {
            return {
                title: 'Silex MVC',
                description: 'Приложение реализующее шаблон проектирования - MVC на базе SILEX (PHP микро-фреймворка).',
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

