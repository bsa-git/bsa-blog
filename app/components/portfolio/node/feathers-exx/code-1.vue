<template>
    <table>
        <thead>
        <tr>
            <th>Имя файла</th>
            <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><strong>client</strong>/<strong>public</strong></td>
            <td>Папка для публичных данных (css, js, images).</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/app.client.js</td>
            <td>Основная точка входа клиентского приложения.</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/client.class.js</td>
            <td>Client класс</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/polyfills.js</td>
            <td>Модуль где собраны необходимые полифилы для клиента</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/<strong>controllers</strong></td>
            <td>Папка с контроллерами для клиента.</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/<strong>plugins</strong></td>
            <td>Папка с плагинами для клиента.</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/<strong>routes</strong></td>
            <td>Папка с роутерами для клиента.</td>
        </tr>
        <tr>
            <td><strong>client</strong>/<strong>scr</strong>/<strong>js</strong>/<strong>tmpls</strong></td>
            <td>Папка с шаблонами для клиента.</td>
        </tr>
        <tr>
            <td><strong>config</strong>/<strong>db</strong>/mongod.config.yml</td>
            <td>Конфигурация базы данных MongoDB.</td>
        </tr>
        <tr>
            <td><strong>config</strong>/<strong>db</strong>/rethinkdb.config</td>
            <td>Конфигурация базы данных RethinkDB.</td>
        </tr>
        <tr>
            <td><strong>config</strong>/default.json</td>
            <td>Конфигурация приложения по умолчанию.</td>
        </tr>
        <tr>
            <td><strong>config</strong>/production.json</td>
            <td>Конфигурация приложения в режиме "Production".</td>
        </tr>
        <tr>
            <td><strong>plugins</strong>/utils.class.js</td>
            <td>Utils класс для общих функций сервера и клиента.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/app.server.js</td>
            <td>Модуль инициализации серверного приложения.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/start.js</td>
            <td>Основная точка входа серверного приложения.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>boot</strong></td>
            <td>Папка с модулями промежуточных обработчиков для инициализации сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>controllers</strong></td>
            <td>Папка с контроллерами для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>data</strong>/<strong>db</strong></td>
            <td>Папка с базами данных: MongoDB, NeDB, RethinkDB, Sqlite3.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>data</strong>/<strong>log</strong></td>
            <td>Папка c логами для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>hooks</strong></td>
            <td>Папка с "Hooks" для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>middleware</strong></td>
            <td>Папка с "middleware" для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>plugins</strong></td>
            <td>Папка с плагинами для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>routes</strong></td>
            <td>Папка с роутерами для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>services</strong></td>
            <td>Папка с сервисами для сервера.</td>
        </tr>
        <tr>
            <td><strong>server</strong>/<strong>views</strong></td>
            <td>Папка с шаблонами для сервера.</td>
        </tr>
        <tr>
            <td><strong>validations</strong></td>
            <td>Папка со схемами валидации для сервера и клиента.</td>
        </tr>
        <tr>
            <td>.env</td>
            <td>Ваши реальные API ключи, уникальные данные, пароли и  URI базы данных.</td>
        </tr>
        <tr>
            <td>.env.example</td>
            <td>Примеры API ключей, уникальных данных, паролей и  URI базы данных.</td>
        </tr>
        <tr>
            <td>.gitignore</td>
            <td>Папки и файлы, которые будут игнорироваться системой управления версиями <strong>Git</strong>.</td>
        </tr>
        <tr>
            <td>package.json</td>
            <td>NPM зависимости.</td>
        </tr>
        <tr>
            <td>package-lock.json</td>
            <td>Содержит точные версии зависимостей NPM в package.json.</td>
        </tr>
        <tr>
            <td>Procfile</td>
            <td>Файл для конфигурации хостинга "Heroku".</td>
        </tr>
        <tr>
            <td>README.md</td>
            <td>Информация о приложении.</td>
        </tr>
        <tr>
            <td>webpack.config.js</td>
            <td>Конфигурация для WebPack.</td>
        </tr>
        </tbody>
    </table>
</template>