<template>

    <v-card hover raised>
        <v-toolbar :class="`${theme.base} darken-3`" dark>
            <v-icon dark>mail</v-icon>
            <v-toolbar-title>Передать сообщение</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="body-2 secondary--text">
            <blockquote>
                Передайте сообщение (не более 120 символов) на мой электронный адрес. Электронный адрес можно посмотреть на панели справа.
            </blockquote>
        </v-card-text>
        <!-- EMail Form  -->
        <form id="form-1" name="form-1" :action="params.url" method="post"
              v-on:submit.prevent="submit('form-1')">
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
                <v-btn type="submit" dark>Передать</v-btn>
                <v-btn type="reset" flat light @click.native="clearErrors">Очистить</v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {Validator} from 'vee-validate';
    import axios from 'axios'
    import qs from 'qs'
    import cheerio from 'cheerio'
    import configGapi from '~/plugins/lib/gapi/auth.json'
    import LoadGoogleAPI from '~/plugins/lib/gapi/gapi.class'


    export default {
        validator: null,
        props: [
            'theme',
            'params'
        ],
        data() {
            return {
                password: '',
                email: '',
                senderName: '',
                message: '',
                errors: null
            }
        },
        created: function () {
            // Ini validator
            this.iniValidator();
            // Check error
            if (this.isError) {
                this.$emit('onErrLogin', {errors: [this.storeError.message]})
            }
            // Check authenticated
            if (this.isAuthenticated) {
                this.$emit('onAuthenticated', this.auth)
            }

//            console.log(qs.parse(configGapi))
            const options = qs.parse(configGapi);
            const apiGoogle = new LoadGoogleAPI(options);
            apiGoogle.loadGoogleAPI().then(function () {
                apiGoogle.init();
            });

        },
        computed: {
            ...mapGetters({
                isError: 'isError',
                storeError: 'getError',
                isAuthenticated: 'isAuthenticated',
                auth: 'getAuth'
            })
        },
        watch: {
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
                this.validator = new Validator({
                    senderName: 'required|alpha_spaces',
                    email: 'required|email',
                    message: 'required|max:120'
                });
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
            submit: function (name) {
                const self = this;
                let formData;
                //-----------------
                this.validateForm().then(result => {
                    if (result) {
                    } else {
                        this.$emit('onErrLogin', {errors: this.errors.all()})
                    }
                }).catch(() => {
                    alert('Correct them errors!')
                })
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
    input:error {
        background-color: #ffdddd;
    }

</style>