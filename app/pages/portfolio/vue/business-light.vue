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
                            Я использовал свободный шаблон <a
                                href="https://graygrids.com/item/osahan-free-responsive-business-bootstrap-template/"
                                target="_blank">Osahan – Free Responsive Business Bootstrap Template</a>,
                            чтобы продемонстрировать работу замечательной библиотеки
                            <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/vue-business-light" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://vue-business-light.firebaseapp.com/" target="_blank">здесь</a>
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
                            <a href="single-file-components.html">современными инструментами</a> и
                            <a href="https://github.com/vuejs/awesome-vue#components--libraries" target="_blank">дополнительными библиотеками</a>.
                        </p>
                        <p>
                            Если вы — опытный фронтенд-разработчик, и хотите узнать, чем Vue отличается от остальных
                            библиотек или фреймворков, обратите внимание на <a href="comparison.html">сравнение с другими фреймворками</a>.
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
                            <dt><strong>Vuex is library for Vue.js applications</strong></dt>
                            <dd>
                                <a href="https://vuex.vuejs.org/en/" target="_blank">Документация</a>
                            </dd>
                            <dt><strong>Vue Router is library for Vue.js applications</strong></dt>
                            <dd>
                                <a href="https://router.vuejs.org/en/essentials/getting-started.html" target="_blank">Документация</a>
                            </dd>
                            <dt><strong>jQuery plugin Bootstrap Validation</strong></dt>
                            <dd><a href="http://reactiveraven.github.io/jqBootstrapValidation/" target="_blank">Документация</a>
                            </dd>
                            <dd><a href="https://github.com/ReactiveRaven/jqBootstrapValidation"
                                   target="_blank">GitHub</a></dd>
                            <dt><strong>jQuery plugin Owl Carousel 2</strong></dt>
                            <dd><a href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html"
                                   target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/OwlCarousel2/OwlCarousel2" target="_blank">GitHub</a></dd>
                            <dt><strong>Font Awesome - the iconic font and CSS toolkit</strong></dt>
                            <dd><a href="http://fontawesome.io/" target="_blank">Документация</a></dd>
                            <dt><strong>Animate.css - library of CSS animations</strong></dt>
                            <dd><a href="https://github.com/daneden/animate.css" target="_blank">GitHub</a></dd>
                            <dd><a href="https://daneden.github.io/animate.css/" target="_blank">Примеры</a></dd>
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
                                Для обеспечения этой технологии используется библиотека <a href="http://requirejs.org/">RequireJS</a>
                                которая является загрузчиком JavaScript файлов и модулей.
                            </li>
                            <li>
                                Используется маршрутизатор <a
                                    href="http://router.vuejs.org/en/" target="_blank">Vue-Router</a>
                                для создания одностраничного приложения (SPA, Single-Page Applications).
                            </li>
                            <li>Для работы с локальными данными используется библиотека <a
                                    href="http://vuex.vuejs.org/en/intro.html" target="_blank">Vuex</a>
                                это паттерн управления состоянием и библиотека для приложений на Vue.js.
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
                            <li>Клонировать или загрузить <a href="https://github.com/bsa-git/vue-business-light"
                                                             target="_blank">vue-business-light</a>
                                проект с GitHub.
                            </li>
                            <li>Сконфигурировать веб сервер так чтобы входная точка была <code>/index.html</code>.</li>
                            <li>Доступ к URL вашего проекта с помощью веб-браузера (пр. <a
                                    href="http://localhost/vue-business-light/index.html">http://localhost/vue-business-light/index.html</a>).
                            </li>
                        </ol>
                        <h3>Оптимизация</h3>
                        <p>Чтобы оптимизировать, выполните:</p>
                        <pre><code>node app/js/r.js -o build_require.js</code></pre>
                        <p>
                            С помощью этой команды создается оптимизированная версия проекта в
                            <strong>/public</strong> директории. Файл <code>main.js</code> будет оптимизирован для
                            включения всех его зависимостей.
                        </p>
                        <p>
                            Большую информацию по оптимизации можно поосмотреть:
                            <a href="http://requirejs.org/docs/optimization.html">здесь</a>
                        </p>
                        <p>
                            Большую информацию по использованию <code>requirejs</code> можно помотреть:
                            <a href="http://requirejs.org/docs/api.html">здесь</a>
                        </p>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>
                        <p>
                            <strong>Vue.js - Business Light</strong> проект имеет файловую структуру, показанную ниже см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <business-light-code1></business-light-code1>
                        <h3>Конфигурация</h3>
                        <h5>env.js</h5>
                        <p>
                            Файл <code>env.js</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>env.example.js</code>, иначе приложение будет
                            выдавать ошибку. В файле <code>env.js</code> устанавливаются пользовательские значения
                            параметров вашей конфигурации, которые переустанавливают базовые параметры конфигурации.
                        </p>
                        <p>
                            Базовые параметры вашей конфигурации располагаются в папке <code>app/config/env/</code>. В этой папке расположены
                            следующие файлы конфигурации:
                        </p>
                        <ul>
                            <li>production.js</li>
                            <li>development.js</li>
                            <li>testing.js</li>
                        </ul>
                        <p>
                            В этих файлах устанавливаются базовые параметры конфигурации в зависимости от режима работы
                            приложения: development, production, testing.
                        </p>
                        <p>
                            Конфигурация файла <code>env.js</code> см. пр.2.
                        </p>
                        <kbd>пр.2</kbd>
                        <business-light-code2></business-light-code2>
                        <h3>Точка входа <strong>main.js</strong></h3>
                        <p>
                            Точкой входа в приложение является файл <code>main.js</code>. В нем происходит конфигурация
                            <code>requirejs</code>, настройка путей приложения с помощью библиотеки <code>Vue-Router</code>,
                            создание самого приложения <code>App</code> см. пр.3.
                        </p>
                        <kbd>пр.3</kbd>
                        <business-light-code3></business-light-code3>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import BusinessLightCode1 from '~components/portfolio/vue/business-light/code-1.vue'
    import BusinessLightCode2 from '~components/portfolio/vue/business-light/code-2.vue'
    import BusinessLightCode3 from '~components/portfolio/vue/business-light/code-3.vue'

    export default {
        components: {
            BusinessLightCode1,
            BusinessLightCode2,
            BusinessLightCode3
        },
        data() {
            return {
                title: 'Vue.js - Business Light',
                description: 'Рекламный сайт фирмы сделанный на базе Vue.js фреймворка.',
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

