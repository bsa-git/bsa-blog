<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2017-11-17</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Простое приложение реализующее управление блогом, разработанное на базе <code>Zend Framework 1</code>.
                            Основная идея приложения была взята из книги <code>&quot;Создание приложений на PHP&quot; (Автор: Квентин Зервас)</code>.
                            С документацией по <code>Zend framework 1</code> можно познакомиться на сайте <a
                                href="http://framework.zend.com/learn/" target="_blank">Zend-Learn</a>.
                            Примеры установки приложения приведены для <code>ОС &quot;Windows&quot;</code>
                            и веб сервера <code>Nginx</code>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/zf-myblog" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Zend Framework 1</strong></dt>
                            <dd>
                                <a href="https://framework.zend.com/manual/1.12/en/learning.quickstart.html"
                                   target="_blank">Быстрый старт</a>
                            </dd>
                            <dd>
                                <a href="https://framework.zend.com/manual/1.12/en/manual.html" target="_blank">Документация</a>
                            </dd>
                            <dd>
                                <a href="https://framework.zend.com/docs/api/zf1" target="_blank">API</a>
                            </dd>
                            <dt><strong>Smarty 2</strong></dt>
                            <dd>
                                <a href="http://www.smarty.net/" target="_blank">Документация</a>
                            </dd>
                        </dl>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <p>Основные характеристики приложения:</p>
                        <ul>
                            <li>реализует простое приложение управления блогом;</li>
                            <li>
                                расширяется с помощью конфигурационного файла <code>application.ini</code>,
                                расположенного в <code>application/configs</code>;
                            </li>
                            <li>реализована локализация для трех языков: английский, русский, украинский;</li>
                            <li>обеспечивается процесс регистрации, аутентификации и авторизации пользователей;</li>
                            <li>
                                в БД созданы три пользователя с соответствующими правами.
                                Администратор (login=admin; pass=admin) Редактор (login=editor; pass=editor)
                                Пользователь (login=user1; pass=user1) ;
                            </li>
                            <li>использует БД типа SqlLite <code>data/db/myblog.db</code>;</li>
                            <li>
                                реализован полнотекстовый поиск с помощью конпонента <code>Zend_Search_Lucene</code>,
                                входящего в <code>Zend_Framework 1</code>;
                            </li>
                            <li>
                                используется шаблонизатор <a href="http://www.smarty.net/" target="_blank">Smarty 2</a>
                                <code>vendor/smarty/smarty/libs</code>;
                            </li>
                            <li>
                                сообщение пользователя может состоять из самого текстового сообщения и пяти
                                допольнительных ресурсов (изображения, аудио, видео, потоковое аудио/видео, гео-координаты);
                            </li>
                            <li>
                                можно давать комментарии к сообщению пользователя или к соответствующим комментариям
                                других пользователей;
                            </li>
                            <li>
                                поддерживаются следующие типы ресурсов. Изображения (jpeg, png, gif), аудио (mp3),
                                видео (swf, flv, mov, mp4, m4v, f4v, YouTube), потоковое видео
                                (RTMP, PSEUDOSTREAMIN, ADOBE HTTP STREAMING);
                            </li>
                            <li>
                                можно создавать слайд шоу на основе <code>mp3</code> аудио формата и файла конфигурации
                                <code>json</code> формата <code>public/upload/users/admin/files/video</code>;
                            </li>
                            <li>
                                для создания и редактирования текстового сообщения используется редактор
                                <a href="http://ckeditor.com/" target="_blank">CKEditor</a>;
                            </li>
                            <li>
                                для просмотра и прослушивания видео, аудио ресурсов используется <a
                                    href="http://flash.flowplayer.org/" target="_blank">FlowPlayer</a>;
                            </li>
                            <li>
                                для просмотра видео с <a href="https://www.youtube.com/" target="_blank">YouTube</a>
                                используется класс
                                <a href="http://scripts.downloadroute.com/ProtoTube-f4dbde0a.html" target="_blank">ProtoTube</a>;
                            </li>
                            <li>
                                для отображения гео-координат используются Google карты
                                (<a href="https://developers.google.com/maps/documentation/javascript/3.exp/reference"
                                    target="_blank">JavaScript API V3</a>);
                            </li>
                            <li>
                                в гео-координатах можно размещать свои заметки и более подробную информацию о местности (фотографии, отчеты и т.д.);
                            </li>
                            <li>
                                ресурсы пользователя в виде изображений, документов, видео и аудио файлов можно загружать и просматривать с помощью веб файлового менеджера <a
                                    href="http://kcfinder.sunhater.com/" target="_blank">CKFinder</a>;
                            </li>
                            <li>
                                добавлены библиотеки такие как <a href="http://framework.zend.com/downloads/latest#ZF1"
                                                                  target="_blank">Zend-Framework 1</a>
                                (основная библиотека приложения), <a href="http://www.mpdf1.com/mpdf/index.php"
                                                                     target="_blank">mPDF</a>
                                (для создания отчетов в формате PDF), <a
                                    href="https://code.google.com/archive/p/phpquery/" target="_blank">phpQuery</a>
                                (CSS DOM селектор). Эти библиотеки находятся в папке <code>library</code>;
                            </li>
                            <li>также добавлены плагины для работы с массивами, строками, XML, HTTP и др. <code>application/plugins</code>;
                            </li>
                            <li>
                                добавлен модуль администрирования сайта <code>application/modules/admin</code>.
                                С помощью этого модуля можно управлять зарегистрированными пользователями, сообщениями
                                пользователей, конфигурировать приложение, а также использовать различные инструменты;
                            </li>
                            <li>
                                в модуле администрирования сайта можно просматривать и очищать логи ошибок,
                                сообщений и статистики. А также можно создавать отчеты в HTML и PDF форматах;
                            </li>
                            <li>
                                на стороне клиента используются библиотеки
                                <a href="http://prototypejs.org/" target="_blank">Prototype</a>,
                                <a href="http://madrobby.github.io/scriptaculous/" target="_blank">Scriptaculous</a>,
                                <a href="http://twbs.github.io/bootstrap/2.3.2/" target="_blank">Bootstrap 2</a>, а также сервисы
                                <a href="http://lokeshdhakar.com/projects/lightbox2/" target="_blank">Lightbox</a>,
                                <a href="http://highlightjs.readthedocs.org/en/latest/#" target="_blank">Highlight</a>,
                                <a href="http://pabloaravena.info/mytablegrid/index.html#" target="_blank">MyUi</a>,
                                <a href="http://prototype-window.xilinus.com/index.html" target="_blank">Prototype-window</a>,
                                <a href="https://github.com/deleteme/prototype-accordion" target="_blank">Prototype Accordion</a>,
                                <a href="http://miedlar.com/dev/carousel" target="_blank">Prototype Carousel</a>,
                                которые находятся в <code>public/js</code>.
                            </li>
                        </ul>
                        <h2>Установка</h2>
                        <h3>Предварительные требования</h3>
                        <ul>
                            <li><a href="http://php.net" target="_blank">PHP</a> version &gt;= 5.4</li>
                            <li>
                                веб сервер <a href="https://httpd.apache.org/download.cgi" target="_blank">Apache2</a>, <a
                                    href="http://nginx.org/ru/" target="_blank">Nginx</a> или похожие
                            </li>
                            <li><a href="https://getcomposer.org/" target="_blank">Composer</a></li>
                        </ul>
                        <h3>Развертывание</h3>
                        <ol>
                            <li>Клонировать <a href="https://github.com/bsa-git/zf-myblog" target="_blank">zf-myblog</a>
                                проект с помощью git.
                            </li>
                            <li>Выполнить <code>composer install</code>.</li>
                            <li>
                                Для работы приложения необходимо установить последнюю версию библиотеки
                                <code>Zend-Framework 1</code> в папку <code>library/Zend</code>. Последняя версия библиотеки
                                может быть загружена - <a href="http://framework.zend.com/downloads/latest#ZF1"
                                                          target="_blank">здесь</a>.
                            </li>
                            <li>
                                Для формирования отчетов в формате <code>PDF</code>
                                можно установить последнюю версию библиотеки
                                <code>mPDF</code> в папку <code>library/mPDF</code>. Последняя версия библиотеки может быть
                                загружена - <a href="http://www.mpdf1.com/mpdf/index.php?page=Download" target="_blank">здесь</a>.
                            </li>
                            <li>Сконфигурируйте веб сервер, чтобы точка входа была <code>public/index.php</code>.</li>
                            <li>
                                Установите, если необходимо, соответсвующие права на запись в <code>path/to/project/var</code>.
                            </li>
                            <li>Введите адрес сайта в броузер (пр. <a href="http://zf-myblog.ru/" target="_blank">http://zf-myblog.ru/</a>)
                            </li>
                        </ol>
                        <h2>Конфигурация</h2>
                        <h5>application.ini</h5>
                        <p>
                            В файле конфигурации созданы три раздела: <code>production</code>, <code>testing</code>, <code>development</code>. Разделы <code>testing</code>
                            и <code>development</code> используют общие настройки раздела <code>production</code>, а также могут иметь свои специфические настройки см. пр.1.
                        </p>
                        <kbd>пр.1</kbd>
                        <myblog-code1></myblog-code1>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import MyblogCode1 from '~components/portfolio/zf/myblog/code-1.vue'

    export default {
        components: {
            LinkToPortfolio,
            MyblogCode1
        },
        data() {
            return {
                title: 'ZF-MyBlog',
                description: 'Простое приложение реализующее управление блогом, разработанное на базе «Zend Framework-1».',
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

