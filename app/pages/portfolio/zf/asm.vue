<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-12-18</p>
            <v-card class="blog-post">
                <v-card-text>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Простое приложение реализующее сайт для отчетов и отображения данных в реальном времени,
                            разработанное на базе <code>Zend framework 2</code>. С документацией по <code>Zend framework 2</code>
                            можно познакомиться
                            на сайте <a
                                href="http://framework.zend.com/learn/" target="_blank">Zend-Learn</a>.
                            Примеры установки приложения приведены для <code>ОС &quot;Windows&quot;</code>
                            и веб сервера <code>Nginx</code>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/zf2-asm" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Zend Framework 2</strong></dt>
                            <dd>
                                <a href="https://framework.zend.com/manual/2.4/en/user-guide/overview.html"
                                   target="_blank">Быстрый старт</a>
                            </dd>
                            <dd>
                                <a href="https://framework.zend.com/manual/2.4/en/index.html" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://framework.zend.com/docs/api/zf2" target="_blank">API</a>
                            </dd>
                            <dt><strong>Highstock - это многоплатформенная графическая библиотека на основе SVG</strong></dt>
                            <dd>
                                <a href="https://www.highcharts.com/docs" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://api.highcharts.com/highcharts/" target="_blank">API</a>
                            </dd>
                            <dd>
                                <a href="https://www.highcharts.com/stock/demo" target="_blank">Примеры</a>
                            </dd>
                            <dt><strong>Swipebox - плагин jQuery для отображения фото галереи</strong></dt>
                            <dd>
                                <a href="http://brutaldesign.github.io/swipebox/" target="_blank">Документация</a>
                            </dd>
                            <dt><strong>TouchTouch - плагин jQuery для отображения фото галереи</strong></dt>
                            <dd>
                                <a href="https://tutorialzine.com/2012/04/mobile-touch-gallery" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://demo.tutorialzine.com/2012/04/mobile-touch-gallery/" target="_blank">Примеры</a>
                            </dd>
                            <dt><strong>FlexSlider 2 - плагин jQuery для отображения фото слайдов</strong></dt>
                            <dd>
                                <a href="https://ruseller.com/adds/adds2251/example/" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="http://flexslider.woothemes.com/index.html" target="_blank">Примеры</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <p>Основные характеристики приложения:</p>
                        <ul>
                            <li>реализует сайт для отчетов и отображения данных в реальном времени;</li>
                            <li>
                                расширяется с помощью конфигурационных файлов, расположенных в <code>config/</code>;
                            </li>
                            <li>использует БД типа <strong>SqlLite</strong> <code>data/db/system.db</code>; </li>
                            <li>для просмотра видео используется плагин для <strong>jQuery</strong> <a href="https://code.google.com/archive/p/divbox/" target="_blank"> Divbox</a>;</li>
                            <li>для просмотра фото галереи используется плагин для <strong>jQuery</strong> <a href="http://brutaldesign.github.io/swipebox/" target="_blank"> Swipebox</a>;</li>
                            <li>для просмотра фото галереи используется плагин для <strong>jQuery</strong> <a href="https://tutorialzine.com/2012/04/mobile-touch-gallery" target="_blank"> TouchTouch</a>;</li>
                            <li>для просмотра фото слайдов используется плагин для <strong>jQuery</strong> <a href="http://flexslider.woothemes.com/index.html" target="_blank"> FlexSlider 2</a>;</li>
                            <li>
                                для отображения графиков используется <strong>JavaScript</strong> библиотека <a href="https://www.highcharts.com/products/highstock/" target="_blank">Highstock</a>;
                            </li>
                            <li>реализована возможность печатать отчеты;</li>
                            <li>также добавлены плагины для работы с массивами, строками и др. <code>module/Application/src/Application/Service</code>;</li>
                        </ul>
                        <h2>Установка</h2>
                        <h3>Предварительные требования</h3>
                        <ul>
                            <li><a href="http://php.net" target="_blank">PHP</a> version &gt;= 5.3</li>
                            <li>
                                веб сервер <a href="https://httpd.apache.org/download.cgi" target="_blank">Apache2</a>, <a
                                    href="http://nginx.org/ru/" target="_blank">Nginx</a> или похожие
                            </li>
                            <li><a href="https://getcomposer.org/" target="_blank">Composer</a></li>
                        </ul>
                        <h3>Развертывание</h3>
                        <ol>
                            <li>Клонировать <a href="https://github.com/bsa-git/zf2-asm" target="_blank">zf2-asm</a>
                                проект с помощью git.
                            </li>
                            <li>Выполнить <code>composer install</code>.</li>
                            <li>Сконфигурируйте веб сервер, чтобы точка входа была <code>public/index.php</code>.</li>
                            <li>
                                Установите, если необходимо, соответсвующие права на запись в <code>path/to/project/var</code>.
                            </li>
                            <li>Введите адрес сайта в броузер (пр. <a href="http://zf2-asm.ru/" target="_blank">http://zf2-asm.ru/</a>)
                            </li>
                        </ol>
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
                title: 'ZF2-ASM ',
                description: 'Сайт для отчетов и отображения данных в реальном времени, разработанное на базе «Zend Framework-2».',
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

