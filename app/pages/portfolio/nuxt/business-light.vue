<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-12-28</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Я использовал свободный шаблон <a
                                href="https://graygrids.com/item/osahan-free-responsive-business-bootstrap-template/"
                                target="_blank">Osahan – Free Responsive Business Bootstrap Template</a>,
                            чтобы продемонстрировать работу фреймворка
                            <a href="https://nuxtjs.org/guide" target="_blank">Nuxt</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/vue-nuxt-static" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://vue-nuxt-static.herokuapp.com/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Обзор Nuxt фреймворка</h2>
                        <p>
                            Nuxt.js — это фреймворк для универсальных приложений на <a
                                href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue.js</a>.
                        </p>
                        <p>
                            Основной задачей этого фреймворка является <strong>рендеринг пользовательского интерфейса</strong>
                            в условиях абстракции от клиент-серверной архитектуры.</p>
                        <p>
                            Цель разработки — создать фреймворк настолько гибкий, чтобы его можно было использовать и как основу, и как дополнение к уже существующим проектам на Node.js.</p>
                        <p>
                            Nuxt.js содержит широкие возможности конфигурации приложения, что позволяет сделать разработку лёгкой и приятной.</p>
                        <p>Кроме того, предоставляется опция разработки: <em>nuxt generate</em>. С помощью неё можно <strong>статически генерировать</strong>
                            приложения на Vue.js.
                            На наш взгляд, эта опция может оказаться следующим большим шагом на пути разработки микросервисных веб-приложений.
                        </p>
                        <p>
                            Фреймворк Nuxt.js привносит множество возможностей в разработке веб-приложений, таких как: асинхронные данные, middleware, шаблоны и др.</p>
                        <h3>Возможности</h3>
                        <ul>
                            <li>Написание Vue-файлов</li>
                            <li>Автоматическое разделение кода</li>
                            <li>Серверный рендеринг</li>
                            <li>Мощная система маршрутизации с асинхронными данными</li>
                            <li>Обслуживание статических файлов</li>
                            <li>Транспиляция ES6/ES7</li>
                            <li>Сборка и минимизация JS &amp; CSS</li>
                            <li>Управление элементами в блоке head</li>
                            <li>Горячая замена модулей при разработке</li>
                            <li>Интеграция c ESLint</li>
                            <li>Пре-процессоры: SASS, LESS, Stylus, и др.</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Nuxt (JavaScript framework)</strong></dt>
                            <dd>
                                <a href="https://nuxtjs.org/guide" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://github.com/nuxt" target="_blank">GitHub</a>
                            </dd>
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
                                    href="https://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap 3</a>, это один из популярных HTML, CSS,
                                и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Установка приложения</h2>
                        <h3>Предварительные требования</h3>
                        <ol>
                            <li>
                                <p>
                                    Убедитесь в том, что у вас установлен <a href="https://nodejs.org/">NodeJS</a> и
                                    <a href="https://www.npmjs.com/">npm</a>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Клонируйте или загрузите <a href="https://github.com/bsa-git/vue-nuxt-static">vue-nuxt-static</a>
                                    проект с GitHub.
                                </p>
                            </li>
                            <li>
                                <p>Инсталируйте ваши зависимости</p>
                            </li>
                        </ol>
                        <pre><code class="bash">cd &lt;project-name&gt; npm install # Or yarn install</code></pre>
                        <h3>Переменные окружения</h3>
                        <p>
                            Файл <code>env.js</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>env.example.js</code>, иначе приложение будет
                            выдавать ошибку. Файл <code>env.js</code> устанавливает переменные окружения.
                        </p>

                        <h3>Запуск вашего проекта</h3>
                        <h3>Development</h3>
                        <pre><code class="bash">npm run dev</code></pre>
                        <br />
                        <p>
                            Приложение будет запущено в режиме <strong>Разработки</strong> и будет выполнятся на
                            <a href="http://localhost:3000">http://localhost:3000</a>
                        </p>
                        <h3>Production</h3>
                        <pre><code class="bash">
npm run build
npm start
                        </code></pre>
                        <p>
                            Приложение будет запущено в <strong>Рабочем</strong> режиме и будет выполнятся на
                            <a href="http://localhost:3000">http://localhost:3000</a>
                        </p>
                        <h3>Генерация статического проекта</h3>
                        <pre><code class="bash">npm run generate</code></pre>
                        <br />
                        <p>
                            При построении вашего приложения будет генерироваться HTML файл для каждого вашего роутера
                            и сохраняться по соответствующему пути.
                        </p>
                        <p>Пример:</p>
                        <pre><code class="bash">
-| pages/
----| about.vue
----| index.vue
                        </code></pre>
                        <p>Будет сгенерировано:</p>
                        <pre><code class="bash">
-| dist/
----| about/
------| index.html
----| index.html
                        </code></pre>
                        <p>
                            Таким образом вы сможете размещать ваш статический проект на любом статическом хостинге.
                        </p>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>
                        <p>
                            <strong>Nuxt - Business Light</strong>
                            проект имеет файловую структуру, показанную ниже см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <business-light-code1></business-light-code1>
                        <h3>Конфигурация</h3>
                        <h4>env.js</h4>
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
                        <h4>nuxt.config.js</h4>
                        <p>Файл nuxt.config.js содержит пользовательскую конфигурацию Nuxt.js см. пр.3. </p>
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
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import BusinessLightCode1 from '~components/portfolio/nuxt/business-light/code-1.vue'
    import BusinessLightCode2 from '~components/portfolio/nuxt/business-light/code-2.vue'
    import BusinessLightCode3 from '~components/portfolio/nuxt/business-light/code-3.vue'

    export default {
        components: {
            LinkToPortfolio,
            BusinessLightCode1,
            BusinessLightCode2,
            BusinessLightCode3
        },
        data() {
            return {
                title: 'Nuxt - Business Light',
                description: 'Рекламный сайт фирмы, сделанный на базе Nuxt фреймворка.',
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

