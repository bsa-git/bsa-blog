<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-12-20</p>
            <v-card class="blog-post">
                <v-card-text>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Я использовал примеры с <a href="http://vuejs.org/examples/" target="_blank">официального сайта</a>,
                            чтобы продемонстрировать работу замечательной библиотеки
                            <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/vue-examples/" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://vue-examples-4878a.firebaseapp.com/#!/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Обзор Vue.js фреймворка</h2>
                        <p>
                            Vue (произносится /vjuː/, примерно как <strong>view</strong>) — это <strong>прогрессивный фреймворк</strong>
                            для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов,
                            Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня
                            представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами.
                            С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений
                            (SPA, Single-Page Applications), если использовать его совместно с
                            <a href="single-file-components.html" target="_blank">современными инструментами</a> и
                            <a href="https://github.com/vuejs/awesome-vue#components--libraries" target="_blank">дополнительными библиотеками</a>.
                        </p>
                        <p>
                            Если вы — опытный фронтенд-разработчик, и хотите узнать, чем Vue отличается от остальных
                            библиотек или фреймворков, обратите внимание на <a href="comparison.html" target="_blank">сравнение с другими фреймворками</a>.
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Vue.js (JavaScript framework)</strong></dt>
                            <dd>
                                <a href="http://vuejs.org/guide/" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="http://vuejs.org/api/" target="_blank">API</a>
                            </dd>
                            <dd>
                                <a href="https://vuejs.org/v2/guide/comparison.html" target="_blank">Сравнение с другими фреймворками</a>
                            </dd>
                            <dd>
                                <a href="http://vuejs.org/examples/" target="_blank">Примеры</a>
                            </dd>
                            <dd>
                                <a href="https://github.com/vuejs/awesome-vue#components--libraries" target="_blank">Components & Libraries</a>
                            </dd>
                            <dt><strong>Firebase (Realtime Database)</strong></dt>
                            <dd><a href="https://firebase.google.com/docs/web/setup" target="_blank">Документация</a>
                            </dd>
                            <dd><a href="https://firebase.google.com/docs/samples/" target="_blank">Примеры</a></dd>
                            <dd><a href="https://console.firebase.google.com/?pli=1" target="_blank">Консоль</a></dd>
                            <dt><strong>HackerNews</strong></dt>
                            <dd><a href="https://github.com/HackerNews/API" target="_blank">API</a></dd>
                            <dt><strong>A Markdown parser and compiler</strong></dt>
                            <dd><a href="https://github.com/chjj/marked" target="_blank">GitHub</a></dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <ul>
                            <li>Используются реактивные возможности построения пользовательского интерфейса.</li>
                            <li>
                                Используются HTML-шаблоны для создания представлений веб-приложений, которые состоят из различных частей.
                            </li>
                            <li>Сборка модулей осуществляется по технологии Asynchronous module definition (AMD).
                                Для обеспечения этой технологии используется библиотека <a href="http://requirejs.org/" target="_blank">RequireJS</a>
                                которая является загрузчиком JavaScript файлов и модулей.
                            </li>
                            <li>
                                Используется маршрутизация для создания одностраничного приложения (SPA, Single-Page Applications).
                            </li>
                            <li>Реализована локализация двух языков: английского и русского.</li>
                            <li>Для работы с локальными данными в броузере используется библиотека <a
                                    href="https://github.com/andris9/jStorage" target="_blank">jStorage</a>
                                это кросс-броузерная база данных для хранения значений в виде (key-value).
                            </li>
                            <li>Для хранения данных на серверной стороне используется база данных <a
                                    href="https://www.firebase.com/" target="_blank">Firebase</a>.
                            </li>
                            <li>Для построения пользовательского интерфейса используется <a
                                    href="http://getbootstrap.com/" target="_blank">Bootstrap 3</a>, это один из популярных HTML, CSS,
                                и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Установка приложения</h2>
                        <h3>Предварительные требования</h3>
                        <a href="https://httpd.apache.org/download.cgi" target="_blank">Apache2</a>, <a
                            href="http://nginx.org/en/" target="_blank">Nginx</a> веб сервер или похожие.
                        <h3>Развертывание</h3>
                        <ol>
                            <li>Клонировать или загрузить <a href="https://github.com/bsa-git/vue-examples/" target="_blank">vue-examples</a>
                                проект с GitHub.
                            </li>
                            <li>Сконфигурировать веб сервер так чтобы входная точка была <code>/index.html</code>.</li>
                            <li>Доступ к URL вашего проекта с помощью веб-браузера (пр. <a
                                    href="http://localhost/vue-examples/index.html" target="_blank">http://localhost/vue-examples/index.html</a>).
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h2>Это приложение демонстрирует работу следующих Vue.js примеров:</h2>
                        <h3>TodoMVC</h3>
                        <p>
                            Пример использует <a href="https://www.firebase.com/" target="_blank">Firebase</a>
                            как базу данных на серверной стороне. Это полнофункциональная реализация TodoMVC шаблона,
                            выполненная с максимальной эффективностью и минимальным кодом.
                        </p>
                        <h3>Markdown Editor</h3>
                        <p>
                            Пример реализует простой <strong>Markdown</strong> редактор. <a
                                href="http://daringfireball.net/projects/markdown/" target="_blank">Markdown</a>
                            это язык разметки текста в Интернете. Вы контролируете отображение документа,
                            форматирование слов жирным шрифтом или курсивом, добавление изображений и создание списков - это просто
                            немногие из вещей, которые мы можем сделать с помощью <strong>Markdown</strong>.
                        </p>
                        <h3>GitHub Commits</h3>
                        <p>
                            Пример получает последние <a href="https://github.com/bsa-git/silex-mvc/" target="_blank">Silex-MVC</a>
                            зафиксируемые данные из <strong>API GitHub</strong>
                            и отображает их как список. Вы можете переключаться между
                            ведущим и другими ветвями. <strong>GitHub</strong>
                            - это платформа для хостинга кода, для контроля версий и
                            совместной работы. Это позволяет вам и другим разработчикам совместно работать над проектами из любого места.
                        </p>
                        <h3>Firebase + Validation</h3>
                        <p>
                            Пример использует <a href="https://www.firebase.com/" target="_blank">Firebase</a>
                            как базу для хранения данных
                            на серверной стороне и обеспечивает синхронизацию данных между клиентами в реальном времени
                            (вы можете попробовать открыть его на нескольких вкладках браузера). В добавок, он выполняет валидацию
                            вводимых значений с помощью вычисляемых свойств и тригеров, а так же CSS переходы при добавлении / удалении элементов.
                        </p>
                        <h3>Sort Grid Component</h3>
                        <p>
                            Это пример создания компонента таблицы с возможностью сортировки и фильтрации внешних данных.
                        </p>
                        <h3>Hacker News</h3>
                        <p>
                            Это клон <strong>HackerNews</strong>, построенный на базе официального <a
                                href="https://github.com/HackerNews/API" target="_blank">Firebase API</a>.
                            С помощью <strong>Firebase</strong>
                            мы публикуем общедоступные данные <strong>HackerNews</strong>
                            в реальном времени.
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
        components: {
        },
        data() {
            return {
                title: 'Vue.js - примеры',
                description: 'Демонстрация работы Vue.js фреймворка.',
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

