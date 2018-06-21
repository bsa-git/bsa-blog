<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-12-27</p>
            <v-card class="blog-post">
                <v-card-text>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Я использовал свободный шаблон <a
                                href="https://graygrids.com/item/osahan-free-cv-resumevcard-html5-template/"
                                target="_blank">Osahan – Free CV Resume/Vcard HTML5 Template</a>,
                            чтобы продемонстрировать работу замечательной библиотеки
                            <a href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/vue-resume" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://vue-resume.firebaseapp.com/" target="_blank">здесь</a>
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
                            <dt><strong>jQuery</strong></dt>
                            <dd><a href="http://learn.jquery.com/" target="_blank">Документация</a></dd>
                            <dt><strong>Bootstrap 3</strong></dt>
                            <dd><a href="https://getbootstrap.com/docs/3.3/" target="_blank">Документация</a></dd>
                            <dt><strong>jQuery plugin Owl Carousel 2</strong></dt>
                            <dd><a href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html"
                                   target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/OwlCarousel2/OwlCarousel2" target="_blank">GitHub</a></dd>
                            <dt><strong>jQuery plugin Magnific Popup</strong></dt>
                            <dd><a href="http://dimsemenov.com/plugins/magnific-popup/documentation.html"
                                   target="_blank">Документация</a></dd>
                            <dd><a href="https://github.com/dimsemenov/Magnific-Popup" target="_blank">GitHub</a></dd>
                            <dd><a href="http://dimsemenov.com/plugins/magnific-popup/" target="_blank">Примеры</a></dd>
                            <dt><strong>Font Awesome - the iconic font and CSS toolkit</strong></dt>
                            <dd><a href="http://fontawesome.io/" target="_blank">Документация</a></dd>
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
                            <li>Для построения пользовательского интерфейса используется <a
                                    href="https://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap 3</a>, это один из популярных HTML, CSS,
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
                            <li>Клонировать или загрузить <a href="https://github.com/bsa-git/vue-resume"
                                                             target="_blank">vue-resume</a>
                                проект с GitHub.
                            </li>
                            <li>Сконфигурировать веб сервер так чтобы входная точка была <code>/index.html</code>.</li>
                            <li>Доступ к URL вашего проекта с помощью веб-браузера (пр. <a
                                    href="http://vue-resume/index.html">http://vue-resume/index.html</a>).
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>
                        <p>
                            <strong>Vue-Resume</strong> проект имеет файловую структуру, показанную ниже см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <resume-code1></resume-code1>

                        <h3>Точка входа <strong>main.js</strong></h3>
                        <p>
                            Точкой входа в приложение является файл <code>main.js</code>. В нем происходит конфигурация
                            <code>requirejs</code>, компоновка приложения из отдельных компонентов,
                            создание самого приложения <code>App</code> см. пр.2.
                        </p>
                        <kbd>пр.2</kbd>
                        <resume-code2></resume-code2>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import ResumeCode1 from '~components/portfolio/vue/resume/code-1.vue'
    import ResumeCode2 from '~components/portfolio/vue/resume/code-2.vue'

    export default {
        components: {
            ResumeCode1,
            ResumeCode2
        },
        data() {
            return {
                title: 'Vue-Resume',
                description: 'Сайт резюме пользователя.',
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

