<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2018-01-03</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Я использовал примеры с <a href="https://vuetifyjs.com/" target="_blank">официального сайта</a>,
                            чтобы продемонстрировать работу фреймворка <strong>Vuetify</strong>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/vuetify-nuxt-start" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="https://bsa-git.github.io/vuetify-nuxt-start/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Обзор Vuetify.js фреймворка</h2>
                        <p>
                            <strong>Vuetify</strong> - это семантическая структура компонентов для <a
                                href="https://vuejs.org/v2/guide/index.html" target="_blank">Vue</a>. Он направлен на предоставление
                            многоразовых компонентов, которые делают создание вашего приложения легким.
                        </p>
                        <p>
                            Компоненты <strong>Vuetify</strong>, созданные в соответствии с
                            <a href="https://material.io/" target="_blank">Google's Material Design Spec.</a>,
                            содержат легко запоминающийся семантический дизайн, который вместо запоминания разметки и сложных
                            классов дает вам типы, которые говорят о свойствах, имеющих простые и понятные имена.
                        </p>
                        <p>
                            Используйте возможности <a href="https://chat.vuetifyjs.com/" target="_blank">сообщества</a>
                            <strong> Vuetify</strong> и получите помощь 24/7 от талантливых разработчиков по всему миру
                        </p>
                        <p>
                            <strong>Vuetify</strong> поддерживает все современные браузеры, включая IE11 и Safari 9+.
                            От мобильного телефона до рабочего стола ноутбука. Вы можете быть уверены, что ваше приложение
                            будет работать так, как ожидалось. <strong>Vuetify</strong> имеет
                            <a href="https://vuetifyjs.com/vuetify/quick-start" target="_blank">8 готовых шаблонов</a>,
                            которые помогут вам начать работу с <strong>Vuetify</strong> еще быстрее..
                        </p>
                        <h3>Возможности</h3>
                        <ul>
                            <li>Наличие 80 компонентов</li>
                            <li>8 шаблонов для Vue-CLI</li>
                            <li>Наличие <a href="https://chat.vuetifyjs.com/" target="_blank">чата</a>, где можно задать вопросы</li>
                            <li>Модульная система перехода компонентов</li>
                            <li>Обеспечивает высокое быстродействие</li>
                            <li>Постоянные обновления для добавления новых возможностей фреймворка</li>
                            <li>Постоянно расширяемое сообщество</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Vuetify.js (Material Component Framework)</strong></dt>
                            <dd>
                                <a href="https://vuetifyjs.com/vuetify/quick-start" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://github.com/vuetifyjs/vuetify" target="_blank">GitHub</a>
                            </dd>
                            <dt><strong>Google's Material Design Spec.</strong></dt>
                            <dd>
                                <a href="https://material.io/" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://github.com/material-components" target="_blank">GitHub</a>
                            </dd>
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
                                    href="https://vuetifyjs.com/vuetify/quick-start" target="_blank">Vuetify.js (Material Component Framework)</a>,
                                это один из популярных HTML, CSS и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.
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
                                    Клонируйте или загрузите <a href="https://github.com/bsa-git/vuetify-nuxt-start">vuetify-nuxt-start</a>
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
                            <strong>Nuxt - Vuetify Start</strong>
                            проект имеет файловую структуру, показанную ниже см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <vuetify-start-code1></vuetify-start-code1>
                        <h3>Конфигурация</h3>
                        <h4>env.js</h4>
                        <p>
                            Файл <code>env.js</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>env.example.js</code>, иначе приложение будет
                            выдавать ошибку. В файле <code>env.js</code> устанавливаются пользовательские значения
                            параметров вашей конфигурации, которые переустанавливают базовые параметры конфигурации.
                        </p>
                        <p>
                            Базовые параметры вашей конфигурации располагаются в папке <code>config/env/</code>. В этой папке расположены
                            следующие файлы конфигурации:
                        </p>
                        <ul>
                            <li>global.js</li>
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
                        <vuetify-start-code2></vuetify-start-code2>
                        <h4>nuxt.config.js</h4>
                        <p>Файл nuxt.config.js содержит пользовательскую конфигурацию Nuxt.js см. пр.3. </p>
                        <kbd>пр.3</kbd>
                        <vuetify-start-code3></vuetify-start-code3>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import VuetifyStartCode1 from '~components/portfolio/nuxt/vuetify-start/code-1.vue'
    import VuetifyStartCode2 from '~components/portfolio/nuxt/vuetify-start/code-2.vue'
    import VuetifyStartCode3 from '~components/portfolio/nuxt/vuetify-start/code-3.vue'

    export default {
        components: {
            LinkToPortfolio,
            VuetifyStartCode1,
            VuetifyStartCode2,
            VuetifyStartCode3
        },
        data() {
            return {
                title: 'Nuxt - Vuetify Start',
                description: 'В приложении представлены возможности Vuetify.js (Material Component Framework).',
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

