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
            <td><strong>config</strong>/mongod.config.yml</td>
            <td>Конфигурация для MongoDB.</td>
        </tr>
        <tr>
            <td><strong>config</strong>/passport.js</td>
            <td>Passport Local и OAuth стратегии, плюс логин middleware.</td>
        </tr>
        <tr>
            <td><strong>controllers</strong>/api.js</td>
            <td>Контроллер для /api маршрутизации и всех api примеров.</td>
        </tr>
        <tr>
            <td><strong>controllers</strong>/contact.js</td>
            <td>Котроллер для работы с формой контактов.</td>
        </tr>
        <tr>
            <td><strong>controllers</strong>/home.js</td>
            <td>Контроллер для домашней страницы (home).</td>
        </tr>
        <tr>
            <td><strong>controllers</strong>/index.js</td>
            <td>Привязка контроллеров к маршрутам.</td>
        </tr>
        <tr>
            <td><strong>controllers</strong>/user.js</td>
            <td>Контроллер для управления учетными записями пользователей.</td>
        </tr>
        <tr>
            <td><strong>data</strong>/<strong>db</strong>/<strong>mongod</strong></td>
            <td>Папка расположения базы данных MongoDB.</td>
        </tr>
        <tr>
            <td><strong>data</strong>/<strong>log</strong>/<strong>mongod</strong></td>
            <td>Папка расположения логов для базы данных MongoDB.</td>
        </tr>
        <tr>
            <td><strong>data</strong>/<strong>uploads</strong></td>
            <td>Папка для загрузки файлов.</td>
        </tr>
        <tr>
            <td><strong>models</strong>/index.js</td>
            <td>Соединение с базой данных MongoDB.</td>
        </tr>
        <tr>
            <td><strong>models</strong>/User.js</td>
            <td>Mongoose схема и модель для пользователя.</td>
        </tr>
        <tr>
            <td><strong>public</strong>/</td>
            <td>Папка для публичных данных (css, js, images).</td>
        </tr>
        <tr>
            <td><strong>views/account</strong>/</td>
            <td>Шаблон для <em>изменения данных профайла, изменения пароля, удаления аккаунта, добавление ссылок на другие аккаунты.</em>.
            </td>
        </tr>
        <tr>
            <td><strong>views/api</strong>/</td>
            <td>Шаблон для тестирования API различных сервисов.</td>
        </tr>
        <tr>
            <td><strong>views/partials</strong>/flash.pug</td>
            <td>Шаблон для отображения предупреждений об ошибках, информации и успешного завершения операции.</td>
        </tr>
        <tr>
            <td><strong>views/partials</strong>/header.pug</td>
            <td>Шаблон для отображения верхнего меню.</td>
        </tr>
        <tr>
            <td><strong>views/partials</strong>/footer.pug</td>
            <td>Шаблон для отображения нижнего колонтитула.</td>
        </tr>
        <tr>
            <td><strong>views</strong>/contact.pug</td>
            <td>Шаблон формы контактов.</td>
        </tr>
        <tr>
            <td><strong>views</strong>/error.pug</td>
            <td>Шаблон для отображения ошибок.</td>
        </tr>
        <tr>
            <td><strong>views</strong>/home.pug</td>
            <td>Шаблон для отображения домашней страницы.</td>
        </tr>
        <tr>
            <td><strong>views</strong>/layout.pug</td>
            <td>Шаблон основного макета.</td>
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
            <td>app.js</td>
            <td>Главный файл приложения.</td>
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
            <td>server.js</td>
            <td>Запуск локального сервера.</td>
        </tr>
        </tbody>
    </table>
</template>