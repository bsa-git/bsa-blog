<template>
    <v-layout row wrap>
        <v-flex xs12 sm9 offset-sm1>
            <div class="page-title text-xs-center">
                <div class="headline">{{ title }}</div>
                <div class="subheading">{{ description }}</div>
            </div>
            <p class="date-publication">2018-06-20</p>
            <v-card class="blog-post">
                <v-card-text>
                    <link-to-portfolio></link-to-portfolio>
                    <section>
                        <h1>Введение.</h1>
                        <p>
                            Этот проект был написан чтобы продемонстрировать пользовательскую аутентификацию и авторизацию с помощью различных методов.
                            Эти методы были реализованы с помощью различных стратегий <a
                                href="http://www.passportjs.org/" target="_blank">Passport.js</a>.
                            Таких как <a href="http://www.passportjs.org/docs/username-password/">Local</a>
                            стратегия (использующая <strong>username и password</strong>).
                            А также другие стратегии такие как <a href="http://www.passportjs.org/docs/facebook/">Facebook</a>, <a
                                href="http://www.passportjs.org/docs/twitter/">Twitter</a>
                            и <a href="http://www.passportjs.org/packages/">многие другие.</a>.
                            При разработке своего проекта я использовал основные идеи из приложения <a
                                href="https://github.com/sahat/hackathon-starter" target="_blank">Hackathon-starter</a>.
                        </p>
                        <p class="subheading">
                            <strong>
                                Этот проект на <strong>GitHub</strong> можно посмотреть <a
                                    href="https://github.com/bsa-git/express-passport" target="_blank">здесь</a>
                            </strong>
                        </p>
                        <p class="subheading">
                            <strong>
                                Демонстрацию этого проекта можно посмотреть <a
                                    href="http://express-passport-exx.herokuapp.com/" target="_blank">здесь</a>
                            </strong>
                        </p>
                    </section>
                    <section>
                        <h2>Обзор</h2>
                        <p>
                            <em>Простая, ненавязчивая аутентификация для Node.js — </em><a href="http://passportjs.org"
                                                                                           target="_blank"><em>passportjs.org</em></a>.
                            <em>PassportJS — это middleware для авторизации под node.js. Passport поддерживает авторизацию с помощью огромного количества сервисов,
                                включая «ВКонтакте» и прочие твиттеры. Список сервисов можно просмотреть <a
                                        href="http://www.passportjs.org/packages/" target="_blank">здесь.</a></em>
                        </p>
                        <h3>Возможности</h3>
                        <ul>
                            <li><strong>Local Authentication</strong> используя Email и Password</li>
                            <li><strong>OAuth 1.0a Authentication</strong> через Twitter</li>
                            <li><strong>OAuth 2.0 Authentication</strong>
                                через Facebook, Google, GitHub, LinkedIn, Instagram
                            </li>
                            <li>Flash сообщения</li>
                            <li>MVC структура приложения</li>
                            <li>Bootstrap 3 + jQuery</li>
                            <li>Контактная форма (для передачи почты используется сервис <a
                                    href="https://sendgrid.com/">Sendgrid</a>)
                            </li>
                            <li>Управление Аккаунтами</li>
                            <li>Gravatar</li>
                            <li>Профайл Детали</li>
                            <li>Изменить Пароль</li>
                            <li>Забыли Пароль</li>
                            <li>Сбросить Пароль</li>
                            <li>Подключение мульти OAuth стратегий к одному аккаунту</li>
                            <li>Удалить Аккаунт</li>
                            <li>CSRF защита</li>
                            <li><strong>API Примеры</strong>: Facebook, Foursquare, Last.fm, Tumblr, Twitter, Stripe, LinkedIn и т.д.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Ресурсы</h2>
                        <dl>
                            <dt><strong>Node.js (Chrome's V8 JavaScript engine)</strong></dt>
                            <dd><a href="https://nodejs.org/en/docs/" target="_blank">Документация</a></dd>
                            <dt><strong>Express (Node.js framework)</strong></dt>
                            <dd><a href="http://expressjs.com/en/guide/routing.html" target="_blank">Документация</a>
                            </dd>
                            <dd><a href="http://expressjs.com/en/4x/api.html" target="_blank">API</a></dd>
                            <dt><strong>Passport.js</strong></dt>
                            <dd><a href="http://www.passportjs.org/docs/" target="_blank">Документация</a></dd>
                            <dt><strong>jQuery</strong></dt>
                            <dd><a href="http://learn.jquery.com/" target="_blank">Документация</a></dd>
                            <dt><strong>Bootstrap 3</strong></dt>
                            <dd><a href="https://getbootstrap.com/docs/3.3/" target="_blank">Документация</a></dd>
                            <dt><strong>Font Awesome - the iconic font and CSS toolkit</strong></dt>
                            <dd><a href="https://fontawesome.com/icons?d=gallery" target="_blank">Icons</a></dd>
                            <dt><strong>MongoDB (noSQL DataBase)</strong></dt>
                            <dd><a href="https://docs.mongodb.com/" target="_blank">Документация</a></dd>
                            <dd><a href="https://cloud.mongodb.com/user#/atlas/login" target="_blank">Atlas (облачный хостинг)</a>
                            </dd>
                            <dd><a href="https://mlab.com/home" target="_blank">mLab (облачный хостинг 500MB FREE)</a>
                            </dd>
                            <dd><a href="https://docs.mongodb.com/compass/current/" target="_blank">Сompass (инструмент для визуализации данных)</a>
                            </dd>
                            <dd><a href="http://mongoosejs.com/docs/guide.html" target="_blank">Mongoosejs (NPM компонент для работы с моделями базы данных)</a>
                            </dd>
                            <dt><strong>Интересные статьи</strong></dt>
                            <dd>
                                <a href="https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619"
                                   target="_blank">Authenticating Node.js Applications With Passport</a></dd>
                            <dd><a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local"
                                   target="_blank">Easy Node Authentication</a></dd>
                            <dd><a href="http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/"
                                   target="_blank">How To Implement Password Reset In Node.js</a></dd>
                            <dd><a href="https://habr.com/company/ruvds/blog/335434/" target="_blank">Аутентификация в Node.js. Учебные руководства и возможные ошибки</a>
                            </dd>

                        </dl>
                    </section>
                    <section>
                        <h2>Установка приложения</h2>
                        <h3>Предварительные требования</h3>
                        <ol>
                            <li>
                                <p>
                                    Убедитесь в том, что у вас установлен <a href="https://nodejs.org/">NodeJS 8.0+</a>
                                    и
                                    <a href="https://www.mongodb.org/downloads">MongoDB</a>.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Клонируйте или загрузите <a href="https://github.com/bsa-git/express-passport">express-passport</a>
                                    проект с GitHub.
                                </p>
                            </li>
                            <li>
                                Инсталируйте ваши зависимости
                                <pre><code
                                        class="bash">cd &lt;project-name&gt; npm install # Or yarn install</code></pre>
                            </li>
                        </ol>
                        <h3>Переменные окружения</h3>
                        <p>
                            Файл <code>.env</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>.env.example</code>, иначе приложение будет
                            выдавать ошибку. Файл <code>.env</code> устанавливает переменные окружения.
                            В переменных окружения обычно указываются секретные данные пользователя например
                            <em><strong>user_id</strong></em>, <em><strong>user_secret</strong></em> и т.д.
                        </p>

                        <h3>Запуск вашего проекта</h3>
                        <h4>Development</h4>
                        <pre><code class="bash">npm run dev</code></pre>
                        <p>
                            Приложение будет запущено в режиме <strong>Разработки</strong> и будет выполнятся на
                            <a href="http://localhost:3000">http://localhost:3000</a>
                        </p>
                        <h4>Production</h4>
                        <pre><code class="bash">npm start</code></pre>
                        <p>
                            Приложение будет запущено в <strong>Рабочем</strong> режиме и будет выполнятся на
                            рабочем хостинге пример можно посмотреть <a
                                href="http://express-passport-exx.herokuapp.com/" target="_blank">здесь</a>
                        </p>
                    </section>
                    <section>
                        <h2>Структура приложения</h2>

                        <h3>Файловая структура</h3>
                        <kbd>пр.1</kbd>
                        <express-passport-code1></express-passport-code1>
                        <p><em>
                            <strong>Замечание: </strong>Здесь представлен мой вариант организации структуры приложения.
                            Вы можете изменять структуру приложения по своему усмотрению...</em></p>

                        <h3>Список <strong>NPM</strong> пакетов</h3>
                        <kbd>пр.2</kbd>
                        <express-passport-code2></express-passport-code2>

                        <h3>Конфигурация</h3>
                        <h4>.env</h4>
                        <p>
                            Файл <code>.env</code> должен находиться в корне проекта, если он отсутствует, то его
                            нужно создать на основе примера файла <code>.env.example</code>, иначе приложение будет
                            выдавать ошибку. Файл <code>.env</code> устанавливает переменные окружения.
                            В переменных окружения обычно указываются секретные данные пользователя например
                            <em><strong>user_id</strong></em>, <em><strong>user_secret</strong></em> и т.д.
                        </p>
                        <kbd>пр.3 для .env.example</kbd>
                        <express-passport-code3></express-passport-code3>
                        <p><em>
                            <strong>Замечание: </strong>
                            Чтобы иметь реальные ключи для доступа к API различных сервисов нужно зарегистрировать ваше приложение
                            в этих сервисах. Примеры регистрации приложения и получения ключей API в разных сервисах
                            можно посмотреть <a href="https://github.com/sahat/hackathon-starter#obtaining-api-keys"
                                                target="_blank">здесь</a>.
                        </em></p>
                    </section>
                    <section>
                        <h2>Работа приложения</h2>
                        <ul>
                            <li>
                                В приложении я использую базу данных MongoDB. Можно <a
                                    href="https://www.mongodb.com/download-center#community" target="_blank">установить MongoDB</a>
                                локально на компьютер
                                или использовать MongoDB на облачном хостинге <a href="https://cloud.mongodb.com/"
                                                                                 target="_blank">Atlas</a> или <a
                                    href="https://mlab.com/home" target="_blank">mLab</a>.
                            </li>
                            <li>
                                Чтобы тестировать в приложении возможность логирования с помощью таких сервисов как
                                Facebook, Google, GitHub, LinkedIn, Instagram и т.д. нужно быть там зарегистрированным и иметь свой аккаунт.
                            </li>
                            <li>
                                Если вы разработчик и хотите создавать приложения с возможностью логирования и доступа других пользователей
                                к API различных сервисов, нужно зарегистрировать ваше приложение
                                в этих сервисах. Примеры регистрации приложения и получения ключей API в разных сервисах
                                можно посмотреть <a href="https://github.com/sahat/hackathon-starter#obtaining-api-keys"
                                                    target="_blank">здесь</a>
                            </li>
                            <li>
                                Для передачи почтовых сообщений я пользуюсь сервисом <a href="https://app.sendgrid.com"
                                                                                        target="_blank">SendGrid</a>.
                                Этот сервис дает возможность передавать бесплатно до 100 сообщений в день, но для этого нужно зарегистрироваться в нем
                                и получить <strong>SENDGRID_API_KEY</strong>.
                                <p><em>
                                    <strong>Замечание: </strong>
                                    Для безопасности этот сервис предлагает включать в свой белый список те <strong>IP</strong>
                                    адреса с которых вы хотите передавать сообщения.
                                    Важно, чтобы ваш <strong>IP</strong>
                                    был постоянен, иначе передача сообщений будет не возможна...
                                </em></p>
                            </li>
                            <li>Для построения пользовательского интерфейса используется <a
                                    href="https://getbootstrap.com/docs/3.3/" target="_blank">Bootstrap 3</a>, это один из популярных HTML, CSS,
                                и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.
                            </li>
                        </ul>

                        <h3>Mongoose модель для аккаунтов пользователей</h3>

                        <p>
                            Аккаунты зарегистрированных пользователей храняться в базе данных <strong>MongoDB</strong>
                            в таблице <strong>Users</strong>.
                            Структрура таблицы задается схемой <strong>userSchema</strong>
                            в модуле <code>models/User.js</code> см. пр.4
                        </p>
                        <kbd>пр.4</kbd>
                        <express-passport-code4></express-passport-code4>
                        Из структуры модели <code>models/User.js</code>
                        видно, что каждый аккаунт пользователя должен иметь обязательное уникальное поле
                        адреса <strong>Email</strong>.
                        <p>Создать аккаунт пользователя можно двумя способами:</p>
                        <ul>
                            <li>
                                Через форму <strong>Create Account</strong> например по <a
                                    href="http://express-passport-exx.herokuapp.com/signup" target="_blank">адресу</a>.
                                В форме вы вводите адрес электронной почты и ваш пароль и если ваш <strong>email</strong>
                                будет уникальным, то
                                в базе создается запись с вашим аккаунтом с полями <strong>email</strong> и <strong>password</strong>
                            </li>
                            <li>
                                Через форму <strong>Login</strong> например по <a
                                    href="http://express-passport-exx.herokuapp.com/login" target="_blank">адресу</a>.
                                В форме из списка вы выбираете сервис (Facebook, Google, LinkedIn...) и если этот сервис не
                                присоединен к вашему уже существующему аккаунту и в этом сервисе, указанный <strong>email</strong>
                                отличается от других электронных адресов, существующих аккаунтов, тогда создается новый
                                аккаунт с электронным адресом этого сервиса и полем с названием этого сервиса со значением его <strong>id</strong>
                                например <code>instagram: "2000082009", email: "my@instagram.com"</code>.
                                <p>При этом также из этого сервиса регистрируемый пользователь получаем данные для
                                    своего профайла в поле <strong>profile</strong> и получает ключи доступа к
                                    своему <strong>API</strong> в поле <strong>tokens</strong>.</p>
                            </li>
                        </ul>
                        <p>
                            Также в структуре модели мы видим два поля <code>passwordResetToken: String, passwordResetExpires: Date</code>,
                            которые используются при алгоритме восстановления пароля, когда пользователь забывает свой пароль.
                            а параметр <code>{timestamps: true}</code>
                            указывает модели чтобы она создавала поля даты создания и изменения аккаунта
                            например <code>createdAt: 2018-06-19 11:18:12.867, updatedAt: 2018-06-23 08:39:29.442</code>.
                        </p>
                        <p>
                            В существующий аккаунт пользователя можно присоединить другие сервисы, по которым можно входить
                            через этот аккаунт при логировании пользоватея. Для этого когда пользователь уже вошел под своим аккаунтом
                            через форму логирования нужно через меню <strong>My Account</strong>
                            открыть форму своего профайла
                            например по <a href="http://express-passport-exx.herokuapp.com/account" target="_blank">адресу</a>.
                            В этой форме можно изменить данные своего профайла, изменить пароль, если он существует,
                            удалить свой аккаут или присоедить к своему аккаунту сервис, с помощью которого можно входить
                            через этом аккаут при логировании. В нижней части формы существует список сервисов, которые можно
                            присоединить к текущему аккаунту.
                        </p>
                        <p><em>
                            <strong>Замечание: </strong>
                            Присоединить к текущему аккаунту можно только такой сервис, который еще не был присоединен к нашим
                            другим аккаунтам, т.е. выбранный сервис может быть присоединен к аккаунту только один раз.
                        </em></p>
                        <p>
                            При присоединении сервиса к аккаунту появляется поле этого сервиса с его <strong>id</strong>,
                            например <code>google: "110341449488589699610"</code>, и в поле <strong>tokens</strong>
                            получаем ключи доступа к
                            <strong>API</strong> этого сервиса, например <code>tokens:[{kind: "google", accessToken: "ya29.xxx..."}]</code>
                            А также из этого сервиса получаем данные профайла в поле <strong>profile</strong>
                            значения которых были пустыми.
                        </p>
                        <p>
                            Таким образом при присоединении к аккаунту дополнительных сервисов есть возможность логироваться в этот аккаунт через разные
                            сервисы, которые были присоединены к этому аккаунту.
                        </p>
                        <p>
                            Иногда возникает необходимость для некоторого сервиса просто сохранить коды доступа к его <strong>API</strong>
                            в поле <strong>tokens</strong>
                            в текущем аккаунте, при этом этот сервис не учавствует в аутентификации пользователя
                            а используется только для доступа к своим ресурсам через свои <strong>tokens</strong>. Такой подход
                            применяется для некоторых примеров <strong>API</strong>
                            в модуле <code>controllers/api.js</code>.
                        </p>

                        <h3>Стратегии Passport.js</h3>

                        Существует множество стратегий для <strong>Passport.js</strong> которые можно посмотреть
                        <a href="http://www.passportjs.org/packages/" target="_blank">здесь</a>. В нашем проекте стратегии реализованы
                        в модуле <code>config/pasport.js</code>. Рассмотрим основные из них.
                        <h4>Local</h4>
                        Стратегия <strong>Local</strong> использует <strong>email</strong> и <strong>password</strong>
                        при аутентификации пользователя.
                        <p><kbd>пр.5</kbd></p>
                        <express-passport-code5></express-passport-code5>
                        Логика такая: пользователь передает свой <strong>email</strong> и <strong>password</strong>
                        стратегия ищет аккаунт по переданному <strong>email</strong>, если не находит - выдает ошибку <code>Email not found.</code>.
                        Если находит, то сравнивает полученный <strong>password</strong> с существующим, если <strong>password</strong>
                        отличается - выдает ошибку <code>Invalid email or password</code>. Если <strong>password</strong> совпадает,
                        то выдается положительный результат и происходит аутентификация пользователя.

                        <h4>GitHub</h4>
                        Стратегия <strong>GitHub</strong> и другие стратегии которые используются при аутентификации и авторизации пользователя.
                        <p><kbd>пр.6</kbd></p>
                        <express-passport-code6></express-passport-code6>
                        Логика такая: пользователь аутентифицируется на сервисе <strong>GitHub</strong>
                        если аутентификация прошла успшно,
                        то получает от сервиса (<strong>accessToken, refreshToken, profile</strong>).
                        <p>
                            Если пользователь уже прошел аутентификацию на сайте, то по полю <code>github: profile.id</code>
                            в базе данных ищется соответствующий аккаунт пользователя. Если аккаунт с таким пользователем найден, то выдается
                            ошибка <code>There is already a GitHub account that belongs to you. Sign in with that account or delete it, then link it with your current account.</code>
                            Это значит, что такой сервис может идентифицироваться только с одним аккаунтом. Если аккаунт не найден,
                            то в него добавляется поле <code>github = profile.id</code>, в поле <strong>tokens</strong>
                            добавляется обьект <code>{kind: 'github', accessToken}</code>, а в поле <strong>profile</strong>
                            добавляются отсутствующие значения полей <strong>name, picture, location, website</strong>.
                        </p>
                        <p>
                            Если пользователь не прошел аутентификацию на сайте, то по полю <code>github: profile.id</code>
                            в базе данных ищется соответствующий аккаунт пользователя. Если аккаунт с таким пользователем найден, то
                            выдается положительный результат и происходит аутентификация пользователя на сайте.
                            Если аккаунт с таким пользователем  не найден, то по полю <code>email: profile._json.email</code>
                            в базе данных ищется соответствующий аккаунт пользователя. Если аккаунт с <strong>email</strong> найден, то выдается
                            ошибка <code>There is already an account using this email address. Sign in to that account and link it with GitHub manually from Account Settings.</code>.
                            Это значит, что значение <strong>email</strong> должно быть уникальным для всех зарегистрированных аккаунтах.
                            Если аккаунт с <strong>email</strong> не найден, то создается новый аккаунт с уникальным полем <code>email = profile._json.email</code>
                            в аккаунт добавляется поле <code>github = profile.id</code>, в поле <strong>tokens</strong> аккаунта
                            добавляется обьект <code>{kind: 'github', accessToken}</code>, а в поле <strong>profile</strong> аккаунта
                            добавляются значения полей <strong>name, picture, location, website</strong>.
                        </p>
                        <h4>OAuth</h4>
                        Стратегия <strong>OAuth</strong> которя используются только при авторизации пользователя.
                        <p><kbd>пр.7</kbd></p>
                        <express-passport-code7></express-passport-code7>
                        Логика такая: стратегия используется чтобы сохранить ключи доступа (<strong>accessToken, tokenSecret</strong>)
                        к <strong>API</strong> соответствующего сервиса в текущем аккаунте, в поле <strong>tokens</strong> аккаунта
                        добавляется обьект <code>{kind: 'tumblr', accessToken: token, tokenSecret}</code>.
                        <h4>OAuth2</h4>
                        Стратегия <strong>OAuth2</strong> которя используются только при авторизации пользователя.
                        <p><kbd>пр.8</kbd></p>
                        <express-passport-code8></express-passport-code8>
                        Логика такая: стратегия используется чтобы сохранить ключи доступа (<strong>accessToken</strong>)
                        к <strong>API</strong> соответствующего сервиса в текущем аккаунте, в поле <strong>tokens</strong> аккаунта
                        добавляется обьект <code>{kind: 'pinterest', accessToken}</code>.

                        <h3>Gravatar ( <a href="https://ru.wikipedia.org/wiki/Gravatar" target="_blank">globally recognized avatar</a>  — глобально распознаваемый аватар)</h3>
                        Это Web 2.0 сервис, позволяющий интернет-пользователям хранить свой аватар на специальном сервере.
                        Пользователь регистрируется на центральном сервере и сохраняет там свой аватар и адрес электронной почты.
                        Когда он оставляет комментарий на сайте или блоге, поддерживающем Gravatar, и указывает свой адрес
                        электронной почты, на стороне сайта вычисляется MD5-хэш от почтового адреса и отправляется на сервер
                        Gravatar, в ответ возвращается аватар пользователя. Таким образом система Gravatar позволяет
                        использовать аватары без регистрации на сайте или блоге.
                        <p>
                            В приложении эта возможность реализована как метод модели <strong>User</strong>
                            в модуле <code>models/User.js</code> см. пр.9
                        </p>
                        <kbd>пр.9</kbd>
                        <express-passport-code9></express-passport-code9>
                        <h3>Передача Email</h3>
                        Для передачи почтовых сообщений я пользуюсь сервисом <a href="https://app.sendgrid.com"
                                                                                target="_blank">SendGrid</a>.
                        Этот сервис дает возможность передавать бесплатно до 100 сообщений в день, но для этого нужно зарегистрироваться в нем
                        и получить <strong>SENDGRID_API_KEY</strong>.
                        <p><em>
                            <strong>Замечание: </strong>
                            Для безопасности этот сервис предлагает включать в свой белый список те <strong>IP</strong>
                            адреса с которых вы хотите передавать сообщения.
                            Важно, чтобы ваш <strong>IP</strong>
                            был постоянен, иначе передача сообщений будет не возможна...
                        </em></p>
                        <p>
                            В приложении эта возможность реализована как метод контроллера <strong>postContact</strong>
                            в модуле <code>controllers/contact.js</code> см. пр.10
                        </p>
                        <kbd>пр.10</kbd>
                        <express-passport-code10></express-passport-code10>
                    </section>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Highlight from '~/plugins/lib/highlight/highlight.class'
    import LinkToPortfolio from '~components/portfolio/link-to-portfolio.vue'
    import ExpressPassportCode1 from '~components/portfolio/node/express-passport/code-1.vue'
    import ExpressPassportCode2 from '~components/portfolio/node/express-passport/code-2.vue'
    import ExpressPassportCode3 from '~components/portfolio/node/express-passport/code-3.vue'
    import ExpressPassportCode4 from '~components/portfolio/node/express-passport/code-4.vue'
    import ExpressPassportCode5 from '~components/portfolio/node/express-passport/code-5.vue'
    import ExpressPassportCode6 from '~components/portfolio/node/express-passport/code-6.vue'
    import ExpressPassportCode7 from '~components/portfolio/node/express-passport/code-7.vue'
    import ExpressPassportCode8 from '~components/portfolio/node/express-passport/code-8.vue'
    import ExpressPassportCode9 from '~components/portfolio/node/express-passport/code-9.vue'
    import ExpressPassportCode10 from '~components/portfolio/node/express-passport/code-10.vue'

    export default {
        components: {
            LinkToPortfolio,
            ExpressPassportCode1,
            ExpressPassportCode2,
            ExpressPassportCode3,
            ExpressPassportCode4,
            ExpressPassportCode5,
            ExpressPassportCode6,
            ExpressPassportCode7,
            ExpressPassportCode8,
            ExpressPassportCode9,
            ExpressPassportCode10
        },
        data() {
            return {
                title: 'Passport for Node.js',
                description: 'Примеры аутентификации/авторизации пользователя.',
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

