<template>
    <v-card hover raised>
        <v-toolbar :class="`${theme.base} darken-3`" dark>
            <v-icon dark>mail</v-icon>
            <v-toolbar-title>Передать сообщение</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="body-2 secondary--text">
            <blockquote class="caution">
                Для передачи сообщения используется сервис Google ( <a href="https://mail.google.com" target="_blank">GMail</a>
                ).
                Чтобы использовать этот сервис нужно иметь аккаунт на Google.
                Если вы еще не имеете аккаунта, то его можно получить <a href="https://www.google.com/accounts"
                                                                         target="_blank">здесь</a>.
            </blockquote>
        </v-card-text>
        <!-- EMail Form  -->
        <form id="form-1" name="form-1" method="post"
              v-on:submit.prevent="submit">
            <v-card-text>
                <v-layout row>
                    <v-flex xs4>
                        <v-subheader>Имя*</v-subheader>
                    </v-flex>
                    <v-flex xs8>
                        <v-text-field
                                name="senderName"
                                label="Введите ваше имя"
                                v-model="senderName"
                                type="text"
                                :append-icon="errors.has('senderName') ? 'error' : 'done'"
                                v-bind:rules="[vSenderName]"
                                required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs4>
                        <v-subheader>Email*</v-subheader>
                    </v-flex>
                    <v-flex xs8>
                        <v-text-field
                                name="email"
                                label="Введите мой Email"
                                v-model="email"
                                type="text"
                                :append-icon="errors.has('email') ? 'error' : 'done'"
                                v-bind:rules="[vEmail]"
                                required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs4>
                        <v-subheader>Сообщение*</v-subheader>
                    </v-flex>
                    <v-flex xs8>
                        <v-text-field
                                name="message"
                                label="Введите сообщение"
                                v-model="message"
                                :append-icon="errors.has('message') ? 'error' : 'done'"
                                v-bind:rules="[vMessage]"
                                counter
                                max="120"
                                multi-line
                                required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs4>
                    </v-flex>
                    <v-flex xs8>
                        <small>* Указывает обязательное поле</small>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" v-show="!disabled" dark>Передать</v-btn>
                <v-btn type="reset" flat light @click.native="clearErrors">Очистить</v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {Validator} from 'vee-validate';
    import ruLocale from 'vee-validate/dist/locale/ru';
    import GMail from '~/plugins/lib/google/gmail.class'

    export default {
        // validator: null,
        props: [
            'theme',
            'propSenderName',
            'propEmail',
            'propMessage',
            'propValidEmails'
        ],
        data() {
            return {
                disabled: false,
                email: '',
                senderName: '',
                message: '',
                errors: null,
                validator: null
            }
        },
        created: function () {
            // Init validator
            this.iniValidator();
        },
        computed: {
            ...mapGetters({
                config: 'getConfig',
                apiGoogle: 'getGapi',
                isAuth: 'isAuth'
            })
        },
        watch: {
            propSenderName(value) {
                this.senderName = value
            },
            propEmail(value) {
                this.email = value
            },
            propMessage(value) {
                this.message = value
            },
            senderName(value) {
                this.validator.validate('senderName', value);
            },
            email(value) {
                this.validator.validate('email', value);
            },
            message(value) {
                this.validator.validate('message', value);
            }
        },
        methods: {
            iniValidator: function () {
                // Add dictionary
                const dictionary = {
                    ru: { messages: ruLocale.messages, attributes: ruLocale.attributes }
                }
                // Update dictionary
                Validator.updateDictionary(dictionary);
                // Set locale
                Validator.setLocale('ru');
                // Create Validator object
                this.validator = new Validator({
                    senderName: 'required|alpha_spaces',
                    email: `required|email|in:${this.propValidEmails}`,
                    message: 'required|max:120'
                });
                // Set errors
                this.$set(this, 'errors', this.validator.errors);
            },
            validateForm() {
                return this.validator.validateAll({
                    senderName: this.senderName,
                    email: this.email,
                    message: this.message
                });
            },
            clearErrors() {
                this.errors.clear();
                this.email = '';
                this.senderName = '';
                this.message = '';
            },
            vSenderName: function () {
                if (this.errors.has('senderName')) {
                    return this.errors.first('senderName')
                } else {
                    return true
                }
            },
            vEmail: function () {
                if (this.errors.has('email')) {
                    return this.errors.first('email')
                } else {
                    return true
                }
            },
            vMessage: function () {
                if (this.errors.has('message')) {
                    return this.errors.first('message')
                } else {
                    return true
                }
            },
            signIn: function () {
                const self = this
                return new Promise(function (resolve, reject) {
                    self.apiGoogle.signIn(() => {
                        const userInfo = self.apiGoogle.getCurrentUserInfo()
                        // Save to vuex
                        self.$store.commit('SET_TOKEN', userInfo.token)
                        self.$store.commit('SET_USER', userInfo)

                        if (self.config.debug) {
                            console.log('CurrentUser.info: ', userInfo)
                        }
                        resolve()
                    }, (error) => {
                        console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
                        reject(error)
                    })
                })
            },
            submit: function () {
                this.validateForm()
                    .then(result => {
                        if (result) {
                            if (this.config.debug) {
                                console.log('email.validateForm - OK')
                            }
                            if (this.isAuth) {
                                this.sendEmail()
                            } else {
                                this.signIn()
                                    .then(() => {
                                        this.sendEmail()
                                    })
                            }
                        } else {
                            console.log('email.validateForm - Error: ', this.errors.all())
                        }
                    })
                    .catch((ex) => {
                        console.log('email.validateForm - Catch: ', ex)
                        alert('Email validateForm - Catch: Correct them errors!')
                    })
            },
            sendEmail: function () {
                const {transliter} = require('transliter')
                try {
                    this.disabled = true
                    const gmail = new GMail({
                        to: this.email,
                        subject: 'Request for my resume',
                        message: `<h4><i>Отправитель: ${this.senderName}</i></h4><h3>Сообщение:</h3><p><strong>${this.message}</strong></p>`,
                        callback: this.composeTidy
                    })
                    gmail.send()
                } catch (e) {
                    this.$store.commit('SET_ERROR', e)
                    this.$router.replace('/error')
                }
            },
            composeTidy: function () {
                const self = this
                if (this.config.debug) {
                    console.log('SendEmail - OK: ', `toEmail="${this.email}"; `, `fromName="${this.senderName}"; `, `textEmail="${this.message}";`)
                }

                this.disabled = false
                this.clearErrors()
                window.setTimeout(function () {
                    self.clearErrors()
                    // Show message -> SendEmail - OK
                    self.$emit('onSendEmailSuccess')
                }, 500)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    input:error {
        background-color: #ffdddd;
    }

</style>