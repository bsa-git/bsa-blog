<template>
    <div>
        <div class="page-title text-xs-center">
            <div class="headline">{{ title }}</div>
            <div class="subheading">{{ description }}</div>
        </div>
        <v-layout column>
            <v-flex xs12 md10 offset-md1>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                            <contacts-email
                                    :theme="theme"
                                    :propSenderName="emailForm.senderName"
                                    :propEmail="emailForm.email"
                                    :propMessage="emailForm.message"
                                    :propValidEmails="`${info.contact.emailWork},${info.contact.emailPersonal}`"
                                    v-on:onSendEmailSuccess="onSendEmailSuccess"
                                    v-on:onNotification="onNotification"
                            ></contacts-email>
                        </v-flex>
                        <v-flex xs12 md5 offset-md1>
                            <contacts-info
                                    :theme="theme"
                                    :info="info.contact"
                                    v-on:onSelectEmail="onSelectEmail"
                            ></contacts-info>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
        <contacts-snackbar
                :snackbar="notification.show"
                :text="notification.text"
                :context="notification.type"
                v-on:onSnackbar="modelSnackbar"
        ></contacts-snackbar>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ContactsEmail from '~components/contacts/email.vue'
    import ContactsInfo from '~components/contacts/info.vue'
    import ContactsSnackbar from '~components/app/snackbar.vue'

    export default {
        components: {
            ContactsEmail,
            ContactsInfo,
            ContactsSnackbar
        },
        data() {
            return {
                title: 'Контакты',
                description: 'Связаться со мной',
                emailForm: {
                    email: '',
                    senderName: '',
                    message: ''
                },
                notification: {
                    show: false,
                    text: '',
                    type: 'success'
                }
            }
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.description}
                ],
                link: []
            }
        },
        fetch({store, error}) {
            try {
                store.commit('SET_THEME', 'about')
            } catch (e) {
                error(e)
            }
        },
        mounted: function () {
            const self = this
            this.$nextTick(function () {
                // Set senderName
                this.emailForm.senderName = this.auth.user ? this.auth.user.fullName : ''
                // Set email
                const contact = this.info.contact
                const email = contact.emailWork ? contact.emailWork : contact.emailPersonal ? contact.emailPersonal : ''
                this.emailForm.email = email
                // Set message
                this.emailForm.message = `Уважаемый ${this.info.contact.fullName}`

                // Subscribe to events
                this.$on('onNotification', function (msg) {
                    console.log('contacts.onNotification:', msg)
                })
            })
        },
        computed: {
            ...mapGetters({
                config: 'getConfig',
                theme: 'getTheme',
                info: 'getPersonalData',
                auth: 'getAuth',
                isAuth: 'isAuth'
            })
        },
        watch: {
            isAuth(value) {
                this.emailForm.senderName =  value ?  this.auth.user.fullName : ''
            }
        },
        methods: {
            onSelectEmail: function (email) {
                this.emailForm.email = email
            },
            onNotification: function (msg) {
                // Set params for snackbar
                this.notification.text = msg.text
                this.notification.type = msg.type
                this.notification.show = true
            },
            onSendEmailSuccess: function () {
                // Set params for snackbar
                this.notification.text = 'Сообщение передано успешно!'
                this.notification.type = 'success'
                this.notification.show = true

                // Set senderName
                this.emailForm.senderName = ''
                // Set email
                this.emailForm.email = ''
                // Set message
                this.emailForm.message = ''
            },
            modelSnackbar: function (newValue) {
                this.notification.show = newValue
            }
        }
    }
</script>